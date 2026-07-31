const TMDB_KEY = '439c478a771f35c05022f9feabcca01c';
const API_BASE = 'https://api.speedracelight.com';
const DECRYPT_API = 'https://enc-dec.app/api/dec-videasy';
const CF_WORKER = 'https://cf-header-proxy.sujeetunbeatable.workers.dev';
const TIMEOUT_MS = 20000;

const SERVERS = ['myflixerzupcloud', 'downloader2', 'm4uhd', 'hdmovie', 'cdn', 'superflix', 'lamovie', 'jett', 'tejo', 'neon2', 'ym'];

const f = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580];
const MAGIC = [109, 118, 109, 49];

const v = e => { let t = e >>> 0; t ^= t >>> 16; t = Math.imul(t, 2246822507) >>> 0; t ^= t >>> 13; t = Math.imul(t, 3266489909) >>> 0; return (t ^= t >>> 16) >>> 0; };
const w = (e, t) => { let r = e >>> 0; const s = t & 31; return s === 0 ? r : ((r << s) | (r >>> (32 - s))) >>> 0; };

function fnv1a(str) {
  let t = 2166136261;
  for (let i = 0; i < str.length; i++) t = Math.imul(t ^ str.charCodeAt(i), 16777619) >>> 0;
  return v(t);
}

function makeState(seed, mediaId) {
  const S = Array(61);
  let a = v(fnv1a(seed) ^ v((parseInt(mediaId) >>> 0) ^ 2654435769)) >>> 0;
  for (let i = 0; i < 8; i++) {
    const t = a % 61;
    a = w((a + 2654435769) >>> 0, 7 + (7 & i));
    S[t] = (a ^ v(a)) >>> 0;
    a = v((a + t) >>> 0);
  }
  return { S, acc: v(2779096485 ^ a) >>> 0 };
}

function generateKeyStream(state, len) {
  const out = new Uint8Array(len);
  let ctr = 0;
  for (let i = 0; i < len;) {
    const arr = state.S;
    const acc = state.acc;
    const n = acc % 61;
    const idx = 0 - Number(n in arr);
    const l = (arr[n] !== undefined ? arr[n] : 0) >>> 0;
    const a2 = (l ^ Math.imul(2654435769, ctr + 1) >>> 0) >>> 0;
    let d = (((acc ^ a2) >>> 0) | ((acc & a2 & idx) >>> 0)) >>> 0;
    d = (w((d + acc) >>> 0, 31 & n) ^ w(acc, 31 & Math.imul(n, 7))) >>> 0;
    state.acc = v((d + 2654435769) >>> 0);
    arr[n] = state.acc >>> 0;
    const val = state.acc;
    out[i++] = val & 255;
    if (i < len) out[i++] = (val >>> 8) & 255;
    if (i < len) out[i++] = (val >>> 16) & 255;
    if (i < len) out[i++] = (val >>> 24) & 255;
    ctr++;
  }
  return out;
}

function b64decode(str) {
  const s = str.replace(/-/g, '+').replace(/_/g, '/').padEnd(4 * Math.ceil(str.length / 4), '=');
  return new Uint8Array(Buffer.from(s, 'base64'));
}

function decryptLocal(encryptedB64, seed, mediaId) {
  const payload = b64decode(encryptedB64);
  const keyStream = generateKeyStream(makeState(seed, mediaId), payload.length);
  for (let i = 0; i < payload.length; i++) payload[i] ^= keyStream[i];
  for (let i = 0; i < 4; i++) if (payload[i] !== MAGIC[i]) throw new Error('decrypt failed');
  return Buffer.from(payload.slice(4)).toString('utf-8');
}

// Cloudflare Worker proxy: fetches URL with Referer/Origin headers from CF IP
async function cfFetch(url) {
  const workerUrl = `${CF_WORKER}/?url=${encodeURIComponent(url)}&referer=${encodeURIComponent('https://player.videasy.to/')}&origin=${encodeURIComponent('https://player.videasy.to')}`;
  const res = await fetch(workerUrl, { signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!res.ok) throw new Error(`cf ${res.status}`);
  return await res.text();
}

// Seed cache
const seedCache = new Map();

async function getSeed(mediaId) {
  const key = String(mediaId);
  const cached = seedCache.get(key);
  if (cached && cached.expiresAt > Date.now()) return cached.seed;

  const seedUrl = `${API_BASE}/seed?mediaId=${key}`;
  const body = await cfFetch(seedUrl);
  const d = JSON.parse(body);
  const ttl = d.ttlMs || 60000;
  seedCache.set(key, { seed: d.seed, expiresAt: Date.now() + ttl });
  return d.seed;
}

async function decryptRemote(encryptedB64, mediaId, seed) {
  const res = await fetch(DECRYPT_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: encryptedB64, id: String(mediaId), seed }),
    signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) throw new Error(`remote-dec ${res.status}`);
  const d = await res.json();
  return typeof d.result === 'object' ? d.result : JSON.parse(d.result);
}

async function tryDecrypt(encrypted, seed, mediaId) {
  try {
    const r = await decryptRemote(encrypted, mediaId, seed);
    if (r && r.sources && r.sources.length) return r;
  } catch {}
  try {
    const jsonStr = decryptLocal(encrypted, seed, String(mediaId));
    const r = JSON.parse(jsonStr);
    if (r && r.sources && r.sources.length) return r;
  } catch {}
  return null;
}

async function fetchDecrypted(params, mediaId) {
  const seed = await getSeed(mediaId);
  const p = new URLSearchParams(params);
  p.set('seed', seed);

  for (const server of SERVERS) {
    try {
      const url = `${API_BASE}/${server}/sources-with-title?${p.toString()}`;
      const encrypted = await cfFetch(url);
      const r = await tryDecrypt(encrypted, seed, mediaId);
      if (r) return r;
    } catch {}
  }
  throw new Error('no sources');
}

async function tmdbFetch(tmdbId, mediaType) {
  const type = mediaType === 'tv' ? 'tv' : 'movie';
  const url = `https://api.themoviedb.org/3/${type}/${tmdbId}?api_key=${TMDB_KEY}&language=en-US`;
  const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`TMDB ${res.status}`);
  const d = await res.json();
  if (d.success === false) throw new Error('TMDB not found');
  return {
    title: d.title || d.name,
    year: (d.release_date || d.first_air_date || '').split('-')[0],
    imdbId: d.imdb_id || '',
  };
}

async function getStreams(id, type, season, episode) {
  try {
    const mediaType = type === 'tv' ? 'tv' : 'movie';
    const tmdbData = await tmdbFetch(id, mediaType);

    const doubleEncoded = encodeURIComponent(encodeURIComponent(tmdbData.title));
    const params = {
      title: doubleEncoded,
      mediaType: type === 'tv' ? 'tv' : 'movie',
      year: tmdbData.year,
      episodeId: episode || '1',
      seasonId: season || '1',
      tmdbId: String(id),
      imdbId: tmdbData.imdbId,
      enc: '2',
    };

    const data = await fetchDecrypted(params, id);

    if (!data.sources || !data.sources.length) return [];

    return data.sources.map((s) => ({
      name: 'Odin',
      title: `Odin · ${s.quality || 'HD'}`,
      url: s.url || s.file,
      quality: s.quality || 'Auto',
      headers: {
        Referer: 'https://player.videasy.to/',
        Origin: 'https://player.videasy.to',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    }));
  } catch (e) {
    console.error('[Odin]', e.message);
    return [];
  }
}

module.exports = { getStreams, name: 'Odin', supportedTypes: ['movie', 'tv'] };
