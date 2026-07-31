const crypto = require('crypto');

const CATALOG_SECRET = 'net###@@sss';
const CATALOG_API = 'https://api2.imdb4.shop/api';
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

const LANGUAGE_TAGS = {
  hindi: 'Hindi',
  'hindi dub': 'Hindi',
  hindidub: 'Hindi',
  english: 'English',
  telugu: 'Telugu',
  tamil: 'Tamil',
  malayalam: 'Malayalam',
  bengali: 'Bengali',
  kannada: 'Kannada',
  marathi: 'Marathi',
  punjabi: 'Punjabi',
  arabic: 'Arabic',
  'arabic dub': 'Arabic',
  arabicdub: 'Arabic',
  urdu: 'Urdu',
  russian: 'Russian',
  spanish: 'Spanish',
  latino: 'Spanish Latino',
  castellano: 'Spanish Castellano',
};

const CATALOG_HEADERS = {
  'User-Agent': UA,
  Referer: CATALOG_REFERER,
  Origin: CATALOG_ORIGIN,
};

function cleanText(text) {
  if (!text) return '';
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\bthe movie\b/g, '')
    .replace(/\bthe series\b/g, '')
    .replace(/[^a-z0-9]/g, '');
}

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
    const tags = match[1].split(/[,/+|&]/);
    for (const tag of tags) {
      const key = tag.trim().toLowerCase().replace(/\s+/g, ' ');
      const language = LANGUAGE_TAGS[key];
      if (language && !languages.includes(language)) languages.push(language);
    }
  }
  const displayTitle = raw
    .replace(tagRegex, '')
    .replace(/\bS\d+(?:\s*-\s*S?\d+)?\b/gi, '')
    .replace(/,/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
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

async function getTmdbTitles(id, type) {
  const titles = new Set();
  let targetYear = null;
  try {
    const mediaType = type === 'tv' ? 'tv' : 'movie';
    const url = `${TMDB_BASE_URL}/${mediaType}/${id}?api_key=${TMDB_API_KEY}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const primary = data?.title || data?.name || null;
    if (primary) titles.add(primary);

    const yearStr = data?.release_date || data?.first_air_date || '';
    const yearMatch = yearStr.match(/^(\d{4})/);
    if (yearMatch) targetYear = parseInt(yearMatch[1], 10);

    const altUrl = `${TMDB_BASE_URL}/${mediaType}/${id}/alternative_titles?api_key=${TMDB_API_KEY}`;
    const altResp = await fetch(altUrl);
    const altData = await altResp.json();
    const list = altData?.titles || altData?.results || [];
    for (const item of list) {
      const alt = item.title || item.name;
      if (alt) titles.add(alt);
    }
  } catch (e) {
    console.error('[MoovieCatalog] getTmdbTitles error:', e.message);
  }
  return { titles: Array.from(titles), year: targetYear };
}

async function fetchMetadata(type, id) {
  const apiType = type === tv ? Tv : Movie;
  const data = await fetchJson(`${CATALOG_API}/${apiType}/${id}`, {
    'Content-Type': 'application/json',
  });
  return data?.results?.[0] || null;
}

async function findLanguageVariants(meta, type, season, episode) {
  if (!meta || !meta.title) return [];
  const parsed = parseCatalogTitle(meta.title);
  const baseTitle = parsed.displayTitle;
  const primaryId = String(meta.id);
  const primaryLangs = parsed.languages;
  const expectedType = type === 'show' || type === 'tv' ? 'tv' : 'movie';

  const s = parseInt(season) || 0;
  const e = parseInt(episode) || 0;

  let results;
  try {
    const searchQuery = baseTitle.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
    results = await searchCatalog(searchQuery);
  } catch {
    return [];
  }

  let targetYear = null;
  if (meta.release_date) {
    const yMatch = meta.release_date.match(/(\d{4})/);
    if (yMatch) targetYear = parseInt(yMatch[1], 10);
  }

  const variants = [];
  const seen = new Set();
  for (const r of results) {
    if (r.media_type && r.media_type !== expectedType) continue;
    const rId = String(r.id);
    if (rId === primaryId) continue;
    const p = parseCatalogTitle(r.title || '');
    if (cleanText(p.displayTitle) === cleanText(baseTitle)) {
      if (targetYear && r.release_date) {
        const catYMatch = r.release_date.match(/(\d{4})/);
        if (catYMatch) {
          const catYr = parseInt(catYMatch[1], 10);
          if (Math.abs(targetYear - catYr) > (type === 'movie' ? 2 : 10)) {
            continue;
          }
        }
      }
      for (const lang of p.languages) {
        const key = lang.toLowerCase();
        if (seen.has(key)) continue;
        if (primaryLangs.some(pl => pl.toLowerCase() === key)) continue;
        seen.add(key);
        variants.push({
          language: lang,
          // Keep the chosen label in the ID. A catalogue entry can have more
          // than one audio tag, and the resolver otherwise loses that context.
          catalogId: `${rId}::${encodeURIComponent(lang)}`,
          media_type: r.media_type,
          season: s || undefined,
          episode: e || undefined,
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

async function getStreams(id, type, season, episode, rawQuery) {
  try {
    const tid = String(id);
    let meta = null;
    
    let searchTitles = [];
    if (rawQuery) searchTitles.push(rawQuery);
    
    let targetYear = null;
    if (/^\d+$/.test(tid)) {
      const res = await getTmdbTitles(tid, type);
      targetYear = res.year;
      for (const t of res.titles) {
        if (!searchTitles.includes(t)) searchTitles.push(t);
      }
    }

    const servers = [1, 2, 3, 5, 6];
    const s = parseInt(season) || 0;
    const e = parseInt(episode) || 0;
    let streams = [];

    // Try finding the matched catalog entry using the search titles
    for (const title of searchTitles) {
      if (meta) break;
      if (!title || !/[a-z0-9]/i.test(cleanText(title))) continue;
      try {
        const results = await searchCatalog(title);
        for (const r of results) {
          if (meta) break;

          // Verify release year to prevent matching incorrect movie remakes/versions (e.g. Titanic 1997 vs 1943)
          if (targetYear && r.release_date) {
            const catalogYearMatch = r.release_date.match(/(\d{4})/);
            if (catalogYearMatch) {
              const catalogYear = parseInt(catalogYearMatch[1], 10);
              const maxDiff = (type === 'movie' || type === 'show' || type === 'tv') && type === 'movie' ? 2 : 10;
              if (Math.abs(targetYear - catalogYear) > maxDiff) {
                continue;
              }
            }
          }

          const p = parseCatalogTitle(r.title || '');
          const cleanCatalog = cleanText(p.displayTitle);
          
          // Check if clean catalog title matches ANY of our search titles
          const isMatch = searchTitles.some(st => cleanText(st) === cleanCatalog);
          if (isMatch) {
            const catType = r.media_type === 'tv' ? 'tv' : 'movie';
            const tempMeta = await fetchMetadata(catType, r.id);
            if (tempMeta && tempMeta.subjectid) {
              if (s === 0 && e === 0) {
                // Movie: Verify streams on servers since some catalog movie entries are dead
                let tempStreams = [];
                for (const srv of servers) {
                  if (tempStreams.length > 0) break;
                  try {
                    tempStreams = await tryResolveStreams(tempMeta, s, e, srv);
                  } catch {
                    continue;
                  }
                }
                if (tempStreams.length > 0) {
                  meta = tempMeta;
                  streams = tempStreams;
                  break;
                }
              } else {
                // TV series episode: Do not resolve streams inside the loop to avoid performance issues
                meta = tempMeta;
                break;
              }
            }
          }
        }
      } catch (err) {
        // Continue to next title on search failure
      }
    }

    if (!meta || !meta.subjectid) return [];

    if (streams.length === 0) {
      for (const srv of servers) {
        if (streams.length > 0) break;
        try {
          streams = await tryResolveStreams(meta, s, e, srv);
        } catch {
          continue;
        }
      }
    }

    streams.sort((a, b) => {
      const rank = { '1080P': 0, '720P': 1, '480P': 2, Auto: 3 };
      return (rank[a.quality] ?? 9) - (rank[b.quality] ?? 9);
    });

    const languageVariants = await findLanguageVariants(meta, type, s, e);

    return streams.map((s, idx) => {
      const cdnHeaders = resolveCdnHeaders(s.url);
      const headers = {
        'User-Agent': UA,
        Referer: cdnHeaders.Referer || CATALOG_REFERER,
        Origin: cdnHeaders.Origin || CATALOG_ORIGIN,
        ...cdnHeaders,
      };
      
      const u = Buffer.from(s.url).toString('base64url');
      const h = Buffer.from(JSON.stringify(headers)).toString('base64url');
      const proxiedUrl = `https://providers.peestream.in/proxy?u=${u}&h=${h}`;

      return {
        name: 'MoovieCatalog',
        title: `Netflix · ${s.quality}`,
        url: proxiedUrl,
        quality: s.quality,
        headers,
        _languageVariants: idx === 0 ? languageVariants : undefined,
      };
    });
  } catch {
    return [];
  }
}

