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
    const apiUrl = API_URL.replace("%s", id).replace("%s", type);
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

        const results = [];
        for (const streamUrl of streamUrls) {
            try {
                const headers = { Referer: CDN_ORIGIN + "/", Origin: CDN_ORIGIN, "User-Agent": USER_AGENT };
                const proxyUrl = SV_PROXY + "?u=" + encodeURIComponent(streamUrl) + "&h=" + encodeURIComponent(JSON.stringify(headers));

                const mRes = await fetch(proxyUrl, {
                    headers: { "User-Agent": USER_AGENT },
                    signal: AbortSignal.timeout(10000),
                });
                if (!mRes.ok) throw new Error("proxy status " + mRes.status);
                const body = await mRes.text();
                if (!body.includes("#EXT")) throw new Error("not a playlist");

                const lines = body.split("\n");
                let found = 0;
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i].trim();
                    if (line.startsWith("#EXT-X-STREAM-INF")) {
                        const nextLine = lines[i + 1]?.trim();
                        if (nextLine && nextLine.startsWith("http")) {
                            const quality = parseResolution(line);
                            results.push({
                                name: "VaPlayer",
                                title: "VaPlayer [" + quality + "] · HLS",
                                url: nextLine,
                                quality: quality,
                                headers: { "User-Agent": USER_AGENT },
                            });
                            found++;
                        }
                    }
                }

                if (!found) throw new Error("no variants");
            } catch (e) {
                results.push({
                    name: "VaPlayer",
                    title: "VaPlayer · HLS",
                    url: streamUrl,
                    quality: "Auto",
                    headers: { Referer: CDN_ORIGIN + "/", Origin: CDN_ORIGIN, "User-Agent": USER_AGENT },
                });
            }
        }
        return results;
    } catch (e) {
        return [];
    }
}

module.exports = { getStreams, name: "VaPlayer", supportedTypes: ["movie", "tv"] };
