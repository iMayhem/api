const crypto = require('crypto');
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

const BASE_URL = "https://api.kartoons.me/api";
const SITE_URL = "https://kartoons.me";

// AES-256-CBC key from kartoons.me JS bundle (padded/trimmed to 32 bytes)
const AES_KEY = "bca9e0df1a5abb32906ca3f63ac04cef";

let kartoonsBrowser = null;
async function getBrowserModule() {
  if (!kartoonsBrowser) {
    try {
      kartoonsBrowser = require('./kartoons-browser');
    } catch (e) {
      kartoonsBrowser = null;
    }
  }
  return kartoonsBrowser;
}

function padKey(key) {
  const buf = Buffer.alloc(32, ' ');
  const k = Buffer.from(key, 'utf8');
  k.copy(buf);
  return buf;
}

function decryptUrl(encoded) {
  try {
    let b64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    const raw = Buffer.from(b64, 'base64');
    const iv = raw.subarray(0, 16);
    const ciphertext = raw.subarray(16);
    const decipher = crypto.createDecipheriv('aes-256-cbc', padKey(AES_KEY), iv);
    decipher.setAutoPadding(false);
    let decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
    const padLen = decrypted[decrypted.length - 1];
    if (padLen > 0 && padLen <= 16) {
      let valid = true;
      for (let i = 0; i < padLen; i++) {
        if (decrypted[decrypted.length - 1 - i] !== padLen) { valid = false; break; }
      }
      if (valid) decrypted = decrypted.subarray(0, decrypted.length - padLen);
    }
    return decrypted.toString('utf8');
  } catch (e) {
    return encoded;
  }
}

function decryptLinkObject(link) {
  if (!link) return link;
  const out = { ...link };
  if (out.url) out.url = decryptUrl(out.url);
  if (out.subtitles && Array.isArray(out.subtitles)) {
    out.subtitles = out.subtitles.map(s => {
      if (s && s.url) return { ...s, url: decryptUrl(s.url) };
      return s;
    });
  }
  return out;
}

const headers = {
  "User-Agent": USER_AGENT,
  "Referer": SITE_URL + "/",
  "Origin": SITE_URL,
};

async function searchKartoons(keyword, type) {
  try {
    const endpoint = type === 'movie' ? '/movies' : '/shows';
    const url = `${BASE_URL}${endpoint}?search=${encodeURIComponent(keyword)}&limit=10`;
    const res = await fetch(url, { headers, signal: AbortSignal.timeout(15000) });
    if (!res.ok) return [];
    const json = await res.json();
    if (!json.success) return [];
    return json.data || [];
  } catch (e) {
    return [];
  }
}

function titleMatchScore(searchTitle, resultTitle) {
  const s = searchTitle.toLowerCase().replace(/[^a-z0-9]/g, "");
  const r = (resultTitle || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  if (s === r) return 100;
  if (r.includes(s) || s.includes(r)) return 80;
  const sWords = new Set(s.split(/\s+/));
  const rWords = r.split(/\s+/);
  const common = rWords.filter(w => sWords.has(w)).length;
  return Math.round((common / Math.max(sWords.size, rWords.length)) * 60);
}

async function getShowSeasons(showId) {
  try {
    const res = await fetch(`${BASE_URL}/shows/${showId}`, { headers, signal: AbortSignal.timeout(10000) });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.success) return null;
    return json.data;
  } catch { return null; }
}

async function getSeasonEpisodes(showId, seasonId) {
  try {
    const res = await fetch(`${BASE_URL}/shows/${showId}/season/${seasonId}/all-episodes`, {
      headers, signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return [];
    const json = await res.json();
    if (!json.success) return [];
    return json.data || [];
  } catch { return []; }
}

async function fetchLinksDirect(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers, signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return { blocked: true };
    const json = await res.json();
    if (!json.success) {
      if (json.challenge_required) return { blocked: true };
      return { links: [] };
    }
    const data = json.data;
    if (!data) return { links: [] };
    let links = [];
    if (Array.isArray(data)) links = data;
    else if (data.links && Array.isArray(data.links)) links = data.links;
    return { links: links.map(decryptLinkObject) };
  } catch (e) {
    return { blocked: true };
  }
}

async function fetchLinksWithBrowser(endpoint) {
  try {
    const browser = await getBrowserModule();
    if (!browser) return [];
    let links;
    if (endpoint.includes('/episode/')) {
      const id = endpoint.split('/episode/')[1].split('/')[0];
      links = await browser.getEpisodeLinks(id);
    } else if (endpoint.includes('/movies/')) {
      const id = endpoint.split('/movies/')[1].split('/')[0];
      links = await browser.getMovieLinks(id);
    }
    return links || [];
  } catch (e) {
    return [];
  }
}

async function getEpisodeLinks(episodeId) {
  const endpoint = `/shows/episode/${episodeId}/links`;
  const direct = await fetchLinksDirect(endpoint);
  if (!direct.blocked && direct.links.length > 0) return direct.links;
  if (direct.blocked) {
    console.log(`[Aryabhatta] Direct fetch blocked for ${endpoint}, trying Puppeteer...`);
    return fetchLinksWithBrowser(endpoint);
  }
  return [];
}

async function getMovieLinks(movieId) {
  const endpoint = `/movies/${movieId}/links`;
  const direct = await fetchLinksDirect(endpoint);
  if (!direct.blocked && direct.links.length > 0) return direct.links;
  if (direct.blocked) {
    console.log(`[Aryabhatta] Direct fetch blocked for ${endpoint}, trying Puppeteer...`);
    return fetchLinksWithBrowser(endpoint);
  }
  return [];
}

async function getStreams(id, type, season, episode, query) {
  const searchTitle = query || id;
  if (!searchTitle) return [];

  const results = await searchKartoons(searchTitle, type);
  if (!results || !results.length) return [];

  let bestScore = 0, bestResult = null;
  for (const r of results) {
    const score = titleMatchScore(searchTitle, r.title);
    if (score > bestScore) { bestScore = score; bestResult = r; }
  }
  if (!bestResult || bestScore < 30) return [];

  const kartonsId = bestResult._id;
    const streams = [];

  if (type === 'movie' || type === 'movie') {
    const links = await getMovieLinks(kartonsId);
    for (const link of links) {
      if (!link.url) continue;
      const lang = link.name || "Hindi";
      streams.push({
        name: "Aryabhatta",
        title: `Aryabhatta \u00b7 ${lang}`,
        url: link.url,
        quality: "HD",
        headers: { "User-Agent": USER_AGENT, Referer: SITE_URL + "/" },
      });
    }
    if (streams.length > 0) {
      streams[0]._languageVariants = [{
        language: "Hindi",
        catalogId: `${kartonsId}::movie`,
        media_type: "movie",
      }];
    }
  }
  // else if (type === 'tv' || type === 'show') {
  //   // TODO: TV show support
  // }

  return streams;
}

async function resolveVariant(catalogId, type, season, episode) {
  const parts = catalogId.split(":");
  const kartonsId = parts[0];
  const mediaType = parts[1] || "movie";

  let links = [];
  if (mediaType === 'movie') {
    links = await getMovieLinks(kartonsId);
  }

  if (!links.length) {
    // Try episode links
    links = await getEpisodeLinks(kartonsId);
  }

  if (!links.length) return null;

  const link = links.find(l => l.url);
  if (!link) return null;

  return { url: link.url, type: 'mp4' };
}

module.exports = { getStreams, resolveVariant, searchKartoons, name: "Aryabhatta", supportedTypes: ["movie", "tv"] };
