var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x2272e3, _0xab69db, _0x2d1cea) => _0xab69db in _0x2272e3 ? __defProp(_0x2272e3, _0xab69db, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x2d1cea
}) : _0x2272e3[_0xab69db] = _0x2d1cea;
var __spreadValues = (_0x4bc988, _0x51d5a0) => {
  for (var _0x121b6c in _0x51d5a0 ||= {}) {
    if (__hasOwnProp.call(_0x51d5a0, _0x121b6c)) {
      __defNormalProp(_0x4bc988, _0x121b6c, _0x51d5a0[_0x121b6c]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x121b6c of __getOwnPropSymbols(_0x51d5a0)) {
      if (__propIsEnum.call(_0x51d5a0, _0x121b6c)) {
        __defNormalProp(_0x4bc988, _0x121b6c, _0x51d5a0[_0x121b6c]);
      }
    }
  }
  return _0x4bc988;
};
var __spreadProps = (_0x2408c2, _0x231be8) => __defProps(_0x2408c2, __getOwnPropDescs(_0x231be8));
var __copyProps = (_0x49facb, _0x5a8e9a, _0x4cb84b, _0x5de8ad) => {
  if (_0x5a8e9a && typeof _0x5a8e9a === "object" || typeof _0x5a8e9a === "function") {
    for (let _0x549c2a of __getOwnPropNames(_0x5a8e9a)) {
      if (!__hasOwnProp.call(_0x49facb, _0x549c2a) && _0x549c2a !== _0x4cb84b) {
        __defProp(_0x49facb, _0x549c2a, {
          get: () => _0x5a8e9a[_0x549c2a],
          enumerable: !(_0x5de8ad = __getOwnPropDesc(_0x5a8e9a, _0x549c2a)) || _0x5de8ad.enumerable
        });
      }
    }
  }
  return _0x49facb;
};
var __toESM = (_0x2bf915, _0x453623, _0x3b6817) => {
  _0x3b6817 = _0x2bf915 != null ? __create(__getProtoOf(_0x2bf915)) : {};
  return __copyProps(_0x453623 || !_0x2bf915 || !_0x2bf915.__esModule ? __defProp(_0x3b6817, "default", {
    value: _0x2bf915,
    enumerable: true
  }) : _0x3b6817, _0x2bf915);
};
var __async = (_0x3be590, _0x2163a4, _0x206f1d) => {
  return new Promise((_0x21fad8, _0x177450) => {
    var _0x59b2f7 = _0x39c5f8 => {
      try {
        _0x24c22d(_0x206f1d.next(_0x39c5f8));
      } catch (_0x2e2a51) {
        _0x177450(_0x2e2a51);
      }
    };
    var _0x1c9322 = _0x47bf87 => {
      try {
        _0x24c22d(_0x206f1d.throw(_0x47bf87));
      } catch (_0x2c4275) {
        _0x177450(_0x2c4275);
      }
    };
    var _0x24c22d = _0x1b6dbd => _0x1b6dbd.done ? _0x21fad8(_0x1b6dbd.value) : Promise.resolve(_0x1b6dbd.value).then(_0x59b2f7, _0x1c9322);
    _0x24c22d((_0x206f1d = _0x206f1d.apply(_0x3be590, _0x2163a4)).next());
  });
};
var import_cheerio_without_node_native = __toESM(require("cheerio-without-node-native"));
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var TMDB_BASE_URL = "https://api.themoviedb.org/3";
var MAIN_URL = "https://allmovieland.you";
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.5"
};
function getTMDBDetails(_0x2aebb6, _0x12d1ab) {
  return __async(this, null, function* () {
    var _0x4b6787;
    const _0x88c99f = _0x12d1ab === "tv" ? "tv" : "movie";
    const _0x36c80f = TMDB_BASE_URL + "/" + _0x88c99f + "/" + _0x2aebb6 + "?api_key=" + TMDB_API_KEY + "&append_to_response=external_ids";
    const _0x3f44a0 = yield fetch(_0x36c80f, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0"
      }
    });
    if (!_0x3f44a0.ok) {
      throw new Error("TMDB API error: " + _0x3f44a0.status);
    }
    const _0x1c16a5 = yield _0x3f44a0.json();
    const _0x4fe47f = _0x12d1ab === "tv" ? _0x1c16a5.name : _0x1c16a5.title;
    const _0x4b9608 = _0x12d1ab === "tv" ? _0x1c16a5.first_air_date : _0x1c16a5.release_date;
    const _0x5d5561 = _0x4b9608 ? parseInt(_0x4b9608.split("-")[0]) : null;
    return {
      title: _0x4fe47f,
      year: _0x5d5561,
      imdbId: ((_0x4b6787 = _0x1c16a5.external_ids) == null ? undefined : _0x4b6787.imdb_id) || null,
      data: _0x1c16a5
    };
  });
}
function normalizeTitle(_0x40dc60) {
  if (!_0x40dc60) {
    return "";
  }
  return _0x40dc60.toLowerCase().replace(/\b(the|a|an)\b/g, "").replace(/[:\-_]/g, " ").replace(/\s+/g, " ").replace(/[^\w\s]/g, "").trim();
}
function calculateTitleSimilarity(_0x2700af, _0x2844df) {
  const _0x2754bb = normalizeTitle(_0x2700af);
  const _0x2228a7 = normalizeTitle(_0x2844df);
  if (_0x2754bb === _0x2228a7) {
    return 1;
  }
  const _0x316f42 = _0x2754bb.split(/\s+/).filter(_0x52a881 => _0x52a881.length > 0);
  const _0x2b902d = _0x2228a7.split(/\s+/).filter(_0x5f008e => _0x5f008e.length > 0);
  if (_0x316f42.length === 0 || _0x2b902d.length === 0) {
    return 0;
  }
  const _0x1fcca6 = new Set(_0x316f42);
  const _0x2f4a0d = new Set(_0x2b902d);
  const _0x3912f4 = _0x316f42.filter(_0x338654 => _0x2f4a0d.has(_0x338654));
  const _0x3232a5 = new Set([..._0x316f42, ..._0x2b902d]);
  const _0x12e40d = _0x3912f4.length / _0x3232a5.size;
  const _0x114b72 = _0x2b902d.filter(_0x12bdf3 => !_0x1fcca6.has(_0x12bdf3)).length;
  let _0x1153bc = _0x12e40d - _0x114b72 * 0.05;
  if (_0x316f42.length > 0 && _0x316f42.every(_0x451666 => _0x2f4a0d.has(_0x451666))) {
    _0x1153bc += 0.2;
  }
  return _0x1153bc;
}
function findBestTitleMatch(_0x1a9474, _0x45cfa2) {
  if (!_0x45cfa2 || _0x45cfa2.length === 0) {
    return null;
  }
  let _0x506ece = null;
  let _0xddfc75 = 0;
  for (const _0x3f31e9 of _0x45cfa2) {
    let _0x5f02cd = calculateTitleSimilarity(_0x1a9474.title, _0x3f31e9.title);
    if (_0x1a9474.year && _0x3f31e9.year) {
      const _0x255d12 = Math.abs(_0x1a9474.year - _0x3f31e9.year);
      if (_0x255d12 === 0) {
        _0x5f02cd += 0.2;
      } else if (_0x255d12 <= 1) {
        _0x5f02cd += 0.1;
      } else if (_0x255d12 > 5) {
        _0x5f02cd -= 0.3;
      }
    }
    if (_0x5f02cd > _0xddfc75 && _0x5f02cd > 0.3) {
      _0xddfc75 = _0x5f02cd;
      _0x506ece = _0x3f31e9;
    }
  }
  return _0x506ece;
}
function getStreams(_0x557378, _0x5e7559 = "movie", _0x2c24f0 = null, _0xa15d0c = null) {
  return __async(this, null, function* () {
    console.log("[AllMovieLand] Fetching streams for TMDB ID: " + _0x557378 + ", Type: " + _0x5e7559);
    try {
      const _0x4120bf = yield getTMDBDetails(_0x557378, _0x5e7559);
      console.log("[AllMovieLand] TMDB Info: \"" + _0x4120bf.title + "\" (" + (_0x4120bf.year || "N/A") + ")");
      const _0x17e515 = _0x4120bf.title;
      const _0x4e358c = MAIN_URL + "/index.php?story=" + encodeURIComponent(_0x17e515) + "&do=search&subaction=search";
      const _0x59312e = yield fetch(_0x4e358c, {
        headers: HEADERS
      });
      const _0x3908e7 = yield _0x59312e.text();
      const _0x54f259 = import_cheerio_without_node_native.default.load(_0x3908e7);
      const _0x186d64 = [];
      _0x54f259("article.short-mid").each((_0x3e65f7, _0xc5f9f2) => {
        const _0x3c7620 = _0x54f259(_0xc5f9f2).find("a > h3").text().trim();
        const _0x256940 = _0x54f259(_0xc5f9f2).find("a").attr("href");
        const _0x5e0f21 = _0x3c7620.match(new RegExp("(?<=\\()[\\d(\\]]+(?=\\))"));
        const _0x4e2544 = _0x5e0f21 ? parseInt(_0x5e0f21[0]) : null;
        _0x186d64.push({
          title: _0x3c7620,
          href: _0x256940,
          year: _0x4e2544
        });
      });
      if (_0x186d64.length === 0) {
        console.log("[AllMovieLand] No search results found.");
        return [];
      }
      const _0x3bb101 = findBestTitleMatch(_0x4120bf, _0x186d64);
      const _0x34e089 = _0x3bb101 || _0x186d64[0];
      console.log("[AllMovieLand] Selected: \"" + _0x34e089.title + "\" (" + _0x34e089.href + ")");
      const _0x450560 = yield fetch(_0x34e089.href, {
        headers: HEADERS
      });
      const _0x36ade9 = yield _0x450560.text();
      const _0x16773f = import_cheerio_without_node_native.default.load(_0x36ade9);
      const _0x1eb60e = _0x16773f("div.tabs__content script").html() || "";
      const _0x17503d = _0x1eb60e.match(/const AwsIndStreamDomain\s*=\s*'([^']+)'/);
      const _0x3058d2 = _0x17503d ? _0x17503d[1].replace(/\/$/, "") : null;
      const _0x78315c = _0x1eb60e.match(/src:\s*'([^']+)'/);
      const _0x5c2c01 = _0x78315c ? _0x78315c[1] : null;
      if (!_0x3058d2 || !_0x5c2c01) {
        console.log("[AllMovieLand] Could not find player domain or ID.");
        return [];
      }
      const _0x57c41d = _0x3058d2 + "/play/" + _0x5c2c01;
      const _0x3d0b4b = yield fetch(_0x57c41d, {
        headers: __spreadProps(__spreadValues({}, HEADERS), {
          Referer: _0x34e089.href
        })
      });
      const _0x439dc4 = yield _0x3d0b4b.text();
      const _0x3004ae = import_cheerio_without_node_native.default.load(_0x439dc4);
      const _0x56742f = _0x3004ae("body > script").last().html() || "";
      const _0x539e26 = _0x56742f.match(/let\s+p3\s*=\s*(\{.*\});/);
      if (!_0x539e26) {
        console.log("[AllMovieLand] No p3 JSON found in embed.");
        return [];
      }
      const _0x351c54 = JSON.parse(_0x539e26[1]);
      let _0x3b59e0 = _0x351c54.file.replace(/\\\//g, "/");
      if (!_0x3b59e0.startsWith("http")) {
        _0x3b59e0 = "" + _0x3058d2 + _0x3b59e0;
      }
      const _0x3ad049 = yield fetch(_0x3b59e0, {
        method: "POST",
        headers: __spreadProps(__spreadValues({}, HEADERS), {
          "X-CSRF-TOKEN": _0x351c54.key,
          Referer: _0x57c41d
        })
      });
      const _0x48b3a6 = yield _0x3ad049.text();
      let _0x267f03 = [];
      const _0x20ddc1 = JSON.parse(_0x48b3a6.replace(/,\]/g, "]"));
      if (_0x5e7559 === "movie") {
        _0x267f03 = _0x20ddc1.filter(_0x21c86c => _0x21c86c && _0x21c86c.file);
      } else if (_0x5e7559 === "tv") {
        const _0x2332d6 = _0x20ddc1.find(_0x4e06e5 => _0x4e06e5.id == _0x2c24f0);
        if (_0x2332d6 && _0x2332d6.folder) {
          const _0x445e05 = _0x2332d6.folder.find(_0x18558c => _0x18558c.episode == _0xa15d0c);
          if (_0x445e05 && _0x445e05.folder) {
            _0x267f03 = _0x445e05.folder.filter(_0x714d85 => _0x714d85 && _0x714d85.file);
          }
        }
      }
      if (_0x267f03.length === 0) {
        console.log("[AllMovieLand] No streams found for the requested media.");
        return [];
      }
      const _0x4742a2 = [];
      yield Promise.all(_0x267f03.map(_0x4cac34 => __async(this, null, function* () {
        try {
          const _0x18efde = _0x4cac34.file.replace(/^~/, "");
          const _0x2e0e93 = _0x3058d2 + "/playlist/" + _0x18efde + ".txt";
          const _0x3d19f2 = yield fetch(_0x2e0e93, {
            method: "POST",
            headers: __spreadProps(__spreadValues({}, HEADERS), {
              "X-CSRF-TOKEN": _0x351c54.key,
              Referer: _0x57c41d
            })
          });
          const _0x171484 = (yield _0x3d19f2.text()).trim();
          if (_0x171484 && _0x171484.startsWith("http")) {
            const _0x5a4747 = _0x4cac34.title || "Unknown";
            _0x4742a2.push({
              name: "AllMovieLand",
              title: "AllMovieLand - " + _0x5a4747,
              url: _0x171484,
              quality: _0x5a4747,
              headers: {
                Referer: _0x3058d2 + "/",
                Origin: _0x3058d2,
                "User-Agent": HEADERS["User-Agent"]
              },
              provider: "allmovieland"
            });
          }
        } catch (_0x21d4de) {
          console.error("[AllMovieLand] Failed to extract stream: " + _0x21d4de.message);
        }
      })));
      return _0x4742a2;
    } catch (_0x2c0cf5) {
      console.error("[AllMovieLand] Error: " + _0x2c0cf5.message);
      return [];
    }
  });
}
module.exports = {
  getStreams: getStreams
};