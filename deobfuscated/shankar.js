'use strict';
/**
 * Shankar — NetMirror (netmirror.center) resolver.
 * Built by reverse-engineering the site's own player bundle (no browser needed):
 *
 *   1. metadata  GET https://api2.imdb3.shop/api/{movie|tv}/{id}
 *                -> results[0].embed_json = [{ se, ep, url(encrypted), name, size }]
 *   2. ts        results[0].ttl  OR  window.SERVER_TIME from https://netmirror.center/ HTML  OR  now
 *   3. sig       hex(HMAC-SHA256(String(ts), "net###@@sss"))
 *   4. player    GET https://speed.watch22.shop/play/{name}.php?url=..&size=..&se=..&ep=..&name=..&ts=..&sig=..&exten=0
 *                (Referer: https://netmirror.center/ — other referers get "Not Found.")
 *   5. stream    ArtPlayer page; direct CDN URL embedded as art.url = play_url('https://...mp4')
 *
 * Server hosts (server id 1-7): speed/play/pro2/bet/dv.watch2{1,2}.shop
 */

const { createHmac } = require('node:crypto');

const NAME = 'Shankar';
const API3 = 'https://api2.imdb3.shop/api'; // detail endpoints
const API4 = 'https://api2.imdb4.shop/api'; // search endpoints
const HOME = 'https://netmirror.center';
const SIG_KEY = 'net###@@sss';
const UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

const PLAYERS = [
  'speed.watch22.shop',
  'pro2.watch21.shop',
  'play.watch22.shop',
];

async function httpGet(url, { headers = {}, retries = 2 } = {}) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'user-agent': UA, referer: HOME + '/', ...headers },
        signal: AbortSignal.timeout(45000),
      });
      if (res.ok) return res;
      throw new Error(`HTTP ${res.status} ${url}`);
    } catch (e) {
      if (attempt > retries) throw e;
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
}

async function serverTimestamp() {
  try {
    const html = await (await httpGet(HOME, { retries: 0 })).text();
    const m = html.match(/window\.SERVER_TIME\s*=\s*(\d+)/);
    if (m) return Number(m[1]);
  } catch {}
  return Math.floor(Date.now() / 1000);
}

const signTs = (ts) =>
  createHmac('sha256', SIG_KEY).update(String(ts)).digest('hex');

function normalizeTitle(t) {
  return String(t || '')
    .toLowerCase()
    .replace(/\[.*?\]/g, '')
    .replace(/\s*\(\d{4}\)\s*$/, '')
    .replace(/[^a-z0-9]+/g, '');
}

