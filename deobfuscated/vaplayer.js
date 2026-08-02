const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

const API_URL = "https://streamdata.vaplayer.ru/api.php?tmdb=%s&type=%s";
const CDN_ORIGIN = "https://nextgencloudfabric.com";
const SV_PROXY = "https://streamvaultsrc.click/stream-proxy/pl";

function parseResolution(line) {
    const m = line.match(/RESOLUTION=(\d+)x(\d+)/);
    if (m) return m[1] + "p";
    const bm = line.match(/BANDWIDTH=(\d+)/);
    if (bm) {
        const b = parseInt(bm[1]);
        if (b > 4000000) return "4K";
        if (b > 2000000) return "1080p";
        if (b > 1000000) return "720p";
        if (b > 500000) return "480p";
        return "360p";
    }
    return "Auto";
}

async function getStreams(id, type, season, episode) {
    let apiUrl = `https://streamdata.vaplayer.ru/api.php?tmdb=${id}&type=${type}`;
    if (type === 'tv' && season) {
        apiUrl += `&season=${season}`;
        if (episode) apiUrl += `&episode=${episode}`;
    }
    try {
        const res = await fetch(apiUrl, {
            headers: { "User-Agent": USER_AGENT, "Referer": CDN_ORIGIN + "/", "Origin": CDN_ORIGIN },
            signal: AbortSignal.timeout(12000),
        });
        if (!res.ok) return [];
        const data = await res.json();
        if (data.status_code !== "200") return [];
        const streamUrls = data.data?.stream_urls || [];
        if (!streamUrls.length) return [];

        // Verify all candidate masters in PARALLEL (instead of serially). Wait only for the
        // FIRST verified master (Promise.any) so a single flaky CDN can no longer stall playback.
        const verifyOne = async (streamUrl, headers) => {
            const proxyUrl = SV_PROXY + "?u=" + encodeURIComponent(streamUrl) + "&h=" + encodeURIComponent(JSON.stringify(headers));
            const mRes = await fetch(proxyUrl, {
                headers: { "User-Agent": USER_AGENT },
                signal: AbortSignal.timeout(4000),
            });
            if (!mRes.ok) throw new Error("proxy status " + mRes.status);
            const body = await mRes.text();
            if (!body.includes("#EXT")) throw new Error("not a playlist");
            return { proxyUrl, body };
        };

        const mkResult = (proxyUrl, body, streamUrl) => {
            const lines = body.split("\n");
            let bestQuality = "Auto";
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].includes("EXT-X-STREAM-INF")) {
                    bestQuality = parseResolution(lines[i]);
                }
            }
            return {
                name: "Poseidon",
                title: "Poseidon · HLS",
                url: proxyUrl,
                quality: bestQuality,
                headers: { "User-Agent": USER_AGENT },
            };
        };

        const verifiedHeaders = { Referer: CDN_ORIGIN + "/", Origin: CDN_ORIGIN, "User-Agent": USER_AGENT };
        let results = [];
        try {
            const first = await Promise.any(streamUrls.map(u => verifyOne(u, verifiedHeaders).then(({ proxyUrl, body }) => ({ proxyUrl, body }))));
            results.push(mkResult(first.proxyUrl, first.body, ""));
        } catch (e) {
            // All verifications failed/timed out: fall back to the raw stream URL so the
            // player proxy can still attempt playback.
            results = streamUrls.map(streamUrl => ({
                name: "Poseidon",
                title: "Poseidon · HLS",
                url: streamUrl,
                quality: "Auto",
                headers: { Referer: CDN_ORIGIN + "/", Origin: CDN_ORIGIN, "User-Agent": USER_AGENT },
            }));
        }
        return results;
    } catch (e) {
        return [];
    }
}

function rankOf(q) {
    const order = ["4K", "2160p", "1080p", "720p", "480p", "360p", "Auto", "SD"];
    const i = order.indexOf(q);
    return i === -1 ? order.length : i;
}

module.exports = { getStreams, name: "Poseidon", supportedTypes: ["movie", "tv"] };