async function resolveVariant(catalogId, type, season, episode) {
  try {
    const normalizedType = type === 'show' || type === 'tv' ? 'tv' : 'movie';
    const [rawCatalogId, encodedLanguage] = String(catalogId).split('::');
    const selectedLanguage = encodedLanguage ? decodeURIComponent(encodedLanguage) : null;
    const meta = await fetchMetadata(normalizedType, rawCatalogId);
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
    const lang = selectedLanguage || parseCatalogTitle(meta.title || '').languages[0] || 'Unknown';
    const headers = {
      'User-Agent': UA,
      Referer: cdnHeaders.Referer || CATALOG_REFERER,
      Origin: cdnHeaders.Origin || CATALOG_ORIGIN,
      ...cdnHeaders,
    };
    
    const u = Buffer.from(best.url).toString('base64url');
    const h = Buffer.from(JSON.stringify(headers)).toString('base64url');
    const proxiedUrl = `https://providers.peestream.in/proxy?u=${u}&h=${h}`;

    return {
      name: 'MoovieCatalog',
      title: `Netflix · ${best.quality} · ${lang}`,
      url: proxiedUrl,
      quality: best.quality,
      language: lang,
      headers,
    };
  } catch {
    return null;
  }
}

module.exports = { getStreams, resolveVariant, name: 'Athena', supportedTypes: ['movie', 'tv'] };
