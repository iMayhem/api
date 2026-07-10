const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";
const fs = require('fs');
const path = require('path');

const FS12_BASE = "https://fs12.lol";
const FSVID_BASE = "https://fsvid.lol";

let _tmdbKey = null;
function getTmdbKey() {
    if (_tmdbKey) return _tmdbKey;
    try {
        const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'server', 'config.json'), 'utf8'));
        _tmdbKey = cfg.tmdbApiKey || '';
    } catch { _tmdbKey = ''; }
    return _tmdbKey;
}

async function getTitleFromTmdb(tmdbId, type) {
    try {
        const key = getTmdbKey();
        if (!key) return null;
        const res = await fetch(`https://api.themoviedb.org/3/${type === 'tv' ? 'tv' : 'movie'}/${tmdbId}?api_key=${key}`, {
            headers: { "User-Agent": USER_AGENT },
            signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.title || data.name || null;
    } catch { return null; }
}

function deobfuscatePackedJs(html) {
    const idx = html.indexOf("eval(function");
    if (idx < 0) return null;

    let braceDepth = 0;
    let funcBodyStart = html.indexOf("{", idx);
    let pos = funcBodyStart;
    while (pos < html.length) {
        if (html[pos] === "{") braceDepth++;
        else if (html[pos] === "}") { braceDepth--; if (braceDepth === 0) { pos++; break; } }
        pos++;
    }
    if (pos >= html.length) return null;

    while (pos < html.length && html[pos] === " ") pos++;
    if (pos >= html.length || html[pos] !== "(") return null;

    let parenDepth = 1;
    const argsStart = pos + 1;
    pos = argsStart;
    while (pos < html.length && parenDepth > 0) {
        if (html[pos] === "(") parenDepth++;
        else if (html[pos] === ")") parenDepth--;
        pos++;
    }
    if (parenDepth !== 0) return null;
    const argsStr = html.substring(argsStart, pos - 1);

    // Find the LAST boundary ',RADIX,COUNT,' 
    const boundaryRe = /',(\d+),(\d+),'/g;
    let lastMatch, match;
    let boundaryPos = -1, radix = 0;
    while ((match = boundaryRe.exec(argsStr)) !== null) {
        lastMatch = match;
        boundaryPos = match.index;
        radix = parseInt(match[1], 10);
    }
    if (boundaryPos < 0) return null;

    const packed = argsStr.substring(1, boundaryPos);
    const boundaryStr = lastMatch ? "'," + lastMatch[1] + "," + lastMatch[2] + ",'" : '';
    const dictStart = boundaryPos + boundaryStr.length;

    const splitTrigger = ".split('";
    const splitPos = argsStr.lastIndexOf(splitTrigger);
    if (splitPos < 0) return null;

    let dictEnd = -1;
    for (let i = splitPos - 1; i >= 0; i--) {
        if (argsStr[i] === "'" && (i === 0 || argsStr[i - 1] !== "\\")) {
            dictEnd = i;
            break;
        }
    }
    if (dictEnd < 0) return null;

    const dictStr = argsStr.substring(dictStart, dictEnd);
    const dictParts = dictStr.split("|");

    let result = packed;
    for (let i = dictParts.length - 1; i >= 0; i--) {
        if (!dictParts[i]) continue;
        const encoded = i.toString(radix);
        const re = new RegExp("\\b" + encoded + "\\b", "g");
        result = result.replace(re, dictParts[i]);
    }

    const urlMatch = result.match(/https?:\/\/[^"'\s,;)]+master\.m3u8[^"'\s,;)]*/);
    if (urlMatch) return urlMatch[0];

    const fallback = result.match(/https?:\/\/[^"'\s,;)]+\.m3u8[^"'\s,;)]*/);
    return fallback ? fallback[0] : null;
}

async function extractFsvidHls(embedUrl) {
    try {
        const res = await fetch(embedUrl, {
            headers: { "User-Agent": USER_AGENT, "Referer": FS12_BASE + "/" },
            signal: AbortSignal.timeout(15000),
        });
        if (!res.ok) return null;
        const html = await res.text();
        return deobfuscatePackedJs(html);
    } catch (e) {
        return null;
    }
}

async function searchFs12(title) {
    try {
        const params = new URLSearchParams({
            do: "search",
            subaction: "search",
            story: title,
        });
        const res = await fetch(FS12_BASE + "/index.php", {
            method: "POST",
            headers: {
                "User-Agent": USER_AGENT,
                "Content-Type": "application/x-www-form-urlencoded",
                "Referer": FS12_BASE + "/",
            },
            body: params.toString(),
            signal: AbortSignal.timeout(15000),
        });
        if (!res.ok) return [];
        const html = await res.text();

        // Parse news IDs and titles from search results
        const results = [];
        const linkRe = /href="\/index\.php\?newsid=(\d+)"[^>]*alt="([^"]+)"/g;
        let linkMatch;
        while ((linkMatch = linkRe.exec(html)) !== null) {
            results.push({ newsId: parseInt(linkMatch[1], 10), title: linkMatch[2] });
        }
        return results;
    } catch (e) {
        return [];
    }
}

function titleMatchScore(searchTitle, resultTitle) {
    const s = searchTitle.toLowerCase().replace(/[^a-z0-9]/g, "");
    const r = resultTitle.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (s === r) return 100;
    if (r.includes(s) || s.includes(r)) return 80;
    // Check word overlap
    const sWords = new Set(s.split(/\s+/));
    const rWords = r.split(/\s+/);
    const common = rWords.filter(w => sWords.has(w)).length;
    return Math.round((common / Math.max(sWords.size, rWords.length)) * 60);
}

async function getFs12Embeds(newsId) {
    try {
        const res = await fetch(FS12_BASE + "/engine/ajax/film_api.php?id=" + newsId, {
            headers: { "User-Agent": USER_AGENT, "Referer": FS12_BASE + "/" },
            signal: AbortSignal.timeout(10000),
        });
        if (!res.ok) return {};
        return await res.json();
    } catch (e) {
        return {};
    }
}

async function getStreams(id, type, season, episode, query) {
    // This scraper only works for movies (type === "movie")
    if (type !== "movie") return [];

    const searchTitle = query || id;
    if (!searchTitle) return [];

    // Step 1: Search FS12 for the movie
    const searchResults = await searchFs12(searchTitle);
    if (!searchResults.length) return [];

    // Score and pick the best match
    let bestScore = 0, bestResult = null;
    for (const r of searchResults) {
        const score = titleMatchScore(searchTitle, r.title);
        if (score > bestScore) {
            bestScore = score;
            bestResult = r;
        }
    }

    if (!bestResult || bestScore < 30) return [];

    return getFs12Streams(bestResult.newsId);
}

async function getFs12Streams(newsId) {
    const apiData = await getFs12Embeds(newsId);
    if (!apiData.players || !apiData.players.premium) return [];

    const premiumPlayers = apiData.players.premium;
    const meta = apiData.meta || {};

    const langLabel = { default: "VF", vff: "VFF", vfq: "VFQ", vostfr: "VOSTFR" };
    const langPriority = ["default", "vff", "vfq", "vostfr"];
    const results = [];

    for (const lang of langPriority) {
        const embedUrl = premiumPlayers[lang];
        if (!embedUrl || !embedUrl.includes(FSVID_BASE)) continue;

        const hlsUrl = await extractFsvidHls(embedUrl);
        if (hlsUrl) {
            const label = langLabel[lang] || lang;
            results.push({
                name: "FrenchStream",
                title: "FrenchStream [1080p] \u00b7 " + label + " \u00b7 HLS",
                url: hlsUrl,
                quality: label,
                headers: {
                    "User-Agent": USER_AGENT,
                    Referer: FSVID_BASE + "/",
                },
            });
        }
    }

    return results;
}

async function resolveVariant(id, type, season, episode) {
    if (type !== "movie") return null;
    const parts = id.split(":");
    if (parts.length < 2) return null;
    const tmdbId = parts[0];
    const langKey = parts.slice(1).join(":");

    const title = await getTitleFromTmdb(tmdbId, type);
    if (!title) return null;

    const searchResults = await searchFs12(title);
    if (!searchResults.length) return null;

    let bestScore = 0, bestResult = null;
    for (const r of searchResults) {
        const score = titleMatchScore(title, r.title);
        if (score > bestScore) { bestScore = score; bestResult = r; }
    }
    if (!bestResult || bestScore < 30) return null;

    const apiData = await getFs12Embeds(bestResult.newsId);
    if (!apiData.players || !apiData.players.premium) return null;

    const embedUrl = apiData.players.premium[langKey] || apiData.players.premium.default;
    if (!embedUrl || !embedUrl.includes(FSVID_BASE)) return null;

    const hlsUrl = await extractFsvidHls(embedUrl);
    if (!hlsUrl) return null;

    return { url: hlsUrl, type: 'hls', proxyUrl: hlsUrl };
}

module.exports = { getStreams, resolveVariant, name: "FrenchStream", supportedTypes: ["movie"] };
