const DOMAINS_URL =
  "https://raw.githubusercontent.com/wooodyhood/nuvio-repo/main/domains.json";
let PURSTREAM_FALLBACK = "club";
let PURSTREAM_API = "https://api.purstream." + PURSTREAM_FALLBACK + "/api/v1";
let PURSTREAM_REFERER = "https://purstream." + PURSTREAM_FALLBACK + "/";
const PURSTREAM_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const TMDB_KEY = "f3d757824f08ea2cff45eb8f47ca3a1e";
let _cachedEndpoint = null;

function getTmdbDetails(tmdbId, mediaType) {
  const url =
    "https://api.themoviedb.org/3/" +
    (mediaType === "tv" ? "tv" : "movie") +
    "/" +
    tmdbId +
    "?api_key=" +
    TMDB_KEY +
    "&language=en-US";

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const date = data.release_date || data.first_air_date || "";
      return {
        enName: data.title || data.name || "Purstream",
        year: date ? date.split("-")[0] : "",
        duration:
          mediaType === "movie" && data.runtime
            ? data.runtime + " min"
            : mediaType === "tv" &&
              data.episode_run_time &&
              data.episode_run_time.length > 0
            ? data.episode_run_time[0] + " min"
            : "",
      };
    })
    .catch(() => ({
      enName: "Purstream",
      year: "",
      duration: "",
    }));
}

function getEpisodeInfo(tmdbId, season, episode) {
  if (!tmdbId || !season || !episode) return Promise.resolve(null);

  const url =
    "https://api.themoviedb.org/3/tv/" +
    tmdbId +
    "/season/" +
    season +
    "/episode/" +
    episode +
    "?api_key=" +
    TMDB_KEY +
    "&language=en-US";

  return fetch(url)
    .then((res) => res.json())
    .then((data) => ({
      name: data.name || null,
      duration: data.runtime ? data.runtime + " min" : null,
    }))
    .catch(() => null);
}

function buildPurstreamTitle(
  media,
  quality,
  lang,
  format,
  season,
  episode,
  episodeInfo,
  sourceName
) {
  let q = quality.toLowerCase().replace(/p/g, "") + "p";
  const fire = "🔥";
  let audioLabel = "VF";
  let audioFlags = "🇫🇷";

  const combined = (String(sourceName) + " " + String(lang)).toUpperCase();

  if (
    combined.indexOf("MULTI") !== -1 ||
    combined.indexOf("DUAL") !== -1
  ) {
    audioLabel = "Dual-Audio";
    audioFlags = "🇺🇸 • 🇫🇷";
  } else if (combined.indexOf("VOST") !== -1) {
    audioLabel = "VOSTFR";
    audioFlags = "🇺🇸 • 🇫🇷";
  }

  let line1 = "🎬 ";
  if (season && episode) {
    line1 +=
      "S" +
      season +
      " E" +
      episode +
      (episodeInfo && episodeInfo.name ? " - " + episodeInfo.name : "") +
      " | " +
      media.enName;
  } else {
    line1 += media.enName + (media.year ? " - " + media.year : "");
  }

  const line2 =
    fire + " " + q + " | 🔊 " + audioLabel + " | 🗣️ " + audioFlags;

  let fmt = (format || "M3U8").toUpperCase();
  let codec = "H.264";
  if (
    combined.indexOf("HEVC") !== -1 ||
    combined.indexOf("X265") !== -1 ||
    combined.indexOf("H265") !== -1
  ) {
    codec = "H.265";
  }

  const duration =
    episodeInfo && episodeInfo.duration
      ? episodeInfo.duration
      : media.duration;
  const durationPart = duration ? " | " + duration : "";

  const line3 =
    "🎯 " + fmt + " • " + codec + " | 🎧 AAC" + durationPart;

  return line1 + "\n" + line2 + "\n" + line3;
}

