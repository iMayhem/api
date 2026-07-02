var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x3431d6, _0x240560, _0x50652d) => _0x240560 in _0x3431d6 ? __defProp(_0x3431d6, _0x240560, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x50652d
}) : _0x3431d6[_0x240560] = _0x50652d;
var __spreadValues = (_0x1b9026, _0x58ed57) => {
  for (var _0x27057f in _0x58ed57 ||= {}) {
    if (__hasOwnProp.call(_0x58ed57, _0x27057f)) {
      __defNormalProp(_0x1b9026, _0x27057f, _0x58ed57[_0x27057f]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x27057f of __getOwnPropSymbols(_0x58ed57)) {
      if (__propIsEnum.call(_0x58ed57, _0x27057f)) {
        __defNormalProp(_0x1b9026, _0x27057f, _0x58ed57[_0x27057f]);
      }
    }
  }
  return _0x1b9026;
};
var __async = (_0x2a3e7e, _0x5d3a95, _0xec9f7c) => {
  return new Promise((_0x47487a, _0x875c2e) => {
    var _0x38c1b4 = _0x1b03a9 => {
      try {
        _0x416faf(_0xec9f7c.next(_0x1b03a9));
      } catch (_0x5722ec) {
        _0x875c2e(_0x5722ec);
      }
    };
    var _0x410341 = _0x22a20 => {
      try {
        _0x416faf(_0xec9f7c.throw(_0x22a20));
      } catch (_0xe06b3e) {
        _0x875c2e(_0xe06b3e);
      }
    };
    var _0x416faf = _0x2ed910 => _0x2ed910.done ? _0x47487a(_0x2ed910.value) : Promise.resolve(_0x2ed910.value).then(_0x38c1b4, _0x410341);
    _0x416faf((_0xec9f7c = _0xec9f7c.apply(_0x2a3e7e, _0x5d3a95)).next());
  });
};
var HEADERS = {
  Accept: "*/*",
  Origin: "https://lordflix.org",
  Referer: "https://lordflix.org/",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"
};
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var TMDB_BASE_URL = "https://api.themoviedb.org/3";
var LORDFLIX_API = "https://snowhouse.lordflix.club";
var MULTI_DECRYPT_API = "https://enc-dec.app/api";
function fetchText(_0x11c5ab) {
  return __async(this, arguments, function* (_0x1c41ed, _0x224130 = {}) {
    const _0x44d44c = yield fetch(_0x1c41ed, __spreadValues({
      headers: __spreadValues(__spreadValues({}, HEADERS), _0x224130.headers || {})
    }, _0x224130));
    if (!_0x44d44c.ok) {
      throw new Error("HTTP error " + _0x44d44c.status);
    }
    return yield _0x44d44c.text();
  });
}
function fetchJson(_0x2d5377) {
  return __async(this, arguments, function* (_0x2c208a, _0x53ca71 = {}) {
    const _0x5cb1c2 = yield fetchText(_0x2c208a, _0x53ca71);
    return JSON.parse(_0x5cb1c2);
  });
}
function getTMDBDetails(_0xc24962, _0x5aacca, _0x222602 = 1, _0x2dbb33 = 1) {
  return __async(this, null, function* () {
    var _0xf1572d;
    var _0x365a58;
    try {
      const _0x43d16f = _0x5aacca === "tv" ? "tv" : "movie";
      const _0x153138 = TMDB_BASE_URL + "/" + _0x43d16f + "/" + _0xc24962 + "?api_key=" + TMDB_API_KEY + "&append_to_response=external_ids";
      const _0x516d60 = yield fetch(_0x153138, {
        headers: {
          Accept: "application/json"
        }
      });
      if (!_0x516d60.ok) {
        throw new Error("TMDB API error");
      }
      const _0x2b6129 = yield _0x516d60.json();
      let _0x176d27 = _0x2b6129.runtime || 0;
      if (_0x5aacca === "tv" && _0xc24962) {
        try {
          const _0x483a6e = TMDB_BASE_URL + "/tv/" + _0xc24962 + "/season/" + _0x222602 + "/episode/" + _0x2dbb33 + "?api_key=" + TMDB_API_KEY;
          const _0x44a4b6 = yield fetch(_0x483a6e, {
            headers: {
              Accept: "application/json"
            }
          });
          if (_0x44a4b6.ok) {
            const _0x2ff927 = yield _0x44a4b6.json();
            if (_0x2ff927.runtime) {
              _0x176d27 = _0x2ff927.runtime;
            }
          }
        } catch (_0x444ea) {}
      }
      return {
        title: _0x5aacca === "tv" ? _0x2b6129.name : _0x2b6129.title,
        year: ((_0xf1572d = _0x5aacca === "tv" ? _0x2b6129.first_air_date : _0x2b6129.release_date) == null ? undefined : _0xf1572d.split("-")[0]) || null,
        imdbId: ((_0x365a58 = _0x2b6129.external_ids) == null ? undefined : _0x365a58.imdb_id) || null,
        runtime: _0x176d27
      };
    } catch (_0x1f30a3) {
      return {
        title: null,
        year: null,
        imdbId: null,
        runtime: 0
      };
    }
  });
}
function getUiToken() {
  try {
    if (typeof global !== "undefined" && global.SCRAPER_SETTINGS && global.SCRAPER_SETTINGS.uiToken) {
      return String(global.SCRAPER_SETTINGS.uiToken).trim();
    }
    if (typeof window !== "undefined" && window.SCRAPER_SETTINGS && window.SCRAPER_SETTINGS.uiToken) {
      return String(window.SCRAPER_SETTINGS.uiToken).trim();
    }
  } catch (_0x44657b) {}
  return "";
}
function extractFebBoxShare(_0x1b5d42, _0x598326, _0x28622a, _0x470b8d, _0x550eca) {
  return __async(this, null, function* () {
    const _0x428d62 = [];
    if (!_0x550eca) {
      return _0x428d62;
    }
    try {
      const _0x20cdce = _0x598326 === "tv" ? 2 : 1;
      const _0x5bd203 = "https://www.febbox.com/mbp/to_share_page?box_type=" + _0x20cdce + "&mid=" + _0x1b5d42 + "&json=1";
      console.log("[Lordflix-FebBox] Requesting share link: " + _0x5bd203);
      const _0x6df3bc = yield fetch(_0x5bd203).then(_0x42e5db => _0x42e5db.json());
      if (!_0x6df3bc || _0x6df3bc.code !== 1 || !_0x6df3bc.data) {
        return [];
      }
      const _0x1640bd = _0x6df3bc.data.share_link || _0x6df3bc.data.shareLink;
      if (!_0x1640bd) {
        return [];
      }
      const _0x59d301 = _0x1640bd.split("/").pop();
      const _0x42d4f6 = "https://www.febbox.com/file/file_share_list?share_key=" + _0x59d301;
      const _0x549e45 = yield fetch(_0x42d4f6, {
        headers: {
          "Accept-Language": "en"
        }
      }).then(_0x436e5a => _0x436e5a.json());
      if (!_0x549e45 || _0x549e45.code !== 1 || !_0x549e45.data || !_0x549e45.data.file_list) {
        return [];
      }
      let _0x4afb95 = [];
      if (_0x598326 === "movie") {
        _0x4afb95 = _0x549e45.data.file_list;
      } else {
        const _0x381e9e = "season " + _0x28622a;
        const _0x26c404 = _0x549e45.data.file_list.find(_0x4ecabb => _0x4ecabb.file_name && _0x4ecabb.file_name.toLowerCase() === _0x381e9e);
        if (!_0x26c404) {
          return [];
        }
        const _0x471660 = "https://www.febbox.com/file/file_share_list?share_key=" + _0x59d301 + "&parent_id=" + _0x26c404.fid + "&page=1";
        const _0x53f912 = yield fetch(_0x471660, {
          headers: {
            "Accept-Language": "en"
          }
        }).then(_0x188a6c => _0x188a6c.json());
        if (!_0x53f912 || _0x53f912.code !== 1 || !_0x53f912.data || !_0x53f912.data.file_list) {
          return [];
        }
        const _0x4180de = String(_0x28622a).padStart(2, "0");
        const _0x29810b = String(_0x470b8d).padStart(2, "0");
        _0x4afb95 = _0x53f912.data.file_list.filter(_0x437ee2 => _0x437ee2.file_name && (_0x437ee2.file_name.toLowerCase().includes("s" + _0x4180de + "e" + _0x29810b) || _0x437ee2.file_name.toLowerCase().includes("s" + _0x28622a + "e" + _0x470b8d)));
      }
      const _0xdbd84d = _0x550eca.startsWith("ui=") ? _0x550eca : "ui=" + _0x550eca;
      const _0x17c7ad = {
        Accept: "*/*",
        Referer: "https://www.febbox.com/",
        "User-Agent": HEADERS["User-Agent"]
      };
      for (const _0x1e4443 of _0x4afb95) {
        const _0x40802e = _0x1e4443.file_name || "FebBox Stream";
        const _0x50c2d6 = "1080P";
        const _0x5eb761 = "Multi-Audio";
        const _0x21514a = "🟣 LordFlix | " + _0x50c2d6 + " | " + _0x5eb761;
        const _0x1058d2 = _0x40802e.toLowerCase().includes(".mp4") ? "MP4" : _0x40802e.toLowerCase().includes(".mkv") ? "MKV" : "M3U8 / HLS";
        const _0x4b4885 = _0x40802e.toLowerCase().includes("x265") || _0x40802e.toLowerCase().includes("hevc") ? "x265" : "x264";
        _0x428d62.push({
          name: _0x21514a,
          title: _0x40802e,
          url: "https://www.febbox.com/file/download_file?fid=" + _0x1e4443.fid + "&share_key=" + _0x59d301,
          quality: _0x50c2d6,
          headers: __spreadValues({
            Cookie: _0xdbd84d
          }, _0x17c7ad),
          _meta: {
            isCustom: true,
            title: _0x40802e,
            quality: _0x50c2d6,
            audio: _0x5eb761,
            server: "Server 1",
            format: _0x1058d2,
            codec: _0x4b4885,
            runtime: info.runtime
          }
        });
      }
    } catch (_0x40418d) {
      console.error("[Lordflix-FebBox] Error extracting share: " + _0x40418d.message);
    }
    return _0x428d62;
  });
}
var SERVERS = ["Berlin", "Orion", "Frankfurt", "Phoenix", "Aqua", "Moscow", "Draco", "Comet", "Oslo", "Luna", "LordFlix", "Sakura", "Rio", "Ativa", "Vienna", "Lion", "Solstice"];
function encodeQuote(_0x4ca548) {
  return encodeURIComponent(_0x4ca548).replace(/%20/g, "+").replace(/\+/g, "%20");
}
function getStreams(_0x164206, _0x302ab9, _0x3ce5a2, _0xb495c7) {
  return __async(this, null, function* () {
    const _0x33b2fa = [];
    const _0x47dfc9 = getUiToken();
    try {
      const _0x3395a7 = yield getTMDBDetails(_0x164206, _0x302ab9, _0x3ce5a2, _0xb495c7);
      if (!_0x3395a7.title || !_0x3395a7.imdbId) {
        return _0x33b2fa;
      }
      const _0x525217 = _0x302ab9 === "tv" ? "series" : "movie";
      const _0x355d05 = encodeQuote(_0x3395a7.title);
      let _0x2e0fc3 = null;
      yield Promise.all(SERVERS.map(_0x5366d6 => __async(this, null, function* () {
        try {
          let _0x2011b2 = LORDFLIX_API + "/?title=" + _0x355d05 + "&type=" + _0x525217 + "&year=" + (_0x3395a7.year || "") + "&imdb=" + _0x3395a7.imdbId + "&tmdb=" + _0x164206 + "&server=" + _0x5366d6;
          if (_0x302ab9 === "tv") {
            _0x2011b2 += "&season=" + _0x3ce5a2 + "&episode=" + _0xb495c7;
          }
          const _0x35eb12 = MULTI_DECRYPT_API + "/enc-lordflix?url=" + encodeQuote(_0x2011b2);
          const _0x5ac668 = yield fetchJson(_0x35eb12);
          if (!_0x5ac668 || _0x5ac668.status !== 200 || !_0x5ac668.result) {
            return;
          }
          const _0x598357 = _0x5ac668.result.url;
          const _0x3fbcf7 = _0x5ac668.result.sign;
          if (!_0x598357 || !_0x3fbcf7) {
            return;
          }
          const _0x546376 = yield fetchText(_0x598357);
          const _0x6b0574 = yield fetch(MULTI_DECRYPT_API + "/dec-lordflix", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              text: _0x546376,
              sign: _0x3fbcf7
            })
          });
          if (!_0x6b0574.ok) {
            return;
          }
          const _0x357878 = yield _0x6b0574.json();
          if (!_0x357878 || _0x357878.status !== 200 || !_0x357878.result || _0x357878.result.error) {
            return;
          }
          if (_0x357878.result.id || _0x357878.result.mid) {
            _0x2e0fc3 = _0x357878.result.id || _0x357878.result.mid;
          }
          const _0x52fec3 = _0x357878.result.stream;
          if (!_0x52fec3 || !Array.isArray(_0x52fec3) || _0x52fec3.length === 0) {
            return;
          }
          const _0x315a37 = _0x52fec3[0];
          if (_0x315a37.type === "hls" && _0x315a37.playlist) {
            const _0x17264b = "1080P";
            const _0xd6f797 = "Multi-Audio";
            const _0x594588 = "🟣 LordFlix | " + _0x17264b + " | " + _0xd6f797;
            const _0x43323e = _0x302ab9 === "tv" ? _0x3395a7.title + " - S" + String(_0x3ce5a2).padStart(2, "0") + "E" + String(_0xb495c7).padStart(2, "0") + (_0x3395a7.year ? " (" + _0x3395a7.year + ")" : "") : "" + _0x3395a7.title + (_0x3395a7.year ? " (" + _0x3395a7.year + ")" : "");
            _0x33b2fa.push({
              name: _0x594588,
              title: _0x43323e,
              url: _0x315a37.playlist,
              quality: _0x17264b,
              type: "m3u8",
              headers: HEADERS,
              _meta: {
                isCustom: true,
                title: _0x43323e,
                quality: _0x17264b,
                audio: _0xd6f797,
                server: "[Server: " + _0x5366d6 + "]",
                format: "M3U8 / HLS",
                codec: "x264",
                runtime: _0x3395a7.runtime
              }
            });
          }
        } catch (_0x365f7d) {}
      })));
      if (_0x2e0fc3 && _0x47dfc9) {
        const _0x251dd2 = yield extractFebBoxShare(_0x2e0fc3, _0x302ab9, _0x3ce5a2, _0xb495c7, _0x47dfc9);
        if (_0x251dd2.length > 0) {
          _0x33b2fa.push(..._0x251dd2);
        }
      }
    } catch (_0x57f8a8) {
      console.error("[Lordflix] Main Error:", _0x57f8a8.message);
    }
    return _0x33b2fa.map(_0x37323e => {
      if (!_0x37323e._meta) {
        return _0x37323e;
      }
      try {
        const _0x21acbc = _0x37323e._meta;
        const _0x29e3d1 = _0x21acbc.runtime || _0x37323e.runtime || 0;
        const _0x1c297a = _0x29e3d1 > 0 ? _0x29e3d1 + " min" : "N/A";
        const _0x51f0d8 = "🎬 " + _0x21acbc.title;
        const _0x321cae = "💎 " + _0x21acbc.quality + " | 🔊 " + _0x21acbc.audio + " | ⏳ " + _0x1c297a;
        const _0x33149c = "🎞️ " + _0x21acbc.format + " | 📌 " + _0x21acbc.codec + " • WEB-DL";
        const _0x4d4ba4 = "⛓️‍💥 " + _0x21acbc.server;
        const _0x503572 = _0x51f0d8 + "\n" + _0x321cae + "\n" + _0x33149c + "\n" + _0x4d4ba4;
        Object.defineProperties(_0x37323e, {
          title: {
            get: () => _0x503572,
            enumerable: true,
            configurable: true
          },
          description: {
            get: () => _0x503572,
            enumerable: true,
            configurable: true
          },
          size: {
            get: () => _0x503572,
            enumerable: true,
            configurable: true
          },
          qualityTag: {
            get: () => "",
            enumerable: true,
            configurable: true
          },
          quality: {
            get: () => "\b",
            enumerable: true,
            configurable: true
          },
          language: {
            get: () => "",
            enumerable: true,
            configurable: true
          }
        });
      } catch (_0xad6b28) {}
      return _0x37323e;
    });
  });
}
function onSettings() {
  return __async(this, null, function* () {
    return [{
      type: "header",
      label: "LordFlix Configuration"
    }, {
      type: "text",
      isPassword: true,
      key: "uiToken",
      label: "FebBox UI Token (Cookie)",
      placeholder: "ui=...",
      description: "Go to febbox.com, login, and copy your 'ui' cookie value from your browser."
    }, {
      type: "text",
      key: "ossGroup",
      label: "FebBox OSS Group (Optional)",
      placeholder: "",
      description: "Optional OSS group parameter."
    }];
  });
}
module.exports = {
  getStreams: getStreams,
  onSettings: onSettings
};