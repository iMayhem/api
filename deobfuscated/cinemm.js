var __async = (_0x412d0f, _0x25ffe6, _0x271dbc) => {
  return new Promise((_0x3c3122, _0x3e8081) => {
    var _0x5346d7 = _0xb14de7 => {
      try {
        _0x73dc70(_0x271dbc.next(_0xb14de7));
      } catch (_0x27b8e8) {
        _0x3e8081(_0x27b8e8);
      }
    };
    var _0x328c57 = _0x55fa29 => {
      try {
        _0x73dc70(_0x271dbc.throw(_0x55fa29));
      } catch (_0xb76263) {
        _0x3e8081(_0xb76263);
      }
    };
    var _0x73dc70 = _0x5c999e => _0x5c999e.done ? _0x3c3122(_0x5c999e.value) : Promise.resolve(_0x5c999e.value).then(_0x5346d7, _0x328c57);
    _0x73dc70((_0x271dbc = _0x271dbc.apply(_0x412d0f, _0x25ffe6)).next());
  });
};
var PROVIDER_NAME = "CineMM";
var MAIN_URL = "https://cinemm.com";
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var ACTIONS = {
  search: "6018fac11e9b775fd3a7f877cdc4ab1b312b8e978c",
  quotaReset: "6077a1a88313137459881a82cca9e76114af8993f6",
  movieServers: "401dd7f7ed7453fdfdcc55d28458444ecec9e4cc8d",
  seriesDetails: "40fbf1a13bd851f36bdfb8c1d23835fd1fc16b9ca4",
  episodeServers: "4049901391797f2c009e9c215a59ebc6679aef2e62"
};
var MOBILE_UAS = ["Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"];
function getBaseHeaders(_0x7df37c) {
  return {
    "User-Agent": _0x7df37c,
    Accept: "text/x-component",
    "Content-Type": "text/plain;charset=UTF-8",
    Referer: MAIN_URL + "/"
  };
}
function fetchWithTimeout(_0x4e45f3, _0x57fc56, _0x5f0006) {
  return __async(this, null, function* () {
    _0x5f0006 = _0x5f0006 || 15000;
    try {
      var _0x73922d = _0x57fc56 || {};
      if (!_0x73922d.headers) {
        _0x73922d.headers = {};
      }
      if (typeof AbortSignal !== "undefined" && AbortSignal.timeout) {
        _0x73922d.signal = AbortSignal.timeout(_0x5f0006);
      }
      return yield fetch(_0x4e45f3, _0x73922d);
    } catch (_0x28692d) {
      if (_0x28692d.name === "AbortError" || _0x28692d.name === "TimeoutError") {
        throw new Error("[" + PROVIDER_NAME + "] Timeout: " + _0x4e45f3.substring(0, 80));
      }
      throw _0x28692d;
    }
  });
}
function tryExtractJsonValue(_0x1c81b6, _0x3bb624) {
  var _0x4179f6 = _0x1c81b6.indexOf(_0x3bb624);
  if (_0x4179f6 === -1) {
    return null;
  }
  var _0x3b8eef = _0x4179f6 + 2;
  if (_0x3b8eef >= _0x1c81b6.length) {
    return null;
  }
  var _0x5703ed = _0x1c81b6[_0x3b8eef];
  if (_0x5703ed !== "[" && _0x5703ed !== "{") {
    return null;
  }
  var _0x19788b = 0;
  var _0x92fec4 = false;
  var _0x16443 = false;
  var _0x2b28ad = -1;
  for (var _0x5d06dd = _0x3b8eef; _0x5d06dd < _0x1c81b6.length; _0x5d06dd++) {
    var _0xa5d3ab = _0x1c81b6[_0x5d06dd];
    if (_0x16443) {
      _0x16443 = false;
      continue;
    }
    if (_0xa5d3ab === "\\" && _0x92fec4) {
      _0x16443 = true;
      continue;
    }
    if (_0xa5d3ab === "\"") {
      _0x92fec4 = !_0x92fec4;
      continue;
    }
    if (!_0x92fec4) {
      if (_0xa5d3ab === "[" || _0xa5d3ab === "{") {
        _0x19788b++;
      } else if (_0xa5d3ab === "]" || _0xa5d3ab === "}") {
        _0x19788b--;
        if (_0x19788b === 0) {
          _0x2b28ad = _0x5d06dd + 1;
          break;
        }
      }
    }
  }
  if (_0x2b28ad === -1) {
    return null;
  }
  try {
    return JSON.parse(_0x1c81b6.substring(_0x3b8eef, _0x2b28ad));
  } catch (_0x5d8013) {
    console.error("[" + PROVIDER_NAME + "] JSON parse failed: " + _0x5d8013.message);
    return null;
  }
}
function extractCookieFromHeaders(_0x623217) {
  try {
    if (_0x623217.headers && typeof _0x623217.headers.get === "function") {
      var _0x42af3a = (_0x623217.headers.get("set-cookie") || "").match(/user_uuid=([^;]+)/);
      if (_0x42af3a) {
        return "user_uuid=" + _0x42af3a[1];
      }
    }
    if (_0x623217.headers && typeof _0x623217.headers.forEach === "function") {
      var _0x29e1cb = null;
      _0x623217.headers.forEach(function (_0x22a99b, _0x2d9d9d) {
        if (_0x2d9d9d.toLowerCase() === "set-cookie" && !_0x29e1cb) {
          var _0x5e981a = _0x22a99b.match(/user_uuid=([^;]+)/);
          if (_0x5e981a) {
            _0x29e1cb = "user_uuid=" + _0x5e981a[1];
          }
        }
      });
      if (_0x29e1cb) {
        return _0x29e1cb;
      }
    }
    if (_0x623217.headers && typeof _0x623217.headers === "object") {
      var _0x33bc72 = _0x623217.headers["set-cookie"] || _0x623217.headers["Set-Cookie"] || "";
      if (Array.isArray(_0x33bc72)) {
        for (var _0x26c444 = 0; _0x26c444 < _0x33bc72.length; _0x26c444++) {
          var _0x42af3a = _0x33bc72[_0x26c444].match(/user_uuid=([^;]+)/);
          if (_0x42af3a) {
            return "user_uuid=" + _0x42af3a[1];
          }
        }
      } else {
        var _0x42af3a = _0x33bc72.match(/user_uuid=([^;]+)/);
        if (_0x42af3a) {
          return "user_uuid=" + _0x42af3a[1];
        }
      }
    }
  } catch (_0x55995f) {
    console.error("[" + PROVIDER_NAME + "] Cookie extraction error: " + _0x55995f.message);
  }
  return null;
}
function extractUuidFromBody(_0x5e8aad) {
  try {
    var _0xd7af40 = _0x5e8aad.match(/"uuid":\s*"([a-f0-9-]{36})"/i);
    if (_0xd7af40) {
      return "user_uuid=" + _0xd7af40[1];
    }
    var _0x4eb2e9 = _0x5e8aad.match(/"user_uuid":\s*"([^"]+)"/i);
    if (_0x4eb2e9) {
      return "user_uuid=" + _0x4eb2e9[1];
    }
  } catch (_0x2abaf1) {}
  return null;
}
function callAction(_0x8292e5, _0x40429f, _0x53eddc, _0x47c201, _0x2a33ec) {
  return __async(this, null, function* () {
    var _0x3f0948 = getBaseHeaders(_0x2a33ec);
    var _0x47d1a4 = {
      "User-Agent": _0x3f0948["User-Agent"],
      Accept: _0x3f0948.Accept,
      "Content-Type": _0x3f0948["Content-Type"],
      "next-action": _0x8292e5,
      Referer: _0x47c201 || MAIN_URL + "/"
    };
    if (_0x53eddc) {
      _0x47d1a4.Cookie = _0x53eddc;
    }
    var _0xb9d2d6 = typeof _0x40429f === "string" ? _0x40429f : JSON.stringify(_0x40429f);
    var _0x2183c2 = yield fetchWithTimeout(MAIN_URL, {
      method: "POST",
      headers: _0x47d1a4,
      body: _0xb9d2d6
    }, 20000);
    if (!_0x2183c2.ok) {
      throw new Error("Action failed: " + _0x2183c2.status);
    }
    return _0x2183c2;
  });
}
function resetQuota(_0x5ac5d9) {
  return __async(this, null, function* () {
    var _0x531fe2 = "";
    var _0x496662 = "abcdef0123456789";
    for (var _0x3cdddd = 0; _0x3cdddd < 32; _0x3cdddd++) {
      _0x531fe2 += _0x496662[Math.floor(Math.random() * 16)];
    }
    var _0x453648 = yield callAction(ACTIONS.quotaReset, JSON.stringify([_0x531fe2, "$undefined"]), null, MAIN_URL + "/", _0x5ac5d9);
    var _0x1197a8 = extractCookieFromHeaders(_0x453648);
    if (_0x1197a8) {
      return _0x1197a8;
    }
    try {
      var _0x26e07f = yield _0x453648.text();
      var _0x9d7c9f = extractUuidFromBody(_0x26e07f);
      if (_0x9d7c9f) {
        return _0x9d7c9f;
      }
    } catch (_0x161793) {}
    console.error("[" + PROVIDER_NAME + "] No user_uuid found in headers or body");
    return null;
  });
}
function searchCineMM(_0x41ae71, _0xb52851, _0x3a3158, _0x4a0ba5) {
  return __async(this, null, function* () {
    var _0x512b42 = JSON.stringify([_0x41ae71, _0xb52851]);
    var _0x2ba842 = MAIN_URL + "/?search=" + encodeURIComponent(_0x41ae71) + "&type=" + _0xb52851;
    var _0x8a7545 = yield callAction(ACTIONS.search, _0x512b42, _0x3a3158, _0x2ba842, _0x4a0ba5);
    var _0x1a0dae = yield _0x8a7545.text();
    var _0x1e83ce = tryExtractJsonValue(_0x1a0dae, "1:[");
    if (!_0x1e83ce || !Array.isArray(_0x1e83ce)) {
      console.log("[" + PROVIDER_NAME + "] Search returned no results");
      return [];
    }
    console.log("[" + PROVIDER_NAME + "] Search found " + _0x1e83ce.length + " results");
    return _0x1e83ce;
  });
}
function getMovieServers(_0x4888f1, _0xe1a67c, _0x274dee) {
  return __async(this, null, function* () {
    var _0x406a0e = JSON.stringify([[_0x4888f1]]);
    var _0x377e89 = yield callAction(ACTIONS.movieServers, _0x406a0e, _0xe1a67c, MAIN_URL + "/", _0x274dee);
    var _0xfb4736 = yield _0x377e89.text();
    var _0x143733 = tryExtractJsonValue(_0xfb4736, "1:{\"servers\"");
    if (!_0x143733 || !_0x143733.servers) {
      console.error("[" + PROVIDER_NAME + "] Movie servers: no data");
      return null;
    }
    console.log("[" + PROVIDER_NAME + "] Movie servers: " + _0x143733.servers.length + " sources");
    return _0x143733;
  });
}
function getSeriesDetails(_0x86de72, _0x1593a6, _0x48459a) {
  return __async(this, null, function* () {
    var _0x5a1838 = JSON.stringify([[_0x86de72]]);
    var _0x33eaf2 = yield callAction(ACTIONS.seriesDetails, _0x5a1838, _0x1593a6, MAIN_URL + "/", _0x48459a);
    var _0x21d052 = yield _0x33eaf2.text();
    var _0x595a6c = tryExtractJsonValue(_0x21d052, "1:{\"seasons\"");
    if (!_0x595a6c || !_0x595a6c.seasons) {
      console.error("[" + PROVIDER_NAME + "] Series details: no data");
      return null;
    }
    console.log("[" + PROVIDER_NAME + "] Series has " + _0x595a6c.seasons.length + " seasons");
    return _0x595a6c;
  });
}
function getEpisodeServers(_0x275a16, _0x8c2d16, _0xea8123) {
  return __async(this, null, function* () {
    var _0x37a32e = JSON.stringify([[_0x275a16]]);
    var _0x4e294c = yield callAction(ACTIONS.episodeServers, _0x37a32e, _0x8c2d16, MAIN_URL + "/", _0xea8123);
    var _0x2de69d = yield _0x4e294c.text();
    var _0x26caa7 = tryExtractJsonValue(_0x2de69d, "1:{\"servers\"");
    if (!_0x26caa7 || !_0x26caa7.servers) {
      console.error("[" + PROVIDER_NAME + "] Episode servers: no data");
      return null;
    }
    console.log("[" + PROVIDER_NAME + "] Episode servers: " + _0x26caa7.servers.length + " sources");
    return _0x26caa7;
  });
}
function getTMDBInfo(_0x39c74b, _0x4a926e, _0x1f9f38) {
  return __async(this, null, function* () {
    var _0x4603b4 = String(_0x39c74b).trim();
    var _0x554bac = _0x4603b4.startsWith("tt");
    var _0x17da85 = /^\d+$/.test(_0x4603b4);
    var _0x4da157 = _0x4a926e === "tv" || _0x4a926e === "series" ? "tv" : "movie";
    var _0x42d41e = _0x4da157 === "tv" ? "series" : "movie";
    try {
      if (_0x554bac) {
        console.log("[" + PROVIDER_NAME + "] Mobile ID detected (" + _0x4603b4 + "). Resolving via TMDB...");
        var _0x5ae40d = yield fetchWithTimeout("https://api.themoviedb.org/3/find/" + _0x4603b4 + "?api_key=" + TMDB_API_KEY + "&external_source=imdb_id", {
          headers: {
            "User-Agent": _0x1f9f38
          }
        });
        if (_0x5ae40d.ok) {
          var _0x48c028 = yield _0x5ae40d.json();
          var _0xaf2b91 = _0x4da157 === "tv" ? _0x48c028.tv_results : _0x48c028.movie_results;
          if (_0xaf2b91 && _0xaf2b91.length > 0) {
            var _0x590141 = _0xaf2b91[0];
            return {
              id: _0x590141.id,
              title: _0x4da157 === "tv" ? _0x590141.name : _0x590141.title,
              year: (_0x590141.first_air_date || _0x590141.release_date || "").split("-")[0],
              type: _0x42d41e
            };
          }
        }
        console.log("[" + PROVIDER_NAME + "] TMDB find failed, trying Cinemeta...");
        var _0x2a88d9 = yield fetchWithTimeout("https://v3-cinemeta.strem.io/meta/" + _0x42d41e + "/" + _0x4603b4 + ".json", {
          headers: {
            "User-Agent": _0x1f9f38
          }
        });
        if (_0x2a88d9.ok) {
          var _0xcd12c8 = yield _0x2a88d9.json();
          if (_0xcd12c8.meta) {
            return {
              id: _0x4603b4,
              title: _0xcd12c8.meta.name || _0xcd12c8.meta.title || _0x4603b4,
              year: _0xcd12c8.meta.year || (_0xcd12c8.meta.released || "").split("-")[0],
              type: _0x42d41e
            };
          }
        }
        return {
          id: _0x4603b4,
          title: _0x4603b4,
          year: null,
          type: _0x42d41e
        };
      } else if (_0x17da85) {
        var _0x5ae40d = yield fetchWithTimeout("https://api.themoviedb.org/3/" + _0x4da157 + "/" + _0x4603b4 + "?api_key=" + TMDB_API_KEY, {
          headers: {
            "User-Agent": _0x1f9f38
          }
        });
        if (_0x5ae40d.ok) {
          var _0x48c028 = yield _0x5ae40d.json();
          return {
            id: _0x48c028.id,
            title: _0x4da157 === "tv" ? _0x48c028.name : _0x48c028.title,
            year: (_0x48c028.first_air_date || _0x48c028.release_date || "").split("-")[0],
            type: _0x42d41e
          };
        }
        return {
          id: _0x4603b4,
          title: _0x4603b4,
          year: null,
          type: _0x42d41e
        };
      } else {
        return {
          id: _0x4603b4,
          title: _0x4603b4,
          year: null,
          type: _0x42d41e
        };
      }
    } catch (_0x25ffc1) {
      console.error("[" + PROVIDER_NAME + "] TMDB error: " + _0x25ffc1.message);
      return {
        id: _0x4603b4,
        title: String(_0x4603b4),
        year: null,
        type: _0x42d41e
      };
    }
  });
}
function similarity(_0x405543, _0x2868df, _0x419bee) {
  if (!_0x405543 || !_0x2868df) {
    return 0;
  }
  function _0x5ca463(_0x20d313) {
    return _0x20d313.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(Boolean);
  }
  var _0x1a8039 = _0x5ca463(_0x405543);
  var _0x41c6e8 = {};
  var _0x510901 = _0x5ca463(_0x2868df);
  for (var _0x54f924 = 0; _0x54f924 < _0x510901.length; _0x54f924++) {
    _0x41c6e8[_0x510901[_0x54f924]] = true;
  }
  var _0x410158 = 0;
  for (var _0x54f924 = 0; _0x54f924 < _0x1a8039.length; _0x54f924++) {
    if (_0x41c6e8[_0x1a8039[_0x54f924]]) {
      _0x410158++;
    }
  }
  var _0x219b6e = _0x410158 / Math.max(_0x1a8039.length, 1);
  if (_0x419bee && String(_0x2868df).includes(String(_0x419bee))) {
    _0x219b6e += 0.25;
  }
  if (_0x2868df.toLowerCase().startsWith(_0x405543.toLowerCase())) {
    _0x219b6e += 0.15;
  }
  return Math.min(_0x219b6e, 1);
}
function normalizeQuality(_0x6824c4) {
  var _0x33e573 = String(_0x6824c4 || "").toLowerCase();
  if (_0x33e573.includes("2160") || _0x33e573.includes("4k") || _0x33e573.includes("uhd")) {
    return "2160p";
  }
  if (_0x33e573.includes("1440")) {
    return "1440p";
  }
  if (_0x33e573.includes("1080")) {
    return "1080p";
  }
  if (_0x33e573.includes("720")) {
    return "720p";
  }
  if (_0x33e573.includes("480")) {
    return "480p";
  }
  if (_0x33e573.includes("360")) {
    return "360p";
  }
  return "HD";
}
function buildStreamsFromServers(_0x48a43f, _0x48f120, _0x2ea383) {
  if (!_0x48a43f || !Array.isArray(_0x48a43f)) {
    return [];
  }
  var _0x5f356f = {};
  var _0x53feca = [];
  for (var _0x5e3f55 = 0; _0x5e3f55 < _0x48a43f.length; _0x5e3f55++) {
    var _0x9be3d1 = _0x48a43f[_0x5e3f55];
    if (!_0x9be3d1 || !_0x9be3d1.url || _0x5f356f[_0x9be3d1.url]) {
      continue;
    }
    _0x5f356f[_0x9be3d1.url] = true;
    var _0x373d5e = normalizeQuality(_0x9be3d1.name || "");
    var _0x443ca4 = _0x9be3d1.size ? " (" + _0x9be3d1.size + ")" : "";
    var _0xd82970 = (_0x9be3d1.name || "CineMM") + "\n" + _0x373d5e + " · MP4\nby CineMM";
    _0x53feca.push({
      name: _0x48f120 + " - " + PROVIDER_NAME + " | " + _0x373d5e + _0x443ca4,
      title: _0xd82970,
      size: _0xd82970,
      url: _0x9be3d1.url,
      quality: _0x373d5e,
      headers: {
        Referer: MAIN_URL + "/",
        "User-Agent": _0x2ea383
      }
    });
  }
  return _0x53feca;
}
function getStreams(_0x158e9d, _0x1b6085, _0x359a40, _0x429bf1) {
  return __async(this, null, function* () {
    try {
      console.log("[" + PROVIDER_NAME + "] Request: ID=" + _0x158e9d + ", Type=" + _0x1b6085 + ", S=" + _0x359a40 + ", E=" + _0x429bf1);
      var _0x3e1a0e = _0x1b6085 === "tv" || _0x1b6085 === "series";
      var _0x3303e7 = _0x3e1a0e ? "series" : "movie";
      var _0x52c7f9 = MOBILE_UAS[Math.floor(Math.random() * MOBILE_UAS.length)];
      var _0x5b9b34 = yield getTMDBInfo(_0x158e9d, _0x1b6085, _0x52c7f9);
      if (!_0x5b9b34 || !_0x5b9b34.title) {
        console.log("[" + PROVIDER_NAME + "] Could not resolve media info");
        return [];
      }
      console.log("[" + PROVIDER_NAME + "] Resolved: \"" + _0x5b9b34.title + "\" (" + (_0x5b9b34.year || "N/A") + ")");
      var _0x13befe = yield resetQuota(_0x52c7f9);
      if (!_0x13befe) {
        console.log("[" + PROVIDER_NAME + "] Quota reset failed");
        return [];
      }
      var _0x39aa1f = yield searchCineMM(_0x5b9b34.title, _0x3303e7, _0x13befe, _0x52c7f9);
      if (!_0x39aa1f || _0x39aa1f.length === 0) {
        console.log("[" + PROVIDER_NAME + "] No results for: " + _0x5b9b34.title);
        return [];
      }
      var _0x534fb9 = null;
      var _0x4ebbdd = 0;
      for (var _0x5350e6 = 0; _0x5350e6 < _0x39aa1f.length; _0x5350e6++) {
        var _0x2a071a = _0x39aa1f[_0x5350e6];
        var _0x5624a3 = similarity(_0x5b9b34.title, _0x2a071a.name, _0x5b9b34.year);
        var _0x1ffe51 = _0x5b9b34.title.split(" ").length <= 3;
        if (_0x1ffe51 && _0x5b9b34.year && _0x2a071a.year && Math.abs(parseInt(_0x5b9b34.year) - parseInt(_0x2a071a.year)) > 2) {
          _0x5624a3 -= 0.5;
        }
        if (_0x5624a3 > _0x4ebbdd && _0x5624a3 >= 0.4) {
          _0x4ebbdd = _0x5624a3;
          _0x534fb9 = _0x2a071a;
        }
      }
      if (!_0x534fb9) {
        console.log("[" + PROVIDER_NAME + "] No match (best=" + _0x4ebbdd.toFixed(2) + ")");
        return [];
      }
      console.log("[" + PROVIDER_NAME + "] Match: \"" + _0x534fb9.name + "\" (ID: " + _0x534fb9.id + ", score: " + _0x4ebbdd.toFixed(2) + ")");
      var _0x1f2f61 = _0x534fb9.id;
      var _0x591a8e = [];
      if (_0x3e1a0e) {
        var _0x157601 = yield getSeriesDetails(_0x1f2f61, _0x13befe);
        if (!_0x157601 || !_0x157601.seasons) {
          console.log("[" + PROVIDER_NAME + "] No series details");
          return [];
        }
        var _0x39ecbb = null;
        for (var _0x31d15c = 0; _0x31d15c < _0x157601.seasons.length; _0x31d15c++) {
          var _0x2662e5 = _0x157601.seasons[_0x31d15c].name.match(/(\d+)/);
          if (_0x2662e5 && parseInt(_0x2662e5[1]) === parseInt(_0x359a40)) {
            _0x39ecbb = _0x157601.seasons[_0x31d15c].id;
            break;
          }
        }
        if (!_0x39ecbb) {
          var _0x5aa3c3 = parseInt(_0x359a40) - 1;
          if (_0x5aa3c3 >= 0 && _0x5aa3c3 < _0x157601.seasons.length) {
            _0x39ecbb = _0x157601.seasons[_0x5aa3c3].id;
          }
        }
        if (!_0x39ecbb) {
          console.log("[" + PROVIDER_NAME + "] Season " + _0x359a40 + " not found");
          return [];
        }
        var _0x5d87f3 = null;
        for (var _0x31d15c = 0; _0x31d15c < _0x157601.seasons.length; _0x31d15c++) {
          if (_0x157601.seasons[_0x31d15c].id === _0x39ecbb) {
            _0x5d87f3 = _0x157601.seasons[_0x31d15c];
            break;
          }
        }
        if (!_0x5d87f3 || !_0x5d87f3.episodes || _0x5d87f3.episodes.length === 0) {
          console.log("[" + PROVIDER_NAME + "] No episodes for season " + _0x359a40);
          return [];
        }
        var _0x4d00e6 = null;
        for (var _0x45ba93 = 0; _0x45ba93 < _0x5d87f3.episodes.length; _0x45ba93++) {
          if (_0x5d87f3.episodes[_0x45ba93].episode_number === parseInt(_0x429bf1)) {
            _0x4d00e6 = _0x5d87f3.episodes[_0x45ba93].id;
            break;
          }
        }
        if (!_0x4d00e6) {
          var _0x1e4f77 = parseInt(_0x429bf1) - 1;
          if (_0x1e4f77 >= 0 && _0x1e4f77 < _0x5d87f3.episodes.length) {
            _0x4d00e6 = _0x5d87f3.episodes[_0x1e4f77].id;
          }
        }
        if (!_0x4d00e6) {
          console.log("[" + PROVIDER_NAME + "] Episode " + _0x429bf1 + " not found");
          return [];
        }
        console.log("[" + PROVIDER_NAME + "] Fetching episode " + _0x4d00e6 + " (S" + _0x359a40 + "E" + _0x429bf1 + ")");
        var _0x424abe = yield getEpisodeServers(_0x4d00e6, _0x13befe, _0x52c7f9);
        if (_0x424abe && _0x424abe.servers) {
          _0x591a8e = buildStreamsFromServers(_0x424abe.servers, _0x534fb9.name, _0x52c7f9);
        }
      } else {
        var _0x418bb2 = yield getMovieServers(_0x1f2f61, _0x13befe, _0x52c7f9);
        if (_0x418bb2 && _0x418bb2.servers) {
          _0x591a8e = buildStreamsFromServers(_0x418bb2.servers, _0x534fb9.name, _0x52c7f9);
        }
      }
      console.log("[" + PROVIDER_NAME + "] Returning " + _0x591a8e.length + " streams");
      return _0x591a8e;
    } catch (_0x49a991) {
      console.error("[" + PROVIDER_NAME + "] Error: " + _0x49a991.message);
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