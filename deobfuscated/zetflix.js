const TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
const BASE_URL = "https://www.zetflix.club";

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "ru-RU,ru;q=0.9,en;q=0.8",
  "Connection": "keep-alive"
};

function transliterate(text) {
  const ru = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
    'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c',
    'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'yu', 'я': 'ya',
    'ъ': '', 'ь': ''
  };
  return text
    .toLowerCase()
    .split('')
    .map(char => ru[char] ?? char)
    .join('')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function cleanTitle(title) {
  if (!title) return "";
  return title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\sа-яА-ЯёЁ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

async function getTMDBInfo(id, type) {
  const titles = new Set();
  let year = "";
  const languages = ["ru-RU", "en-US"];
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
    const url = `${BASE_URL}/index.php?do=search`;
    const body = new URLSearchParams({
      do: 'search',
      subaction: 'search',
      search_start: '1',
      full_search: '0',
      result_from: '1',
      story: query
    });
    
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        ...HEADERS,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': `${BASE_URL}/`
      },
      body: body.toString()
    });
    
    if (!resp.ok) return [];
    const html = await resp.text();
    const matches = [];
    const linkRe = /href="https:\/\/www\.zetflix\.club\/(\d+)-([^"]+)\.html"/gi;
    let match;
    const seen = new Set();
    while ((match = linkRe.exec(html)) !== null) {
      const pageUrl = match[0].replace('href="', '').replace('"', '');
      const id = match[1];
      const slug = match[2];
      if (seen.has(pageUrl)) continue;
      seen.add(pageUrl);
      matches.push({ url: pageUrl, id, slug });
    }
    return matches;
  } catch (e) {
    console.log(`[ZetFlix] Search Error: ${e.message}`);
    return [];
  }
}

async function extractStreams(pageUrl, type, season, episode) {
  try {
    const resp = await fetch(pageUrl, { headers: HEADERS });
    if (!resp.ok) return [];
    const html = await resp.text();
    const streams = [];
    
    // Find Collaps mirror players
    const iframeRe = /<iframe[^>]+src="([^"]*?(?:ortified\.ws|collaps\.to)[^"]*)"/gi;
    let match;
    const embeds = [];
    while ((match = iframeRe.exec(html)) !== null) {
      embeds.push(match[1]);
    }
    
    for (let embedUrl of embeds) {
      if (embedUrl.startsWith('//')) {
        embedUrl = 'https:' + embedUrl;
      }
      
      // If it is a TV show, pass season/episode to the Collaps embed player
      if (type === 'tv') {
        const urlObj = new URL(embedUrl);
        urlObj.searchParams.set('s', String(season || 1));
        urlObj.searchParams.set('e', String(episode || 1));
        embedUrl = urlObj.toString();
      }
      
      const streamUrl = await resolveCollaps(embedUrl);
      if (streamUrl) {
        streams.push({
          quality: '1080P',
          url: streamUrl
        });
      }
    }
    
    return streams;
  } catch (e) {
    console.error('[ZetFlix] extractStreams error:', e.message);
    return [];
  }
}

async function resolveCollaps(embedUrl) {
  try {
    const resp = await fetch(embedUrl, {
      headers: {
        ...HEADERS,
        'Referer': 'https://www.zetflix.club/'
      },
      // Bypass SSL verification issues on the Collaps mirror domains
      agent: new (require('https').Agent)({ rejectUnauthorized: false })
    });
    if (!resp.ok) return null;
    const html = await resp.text();
    
    const hlsMatch = html.match(/"hls"\s*:\s*"([^"]+\.m3u8[^"]*)"/i) || 
                     html.match(/hls\s*:\s*"([^"]+\.m3u8[^"]*)"/i);
    if (hlsMatch) {
      let url = hlsMatch[1];
      url = url.replace(/\\u0026/g, '&').replace(/u0026/g, '&');
      return url.split('\\').join('');
    }
  } catch (e) {
    console.error('[ZetFlix] Collaps resolve error:', e.message);
  }
  return null;
}

async function getStreams(id, type, season, episode, rawQuery) {
  try {
    const searchTitles = new Set();
    if (rawQuery && isNaN(rawQuery)) searchTitles.add(rawQuery);
    
    const info = await getTMDBInfo(id, type);
    const transSlugs = [];
    if (info) {
      for (const t of info.titles) {
        searchTitles.add(t);
        transSlugs.push(transliterate(t));
      }
    }
    
    if (searchTitles.size === 0) {
      console.log("[ZetFlix] No titles to search.");
      return [];
    }
    
    let matchedPost = null;
    const allTitlesList = Array.from(searchTitles);
    
    // First try searching the title directly
    for (const title of allTitlesList) {
      const results = await search(title);
      if (results && results.length > 0) {
        matchedPost = results.find(r => {
          const transTitle = transliterate(title);
          return r.slug.includes(transTitle) || transTitle.includes(r.slug) ||
                 transSlugs.some(slug => r.slug.includes(slug) || slug.includes(r.slug));
        });
        if (matchedPost) break;
      }
    }
    
    if (!matchedPost) {
      console.log("[ZetFlix] No matching post found.");
      return [];
    }
    
    console.log(`[ZetFlix] Matched: "${matchedPost.slug}" -> ${matchedPost.url}`);
    const streams = await extractStreams(matchedPost.url, type, season, episode);
    
    if (streams.length > 0) {
      const languageVariants = streams.map((s, idx) => {
        return {
          language: 'Russian',
          catalogId: `${id}:${type}:${season || 0}:${episode || 0}:${idx}`,
          media_type: type
        };
      });
      streams[0]._languageVariants = languageVariants;
    }
    
    return streams.map((s) => ({
      name: 'ZetFlix',
      title: `ZetFlix · Russian`,
      url: s.url,
      quality: s.quality,
      headers: {
        'User-Agent': HEADERS['User-Agent'],
        'Referer': BASE_URL
      },
      _languageVariants: s._languageVariants,
      type: 'm3u8'
    }));
  } catch (e) {
    console.error('[ZetFlix] getStreams error:', e.message);
    return [];
  }
}

async function resolveVariant(catalogId, type, season, episode) {
  try {
    const parts = catalogId.split(':');
    const tmdbId = parts[0];
    const s = parts[2];
    const e = parts[3];
    const idx = parseInt(parts[4]) || 0;
    
    const streams = await getStreams(tmdbId, type, s, e);
    const target = streams[idx] || streams[0];
    if (!target) return null;
    
    return {
      name: 'ZetFlix',
      title: target.title,
      url: target.url,
      quality: target.quality,
      headers: target.headers,
      type: 'm3u8'
    };
  } catch (e) {
    console.error('[ZetFlix] resolveVariant error:', e.message);
    return null;
  }
}

module.exports = {
  name: 'ZetFlix',
  supportedTypes: ['movie', 'tv'],
  getStreams,
  resolveVariant
};
