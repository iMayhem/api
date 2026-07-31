const crypto = require('crypto');

const API_BASE = 'https://vidlux.xyz';
const DECRYPTION_KEY = 'vidlux-stream-encryption-2026-secure-key';
const PROVIDERS = ['spider', 'rocket', 'star', 'bolt', 'quilox', 'vidrock', 'dubai', 'magic', 'vixsrc', 'astra'];

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
  'Referer': 'https://vidlux.xyz/',
  'Origin': 'https://vidlux.xyz',
};

function decryptPayload(encryptedB64) {
  const buf = Buffer.from(encryptedB64, 'base64');
  const iv = buf.subarray(0, 12);
  const tag = buf.subarray(buf.length - 16);
  const ct = buf.subarray(12, buf.length - 16);
  const key = crypto.createHash('sha256').update(DECRYPTION_KEY).digest();
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(tag);
  return JSON.parse(decipher.update(ct) + decipher.final('utf8'));
}

function makeAbsolute(url) {
  if (!url) return url;
  if (url.startsWith('/')) return `${API_BASE}${url}`;
  return url;
}

const tokenCache = new Map();
const streamCache = new Map();

async function fetchToken(tmdbId, type, season, episode) {
  const key = `${tmdbId}:${type}:${season}:${episode}`;
  const cached = tokenCache.get(key);
  if (cached && cached.expiresAt > Date.now()) return cached.token;

  const embedUrl = type === 'tv'
    ? `${API_BASE}/embed/tv/${tmdbId}/${season}/${episode}`
    : `${API_BASE}/embed/movie/${tmdbId}`;

  const res = await fetch(embedUrl, { headers: HEADERS, signal: AbortSignal.timeout(10000) });
  if (!res.ok) throw new Error(`token ${res.status}`);
  const html = await res.text();
  const m = html.match(/requestToken[^:]*:[^"']*["']([^"']+)/);
  if (!m) throw new Error('token not found');
  const ttl = 60000;
  tokenCache.set(key, { token: m[1], expiresAt: Date.now() + ttl });
  return m[1];
}

async function getStreams(id, type, season, episode) {
  try {
    const mediaType = type === 'tv' ? 'tv' : 'movie';
    const sNum = season || '1';
    const eNum = episode || '1';

    const _t = await fetchToken(id, mediaType, sNum, eNum);

    const promises = PROVIDERS.map(async (provider) => {
      try {
        const url = `${API_BASE}/api/extract/${provider}?id=${id}&type=${mediaType}&season=${sNum}&episode=${eNum}&_t=${_t}`;
        const res = await fetch(url, { headers: HEADERS, signal: AbortSignal.timeout(15000) });
        if (!res.ok) return [];
        const d = await res.json();
        if (!d.encrypted || !d.data) return [];
        const dec = decryptPayload(d.data);
        const items = Array.isArray(dec) ? dec : (dec.streams || []);
        return items.filter(s => s.file).map(s => ({
          url: makeAbsolute(s.file),
          quality: s.quality || 'Auto',
          title: s.title || provider,
          type: s.type === 'hls' ? 'hls' : (s.type || 'hls'),
        }));
      } catch { return []; }
    });

    const results = await Promise.all(promises);
    const allStreams = results.flat();

    if (!allStreams.length) return [];

    return allStreams.map((s, i) => ({
      name: 'Vidlux',
      title: `Vidlux · ${s.title || s.quality}`,
      url: s.url,
      quality: s.quality,
      type: s.type === 'hls' ? 'm3u8' : s.type,
      headers: HEADERS,
    }));
  } catch (e) {
    console.error('[Vidlux]', e.message);
    return [];
  }
}

module.exports = { getStreams, name: 'Vidlux', supportedTypes: ['movie', 'tv'] };
