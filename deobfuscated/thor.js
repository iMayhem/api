const API_BASE = "https://401473fc.vidrift.pages.dev";
const REFERRER = "https://vidrift.pages.dev";
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

async function getStreams(id, type, season, episode) {
    const isMovie = type !== "tv";
    const path = isMovie
        ? `/api/source/movie/${encodeURIComponent(id)}`
        : `/api/source/tv/${encodeURIComponent(id)}/${season ?? 1}/${episode ?? 1}`;

    try {
        const res = await fetch(`${API_BASE}${path}`, {
            headers: { "User-Agent": USER_AGENT, "Referer": `${API_BASE}/` },
            signal: AbortSignal.timeout(15000),
        });
        if (!res.ok) return [];
        const data = await res.json();
        if (!data.success) return [];

        const captions = (data.subtitles ?? []).flatMap((s, i) => {
            const url = s.url ?? s.file;
            if (!url) return [];
            const lang = (s.language ?? s.lang ?? s.label ?? s.name ?? "unknown").toLowerCase();
            const type_ = (s.type ?? "").toLowerCase() === "vtt" || url.toLowerCase().endsWith(".vtt") ? "vtt" : "srt";
            return [{
                id: `thor-${lang}-${i}`,
                url: new URL(url, API_BASE).toString(),
                language: lang,
                type: type_,
                hasCorsRestrictions: false,
                display: s.label ?? s.name ?? lang,
                source: "thor",
            }];
        });

        const streams = (data.streams ?? []).flatMap((s, i) => {
            const url = s.url ?? s.proxyUrl;
            if (!url) return [];
            return [{
                id: `thor-${s.index ?? i}`,
                name: "Thor",
                title: `Thor [S${(s.index ?? i) + 1}] · HLS`,
                url: new URL(url, API_BASE).toString(),
                quality: s.quality || "Auto",
                type: "hls",
                captions,
                headers: {
                    Referer: `${REFERRER}/`,
                    Origin: REFERRER,
                    "User-Agent": USER_AGENT,
                },
            }];
        });

        return streams;
    } catch (e) {
        return [];
    }
}

module.exports = { getStreams, name: "Thor", supportedTypes: ["movie", "tv"] };
