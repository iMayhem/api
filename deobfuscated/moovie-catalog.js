const crypto = require('crypto');

const CATALOG_SECRET = 'net###@@sss';
const CATALOG_API = 'https://api2.imdb3.shop/api';
const SEARCH_API = 'https://api2.imdb4.shop/api/search2';
const CATALOG_REFERER = 'https://netmirror.global/';
const CATALOG_ORIGIN = 'https://netmirror.global';

const TMDB_API_KEY = '439c478a771f35c05022f9feabcca01c';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const PLAYER_HOSTS = {
  1: 'speed.watch22.shop',
  2: 'play.watch22.shop',
  3: 'play.watch21.shop',
  5: 'test.watch22.shop',
  6: 'playnew.watch21.shop',
};

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36';

const CDN_REFERER = 'https://fmoviesunblocked.net/';
const CDN_ORIGIN = 'https://h5.aoneroom.com';
const CDN_DOMAINS = ['hakunaymatata.com', 'watch22.shop', 'aoneroom.com'];

const LANGUAGE_TAGS = ['Hindi', 'English', 'Telugu', 'Tamil', 'Malayalam', 'Bengali', 'Kannada', 'Marathi', 'Punjabi', 'Arabic', 'Urdu', 'HindiDub', 'ArabicDub'];

const CATALOG_HEADERS = {
  'User-Agent': UA,
  Referer: CATALOG_REFERER,
  Origin: CATALOG_ORIGIN,
};

function encodeTitle(title) {
  return Buffer.from(title, 'utf-8').toString('base64');
}

function signTimestamp(ts) {
  return crypto.createHmac('sha256', CATALOG_SECRET).update(String(ts)).digest('hex');
}

function parseCatalogTitle(raw) {
  const languages = [];
  const tagRegex = /\[([^\]]+)\]/g;
  let match;
  while ((match = tagRegex.exec(raw)) !== null) {
    const tag = match[1].trim();
    if (tag && !languages.includes(tag)) languages.push(tag);
  }
  const displayTitle = raw.replace(tagRegex, '').replace(/\s{2,}/g, ' ').trim();
  return { displayTitle, languages };
}

function resolvePlayerHost(server) {
  return PLAYER_HOSTS[server] || PLAYER_HOSTS[1];
}

function buildWatchboxUrl(meta, ts, sig, server, season, episode) {
  const host = resolvePlayerHost(server);
  const title = (meta.title || '').trim();
  const na = encodeURIComponent(encodeTitle(title));
  const dp = encodeURIComponent(meta.dp || '');
  const subjectid = meta.subjectid || '';

  let url =
    `https://${host}/play/watchbox.php` +
    `?id=${subjectid}&se=${season}&ep=${episode}&dp=${dp}&na=${na}` +
    `&ts=${ts}&sig=${sig}&exten=true`;

  if (![1, 2, 3, 5, 6].includes(server)) {
    url = url.replace('watchbox', 'watchbox2');
  }

  return url;
}

function resolveCdnHeaders(url) {
  const domainMatch = url.match(/https?:\/\/([^\/]+)/);
  if (!domainMatch) return {};
  const domain = domainMatch[1].toLowerCase();
  if (CDN_DOMAINS.some(d => domain.includes(d))) {
    return { Referer: CDN_REFERER, Origin: CDN_ORIGIN };
  }
  return {};
}

async function fetchJson(url, headers = {}) {
  const resp = await fetch(url, {
    headers: { ...CATALOG_HEADERS, ...headers },
  });
  const text = await resp.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Non-JSON (${resp.status}) from ${url}`);
  }
  if (!resp.ok) throw new Error(data?.error || `HTTP ${resp.status}`);
  return data;
}

async function searchCatalog(query) {
  const data = await fetchJson(
    `${SEARCH_API}/${encodeURIComponent(query)}?page=0`,
    { 'Content-Type': 'application/json' }
  );
  return data?.results || [];
}

async function getTmdbTitle(id, type) {
  try {
    const mediaType = type === 'tv' ? 'tv' : 'movie';
    const url = `${TMDB_BASE_URL}/${mediaType}/${id}?api_key=${TMDB_API_KEY}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data?.title || data?.name || null;
  } catch {
    return null;
  }
}

