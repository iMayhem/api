var TMDB_KEY = "d80ba92bc7cefe3359668d30d06f3305";
var BASE = "https://watchanimeworld.net";
var PLAYER = "https://play.zephyrflick.top";
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
function httpGet(_0x4dd1ad, _0x12d8c2) {
  return fetch(_0x4dd1ad, {
    headers: Object.assign({
      "User-Agent": UA
    }, _0x12d8c2 || {})
  }).then(function (_0x4e8bbc) {
    if (!_0x4e8bbc.ok) {
      throw new Error("HTTP " + _0x4e8bbc.status);
    }
    return _0x4e8bbc.text();
  });
}
function httpPost(_0x2fd8fc, _0x2e768f, _0x3ebb46) {
  return fetch(_0x2fd8fc, {
    method: "POST",
    headers: Object.assign({
      "User-Agent": UA,
      "Content-Type": "application/x-www-form-urlencoded"
    }, _0x3ebb46 || {}),
    body: _0x2e768f
  }).then(function (_0x279e4c) {
    if (!_0x279e4c.ok) {
      throw new Error("HTTP " + _0x279e4c.status);
    }
    return _0x279e4c.json();
  });
}
function searchSite(_0x440768, _0x287a36) {
  var _0x2f4c24 = BASE + "/?s=" + encodeURIComponent(_0x440768);
  return httpGet(_0x2f4c24, {
    Referer: BASE + "/"
  }).then(function (_0x14e8ed) {
    var _0x3df02a = [];
    var _0x348335 = /href="(https:\/\/watchanimeworld\.net\/(series|movies)\/([^\/\"]+)\/)"/g;
    var _0x2eee89;
    while ((_0x2eee89 = _0x348335.exec(_0x14e8ed)) !== null) {
      var _0x282822 = _0x2eee89[1];
      var _0x39bd5d = _0x2eee89[2];
      var _0x486c63 = _0x2eee89[3];
      if (_0x486c63 && _0x486c63 !== "page") {
        _0x3df02a.push({
          url: _0x282822,
          type: _0x39bd5d,
          slug: _0x486c63
        });
      }
    }
    return _0x3df02a.filter(function (_0x4e8238) {
      if (_0x287a36 === "movie") {
        return _0x4e8238.type === "movies";
      } else {
        return _0x4e8238.type === "series";
      }
    });
  });
}
function getEpisodeUrl(_0x251373, _0x5d2023, _0x31ccd1) {
  return httpGet(_0x251373, {
    Referer: BASE + "/"
  }).then(function (_0x4bddf9) {
    var _0x1445ce = _0x4bddf9.match(/postid-(\d+)/) || _0x4bddf9.match(/data-post="(\d+)"/);
    if (!_0x1445ce) {
      return null;
    }
    var _0x29078a = BASE + "/wp-admin/admin-ajax.php?action=action_select_season&season=" + _0x5d2023 + "&post=" + _0x1445ce[1];
    return httpGet(_0x29078a, {
      Referer: _0x251373
    }).then(function (_0x89d2aa) {
      var _0x5a4ea0 = _0x5d2023 + "x" + _0x31ccd1 + "/";
      var _0x1bb854 = /href="(https:\/\/watchanimeworld\.net\/episode\/([^"]+))"/g;
      var _0x59c515;
      while ((_0x59c515 = _0x1bb854.exec(_0x89d2aa)) !== null) {
        if (_0x59c515[1].indexOf(_0x5a4ea0) !== -1) {
          return _0x59c515[1];
        }
      }
      return null;
    });
  });
}
function getStreamFromPage(_0x1fa3eb) {
  return httpGet(_0x1fa3eb, {
    Referer: BASE + "/"
  }).then(function (_0x4e0ac0) {
    var _0x577c37 = _0x4e0ac0.match(/(?:src|data-src)="(https:\/\/play\.zephyrflick\.top\/video\/([a-f0-9]+))"/);
    if (!_0x577c37) {
      return null;
    }
    var _0x31984c = _0x577c37[2];
    return httpPost(PLAYER + "/player/index.php?data=" + _0x31984c + "&do=getVideo", "hash=" + _0x31984c + "&r=" + encodeURIComponent(BASE + "/"), {
      Referer: BASE + "/",
      Origin: PLAYER,
      "X-Requested-With": "XMLHttpRequest"
    }).then(function (_0x14bda9) {
      var _0x4faccf = _0x14bda9.videoSource || _0x14bda9.securedLink;
      if (!_0x4faccf) {
        return null;
      }
      var _0x1705c6 = _0x4faccf.match(/\/cdn\/hls\/([a-f0-9]+)\//);
      var _0x49751f = _0x1705c6 ? _0x1705c6[1] : _0x31984c;
      var _0x25d23f = PLAYER + "/cdn/down/" + _0x49751f + "/Subtitle/subtitle_eng.srt";
      return {
        url: _0x4faccf,
        subtitle: _0x25d23f
      };
    });
  });
}
function getStreams(_0x387a61, _0x59d3a5, _0x260966, _0x5edfe9) {
  return new Promise(function (_0x2eb541) {
    var _0x41d5e2 = "https://api.themoviedb.org/3/" + (_0x59d3a5 === "movie" ? "movie" : "tv") + "/" + _0x387a61 + "?api_key=" + TMDB_KEY;
    fetch(_0x41d5e2).then(function (_0x3431ee) {
      return _0x3431ee.json();
    }).then(function (_0x22daaf) {
      var _0x476963 = _0x22daaf.title || _0x22daaf.name;
      return searchSite(_0x476963, _0x59d3a5);
    }).then(function (_0x41f25f) {
      if (!_0x41f25f || _0x41f25f.length === 0) {
        _0x2eb541([]);
        return null;
      }
      var _0x157ad3 = _0x41f25f[0].url;
      if (_0x59d3a5 === "movie") {
        return getStreamFromPage(_0x157ad3);
      }
      return getEpisodeUrl(_0x157ad3, _0x260966, _0x5edfe9).then(function (_0x413746) {
        if (_0x413746) {
          return getStreamFromPage(_0x413746);
        } else {
          return null;
        }
      });
    }).then(function (_0x231866) {
      if (!_0x231866) {
        _0x2eb541([]);
        return;
      }
      _0x2eb541([{
        name: "🗡️ AnimeWorld",
        title: "AnimeWorld • Multi-Audio 1080p",
        url: _0x231866.url,
        quality: "1080p",
        headers: {
          Referer: PLAYER + "/",
          Origin: PLAYER,
          "User-Agent": UA,
          Connection: "keep-alive"
        },
        subtitles: _0x231866.subtitle ? [{
          url: _0x231866.subtitle,
          lang: "en",
          name: "English"
        }] : []
      }]);
    }).catch(function () {
      _0x2eb541([]);
    });
  });
}
module.exports = {
  getStreams: getStreams
};