function detectPurstreamDomain() {
  if (_cachedEndpoint) return Promise.resolve(_cachedEndpoint);

  return fetch(DOMAINS_URL)
    .then((res) => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then((data) => {
      const domain = data.purstream || PURSTREAM_FALLBACK;
      _cachedEndpoint = {
        api: "https://api.purstream." + domain + "/api/v1",
        referer: "https://purstream." + domain + "/",
      };
      return _cachedEndpoint;
    })
    .catch(() => ({
      api: "https://api.purstream." + PURSTREAM_FALLBACK + "/api/v1",
      referer: "https://purstream." + PURSTREAM_FALLBACK + "/",
    }));
}

function applyPurstreamDomain(endpoint) {
  PURSTREAM_API = endpoint.api;
  PURSTREAM_REFERER = endpoint.referer;
}

function cleanTitle(title) {
  if (!title) return "";
  return title
    .toLowerCase()
    .replace(/[àáâãäå]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôõö]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractYear(str) {
  if (!str) return null;
  const m = String(str).match(/(\d{4})/);
  return m ? parseInt(m[1], 10) : null;
}

function getTmdbSearchMeta(tmdbId, mediaType) {
  const type = mediaType === "tv" ? "tv" : "movie";
  const url =
    "https://api.themoviedb.org/3/" +
    type +
    "/" +
    tmdbId +
    "?language=fr-FR&api_key=" +
    TMDB_KEY;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => ({
      fr: data.title || data.name,
      orig: data.original_title || data.original_name,
      year: extractYear(data.release_date || data.first_air_date),
    }));
}

function findPurstreamIdByTitle(title, mediaType, year) {
  const q = encodeURIComponent(title);
  return fetch(PURSTREAM_API + "/search-bar/search/" + q, {
    headers: {
      "User-Agent": PURSTREAM_UA,
      Referer: PURSTREAM_REFERER,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      const items =
        json.data &&
        json.data.items &&
        json.data.items.movies &&
        json.data.items.movies.items
          ? json.data.items.movies.items
          : [];

      if (items.length === 0) throw new Error();

      const cleaned = cleanTitle(title);
      const match =
        items.find((item) => {
          const itemYear = extractYear(item.release_date);
          return (
            cleanTitle(item.title) === cleaned &&
            (Math.abs(year - itemYear) <= 1 || !year)
          );
        }) || items[0];

      return match.id;
    });
}

function fetchMovieSources(id) {
  return fetch(PURSTREAM_API + "/media/" + id + "/sheet", {
    headers: {
      "User-Agent": PURSTREAM_UA,
      Referer: PURSTREAM_REFERER,
    },
  })
    .then((res) => res.json())
    .then((json) => json.data.items.urls || []);
}

function fetchEpisodeSources(id, season, episode) {
  return fetch(
    PURSTREAM_API +
      "/stream/" +
      id +
      "/episode?season=" +
      (season || 1) +
      "&episode=" +
      (episode || 1),
    {
      headers: {
        "User-Agent": PURSTREAM_UA,
        Referer: PURSTREAM_REFERER,
      },
    }
  )
    .then((res) => res.json())
    .then((json) => json.data.items.sources || []);
}

function parseLang(name) {
  const upper = (name || "").toUpperCase();
  if (upper.indexOf("VOSTFR") !== -1) return "VOSTFR";
  if (upper.indexOf("VF") !== -1) return "VF";
  return "Dual-Audio";
}

function parseQuality(name) {
  const upper = (name || "").toUpperCase();
  if (upper.indexOf("4K") !== -1) return "4K";
  if (upper.indexOf("1080") !== -1) return "1080p";
  if (upper.indexOf("720") !== -1) return "720p";
  return "HD";
}

function normalizeMovieSources(sources, media) {
  return sources
    .filter(
      (s) =>
        s.url &&
        (s.url.match(/\.m3u8/i) || s.url.match(/\.mp4/i))
    )
    .map((s) => {
      const quality = parseQuality(s.name);
      const format = s.url.match(/\.mp4/i) ? "mp4" : "m3u8";
      const lang = parseLang(s.name);
      const title = buildPurstreamTitle(
        media,
        quality,
        lang,
        format,
        null,
        null,
        null,
        s.name
      );

      return {
        name: "Purstream | " + quality.toLowerCase() + " | " + lang,
        title,
        size: title,
        description: title,
        url: s.url,
        quality: "",
        language: "",
        format,
        headers: {
          "User-Agent": PURSTREAM_UA,
          Referer: PURSTREAM_REFERER,
        },
      };
    });
}

function normalizeEpisodeSources(
  sources,
  media,
  season,
  episode,
  episodeInfo
) {
  return sources.map((s) => {
    const quality = parseQuality(s.source_name);
    const format = s.format || "m3u8";
    const lang = parseLang(s.source_name);
    const title = buildPurstreamTitle(
      media,
      quality,
      lang,
      format,
      season,
      episode,
      episodeInfo,
      s.source_name
    );

    return {
      name: "Purstream | " + quality.toLowerCase() + " | " + lang,
      title,
      size: title,
      description: title,
      url: s.stream_url,
      quality: "",
      language: "",
      format,
      headers: {
        "User-Agent": PURSTREAM_UA,
        Referer: PURSTREAM_REFERER,
      },
    };
  });
}

function getStreams(tmdbId, mediaType, season, episode) {
  return Promise.all([
    getTmdbDetails(tmdbId, mediaType),
    mediaType === "tv"
      ? getEpisodeInfo(tmdbId, season, episode)
      : Promise.resolve(null),
    detectPurstreamDomain(),
    getTmdbSearchMeta(tmdbId, mediaType),
  ])
    .then(([media, episodeInfo, endpoint, searchMeta]) => {
      applyPurstreamDomain(endpoint);

      return findPurstreamIdByTitle(
        searchMeta.fr,
        mediaType,
        searchMeta.year
      )
        .catch(() =>
          findPurstreamIdByTitle(
            searchMeta.orig,
            mediaType,
            searchMeta.year
          )
        )
        .then((id) => {
          if (mediaType === "tv") {
            return fetchEpisodeSources(id, season, episode).then(
              (sources) =>
                normalizeEpisodeSources(
                  sources,
                  media,
                  season,
                  episode,
                  episodeInfo
                )
            );
          }
          return fetchMovieSources(id).then((sources) =>
            normalizeMovieSources(sources, media)
          );
        });
    })
    .catch(() => []);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getStreams, name: "Ares" };
} else {
  global.getStreams = getStreams;
}
