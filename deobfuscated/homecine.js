const TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
const BASE_URL = "https://www3.homecine.to";

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "es-MX,es;q=0.9",
  "Connection": "keep-alive"
};

function cleanTitle(title) {
  if (!title) return "";
  return title
    .toLowerCase()
    .replace(/ver pelicula/g, "")
    .replace(/online/g, "")
    .replace(/\(.*?\)/g, "")
    .replace(/\[.*?\]/g, "")
    .replace(/:\s*.*?$/g, "")
    .replace(/[-_]/g, " ")
    .replace(/[^a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

async function getTMDBInfo(id, type) {
  const titles = new Set();
  let year = "";
  const languages = ["es-MX", "es-ES", "en-US"];
  for (const lang of languages) {
    try {
      const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${TMDB_API_KEY}&language=${lang}`;
      const res = await fetch(url).then(r => r.json());
      const title = type === "movie" ? res.title : res.name;
      const original = type === "movie" ? res.original_title : res.original_name;
      if (title) titles.add(title);
      if (original) titles.add(original);
      if (!year) year = (res.release_date || res.first_air_date || "").substring(0, 4);
    } catch (e) { }
  }
  return titles.size > 0 ? { titles: Array.from(titles), year } : null;
}

async function search(query) {
  try {
    const url = `${BASE_URL}/?s=${encodeURIComponent(query).replace(/%20/g, "+")}`;
    const resp = await fetch(url, { headers: HEADERS });
    if (!resp.ok) return [];
    const html = await resp.text();
    const matches = [];
    
    const divRe = /<div data-movie-id="([\s\S]*?)<\/div><\/div>/gi;
    let match;
    while ((match = divRe.exec(html)) !== null) {
      const block = match[1];
      const linkMatch = /<a href="([^"]+)"/i.exec(block);
      const titleMatch = /alt="([^"]+)"/i.exec(block);
      
      if (linkMatch && titleMatch) {
        matches.push({
          url: linkMatch[1],
          title: titleMatch[1].replace(/&#8211;/g, '').replace(/&#8217;/g, "'").trim()
        });
      }
    }
    return matches;
  } catch (e) {
    console.log(`[HomeCine] Search Error: ${e.message}`);
    return [];
  }
}

async function resolveFastream(embedUrl) {
  try {
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
      'Referer': 'https://www3.homecine.to/'
    };
    const resp = await fetch(embedUrl, { headers });
    if (!resp.ok) return null;
    const html = await resp.text();
    const match = html.match(/eval\(function\(p,a,c,k,e,d\)[\s\S]+?split\('\|'\)\)\)/);
    if (!match) return null;
    const unwrapped = match[0].replace(/^eval\(/, '(');
    const unpacked = eval(unwrapped);
    const fileMatch = unpacked.match(/file:"([^"]+)"/);
    if (!fileMatch) return null;
    return fileMatch[1];
  } catch (e) {
    console.error('[HomeCine] Fastream resolve error:', e.message);
    return null;
  }
}

async function extractStreams(pageUrl) {
  try {
    const resp = await fetch(pageUrl, { headers: HEADERS });
    if (!resp.ok) return [];
    const html = await resp.text();
    const streams = [];
    
    const tabsRe = /href="#tab([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
    const tabs = [];
    let tMatch;
    while ((tMatch = tabsRe.exec(html)) !== null) {
      const id = `tab${tMatch[1]}`;
      const labelHtml = tMatch[2];
      const label = labelHtml.replace(/<[^>]+>/g, '').trim();
      tabs.push({ id, label });
    }
    
    for (const tab of tabs) {
      const blockRe = new RegExp(`<div id="${tab.id}"[\\s\\S]*?<iframe[^>]+src="([^"]+)"`, 'i');
      const bMatch = blockRe.exec(html);
      if (bMatch) {
        const embedUrl = bMatch[1];
        let lang = 'Latino';
        
        const l = tab.label.toLowerCase();
        if (l.includes('latino')) lang = 'Latino';
        else if (l.includes('castellano') || l.includes('español')) lang = 'Castellano';
        else if (l.includes('sub')) lang = 'Subbed';
        
        if (embedUrl.includes('fastream.to')) {
          const resolvedUrl = await resolveFastream(embedUrl);
          if (resolvedUrl) {
            streams.push({
              name: "HomeCine",
              title: `Fastream (${lang})`,
              url: resolvedUrl,
              quality: l.includes('1080') ? '1080P' : l.includes('720') ? '720P' : l.includes('360') ? '360P' : '720P',
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
                'Referer': 'https://fastream.to/',
                'Origin': 'https://fastream.to'
              }
            });
          }
        }
      }
    }
    
    if (streams.length === 0) {
      const iframeRe = /<iframe[^>]+src="([^"]+)"/gi;
      let iframeMatch;
      while ((iframeMatch = iframeRe.exec(html)) !== null) {
        const embedUrl = iframeMatch[1];
        if (embedUrl.includes('youtube')) continue;
        if (embedUrl.includes('fastream.to')) {
          const resolvedUrl = await resolveFastream(embedUrl);
          if (resolvedUrl) {
            streams.push({
              name: "HomeCine",
              title: "Fastream (HD)",
              url: resolvedUrl,
              quality: '720P',
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
                'Referer': 'https://fastream.to/',
                'Origin': 'https://fastream.to'
              }
            });
          }
        }
      }
    }
    
    return streams;
  } catch (e) {
    console.log(`[HomeCine] Extract Error: ${e.message}`);
    return [];
  }
}

