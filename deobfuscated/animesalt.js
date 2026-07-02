var TMDB_KEY = "d80ba92bc7cefe3359668d30d06f3305";
var BASE = "https://animesalt.ac";
var CDN = "https://as-cdn21.top";
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36";
function httpGet(_0x39f343, _0x32b163) {
  return fetch(_0x39f343, {
    headers: Object.assign({
      "User-Agent": UA
    }, _0x32b163 || {})
  }).then(function (_0x25babb) {
    if (!_0x25babb.ok) {
      throw new Error("HTTP " + _0x25babb.status);
    }
    return _0x25babb.text();
  });
}
function httpPost(_0x4a02a1, _0x299093, _0x3871d3) {
  return fetch(_0x4a02a1, {
    method: "POST",
    headers: Object.assign({
      "User-Agent": UA,
      "Content-Type": "application/x-www-form-urlencoded"
    }, _0x3871d3 || {}),
    body: _0x299093
  }).then(function (_0x49d514) {
    if (!_0x49d514.ok) {
      throw new Error("HTTP " + _0x49d514.status);
    }
    return _0x49d514.json();
  });
}
function cleanTitle(_0x1820b7) {
  return _0x1820b7.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
}
function searchSite(_0x29bee3, _0x531a8c, _0x1bbd9c) {
  var _0xfc92a = BASE + "/?s=" + encodeURIComponent(_0x29bee3);
  return httpGet(_0xfc92a, {
    Referer: BASE + "/"
  }).then(function (_0x48ddcd) {
    var _0x570b7b = [];
    var _0x4849ad = _0x48ddcd.match(/id="movies-a"([\s\S]*?)(?=<footer|id="footer|class="footer)/m);
    var _0x258fe5 = _0x4849ad ? _0x4849ad[1] : _0x48ddcd;
    var _0x8cb95a = /<article[^>]*>([\s\S]*?)<\/article>/g;
    var _0x157bb5;
    while ((_0x157bb5 = _0x8cb95a.exec(_0x258fe5)) !== null) {
      var _0x1aa24f = _0x157bb5[1];
      var _0x21e9e4 = _0x1aa24f.match(/href="(https:\/\/animesalt\.ac\/(series|movies)\/([^\/\"]+)\/?)\"/);
      var _0x1004a4 = _0x1aa24f.match(/class="entry-title"[^>]*>([^<]+)</);
      var _0x491d22 = _0x1aa24f.match(/class="year"[^>]*>(\d{4})</);
      if (_0x21e9e4 && _0x1004a4) {
        var _0x1a8c9b = _0x21e9e4[3];
        var _0x2617c9 = _0x21e9e4[2];
        var _0x344685 = _0x1004a4[1].trim();
        var _0x5a3de7 = _0x491d22 ? parseInt(_0x491d22[1]) : null;
        var _0x324788 = false;
        for (var _0x344276 = 0; _0x344276 < _0x570b7b.length; _0x344276++) {
          if (_0x570b7b[_0x344276].slug === _0x1a8c9b) {
            _0x324788 = true;
            break;
          }
        }
        if (!_0x324788 && _0x1a8c9b && _0x1a8c9b !== "page") {
          _0x570b7b.push({
            url: _0x21e9e4[1],
            type: _0x2617c9,
            slug: _0x1a8c9b,
            title: _0x344685,
            year: _0x5a3de7
          });
        }
      }
    }
    console.log("[AnimeSalt] Raw: " + _0x570b7b.length + " for: " + _0x29bee3 + " (" + _0x1bbd9c + ")");
    var _0x1491c7 = _0x570b7b;
    if (_0x531a8c === "movie") {
      var _0x3a326b = _0x570b7b.filter(function (_0x48c52d) {
        return _0x48c52d.type === "movies";
      });
      if (_0x3a326b.length > 0) {
        _0x1491c7 = _0x3a326b;
      }
    } else {
      var _0x4e7021 = _0x570b7b.filter(function (_0x365e68) {
        return _0x365e68.type === "series";
      });
      if (_0x4e7021.length > 0) {
        _0x1491c7 = _0x4e7021;
      }
    }
    var _0x2b5bb4 = [];
    var _0x245824 = [];
    if (_0x1bbd9c) {
      _0x2b5bb4 = _0x1491c7.filter(function (_0x30bb3c) {
        return _0x30bb3c.year && Math.abs(_0x30bb3c.year - _0x1bbd9c) <= 1;
      });
      _0x245824 = _0x1491c7.filter(function (_0x1629cc) {
        return !_0x1629cc.year;
      });
    }
    var _0xb58d22 = _0x2b5bb4.length > 0 ? _0x2b5bb4 : _0x1bbd9c ? _0x245824 : _0x1491c7;
    if (_0xb58d22.length === 0) {
      _0xb58d22 = _0x1491c7;
    }
    var _0x5ac695 = cleanTitle(_0x29bee3);
    _0xb58d22.sort(function (_0x5921e5, _0x28ab12) {
      var _0x16b07a = cleanTitle(_0x5921e5.title);
      var _0x33899f = cleanTitle(_0x28ab12.title);
      var _0x18e8c3 = _0x16b07a === _0x5ac695 ? 0 : 1;
      var _0x5753db = _0x33899f === _0x5ac695 ? 0 : 1;
      if (_0x18e8c3 !== _0x5753db) {
        return _0x18e8c3 - _0x5753db;
      }
      var _0x590cb4 = _0x16b07a.indexOf(_0x5ac695) === 0 ? 0 : 1;
      var _0x3aa6a3 = _0x33899f.indexOf(_0x5ac695) === 0 ? 0 : 1;
      if (_0x590cb4 !== _0x3aa6a3) {
        return _0x590cb4 - _0x3aa6a3;
      }
      return _0x16b07a.length - _0x33899f.length;
    });
    if (_0xb58d22.length > 0) {
      console.log("[AnimeSalt] Best: " + _0xb58d22[0].title + " (" + _0xb58d22[0].year + ")");
    }
    return _0xb58d22;
  });
}
function getEpisodeUrl(_0x2ee78f, _0x3882e2, _0x2ad633) {
  return httpGet(_0x2ee78f, {
    Referer: BASE + "/"
  }).then(function (_0x26a799) {
    var _0x4f0929 = [];
    var _0x11cac8 = /data-post="(\d+)"\s+data-season="(\d+)"/g;
    var _0x5367a4;
    while ((_0x5367a4 = _0x11cac8.exec(_0x26a799)) !== null) {
      _0x4f0929.push({
        post: _0x5367a4[1],
        season: parseInt(_0x5367a4[2])
      });
    }
    if (_0x4f0929.length === 0) {
      return getEpisodeUrlFromHtml(_0x26a799, _0x3882e2, _0x2ad633);
    }
    var _0x5e4e7d = null;
    for (var _0x3b1911 = 0; _0x3b1911 < _0x4f0929.length; _0x3b1911++) {
      if (_0x4f0929[_0x3b1911].season === parseInt(_0x3882e2)) {
        _0x5e4e7d = _0x4f0929[_0x3b1911];
        break;
      }
    }
    if (!_0x5e4e7d) {
      return null;
    }
    var _0xfb1533 = BASE + "/wp-admin/admin-ajax.php?action=action_select_season&season=" + _0x3882e2 + "&post=" + _0x5e4e7d.post;
    return httpGet(_0xfb1533, {
      Referer: _0x2ee78f
    }).then(function (_0x4ad9bb) {
      return getEpisodeUrlFromHtml(_0x4ad9bb, _0x3882e2, _0x2ad633);
    });
  });
}
function getEpisodeUrlFromHtml(_0x4a5f89, _0xc0da63, _0x5912b5) {
  var _0x118fb1 = new RegExp("href=\"(https://animesalt\\.ac/episode/[^\"]*" + _0xc0da63 + "x" + _0x5912b5 + "[^\"]*)\"");
  var _0x4c25e6 = _0x4a5f89.match(_0x118fb1);
  if (_0x4c25e6) {
    return _0x4c25e6[1];
  }
  return null;
}
function getStreamFromPage(_0x25488e) {
  return httpGet(_0x25488e, {
    Referer: BASE + "/"
  }).then(function (_0x3dd519) {
    var _0x681dbf = _0x3dd519.match(/src="(https:\/\/as-cdn\d+\.top\/video\/([a-f0-9]+))"/);
    if (!_0x681dbf) {
      console.log("[AnimeSalt] No player on: " + _0x25488e);
      return null;
    }
    var _0x38c961 = _0x681dbf[1];
    var _0x4c67de = _0x681dbf[2];
    var _0x2a42c4 = _0x38c961.split("/video/")[0];
    console.log("[AnimeSalt] Hash: " + _0x4c67de);
    return httpPost(_0x2a42c4 + "/player/index.php?data=" + _0x4c67de + "&do=getVideo", "hash=" + _0x4c67de + "&r=" + encodeURIComponent(BASE + "/"), {
      Referer: BASE + "/",
      Origin: _0x2a42c4,
      "X-Requested-With": "XMLHttpRequest"
    }).then(function (_0x36c6bb) {
      var _0x10c352 = _0x36c6bb.videoSource || _0x36c6bb.securedLink;
      if (!_0x10c352) {
        return null;
      }
      var _0x1db6c6 = _0x10c352.match(/\/hls\/([a-f0-9]+)\//);
      var _0x44a7b6 = _0x1db6c6 ? _0x1db6c6[1] : _0x4c67de;
      var _0x713a36 = _0x10c352.split("/cdn/hls/")[0];
      var _0x519d10 = _0x713a36 + "/cdn/down/" + _0x44a7b6 + "/Subtitle/subtitle_eng.srt";
      console.log("[AnimeSalt] Stream found!");
      return {
        url: _0x10c352,
        subtitle: _0x519d10,
        cdnBase: _0x713a36
      };
    });
  });
}
function getStreams(_0x43e975, _0x44d28e, _0x393c01, _0x8724db) {
  return new Promise(function (_0x2605eb) {
    var _0x25ed43 = _0x44d28e === "movie" ? "https://api.themoviedb.org/3/movie/" + _0x43e975 + "?api_key=" + TMDB_KEY : "https://api.themoviedb.org/3/tv/" + _0x43e975 + "?api_key=" + TMDB_KEY;
    console.log("[AnimeSalt] Start: " + _0x43e975 + " " + _0x44d28e + " S" + _0x393c01 + "E" + _0x8724db);
    fetch(_0x25ed43).then(function (_0x4dc3f5) {
      return _0x4dc3f5.json();
    }).then(function (_0x267710) {
      var _0x1c37e8 = _0x267710.title || _0x267710.name;
      if (!_0x1c37e8) {
        throw new Error("No title");
      }
      var _0x27ac94 = _0x267710.release_date || _0x267710.first_air_date || "";
      var _0x54bb62 = _0x27ac94 ? parseInt(_0x27ac94.split("-")[0]) : null;
      console.log("[AnimeSalt] Title: " + _0x1c37e8 + " Year: " + _0x54bb62);
      return searchSite(_0x1c37e8, _0x44d28e, _0x54bb62);
    }).then(function (_0x1e6c3f) {
      if (!_0x1e6c3f || _0x1e6c3f.length === 0) {
        _0x2605eb([]);
        return null;
      }
      var _0x20116f = _0x1e6c3f[0];
      console.log("[AnimeSalt] Using: " + _0x20116f.url);
      if (_0x44d28e === "movie") {
        return getStreamFromPage(_0x20116f.url);
      }
      return getEpisodeUrl(_0x20116f.url, _0x393c01, _0x8724db).then(function (_0x26f0c2) {
        if (!_0x26f0c2) {
          return null;
        }
        return getStreamFromPage(_0x26f0c2);
      });
    }).then(function (_0x4bfd6d) {
      if (!_0x4bfd6d) {
        _0x2605eb([]);
        return;
      }
      var _0xebc5df = _0x4bfd6d.cdnBase || CDN;
      _0x2605eb([{
        name: "🧂 AnimeSalt",
        title: "AnimeSalt • Multi-Audio",
        url: _0x4bfd6d.url,
        quality: "720p",
        headers: {
          Referer: _0xebc5df + "/",
          Origin: _0xebc5df,
          "User-Agent": UA
        },
        subtitles: _0x4bfd6d.subtitle ? [{
          url: _0x4bfd6d.subtitle,
          lang: "en",
          name: "English"
        }] : []
      }]);
    }).catch(function (_0x3688ba) {
      console.error("[AnimeSalt] Error: " + _0x3688ba.message);
      _0x2605eb([]);
    });
  });
}
module.exports = {
  getStreams: getStreams
};