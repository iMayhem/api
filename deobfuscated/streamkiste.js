const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";
const fs = require('fs');
const path = require('path');

const BASE_URL = "https://streamkiste.life";

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

async function searchStreamkiste(keyword) {
    try {
        const url = `${BASE_URL}/data/search/?keyword=${encodeURIComponent(keyword)}&lang=2`;
        const res = await fetch(url, {
            headers: { "User-Agent": USER_AGENT, "Referer": BASE_URL + "/" },
            signal: AbortSignal.timeout(15000),
        });
        if (!res.ok) return [];
        return await res.json();
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

function normalizeUrl(url) {
  if (url && url.startsWith('//')) return 'https:' + url;
  return url;
}

async function getStreams(id, type, season, episode, query) {
    if (type !== "movie") return [];

    const searchTitle = query || id;
    if (!searchTitle) return [];

    const searchResults = await searchStreamkiste(searchTitle);
    if (!searchResults || !searchResults.length) return [];

    let bestScore = 0, bestResult = null;
    for (const r of searchResults) {
        const score = titleMatchScore(searchTitle, r.title);
        if (score > bestScore) {
            bestScore = score;
            bestResult = r;
        }
    }

    if (!bestResult || bestScore < 30) return [];

    if (!bestResult.streams || !bestResult.streams.length) return [];

    const streams = bestResult.streams
        .filter(s => s && s.stream)
        .map((s, i) => ({
            name: "StreamKiste",
            title: `StreamKiste \u00b7 German \u00b7 ${s.release || "HD"}`,
            url: normalizeUrl(s.stream),
            quality: s.res || s.release || "HD",
            headers: {
                "User-Agent": USER_AGENT,
                Referer: BASE_URL + "/",
            },
        }));

    if (streams.length > 0) {
        streams[0]._languageVariants = [{
            language: "German",
            catalogId: `${id}:${type}:${season || 0}:${episode || 0}`,
            media_type: type,
        }];
    }

    return streams;
}

async function resolveVariant(catalogId, type, season, episode) {
    if (type !== "movie") return null;

    const parts = catalogId.split(":");
    const tmdbId = parts[0];

    const title = await getTitleFromTmdb(tmdbId, type);
    if (!title) return null;

    const searchResults = await searchStreamkiste(title);
    if (!searchResults || !searchResults.length) return null;

    let bestScore = 0, bestResult = null;
    for (const r of searchResults) {
        const score = titleMatchScore(title, r.title);
        if (score > bestScore) { bestScore = score; bestResult = r; }
    }
    if (!bestResult || bestScore < 30) return null;

    if (!bestResult.streams || !bestResult.streams.length) return null;

    const stream = bestResult.streams[0];
    if (!stream || !stream.stream) return null;

    return { url: normalizeUrl(stream.stream), type: "mp4" };
}

module.exports = { getStreams, resolveVariant, name: "StreamKiste", supportedTypes: ["movie"] };
