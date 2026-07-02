var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x4698aa, _0x5990f3, _0x90d43d) => _0x5990f3 in _0x4698aa ? __defProp(_0x4698aa, _0x5990f3, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x90d43d
}) : _0x4698aa[_0x5990f3] = _0x90d43d;
var __spreadValues = (_0xe9f262, _0x99a34f) => {
  for (var _0x161179 in _0x99a34f ||= {}) {
    if (__hasOwnProp.call(_0x99a34f, _0x161179)) {
      __defNormalProp(_0xe9f262, _0x161179, _0x99a34f[_0x161179]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x161179 of __getOwnPropSymbols(_0x99a34f)) {
      if (__propIsEnum.call(_0x99a34f, _0x161179)) {
        __defNormalProp(_0xe9f262, _0x161179, _0x99a34f[_0x161179]);
      }
    }
  }
  return _0xe9f262;
};
var __spreadProps = (_0x518582, _0x726083) => __defProps(_0x518582, __getOwnPropDescs(_0x726083));
var __async = (_0x1bbc07, _0xca5acf, _0x29254a) => {
  return new Promise((_0x2c1900, _0x5b0c1e) => {
    var _0x1dc41e = _0x290d98 => {
      try {
        _0xd66c9b(_0x29254a.next(_0x290d98));
      } catch (_0x37c97f) {
        _0x5b0c1e(_0x37c97f);
      }
    };
    var _0x23d87f = _0x532d95 => {
      try {
        _0xd66c9b(_0x29254a.throw(_0x532d95));
      } catch (_0x1b2882) {
        _0x5b0c1e(_0x1b2882);
      }
    };
    var _0xd66c9b = _0x5a3aa5 => _0x5a3aa5.done ? _0x2c1900(_0x5a3aa5.value) : Promise.resolve(_0x5a3aa5.value).then(_0x1dc41e, _0x23d87f);
    _0xd66c9b((_0x29254a = _0x29254a.apply(_0x1bbc07, _0xca5acf)).next());
  });
};
var PROVIDER_NAME = "ZinkMovies";
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var DOMAINS_JSON_URL = "https://raw.githubusercontent.com/SaurabhKaperwan/Utils/refs/heads/main/urls.json";
var cachedDomains = null;
var domainCacheTime = 0;
var DOMAIN_CACHE_TTL = 14400000;
var baseUrl = "https://zinkmovies.wtf";
var cachedHubDomain = "https://hubcloud.foo";
function refreshDomains() {
  return __async(this, null, function* () {
    const _0x1ba1a4 = Date.now();
    if (cachedDomains && _0x1ba1a4 - domainCacheTime < DOMAIN_CACHE_TTL) {
      return cachedDomains;
    }
    try {
      var _0x229977 = yield fetchJson(DOMAINS_JSON_URL);
      if (_0x229977) {
        cachedDomains = _0x229977;
        domainCacheTime = _0x1ba1a4;
        if (_0x229977.zinkmovies) {
          baseUrl = _0x229977.zinkmovies;
        }
        if (_0x229977.hubcloud) {
          cachedHubDomain = _0x229977.hubcloud;
        }
        console.log("[" + PROVIDER_NAME + "] Domains updated: site=" + baseUrl + " hub=" + cachedHubDomain);
      }
    } catch (_0x36967b) {
      console.log("[" + PROVIDER_NAME + "] Domain refresh failed, using defaults");
    }
    return cachedDomains || {};
  });
}
var MOBILE_UAS = ["Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"];
var currentSessionUA = MOBILE_UAS[0];
function getHeaders(_0x598a37) {
  var _0xfd25a6 = {
    "User-Agent": currentSessionUA,
    "Accept-Language": "en-US,en;q=0.9"
  };
  if (_0x598a37) {
    for (var _0x55f780 in _0x598a37) {
      _0xfd25a6[_0x55f780] = _0x598a37[_0x55f780];
    }
  }
  return _0xfd25a6;
}
function fetchWithTimeout(_0x1e7f4f) {
  return __async(this, arguments, function* (_0x3f8221, _0xa96c1a = {}, _0x26f55d = 10000) {
    var _0x723d5a = getHeaders(_0xa96c1a == null ? undefined : _0xa96c1a.headers);
    if (_0xa96c1a && _0xa96c1a.headers) {
      for (var _0x16e328 in _0xa96c1a.headers) {
        _0x723d5a[_0x16e328] = _0xa96c1a.headers[_0x16e328];
      }
    }
    var _0x33439b = __spreadProps(__spreadValues({}, _0xa96c1a || {}), {
      headers: _0x723d5a
    });
    const _0x1937c5 = fetch(_0x3f8221, _0x33439b);
    const _0x3e2ec3 = new Promise((_0x3e5218, _0x12a0ae) => {
      setTimeout(() => _0x12a0ae(new Error("timeout")), _0x26f55d);
    });
    return yield Promise.race([_0x1937c5, _0x3e2ec3]);
  });
}
function fetchText(_0x5188d3, _0x131b11) {
  return __async(this, null, function* () {
    try {
      var _0x4123fc = yield fetchWithTimeout(_0x5188d3, _0x131b11);
      if (_0x4123fc && _0x4123fc.ok) {
        return yield _0x4123fc.text();
      }
      return null;
    } catch (_0x4433d3) {
      return null;
    }
  });
}
function fetchJson(_0x2e4c4c, _0x3dd86f) {
  return __async(this, null, function* () {
    try {
      var _0x467ec8 = yield fetchWithTimeout(_0x2e4c4c, _0x3dd86f || {});
      if (_0x467ec8.ok) {
        return yield _0x467ec8.json();
      }
      return null;
    } catch (_0x33de4d) {
      return null;
    }
  });
}
function getImdbId(_0x159f9a, _0x1c4af3) {
  return __async(this, null, function* () {
    var _0x180e10 = _0x1c4af3 === "series" || _0x1c4af3 === "tv" ? "tv" : "movie";
    var _0xc4cb88 = "https://api.themoviedb.org/3/" + _0x180e10 + "/" + _0x159f9a + "/external_ids?api_key=" + TMDB_API_KEY;
    var _0x383b95 = yield fetchJson(_0xc4cb88);
    if (_0x383b95 && _0x383b95.imdb_id) {
      return _0x383b95.imdb_id;
    }
    return null;
  });
}
function extractHDVBConfig(_0x176e80) {
  try {
    var _0x26b42e = _0x176e80.match(/new HDVBPlayer\((\{[\s\S]*?\})\)/);
    if (_0x26b42e) {
      return JSON.parse(_0x26b42e[1]);
    }
    var _0x33d1a1 = _0x176e80.match(/(?:let|var|const)\s+\w+\s*=\s*(\{[\s\S]*?"file":[\s\S]*?\});/);
    if (_0x33d1a1) {
      return JSON.parse(_0x33d1a1[1]);
    }
    return null;
  } catch (_0x3aa433) {
    return null;
  }
}
function parseQualityLabel(_0x1898b9) {
  var _0x2e14e7 = _0x1898b9.match(/(2160|1080|720|480)\s*P/i);
  if (_0x2e14e7) {
    return _0x2e14e7[1] + "P";
  }
  if (/4K|UHD/i.test(_0x1898b9)) {
    return "2160P";
  }
  return "HD";
}
function extractSiteTitle(_0x5e1d8e) {
  var _0x1b3570 = _0x5e1d8e.match(/<title>(.*?)<\/title>/i);
  if (!_0x1b3570) {
    return "";
  }
  var _0xb948a0 = _0x1b3570[1];
  var _0x2396be = _0xb948a0.match(/Download\s+(.+?)\s+In HD Free/i);
  if (_0x2396be) {
    return _0x2396be[1].trim();
  } else {
    return _0xb948a0.trim();
  }
}
function base64Decode(_0x431ad8) {
  var _0x3cb573 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var _0x39a5bf = "";
  var _0x3676c2 = 0;
  _0x431ad8 = _0x431ad8.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (_0x3676c2 < _0x431ad8.length) {
    var _0x499a8d = _0x3cb573.indexOf(_0x431ad8.charAt(_0x3676c2++));
    var _0x8d09eb = _0x3cb573.indexOf(_0x431ad8.charAt(_0x3676c2++));
    var _0x2da298 = _0x3cb573.indexOf(_0x431ad8.charAt(_0x3676c2++));
    var _0x3034b9 = _0x3cb573.indexOf(_0x431ad8.charAt(_0x3676c2++));
    var _0x59084b = _0x499a8d << 2 | _0x8d09eb >> 4;
    var _0x31716a = (_0x8d09eb & 15) << 4 | _0x2da298 >> 2;
    var _0x1e5684 = (_0x2da298 & 3) << 6 | _0x3034b9;
    _0x39a5bf += String.fromCharCode(_0x59084b);
    if (_0x2da298 != 64) {
      _0x39a5bf += String.fromCharCode(_0x31716a);
    }
    if (_0x3034b9 != 64) {
      _0x39a5bf += String.fromCharCode(_0x1e5684);
    }
  }
  return _0x39a5bf;
}
function scrapeZinkMoviesForMovies(_0x259152, _0x41b7f5) {
  return __async(this, null, function* () {
    var _0x397c40 = [];
    try {
      var _0x444363 = baseUrl + "/?s=" + encodeURIComponent(_0x259152);
      var _0x118e66 = yield fetchText(_0x444363);
      if (!_0x118e66) {
        return _0x397c40;
      }
      var _0x266c31 = null;
      var _0x28c262 = /href="(https?:\/\/[^\/]+\/movies\/[^"]+)"/ig;
      var _0x2099cb;
      while ((_0x2099cb = _0x28c262.exec(_0x118e66)) !== null) {
        if (!_0x41b7f5 || _0x2099cb[1].includes(_0x41b7f5)) {
          _0x266c31 = _0x2099cb[1];
          break;
        }
      }
      if (!_0x266c31) {
        var _0x50ba6d = _0x118e66.match(/href="(https?:\/\/[^\/]+\/movies\/[^"]+)"/i);
        if (_0x50ba6d) {
          _0x266c31 = _0x50ba6d[1];
        }
      }
      if (!_0x266c31) {
        return _0x397c40;
      }
      var _0x5ba686 = _0x266c31;
      var _0x2a5644 = yield fetchText(_0x5ba686);
      if (!_0x2a5644) {
        return _0x397c40;
      }
      var _0x46bb62 = extractSiteTitle(_0x2a5644);
      var _0x28c262 = /href="(https:\/\/new3\.zinkcloud\.net\/file\/([^"]+))"[^>]*>[\s\S]*?<span>([\s\S]*?)<\/span>/ig;
      var _0x2099cb;
      var _0xc2fa7 = [];
      while ((_0x2099cb = _0x28c262.exec(_0x2a5644)) !== null) {
        _0xc2fa7.push({
          id: _0x2099cb[2],
          label: _0x2099cb[3].replace(/<[^>]+>/g, "").trim()
        });
      }
      yield Promise.all(_0xc2fa7.map(_0x347f2e => __async(this, null, function* () {
        var _0x30657f = _0x347f2e.id;
        var _0x1cb774 = _0x347f2e.label;
        if (_0x1cb774.includes("480")) {
          return;
        }
        var _0x3b1f = "https://new3.zinkcloud.net/ajax_generate_token.php";
        try {
          var _0x4196a4 = yield fetch(_0x3b1f, {
            method: "POST",
            headers: __spreadValues({
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Requested-With": "XMLHttpRequest"
            }, getHeaders()),
            body: "random_id=" + _0x30657f
          });
          var _0x49f794 = yield _0x4196a4.json();
          if (_0x49f794 && _0x49f794.token) {
            var _0x34eb60 = yield fetchText("https://new3.zinkcloud.net/dl/" + _0x49f794.token);
            if (_0x34eb60) {
              var _0x3bd03d = _0x34eb60.match(/href="([^"]+hubcloud\.[^"\/]+\/drive\/[^"]+)"/i);
              if (_0x3bd03d) {
                try {
                  var _0x42d283 = _0x3bd03d[1];
                  var _0x40d0eb = yield fetch(_0x42d283, {
                    headers: getHeaders()
                  });
                  var _0x58b151 = yield _0x40d0eb.text();
                  if (_0x58b151) {
                    var _0x3a269d = _0x58b151;
                    var _0x510494 = null;
                    var _0xf5a72a = _0x58b151.match(/href="([^"]+gamerxyt\.com[^"]+)"/i);
                    if (_0xf5a72a) {
                      _0x510494 = _0xf5a72a[1].replace(/&amp;/g, "&");
                    }
                    var _0x2f3b6e = _0x58b151.match(/x-href="([^"]+)"/i);
                    if (!_0x510494 && _0x2f3b6e) {
                      try {
                        var _0x43b798 = base64Decode(_0x2f3b6e[1]);
                        if (_0x43b798.includes("gamerxyt")) {
                          _0x510494 = _0x43b798;
                        }
                      } catch (_0x5b4b87) {}
                    }
                    if (_0x510494) {
                      var _0xcc1caf = yield fetch(_0x510494, {
                        headers: getHeaders()
                      });
                      _0x3a269d = yield _0xcc1caf.text();
                    }
                    if (_0x3a269d) {
                      var _0x12d45c = /href="([^"]+)"[^>]*id="fsl"|href="([^"]+(?:\.workers\.dev|\.r2\.dev|\.buzz)\/[^"]+)"/ig;
                      var _0x4b1abb;
                      while ((_0x4b1abb = _0x12d45c.exec(_0x3a269d)) !== null) {
                        var _0x4c1bd9 = _0x4b1abb[1] || _0x4b1abb[2];
                        if (_0x4c1bd9 && !_0x4c1bd9.includes(".zip")) {
                          var _0x3543e7 = parseQualityLabel(_0x1cb774);
                          var _0x2d77e8 = _0x3543e7 + " · FSL";
                          _0x397c40.push({
                            name: _0x46bb62 + " - " + PROVIDER_NAME + " | " + _0x3543e7 + " (FSL)",
                            title: _0x46bb62 + " - " + PROVIDER_NAME + " | " + _0x2d77e8,
                            size: _0x2d77e8,
                            url: _0x4c1bd9,
                            quality: _0x3543e7,
                            format: _0x4c1bd9.includes(".mkv") ? "mkv" : "mp4"
                          });
                        }
                      }
                    }
                  }
                } catch (_0x578418) {}
              }
            }
          }
        } catch (_0xf3316e) {}
      })));
    } catch (_0x5cac20) {}
    return _0x397c40;
  });
}
function scrapeZinkMoviesForTv(_0x3bac04, _0x32bc6c, _0x336c4d, _0x2cf73f) {
  return __async(this, null, function* () {
    var _0x12b2ca = [];
    try {
      var _0x326777 = baseUrl + "/?s=" + encodeURIComponent(_0x3bac04);
      var _0x2b3f83 = yield fetchText(_0x326777);
      if (!_0x2b3f83) {
        return _0x12b2ca;
      }
      var _0x59f2e3 = null;
      var _0x113d61 = /href="(https?:\/\/[^\/]+\/tvshows\/[^"]+)"/ig;
      var _0x43a740;
      while ((_0x43a740 = _0x113d61.exec(_0x2b3f83)) !== null) {
        if (!_0x32bc6c || _0x43a740[1].includes(_0x32bc6c)) {
          _0x59f2e3 = _0x43a740[1];
          break;
        }
      }
      if (!_0x59f2e3) {
        var _0x4d194f = _0x2b3f83.match(/href="(https?:\/\/[^\/]+\/tvshows\/[^"]+)"/i);
        if (_0x4d194f) {
          _0x59f2e3 = _0x4d194f[1];
        }
      }
      if (!_0x59f2e3) {
        return _0x12b2ca;
      }
      var _0x3488a1 = _0x59f2e3;
      var _0x34ce56 = yield fetchText(_0x3488a1);
      if (!_0x34ce56) {
        return _0x12b2ca;
      }
      var _0x2e73a0 = extractSiteTitle(_0x34ce56);
      var _0x201c03 = _0x2e73a0.replace(/\s*\(?Season.*/i, "").trim();
      var _0x4a4ca9 = _0x201c03 + " S" + String(_0x336c4d).padStart(2, "0") + "E" + String(_0x2cf73f).padStart(2, "0");
      var _0xb3e136 = /href="(https:\/\/linkstore\.zinkcloud\.net\/\d+\/)"/ig;
      var _0x177502;
      var _0x4e3ab9 = [];
      while ((_0x177502 = _0xb3e136.exec(_0x34ce56)) !== null) {
        if (_0x4e3ab9.indexOf(_0x177502[1]) === -1) {
          _0x4e3ab9.push(_0x177502[1]);
        }
      }
      var _0xc2abff = [];
      yield Promise.all(_0x4e3ab9.map(_0x420bbc => __async(this, null, function* () {
        var _0x4a2786 = yield fetchText(_0x420bbc);
        if (!_0x4a2786) {
          return;
        }
        var _0x527543 = _0x4a2786.match(/<title>(.*?)<\/title>/i);
        var _0x379959 = _0x527543 ? _0x527543[1] : "";
        var _0x1f6dba = _0x379959.match(/Season\s*0?(\d+)/i);
        if (_0x1f6dba && parseInt(_0x1f6dba[1]) != _0x336c4d) {
          return;
        }
        var _0x2b5065 = parseQualityLabel(_0x379959);
        if (_0x2b5065 === "480P") {
          return;
        }
        var _0x5116fa = /href="(https:\/\/new3\.zinkcloud\.net\/file\/([^"]+))"[^>]*>\s*<span[^>]*>(.*?)<\/span>/ig;
        var _0x2cf690;
        while ((_0x2cf690 = _0x5116fa.exec(_0x4a2786)) !== null) {
          var _0x2adc59 = _0x2cf690[2];
          var _0x1e3ffe = _0x2cf690[3].replace(/<[^>]+>/g, "").trim();
          var _0x41f596 = false;
          var _0x3acc43 = _0x1e3ffe.match(/(?:EPISODE|EP|E)\s*[-_]?\s*0?(\d+)/i);
          if (_0x3acc43 && parseInt(_0x3acc43[1]) == _0x2cf73f) {
            _0x41f596 = true;
          } else if (_0x1e3ffe.toLowerCase().includes("all episodes")) {}
          if (_0x41f596) {
            _0xc2abff.push({
              id: _0x2adc59,
              label: _0x1e3ffe,
              quality: _0x2b5065,
              lsTitle: _0x379959
            });
          }
        }
      })));
      for (var _0x3b3b2f = 0; _0x3b3b2f < _0xc2abff.length; _0x3b3b2f++) {
        var _0x2c87c5 = _0xc2abff[_0x3b3b2f];
        var _0x56e5a5 = _0x2c87c5.id;
        var _0x630f8b = _0x2c87c5.quality;
        var _0x15231e = _0x2c87c5.lsTitle;
        var _0x4e350d = "https://new3.zinkcloud.net/ajax_generate_token.php";
        try {
          var _0x3ae0d4 = yield fetch(_0x4e350d, {
            method: "POST",
            headers: __spreadValues({
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Requested-With": "XMLHttpRequest"
            }, getHeaders()),
            body: "random_id=" + _0x56e5a5
          });
          var _0x39d04d = yield _0x3ae0d4.json();
          if (_0x39d04d && _0x39d04d.token) {
            var _0x2917ef = yield fetchText("https://new3.zinkcloud.net/dl/" + _0x39d04d.token);
            if (_0x2917ef) {
              var _0x36fd70 = _0x2917ef.match(/href="([^"]+hubcloud\.[^"\/]+\/drive\/[^"]+)"/i);
              if (_0x36fd70) {
                try {
                  var _0x380deb = _0x36fd70[1];
                  var _0x4f83c2 = yield fetch(_0x380deb, {
                    headers: getHeaders()
                  });
                  var _0x1ea6e7 = yield _0x4f83c2.text();
                  if (_0x1ea6e7) {
                    var _0xbd535c = _0x1ea6e7;
                    var _0x192b5b = null;
                    var _0x430d16 = _0x1ea6e7.match(/href="([^"]+gamerxyt\.com[^"]+)"/i);
                    if (_0x430d16) {
                      _0x192b5b = _0x430d16[1].replace(/&amp;/g, "&");
                    }
                    var _0x7a50f2 = _0x1ea6e7.match(/x-href="([^"]+)"/i);
                    if (!_0x192b5b && _0x7a50f2) {
                      try {
                        var _0x2d0c0b = base64Decode(_0x7a50f2[1]);
                        if (_0x2d0c0b.includes("gamerxyt")) {
                          _0x192b5b = _0x2d0c0b;
                        }
                      } catch (_0x37f567) {}
                    }
                    if (_0x192b5b) {
                      var _0x51595c = yield fetch(_0x192b5b, {
                        headers: getHeaders()
                      });
                      _0xbd535c = yield _0x51595c.text();
                    }
                    if (_0xbd535c) {
                      var _0x18c4d0 = /href="([^"]+)"[^>]*id="fsl"|href="([^"]+(?:\.workers\.dev|\.r2\.dev|\.buzz)\/[^"]+)"/ig;
                      var _0x1cfa50;
                      while ((_0x1cfa50 = _0x18c4d0.exec(_0xbd535c)) !== null) {
                        var _0x31681a = _0x1cfa50[1] || _0x1cfa50[2];
                        if (_0x31681a && !_0x31681a.includes(".zip")) {
                          var _0x3df658 = _0x630f8b;
                          var _0x3d8217 = _0x3df658 + " · FSL";
                          _0x12b2ca.push({
                            name: _0x4a4ca9 + " - " + PROVIDER_NAME + " | " + _0x3df658 + " (FSL)",
                            title: _0x4a4ca9 + " - " + PROVIDER_NAME + " | " + _0x3d8217,
                            size: _0x3d8217,
                            url: _0x31681a,
                            quality: _0x3df658,
                            format: _0x31681a.includes(".mkv") ? "mkv" : "mp4"
                          });
                        }
                      }
                    }
                  }
                } catch (_0x4fa629) {}
              }
            }
          }
        } catch (_0x25cd20) {}
      }
    } catch (_0x22e92a) {}
    return _0x12b2ca;
  });
}
function getStreams(_0x24df18, _0xa3a911, _0x2f5472, _0x4db0ce) {
  return __async(this, null, function* () {
    currentSessionUA = MOBILE_UAS[Math.floor(Math.random() * MOBILE_UAS.length)];
    yield refreshDomains();
    var _0x2c31ff = [];
    var _0x386797 = _0xa3a911 === "series" || _0xa3a911 === "tv";
    var _0x57a272 = [];
    var _0x5cfc89 = "";
    if (!_0x386797) {
      try {
        var _0xb3ca83 = "https://api.themoviedb.org/3/movie/" + _0x24df18 + "?api_key=" + TMDB_API_KEY;
        var _0x4c3961 = yield fetchJson(_0xb3ca83);
        if (_0x4c3961 && _0x4c3961.title) {
          var _0x1b4fa0 = _0x4c3961.release_date ? _0x4c3961.release_date.split("-")[0] : "";
          _0x5cfc89 = _0x4c3961.title + (_0x1b4fa0 ? " (" + _0x1b4fa0 + ")" : "");
          _0x57a272 = yield scrapeZinkMoviesForMovies(_0x4c3961.title, _0x1b4fa0);
        }
      } catch (_0x37137f) {}
    } else {
      try {
        var _0xb3ca83 = "https://api.themoviedb.org/3/tv/" + _0x24df18 + "?api_key=" + TMDB_API_KEY;
        var _0x4c3961 = yield fetchJson(_0xb3ca83);
        if (_0x4c3961 && _0x4c3961.name) {
          var _0x1b4fa0 = _0x4c3961.first_air_date ? _0x4c3961.first_air_date.split("-")[0] : "";
          _0x5cfc89 = _0x4c3961.name + " S" + String(_0x2f5472).padStart(2, "0") + "E" + String(_0x4db0ce).padStart(2, "0");
          _0x57a272 = yield scrapeZinkMoviesForTv(_0x4c3961.name, _0x1b4fa0, _0x2f5472, _0x4db0ce);
        }
      } catch (_0x16be14) {}
    }
    if (_0x57a272.length > 0) {
      _0x2c31ff = _0x2c31ff.concat(_0x57a272);
    }
    var _0x39e550 = yield getImdbId(_0x24df18, _0xa3a911);
    if (!_0x39e550) {
      return _0x2c31ff;
    }
    var _0xb4891e = "https://gemma416okl.com/play/" + _0x39e550;
    var _0x4cdbe2 = yield fetchText(_0xb4891e, {
      headers: {
        Referer: _0x24d392 + "/"
      }
    });
    if (!_0x4cdbe2) {
      return _0x2c31ff;
    }
    var _0x49073c = extractHDVBConfig(_0x4cdbe2);
    if (!_0x49073c || !_0x49073c.file || !_0x49073c.key) {
      return _0x2c31ff;
    }
    var _0x5d612e = _0x49073c.file;
    if (_0x5d612e.startsWith("/")) {
      _0x5d612e = "https://gemma416okl.com" + _0x5d612e;
    }
    var _0xa8474e = _0x49073c.key;
    var _0xca0d79 = yield fetchJson(_0x5d612e, {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": _0xa8474e,
        "Content-Type": "application/x-www-form-urlencoded",
        Origin: "https://gemma416okl.com",
        Referer: _0xb4891e
      }
    });
    if (!_0xca0d79) {
      return _0x2c31ff;
    }
    var _0x24d392 = _0x5d612e.substring(0, _0x5d612e.lastIndexOf("/") + 1);
    var _0x8a0092 = [];
    if (_0x386797) {
      for (var _0x1512f5 = 0; _0x1512f5 < _0xca0d79.length; _0x1512f5++) {
        var _0x1fc369 = _0xca0d79[_0x1512f5];
        if (_0x1fc369.id == _0x2f5472 || _0x1fc369.title && _0x1fc369.title.indexOf(String(_0x2f5472)) > -1) {
          if (_0x1fc369.folder) {
            for (var _0x199af0 = 0; _0x199af0 < _0x1fc369.folder.length; _0x199af0++) {
              var _0x2b1477 = _0x1fc369.folder[_0x199af0];
              if (_0x2b1477.episode == _0x4db0ce || _0x2b1477.id == _0x2f5472 + "-" + _0x4db0ce) {
                if (_0x2b1477.folder) {
                  for (var _0xf0449a = 0; _0xf0449a < _0x2b1477.folder.length; _0xf0449a++) {
                    if (_0x2b1477.folder[_0xf0449a].file && _0x2b1477.folder[_0xf0449a].file.startsWith("~")) {
                      _0x8a0092.push(_0x2b1477.folder[_0xf0449a]);
                    }
                  }
                }
                break;
              }
            }
          }
          break;
        }
      }
    } else {
      for (var _0x1512f5 = 0; _0x1512f5 < _0xca0d79.length; _0x1512f5++) {
        if (_0xca0d79[_0x1512f5].file && _0xca0d79[_0x1512f5].file.startsWith("~")) {
          _0x8a0092.push(_0xca0d79[_0x1512f5]);
        }
      }
    }
    for (var _0x1512f5 = 0; _0x1512f5 < _0x8a0092.length; _0x1512f5++) {
      var _0x3eb13f = _0x8a0092[_0x1512f5];
      var _0x1d6971 = _0x3eb13f.file.substring(1);
      var _0xff839f = _0x24d392 + _0x1d6971 + ".txt";
      var _0x2099f3 = yield fetchText(_0xff839f, {
        method: "POST",
        headers: {
          "X-CSRF-TOKEN": _0xa8474e,
          "Content-Type": "application/x-www-form-urlencoded",
          Origin: "https://gemma416okl.com",
          Referer: _0xb4891e
        }
      });
      if (_0x2099f3 && _0x2099f3.indexOf(".m3u8") > -1) {
        var _0x226dc5 = _0x3eb13f.title ? " | " + _0x3eb13f.title : "";
        var _0x5077a2 = "HD · " + _0x3eb13f.title;
        _0x2c31ff.push({
          name: _0x5cfc89 + " - " + PROVIDER_NAME + _0x226dc5 + " | HD",
          title: _0x5cfc89 + " - " + PROVIDER_NAME + _0x226dc5 + " | HD",
          size: _0x5077a2,
          url: _0x2099f3.trim(),
          quality: "HD",
          headers: {
            origin: "https://i-arch-400.keymi417exx.com",
            referer: "https://i-arch-400.keymi417exx.com/"
          }
        });
      }
    }
    const _0x121780 = _0xcda202 => {
      if (_0xcda202.includes("(FSL)")) {
        return 3;
      } else if (_0xcda202.includes("(HUB)")) {
        return 2;
      } else if (_0xcda202.includes(" | ")) {
        return 1;
      } else {
        return 0;
      }
    };
    return [..._0x2c31ff].sort((_0x8c4b54, _0x373617) => {
      let _0x3e1d1f = _0x121780(_0x8c4b54.name);
      let _0x1b345f = _0x121780(_0x373617.name);
      if (_0x3e1d1f !== _0x1b345f) {
        return _0x1b345f - _0x3e1d1f;
      }
      var _0x2431d6 = {
        "2160P": 5,
        "1080P": 4,
        "720P": 3,
        "480P": 2,
        HD: 1
      };
      var _0x2d0f91 = _0x2431d6[_0x8c4b54.quality] !== undefined ? _0x2431d6[_0x8c4b54.quality] : 0;
      var _0x3560b0 = _0x2431d6[_0x373617.quality] !== undefined ? _0x2431d6[_0x373617.quality] : 0;
      return _0x3560b0 - _0x2d0f91;
    });
    return _0x2c31ff;
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams
  };
} else {
  global.getStreams = getStreams;
}