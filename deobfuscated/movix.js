var TMDB_KEY = "f3d757824f08ea2cff45eb8f47ca3a1e";
var DOMAINS_URL = "https://raw.githubusercontent.com/wooodyhood/nuvio-repo/main/domains.json";
var MOVIX_FALLBACK = "cash";
var _cachedEndpoint = null;
function getTmdbMetadata(_0x3a9bc6, _0x329688) {
  var _0x2fa36e = "https://api.themoviedb.org/3/" + (_0x329688 === "tv" ? "tv" : "movie") + "/" + _0x3a9bc6 + "?api_key=" + TMDB_KEY + "&language=en-US";
  return fetch(_0x2fa36e).then(function (_0x3cec04) {
    return _0x3cec04.json();
  }).then(function (_0x4d5b88) {
    var _0x474fc0 = _0x4d5b88.release_date || _0x4d5b88.first_air_date || "";
    return {
      name: _0x4d5b88.title || _0x4d5b88.name || "Movix",
      year: _0x474fc0 ? _0x474fc0.split("-")[0] : "",
      duration: _0x329688 === "movie" && _0x4d5b88.runtime ? _0x4d5b88.runtime + " min" : _0x329688 === "tv" && _0x4d5b88.episode_run_time && _0x4d5b88.episode_run_time.length > 0 ? _0x4d5b88.episode_run_time[0] + " min" : ""
    };
  }).catch(function () {
    return {
      name: "Movix",
      year: "",
      duration: ""
    };
  });
}
function getEpisodeInfo(_0x274ec6, _0x46096f, _0x3e1eb0) {
  if (!_0x274ec6 || !_0x46096f || !_0x3e1eb0) {
    return Promise.resolve(null);
  }
  var _0x292716 = "https://api.themoviedb.org/3/tv/" + _0x274ec6 + "/season/" + _0x46096f + "/episode/" + _0x3e1eb0 + "?api_key=" + TMDB_KEY + "&language=en-US";
  return fetch(_0x292716).then(function (_0x1d8f47) {
    return _0x1d8f47.json();
  }).then(function (_0x447f8c) {
    return {
      name: _0x447f8c.name || null,
      duration: _0x447f8c.runtime ? _0x447f8c.runtime + " min" : null
    };
  }).catch(function () {
    return null;
  });
}
function buildTitle(_0x10a4e5, _0x27b409, _0x46973b, _0x214a3d, _0xb237a3, _0x5c3991, _0x219813, _0x2c04e9, _0x37ee30) {
  var _0x2cd1b2 = _0x27b409.includes("2160") || _0x27b409.includes("4K") ? "💎" : "📺";
  var _0x3de217 = "🇫🇷";
  var _0x2dce9d = "VF";
  var _0x1e802e = (_0x46973b + " " + _0x27b409).toUpperCase();
  if (_0x1e802e.indexOf("MULTI") !== -1) {
    _0x3de217 = "🌍";
    _0x2dce9d = "MULTI";
  } else if (_0x1e802e.indexOf("VOST") !== -1) {
    _0x3de217 = "🔡";
    _0x2dce9d = "VOSTFR";
  }
  var _0x4150b8 = "🎬 ";
  if (_0x219813 && _0x2c04e9) {
    _0x4150b8 += "S" + _0x219813 + " E" + _0x2c04e9 + (_0x37ee30 && _0x37ee30.name ? " - " + _0x37ee30.name : "") + " | " + _0x10a4e5.name;
  } else {
    _0x4150b8 += _0x10a4e5.name + (_0x10a4e5.year ? " - " + _0x10a4e5.year : "");
  }
  var _0x5337c5 = [_0x2cd1b2 + " " + _0x27b409, _0x3de217 + " " + _0x2dce9d, "🎞️ " + (_0x214a3d || "M3U8").toUpperCase()];
  if (_0xb237a3) {
    _0x5337c5.push("💾 " + _0xb237a3);
  }
  if (_0x5c3991) {
    _0x5337c5.push("🛠️ " + _0x5c3991);
  }
  var _0x1230f6 = _0x37ee30 && _0x37ee30.duration ? _0x37ee30.duration : _0x10a4e5.duration;
  if (_0x1230f6) {
    _0x5337c5.push("⏱️ " + _0x1230f6);
  }
  return _0x4150b8 + "\n" + _0x5337c5.join(" | ");
}
function detectApi() {
  if (_cachedEndpoint) {
    return Promise.resolve(_cachedEndpoint);
  }
  return fetch(DOMAINS_URL).then(function (_0x4fe184) {
    if (_0x4fe184.ok) {
      return _0x4fe184.json();
    } else {
      return Promise.reject();
    }
  }).then(function (_0x57c04c) {
    var _0x5a648c = _0x57c04c.movix || MOVIX_FALLBACK;
    _cachedEndpoint = {
      api: "https://api.movix." + _0x5a648c,
      referer: "https://movix." + _0x5a648c + "/"
    };
    return _cachedEndpoint;
  }).catch(function () {
    _cachedEndpoint = {
      api: "https://api.movix." + MOVIX_FALLBACK,
      referer: "https://movix." + MOVIX_FALLBACK + "/"
    };
    return _cachedEndpoint;
  });
}
function resolveRedirect(_0x1a025c, _0x37a624) {
  return fetch(_0x1a025c, {
    method: "GET",
    redirect: "follow",
    headers: {
      "User-Agent": "Mozilla/5.0",
      Referer: _0x37a624
    }
  }).then(function (_0x2a50d7) {
    return _0x2a50d7.url || _0x1a025c;
  }).catch(function () {
    return _0x1a025c;
  });
}
function resolveEmbed(_0x578ade, _0x3486f6) {
  return fetch(_0x578ade, {
    method: "GET",
    redirect: "follow",
    headers: {
      "User-Agent": "Mozilla/5.0",
      Referer: _0x3486f6
    }
  }).then(function (_0x1084dc) {
    return _0x1084dc.text();
  }).then(function (_0x31cc45) {
    var _0x18b893 = [/file\s*:\s*["']([^"']+\.m3u8[^"']*)["']/i, /source\s+src=["']([^"']+\.m3u8[^"']*)["']/i, /["']([^"']*\.m3u8(?:\?[^"']*)?)["']/i];
    for (var _0x87b900 = 0; _0x87b900 < _0x18b893.length; _0x87b900++) {
      var _0x5641ea = _0x31cc45.match(_0x18b893[_0x87b900]);
      if (_0x5641ea) {
        if (_0x5641ea[1].startsWith("//")) {
          return "https:" + _0x5641ea[1];
        } else {
          return _0x5641ea[1];
        }
      }
    }
    return null;
  }).catch(function () {
    return null;
  });
}
function fetchPurstream(_0xf5202, _0x44d5ef, _0x1cead1, _0x4d84e2, _0x43878e, _0x25a0c6) {
  var _0x59610d = _0x4d84e2 === "tv" ? _0xf5202 + "/api/purstream/tv/" + _0x1cead1 + "/stream?season=" + (_0x43878e || 1) + "&episode=" + (_0x25a0c6 || 1) : _0xf5202 + "/api/purstream/movie/" + _0x1cead1 + "/stream";
  return fetch(_0x59610d, {
    headers: {
      Referer: _0x44d5ef
    }
  }).then(function (_0x2f09c4) {
    return _0x2f09c4.json();
  }).then(function (_0x4ab100) {
    return _0x4ab100.sources || [];
  });
}
function fetchCpasmal(_0x5a4a90, _0x3619e6, _0x32c954, _0x13d408, _0x24b3ee, _0x1d0307) {
  var _0x388e9d = _0x13d408 === "tv" ? _0x5a4a90 + "/api/cpasmal/tv/" + _0x32c954 + "/" + (_0x24b3ee || 1) + "/" + (_0x1d0307 || 1) : _0x5a4a90 + "/api/cpasmal/movie/" + _0x32c954;
  return fetch(_0x388e9d, {
    headers: {
      Referer: _0x3619e6
    }
  }).then(function (_0x56daec) {
    return _0x56daec.json();
  }).then(function (_0x35fbb3) {
    var _0x4e5e4e = [];
    ["vf", "vostfr"].forEach(function (_0x2f6dd0) {
      if (_0x35fbb3.links && _0x35fbb3.links[_0x2f6dd0]) {
        _0x35fbb3.links[_0x2f6dd0].forEach(function (_0x11043f) {
          _0x4e5e4e.push({
            url: _0x11043f.url,
            name: "Movix",
            player: _0x11043f.server,
            lang: _0x2f6dd0
          });
        });
      }
    });
    return _0x4e5e4e;
  });
}
function tryFetchAll(_0x28db2b, _0x323841, _0x1ecab6, _0x5c2855, _0x486e8a, _0xbefe05, _0x589061, _0x487942) {
  return fetchPurstream(_0x28db2b, _0x323841, _0x1ecab6, _0x5c2855, _0x486e8a, _0xbefe05).then(function (_0x108a09) {
    return Promise.all(_0x108a09.map(function (_0x13a7f2) {
      return resolveRedirect(_0x13a7f2.url, _0x323841).then(function (_0x3cc548) {
        var _0x97d2d9 = (_0x13a7f2.name || "").indexOf("1080") !== -1 ? "1080p" : "720p";
        return {
          name: "Movix - " + _0x97d2d9,
          title: buildTitle(_0x589061, _0x97d2d9, _0x13a7f2.name, _0x13a7f2.format || "m3u8", null, null, _0x486e8a, _0xbefe05, _0x487942),
          url: _0x3cc548,
          quality: _0x97d2d9,
          format: _0x13a7f2.format || "m3u8",
          headers: {
            "User-Agent": "Mozilla/5.0"
          }
        };
      });
    }));
  }).catch(function () {
    return fetchCpasmal(_0x28db2b, _0x323841, _0x1ecab6, _0x5c2855, _0x486e8a, _0xbefe05).then(function (_0x2ce0ee) {
      return Promise.all(_0x2ce0ee.slice(0, 5).map(function (_0xb026ce) {
        return resolveEmbed(_0xb026ce.url, _0x323841).then(function (_0x40a8d9) {
          if (!_0x40a8d9) {
            return null;
          }
          return {
            name: "Movix - HD",
            title: buildTitle(_0x589061, "HD", _0xb026ce.lang, "m3u8", "", _0xb026ce.player, _0x486e8a, _0xbefe05, _0x487942),
            url: _0x40a8d9,
            quality: "HD",
            format: "m3u8",
            headers: {
              Referer: _0x323841
            }
          };
        });
      })).then(function (_0x28492e) {
        return _0x28492e.filter(function (_0x38d414) {
          return _0x38d414 !== null;
        });
      });
    });
  });
}
function getStreams(_0x474254, _0x271be2, _0x63a728, _0x2f9854) {
  return Promise.all([getTmdbMetadata(_0x474254, _0x271be2), _0x271be2 === "tv" ? getEpisodeInfo(_0x474254, _0x63a728, _0x2f9854) : Promise.resolve(null), detectApi()]).then(function (_0x534fbc) {
    var _0x2bd04b = _0x534fbc[0];
    var _0x146631 = _0x534fbc[1];
    var _0x2e5c64 = _0x534fbc[2];
    return tryFetchAll(_0x2e5c64.api, _0x2e5c64.referer, _0x474254, _0x271be2, _0x63a728, _0x2f9854, _0x2bd04b, _0x146631);
  }).catch(function () {
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