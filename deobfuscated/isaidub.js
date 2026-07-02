var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x40c40e, _0x50c81e, _0x17554c) => _0x50c81e in _0x40c40e ? __defProp(_0x40c40e, _0x50c81e, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x17554c
}) : _0x40c40e[_0x50c81e] = _0x17554c;
var __spreadValues = (_0x3aff0d, _0x2845cd) => {
  for (var _0x6480d8 in _0x2845cd ||= {}) {
    if (__hasOwnProp.call(_0x2845cd, _0x6480d8)) {
      __defNormalProp(_0x3aff0d, _0x6480d8, _0x2845cd[_0x6480d8]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x6480d8 of __getOwnPropSymbols(_0x2845cd)) {
      if (__propIsEnum.call(_0x2845cd, _0x6480d8)) {
        __defNormalProp(_0x3aff0d, _0x6480d8, _0x2845cd[_0x6480d8]);
      }
    }
  }
  return _0x3aff0d;
};
var __spreadProps = (_0x2066f8, _0x1f0a2f) => __defProps(_0x2066f8, __getOwnPropDescs(_0x1f0a2f));
var __async = (_0x547468, _0x3637eb, _0x2fb2fa) => {
  return new Promise((_0x4d36e3, _0x1d8457) => {
    var _0x1d9f7d = _0x168056 => {
      try {
        _0x3e0f1f(_0x2fb2fa.next(_0x168056));
      } catch (_0x16d612) {
        _0x1d8457(_0x16d612);
      }
    };
    var _0x1360a9 = _0x2b2666 => {
      try {
        _0x3e0f1f(_0x2fb2fa.throw(_0x2b2666));
      } catch (_0x48d42f) {
        _0x1d8457(_0x48d42f);
      }
    };
    var _0x3e0f1f = _0x26f581 => _0x26f581.done ? _0x4d36e3(_0x26f581.value) : Promise.resolve(_0x26f581.value).then(_0x1d9f7d, _0x1360a9);
    _0x3e0f1f((_0x2fb2fa = _0x2fb2fa.apply(_0x547468, _0x3637eb)).next());
  });
};
var cheerio = require("cheerio-without-node-native");
var TMDB_API_KEY = "1b3113663c9004682ed61086cf967c44";
var TMDB_BASE_URL = "https://api.themoviedb.org/3";
var MAIN_URL = "https://isaidub.love";
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  Referer: MAIN_URL + "/"
};
function fetchWithTimeout(_0x3d2593) {
  return __async(this, arguments, function* (_0x11dd73, _0x201669 = {}, _0x28f25e = 10000) {
    const _0x9b69d = new AbortController();
    const _0x1c064c = setTimeout(() => _0x9b69d.abort(), _0x28f25e);
    try {
      const _0x13037d = yield fetch(_0x11dd73, __spreadProps(__spreadValues({}, _0x201669), {
        signal: _0x9b69d.signal,
        redirect: "follow"
      }));
      clearTimeout(_0x1c064c);
      return _0x13037d;
    } catch (_0x25e298) {
      clearTimeout(_0x1c064c);
      if (_0x25e298.name === "AbortError") {
        throw new Error("Request timeout after " + _0x28f25e + "ms");
      }
      throw _0x25e298;
    }
  });
}
function normalizeTitle(_0x299b97) {
  if (!_0x299b97) {
    return "";
  }
  return _0x299b97.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
}
function toTitleCase(_0x5d2aa4) {
  if (!_0x5d2aa4) {
    return "";
  }
  return _0x5d2aa4.toLowerCase().split(" ").map(function (_0x2e0ac8) {
    return _0x2e0ac8.charAt(0).toUpperCase() + _0x2e0ac8.slice(1);
  }).join(" ");
}
function calculateTitleSimilarity(_0x23f402, _0xc3aec1) {
  const _0x33375f = normalizeTitle(_0x23f402);
  const _0x5f0a71 = normalizeTitle(_0xc3aec1);
  if (_0x33375f === _0x5f0a71) {
    return 1;
  }
  if (_0x33375f.length > 5 && _0x5f0a71.length > 5) {
    if (_0x5f0a71.includes(_0x33375f) || _0x33375f.includes(_0x5f0a71)) {
      return 0.9;
    }
  }
  const _0x2814c0 = new Set(_0x33375f.split(/\s+/).filter(_0x25dfa7 => _0x25dfa7.length > 2));
  const _0x4f9544 = new Set(_0x5f0a71.split(/\s+/).filter(_0x2e8e5d => _0x2e8e5d.length > 2));
  if (_0x2814c0.size === 0 || _0x4f9544.size === 0) {
    return 0;
  }
  const _0x10f942 = new Set([..._0x2814c0].filter(_0xfe9dbb => _0x4f9544.has(_0xfe9dbb)));
  const _0x4e7f92 = new Set([..._0x2814c0, ..._0x4f9544]);
  return _0x10f942.size / _0x4e7f92.size;
}
function unpack(_0x1dab54, _0x50cca5, _0x47d77d, _0x53682d) {
  while (_0x47d77d--) {
    if (_0x53682d[_0x47d77d]) {
      const _0x41534d = _0x47d77d.toString(_0x50cca5);
      _0x1dab54 = _0x1dab54.replace(new RegExp("\\b" + _0x41534d + "\\b", "g"), _0x53682d[_0x47d77d]);
    }
  }
  return _0x1dab54;
}
function findBestTitleMatch(_0x5e5349, _0x5cce59) {
  if (!_0x5cce59 || _0x5cce59.length === 0) {
    return null;
  }
  const _0xf365f5 = _0x5e5349.year ? parseInt(_0x5e5349.year) : null;
  let _0x16392f = null;
  let _0x447aa7 = 0;
  for (const _0x34d852 of _0x5cce59) {
    let _0x3f7da6 = calculateTitleSimilarity(_0x5e5349.title, _0x34d852.title);
    if (_0xf365f5) {
      if (_0x34d852.title.includes(_0xf365f5.toString())) {
        _0x3f7da6 += 0.2;
      } else if (_0x34d852.title.match(/\(\d{4}\)/)) {
        const _0x34f3df = _0x34d852.title.match(/\((\d{4})\)/);
        if (_0x34f3df && parseInt(_0x34f3df[1]) !== _0xf365f5) {
          _0x3f7da6 -= 0.1;
        }
      }
    }
    if (_0x3f7da6 > _0x447aa7) {
      _0x447aa7 = _0x3f7da6;
      _0x16392f = _0x34d852;
    }
  }
  if (_0x16392f && _0x447aa7 > 0.45) {
    console.log("[Isaidub] Best match: \"" + _0x16392f.title + "\" (score: " + _0x447aa7.toFixed(2) + ")");
    return _0x16392f;
  }
  return null;
}
function formatStreamTitle(_0xd9ff, _0x2fe851) {
  const _0x465e47 = _0x2fe851.quality || "Unknown";
  const _0x13a05b = toTitleCase(_0xd9ff.title || "Unknown");
  const _0x406d6a = _0xd9ff.year || "";
  let _0x33846d = _0x2fe851.size || "";
  if (!_0x33846d) {
    const _0x1c4663 = _0x2fe851.text ? _0x2fe851.text.match(/(\d+(?:\.\d+)?\s*(?:GB|MB))/i) : null;
    if (_0x1c4663) {
      _0x33846d = _0x1c4663[1];
    }
  }
  let _0x449fda = "";
  const _0x1225b2 = ((_0x2fe851.text || "") + " " + (_0x2fe851.url || "")).toLowerCase();
  if (_0x1225b2.includes("bluray") || _0x1225b2.includes("brrip")) {
    _0x449fda = "BluRay";
  } else if (_0x1225b2.includes("web-dl")) {
    _0x449fda = "WEB-DL";
  } else if (_0x1225b2.includes("webrip")) {
    _0x449fda = "WEBRip";
  } else if (_0x1225b2.includes("hdrip")) {
    _0x449fda = "HDRip";
  } else if (_0x1225b2.includes("dvdrip")) {
    _0x449fda = "DVDRip";
  } else if (_0x1225b2.includes("bdrip")) {
    _0x449fda = "BDRip";
  } else if (_0x1225b2.includes("hdtv")) {
    _0x449fda = "HDTV";
  }
  let _0x1a666c = "";
  const _0x1e1def = _0x1225b2.match(/season\s*(\d+)/i);
  const _0x49385 = _0x1225b2.match(/epi\s*(\d+)|episode\s*(\d+)/i);
  if (_0x1e1def) {
    _0x1a666c += " S" + _0x1e1def[1].padStart(2, "0");
  }
  if (_0x49385) {
    _0x1a666c += " E" + (_0x49385[1] || _0x49385[2]).padStart(2, "0");
  }
  if (!_0x1a666c) {
    const _0x470b18 = _0x1225b2.match(/s(\d+)e(\d+)|s(\d+)\s*e(\d+)/i);
    if (_0x470b18) {
      _0x1a666c = " S" + (_0x470b18[1] || _0x470b18[3]).padStart(2, "0") + " E" + (_0x470b18[2] || _0x470b18[4]).padStart(2, "0");
    }
  }
  const _0x3a52ca = _0x449fda ? "📹: " + _0x449fda + "\n" : "";
  const _0x437509 = _0x33846d ? "💾: " + _0x33846d + "\n" : "";
  const _0x49f87b = _0x406d6a && _0x406d6a !== "N/A" ? " " + _0x406d6a : "";
  const _0x42e6ac = {
    TAMIL: /tamil/i,
    HINDI: /hindi/i,
    TELUGU: /telugu/i,
    MALAYALAM: /malayalam/i,
    KANNADA: /kannada/i,
    ENGLISH: /english|eng/i,
    "MULTI AUDIO": /multi/i
  };
  let _0x35d047 = "TAMIL";
  for (const [_0x1a56cf, _0x2a218a] of Object.entries(_0x42e6ac)) {
    if (_0x2a218a.test(_0x1225b2)) {
      _0x35d047 = _0x1a56cf;
      break;
    }
  }
  return "Isaidub (Instant) (" + _0x465e47 + ")\n" + _0x3a52ca + "📼: " + _0x13a05b + _0x49f87b + _0x1a666c + " " + _0x465e47 + "\n" + _0x437509 + "🌐: " + _0x35d047;
}
function getTMDBDetails(_0xe3c930, _0x5e5dbc) {
  return __async(this, null, function* () {
    const _0x5bc93f = _0x5e5dbc === "movie" ? "movie" : "tv";
    const _0x3ededd = TMDB_BASE_URL + "/" + _0x5bc93f + "/" + _0xe3c930 + "?api_key=" + TMDB_API_KEY;
    try {
      const _0x1f3a37 = yield fetchWithTimeout(_0x3ededd, {}, 8000);
      if (!_0x1f3a37.ok) {
        throw new Error("HTTP " + _0x1f3a37.status);
      }
      const _0x5c0d29 = yield _0x1f3a37.json();
      const _0x2b449e = {
        title: _0x5c0d29.title || _0x5c0d29.name,
        year: (_0x5c0d29.release_date || _0x5c0d29.first_air_date || "").split("-")[0]
      };
      console.log("[Isaidub] TMDB Info: \"" + _0x2b449e.title + "\" (" + (_0x2b449e.year || "N/A") + ")");
      return _0x2b449e;
    } catch (_0x382d05) {
      console.error("[Isaidub] Error fetching TMDB metadata:", _0x382d05.message);
      throw _0x382d05;
    }
  });
}
function searchTMDBByTitle(_0x388d1b, _0x48779d) {
  return __async(this, null, function* () {
    const _0x1dd6bd = _0x48779d === "movie" ? "movie" : "tv";
    const _0x3ee19e = TMDB_BASE_URL + "/search/" + _0x1dd6bd + "?api_key=" + TMDB_API_KEY + "&query=" + encodeURIComponent(_0x388d1b);
    try {
      console.log("[Isaidub] Searching TMDB for: \"" + _0x388d1b + "\"");
      const _0x18e961 = yield fetchWithTimeout(_0x3ee19e, {}, 8000);
      if (!_0x18e961.ok) {
        throw new Error("HTTP " + _0x18e961.status);
      }
      const _0x669f38 = yield _0x18e961.json();
      if (_0x669f38.results && _0x669f38.results.length > 0) {
        const _0x29bf54 = _0x669f38.results[0];
        const _0x273424 = {
          title: _0x29bf54.title || _0x29bf54.name,
          year: (_0x29bf54.release_date || _0x29bf54.first_air_date || "").split("-")[0]
        };
        console.log("[Isaidub] TMDB Search Result: \"" + _0x273424.title + "\" (" + (_0x273424.year || "N/A") + ")");
        return _0x273424;
      }
      console.log("[Isaidub] No TMDB results found for \"" + _0x388d1b + "\"");
      return null;
    } catch (_0x3d7828) {
      console.error("[Isaidub] Error searching TMDB:", _0x3d7828.message);
      return null;
    }
  });
}
function search(_0x2056db, _0x5e0524 = null, _0x1852c8) {
  return __async(this, null, function* () {
    var _0x37865c;
    if (!_0x5e0524) {
      const _0x17eb70 = _0x2056db.match(/\b(19|20)\d{2}\b/);
      if (_0x17eb70) {
        _0x5e0524 = _0x17eb70[0];
        _0x2056db = _0x2056db.replace(_0x5e0524, "").trim();
      }
    }
    console.log("[Isaidub] Searching for: \"" + _0x2056db + "\" (year: " + (_0x5e0524 || "any") + ", type: " + _0x1852c8 + ")");
    try {
      const _0x2f6390 = [];
      const _0x28e1ae = _0x2056db.replace(/[^a-zA-Z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
      const _0x47313a = _0x28e1ae.toLowerCase().replace(/\s+/g, "-");
      const _0x328818 = [];
      if (_0x1852c8 === "tv") {
        const _0x5360d2 = ["-tamil-dubbed-web-series", "-web-series"];
        for (const _0x3ce99a of _0x5360d2) {
          if (_0x5e0524) {
            _0x328818.push(MAIN_URL + "/movie/" + _0x47313a + "-" + _0x5e0524 + _0x3ce99a + "/");
            _0x328818.push(MAIN_URL + "/movie/" + _0x47313a + _0x3ce99a + "/");
          } else {
            _0x328818.push(MAIN_URL + "/movie/" + _0x47313a + _0x3ce99a + "/");
          }
        }
      } else {
        const _0x45b7fa = ["-tamil-dubbed-movie", "-hindi-dubbed-movie", "-movie"];
        for (const _0x1dd1d7 of _0x45b7fa) {
          if (_0x5e0524) {
            _0x328818.push(MAIN_URL + "/movie/" + _0x47313a + "-" + _0x5e0524 + _0x1dd1d7 + "/");
            _0x328818.push(MAIN_URL + "/movie/" + _0x47313a + "-" + _0x5e0524 + "/");
          }
          _0x328818.push(MAIN_URL + "/movie/" + _0x47313a + _0x1dd1d7 + "/");
          _0x328818.push(MAIN_URL + "/movie/" + _0x47313a + "-2024" + _0x1dd1d7 + "/");
          _0x328818.push(MAIN_URL + "/movie/" + _0x47313a + "-2025" + _0x1dd1d7 + "/");
        }
      }
      console.log("[Isaidub] Trying " + _0x328818.length + " guessed URLs...");
      for (const _0x4438de of _0x328818) {
        try {
          const _0x324b91 = yield fetchWithTimeout(_0x4438de, {
            headers: HEADERS
          }, 5000);
          if (_0x324b91.ok) {
            const _0x9e98b0 = yield _0x324b91.text();
            const _0x1230b9 = cheerio.load(_0x9e98b0);
            const _0xfa2af7 = _0x1230b9("title").text().trim();
            if (!_0xfa2af7 || _0xfa2af7.includes("404")) {
              continue;
            }
            const _0x7e3ed6 = _0xfa2af7.match(/^(.+?)\s*\(/);
            const _0x4c907e = _0x7e3ed6 ? _0x7e3ed6[1].replace(/\s*Tamil Dubbed Movie$/i, "").trim() : _0x28e1ae;
            const _0x3e3f68 = ((_0x37865c = _0xfa2af7.match(/\((\d{4})\)/)) == null ? undefined : _0x37865c[1]) || _0x5e0524;
            console.log("[Isaidub] Found page: " + _0xfa2af7);
            _0x2f6390.push({
              title: _0x4c907e + (_0x3e3f68 ? " (" + _0x3e3f68 + ")" : ""),
              href: _0x4438de,
              foundYear: _0x3e3f68,
              isGuessed: true
            });
            break;
          }
        } catch (_0x5795cf) {
          console.log("[Isaidub] Failed: " + _0x4438de + " - " + _0x5795cf.message);
        }
      }
      if (_0x2f6390.length === 0) {
        console.log("[Isaidub] No direct matches, checking latest movies page...");
        const _0x306843 = _0x1852c8 === "tv" ? MAIN_URL + "/tamil-dubbed-web-series/" : MAIN_URL + "/tamil-dubbed-movies-collections/";
        try {
          const _0x4790ce = yield fetchWithTimeout(_0x306843, {
            headers: HEADERS
          }, 6000);
          if (_0x4790ce.ok) {
            const _0x406618 = yield _0x4790ce.text();
            const _0x45325b = cheerio.load(_0x406618);
            _0x45325b("a[href*=\"/movie/\"]").each((_0xcbbd52, _0x1cd03c) => {
              const _0x403ee0 = _0x45325b(_0x1cd03c).attr("href");
              const _0x1d107 = _0x45325b(_0x1cd03c).text().trim();
              if (!_0x403ee0 || _0x403ee0.includes("/genre/") || _0x403ee0.match(/\/\d+\/$/) || _0x403ee0.endsWith("-movies/")) {
                return;
              }
              if (_0x1d107.length < 3) {
                return;
              }
              const _0x115805 = _0x403ee0.startsWith("http") ? _0x403ee0 : "" + MAIN_URL + _0x403ee0;
              if (!_0x2f6390.some(_0x3a7a3b => _0x3a7a3b.href === _0x115805)) {
                _0x2f6390.push({
                  title: _0x1d107,
                  href: _0x115805
                });
              }
            });
          }
        } catch (_0x3927b0) {}
      }
      console.log("[Isaidub] Found " + _0x2f6390.length + " total links");
      return _0x2f6390;
    } catch (_0x588f5b) {
      console.error("[Isaidub] Search error:", _0x588f5b.message);
      return [];
    }
  });
}
function extractFromGenericEmbed(_0x235ba7, _0x4f9b54) {
  return __async(this, null, function* () {
    try {
      const _0x40a415 = new URL(_0x235ba7).origin;
      const _0x1992fe = yield fetchWithTimeout(_0x235ba7, {
        headers: __spreadProps(__spreadValues({}, HEADERS), {
          Referer: MAIN_URL
        })
      }, 8000);
      const _0x7da0bf = _0x1992fe.headers.get("content-type") || "";
      if (_0x7da0bf.includes("video/")) {
        console.log("[Isaidub] Direct video response from generic embed: " + _0x1992fe.url);
        return _0x1992fe.url;
      }
      let _0x1378c8 = yield _0x1992fe.text();
      const _0x4d6cc5 = cheerio.load(_0x1378c8);
      const _0x1dab02 = [];
      _0x4d6cc5("video source, video").each((_0x5927b4, _0x1c287a) => {
        const _0x1cafb5 = _0x4d6cc5(_0x1c287a).attr("src");
        if (_0x1cafb5) {
          _0x1dab02.push(_0x1cafb5);
        }
      });
      if (_0x1dab02.length > 0) {
        return _0x1dab02[0];
      }
      const _0x4dd49f = _0x1378c8.match(/https?:\/\/[^\s"']+\.m3u8[^\s"']*/i);
      if (_0x4dd49f) {
        return _0x4dd49f[0];
      }
      const _0x189aba = _0x4d6cc5("a:contains(\"Watch Online\"), a:contains(\"Stream\"), a:contains(\"Server\")").attr("href");
      if (_0x189aba) {
        const _0x3bcc36 = _0x189aba.startsWith("http") ? _0x189aba : _0x189aba.startsWith("//") ? "https:" + _0x189aba : _0x40a415 + _0x189aba;
        if (_0x3bcc36 !== _0x235ba7 && !_0x3bcc36.includes("ads")) {
          return yield extractDirectStream(_0x3bcc36);
        }
      }
      const _0x4e23de = _0x1378c8.match(new RegExp("eval\\(function\\(p,a,c,k,e,d\\)\\{.*?\\}\\s*\\((.*)\\)\\s*\\)", "s"));
      if (_0x4e23de) {
        const _0x2365cd = _0x4e23de[1].trim();
        const _0xac53dd = _0x2365cd.match(new RegExp("^'(.*)',\\s*(\\d+),\\s*(\\d+),\\s*'(.*?)'\\.split\\(", "s"));
        if (_0xac53dd) {
          const _0x1a2457 = unpack(_0xac53dd[1], parseInt(_0xac53dd[2]), parseInt(_0xac53dd[3]), _0xac53dd[4].split("|"));
          _0x1378c8 += "\n" + _0x1a2457;
        }
      }
      const _0x14511f = [/["']hls[2-4]["']\s*:\s*["']([^"']+)["']/gi, /sources\s*:\s*\[\s*{\s*file\s*:\s*["']([^"']+)["']/gi, /https?:\/\/[^\s"']+\.m3u8[^\s"']*/gi, /["'](\/[^\s"']+\.m3u8[^\s"']*)["']/gi, /https?:\/\/[^\s"']+\.mp4[^\s"']*/gi, /(?:source|file|src)\s*[:=]\s*["']([^"']+\.(?:m3u8|mp4)[^"']*)["']/gi];
      const _0xe234ee = [];
      for (const _0xbf28c0 of _0x14511f) {
        const _0x2153c7 = _0x1378c8.match(_0xbf28c0);
        if (_0x2153c7) {
          for (let _0x1f1e95 of _0x2153c7) {
            let _0xc74aab = _0x1f1e95;
            const _0x22be73 = _0x1f1e95.match(/["']:[ ]*["']([^"']+)["']/);
            if (_0x22be73) {
              _0xc74aab = _0x22be73[1];
            } else {
              const _0x21cf85 = _0x1f1e95.match(/["']([^"']+)["']/);
              if (_0x21cf85) {
                _0xc74aab = _0x21cf85[1];
              }
            }
            const _0x324d4d = _0xc74aab.match(/https?:\/\/[^\s"']+/);
            if (_0x324d4d) {
              _0xc74aab = _0x324d4d[0];
            }
            _0xc74aab = _0xc74aab.replace(/[\\"'\)\]]+$/, "");
            if (!_0xc74aab || _0xc74aab.length < 5 || _0xc74aab.includes("google.com") || _0xc74aab.includes("youtube.com")) {
              continue;
            }
            if (_0xc74aab.startsWith("/") && !_0xc74aab.startsWith("//")) {
              _0xc74aab = _0x40a415 + _0xc74aab;
            }
            _0xe234ee.push(_0xc74aab);
          }
        }
      }
      if (_0xe234ee.length > 0) {
        _0xe234ee.sort((_0x1558cf, _0x37f907) => {
          const _0x53891c = _0x1558cf.toLowerCase().includes(".m3u8");
          const _0x568fef = _0x37f907.toLowerCase().includes(".m3u8");
          if (_0x53891c !== _0x568fef) {
            if (_0x568fef) {
              return 1;
            } else {
              return -1;
            }
          }
          return _0x1558cf.length - _0x37f907.length;
        });
        return _0xe234ee[0];
      }
      return null;
    } catch (_0xf8840e) {
      return null;
    }
  });
}
function extractDirectStream(_0x40060e) {
  return __async(this, arguments, function* (_0x5455e0, _0x489b69 = new Set()) {
    if (_0x489b69.has(_0x5455e0)) {
      return null;
    }
    _0x489b69.add(_0x5455e0);
    if (_0x489b69.size > 5) {
      return null;
    }
    try {
      console.log("[Isaidub] Extracting from embed: " + _0x5455e0);
      const _0x576f83 = new URL(_0x5455e0);
      const _0x15cbd8 = _0x576f83.hostname.toLowerCase();
      if (_0x15cbd8.includes("onestream.watch") || _0x15cbd8.includes("dubmv.top") || _0x15cbd8.includes("dubshare.one") || _0x15cbd8.includes("uptodub.ch") || _0x15cbd8.includes("dubpage.xyz")) {
        return yield extractFromStreamPage(_0x5455e0, _0x489b69);
      }
      return yield extractFromGenericEmbed(_0x5455e0, _0x15cbd8);
    } catch (_0x2b5855) {
      return null;
    }
  });
}
function extractFromStreamPage(_0x34a076) {
  return __async(this, arguments, function* (_0x5cd4a1, _0x315804 = new Set()) {
    console.log("[Isaidub] Extracting from stream page: " + _0x5cd4a1);
    try {
      const _0x5b876e = yield fetchWithTimeout(_0x5cd4a1, {
        headers: __spreadProps(__spreadValues({}, HEADERS), {
          Referer: MAIN_URL
        })
      }, 12000);
      const _0x29aec7 = _0x5b876e.headers.get("content-type") || "";
      if (_0x29aec7.includes("video/")) {
        console.log("[Isaidub] Found direct video source via redirect: " + _0x5b876e.url);
        return _0x5b876e.url;
      }
      let _0x20ff09 = yield _0x5b876e.text();
      const _0x11e3d0 = cheerio.load(_0x20ff09);
      const _0x160dea = [];
      _0x11e3d0("video source, video").each((_0x4ac2b8, _0x4697c9) => {
        const _0x1279a2 = _0x11e3d0(_0x4697c9).attr("src");
        if (_0x1279a2) {
          _0x160dea.push(_0x1279a2);
        }
      });
      if (_0x160dea.length > 0) {
        return _0x160dea[0];
      }
      const _0x42d407 = _0x20ff09.match(/https?:\/\/[^\s"']+\.m3u8[^\s"']*/i);
      if (_0x42d407) {
        return _0x42d407[0];
      }
      const _0x1ca504 = _0x20ff09.match(/https?:\/\/[^\s"']+\.mp4[^\s"']*/i);
      if (_0x1ca504) {
        return _0x1ca504[0];
      }
      const _0x5efa13 = _0x11e3d0("a:contains(\"Watch Online\"), a:contains(\"Stream\"), a:contains(\"Server\")").attr("href");
      if (_0x5efa13) {
        const _0x409812 = _0x5efa13.startsWith("http") ? _0x5efa13 : new URL(_0x5cd4a1).origin + _0x5efa13;
        if (_0x409812 !== _0x5cd4a1 && !_0x409812.includes("ads")) {
          return yield extractDirectStream(_0x409812, _0x315804);
        }
      }
      return null;
    } catch (_0x5cc321) {
      return null;
    }
  });
}
function parseMoviePage(_0x3d54ab, _0x2e6d04 = 0, _0x5136c7 = "", _0xd3f47b = null, _0x3f179e = null) {
  return __async(this, null, function* () {
    if (_0x2e6d04 > 5) {
      return [];
    }
    console.log("[Isaidub] Parsing page (depth " + _0x2e6d04 + ", S: " + (_0xd3f47b || "any") + ", E: " + (_0x3f179e || "any") + "): " + _0x3d54ab);
    try {
      const _0x2bce1c = yield fetchWithTimeout(_0x3d54ab, {
        headers: HEADERS
      }, 8000);
      const _0x568d43 = yield _0x2bce1c.text();
      const _0x52cea2 = cheerio.load(_0x568d43);
      const _0x43fca0 = _0x52cea2("title").text().trim() || "";
      const _0x218598 = (_0x5136c7 + " " + _0x43fca0).trim();
      const _0x3d988f = [];
      _0x52cea2("a").each((_0x43b706, _0x400e01) => {
        const _0x3f4077 = _0x52cea2(_0x400e01).attr("href");
        const _0x19ffa9 = _0x52cea2(_0x400e01).text().trim();
        if (_0x3f4077 && _0x3f4077.includes("/download/page/")) {
          if (_0xd3f47b) {
            const _0x3df9f1 = (_0x218598 + " " + _0x19ffa9).match(/(?:season|s)\s*0*(\d+)\b/i);
            if (_0x3df9f1 && parseInt(_0x3df9f1[1]) !== parseInt(_0xd3f47b)) {
              return;
            }
          }
          if (_0x3f179e) {
            const _0x123f8a = new RegExp("(?:epi|episode|e)\\s*0*" + _0x3f179e + "\\b", "i");
            if (!_0x123f8a.test(_0x19ffa9) && !_0x123f8a.test(_0x218598)) {
              return;
            }
          }
          const _0x1fe0ef = _0x3f4077.startsWith("http") ? _0x3f4077 : "" + MAIN_URL + _0x3f4077;
          const _0x282801 = _0x19ffa9.match(/\b(360p|480p|720p|1080p|4K)\b/i);
          const _0x3452f7 = _0x282801 ? _0x282801[0] : "HD";
          _0x3d988f.push({
            url: _0x1fe0ef,
            quality: _0x3452f7,
            type: "download",
            text: (_0x218598 + " " + _0x19ffa9).trim()
          });
        }
      });
      if (_0x3d988f.length > 0) {
        console.log("[Isaidub] Found " + _0x3d988f.length + " download links");
        return _0x3d988f;
      }
      const _0x1404ac = [];
      _0x52cea2("a").each((_0x498e08, _0x2a3f0e) => {
        const _0x1d3476 = _0x52cea2(_0x2a3f0e).attr("href");
        const _0x3aa046 = _0x52cea2(_0x2a3f0e).text().trim().toLowerCase();
        if (!_0x1d3476 || _0x1d3476 === "/" || _0x1d3476 === "#" || !_0x1d3476.includes("/movie/") && !_0x1d3476.match(/\/\d+\/$/)) {
          return;
        }
        const _0x1370ab = ["360p", "480p", "720p", "1080p", "4K", "hd", "dvd", "scr", "rip", "bluray", "brrip", "web", "webrip", "original", "season", "episode", "epi"];
        let _0x135173 = false;
        for (const _0x5a5a36 of _0x1370ab) {
          if (_0x3aa046.includes(_0x5a5a36)) {
            _0x135173 = true;
            break;
          }
        }
        if (!_0x135173 && _0x3aa046.match(/\d+x\d+/)) {
          _0x135173 = true;
        }
        if (_0x135173) {
          if (_0xd3f47b) {
            const _0x4cae7e = _0x3aa046.match(/season\s*(\d+)/i);
            if (_0x4cae7e && parseInt(_0x4cae7e[1]) !== parseInt(_0xd3f47b)) {
              return;
            }
          }
          const _0x3ee1fc = _0x1d3476.startsWith("http") ? _0x1d3476 : "" + MAIN_URL + _0x1d3476;
          _0x1404ac.push({
            url: _0x3ee1fc,
            text: _0x52cea2(_0x2a3f0e).text().trim()
          });
        }
      });
      if (_0x1404ac.length > 0) {
        console.log("[Isaidub] Found " + _0x1404ac.length + " sub-links, following...");
        const _0x10210f = [];
        for (const _0x1fe9f2 of _0x1404ac) {
          const _0x2c130f = yield parseMoviePage(_0x1fe9f2.url, _0x2e6d04 + 1, (_0x218598 + " " + _0x1fe9f2.text).trim(), _0xd3f47b, _0x3f179e);
          _0x10210f.push(..._0x2c130f);
          if (_0x10210f.length >= 10) {
            break;
          }
        }
        return _0x10210f;
      }
      return [];
    } catch (_0x4390f2) {
      return [];
    }
  });
}
function extractFinalDownloadUrl(_0x39bf04) {
  return __async(this, null, function* () {
    console.log("[Isaidub] Extracting final URL from: " + _0x39bf04);
    try {
      const _0x189309 = yield fetchWithTimeout(_0x39bf04, {
        headers: HEADERS
      }, 10000);
      const _0x49fc78 = yield _0x189309.text();
      const _0x3dc643 = cheerio.load(_0x49fc78);
      let _0x3e9549 = null;
      const _0x262eda = _0x49fc78.match(/File Size:<\/strong>\s*([^<]+)/i);
      if (_0x262eda) {
        _0x3e9549 = _0x262eda[1].trim();
      }
      const _0x2a5ab1 = [];
      _0x3dc643("a").each((_0x357483, _0x1bf3b8) => {
        const _0x585180 = _0x3dc643(_0x1bf3b8).attr("href");
        const _0x51a039 = _0x3dc643(_0x1bf3b8).text().trim().toLowerCase();
        if (_0x585180 && !_0x585180.includes("isaidub.love") && !_0x585180.startsWith("#")) {
          if (_0x51a039.includes("download") || _0x51a039.includes("server") || _0x585180.includes("dubmv.top") || _0x585180.includes("onestream.today")) {
            const _0x357f07 = _0x585180.startsWith("http") ? _0x585180 : "https:" + _0x585180;
            _0x2a5ab1.push(_0x357f07);
          }
        }
      });
      if (_0x2a5ab1.length > 0) {
        const _0x181f4a = _0x2a5ab1[0];
        const _0x558b23 = _0x181f4a.includes("dubmv.top/") || _0x181f4a.includes("onestream.today/") || _0x181f4a.includes("uptodub.ch/") || _0x181f4a.includes("dubpage.xyz/");
        return {
          url: _0x181f4a,
          needsExtraction: _0x558b23,
          size: _0x3e9549
        };
      }
      return null;
    } catch (_0x5c7edf) {
      return null;
    }
  });
}
function getStreams(_0x22c22a, _0xa75aad, _0xe1f24d, _0x362939) {
  return __async(this, null, function* () {
    if (_0xa75aad === "movie") {
      _0xe1f24d = null;
      _0x362939 = null;
    }
    console.log("[Isaidub] Processing " + _0xa75aad + " " + _0x22c22a + " (S:" + _0xe1f24d + ", E:" + _0x362939 + ")");
    try {
      let _0x5c0b3a;
      const _0x58b624 = /^\d+$/.test(_0x22c22a);
      if (_0x58b624) {
        try {
          _0x5c0b3a = yield getTMDBDetails(_0x22c22a, _0xa75aad);
        } catch (_0xd1df3e) {
          _0x5c0b3a = {
            title: _0x22c22a,
            year: null
          };
        }
      } else {
        try {
          const _0x134ccf = yield searchTMDBByTitle(_0x22c22a, _0xa75aad);
          _0x5c0b3a = _0x134ccf || {
            title: _0x22c22a,
            year: null
          };
        } catch (_0x3dfb3c) {
          _0x5c0b3a = {
            title: _0x22c22a,
            year: null
          };
        }
      }
      let _0x527bb7 = yield search(_0x5c0b3a.title, _0x5c0b3a.year, _0xa75aad);
      const _0xdd96b3 = findBestTitleMatch(_0x5c0b3a, _0x527bb7);
      if (!_0xdd96b3) {
        console.warn("[Isaidub] No matching title found");
        return [];
      }
      const _0x1e0601 = yield parseMoviePage(_0xdd96b3.href, 0, "", _0xe1f24d, _0x362939);
      if (_0x1e0601.length === 0) {
        return [];
      }
      const _0x423102 = _0x1e0601.slice(0, 10);
      console.log("[Isaidub] Extracting streams from " + _0x423102.length + " links in batches...");
      const _0x2d7049 = [];
      for (let _0x403387 = 0; _0x403387 < _0x423102.length; _0x403387 += 3) {
        const _0x4b77d4 = _0x423102.slice(_0x403387, _0x403387 + 3);
        const _0x598b26 = yield Promise.all(_0x4b77d4.map(_0x940fef => __async(this, null, function* () {
          let _0x2b6897;
          try {
            return yield Promise.race([(() => __async(this, null, function* () {
              let _0x4fa7ff = _0x940fef.url;
              let _0x1f8bfa = null;
              if (_0x940fef.type === "download") {
                const _0x327e13 = yield extractFinalDownloadUrl(_0x940fef.url);
                if (!_0x327e13) {
                  return null;
                }
                _0x1f8bfa = _0x327e13.size;
                if (_0x327e13.needsExtraction) {
                  const _0xbbb888 = yield extractDirectStream(_0x327e13.url);
                  if (!_0xbbb888) {
                    return null;
                  }
                  _0x4fa7ff = _0xbbb888;
                } else {
                  _0x4fa7ff = _0x327e13.url;
                }
              }
              return {
                name: "Isaidub",
                title: formatStreamTitle(_0x5c0b3a, __spreadProps(__spreadValues({}, _0x940fef), {
                  size: _0x1f8bfa
                })),
                url: _0x4fa7ff,
                quality: _0x940fef.quality,
                headers: {
                  Referer: MAIN_URL,
                  "User-Agent": HEADERS["User-Agent"]
                },
                provider: "Isaidub"
              };
            }))(), new Promise((_0x1e779b, _0x4163d3) => {
              _0x2b6897 = setTimeout(() => _0x4163d3(new Error("Timeout")), 30000);
            })]).finally(() => {
              if (_0x2b6897) {
                clearTimeout(_0x2b6897);
              }
            });
          } catch (_0xcf9530) {
            console.warn("[Isaidub] Extraction failed for " + _0x940fef.url + ": " + _0xcf9530.message);
            return null;
          }
        })));
        _0x2d7049.push(..._0x598b26.filter(_0x1fe709 => _0x1fe709 !== null));
        if (_0x2d7049.length >= 5) {
          break;
        }
      }
      console.log("[Isaidub] Found " + _0x2d7049.length + " final streamable links");
      return _0x2d7049;
    } catch (_0x3697f1) {
      return [];
    }
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams
  };
} else {
  global.getStreams = {
    getStreams: getStreams
  };
}