async function fetchMetadata(type, id) {
  const data = await fetchJson(`${CATALOG_API}/${type}/${id}`, {
    'Content-Type': 'application/json',
  });
  return data?.results?.[0] || null;
}

async function findLanguageVariants(meta) {
  if (!meta || !meta.title) return [];
  const parsed = parseCatalogTitle(meta.title);
  const baseTitle = parsed.displayTitle;
  const primaryId = String(meta.id);
  const primaryLangs = parsed.languages;

  let results;
  try {
    results = await searchCatalog(baseTitle);
  } catch {
    return [];
  }

  const variants = [];
  const seen = new Set();
  for (const r of results) {
    const rId = String(r.id);
    if (rId === primaryId) continue;
    const p = parseCatalogTitle(r.title || '');
    if (p.displayTitle.toLowerCase() === baseTitle.toLowerCase()) {
      for (const lang of p.languages) {
        const key = lang.toLowerCase();
        if (seen.has(key)) continue;
        if (primaryLangs.some(pl => pl.toLowerCase() === key)) continue;
        seen.add(key);
        variants.push({
          language: lang,
          catalogId: rId,
          media_type: r.media_type,
        });
      }
    }
  }
  return variants;
}

function extractStreamsFromHtml(html) {
  const streams = [];
  const seen = new Set();

  // Pattern 1: Download links — "1080P 2.2GB <a ... onclick="myFunction('URL',...)"
  const dlMatches = html.matchAll(
    /(\d+P|4K)\s+[\d.]+(?:GB|MB)\s*<a[^>]+href="#"\s*[^>]*onclick="myFunction\(\s*'([^']+)'/gi
  );
  for (const match of dlMatches) {
    const quality = match[1].toUpperCase();
    let url = match[2];
    if (seen.has(url)) continue;
    seen.add(url);
    streams.push({ quality: quality.includes('4K') ? '1080P' : quality, url });
  }

  // Pattern 2: ArtPlayer quality selector — html: '1080P', ... url: 'URL'
  const qualitySelectorMatches = html.matchAll(
    /html:\s*'(\d+P)'[\s\S]*?url:\s*'([^']+)'/gi
  );
  for (const match of qualitySelectorMatches) {
    let url = match[2];
    if (seen.has(url)) continue;
    seen.add(url);
    streams.push({ quality: match[1].toUpperCase(), url });
  }

  // Pattern 3: Fallback — any mp4 URL, check quality from URL or nearby text
  if (streams.length === 0) {
    const mp4Matches = html.matchAll(
      /https?:\/\/[^\s"'<>]+\.mp4[^\s"'<>]*/gi
    );
    for (const match of mp4Matches) {
      let url = match[0];
      if (seen.has(url)) continue;
      seen.add(url);

      let quality = 'Auto';
      const idx = html.indexOf(url);
      const before = html.substring(Math.max(0, idx - 100), idx);
      const qualMatch = before.match(/(\d+P)/i);
      if (qualMatch) quality = qualMatch[1].toUpperCase();
      else if (/1080|2160|4k/i.test(url)) quality = '1080P';
      else if (/720/i.test(url)) quality = '720P';
      else if (/480/i.test(url)) quality = '480P';

      streams.push({ quality, url });
    }
  }

  return streams;
}

async function tryResolveStreams(meta, season, episode, server) {
  const ts = Math.floor(Date.now() / 1000);
  const sig = signTimestamp(ts);
  const watchboxUrl = buildWatchboxUrl(meta, ts, sig, server, season, episode);

  const resp = await fetch(watchboxUrl, {
    headers: {
      'User-Agent': UA,
      Referer: CATALOG_REFERER,
      Origin: CATALOG_ORIGIN,
    },
  });

  const html = await resp.text();

  if (!resp.ok) throw new Error(`Watchbox ${resp.status}`);
  if (html.includes('Come from listed Website')) throw new Error('Referer blocked');
  if (html.includes('Not Found') && html.includes('Unauthorised')) throw new Error('Not found');

  return extractStreamsFromHtml(html);
}

