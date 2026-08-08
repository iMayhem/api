#!/usr/bin/env node
/**
 * vidsrcme.ru scraper
 *
 * Crawls the VidSrc catalogue feeds and resolves direct stream URLs:
 *   - /movies/latest/page-{N}.json  - latest movies
 *   - /tvshows/latest/page-{N}.json - latest TV shows
 *   - /episodes/latest/page-{N}.json - latest episodes
 *   - /ids/*.txt                     - full ID lists (one per line)
 *
 * Stream resolution flow (mirrors the site's own player):
 *   1. GET https://data.vidsrcme.ru/api.php?type=movie&tmdb=...&stream_urls
 *   2. data.stream_urls is an encrypted base64 ChaCha20 blob; the response also
 *      carries vs: { w, wasm_url } — a per-window WASM decryptor (see vsdec.js).
 *   3. Instantiate the WASM in Node, call alloc/decrypt, read the plaintext:
 *      one direct m3u8/mp4 URL per line.
 *   4. If the stream host needs it, fetch {origin}/generate.php for an IP-bound
 *      token and stamp it onto the URL (__TOKEN__ -> token, else ?token=).
 *
 * TMDB id is used by default everywhere; IMDB is used only as a fallback
 * (or when you pass a tt... id yourself).
 *
 * Usage:
 *   node scraper.js resolve 385687
 *   node scraper.js resolve 1399 1 1
 *   node scraper.js crawl --type movie --max-pages 3 --out catalog.jsonl
 *   node scraper.js scrape --type movie --max-pages 2 --concurrency 4 --out streams.jsonl
 *   node scraper.js ids
 */
'use strict';

const { readFileSync, existsSync, appendFileSync } = require('node:fs');
const { writeFile } = require('node:fs/promises');

const API   = 'https://data.vidsrcme.ru';
const HOME  = 'https://vidsrcme.ru';
const UA    = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

const args = process.argv.slice(2);
const cmd  = args.shift() || 'help';
const opts = parseArgs(args);

/* ────────────────────────── helpers ────────────────────────── */

function parseArgs(argv) {
  const o = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const k = a.slice(2);
      const v = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
      o[k] = v;
    } else o._ = [...(o._ || []), a];
  }
  return o;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, extra = {}, retries = 3, timeoutMs = 20000) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'user-agent': UA, referer: HOME, accept: 'application/json', ...(extra.headers || {}) },
        signal: AbortSignal.timeout(timeoutMs),
        ...extra,
      });
      if (res.ok) return res;
      throw new Error(`HTTP ${res.status} ${url}`);
    } catch (e) {
      if (attempt > retries) throw e;
      const backoff = 1000 * 2 ** attempt + Math.random() * 500;
      console.warn(`[retry ${attempt}/${retries} in ${Math.round(backoff)}ms] ${e.message}`);
      await sleep(backoff);
    }
  }
}

const asJson = (r) => r.json();

/* ─────────────────── WASM ChaCha20 decryption ───────────────────
 * Port of vsdec.js — the API returns stream_urls as base64
 * nonce||ciphertext plus vs.{w, wasm_url}; the per-window WASM
 * exports alloc(n), decrypt(ptr, len) and memory.
 */
const wasmCache = new Map(); // w -> Promise<WebAssembly.Module>

async function wasmModule(vs) {
  const key = vs.w ?? vs.wasm_url;
  if (!wasmCache.has(key)) {
    wasmCache.set(
      key,
      (async () => {
        const bytes = vs.wasm
          ? Buffer.from(vs.wasm, 'base64')
          : new Uint8Array(await (await get(vs.wasm_url, { credentials: 'omit' })).arrayBuffer());
        return WebAssembly.compile(bytes);
      })()
    );
  }
  return wasmCache.get(key);
}

async function decryptStreamUrls(j) {
  if (!(j && j.vs && j.data && typeof j.data.stream_urls === 'string')) return j;
  const mod = await wasmModule(j.vs);
  const inst = await WebAssembly.instantiate(mod, {});
  const ex = inst.exports;
  const enc = new Uint8Array(Buffer.from(j.data.stream_urls, 'base64'));
  const ptr = ex.alloc(enc.length);
  new Uint8Array(ex.memory.buffer, ptr, enc.length).set(enc);
  const outLen = ex.decrypt(ptr, enc.length);
  const text = new TextDecoder().decode(new Uint8Array(ex.memory.buffer, ptr + 12, outLen));
  j.data.stream_urls = text.split('\n').filter(Boolean);
  return j;
}

/* ─────────────────── stream host token ─────────────────── */

function originOf(u) {
  try { return new URL(u).origin; } catch { return ''; }
}

