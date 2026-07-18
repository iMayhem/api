const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";
const SV_BASE = "https://streamvaultsrc.click";

async function verifySegment(segUrl) {
    try {
        const res = await fetch(segUrl, { headers: { "User-Agent": USER_AGENT }, signal: AbortSignal.timeout(6000) });
        if (!res.ok) return false;
        const buf = Buffer.from(await res.arrayBuffer());
        if (buf.byteLength < 100) return false;
        const firstBytes = buf.slice(0, 16);
        // Reject image placeholders (PNG, GIF, JPEG) — upstream returns 1x1 PNG for broken segments
        if (firstBytes[0] === 0x89 && firstBytes[1] === 0x50 && firstBytes[2] === 0x4E && firstBytes[3] === 0x47) return false;
        if (firstBytes[0] === 0x47 && firstBytes[1] === 0x49 && firstBytes[2] === 0x46) return false;
        if (firstBytes[0] === 0xFF && firstBytes[1] === 0xD8) return false;
        // Check for HTML/JSON error pages
        const textStart = buf.slice(0, Math.min(buf.byteLength, 100)).toString().toLowerCase().trim();
        if (textStart.includes("<html") || textStart.includes("<!doctype") || textStart.includes("upstream") || textStart.startsWith("{") || textStart.startsWith("[")) return false;
        return true;
    } catch (e) {
        return false;
    }
}

async function verifyHlsStream(url) {
    try {
        const masterRes = await fetch(url, { headers: { "User-Agent": USER_AGENT }, signal: AbortSignal.timeout(6000) });
        if (!masterRes.ok) return false;
        const masterText = await masterRes.text();
        if (!masterText.startsWith("#EXTM3U")) return false;

        let playlistText = masterText;
        if (masterText.includes("#EXT-X-STREAM-INF")) {
            // It's a multivariant playlist, we need to extract and fetch the variant stream playlist
            const lines = masterText.split("\n");
            let variantUrl = null;
            for (const line of lines) {
                if (line.trim().startsWith("http")) { variantUrl = line.trim(); break; }
            }
            if (variantUrl) {
                const varRes = await fetch(variantUrl, { headers: { "User-Agent": USER_AGENT }, signal: AbortSignal.timeout(6000) });
                if (!varRes.ok) return false;
                playlistText = await varRes.text();
                if (!playlistText.startsWith("#EXTM3U")) return false;
            }
        }

        const segLines = playlistText.split("\n");
        let segUrl = null;
        for (const line of segLines) {
            if (line.trim().startsWith("http")) { segUrl = line.trim(); break; }
        }
        if (!segUrl) return false;

        return await verifySegment(segUrl);
    } catch (e) {
        return false;
    }
}

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

        const results = await Promise.allSettled(data.streams.map(async (s) => {
            const streamType = s.type === "mp4" ? "MP4" : "HLS";
            if (streamType === "HLS") {
                const valid = await verifyHlsStream(s.url);
                if (!valid) return null;
            } else {
                // For MP4 streams, verify content via partial GET
                try {
                    const peekRes = await fetch(s.url, { method: "GET", headers: { "User-Agent": USER_AGENT, Range: "bytes=0-200" }, signal: AbortSignal.timeout(5000) });
                    if (!peekRes.ok && peekRes.status !== 206) return null;
                    const buf = await peekRes.arrayBuffer();
                    if (buf.byteLength < 20) return null;
                    const txt = Buffer.from(buf.slice(0, Math.min(buf.byteLength, 100))).toString().toLowerCase();
                    if (txt.includes("<html") || txt.includes("upstream") || txt.includes("<!doctype") || txt.startsWith("{") || txt.startsWith("[")) return null;
                } catch (e) {
                    return null;
                }
            }
            return {
                name: s.provider || "Zeus",
                title: (s.provider || "Zeus") + " [" + (s.quality || "Auto") + "] · " + streamType,
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

module.exports = { getStreams, name: "Zeus", supportedTypes: ["movie", "tv"] };
