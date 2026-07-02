var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x59a0ce, _0x203ab7, _0x453c8b) => _0x203ab7 in _0x59a0ce ? __defProp(_0x59a0ce, _0x203ab7, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x453c8b
}) : _0x59a0ce[_0x203ab7] = _0x453c8b;
var __spreadValues = (_0x2f2a38, _0x20f060) => {
  for (var _0x9cae8c in _0x20f060 ||= {}) {
    if (__hasOwnProp.call(_0x20f060, _0x9cae8c)) {
      __defNormalProp(_0x2f2a38, _0x9cae8c, _0x20f060[_0x9cae8c]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x9cae8c of __getOwnPropSymbols(_0x20f060)) {
      if (__propIsEnum.call(_0x20f060, _0x9cae8c)) {
        __defNormalProp(_0x2f2a38, _0x9cae8c, _0x20f060[_0x9cae8c]);
      }
    }
  }
  return _0x2f2a38;
};
var __async = (_0x56f872, _0x34012e, _0x2aad33) => {
  return new Promise((_0x4d738d, _0x2d73c7) => {
    var _0x1d9a9b = _0x3bcbc0 => {
      try {
        _0x3c5ff5(_0x2aad33.next(_0x3bcbc0));
      } catch (_0x569dcc) {
        _0x2d73c7(_0x569dcc);
      }
    };
    var _0x47dbf5 = _0x1ade28 => {
      try {
        _0x3c5ff5(_0x2aad33.throw(_0x1ade28));
      } catch (_0x7be24c) {
        _0x2d73c7(_0x7be24c);
      }
    };
    var _0x3c5ff5 = _0x43e578 => _0x43e578.done ? _0x4d738d(_0x43e578.value) : Promise.resolve(_0x43e578.value).then(_0x1d9a9b, _0x47dbf5);
    _0x3c5ff5((_0x2aad33 = _0x2aad33.apply(_0x56f872, _0x34012e)).next());
  });
};
var KISSKH_BASE = "https://kisskh.nl";
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
  Referer: KISSKH_BASE + "/",
  Accept: "application/json, text/plain, */*"
};
function fetchSafe(_0x2081d0) {
  return __async(this, arguments, function* (_0xb777, _0x450596 = {}) {
    try {
      const _0x733212 = 15000;
      const _0x57125a = typeof AbortSignal !== "undefined" && AbortSignal.timeout ? AbortSignal.timeout(_0x733212) : null;
      let _0x1c4f36 = {
        headers: __spreadValues(__spreadValues({}, HEADERS), _0x450596.headers || {})
      };
      if (_0x57125a) {
        _0x1c4f36.signal = _0x57125a;
      }
      if (typeof fetchText !== "undefined") {
        const _0x3782fc = yield fetchText(_0xb777, _0x1c4f36);
        return _0x3782fc;
      } else {
        const _0x51f075 = yield fetch(_0xb777, _0x1c4f36);
        if (!_0x51f075 || !_0x51f075.ok) {
          return null;
        }
        return yield _0x51f075.text();
      }
    } catch (_0xe05c4) {
      console.log("fetchSafe Error: " + _0xe05c4.message);
      return null;
    }
  });
}
function fetchJsonSafe(_0x2f8a5d) {
  return __async(this, arguments, function* (_0x33a5ba, _0x5cd4e2 = {}) {
    const _0x16c93b = yield fetchSafe(_0x33a5ba, _0x5cd4e2);
    if (!_0x16c93b) {
      return null;
    }
    try {
      return JSON.parse(_0x16c93b);
    } catch (_0x2d1a6d) {
      console.log("fetchJsonSafe Parse Error: " + _0x2d1a6d.message);
      return null;
    }
  });
}
function calculateHash(_0x22b07a) {
  let _0x147792 = 0;
  for (let _0x1b34e8 = 0; _0x1b34e8 < _0x22b07a.length; _0x1b34e8++) {
    _0x147792 = (_0x147792 << 5) - _0x147792 + _0x22b07a.charCodeAt(_0x1b34e8);
  }
  return _0x147792;
}
function wordsToHex(_0x426b29) {
  let _0x59e3bf = "";
  for (let _0x3f7416 = 0; _0x3f7416 < _0x426b29.length; _0x3f7416++) {
    let _0x2896a2 = (_0x426b29[_0x3f7416] >>> 0).toString(16);
    while (_0x2896a2.length < 8) {
      _0x2896a2 = "0" + _0x2896a2;
    }
    _0x59e3bf += _0x2896a2;
  }
  return _0x59e3bf.toUpperCase();
}
function encryptKkeyCustom(_0x59d24b) {
  let _0x4bfa5d = _0x59d24b;
  let _0x854f35 = 16 - _0x59d24b.length % 16;
  for (let _0x2b146c = 0; _0x2b146c < _0x854f35; _0x2b146c++) {
    _0x4bfa5d += String.fromCharCode(_0x854f35);
  }
  let _0x294224 = [];
  for (let _0x48a206 = 0; _0x48a206 < _0x4bfa5d.length; _0x48a206 += 4) {
    _0x294224.push(_0x4bfa5d.charCodeAt(_0x48a206) << 24 | _0x4bfa5d.charCodeAt(_0x48a206 + 1) << 16 | _0x4bfa5d.charCodeAt(_0x48a206 + 2) << 8 | _0x4bfa5d.charCodeAt(_0x48a206 + 3));
  }
  const _0x48f2d5 = [[1332468387, -1641050960, 2136896045, -1629555948, 1399201960, -850809832, -1307058635, 751381793, -1933648423, 1106735553, -203378700, -550927659, 766369351, 1817882502, -1615200142, 1083409063, -104955314, -1780208184, 173944250, 1254993693, 1422337688, -1054667952, -880990486, -2119136777, -1822404972, 1380140484, -1723964626, 412019417, -890799303, -1734066435, 26893779, 420787978, -1337058067, 686432784, 695238595, 811911369, -391724567, -1068702727, -381903814, -648522509, -1266234148, 1959407397, -1644776673, 1152313324]];
  var _0x42c3de = [];
  var _0x545c9f = [];
  var _0x310bd9 = [];
  var _0xc76051 = [];
  var _0x43db5a = [];
  var _0x1d204f = [];
  for (let _0x384500 = 0; _0x384500 < 256; _0x384500++) {
    _0x1d204f[_0x384500] = _0x384500 < 128 ? _0x384500 << 1 : _0x384500 << 1 ^ 283;
  }
  var _0x1543d8 = 0;
  var _0x123d3b = 0;
  for (let _0x4869ad = 0; _0x4869ad < 256; _0x4869ad++) {
    var _0x2e903d = _0x123d3b ^ _0x123d3b << 1 ^ _0x123d3b << 2 ^ _0x123d3b << 3 ^ _0x123d3b << 4;
    _0x2e903d = _0x2e903d >>> 8 ^ _0x2e903d & 255 ^ 99;
    _0x42c3de[_0x1543d8] = _0x2e903d;
    var _0x25c18a = _0x1d204f[_0x1543d8];
    var _0x2c1a96 = _0x1d204f[_0x1d204f[_0x25c18a]];
    var _0x5bccaa = _0x1d204f[_0x2e903d] * 257 ^ _0x2e903d * 16843008;
    _0x545c9f[_0x1543d8] = _0x5bccaa << 24 | _0x5bccaa >>> 8;
    _0x310bd9[_0x1543d8] = _0x5bccaa << 16 | _0x5bccaa >>> 16;
    _0xc76051[_0x1543d8] = _0x5bccaa << 8 | _0x5bccaa >>> 24;
    _0x43db5a[_0x1543d8] = _0x5bccaa;
    if (_0x1543d8) {
      _0x1543d8 = _0x25c18a ^ _0x1d204f[_0x1d204f[_0x1d204f[_0x2c1a96 ^ _0x25c18a]]];
      _0x123d3b ^= _0x1d204f[_0x1d204f[_0x123d3b]];
    } else {
      _0x1543d8 = _0x123d3b = 1;
    }
  }
  _0x48f2d5.push(_0x545c9f);
  _0x48f2d5.push(_0x310bd9);
  _0x48f2d5.push(_0xc76051);
  _0x48f2d5.push(_0x43db5a);
  _0x48f2d5.push(_0x42c3de);
  const [_0x40bdfc, _0x457201, _0x35bf7e, _0x9a9dc, _0x2de4bf, _0x45ae79] = _0x48f2d5;
  const _0x1a2ddc = [22039283, 1457920463, 776125350, -1941999367];
  for (let _0x37f332 = 0; _0x37f332 < _0x294224.length; _0x37f332 += 4) {
    let _0x26e77a = _0x37f332 === 0 ? _0x1a2ddc : _0x294224.slice(_0x37f332 - 4, _0x37f332);
    for (let _0x7f6614 = 0; _0x7f6614 < 4; _0x7f6614++) {
      _0x294224[_0x37f332 + _0x7f6614] ^= _0x26e77a[_0x7f6614];
    }
    let _0x2ccf00 = _0x294224[_0x37f332] ^ _0x40bdfc[0];
    let _0x574a2e = _0x294224[_0x37f332 + 1] ^ _0x40bdfc[1];
    let _0x417cc2 = _0x294224[_0x37f332 + 2] ^ _0x40bdfc[2];
    let _0x295407 = _0x294224[_0x37f332 + 3] ^ _0x40bdfc[3];
    let _0x4ae57d = 4;
    for (let _0xc525f2 = 1; _0xc525f2 < 10; _0xc525f2++) {
      let _0x46a364 = _0x457201[_0x2ccf00 >>> 24] ^ _0x35bf7e[_0x574a2e >>> 16 & 255] ^ _0x9a9dc[_0x417cc2 >>> 8 & 255] ^ _0x2de4bf[_0x295407 & 255] ^ _0x40bdfc[_0x4ae57d++];
      let _0xc7e5c0 = _0x457201[_0x574a2e >>> 24] ^ _0x35bf7e[_0x417cc2 >>> 16 & 255] ^ _0x9a9dc[_0x295407 >>> 8 & 255] ^ _0x2de4bf[_0x2ccf00 & 255] ^ _0x40bdfc[_0x4ae57d++];
      let _0x396cca = _0x457201[_0x417cc2 >>> 24] ^ _0x35bf7e[_0x295407 >>> 16 & 255] ^ _0x9a9dc[_0x2ccf00 >>> 8 & 255] ^ _0x2de4bf[_0x574a2e & 255] ^ _0x40bdfc[_0x4ae57d++];
      _0x295407 = _0x457201[_0x295407 >>> 24] ^ _0x35bf7e[_0x2ccf00 >>> 16 & 255] ^ _0x9a9dc[_0x574a2e >>> 8 & 255] ^ _0x2de4bf[_0x417cc2 & 255] ^ _0x40bdfc[_0x4ae57d++];
      _0x2ccf00 = _0x46a364;
      _0x574a2e = _0xc7e5c0;
      _0x417cc2 = _0x396cca;
    }
    let _0x21d8b1 = (_0x45ae79[_0x2ccf00 >>> 24] << 24 | _0x45ae79[_0x574a2e >>> 16 & 255] << 16 | _0x45ae79[_0x417cc2 >>> 8 & 255] << 8 | _0x45ae79[_0x295407 & 255]) ^ _0x40bdfc[_0x4ae57d++];
    let _0x40ed53 = (_0x45ae79[_0x574a2e >>> 24] << 24 | _0x45ae79[_0x417cc2 >>> 16 & 255] << 16 | _0x45ae79[_0x295407 >>> 8 & 255] << 8 | _0x45ae79[_0x2ccf00 & 255]) ^ _0x40bdfc[_0x4ae57d++];
    let _0x16c28a = (_0x45ae79[_0x417cc2 >>> 24] << 24 | _0x45ae79[_0x295407 >>> 16 & 255] << 16 | _0x45ae79[_0x2ccf00 >>> 8 & 255] << 8 | _0x45ae79[_0x574a2e & 255]) ^ _0x40bdfc[_0x4ae57d++];
    let _0x5bbf43 = (_0x45ae79[_0x295407 >>> 24] << 24 | _0x45ae79[_0x2ccf00 >>> 16 & 255] << 16 | _0x45ae79[_0x574a2e >>> 8 & 255] << 8 | _0x45ae79[_0x417cc2 & 255]) ^ _0x40bdfc[_0x4ae57d++];
    _0x294224[_0x37f332] = _0x21d8b1;
    _0x294224[_0x37f332 + 1] = _0x40ed53;
    _0x294224[_0x37f332 + 2] = _0x16c28a;
    _0x294224[_0x37f332 + 3] = _0x5bbf43;
  }
  return wordsToHex(_0x294224);
}
function generateKkey(_0x35d192, _0x3279a3 = false) {
  const _0x1dedd1 = "2.8.10";
  const _0x39ad75 = "4830201";
  const _0x1b6079 = "kisskh";
  const _0x1a52de = "62f176f3bb1b5b8e70e39932ad34a0c7";
  const _0x5d9822 = "VgV52sWhwvBSf8BsM3BRY9weWiiCbtGp";
  let _0x2ee56a = ["", _0x35d192.toString(), "", "mg3c3b04ba", _0x1dedd1, _0x3279a3 ? _0x5d9822 : _0x1a52de, _0x39ad75, _0x1b6079, _0x1b6079, _0x1b6079, _0x1b6079, _0x1b6079, _0x1b6079, "00", ""];
  const _0x535119 = _0x2ee56a.join("|");
  const _0x506ffe = calculateHash(_0x535119);
  _0x2ee56a.splice(1, 0, _0x506ffe.toString());
  const _0x3e8915 = _0x2ee56a.join("|");
  return encryptKkeyCustom(_0x3e8915);
}
var TVDB_API_KEY = "777140fb-de92-440a-aec2-95eb51e2d7ab";
var _tvdbToken = null;
function getTvdbToken() {
  return __async(this, null, function* () {
    if (_tvdbToken) {
      return _tvdbToken;
    }
    try {
      var _0x188f48 = yield fetch("https://api4.thetvdb.com/v4/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          apikey: TVDB_API_KEY
        })
      });
      if (_0x188f48.ok) {
        var _0x5c03da = yield _0x188f48.json();
        if (_0x5c03da && _0x5c03da.data && _0x5c03da.data.token) {
          _tvdbToken = _0x5c03da.data.token;
        }
      }
    } catch (_0x471c75) {}
    return _tvdbToken;
  });
}
function getAbsoluteEpisode(_0x376a58, _0x27fbee, _0x360155, _0x345b65, _0x56116e) {
  return __async(this, null, function* () {
    if (_0x27fbee === "movie") {
      return 1;
    }
    let _0x206360 = _0x345b65;
    let _0x39d892 = null;
    let _0x15c5bc = null;
    try {
      const _0x148db5 = yield fetchJsonSafe("https://api.themoviedb.org/3/tv/" + _0x376a58 + "/external_ids?api_key=1865f43a0549ca50d341dd9ab8b29f49");
      if (_0x148db5) {
        _0x39d892 = _0x148db5.imdb_id;
        _0x15c5bc = _0x148db5.tvdb_id;
      }
    } catch (_0x5547f8) {}
    if (!_0x15c5bc && _0x56116e) {
      try {
        console.log("[KissKH] Searching TVDB for series: " + _0x56116e);
        const _0x3bf16b = yield getTvdbToken();
        if (_0x3bf16b) {
          const _0x1769ed = yield fetchJsonSafe("https://api4.thetvdb.com/v4/search?query=" + encodeURIComponent(_0x56116e), {
            headers: {
              Authorization: "Bearer " + _0x3bf16b
            }
          });
          if (_0x1769ed && _0x1769ed.data) {
            const _0xbabbde = _0x1769ed.data.find(_0x40f3f5 => _0x40f3f5.type === "series");
            if (_0xbabbde) {
              const _0x52834d = _0xbabbde.id || _0xbabbde.tvdb_id;
              if (_0x52834d) {
                _0x15c5bc = parseInt(String(_0x52834d).replace(/^series-/, ""), 10);
                console.log("[KissKH] Resolved TVDB ID " + _0x15c5bc + " from search");
              }
            }
          }
        }
      } catch (_0x3853eb) {}
    }
    if (_0x15c5bc) {
      try {
        console.log("[KissKH] Attempting TVDB Math for TVDB: " + _0x15c5bc);
        const _0x190272 = yield getTvdbToken();
        if (_0x190272) {
          const _0xb78462 = yield fetchJsonSafe("https://api4.thetvdb.com/v4/series/" + _0x15c5bc + "/episodes/default?season=" + _0x360155, {
            headers: {
              Authorization: "Bearer " + _0x190272
            }
          });
          if (_0xb78462 && _0xb78462.data && _0xb78462.data.episodes) {
            const _0x5bcb12 = _0xb78462.data.episodes.find(_0x2ff451 => _0x2ff451.seasonNumber == _0x360155 && _0x2ff451.number == _0x345b65);
            if (_0x5bcb12 && _0x5bcb12.absoluteNumber) {
              console.log("[KissKH] TVDB Math calculated absolute episode: " + _0x5bcb12.absoluteNumber);
              return _0x5bcb12.absoluteNumber;
            }
          }
        }
      } catch (_0x6c50dd) {}
    }
    if (_0x39d892) {
      try {
        console.log("[KissKH] Attempting Regex Math for IMDB: " + _0x39d892);
        const _0x37013b = "https://aiometadata.elfhosted.com/stremio/80d082c4-6e99-4c97-a67d-3d9e242685ce/meta/series/" + _0x39d892 + ".json";
        const _0x3615bf = yield fetch(_0x37013b);
        if (_0x3615bf.ok) {
          const _0xcdf8ab = yield _0x3615bf.text();
          let _0x35090b = 0;
          let _0x3d3a0e = false;
          const _0x541759 = /"season"\s*:\s*(\d+)/g;
          let _0x358dca;
          while ((_0x358dca = _0x541759.exec(_0xcdf8ab)) !== null) {
            _0x3d3a0e = true;
            const _0x95c870 = parseInt(_0x358dca[1]);
            if (_0x95c870 > 0 && _0x95c870 < _0x360155) {
              _0x35090b++;
            }
          }
          if (_0x3d3a0e) {
            let _0x512949 = _0x35090b + _0x345b65;
            console.log("[KissKH] Regex Math calculated absolute episode: " + _0x512949);
            return _0x512949;
          }
        }
      } catch (_0x3dec97) {}
    }
    try {
      console.log("[KissKH] Cinemeta/TVDB failed. Falling back to TMDB math...");
      const _0x3a11b9 = "https://api.themoviedb.org/3/tv/" + _0x376a58 + "?api_key=1865f43a0549ca50d341dd9ab8b29f49";
      const _0x1da017 = yield fetchJsonSafe(_0x3a11b9, {});
      if (_0x1da017 && _0x1da017.seasons) {
        let _0x22faea = 0;
        const _0x102c12 = _0x1da017.seasons.filter(_0x2b0773 => _0x2b0773.season_number > 0 && _0x2b0773.season_number < _0x360155);
        for (let _0x28b8eb of _0x102c12) {
          _0x22faea += _0x28b8eb.episode_count;
        }
        _0x22faea += _0x345b65;
        console.log("[KissKH] TMDB Calculated absolute episode: " + _0x22faea);
        return _0x22faea;
      }
    } catch (_0x234b8b) {}
    return _0x206360;
  });
}
function getStreams(_0x3411f4, _0x52e66b, _0x436708, _0x45c632) {
  return __async(this, null, function* () {
    let _0x5ec7ea = [];
    console.log("KissKH getStreams called: " + _0x3411f4 + " " + _0x52e66b);
    const _0x84538d = "https://api.themoviedb.org/3/" + _0x52e66b + "/" + _0x3411f4 + "?api_key=1865f43a0549ca50d341dd9ab8b29f49";
    console.log("Fetching TMDB: " + _0x84538d);
    const _0x25cc21 = yield fetchJsonSafe(_0x84538d);
    if (!_0x25cc21) {
      console.log("TMDB fetch failed or returned null!");
      return [];
    }
    const _0x2f429c = _0x25cc21.title || _0x25cc21.name || _0x25cc21.original_title || _0x25cc21.original_name;
    const _0x51e879 = _0x2f429c.split(":")[0].split("-")[0].trim();
    console.log("TMDB Base Title: " + _0x51e879);
    let _0x49e7a6 = "";
    if (_0x25cc21.release_date) {
      _0x49e7a6 = _0x25cc21.release_date.split("-")[0];
    } else if (_0x25cc21.first_air_date) {
      _0x49e7a6 = _0x25cc21.first_air_date.split("-")[0];
    }
    let _0x130d21 = KISSKH_BASE + "/api/DramaList/Search?q=" + encodeURIComponent(_0x2f429c) + "&type=0";
    let _0x10b507 = yield fetchJsonSafe(_0x130d21);
    if (!_0x10b507 || !Array.isArray(_0x10b507) || _0x10b507.length === 0) {
      _0x130d21 = KISSKH_BASE + "/api/DramaList/Search?q=" + encodeURIComponent(_0x51e879) + "&type=0";
      _0x10b507 = yield fetchJsonSafe(_0x130d21);
    }
    if (!_0x10b507 || !Array.isArray(_0x10b507) || _0x10b507.length === 0) {
      return [];
    }
    let _0x434356 = null;
    let _0x3a948e = null;
    let _0x1ab80b = null;
    let _0x3b0abe = null;
    const _0x1a6516 = _0x52e66b === "tv" || _0x52e66b === "series";
    for (let _0x2dcdc3 = 0; _0x2dcdc3 < _0x10b507.length; _0x2dcdc3++) {
      let _0xad4610 = _0x10b507[_0x2dcdc3];
      let _0x157f10 = (_0xad4610.title || "").toLowerCase();
      let _0x2c0fd2 = _0x2f429c.toLowerCase();
      let _0x19c755 = _0x51e879.toLowerCase();
      let _0x46a5e1 = true;
      if (_0x49e7a6) {
        let _0x5a8e1f = _0x157f10.match(/\((20\d\d|19\d\d)\)/);
        if (_0x5a8e1f) {
          if (Math.abs(parseInt(_0x5a8e1f[1]) - parseInt(_0x49e7a6)) > 1) {
            _0x46a5e1 = false;
          }
        }
      }
      if (!_0x46a5e1) {
        continue;
      }
      if (_0x1a6516 && _0x436708) {
        let _0x4657f3 = "season " + _0x436708;
        let _0x29bd11 = "part " + _0x436708;
        let _0x20b753 = _0x2c0fd2 + " " + _0x436708;
        let _0x25e8c0 = _0x2c0fd2 + " " + _0x4657f3;
        let _0x575036 = _0x2c0fd2 + " - " + _0x4657f3;
        let _0x29aff7 = _0x2c0fd2 + ": " + _0x4657f3;
        if (_0x157f10 === _0x20b753 || _0x157f10 === _0x25e8c0 || _0x157f10 === _0x575036 || _0x157f10 === _0x29aff7) {
          _0x434356 = _0xad4610;
          break;
        }
        if ((_0x157f10.includes(_0x4657f3) || _0x157f10.includes(_0x29bd11)) && (_0x157f10.includes(_0x2c0fd2) || _0x157f10.includes(_0x19c755))) {
          if (!_0x1ab80b) {
            _0x1ab80b = _0xad4610;
          }
        }
      }
      if (_0x157f10 === _0x2c0fd2 || _0x157f10 === _0x19c755 || _0x157f10 === _0x2c0fd2 + " (" + _0x49e7a6 + ")") {
        _0x3a948e = _0xad4610;
      } else if (_0x157f10.includes(_0x2c0fd2) || _0x157f10.includes(_0x19c755)) {
        if (!_0x3b0abe) {
          _0x3b0abe = _0xad4610;
        }
      }
    }
    let _0x5d6ae9 = _0x434356 || _0x3a948e || _0x1ab80b || _0x3b0abe;
    if (!_0x5d6ae9 || !_0x5d6ae9.id) {
      return [];
    }
    const _0x4a3f73 = _0x5d6ae9.id;
    const _0x3c4cbb = KISSKH_BASE + "/api/DramaList/Drama/" + _0x4a3f73 + "?isq=false";
    const _0x3c374d = yield fetchJsonSafe(_0x3c4cbb);
    if (!_0x3c374d || !_0x3c374d.episodes || _0x3c374d.episodes.length === 0) {
      return [];
    }
    let _0x1e8ba7 = null;
    let _0x5f5971 = parseInt(_0x45c632);
    if (_0x1a6516 && _0x436708 && parseInt(_0x436708) > 1 && _0x5d6ae9 === _0x3a948e) {
      try {
        _0x5f5971 = yield getAbsoluteEpisode(_0x3411f4, _0x52e66b, parseInt(_0x436708), parseInt(_0x45c632), _0x2f429c);
      } catch (_0x1a2423) {
        console.log("[KissKH] getAbsoluteEpisode failed", _0x1a2423);
      }
    }
    if (_0x1a6516 && _0x45c632) {
      _0x1e8ba7 = _0x3c374d.episodes.find(_0x3f137a => Math.round(_0x3f137a.number || 0) === _0x5f5971);
    } else {
      _0x1e8ba7 = _0x3c374d.episodes[0];
    }
    if (!_0x1e8ba7 || !_0x1e8ba7.id) {
      return [];
    }
    const _0x1910e9 = _0x1e8ba7.id.toString();
    const _0x5d0fff = generateKkey(_0x1910e9, false);
    const _0x4e626a = generateKkey(_0x1910e9, true);
    const _0x3d5ad2 = KISSKH_BASE + "/api/DramaList/Episode/" + _0x1910e9 + ".png?err=false&ts=&time=&kkey=" + _0x5d0fff;
    const _0xb7076a = yield fetchJsonSafe(_0x3d5ad2);
    if (_0xb7076a) {
      console.log("[KissKH] Extracted EpData for ID " + _0x1910e9 + ": " + JSON.stringify(_0xb7076a));
      const _0x33ce47 = _0xb7076a.Video || _0xb7076a.ThirdParty;
      console.log("[KissKH] Selected Video URL: " + _0x33ce47);
      if (_0x33ce47) {
        const _0x45143c = _0x33ce47.indexOf(".m3u8") !== -1;
        let _0x1e65ab = {
          name: "KissKH - Ep " + Math.round(_0x1e8ba7.number || 0),
          title: "Auto",
          size: _0x5d6ae9.title,
          url: _0x33ce47,
          quality: "HD"
        };
        const _0x42432c = {
          "User-Agent": HEADERS["User-Agent"],
          Referer: KISSKH_BASE + "/",
          Origin: KISSKH_BASE
        };
        if (_0x45143c) {
          _0x1e65ab.headers = _0x42432c;
        } else {
          _0x1e65ab.behaviorHints = {
            proxyHeaders: {
              request: _0x42432c
            }
          };
        }
        _0x5ec7ea.push(_0x1e65ab);
      }
    }
    let _0x1ab0ea = [];
    const _0x1dd961 = KISSKH_BASE + "/api/Sub/" + _0x1910e9 + "?kkey=" + _0x4e626a;
    const _0x50ba98 = yield fetchJsonSafe(_0x1dd961);
    if (_0x50ba98 && Array.isArray(_0x50ba98)) {
      for (const _0x3c5da3 of _0x50ba98) {
        if (_0x3c5da3.src && _0x3c5da3.land) {
          _0x1ab0ea.push({
            url: _0x3c5da3.src,
            language: _0x3c5da3.land
          });
        }
      }
    }
    if (_0x5ec7ea.length > 0 && _0x1ab0ea.length > 0) {
      _0x5ec7ea[0].subtitles = _0x1ab0ea;
    }
    return _0x5ec7ea;
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams
  };
} else {
  global.getStreams = getStreams;
}