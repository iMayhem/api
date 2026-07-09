const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

const SOURCE_API = "https://vidrift.in/api/source/%s/%s?source=embed";
const PROXY_URL = "https://vidrift.in/api/proxy/hls?url=%s";
const SUBTITLE_API = "https://vidrift.in/api/source/subtitles/%s/%s";

async function getStreams(id, type, season, episode) {
    const sourceUrl = SOURCE_API.replace("%s", type).replace("%s", id);
    try {
        const res = await fetch(sourceUrl, {
            headers: {
                "User-Agent": USER_AGENT,
                "Referer": `https://vidrift.in/embed/${type}/${id}`,
                "Origin": "https://vidrift.in",
            },
            signal: AbortSignal.timeout(12000),
        });
        if (!res.ok) return [];
        const data = await res.json();
        if (!data.success) return [];
        if (!data.streams || !data.streams.length) return [];

        const cdnInfo = data.cdn || {};
        const fallbackOrigin = cdnInfo.origin || "https://vidrift.in";
        const fallbackReferer = cdnInfo.referer || "https://vidrift.in/";

        const streams = data.streams.map((s, idx) => ({
            name: "Hades",
            title: `Hades [S${idx + 1}] · HLS`,
            url: s.url,
            quality: s.quality || "Auto",
            headers: {
                Referer: fallbackReferer,
                Origin: fallbackOrigin,
                "User-Agent": USER_AGENT,
            },
        }));

        if (data.captions?.length) {
            for (const caption of data.captions) {
                // captions proxy URL could be added here
            }
        }

        return streams;
    } catch (e) {
        return [];
    }
}

module.exports = { getStreams, name: "Hades", supportedTypes: ["movie", "tv"] };

