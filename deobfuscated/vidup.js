'use strict';
/**
 * VidUp — vidup.to resolver via the enc-dec.app helper API
 * Ported from https://github.com/smy778/EncDecEndpoints/blob/main/samples/vidup.py
 *
 *   1. page  GET https://vidup.to/{movie|tv}/{tmdbId}[/{season}/{episode}]/
 *   2. text  bookmark-regex `\"(?:en|token)\":\"...\"` from page HTML
 *   3. enc   GET https://enc-dec.app/api/enc-vidup?text=...
 *            -> { servers, stream, token }
 *   4. srv   POST {servers} (headers incl. X-CSRF-Token) -> encrypted servers
 *            POST https://enc-dec.app/api/dec-vidup {text} -> [{ data, ... }]
 *   5. stm   POST {stream}/{data} -> encrypted stream
 *            POST dec-vidup {text} -> stream payload (URL(s))
 */

const NAME = 'VidUp';
const API = 'https://enc-dec.app/api';
const HOME = 'https://vidup.to/';
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36';

const HEADERS_BASE = {
  'User-Agent': UA,
  Referer: HOME,
  'X-Requested-With': 'XMLHttpRequest',
};

async function httpText(url, opts = {}) {
  const res = await fetch(url, opts);
  if (!res.ok) throw new Error(`VidUp HTTP ${res.status} ${url}`);
  return res.text();
}

async function encJson(url, opts = {}) {
  const res = await fetch(url, {
    ...opts,
    headers: { ...HEADERS_BASE, ...(opts.headers || {}) },
  });
  const j = await res.json().catch(() => ({}));
  if (j.status !== 200) {
    throw new Error(`enc-dec error ${j.status}: ${j.error || 'unknown'}`);
  }
  return j.result;
}

function extractEnToken(html) {
  const m = html.match(/\\"(?:en|token)\\":\\"(.*?)\\/);
  if (m) return m[1];
  const m2 = html.match(/"?(?:en|token)"?\s*:\s*"(.*?)"/);
  return m2 ? m2[1] : null;
}

function collectUrls(payload) {
  const out = [];
  const push = (u) => {
    if (typeof u === 'string' && u) {
      const clean = u.replace(/\\\//g, '/');
      if (/^https?:\/\//.test(clean) && !out.includes(clean)) out.push(clean);
    }
  };
  const walk = (node) => {
    if (Array.isArray(node)) return node.forEach(walk);
    if (node && typeof node === 'object') {
      for (const k of ['url', 'src', 'stream', 'file', 'video', 'playlist', 'source', 'sources', 'files']) {
        if (k in node) {
          const v = node[k];
          if (Array.isArray(v)) v.forEach((x) => typeof x === 'object' ? walk(x) : push(x));
          else if (v && typeof v === 'object') walk(v);
          else push(v);
        }
      }
      return;
    }
    push(node);
  };
  walk(payload);
  return out;
}

async function getStreams(id, mediaType, season, episode) {
  const type = mediaType === 'tv' ? 'tv' : 'movie';
  const t0 = Date.now();
  const destination = [];
  try {
    const pagePath =
      type === 'tv'
        ? `/tv/${id}/${season != null ? season : 1}/${episode != null ? episode : 1}/`
        : `/movie/${id}/`;
    const page = await httpText(HOME + pagePath, { headers: HEADERS_BASE });
    const text = extractEnToken(page);
    if (!text) throw new Error(`vidup: no en/token bookmark on ${pagePath}`);

    const enc = await encJson(`${API}/enc-vidup?text=${encodeURIComponent(text)}`);
    const { servers, stream, token } = enc || {};
    if (!servers || !stream || !token) throw new Error('vidup: enc-vidup result incomplete');

    const srvHeaders = { ...HEADERS_BASE, 'X-CSRF-Token': token };
    const serversEnc = await httpText(servers, { method: 'POST', headers: srvHeaders });
    const serversDec = await encJson(`${API}/dec-vidup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: serversEnc }),
    });

    const list = Array.isArray(serversDec) ? serversDec : serversDec && Array.isArray(serversDec.servers) ? serversDec.servers : [];
    const seen = new Set();
    for (const server of list.slice(0, 6)) {
      const data = server && (server.data || server.id);
      if (!data || seen.has(String(data))) continue;
      seen.add(String(data));
      try {
        const streamEnc = await httpText(`${stream}/${data}`, { method: 'POST', headers: srvHeaders });
        const streamDec = await encJson(`${API}/dec-vidup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: streamEnc }),
        });
        const urls = collectUrls(streamDec);
        const label = server.name || server.quality || 'Auto';
        for (const u of urls) {
          destination.push({
            name: u.includes('.m3u8') ? `VidUp ${label} (HLS)` : `VidUp ${label}`,
            title: (streamDec && streamDec.title) || 'VidUp',
            url: u,
            quality: 'Auto',
            type: u.includes('.m3u8') ? 'm3u8' : 'video',
            headers: { Referer: HOME, Origin: 'https://vidup.to', 'User-Agent': UA },
            provider: 'vidup',
          });
        }
      } catch (e) {
        console.log(`[VidUp] server "${data}" failed: ${e.message}`);
      }
    }
    console.log(`[VidUp] ${type}/${id} -> ${list.length} server(s), ${destination.length} stream(s) (${Date.now() - t0}ms)`);
    return destination;
  } catch (e) {
    console.error(`[VidUp] getStreams failed (${Date.now() - t0}ms): ${e.message}`);
    return destination;
  }
}

module.exports = {
  name: NAME,
  supportedTypes: ['movie', 'tv'],
  getStreams,
};