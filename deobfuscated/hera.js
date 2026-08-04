"use strict";

const API_BASES = [
  "https://anicineemebd.onrender.com",
  "https://aniwish.emebd.workers.dev",
  "https://embed.anas639630khan.workers.dev",
];

const TMDB_PROXY = "https://anicine.xyz/api/tmdb";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

let _tokenCache = null; // { token, expiresAt, base }

async function getToken(base) {
  const now = Date.now() / 1000;
  if (
    _tokenCache &&
    _tokenCache.base === base &&
    _tokenCache.expiresAt - now > 60
  ) {
    return _tokenCache.token;
  }
  const res = await fetch(base + "/v1/token", {
    headers: { "User-Agent": UA },
  });
  if (!res.ok) throw new Error("Token fetch failed: " + res.status);
  const data = await res.json();
  _tokenCache = {
    token: data.token,
    expiresAt: Math.floor(new Date(data.expiresAt).getTime() / 1000),
    base,
  };
  return data.token;
}

async function fetchWithToken(base, path) {
  const token = await getToken(base);
  const res = await fetch(base + path, {
    headers: {
      "User-Agent": UA,
      Authorization: "Bearer " + token,
      Accept: "application/json",
    },
  });
  if (!res.ok) throw new Error("API " + res.status + " " + path);
  return res.json();
}

async function getTmdbMeta(tmdbId, mediaType) {
  const type = mediaType === "tv" ? "tv" : "movie";
  try {
    const res = await fetch(
      TMDB_PROXY + "?path=/" + type + "/" + tmdbId,
      { headers: { "User-Agent": UA } }
    );
    if (!res.ok) return { title: "Unknown", year: "" };
    const d = await res.json();
    const title = d.title || d.name || "Unknown";
    const date = d.release_date || d.first_air_date || "";
    return { title, year: date ? date.split("-")[0] : "" };
  } catch {
    return { title: "Unknown", year: "" };
  }
}

function formatStream(src, meta, serverLabel, season, episode) {
  const quality = src.quality || "Auto";
  const provider =
    (src.provider && (src.provider.name || src.provider.id)) || "CinePro";
  const audio =
    (src.audioTracks &&
      src.audioTracks.map((a) => a.label || a.language).join(", ")) ||
    "Original";
  const format = src.type === "hls" || (src.url || "").includes("m3u8")
    ? "M3U8"
    : "MP4";

  let line1 = "🎬 " + meta.title;
  if (season && episode) {
    line1 +=
      " S" +
      String(season).padStart(2, "0") +
      "E" +
      String(episode).padStart(2, "0");
  } else if (meta.year) {
    line1 += " - (" + meta.year + ")";
  }

  const description =
    line1 +
    "\n💎 " +
    quality +
    " | 🔊 " +
    audio +
    "\n🎞️ " +
    format +
    " | 🔗 " +
    provider +
    " · " +
    serverLabel;

  return {
    name: "AniCine | " + quality + " | " + provider,
    title: description,
    size: description,
    description,
    url: src.url,
    quality: quality,
    language: audio,
    headers: {
      "User-Agent": UA,
      Referer: "https://anicine.xyz/",
    },
    subtitles: [],
    provider: "anicine",
    _server: serverLabel,
  };
}

async function scrapeBase(base, tmdbId, mediaType, season, episode, meta) {
  let path;
  if (mediaType === "tv") {
    path =
      "/v1/tv/" +
      tmdbId +
      "/seasons/" +
      (season || 1) +
      "/episodes/" +
      (episode || 1);
  } else {
    path = "/v1/movies/" + tmdbId;
  }

  const label = base.replace(/^https?:\/\//, "").split(".")[0];
  try {
    const data = await fetchWithToken(base, path);
    const sources = data.sources || [];
    const subs = (data.subtitles || []).map((s) => ({
      url: s.url,
      language: s.language || s.label || "en",
      name: s.label || s.language || "Subtitle",
      headers: { "User-Agent": UA, Referer: base + "/" },
    }));

    return sources
      .filter((s) => s && s.url)
      .map((s) => {
        const stream = formatStream(s, meta, label, season, episode);
        if (subs.length) stream.subtitles = subs;
        return stream;
      });
  } catch (err) {
    console.warn("[Hera] " + label + " failed: " + err.message);
    return [];
  }
}

/**
 * @param {string|number} tmdbId
 * @param {"movie"|"tv"} mediaType
 * @param {number|null} season
 * @param {number|null} episode
 */
async function getStreams(tmdbId, mediaType, season = null, episode = null) {
  console.log(
    "[Hera] TMDB " +
      tmdbId +
      " type=" +
      mediaType +
      (mediaType === "tv" ? " S" + season + "E" + episode : "")
  );

  try {
    const meta = await getTmdbMeta(tmdbId, mediaType);
    console.log('[Hera] "' + meta.title + '" (' + (meta.year || "N/A") + ")");

    const results = await Promise.all(
      API_BASES.map((base) =>
        scrapeBase(base, tmdbId, mediaType, season, episode, meta)
      )
    );

    const all = [];
    const seen = new Set();
    for (const list of results) {
      for (const s of list) {
        // Dedupe by underlying stream path (ignore proxy host)
        const key = s.url.split("data=")[1] || s.url;
        if (seen.has(key)) continue;
        seen.add(key);
        all.push(s);
      }
    }

    console.log("[Hera] Total streams: " + all.length);
    return all;
  } catch (err) {
    console.error("[Hera] Error: " + err.message);
    return [];
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getStreams, name: "Hera", supportedTypes: ["movie", "tv"] };
} else {
  global.getStreams = getStreams;
}
