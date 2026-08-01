// Vyla SDK provider — wraps @vyla-entertainment/sdk (ESM) via dynamic import
const fs = require('fs');
const TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
const HARD_CAP_MS = 15000;
const CONFIG_PATH = "/root/api/server/providers.json";

function loadSubConfig() {
  try {
    const cfg = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
    const p = cfg.vyla || {};
    return {
      disabled: new Set(p.disabledServers || []),
      order: Array.isArray(p.serverOrder) ? p.serverOrder : [],
    };
  } catch (e) {
    return { disabled: new Set(), order: [] };
  }
}

let sdkPromise = null;
function getSdk() {
  if (!sdkPromise) {
    sdkPromise = import("@vyla-entertainment/sdk").then(
      (m) => new m.default({ tmdbApiKey: TMDB_API_KEY })
    );
  }
  return sdkPromise;
}

async function getServerList() {
  const sdk = await getSdk();
  return sdk.getSources(true).map((s) => ({ key: s.key, label: s.label || s.key }));
}

function withCap(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error("vyla timeout")), ms)),
  ]);
}

async function getStreams(tmdbId, type, season, episode) {
  const sdk = await getSdk();
  const { disabled, order } = loadSubConfig();
  let sources = sdk.getSources(true).filter((s) => !disabled.has(s.key));
  if (order.length) {
    const pos = new Map(order.map((k, i) => [k, i]));
    sources = [...sources].sort((a, b) => (pos.get(a.key) ?? 1e9) - (pos.get(b.key) ?? 1e9));
  }
  const sNum = season != null && season !== "" ? Number(season) : null;
  const eNum = episode != null && episode !== "" ? Number(episode) : null;
  const seen = new Set();
  const streams = [];
  const push = (url, quality, headers) => {
    if (!url || seen.has(url)) return;
    seen.add(url);
    const isHls = /\.m3u8(\?|$)/i.test(url);
    streams.push({
      url,
      type: isHls ? "m3u8" : "mp4",
      quality: String(quality || "auto"),
      headers: headers && typeof headers === "object" && Object.keys(headers).length > 0 ? headers : undefined,
    });
  };
  await Promise.allSettled(
    sources.map(async (src) => {
      try {
        const result = await withCap(
          sdk.getStream(src.key, String(tmdbId), sNum, eNum),
          HARD_CAP_MS
        );
        if (!result) return;
        if (Array.isArray(result.allUrls) && result.allUrls.length > 0) {
          for (const u of result.allUrls) {
            if (!u || !u.url) continue;
            const isHls = u.type === "hls" || /\.m3u8(\?|$)/i.test(u.url);
            push(u.url, u.quality, u.headers, isHls);
          }
        } else if (result.url) {
          push(result.url, result.quality, result.headers);
        }
      } catch (e) {
        // ignore individual source failures
      }
    })
  );
  return streams;
}

module.exports = { getStreams, name: "Vyla", getServerList };
