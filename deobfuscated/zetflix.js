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

// Levenshtein distance for fuzzy slug matching (e.g. "titanic" vs "titanik")
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
}

// Returns true if slug and candidate are close enough to be the same title
function slugFuzzyMatch(slug, candidate) {
  if (!slug || !candidate) return false;
  // Exact contains check first
  if (slug.includes(candidate) || candidate.includes(slug)) return true;
  // Allow up to 2 edits per 8 chars of the shorter string
  const shorter = slug.length < candidate.length ? slug : candidate;
  const longer  = slug.length < candidate.length ? candidate : slug;
  // Only fuzzy-compare the first word (before first dash) to avoid false positives
  const slugWord = shorter.split('-')[0];
  const candWord = longer.split('-')[0];
  if (slugWord.length < 4) return false; // too short to fuzzy
  const maxDist = Math.floor(slugWord.length / 5) + 1; // 1 edit per 5 chars, min 1
  return levenshtein(slugWord, candWord) <= maxDist;
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
    
    for (const embed of embeds) {
      let embedUrl;
      try {
        // Player URLs may be absolute, protocol-relative, or relative paths.
        embedUrl = new URL(embed, pageUrl).toString();
      } catch {
        continue;
      }
      
      // Keep s and e parameters on the embed URL as a fallback, but we will mostly rely on our HTML seasons parser
      if (type === 'tv') {
        const urlObj = new URL(embedUrl);
        urlObj.searchParams.set('s', String(season || 1));
        urlObj.searchParams.set('e', String(episode || 1));
        embedUrl = urlObj.toString();
      }
      
      const streamUrl = await resolveCollaps(embedUrl, type, season, episode);
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

async function resolveCollaps(embedUrl, type, season, episode) {
  try {
    const resp = await fetch(embedUrl, {
      headers: {
        ...HEADERS,
        'Referer': 'https://www.zetflix.club/'
      }
    });
    if (!resp.ok) return null;
    const html = await resp.text();
    
    if (type === 'tv' || type === 'show') {
      const seasonsIdx = html.indexOf("seasons:");
      if (seasonsIdx !== -1) {
        const startBracket = html.indexOf("[", seasonsIdx);
        if (startBracket !== -1) {
          let count = 0;
          let endBracket = -1;
          for (let i = startBracket; i < html.length; i++) {
            if (html[i] === '[') {
              count++;
            } else if (html[i] === ']') {
              count--;
              if (count === 0) {
                endBracket = i;
                break;
              }
            }
          }
          if (endBracket !== -1) {
            const seasonsStr = html.substring(startBracket, endBracket + 1);

            // Find all season blocks: {"season":X or season:X
            const seasonRegex = /(?:\{|,)\s*(?:"season"|season)\s*:\s*(\d+)/g;
            let match;
            const seasonOffsets = [];
            while ((match = seasonRegex.exec(seasonsStr)) !== null) {
              seasonOffsets.push({
                season: parseInt(match[1], 10),
                index: match.index
              });
            }

            if (seasonOffsets.length > 0) {
              seasonOffsets.sort((a, b) => a.index - b.index);

              const targetSeasonNum = parseInt(season, 10) || 1;
              const seasonIndex = seasonOffsets.findIndex(o => o.season === targetSeasonNum);
              if (seasonIndex !== -1) {
                const startIdx = seasonOffsets[seasonIndex].index;
                const endIdx = (seasonIndex + 1 < seasonOffsets.length)
                  ? seasonOffsets[seasonIndex + 1].index
                  : seasonsStr.length;

                const seasonBlock = seasonsStr.substring(startIdx, endIdx);

                // Inside this season block, find the episodes array
                const epRegex = /(?:\{|,)\s*(?:"episode"|episode)\s*:\s*["']?(\d+)["']?/g;
                const epOffsets = [];
                let epMatch;
                while ((epMatch = epRegex.exec(seasonBlock)) !== null) {
                  epOffsets.push({
                    episode: parseInt(epMatch[1], 10),
                    index: epMatch.index
                  });
                }

                if (epOffsets.length > 0) {
                  epOffsets.sort((a, b) => a.index - b.index);

                  const targetEpNum = parseInt(episode, 10) || 1;
                  const epIndex = epOffsets.findIndex(o => o.episode === targetEpNum);
                  if (epIndex !== -1) {
                    const epStart = epOffsets[epIndex].index;
                    const epEnd = (epIndex + 1 < epOffsets.length)
                      ? epOffsets[epIndex + 1].index
                      : seasonBlock.length;

                    const epBlock = seasonBlock.substring(epStart, epEnd);

                    const hlsMatch = epBlock.match(/(?:"hls"|hls)\s*:\s*["']([^"']+\.m3u8[^"']*)["']/i);
                    if (hlsMatch) {
                      let url = hlsMatch[1];
                      url = url.replace(/\\u0026/g, '&').replace(/u0026/g, '&');
                      return url.split('\\').join('');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    
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
        const slug = transliterate(t);
        if (/[a-z0-9]/.test(slug)) {
          transSlugs.push(slug);
        }
      }
    }
    
    if (searchTitles.size === 0) {
      console.log("[ZetFlix] No titles to search.");
      return [];
    }
    
    let matchedPost = null;
    const allTitlesList = Array.from(searchTitles);
    
    // Try searching each known title and fuzzy-match the returned slug
    for (const title of allTitlesList) {
      const results = await search(title);
      if (results && results.length > 0) {
        matchedPost = results.find(r => {
          const transTitle = transliterate(title);
          const hasAlphanumeric = /[a-z0-9]/.test(transTitle);
          if (!hasAlphanumeric) return false;

          // Exact substring match first
          if (slugFuzzyMatch(r.slug, transTitle)) return true;
          // Then try all transliterated slugs from Russian/English TMDB titles
          return transSlugs.some(slug => slugFuzzyMatch(r.slug, slug));
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
      // Only emit one variant entry (best stream). The resolveVariant will pick the best CDN.
      streams[0]._languageVariants = [{
        language: 'Russian',
        catalogId: `${id}:${type}:${season || 0}:${episode || 0}`,
        media_type: type
      }];
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
    
    const streams = await getStreams(tmdbId, type, s, e);
    const target = streams[0];
    if (!target) return null;
    
    return {
      name: 'ZetFlix',
      title: target.title,
      url: target.url,
      quality: target.quality,
      language: 'Russian',
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
