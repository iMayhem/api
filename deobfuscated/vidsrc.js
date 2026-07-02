var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (_0x5dd49f, _0x9cabc) => {
  var _0x432206 = {};
  for (var _0x2d6569 in _0x5dd49f) {
    if (__hasOwnProp.call(_0x5dd49f, _0x2d6569) && _0x9cabc.indexOf(_0x2d6569) < 0) {
      _0x432206[_0x2d6569] = _0x5dd49f[_0x2d6569];
    }
  }
  if (_0x5dd49f != null && __getOwnPropSymbols) {
    for (var _0x2d6569 of __getOwnPropSymbols(_0x5dd49f)) {
      if (_0x9cabc.indexOf(_0x2d6569) < 0 && __propIsEnum.call(_0x5dd49f, _0x2d6569)) {
        _0x432206[_0x2d6569] = _0x5dd49f[_0x2d6569];
      }
    }
  }
  return _0x432206;
};
var __async = (_0x55c530, _0x1d87b9, _0x14b625) => {
  return new Promise((_0x3e89e3, _0x3ff767) => {
    var _0x3c940c = _0x492a94 => {
      try {
        _0x2a6151(_0x14b625.next(_0x492a94));
      } catch (_0x4e16dd) {
        _0x3ff767(_0x4e16dd);
      }
    };
    var _0x4660de = _0x2d8b03 => {
      try {
        _0x2a6151(_0x14b625.throw(_0x2d8b03));
      } catch (_0x2aa76b) {
        _0x3ff767(_0x2aa76b);
      }
    };
    var _0x2a6151 = _0x40cde5 => _0x40cde5.done ? _0x3e89e3(_0x40cde5.value) : Promise.resolve(_0x40cde5.value).then(_0x3c940c, _0x4660de);
    _0x2a6151((_0x14b625 = _0x14b625.apply(_0x55c530, _0x1d87b9)).next());
  });
};
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var TMDB_BASE = "https://api.themoviedb.org/3";
var PROVIDER_ID = "VidSrc";
function safeFetch(_0x5483ff) {
  return __async(this, arguments, function* (_0x53d3c8, _0x492712 = {}) {
    if (typeof fetchv2 === "function") {
      const _0x149f28 = _0x492712.headers || {};
      const _0x3909dc = _0x492712.method || "GET";
      const _0x5a6aa1 = _0x492712.body || null;
      try {
        return yield fetchv2(_0x53d3c8, _0x149f28, _0x3909dc, _0x5a6aa1, true, _0x492712.encoding || "utf-8");
      } catch (_0x26fe13) {}
    }
    return fetch(_0x53d3c8, _0x492712);
  });
}
function inferQualityScore(_0x33f3c3) {
  const _0x20845e = String(_0x33f3c3 || "").toLowerCase();
  if (_0x20845e.includes("2160") || _0x20845e.includes("4k")) {
    return 2160;
  }
  if (_0x20845e.includes("1440")) {
    return 1440;
  }
  if (_0x20845e.includes("1080")) {
    return 1080;
  }
  if (_0x20845e.includes("720")) {
    return 720;
  }
  if (_0x20845e.includes("480")) {
    return 480;
  }
  if (_0x20845e.includes("360")) {
    return 360;
  }
  return 0;
}
function toQualityLabel(_0x2919b9) {
  if (_0x2919b9 >= 2160) {
    return "2160p";
  }
  if (_0x2919b9 >= 1440) {
    return "1440p";
  }
  if (_0x2919b9 >= 1080) {
    return "1080p";
  }
  return "Auto";
}
function maxResolutionFromM3u8Text(_0xde4090) {
  const _0x56b423 = String(_0xde4090 || "");
  let _0x5cc318 = 0;
  const _0x43faea = /RESOLUTION=\s*\d+\s*x\s*(\d+)/gi;
  let _0x2325db;
  while ((_0x2325db = _0x43faea.exec(_0x56b423)) !== null) {
    const _0x13dcee = Number(_0x2325db[1]);
    if (Number.isFinite(_0x13dcee) && _0x13dcee > _0x5cc318) {
      _0x5cc318 = _0x13dcee;
    }
  }
  return _0x5cc318;
}
function detectPlaylistMaxQuality(_0xe41822, _0x4846be) {
  return __async(this, null, function* () {
    try {
      const _0x2a6f23 = yield safeFetch(_0xe41822, {
        headers: _0x4846be || {}
      });
      const _0x1a8a09 = _0x2a6f23 && _0x2a6f23.ok ? yield _0x2a6f23.text() : "";
      return maxResolutionFromM3u8Text(_0x1a8a09);
    } catch (_0x152921) {
      return 0;
    }
  });
}
function tmdbFetch(_0x2efa3f) {
  return safeFetch("" + TMDB_BASE + _0x2efa3f + "?api_key=" + TMDB_API_KEY).then(_0x2a4108 => _0x2a4108 && _0x2a4108.ok ? _0x2a4108.json() : null).catch(() => null);
}
function getImdbId(_0x4404ff, _0x244ed2) {
  return __async(this, null, function* () {
    const _0x56d050 = _0x244ed2 === "tv" ? "tv" : "movie";
    if (_0x56d050 === "movie") {
      const _0x2f1f91 = yield tmdbFetch("/movie/" + _0x4404ff);
      if (_0x2f1f91 && _0x2f1f91.imdb_id) {
        return _0x2f1f91.imdb_id;
      } else {
        return null;
      }
    }
    const _0x4f2158 = yield tmdbFetch("/tv/" + _0x4404ff);
    if (!_0x4f2158) {
      return null;
    }
    const _0x2dd2d8 = yield tmdbFetch("/tv/" + _0x4404ff + "/external_ids");
    if (_0x2dd2d8 && _0x2dd2d8.imdb_id) {
      return _0x2dd2d8.imdb_id;
    } else {
      return null;
    }
  });
}
function resolveCloudnestraStreams(_0x23ecaf, _0x367a4f, _0x3ce6db, _0x265dab) {
  return __async(this, null, function* () {
    const _0x240bbd = {
      Referer: "https://cloudorchestranova.com/",
      Origin: "https://cloudorchestranova.com",
      "User-Agent": "Mozilla/5.0"
    };
    const _0x56a7f8 = _0x367a4f === "tv" ? "https://vsembed.su/embed/tv?imdb=" + encodeURIComponent(_0x23ecaf) + "&season=" + Number(_0x3ce6db || 1) + "&episode=" + Number(_0x265dab || 1) : "https://vsembed.su/embed/" + encodeURIComponent(_0x23ecaf);
    const _0xd6c448 = yield safeFetch(_0x56a7f8, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });
    const _0x1d8ba5 = _0xd6c448 && _0xd6c448.ok ? yield _0xd6c448.text() : "";
    const _0x246c8c = (_0x1d8ba5.match(/<iframe[^>]+src=["']([^"']+)["']/) || [])[1];
    if (!_0x246c8c) {
      return [];
    }
    const _0x47aec7 = yield safeFetch("https:" + _0x246c8c, {
      headers: {
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:145.0) Gecko/20100101 Firefox/145.0",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.5",
        referer: "https://vsrc.su/",
        "upgrade-insecure-requests": "1"
      }
    });
    const _0x2f1fc0 = _0x47aec7 && _0x47aec7.ok ? yield _0x47aec7.text() : "";
    const _0x1f876a = (_0x2f1fc0.match(/src:\s*["']([^"']+)["']/) || [])[1];
    if (!_0x1f876a) {
      return [];
    }
    const _0x32bbab = yield safeFetch("https://cloudnestra.com" + _0x1f876a, {
      headers: {
        referer: "https://cloudnestra.com/"
      }
    });
    const _0x574a4e = _0x32bbab && _0x32bbab.ok ? yield _0x32bbab.text() : "";
    const _0x3eaf27 = _0x574a4e.match(/<div id="([^"]+)"[^>]*style=["']display\s*:\s*none;?["'][^>]*>([a-zA-Z0-9:\/.,{}\-_=+ ]+)<\/div>/);
    const _0x356ca4 = _0x3eaf27 ? _0x3eaf27[1] : null;
    const _0x36a7db = _0x3eaf27 ? _0x3eaf27[2] : null;
    if (!_0x356ca4 || !_0x36a7db) {
      return [];
    }
    const _0x5391f3 = yield safeFetch("https://enc-dec.app/api/dec-cloudnestra", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: _0x36a7db,
        div_id: _0x356ca4
      })
    });
    const _0x2426e5 = _0x5391f3 && _0x5391f3.ok ? yield _0x5391f3.json() : null;
    const _0x5d29db = _0x2426e5 && Array.isArray(_0x2426e5.result) ? _0x2426e5.result : [];
    if (_0x5d29db.length === 0) {
      return [];
    }
    const _0x389b60 = [];
    for (let _0x1115f3 = 0; _0x1115f3 < _0x5d29db.length; _0x1115f3++) {
      const _0x11d680 = _0x5d29db[_0x1115f3];
      if (!_0x11d680) {
        continue;
      }
      const _0x3a9380 = inferQualityScore(_0x11d680);
      const _0x32df41 = yield detectPlaylistMaxQuality(_0x11d680, _0x240bbd);
      const _0x55960c = _0x11d680.includes(".m3u8") ? 1080 : 0;
      const _0x509c72 = Math.max(_0x3a9380, _0x32df41, _0x55960c);
      if (_0x509c72 < 1080) {
        continue;
      }
      _0x389b60.push({
        name: PROVIDER_ID + " - Server " + (_0x1115f3 + 1),
        url: _0x11d680,
        quality: toQualityLabel(_0x509c72),
        headers: _0x240bbd,
        provider: PROVIDER_ID,
        _score: _0x509c72
      });
    }
    return _0x389b60.sort((_0x1b4cc4, _0x48bce5) => _0x48bce5._score - _0x1b4cc4._score).map(_0x1476fa => {
      var _0x31c366 = _0x1476fa;
      var {
        _score: _0x4104c0
      } = _0x31c366;
      var _0x1ffbe9 = __objRest(_0x31c366, ["_score"]);
      return _0x1ffbe9;
    });
  });
}
function getStreams(_0x5a6d90, _0x3ea2f1, _0x1ad10d, _0x44d7c5) {
  return __async(this, null, function* () {
    try {
      const _0x3638e6 = _0x3ea2f1 === "tv" ? "tv" : "movie";
      const _0x145c59 = yield getImdbId(_0x5a6d90, _0x3638e6);
      if (!_0x145c59) {
        return [];
      }
      return yield resolveCloudnestraStreams(_0x145c59, _0x3638e6, _0x1ad10d, _0x44d7c5);
    } catch (_0x575f35) {
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