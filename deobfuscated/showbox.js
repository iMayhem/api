var __async = (_0x1b6c68, _0x139ee3, _0x1cf243) => {
  return new Promise((_0x5e4c73, _0x3aa3c3) => {
    var _0xefd9b1 = _0x264e4a => {
      try {
        _0x5c7986(_0x1cf243.next(_0x264e4a));
      } catch (_0x55e5e9) {
        _0x3aa3c3(_0x55e5e9);
      }
    };
    var _0x2f39a3 = _0x386c6f => {
      try {
        _0x5c7986(_0x1cf243.throw(_0x386c6f));
      } catch (_0x1680ee) {
        _0x3aa3c3(_0x1680ee);
      }
    };
    var _0x5c7986 = _0x4e3d50 => _0x4e3d50.done ? _0x5e4c73(_0x4e3d50.value) : Promise.resolve(_0x4e3d50.value).then(_0xefd9b1, _0x2f39a3);
    _0x5c7986((_0x1cf243 = _0x1cf243.apply(_0x1b6c68, _0x139ee3)).next());
  });
};
var cheerio = require("cheerio-without-node-native");
var CryptoJS = require("crypto-js");
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var TMDB_BASE_URL = "https://api.themoviedb.org/3";
var DEFAULT_API_BASE = "https://id-mapping-api-showbox-proxy.hf.space/api/media";
var WORKING_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "application/json",
  "Accept-Language": "en-US,en;q=0.9",
  "Content-Type": "application/json"
};
function getUiToken() {
  try {
    let _0x4de3f4 = "";
    if (typeof global !== "undefined" && global.SCRAPER_SETTINGS && global.SCRAPER_SETTINGS.uiToken) {
      _0x4de3f4 = String(global.SCRAPER_SETTINGS.uiToken).trim();
    } else if (typeof window !== "undefined" && window.SCRAPER_SETTINGS && window.SCRAPER_SETTINGS.uiToken) {
      _0x4de3f4 = String(window.SCRAPER_SETTINGS.uiToken).trim();
    }
    if (!_0x4de3f4) {
      return "";
    }
    if (_0x4de3f4.startsWith("eyJ")) {
      console.log("[ShowBox] Base64 JWT/JSON token detected. Attempting automatic decryption...");
      try {
        const _0x2e28b5 = CryptoJS.enc.Base64.parse(_0x4de3f4);
        const _0x5e7b3c = _0x2e28b5.toString(CryptoJS.enc.Utf8);
        const _0xe27467 = JSON.parse(_0x5e7b3c);
        if (_0xe27467 && _0xe27467.encrypt_data) {
          const _0x4bca12 = "wEiphTn!";
          const _0x3935c7 = "123d6cedf626dy54233aa1w6";
          const _0x2e4a09 = CryptoJS.enc.Utf8.parse(_0x3935c7);
          const _0x1c7b72 = CryptoJS.enc.Utf8.parse(_0x4bca12);
          const _0x545125 = CryptoJS.TripleDES.decrypt(_0xe27467.encrypt_data, _0x2e4a09, {
            iv: _0x1c7b72,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
          const _0x167b1b = _0x545125.toString(CryptoJS.enc.Utf8);
          console.log("[ShowBox] Decrypted successfully:", _0x167b1b);
          const _0x584e33 = JSON.parse(_0x167b1b);
          if (_0x584e33 && _0x584e33.uid) {
            console.log("[ShowBox] Extracted UID from payload:", _0x584e33.uid);
            return String(_0x584e33.uid);
          }
        }
      } catch (_0x13b3d5) {
        console.error("[ShowBox] Failed to decrypt base64 uiToken:", _0x13b3d5.message);
      }
    }
    return _0x4de3f4;
  } catch (_0x4a5b39) {}
  return "";
}
function getOssGroup() {
  try {
    if (typeof global !== "undefined" && global.SCRAPER_SETTINGS && global.SCRAPER_SETTINGS.ossGroup) {
      return String(global.SCRAPER_SETTINGS.ossGroup);
    }
    if (typeof window !== "undefined" && window.SCRAPER_SETTINGS && window.SCRAPER_SETTINGS.ossGroup) {
      return String(window.SCRAPER_SETTINGS.ossGroup);
    }
  } catch (_0x191ddf) {}
  return null;
}
function getApiBase() {
  try {
    if (typeof global !== "undefined" && global.SCRAPER_SETTINGS && global.SCRAPER_SETTINGS.apiBase) {
      return String(global.SCRAPER_SETTINGS.apiBase);
    }
    if (typeof window !== "undefined" && window.SCRAPER_SETTINGS && window.SCRAPER_SETTINGS.apiBase) {
      return String(window.SCRAPER_SETTINGS.apiBase);
    }
  } catch (_0x1f32b8) {}
  return DEFAULT_API_BASE;
}
function getQualityFromName(_0x2baea6) {
  if (!_0x2baea6) {
    return "Unknown";
  }
  const _0x1f883f = _0x2baea6.toUpperCase();
  if (_0x1f883f === "ORG" || _0x1f883f === "ORIGINAL") {
    return "Original";
  }
  if (_0x1f883f === "4K" || _0x1f883f === "2160P") {
    return "4K";
  }
  if (_0x1f883f === "1440P" || _0x1f883f === "2K") {
    return "1440p";
  }
  if (_0x1f883f === "1080P" || _0x1f883f === "FHD") {
    return "1080p";
  }
  if (_0x1f883f === "720P" || _0x1f883f === "HD") {
    return "720p";
  }
  if (_0x1f883f === "480P" || _0x1f883f === "SD") {
    return "480p";
  }
  if (_0x1f883f === "360P") {
    return "360p";
  }
  if (_0x1f883f === "240P") {
    return "240p";
  }
  const _0x28ece9 = _0x2baea6.match(/(\d{3,4})[pP]?/);
  if (_0x28ece9) {
    const _0x237b94 = parseInt(_0x28ece9[1]);
    if (_0x237b94 >= 2160) {
      return "4K";
    }
    if (_0x237b94 >= 1440) {
      return "1440p";
    }
    if (_0x237b94 >= 1080) {
      return "1080p";
    }
    if (_0x237b94 >= 720) {
      return "720p";
    }
    if (_0x237b94 >= 480) {
      return "480p";
    }
    if (_0x237b94 >= 360) {
      return "360p";
    }
    return "240p";
  }
  return "Unknown";
}
function formatFileSize(_0x2b97f4) {
  if (!_0x2b97f4) {
    return "Unknown";
  }
  if (typeof _0x2b97f4 === "string" && (_0x2b97f4.includes("GB") || _0x2b97f4.includes("MB") || _0x2b97f4.includes("KB"))) {
    return _0x2b97f4;
  }
  if (typeof _0x2b97f4 === "number") {
    const _0x106ffc = _0x2b97f4 / 1073741824;
    if (_0x106ffc >= 1) {
      return _0x106ffc.toFixed(2) + " GB";
    }
    const _0x2b1de7 = _0x2b97f4 / 1048576;
    return _0x2b1de7.toFixed(2) + " MB";
  }
  return _0x2b97f4;
}
function getTMDBDetails(_0x1b34c2, _0x437155) {
  return __async(this, null, function* () {
    const _0x37fed2 = _0x437155 === "tv" ? "tv" : "movie";
    const _0x20f3bc = TMDB_BASE_URL + "/" + _0x37fed2 + "/" + _0x1b34c2 + "?api_key=" + TMDB_API_KEY;
    try {
      const _0xfc36b8 = yield fetch(_0x20f3bc);
      if (!_0xfc36b8.ok) {
        throw new Error("HTTP " + _0xfc36b8.status);
      }
      const _0xcb740d = yield _0xfc36b8.json();
      const _0x3f1981 = _0x437155 === "tv" ? _0xcb740d.name : _0xcb740d.title;
      const _0x11bada = _0x437155 === "tv" ? _0xcb740d.first_air_date : _0xcb740d.release_date;
      const _0x9ec54f = _0x11bada ? parseInt(_0x11bada.split("-")[0]) : null;
      return {
        title: _0x3f1981,
        year: _0x9ec54f
      };
    } catch (_0x534159) {
      console.log("[ShowBox] TMDB details query failed: " + _0x534159.message);
      return {
        title: "TMDB ID " + _0x1b34c2,
        year: null
      };
    }
  });
}
function extractFebBoxShare(_0x1bb45b, _0x29bb6a, _0x11e91c, _0x419b1e, _0x1231e0) {
  return __async(this, null, function* () {
    const _0x2fe72a = [];
    try {
      const _0x3ffe45 = _0x29bb6a === "tv" ? 2 : 1;
      const _0x30a0f1 = "https://www.febbox.com/mbp/to_share_page?box_type=" + _0x3ffe45 + "&mid=" + _0x1bb45b + "&json=1";
      console.log("[ShowBox] Requesting FebBox share link: " + _0x30a0f1);
      const _0x2103d6 = yield fetch(_0x30a0f1).then(_0x36d810 => _0x36d810.json());
      if (!_0x2103d6 || _0x2103d6.code !== 1 || !_0x2103d6.data) {
        console.log("[ShowBox] FebBox share link not found for ShowBox ID: " + _0x1bb45b);
        return [];
      }
      const _0x430806 = _0x2103d6.data.share_link || _0x2103d6.data.shareLink;
      if (!_0x430806) {
        return [];
      }
      const _0x4a5c5b = _0x430806.split("/").pop();
      console.log("[ShowBox] Resolved FebBox Share Key: " + _0x4a5c5b);
      const _0x1f2d49 = "https://www.febbox.com/file/file_share_list?share_key=" + _0x4a5c5b;
      const _0x490a85 = yield fetch(_0x1f2d49, {
        headers: {
          "Accept-Language": "en"
        }
      }).then(_0x57cb53 => _0x57cb53.json());
      if (!_0x490a85 || _0x490a85.code !== 1 || !_0x490a85.data || !_0x490a85.data.file_list) {
        console.log("[ShowBox] Failed to list files for Share Key: " + _0x4a5c5b);
        return [];
      }
      let _0x1199d4 = [];
      if (_0x29bb6a === "movie") {
        _0x1199d4 = _0x490a85.data.file_list;
      } else {
        const _0x26efe8 = "season " + _0x11e91c;
        const _0x1555a4 = _0x490a85.data.file_list.find(_0x25b898 => _0x25b898.file_name && _0x25b898.file_name.toLowerCase() === _0x26efe8);
        if (!_0x1555a4) {
          console.log("[ShowBox] Season folder not found: " + _0x26efe8);
          return [];
        }
        const _0x421b41 = "https://www.febbox.com/file/file_share_list?share_key=" + _0x4a5c5b + "&parent_id=" + _0x1555a4.fid + "&page=1";
        const _0x175040 = yield fetch(_0x421b41, {
          headers: {
            "Accept-Language": "en"
          }
        }).then(_0x2f0841 => _0x2f0841.json());
        if (!_0x175040 || _0x175040.code !== 1 || !_0x175040.data || !_0x175040.data.file_list) {
          console.log("[ShowBox] Failed to list episodes under season folder");
          return [];
        }
        const _0x302401 = String(_0x11e91c).padStart(2, "0");
        const _0x1cac41 = String(_0x419b1e).padStart(2, "0");
        _0x1199d4 = _0x175040.data.file_list.filter(_0x3e4dfd => _0x3e4dfd.file_name && (_0x3e4dfd.file_name.toLowerCase().includes("s" + _0x302401 + "e" + _0x1cac41) || _0x3e4dfd.file_name.toLowerCase().includes("s" + _0x11e91c + "e" + _0x419b1e)));
      }
      console.log("[ShowBox] Found " + _0x1199d4.length + " matching file(s) in FebBox share");
      const _0x3d07fa = {
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.8",
        Connection: "keep-alive",
        Range: "bytes=0-",
        Referer: "https://www.febbox.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      };
      const _0x334429 = _0x1231e0.startsWith("ui=") ? _0x1231e0 : "ui=" + _0x1231e0;
      for (const _0x54a366 of _0x1199d4) {
        const _0x24d131 = "https://www.febbox.com/console/video_quality_list?fid=" + _0x54a366.fid + "&share_key=" + _0x4a5c5b;
        console.log("[ShowBox] Fetching video qualities for file: " + _0x54a366.file_name);
        const _0x272401 = yield fetch(_0x24d131, {
          headers: {
            Cookie: _0x334429
          }
        }).then(_0x42df91 => _0x42df91.json()).catch(() => null);
        if (!_0x272401 || !_0x272401.html) {
          console.log("[ShowBox] Failed to fetch qualities (is your FebBox UI Token cookie expired?)");
          continue;
        }
        const _0x335ddf = cheerio.load(_0x272401.html);
        _0x335ddf("div.file_quality").each((_0x1e3e3c, _0x31667b) => {
          const _0xb39724 = _0x335ddf(_0x31667b);
          const _0x584ed0 = _0xb39724.attr("data-url");
          const _0x1073eb = _0xb39724.attr("data-quality");
          const _0x4f5185 = _0xb39724.find(".size").text().trim();
          if (_0x584ed0) {
            const _0x3535e6 = getQualityFromName(_0x1073eb);
            _0x2fe72a.push({
              name: "ShowBox FebBox [" + _0x3535e6 + "]",
              title: _0x54a366.file_name,
              url: _0x584ed0,
              quality: _0x3535e6,
              size: _0x4f5185 || _0x54a366.file_size || "Unknown",
              headers: _0x3d07fa,
              provider: "showbox"
            });
            console.log("[ShowBox] Extracted in-built FebBox stream: " + _0x3535e6 + " (" + _0x4f5185 + ")");
          }
        });
      }
    } catch (_0x18f3d6) {
      console.error("[ShowBox] In-built share extraction error: " + _0x18f3d6.message);
    }
    return _0x2fe72a;
  });
}
function processShowBoxResponse(_0x2737db, _0xf77b2a, _0x7fe100, _0x396a59, _0x4bf301) {
  const _0x37ec08 = [];
  try {
    if (!_0x2737db || !_0x2737db.success) {
      return _0x37ec08;
    }
    if (!_0x2737db.versions || !Array.isArray(_0x2737db.versions) || _0x2737db.versions.length === 0) {
      return _0x37ec08;
    }
    let _0x954ca = _0xf77b2a.title || "Unknown Title";
    if (_0xf77b2a.year) {
      _0x954ca += " (" + _0xf77b2a.year + ")";
    }
    if (_0x7fe100 === "tv" && _0x396a59 && _0x4bf301) {
      _0x954ca = (_0xf77b2a.title || "Unknown") + " S" + String(_0x396a59).padStart(2, "0") + "E" + String(_0x4bf301).padStart(2, "0");
      if (_0xf77b2a.year) {
        _0x954ca += " (" + _0xf77b2a.year + ")";
      }
    }
    _0x2737db.versions.forEach(function (_0xb3469e, _0x1c4350) {
      const _0x1f0327 = _0xb3469e.name || "Version " + (_0x1c4350 + 1);
      const _0x4f983d = _0xb3469e.size || "Unknown";
      if (_0xb3469e.links && Array.isArray(_0xb3469e.links)) {
        _0xb3469e.links.forEach(function (_0x4066b3) {
          if (!_0x4066b3.url) {
            return;
          }
          const _0x3b6245 = getQualityFromName(_0x4066b3.quality || "Unknown");
          const _0x2cd095 = _0x4066b3.size || _0x4f983d;
          let _0x120255 = "ShowBox";
          if (_0x2737db.versions.length > 1) {
            _0x120255 += " V" + (_0x1c4350 + 1);
          }
          _0x120255 += " " + _0x3b6245;
          _0x37ec08.push({
            name: _0x120255,
            title: _0x954ca,
            url: _0x4066b3.url,
            quality: _0x3b6245,
            size: formatFileSize(_0x2cd095),
            provider: "showbox",
            speed: _0x4066b3.speed || null
          });
        });
      }
    });
  } catch (_0x3172f9) {
    console.error("[ShowBox] Error processing response: " + _0x3172f9.message);
  }
  return _0x37ec08;
}
function getStreams(_0x593761, _0xe7f63b = "movie", _0x1eac93 = null, _0x24ac69 = null) {
  return __async(this, null, function* () {
    console.log("[ShowBox] Fetching streams for TMDB ID: " + _0x593761 + ", Type: " + _0xe7f63b);
    const _0x34ce07 = getUiToken();
    const _0x2ee2b7 = getOssGroup();
    const _0xb78d62 = getApiBase();
    if (!_0x34ce07) {
      console.error("[ShowBox] No UI token (cookie) found in settings. Go to Scraper Settings to configure.");
      return [];
    }
    try {
      const _0x5847b2 = yield getTMDBDetails(_0x593761, _0xe7f63b);
      let _0x932823;
      if (_0xe7f63b === "tv" && _0x1eac93 && _0x24ac69) {
        if (_0x2ee2b7) {
          _0x932823 = _0xb78d62 + "/tv/" + _0x593761 + "/oss=" + _0x2ee2b7 + "/" + _0x1eac93 + "/" + _0x24ac69 + "?cookie=" + encodeURIComponent(_0x34ce07);
        } else {
          _0x932823 = _0xb78d62 + "/tv/" + _0x593761 + "/" + _0x1eac93 + "/" + _0x24ac69 + "?cookie=" + encodeURIComponent(_0x34ce07);
        }
      } else {
        _0x932823 = _0xb78d62 + "/movie/" + _0x593761 + "?cookie=" + encodeURIComponent(_0x34ce07);
      }
      console.log("[ShowBox] Querying proxy API: " + _0x932823);
      let _0x5c77b6 = null;
      let _0x4bf2c2 = [];
      try {
        const _0x383d2d = yield fetch(_0x932823, {
          headers: WORKING_HEADERS
        });
        if (_0x383d2d.ok) {
          const _0xc75806 = yield _0x383d2d.json();
          _0x4bf2c2 = processShowBoxResponse(_0xc75806, _0x5847b2, _0xe7f63b, _0x1eac93, _0x24ac69);
          if (_0xc75806.id || _0xc75806.mid) {
            _0x5c77b6 = _0xc75806.id || _0xc75806.mid;
          } else if (_0xc75806.data && (_0xc75806.data.id || _0xc75806.data.mid)) {
            _0x5c77b6 = _0xc75806.data.id || _0xc75806.data.mid;
          }
        }
      } catch (_0x3e595f) {
        console.log("[ShowBox] Proxy server lookup failed/offline: " + _0x3e595f.message);
      }
      if (_0x5c77b6) {
        console.log("[ShowBox] Resolving direct streams using in-built FebBox share extractor for ShowBox ID: " + _0x5c77b6);
        const _0x235cb0 = yield extractFebBoxShare(_0x5c77b6, _0xe7f63b, _0x1eac93, _0x24ac69, _0x34ce07);
        if (_0x235cb0.length > 0) {
          _0x4bf2c2 = _0x4bf2c2.concat(_0x235cb0);
        }
      }
      if (_0x4bf2c2.length === 0) {
        console.log("[ShowBox] No streams found.");
        return [];
      }
      _0x4bf2c2.sort(function (_0x26ebad, _0xcdd990) {
        const _0xa522f6 = {
          Original: 6,
          "4K": 5,
          "1440p": 4,
          "1080p": 3,
          "720p": 2,
          "480p": 1,
          "360p": 0,
          "240p": -1,
          Unknown: -2
        };
        return (_0xa522f6[_0xcdd990.quality] || -2) - (_0xa522f6[_0x26ebad.quality] || -2);
      });
      return _0x4bf2c2;
    } catch (_0x3b1c19) {
      console.error("[ShowBox] Scraper execution failure: " + _0x3b1c19.message);
      return [];
    }
  });
}
function onSettings() {
  return __async(this, null, function* () {
    return [{
      type: "header",
      label: "ShowBox Configuration"
    }, {
      type: "text",
      isPassword: true,
      key: "uiToken",
      label: "FebBox UI Token (Cookie)",
      placeholder: "ui=...",
      description: "Go to febbox.com, login, and copy your 'ui' cookie value from your browser."
    }, {
      type: "text",
      key: "ossGroup",
      label: "FebBox OSS Group (Optional)",
      placeholder: "",
      description: "Optional OSS group parameter."
    }];
  });
}
module.exports = {
  getStreams: getStreams,
  onSettings: onSettings
};