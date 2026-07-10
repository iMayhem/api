const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";
const fs = require('fs');
const path = require('path');

const IYF_BASE = "https://www.iyf.tv";
const IYF_RANK = "https://rankv21.iyf.tv";
const IYF_UPLOAD = "https://upload.iyf.tv";

let _tmdbKey = null;
function getTmdbKey() {
    if (_tmdbKey) return _tmdbKey;
    try {
        const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'server', 'config.json'), 'utf8'));
        _tmdbKey = cfg.tmdbApiKey || '';
    } catch { _tmdbKey = ''; }
    return _tmdbKey;
}

async function getChineseTitleFromTmdb(tmdbId, type) {
    try {
        const key = getTmdbKey();
        if (!key) return null;
        const res = await fetch(`https://api.themoviedb.org/3/${type === 'tv' ? 'tv' : 'movie'}/${tmdbId}?api_key=${key}&language=zh-CN`, {
            headers: { "User-Agent": USER_AGENT },
            signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.title || data.name || null;
    } catch { return null; }
}

async function searchIyf(keyword) {
    try {
        const url = `${IYF_RANK}/v3/list/briefsearch?tags=${encodeURIComponent(keyword)}&page=1&size=10&orderby=4&desc=1&cinema=0`;
        const res = await fetch(url, {
            headers: { "User-Agent": USER_AGENT, "Referer": IYF_BASE + "/" },
            signal: AbortSignal.timeout(15000),
        });
        if (!res.ok) return [];
        const json = await res.json();
        const info = json?.data?.info;
        if (!info || !info.length) return [];
        return info[0]?.result || [];
    } catch (e) {
        return [];
    }
}

function titleMatchScore(searchTitle, resultTitle) {
    const s = searchTitle.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]/g, "");
    const r = (resultTitle || "").toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]/g, "");
    if (s === r) return 100;
    if (r.includes(s) || s.includes(r)) return 80;
    const sWords = new Set(s.split(/\s+/));
    const rWords = r.split(/\s+/);
    const common = rWords.filter(w => sWords.has(w)).length;
    return Math.round((common / Math.max(sWords.size, rWords.length)) * 60);
}

async function getIyfHlsUrl(mediaKey) {
    try {
        const url = `${IYF_UPLOAD}/api/video/MasterPlayList?key=${encodeURIComponent(mediaKey)}`;
        const res = await fetch(url, {
            headers: { "User-Agent": USER_AGENT, "Referer": IYF_BASE + "/" },
            signal: AbortSignal.timeout(15000),
        });
        if (!res.ok) return null;
        const text = await res.text();
        if (!text || !text.startsWith("#EXTM3U")) return null;
        return url;
    } catch (e) {
        return null;
    }
}

async function getStreams(id, type, season, episode, query) {
    if (type !== "movie") return [];

    const searchTitle = query || id;
    if (!searchTitle) return [];

    const results = await searchIyf(searchTitle);
    if (!results || !results.length) return [];

    let bestScore = 0, bestResult = null;
    for (const r of results) {
        const score = titleMatchScore(searchTitle, r.title || "");
        if (score > bestScore) {
            bestScore = score;
            bestResult = r;
        }
    }

    if (!bestResult || bestScore < 30) return [];
    const mediaKey = bestResult.contxt;
    if (!mediaKey) return [];

    const hlsUrl = await getIyfHlsUrl(mediaKey);
    if (!hlsUrl) return [];

    const quality = bestResult.vipResource || "HD";
    return [{
        name: "iyf.tv",
        title: `iyf.tv \u00b7 Chinese \u00b7 ${quality} \u00b7 HLS`,
        url: hlsUrl,
        quality,
        headers: {
            "User-Agent": USER_AGENT,
            Referer: IYF_BASE + "/",
        },
    }];
}

async function resolveVariant(catalogId, type, season, episode) {
    if (type !== "movie") return null;

    const parts = catalogId.split(":");
    const tmdbId = parts[0];
    if (!tmdbId) return null;

    const title = await getChineseTitleFromTmdb(tmdbId, type);
    if (!title) return null;

    const searchResults = await searchIyf(title);
    if (!searchResults || !searchResults.length) return null;

    let bestScore = 0, bestResult = null;
    for (const r of searchResults) {
        const score = titleMatchScore(title, r.title || "");
        if (score > bestScore) { bestScore = score; bestResult = r; }
    }
    if (!bestResult || bestScore < 30) return null;

    const mediaKey = bestResult.contxt;
    if (!mediaKey) return null;

    const hlsUrl = await getIyfHlsUrl(mediaKey);
    if (!hlsUrl) return null;

    return { url: hlsUrl, type: "hls", headers: { "User-Agent": USER_AGENT, Referer: IYF_BASE + "/" } };
}

module.exports = { getStreams, resolveVariant, name: "iyf.tv", supportedTypes: ["movie"] };
