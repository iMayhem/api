var DOMAINS_URL = "https://raw.githubusercontent.com/wooodyhood/nuvio-repo/main/domains.json";
var TOFLIX_FALLBACK = "site";
var TOFLIX_API = "https://api.toflix." + TOFLIX_FALLBACK + "/toflix_api.php";
var TOFLIX_REFERER = "https://toflix." + TOFLIX_FALLBACK + "/";
var TOFLIX_TOKEN = "TobiCocoToflix2025TokenDeLaV2MeilleurSiteDeStreaminAuMondeEntierQuiEcraseToutSurSonCheminNeDevenezPasJalouxBandeDeNoobs";
var ZEUS_BASE = "https://apis.wavewatch.xyz/zeus.php";
var ZEUS_REFERER = "https://toflix." + TOFLIX_FALLBACK + "/";
var _cachedEndpoint = null;
function detectToflixEndpoint() {
  if (_cachedEndpoint) {
    return Promise.resolve(_cachedEndpoint);
  }
  return fetch(DOMAINS_URL).then(function (_0x48b069) {
    if (!_0x48b069.ok) {
      throw new Error("HTTP " + _0x48b069.status);
    }
    return _0x48b069.json();
  }).then(function (_0x135b34) {
    var _0x1298c8 = _0x135b34.toflix;
    if (!_0x1298c8) {
      throw new Error("Domaine toflix absent du fichier");
    }
    console.log("[ToFlix] Domaine récupéré: toflix." + _0x1298c8);
    _cachedEndpoint = {
      api: "https://api.toflix." + _0x1298c8 + "/toflix_api.php",
      referer: "https://toflix." + _0x1298c8 + "/"
    };
    return _cachedEndpoint;
  }).catch(function () {
    console.warn("[ToFlix] domains.json échoué, fallback: toflix." + TOFLIX_FALLBACK);
    return {
      api: "https://api.toflix." + TOFLIX_FALLBACK + "/toflix_api.php",
      referer: "https://toflix." + TOFLIX_FALLBACK + "/"
    };
  });
}
function callApi(_0x322dc0, _0x3f41f5, _0x594321) {
  return fetch(_0x322dc0, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      tfxtoken: TOFLIX_TOKEN,
      Origin: _0x3f41f5.replace(/\/$/, ""),
      Referer: _0x3f41f5
    },
    body: JSON.stringify(_0x594321)
  }).then(function (_0x44711f) {
    if (!_0x44711f.ok) {
      throw new Error("HTTP " + _0x44711f.status);
    }
    return _0x44711f.json();
  });
}
function b64decode(_0x5080d1) {
  var _0x5efee9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var _0x4eb3ff = "";
  _0x5080d1 = _0x5080d1.replace(/[^A-Za-z0-9+/=]/g, "");
  for (var _0x178b4c = 0; _0x178b4c < _0x5080d1.length;) {
    var _0x26ce36 = _0x5efee9.indexOf(_0x5080d1.charAt(_0x178b4c++));
    var _0x226537 = _0x5efee9.indexOf(_0x5080d1.charAt(_0x178b4c++));
    var _0x113c77 = _0x5efee9.indexOf(_0x5080d1.charAt(_0x178b4c++));
    var _0x4c6bc0 = _0x5efee9.indexOf(_0x5080d1.charAt(_0x178b4c++));
    var _0x3e7ad8 = _0x26ce36 << 2 | _0x226537 >> 4;
    var _0x543c04 = (_0x226537 & 15) << 4 | _0x113c77 >> 2;
    var _0x4d3bd5 = (_0x113c77 & 3) << 6 | _0x4c6bc0;
    _0x4eb3ff += String.fromCharCode(_0x3e7ad8);
    if (_0x113c77 !== 64) {
      _0x4eb3ff += String.fromCharCode(_0x543c04);
    }
    if (_0x4c6bc0 !== 64) {
      _0x4eb3ff += String.fromCharCode(_0x4d3bd5);
    }
  }
  return _0x4eb3ff.replace(/[^\x20-\x7E]/g, "").trim();
}
function parseZeusSse(_0x1d9f07, _0xad71cc) {
  var _0x5c6252 = [];
  var _0x2cb7a8 = _0x1d9f07.split("\n");
  var _0x4cdf12 = null;
  for (var _0x6060de = 0; _0x6060de < _0x2cb7a8.length; _0x6060de++) {
    var _0x1f7211 = _0x2cb7a8[_0x6060de].trim();
    if (_0x1f7211.indexOf("event:") === 0) {
      _0x4cdf12 = _0x1f7211.replace("event:", "").trim();
      continue;
    }
    if (_0x1f7211.indexOf("data:") === 0 && _0x4cdf12 === "sources") {
      try {
        var _0x1b69c1 = JSON.parse(_0x1f7211.replace("data:", "").trim());
        var _0x4cdfe3 = _0x1b69c1.sources || [];
        for (var _0x2d5197 = 0; _0x2d5197 < _0x4cdfe3.length; _0x2d5197++) {
          var _0x331e9f = _0x4cdfe3[_0x2d5197];
          if (!_0x331e9f.url || _0x331e9f.iframe) {
            continue;
          }
          var _0x14c353 = null;
          var _0x336418 = ZEUS_REFERER;
          var _0x5d1458 = _0x331e9f.format || "mp4";
          var _0x2f0fc3 = _0x331e9f.url.match(/[?&]stream=([^&]+)/);
          if (_0x2f0fc3) {
            _0x14c353 = ZEUS_BASE + (_0x331e9f.url.charAt(0) === "?" ? _0x331e9f.url : "?" + _0x331e9f.url);
            _0x5d1458 = "mp4";
          } else {
            var _0xac2136 = _0x331e9f.url.match(/[?&]proxy=([^&]+)/);
            if (_0xac2136) {
              var _0x2e102d = b64decode(_0xac2136[1]);
              if (_0x2e102d && _0x2e102d.indexOf("http") === 0) {
                if (_0x2e102d.indexOf("nakios.art") !== -1) {
                  continue;
                }
                _0x14c353 = _0x2e102d;
                _0x5d1458 = "m3u8";
                var _0x144684 = _0x331e9f.url.match(/[?&]ref=([^&]+)/);
                if (_0x144684) {
                  var _0x5a080d = b64decode(_0x144684[1]);
                  if (_0x5a080d && _0x5a080d.indexOf("http") === 0) {
                    _0x336418 = _0x5a080d;
                  }
                }
              } else {
                _0x14c353 = ZEUS_BASE + (_0x331e9f.url.charAt(0) === "?" ? _0x331e9f.url : "?" + _0x331e9f.url);
                _0x5d1458 = "mp4";
              }
            }
          }
          if (!_0x14c353) {
            continue;
          }
          var _0x2c6884 = (_0x331e9f.lang || "VF").toUpperCase();
          var _0x2057be = _0x331e9f.quality || "HD";
          var _0x371bb1 = (_0x331e9f.provider || "zeus").toUpperCase();
          _0x5c6252.push({
            name: "ToFlix " + _0x371bb1,
            title: _0xad71cc(_0x331e9f, _0x2c6884, _0x2057be),
            url: _0x14c353,
            quality: _0x2057be,
            format: _0x5d1458,
            headers: {
              Referer: _0x336418,
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            }
          });
        }
      } catch (_0x167901) {}
    }
  }
  return _0x5c6252;
}
function fetchZeusUrl(_0xc8d3bd, _0x310f63) {
  return fetch(_0xc8d3bd, {
    headers: {
      Referer: ZEUS_REFERER,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      Accept: "text/event-stream"
    }
  }).then(function (_0x883326) {
    if (!_0x883326.ok) {
      throw new Error("Zeus HTTP " + _0x883326.status);
    }
    return _0x883326.text();
  }).then(function (_0x959e85) {
    var _0x3375ac = parseZeusSse(_0x959e85, _0x310f63);
    if (_0x3375ac.length === 0) {
      throw new Error("Zeus: aucune source directe");
    }
    return _0x3375ac;
  });
}
function fetchMovieFastFlux(_0x2ecf2f, _0xd491c2, _0x6026cb) {
  return callApi(_0x2ecf2f, _0xd491c2, {
    api: "fastflux",
    endpoint: "movie",
    tmdb_id: String(_0x6026cb)
  }).then(function (_0x474450) {
    if (!_0x474450 || !_0x474450.success || !_0x474450.source_url) {
      throw new Error("Film non disponible");
    }
    return [{
      name: "ToFlix",
      title: (_0x474450.title || "ToFlix") + " - VF",
      url: _0x474450.source_url,
      quality: "HD",
      format: _0x474450.source && _0x474450.source.type === "m3u8" ? "m3u8" : "mp4",
      headers: {
        Referer: _0xd491c2,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    }];
  });
}
function fetchMovieZeus(_0xcd7b64) {
  var _0x5afb4f = ZEUS_BASE + "?sse&type=movie&id=" + _0xcd7b64;
  return fetchZeusUrl(_0x5afb4f, function (_0x21a42e, _0x437da9, _0x12ce3e) {
    return (_0x21a42e.name || "ToFlix") + " - " + _0x437da9 + " " + _0x12ce3e;
  });
}
function fetchMovie(_0x3ec1e1, _0x4deb88, _0x55f25a) {
  var _0x35d6cd = fetchMovieFastFlux(_0x3ec1e1, _0x4deb88, _0x55f25a).catch(function () {
    return [];
  });
  var _0x3277c8 = fetchMovieZeus(_0x55f25a).catch(function () {
    return [];
  });
  return Promise.all([_0x35d6cd, _0x3277c8]).then(function (_0x575b09) {
    var _0x1e51c9 = _0x575b09[0].concat(_0x575b09[1]);
    if (_0x1e51c9.length === 0) {
      throw new Error("Film non disponible");
    }
    return _0x1e51c9;
  });
}
function fetchSeriesFastFlux(_0x5057f7, _0x506029, _0x4ef3f1, _0x49e409, _0x3fed2d) {
  return callApi(_0x5057f7, _0x506029, {
    api: "fastflux",
    endpoint: "serie/fastflux_episodes",
    tmdb_id: String(_0x4ef3f1)
  }).then(function (_0x19998b) {
    if (!_0x19998b || !_0x19998b.success || !_0x19998b.seasons) {
      throw new Error("FastFlux non disponible");
    }
    var _0x37b3d0 = String(_0x49e409);
    if (!_0x19998b.seasons[_0x37b3d0]) {
      throw new Error("Saison " + _0x49e409 + " non disponible");
    }
    var _0x162174 = _0x19998b.seasons[_0x37b3d0];
    for (var _0x1eb8ad = 0; _0x1eb8ad < _0x162174.length; _0x1eb8ad++) {
      var _0x196003 = _0x162174[_0x1eb8ad];
      if (_0x196003.episode_number === _0x3fed2d) {
        var _0x31e2e9 = _0x196003.url || _0x196003.source && _0x196003.source.url;
        if (!_0x31e2e9) {
          throw new Error("URL non trouvee pour S" + _0x49e409 + "E" + _0x3fed2d);
        }
        return [{
          name: "ToFlix",
          title: "S" + _0x49e409 + "E" + _0x3fed2d + " - " + (_0x196003.title || "VF"),
          url: _0x31e2e9,
          quality: "HD",
          format: _0x31e2e9.indexOf(".m3u8") !== -1 ? "m3u8" : "mp4",
          headers: {
            Referer: _0x506029,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
          }
        }];
      }
    }
    throw new Error("Episode S" + _0x49e409 + "E" + _0x3fed2d + " non trouve en FastFlux");
  });
}
function fetchSeriesZeus(_0x2b04f7, _0x5ef391, _0x1425d3) {
  var _0x21dd8b = ZEUS_BASE + "?sse&type=tv&id=" + _0x2b04f7 + "&s=" + _0x5ef391 + "&e=" + _0x1425d3;
  return fetchZeusUrl(_0x21dd8b, function (_0x3705ee, _0x3dbd03, _0x51577b) {
    return "S" + _0x5ef391 + "E" + _0x1425d3 + " - " + (_0x3705ee.name || _0x3dbd03) + " " + _0x51577b;
  });
}
function fetchSeries(_0xfabeb8, _0x432a7f, _0x1da6d1, _0x5cca1d, _0xb713ce) {
  var _0x641446 = _0x5cca1d || 1;
  var _0x4f1ca2 = _0xb713ce || 1;
  var _0x2e70ae = fetchSeriesFastFlux(_0xfabeb8, _0x432a7f, _0x1da6d1, _0x641446, _0x4f1ca2).catch(function () {
    return [];
  });
  var _0x567c4f = fetchSeriesZeus(_0x1da6d1, _0x641446, _0x4f1ca2).catch(function () {
    return [];
  });
  return Promise.all([_0x2e70ae, _0x567c4f]).then(function (_0x5d89b3) {
    var _0x41d410 = _0x5d89b3[0].concat(_0x5d89b3[1]);
    if (_0x41d410.length === 0) {
      throw new Error("Aucune source disponible");
    }
    return _0x41d410;
  });
}
function getStreamsWithApi(_0x46fbf3, _0x72b4b4, _0x5c699d, _0x5b9507, _0x5ddae6, _0x53fcb5) {
  if (_0x5b9507 === "tv") {
    return fetchSeries(_0x46fbf3, _0x72b4b4, _0x5c699d, _0x5ddae6, _0x53fcb5);
  }
  return fetchMovie(_0x46fbf3, _0x72b4b4, _0x5c699d);
}
function getStreams(_0x2ec765, _0x336eac, _0x221875, _0x18db2c, _0x42646f) {
  return detectToflixEndpoint().then(function (_0xd5db3c) {
    TOFLIX_API = _0xd5db3c.api;
    TOFLIX_REFERER = _0xd5db3c.referer;
    ZEUS_REFERER = _0xd5db3c.referer;
    return getStreamsWithApi(_0xd5db3c.api, _0xd5db3c.referer, _0x2ec765, _0x336eac, _0x221875, _0x18db2c);
  }).catch(function (_0x21177c) {
    console.error("[ToFlix] Erreur:", _0x21177c.message || _0x21177c);
    return [];
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams
  };
} else {
  global.getStreams = getStreams;
}