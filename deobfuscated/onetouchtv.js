var __async = (_0x262cee, _0x50bee2, _0x17fce1) => {
  return new Promise((_0x3a2035, _0x4236ff) => {
    var _0x12dfb9 = _0x1c18d1 => {
      try {
        _0x5a92de(_0x17fce1.next(_0x1c18d1));
      } catch (_0x46f26e) {
        _0x4236ff(_0x46f26e);
      }
    };
    var _0x3ad427 = _0x332690 => {
      try {
        _0x5a92de(_0x17fce1.throw(_0x332690));
      } catch (_0x571e15) {
        _0x4236ff(_0x571e15);
      }
    };
    var _0x5a92de = _0x398983 => _0x398983.done ? _0x3a2035(_0x398983.value) : Promise.resolve(_0x398983.value).then(_0x12dfb9, _0x3ad427);
    _0x5a92de((_0x17fce1 = _0x17fce1.apply(_0x262cee, _0x50bee2)).next());
  });
};
var CryptoJS = require("crypto-js");
var TMDB_API_KEY = process.env.TMDB_API_KEY || "439c478a771f35c05022f9feabcca01c";
var MAIN_URL = "https://api3.devcorp.me";
var TMDB_BASE = "https://api.themoviedb.org/3";
var AES_KEY = CryptoJS.enc.Utf8.parse("im72charPasswordofdInitVectorStm");
var AES_IV = CryptoJS.enc.Utf8.parse("im72charPassword");
function decryptOneTouch(_0x13df6e) {
  try {
    if (!_0x13df6e || typeof _0x13df6e !== "string") {
      return null;
    }
    let _0x592732 = _0x13df6e.replace(/-_\./g, "/").replace(/@/g, "+").replace(/\s+/g, "");
    const _0x12717d = _0x592732.length % 4;
    if (_0x12717d !== 0) {
      _0x592732 += "=".repeat(4 - _0x12717d);
    }
    const _0x52b932 = CryptoJS.AES.decrypt(_0x592732, AES_KEY, {
      iv: AES_IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    const _0xf20605 = _0x52b932.toString(CryptoJS.enc.Utf8);
    if (!_0xf20605) {
      throw new Error("Empty decryption result");
    }
    const _0x587218 = JSON.parse(_0xf20605);
    return _0x587218.result;
  } catch (_0x1d1a6b) {
    console.error("[OneTouchTV] Decryption Error: " + _0x1d1a6b.message);
    return null;
  }
}
function fetchEncrypted(_0x22694a) {
  return __async(this, null, function* () {
    const _0xd8e959 = _0x22694a.startsWith("http") ? _0x22694a : "" + MAIN_URL + _0x22694a;
    console.log("[OneTouchTV] Requesting API: " + _0x22694a);
    const _0x2e564b = yield fetch(_0xd8e959, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Referer: "https://onetouchtv.xyz/"
      }
    });
    if (!_0x2e564b.ok) {
      throw new Error("HTTP Error: " + _0x2e564b.status);
    }
    const _0x27c5a0 = yield _0x2e564b.text();
    return decryptOneTouch(_0x27c5a0);
  });
}
function getStreams(_0x23b784, _0x1b3a4f = "movie", _0x5a9205 = null, _0x34899e = null) {
  return __async(this, null, function* () {
    try {
      console.log("[OneTouchTV] Request: ID=" + _0x23b784 + ", Type=" + _0x1b3a4f + ", S=" + _0x5a9205 + ", E=" + _0x34899e);
      let _0x1b47d9 = yield resolveMediaInfo(_0x23b784, _0x1b3a4f);
      if (!_0x1b47d9) {
        console.log("[OneTouchTV] TMDB resolution skipped or failed. Using fallback.");
        _0x1b47d9 = {
          title: _0x23b784,
          year: null,
          isTv: _0x1b3a4f === "tv" || _0x1b3a4f === "series"
        };
      }
      console.log("[OneTouchTV] Target: " + _0x1b47d9.title + " (" + (_0x1b47d9.year || "N/A") + ")");
      const _0x1a5dd6 = yield fetchEncrypted("/vod/search?keyword=" + encodeURIComponent(_0x1b47d9.title));
      if (!_0x1a5dd6 || !Array.isArray(_0x1a5dd6)) {
        console.log("[OneTouchTV] No search results found.");
        return [];
      }
      const _0x46c0b3 = _0x1a5dd6.find(_0x288195 => calculateSimilarity(_0x288195.title, _0x1b47d9.title) > 0.75);
      if (!_0x46c0b3) {
        console.log("[OneTouchTV] No suitable title match found in search results.");
        return [];
      }
      console.log("[OneTouchTV] Hit Found: " + _0x46c0b3.title + " (ID: " + _0x46c0b3.id + ")");
      const _0x3e861a = yield fetchEncrypted("/vod/" + _0x46c0b3.id + "/detail");
      if (!_0x3e861a || !_0x3e861a.episodes) {
        console.log("[OneTouchTV] Could not retrieve media details or episodes.");
        return [];
      }
      let _0xc9ac3b = null;
      if (_0x1b3a4f === "movie" || !_0x1b47d9.isTv) {
        _0xc9ac3b = _0x3e861a.episodes[0];
      } else {
        _0xc9ac3b = _0x3e861a.episodes.find(_0x5ec509 => {
          const _0x36f349 = parseInt(_0x5ec509.episode.replace(/\D/g, ""));
          return _0x36f349 === parseInt(_0x34899e);
        });
      }
      if (!_0xc9ac3b) {
        console.log("[OneTouchTV] Episode " + _0x34899e + " not found in the list.");
        return [];
      }
      console.log("[OneTouchTV] Resolved Episode: " + _0xc9ac3b.episode + " (PlayID: " + _0xc9ac3b.playId + ")");
      const _0x18837b = yield fetchEncrypted("/vod/" + _0xc9ac3b.identifier + "/episode/" + _0xc9ac3b.playId);
      if (!_0x18837b || !_0x18837b.sources) {
        console.log("[OneTouchTV] No streaming sources found for this episode.");
        return [];
      }
      const _0x117b80 = [];
      _0x18837b.sources.forEach(_0xf2cbeb => {
        if (!_0xf2cbeb.url) {
          return;
        }
        const _0x294a0a = normalizeQuality(_0xf2cbeb.quality);
        _0x117b80.push({
          name: "📺 OneTouch | " + (_0xf2cbeb.name || "Server"),
          title: "" + _0x1b47d9.title + (_0x1b47d9.isTv ? " E" + _0x34899e : "") + " (" + (_0x1b47d9.year || "N/A") + ")\n📌 " + _0x294a0a + " · " + (_0xf2cbeb.type === "hls" ? "HLS" : "MP4") + "\nby Kabir · OneTouch Port",
          url: _0xf2cbeb.url,
          quality: _0x294a0a,
          headers: _0xf2cbeb.headers || {
            "User-Agent": "Mozilla/5.0",
            Referer: "https://api3.devcorp.me/"
          }
        });
      });
      const _0x20f26e = (_0x18837b.tracks || []).map(_0x20c1e4 => ({
        label: _0x20c1e4.name || "Unknown",
        url: _0x20c1e4.file
      })).filter(_0xd72cdc => _0xd72cdc.url);
      if (_0x20f26e.length > 0) {
        _0x117b80.forEach(_0x3221f0 => _0x3221f0.subtitles = _0x20f26e);
        console.log("[OneTouchTV] Attached " + _0x20f26e.length + " subtitle tracks.");
      }
      console.log("[OneTouchTV] Successfully retrieved " + _0x117b80.length + " stream(s).");
      return _0x117b80.sort((_0x48cd0c, _0x46ecde) => (parseInt(_0x46ecde.quality) || 0) - (parseInt(_0x48cd0c.quality) || 0));
    } catch (_0x6fab79) {
      console.error("[OneTouchTV] Global Error: " + _0x6fab79.message);
      return [];
    }
  });
}
function resolveMediaInfo(_0x5bad26, _0x3dd2a7) {
  return __async(this, null, function* () {
    const _0x255cae = _0x5bad26.toString();
    const _0x49264d = _0x255cae.startsWith("tt");
    const _0x22ab02 = /^\d+$/.test(_0x255cae);
    const _0x2f4eaf = _0x3dd2a7 === "tv" || _0x3dd2a7 === "series" ? "tv" : "movie";
    try {
      if (_0x49264d) {
        console.log("[OneTouchTV] Mobile ID detected (" + _0x255cae + "). Translating via TMDB...");
        const _0x34e2e6 = TMDB_BASE + "/find/" + _0x255cae + "?api_key=" + TMDB_API_KEY + "&external_source=imdb_id";
        const _0x4bf056 = yield fetch(_0x34e2e6);
        const _0x56a223 = yield _0x4bf056.json();
        const _0x25e9c5 = _0x2f4eaf === "tv" ? _0x56a223.tv_results : _0x56a223.movie_results;
        if (_0x25e9c5 && _0x25e9c5.length > 0) {
          const _0x541fd2 = _0x25e9c5[0];
          return {
            id: _0x541fd2.id,
            title: _0x2f4eaf === "tv" ? _0x541fd2.name : _0x541fd2.title,
            year: (_0x541fd2.first_air_date || _0x541fd2.release_date || "").split("-")[0],
            isTv: _0x2f4eaf === "tv"
          };
        }
      } else if (_0x22ab02) {
        const _0x1aa27e = TMDB_BASE + "/" + _0x2f4eaf + "/" + _0x255cae + "?api_key=" + TMDB_API_KEY;
        const _0x291b1f = yield fetch(_0x1aa27e);
        const _0x29ea63 = yield _0x291b1f.json();
        if (_0x29ea63.id) {
          return {
            id: _0x29ea63.id,
            title: _0x2f4eaf === "tv" ? _0x29ea63.name : _0x29ea63.title,
            year: (_0x29ea63.first_air_date || _0x29ea63.release_date || "").split("-")[0],
            isTv: _0x2f4eaf === "tv"
          };
        }
      }
    } catch (_0x5c8e8a) {
      console.error("[OneTouchTV] TMDB Smart Resolver Error: " + _0x5c8e8a.message);
    }
    return null;
  });
}
function calculateSimilarity(_0x45a77c, _0x5cd46b) {
  if (!_0x45a77c || !_0x5cd46b) {
    return 0;
  }
  const _0x319b83 = _0x45a77c.toLowerCase().trim();
  const _0x143434 = _0x5cd46b.toLowerCase().trim();
  if (_0x319b83 === _0x143434) {
    return 1;
  }
  if (_0x319b83.includes(_0x143434) || _0x143434.includes(_0x319b83)) {
    return 0.9;
  }
  const _0x235d76 = _0x319b83.split(/\s+/);
  const _0x52f732 = _0x143434.split(/\s+/);
  const _0x8cc0eb = _0x235d76.filter(_0x2d91e0 => _0x52f732.includes(_0x2d91e0));
  return _0x8cc0eb.length / Math.max(_0x235d76.length, _0x52f732.length);
}
function normalizeQuality(_0x2d8add) {
  if (!_0x2d8add) {
    return "720p";
  }
  const _0x5ddf73 = _0x2d8add.toString().toLowerCase();
  if (_0x5ddf73.includes("1080")) {
    return "1080p";
  }
  if (_0x5ddf73.includes("720")) {
    return "720p";
  }
  if (_0x5ddf73.includes("480")) {
    return "480p";
  }
  return "720p";
}
module.exports = {
  getStreams: getStreams
};
if (typeof global !== "undefined") {
  global.getStreams = getStreams;
}