function applyToken(url, token) {
  if (!token) return url;
  if (url.includes('__TOKEN__')) return url.split('__TOKEN__').join(token);
  return url + (url.includes('?') ? '&' : '?') + 'token=' + token;
}

async function fetchToken(url) {
  try {
    const res = await get(`${url}/generate.php`, {}, 2, 8000);
    const t = await res.text();
    try {
      const j = JSON.parse(t);
      if (typeof j === 'string') return j;
      if (j && typeof j === 'object') return j.token || j.data || j.string || j.result || '';
    } catch {}
    return t.trim();
  } catch {
    return '';
  }
}

async function resolveStreams(urls) {
  const out = [];
  for (const u of urls) {
    const origin = originOf(u);
    const token = origin ? await fetchToken(origin) : '';
    const stamped = applyToken(u, token);
    let verified = null;
    try {
      const head = await get(stamped, { method: 'HEAD' }, 1, 8000);
      verified = head.status;
    } catch (e) {
      verified = e.message;
    }
    out.push({ url: stamped, host: origin, token, verified });
  }
  return out;
}

/* ─────────────────── catalogue API ─────────────────── */

const isImdb = (id) => /^tt\d+$/i.test(id);
const typeOf = (id) => (isImdb(id) ? 'imdb' : 'tmdb');
// TMDB id is used by default; falls back to IMDB when absent.
const prefId = (item) => item.tmdb_id || item.imdb_id;

function apiUrl({ type, id, season, episode }) {
  const q = new URLSearchParams({ type: type === 'movie' ? 'movie' : 'tv' });
  q.set(typeOf(id), id);
  if (type === 'tv') {
    if (season != null) q.set('season', String(season));
    if (episode != null) q.set('episode', String(episode));
  }
  return `${API}/api.php?${q}&stream_urls`;
}

async function resolveTitle({ type, id, season, episode, fetchStreams = true }) {
  const url = fetchStreams
    ? apiUrl({ type, id, season, episode })
    : `${API}/api.php?type=${type}&${typeOf(id)}=${id}`;
  const j = await (await get(url)).json();
  const full = await decryptStreamUrls(j);
  if (full.status_code && full.status_code !== '200') throw new Error(`API ${full.status_code}: ${full.data && full.data.error ? full.data.error : '?'}`);
  return full.data;
}

/* ─────────────────── latest feeds ─────────────────── */

async function crawlLatest(type, maxPages) {
  const feed = type === 'movie' ? 'movies' : type === 'tv' ? 'tvshows' : 'episodes';
  const items = [];
  let pages = maxPages || Infinity;
  for (let p = 1; p <= pages; p++) {
    const j = await (await get(`${HOME}/${feed}/latest/page-${p}.json`)).json();
    if (!Array.isArray(j.result)) break;
    items.push(...j.result);
    const total = j.pages || Infinity;
    if (p >= total) break;
    if (!maxPages) pages = total;
    const last = j.result[0];
    console.log(`page ${p}/${total === Infinity ? '?' : total} (+${j.result.length}) newest: ${last.title || last.show_title || last.imdb_id}`);
    await sleep(250);
  }
  return items;
}

/* ─────────────────── commands ─────────────────── */

async function cmdResolve() {
  const [id, season, episode] = opts._ || [];
  if (!id) throw new Error('usage: resolve <tmdb|imdb> [season] [episode]');
  const type = opts.type || (season ? 'tv' : 'movie');
  const data = await resolveTitle({ type, id, season, episode });
  const pretty = {
    title: data.title || data.show_title,
    imdb_id: data.imdb_id,
    tmdb_id: data.tmdb_id,
    season: data.season,
    episode: data.episode,
    file_name: data.file_name,
    backdrop: data.backdrop,
    thumbnails_url: data.thumbnails_url,
    default_subs: data.default_subs,
    stream_urls: data.stream_urls,
  };
  console.log(JSON.stringify(pretty, null, 2));
}

async function cmdCrawl() {
  const type = opts.type || 'movie';
  const out = opts.out || `catalog-${type}.jsonl`;
  const maxPages = opts['max-pages'] ? Number(opts['max-pages']) : opts.maxPages ? Number(opts.maxPages) : null;
  const items = await crawlLatest(type, maxPages);
  appendFileSync(out, items.map((i) => JSON.stringify(i)).join('\n') + '\n');
  console.log(`\n${items.length} items -> ${out}`);
}

