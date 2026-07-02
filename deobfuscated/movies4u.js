var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x795e0a, _0x541483, _0x526309) => _0x541483 in _0x795e0a ? __defProp(_0x795e0a, _0x541483, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x526309
}) : _0x795e0a[_0x541483] = _0x526309;
var __spreadValues = (_0x2f28cc, _0x11c7c9) => {
  for (var _0x8ffaa1 in _0x11c7c9 ||= {}) {
    if (__hasOwnProp.call(_0x11c7c9, _0x8ffaa1)) {
      __defNormalProp(_0x2f28cc, _0x8ffaa1, _0x11c7c9[_0x8ffaa1]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x8ffaa1 of __getOwnPropSymbols(_0x11c7c9)) {
      if (__propIsEnum.call(_0x11c7c9, _0x8ffaa1)) {
        __defNormalProp(_0x2f28cc, _0x8ffaa1, _0x11c7c9[_0x8ffaa1]);
      }
    }
  }
  return _0x2f28cc;
};
var __spreadProps = (_0x14edc8, _0x3e6723) => __defProps(_0x14edc8, __getOwnPropDescs(_0x3e6723));
var __async = (_0x1a06a2, _0x3b80bf, _0x476c80) => {
  return new Promise((_0x5b4446, _0x54a678) => {
    var _0x448140 = _0x3ff91f => {
      try {
        _0x5368f8(_0x476c80.next(_0x3ff91f));
      } catch (_0x567ff6) {
        _0x54a678(_0x567ff6);
      }
    };
    var _0x376f78 = _0x1f440e => {
      try {
        _0x5368f8(_0x476c80.throw(_0x1f440e));
      } catch (_0x11de21) {
        _0x54a678(_0x11de21);
      }
    };
    var _0x5368f8 = _0x3c6241 => _0x3c6241.done ? _0x5b4446(_0x3c6241.value) : Promise.resolve(_0x3c6241.value).then(_0x448140, _0x376f78);
    _0x5368f8((_0x476c80 = _0x476c80.apply(_0x1a06a2, _0x3b80bf)).next());
  });
};
var DOMAINS_URL = "https://raw.githubusercontent.com/phisher98/TVVVV/refs/heads/main/domains.json";
var FALLBACK_URL = "https://new2.movies4u.finance";
var TMDB_API_KEY = "1865f43a0549ca50d341dd9ab8b29f49";
var HUB_CLOUD_API = "https://hc-zf3c.vercel.app";
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  Referer: FALLBACK_URL,
  Cookie: "xla=s4t"
};
var cachedBaseUrl = null;
function getBaseUrl() {
  return __async(this, null, function* () {
    if (cachedBaseUrl) {
      return cachedBaseUrl;
    }
    try {
      const _0x26ef23 = yield fetch(DOMAINS_URL, {
        skipSizeCheck: true
      });
      const _0x36eda8 = yield _0x26ef23.json();
      cachedBaseUrl = _0x36eda8.movies4u || _0x36eda8.movies4uhd || FALLBACK_URL;
    } catch (_0x53a937) {
      cachedBaseUrl = FALLBACK_URL;
    }
    return cachedBaseUrl;
  });
}
function extractQuality(_0x247197) {
  const _0x132a38 = (_0x247197 || "").toLowerCase();
  if (/\b(2160p|4k|uhd)\b/.test(_0x132a38)) {
    return "4K";
  }
  if (/\b(1080p|1080)(?!(?:\s*gb|\s*mb|\s*b))\b/.test(_0x132a38)) {
    return "1080p";
  }
  if (/\b(720p|720)(?!(?:\s*gb|\s*mb|\s*b))\b/.test(_0x132a38)) {
    return "720p";
  }
  if (/\b(480p|480)(?!(?:\s*gb|\s*mb|\s*b))\b/.test(_0x132a38)) {
    return "480p";
  }
  if (/\b(360p|360)(?!(?:\s*gb|\s*mb|\s*b))\b/.test(_0x132a38)) {
    return "360p";
  }
  return "Unknown";
}
function parseExtraMetadata(_0x1a38f5) {
  const _0x11ad37 = (_0x1a38f5 || "").toUpperCase();
  let _0x5e3994 = "Multi-Audio";
  if (_0x11ad37.includes("DUAL")) {
    _0x5e3994 = "Multi Audio";
  }
  if (_0x11ad37.includes("ENGLISH") && !_0x11ad37.includes("HINDI")) {
    _0x5e3994 = "English";
  }
  const _0x6f4f7f = _0x11ad37.match(/(\d+(?:\.\d+)?\s*[MGB]B)/i);
  let _0x40a25b = _0x6f4f7f ? _0x6f4f7f[0].replace(/\s+/g, "") : "N/A";
  if (_0x40a25b === "N/A") {
    const _0x2332e1 = _0x11ad37.match(/(\d+\.\d+)\s?G/);
    if (_0x2332e1) {
      _0x40a25b = _0x2332e1[1] + "GB";
    }
  }
  let _0x26130d = "MKV";
  if (_0x11ad37.includes("MP4")) {
    _0x26130d = "MP4";
  }
  if (_0x11ad37.includes("HEVC") || _0x11ad37.includes("X265") || _0x11ad37.includes("H265")) {
    _0x26130d += " (x265)";
  } else if (_0x11ad37.includes("X264") || _0x11ad37.includes("H264")) {
    _0x26130d += " (x264)";
  }
  const _0x3e0ed5 = [];
  if (_0x11ad37.includes("HDR")) {
    _0x3e0ed5.push("HDR");
  }
  if (_0x11ad37.includes("DOLBY") || _0x11ad37.includes("DV") || _0x11ad37.includes("VISION") || _0x11ad37.includes("ATMOS") || _0x11ad37.includes("DD5")) {
    _0x3e0ed5.push("Dolby Vision/5.1");
  }
  if (_0x11ad37.includes("10BIT")) {
    _0x3e0ed5.push("10-Bit");
  }
  if (_0x11ad37.includes("REMUX")) {
    _0x3e0ed5.push("Remux");
  }
  return {
    language: _0x5e3994,
    size: _0x40a25b,
    format: _0x26130d,
    extras: _0x3e0ed5.length > 0 ? _0x3e0ed5.join(" | ") : "Standard Dynamic Range"
  };
}
function cleanServerName(_0x1bea5c) {
  if (!_0x1bea5c) {
    return "HubCloud";
  }
  let _0x4aa532 = _0x1bea5c.toLowerCase();
  if (_0x4aa532.includes("fsl") || _0x4aa532.includes("fast")) {
    return "FSL Server";
  }
  if (_0x4aa532.includes("pixel")) {
    return "PixelDrain";
  }
  if (_0x4aa532.includes("drive") || _0x4aa532.includes("gdrive")) {
    return "Cloud Drive";
  }
  _0x4aa532 = _0x4aa532.replace(/download|links?|button|server|\s+/gi, " ").trim();
  _0x4aa532 = _0x4aa532.replace(/[\[\]\(\)]/g, "").trim();
  return _0x4aa532.split(" ").map(_0x3f9c97 => _0x3f9c97.charAt(0).toUpperCase() + _0x3f9c97.slice(1)).join(" ") + " Server";
}
function resolveAllHubCloudLinks(_0x3398ef) {
  return __async(this, null, function* () {
    try {
      const _0x34eef2 = HUB_CLOUD_API + "/api/extract?url=" + encodeURIComponent(_0x3398ef);
      const _0x4c80a5 = yield fetch(_0x34eef2, {
        headers: {
          Accept: "application/json"
        },
        skipSizeCheck: true
      });
      const _0x47262a = yield _0x4c80a5.json();
      if (_0x47262a && _0x47262a.links && _0x47262a.links.length > 0) {
        return _0x47262a.links;
      }
    } catch (_0x2eba9a) {
      console.error("[Movies4u] HubCloud resolution failed:", _0x2eba9a);
    }
    return [];
  });
}
function detectDynamicQuality(_0x5e95e8) {
  return __async(this, arguments, function* (_0x5830a6, _0x1c2c66 = {}, _0x120e5e = "", _0x2ab87d = 120) {
    try {
      if (!_0x5830a6) {
        return "1080p";
      }
      const _0x5c7abf = decodeURIComponent(_0x5830a6).toLowerCase();
      let _0x375278 = extractQuality(_0x5c7abf);
      if (_0x375278 !== "Unknown") {
        return _0x375278;
      }
      if (_0x120e5e) {
        _0x375278 = extractQuality(_0x120e5e.toLowerCase());
        if (_0x375278 !== "Unknown") {
          return _0x375278;
        }
      }
      const _0x3fdf35 = yield detectFileSize(_0x5830a6, _0x1c2c66);
      if (_0x3fdf35 && _0x3fdf35.bytes) {
        const _0xad4f38 = _0x3fdf35.bytes / 1073741824;
        const _0x1c1c24 = parseInt(_0x2ab87d) || 120;
        const _0x5cf51f = _0x1c1c24 / 60;
        const _0x59a972 = _0xad4f38 / _0x5cf51f;
        if (_0x59a972 >= 6.5) {
          return "4K";
        }
        if (_0x59a972 >= 0.95) {
          return "1080p";
        }
        if (_0x59a972 >= 0.35) {
          return "720p";
        }
        return "480p";
      }
    } catch (_0x3c8a) {}
    return "1080p";
  });
}
function detectFileSize(_0x233466) {
  return __async(this, arguments, function* (_0x2ec82e, _0x1c4976 = {}) {
    try {
      const _0x23ee76 = yield fetch(_0x2ec82e, {
        method: "HEAD",
        headers: _0x1c4976,
        skipSizeCheck: true,
        redirect: "follow"
      });
      const _0x252580 = _0x23ee76.headers.get("content-length");
      if (!_0x252580) {
        return null;
      }
      const _0x31fe8f = parseInt(_0x252580);
      let _0x4ebdae = "";
      if (_0x31fe8f >= 1073741824) {
        _0x4ebdae = (_0x31fe8f / 1073741824).toFixed(1) + "GB";
      } else {
        _0x4ebdae = Math.round(_0x31fe8f / 1048576) + "MB";
      }
      return {
        bytes: _0x31fe8f,
        string: _0x4ebdae
      };
    } catch (_0x15cfa4) {}
    return null;
  });
}
function extractMetadataFromUrl(_0x4d9126) {
  const _0x2ab52b = decodeURIComponent(_0x4d9126);
  return {
    quality: extractQuality(_0x2ab52b),
    meta: parseExtraMetadata(_0x2ab52b)
  };
}
function unpackJS(_0x436d9e, _0x4dd393, _0x49c8a7, _0x39bc7f) {
  while (_0x49c8a7--) {
    if (_0x39bc7f[_0x49c8a7]) {
      _0x436d9e = _0x436d9e.replace(new RegExp("\\b" + _0x49c8a7.toString(_0x4dd393) + "\\b", "g"), _0x39bc7f[_0x49c8a7]);
    }
  }
  return _0x436d9e;
}
function extractDirectM3u8(_0x285081) {
  return __async(this, null, function* () {
    var _0x3611cd;
    var _0xb0b3c4;
    var _0x3df4d9;
    var _0x19697a;
    var _0x583c01;
    var _0x22c843;
    try {
      const _0x3071a6 = yield fetch(_0x285081, {
        headers: __spreadProps(__spreadValues({}, HEADERS), {
          Referer: "https://m4uplay.store/"
        }),
        skipSizeCheck: true
      });
      const _0x56fb77 = yield _0x3071a6.text();
      let _0x40cf53 = ((_0x3611cd = _0x56fb77.match(/https?:\/\/[^\s"'<>]+\.m3u8[^\s"'<>]*/i)) == null ? undefined : _0x3611cd[0]) || ((_0xb0b3c4 = _0x56fb77.match(/https?:\/\/[^\s"'<>]+master\.txt[^\s"'<>]*/i)) == null ? undefined : _0xb0b3c4[0]);
      if (!_0x40cf53) {
        const _0x952e02 = (_0x3df4d9 = _0x56fb77.match(/\/(?:3o|stream)\/[^\s"'<>]+(?:m3u8|txt)/i)) == null ? undefined : _0x3df4d9[0];
        if (_0x952e02) {
          _0x40cf53 = "https://m4uplay.store" + _0x952e02;
        }
      }
      if (!_0x40cf53) {
        const _0x1c90db = _0x56fb77.match(new RegExp("eval\\(function\\(p,a,c,k,e,d\\).*?\\}\\('(.*)',(\\d+),(\\d+),'(.*)'\\.split\\('\\|'\\)", "s"));
        if (_0x1c90db) {
          const _0x1eaf4f = unpackJS(_0x1c90db[1], parseInt(_0x1c90db[2]), parseInt(_0x1c90db[3]), _0x1c90db[4].split("|"));
          _0x40cf53 = ((_0x19697a = _0x1eaf4f.match(/https?:\/\/[^\s"'<>]+\.m3u8[^\s"'<>]*/i)) == null ? undefined : _0x19697a[0]) || ((_0x583c01 = _0x1eaf4f.match(/https?:\/\/[^\s"'<>]+master\.txt[^\s"'<>]*/i)) == null ? undefined : _0x583c01[0]);
          if (!_0x40cf53) {
            const _0x282c73 = (_0x22c843 = _0x1eaf4f.match(/\/(?:3o|stream)\/[^\s"'<>]+(?:m3u8|txt)/i)) == null ? undefined : _0x22c843[0];
            if (_0x282c73) {
              _0x40cf53 = "https://m4uplay.store" + _0x282c73;
            }
          }
        }
      }
      if (_0x40cf53) {
        return _0x40cf53.replace("master.txt", "master.m3u8");
      }
    } catch (_0x202284) {
      console.error("[Movies4u] Player direct parsing failed:", _0x202284);
    }
    return null;
  });
}
function getStreams(_0x329bfd, _0x174a63 = "movie", _0x366bb6 = null, _0x5db94d = null) {
  return __async(this, null, function* () {
    try {
      const _0x3e5850 = yield getBaseUrl();
      let _0x26b222 = 120;
      const _0x24a7fa = "https://api.themoviedb.org/3/" + _0x174a63 + "/" + _0x329bfd + "?api_key=" + TMDB_API_KEY;
      const _0x233f1f = yield (yield fetch(_0x24a7fa, {
        skipSizeCheck: true
      })).json();
      const _0x1292a8 = _0x233f1f.title || _0x233f1f.name;
      if (!_0x1292a8) {
        return [];
      }
      const _0x4a8a61 = (_0x233f1f.release_date || _0x233f1f.first_air_date || "").split("-")[0] || "N/A";
      const _0x3e5c86 = _0x233f1f.runtime ? _0x233f1f.runtime + " min" : "N/A";
      if (_0x174a63 === "movie" && _0x233f1f.runtime) {
        _0x26b222 = parseInt(_0x233f1f.runtime);
      } else if (_0x174a63 === "series") {
        _0x26b222 = _0x233f1f.episode_run_time && _0x233f1f.episode_run_time[0] ? parseInt(_0x233f1f.episode_run_time[0]) : 45;
      }
      const _0x1b238f = yield fetch(_0x3e5850 + "/?s=" + encodeURIComponent(_0x1292a8), {
        headers: HEADERS,
        skipSizeCheck: true
      });
      const _0x437e3a = yield _0x1b238f.text();
      const _0x3dc634 = cheerio.load(_0x437e3a);
      const _0x1ebd1e = [];
      _0x3dc634("article").each((_0x3117f6, _0x5e5655) => {
        const _0x3b7e45 = _0x3dc634(_0x5e5655).find("h2 a, h3 a, a[rel='bookmark']").first();
        let _0x2e8420 = _0x3b7e45.attr("href");
        const _0x4c96cb = _0x3b7e45.text().trim();
        if (_0x2e8420 && _0x4c96cb) {
          if (!_0x2e8420.startsWith("http")) {
            _0x2e8420 = _0x3e5850 + "/" + _0x2e8420.replace(/^\/+/, "");
          }
          _0x1ebd1e.push({
            href: _0x2e8420,
            name: _0x4c96cb
          });
        }
      });
      if (!_0x1ebd1e.length) {
        return [];
      }
      const _0x5827a3 = _0x1ebd1e.find(_0x33860f => _0x33860f.name.toLowerCase().includes(_0x1292a8.toLowerCase())) || _0x1ebd1e[0];
      if (!_0x5827a3) {
        return [];
      }
      const _0x3fd05e = yield fetch(_0x5827a3.href, {
        headers: HEADERS,
        skipSizeCheck: true
      });
      const _0x543aff = yield _0x3fd05e.text();
      const _0x504758 = cheerio.load(_0x543aff);
      const _0x81464c = [];
      const _0x250f3d = [];
      _0x504758("a.btn.btn-zip, a[href*='m4uplay.store']").each((_0xa2a721, _0x4b04d6) => {
        const _0x2d59f8 = _0x3dc634(_0x4b04d6).attr("href");
        const _0x4b311c = _0x3dc634(_0x4b04d6).text() || "";
        if (_0x2d59f8 && !_0x250f3d.some(_0x5b5388 => _0x5b5388.href === _0x2d59f8)) {
          _0x250f3d.push({
            href: _0x2d59f8,
            text: _0x4b311c
          });
        }
      });
      for (const _0x16b648 of _0x250f3d) {
        const _0x334fd7 = yield extractDirectM3u8(_0x16b648.href);
        if (_0x334fd7) {
          const _0x2ba5cf = extractMetadataFromUrl(_0x334fd7);
          const _0x541bda = yield detectFileSize(_0x334fd7, {
            Referer: "https://m4uplay.store/"
          });
          const _0x44ccbd = yield detectDynamicQuality(_0x334fd7, {
            Referer: "https://m4uplay.store/"
          }, _0x16b648.text, _0x26b222);
          let _0x5239cb = _0x2ba5cf.quality !== "Unknown" ? _0x2ba5cf.quality : _0x44ccbd;
          const _0x49187d = parseExtraMetadata(_0x16b648.text);
          _0x81464c.push({
            server: "Player Direct",
            quality: _0x5239cb,
            meta: __spreadProps(__spreadValues({}, _0x49187d), {
              size: _0x541bda ? _0x541bda.string : "N/A"
            }),
            url: _0x334fd7,
            headers: {
              Referer: "https://m4uplay.store/",
              Origin: "https://m4uplay.store",
              "User-Agent": HEADERS["User-Agent"]
            }
          });
        }
      }
      if (_0x174a63 === "series" || _0x5827a3.href.includes("/tvshows/") || _0x5827a3.href.includes("/series/")) {
        const _0x13a6c0 = [];
        _0x504758("h4").each((_0x538ecd, _0x5d44a6) => {
          const _0x4cbf5d = _0x3dc634(_0x5d44a6).text().toLowerCase();
          const _0x532c26 = _0x4cbf5d.match(/season\s*0*(\d+)/i);
          if (_0x532c26 && parseInt(_0x532c26[1]) === (_0x366bb6 || 1)) {
            let _0x139d84 = _0x3dc634(_0x5d44a6).next();
            while (_0x139d84.length && !["h2", "h3", "h4"].includes(_0x139d84[0].name)) {
              if (_0x139d84[0].name === "a") {
                const _0x54b832 = _0x139d84.attr("href") || "";
                const _0x4c4507 = _0x139d84.text() || "";
                if (_0x54b832.includes("m4ulinks.com") && _0x4c4507.toLowerCase().includes("download links")) {
                  if (!_0x13a6c0.some(_0x439d8f => _0x439d8f.href === _0x54b832)) {
                    _0x13a6c0.push({
                      href: _0x54b832,
                      parentText: _0x4c4507
                    });
                  }
                }
              }
              _0x139d84 = _0x139d84.next();
            }
          }
        });
        for (const _0xf8acb5 of _0x13a6c0) {
          try {
            const _0x4a9de2 = yield fetch(_0xf8acb5.href, {
              headers: HEADERS,
              skipSizeCheck: true
            });
            const _0x2aa9be = yield _0x4a9de2.text();
            const _0x1740b2 = cheerio.load(_0x2aa9be);
            const _0x27f9a2 = [];
            _0x1740b2("h5, h4, h3").each((_0x2ddb2f, _0x1c92ec) => {
              const _0x5c3b9b = _0x3dc634(_0x1c92ec).text();
              const _0x390139 = _0x5c3b9b.toLowerCase();
              const _0x423beb = _0x390139.match(/episodes?\s*[:\-]?\s*0*(\d+)/i);
              if (_0x423beb && parseInt(_0x423beb[1]) === (_0x5db94d || 1)) {
                let _0x213603 = _0x3dc634(_0x1c92ec).next();
                while (_0x213603.length && !["h3", "h4", "h5"].includes(_0x213603[0].name)) {
                  if (_0x213603[0].name === "a") {
                    const _0x48991e = _0x213603.attr("href") || "";
                    const _0x22a984 = _0x213603.text() || "";
                    const _0x3203fe = _0x5c3b9b + " " + _0x22a984;
                    if (_0x48991e.includes("hubcloud") || _0x48991e.includes("hub-cloud") || _0x48991e.includes("m4uplay.store")) {
                      if (!_0x27f9a2.some(_0x3ec196 => _0x3ec196.href === _0x48991e)) {
                        _0x27f9a2.push({
                          href: _0x48991e,
                          contextualText: _0x3203fe
                        });
                      }
                    }
                  }
                  _0x213603 = _0x213603.next();
                }
              }
            });
            for (const _0x2ef7d8 of _0x27f9a2) {
              const _0x38e06b = parseExtraMetadata(_0x2ef7d8.contextualText);
              if (_0x2ef7d8.href.includes("m4uplay.store")) {
                const _0x424d2a = yield extractDirectM3u8(_0x2ef7d8.href);
                if (_0x424d2a) {
                  const _0x25db88 = extractMetadataFromUrl(_0x424d2a);
                  const _0x88d3c1 = yield detectFileSize(_0x424d2a, {
                    Referer: "https://m4uplay.store/"
                  });
                  const _0x231a4a = yield detectDynamicQuality(_0x424d2a, {
                    Referer: "https://m4uplay.store/"
                  }, _0x2ef7d8.contextualText, _0x26b222);
                  _0x81464c.push({
                    server: "M4U Player",
                    quality: _0x25db88.quality !== "Unknown" ? _0x25db88.quality : _0x231a4a,
                    meta: __spreadProps(__spreadValues({}, _0x38e06b), {
                      size: _0x88d3c1 ? _0x88d3c1.string : "N/A"
                    }),
                    url: _0x424d2a,
                    headers: {
                      Referer: "https://m4uplay.store/",
                      Origin: "https://m4uplay.store",
                      "User-Agent": HEADERS["User-Agent"]
                    }
                  });
                }
              } else {
                const _0x1f0c0d = yield resolveAllHubCloudLinks(_0x2ef7d8.href);
                for (const _0x516907 of _0x1f0c0d) {
                  const _0x195fda = yield detectFileSize(_0x516907.url, {
                    "User-Agent": HEADERS["User-Agent"]
                  });
                  const _0x5cb981 = yield detectDynamicQuality(_0x516907.url, {
                    "User-Agent": HEADERS["User-Agent"]
                  }, _0x516907.label, _0x26b222);
                  const _0x10a32d = parseExtraMetadata(_0x516907.label || "");
                  _0x81464c.push({
                    server: cleanServerName(_0x516907.label || "HubCloud"),
                    quality: _0x5cb981,
                    meta: {
                      language: _0x10a32d.language,
                      size: _0x195fda ? _0x195fda.string : "N/A",
                      format: _0x10a32d.format,
                      extras: _0x10a32d.extras
                    },
                    url: _0x516907.url,
                    headers: {
                      "User-Agent": HEADERS["User-Agent"]
                    }
                  });
                }
              }
            }
          } catch (_0x27f98b) {}
        }
      } else {
        const _0x4dbd82 = [];
        _0x504758("a[href]").each((_0x104887, _0x4730e5) => {
          const _0x42cae6 = _0x3dc634(_0x4730e5).attr("href") || "";
          const _0x57742e = _0x3dc634(_0x4730e5).text() || "";
          if (_0x42cae6.includes("m4ulinks.com") && _0x57742e.toLowerCase().includes("download links")) {
            if (!_0x4dbd82.some(_0x263bb2 => _0x263bb2.href === _0x42cae6)) {
              _0x4dbd82.push({
                href: _0x42cae6,
                parentText: _0x57742e
              });
            }
          }
        });
        for (const _0x5e1d47 of _0x4dbd82) {
          try {
            const _0x149fe3 = yield fetch(_0x5e1d47.href, {
              headers: HEADERS,
              skipSizeCheck: true
            });
            const _0x492c6e = yield _0x149fe3.text();
            const _0x3e0a43 = cheerio.load(_0x492c6e);
            const _0x37e93a = [];
            _0x3e0a43("h1, h2, h3, h4, h5, h6, p, a.btn, a[href]").each((_0x1f0d5a, _0x5d166a) => {
              const _0x1c56b0 = _0x3dc634(_0x5d166a);
              let _0x522d17 = _0x1c56b0.attr("href") || "";
              let _0x2b8540 = _0x1c56b0.text() || "";
              if (!_0x522d17) {
                const _0x388efd = _0x1c56b0.find("a[href]").first();
                if (_0x388efd.length) {
                  _0x522d17 = _0x388efd.attr("href") || "";
                  _0x2b8540 += " " + _0x388efd.text();
                }
              }
              if (_0x522d17.includes("hubcloud") || _0x522d17.includes("hub-cloud") || _0x522d17.includes("m4uplay.store")) {
                if (!_0x37e93a.some(_0xdec60d => _0xdec60d.href === _0x522d17)) {
                  const _0x8fd4df = _0x1c56b0.parent().text() || "";
                  _0x37e93a.push({
                    href: _0x522d17,
                    contextualText: _0x2b8540 + " " + _0x8fd4df
                  });
                }
              }
            });
            for (const _0x2f9041 of _0x37e93a) {
              const _0x30b0cd = parseExtraMetadata(_0x2f9041.contextualText);
              if (_0x2f9041.href.includes("m4uplay.store")) {
                const _0x283f53 = yield extractDirectM3u8(_0x2f9041.href);
                if (_0x283f53) {
                  const _0x19b08a = extractMetadataFromUrl(_0x283f53);
                  const _0x752df7 = yield detectFileSize(_0x283f53, {
                    Referer: "https://m4uplay.store/"
                  });
                  const _0x36f227 = yield detectDynamicQuality(_0x283f53, {
                    Referer: "https://m4uplay.store/"
                  }, _0x2f9041.contextualText, _0x26b222);
                  _0x81464c.push({
                    server: "M4U Player",
                    quality: _0x19b08a.quality !== "Unknown" ? _0x19b08a.quality : _0x36f227,
                    meta: __spreadProps(__spreadValues({}, _0x30b0cd), {
                      size: _0x752df7 ? _0x752df7.string : "N/A"
                    }),
                    url: _0x283f53,
                    headers: {
                      Referer: "https://m4uplay.store/",
                      Origin: "https://m4uplay.store",
                      "User-Agent": HEADERS["User-Agent"]
                    }
                  });
                }
              } else {
                const _0x1ed1ea = yield resolveAllHubCloudLinks(_0x2f9041.href);
                for (const _0x51e69d of _0x1ed1ea) {
                  const _0xb3b817 = yield detectFileSize(_0x51e69d.url, {
                    "User-Agent": HEADERS["User-Agent"]
                  });
                  const _0x5bd02c = yield detectDynamicQuality(_0x51e69d.url, {
                    "User-Agent": HEADERS["User-Agent"]
                  }, _0x51e69d.label, _0x26b222);
                  const _0x3d1123 = parseExtraMetadata(_0x51e69d.label || "");
                  _0x81464c.push({
                    server: cleanServerName(_0x51e69d.label || "HubCloud"),
                    quality: _0x5bd02c,
                    meta: {
                      language: _0x3d1123.language,
                      size: _0xb3b817 ? _0xb3b817.string : "N/A",
                      format: _0x3d1123.format,
                      extras: _0x3d1123.extras
                    },
                    url: _0x51e69d.url,
                    headers: {
                      "User-Agent": HEADERS["User-Agent"]
                    }
                  });
                }
              }
            }
          } catch (_0x1b92b5) {}
        }
      }
      const _0x402ade = {
        "4K": 100,
        "1080p": 50,
        "720p": 25,
        "480p": 10,
        "360p": 5,
        Unknown: 0
      };
      _0x81464c.sort((_0x2e6a15, _0x4f6251) => {
        return (_0x402ade[_0x4f6251.quality] || 0) - (_0x402ade[_0x2e6a15.quality] || 0);
      });
      const _0x2cb0ad = _0x81464c.map(_0xbb5b62 => {
        const _0x52a83e = _0x174a63 === "series" ? " - S" + (_0x366bb6 || 1) + "E" + (_0x5db94d || 1) : "";
        return {
          name: "Movies4u | " + _0xbb5b62.quality + " | [" + _0xbb5b62.server + "]",
          title: "🎬 " + _0x1292a8 + _0x52a83e + " - " + _0x4a8a61 + "\n⚡ " + _0xbb5b62.quality + " | 🌍 " + _0xbb5b62.meta.language + " | 💾 " + _0xbb5b62.meta.size + "\n🎞️ " + _0xbb5b62.meta.format + " | ⏱️ " + _0x3e5c86 + " | 🛠️ " + _0xbb5b62.meta.extras,
          quality: _0xbb5b62.quality,
          url: _0xbb5b62.url,
          headers: _0xbb5b62.headers,
          subtitles: []
        };
      });
      return _0x2cb0ad;
    } catch (_0x421589) {
      console.error("[Movies4u Code Error]", _0x421589);
      return [];
    }
  });
}
module.exports = {
  getStreams: getStreams
};