function getStreamLanguage(stream) {
  if (stream.title.includes('Latino')) return 'Spanish Latino';
  if (stream.title.includes('Castellano')) return 'Spanish Castellano';
  // A subtitled tab does not establish Spanish audio and must not become an
  // option in the audio menu.
  if (stream.title.includes('Subbed')) return null;
  return 'Spanish';
}

function getQualityRank(quality) {
  return { '1080P': 4, '720P': 3, '480P': 2, '360P': 1, Auto: 0 }[quality] ?? 0;
}

async function getStreams(id, type, season, episode, rawQuery) {
  console.log(`[HomeCine] Resolving: ${type} ${id} rawQuery=${rawQuery}`);
  try {
    // Build candidate search titles: start with rawQuery if provided
    const searchTitles = new Set();
    if (rawQuery && isNaN(rawQuery)) searchTitles.add(rawQuery);

    // Try TMDB lookup for additional title variants
    const info = await getTMDBInfo(id, type);
    if (info) {
      for (const t of info.titles) searchTitles.add(t);
    }

    if (searchTitles.size === 0) {
      console.log("[HomeCine] No titles to search.");
      return [];
    }

    let matchedPost = null;
    const allTitlesList = Array.from(searchTitles);

    for (const title of allTitlesList) {
      const results = await search(title);
      if (results && results.length > 0) {
        matchedPost = results.find(r => {
          const rt = cleanTitle(r.title);
          return allTitlesList.some(t => {
            const ct = cleanTitle(t);
            return rt.includes(ct) || ct.includes(rt);
          });
        });
        if (matchedPost) break;
      }
    }

    if (!matchedPost) {
      console.log("[HomeCine] No matching post found.");
      return [];
    }

    let url = matchedPost.url;
    console.log(`[HomeCine] Matched: "${matchedPost.title}" -> ${url}`);

    if (type === 'tv') {
      const resp = await fetch(url, { headers: HEADERS });
      if (!resp.ok) return [];
      const html = await resp.text();
      const epRegex = new RegExp(`href="([^"]+temporada-${season}-capitulo-${episode}[^"]*)"`, 'i');
      const epMatch = epRegex.exec(html) || new RegExp(`href="([^"]+-[^"]*${season}x${episode}[^"]*)"`, 'i').exec(html);
      
      if (epMatch) {
        url = epMatch[1];
        console.log(`[HomeCine] Found episode: ${url}`);
      } else {
        const slug = url.split('/').filter(Boolean).pop();
        url = `${BASE_URL}/episodios/${slug}-temporada-${season}-capitulo-${episode}/`;
        console.log(`[HomeCine] Guessing episode url: ${url}`);
      }
    }

    const streams = await extractStreams(url);
    if (streams.length > 0) {
      const groups = {};
      
      streams.forEach((s) => {
        const langName = getStreamLanguage(s);
        if (!langName) return;
        const qRank = getQualityRank(s.quality);
        
        if (!groups[langName] || qRank > groups[langName].qRank) {
          groups[langName] = { quality: s.quality, qRank };
        }
      });
      
      const languageVariants = Object.entries(groups).map(([langName, data]) => {
        return {
          language: langName,
          // Use a semantic selector rather than an array position. Tabs can
          // disappear or reorder between discovery and the later resolve call.
          catalogId: `${id}:${type}:${season || 0}:${episode || 0}:${encodeURIComponent(langName)}:${data.quality}`,
          media_type: type
        };
      });
      streams[0]._languageVariants = languageVariants;
    }
    return streams;
  } catch (e) {
    console.error('[HomeCine] getStreams error:', e.message);
    return [];
  }
}

async function resolveVariant(catalogId, type, season, episode) {
  try {
    const parts = catalogId.split(':');
    const tmdbId = parts[0];
    const s = parts[2];
    const e = parts[3];
    const language = parts[4] ? decodeURIComponent(parts[4]) : 'Spanish';
    const quality = parts[5];
    
    const streams = await getStreams(tmdbId, type, s, e);
    const matching = streams.filter(stream => getStreamLanguage(stream) === language);
    const target = matching
      .sort((a, b) => {
        if (a.quality === quality) return -1;
        if (b.quality === quality) return 1;
        return getQualityRank(b.quality) - getQualityRank(a.quality);
      })[0];
    if (!target) return null;
    
    return {
      name: 'HomeCine',
      title: target.title,
      url: target.url,
      quality: target.quality,
      language,
      headers: target.headers,
      type: target.url.includes('.m3u8') ? 'm3u8' : 'mp4'
    };
  } catch (e) {
    console.error('[HomeCine] resolveVariant error:', e.message);
    return null;
  }
}

module.exports = {
  name: 'HomeCine',
  supportedTypes: ['movie', 'tv'],
  getStreams,
  resolveVariant
};
