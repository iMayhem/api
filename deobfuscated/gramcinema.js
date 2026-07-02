function getToken() {
  return new Promise(function (_0x2abbc7) {
    try {
      if (typeof global !== "undefined" && global.SCRAPER_SETTINGS && global.SCRAPER_SETTINGS.cinemaTvToken) {
        console.log("[CinemaTV] Using token from global.SCRAPER_SETTINGS");
        return _0x2abbc7(String(global.SCRAPER_SETTINGS.cinemaTvToken).trim());
      }
      if (typeof window !== "undefined" && window.SCRAPER_SETTINGS && window.SCRAPER_SETTINGS.cinemaTvToken) {
        console.log("[CinemaTV] Using token from window.SCRAPER_SETTINGS");
        return _0x2abbc7(String(window.SCRAPER_SETTINGS.cinemaTvToken).trim());
      }
    } catch (_0x4b7d49) {
      console.error("[CinemaTV] Error checking settings panel:", _0x4b7d49.message);
    }
    console.error("[CinemaTV] No token found in settings! Please configure GramCinema settings.");
    _0x2abbc7("");
  });
}
function formatBytes(_0x3042d4) {
  if (!_0x3042d4 || _0x3042d4 == 0) {
    return "Unknown";
  }
  var _0x13949c = 1024;
  var _0x54d5f7 = ["Bytes", "KB", "MB", "GB", "TB"];
  var _0x3ae674 = Math.floor(Math.log(_0x3042d4) / Math.log(_0x13949c));
  return parseFloat((_0x3042d4 / Math.pow(_0x13949c, _0x3ae674)).toFixed(2)) + " " + _0x54d5f7[_0x3ae674];
}
function fetchJson(_0x1aa0f4, _0x3e7692) {
  console.log("[CinemaTV] Fetching: " + _0x1aa0f4);
  return fetch(_0x1aa0f4, _0x3e7692 || {}).then(function (_0x1d8111) {
    if (!_0x1d8111.ok) {
      throw new Error("HTTP " + _0x1d8111.status);
    }
    return _0x1d8111.json();
  }).catch(function (_0x47bbc0) {
    console.error("[CinemaTV] Fetch Failed: " + _0x47bbc0.message);
    throw _0x47bbc0;
  });
}
function makeStream(_0x34124b, _0x57f14b, _0x4c8df1, _0x4cdc1a) {
  var _0x27b0fb = "";
  try {
    _0x27b0fb = decodeURIComponent(_0x57f14b) + " " + _0x34124b;
  } catch (_0x3183f7) {
    _0x27b0fb = _0x57f14b + " " + _0x34124b;
  }
  var _0x378a0c = _0x27b0fb.toLowerCase();
  var _0x7a7df6 = /[\s\.\-\+\[\]_\(\)\|]+/g;
  var _0x308a7d = _0x378a0c.replace(_0x7a7df6, "");
  var _0x3dd72a = "1080P";
  if (/2160p|4k|uhd/i.test(_0x378a0c)) {
    _0x3dd72a = "2160P";
  } else if (/1080p/i.test(_0x378a0c)) {
    _0x3dd72a = "1080P";
  } else if (/720p/i.test(_0x378a0c)) {
    _0x3dd72a = "720P";
  } else if (/480p/i.test(_0x378a0c)) {
    _0x3dd72a = "480P";
  }
  var _0x528b99 = "Dual-Audio";
  var _0x4ca506 = /hindi/i.test(_0x378a0c);
  var _0xbb4795 = /(english|eng)/i.test(_0x378a0c);
  var _0x35ebd9 = /tamil/i.test(_0x378a0c);
  var _0x4034d6 = /telugu/i.test(_0x378a0c);
  var _0xdb86ad = 0;
  if (_0x4ca506) {
    _0xdb86ad++;
  }
  if (_0xbb4795) {
    _0xdb86ad++;
  }
  if (_0x35ebd9) {
    _0xdb86ad++;
  }
  if (_0x4034d6) {
    _0xdb86ad++;
  }
  if (/(multi|multi\-audio|multi\.audio)/i.test(_0x378a0c) || _0xdb86ad >= 3) {
    _0x528b99 = "Multi-Audio";
  } else if (/(dual|dual\-audio|dual\.audio|dubbed)/i.test(_0x378a0c) || _0xdb86ad === 2) {
    _0x528b99 = "Dual-Audio";
  } else if (_0xdb86ad === 1) {
    if (_0x4ca506) {
      _0x528b99 = "Hindi";
    } else if (_0x35ebd9) {
      _0x528b99 = "Tamil";
    } else if (_0x4034d6) {
      _0x528b99 = "Telugu";
    } else if (_0xbb4795) {
      _0x528b99 = "English";
    }
  }
  var _0x170071 = _0x34124b.replace(/\.(mkv|mp4|avi)$/i, "").replace(/\./g, " ");
  var _0x31079d = "";
  var _0x56ddc6 = _0x170071.match(/\b(S\d{1,2}\s*E\d{1,2})\b/i);
  if (_0x56ddc6) {
    _0x31079d = " | " + _0x56ddc6[1].toUpperCase().replace(/\s+/g, "");
    var _0x285c14 = _0x170071.toLowerCase().indexOf(_0x56ddc6[0].toLowerCase());
    if (_0x285c14 > 0) {
      _0x170071 = _0x170071.substring(0, _0x285c14);
    }
  }
  var _0x1b557b = "";
  var _0x4e4e43 = _0x170071.match(/\b(19|20)\d{2}\b/);
  if (_0x4e4e43) {
    _0x1b557b = _0x4e4e43[0];
    var _0xe93330 = _0x170071.indexOf(_0x1b557b);
    if (_0xe93330 > 0) {
      _0x170071 = _0x170071.substring(0, _0xe93330);
    }
  }
  _0x170071 = _0x170071.replace(/AMZN|WEB\-DL|WEB|DL|AVC|x264|x265|HEVC|STAN|WEBRip|SDR|10bit|iTunes|HQ|HDRip|BluRay|6CH|Dual|Audio|Hindi|English|Tamil|Telugu|720p|1080p|2160p|4k/gi, "").replace(/[-_()\[\]|]/g, " ").replace(/\s+/g, " ").trim();
  _0x170071 = _0x170071.replace(/\b\w/g, function (_0x2d6e4d) {
    return _0x2d6e4d.toUpperCase();
  });
  var _0x5c4d42 = _0x3dd72a === "2160P" ? "🌟" : "💎";
  var _0x4d7682 = _0x5c4d42 + " " + _0x3dd72a + " | 🌍 " + _0x528b99 + " | 💾 " + (_0x4cdc1a || "N/A");
  var _0x329b68 = "";
  var _0x56a9ad = false;
  if (/hdr10\+|hdr10p/i.test(_0x378a0c)) {
    _0x329b68 = "HDR10+";
    _0x56a9ad = true;
  } else if (/hdr10/i.test(_0x378a0c)) {
    _0x329b68 = "HDR10";
    _0x56a9ad = true;
  } else if (/hdr(?!ip)/i.test(_0x378a0c)) {
    _0x329b68 = "HDR";
    _0x56a9ad = true;
  }
  var _0x3eaeb9 = /10bit/i.test(_0x378a0c) ? "🔆 10Bit" : "";
  var _0x545fb3 = /(dv|dolby\s*vision|dolbyvision)/i.test(_0x378a0c) ? "🕵️‍♀️ DV" : "";
  var _0x51a343 = /bluray/i.test(_0x378a0c);
  var _0x40f45b = "x264";
  if (/(hevc|x265|265|h265)/i.test(_0x378a0c)) {
    _0x40f45b = "HEVC x265";
  } else if (/(x264|264|h264)/i.test(_0x378a0c)) {
    _0x40f45b = "x264";
  } else if (_0x3dd72a === "2160P") {
    _0x40f45b = "HEVC x265";
  }
  var _0x236a43 = [];
  if (_0x329b68) {
    _0x236a43.push(_0x329b68);
  }
  if (_0x3eaeb9) {
    _0x236a43.push(_0x3eaeb9);
  }
  if (_0x51a343) {
    _0x236a43.push("📀 BluRay");
  }
  if (_0x545fb3) {
    _0x236a43.push(_0x545fb3);
  }
  var _0x362c42 = "";
  if (_0x236a43.length > 0) {
    var _0x96895 = _0x56a9ad ? "⚡ " : "";
    _0x362c42 = _0x96895 + _0x236a43.join(" • ") + " | 🎥 " + _0x40f45b;
  } else {
    _0x362c42 = "🎥 " + _0x40f45b;
  }
  var _0x2d9bd4 = "🎞️ MKV";
  if (/\bmp4\b/i.test(_0x378a0c)) {
    _0x2d9bd4 = "🎞️ MP4";
  }
  var _0x3641e3 = "AAC 5.1";
  var _0x3ed155 = /atmos/i.test(_0x378a0c);
  if (_0x308a7d.indexOf("ddp51") !== -1 || _0x308a7d.indexOf("eac351") !== -1 || _0x308a7d.indexOf("dd51") !== -1) {
    _0x3641e3 = "DDP 5.1";
  } else if (_0x308a7d.indexOf("truehd71") !== -1) {
    _0x3641e3 = "TrueHD 7.1";
  } else if (_0x308a7d.indexOf("aac71") !== -1) {
    _0x3641e3 = "AAC 7.1";
  } else if (_0x308a7d.indexOf("aac20") !== -1 || _0x308a7d.indexOf("aac") !== -1) {
    _0x3641e3 = /aac\s*5\.1/i.test(_0x378a0c) ? "AAC 5.1" : "AAC 2.0";
  }
  if (/ddp\s*5\s*1/i.test(_0x378a0c) || /ddp5\.1/i.test(_0x378a0c)) {
    _0x3641e3 = "DDP 5.1";
  }
  var _0xf1a207 = _0x3ed155 ? " • 🔊 Atmos" : "";
  var _0xc3d31c = _0x2d9bd4 + " | 🎧 " + _0x3641e3 + _0xf1a207 + " |";
  var _0xaf9143 = "WEB-DL";
  if (_0x51a343) {
    _0xaf9143 = "BluRay";
  } else if (/hdrip/i.test(_0x378a0c)) {
    _0xaf9143 = "HDRip";
  } else if (/webrip/i.test(_0x378a0c)) {
    _0xaf9143 = "WEB-Rip";
  } else if (/(webdl|web\-dl|itunes|amzn)/i.test(_0x378a0c)) {
    _0xaf9143 = "WEB-DL";
  }
  var _0x12c433 = "CDN1";
  var _0x3bf275 = _0x57f14b.match(/cdn(\d+)/i);
  if (_0x3bf275) {
    _0x12c433 = "CDN" + _0x3bf275[1];
  } else if (_0x57f14b.indexOf("tga-hd") !== -1) {
    _0x12c433 = "TGA-CDN";
  }
  var _0x42a396 = /imax/i.test(_0x378a0c) ? " | 👁️ iMAX" : "";
  var _0x3ad39f = "🔗 GramCinema • " + _0x12c433 + " | ☁️ " + _0xaf9143 + _0x42a396;
  var _0x644a15 = "GramCinema | " + _0x3dd72a + " | " + _0x528b99;
  var _0x176aa3 = "🎬 " + _0x170071 + (_0x1b557b ? " - (" + _0x1b557b + ")" : "") + _0x31079d + "\n" + _0x4d7682 + "\n" + _0x362c42 + "\n" + _0xc3d31c + "\n" + _0x3ad39f;
  return {
    name: _0x644a15,
    title: _0x176aa3,
    size: _0x176aa3,
    url: _0x57f14b.replace(/ /g, "%20"),
    behaviorHints: {
      notWebReady: true,
      proxyHeaders: {
        request: {
          Referer: _0x4c8df1 || "https://bollywood.eu.org/"
        }
      }
    }
  };
}
function getStreams(_0x238989, _0x2242d2, _0x251aec, _0x1ed877) {
  console.log("[Hashhackers] getStreams: " + _0x238989 + " | Type: " + _0x2242d2);
  if (_0x2242d2 !== "movie" && _0x2242d2 !== "tv" && _0x2242d2 !== "series") {
    return Promise.resolve([]);
  }
  return getToken().then(function (_0x49c4c6) {
    if (!_0x49c4c6) {
      console.error("[CinemaTV] No token available, aborting getStreams");
      return [];
    }
    var _0x4af95b = _0x2242d2 === "tv" || _0x2242d2 === "series";
    var _0x5def22 = String(_0x238989).indexOf("tt") === 0;
    var _0x3aae38 = _0x5def22 ? "https://api.themoviedb.org/3/find/" + _0x238989 + "?api_key=d131017ccc6e5462a81c9304d21476de&external_source=imdb_id&language=en-US" : "https://api.themoviedb.org/3/" + (_0x4af95b ? "tv" : "movie") + "/" + _0x238989 + "?api_key=d131017ccc6e5462a81c9304d21476de&language=en-US";
    return fetchJson(_0x3aae38).then(function (_0x43dba6) {
      var _0x2d04fa;
      if (_0x5def22) {
        _0x2d04fa = _0x4af95b ? _0x43dba6.tv_results && _0x43dba6.tv_results[0] : _0x43dba6.movie_results && _0x43dba6.movie_results[0];
      } else {
        _0x2d04fa = _0x43dba6;
      }
      if (!_0x2d04fa) {
        return [];
      }
      var _0x21dfd6 = _0x4af95b ? _0x2d04fa.name : _0x2d04fa.title;
      var _0x29355f = _0x4af95b ? _0x2d04fa.first_air_date : _0x2d04fa.release_date;
      var _0x392c10 = _0x29355f ? _0x29355f.split("-")[0] : "";
      var _0x342cb4 = _0x21dfd6 + " " + _0x392c10;
      if (_0x4af95b && _0x251aec !== undefined && _0x1ed877 !== undefined) {
        var _0x26c796 = _0x251aec < 10 ? "0" + _0x251aec : "" + _0x251aec;
        var _0x2746bf = _0x1ed877 < 10 ? "0" + _0x1ed877 : "" + _0x1ed877;
        _0x342cb4 += " S" + _0x26c796 + "E" + _0x2746bf;
      }
      var _0x2e80ad = encodeURIComponent(_0x342cb4.trim());
      var _0x24f8fa = {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0.1 Mobile/15E148 Safari/604.1",
        Accept: "*/*",
        Authorization: "Bearer " + _0x49c4c6,
        Origin: "https://bollywood.eu.org",
        Referer: "https://bollywood.eu.org/"
      };
      var _0x456e3b = "https://tga-hd.api.hashhackers.com/mix_media_files/search?q=" + _0x2e80ad + "&page=1";
      return fetchJson(_0x456e3b, {
        headers: _0x24f8fa
      }).then(function (_0x1dda15) {
        var _0x38af0a = _0x1dda15.files || [];
        var _0x58562e = _0x38af0a.filter(function (_0x17a79e) {
          var _0x3ef857 = _0x17a79e.file_name.toLowerCase().trim();
          return /\.(mkv|mp4)$/.test(_0x3ef857);
        });
        if (_0x58562e.length === 0) {
          return [];
        }
        var _0x4a9dda = _0x58562e.slice(0, 6);
        var _0x2bcd51 = _0x4a9dda.map(function (_0x2f4bf1) {
          return fetchJson("https://tga-hd.api.hashhackers.com/genLink?type=mix_media&id=" + _0x2f4bf1.id, {
            headers: _0x24f8fa
          }).then(function (_0x168f49) {
            if (_0x168f49.success && _0x168f49.url) {
              var _0x4518d4 = formatBytes(parseInt(_0x2f4bf1.file_size));
              return makeStream(_0x2f4bf1.file_name, _0x168f49.url, "https://bollywood.eu.org/", _0x4518d4);
            }
            return null;
          }).catch(function () {
            return null;
          });
        });
        return Promise.all(_0x2bcd51).then(function (_0x206faa) {
          var _0x12d18d = _0x206faa.filter(function (_0x4f9c86) {
            return _0x4f9c86 !== null;
          });
          _0x12d18d.forEach(function (_0x1d68ed) {
            var _0x51cd84 = (_0x1d68ed.title || "").toLowerCase();
            if (_0x51cd84.indexOf("2160p") !== -1 || _0x51cd84.indexOf("4k") !== -1) {
              _0x1d68ed._resWeight = 4;
            } else if (_0x51cd84.indexOf("1080p") !== -1) {
              _0x1d68ed._resWeight = 3;
            } else if (_0x51cd84.indexOf("720p") !== -1) {
              _0x1d68ed._resWeight = 2;
            } else {
              _0x1d68ed._resWeight = 1;
            }
          });
          _0x12d18d.sort(function (_0x43e32a, _0x32b70a) {
            return _0x32b70a._resWeight - _0x43e32a._resWeight;
          });
          _0x12d18d.forEach(function (_0x8e9bb2) {
            delete _0x8e9bb2._resWeight;
          });
          return _0x12d18d;
        });
      });
    }).catch(function (_0x141460) {
      console.error("[CinemaTV] Error: " + _0x141460.message);
      return [];
    });
  });
}
function onSettings() {
  return Promise.resolve([{
    type: "header",
    label: "GramCinema Configuration"
  }, {
    type: "text",
    isPassword: true,
    key: "cinemaTvToken",
    label: "CinemaTV Token",
    placeholder: "Enter token here...",
    description: "Provide the authorization token required to access CinemaTV links."
  }]);
}
module.exports = {
  getStreams: getStreams,
  onSettings: onSettings
};