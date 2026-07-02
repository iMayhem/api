var cheerio = require("cheerio-without-node-native");
var PROVIDER_NAME = "4khdhub";
var DOMAINS_URL = "https://raw.githubusercontent.com/Xyr0nX/NGEX/refs/heads/main/manifest.json";
var DEFAULT_MAIN_URL = "https://4khdhub.dad";
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var DEBUG = false;
var FALLBACK_DOMAINS = [DEFAULT_MAIN_URL];
var KNOWN_URLS = {
  "The Drama 2026": "https://4khdhub.link/the-drama-movie-6729/"
};
var DEFAULT_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  Connection: "keep-alive",
  "Upgrade-Insecure-Requests": "1"
};
var cachedDomains = null;
var domainCacheTs = 0;
var DOMAIN_CACHE_TTL = 3600000;
var cachedActiveMainUrl = null;
var activeMainUrlTs = 0;
var ACTIVE_URL_CACHE_TTL = 1800000;
function dbg() {
  if (!DEBUG) {
    return;
  }
  console.log.apply(console, arguments);
}
function assign(_0x1769b6, _0x1900b0) {
  var _0x4ad265 = {};
  var _0x2a3994;
  _0x1769b6 = _0x1769b6 || {};
  _0x1900b0 = _0x1900b0 || {};
  for (_0x2a3994 in _0x1769b6) {
    _0x4ad265[_0x2a3994] = _0x1769b6[_0x2a3994];
  }
  for (_0x2a3994 in _0x1900b0) {
    _0x4ad265[_0x2a3994] = _0x1900b0[_0x2a3994];
  }
  return _0x4ad265;
}
function fetchText(_0x5c01e4, _0x3529ba) {
  _0x3529ba = _0x3529ba || {};
  return fetch(_0x5c01e4, {
    method: _0x3529ba.method || "GET",
    redirect: _0x3529ba.redirect || "follow",
    headers: assign(DEFAULT_HEADERS, _0x3529ba.headers || {}),
    body: _0x3529ba.body
  }).then(function (_0x2952f6) {
    if (!_0x2952f6.ok && _0x2952f6.status !== 301 && _0x2952f6.status !== 302) {
      throw new Error("HTTP " + _0x2952f6.status + " -> " + _0x5c01e4);
    }
    return _0x2952f6.text();
  });
}
function fetchJson(_0x400ad5, _0x40d613) {
  _0x40d613 = _0x40d613 || {};
  return fetch(_0x400ad5, {
    method: _0x40d613.method || "GET",
    redirect: _0x40d613.redirect || "follow",
    headers: assign(DEFAULT_HEADERS, _0x40d613.headers || {}),
    body: _0x40d613.body
  }).then(function (_0x5e3067) {
    if (!_0x5e3067.ok) {
      throw new Error("HTTP " + _0x5e3067.status + " -> " + _0x400ad5);
    }
    return _0x5e3067.json();
  });
}
function fetchResponse(_0x2eb7c4, _0x148880) {
  _0x148880 = _0x148880 || {};
  return fetch(_0x2eb7c4, {
    method: _0x148880.method || "GET",
    redirect: _0x148880.redirect || "follow",
    headers: assign(DEFAULT_HEADERS, _0x148880.headers || {}),
    body: _0x148880.body
  });
}
function fixUrl(_0x2ed7ab, _0x5cdca1) {
  if (!_0x2ed7ab) {
    return "";
  }
  if (_0x2ed7ab.indexOf("http://") === 0 || _0x2ed7ab.indexOf("https://") === 0) {
    return _0x2ed7ab;
  }
  if (_0x2ed7ab.indexOf("//") === 0) {
    return "https:" + _0x2ed7ab;
  }
  try {
    return new URL(_0x2ed7ab, _0x5cdca1).toString();
  } catch (_0xb765f6) {
    return _0x2ed7ab;
  }
}
function normalizeTitle(_0x4049e6) {
  return String(_0x4049e6 || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
function decodeBase64(_0x4f9853) {
  try {
    return Buffer.from(_0x4f9853, "base64").toString("binary");
  } catch (_0x52baac) {
    return "";
  }
}
function levenshteinDistance(_0x1d7ed8, _0x15868f) {
  if (_0x1d7ed8 === _0x15868f) {
    return 0;
  }
  var _0x5a7721 = _0x1d7ed8.length;
  var _0x3e7fbd = _0x15868f.length;
  if (_0x5a7721 === 0) {
    return _0x3e7fbd;
  }
  if (_0x3e7fbd === 0) {
    return _0x5a7721;
  }
  var _0x53b94c = [];
  var _0x432ad3;
  var _0x4d68e6;
  var _0x3001b6;
  for (_0x432ad3 = 0; _0x432ad3 <= _0x5a7721; _0x432ad3 += 1) {
    _0x53b94c[_0x432ad3] = [];
    _0x53b94c[_0x432ad3][0] = _0x432ad3;
  }
  for (_0x4d68e6 = 0; _0x4d68e6 <= _0x3e7fbd; _0x4d68e6 += 1) {
    _0x53b94c[0][_0x4d68e6] = _0x4d68e6;
  }
  for (_0x432ad3 = 1; _0x432ad3 <= _0x5a7721; _0x432ad3 += 1) {
    for (_0x4d68e6 = 1; _0x4d68e6 <= _0x3e7fbd; _0x4d68e6 += 1) {
      _0x3001b6 = _0x1d7ed8.charAt(_0x432ad3 - 1) === _0x15868f.charAt(_0x4d68e6 - 1) ? 0 : 1;
      _0x53b94c[_0x432ad3][_0x4d68e6] = Math.min(_0x53b94c[_0x432ad3 - 1][_0x4d68e6] + 1, _0x53b94c[_0x432ad3][_0x4d68e6 - 1] + 1, _0x53b94c[_0x432ad3 - 1][_0x4d68e6 - 1] + _0x3001b6);
    }
  }
  return _0x53b94c[_0x5a7721][_0x3e7fbd];
}
function detectQualityFromSources(_0x1f9c93) {
  var _0x39ab70 = Array.isArray(_0x1f9c93) ? _0x1f9c93 : [_0x1f9c93];
  var _0x59eea6;
  var _0x237f86;
  var _0x44fbf6;
  for (_0x59eea6 = 0; _0x59eea6 < _0x39ab70.length; _0x59eea6 += 1) {
    _0x237f86 = String(_0x39ab70[_0x59eea6] || "").toLowerCase();
    _0x44fbf6 = _0x237f86.match(/\b(2160p|1440p|1080p|720p|480p)\b/);
    if (_0x44fbf6) {
      return _0x44fbf6[1];
    }
    if (/\b4k\b|\buhd\b/.test(_0x237f86) && !/\b1080p\b/.test(_0x237f86)) {
      return "2160p";
    }
  }
  return "Auto";
}
function inferLang(_0x53511e) {
  var _0x2b19f2 = String(_0x53511e || "").toLowerCase();
  var _0x24dd9e = [];
  if (_0x2b19f2.indexOf("hindi") !== -1) {
    _0x24dd9e.push("Hindi");
  }
  if (_0x2b19f2.indexOf("tamil") !== -1) {
    _0x24dd9e.push("Tamil");
  }
  if (_0x2b19f2.indexOf("telugu") !== -1) {
    _0x24dd9e.push("Telugu");
  }
  if (_0x2b19f2.indexOf("malayalam") !== -1) {
    _0x24dd9e.push("Malayalam");
  }
  if (_0x2b19f2.indexOf("kannada") !== -1) {
    _0x24dd9e.push("Kannada");
  }
  if (_0x2b19f2.indexOf("bengali") !== -1) {
    _0x24dd9e.push("Bengali");
  }
  if (_0x2b19f2.indexOf("punjabi") !== -1) {
    _0x24dd9e.push("Punjabi");
  }
  if (_0x2b19f2.indexOf("english") !== -1 || /\beng\b/.test(_0x2b19f2)) {
    _0x24dd9e.push("English");
  }
  _0x24dd9e = uniqueBy(_0x24dd9e, function (_0x2ff902) {
    return _0x2ff902;
  });
  if (_0x24dd9e.length > 2) {
    return "Multi Audio";
  }
  if (_0x24dd9e.length === 2) {
    return _0x24dd9e.join("-");
  }
  if (_0x24dd9e.length === 1) {
    return _0x24dd9e[0];
  }
  if (_0x2b19f2.indexOf("dual audio") !== -1 || _0x2b19f2.indexOf("dual") !== -1) {
    return "Dual Audio";
  }
  return "EN";
}
function cleanTech(_0x61bfb5) {
  var _0x639ca7 = String(_0x61bfb5 || "").replace(/\.[a-z0-9]{2,4}$/i, "").replace(/WEB[-_. ]?DL/gi, "WEB-DL").replace(/WEB[-_. ]?RIP/gi, "WEBRIP").replace(/H[ .]?265/gi, "H265").replace(/H[ .]?264/gi, "H264").replace(/DDP[ .]?([0-9]\.[0-9])/gi, "DDP$1").replace(/DTS[-_. ]?HD[-_. ]?MA/gi, "DTSHDMA").replace(/DOLBY[-_. ]?VISION/gi, "DOLBYVISION");
  var _0x4fa236 = {
    "WEB-DL": 1,
    WEBRIP: 1,
    BLURAY: 1,
    HDRIP: 1,
    DVDRIP: 1,
    HDTV: 1,
    CAM: 1,
    TS: 1,
    BRRIP: 1,
    BDRIP: 1,
    REMUX: 1,
    H264: 1,
    H265: 1,
    X264: 1,
    X265: 1,
    HEVC: 1,
    AVC: 1,
    AAC: 1,
    AC3: 1,
    DTS: 1,
    DTSHDMA: 1,
    TRUEHD: 1,
    ATMOS: 1,
    DD: 1,
    HDR: 1,
    HDR10: 1,
    "HDR10+": 1,
    DV: 1,
    DOLBYVISION: 1,
    NF: 1,
    CR: 1,
    SDR: 1
  };
  var _0x1076ac = _0x639ca7.split(/[ ._()\[\]+-]+/);
  var _0x2e6bc6 = [];
  var _0x2d9101 = {};
  var _0x3c220d;
  var _0x24eaa9;
  for (_0x3c220d = 0; _0x3c220d < _0x1076ac.length; _0x3c220d += 1) {
    _0x24eaa9 = String(_0x1076ac[_0x3c220d] || "").toUpperCase();
    if (!_0x24eaa9) {
      continue;
    }
    if (_0x4fa236[_0x24eaa9] || /^DDP\d\.\d$/.test(_0x24eaa9)) {
      if (!_0x2d9101[_0x24eaa9]) {
        _0x2d9101[_0x24eaa9] = 1;
        _0x2e6bc6.push(_0x24eaa9);
      }
    }
  }
  return _0x2e6bc6.join(" ");
}
function cleanLabelText(_0x3baca3) {
  return String(_0x3baca3 || "").replace(/\s+/g, " ").replace(/Download HubDrive/gi, "").replace(/Download HubCloud/gi, "").replace(/Download PixelDrain/gi, "").replace(/Download BuzzServer/gi, "").replace(/4kHDHub\.Com/gi, "").replace(/4kHdHub\.com/gi, "").trim();
}
function buildStream(_0x390e92, _0x33e1d7, _0x25d98f, _0x4428f1, _0x19e302, _0x14a8c3, _0x167db2, _0x222683) {
  var _0x5f3922 = buildMeta(_0x222683, _0x390e92, _0x25d98f, _0x19e302, _0x14a8c3, _0x167db2);
  return {
    name: _0x5f3922.name,
    title: _0x5f3922.title,
    url: _0x33e1d7,
    quality: _0x25d98f,
    headers: Object.keys(_0x4428f1 || {}).length ? _0x4428f1 : undefined,
    behaviorHints: {
      bingeGroup: "4khdhub-" + String(_0x25d98f || "auto").toLowerCase()
    }
  };
}
function buildMeta(_0x563a34, _0x4ac94a, _0x3ec001, _0x4cc720, _0x2be57d, _0x242eb8) {
  var _0x17bd5f = cleanLabelText(_0x4ac94a);
  var _0x3ca48a = inferLang((_0x242eb8 || "") + " " + _0x17bd5f);
  var _0x32488f = !!_0x563a34 && (!!_0x563a34.season || !!_0x563a34.episode);
  var _0x4d7fe1 = _0x563a34 && _0x563a34.title ? _0x563a34.title : _0x32488f ? "Series" : "Movie";
  var _0x4f9eae = _0x563a34 && _0x563a34.year ? " - " + _0x563a34.year : "";
  var _0x51c116;
  if (_0x32488f) {
    var _0x47fd46 = _0x563a34.episodeTitle ? " - " + _0x563a34.episodeTitle : "";
    _0x51c116 = "📺 S" + _0x563a34.season + "E" + _0x563a34.episode + _0x47fd46 + " | " + _0x4d7fe1 + _0x4f9eae;
  } else {
    _0x51c116 = "🎬 " + _0x4d7fe1 + _0x4f9eae;
  }
  var _0x4129ef = _0x3ec001.indexOf("2160") !== -1 || _0x3ec001.indexOf("4K") !== -1 ? "💎" : "📺";
  var _0x5567bc = _0x4129ef + " " + _0x3ec001 + " | 🌍 " + _0x3ca48a + (_0x4cc720 ? " | 💾 " + _0x4cc720 : "");
  var _0x37a92a = _0x17bd5f.match(/\.(mkv|mp4|m4v|avi|mov)$/i);
  var _0x19ab9e = _0x37a92a ? _0x37a92a[1].toUpperCase() : "MKV";
  var _0x4f34a8 = "🎞️ " + _0x19ab9e + " | ℹ️ " + (_0x2be57d || "WEB-DL");
  return {
    name: "4KHDHub | " + _0x3ec001 + (_0x4cc720 ? " | " + _0x4cc720 : ""),
    title: _0x51c116 + "\n" + _0x5567bc + "\n" + _0x4f34a8
  };
}
function uniqueBy(_0x5a1608, _0x4f385d) {
  var _0xf0fef4 = {};
  var _0x169083 = [];
  var _0x4e8027;
  var _0x1e64b2;
  for (_0x4e8027 = 0; _0x4e8027 < _0x5a1608.length; _0x4e8027 += 1) {
    _0x1e64b2 = _0x4f385d(_0x5a1608[_0x4e8027]);
    if (_0xf0fef4[_0x1e64b2]) {
      continue;
    }
    _0xf0fef4[_0x1e64b2] = 1;
    _0x169083.push(_0x5a1608[_0x4e8027]);
  }
  return _0x169083;
}
function dedupeStreams(_0x521dc0) {
  return uniqueBy(_0x521dc0, function (_0x24ea92) {
    var _0x2c88ed = String(_0x24ea92.title || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    var _0x470dbb = String(_0x24ea92.quality || "").toLowerCase();
    if (!_0x470dbb) {
      var _0x5586e9 = _0x2c88ed.match(/(2160p|1080p|720p|480p)/);
      _0x470dbb = _0x5586e9 ? _0x5586e9[1] : "auto";
    }
    var _0x2b87b1 = _0x470dbb.replace(/[^a-z0-9]/g, "");
    var _0x2eff6d = String(_0x24ea92.url || "").slice(0, 60).replace(/[^a-z0-9]/g, "");
    return _0x2c88ed + "|" + _0x2b87b1 + "|" + _0x2eff6d;
  });
}
function isPlayableMediaUrl(_0x3cdc50) {
  var _0x5d9e7d = String(_0x3cdc50 || "").toLowerCase();
  if (!_0x5d9e7d) {
    return false;
  }
  if (/\.(mkv|mp4|m3u8)(\?|#|$)/.test(_0x5d9e7d)) {
    return true;
  }
  if (_0x5d9e7d.indexOf("video-downloads.googleusercontent.com/") !== -1) {
    return true;
  }
  if (_0x5d9e7d.indexOf(".r2.dev/") !== -1) {
    return true;
  }
  if (_0x5d9e7d.indexOf(".workers.dev/") !== -1) {
    return true;
  }
  if (_0x5d9e7d.indexOf("hub.lotuscdn.club/") !== -1) {
    return true;
  }
  if (_0x5d9e7d.indexOf("hub.yummy.monster/") !== -1) {
    return true;
  }
  if (_0x5d9e7d.indexOf("hub.odyssey.surf/") !== -1) {
    return true;
  }
  if (_0x5d9e7d.indexOf("hub.maverick.lat/") !== -1) {
    return true;
  }
  if (_0x5d9e7d.indexOf("cdn.fukggl.buzz/") !== -1) {
    return true;
  }
  if (_0x5d9e7d.indexOf("hub.diskcdn.buzz/") !== -1) {
    return true;
  }
  if (/\/drive\/admin(?:[/?#]|$)/.test(_0x5d9e7d)) {
    return false;
  }
  if (/^https?:\/\/(?:www\.)?google\.com\/search\?/i.test(_0x5d9e7d)) {
    return false;
  }
  if (/^https?:\/\/t\.me\//i.test(_0x5d9e7d)) {
    return false;
  }
  if (/^https?:\/\/one\.one\.one\.one\/?$/i.test(_0x5d9e7d)) {
    return false;
  }
  if (/^https?:\/\/(?:www\.)?hdhub4u\./i.test(_0x5d9e7d)) {
    return false;
  }
  if (/tinyurl\.com\/unblock-ban-site/i.test(_0x5d9e7d)) {
    return false;
  }
  if (/hubcloud\.[^\/]+\/tg\/go\?/i.test(_0x5d9e7d)) {
    return false;
  }
  if (/hubcloud\.[^\/]+\/drive\/[^\/?#]+$/i.test(_0x5d9e7d)) {
    return false;
  }
  if (_0x5d9e7d.indexOf("goldmines") !== -1 && _0x5d9e7d.indexOf(".workers.dev") !== -1) {
    return true;
  }
  if (_0x5d9e7d.indexOf("pub-") !== -1 && _0x5d9e7d.indexOf(".r2.dev/") !== -1) {
    return true;
  }
  return false;
}
function hostConfidence(_0x52f593) {
  var _0x1e86dd = String(_0x52f593 || "").toLowerCase();
  if (_0x1e86dd.indexOf("hub.lotuscdn.club") !== -1) {
    return 95;
  }
  if (_0x1e86dd.indexOf("hub.yummy.monster") !== -1) {
    return 95;
  }
  if (_0x1e86dd.indexOf("hub.odyssey.surf") !== -1) {
    return 95;
  }
  if (_0x1e86dd.indexOf("hub.maverick.lat") !== -1) {
    return 94;
  }
  if (_0x1e86dd.indexOf("cdn.fukggl.buzz") !== -1) {
    return 93;
  }
  if (_0x1e86dd.indexOf("hub.diskcdn.buzz") !== -1) {
    return 93;
  }
  if (_0x1e86dd.indexOf("hubcdn") !== -1) {
    return 80;
  }
  if (_0x1e86dd.indexOf("hblinks") !== -1) {
    return 60;
  }
  if (_0x1e86dd.indexOf("hubcloud") !== -1) {
    return 50;
  }
  if (_0x1e86dd.indexOf("hubdrive") !== -1) {
    return 30;
  }
  if (_0x1e86dd.indexOf(".workers.dev") !== -1) {
    return 25;
  }
  if (_0x1e86dd.indexOf(".r2.dev") !== -1) {
    return 22;
  }
  if (_0x1e86dd.indexOf("video-downloads.googleusercontent.com/") !== -1) {
    return 10;
  }
  return 10;
}
function sortLinksByPriority(_0x37413a) {
  return (_0x37413a || []).slice().sort(function (_0x354d52, _0x14cca6) {
    return hostConfidence(_0x14cca6.url) - hostConfidence(_0x354d52.url);
  });
}
function getDomains() {
  var _0x38bc67 = Date.now();
  if (cachedDomains && _0x38bc67 - domainCacheTs < DOMAIN_CACHE_TTL) {
    return Promise.resolve(cachedDomains);
  }
  return fetchJson(DOMAINS_URL).then(function (_0x3795b0) {
    cachedDomains = _0x3795b0 || {};
    domainCacheTs = _0x38bc67;
    return cachedDomains;
  }).catch(function () {
    cachedDomains = cachedDomains || {};
    domainCacheTs = _0x38bc67;
    return cachedDomains;
  });
}
function probeActiveDomain() {
  dbg("[probeActiveDomain] Probing", FALLBACK_DOMAINS.length, "domains...");
  return Promise.all(FALLBACK_DOMAINS.map(function (_0x5d991c) {
    return fetch(_0x5d991c + "/", {
      method: "HEAD",
      redirect: "follow",
      headers: DEFAULT_HEADERS
    }).then(function (_0x50e6d0) {
      var _0x331952 = _0x50e6d0.ok || _0x50e6d0.status === 200 || _0x50e6d0.status === 301 || _0x50e6d0.status === 302;
      dbg("[probeActiveDomain]", _0x5d991c, "->", _0x50e6d0.status, _0x331952 ? "OK" : "FAIL");
      return {
        domain: _0x5d991c,
        ok: _0x331952
      };
    }).catch(function (_0x4c78c5) {
      dbg("[probeActiveDomain]", _0x5d991c, "-> FAIL:", _0x4c78c5.message);
      return {
        domain: _0x5d991c,
        ok: false
      };
    });
  })).then(function (_0x23dad7) {
    for (var _0xc25818 = 0; _0xc25818 < _0x23dad7.length; _0xc25818++) {
      if (_0x23dad7[_0xc25818].ok) {
        dbg("[probeActiveDomain] Winner:", _0x23dad7[_0xc25818].domain);
        return _0x23dad7[_0xc25818].domain;
      }
    }
    return DEFAULT_MAIN_URL;
  });
}
function getMainUrl() {
  var _0x5e5671 = Date.now();
  if (cachedActiveMainUrl && _0x5e5671 - activeMainUrlTs < ACTIVE_URL_CACHE_TTL) {
    dbg("[getMainUrl] Using cached active URL:", cachedActiveMainUrl);
    return Promise.resolve(cachedActiveMainUrl);
  }
  return getDomains().then(function (_0x31d527) {
    var _0x3df85f = _0x31d527["4khdhub"] || _0x31d527.n4khdhub || "";
    if (_0x3df85f) {
      return fetch(_0x3df85f + "/", {
        method: "HEAD",
        redirect: "follow",
        headers: DEFAULT_HEADERS
      }).then(function (_0x538ecc) {
        if (_0x538ecc.ok || _0x538ecc.status === 200) {
          dbg("[getMainUrl] Manifest domain alive:", _0x3df85f);
          cachedActiveMainUrl = _0x3df85f;
          activeMainUrlTs = _0x5e5671;
          return _0x3df85f;
        }
        return probeActiveDomain().then(function (_0x45f8ac) {
          cachedActiveMainUrl = _0x45f8ac;
          activeMainUrlTs = _0x5e5671;
          return _0x45f8ac;
        });
      }).catch(function () {
        return probeActiveDomain().then(function (_0x38943a) {
          cachedActiveMainUrl = _0x38943a;
          activeMainUrlTs = _0x5e5671;
          return _0x38943a;
        });
      });
    }
    return probeActiveDomain().then(function (_0x1cc922) {
      cachedActiveMainUrl = _0x1cc922;
      activeMainUrlTs = _0x5e5671;
      return _0x1cc922;
    });
  }).catch(function () {
    return probeActiveDomain().then(function (_0x36857b) {
      cachedActiveMainUrl = _0x36857b;
      activeMainUrlTs = _0x5e5671;
      return _0x36857b;
    });
  });
}
function getTmdbNames(_0x446b95, _0x910b0f) {
  var _0x59cea6 = _0x910b0f === "movie" ? "movie" : "tv";
  var _0x2a68fc = "https://api.themoviedb.org/3/" + _0x59cea6 + "/" + _0x446b95 + "?api_key=" + TMDB_API_KEY;
  return fetchJson(_0x2a68fc).then(function (_0x53c552) {
    var _0x5ea69b = _0x53c552.name || _0x53c552.title || "";
    var _0x69bc69 = (_0x53c552.release_date || _0x53c552.first_air_date || "").split("-")[0];
    var _0x5d64fb = _0x53c552.runtime ? _0x53c552.runtime + "m" : "";
    return {
      title: _0x5ea69b,
      original: _0x53c552.original_name || _0x53c552.original_title || _0x5ea69b,
      year: _0x69bc69,
      duration: _0x5d64fb
    };
  }).catch(function () {
    return {
      title: "",
      original: "",
      year: "",
      duration: ""
    };
  });
}
function getTmdbEpisodeName(_0x476674, _0x164200, _0x35d6a6) {
  if (!_0x164200 || !_0x35d6a6) {
    return Promise.resolve("");
  }
  var _0x2a3168 = "https://api.themoviedb.org/3/tv/" + _0x476674 + "/season/" + _0x164200 + "/episode/" + _0x35d6a6 + "?api_key=" + TMDB_API_KEY;
  return fetchJson(_0x2a3168).then(function (_0x49cae3) {
    return _0x49cae3.name || "";
  }).catch(function () {
    return "";
  });
}
function searchContent(_0x2c9ed9, _0x31a077, _0x58ae02) {
  return getMainUrl().then(function (_0x272040) {
    var _0x581589 = _0x2c9ed9;
    if (_0x58ae02) {
      _0x581589 += " " + _0x58ae02;
    }
    var _0x402272 = _0x272040 + "/?s=" + encodeURIComponent(_0x581589);
    dbg("[searchContent] URL:", _0x402272, "| type:", _0x31a077, "| year:", _0x58ae02);
    return fetchText(_0x402272).then(function (_0x4b64ef) {
      var _0x18001c = cheerio.load(_0x4b64ef);
      var _0x384128 = [];
      var _0x444407 = ["div.card-grid a.movie-card", "a.movie-card", "div.card-grid a[href]", "div.result-item a", "article.post a.lnk-blk", "div.TPost a", "div.TPostMv a", "ul.MovieList li a"].join(", ");
      _0x18001c(_0x444407).each(function (_0x50032b, _0x1c1d99) {
        var _0x419ee5 = fixUrl(_0x18001c(_0x1c1d99).attr("href"), _0x272040);
        if (!_0x419ee5) {
          return;
        }
        if (/\/(category|tag|author|page|feed|wp-admin|wp-login|about|contact|dmca|privacy)/i.test(_0x419ee5)) {
          return;
        }
        if (_0x419ee5 === _0x272040 + "/" || _0x419ee5 === _0x272040) {
          return;
        }
        try {
          if (new URL(_0x419ee5).hostname !== new URL(_0x272040).hostname) {
            return;
          }
        } catch (_0x45dab1) {}
        var _0x345b59 = _0x18001c(_0x1c1d99).find(".movie-card-title, h2, h3, h4, .entry-title, .title").first().text().trim() || _0x18001c(_0x1c1d99).attr("title") || _0x18001c(_0x1c1d99).attr("aria-label") || _0x18001c(_0x1c1d99).find("img").attr("alt") || _0x18001c(_0x1c1d99).text().trim();
        if (!_0x345b59 || _0x345b59.length < 2) {
          return;
        }
        var _0x43ff30 = (_0x345b59 + " " + _0x419ee5).toLowerCase();
        var _0x52e5f0 = /\bseries\b/i.test(_0x345b59) || /-series-?\d*/i.test(_0x419ee5) || /\/series\//i.test(_0x419ee5) || /\bseason\s*\d+\b/i.test(_0x43ff30);
        if (_0x31a077 === "movie" && _0x52e5f0) {
          return;
        }
        if (_0x31a077 !== "movie" && !_0x52e5f0) {
          return;
        }
        var _0x4a8916 = String(_0x345b59).replace(/[.*?[\]()]/g, "").replace(/\s+details$/i, "").trim();
        var _0x2b8b5d = _0x43ff30.match(/\b(19|20)\d{2}\b/);
        var _0x217ffb = _0x2b8b5d ? parseInt(_0x2b8b5d[0], 10) : 0;
        var _0x540583 = levenshteinDistance(normalizeTitle(_0x4a8916), normalizeTitle(_0x2c9ed9));
        var _0x5648d7 = _0x58ae02 && _0x217ffb ? Math.abs(_0x217ffb - _0x58ae02) : 0;
        var _0x32b7f3 = normalizeTitle(_0x4a8916) === normalizeTitle(_0x2c9ed9) ? -100 : 0;
        var _0x3fffb1 = normalizeTitle(_0x4a8916).indexOf(normalizeTitle(_0x2c9ed9)) !== -1 ? -10 : 0;
        dbg("[searchContent] +Candidate:", _0x4a8916, "| series:", _0x52e5f0, "| dist:", _0x540583);
        _0x384128.push({
          href: _0x419ee5,
          title: _0x4a8916,
          year: _0x217ffb,
          distance: _0x540583,
          yearDistance: _0x5648d7,
          score: _0x540583 + _0x5648d7 + _0x32b7f3 + _0x3fffb1
        });
      });
      dbg("[searchContent] Found", _0x384128.length, "candidates for:", _0x2c9ed9, "(type:", _0x31a077 + ")");
      if (!_0x384128.length) {
        return null;
      }
      _0x384128.sort(function (_0x2b44f4, _0x296147) {
        return _0x2b44f4.score - _0x296147.score || _0x2b44f4.distance - _0x296147.distance || _0x2b44f4.yearDistance - _0x296147.yearDistance;
      });
      dbg("[searchContent] Best:", _0x384128[0].title, "->", _0x384128[0].href);
      return _0x384128[0].href || null;
    });
  });
}
function collectMovieLinks(_0x4f2eeb, _0x13df51) {
  var _0xee75f5 = [];
  _0x4f2eeb("div.download-item, div[data-file-id]").each(function (_0x1bd151, _0x335408) {
    var _0x4a74ac = _0x4f2eeb(_0x335408);
    var _0x386bf3 = fixUrl(_0x4a74ac.find("a[href]").first().attr("href"), _0x13df51);
    var _0x36a04f = cleanLabelText(_0x4a74ac.text().trim() || "Movie");
    var _0x318c52 = cleanLabelText(_0x4a74ac.find(".file-title").first().text().trim() || "");
    if (!_0x386bf3) {
      return;
    }
    dbg("[collectMovieLinks] L1:", _0x386bf3);
    _0xee75f5.push({
      url: _0x386bf3,
      label: _0x36a04f,
      fileTitle: _0x318c52,
      rawHtml: _0x4a74ac.html() || ""
    });
  });
  if (!_0xee75f5.length) {
    dbg("[collectMovieLinks] Layer 1 empty -> Layer 2");
    var _0xcb3c6f = ["div.download-links a[href]", "div.gdlink a[href]", "div.dllinks a[href]", "div.movie-download a[href]", "div.movie-card-content a[href]", "div.entry-content p a[href]", "div.thecontent p a[href]", "table.table a[href]", "div.box-content a[href]", "div.wp-block-buttons a[href]", "p > a[href]"].join(", ");
    _0x4f2eeb(_0xcb3c6f).each(function (_0x5394a4, _0x396c46) {
      var _0x4d3793 = fixUrl(_0x4f2eeb(_0x396c46).attr("href"), _0x13df51);
      if (!_0x4d3793) {
        return;
      }
      var _0x28227d = _0x4d3793.toLowerCase();
      var _0x35c18b = _0x28227d.indexOf("hubcloud") !== -1 || _0x28227d.indexOf("hubdrive") !== -1 || _0x28227d.indexOf("hubcdn") !== -1 || _0x28227d.indexOf("workers.dev") !== -1 || _0x28227d.indexOf("r2.dev") !== -1 || /\.(mp4|mkv|m3u8)(\?|$)/i.test(_0x28227d);
      if (!_0x35c18b) {
        return;
      }
      var _0x93c504 = cleanLabelText(_0x4f2eeb(_0x396c46).closest("p, div, li, tr, td").first().text().trim() || _0x4f2eeb(_0x396c46).text().trim() || "Movie");
      dbg("[collectMovieLinks] L2:", _0x4d3793);
      _0xee75f5.push({
        url: _0x4d3793,
        label: _0x93c504,
        fileTitle: cleanLabelText(_0x4f2eeb(_0x396c46).text().trim() || ""),
        rawHtml: _0x4f2eeb(_0x396c46).parent().html() || ""
      });
    });
  }
  if (!_0xee75f5.length) {
    dbg("[collectMovieLinks] Layer 2 empty -> Layer 3 full scan");
    _0x4f2eeb("a[href]").each(function (_0x53a56e, _0x40856b) {
      var _0x46bbb5 = fixUrl(_0x4f2eeb(_0x40856b).attr("href"), _0x13df51);
      if (!_0x46bbb5) {
        return;
      }
      var _0x3c23ad = _0x46bbb5.toLowerCase();
      var _0x4e2c4a = _0x3c23ad.indexOf("hubcloud") !== -1 || _0x3c23ad.indexOf("hubdrive") !== -1 || _0x3c23ad.indexOf("hubcdn") !== -1 || _0x3c23ad.indexOf("workers.dev") !== -1 || _0x3c23ad.indexOf("r2.dev") !== -1 || /\.(mp4|mkv|m3u8)(\?|$)/i.test(_0x3c23ad);
      if (!_0x4e2c4a) {
        return;
      }
      var _0x1b8a01 = cleanLabelText(_0x4f2eeb(_0x40856b).closest("p, div, li").first().text().trim() || _0x4f2eeb(_0x40856b).text().trim() || "Movie");
      dbg("[collectMovieLinks] L3:", _0x46bbb5);
      _0xee75f5.push({
        url: _0x46bbb5,
        label: _0x1b8a01,
        fileTitle: cleanLabelText(_0x4f2eeb(_0x40856b).text().trim() || ""),
        rawHtml: _0x4f2eeb(_0x40856b).parent().html() || ""
      });
    });
  }
  if (!_0xee75f5.length && DEBUG) {
    dbg("[collectMovieLinks] ALL layers empty - dumping all anchors for debug:");
    _0x4f2eeb("a[href]").each(function (_0x3fc80c, _0x4c019b) {
      var _0x3f94d0 = _0x4f2eeb(_0x4c019b).attr("href") || "";
      var _0x2a8e2a = _0x4f2eeb(_0x4c019b).text().trim();
      dbg("  anchor:", _0x3f94d0, "| text:", _0x2a8e2a);
    });
  }
  dbg("[collectMovieLinks] Total links found:", _0xee75f5.length);
  return uniqueBy(_0xee75f5, function (_0x4b807a) {
    return String(_0x4b807a.url || "").toLowerCase();
  });
}
function collectEpisodeLinks(_0x40554d, _0xcc7c94, _0x22c869, _0x1ceb43) {
  var _0x494e45 = Number(_0x22c869);
  var _0x1966e6 = Number(_0x1ceb43);
  var _0x448bbd = "S" + _0x494e45 + " E" + _0x1966e6;
  var _0x2382f6 = [];
  _0x40554d("div.episodes-list div.season-item").each(function (_0x30191e, _0x211390) {
    var _0x48c041 = _0x40554d(_0x211390).find("div.episode-number").first().text();
    var _0x13bd35 = _0x48c041.match(/S(?:eason)?\s*([0-9]+)/i);
    if (!_0x13bd35 || Number(_0x13bd35[1]) !== _0x494e45) {
      return;
    }
    _0x40554d(_0x211390).find("div.episode-download-item").each(function (_0x406ffe, _0x18f721) {
      var _0x7cd598 = _0x40554d(_0x18f721).text();
      var _0x436f9c = _0x7cd598.match(/Episode-?\s*0*([0-9]+)/i) || _0x7cd598.match(/\bE\s*0*([0-9]+)/i);
      if (!_0x436f9c || Number(_0x436f9c[1]) !== _0x1966e6) {
        return;
      }
      _0x40554d(_0x18f721).find("a[href]").each(function (_0x381b0f, _0x2037e8) {
        var _0x442354 = fixUrl(_0x40554d(_0x2037e8).attr("href"), _0xcc7c94);
        if (!_0x442354) {
          return;
        }
        _0x2382f6.push({
          url: _0x442354,
          label: _0x448bbd,
          fileTitle: cleanLabelText(_0x40554d(_0x18f721).find(".file-title, .episode-file-title").first().text().trim() || ""),
          rawHtml: _0x40554d(_0x18f721).html() || ""
        });
      });
    });
  });
  if (!_0x2382f6.length) {
    _0x40554d("div.episode-download-item").each(function (_0x541e33, _0x1a2db3) {
      var _0x4510a9 = _0x40554d(_0x1a2db3).text();
      if (!new RegExp("Episode-?\\s*0*" + _0x1966e6 + "\\b", "i").test(_0x4510a9) && !new RegExp("\\bE\\s*0*" + _0x1966e6 + "\\b", "i").test(_0x4510a9)) {
        return;
      }
      _0x40554d(_0x1a2db3).find("a[href]").each(function (_0x54efea, _0x467f94) {
        var _0x4fb603 = fixUrl(_0x40554d(_0x467f94).attr("href"), _0xcc7c94);
        if (!_0x4fb603) {
          return;
        }
        _0x2382f6.push({
          url: _0x4fb603,
          label: _0x448bbd,
          fileTitle: cleanLabelText(_0x40554d(_0x1a2db3).find(".file-title, .episode-file-title").first().text().trim() || ""),
          rawHtml: _0x40554d(_0x1a2db3).html() || ""
        });
      });
    });
  }
  return uniqueBy(_0x2382f6, function (_0x320284) {
    return String(_0x320284.url || "").toLowerCase();
  });
}
function resolveHubcdn(_0x3ef1b4, _0x377bc6, _0x1abc28, _0x40e5ea, _0x3ce43d, _0x1298ff) {
  return fetchText(_0x3ef1b4, {
    headers: {
      Referer: _0x3ef1b4
    }
  }).then(function (_0x12990d) {
    var _0x2d1730 = "";
    var _0x1a0d67 = _0x12990d.match(/r=([A-Za-z0-9+/=]+)/);
    var _0x14ce3e = _0x12990d.match(/reurl\s*=\s*"([^"]+)"/);
    if (_0x1a0d67 && _0x1a0d67[1]) {
      _0x2d1730 = _0x1a0d67[1];
    } else if (_0x14ce3e && _0x14ce3e[1]) {
      _0x2d1730 = _0x14ce3e[1].split("?r=").pop();
    }
    if (!_0x2d1730) {
      return [];
    }
    var _0x395988 = decodeBase64(_0x2d1730);
    if (!_0x395988) {
      return [];
    }
    var _0x17ec71 = _0x395988.split("link=").pop();
    if (!_0x17ec71 || _0x17ec71 === _0x2d1730) {
      return [];
    }
    return [buildStream(_0x377bc6 + " HUBCDN", _0x17ec71, _0x1abc28, {
      Referer: _0x3ef1b4
    }, _0x40e5ea, _0x3ce43d, _0x1298ff)];
  }).catch(function () {
    return [];
  });
}
function resolveHubdrive(_0x3ca4be, _0x2dbd2b, _0x44309f) {
  var _0x166686 = String(_0x3ca4be || "").toLowerCase();
  if (_0x166686.indexOf("hubdrive.space") !== -1) {
    dbg("[resolveHubdrive] SKIPPED: hubdrive.space requires login - cannot resolve programmatically");
    return Promise.resolve([]);
  }
  return fetchText(_0x3ca4be, {
    headers: {
      Referer: _0x3ca4be
    }
  }).then(function (_0x4b1a00) {
    var _0x30a195 = cheerio.load(_0x4b1a00);
    var _0x50801a = _0x30a195("title").first().text().trim();
    dbg("[resolveHubdrive] title:", _0x50801a, "| HTML len:", _0x4b1a00.length);
    if (_0x50801a.indexOf("Sign in - Google") !== -1 || _0x50801a.indexOf("accounts.google.com") !== -1 || _0x4b1a00.indexOf("accounts.google.com/signin") !== -1) {
      dbg("[resolveHubdrive] SKIPPED: Google login wall detected");
      return [];
    }
    if (/hubdrive.*G-Drive File Sharing/i.test(_0x50801a) && _0x4b1a00.indexOf("logout") !== -1 && _0x4b1a00.indexOf("download") === -1) {
      dbg("[resolveHubdrive] SKIPPED: hubdrive login redirect - no download content");
      return [];
    }
    var _0x4b8dad = [];
    _0x30a195("a[href]").each(function (_0x444d79, _0x404f54) {
      var _0x59a9f4 = fixUrl(_0x30a195(_0x404f54).attr("href"), _0x3ca4be);
      var _0x1df3d9 = _0x30a195(_0x404f54).text().trim().toLowerCase();
      if (!_0x59a9f4) {
        return;
      }
      var _0x2e122c = _0x59a9f4.toLowerCase();
      dbg("[resolveHubdrive] link:", _0x59a9f4, "| text:", _0x1df3d9);
      if (_0x2e122c.indexOf("drive.google") !== -1 || _0x2e122c.indexOf("googleusercontent") !== -1 || _0x2e122c.indexOf("hubcloud") !== -1 || _0x2e122c.indexOf("workers.dev") !== -1 || _0x2e122c.indexOf(".r2.dev") !== -1 || _0x2e122c.indexOf("/download") !== -1 || /\.(mkv|mp4|m3u8)(\?|#|$)/i.test(_0x2e122c) || _0x1df3d9.indexOf("download") !== -1) {
        if (_0x2e122c.indexOf("/login") !== -1 || _0x2e122c.indexOf("/register") !== -1 || _0x2e122c.indexOf("javascript") !== -1 || _0x59a9f4 === _0x3ca4be) {
          return;
        }
        _0x4b8dad.push(_0x59a9f4);
      }
    });
    dbg("[resolveHubdrive] candidates:", _0x4b8dad.length);
    if (!_0x4b8dad.length) {
      var _0xb711a3 = _0x30a195("form[action]").attr("action") || _0x30a195("a.btn[href]").first().attr("href");
      if (_0xb711a3) {
        var _0x41997f = fixUrl(_0xb711a3, _0x3ca4be);
        dbg("[resolveHubdrive] trying form action:", _0x41997f);
        return resolveLink(_0x41997f, _0x2dbd2b, _0x3ca4be, _0x44309f);
      }
      return [];
    }
    _0x4b8dad.sort(function (_0x56c86b, _0x4b947c) {
      return hostConfidence(_0x4b947c) - hostConfidence(_0x56c86b);
    });
    var _0x25a893 = _0x4b8dad[0];
    dbg("[resolveHubdrive] best candidate:", _0x25a893);
    if (_0x25a893.toLowerCase().indexOf("hubdrive") !== -1 && _0x25a893 !== _0x3ca4be) {
      return resolveHubdrive(_0x25a893, _0x2dbd2b, _0x44309f);
    }
    return resolveLink(_0x25a893, _0x2dbd2b, _0x3ca4be, _0x44309f);
  }).catch(function (_0x36961e) {
    dbg("[resolveHubdrive] ERROR:", _0x36961e.message);
    return [];
  });
}
function resolve10Gbps(_0x1b724b, _0x5ee4b8, _0x5d302e, _0x59ddd4, _0x545924, _0x1d8582, _0x321b5d) {
  function _0x54cca0(_0x17686b, _0x1889d7) {
    if (_0x1889d7 >= 6) {
      return Promise.resolve([]);
    }
    return fetchResponse(_0x17686b, {
      redirect: "manual",
      headers: {
        Referer: _0x17686b
      }
    }).then(function (_0x3d8aa5) {
      var _0x1032f0 = _0x3d8aa5.url || _0x17686b;
      var _0x1d1ea5 = String(_0x3d8aa5.headers.get("content-type") || "").toLowerCase();
      var _0xda9116 = _0x3d8aa5.headers.get("location") || "";
      if (_0xda9116) {
        return _0x54cca0(fixUrl(_0xda9116, _0x17686b), _0x1889d7 + 1);
      }
      if (isPlayableMediaUrl(_0x1032f0) || _0x1d1ea5.indexOf("video/") !== -1) {
        return [buildStream(_0x5ee4b8 + " 10Gbps", _0x1032f0, _0x5d302e, {
          Referer: _0x17686b
        }, _0x59ddd4, _0x545924, _0x1d8582, _0x321b5d)];
      }
      return [];
    }).catch(function () {
      return [];
    });
  }
  return _0x54cca0(_0x1b724b, 0);
}
function isTrustedDirectCandidate(_0x4ba23d) {
  var _0x4aabaf = String(_0x4ba23d || "").toLowerCase();
  if (!_0x4aabaf) {
    return false;
  }
  if (_0x4aabaf.indexOf("video-downloads.googleusercontent.com/") !== -1) {
    return true;
  }
  if (_0x4aabaf.indexOf(".r2.dev/") !== -1) {
    return true;
  }
  if (_0x4aabaf.indexOf(".workers.dev/") !== -1) {
    if (_0x4aabaf.indexOf("pixel.") !== -1) {
      return false;
    }
    if (_0x4aabaf.indexOf("gpdl.") !== -1) {
      return false;
    }
    return true;
  }
  if (_0x4aabaf.indexOf("hub.lotuscdn.club/") !== -1) {
    return true;
  }
  if (_0x4aabaf.indexOf("hub.yummy.monster/") !== -1) {
    return true;
  }
  if (_0x4aabaf.indexOf("hub.odyssey.surf/") !== -1) {
    return true;
  }
  if (_0x4aabaf.indexOf("hub.maverick.lat/") !== -1) {
    return true;
  }
  if (_0x4aabaf.indexOf("cdn.fukggl.buzz/") !== -1) {
    return true;
  }
  if (_0x4aabaf.indexOf("hub.diskcdn.buzz/") !== -1) {
    return true;
  }
  if (/\.(mkv|mp4|m3u8)(\?|#|$)/.test(_0x4aabaf)) {
    return true;
  }
  return false;
}
function resolveHubcloud(_0x3b4cf1, _0x340c10, _0x12ef5b, _0x29f991, _0x3f9c7d, _0x31b9fc) {
  var _0x52ddfe = _0x12ef5b ? {
    Referer: _0x12ef5b
  } : {};
  return fetchText(_0x3b4cf1, {
    headers: _0x52ddfe
  }).then(function (_0x53c9d5) {
    var _0x5e02e8 = cheerio.load(_0x53c9d5);
    var _0x2e9ce5 = _0x5e02e8("#download").attr("href") || _0x5e02e8("a[href*='hubcloud']").attr("href") || _0x5e02e8("iframe[src*='hubcloud']").attr("src");
    var _0x32eaae = fixUrl(_0x2e9ce5, _0x3b4cf1);
    if (!_0x32eaae) {
      return [];
    }
    return fetchText(_0x32eaae, {
      headers: {
        Referer: _0x3b4cf1
      }
    }).then(function (_0x42ccac) {
      var _0x63d948 = cheerio.load(_0x42ccac);
      var _0x144600 = _0x63d948("#size").text().trim() || "";
      var _0x2b3cd5 = _0x63d948(".card-header").text().trim() || "";
      var _0x3e1ddc = cleanTech(_0x2b3cd5);
      var _0x139f3d = detectQualityFromSources([_0x2b3cd5, _0x29f991]);
      var _0x2a8f2d = [];
      var _0x27569b = [];
      _0x63d948("a.btn").each(function (_0x55135f, _0x130cf9) {
        var _0x3600bc = fixUrl(_0x63d948(_0x130cf9).attr("href"), _0x32eaae);
        var _0x1c20a2 = _0x63d948(_0x130cf9).text().toLowerCase();
        if (!_0x3600bc) {
          return;
        }
        if (_0x1c20a2.indexOf("buzzserver") !== -1) {
          _0x2a8f2d.push(fetchResponse(_0x3600bc + "/download", {
            headers: {
              Referer: _0x3600bc
            },
            redirect: "manual"
          }).then(function (_0x31115f) {
            var _0x5314c7 = _0x31115f.headers.get("location");
            if (_0x5314c7) {
              return [buildStream(_0x340c10 + " Buzz", _0x5314c7, _0x139f3d, {
                Referer: _0x3600bc
              }, _0x144600, _0x3e1ddc, _0x3f9c7d, _0x31b9fc)];
            } else {
              return [];
            }
          }).catch(function () {
            return [];
          }));
        } else if (_0x1c20a2.indexOf("10gbps") !== -1 || _0x3600bc.includes("gpdl.hubcloud")) {
          _0x2a8f2d.push(resolve10Gbps(_0x3600bc, _0x340c10, _0x139f3d, _0x144600, _0x3e1ddc, _0x3f9c7d, _0x31b9fc));
        } else if (isTrustedDirectCandidate(_0x3600bc)) {
          _0x27569b.push(buildStream(_0x340c10, _0x3600bc, _0x139f3d, {
            Referer: _0x32eaae
          }, _0x144600, _0x3e1ddc, _0x3f9c7d, _0x31b9fc));
        }
      });
      return Promise.all(_0x2a8f2d).then(function (_0x1164ae) {
        var _0x41381c = _0x27569b.slice();
        for (var _0xef1143 = 0; _0xef1143 < _0x1164ae.length; _0xef1143++) {
          _0x41381c = _0x41381c.concat(_0x1164ae[_0xef1143] || []);
        }
        return _0x41381c;
      });
    });
  }).catch(function () {
    return [];
  });
}
function resolveLink(_0x18165b, _0x3e1a45, _0x55cd10, _0xf813fe, _0x3ce42d, _0x491bf4) {
  if (!_0x18165b) {
    return Promise.resolve([]);
  }
  var _0x239715 = String(_0x18165b).toLowerCase();
  if (_0x239715.indexOf("hubcloud") !== -1) {
    return resolveHubcloud(_0x18165b, _0x3e1a45, _0x55cd10, _0xf813fe, _0x3ce42d, _0x491bf4);
  }
  if (_0x239715.indexOf("hubcdn") !== -1) {
    return resolveHubcdn(_0x18165b, _0x3e1a45, _0xf813fe, "", "", _0x3ce42d, _0x491bf4);
  }
  if (isTrustedDirectCandidate(_0x18165b)) {
    return Promise.resolve([buildStream(_0x3e1a45, _0x18165b, _0xf813fe, {
      Referer: _0x55cd10
    }, "", "", _0x3ce42d, _0x491bf4)]);
  }
  if (_0x239715.indexOf("hubdrive") !== -1) {
    return resolveHubdrive(_0x18165b, _0x3e1a45, _0xf813fe, _0x491bf4);
  }
  return Promise.resolve([]);
}
function extractCandidateQuality(_0x3546fe) {
  return detectQualityFromSources([_0x3546fe.fileTitle || "", _0x3546fe.label || "", _0x3546fe.rawHtml || ""]);
}
function extractLangHint(_0xd9de0f) {
  return [_0xd9de0f.fileTitle || "", _0xd9de0f.label || "", _0xd9de0f.rawHtml || ""].join(" ");
}
function extractFromPage(_0x3ed54a, _0x2755c9, _0x49b7ab, _0x12ea3b, _0x1fd4e3) {
  return fetchText(_0x3ed54a).then(function (_0x4f4776) {
    var _0x103d2a = cheerio.load(_0x4f4776);
    var _0x3a8460 = _0x103d2a("div.episodes-list, div.episodelist, ul.episodios, div.season-item").length > 0;
    var _0x36de90 = !_0x3a8460;
    var _0x443a18 = _0x2755c9 === "movie" || _0x36de90 ? collectMovieLinks(_0x103d2a, _0x3ed54a) : collectEpisodeLinks(_0x103d2a, _0x3ed54a, _0x49b7ab, _0x12ea3b);
    if (!_0x443a18.length) {
      return [];
    }
    _0x443a18 = sortLinksByPriority(_0x443a18);
    return Promise.all(_0x443a18.map(function (_0x4409f3) {
      var _0x5aa0b3 = extractCandidateQuality(_0x4409f3);
      var _0xdda1f9 = cleanLabelText(_0x4409f3.fileTitle || _0x4409f3.label || PROVIDER_NAME);
      var _0x8b4224 = extractLangHint(_0x4409f3);
      return resolveLink(_0x4409f3.url, _0xdda1f9, _0x3ed54a, _0x5aa0b3, _0x8b4224, _0x1fd4e3).catch(function (_0x303a2f) {
        dbg("[extractFromPage] resolveLink FAILED:", _0x4409f3.url, "|", _0x303a2f.message || _0x303a2f);
        return [];
      });
    })).then(function (_0x54397d) {
      var _0x14a732 = [];
      for (var _0x16da5f = 0; _0x16da5f < _0x54397d.length; _0x16da5f += 1) {
        _0x14a732 = _0x14a732.concat(_0x54397d[_0x16da5f] || []);
      }
      _0x14a732 = dedupeStreams(_0x14a732);
      _0x14a732.sort(function (_0x5dbc91, _0x457323) {
        return hostConfidence(_0x457323.url) - hostConfidence(_0x5dbc91.url);
      });
      return _0x14a732;
    });
  });
}
function findContentUrl(_0x3ddafc, _0x5190a6) {
  return getTmdbNames(_0x3ddafc, _0x5190a6).then(function (_0x51ecdb) {
    if (!_0x51ecdb.title && !_0x51ecdb.original) {
      return null;
    }
    var _0x531094 = _0x51ecdb.title + " " + _0x51ecdb.year;
    if (KNOWN_URLS[_0x531094]) {
      dbg("[findContentUrl] Found in KNOWN_URLS:", KNOWN_URLS[_0x531094]);
      return KNOWN_URLS[_0x531094];
    }
    return searchContent(_0x51ecdb.title, _0x5190a6, _0x51ecdb.year).then(function (_0x33de0d) {
      if (_0x33de0d) {
        return _0x33de0d;
      }
      if (_0x51ecdb.original && _0x51ecdb.original !== _0x51ecdb.title) {
        return searchContent(_0x51ecdb.original, _0x5190a6, _0x51ecdb.year).then(function (_0x240fc7) {
          if (_0x240fc7) {
            return _0x240fc7;
          }
          if (_0x51ecdb.alt) {
            return searchContent(_0x51ecdb.alt, _0x5190a6, _0x51ecdb.year);
          }
          return null;
        });
      }
      if (_0x51ecdb.alt) {
        return searchContent(_0x51ecdb.alt, _0x5190a6, _0x51ecdb.year);
      }
      return null;
    });
  });
}
function getStreams(_0x5a7d77, _0x49ceff, _0x28460c, _0x175ead) {
  return getTmdbNames(_0x5a7d77, _0x49ceff).then(function (_0x4ade4f) {
    var _0xdf8bad = _0x49ceff === "tv" ? getTmdbEpisodeName(_0x5a7d77, _0x28460c, _0x175ead) : Promise.resolve("");
    return _0xdf8bad.then(function (_0x1e4167) {
      return findContentUrl(_0x5a7d77, _0x49ceff).then(function (_0x403dd0) {
        if (!_0x403dd0) {
          return [];
        }
        var _0x559e2d = {
          title: _0x4ade4f.title || "Movie",
          year: _0x4ade4f.year || "",
          season: _0x28460c,
          episode: _0x175ead,
          episodeTitle: _0x1e4167
        };
        return extractFromPage(_0x403dd0, _0x49ceff, _0x28460c, _0x175ead, _0x559e2d);
      });
    });
  }).catch(function () {
    return [];
  });
}
module.exports = {
  getStreams: getStreams
};