async function cmdIds() {
  const files = ['movie_imdb.txt', 'movie_tmdb.txt', 'tv_imdb.txt', 'tv_tmdb.txt', 'eps_tmdb.txt', 'eps_imdb.txt'];
  for (const f of files) {
    const text = await (await get(`${HOME}/ids/${f}`)).text();
    await writeFile(f, text);
    console.log(`${f}: ${text.trim().split('\n').length} ids`);
  }
}

async function cmdScrape() {
  const type = opts.type || 'movie';
  const out = opts.out || `streams-${type}.jsonl`;
  const maxPages = opts['max-pages'] ? Number(opts['max-pages']) : null;
  const concurrency = opts.concurrency ? Number(opts.concurrency) : 3;
  const metaOnly = opts.metaOnly || opts['meta-only'] ? true : false;

  const items = await crawlLatest(type, maxPages);
  const done = new Set();
  if (existsSync(out)) {
    for (const line of readFileSync(out, 'utf8').split('\n')) {
      if (!line) continue;
      try { done.add(JSON.parse(line).key); } catch {}
    }
  }
  console.log(`resuming: ${done.size} already done, ${items.length} total`);

  let idx = 0;
  async function worker() {
    while (idx < items.length) {
      const i = idx++;
      const item = items[i];
      const key = prefId(item);
      if (done.has(key)) continue;
      try {
        const entry = {
          key,
          type,
          title: item.title || item.show_title,
          imdb_id: item.imdb_id,
          tmdb_id: item.tmdb_id,
          season: item.season,
          episode: item.episode,
          quality: item.quality,
          time_added: item.time_added,
        };
        if (!metaOnly) {
          const data = await resolveTitle({
            type: item.show_title || item.title ? (item.season != null ? 'tv' : type) : type,
            id: key,
            season: item.season,
            episode: item.episode,
          });
          entry.file_name = data.file_name;
          entry.backdrop = data.backdrop;
          entry.thumbnails_url = data.thumbnails_url;
          entry.streams = await resolveStreams(data.stream_urls || []);
          await sleep(300);
        }
        appendFileSync(out, JSON.stringify(entry) + '\n');
        console.log(`[${i + 1}/${items.length}] ${entry.title} -> ${entry.streams ? entry.streams.length : 'meta'} stream(s)`);
      } catch (e) {
        console.error(`[${i + 1}/${items.length}] FAIL ${prefId(item)}: ${e.message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, worker));
  console.log(`\ndone -> ${out}`);
}

/* ─────────────────── main ─────────────────── */

const commands = {
  resolve: cmdResolve,
  crawl: cmdCrawl,
  scrape: cmdScrape,
  ids: cmdIds,
  help() {
    console.log(`vidsrcme.ru scraper

  resolve <id> [season] [episode]   Resolve direct stream URLs for one title
                                     (numeric tmdb id by default, or imdb tt...)
  crawl --type movie|tv|episodes    Crawl the latest-content feeds to JSONL
        --max-pages N               (default: all pages)
        --out file.jsonl
  scrape --type movie               Crawl feed then resolve streams for every item
        --max-pages N               (resolves via TMDB id by default,
        --concurrency N              falls back to IMDB when absent)
        --meta-only                 skip stream resolution
        --out file.jsonl            (resumable: skips keys already in file)
  ids                              Download the full /ids/*.txt ID lists

Examples:
  node scraper.js resolve 385687
  node scraper.js resolve 1399 1 1
  node scraper.js crawl --type tv --max-pages 5 --out tv.jsonl
  node scraper.js scrape --type movie --max-pages 3 --concurrency 4 --out movie-streams.jsonl`);
  },
};

async function main() {
  const fn = commands[cmd];
  if (!fn) { commands.help(); return cmd === 'help' ? 0 : 1; }
  await fn();
  return 0;
}

if (require.main === module) {
  main().then((code) => process.exit(code)).catch((e) => {
    console.error(`error: ${e.message}`);
    process.exit(1);
  });
}

/* ─────────────────── provider module interface ─────────────────── */

module.exports = {
  name: 'vidsrcme',
  supportedTypes: ['movie', 'tv'],
  async getStreams(query, type, season, episode) {
    const id = String(query || '').trim();
    if (!id) return [];
    const data = await resolveTitle({
      type: type === 'movie' ? 'movie' : 'tv',
      id,
      season: season || null,
      episode: episode || null,
    });
    const resolved = await resolveStreams(data.stream_urls || []);
    return resolved.map((s) => {
      const url = s.url;
      let st = 'mp4';
      if (url.includes('.m3u8')) st = 'm3u8';
      else if (url.includes('.mpd')) st = 'mpd';
      return {
        name: s.host || 'vidsrcme',
        url,
        quality: data.quality || 'auto',
        type: st,
        title: data.title || data.show_title || null,
      };
    });
  },
};
