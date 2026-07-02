function getJson(_0x3d5926, _0x30f279) {
  return fetch(_0x3d5926, _0x30f279 || {}).then(function (_0x39b413) {
    if (!_0x39b413 || !_0x39b413.ok) {
      throw new Error("Request failed: " + _0x3d5926);
    }
    return _0x39b413.json();
  });
}
function getText(_0x2b4e28, _0x3690a4) {
  return fetch(_0x2b4e28, _0x3690a4 || {}).then(function (_0x6812ab) {
    if (!_0x6812ab || !_0x6812ab.ok) {
      throw new Error("Request failed: " + _0x2b4e28);
    }
    return _0x6812ab.text();
  });
}
function normalizeQuality(_0x4464dc) {
  var _0x48cf33 = (_0x4464dc || "").toString();
  var _0x2c2327 = _0x48cf33.match(/(2160p|1440p|1080p|720p|480p|360p|4K)/i);
  if (_0x2c2327) {
    return _0x2c2327[1].toUpperCase();
  } else {
    return "Auto";
  }
}
function streamObject(_0x5a61c6, _0x52a286, _0x4092d1, _0x180bfd, _0x3953de) {
  if (!_0x4092d1 || typeof _0x4092d1 !== "string") {
    return null;
  }
  return {
    name: _0x5a61c6,
    title: _0x52a286 || _0x5a61c6,
    url: _0x4092d1,
    quality: _0x180bfd || "Auto",
    headers: _0x3953de || undefined
  };
}
function dedupeStreams(_0x4d8e44) {
  var _0x4ea2a3 = {};
  return (_0x4d8e44 || []).filter(function (_0x3334c9) {
    if (!_0x3334c9 || !_0x3334c9.url) {
      return false;
    }
    if (_0x4ea2a3[_0x3334c9.url]) {
      return false;
    }
    _0x4ea2a3[_0x3334c9.url] = true;
    return true;
  });
}
function getTmdbMeta(_0x240796, _0x42842f) {
  var _0x5354fa = _0x42842f === "tv" ? "tv" : "movie";
  var _0x195506 = "https://api.themoviedb.org/3/" + _0x5354fa + "/" + _0x240796 + "?append_to_response=external_ids&api_key=ad301b7cc82ffe19273e55e4d4206885";
  return getJson(_0x195506);
}
function resolveVidEasy(_0x54eb6b, _0x2fefd1, _0xf40028, _0x50fbb0) {
  var _0x1771df = _0x2fefd1 === "tv" ? "tv" : "movie";
  var _0x554a72 = "https://db.videasy.to/3/" + _0x1771df + "/" + _0x54eb6b + "?append_to_response=external_ids&language=en&api_key=ad301b7cc82ffe19273e55e4d4206885";
  return getJson(_0x554a72).then(function (_0x2437f6) {
    var _0x44aacc = _0x2fefd1 === "tv";
    var _0x5d424d = encodeURIComponent((_0x44aacc ? _0x2437f6.name : _0x2437f6.title) || "");
    var _0xdb50be = _0x44aacc ? _0x2437f6.first_air_date : _0x2437f6.release_date;
    var _0x222751 = _0xdb50be ? new Date(_0xdb50be).getFullYear() : "";
    var _0x1b1dba = _0x2437f6.external_ids && _0x2437f6.external_ids.imdb_id || "";
    var _0x39c73e = "https://api.videasy.to/cdn/sources-with-title?title=" + _0x5d424d + "&mediaType=" + (_0x44aacc ? "tv" : "movie") + "&year=" + _0x222751 + "&episodeId=" + (_0x44aacc ? _0x50fbb0 || 1 : 1) + "&seasonId=" + (_0x44aacc ? _0xf40028 || 1 : 1) + "&tmdbId=" + _0x2437f6.id + "&imdbId=" + _0x1b1dba;
    return getText(_0x39c73e).then(function (_0x35abbf) {
      var _0x1be294 = JSON.stringify({
        text: _0x35abbf,
        id: String(_0x54eb6b)
      });
      return getJson("https://enc-dec.app/api/dec-videasy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: _0x1be294
      });
    });
  }).then(function (_0xe22198) {
    var _0x47e593 = _0xe22198 && _0xe22198.result || {};
    var _0x39e246 = Array.isArray(_0x47e593.sources) ? _0x47e593.sources : [];
    return _0x39e246.filter(function (_0x1fe5c4) {
      return _0x1fe5c4 && _0x1fe5c4.url && !(_0x1fe5c4.quality || "").toUpperCase().includes("HDR");
    }).map(function (_0x21bef1) {
      return streamObject("VidEasy", "VidEasy " + (_0x21bef1.quality || "Auto"), _0x21bef1.url, normalizeQuality(_0x21bef1.quality), {
        Origin: "https://player.videasy.to",
        Referer: "https://player.videasy.to/"
      });
    }).filter(Boolean);
  }).catch(function () {
    return [];
  });
}
function resolveVidLink(_0x1b416a, _0x18c131, _0x2c595b, _0x143168) {
  return getJson("https://enc-dec.app/api/enc-vidlink?text=" + encodeURIComponent(String(_0x1b416a))).then(function (_0x182cff) {
    var _0x18ee81 = _0x182cff && _0x182cff.result;
    if (!_0x18ee81) {
      return [];
    }
    var _0x417aa3 = _0x18c131 === "tv" ? "https://vidlink.pro/api/b/tv/" + _0x18ee81 + "/" + (_0x2c595b || 1) + "/" + (_0x143168 || 1) + "?multiLang=0" : "https://vidlink.pro/api/b/movie/" + _0x18ee81 + "?multiLang=0";
    return getJson(_0x417aa3).then(function (_0x4885d9) {
      var _0x67b57b = _0x4885d9 && _0x4885d9.stream && _0x4885d9.stream.playlist;
      var _0x141b07 = streamObject("VidLink", "VidLink Primary", _0x67b57b, "Auto", {
        Referer: "https://vidlink.pro"
      });
      if (_0x141b07) {
        return [_0x141b07];
      } else {
        return [];
      }
    });
  }).catch(function () {
    return [];
  });
}
function resolveVidmody(_0xc27673, _0x197d2c, _0x571688, _0x2d113c) {
  return getTmdbMeta(_0xc27673, _0x197d2c).then(function (_0x4fe7f8) {
    var _0x20d615 = _0x197d2c === "tv" ? _0x4fe7f8.external_ids && _0x4fe7f8.external_ids.imdb_id : _0x4fe7f8.imdb_id;
    if (!_0x20d615) {
      return [];
    }
    var _0x17205c = "";
    var _0xde4802 = (_0x197d2c === "tv" ? _0x4fe7f8.name : _0x4fe7f8.title) || "Vidmody";
    if (_0x197d2c === "movie") {
      _0x17205c = "https://vidmody.com/vs/" + _0x20d615 + "#.m3u8";
    } else {
      var _0x55d75a = "s" + (_0x571688 || 1);
      var _0x13b8c3 = _0x2d113c || 1;
      var _0x4cc885 = "e" + (_0x13b8c3 < 10 ? "0" + _0x13b8c3 : _0x13b8c3);
      _0x17205c = "https://vidmody.com/vs/" + _0x20d615 + "/" + _0x55d75a + "/" + _0x4cc885 + "#.m3u8";
      _0xde4802 += " - " + _0x55d75a.toUpperCase() + _0x4cc885.toUpperCase();
    }
    return fetch(_0x17205c.replace("#.m3u8", ""), {
      method: "HEAD"
    }).then(function (_0x6100c3) {
      if (_0x6100c3.status === 200) {
        return [streamObject("Vidmody", _0xde4802 + " (Vidmody)", _0x17205c, "Auto", {
          Referer: "https://vidmody.com/",
          "User-Agent": "Mozilla/5.0"
        })];
      }
      return [];
    });
  }).catch(function () {
    return [];
  });
}
function resolveVidSrc(_0x44f9d1, _0x3dee28, _0x1d422d, _0x3d0ee9) {
  return getTmdbMeta(_0x44f9d1, _0x3dee28).then(function (_0x2378b6) {
    var _0x541026 = _0x3dee28 === "tv" ? _0x2378b6.external_ids && _0x2378b6.external_ids.imdb_id : _0x2378b6.imdb_id;
    if (!_0x541026) {
      return [];
    }
    var _0x24b401 = _0x3dee28 === "tv" ? "https://vsembed.su/embed/tv?imdb=" + _0x541026 + "&season=" + (_0x1d422d || 1) + "&episode=" + (_0x3d0ee9 || 1) : "https://vsembed.su/embed/" + _0x541026;
    return getText(_0x24b401).then(function (_0x46666b) {
      var _0x36f3d4 = _0x46666b.match(/<iframe[^>]+src=["']([^"']+)["']/i);
      var _0xf30c0b = _0x36f3d4 ? _0x36f3d4[1] : "";
      if (!_0xf30c0b) {
        return [];
      }
      return getText("https:" + _0xf30c0b, {
        headers: {
          referer: "https://vsrc.su/"
        }
      }).then(function (_0x2fe298) {
        var _0x14dfd6 = _0x2fe298.match(/src:\s*['"]([^'"]+)['"]/i);
        var _0x169b4d = _0x14dfd6 ? _0x14dfd6[1] : "";
        if (!_0x169b4d) {
          return [];
        }
        return getText("https://cloudorchestranova.com" + _0x169b4d, {
          headers: {
            referer: "https://cloudorchestranova.com/"
          }
        }).then(function (_0x41400a) {
          var _0x2b637d = _0x41400a.match(/<div id="([^"]+)"[^>]*style=["']display\s*:\s*none;?["'][^>]*>([a-zA-Z0-9:\/.,{}\-_=+ ]+)<\/div>/i);
          var _0x394b36 = _0x2b637d ? _0x2b637d[1] : "";
          var _0x4a45c2 = _0x2b637d ? _0x2b637d[2] : "";
          if (!_0x394b36 || !_0x4a45c2) {
            return [];
          }
          return getJson("https://enc-dec.app/api/dec-cloudnestra", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              text: _0x4a45c2,
              div_id: _0x394b36
            })
          }).then(function (_0x2288fc) {
            var _0x5aaf00 = _0x2288fc && _0x2288fc.result || [];
            if (!Array.isArray(_0x5aaf00)) {
              return [];
            }
            return _0x5aaf00.map(function (_0xf090b6, _0x5d8790) {
              return streamObject("VidSrc", "VidSrc Server " + (_0x5d8790 + 1), _0xf090b6, "Auto", {
                referer: "https://cloudorchestranova.com/",
                origin: "https://cloudorchestranova.com"
              });
            }).filter(Boolean);
          });
        });
      });
    });
  }).catch(function () {
    return [];
  });
}
function getStreams(_0x25e1c5, _0x2422ac, _0x577cea, _0x19f805) {
  var _0x55fe9d = [resolveVidEasy, resolveVidLink, resolveVidmody, resolveVidSrc];
  return Promise.all(_0x55fe9d.map(function (_0x1cd312) {
    return _0x1cd312(_0x25e1c5, _0x2422ac, _0x577cea, _0x19f805).catch(function () {
      return [];
    });
  })).then(function (_0x5f46bc) {
    var _0x580163 = [];
    _0x5f46bc.forEach(function (_0x29960f) {
      if (Array.isArray(_0x29960f)) {
        _0x580163 = _0x580163.concat(_0x29960f);
      }
    });
    return dedupeStreams(_0x580163).slice(0, 50);
  }).catch(function () {
    return [];
  });
}
module.exports = {
  getStreams: getStreams
};