async function getStreams(id, type, season, episode) {
  try {
    const tid = String(id);
    let meta = null;

    if (/^\d+$/.test(tid)) {
      meta = await fetchMetadata(type, tid);
      if (!meta || !meta.subjectid) {
        const title = await getTmdbTitle(tid, type);
        if (title) {
          const results = await searchCatalog(title);
          for (const r of results) {
            const catType = r.media_type === 'tv' ? 'tv' : 'movie';
            meta = await fetchMetadata(catType, r.id);
            if (meta && meta.subjectid) break;
          }
        }
      }
    } else {
      const results = await searchCatalog(tid);
      for (const r of results) {
        const catType = r.media_type === 'tv' ? 'tv' : 'movie';
        meta = await fetchMetadata(catType, r.id);
        if (meta && meta.subjectid) break;
      }
    }

    if (!meta || !meta.subjectid) return [];

    const servers = [1, 2, 3, 5, 6];
    const s = parseInt(season) || 0;
    const e = parseInt(episode) || 0;

    let streams = [];
    for (const srv of servers) {
      if (streams.length > 0) break;
      try {
        streams = await tryResolveStreams(meta, s, e, srv);
      } catch {
        continue;
      }
    }

    streams.sort((a, b) => {
      const rank = { '1080P': 0, '720P': 1, '480P': 2, Auto: 3 };
      return (rank[a.quality] ?? 9) - (rank[b.quality] ?? 9);
    });

    const languageVariants = await findLanguageVariants(meta);

    return streams.map((s, idx) => {
      const cdnHeaders = resolveCdnHeaders(s.url);
      return {
        name: 'MoovieCatalog',
        title: `Netflix · ${s.quality}`,
        url: s.url,
        quality: s.quality,
        headers: {
          'User-Agent': UA,
          Referer: cdnHeaders.Referer || CATALOG_REFERER,
          Origin: cdnHeaders.Origin || CATALOG_ORIGIN,
          ...cdnHeaders,
        },
        _languageVariants: idx === 0 ? languageVariants : undefined,
      };
    });
  } catch {
    return [];
  }
}

async function resolveVariant(catalogId, type, season, episode) {
  try {
    const meta = await fetchMetadata(type, catalogId);
    if (!meta || !meta.subjectid) return null;

    const servers = [1, 2, 3, 5, 6];
    const s = parseInt(season) || 0;
    const e = parseInt(episode) || 0;

    let streams = [];
    for (const srv of servers) {
      if (streams.length > 0) break;
      try {
        streams = await tryResolveStreams(meta, s, e, srv);
      } catch {
        continue;
      }
    }

    if (streams.length === 0) return null;

    streams.sort((a, b) => {
      const rank = { '1080P': 0, '720P': 1, '480P': 2, Auto: 3 };
      return (rank[a.quality] ?? 9) - (rank[b.quality] ?? 9);
    });

    const best = streams[0];
    const cdnHeaders = resolveCdnHeaders(best.url);
    const lang = parseCatalogTitle(meta.title || '').languages[0] || 'Unknown';

    return {
      name: 'MoovieCatalog',
      title: `Netflix · ${best.quality} · ${lang}`,
      url: best.url,
      quality: best.quality,
      language: lang,
      headers: {
        'User-Agent': UA,
        Referer: cdnHeaders.Referer || CATALOG_REFERER,
        Origin: cdnHeaders.Origin || CATALOG_ORIGIN,
        ...cdnHeaders,
      },
    };
  } catch {
    return null;
  }
}

module.exports = { getStreams, resolveVariant, name: 'Athena', supportedTypes: ['movie', 'tv'] };
