var __async = (thisArg, args, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (result) =>
      result.done
        ? resolve(result.value)
        : Promise.resolve(result.value).then(fulfilled, rejected);
    step((generator = generator.apply(thisArg, args)).next());
  });
};

const TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const WINGS_API_BASE = "https://api.speedracelight.com";
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

const REQUEST_HEADERS = {
  "User-Agent": USER_AGENT,
  Accept: "*/*",
  Origin: "https://www.vidking.net",
  Referer: "https://www.vidking.net/",
  "Cache-Control": "no-cache, no-store, must-revalidate",
  Pragma: "no-cache",
  Expires: "0",
};

const SERVERS = {
  Hydrogen: { path: "cdn/sources-with-title" },
  Titanium: { path: "tejo/sources-with-title" },
  Oxygen: { path: "neon2/sources-with-title" },
  Lithium: { path: "downloader2/sources-with-title" },
  Krypton: { path: "ym/sources-with-title" },
  Carbon: { path: "mb-flix/sources-with-title" },
  Aluminium: { path: "lamovie/sources-with-title" },
  Nitrogen: { path: "m4uhd/sources-with-title" },
  Neon: { path: "superflix/sources-with-title" },
  Helium: { path: "1movies/sources-with-title" },
};

// --- Custom crypto / stream cipher primitives ---

const jl = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1,
  0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
  0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
];
const Tf = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476];
const Js = 0x3d; // 61
const _f = 0x8;
const ms = 0x9e3779b9;
const Ys = [0x6d, 0x76, 0x6d, 0x31]; // "mvm1"

const Sf = (n) => (n * (n + 1) & 1) === 0;
const bf = (n) => (n * (n + 1) & 1) === 1;

function ui(x) {
  x >>>= 0;
  x ^= x >>> 16;
  x = Math.imul(x, 0x85ebca6b) >>> 0;
  x ^= x >>> 13;
  x = Math.imul(x, 0xc2b2ae35) >>> 0;
  x ^= x >>> 16;
  return x >>> 0;
}

function ps(x, n) {
  x >>>= 0;
  n &= 0x1f;
  if (n === 0) return x >>> 0;
  return ((x << n) | (x >>> (32 - n))) >>> 0;
}

function If(str) {
  let h = Tf[0] >>> 0;
  for (let i = 0; i < str.length; i++) {
    h = ps((h ^ Math.imul(str.charCodeAt(i), jl[i & 0xf])) >>> 0, 5);
  }
  return ui(h);
}

function Af(key) {
  const S = new Array(256);
  for (let i = 0; i < 256; i++) S[i] = i;
  let j = 0;
  for (let i = 0; i < 256; i++) {
    j = (j + S[i] + key.charCodeAt(i % key.length)) & 0xff;
    const tmp = S[i];
    S[i] = S[j];
    S[j] = tmp;
  }
  return S;
}

function wf(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 0x1000193) >>> 0;
  }
  return ui(h);
}

function vf(a, b, c) {
  return (((a ^ b) >>> 0) | ((a & b & c) >>> 0)) >>> 0;
}

function Nf(seed, tmdbId) {
  if (bf(seed.length)) {
    return { S: Af(seed), acc: If(seed) };
  }
  const S = new Array(Js);
  let acc = ui(wf(seed) ^ ui((tmdbId >>> 0) ^ ms)) >>> 0;
  for (let i = 0; i < _f; i++) {
    if (Sf(i)) {
      const idx = acc % Js;
      acc = ps((acc + ms) >>> 0, 7 + (i & 7));
      S[idx] = (acc ^ ui(acc)) >>> 0;
      acc = ui((acc + idx) >>> 0);
    } else {
      S[i] = jl[i & 0xf];
    }
  }
  return { S, acc: ui(acc ^ 0xa5a5a5a5) >>> 0 };
}

function Rf(state, counter) {
  const S = state.S;
  let acc = state.acc;
  const idx = acc % Js;
  const flag = 0 - +(idx in S);
  const sVal = S[idx] >>> 0;
  const mul = Math.imul(ms, counter + 1) >>> 0;
  let x = vf(acc, (sVal ^ mul) >>> 0, flag);
  x = (ps((x + acc) >>> 0, idx & 0x1f) ^ ps(acc, Math.imul(idx, 7) & 0x1f)) >>> 0;
  acc = ui((x + ms) >>> 0);
  S[idx] = acc >>> 0;
  state.acc = acc;
  return acc >>> 0;
}

function Cf(seed, tmdbId, length) {
  const state = Nf(seed, tmdbId);
  const out = new Uint8Array(length);
  let counter = 0;
  for (let i = 0; i < length; ) {
    const val = Rf(state, counter++);
    out[i++] = val & 0xff;
    if (i < length) out[i++] = (val >>> 8) & 0xff;
    if (i < length) out[i++] = (val >>> 16) & 0xff;
    if (i < length) out[i++] = (val >>> 24) & 0xff;
  }
  return out;
}

