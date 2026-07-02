var TMDB_API_KEY = "68e094699525b18a70bab2f86b1fa706";
function normalizeCodecLabel(_0x12b1c9) {
  switch ((_0x12b1c9 || "").trim().toLowerCase()) {
    case "h264":
    case "avc":
    case "mpeg-4 avc":
    case "mpeg4-avc":
      return "H264";
    case "h265":
    case "hevc":
    case "x265":
      return "H265";
    case "av1":
      return "AV1";
    case "vp9":
      return "VP9";
    default:
      return (_0x12b1c9 || "").trim().toUpperCase();
  }
}
function detectQuality(_0x1588ff) {
  var _0x4a855a = Array.isArray(_0x1588ff) ? _0x1588ff : [_0x1588ff];
  for (var _0x457189 = 0; _0x457189 < _0x4a855a.length; _0x457189++) {
    var _0x59214a = String(_0x4a855a[_0x457189] || "").toLowerCase();
    if (!_0x59214a) {
      continue;
    }
    if (/\b2160p\b/.test(_0x59214a) || /\b4k\b/.test(_0x59214a) || /\buhd\b/.test(_0x59214a)) {
      return "2160p";
    }
    if (/\b1080p\b/.test(_0x59214a)) {
      return "1080p";
    }
    if (/\b720p\b/.test(_0x59214a)) {
      return "720p";
    }
    if (/\b480p\b/.test(_0x59214a)) {
      return "480p";
    }
    if (/\b360p\b/.test(_0x59214a)) {
      return "360p";
    }
  }
  return "1080p";
}
function extractFilename(_0x2d8f5a) {
  var _0x42024d = [_0x2d8f5a.filename, _0x2d8f5a.file, _0x2d8f5a.name, _0x2d8f5a.label, _0x2d8f5a.title];
  for (var _0x5afd03 = 0; _0x5afd03 < _0x42024d.length; _0x5afd03++) {
    var _0x5394d6 = (_0x42024d[_0x5afd03] || "").trim();
    if (_0x5394d6 && /\.(mkv|mp4|avi|m4v|mov)$/i.test(_0x5394d6)) {
      return _0x5394d6;
    }
  }
  if (_0x2d8f5a.url) {
    try {
      var _0x3f2598 = _0x2d8f5a.url.split("?")[0].split("#")[0];
      var _0x1c2b99 = _0x3f2598.split("/");
      var _0x20de09 = decodeURIComponent(_0x1c2b99[_0x1c2b99.length - 1] || "");
      if (_0x20de09 && /\.(mkv|mp4|avi|m4v|mov)$/i.test(_0x20de09)) {
        return _0x20de09;
      }
    } catch (_0x895d40) {}
  }
  var _0x2706ab = [];
  if ((_0x2d8f5a.quality || "").trim()) {
    _0x2706ab.push(_0x2d8f5a.quality.trim());
  }
  var _0x5bdde7 = (_0x2d8f5a.release || _0x2d8f5a.source || "").trim();
  if (_0x5bdde7) {
    _0x2706ab.push(_0x5bdde7);
  }
  if ((_0x2d8f5a.encode || "").trim()) {
    _0x2706ab.push(_0x2d8f5a.encode.trim());
  }
  if ((_0x2d8f5a.format || "").trim()) {
    _0x2706ab.push(_0x2d8f5a.format.trim());
  }
  if ((_0x2d8f5a.codec || "").trim()) {
    _0x2706ab.push(normalizeCodecLabel(_0x2d8f5a.codec));
  }
  if ((_0x2d8f5a.label || "").trim()) {
    _0x2706ab.push(_0x2d8f5a.label.trim());
  }
  var _0x4f289e = _0x2706ab.join(".");
  if (_0x4f289e) {
    return _0x4f289e + ".mkv";
  }
  return "stream.mkv";
}
function extractDownloadFilename(_0x3c9343, _0x8e59aa) {
  var _0x4af108 = (_0x3c9343.title || "").trim();
  if (/\.(mkv|mp4|avi|m4v|mov)$/i.test(_0x4af108)) {
    return _0x4af108;
  }
  if (_0x4af108) {
    var _0x4841e5 = _0x4af108.replace(/\s+/g, ".").replace(/\.{2,}/g, ".");
    if (!/\.(mkv|mp4)$/i.test(_0x4841e5)) {
      _0x4841e5 = _0x4841e5 + ".mkv";
    }
    return _0x4841e5;
  }
  var _0x27f1fc = (_0x8e59aa.name || "").trim().replace(/\s+\d+$/, "").trim();
  return (_0x27f1fc || "stream") + ".mkv";
}
function extractSourceName(_0x1eb3f1) {
  var _0x3b8970 = (_0x1eb3f1.source || _0x1eb3f1.release || "").trim();
  if (_0x3b8970) {
    return _0x3b8970;
  }
  if (_0x1eb3f1.url) {
    try {
      var _0x32a364 = new URL(_0x1eb3f1.url).hostname.replace(/^www\./, "");
      var _0x35ae24 = _0x32a364.split(".")[0];
      return _0x35ae24.charAt(0).toUpperCase() + _0x35ae24.slice(1);
    } catch (_0x27880e) {}
  }
  return "Direct";
}
function parseFileInfo(_0x3856a5) {
  var _0x70369a = String(_0x3856a5 || "").toUpperCase();
  var _0x91709c = "Unknown Source";
  if (/\bBLURAY\b|\bBLU-RAY\b|\bBDREMUX\b/i.test(_0x70369a)) {
    _0x91709c = "BluRay";
  } else if (/\bWEB-DL\b|\bWEBDL\b|\bWEB\b/i.test(_0x70369a)) {
    _0x91709c = "WEB-DL";
  } else if (/\bHDTV\b/i.test(_0x70369a)) {
    _0x91709c = "HDTV";
  } else if (/\bCAM\b|\bCAMRIP\b/i.test(_0x70369a)) {
    _0x91709c = "CAM";
  }
  var _0x170d7b = "Unknown Video";
  if (/\bH\.?265\b|\bX265\b|\bHEVC\b/i.test(_0x70369a)) {
    _0x170d7b = "H265";
    if (/\bDV\b|\bDOLBY\s*VISION\b/i.test(_0x70369a)) {
      _0x170d7b += " DV";
    }
    if (/\bHDR10P\b|\bHDR10\+\b/i.test(_0x70369a)) {
      _0x170d7b += " HDR10+";
    } else if (/\bHDR\b|\bHDR10\b/i.test(_0x70369a)) {
      _0x170d7b += " HDR10";
    }
  } else if (/\bH\.?264\b|\bX264\b|\bAVC\b/i.test(_0x70369a)) {
    _0x170d7b = "AVC";
  } else if (/\bAV1\b/i.test(_0x70369a)) {
    _0x170d7b = "AV1";
  }
  var _0x35af7c = "AAC";
  if (/\bTRUEHD\b/i.test(_0x70369a)) {
    _0x35af7c = "TrueHD";
  } else if (/\bATMOS\b/i.test(_0x70369a)) {
    _0x35af7c = "Atmos";
  } else if (/\bDDP\b|\bEAC3\b/i.test(_0x70369a)) {
    _0x35af7c = "DDP";
  } else if (/\bDD\b|\bAC3\b/i.test(_0x70369a)) {
    _0x35af7c = "DD";
  } else if (/\bDTS\b/i.test(_0x70369a)) {
    _0x35af7c = "DTS";
  }
  var _0x1e6ad9 = "";
  if (/\b7\.1\b/.test(_0x70369a)) {
    _0x1e6ad9 = "7.1";
  } else if (/\b5\.1\b/.test(_0x70369a)) {
    _0x1e6ad9 = "5.1";
  } else if (/\b2\.0\b|\bSTEREO\b/.test(_0x70369a)) {
    _0x1e6ad9 = "2.0";
  }
  return {
    source: _0x91709c,
    videoCodec: _0x170d7b,
    audioProfile: _0x35af7c + (_0x1e6ad9 ? " " + _0x1e6ad9 : "")
  };
}
function buildTitle(_0x33578a, _0x44fcfd, _0x1f37cb, _0x497530, _0x7bf8e7, _0x1819ac) {
  var _0x550ba2 = _0x44fcfd.includes("4K") || _0x44fcfd.includes("2160") ? "🌟" : "💎";
  var _0x5aeff6 = parseFileInfo(_0x1819ac);
  var _0x483dc4 = "🎬 " + _0x33578a.name + (_0x33578a.year ? " (" + _0x33578a.year + ")" : "");
  var _0x12f304 = _0x550ba2 + " " + _0x44fcfd + " | 🌍 " + _0x1f37cb + " | 💾 " + (_0x7bf8e7 || "Variable Size");
  var _0x4b30cd = "🎞️ " + _0x497530.toUpperCase() + " | ⏱️ " + _0x33578a.duration + " | 📼 " + _0x5aeff6.videoCodec;
  var _0x5a6626 = "🏷️ " + _0x5aeff6.source + " | 🔊 " + _0x5aeff6.audioProfile;
  return _0x483dc4 + "\n" + _0x12f304 + "\n" + _0x4b30cd + "\n" + _0x5a6626;
}
function getTmdbId(_0xadb999, _0x5dc14c) {
  var _0x43b15d = String(_0x5dc14c).toLowerCase();
  var _0x40ec1e = "https://api.themoviedb.org/3/find/" + _0xadb999 + "?api_key=" + TMDB_API_KEY + "&external_source=imdb_id";
  return fetch(_0x40ec1e).then(function (_0x1af42b) {
    if (_0x1af42b.ok) {
      return _0x1af42b.json();
    } else {
      return null;
    }
  }).then(function (_0xc6d221) {
    if (!_0xc6d221) {
      return null;
    }
    if (_0x43b15d === "movie" && _0xc6d221.movie_results && _0xc6d221.movie_results.length > 0) {
      return _0xc6d221.movie_results[0].id.toString();
    } else if (_0x43b15d === "tv" && _0xc6d221.tv_results && _0xc6d221.tv_results.length > 0) {
      return _0xc6d221.tv_results[0].id.toString();
    }
    return null;
  }).catch(function () {
    return null;
  });
}
function getMetadata(_0x220650, _0x1b2367, _0x4b69d2, _0x468ef6, _0x5f499e) {
  var _0x56dbf2 = "Unknown Title";
  var _0x4b463f = _0x1b2367 === "tv" ? "45 min" : "90 min";
  if (_0x5f499e && typeof _0x5f499e === "object") {
    _0x56dbf2 = _0x5f499e.name || _0x5f499e.title || _0x56dbf2;
    _0x4b463f = _0x5f499e.duration || _0x4b463f;
  }
  var _0x33832e = String(_0x1b2367).toLowerCase();
  var _0x34163b = _0x33832e === "movie" ? "movie" : "tv";
  var _0x34dcc3 = "https://api.themoviedb.org/3/" + _0x34163b + "/" + _0x220650 + "?api_key=" + TMDB_API_KEY;
  return fetch(_0x34dcc3).then(function (_0x32b60f) {
    if (_0x32b60f.ok) {
      return _0x32b60f.json();
    } else {
      return Promise.reject();
    }
  }).then(function (_0x352be5) {
    var _0x3633ce = _0x4b463f;
    var _0x2cb55d = (_0x352be5.release_date || _0x352be5.first_air_date || "").split("-")[0];
    if (_0x33832e === "movie" && _0x352be5.runtime) {
      _0x3633ce = _0x352be5.runtime + " min";
      return {
        name: _0x352be5.title || _0x352be5.name || _0x56dbf2,
        year: _0x2cb55d,
        duration: _0x3633ce
      };
    } else if (_0x33832e === "tv") {
      var _0x456c5a = "https://api.themoviedb.org/3/tv/" + _0x220650 + "/season/" + _0x4b69d2 + "/episode/" + _0x468ef6 + "?api_key=" + TMDB_API_KEY;
      return fetch(_0x456c5a).then(function (_0x50ef96) {
        if (_0x50ef96.ok) {
          return _0x50ef96.json();
        } else {
          return null;
        }
      }).then(function (_0x43cd8f) {
        if (_0x43cd8f && _0x43cd8f.runtime) {
          _0x3633ce = _0x43cd8f.runtime + " min";
        } else if (_0x352be5.episode_run_time && _0x352be5.episode_run_time.length > 0) {
          _0x3633ce = _0x352be5.episode_run_time[0] + " min";
        }
        return {
          name: _0x352be5.name || _0x352be5.title || _0x56dbf2,
          year: _0x2cb55d,
          duration: _0x3633ce
        };
      });
    }
    return {
      name: _0x352be5.title || _0x352be5.name || _0x56dbf2,
      year: _0x2cb55d,
      duration: _0x3633ce
    };
  }).catch(function () {
    return {
      name: _0x56dbf2,
      year: "",
      duration: _0x4b463f
    };
  });
}
function getStreams(_0x2f03b6, _0x3dc9b4, _0x11b9b3, _0x4bff3e, _0x100a02) {
  console.log("[GoatAPI] getStreams → id=" + _0x2f03b6 + " type=" + _0x3dc9b4);
  var _0x577744 = String(_0x3dc9b4).toLowerCase();
  var _0x3f8442 = _0x577744 === "series" ? "tv" : _0x577744;
  if (_0x3f8442 !== "movie") {
    return Promise.resolve([]);
  }
  var _0x3502ad = Promise.resolve(_0x2f03b6.toString().replace("tmdb:", ""));
  if (_0x2f03b6.toString().startsWith("tt")) {
    _0x3502ad = getTmdbId(_0x2f03b6, _0x3f8442).then(function (_0xb688df) {
      return _0xb688df || _0x2f03b6.toString();
    });
  }
  return _0x3502ad.then(function (_0x21a325) {
    return getMetadata(_0x21a325, _0x3f8442, _0x11b9b3, _0x4bff3e, _0x100a02).then(function (_0x24627d) {
      var _0x1141de = "https://goatapi.imreallydagoatt.workers.dev/api/downloader/movie/" + _0x21a325;
      return fetch(_0x1141de).then(function (_0x5e1215) {
        return _0x5e1215.json();
      }).then(function (_0x4115d3) {
        if (!_0x4115d3 || _0x4115d3.success !== true) {
          console.log("[GoatAPI] GoatAPI success=false");
          return [];
        }
        var _0x229af6 = [];
        if (_0x4115d3.streams && _0x4115d3.streams.length > 0) {
          _0x4115d3.streams.forEach(function (_0x58e79d) {
            if (!_0x58e79d.url) {
              return;
            }
            var _0x86877e = extractFilename(_0x58e79d);
            var _0x2863d4 = (_0x58e79d.size || "").trim() || "Variable Size";
            var _0x1c9b1b = extractSourceName(_0x58e79d);
            var _0x23de4c = detectQuality([_0x58e79d.quality, _0x58e79d.label, _0x58e79d.title, _0x58e79d.release, _0x58e79d.source, _0x58e79d.encode, _0x58e79d.format, _0x58e79d.codec, _0x86877e, _0x58e79d.url]);
            var _0x330524 = buildTitle(_0x24627d, _0x23de4c, "English", "MKV", _0x2863d4, _0x86877e);
            _0x229af6.push({
              name: "GoatAPI | " + _0x23de4c + " | " + _0x1c9b1b,
              title: _0x330524,
              quality: _0x23de4c.toLowerCase(),
              url: _0x58e79d.url
            });
          });
        } else if (_0x4115d3.downloads) {
          _0x4115d3.downloads.forEach(function (_0xe87e15) {
            (_0xe87e15.sources || []).forEach(function (_0x90a52) {
              if (!_0x90a52.url) {
                return;
              }
              var _0x592f89 = extractDownloadFilename(_0xe87e15, _0x90a52);
              var _0x503fe3 = (_0xe87e15.size || "").trim() || "Variable Size";
              var _0x5eecf6 = (_0x90a52.name || "").trim().replace(/\s+\d+$/, "").trim() || "Mirror";
              var _0x10e000 = detectQuality([_0xe87e15.title, _0x592f89]);
              var _0x56e080 = buildTitle(_0x24627d, _0x10e000, "English", "MKV", _0x503fe3, _0x592f89);
              _0x229af6.push({
                name: "GoatAPI | " + _0x10e000 + " | " + _0x5eecf6,
                title: _0x56e080,
                quality: _0x10e000.toLowerCase(),
                url: _0x90a52.url
              });
            });
          });
        }
        console.log("[GoatAPI] Returning " + _0x229af6.length + " stream(s)");
        return _0x229af6;
      });
    });
  }).catch(function (_0x596624) {
    console.error("[GoatAPI] Error: " + _0x596624.message);
    return [];
  });
}
module.exports = {
  getStreams: getStreams
};