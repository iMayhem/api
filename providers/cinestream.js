const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

const PLAYSRC_MOVIE = "https://api.madplay.site/api/playsrc?id=%s&token=direct";
const PLAYSRC_TV = "https://madplay.site/api/movies/holly?id=%s&season=%s&episode=%s&token=direct";
const VIDFLIX_URL = "https://madplay.site/api/movies/holly?id=%s&token=direct";
const VIDFLIX_TV = "https://madplay.site/api/movies/holly?id=%s&season=%s&episode=%s&token=direct";

const CDN_REFERER = "https://fmoviesunblocked.net/";
const CDN_ORIGIN = "https://h5.aoneroom.com";
const CINEBY_REFERER = "https://www.cineby.sc/";
const CINEBY_ORIGIN = "https://www.cineby.sc/";

const CDN_DOMAINS = ["hakunaymatata.com", "aoneroom.com", "watch21.shop", "watch22.shop"];

function isCdnDomain(url) {
    if (!url) return false;
    const u = url.toLowerCase();
    return CDN_DOMAINS.some(d => u.includes(d));
}

function resolveHeaders(url) {
    if (isCdnDomain(url)) {
        return { Referer: CDN_REFERER, Origin: CDN_ORIGIN, "User-Agent": USER_AGENT };
    }
    return { Referer: CINEBY_REFERER, Origin: CINEBY_ORIGIN, "User-Agent": USER_AGENT };
}

async function scrapePlaysrc(id, type, season, episode) {
    const url = type === "movie"
        ? PLAYSRC_MOVIE.replace("%s", id)
        : PLAYSRC_TV.replace("%s", id).replace("%s", season).replace("%s", episode);

    try {
        const res = await fetch(url, { headers: { "User-Agent": USER_AGENT }, signal: AbortSignal.timeout(8000) });
        if (!res.ok) return [];
        const data = await res.json();
        if (!Array.isArray(data)) return [];

        return data
            .filter(item => item.file)
            .map((item, idx) => {
                const srcHeaders = item.headers || {};
                const url = item.file;
                const cdnHeaders = isCdnDomain(url)
                    ? { Referer: CDN_REFERER, Origin: CDN_ORIGIN }
                    : {};
                const finalHeaders = {
                    "User-Agent": USER_AGENT,
                    ...(srcHeaders.Referer ? { Referer: srcHeaders.Referer } : {}),
                    ...(srcHeaders.Origin ? { Origin: srcHeaders.Origin } : {}),
                    ...cdnHeaders,
                };
                if (!finalHeaders.Referer) finalHeaders.Referer = CINEBY_REFERER;
                if (!finalHeaders.Origin) finalHeaders.Origin = CINEBY_ORIGIN;

                return {
                    name: "PlaySrc",
                    title: `PlaySrc [S${idx + 1}] · ${url.includes(".m3u8") ? "HLS" : "MP4"}`,
                    url: url,
                    quality: "Auto",
                    headers: finalHeaders,
                };
            });
    } catch (e) {
        return [];
    }
}

async function scrapeVidflix(id, type, season, episode) {
    const url = type === "movie"
        ? VIDFLIX_URL.replace("%s", id)
        : VIDFLIX_TV.replace("%s", id).replace("%s", season).replace("%s", episode);

    try {
        const res = await fetch(url, { headers: { "User-Agent": USER_AGENT }, signal: AbortSignal.timeout(8000) });
        if (!res.ok) return [];
        const data = await res.json();
        if (!Array.isArray(data)) return [];

        return data
            .filter(item => item.file)
            .map((item, idx) => {
                const srcHeaders = item.headers || {};
                const url = item.file;
                const cdnHeaders = isCdnDomain(url)
                    ? { Referer: CDN_REFERER, Origin: CDN_ORIGIN }
                    : {};
                const finalHeaders = {
                    "User-Agent": USER_AGENT,
                    ...(srcHeaders.Referer ? { Referer: srcHeaders.Referer } : {}),
                    ...(srcHeaders.Origin ? { Origin: srcHeaders.Origin } : {}),
                    ...cdnHeaders,
                };
                if (!finalHeaders.Referer) finalHeaders.Referer = CINEBY_REFERER;
                if (!finalHeaders.Origin) finalHeaders.Origin = CINEBY_ORIGIN;

                return {
                    name: "VidFlix",
                    title: `VidFlix [S${idx + 1}] · ${url.includes(".m3u8") ? "HLS" : "MP4"}`,
                    url: url,
                    quality: "Auto",
                    headers: finalHeaders,
                };
            });
    } catch (e) {
        return [];
    }
}

async function getStreams(id, type, season, episode) {
    const [playsrcStreams, vidflixStreams] = await Promise.allSettled([
        scrapePlaysrc(id, type, season || null, episode || null),
        scrapeVidflix(id, type, season || null, episode || null),
    ]);

    const streams = [];
    if (playsrcStreams.status === "fulfilled") streams.push(...playsrcStreams.value);
    if (vidflixStreams.status === "fulfilled") streams.push(...vidflixStreams.value);

    return streams;
}

module.exports = { getStreams };