function decodeBase64(str) {
  const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const cleaned = str
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .replace(/=+$/, "");
  const len = cleaned.length;
  const out = new Uint8Array(Math.floor(len * 0.75));
  let pos = 0;
  for (let i = 0; i < len; i += 4) {
    const a = alphabet.indexOf(cleaned[i]);
    const b = alphabet.indexOf(cleaned[i + 1] || "A");
    const c = alphabet.indexOf(cleaned[i + 2] || "A");
    const d = alphabet.indexOf(cleaned[i + 3] || "A");
    out[pos++] = (a << 2) | (b >> 4);
    if (i + 2 < len) out[pos++] = ((b & 0xf) << 4) | (c >> 2);
    if (i + 3 < len) out[pos++] = ((c & 0x3) << 6) | d;
  }
  return out;
}

function xf(str) {
  return decodeBase64(str);
}

function decryptWingsDatabase(payload, seed, tmdbId) {
  const data = xf(payload);
  const keystream = Cf(seed, tmdbId, data.length);

  for (let i = 0; i < data.length; i++) {
    data[i] ^= keystream[i];
  }

  // Magic header check "mvm1"
  for (let i = 0; i < Ys.length; i++) {
    if (data[i] !== Ys[i]) {
      throw new Error("decrypt failed: bad seed or tampered payload");
    }
  }

  // UTF-8 decode the rest
  let result = "";
  const body = data.subarray(Ys.length);
  for (let i = 0; i < body.length; ) {
    const b = body[i++];
    if (b < 0x80) {
      result += String.fromCharCode(b);
    } else if (b > 0xbf && b < 0xe0) {
      result += String.fromCharCode(((b & 0x1f) << 6) | (body[i++] & 0x3f));
    } else if (b > 0xdf && b < 0xf0) {
      result += String.fromCharCode(
        ((b & 0xf) << 12) |
          ((body[i++] & 0x3f) << 6) |
          (body[i++] & 0x3f)
      );
    } else {
      result += String.fromCharCode(
        ((b & 0x7) << 18) |
          ((body[i++] & 0x3f) << 12) |
          ((body[i++] & 0x3f) << 6) |
          (body[i++] & 0x3f)
      );
    }
  }
  return result;
}

// --- Media helpers ---

function fetchMediaDetails(tmdbId, mediaType, season, episode) {
  return __async(this, null, function* () {
    let duration = mediaType === "tv" ? "45 min" : "90 min";
    try {
      const type = mediaType === "tv" ? "tv" : "movie";
      const id = String(tmdbId).replace(/\D/g, "");
      const url =
        TMDB_BASE_URL +
        "/" +
        type +
        "/" +
        id +
        "?api_key=" +
        TMDB_API_KEY +
        "&append_to_response=external_ids";

      const res = yield fetch(url, {
        headers: {
          "User-Agent": REQUEST_HEADERS["User-Agent"],
          Accept: "application/json",
        },
      });
      if (!res.ok) throw new Error("TMDB HTTP " + res.status);

      const data = yield res.json();
      let finalDuration = duration;

      if (mediaType === "movie" && data.runtime) {
        finalDuration = data.runtime + " min";
      } else if (mediaType === "tv" && season != null && episode != null) {
        const epUrl =
          TMDB_BASE_URL +
          "/tv/" +
          id +
          "/season/" +
          season +
          "/episode/" +
          episode +
          "?api_key=" +
          TMDB_API_KEY;
        const epRes = yield fetch(epUrl);
        if (epRes.ok) {
          const epData = yield epRes.json();
          if (epData && epData.runtime) {
            finalDuration = epData.runtime + " min";
          } else if (
            data.episode_run_time &&
            data.episode_run_time.length > 0
          ) {
            finalDuration = data.episode_run_time[0] + " min";
          }
        }
      }

      return {
        title: mediaType === "tv" ? data.name : data.title,
        year: (mediaType === "tv"
          ? data.first_air_date
          : data.release_date || ""
        ).substring(0, 4),
        imdbId: (data.external_ids == null ? void 0 : data.external_ids.imdb_id) || null,
        mediaType,
        duration: finalDuration,
      };
    } catch (err) {
      console.error("[VidEasy] TMDB details fetch error: " + err.message);
      return {
        title: mediaType === "tv" ? "Unknown TV Show" : "Unknown Movie",
        year: "N/A",
        imdbId: null,
        mediaType,
        duration,
      };
    }
  });
}

