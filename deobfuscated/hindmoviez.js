var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x164ff6, _0x400d1c, _0x4eab7e) => _0x400d1c in _0x164ff6 ? __defProp(_0x164ff6, _0x400d1c, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x4eab7e
}) : _0x164ff6[_0x400d1c] = _0x4eab7e;
var __spreadValues = (_0x20e2b6, _0x11ae31) => {
  for (var _0x45d7ca in _0x11ae31 ||= {}) {
    if (__hasOwnProp.call(_0x11ae31, _0x45d7ca)) {
      __defNormalProp(_0x20e2b6, _0x45d7ca, _0x11ae31[_0x45d7ca]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x45d7ca of __getOwnPropSymbols(_0x11ae31)) {
      if (__propIsEnum.call(_0x11ae31, _0x45d7ca)) {
        __defNormalProp(_0x20e2b6, _0x45d7ca, _0x11ae31[_0x45d7ca]);
      }
    }
  }
  return _0x20e2b6;
};
var __spreadProps = (_0x27cca9, _0xe44676) => __defProps(_0x27cca9, __getOwnPropDescs(_0xe44676));
var __async = (_0x325594, _0x3b9811, _0x1dde25) => {
  return new Promise((_0x1eecca, _0x18e90d) => {
    var _0x3990fc = _0x58b1a5 => {
      try {
        _0x3a9cd0(_0x1dde25.next(_0x58b1a5));
      } catch (_0x3d4034) {
        _0x18e90d(_0x3d4034);
      }
    };
    var _0x46c0ea = _0x16a55b => {
      try {
        _0x3a9cd0(_0x1dde25.throw(_0x16a55b));
      } catch (_0x1e1f08) {
        _0x18e90d(_0x1e1f08);
      }
    };
    var _0x3a9cd0 = _0x2849ee => _0x2849ee.done ? _0x1eecca(_0x2849ee.value) : Promise.resolve(_0x2849ee.value).then(_0x3990fc, _0x46c0ea);
    _0x3a9cd0((_0x1dde25 = _0x1dde25.apply(_0x325594, _0x3b9811)).next());
  });
};
var PROVIDER_NAME = "🔵 HindMovie";
var BASE_URL = "https://hindmovie.icu";
var TMDB_KEY = "439c478a771f35c05022f9feabcca01c";
var MOBILE_UAS = ["Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"];
function getHeaders(_0x17dc9c) {
  var _0x8a9dff = MOBILE_UAS[Math.floor(Math.random() * MOBILE_UAS.length)];
  var _0x1b11cd = {
    "User-Agent": _0x8a9dff,
    "Accept-Language": "en-US,en;q=0.9",
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
  };
  if (_0x17dc9c) {
    for (var _0x4bef79 in _0x17dc9c) {
      _0x1b11cd[_0x4bef79] = _0x17dc9c[_0x4bef79];
    }
  }
  return _0x1b11cd;
}
function log(_0x52e5e3) {
  console.log("[" + PROVIDER_NAME + "] " + _0x52e5e3);
}
function err(_0x901757) {
  console.error("[" + PROVIDER_NAME + "] " + _0x901757);
}
function fetchText(_0x4ab964, _0x43c38b, _0x3d0c7f) {
  return __async(this, null, function* () {
    _0x3d0c7f = _0x3d0c7f || 12000;
    try {
      var _0x242a92 = null;
      if (typeof AbortSignal !== "undefined" && AbortSignal.timeout) {
        _0x242a92 = AbortSignal.timeout(_0x3d0c7f);
      }
      var _0x2a38c6 = getHeaders(null);
      if (_0x43c38b && _0x43c38b.headers) {
        for (var _0x4e2c4e in _0x43c38b.headers) {
          _0x2a38c6[_0x4e2c4e] = _0x43c38b.headers[_0x4e2c4e];
        }
      }
      var _0x41ca05 = __spreadProps(__spreadValues({}, _0x43c38b || {}), {
        headers: _0x2a38c6
      });
      if (_0x242a92) {
        _0x41ca05.signal = _0x242a92;
      }
      var _0x279be8 = fetch(_0x4ab964, _0x41ca05);
      var _0x44f48e = new Promise(function (_0x1db8ce, _0x58b1f3) {
        setTimeout(function () {
          _0x58b1f3(new Error("Timeout " + _0x3d0c7f + "ms"));
        }, _0x3d0c7f);
      });
      var _0x28b597 = yield Promise.race([_0x279be8, _0x44f48e]);
      if (_0x28b597.ok) {
        return yield _0x28b597.text();
      }
      return null;
    } catch (_0x3a7e3c) {
      err("fetch: " + _0x4ab964.substring(0, 80) + " -> " + (_0x3a7e3c.message || ""));
      return null;
    }
  });
}
function fetchJson(_0x381c21, _0x1843b6, _0x1da68b) {
  return __async(this, null, function* () {
    var _0xe59798 = yield fetchText(_0x381c21, _0x1843b6, _0x1da68b);
    if (!_0xe59798) {
      return null;
    }
    try {
      return JSON.parse(_0xe59798);
    } catch (_0x20f27c) {
      return null;
    }
  });
}
function getMedia(_0x1473c7, _0x303d3b) {
  return __async(this, null, function* () {
    var _0x2e0bc1 = String(_0x1473c7 || "").trim();
    var _0xc06e8 = _0x2e0bc1.indexOf("tt") === 0;
    var _0x51ce2a = _0x303d3b === "tv" || _0x303d3b === "series" ? "tv" : "movie";
    try {
      if (_0xc06e8) {
        var _0x45aa6e = yield fetchJson("https://api.themoviedb.org/3/find/" + _0x2e0bc1 + "?api_key=" + TMDB_KEY + "&external_source=imdb_id", {}, 10000);
        var _0x2753a4 = _0x45aa6e ? _0x51ce2a === "tv" ? _0x45aa6e.tv_results : _0x45aa6e.movie_results : null;
        if (_0x2753a4 && _0x2753a4.length > 0) {
          var _0x2b252f = _0x2753a4[0];
          return {
            title: _0x51ce2a === "tv" ? _0x2b252f.name : _0x2b252f.title,
            year: (_0x2b252f.first_air_date || _0x2b252f.release_date || "").split("-")[0],
            imdb: _0x2e0bc1,
            runtime: _0x2b252f.runtime || null,
            episode_run_time: _0x2b252f.episode_run_time || null
          };
        }
      } else {
        var _0x45aa6e = yield fetchJson("https://api.themoviedb.org/3/" + _0x51ce2a + "/" + _0x2e0bc1 + "?api_key=" + TMDB_KEY + "&append_to_response=external_ids", {}, 10000);
        if (_0x45aa6e) {
          return {
            title: _0x51ce2a === "tv" ? _0x45aa6e.name : _0x45aa6e.title,
            year: (_0x45aa6e.first_air_date || _0x45aa6e.release_date || "").split("-")[0],
            imdb: _0x45aa6e.imdb_id || _0x45aa6e.external_ids && _0x45aa6e.external_ids.imdb_id || null,
            runtime: _0x45aa6e.runtime || null,
            episode_run_time: _0x45aa6e.episode_run_time || null
          };
        }
      }
    } catch (_0x1b624c) {
      err("tmdb: " + _0x1b624c.message);
    }
    return {
      title: _0x2e0bc1,
      year: null,
      imdb: null,
      runtime: null,
      episode_run_time: null
    };
  });
}
function parseQuality(_0xce6189) {
  var _0x2d8f3e = String(_0xce6189 || "");
  var _0xeb86ff = _0x2d8f3e.match(/(2160|1080|720|480)\s*P/i);
  if (_0xeb86ff) {
    return _0xeb86ff[1] + "p";
  }
  if (/4K|UHD/i.test(_0x2d8f3e)) {
    return "2160p";
  }
  if (/1440|2K/i.test(_0x2d8f3e)) {
    return "1440p";
  }
  return "HD";
}
function decodeEntities(_0x1e00da) {
  return String(_0x1e00da).replace(/&#8211;/g, "-").replace(/&#8212;/g, "-").replace(/&#8216;/g, "'").replace(/&#8217;/g, "'").replace(/&#8220;/g, "\"").replace(/&#8221;/g, "\"").replace(/&#038;/g, "&").replace(/&amp;/g, "&").replace(/&#(\d+);/g, function (_0x203363, _0x387cc7) {
    return String.fromCharCode(_0x387cc7);
  });
}
function getCleanTitle(_0x202e18) {
  return decodeEntities(_0x202e18).toLowerCase().replace(/download/g, "").replace(/\b(dual audio|multi audio|hindi|english|tamil|telugu|malayalam|korean|japanese|chinese|spanish|french|italian|german)\b/g, "").replace(/\b(480p|720p|1080p|2160p|4k|2k|hd|fhd|uhd)\b/g, "").replace(/\b(web-?dl|web-?dlrip|web-?rip|brrip|bdrip|bluray|blu-?ray|hdtv|tvrip|dvdrip|camrip|hdrip)\b/g, "").replace(/\b(x264|x265|hevc|10bit|12bit|aac|ac3|dd5\.1|ddp5\.1|atmos|dts)\b/g, "").replace(/\b(season|saison|staffel)\s*\d+(?:\s*(?:-|to)\s*\d+)?\b/g, "").replace(/\bs\d+(?:\s*(?:-|to)\s*\d+)?\b/g, "").replace(/\b(episode|episodes|ep)\s*\d+(?:\s*(?:-|to)\s*\d+)?\s*(added|update|updated)?\b/g, "").replace(/\b(complete|all episodes|pack|batch)\b/g, "").replace(/\b(movie|film|part\s*\d+|vol\s*\d+|volume\s*\d+)\b/g, "").replace(/\b(unrated|extended|directors cut|uncut|18)\b/g, "").replace(/\b(19\d{2}|20\d{2})\b/g, "").replace(/[^a-z0-9]/g, " ").replace(/\s+/g, " ").trim().replace(/^(the|a|an)\s+/g, "");
}
function isStrictMatch(_0x2a2300, _0x11469d, _0x160824, _0x442a05) {
  if (!_0x2a2300 || !_0x160824) {
    return false;
  }
  var _0x924ab0 = getCleanTitle(_0x2a2300);
  var _0x3a3514 = getCleanTitle(_0x160824);
  if (_0x924ab0 === _0x3a3514) {
    return true;
  }
  if (_0x11469d && _0x442a05) {
    var _0x56965c = parseInt(_0x11469d);
    var _0x18b000 = parseInt(_0x442a05);
    if (!isNaN(_0x56965c) && !isNaN(_0x18b000) && Math.abs(_0x56965c - _0x18b000) > 1) {
      return false;
    }
  }
  return false;
}
function searchWPJson(_0x315a5b) {
  return __async(this, null, function* () {
    var _0x4032bc = BASE_URL + "/wp-json/wp/v2/posts?search=" + encodeURIComponent(_0x315a5b) + "&per_page=100";
    var _0x4ca8ec = yield fetchJson(_0x4032bc);
    if (!_0x4ca8ec || !Array.isArray(_0x4ca8ec)) {
      return [];
    }
    var _0xa332a0 = [];
    for (var _0xa2c8cc = 0; _0xa2c8cc < _0x4ca8ec.length; _0xa2c8cc++) {
      var _0x42077a = _0x4ca8ec[_0xa2c8cc];
      if (_0x42077a && _0x42077a.title && _0x42077a.title.rendered) {
        var _0x324356 = _0x42077a.title.rendered.replace(/<[^>]+>/g, "").trim();
        var _0x2a215a = _0x324356.match(/\b(19\d{2}|20\d{2})\b/);
        var _0x87ff16 = _0x2a215a ? _0x2a215a[1] : null;
        _0xa332a0.push({
          id: _0x42077a.id,
          title: _0x324356,
          year: _0x87ff16,
          content: _0x42077a.content ? _0x42077a.content.rendered : ""
        });
      }
    }
    return _0xa332a0;
  });
}
function dedupe(_0x49a752) {
  var _0x55b1c6 = {};
  return (_0x49a752 || []).filter(function (_0x517c2e) {
    if (!_0x517c2e || !_0x517c2e.url || _0x55b1c6[_0x517c2e.url]) {
      return false;
    }
    _0x55b1c6[_0x517c2e.url] = true;
    return true;
  });
}
function pad2(_0x3e983d) {
  if (_0x3e983d != null && _0x3e983d < 10) {
    return "0" + _0x3e983d;
  } else {
    return String(_0x3e983d);
  }
}
function encodeBase64(_0x4c78a6) {
  var _0xdec9e8 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var _0xb03bc0;
  var _0x8c60ac;
  var _0x440e4a;
  var _0x25f464;
  var _0x5042c9;
  var _0x5213f9;
  var _0x3a747e;
  var _0x585938;
  var _0x912337 = 0;
  var _0x11b684 = "";
  do {
    _0xb03bc0 = _0x4c78a6.charCodeAt(_0x912337++);
    _0x8c60ac = _0x4c78a6.charCodeAt(_0x912337++);
    _0x440e4a = _0x4c78a6.charCodeAt(_0x912337++);
    _0x585938 = _0xb03bc0 << 16 | _0x8c60ac << 8 | _0x440e4a;
    _0x25f464 = _0x585938 >> 18 & 63;
    _0x5042c9 = _0x585938 >> 12 & 63;
    _0x5213f9 = _0x585938 >> 6 & 63;
    _0x3a747e = _0x585938 & 63;
    _0x11b684 += _0xdec9e8.charAt(_0x25f464) + _0xdec9e8.charAt(_0x5042c9) + (isNaN(_0x8c60ac) ? "=" : _0xdec9e8.charAt(_0x5213f9)) + (isNaN(_0x440e4a) ? "=" : _0xdec9e8.charAt(_0x3a747e));
  } while (_0x912337 < _0x4c78a6.length);
  return _0x11b684;
}
function urlSafeBase64Encode(_0x3ebb15) {
  var _0x1283f7 = encodeBase64(_0x3ebb15);
  return _0x1283f7.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function decodeBase64(_0x13a7e8) {
  var _0x4f6d6a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var _0x49e34b = "";
  _0x13a7e8 = String(_0x13a7e8).replace(/=+$/, "");
  for (var _0x8e71cd = 0, _0x165b21, _0x5737b8, _0x3849d8 = 0; _0x5737b8 = _0x13a7e8.charAt(_0x3849d8++); ~_0x5737b8 && (_0x165b21 = _0x8e71cd % 4 ? _0x165b21 * 64 + _0x5737b8 : _0x5737b8, _0x8e71cd++ % 4) ? _0x49e34b += String.fromCharCode(_0x165b21 >> (_0x8e71cd * -2 & 6) & 255) : 0) {
    _0x5737b8 = _0x4f6d6a.indexOf(_0x5737b8);
  }
  return _0x49e34b;
}
function bypassHShareAPI(_0x4f1c74, _0x4895a0) {
  return __async(this, null, function* () {
    var _0xf8105a = urlSafeBase64Encode(_0x4f1c74);
    var _0x1d5e98 = "action=hindshare_sign&d=" + encodeURIComponent(_0xf8105a);
    log("Bypassing HShare via admin-ajax for ID: " + _0x4f1c74.substring(0, 30) + "...");
    var _0x47e79a = yield fetchJson("https://mvlink.blog/wp-admin/admin-ajax.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Referer: _0x4895a0,
        "X-Requested-With": "XMLHttpRequest"
      },
      body: _0x1d5e98
    });
    if (_0x47e79a && _0x47e79a.success && _0x47e79a.data && _0x47e79a.data.url) {
      log("Bypass Success! f.php URL: " + _0x47e79a.data.url);
      return _0x47e79a.data.url;
    }
    log("Bypass Failed: " + JSON.stringify(_0x47e79a));
    return null;
  });
}
function generateStreamLayout(_0x2f2ee2, _0x2b38cf, _0xbda8f1, _0x381071, _0x44dc30, _0x2cabfa, _0x279987, _0x59e08f, _0x3a22dc) {
  var _0x47bfd4 = _0x381071.title || "Unknown Title";
  var _0x528f84 = _0x381071.year || "N/A";
  var _0x43de95 = String(_0x59e08f || _0x2f2ee2 || "").toLowerCase();
  var _0xf7b45e = "Single-Audio";
  var _0x2d266e = "Hindi";
  if (_0x43de95.includes("dual") || _0x43de95.includes("hindi") && _0x43de95.includes("english")) {
    _0xf7b45e = "Dual-Audio";
    _0x2d266e = "English • Hindi";
  } else if (_0x43de95.includes("multi")) {
    _0xf7b45e = "Multi-Audio";
    _0x2d266e = "Multilingual";
  } else if (_0x43de95.includes("bangla")) {
    _0x2d266e = "Bangla";
  } else if (_0x43de95.includes("tamil")) {
    _0x2d266e = "Tamil";
  } else if (_0x43de95.includes("telugu")) {
    _0x2d266e = "Telugu";
  } else if (_0x43de95.includes("english")) {
    _0xf7b45e = "Single-Audio";
    _0x2d266e = "English";
  }
  var _0x7abf4d = "MKV";
  if (_0x43de95.includes(".mp4")) {
    _0x7abf4d = "MP4";
  }
  if (_0x43de95.includes(".m3u8")) {
    _0x7abf4d = "M3U8 / HLS";
  }
  var _0x11152c = "N/A";
  if (_0x44dc30) {
    _0x11152c = _0x381071.episode_run_time && _0x381071.episode_run_time[0] ? _0x381071.episode_run_time[0] + " min" : "45 min";
  } else {
    _0x11152c = _0x381071.runtime ? _0x381071.runtime + " min" : "N/A";
  }
  var _0x5bee43 = [];
  if (_0x43de95.includes("10bit")) {
    _0x5bee43.push("10bit");
  }
  if (_0x43de95.includes("x265") || _0x43de95.includes("hevc")) {
    _0x5bee43.push("x265");
  } else if (_0x43de95.includes("x264") || _0x43de95.includes("h264")) {
    _0x5bee43.push("x264");
  }
  _0x5bee43.push("WEB-DL");
  var _0x4bdfae = "📌 " + _0x5bee43.join(" • ");
  var _0x367a76 = _0xbda8f1.includes("4K") || _0xbda8f1.includes("2160") ? "🌟" : "💎";
  var _0x5eb0de = PROVIDER_NAME + " | " + _0xbda8f1 + " | " + _0xf7b45e;
  var _0x2c7969 = _0x3a22dc ? " | 🗃️ " + _0x3a22dc : " | 🗃️ Server 1";
  var _0x5c93ab = _0x44dc30 ? "🎬 " + _0x47bfd4 + " - S" + pad2(_0x2cabfa) + "E" + pad2(_0x279987) + " (" + _0x528f84 + ")" : "🎬 " + _0x47bfd4 + " - " + _0x528f84;
  var _0x2531e6 = _0x367a76 + " " + _0xbda8f1 + " | 🌍 " + _0x2d266e + _0x2c7969;
  var _0x5cdc75 = "🎞️ " + _0x7abf4d + " | ⏱️ " + _0x11152c + " | " + _0x4bdfae;
  var _0x488917 = _0x5c93ab + "\n" + _0x2531e6 + "\n" + _0x5cdc75;
  return {
    name: _0x5eb0de,
    title: _0x488917,
    url: _0x2f2ee2,
    quality: _0xbda8f1,
    behaviorHints: {
      notWebReady: true
    }
  };
}
function processHShareLink(_0x2283ae, _0x239a15, _0x404864, _0x162690, _0x474321, _0x100f43, _0x3ec81f, _0x75d969, _0x190c54) {
  return __async(this, null, function* () {
    var _0x2b4927 = [];
    for (var _0x279960 = 0; _0x279960 < (_0x2283ae || []).length; _0x279960++) {
      var _0x16611a = _0x2283ae[_0x279960];
      log("Processing HPage: " + _0x16611a);
      var _0x38f801 = _0x16611a.match(/url=([^&]+)/i);
      if (_0x38f801) {
        try {
          var _0x3f64a8 = decodeBase64(_0x38f801[1]);
          if (_0x3f64a8.startsWith("http")) {
            var _0x196c67 = yield fetchText(_0x3f64a8, {
              headers: {
                Referer: _0x162690
              }
            });
            var _0x339944 = 1;
            if (_0x196c67) {
              var _0x299d55 = /href="([^"]+\.workers\.dev[^"]+)"/ig;
              var _0x1542a0;
              while ((_0x1542a0 = _0x299d55.exec(_0x196c67)) !== null) {
                var _0x28b14a = _0x1542a0[1];
                var _0x3706a4 = _0x28b14a.indexOf("?") > -1 ? _0x28b14a + "&s=" + new Date().getTime() : _0x28b14a + "?s=" + new Date().getTime();
                var _0x3e8526 = "Server " + _0x339944;
                var _0x2e8706 = generateStreamLayout(_0x3706a4, _0x404864, _0x239a15, _0x100f43, _0x3ec81f, _0x75d969, _0x190c54, _0x474321 || _0x28b14a, _0x3e8526);
                _0x2b4927.push(_0x2e8706);
                _0x339944++;
              }
            }
            if (_0x2b4927.length === 0) {
              var _0x28b14a = null;
              if (_0x3f64a8.includes(".workers.dev")) {
                _0x28b14a = _0x3f64a8;
              } else {
                var _0x28638e = _0x3f64a8.match(/url=([^&]+)/i);
                if (_0x28638e) {
                  var _0xa26e0b = decodeBase64(_0x28638e[1]);
                  if (_0xa26e0b.includes(".workers.dev")) {
                    _0x28b14a = _0xa26e0b;
                  }
                }
              }
              if (_0x28b14a) {
                var _0x3706a4 = _0x28b14a.indexOf("?") > -1 ? _0x28b14a + "&s=" + new Date().getTime() : _0x28b14a + "?s=" + new Date().getTime();
                var _0x2e8706 = generateStreamLayout(_0x3706a4, _0x404864, _0x239a15, _0x100f43, _0x3ec81f, _0x75d969, _0x190c54, _0x474321 || _0x28b14a, "Server 1");
                _0x2b4927.push(_0x2e8706);
              }
            }
          }
        } catch (_0x1ae39a) {
          log("HPage decode err: " + _0x1ae39a.message);
        }
      }
    }
    return _0x2b4927;
  });
}
function processMvlink(_0x358d67, _0x5b263c, _0x118e5f, _0x4d3446, _0x34728e, _0xdf2944, _0x21aa9a, _0x801ce6) {
  return __async(this, null, function* () {
    var _0x9c7095 = [];
    log("Processing MvLink: " + _0x358d67);
    var _0x41882e = yield fetchText(_0x358d67, {
      headers: {
        Referer: _0x5b263c
      }
    });
    if (!_0x41882e) {
      return _0x9c7095;
    }
    var _0x1529b4 = /href="(?:https:\/\/hshare\.ink\/\?id=([^"]+)|https:\/\/hshare\.ink\/dl\/([^"]+))"/ig;
    var _0x262f1d;
    var _0x1ac5d8 = [];
    while ((_0x262f1d = _0x1529b4.exec(_0x41882e)) !== null) {
      if (_0x262f1d[1]) {
        _0x1ac5d8.push(decodeURIComponent(_0x262f1d[1]));
      }
    }
    if (_0x1ac5d8.length === 0) {
      return _0x9c7095;
    }
    log("Found " + _0x1ac5d8.length + " HShare IDs in mvlink page.");
    if (_0x34728e != null) {
      var _0x390e65 = _0x34728e - 1;
      var _0x2f34c1 = false;
      if (_0x390e65 >= 0 && _0x390e65 < _0x1ac5d8.length) {
        log("Fast Path Guessing Episode " + _0x34728e + " at index " + _0x390e65);
        var _0x4ddaca = _0x1ac5d8[_0x390e65];
        var _0x4ccd7d = yield bypassHShareAPI(_0x4ddaca, _0x358d67);
        var _0x56b8e2 = yield fetchText(_0x4ccd7d, {
          headers: {
            Referer: _0x358d67
          }
        });
        if (_0x56b8e2) {
          var _0x3f0ffe = _0x56b8e2.match(/Name:\s*([^<]+)/i);
          var _0x1da344 = _0x3f0ffe ? _0x3f0ffe[1].trim() : null;
          var _0x107ea0 = [];
          var _0x322b30 = /href="([^"]+hcloud\.ink[^"]+)"/ig;
          var _0x20a66;
          while ((_0x20a66 = _0x322b30.exec(_0x56b8e2)) !== null) {
            if (_0x20a66[1]) {
              _0x107ea0.push(_0x20a66[1]);
            }
          }
          var _0x3710ce = yield processHShareLink(_0x107ea0, _0x4d3446, _0x118e5f, _0x4ccd7d, _0x1da344, _0xdf2944, _0x21aa9a, _0x801ce6, _0x34728e);
          if (_0x3710ce && _0x3710ce.length > 0) {
            _0x9c7095 = _0x9c7095.concat(_0x3710ce);
            _0x2f34c1 = true;
          }
        }
      }
      if (!_0x2f34c1) {
        var _0x3c09c9 = _0x1ac5d8.filter(function (_0x4d4ecd, _0x526bc) {
          return _0x526bc !== _0x390e65;
        });
        for (var _0xda7865 = 0; _0xda7865 < _0x3c09c9.length; _0xda7865 += 3) {
          var _0x450997 = _0x3c09c9.slice(_0xda7865, _0xda7865 + 3);
          var _0xd0d71 = yield Promise.all(_0x450997.map(function (_0x25b588) {
            return __async(this, null, function* () {
              var _0x102286 = yield bypassHShareAPI(_0x25b588, _0x358d67);
              var _0x3b4637 = yield fetchText(_0x102286, {
                headers: {
                  Referer: _0x358d67
                }
              });
              if (!_0x3b4637) {
                return [];
              }
              var _0x2338e3 = _0x3b4637.match(/Name:\s*([^<]+)/i);
              var _0x51f575 = _0x2338e3 ? _0x2338e3[1].trim() : null;
              var _0x223e0a = [];
              var _0x3b9312 = /href="([^"]+hcloud\.ink[^"]+)"/ig;
              var _0x1ce842;
              while ((_0x1ce842 = _0x3b9312.exec(_0x3b4637)) !== null) {
                if (_0x1ce842[1]) {
                  _0x223e0a.push(_0x1ce842[1]);
                }
              }
              return processHShareLink(_0x223e0a, _0x4d3446, _0x118e5f, _0x102286, _0x51f575, _0xdf2944, _0x21aa9a, _0x801ce6, _0x34728e);
            });
          }));
          var _0xb382ac = false;
          _0xd0d71.forEach(function (_0xdfb0e) {
            if (_0xdfb0e && _0xdfb0e.length > 0) {
              _0x9c7095 = _0x9c7095.concat(_0xdfb0e);
              _0xb382ac = true;
            }
          });
          if (_0xb382ac) {
            break;
          }
        }
      }
    } else {
      for (var _0xda7865 = 0; _0xda7865 < _0x1ac5d8.length; _0xda7865++) {
        var _0x4ddaca = _0x1ac5d8[_0xda7865];
        var _0x4ccd7d = yield bypassHShareAPI(_0x4ddaca, _0x358d67);
        var _0x56b8e2 = yield fetchText(_0x4ccd7d, {
          headers: {
            Referer: _0x358d67
          }
        });
        if (_0x56b8e2) {
          var _0x3f0ffe = _0x56b8e2.match(/Name:\s*([^<]+)/i);
          var _0x1da344 = _0x3f0ffe ? _0x3f0ffe[1].trim() : null;
          var _0x107ea0 = [];
          var _0x322b30 = /href="([^"]+hcloud\.ink[^"]+)"/ig;
          var _0x20a66;
          while ((_0x20a66 = _0x322b30.exec(_0x56b8e2)) !== null) {
            if (_0x20a66[1]) {
              _0x107ea0.push(_0x20a66[1]);
            }
          }
          var _0x3710ce = yield processHShareLink(_0x107ea0, _0x4d3446, _0x118e5f, _0x4ccd7d, _0x1da344, _0xdf2944, _0x21aa9a, _0x801ce6, null);
          if (_0x3710ce) {
            _0x9c7095 = _0x9c7095.concat(_0x3710ce);
          }
        }
      }
    }
    return _0x9c7095;
  });
}
function extractSeasonHtml(_0x158181, _0x1ed0d7) {
  if (!_0x158181 || _0x1ed0d7 == null) {
    return _0x158181;
  }
  var _0x25e87e = _0x158181;
  var _0x556c9e = /(?:Season|Saison|Staffel)\s+0*(\d+)\b/gi;
  var _0x20e76f;
  var _0x1f934d = [];
  while ((_0x20e76f = _0x556c9e.exec(_0x25e87e)) !== null) {
    var _0x5f001e = _0x25e87e.lastIndexOf("<", _0x20e76f.index);
    if (_0x5f001e < 0 || _0x20e76f.index - _0x5f001e > 500) {
      _0x5f001e = _0x20e76f.index;
    }
    var _0x5400a8 = _0x25e87e.substring(_0x5f001e, _0x20e76f.index + 50);
    if (_0x5400a8.toLowerCase().includes("download") || _0x5400a8.toLowerCase().includes("episode")) {
      continue;
    }
    _0x1f934d.push({
      season: parseInt(_0x20e76f[1]),
      index: _0x5f001e
    });
  }
  if (_0x1f934d.length === 0) {
    return _0x25e87e;
  }
  var _0x503517 = _0x1f934d.filter(function (_0xdc32b1) {
    return _0xdc32b1.season === _0x1ed0d7;
  });
  if (_0x503517.length === 0) {
    return _0x25e87e;
  }
  var _0x2fb0cd = _0x503517[0];
  var _0x193012 = _0x2fb0cd.index;
  var _0x118991 = null;
  for (var _0x1b7687 = 0; _0x1b7687 < _0x1f934d.length; _0x1b7687++) {
    if (_0x1f934d[_0x1b7687].index > _0x193012 && _0x1f934d[_0x1b7687].season !== _0x1ed0d7) {
      _0x118991 = _0x1f934d[_0x1b7687];
      break;
    }
  }
  var _0x4f288f = _0x118991 ? _0x118991.index : _0x25e87e.length;
  return _0x25e87e.substring(_0x193012, _0x4f288f);
}
function getStreams(_0x258047, _0x4f3243, _0x2d1e3c, _0x5c7fa7) {
  return __async(this, null, function* () {
    try {
      log("request: id=" + _0x258047 + " type=" + _0x4f3243 + " s=" + _0x2d1e3c + " e=" + _0x5c7fa7);
      var _0x3a55cd = yield getMedia(_0x258047, _0x4f3243);
      if (!_0x3a55cd || !_0x3a55cd.title) {
        return [];
      }
      var _0x110828 = _0x4f3243 === "tv" || _0x4f3243 === "series";
      var _0x562845 = _0x2d1e3c != null ? Number(_0x2d1e3c) : null;
      var _0x18a5f5 = _0x5c7fa7 != null ? Number(_0x5c7fa7) : null;
      log("resolved: \"" + _0x3a55cd.title + "\" (" + (_0x3a55cd.year || "?") + ")");
      var _0x255291 = [];
      if (_0x3a55cd.imdb) {
        log("Searching WP-JSON by IMDB ID: " + _0x3a55cd.imdb);
        _0x255291 = yield searchWPJson(_0x3a55cd.imdb);
      }
      if (!_0x255291 || _0x255291.length === 0) {
        log("Searching WP-JSON by Title: " + _0x3a55cd.title);
        _0x255291 = yield searchWPJson(_0x3a55cd.title);
      }
      var _0x2d623c = null;
      if (_0x3a55cd.imdb) {
        for (var _0xab5041 = 0; _0xab5041 < _0x255291.length; _0xab5041++) {
          if (_0x255291[_0xab5041].content && _0x255291[_0xab5041].content.includes(_0x3a55cd.imdb)) {
            log("Matched via IMDB ID!");
            _0x2d623c = _0x255291[_0xab5041];
            break;
          }
        }
      }
      if (!_0x2d623c) {
        for (var _0xab5041 = 0; _0xab5041 < _0x255291.length; _0xab5041++) {
          if (isStrictMatch(_0x3a55cd.title, _0x3a55cd.year, _0x255291[_0xab5041].title, _0x255291[_0xab5041].year)) {
            log("Matched via Strict Title Match!");
            _0x2d623c = _0x255291[_0xab5041];
            break;
          }
        }
      }
      if (!_0x2d623c) {
        log("No strict match found in WP-JSON");
        return [];
      }
      log("Matched Post: " + _0x2d623c.title);
      var _0x42b11d = _0x2d623c.content;
      if (_0x110828 && _0x562845 != null) {
        var _0x1325df = extractSeasonHtml(_0x42b11d, _0x562845);
        if (_0x1325df) {
          _0x42b11d = _0x1325df;
        }
      }
      var _0x22d1d8 = [];
      var _0x4a72a0 = /href="(https?:\/\/mvlink\.blog\/(?:web\/)?\d+)"/ig;
      var _0x5ea1d0;
      while ((_0x5ea1d0 = _0x4a72a0.exec(_0x42b11d)) !== null) {
        var _0x3611aa = _0x5ea1d0[1];
        var _0x190b65 = Math.max(0, _0x5ea1d0.index - 500);
        var _0x45bc14 = _0x42b11d.substring(_0x190b65, _0x5ea1d0.index);
        var _0xe3c218 = parseQuality(_0x45bc14) || "HD";
        _0x22d1d8.push({
          url: _0x3611aa,
          quality: _0xe3c218
        });
      }
      if (_0x22d1d8.length === 0) {
        log("No mvlink.blog links found in post.");
        return [];
      }
      log("Found " + _0x22d1d8.length + " MvLink domains.");
      var _0xc0efed = [];
      var _0x5eba6d = _0x110828 ? _0x3a55cd.title + " [S" + pad2(_0x562845) + "E" + pad2(_0x18a5f5) + "]" : _0x2d623c.title;
      for (var _0xab5041 = 0; _0xab5041 < _0x22d1d8.length; _0xab5041++) {
        var _0x3d707e = _0x22d1d8[_0xab5041];
        if (_0x3d707e.quality === "480p") {
          log("Skipping 480p link");
          continue;
        }
        var _0x4d9f76 = yield processMvlink(_0x3d707e.url, BASE_URL + "/", _0x5eba6d, _0x3d707e.quality, _0x18a5f5, _0x3a55cd, _0x110828, _0x562845);
        if (_0x4d9f76 && _0x4d9f76.length > 0) {
          _0xc0efed = _0xc0efed.concat(_0x4d9f76);
        }
      }
      _0xc0efed = dedupe(_0xc0efed);
      var _0x50cf6d = {
        "2160p": 5,
        "1440p": 4,
        "1080p": 3,
        "720p": 2,
        HD: 1
      };
      _0xc0efed.sort(function (_0x20f605, _0x177544) {
        var _0x1e1e9b = _0x50cf6d[_0x20f605.quality] || 0;
        var _0x114da0 = _0x50cf6d[_0x177544.quality] || 0;
        return _0x114da0 - _0x1e1e9b;
      });
      log("Returning " + _0xc0efed.length + " streams.");
      return _0xc0efed;
    } catch (_0x4d27f1) {
      err("fatal: " + _0x4d27f1.message);
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