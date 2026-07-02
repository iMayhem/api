var TMDB_KEY = "d80ba92bc7cefe3359668d30d06f3305";
var BASE = "https://hdmovie2a.org/";
var CDN = "https://hdm2.ink";
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36";
function httpGet(_0x5ac110, _0x13d879) {
  return fetch(_0x5ac110, {
    headers: Object.assign({
      "User-Agent": UA
    }, _0x13d879 || {})
  }).then(function (_0x4dac8e) {
    if (!_0x4dac8e.ok) {
      throw new Error("HTTP " + _0x4dac8e.status);
    }
    return _0x4dac8e.text();
  });
}
function httpPost(_0x5cbf3d, _0x3c49c9, _0x21ac44) {
  return fetch(_0x5cbf3d, {
    method: "POST",
    headers: Object.assign({
      "User-Agent": UA,
      "Content-Type": "application/x-www-form-urlencoded"
    }, _0x21ac44 || {}),
    body: _0x3c49c9
  }).then(function (_0x12626a) {
    if (!_0x12626a.ok) {
      throw new Error("HTTP " + _0x12626a.status);
    }
    return _0x12626a.text();
  });
}
function cleanTitle(_0x496360) {
  return _0x496360.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
}
function searchSite(_0x5a11e8, _0x5330f9) {
  var _0x16f31a = BASE + "/?s=" + encodeURIComponent(_0x5a11e8);
  return httpGet(_0x16f31a, {
    Referer: BASE + "/"
  }).then(function (_0x48ecd1) {
    var _0x25a317 = [];
    var _0x95b978 = /<article[^>]*>([\s\S]*?)<\/article>/g;
    var _0x2a5302;
    while ((_0x2a5302 = _0x95b978.exec(_0x48ecd1)) !== null) {
      var _0x237c56 = _0x2a5302[1];
      var _0x5ed726 = _0x237c56.match(/href="(https:\/\/hdmovie2a\.org\/movies\/([^"\/]+)\/)"/);
      if (!_0x5ed726) {
        continue;
      }
      if (_0x5ed726[1].includes("/feed/")) {
        continue;
      }
      var _0x4b14cb = _0x237c56.match(/alt="([^"]+)"/);
      if (!_0x4b14cb) {
        continue;
      }
      var _0xec429a = _0x5ed726[1];
      var _0x469621 = _0x5ed726[2];
      var _0x2f85ca = _0x4b14cb[1].trim();
      var _0x4690b8 = _0x2f85ca.match(/\((\d{4})\)/);
      var _0x3f3918 = _0x4690b8 ? parseInt(_0x4690b8[1]) : null;
      var _0x12da5c = false;
      for (var _0x112c31 = 0; _0x112c31 < _0x25a317.length; _0x112c31++) {
        if (_0x25a317[_0x112c31].slug === _0x469621) {
          _0x12da5c = true;
          break;
        }
      }
      if (!_0x12da5c && _0x469621) {
        _0x25a317.push({
          url: _0xec429a,
          slug: _0x469621,
          title: _0x2f85ca,
          year: _0x3f3918
        });
      }
    }
    console.log("[HDMovie2] Raw: " + _0x25a317.length + " for: " + _0x5a11e8 + " (" + _0x5330f9 + ")");
    var _0x283254 = [];
    if (_0x5330f9) {
      _0x283254 = _0x25a317.filter(function (_0x3bbf72) {
        return _0x3bbf72.year && Math.abs(_0x3bbf72.year - _0x5330f9) <= 1;
      });
    }
    var _0x103c3d = _0x283254.length > 0 ? _0x283254 : _0x25a317;
    if (_0x103c3d.length === 0) {
      _0x103c3d = _0x25a317;
    }
    var _0x187259 = cleanTitle(_0x5a11e8);
    _0x103c3d.sort(function (_0x296d06, _0x25b4c2) {
      var _0x102409 = cleanTitle(_0x296d06.title);
      var _0x282ef7 = cleanTitle(_0x25b4c2.title);
      var _0x57a2a9 = _0x102409 === _0x187259 ? 0 : 1;
      var _0x336a4b = _0x282ef7 === _0x187259 ? 0 : 1;
      if (_0x57a2a9 !== _0x336a4b) {
        return _0x57a2a9 - _0x336a4b;
      }
      var _0x1ebaab = _0x102409.indexOf(_0x187259) === 0 ? 0 : 1;
      var _0x507371 = _0x282ef7.indexOf(_0x187259) === 0 ? 0 : 1;
      if (_0x1ebaab !== _0x507371) {
        return _0x1ebaab - _0x507371;
      }
      return _0x102409.length - _0x282ef7.length;
    });
    if (_0x103c3d.length > 0) {
      console.log("[HDMovie2] Best: " + _0x103c3d[0].title + " (" + _0x103c3d[0].year + ")");
    }
    return _0x103c3d;
  });
}
function getHdm2Stream(_0x3daf35) {
  return httpGet(_0x3daf35, {
    Referer: BASE + "/"
  }).then(function (_0x2a790a) {
    var _0xc3bf2 = _0x2a790a.match(/data-stream-url="([^"]+)"/);
    if (!_0xc3bf2) {
      console.log("[HDMovie2] No data-stream-url in hdm2 page");
      return null;
    }
    var _0xd9a895 = _0xc3bf2[1].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    var _0x23e382 = CDN + _0xd9a895;
    if (!_0x23e382.includes(".m3u8")) {
      _0x23e382 += "#index.m3u8";
    }
    console.log("[HDMovie2] hdm2 stream found!");
    return {
      url: _0x23e382,
      headers: {
        Referer: CDN + "/",
        Origin: CDN,
        "User-Agent": UA
      }
    };
  });
}
function getMolopStream(_0x3890d9) {
  return httpGet(_0x3890d9, {
    Referer: BASE + "/"
  }).then(function (_0xe02a68) {
    var _0x41c218 = _0xe02a68.match(/sniff\s*\(\s*["'][^"']+["']\s*,\s*["'][^"']+["']\s*,\s*["']([a-f0-9]+)["']/);
    if (!_0x41c218) {
      console.log("[HDMovie2] No sniff hash in molop page");
      return null;
    }
    var _0x10e419 = _0x41c218[SniffMatch.length - 1];
    var _0x3eada1 = "https://molop.art/m3u8/1/" + _0x10e419 + "/master.m3u8?s=1&cache=1";
    console.log("[HDMovie2] molop hash: " + _0x10e419);
    return {
      url: _0x3eada1,
      headers: {
        Referer: "https://molop.art/",
        Origin: "https://molop.art",
        "User-Agent": UA
      }
    };
  });
}
function tryGetStream(_0x41a0e5, _0x793184) {
  var _0xbf3cca = 1;
  var _0x5a2544 = 4;
  function _0x37b56e() {
    if (_0xbf3cca > _0x5a2544) {
      console.log("[HDMovie2] All servers exhausted");
      return Promise.resolve(null);
    }
    console.log("[HDMovie2] Trying server " + _0xbf3cca);
    return httpPost(BASE + "/wp-admin/admin-ajax.php", "action=doo_player_ajax&post=" + _0x41a0e5 + "&nume=" + _0xbf3cca + "&type=movie", {
      Referer: _0x793184
    }).then(function (_0x570464) {
      var _0x2fa9e4;
      try {
        _0x2fa9e4 = JSON.parse(_0x570464);
      } catch (_0x1a05d5) {
        return null;
      }
      var _0xb7d52d = _0x2fa9e4.embed_url || "";
      if (!_0xb7d52d) {
        console.log("[HDMovie2] Empty embed");
        return null;
      }
      var _0x291e84 = _0xb7d52d.replace(/\\\//g, "/");
      console.log("[HDMovie2] Server " + _0xbf3cca + ": " + _0x291e84.substring(0, 80));
      var _0x140ab2 = _0x291e84.match(/src="(https:\/\/hdm2\.ink\/play\?v=[^"]+)"/);
      if (_0x140ab2) {
        return getHdm2Stream(_0x140ab2[1]).then(function (_0x2c3410) {
          if (_0x2c3410) {
            return _0x2c3410;
          }
          _0xbf3cca++;
          return _0x37b56e();
        });
      }
      var _0x52b0ab = _0x291e84.match(/src="(https:\/\/molop\.art\/watch\?v=[^"]+)"/);
      if (_0x52b0ab) {
        return getMolopStream(_0x52b0ab[1]).then(function (_0x41962a) {
          if (_0x41962a) {
            return _0x41962a;
          }
          _0xbf3cca++;
          return _0x37b56e();
        });
      }
      if (_0x291e84.includes("prvs.top")) {
        console.log("[HDMovie2] Skipping AbyssCDN");
        _0xbf3cca++;
        return _0x37b56e();
      }
      if (_0x291e84.includes("ok.ru")) {
        console.log("[HDMovie2] Skipping ok.ru");
        _0xbf3cca++;
        return _0x37b56e();
      }
      console.log("[HDMovie2] Unknown server");
      _0xbf3cca++;
      return _0x37b56e();
    }).catch(function (_0x2b622f) {
      console.log("[HDMovie2] Server " + _0xbf3cca + " error: " + _0x2b622f.message);
      _0xbf3cca++;
      return _0x37b56e();
    });
  }
  return _0x37b56e();
}
function getStreamFromMoviePage(_0x2053b8) {
  return httpGet(_0x2053b8, {
    Referer: BASE + "/"
  }).then(function (_0x5e5b07) {
    var _0x1fdcb7 = _0x5e5b07.match(/postid-(\d+)/);
    if (!_0x1fdcb7) {
      console.log("[HDMovie2] No post ID");
      return null;
    }
    var _0x44a6d4 = _0x1fdcb7[1];
    console.log("[HDMovie2] Post ID: " + _0x44a6d4);
    return tryGetStream(_0x44a6d4, _0x2053b8);
  });
}
function getStreams(_0x29f3e0, _0x1c824e, _0x38056d, _0x8f567e) {
  return new Promise(function (_0x403b00) {
    var _0x2dc22c = _0x1c824e === "movie" ? "https://api.themoviedb.org/3/movie/" + _0x29f3e0 + "?api_key=" + TMDB_KEY : "https://api.themoviedb.org/3/tv/" + _0x29f3e0 + "?api_key=" + TMDB_KEY;
    console.log("[HDMovie2] Start: " + _0x29f3e0 + " " + _0x1c824e);
    fetch(_0x2dc22c).then(function (_0x23d6e7) {
      return _0x23d6e7.json();
    }).then(function (_0x4eedca) {
      var _0x155800 = _0x4eedca.title || _0x4eedca.name;
      if (!_0x155800) {
        throw new Error("No title");
      }
      var _0x1f4424 = _0x4eedca.release_date || _0x4eedca.first_air_date || "";
      var _0x45e91a = _0x1f4424 ? parseInt(_0x1f4424.split("-")[0]) : null;
      console.log("[HDMovie2] Title: " + _0x155800 + " Year: " + _0x45e91a);
      return searchSite(_0x155800, _0x45e91a);
    }).then(function (_0x1247d5) {
      if (!_0x1247d5 || _0x1247d5.length === 0) {
        console.log("[HDMovie2] Not found");
        _0x403b00([]);
        return null;
      }
      var _0x13a8af = _0x1247d5[0];
      console.log("[HDMovie2] Using: " + _0x13a8af.url);
      return getStreamFromMoviePage(_0x13a8af.url);
    }).then(function (_0x1cbdd9) {
      if (!_0x1cbdd9) {
        _0x403b00([]);
        return;
      }
      console.log("[HDMovie2] Resolving stream!");
      _0x403b00([{
        name: "🎬 HDMovie2",
        title: "Hindi Dubbed • HD",
        url: _0x1cbdd9.url,
        quality: "1080p",
        headers: _0x1cbdd9.headers || {
          Referer: CDN + "/",
          Origin: CDN,
          "User-Agent": UA
        }
      }]);
    }).catch(function (_0x516af3) {
      console.error("[HDMovie2] Error: " + _0x516af3.message);
      _0x403b00([]);
    });
  });
}
module.exports = {
  getStreams: getStreams
};