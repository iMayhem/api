var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x381050, _0x2f25e5, _0x2f5ccc) => _0x2f25e5 in _0x381050 ? __defProp(_0x381050, _0x2f25e5, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x2f5ccc
}) : _0x381050[_0x2f25e5] = _0x2f5ccc;
var __spreadValues = (_0x4ae141, _0x47430b) => {
  for (var _0x2e402a in _0x47430b ||= {}) {
    if (__hasOwnProp.call(_0x47430b, _0x2e402a)) {
      __defNormalProp(_0x4ae141, _0x2e402a, _0x47430b[_0x2e402a]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x2e402a of __getOwnPropSymbols(_0x47430b)) {
      if (__propIsEnum.call(_0x47430b, _0x2e402a)) {
        __defNormalProp(_0x4ae141, _0x2e402a, _0x47430b[_0x2e402a]);
      }
    }
  }
  return _0x4ae141;
};
var __spreadProps = (_0x518325, _0x34f9eb) => __defProps(_0x518325, __getOwnPropDescs(_0x34f9eb));
var __async = (_0x47ae1f, _0x40d275, _0x799fd8) => {
  return new Promise((_0x4315b4, _0x1d0a5c) => {
    var _0x8d0541 = _0x1cda47 => {
      try {
        _0x48ddfb(_0x799fd8.next(_0x1cda47));
      } catch (_0x5392f9) {
        _0x1d0a5c(_0x5392f9);
      }
    };
    var _0x194c3f = _0x3a1559 => {
      try {
        _0x48ddfb(_0x799fd8.throw(_0x3a1559));
      } catch (_0x2a7323) {
        _0x1d0a5c(_0x2a7323);
      }
    };
    var _0x48ddfb = _0x3be7b7 => _0x3be7b7.done ? _0x4315b4(_0x3be7b7.value) : Promise.resolve(_0x3be7b7.value).then(_0x8d0541, _0x194c3f);
    _0x48ddfb((_0x799fd8 = _0x799fd8.apply(_0x47ae1f, _0x40d275)).next());
  });
};
var cheerio = require("cheerio-without-node-native");
console.log("[MoviesMod] Using cheerio-without-node-native for DOM parsing");
function escapeRegExp(_0x48caf8) {
  return _0x48caf8.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var FALLBACK_DOMAIN = "https://moviesmod.money";
var DOMAIN_CACHE_TTL = 14400000;
var moviesModDomain = FALLBACK_DOMAIN;
var domainCacheTimestamp = 0;
function getMoviesModDomain() {
  return __async(this, null, function* () {
    const _0xc92004 = Date.now();
    if (_0xc92004 - domainCacheTimestamp < DOMAIN_CACHE_TTL) {
      return moviesModDomain;
    }
    try {
      console.log("[MoviesMod] Fetching latest domain...");
      const _0x5409c4 = yield fetch("https://raw.githubusercontent.com/phisher98/TVVVV/refs/heads/main/domains.json", {
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
      if (_0x5409c4.ok) {
        const _0x184e88 = yield _0x5409c4.json();
        if (_0x184e88 && _0x184e88.moviesmod) {
          moviesModDomain = _0x184e88.moviesmod;
          domainCacheTimestamp = _0xc92004;
          console.log("[MoviesMod] Updated domain to: " + moviesModDomain);
        }
      }
    } catch (_0x1d49ea) {
      console.error("[MoviesMod] Failed to fetch latest domain: " + _0x1d49ea.message);
    }
    return moviesModDomain;
  });
}
function makeRequest(_0x1ae0fe) {
  return __async(this, arguments, function* (_0x199482, _0x5199b3 = {}) {
    const _0x2bd609 = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
      "Accept-Encoding": "gzip, deflate",
      Connection: "keep-alive",
      "Upgrade-Insecure-Requests": "1"
    };
    const _0x450951 = yield fetch(_0x199482, __spreadProps(__spreadValues({}, _0x5199b3), {
      headers: __spreadValues(__spreadValues({}, _0x2bd609), _0x5199b3.headers)
    }));
    if (!_0x450951.ok) {
      throw new Error("HTTP " + _0x450951.status + ": " + _0x450951.statusText);
    }
    return _0x450951;
  });
}
function extractQuality(_0x1b9902) {
  if (!_0x1b9902) {
    return "Unknown";
  }
  const _0x5a9689 = _0x1b9902.match(/(480p|720p|1080p|2160p|4k)/i);
  if (_0x5a9689) {
    return _0x5a9689[1];
  }
  const _0x835a1c = _0x1b9902.match(/(480p|720p|1080p|2160p|4k)[^)]*\)/i);
  if (_0x835a1c) {
    return _0x835a1c[0];
  }
  return "Unknown";
}
function parseQualityForSort(_0x2b4bae) {
  if (!_0x2b4bae) {
    return 0;
  }
  const _0x49cac7 = _0x2b4bae.match(/(\d{3,4})p/i);
  if (_0x49cac7) {
    return parseInt(_0x49cac7[1], 10);
  } else {
    return 0;
  }
}
function findBestMatch(_0x1c0839, _0x3fc62a) {
  if (!_0x3fc62a || _0x3fc62a.length === 0) {
    return {
      bestMatch: {
        target: "",
        rating: 0
      },
      bestMatchIndex: -1
    };
  }
  const _0x9d106d = _0x3fc62a.map(_0x5640a1 => {
    if (!_0x5640a1) {
      return 0;
    }
    const _0x317d0c = _0x1c0839.toLowerCase();
    const _0x3dd1bb = _0x5640a1.toLowerCase();
    if (_0x317d0c === _0x3dd1bb) {
      return 1;
    }
    if (_0x3dd1bb.includes(_0x317d0c) || _0x317d0c.includes(_0x3dd1bb)) {
      return 0.8;
    }
    const _0x16cb4e = _0x317d0c.split(/\s+/);
    const _0x79789c = _0x3dd1bb.split(/\s+/);
    let _0x1cf7d0 = 0;
    for (const _0x3450ca of _0x16cb4e) {
      if (_0x3450ca.length > 2 && _0x79789c.some(_0x4944fb => _0x4944fb.includes(_0x3450ca) || _0x3450ca.includes(_0x4944fb))) {
        _0x1cf7d0++;
      }
    }
    return _0x1cf7d0 / Math.max(_0x16cb4e.length, _0x79789c.length);
  });
  const _0x5df328 = Math.max(..._0x9d106d);
  const _0x2d99e3 = _0x9d106d.indexOf(_0x5df328);
  return {
    bestMatch: {
      target: _0x3fc62a[_0x2d99e3],
      rating: _0x5df328
    },
    bestMatchIndex: _0x2d99e3
  };
}
function searchMoviesMod(_0x4aefd8) {
  return __async(this, null, function* () {
    try {
      const _0x476d7b = yield getMoviesModDomain();
      const _0x281be4 = _0x476d7b + "/?s=" + encodeURIComponent(_0x4aefd8);
      console.log("[MoviesMod] Searching: " + _0x281be4);
      const _0x3e9ef6 = yield makeRequest(_0x281be4);
      const _0xad188b = yield _0x3e9ef6.text();
      const _0x2bbe0a = cheerio.load(_0xad188b);
      const _0x55d28d = [];
      _0x2bbe0a(".latestPost").each((_0x939e23, _0x4b2e6f) => {
        const _0x599162 = _0x2bbe0a(_0x4b2e6f).find("a");
        const _0x5dccb0 = _0x599162.attr("title");
        const _0x59364a = _0x599162.attr("href");
        if (_0x5dccb0 && _0x59364a) {
          _0x55d28d.push({
            title: _0x5dccb0,
            url: _0x59364a
          });
        }
      });
      console.log("[MoviesMod] Found " + _0x55d28d.length + " search results");
      return _0x55d28d;
    } catch (_0x529273) {
      console.error("[MoviesMod] Error searching: " + _0x529273.message);
      return [];
    }
  });
}
function extractDownloadLinks(_0x3161ce) {
  return __async(this, null, function* () {
    try {
      const _0x316bee = yield makeRequest(_0x3161ce);
      const _0x1b7697 = yield _0x316bee.text();
      const _0x30351c = cheerio.load(_0x1b7697);
      const _0x347486 = [];
      const _0x1ab8f2 = _0x30351c(".thecontent");
      const _0x3e77a6 = _0x1ab8f2.find("h3:contains(\"Season\"), h4");
      _0x3e77a6.each((_0x36eecf, _0x3c9c3d) => {
        const _0x6a9695 = _0x30351c(_0x3c9c3d);
        const _0x29eda4 = _0x6a9695.text().trim();
        const _0x2562a6 = _0x6a9695.nextUntil("h3, h4");
        if (_0x6a9695.is("h3") && _0x29eda4.toLowerCase().includes("season")) {
          const _0x4be0de = _0x2562a6.find("a").filter((_0x336664, _0x26ce81) => {
            const _0x1cffe6 = _0x30351c(_0x26ce81).text().trim().toLowerCase();
            return _0x1cffe6.includes("episode links") && !_0x1cffe6.includes("batch");
          });
          _0x4be0de.each((_0x41ef26, _0x82c418) => {
            const _0x36b036 = _0x30351c(_0x82c418).text().trim();
            const _0x14f0b7 = _0x30351c(_0x82c418).attr("href");
            if (_0x14f0b7) {
              _0x347486.push({
                quality: _0x29eda4 + " - " + _0x36b036,
                url: _0x14f0b7
              });
            }
          });
        } else if (_0x6a9695.is("h4")) {
          const _0x14f2aa = _0x2562a6.find("a.maxbutton-download-links, .maxbutton").first();
          if (_0x14f2aa.length > 0) {
            const _0x7f9091 = _0x14f2aa.attr("href");
            const _0x100049 = extractQuality(_0x29eda4);
            if (_0x7f9091 && _0x100049) {
              _0x347486.push({
                quality: _0x100049,
                url: _0x7f9091
              });
            }
          }
        }
      });
      console.log("[MoviesMod] Extracted " + _0x347486.length + " download links");
      return _0x347486;
    } catch (_0x59c31b) {
      console.error("[MoviesMod] Error extracting download links: " + _0x59c31b.message);
      return [];
    }
  });
}
function resolveIntermediateLink(_0x1876f4, _0xb06b9d, _0x2ae880) {
  return __async(this, null, function* () {
    try {
      const _0x271dbd = new URL(_0x1876f4);
      if (_0x271dbd.hostname.includes("links.modpro.blog") || _0x271dbd.hostname.includes("posts.modpro.blog")) {
        const _0x258dff = yield makeRequest(_0x1876f4, {
          headers: {
            Referer: _0xb06b9d
          }
        });
        const _0x30669a = yield _0x258dff.text();
        const _0x543e14 = cheerio.load(_0x30669a);
        const _0x18e7b1 = [];
        _0x543e14(".entry-content a[href*=\"driveseed.org\"], .entry-content a[href*=\"cloud.unblockedgames.world\"], .entry-content a[href*=\"tech.creativeexpressionsblog.com\"], .entry-content a[href*=\"tech.examzculture.in\"]").each((_0x333f55, _0x4cb14c) => {
          const _0x145f80 = _0x543e14(_0x4cb14c).attr("href");
          const _0x23d0a1 = _0x543e14(_0x4cb14c).text().trim();
          if (_0x145f80 && _0x23d0a1 && !_0x23d0a1.toLowerCase().includes("batch")) {
            _0x18e7b1.push({
              server: _0x23d0a1.replace(/\s+/g, " "),
              url: _0x145f80
            });
          }
        });
        if (_0x18e7b1.length === 0) {
          _0x543e14("a[href*=\"driveseed.org\"], a[href*=\"cloud.unblockedgames.world\"], a[href*=\"tech.creativeexpressionsblog.com\"], a[href*=\"tech.examzculture.in\"]").each((_0x27909a, _0x564941) => {
            const _0x17cd41 = _0x543e14(_0x564941).attr("href");
            const _0xea5f99 = _0x543e14(_0x564941).text().trim();
            if (_0x17cd41 && _0xea5f99 && !_0xea5f99.toLowerCase().includes("batch")) {
              _0x18e7b1.push({
                server: _0xea5f99.replace(/\s+/g, " ") || "Download Link",
                url: _0x17cd41
              });
            }
          });
        }
        console.log("[MoviesMod] Found " + _0x18e7b1.length + " links from " + _0x271dbd.hostname);
        return _0x18e7b1;
      } else if (_0x271dbd.hostname.includes("episodes.modpro.blog")) {
        const _0x4ae34f = yield makeRequest(_0x1876f4, {
          headers: {
            Referer: _0xb06b9d
          }
        });
        const _0x424a3a = yield _0x4ae34f.text();
        const _0x2c0868 = cheerio.load(_0x424a3a);
        const _0x28d1b6 = [];
        _0x2c0868("h3").each((_0x85892c, _0x3e54b5) => {
          const _0x2a9800 = _0x2c0868(_0x3e54b5).text().trim();
          const _0x439098 = _0x2a9800.match(/Episode\s+(\d+)/i);
          if (_0x439098) {
            const _0x5eda9f = _0x439098[1];
            const _0x1f5430 = _0x2c0868(_0x3e54b5).find("a").first();
            if (_0x1f5430.length > 0) {
              const _0x4076b5 = _0x1f5430.attr("href");
              if (_0x4076b5) {
                _0x28d1b6.push({
                  server: "Episode " + _0x5eda9f,
                  url: _0x4076b5
                });
              }
            }
          }
        });
        console.log("[MoviesMod] Found " + _0x28d1b6.length + " episode links from episodes.modpro.blog");
        return _0x28d1b6;
      } else if (_0x271dbd.hostname.includes("modrefer.in")) {
        const _0x13e911 = _0x271dbd.searchParams.get("url");
        if (!_0x13e911) {
          console.error("[MoviesMod] Could not find encoded URL in modrefer.in link.");
          return [];
        }
        const _0x5dfe5f = atob(_0x13e911);
        console.log("[MoviesMod] Decoded modrefer URL: " + _0x5dfe5f);
        const _0x46a516 = yield makeRequest(_0x5dfe5f, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            Referer: _0xb06b9d
          }
        });
        const _0x3b5245 = yield _0x46a516.text();
        const _0x43377d = cheerio.load(_0x3b5245);
        const _0x14890c = [];
        console.log("[MoviesMod] Page title: " + _0x43377d("title").text());
        console.log("[MoviesMod] Total links on page: " + _0x43377d("a").length);
        console.log("[MoviesMod] HTML length: " + _0x3b5245.length + " characters");
        _0x43377d(".timed-content-client_show_0_5_0 a").each((_0x438949, _0xe5a784) => {
          const _0x3008ad = _0x43377d(_0xe5a784).attr("href");
          const _0x3b36e5 = _0x43377d(_0xe5a784).text().trim();
          if (_0x3008ad) {
            _0x14890c.push({
              server: _0x3b36e5,
              url: _0x3008ad
            });
          }
        });
        if (_0x14890c.length === 0) {
          console.log("[MoviesMod] No timed content found, looking for direct links...");
          _0x43377d("a").each((_0x199908, _0x4694fb) => {
            const _0x109e15 = _0x43377d(_0x4694fb).attr("href");
            const _0x2c7e54 = _0x43377d(_0x4694fb).text().trim();
            if (_0x109e15 && (_0x109e15.includes("driveseed.org") || _0x109e15.includes("cloud.unblockedgames.world") || _0x109e15.includes("tech.examzculture.in") || _0x109e15.includes("tech.creativeexpressionsblog.com") || _0x109e15.includes("tech.examdegree.site"))) {
              console.log("[MoviesMod] Found direct link: " + _0x2c7e54 + " -> " + _0x109e15);
              _0x14890c.push({
                server: _0x2c7e54 || "Download Link",
                url: _0x109e15
              });
            }
          });
        }
        if (_0x14890c.length === 0) {
          console.log("[MoviesMod] Looking for alternative download patterns...");
          _0x43377d("button, .download-btn, .btn, [class*=\"download\"], [class*=\"btn\"]").each((_0x2188e5, _0x14616f) => {
            const _0x172630 = _0x43377d(_0x14616f);
            const _0x95e141 = _0x172630.attr("href") || _0x172630.attr("data-href") || _0x172630.find("a").attr("href");
            const _0x3c52ed = _0x172630.text().trim();
            if (_0x95e141 && (_0x95e141.includes("driveseed.org") || _0x95e141.includes("cloud.unblockedgames.world") || _0x95e141.includes("tech.examzculture.in") || _0x95e141.includes("tech.creativeexpressionsblog.com") || _0x95e141.includes("tech.examdegree.site"))) {
              console.log("[MoviesMod] Found alternative link: " + _0x3c52ed + " -> " + _0x95e141);
              _0x14890c.push({
                server: _0x3c52ed || "Alternative Download",
                url: _0x95e141
              });
            }
          });
        }
        console.log("[MoviesMod] Found " + _0x14890c.length + " total links");
        return _0x14890c;
      }
      return [];
    } catch (_0x470b90) {
      console.error("[MoviesMod] Error resolving intermediate link: " + _0x470b90.message);
      return [];
    }
  });
}
function resolveTechUnblockedLink(_0x3fffe2) {
  return __async(this, null, function* () {
    console.log("[MoviesMod] Resolving SID link: " + _0x3fffe2);
    try {
      const _0xccc899 = yield makeRequest(_0x3fffe2);
      const _0x3d26e8 = yield _0xccc899.text();
      const _0x480042 = cheerio.load(_0x3d26e8);
      const _0x1311fb = _0x480042("#landing");
      const _0xa8ddb8 = _0x1311fb.find("input[name=\"_wp_http\"]").val();
      const _0x5b33a4 = _0x1311fb.attr("action");
      if (!_0xa8ddb8 || !_0x5b33a4) {
        console.error("  [SID] Error: Could not find _wp_http in initial form.");
        return null;
      }
      const _0x4159eb = new URLSearchParams({
        _wp_http: _0xa8ddb8
      });
      const _0x531788 = yield makeRequest(_0x5b33a4, {
        method: "POST",
        headers: {
          Referer: _0x3fffe2,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: _0x4159eb.toString()
      });
      const _0x5311e2 = yield _0x531788.text();
      const _0x49ba39 = cheerio.load(_0x5311e2);
      const _0x4a6b3a = _0x49ba39("#landing");
      const _0x5b2c21 = _0x4a6b3a.attr("action");
      const _0xbb8acf = _0x4a6b3a.find("input[name=\"_wp_http2\"]").val();
      const _0x2df42e = _0x4a6b3a.find("input[name=\"token\"]").val();
      if (!_0x5b2c21) {
        console.error("  [SID] Error: Could not find verification form.");
        return null;
      }
      const _0x4952a2 = new URLSearchParams({
        _wp_http2: _0xbb8acf,
        token: _0x2df42e
      });
      const _0x109871 = yield makeRequest(_0x5b2c21, {
        method: "POST",
        headers: {
          Referer: _0x531788.url,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: _0x4952a2.toString()
      });
      const _0x27678a = yield _0x109871.text();
      let _0x13a4de = null;
      let _0x396297 = null;
      let _0x14c93d = null;
      const _0x497fc9 = _0x27678a.match(/s_343\('([^']+)',\s*'([^']+)'/);
      const _0x1ef252 = _0x27678a.match(/c\.setAttribute\("href",\s*"([^"]+)"\)/);
      if (_0x497fc9) {
        _0x396297 = _0x497fc9[1].trim();
        _0x14c93d = _0x497fc9[2].trim();
      }
      if (_0x1ef252) {
        _0x13a4de = _0x1ef252[1].trim();
      }
      if (!_0x13a4de || !_0x396297 || !_0x14c93d) {
        console.error("  [SID] Error: Could not extract dynamic cookie/link from JS.");
        return null;
      }
      const {
        origin: _0x1403e9
      } = new URL(_0x3fffe2);
      const _0x15191b = new URL(_0x13a4de, _0x1403e9).href;
      const _0x2d2d8c = yield makeRequest(_0x15191b, {
        headers: {
          Referer: _0x109871.url,
          Cookie: _0x396297 + "=" + _0x14c93d
        }
      });
      const _0x7268fc = yield _0x2d2d8c.text();
      const _0xb395b3 = cheerio.load(_0x7268fc);
      const _0x17a228 = _0xb395b3("meta[http-equiv=\"refresh\"]");
      if (_0x17a228.length > 0) {
        const _0xa160a8 = _0x17a228.attr("content");
        const _0x1ed60c = _0xa160a8.match(/url=(.*)/i);
        if (_0x1ed60c && _0x1ed60c[1]) {
          const _0x270ca9 = _0x1ed60c[1].replace(/"/g, "").replace(/'/g, "");
          console.log("  [SID] SUCCESS! Resolved Driveleech URL: " + _0x270ca9);
          return _0x270ca9;
        }
      }
      console.error("  [SID] Error: Could not find meta refresh tag with Driveleech URL.");
      return null;
    } catch (_0x5dc1dd) {
      console.error("  [SID] Error during SID resolution: " + _0x5dc1dd.message);
      return null;
    }
  });
}
function resolveDriveseedLink(_0x1dbcfd) {
  return __async(this, null, function* () {
    try {
      const _0x107aa8 = yield makeRequest(_0x1dbcfd, {
        headers: {
          Referer: "https://links.modpro.blog/"
        }
      });
      const _0x74ddc9 = yield _0x107aa8.text();
      const _0x3b16eb = _0x74ddc9.match(/window\.location\.replace\("([^"]+)"\)/);
      if (_0x3b16eb && _0x3b16eb[1]) {
        const _0x92907a = _0x3b16eb[1];
        const _0x56de78 = "https://driveseed.org" + _0x92907a;
        const _0x79f7bd = yield makeRequest(_0x56de78, {
          headers: {
            Referer: _0x1dbcfd
          }
        });
        const _0x393980 = yield _0x79f7bd.text();
        const _0x9e20c5 = cheerio.load(_0x393980);
        const _0x32d1e = [];
        let _0x27d291 = null;
        let _0x4ebf0c = null;
        _0x9e20c5("ul.list-group li").each((_0x1617b9, _0x1cb3a5) => {
          const _0x494cf4 = _0x9e20c5(_0x1cb3a5).text();
          if (_0x494cf4.includes("Size :")) {
            _0x27d291 = _0x494cf4.split(":")[1].trim();
          } else if (_0x494cf4.includes("Name :")) {
            _0x4ebf0c = _0x494cf4.split(":")[1].trim();
          }
        });
        const _0x13544f = _0x9e20c5("a:contains(\"Resume Cloud\")").attr("href");
        if (_0x13544f) {
          _0x32d1e.push({
            title: "Resume Cloud",
            type: "resume",
            url: "https://driveseed.org" + _0x13544f,
            priority: 1
          });
        }
        const _0x79edc9 = _0x9e20c5("a:contains(\"Resume Worker Bot\")").attr("href");
        if (_0x79edc9) {
          _0x32d1e.push({
            title: "Resume Worker Bot",
            type: "worker",
            url: _0x79edc9,
            priority: 2
          });
        }
        _0x9e20c5("a[href*=\"/download/\"]").each((_0xe00815, _0x10ad7f) => {
          const _0x35ec0e = _0x9e20c5(_0x10ad7f).attr("href");
          const _0x19d15b = _0x9e20c5(_0x10ad7f).text().trim();
          if (_0x35ec0e && _0x19d15b && !_0x32d1e.some(_0x374564 => _0x374564.url === _0x35ec0e)) {
            _0x32d1e.push({
              title: _0x19d15b,
              type: "generic",
              url: _0x35ec0e.startsWith("http") ? _0x35ec0e : "https://driveseed.org" + _0x35ec0e,
              priority: 4
            });
          }
        });
        const _0x4bbf1b = _0x9e20c5("a:contains(\"Instant Download\")").attr("href");
        if (_0x4bbf1b) {
          _0x32d1e.push({
            title: "Instant Download",
            type: "instant",
            url: _0x4bbf1b,
            priority: 3
          });
        }
        _0x32d1e.sort((_0x44ad5e, _0x2f8a57) => _0x44ad5e.priority - _0x2f8a57.priority);
        return {
          downloadOptions: _0x32d1e,
          size: _0x27d291,
          fileName: _0x4ebf0c
        };
      }
      return {
        downloadOptions: [],
        size: null,
        fileName: null
      };
    } catch (_0x1e9bb1) {
      console.error("[MoviesMod] Error resolving Driveseed link: " + _0x1e9bb1.message);
      return {
        downloadOptions: [],
        size: null,
        fileName: null
      };
    }
  });
}
function resolveResumeCloudLink(_0x461df4) {
  return __async(this, null, function* () {
    try {
      const _0x1e0966 = yield makeRequest(_0x461df4, {
        headers: {
          Referer: "https://driveseed.org/"
        }
      });
      const _0x55063f = yield _0x1e0966.text();
      const _0x5d7bb4 = cheerio.load(_0x55063f);
      const _0xa1c2cb = _0x5d7bb4("a:contains(\"Cloud Resume Download\")").attr("href");
      return _0xa1c2cb || null;
    } catch (_0x77caa0) {
      console.error("[MoviesMod] Error resolving Resume Cloud link: " + _0x77caa0.message);
      return null;
    }
  });
}
function resolveVideoSeedLink(_0xac1630) {
  return __async(this, null, function* () {
    try {
      const _0x393202 = new URLSearchParams(new URL(_0xac1630).search);
      const _0x1fe575 = _0x393202.get("url");
      if (_0x1fe575) {
        const _0x4794c7 = new URL(_0xac1630).origin + "/api";
        const _0x532db5 = new URLSearchParams();
        _0x532db5.append("keys", _0x1fe575);
        const _0x5c79df = yield fetch(_0x4794c7, {
          method: "POST",
          body: _0x532db5,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "x-token": new URL(_0xac1630).hostname,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
          }
        });
        if (_0x5c79df.ok) {
          const _0x10cfc9 = yield _0x5c79df.json();
          if (_0x10cfc9 && _0x10cfc9.url) {
            return _0x10cfc9.url;
          }
        }
      }
      return null;
    } catch (_0x101725) {
      console.error("[MoviesMod] Error resolving VideoSeed link: " + _0x101725.message);
      return null;
    }
  });
}
function validateVideoUrl(_0x4fcbe4, _0x44073e = 10000) {
  return __async(this, null, function* () {
    try {
      console.log("[MoviesMod] Validating URL: " + _0x4fcbe4.substring(0, 100) + "...");
      const _0x48b029 = yield fetch(_0x4fcbe4, {
        method: "HEAD",
        headers: {
          Range: "bytes=0-1",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
      if (_0x48b029.ok || _0x48b029.status === 206) {
        console.log("[MoviesMod] ✓ URL validation successful (" + _0x48b029.status + ")");
        return true;
      } else {
        console.log("[MoviesMod] ✗ URL validation failed with status: " + _0x48b029.status);
        return false;
      }
    } catch (_0x4b69bd) {
      console.log("[MoviesMod] ✗ URL validation failed: " + _0x4b69bd.message);
      return false;
    }
  });
}
function getStreams(_0x46670d, _0x50f2c9 = "movie", _0x2dc05c = null, _0x55e666 = null) {
  return __async(this, null, function* () {
    var _0x2a4aa3;
    var _0x28bd8e;
    console.log("[MoviesMod] Fetching streams for TMDB ID: " + _0x46670d + ", Type: " + _0x50f2c9 + (_0x2dc05c ? ", S" + _0x2dc05c + "E" + _0x55e666 : ""));
    try {
      const _0xe91cf5 = "https://api.themoviedb.org/3/" + (_0x50f2c9 === "tv" ? "tv" : "movie") + "/" + _0x46670d + "?api_key=" + TMDB_API_KEY + "&append_to_response=external_ids";
      const _0x298746 = yield makeRequest(_0xe91cf5);
      const _0x478408 = yield _0x298746.json();
      const _0x7b9d28 = _0x50f2c9 === "tv" ? _0x478408.name : _0x478408.title;
      const _0x116d6a = _0x50f2c9 === "tv" ? (_0x2a4aa3 = _0x478408.first_air_date) == null ? undefined : _0x2a4aa3.substring(0, 4) : (_0x28bd8e = _0x478408.release_date) == null ? undefined : _0x28bd8e.substring(0, 4);
      const _0x3e5215 = _0x478408.external_ids ? _0x478408.external_ids.imdb_id : null;
      if (!_0x7b9d28) {
        throw new Error("Could not extract title from TMDB response");
      }
      console.log("[MoviesMod] TMDB Info: \"" + _0x7b9d28 + "\" (" + _0x116d6a + ") [IMDB: " + (_0x3e5215 || "N/A") + "]");
      let _0x11da42 = [];
      let _0x27840b = null;
      if (_0x3e5215) {
        const _0xd6f836 = _0x50f2c9 === "tv" && _0x2dc05c ? _0x3e5215 + " Season " + _0x2dc05c : _0x3e5215;
        console.log("[MoviesMod] Trying IMDB ID search first: " + _0xd6f836);
        _0x11da42 = yield searchMoviesMod(_0xd6f836);
        if (_0x11da42.length > 0) {
          console.log("[MoviesMod] Found match using IMDB ID: " + _0x11da42[0].title);
          _0x27840b = _0x11da42[0];
        }
      }
      if (!_0x27840b) {
        console.log("[MoviesMod] Falling back to title search for: " + _0x7b9d28);
        const _0x9eb56c = _0x50f2c9 === "tv" && _0x2dc05c ? _0x7b9d28 + " Season " + _0x2dc05c : _0x7b9d28;
        _0x11da42 = yield searchMoviesMod(_0x9eb56c);
        if (_0x11da42.length === 0) {
          _0x11da42 = yield searchMoviesMod(_0x7b9d28);
        }
        if (_0x11da42.length === 0) {
          console.log("[MoviesMod] No search results found");
          return [];
        }
        const _0x4bd090 = _0x11da42.map(_0x3009c5 => _0x3009c5.title);
        const _0x10ae8c = findBestMatch(_0x7b9d28, _0x4bd090);
        console.log("[MoviesMod] Best match for \"" + _0x7b9d28 + "\" is \"" + _0x10ae8c.bestMatch.target + "\" with a rating of " + _0x10ae8c.bestMatch.rating.toFixed(2));
        if (_0x10ae8c.bestMatch.rating > 0.3) {
          _0x27840b = _0x11da42[_0x10ae8c.bestMatchIndex];
          if (_0x50f2c9 === "movie" && _0x116d6a) {
            if (!_0x27840b.title.includes(_0x116d6a)) {
              console.warn("[MoviesMod] Title match found, but year mismatch. Matched: \"" + _0x27840b.title + "\", Expected year: " + _0x116d6a + ". Discarding match.");
              _0x27840b = null;
            }
          }
        }
        if (!_0x27840b) {
          console.log("[MoviesMod] Similarity match failed. Trying stricter search...");
          const _0x267999 = new RegExp("\\b" + escapeRegExp(_0x7b9d28.toLowerCase()) + "\\b");
          if (_0x50f2c9 === "movie") {
            _0x27840b = _0x11da42.find(_0x510749 => _0x267999.test(_0x510749.title.toLowerCase()) && (!_0x116d6a || _0x510749.title.includes(_0x116d6a)));
          } else {
            _0x27840b = _0x11da42.find(_0x403275 => _0x267999.test(_0x403275.title.toLowerCase()) && _0x403275.title.toLowerCase().includes("season"));
          }
        }
      }
      if (!_0x27840b) {
        console.log("[MoviesMod] No suitable search result found for \"" + _0x7b9d28 + " (" + _0x116d6a + ")\"");
        return [];
      }
      console.log("[MoviesMod] Selected: " + _0x27840b.title);
      const _0xf68617 = yield extractDownloadLinks(_0x27840b.url);
      if (_0xf68617.length === 0) {
        console.log("[MoviesMod] No download links found");
        return [];
      }
      let _0x476abf = _0xf68617;
      if ((_0x50f2c9 === "tv" || _0x50f2c9 === "series") && _0x2dc05c !== null) {
        _0x476abf = _0xf68617.filter(_0x8112e2 => _0x8112e2.quality.toLowerCase().includes("season " + _0x2dc05c) || _0x8112e2.quality.toLowerCase().includes("s" + _0x2dc05c));
      }
      _0x476abf = _0x476abf.filter(_0x1bacf1 => !_0x1bacf1.quality.toLowerCase().includes("480p"));
      console.log("[MoviesMod] " + _0x476abf.length + " links remaining after 480p filter.");
      if (_0x476abf.length === 0) {
        console.log("[MoviesMod] No relevant links found after filtering");
        return [];
      }
      const _0x2304fe = _0x476abf.map(_0x355dad => __async(this, null, function* () {
        var _0x47c90b;
        try {
          const _0x3a25d4 = yield resolveIntermediateLink(_0x355dad.url, _0x27840b.url, _0x355dad.quality);
          if (!_0x3a25d4 || _0x3a25d4.length === 0) {
            console.log("[MoviesMod] No final links found for " + _0x355dad.quality);
            return null;
          }
          const _0x347658 = [];
          for (const _0x1e1ed8 of _0x3a25d4) {
            let _0x31d4d4 = _0x1e1ed8.url;
            const _0x27d988 = _0x1e1ed8.server && _0x1e1ed8.server.toLowerCase().includes("episode");
            console.log("[MoviesMod] Processing link: server=\"" + _0x1e1ed8.server + "\", isEpisodeLink=" + _0x27d988 + ", url=" + _0x1e1ed8.url.substring(0, 50) + "...");
            if (_0x31d4d4.includes("cloud.unblockedgames.world") || _0x31d4d4.includes("tech.creativeexpressionsblog.com") || _0x31d4d4.includes("tech.examzculture.in")) {
              const _0x575f9f = yield resolveTechUnblockedLink(_0x31d4d4);
              if (!_0x575f9f) {
                continue;
              }
              _0x31d4d4 = _0x575f9f;
            }
            if (_0x31d4d4 && _0x31d4d4.includes("driveseed.org")) {
              console.log("[MoviesMod] Processing driveseed URL: " + _0x31d4d4.substring(0, 80) + "...");
              const _0x1d8929 = yield resolveDriveseedLink(_0x31d4d4);
              console.log("[MoviesMod] Driveseed info: " + (_0x1d8929 ? "options=" + (((_0x47c90b = _0x1d8929.downloadOptions) == null ? undefined : _0x47c90b.length) || 0) : "null"));
              if (_0x1d8929 && _0x1d8929.downloadOptions && _0x1d8929.downloadOptions.length > 0) {
                console.log("[MoviesMod] Download options available: " + _0x1d8929.downloadOptions.map(_0x40fd1d => _0x40fd1d.type + ": " + _0x40fd1d.title).join(", "));
                const _0x2619e1 = _0x1d8929.downloadOptions.sort((_0x4290e4, _0xbcd802) => _0x4290e4.priority - _0xbcd802.priority);
                let _0x352806 = null;
                let _0x4b985f = null;
                for (const _0x525bb1 of _0x2619e1) {
                  console.log("[MoviesMod] Trying " + _0x525bb1.title + " (" + _0x525bb1.type + ") for " + _0x355dad.quality + "...");
                  if (_0x525bb1.type === "resume" || _0x525bb1.type === "worker") {
                    _0x352806 = yield resolveResumeCloudLink(_0x525bb1.url);
                    console.log("[MoviesMod] Resume/Worker result: " + (_0x352806 ? "got URL" : "null"));
                  } else if (_0x525bb1.type === "instant") {
                    _0x352806 = yield resolveVideoSeedLink(_0x525bb1.url);
                    console.log("[MoviesMod] Instant API result: " + (_0x352806 ? "got URL" : "null"));
                    if (!_0x352806) {
                      _0x352806 = _0x525bb1.url;
                      console.log("[MoviesMod] Instant fallback: using URL directly");
                    }
                  } else if (_0x525bb1.type === "generic") {
                    _0x352806 = _0x525bb1.url;
                    console.log("[MoviesMod] Generic result: using URL directly");
                  }
                  if (_0x352806) {
                    const _0x46fb9d = yield validateVideoUrl(_0x352806);
                    if (_0x46fb9d) {
                      _0x4b985f = _0x525bb1.title;
                      console.log("[MoviesMod] ✓ Successfully resolved using " + _0x4b985f);
                      break;
                    } else {
                      console.log("[MoviesMod] ✗ " + _0x525bb1.title + " returned invalid URL");
                      _0x352806 = null;
                    }
                  }
                }
                if (_0x352806) {
                  console.log("[MoviesMod] URL validation: SUCCESS");
                  if (_0x27d988 && _0x55e666 !== null) {
                    const _0xe71670 = _0x1e1ed8.server.match(/Episode\s+(\d+)/i);
                    console.log("[MoviesMod] Episode filtering: server=\"" + _0x1e1ed8.server + "\", requested episode=" + _0x55e666 + ", found episode=" + (_0xe71670 ? _0xe71670[1] : "none"));
                    if (_0xe71670 && parseInt(_0xe71670[1]) !== _0x55e666) {
                      console.log("[MoviesMod] Skipping episode " + _0xe71670[1] + " (not episode " + _0x55e666 + ")");
                      continue;
                    } else if (_0xe71670 && parseInt(_0xe71670[1]) === _0x55e666) {
                      console.log("[MoviesMod] Processing episode " + _0x55e666 + " - continuing...");
                    }
                  }
                  const _0x310aeb = _0x50f2c9 === "tv" && _0x2dc05c && _0x55e666 ? _0x27840b.title + " S" + _0x2dc05c.toString().padStart(2, "0") + "E" + _0x55e666.toString().padStart(2, "0") : _0x27840b.title;
                  _0x347658.push({
                    name: ("MoviesMod " + (_0x1e1ed8.server || "") + " - " + _0x355dad.quality).trim(),
                    title: _0x310aeb,
                    url: _0x352806,
                    quality: _0x355dad.quality,
                    size: _0x1d8929.size || "Unknown",
                    headers: {
                      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                      Referer: "https://driveseed.org/"
                    },
                    provider: "moviesmod"
                  });
                  break;
                }
              }
            }
          }
          const _0x367ad3 = _0x347658.length > 0 ? _0x347658[0] : null;
          console.log("[MoviesMod] Returning " + (_0x367ad3 ? "stream" : "null") + " for " + _0x355dad.quality);
          return _0x367ad3;
        } catch (_0x4fb5c0) {
          console.error("[MoviesMod] Error processing link " + _0x355dad.quality + ": " + _0x4fb5c0.message);
          return null;
        }
      }));
      const _0x2a5bd2 = yield Promise.all(_0x2304fe);
      console.log("[MoviesMod] Raw streams before filtering: " + _0x2a5bd2.length);
      _0x2a5bd2.forEach((_0x2e100d, _0x4d84b1) => {
        console.log("  [" + _0x4d84b1 + "] " + (_0x2e100d ? "VALID" : "NULL"));
      });
      const _0x54ede1 = _0x2a5bd2.filter(Boolean);
      console.log("[MoviesMod] Streams after null filtering: " + _0x54ede1.length);
      _0x54ede1.sort((_0x1ec887, _0x35e9fc) => {
        const _0x1ee84e = parseQualityForSort(_0x1ec887.quality);
        const _0x45daeb = parseQualityForSort(_0x35e9fc.quality);
        return _0x45daeb - _0x1ee84e;
      });
      console.log("[MoviesMod] Successfully processed " + _0x54ede1.length + " streams");
      return _0x54ede1;
    } catch (_0x4da171) {
      console.error("[MoviesMod] Error in getStreams: " + _0x4da171.message);
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