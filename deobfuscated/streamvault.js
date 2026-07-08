const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";
const SV_BASE = "https://streamvaultsrc.click";

async function getStreams(id, type, season, episode) {
    const streamUrl = SV_BASE + "/api/embed-streams/" + type + "/" + id + "?et=direct";
    try {
        const res = await fetch(streamUrl, {
            headers: { "User-Agent": USER_AGENT, "Referer": SV_BASE + "/embed/" + type + "/" + id },
            signal: AbortSignal.timeout(12000),
        });
        if (!res.ok) return [];
        const data = await res.json();
        if (!data.streams || !data.streams.length) return [];

        // Verify streams in parallel, filter out dead ones quickly
        const results = await Promise.allSettled(data.streams.map(async (s) => {
            const streamType = s.type === "mp4" ? "MP4" : "HLS";
            // Quick reachability check
            try {
                const head = await fetch(s.url, { method: "HEAD", headers: { "User-Agent": USER_AGENT }, signal: AbortSignal.timeout(4000) });
                if (head.status >= 400) return null;
            } catch (e) {
                return null;
            }
            return {
                name: s.provider || "StreamVault",
                title: (s.provider || "StreamVault") + " [" + (s.quality || "Auto") + "] · " + streamType,
                url: s.url,
                quality: s.quality || "Auto",
                headers: s.headers || { "User-Agent": USER_AGENT },
            };
        }));

        return results.filter(r => r.status === "fulfilled" && r.value !== null).map(r => r.value);
    } catch (e) {
        return [];
    }
}

module.exports = { getStreams, name: "StreamVault", supportedTypes: ["movie", "tv"] };
