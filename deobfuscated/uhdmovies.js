'use strict';

var DOMAIN = global.urls && global.urls.uhdmovies || "https://uhdmovies.food";
var TMDB_API = "https://api.themoviedb.org/3";
var TMDB_API_KEY = "1865f43a0549ca50d341dd9ab8b29f49";
var USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
function getBaseUrl(_0x384f34) {
  if (!_0x384f34) {
    return DOMAIN;
  }
  var _0x15054e = _0x384f34.match(/^(https?:\/\/[^\/]+)/);
  if (_0x15054e) {
    return _0x15054e[1];
  } else {
    return DOMAIN;
  }
}
function fixUrl(_0x2d3b4c, _0xddc5cb) {
  if (!_0x2d3b4c) {
    return "";
  }
  if (_0x2d3b4c.indexOf("http") === 0) {
    return _0x2d3b4c;
  }
  if (_0x2d3b4c.indexOf("//") === 0) {
    return "https:" + _0x2d3b4c;
  }
  if (_0x2d3b4c.indexOf("/") === 0) {
    return _0xddc5cb + _0x2d3b4c;
  }
  return _0xddc5cb + "/" + _0x2d3b4c;
}
function toFormEncoded(_0x3eef40) {
  return Object.keys(_0x3eef40).map(function (_0x55bd64) {
    return encodeURIComponent(_0x55bd64) + "=" + encodeURIComponent(_0x3eef40[_0x55bd64] || "");
  }).join("&");
}
function stripTags(_0x109367) {
  return (_0x109367 || "").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#39;/g, "'").replace(/&nbsp;/g, " ").trim();
}
function extractFormAction(_0x1e9847) {
  var _0x43bfc6 = _0x1e9847.match(/<form[^>]*id="landing"[^>]*action="([^"]+)"/i) || _0x1e9847.match(/<form[^>]*action="([^"]+)"[^>]*id="landing"/i);
  if (_0x43bfc6) {
    return _0x43bfc6[1];
  } else {
    return null;
  }
}
function extractFormInputs(_0x45ca9d) {
  var _0x37dbd8 = {};
  var _0x13b1e1 = _0x45ca9d.match(/<form[^>]*id="landing"[^>]*>([\s\S]*?)<\/form>/i) || _0x45ca9d.match(/<form[^>]*>([\s\S]*?)<\/form>/i);
  var _0x20ea5f = _0x13b1e1 ? _0x13b1e1[1] : _0x45ca9d;
  var _0x14f7b3 = /<input[^>]+>/gi;
  var _0x341cbd;
  while ((_0x341cbd = _0x14f7b3.exec(_0x20ea5f)) !== null) {
    var _0x15e403 = _0x341cbd[0].match(/name="([^"]+)"/i);
    var _0x20c8b6 = _0x341cbd[0].match(/value="([^"]*)"/i);
    if (_0x15e403) {
      _0x37dbd8[_0x15e403[1]] = _0x20c8b6 ? _0x20c8b6[1] : "";
    }
  }
  return _0x37dbd8;
}
function extractScriptContaining(_0x515780, _0x40e404) {
  var _0x3990f3 = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  var _0x5305c9;
  while ((_0x5305c9 = _0x3990f3.exec(_0x515780)) !== null) {
    if (_0x5305c9[1].indexOf(_0x40e404) !== -1) {
      return _0x5305c9[1];
    }
  }
  return "";
}
function extractMetaRefresh(_0x1e5dc2) {
  var _0x4ec6e6 = _0x1e5dc2.match(/<meta[^>]*http-equiv="refresh"[^>]*content="([^"]+)"/i) || _0x1e5dc2.match(/<meta[^>]*content="([^"]+)"[^>]*http-equiv="refresh"/i);
  if (!_0x4ec6e6) {
    return null;
  }
  var _0x1a89d7 = _0x4ec6e6[1].match(/url=(.+)/i);
  if (_0x1a89d7) {
    return _0x1a89d7[1].trim();
  } else {
    return null;
  }
}
function extractBtnSuccessLinks(_0x3961e5) {
  var _0x5dc863 = [];
  var _0x1cab37 = {};
  var _0x4e382e = [/<a[^>]*class="[^"]*btn-success[^"]*"[^>]*href="([^"]+)"/gi, /<a[^>]*href="([^"]+)"[^>]*class="[^"]*btn-success[^"]*"/gi];
  for (var _0x923f25 = 0; _0x923f25 < _0x4e382e.length; _0x923f25++) {
    var _0x2a4b15 = _0x4e382e[_0x923f25];
    var _0x31bd0b;
    while ((_0x31bd0b = _0x2a4b15.exec(_0x3961e5)) !== null) {
      if (_0x31bd0b[1].indexOf("http") === 0 && !_0x1cab37[_0x31bd0b[1]]) {
        _0x1cab37[_0x31bd0b[1]] = true;
        _0x5dc863.push(_0x31bd0b[1]);
      }
    }
  }
  return _0x5dc863;
}
function extractZfileFormData(_0x449a89) {
  var _0x39916b = {};
  var _0x4225da = /formData\.append\(["']([^"']+)["']\s*,\s*["']([^"']*)["']\)/gi;
  var _0x367e5b;
  while ((_0x367e5b = _0x4225da.exec(_0x449a89)) !== null) {
    _0x39916b[_0x367e5b[1]] = _0x367e5b[2];
  }
  return _0x39916b;
}
function extractTextCenterLinks(_0x4538cf) {
  var _0x2d696f = [];
  var _0x33503e = /<div[^>]*class="[^"]*text-center[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
  var _0x44465c;
  while ((_0x44465c = _0x33503e.exec(_0x4538cf)) !== null) {
    var _0x493183 = _0x44465c[1];
    var _0x38b681 = /<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
    var _0xac078e;
    while ((_0xac078e = _0x38b681.exec(_0x493183)) !== null) {
      _0x2d696f.push({
        href: _0xac078e[1],
        text: stripTags(_0xac078e[2])
      });
    }
  }
  return _0x2d696f;
}
function extractFirstListGroupItem(_0x2d225b) {
  var _0x5aff06 = _0x2d225b.match(/<li[^>]*class="[^"]*list-group-item[^"]*"[^>]*>([\s\S]*?)<\/li>/i);
  if (_0x5aff06) {
    return stripTags(_0x5aff06[1]);
  } else {
    return "";
  }
}
function extractSizeFromHtml(_0x4fb999) {
  var _0x230f1b = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  var _0x5bf728;
  while ((_0x5bf728 = _0x230f1b.exec(_0x4fb999)) !== null) {
    var _0xf37ac2 = stripTags(_0x5bf728[1]);
    if (_0xf37ac2.indexOf("Size :") !== -1 || _0xf37ac2.indexOf("Size:") !== -1) {
      return _0xf37ac2.replace(/Size\s*:\s*/i, "").trim();
    }
  }
  return "";
}
function getIndexQuality(_0x5de58a) {
  if (!_0x5de58a) {
    return "Unknown";
  }
  var _0x30d1fb = _0x5de58a.match(/(\d{3,4})[pP]/);
  if (_0x30d1fb) {
    return _0x30d1fb[1] + "p";
  }
  if (/\b4[kK]\b/.test(_0x5de58a) || /\bUHD\b(?!movies)/i.test(_0x5de58a)) {
    return "2160p";
  }
  return "Unknown";
}
function buildQualityLabel(_0x83ca95) {
  var _0x102dd0 = getIndexQuality(_0x83ca95);
  var _0xc65b19 = _0x102dd0 === "2160p" ? "4K" : _0x102dd0;
  var _0x57ba8f = null;
  if (/remux/i.test(_0x83ca95)) {
    _0x57ba8f = "BluRay REMUX";
  } else if (/blu.?ray|bluray/i.test(_0x83ca95)) {
    _0x57ba8f = "BluRay";
  } else if (/web.?dl/i.test(_0x83ca95)) {
    _0x57ba8f = "WEB-DL";
  } else if (/webrip/i.test(_0x83ca95)) {
    _0x57ba8f = "WEBRip";
  } else if (/hdrip/i.test(_0x83ca95)) {
    _0x57ba8f = "HDRip";
  } else if (/dvdrip/i.test(_0x83ca95)) {
    _0x57ba8f = "DVDRip";
  } else if (/hdtv/i.test(_0x83ca95)) {
    _0x57ba8f = "HDTV";
  }
  var _0x1106dd = null;
  if (/\bHEVC\b|\bx265\b|\bH\.?265\b/i.test(_0x83ca95)) {
    _0x1106dd = "x265/HEVC";
  } else if (/\bAVC\b|\bx264\b|\bH\.?264\b/i.test(_0x83ca95)) {
    _0x1106dd = "x264/AVC";
  }
  return [_0xc65b19, _0x57ba8f, _0x1106dd].filter(Boolean).join(" | ");
}
function fetchText(_0x2901de, _0x1a5832) {
  var _0x16479d = Object.assign({
    "User-Agent": USER_AGENT
  }, _0x1a5832 || {});
  return fetch(_0x2901de, {
    headers: _0x16479d,
    redirect: "follow"
  }).then(function (_0x63ffcb) {
    return _0x63ffcb.text();
  });
}
function fetchJson(_0x1a44cf) {
  return fetch(_0x1a44cf, {
    headers: {
      "User-Agent": USER_AGENT
    }
  }).then(function (_0xdabbfc) {
    return _0xdabbfc.json();
  });
}
function getTmdbDetails(_0x2b17b7, _0x2fb9bb) {
  var _0x594c24 = _0x2fb9bb === "series" || _0x2fb9bb === "tv";
  var _0x173b83 = _0x594c24 ? "tv" : "movie";
  var _0x27952a = TMDB_API + "/" + _0x173b83 + "/" + _0x2b17b7 + "?api_key=" + TMDB_API_KEY;
  console.log("[UHDMovies] TMDB: " + _0x27952a);
  return fetchJson(_0x27952a).then(function (_0x225106) {
    if (_0x594c24) {
      return {
        title: _0x225106.name,
        year: _0x225106.first_air_date ? _0x225106.first_air_date.slice(0, 4) : null
      };
    }
    return {
      title: _0x225106.title,
      year: _0x225106.release_date ? _0x225106.release_date.slice(0, 4) : null
    };
  }).catch(function (_0x350776) {
    console.error("[UHDMovies] TMDB error: " + _0x350776.message);
    return null;
  });
}
function searchByTitle(_0x135c5c, _0x5f3dcb) {
  var _0x51f6d6 = _0x135c5c.replace(/:/g, "").replace(/\s+/g, " ").trim();
  var _0x3ec4fd = encodeURIComponent((_0x51f6d6 + " " + (_0x5f3dcb || "")).trim());
  var _0x3448ac = DOMAIN + "/?s=" + _0x3ec4fd;
  console.log("[UHDMovies] Search: " + _0x3448ac);
  return fetchText(_0x3448ac).then(function (_0x5a45d3) {
    return parseSearchResults(_0x5a45d3);
  }).catch(function (_0x16c547) {
    console.error("[UHDMovies] Search error: " + _0x16c547.message);
    return [];
  });
}
function parseSearchResults(_0x307a80) {
  var _0x9076bc = [];
  var _0x46653f = _0x307a80.split(/<article\b/i);
  for (var _0x3c7d91 = 1; _0x3c7d91 < _0x46653f.length; _0x3c7d91++) {
    var _0x31780e = "<article" + _0x46653f[_0x3c7d91];
    var _0x3e3abe = _0x31780e.match(/<article[^>]*class="([^"]*)"/i);
    if (!_0x3e3abe || _0x3e3abe[1].indexOf("gridlove-post") === -1) {
      continue;
    }
    var _0x289a5f = _0x31780e.match(/<h1[^>]*class="[^"]*sanket[^"]*"[^>]*>([\s\S]*?)<\/h1>/i);
    var _0xc7ab24 = _0x289a5f ? stripTags(_0x289a5f[1]).replace(/^Download\s+/i, "") : "";
    var _0x5f3048 = _0xc7ab24.match(/^(.*\)\d*)/);
    var _0xf4f547 = _0x5f3048 ? _0x5f3048[1] : _0xc7ab24;
    var _0xdf7136 = _0x31780e.match(/<div[^>]*class="[^"]*entry-image[^"]*"[^>]*>[\s\S]*?<a\s[^>]*href="([^"]+)"/i);
    var _0x121e15 = _0xdf7136 ? _0xdf7136[1] : null;
    if (_0x121e15 && _0xf4f547) {
      _0x9076bc.push({
        title: _0xf4f547,
        url: _0x121e15,
        rawTitle: _0xc7ab24
      });
    }
  }
  console.log("[UHDMovies] Results: " + _0x9076bc.length);
  return _0x9076bc;
}
function bypassHrefli(_0x26335c) {
  var _0x44654d = getBaseUrl(_0x26335c);
  console.log("[UHDMovies] bypassHrefli: " + _0x26335c);
  return fetchText(_0x26335c).then(function (_0x5e1b6a) {
    var _0x2e7c67 = extractFormAction(_0x5e1b6a);
    var _0x354c48 = extractFormInputs(_0x5e1b6a);
    if (!_0x2e7c67) {
      return Promise.resolve(null);
    }
    return fetch(_0x2e7c67, {
      method: "POST",
      headers: {
        "User-Agent": USER_AGENT,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: toFormEncoded(_0x354c48)
    }).then(function (_0x486934) {
      return _0x486934.text();
    });
  }).then(function (_0x36e2ab) {
    if (!_0x36e2ab) {
      return null;
    }
    var _0x25bfc0 = extractFormAction(_0x36e2ab);
    var _0x323b36 = extractFormInputs(_0x36e2ab);
    if (!_0x25bfc0) {
      return null;
    }
    return fetch(_0x25bfc0, {
      method: "POST",
      headers: {
        "User-Agent": USER_AGENT,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: toFormEncoded(_0x323b36)
    }).then(function (_0x21d6ba) {
      return _0x21d6ba.text().then(function (_0x22b762) {
        return {
          html: _0x22b762,
          formData: _0x323b36
        };
      });
    });
  }).then(function (_0x2c1983) {
    if (!_0x2c1983) {
      return null;
    }
    var _0x386b72 = extractScriptContaining(_0x2c1983.html, "?go=");
    var _0x49ebf0 = _0x386b72.match(/\?go=([^"]+)/);
    if (!_0x49ebf0) {
      return null;
    }
    var _0x2ec700 = _0x49ebf0[1];
    var _0x56299b = _0x2c1983.formData._wp_http2 || "";
    return fetchText(_0x44654d + "?go=" + _0x2ec700, {
      Cookie: _0x2ec700 + "=" + _0x56299b
    });
  }).then(function (_0x2c5859) {
    if (!_0x2c5859) {
      return null;
    }
    var _0x9efaff = extractMetaRefresh(_0x2c5859);
    return _0x9efaff || null;
  }).then(function (_0x1e23b9) {
    if (!_0x1e23b9) {
      return null;
    }
    return fetchText(_0x1e23b9).then(function (_0x423134) {
      var _0x5ec931 = _0x423134.match(/replace\("([^"]+)"\)/);
      if (!_0x5ec931 || _0x5ec931[1] === "/404") {
        return null;
      }
      return fixUrl(_0x5ec931[1], getBaseUrl(_0x1e23b9));
    });
  }).catch(function (_0x1ce14b) {
    console.error("[UHDMovies] bypassHrefli error: " + _0x1ce14b.message);
    return null;
  });
}
function extractVideoSeed(_0x48a7fc) {
  console.log("[UHDMovies] VideoSeed: " + _0x48a7fc);
  var _0x577ed4 = _0x48a7fc.match(/^https?:\/\/([^\/]+)/);
  var _0x4b3c36 = _0x577ed4 ? _0x577ed4[1] : "video-seed.xyz";
  var _0x64f435 = _0x48a7fc.split("?url=");
  if (_0x64f435.length < 2) {
    return Promise.resolve(null);
  }
  var _0x585d50 = _0x64f435[1];
  return fetch("https://" + _0x4b3c36 + "/api", {
    method: "POST",
    headers: {
      "User-Agent": USER_AGENT,
      "Content-Type": "application/x-www-form-urlencoded",
      "x-token": _0x4b3c36,
      Referer: _0x48a7fc
    },
    body: "keys=" + encodeURIComponent(_0x585d50)
  }).then(function (_0x503e74) {
    return _0x503e74.text();
  }).then(function (_0x36895f) {
    var _0x53a1c6 = _0x36895f.match(/url":"([^"]+)"/);
    if (_0x53a1c6) {
      return _0x53a1c6[1].replace(/\\\//g, "/");
    } else {
      return null;
    }
  }).catch(function (_0x300bbb) {
    console.error("[UHDMovies] VideoSeed error: " + _0x300bbb.message);
    return null;
  });
}
function extractResumeBot(_0x32f0d5) {
  console.log("[UHDMovies] ResumeBot: " + _0x32f0d5);
  return fetchText(_0x32f0d5).then(function (_0x1f62cb) {
    var _0x58b916 = _0x1f62cb.match(/formData\.append\('token', '([a-f0-9]+)'\)/);
    var _0x1b5ba3 = _0x1f62cb.match(/fetch\('\/download\?id=([a-zA-Z0-9\/+]+)'/);
    if (!_0x58b916 || !_0x1b5ba3) {
      return null;
    }
    var _0x484a96 = _0x58b916[1];
    var _0x18e2df = _0x1b5ba3[1];
    var _0x3fd551 = _0x32f0d5.split("/download")[0];
    return fetch(_0x3fd551 + "/download?id=" + _0x18e2df, {
      method: "POST",
      headers: {
        "User-Agent": USER_AGENT,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "*/*",
        Origin: _0x3fd551,
        Referer: _0x32f0d5
      },
      body: "token=" + encodeURIComponent(_0x484a96)
    });
  }).then(function (_0xe5482e) {
    if (!_0xe5482e) {
      return null;
    }
    return _0xe5482e.text();
  }).then(function (_0x55ee1a) {
    if (!_0x55ee1a) {
      return null;
    }
    try {
      var _0x4c0a2d = JSON.parse(_0x55ee1a);
      if (_0x4c0a2d.url && _0x4c0a2d.url.indexOf("http") === 0) {
        return _0x4c0a2d.url;
      } else {
        return null;
      }
    } catch (_0x8cd49b) {
      return null;
    }
  }).catch(function (_0x292ed1) {
    console.error("[UHDMovies] ResumeBot error: " + _0x292ed1.message);
    return null;
  });
}
function extractCFType1(_0x3d4a12) {
  console.log("[UHDMovies] CFType1: " + _0x3d4a12);
  return fetchText(_0x3d4a12 + "?type=1").then(function (_0x3dab89) {
    return extractBtnSuccessLinks(_0x3dab89);
  }).catch(function (_0x32a49d) {
    console.error("[UHDMovies] CFType1 error: " + _0x32a49d.message);
    return [];
  });
}
function extractResumeCloudLink(_0x658e34, _0x3b9854) {
  console.log("[UHDMovies] ResumeCloud: " + _0x658e34 + _0x3b9854);
  var _0x59d400 = _0x658e34 + _0x3b9854;
  return fetchText(_0x59d400).then(function (_0x59cd7e) {
    var _0x599ea9 = extractBtnSuccessLinks(_0x59cd7e);
    if (_0x599ea9.length) {
      return _0x599ea9[0];
    }
    var _0x3e41aa = extractZfileFormData(_0x59cd7e);
    if (!_0x3e41aa.key) {
      return null;
    }
    return fetch(_0x59d400, {
      method: "POST",
      headers: {
        "User-Agent": USER_AGENT,
        "Content-Type": "application/x-www-form-urlencoded",
        "x-token": _0x658e34.replace(/^https?:\/\//, ""),
        Referer: _0x59d400
      },
      body: toFormEncoded(_0x3e41aa)
    }).then(function (_0x51fa8a) {
      return _0x51fa8a.json();
    }).then(function (_0x5d5de0) {
      if (_0x5d5de0 && (_0x5d5de0.url || _0x5d5de0.visit_url)) {
        return _0x5d5de0.url || _0x5d5de0.visit_url;
      }
      return null;
    }).catch(function () {
      return null;
    });
  }).catch(function (_0x20bd75) {
    console.error("[UHDMovies] ResumeCloud error: " + _0x20bd75.message);
    return null;
  });
}
function extractDriveseedPage(_0x44ae58) {
  console.log("[UHDMovies] Driveseed: " + _0x44ae58);
  var _0x4e3a6c = [];
  return Promise.resolve().then(function () {
    if (_0x44ae58.indexOf("r?key=") !== -1) {
      return fetchText(_0x44ae58).then(function (_0x3f5dc9) {
        var _0x48dcb3 = _0x3f5dc9.match(/replace\("([^"]+)"\)/);
        if (!_0x48dcb3) {
          return _0x3f5dc9;
        }
        var _0x2f3d77 = getBaseUrl(_0x44ae58);
        return fetchText(_0x2f3d77 + _0x48dcb3[1]);
      });
    }
    return fetchText(_0x44ae58);
  }).then(function (_0x53b1ab) {
    var _0x4d89de = getBaseUrl(_0x44ae58);
    var _0x3d4616 = extractFirstListGroupItem(_0x53b1ab);
    var _0x5d102d = _0x3d4616.replace("Name : ", "").trim();
    var _0x564069 = extractSizeFromHtml(_0x53b1ab);
    var _0x2e9e8f = buildQualityLabel(_0x3d4616);
    var _0x27d4c4 = _0x5d102d.replace(/\.[a-z0-9]+$/i, "").trim();
    var _0x343e94 = _0x564069 ? " [" + _0x564069 + "]" : "";
    var _0x51674d = extractTextCenterLinks(_0x53b1ab);
    var _0x39d819 = [];
    _0x51674d.forEach(function (_0x2459ab) {
      var _0x336990 = (_0x2459ab.text || "").toLowerCase();
      var _0x4a72af = _0x2459ab.href;
      if (!_0x4a72af) {
        return;
      }
      if (_0x336990.indexOf("resume worker bot") !== -1) {
        _0x39d819.push(extractResumeBot(_0x4a72af).then(function (_0x8dd210) {
          if (_0x8dd210) {
            _0x4e3a6c.push({
              name: "UHDMovies",
              title: "Worker | " + _0x2e9e8f + _0x343e94 + "\n" + _0x27d4c4,
              url: _0x8dd210,
              quality: _0x2e9e8f,
              seekable: true
            });
          }
        }));
      } else if (_0x336990.indexOf("direct links") !== -1) {
        _0x39d819.push(extractCFType1(_0x4d89de + _0x4a72af).then(function (_0x2f86ca) {
          _0x2f86ca.forEach(function (_0x51d2c4) {
            _0x4e3a6c.push({
              name: "UHDMovies",
              title: _0x2e9e8f + _0x343e94 + "\n" + _0x27d4c4,
              url: _0x51d2c4,
              quality: _0x2e9e8f,
              seekable: false
            });
          });
        }));
      } else if (_0x336990.indexOf("resume cloud") !== -1) {
        _0x39d819.push(extractResumeCloudLink(_0x4d89de, _0x4a72af).then(function (_0x53f43e) {
          if (_0x53f43e) {
            _0x4e3a6c.push({
              name: "UHDMovies",
              title: "Worker | " + _0x2e9e8f + _0x343e94 + "\n" + _0x27d4c4,
              url: _0x53f43e,
              quality: _0x2e9e8f,
              seekable: true
            });
          }
        }));
      } else if (_0x336990.indexOf("cloud download") !== -1) {
        _0x4e3a6c.push({
          name: "UHDMovies",
          title: _0x2e9e8f + _0x343e94 + "\n" + _0x27d4c4,
          url: _0x4a72af,
          quality: _0x2e9e8f,
          seekable: false
        });
      }
    });
    return Promise.all(_0x39d819).then(function () {
      return _0x4e3a6c;
    });
  }).catch(function (_0x2d794b) {
    console.error("[UHDMovies] Driveseed error: " + _0x2d794b.message);
    return [];
  });
}
function getMovieLinks(_0x11d26e) {
  console.log("[UHDMovies] Movie links: " + _0x11d26e);
  return fetchText(_0x11d26e).then(function (_0x168924) {
    var _0x2058da = [];
    var _0x2992d4 = _0x168924.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*)/i);
    var _0x3114dc = _0x2992d4 ? _0x2992d4[1] : _0x168924;
    var _0x4e8578 = _0x3114dc.split(/<\/?p(?:\s[^>]*)?\s*>/i);
    for (var _0x57e0ff = 0; _0x57e0ff < _0x4e8578.length; _0x57e0ff++) {
      if (!/\[.*\]/.test(_0x4e8578[_0x57e0ff])) {
        continue;
      }
      var _0x2f53d2 = stripTags(_0x4e8578[_0x57e0ff]).split("Download")[0].trim();
      for (var _0x5527a6 = _0x57e0ff + 1; _0x5527a6 < Math.min(_0x57e0ff + 6, _0x4e8578.length); _0x5527a6++) {
        var _0x532967 = _0x4e8578[_0x5527a6].match(/<a[^>]*class="[^"]*maxbutton-1[^"]*"[^>]*href="([^"]+)"/i) || _0x4e8578[_0x5527a6].match(/<a[^>]*href="([^"]+)"[^>]*class="[^"]*maxbutton-1[^"]*"/i);
        if (_0x532967) {
          _0x2058da.push({
            sourceName: _0x2f53d2,
            sourceLink: _0x532967[1]
          });
          break;
        }
      }
    }
    console.log("[UHDMovies] Movie links found: " + _0x2058da.length);
    return _0x2058da;
  }).catch(function (_0x99089) {
    console.error("[UHDMovies] getMovieLinks error: " + _0x99089.message);
    return [];
  });
}
function getTvEpisodeLink(_0x12c5f6, _0x4cee22, _0x57bdc8) {
  console.log("[UHDMovies] TV S" + _0x4cee22 + "E" + _0x57bdc8 + ": " + _0x12c5f6);
  return fetchText(_0x12c5f6).then(function (_0x2b5884) {
    var _0x36737a = [];
    var _0x47fa1e = _0x2b5884.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*)/i);
    var _0x2cd660 = _0x47fa1e ? _0x47fa1e[1] : _0x2b5884;
    var _0x1b5b82 = /<a\s[^>]*class="[^"]*maxbutton[^"]*"[^>]*>[\s\S]*?<\/a>/gi;
    var _0x33f513;
    while ((_0x33f513 = _0x1b5b82.exec(_0x2cd660)) !== null) {
      var _0x128687 = _0x33f513[0].match(/href="([^"]+)"/);
      if (!_0x128687) {
        continue;
      }
      var _0x4ff380 = stripTags(_0x33f513[0]);
      var _0x584843 = _0x4ff380.match(/Episode\s*(\d+)/i);
      if (!_0x584843 || parseInt(_0x584843[1]) !== _0x57bdc8) {
        continue;
      }
      var _0x51d48c = _0x2cd660.substring(0, _0x33f513.index);
      var _0x5ecd54 = _0x51d48c.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
      var _0x3cbddd = "";
      if (_0x5ecd54) {
        for (var _0x1180b7 = _0x5ecd54.length - 1; _0x1180b7 >= 0; _0x1180b7--) {
          var _0x44531c = stripTags(_0x5ecd54[_0x1180b7]);
          if (_0x44531c.length > 10) {
            _0x3cbddd = _0x44531c;
            break;
          }
        }
      }
      var _0x5a358e = _0x3cbddd.match(/(\d+(?:\.\d+)?\s*(?:MB|GB))/i);
      _0x36737a.push({
        sourceLink: _0x128687[1],
        quality: buildQualityLabel(_0x3cbddd),
        size: _0x5a358e ? _0x5a358e[1] : null,
        details: _0x3cbddd
      });
    }
    console.log("[UHDMovies] Episode links found: " + _0x36737a.length);
    return _0x36737a;
  }).catch(function (_0x2d1c78) {
    console.error("[UHDMovies] getTvEpisodeLink error: " + _0x2d1c78.message);
    return [];
  });
}
function getStreams(_0x321dd7, _0x3e06be, _0x4c8ff1, _0x778d5f) {
  console.log("[UHDMovies] getStreams " + _0x3e06be + " " + _0x321dd7);
  var _0x1fba68 = [];
  var _0x1925d2 = "";
  return getTmdbDetails(_0x321dd7, _0x3e06be).then(function (_0x264980) {
    if (!_0x264980) {
      return [];
    }
    _0x1925d2 = (_0x264980.title || "").toLowerCase();
    console.log("[UHDMovies] Title: " + _0x264980.title + " (" + _0x264980.year + ")");
    return searchByTitle(_0x264980.title, _0x264980.year);
  }).then(function (_0x1932ad) {
    if (!_0x1932ad || _0x1932ad.length === 0) {
      console.log("[UHDMovies] No search results");
      return [];
    }
    _0x1932ad = _0x1932ad.filter(function (_0x525704) {
      return (_0x525704.rawTitle || _0x525704.title || "").toLowerCase().indexOf(_0x1925d2) !== -1;
    });
    if (_0x1932ad.length === 0) {
      console.log("[UHDMovies] No relevant search results for: " + _0x1925d2);
      return [];
    }
    var _0x1f410e = _0x3e06be === "series" || _0x3e06be === "tv";
    function _0x27707d(_0x26a8f2) {
      if (_0x26a8f2 >= _0x1932ad.length) {
        return Promise.resolve(_0x1fba68);
      }
      var _0x3bb587 = _0x1932ad[_0x26a8f2];
      console.log("[UHDMovies] Processing: " + _0x3bb587.title);
      var _0x3552dd = _0x1f410e && _0x4c8ff1 && _0x778d5f ? getTvEpisodeLink(_0x3bb587.url, _0x4c8ff1, _0x778d5f) : getMovieLinks(_0x3bb587.url);
      return _0x3552dd.then(function (_0xfb9be2) {
        var _0x2a8787 = _0xfb9be2.map(function (_0x256739) {
          var _0x1f230 = _0x256739.sourceLink;
          if (!_0x1f230) {
            return Promise.resolve([]);
          }
          var _0x4a84c0 = _0x1f230.indexOf("unblockedgames") !== -1 ? bypassHrefli(_0x1f230) : Promise.resolve(_0x1f230);
          return _0x4a84c0.then(function (_0x5d3d86) {
            if (!_0x5d3d86) {
              return [];
            }
            if (_0x5d3d86.indexOf("driveseed") !== -1 || _0x5d3d86.indexOf("driveleech") !== -1) {
              return extractDriveseedPage(_0x5d3d86);
            }
            if (_0x5d3d86.indexOf("video-seed") !== -1) {
              return extractVideoSeed(_0x5d3d86).then(function (_0x58d23b) {
                if (!_0x58d23b) {
                  return [];
                }
                return [{
                  name: "UHDMovies",
                  title: "UHDMovies " + (_0x256739.quality || "Unknown"),
                  url: _0x58d23b,
                  quality: _0x256739.quality || "Unknown"
                }];
              });
            }
            return [{
              name: "UHDMovies",
              title: "UHDMovies " + (_0x256739.sourceName || _0x256739.quality || ""),
              url: _0x5d3d86,
              quality: _0x256739.quality || "Unknown"
            }];
          });
        });
        return Promise.all(_0x2a8787).then(function (_0x4bd4ca) {
          _0x4bd4ca.forEach(function (_0x15bf71) {
            _0x1fba68 = _0x1fba68.concat(_0x15bf71);
          });
          return _0x27707d(_0x26a8f2 + 1);
        });
      });
    }
    return _0x27707d(0).then(function (_0x28a936) {
      function _0x4ac9c2(_0x22f21f) {
        var _0xd7c3ea = _0x22f21f.seekable ? 1 : 0;
        var _0x3c86d0 = _0x22f21f.quality || "";
        var _0x30e9ca = 0;
        if (/^4K/i.test(_0x3c86d0)) {
          _0x30e9ca = 4;
        } else if (/1080p/i.test(_0x3c86d0)) {
          _0x30e9ca = 3;
        } else if (/720p/i.test(_0x3c86d0)) {
          _0x30e9ca = 2;
        } else if (/480p/i.test(_0x3c86d0)) {
          _0x30e9ca = 1;
        }
        var _0x41e60a = 0;
        if (/remux/i.test(_0x3c86d0)) {
          _0x41e60a = 5;
        } else if (/blu.?ray/i.test(_0x3c86d0)) {
          _0x41e60a = 4;
        } else if (/web.?dl/i.test(_0x3c86d0)) {
          _0x41e60a = 3;
        } else if (/webrip/i.test(_0x3c86d0)) {
          _0x41e60a = 2;
        } else if (/hdrip|dvdrip|hdtv/i.test(_0x3c86d0)) {
          _0x41e60a = 1;
        }
        return _0x30e9ca * 100 + _0x41e60a * 10 + _0xd7c3ea;
      }
      _0x28a936.sort(function (_0x10ab9a, _0xa387a) {
        return _0x4ac9c2(_0xa387a) - _0x4ac9c2(_0x10ab9a);
      });
      return _0x28a936;
    });
  }).catch(function (_0x38b7ac) {
    console.error("[UHDMovies] Error: " + _0x38b7ac.message);
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