function getLangCode(lang) {
  if (!lang) return "en";
  const map = {
    english: "en",
    spanish: "es",
    french: "fr",
    german: "de",
    italian: "it",
    portuguese: "pt",
    "portuguese (br)": "pt-br",
    arabic: "ar",
    japanese: "ja",
    korean: "ko",
    tamil: "ta",
    telugu: "te",
    malayalam: "ml",
    kannada: "kn",
    hindi: "hi",
    polish: "pl",
    greek: "el",
    croatian: "hr",
    ukrainian: "uk",
    lithuanian: "lt",
    thai: "th",
    estonian: "et",
    czech: "cs",
    "zh-tw": "zh-tw",
    bokmål: "no",
    dutch: "nl",
    indonesian: "id",
    sinhala: "si",
    swedish: "sv",
    romanian: "ro",
    malay: "ms",
    persian: "fa",
    slovak: "sk",
    bulgarian: "bg",
    turkish: "tr",
    danish: "da",
    hebrew: "he",
    serbian: "sr",
    vietnamese: "vi",
    hungarian: "hu",
    icelandic: "is",
    albanian: "sq",
    bosnian: "bs",
    slovenian: "sl",
    bengali: "bn",
    macedonian: "mk",
  };
  return map[lang.toLowerCase().trim()] || "en";
}

function formatStreamsForNuvio(jsonStr, serverName, media, season, episode) {
  try {
    const data = JSON.parse(jsonStr);
    if (!data || typeof data !== "object") return [];

    const headers = {
      Referer: "https://www.vidking.net/",
      Origin: "https://www.vidking.net",
      "User-Agent": USER_AGENT,
    };

    const subtitles = (data.subtitles || []).map((s) => ({
      url: s.url,
      language: getLangCode(s.language || s.lang),
      name: s.language || s.lang || "English",
      headers,
    }));

    const emojiMap = {
      Carbon: "💎",
      Helium: "🎈",
      Lithium: "🔋",
      Oxygen: "💨",
      Krypton: "🦸",
      Titanium: "🛡️",
      Hydrogen: "💧",
      Nitrogen: "🌿",
      Neon: "💡",
      Aluminium: "💿",
    };
    const emoji = emojiMap[serverName] || "🎬";

    const providerMap = {
      Hydrogen: "CDN",
      Titanium: "Tejo",
      Oxygen: "Neon2",
      Lithium: "Downloader2",
      Krypton: "YM",
      Carbon: "MB-Flix",
      Aluminium: "LaMovie",
      Nitrogen: "M4UHD",
      Neon: "SuperFlix",
      Helium: "1Movies",
    };
    const providerLabel = providerMap[serverName] || serverName;

    const streams = [];

    (data.sources || []).forEach((src) => {
      if (!src.url) return;

      let quality = src.quality || "1080p";
      quality = quality.replace(/\s*server\s*2\s*$/gi, "").trim();
      if (serverName === "Oxygen") quality = "Auto";

      const qLower = quality.toLowerCase();
      let qualityLabel = "⚡ " + quality;
      if (qLower.includes("2160") || qLower.includes("4k")) {
        qualityLabel = "🌟 2160p";
      } else if (qLower.includes("1080")) {
        qualityLabel = "🔥 1080p";
      } else if (qLower.includes("720")) {
        qualityLabel = "⚡ 720p";
      } else if (qLower === "auto") {
        qualityLabel = "⚡ Auto";
      }

      let audioLabel = "Original Audio";
      let audioEmoji = "🌍 Original Audio";

      if (serverName === "Hydrogen" || serverName === "Krypton") {
        audioLabel = "Original Audio";
        audioEmoji = "🌍 Original Audio";
      } else if (serverName === "Oxygen") {
        audioLabel = "Multi-Audio";
        audioEmoji = "🌍 Multi-Audio";
      } else if (serverName === "Aluminium") {
        audioLabel = "Dual-Audio";
        audioEmoji = "🌍 Dual-Audio";
      } else if (serverName === "Magnesium") {
        const titleLower = (src.title || "").toLowerCase();
        if (titleLower.includes("bengali") || titleLower.includes("bangla")) {
          audioLabel = "Bengali";
          audioEmoji = "🇧🇩 Bengali";
        } else {
          audioLabel = "Normal Hindi";
          audioEmoji = "🇮🇳 Hindi";
        }
      }

      const format = src.url.includes(".m3u8")
        ? "M3U8"
        : src.url.includes(".mp4")
        ? "MP4"
        : "MKV";

      const titleBase =
        media.title +
        (media.mediaType === "tv" ? " S" + season + "E" + episode : "");

      let displayServer = serverName;
      if (displayServer === "Krypton") {
        displayServer = displayServer
          .replace(/\s*(1080p\s+)?server\s*2\s*$/gi, "")
          .trim();
      }

      const description =
        "🎬 " +
        titleBase +
        " - (" +
        media.year +
        ")\n" +
        qualityLabel +
        " | " +
        audioEmoji +
        " | 🎧 AAC\n🎞️ " +
        format +
        " | ⏱️ " +
        media.duration +
        "\n" +
        emoji +
        " " +
        displayServer +
        " | 🔗 Provider: " +
        providerLabel;

      streams.push({
        name: "VidEasy | " + quality + " | " + audioLabel,
        title: description,
        size: description,
        description,
        url: src.url,
        quality: "",
        language: "",
        headers,
        subtitles,
        provider: "videasy",
        _is4k: qLower.includes("2160") || qLower.includes("4k"),
        _serverName: serverName,
      });
    });

    return streams;
  } catch (err) {
    console.error("[VidEasy] Formatting error: " + err.message);
    return [];
  }
}