async function searchNetMirror(q) {
  const qq = encodeURIComponent(q).replace(/%20/g, '+');
  let lastErr;
  for (const base of [API4, API3]) {
    try {
      const j = await (await httpGet(`${base}/search2/${qq}?page=0`, { retries: 1 })).json();
      const res = (j.results || []).filter((r) => r.id && r.title);
      if (res.length) return res;
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error('shankar: netmirror search failed');
}

function pickVariantResults(results, title, year) {
  const target = normalizeTitle(title);
  const scored = results.map((r) => {
    let score = 0;
    const t = normalizeTitle(r.title);
    if (t === target) score += 100;
    else if (t.includes(target) || target.includes(t)) score += 50;
    if (year && String(r.year || '') === String(year)) score += 10;
    return { r, score };
  });
  const matched = scored.filter((s) => s.score > 10);
  matched.sort((a, b) => {
    const en = (x) => (/\[english\]/i.test(x.r.title) ? 1 : 0);
    if (en(b) - en(a) !== 0) return en(b) - en(a);
    if (b.score !== a.score) return b.score - a.score;
    return Number(a.r.id) - Number(b.r.id);
  });
  return matched.map((s) => s.r);
}

function langTag(t) {
  const m = String(t || '').match(/\[([^\]]+)\]/);
  return m ? m[1] : null;
}

async function tmdbDetails(type, tmdbId) {
  const KEY = 'dfa4c2c7c1de1005adee824dc5593672';
  const j = await (
    await fetch(
      `https://api.themoviedb.org/3/${type}/${tmdbId}?api_key=${KEY}&language=en-US`,
    )
  ).json();
  if (!j || (!j.title && !j.name)) throw new Error(`TMDB ${type}/${tmdbId} not found`);
  return {
    title: j.title || j.name,
    year: String((j.release_date || j.first_air_date || '').slice(0, 4)),
  };
}

async function netMirrorDetail(id, type) {
  const kind = type === 'tv' ? 'tv' : 'movie';
  const j = await (await httpGet(`${API3}/${kind}/${id}`)).json();
  const r = j && j.results && j.results[0];
  if (!r) throw new Error(`shankar: netmirror ${kind}/${id} not found`);
  return r;
}

function pickEmbed(r, season, episode) {
  const list = Array.isArray(r.embed_json) ? r.embed_json : [];
  if (!list.length) throw new Error('shankar: no embed entries');
  if (season != null && episode != null) {
    const hit = list.find(
      (x) => String(x.se) === String(season) && String(x.ep) === String(episode),
    );
    if (hit) return hit;
    throw new Error(`shankar: se${season}e${episode} not in embed list`);
  }
  return list[0];
}

function playerUrl(host, entry, ts, sig) {
  const q = new URLSearchParams({
    url: entry.url,
    size: entry.size || '',
    se: String(entry.se),
    ep: String(entry.ep),
    name: entry.name,
    ts: String(ts),
    sig,
    exten: '0',
  });
  return `https://${host}/play/${entry.name}.php?${q}`;
}

async function fetchPlayer(entry, ts, sig) {
  let lastErr;
  for (const host of PLAYERS) {
    try {
      const res = await httpGet(playerUrl(host, entry, ts, sig), { retries: 1 });
      const html = await res.text();
      if (!html.includes('Not Found')) return html;
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error('shankar: all player hosts failed');
}

function extractStreams(html) {
  const out = [];
  const seen = new Set();
  const push = (u) => {
    if (!u || seen.has(u)) return;
    seen.add(u);
    out.push(u);
  };
  let m;
  const re = /art\.url\s*=\s*play_url\(\s*['"]([^'"]+)['"]/g;
  while ((m = re.exec(html))) push(m[1]);
  const re2 = /https:\/\/[^'"\s]+\.(?:mp4|m3u8|mkv)(?:\?[^'"\s]*)?/g;
  while ((m = re2.exec(html))) push(m[0].replace(/\\\//g, '/'));
  return out;
}

async function getStreams(id, mediaType, season, episode) {
  const type = mediaType === 'tv' ? 'tv' : 'movie';
  const t0 = Date.now();
  const destination = [];
  try {
    let title, year = '';
    try {
      let d = null;
      for (let i = 0; i < 2 && !d; i++) {
        try { d = await tmdbDetails(type, id); } catch (e) { await new Promise(r => setTimeout(r, 700 * (i + 1))); }
      }
      title = d.title;
      year = d.year;
    } catch {
      title = String(id); // fallback: id may already be a title query
    }
    if (/^\d+$/.test(title)) {
      // netmirror-native id: try detail directly first
      const r = await netMirrorDetail(title, type);
      const entry = pickEmbed(r, season, episode);
      return await resolveEmbed(entry, r);
    }

    const results = await searchNetMirror(title);
    const variants = pickVariantResults(results, title, year).slice(0, 8);
    if (!variants.length) {
      console.log(`[Shankar] No netmirror match for "${title}"`);
      return destination;
    }
    const settled = await Promise.allSettled(variants.map((v) => resolveVariant(v)));
    const all = settled
      .filter((s) => s.status === 'fulfilled')
      .flatMap((s) => s.value);
    console.log(
      `[Shankar] "${title}" -> ${variants.length} variant(s), ${all.length} stream(s) (${Date.now() - t0}ms)`,
    );
    return all;

    async function resolveVariant(v) {
      const r = await netMirrorDetail(v.id, type);
      const entry = pickEmbed(r, season, episode);
      const streams = await resolveEmbed(entry, r);
      const lang = langTag(v.title);
      if (!lang) return streams;
      return streams.map((s) => ({ ...s, name: `${s.name} [${lang}]` }));
    }
  } catch (e) {
    console.error(`[Shankar] getStreams failed (${Date.now() - t0}ms): ${e.message}`);
    return destination;
  }

  async function resolveEmbed(entry, r) {
    const ts = Number(r.ttl) || (await serverTimestamp()) || Math.floor(Date.now() / 1000);
    const sig = signTs(ts);
    const html = await fetchPlayer(entry, ts, sig);
    const urls = extractStreams(html);
    if (!urls.length) throw new Error('shankar: no stream URL in player page');
    const isHls = urls[0].includes('.m3u8');
    return urls.map((u) => ({
      name: entry.name || 'Shankar',
      title: String(r.title || r.name || entry.name || '').trim() || 'Auto',
      url: u,
      quality: 'Auto',
      type: isHls ? 'm3u8' : 'video',
      headers: { Referer: HOME + '/', Origin: HOME, 'User-Agent': UA },
      provider: 'shankar',
    }));
  }
}

module.exports = {
  name: NAME,
  supportedTypes: ['movie', 'tv'],
  getStreams,
};
