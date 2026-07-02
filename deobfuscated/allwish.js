var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0xf040fc, _0x508bfd, _0xb4428b) => _0x508bfd in _0xf040fc ? __defProp(_0xf040fc, _0x508bfd, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0xb4428b
}) : _0xf040fc[_0x508bfd] = _0xb4428b;
var __spreadValues = (_0x195fe3, _0x36422a) => {
  for (var _0x2afa6d in _0x36422a ||= {}) {
    if (__hasOwnProp.call(_0x36422a, _0x2afa6d)) {
      __defNormalProp(_0x195fe3, _0x2afa6d, _0x36422a[_0x2afa6d]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x2afa6d of __getOwnPropSymbols(_0x36422a)) {
      if (__propIsEnum.call(_0x36422a, _0x2afa6d)) {
        __defNormalProp(_0x195fe3, _0x2afa6d, _0x36422a[_0x2afa6d]);
      }
    }
  }
  return _0x195fe3;
};
var __spreadProps = (_0x340b78, _0xf3dbff) => __defProps(_0x340b78, __getOwnPropDescs(_0xf3dbff));
var __async = (_0x219ac4, _0x41e316, _0xe46133) => {
  return new Promise((_0x466e92, _0x208718) => {
    var _0xafb8ed = _0x109bb2 => {
      try {
        _0x2885fb(_0xe46133.next(_0x109bb2));
      } catch (_0x251dae) {
        _0x208718(_0x251dae);
      }
    };
    var _0x40e3d4 = _0x2e2e95 => {
      try {
        _0x2885fb(_0xe46133.throw(_0x2e2e95));
      } catch (_0xd7854f) {
        _0x208718(_0xd7854f);
      }
    };
    var _0x2885fb = _0x39bb5e => _0x39bb5e.done ? _0x466e92(_0x39bb5e.value) : Promise.resolve(_0x39bb5e.value).then(_0xafb8ed, _0x40e3d4);
    _0x2885fb((_0xe46133 = _0xe46133.apply(_0x219ac4, _0x41e316)).next());
  });
};
var cheerio = require("cheerio-without-node-native");
var CryptoJS = require("crypto-js");
var PROVIDER_NAME = "AllWish";
var MAIN_URL = "https://all-wish.me";
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var REQUEST_TIMEOUT = 12000;
var EPISODE_LIST_TIMEOUT = 30000;
var VRF_SECRET = "ysJhV6U27FVIjjuk";
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.5",
  Connection: "keep-alive"
};
var AJAX_HEADERS = {
  "X-Requested-With": "XMLHttpRequest",
  "User-Agent": HEADERS["User-Agent"],
  Referer: MAIN_URL + "/"
};
function fetchSafe(_0x15767a) {
  return __async(this, arguments, function* (_0x4eff9c, _0x133c67 = {}, _0x1f22fb = REQUEST_TIMEOUT) {
    try {
      const _0x25091a = typeof AbortSignal !== "undefined" && AbortSignal.timeout ? AbortSignal.timeout(_0x1f22fb) : null;
      const _0xb2382a = __spreadProps(__spreadValues({}, _0x133c67), {
        headers: __spreadValues(__spreadValues({}, HEADERS), _0x133c67.headers || {})
      });
      if (_0x25091a) {
        _0xb2382a.signal = _0x25091a;
      }
      const _0x398ba0 = yield fetch(_0x4eff9c, _0xb2382a);
      return _0x398ba0;
    } catch (_0x311219) {
      console.error("[" + PROVIDER_NAME + "] fetchSafe: " + (_0x4eff9c || "").substring(0, 100) + " -> " + _0x311219.message);
      return null;
    }
  });
}
function fetchJson(_0x2f2610) {
  return __async(this, arguments, function* (_0x23b0a9, _0x2891d4 = {}, _0xe7baa3) {
    try {
      const _0xbfebbd = yield fetchSafe(_0x23b0a9, _0x2891d4, _0xe7baa3);
      if (!_0xbfebbd || !_0xbfebbd.ok) {
        return null;
      }
      return JSON.parse(yield _0xbfebbd.text());
    } catch (_0xc6bce2) {
      console.error("[" + PROVIDER_NAME + "] fetchJson: " + (_0x23b0a9 || "").substring(0, 100) + " -> " + _0xc6bce2.message);
      return null;
    }
  });
}
function fetchHtml(_0x4ba983) {
  return __async(this, arguments, function* (_0x1c1995, _0x39dff0 = {}) {
    try {
      const _0x220ea2 = yield fetchSafe(_0x1c1995, _0x39dff0);
      if (!_0x220ea2 || !_0x220ea2.ok) {
        return null;
      }
      return cheerio.load(yield _0x220ea2.text());
    } catch (_0x4f4772) {
      console.error("[" + PROVIDER_NAME + "] fetchHtml: " + (_0x1c1995 || "").substring(0, 100) + " -> " + _0x4f4772.message);
      return null;
    }
  });
}
function makeStream(_0x246b71, _0x3bde92, _0x2bc1c1, _0x2c99fc, _0x32fc65 = {}, _0x590048) {
  const _0x2c7d70 = {
    name: PROVIDER_NAME + " | " + _0x246b71,
    title: _0x3bde92 || "",
    url: _0x2bc1c1 || "",
    quality: _0x2c99fc || "HD",
    headers: __spreadValues({
      "User-Agent": HEADERS["User-Agent"]
    }, _0x32fc65 || {})
  };
  if (_0x590048 && Array.isArray(_0x590048) && _0x590048.length > 0) {
    _0x2c7d70.subtitles = _0x590048;
  }
  return _0x2c7d70;
}
function buildStreamLabels(_0x3df22d, _0x35b9ed, _0x14d38d, _0x2df68b) {
  const _0x12e808 = _0x35b9ed || "HD";
  const _0xf356ee = _0x12e808 + (_0x14d38d ? " " + _0x14d38d : "");
  let _0x5b58b1 = "";
  if (_0x2df68b && _0x2df68b.title) {
    if (_0x2df68b.mediaType === "tv" && _0x2df68b.season != null && _0x2df68b.episode != null) {
      _0x5b58b1 = _0x2df68b.title + "\nS" + _0x2df68b.season + " E" + _0x2df68b.episode + " · " + _0x12e808 + " · HLS";
    } else {
      _0x5b58b1 = _0x2df68b.title + "\n" + _0x12e808 + " · HLS";
    }
  } else {
    _0x5b58b1 = _0x3df22d + (_0x14d38d ? " " + _0x14d38d : "") + "\n" + _0x12e808 + " · HLS";
  }
  _0x5b58b1 += "\nby piratezoro9";
  return {
    name: _0xf356ee,
    title: _0x5b58b1
  };
}
function dedupe(_0x31838e) {
  const _0x20b6f3 = new Set();
  return (_0x31838e || []).filter(_0x5eb7a7 => {
    if (!_0x5eb7a7 || !_0x5eb7a7.url || _0x20b6f3.has(_0x5eb7a7.url)) {
      return false;
    }
    _0x20b6f3.add(_0x5eb7a7.url);
    return true;
  });
}
function getTMDBInfo(_0x523e8a, _0x416b94) {
  return __async(this, null, function* () {
    const _0x41131c = String(_0x523e8a || "").trim();
    const _0x4473d9 = _0x41131c.startsWith("tt");
    const _0x369740 = _0x416b94 === "tv" || _0x416b94 === "series" ? "tv" : "movie";
    try {
      if (_0x4473d9) {
        const _0x52cc96 = yield fetchJson("https://api.themoviedb.org/3/find/" + _0x41131c + "?api_key=" + TMDB_API_KEY + "&external_source=imdb_id");
        const _0x502ac2 = _0x52cc96 ? _0x369740 === "tv" ? _0x52cc96.tv_results : _0x52cc96.movie_results : null;
        if (_0x502ac2 && _0x502ac2.length > 0) {
          const _0x876064 = _0x502ac2[0];
          return {
            id: _0x876064.id,
            title: _0x369740 === "tv" ? _0x876064.name : _0x876064.title,
            originalTitle: _0x369740 === "tv" ? _0x876064.original_name : _0x876064.original_title,
            year: (_0x876064.first_air_date || _0x876064.release_date || "").split("-")[0],
            genres: _0x876064.genre_ids || [],
            imdbId: _0x41131c
          };
        }
        return {
          id: _0x41131c,
          title: _0x41131c,
          originalTitle: _0x41131c,
          year: null,
          genres: [],
          imdbId: _0x41131c
        };
      } else {
        const _0x1854ed = yield fetchJson("https://api.themoviedb.org/3/" + _0x369740 + "/" + _0x41131c + "?api_key=" + TMDB_API_KEY + "&append_to_response=external_ids");
        if (_0x1854ed) {
          return {
            id: _0x1854ed.id,
            title: _0x369740 === "tv" ? _0x1854ed.name : _0x1854ed.title,
            originalTitle: _0x369740 === "tv" ? _0x1854ed.original_name : _0x1854ed.original_title,
            year: (_0x1854ed.first_air_date || _0x1854ed.release_date || "").split("-")[0],
            genres: (_0x1854ed.genres || []).map(_0x2e3aec => _0x2e3aec.id),
            imdbId: _0x1854ed.imdb_id || _0x1854ed.external_ids && _0x1854ed.external_ids.imdb_id || null
          };
        }
      }
    } catch (_0x2316be) {
      console.error("[" + PROVIDER_NAME + "] TMDB error: " + _0x2316be.message);
    }
    return {
      id: _0x41131c,
      title: _0x41131c,
      originalTitle: _0x41131c,
      year: null,
      genres: [],
      imdbId: null
    };
  });
}
function cleanTitle(_0x545905) {
  return String(_0x545905 || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}
function tokenize(_0x5aaef7) {
  return cleanTitle(_0x5aaef7).split(" ").filter(Boolean);
}
function scoreTitle(_0x5ac27f, _0x2031c5, _0x51e3fb, _0x19557d) {
  const _0x164ee7 = tokenize(_0x2031c5);
  if (!_0x164ee7.length) {
    return 0;
  }
  const _0x577656 = new Set(tokenize(_0x5ac27f));
  const _0x1cc5bd = cleanTitle(_0x5ac27f);
  const _0x540e1e = cleanTitle(_0x2031c5);
  const _0x221b24 = tokenize(_0x5ac27f);
  if (_0x1cc5bd === _0x540e1e) {
    return 1.5;
  }
  const _0x38251a = _0x1cc5bd.replace(/\s+tv$/, "").replace(/\s+movie$/, "").replace(/\s+anime$/, "").replace(/\s+specials?$/, "").trim();
  if (_0x38251a === _0x540e1e) {
    return 1.4;
  }
  let _0x5d2e9d = 0;
  for (const _0x233736 of _0x164ee7) {
    if (_0x577656.has(_0x233736)) {
      _0x5d2e9d++;
    }
  }
  let _0x27db1c = _0x5d2e9d / Math.max(_0x164ee7.length, 1);
  if (_0x1cc5bd.startsWith(_0x540e1e)) {
    _0x27db1c += 0.3;
    const _0x179f6f = _0x221b24.length - _0x164ee7.length;
    if (_0x179f6f > 2) {
      _0x27db1c -= Math.min(_0x179f6f * 0.1, 0.4);
    }
    const _0x12bcb0 = ["part", "parts", "season", "movie", "movies", "special", "specials", "ova", "film", "films", "the"];
    const _0x929984 = _0x221b24.slice(_0x164ee7.length).filter(_0x4c4c16 => _0x12bcb0.includes(_0x4c4c16)).length;
    if (_0x929984 > 0) {
      _0x27db1c -= 0.2;
    }
  } else if (_0x164ee7.length <= 4 && _0x5d2e9d === _0x164ee7.length) {
    _0x27db1c -= 0.4;
  }
  if (_0x51e3fb) {
    const _0x22c22f = /\b(19|20)\d{2}\b/;
    const _0x5ac534 = _0x1cc5bd.match(_0x22c22f);
    if (_0x5ac534 && Math.abs(parseInt(_0x5ac534[0]) - parseInt(_0x51e3fb)) <= 1) {
      _0x27db1c += 0.5;
    } else if (_0x5ac534) {
      const _0x2edd5f = Math.abs(parseInt(_0x5ac534[0]) - parseInt(_0x51e3fb));
      _0x27db1c -= Math.min(_0x2edd5f * 0.1, 0.8);
    }
  }
  if (_0x19557d && Number(_0x19557d) > 1) {
    const _0x4de336 = Number(_0x19557d);
    const _0x45ebf1 = _0x1cc5bd.match(new RegExp("\\b" + _0x4de336 + "(?:st|nd|rd|th)\\s+season|season\\s*" + _0x4de336 + "|\\bpart\\s*" + _0x4de336, "i"));
    if (_0x45ebf1) {
      _0x27db1c += 0.4;
    } else {
      const _0x5b2feb = _0x1cc5bd.match(/\b(?:season|part)\s*\d+/i);
      if (!_0x5b2feb) {
        _0x27db1c -= 0.3;
      }
    }
  }
  return Math.min(_0x27db1c, 2);
}
function searchAllWish(_0xcfe9eb, _0x4466f7, _0x5abccc, _0x37043e) {
  return __async(this, null, function* () {
    try {
      const _0x12bc75 = [];
      if (_0xcfe9eb) {
        _0x12bc75.push(_0xcfe9eb);
      }
      if (_0x4466f7 && _0x4466f7 !== _0xcfe9eb) {
        _0x12bc75.push(_0x4466f7);
      }
      if (_0x37043e && Number(_0x37043e) > 1) {
        const _0x450227 = Number(_0x37043e);
        if (_0xcfe9eb) {
          _0x12bc75.push(_0xcfe9eb + " " + _0x450227);
          _0x12bc75.push(_0xcfe9eb + " season " + _0x450227);
        }
      }
      const _0x48b11c = [];
      for (const _0x298c4f of _0x12bc75) {
        const _0x4f1184 = yield fetchHtml(MAIN_URL + "/filter?keyword=" + encodeURIComponent(_0x298c4f) + "&page=1");
        if (!_0x4f1184) {
          continue;
        }
        _0x4f1184("div.item").each((_0x488885, _0x3d3f72) => {
          const _0x615fd8 = _0x4f1184(_0x3d3f72).find("div.name > a").text().trim();
          const _0x3ec04a = _0x4f1184(_0x3d3f72).find("div.name > a").attr("href");
          if (_0x615fd8 && _0x3ec04a) {
            const _0x2c56c2 = _0x3ec04a.replace(/\/ep-\d+\/?$/i, "");
            _0x48b11c.push({
              title: _0x615fd8,
              watchUrl: _0x2c56c2,
              query: _0x298c4f
            });
          }
        });
        if (_0x48b11c.length > 0) {
          break;
        }
      }
      if (_0x48b11c.length === 0) {
        return null;
      }
      let _0x285339 = null;
      let _0x4f2bf7 = -1;
      for (const _0x128c8a of _0x48b11c) {
        const _0xdf55be = scoreTitle(_0x128c8a.title, _0xcfe9eb || "", _0x5abccc || null, _0x37043e);
        const _0x4f1667 = _0x4466f7 ? scoreTitle(_0x128c8a.title, _0x4466f7, _0x5abccc || null, _0x37043e) : 0;
        const _0x444d38 = Math.max(_0xdf55be, _0x4f1667);
        if (_0x444d38 > _0x4f2bf7) {
          _0x4f2bf7 = _0x444d38;
          _0x285339 = _0x128c8a;
        }
      }
      if (_0x4f2bf7 < 0.3) {
        console.log("[" + PROVIDER_NAME + "] Title match score too low: " + _0x4f2bf7);
        return null;
      }
      console.log("[" + PROVIDER_NAME + "] Best match: \"" + _0x285339.title + "\" score=" + _0x4f2bf7.toFixed(2));
      return _0x285339;
    } catch (_0x15088a) {
      console.error("[" + PROVIDER_NAME + "] Search error: " + _0x15088a.message);
      return null;
    }
  });
}
function generateEpisodeVrf(_0x500214) {
  const _0x3cf55b = encodeURIComponent(_0x500214).replace(/%21/g, "!").replace(/%27/g, "'").replace(/%28/g, "(").replace(/%29/g, ")").replace(/%7E/g, "~").replace(/%2A/g, "*").replace(/%20/g, "%20");
  const _0x5087b8 = Array.from(VRF_SECRET).map(_0x2d8d67 => _0x2d8d67.charCodeAt(0));
  const _0x5c0b22 = Array.from(_0x3cf55b).map(_0x2f55e2 => _0x2f55e2.charCodeAt(0));
  const _0x7caec5 = Array.from({
    length: 256
  }, (_0x59ecf9, _0x2d9a50) => _0x2d9a50);
  let _0x2ea21d = 0;
  for (let _0x4e714d = 0; _0x4e714d <= 255; _0x4e714d++) {
    _0x2ea21d = (_0x2ea21d + _0x7caec5[_0x4e714d] + _0x5087b8[_0x4e714d % _0x5087b8.length]) % 256;
    [_0x7caec5[_0x4e714d], _0x7caec5[_0x2ea21d]] = [_0x7caec5[_0x2ea21d], _0x7caec5[_0x4e714d]];
  }
  const _0x4527aa = [];
  let _0xd982fb = 0;
  _0x2ea21d = 0;
  for (let _0x2ad2d8 = 0; _0x2ad2d8 < _0x5c0b22.length; _0x2ad2d8++) {
    _0xd982fb = (_0xd982fb + 1) % 256;
    _0x2ea21d = (_0x2ea21d + _0x7caec5[_0xd982fb]) % 256;
    [_0x7caec5[_0xd982fb], _0x7caec5[_0x2ea21d]] = [_0x7caec5[_0x2ea21d], _0x7caec5[_0xd982fb]];
    const _0x11dff5 = _0x7caec5[(_0x7caec5[_0xd982fb] + _0x7caec5[_0x2ea21d]) % 256];
    _0x4527aa.push((_0x5c0b22[_0x2ad2d8] ^ _0x11dff5) & 255);
  }
  function _0x2eb1b3(_0x3e39b4) {
    let _0x1bc6de = "";
    for (const _0x44dc53 of _0x3e39b4) {
      _0x1bc6de += String.fromCharCode(_0x44dc53);
    }
    return btoa(_0x1bc6de).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  const _0xf4ec51 = _0x2eb1b3(_0x4527aa);
  const _0x2e33b5 = {
    0: -3,
    1: 3,
    2: -4,
    3: 2,
    4: -2,
    5: 5,
    6: 4,
    7: 5
  };
  const _0x7602ab = Array.from(_0xf4ec51).map((_0x11995f, _0x14904d) => {
    let _0x33bdb9 = _0x11995f.charCodeAt(0);
    _0x33bdb9 += _0x2e33b5[_0x14904d % 8] || 0;
    return _0x33bdb9 & 255;
  });
  const _0x3beaf3 = _0x2eb1b3(_0x7602ab);
  const _0x48d4ed = _0x11f4f3 => {
    if (_0x11f4f3 >= "A" && _0x11f4f3 <= "Z") {
      return String.fromCharCode((_0x11f4f3.charCodeAt(0) - 65 + 13) % 26 + 65);
    }
    if (_0x11f4f3 >= "a" && _0x11f4f3 <= "z") {
      return String.fromCharCode((_0x11f4f3.charCodeAt(0) - 97 + 13) % 26 + 97);
    }
    return _0x11f4f3;
  };
  return Array.from(_0x3beaf3).map(_0x48d4ed).join("");
}
function chooseEpisode(_0x4a666d, _0x86455f, _0x4cb2f9, _0x20af93) {
  const _0x21189a = _0x4a666d("div.range > div > a").map((_0x400f86, _0x361b54) => ({
    slug: parseInt(_0x4a666d(_0x361b54).attr("data-slug") || "0", 10),
    ids: _0x4a666d(_0x361b54).attr("data-ids") || "",
    hasSub: _0x4a666d(_0x361b54).attr("data-sub") === "1",
    hasDub: _0x4a666d(_0x361b54).attr("data-dub") === "1",
    malId: _0x4a666d(_0x361b54).attr("data-mal") ? parseInt(_0x4a666d(_0x361b54).attr("data-mal"), 10) : null
  })).get().filter(_0x542e9e => _0x542e9e.ids);
  if (!_0x21189a.length) {
    return null;
  }
  if (_0x20af93 === "movie" || _0x4cb2f9 == null) {
    return _0x21189a[0];
  }
  const _0x59e568 = Number(_0x4cb2f9);
  return _0x21189a.find(_0x84cfa4 => _0x84cfa4.slug === _0x59e568) || null;
}
function extractMegaPlay(_0x122ebf, _0x4f95d5, _0x39d6a5) {
  return __async(this, null, function* () {
    try {
      const _0x4e91f8 = yield fetchSafe(_0x122ebf, {
        headers: __spreadProps(__spreadValues({}, HEADERS), {
          "X-Requested-With": "XMLHttpRequest",
          Referer: "https://megaplay.buzz/"
        })
      });
      if (!_0x4e91f8) {
        return [];
      }
      const _0x6d1a54 = cheerio.load(yield _0x4e91f8.text());
      const _0x5645d5 = _0x6d1a54("#megaplay-player").attr("data-id");
      if (!_0x5645d5) {
        return [];
      }
      const _0x1a0258 = yield fetchJson("https://megaplay.buzz/stream/getSources?id=" + _0x5645d5 + "&id=" + _0x5645d5, {
        headers: __spreadProps(__spreadValues({}, HEADERS), {
          "X-Requested-With": "XMLHttpRequest",
          Referer: "https://megaplay.buzz/"
        })
      });
      if (!_0x1a0258 || !_0x1a0258.sources || !_0x1a0258.sources.file) {
        return [];
      }
      const _0x3b0f5b = (_0x1a0258.tracks || []).filter(_0x461d13 => _0x461d13.kind === "captions" || _0x461d13.kind === "subtitles").map(_0x284a1e => ({
        label: _0x284a1e.label || "Unknown",
        url: _0x284a1e.file
      })).filter(_0x3369a8 => _0x3369a8.url);
      const _0x48a5ab = buildStreamLabels("MegaPlay", "1080p", _0x4f95d5, _0x39d6a5);
      return [makeStream(_0x48a5ab.name, _0x48a5ab.title, _0x1a0258.sources.file, "1080p", {
        Referer: "https://megaplay.buzz/",
        Origin: "https://megaplay.buzz",
        "User-Agent": HEADERS["User-Agent"]
      }, _0x3b0f5b.length > 0 ? _0x3b0f5b : undefined)];
    } catch (_0x2ef7ac) {
      console.error("[" + PROVIDER_NAME + "] MegaPlay error: " + _0x2ef7ac.message);
      return [];
    }
  });
}
function extractZen(_0x5d78a6, _0x33d978, _0x56adb3) {
  return __async(this, null, function* () {
    try {
      const _0x37de36 = yield fetchSafe(_0x5d78a6, {
        headers: HEADERS
      });
      if (!_0x37de36) {
        return [];
      }
      const _0x2cde77 = yield _0x37de36.text();
      const _0x267dd3 = _0x2cde77.match(/video_b64:\s*"([^"]+)"/);
      const _0x4990a6 = _0x2cde77.match(/enc_key_b64:\s*"([^"]+)"/);
      const _0x1ad258 = _0x2cde77.match(/iv_b64:\s*"([^"]+)"/);
      const _0x5f3fd8 = _0x2cde77.match(/subtitles:\s*"([^"]*)"/);
      if (!_0x267dd3 || !_0x4990a6 || !_0x1ad258) {
        return [];
      }
      const _0x4087e8 = _0x267dd3[1];
      const _0x5a3e9b = _0x4990a6[1];
      const _0x12dba7 = _0x1ad258[1];
      const _0x2cbb74 = CryptoJS.enc.Base64.parse(_0x5a3e9b);
      const _0x514354 = CryptoJS.enc.Base64.parse(_0x12dba7);
      const _0x1d3aa9 = CryptoJS.enc.Base64.parse(_0x4087e8);
      const _0x13bc80 = CryptoJS.AES.decrypt({
        ciphertext: _0x1d3aa9
      }, _0x2cbb74, {
        iv: _0x514354,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
      const _0x3e33ec = _0x13bc80.toString(CryptoJS.enc.Utf8);
      if (!_0x3e33ec) {
        return [];
      }
      let _0x40c735 = [];
      if (_0x5f3fd8 && _0x5f3fd8[1]) {
        try {
          const _0xada49a = _0x5f3fd8[1].replace(/\\"/g, "\"").replace(/\\\\\//g, "/").replace(/\\u([0-9a-fA-F]{4})/g, (_0x2973d5, _0x3a2a95) => String.fromCharCode(parseInt(_0x3a2a95, 16)));
          const _0x3930df = JSON.parse(_0xada49a);
          if (Array.isArray(_0x3930df)) {
            _0x40c735 = _0x3930df.filter(_0x373e47 => _0x373e47.url).map(_0x4d1eaa => ({
              label: _0x4d1eaa.language || "Unknown",
              url: _0x4d1eaa.url
            }));
          }
        } catch (_0x58cabb) {}
      }
      const _0x486464 = buildStreamLabels("Zen", "1080p", _0x33d978, _0x56adb3);
      return [makeStream(_0x486464.name, _0x486464.title, _0x3e33ec.trim(), "1080p", {
        Referer: "https://player.sgsgsgsr.site/",
        Origin: "https://player.sgsgsgsr.site/"
      }, _0x40c735.length > 0 ? _0x40c735 : undefined)];
    } catch (_0x355be7) {
      console.error("[" + PROVIDER_NAME + "] Zen error: " + _0x355be7.message);
      return [];
    }
  });
}
function resolveServers(_0x579215, _0x5903f8, _0x26bd69) {
  return __async(this, null, function* () {
    try {
      const _0x3c430d = yield fetchJson(MAIN_URL + "/ajax/server/list?servers=" + encodeURIComponent(_0x579215), {
        headers: AJAX_HEADERS
      });
      if (!_0x3c430d || _0x3c430d.status !== 200) {
        return [];
      }
      const _0x2da6c9 = cheerio.load(_0x3c430d.result || "");
      const _0x7d2569 = [];
      _0x2da6c9("div.server-type").each((_0x33d671, _0x30df53) => {
        const _0xa6f7b9 = _0x2da6c9(_0x30df53).attr("data-type");
        const _0x5b68e6 = (_0x2da6c9(_0x30df53).find("span").first().text() || "").includes("H-Sub");
        if (!_0x5903f8.includes(_0xa6f7b9)) {
          return;
        }
        _0x2da6c9(_0x30df53).find("div.server-list > div.server").each((_0x2264aa, _0x3a6574) => {
          const _0xcde100 = _0x2da6c9(_0x3a6574).attr("data-link-id");
          if (!_0xcde100) {
            return;
          }
          _0x7d2569.push({
            dataId: _0xcde100,
            sectionType: _0xa6f7b9,
            isHardSub: _0x5b68e6
          });
        });
      });
      if (_0x7d2569.length === 0) {
        return [];
      }
      const _0xf4e4b4 = yield Promise.all(_0x7d2569.map(_0x426d55 => __async(this, null, function* () {
        try {
          const _0x117348 = yield fetchJson(MAIN_URL + "/ajax/server?get=" + encodeURIComponent(_0x426d55.dataId), {
            headers: AJAX_HEADERS
          });
          if (!_0x117348 || !_0x117348.result || !_0x117348.result.url) {
            return [];
          }
          const _0x14f09b = _0x117348.result.url;
          const _0x62a8e1 = _0x426d55.sectionType === "dub" ? "[Dub]" : _0x426d55.isHardSub ? "[Hard Sub]" : "[Sub]";
          if (/megaplay\.buzz/i.test(_0x14f09b)) {
            return extractMegaPlay(_0x14f09b, _0x62a8e1, _0x26bd69);
          } else if (/player\.sgsgsgsr\.site|zencloudz\.cc/i.test(_0x14f09b)) {
            return extractZen(_0x14f09b, _0x62a8e1, _0x26bd69);
          } else if (/vidwish\.live/i.test(_0x14f09b)) {
            return extractMegaPlay(_0x14f09b, _0x62a8e1, _0x26bd69);
          }
          return [];
        } catch (_0x565754) {
          return [];
        }
      })));
      return dedupe(_0xf4e4b4.flat());
    } catch (_0x5828e0) {
      console.error("[" + PROVIDER_NAME + "] Server resolve error: " + _0x5828e0.message);
      return [];
    }
  });
}
function getStreams(_0x2132d3, _0x54bdd0, _0x355997, _0x33819d) {
  return __async(this, null, function* () {
    try {
      console.log("[" + PROVIDER_NAME + "] Request: ID=" + _0x2132d3 + " Type=" + _0x54bdd0 + " S=" + _0x355997 + " E=" + _0x33819d);
      if (_0x54bdd0 !== "tv" && _0x54bdd0 !== "movie") {
        return [];
      }
      const _0xdc407f = yield getTMDBInfo(_0x2132d3, _0x54bdd0);
      if (!_0xdc407f || !_0xdc407f.title) {
        console.log("[" + PROVIDER_NAME + "] No TMDB data");
        return [];
      }
      console.log("[" + PROVIDER_NAME + "] Resolved: \"" + _0xdc407f.title + "\" (" + (_0xdc407f.year || "N/A") + ")");
      if (_0xdc407f.genres && _0xdc407f.genres.length > 0 && !_0xdc407f.genres.includes(16)) {
        console.log("[" + PROVIDER_NAME + "] Not anime (genres: " + _0xdc407f.genres.join(",") + "), rejecting");
        return [];
      }
      const _0xe095c0 = yield searchAllWish(_0xdc407f.title, _0xdc407f.originalTitle, _0xdc407f.year, _0x355997);
      if (!_0xe095c0 || !_0xe095c0.watchUrl) {
        console.log("[" + PROVIDER_NAME + "] No match on AllWish");
        return [];
      }
      const _0x38038b = yield fetchHtml(_0xe095c0.watchUrl);
      if (!_0x38038b) {
        return [];
      }
      const _0x327624 = _0x38038b("main > div.container").attr("data-id");
      if (!_0x327624) {
        console.log("[" + PROVIDER_NAME + "] No show ID found");
        return [];
      }
      const _0x1d6799 = generateEpisodeVrf(_0x327624);
      const _0x31fa2e = yield fetchJson(MAIN_URL + "/ajax/episode/list/" + _0x327624 + "?vrf=" + encodeURIComponent(_0x1d6799), {
        headers: AJAX_HEADERS
      }, EPISODE_LIST_TIMEOUT);
      if (!_0x31fa2e || _0x31fa2e.status !== 200) {
        console.log("[" + PROVIDER_NAME + "] Episode list failed");
        return [];
      }
      const _0x302b90 = cheerio.load(_0x31fa2e.result || "");
      const _0x2b4615 = _0x33819d != null ? Number(_0x33819d) : null;
      const _0x11a3f0 = chooseEpisode(_0x302b90, _0x355997, _0x2b4615, _0x54bdd0);
      if (!_0x11a3f0) {
        console.log("[" + PROVIDER_NAME + "] Episode not found (looking for ep " + _0x2b4615 + ")");
        return [];
      }
      console.log("[" + PROVIDER_NAME + "] Selected episode slug=" + _0x11a3f0.slug + " ids=" + _0x11a3f0.ids.substring(0, 30) + "...");
      const _0x662c6b = [];
      if (_0x11a3f0.hasSub) {
        _0x662c6b.push("sub");
      }
      if (_0x11a3f0.hasDub) {
        _0x662c6b.push("dub");
      }
      if (_0x662c6b.length === 0) {
        return [];
      }
      const _0x2d95c7 = {
        title: _0xdc407f.title,
        season: _0x355997,
        episode: _0x33819d,
        mediaType: _0x54bdd0
      };
      const _0x33b2e0 = yield resolveServers(_0x11a3f0.ids, _0x662c6b, _0x2d95c7);
      console.log("[" + PROVIDER_NAME + "] Returning " + _0x33b2e0.length + " streams");
      const _0x5a2f28 = {
        "2160p": 5,
        "4k": 5,
        "1080p": 3,
        "720p": 2,
        HD: 1,
        "480p": 1,
        "360p": 0
      };
      return _0x33b2e0.sort((_0x2e9452, _0x2e6559) => (_0x5a2f28[_0x2e6559.quality] || 0) - (_0x5a2f28[_0x2e9452.quality] || 0));
    } catch (_0x4f8310) {
      console.error("[" + PROVIDER_NAME + "] Fatal: " + _0x4f8310.message);
      return [];
    }
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams
  };
} else {
  global.getStreams = getStreams;
}