function fetchFromWingsServer(
  serverName,
  serverConfig,
  mediaType,
  tmdbId,
  mediaDetails,
  seed,
  season,
  episode
) {
  return __async(this, null, function* () {
    const params = {
      title: mediaDetails.title,
      mediaType,
      year: String(mediaDetails.year),
      episodeId: String(episode || 1),
      seasonId: String(season || 1),
      tmdbId: String(tmdbId),
      imdbId: mediaDetails.imdbId || "",
      enc: "2",
      seed,
    };

    const query = Object.keys(params)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
      .join("&");

    const url = WINGS_API_BASE + "/" + serverConfig.path + "?" + query;
    console.log("[VidEasy] Querying server " + serverName + ": " + url);

    try {
      const res = yield fetch(url, { headers: REQUEST_HEADERS });
      if (!res.ok) throw new Error("HTTP " + res.status);

      const text = yield res.text();
      if (!text || text.trim() === "") throw new Error("Empty response");

      const decrypted = decryptWingsDatabase(text, seed, Number(tmdbId));
      if (!decrypted) return [];

      const streams = formatStreamsForNuvio(
        decrypted,
        serverName,
        mediaDetails,
        season,
        episode
      );
      console.log(
        "[VidEasy] ✅ Found " + streams.length + " stream(s) from " + serverName
      );
      return streams;
    } catch (err) {
      console.warn(
        "[VidEasy] ❌ Error from " + serverName + ": " + err.message
      );
      return [];
    }
  });
}

function getStreams(tmdbId, mediaType, season = null, episode = null) {
  return __async(this, null, function* () {
    console.log(
      "[VidEasy] Starting extraction for TMDB ID: " +
        tmdbId +
        ", Type: " +
        mediaType +
        (mediaType === "tv" ? ", S:" + season + "E:" + episode : "")
    );

    try {
      const media = yield fetchMediaDetails(tmdbId, mediaType, season, episode);
      if (!media) {
        console.error("[VidEasy] Failed to fetch media details from TMDB.");
        return [];
      }

      console.log(
        '[VidEasy] Media Details: "' +
          media.title +
          '" (' +
          media.year +
          ") | Duration: " +
          media.duration
      );

      const seedUrl = WINGS_API_BASE + "/seed?mediaId=" + tmdbId;
      console.log("[VidEasy] Fetching seed from: " + seedUrl);

      const seedRes = yield fetch(seedUrl, { headers: REQUEST_HEADERS });
      if (!seedRes.ok) throw new Error("Seed HTTP " + seedRes.status);

      const seedData = yield seedRes.json();
      const seed = seedData.seed;
      if (!seed) throw new Error("No seed returned from API");

      console.log("[VidEasy] Seed successfully retrieved: " + seed);

      const promises = Object.keys(SERVERS).map((name) => {
        return fetchFromWingsServer(
          name,
          SERVERS[name],
          mediaType,
          tmdbId,
          media,
          seed,
          season,
          episode
        );
      });

      const results = yield Promise.all(promises);
      const allStreams = [];
      results.forEach((list) => allStreams.push(...list));

      // Deduplicate by URL
      const unique = [];
      const seen = new Set();
      allStreams.forEach((s) => {
        if (!seen.has(s.url)) {
          seen.add(s.url);
          unique.push(s);
        }
      });

      // Sort: 4K first, then by server order
      const serverOrder = Object.keys(SERVERS);
      unique.sort((a, b) => {
        if (a._is4k && !b._is4k) return -1;
        if (!a._is4k && b._is4k) return 1;
        return (
          serverOrder.indexOf(a._serverName) - serverOrder.indexOf(b._serverName)
        );
      });

      console.log(
        "[VidEasy] Total unique streams found: " + unique.length
      );
      return unique;
    } catch (err) {
      console.error("[VidEasy] Error in getStreams: " + err.message);
      return [];
    }
  });
}

module.exports = { getStreams, name: "Odin" };
