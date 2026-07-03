var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x4f1306, _0x3eb5cb, _0x3108e6) => _0x3eb5cb in _0x4f1306 ? __defProp(_0x4f1306, _0x3eb5cb, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x3108e6
}) : _0x4f1306[_0x3eb5cb] = _0x3108e6;
var __spreadValues = (_0x29e5c0, _0x52268f) => {
  for (var _0xe84eca in _0x52268f ||= {}) {
    if (__hasOwnProp.call(_0x52268f, _0xe84eca)) {
      __defNormalProp(_0x29e5c0, _0xe84eca, _0x52268f[_0xe84eca]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0xe84eca of __getOwnPropSymbols(_0x52268f)) {
      if (__propIsEnum.call(_0x52268f, _0xe84eca)) {
        __defNormalProp(_0x29e5c0, _0xe84eca, _0x52268f[_0xe84eca]);
      }
    }
  }
  return _0x29e5c0;
};
var __commonJS = (_0x19cdf7, _0x3dcbdc) => function _0x116028() {
  if (!_0x3dcbdc) {
    (0, _0x19cdf7[__getOwnPropNames(_0x19cdf7)[0]])((_0x3dcbdc = {
      exports: {}
    }).exports, _0x3dcbdc);
  }
  return _0x3dcbdc.exports;
};
var __async = (_0x56dc7e, _0x33d679, _0x2fc1ec) => {
  return new Promise((_0x4db45f, _0x177e97) => {
    var _0x1ae0ea = _0x4e452f => {
      try {
        _0x339f75(_0x2fc1ec.next(_0x4e452f));
      } catch (_0x21cc10) {
        _0x177e97(_0x21cc10);
      }
    };
    var _0x4cb858 = _0x210169 => {
      try {
        _0x339f75(_0x2fc1ec.throw(_0x210169));
      } catch (_0x5217f3) {
        _0x177e97(_0x5217f3);
      }
    };
    var _0x339f75 = _0x37451a => _0x37451a.done ? _0x4db45f(_0x37451a.value) : Promise.resolve(_0x37451a.value).then(_0x1ae0ea, _0x4cb858);
    _0x339f75((_0x2fc1ec = _0x2fc1ec.apply(_0x56dc7e, _0x33d679)).next());
  });
};
var require_forge = __commonJS({
  "node_modules/node-forge/lib/forge.js"(_0x23cfba, _0x8f0db) {
    _0x8f0db.exports = {
      options: {
        usePureJavaScript: false
      }
    };
  }
});
var require_baseN = __commonJS({
  "node_modules/node-forge/lib/baseN.js"(_0x1b58a2, _0x261b3c) {
    var _0x462713 = {};
    _0x261b3c.exports = _0x462713;
    var _0x1417ba = {};
    _0x462713.encode = function (_0x194b4b, _0x544436, _0x119014) {
      if (typeof _0x544436 !== "string") {
        throw new TypeError("\"alphabet\" must be a string.");
      }
      if (_0x119014 !== undefined && typeof _0x119014 !== "number") {
        throw new TypeError("\"maxline\" must be a number.");
      }
      var _0x5f07d5 = "";
      if (!(_0x194b4b instanceof Uint8Array)) {
        _0x5f07d5 = _0x8c3168(_0x194b4b, _0x544436);
      } else {
        var _0x26d51b = 0;
        var _0x3b766c = _0x544436.length;
        var _0x1f9151 = _0x544436.charAt(0);
        var _0xe78889 = [0];
        for (_0x26d51b = 0; _0x26d51b < _0x194b4b.length; ++_0x26d51b) {
          for (var _0x367c10 = 0, _0x4b4c43 = _0x194b4b[_0x26d51b]; _0x367c10 < _0xe78889.length; ++_0x367c10) {
            _0x4b4c43 += _0xe78889[_0x367c10] << 8;
            _0xe78889[_0x367c10] = _0x4b4c43 % _0x3b766c;
            _0x4b4c43 = _0x4b4c43 / _0x3b766c | 0;
          }
          while (_0x4b4c43 > 0) {
            _0xe78889.push(_0x4b4c43 % _0x3b766c);
            _0x4b4c43 = _0x4b4c43 / _0x3b766c | 0;
          }
        }
        for (_0x26d51b = 0; _0x194b4b[_0x26d51b] === 0 && _0x26d51b < _0x194b4b.length - 1; ++_0x26d51b) {
          _0x5f07d5 += _0x1f9151;
        }
        for (_0x26d51b = _0xe78889.length - 1; _0x26d51b >= 0; --_0x26d51b) {
          _0x5f07d5 += _0x544436[_0xe78889[_0x26d51b]];
        }
      }
      if (_0x119014) {
        var _0x5eb4b6 = new RegExp(".{1," + _0x119014 + "}", "g");
        _0x5f07d5 = _0x5f07d5.match(_0x5eb4b6).join("\r\n");
      }
      return _0x5f07d5;
    };
    _0x462713.decode = function (_0x19256b, _0x3c9515) {
      if (typeof _0x19256b !== "string") {
        throw new TypeError("\"input\" must be a string.");
      }
      if (typeof _0x3c9515 !== "string") {
        throw new TypeError("\"alphabet\" must be a string.");
      }
      var _0x22f5a4 = _0x1417ba[_0x3c9515];
      if (!_0x22f5a4) {
        _0x22f5a4 = _0x1417ba[_0x3c9515] = [];
        for (var _0x2d478a = 0; _0x2d478a < _0x3c9515.length; ++_0x2d478a) {
          _0x22f5a4[_0x3c9515.charCodeAt(_0x2d478a)] = _0x2d478a;
        }
      }
      _0x19256b = _0x19256b.replace(/\s/g, "");
      var _0x314d97 = _0x3c9515.length;
      var _0x38c272 = _0x3c9515.charAt(0);
      var _0x33c8ec = [0];
      for (var _0x2d478a = 0; _0x2d478a < _0x19256b.length; _0x2d478a++) {
        var _0x435f0c = _0x22f5a4[_0x19256b.charCodeAt(_0x2d478a)];
        if (_0x435f0c === undefined) {
          return;
        }
        for (var _0x38cb39 = 0, _0x385084 = _0x435f0c; _0x38cb39 < _0x33c8ec.length; ++_0x38cb39) {
          _0x385084 += _0x33c8ec[_0x38cb39] * _0x314d97;
          _0x33c8ec[_0x38cb39] = _0x385084 & 255;
          _0x385084 >>= 8;
        }
        while (_0x385084 > 0) {
          _0x33c8ec.push(_0x385084 & 255);
          _0x385084 >>= 8;
        }
      }
      for (var _0x483380 = 0; _0x19256b[_0x483380] === _0x38c272 && _0x483380 < _0x19256b.length - 1; ++_0x483380) {
        _0x33c8ec.push(0);
      }
      if (typeof Buffer !== "undefined") {
        return Buffer.from(_0x33c8ec.reverse());
      }
      return new Uint8Array(_0x33c8ec.reverse());
    };
    function _0x8c3168(_0x1d647d, _0x42f14d) {
      var _0x369986 = 0;
      var _0x4b705e = _0x42f14d.length;
      var _0x5e7871 = _0x42f14d.charAt(0);
      var _0x26345e = [0];
      for (_0x369986 = 0; _0x369986 < _0x1d647d.length(); ++_0x369986) {
        for (var _0x404aed = 0, _0x3fa72a = _0x1d647d.at(_0x369986); _0x404aed < _0x26345e.length; ++_0x404aed) {
          _0x3fa72a += _0x26345e[_0x404aed] << 8;
          _0x26345e[_0x404aed] = _0x3fa72a % _0x4b705e;
          _0x3fa72a = _0x3fa72a / _0x4b705e | 0;
        }
        while (_0x3fa72a > 0) {
          _0x26345e.push(_0x3fa72a % _0x4b705e);
          _0x3fa72a = _0x3fa72a / _0x4b705e | 0;
        }
      }
      var _0x5ba680 = "";
      for (_0x369986 = 0; _0x1d647d.at(_0x369986) === 0 && _0x369986 < _0x1d647d.length() - 1; ++_0x369986) {
        _0x5ba680 += _0x5e7871;
      }
      for (_0x369986 = _0x26345e.length - 1; _0x369986 >= 0; --_0x369986) {
        _0x5ba680 += _0x42f14d[_0x26345e[_0x369986]];
      }
      return _0x5ba680;
    }
  }
});
var require_util = __commonJS({
  "node_modules/node-forge/lib/util.js"(_0xa5f181, _0x18c03f) {
    var _0x187f9d = require_forge();
    var _0x3a4a00 = require_baseN();
    var _0x2f6393 = _0x18c03f.exports = _0x187f9d.util = _0x187f9d.util || {};
    (function () {
      if (typeof process !== "undefined" && process.nextTick && !process.browser) {
        _0x2f6393.nextTick = process.nextTick;
        if (typeof setImmediate === "function") {
          _0x2f6393.setImmediate = setImmediate;
        } else {
          _0x2f6393.setImmediate = _0x2f6393.nextTick;
        }
        return;
      }
      if (typeof setImmediate === "function") {
        _0x2f6393.setImmediate = function () {
          return setImmediate.apply(undefined, arguments);
        };
        _0x2f6393.nextTick = function (_0x335e77) {
          return setImmediate(_0x335e77);
        };
        return;
      }
      _0x2f6393.setImmediate = function (_0x5ffa81) {
        setTimeout(_0x5ffa81, 0);
      };
      if (typeof window !== "undefined" && typeof window.postMessage === "function") {
        let _0xe2e2a2 = function (_0x5f517e) {
          if (_0x5f517e.source === window && _0x5f517e.data === _0x30ea01) {
            _0x5f517e.stopPropagation();
            var _0x16ec52 = _0x4cd94d.slice();
            _0x4cd94d.length = 0;
            _0x16ec52.forEach(function (_0x157b3e) {
              _0x157b3e();
            });
          }
        };
        var _0xde0ddf = _0xe2e2a2;
        var _0x30ea01 = "forge.setImmediate";
        var _0x4cd94d = [];
        _0x2f6393.setImmediate = function (_0x45f28f) {
          _0x4cd94d.push(_0x45f28f);
          if (_0x4cd94d.length === 1) {
            window.postMessage(_0x30ea01, "*");
          }
        };
        window.addEventListener("message", _0xe2e2a2, true);
      }
      if (typeof MutationObserver !== "undefined") {
        var _0x30f9d7 = Date.now();
        var _0x33ec9f = true;
        var _0x57f6cb = document.createElement("div");
        var _0x4cd94d = [];
        new MutationObserver(function () {
          var _0x466a32 = _0x4cd94d.slice();
          _0x4cd94d.length = 0;
          _0x466a32.forEach(function (_0x5dfd6d) {
            _0x5dfd6d();
          });
        }).observe(_0x57f6cb, {
          attributes: true
        });
        var _0x255652 = _0x2f6393.setImmediate;
        _0x2f6393.setImmediate = function (_0x2ca661) {
          if (Date.now() - _0x30f9d7 > 15) {
            _0x30f9d7 = Date.now();
            _0x255652(_0x2ca661);
          } else {
            _0x4cd94d.push(_0x2ca661);
            if (_0x4cd94d.length === 1) {
              _0x57f6cb.setAttribute("a", _0x33ec9f = !_0x33ec9f);
            }
          }
        };
      }
      _0x2f6393.nextTick = _0x2f6393.setImmediate;
    })();
    _0x2f6393.isNodejs = typeof process !== "undefined" && process.versions && process.versions.node;
    _0x2f6393.globalScope = function () {
      if (_0x2f6393.isNodejs) {
        return global;
      }
      if (typeof self === "undefined") {
        return window;
      } else {
        return self;
      }
    }();
    _0x2f6393.isArray = Array.isArray || function (_0x4c8cd1) {
      return Object.prototype.toString.call(_0x4c8cd1) === "[object Array]";
    };
    _0x2f6393.isArrayBuffer = function (_0x48824c) {
      return typeof ArrayBuffer !== "undefined" && _0x48824c instanceof ArrayBuffer;
    };
    _0x2f6393.isArrayBufferView = function (_0x45267a) {
      return _0x45267a && _0x2f6393.isArrayBuffer(_0x45267a.buffer) && _0x45267a.byteLength !== undefined;
    };
    function _0x51fed3(_0x5a6c99) {
      if (_0x5a6c99 !== 8 && _0x5a6c99 !== 16 && _0x5a6c99 !== 24 && _0x5a6c99 !== 32) {
        throw new Error("Only 8, 16, 24, or 32 bits supported: " + _0x5a6c99);
      }
    }
    _0x2f6393.ByteBuffer = _0x525a13;
    function _0x525a13(_0x19bcdf) {
      this.data = "";
      this.read = 0;
      if (typeof _0x19bcdf === "string") {
        this.data = _0x19bcdf;
      } else if (_0x2f6393.isArrayBuffer(_0x19bcdf) || _0x2f6393.isArrayBufferView(_0x19bcdf)) {
        if (typeof Buffer !== "undefined" && _0x19bcdf instanceof Buffer) {
          this.data = _0x19bcdf.toString("binary");
        } else {
          var _0x5cbec1 = new Uint8Array(_0x19bcdf);
          try {
            this.data = String.fromCharCode.apply(null, _0x5cbec1);
          } catch (_0x40ab36) {
            for (var _0x4fa8cf = 0; _0x4fa8cf < _0x5cbec1.length; ++_0x4fa8cf) {
              this.putByte(_0x5cbec1[_0x4fa8cf]);
            }
          }
        }
      } else if (_0x19bcdf instanceof _0x525a13 || typeof _0x19bcdf === "object" && typeof _0x19bcdf.data === "string" && typeof _0x19bcdf.read === "number") {
        this.data = _0x19bcdf.data;
        this.read = _0x19bcdf.read;
      }
      this._constructedStringLength = 0;
    }
    _0x2f6393.ByteStringBuffer = _0x525a13;
    var _0x2bc9aa = 4096;
    _0x2f6393.ByteStringBuffer.prototype._optimizeConstructedString = function (_0x377795) {
      this._constructedStringLength += _0x377795;
      if (this._constructedStringLength > _0x2bc9aa) {
        this.data.substr(0, 1);
        this._constructedStringLength = 0;
      }
    };
    _0x2f6393.ByteStringBuffer.prototype.length = function () {
      return this.data.length - this.read;
    };
    _0x2f6393.ByteStringBuffer.prototype.isEmpty = function () {
      return this.length() <= 0;
    };
    _0x2f6393.ByteStringBuffer.prototype.putByte = function (_0x7b00f3) {
      return this.putBytes(String.fromCharCode(_0x7b00f3));
    };
    _0x2f6393.ByteStringBuffer.prototype.fillWithByte = function (_0x249378, _0x5b0515) {
      _0x249378 = String.fromCharCode(_0x249378);
      var _0x567070 = this.data;
      while (_0x5b0515 > 0) {
        if (_0x5b0515 & 1) {
          _0x567070 += _0x249378;
        }
        _0x5b0515 >>>= 1;
        if (_0x5b0515 > 0) {
          _0x249378 += _0x249378;
        }
      }
      this.data = _0x567070;
      this._optimizeConstructedString(_0x5b0515);
      return this;
    };
    _0x2f6393.ByteStringBuffer.prototype.putBytes = function (_0x271fe8) {
      this.data += _0x271fe8;
      this._optimizeConstructedString(_0x271fe8.length);
      return this;
    };
    _0x2f6393.ByteStringBuffer.prototype.putString = function (_0xb26bc6) {
      return this.putBytes(_0x2f6393.encodeUtf8(_0xb26bc6));
    };
    _0x2f6393.ByteStringBuffer.prototype.putInt16 = function (_0x3a69a9) {
      return this.putBytes(String.fromCharCode(_0x3a69a9 >> 8 & 255) + String.fromCharCode(_0x3a69a9 & 255));
    };
    _0x2f6393.ByteStringBuffer.prototype.putInt24 = function (_0x4bc7a1) {
      return this.putBytes(String.fromCharCode(_0x4bc7a1 >> 16 & 255) + String.fromCharCode(_0x4bc7a1 >> 8 & 255) + String.fromCharCode(_0x4bc7a1 & 255));
    };
    _0x2f6393.ByteStringBuffer.prototype.putInt32 = function (_0x213b2a) {
      return this.putBytes(String.fromCharCode(_0x213b2a >> 24 & 255) + String.fromCharCode(_0x213b2a >> 16 & 255) + String.fromCharCode(_0x213b2a >> 8 & 255) + String.fromCharCode(_0x213b2a & 255));
    };
    _0x2f6393.ByteStringBuffer.prototype.putInt16Le = function (_0x1a080d) {
      return this.putBytes(String.fromCharCode(_0x1a080d & 255) + String.fromCharCode(_0x1a080d >> 8 & 255));
    };
    _0x2f6393.ByteStringBuffer.prototype.putInt24Le = function (_0x3a3657) {
      return this.putBytes(String.fromCharCode(_0x3a3657 & 255) + String.fromCharCode(_0x3a3657 >> 8 & 255) + String.fromCharCode(_0x3a3657 >> 16 & 255));
    };
    _0x2f6393.ByteStringBuffer.prototype.putInt32Le = function (_0x48a7a1) {
      return this.putBytes(String.fromCharCode(_0x48a7a1 & 255) + String.fromCharCode(_0x48a7a1 >> 8 & 255) + String.fromCharCode(_0x48a7a1 >> 16 & 255) + String.fromCharCode(_0x48a7a1 >> 24 & 255));
    };
    _0x2f6393.ByteStringBuffer.prototype.putInt = function (_0x59246d, _0xc2c563) {
      _0x51fed3(_0xc2c563);
      var _0x354b47 = "";
      do {
        _0xc2c563 -= 8;
        _0x354b47 += String.fromCharCode(_0x59246d >> _0xc2c563 & 255);
      } while (_0xc2c563 > 0);
      return this.putBytes(_0x354b47);
    };
    _0x2f6393.ByteStringBuffer.prototype.putSignedInt = function (_0x4716bf, _0x1ab8af) {
      if (_0x4716bf < 0) {
        _0x4716bf += 2 << _0x1ab8af - 1;
      }
      return this.putInt(_0x4716bf, _0x1ab8af);
    };
    _0x2f6393.ByteStringBuffer.prototype.putBuffer = function (_0x29a1b3) {
      return this.putBytes(_0x29a1b3.getBytes());
    };
    _0x2f6393.ByteStringBuffer.prototype.getByte = function () {
      return this.data.charCodeAt(this.read++);
    };
    _0x2f6393.ByteStringBuffer.prototype.getInt16 = function () {
      var _0x5850c0 = this.data.charCodeAt(this.read) << 8 ^ this.data.charCodeAt(this.read + 1);
      this.read += 2;
      return _0x5850c0;
    };
    _0x2f6393.ByteStringBuffer.prototype.getInt24 = function () {
      var _0x455079 = this.data.charCodeAt(this.read) << 16 ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2);
      this.read += 3;
      return _0x455079;
    };
    _0x2f6393.ByteStringBuffer.prototype.getInt32 = function () {
      var _0x14f749 = this.data.charCodeAt(this.read) << 24 ^ this.data.charCodeAt(this.read + 1) << 16 ^ this.data.charCodeAt(this.read + 2) << 8 ^ this.data.charCodeAt(this.read + 3);
      this.read += 4;
      return _0x14f749;
    };
    _0x2f6393.ByteStringBuffer.prototype.getInt16Le = function () {
      var _0x5eac21 = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8;
      this.read += 2;
      return _0x5eac21;
    };
    _0x2f6393.ByteStringBuffer.prototype.getInt24Le = function () {
      var _0x3ce1f7 = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16;
      this.read += 3;
      return _0x3ce1f7;
    };
    _0x2f6393.ByteStringBuffer.prototype.getInt32Le = function () {
      var _0x2f7f5f = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16 ^ this.data.charCodeAt(this.read + 3) << 24;
      this.read += 4;
      return _0x2f7f5f;
    };
    _0x2f6393.ByteStringBuffer.prototype.getInt = function (_0x452ee6) {
      _0x51fed3(_0x452ee6);
      var _0x4b179b = 0;
      do {
        _0x4b179b = (_0x4b179b << 8) + this.data.charCodeAt(this.read++);
        _0x452ee6 -= 8;
      } while (_0x452ee6 > 0);
      return _0x4b179b;
    };
    _0x2f6393.ByteStringBuffer.prototype.getSignedInt = function (_0x1e6fab) {
      var _0x5526ff = this.getInt(_0x1e6fab);
      var _0x2d6d05 = 2 << _0x1e6fab - 2;
      if (_0x5526ff >= _0x2d6d05) {
        _0x5526ff -= _0x2d6d05 << 1;
      }
      return _0x5526ff;
    };
    _0x2f6393.ByteStringBuffer.prototype.getBytes = function (_0x331a3c) {
      var _0x235b49;
      if (_0x331a3c) {
        _0x331a3c = Math.min(this.length(), _0x331a3c);
        _0x235b49 = this.data.slice(this.read, this.read + _0x331a3c);
        this.read += _0x331a3c;
      } else if (_0x331a3c === 0) {
        _0x235b49 = "";
      } else {
        _0x235b49 = this.read === 0 ? this.data : this.data.slice(this.read);
        this.clear();
      }
      return _0x235b49;
    };
    _0x2f6393.ByteStringBuffer.prototype.bytes = function (_0x213bbe) {
      if (typeof _0x213bbe === "undefined") {
        return this.data.slice(this.read);
      } else {
        return this.data.slice(this.read, this.read + _0x213bbe);
      }
    };
    _0x2f6393.ByteStringBuffer.prototype.at = function (_0x12d5a4) {
      return this.data.charCodeAt(this.read + _0x12d5a4);
    };
    _0x2f6393.ByteStringBuffer.prototype.setAt = function (_0x51f8fc, _0x3558c8) {
      this.data = this.data.substr(0, this.read + _0x51f8fc) + String.fromCharCode(_0x3558c8) + this.data.substr(this.read + _0x51f8fc + 1);
      return this;
    };
    _0x2f6393.ByteStringBuffer.prototype.last = function () {
      return this.data.charCodeAt(this.data.length - 1);
    };
    _0x2f6393.ByteStringBuffer.prototype.copy = function () {
      var _0x3eb051 = _0x2f6393.createBuffer(this.data);
      _0x3eb051.read = this.read;
      return _0x3eb051;
    };
    _0x2f6393.ByteStringBuffer.prototype.compact = function () {
      if (this.read > 0) {
        this.data = this.data.slice(this.read);
        this.read = 0;
      }
      return this;
    };
    _0x2f6393.ByteStringBuffer.prototype.clear = function () {
      this.data = "";
      this.read = 0;
      return this;
    };
    _0x2f6393.ByteStringBuffer.prototype.truncate = function (_0x4de86c) {
      var _0x31fd34 = Math.max(0, this.length() - _0x4de86c);
      this.data = this.data.substr(this.read, _0x31fd34);
      this.read = 0;
      return this;
    };
    _0x2f6393.ByteStringBuffer.prototype.toHex = function () {
      var _0x2ff52a = "";
      for (var _0x38e945 = this.read; _0x38e945 < this.data.length; ++_0x38e945) {
        var _0x2d9074 = this.data.charCodeAt(_0x38e945);
        if (_0x2d9074 < 16) {
          _0x2ff52a += "0";
        }
        _0x2ff52a += _0x2d9074.toString(16);
      }
      return _0x2ff52a;
    };
    _0x2f6393.ByteStringBuffer.prototype.toString = function () {
      return _0x2f6393.decodeUtf8(this.bytes());
    };
    function _0x69956f(_0x51c8fc, _0x1f7ee2) {
      _0x1f7ee2 = _0x1f7ee2 || {};
      this.read = _0x1f7ee2.readOffset || 0;
      this.growSize = _0x1f7ee2.growSize || 1024;
      var _0x703093 = _0x2f6393.isArrayBuffer(_0x51c8fc);
      var _0x480254 = _0x2f6393.isArrayBufferView(_0x51c8fc);
      if (_0x703093 || _0x480254) {
        if (_0x703093) {
          this.data = new DataView(_0x51c8fc);
        } else {
          this.data = new DataView(_0x51c8fc.buffer, _0x51c8fc.byteOffset, _0x51c8fc.byteLength);
        }
        this.write = "writeOffset" in _0x1f7ee2 ? _0x1f7ee2.writeOffset : this.data.byteLength;
        return;
      }
      this.data = new DataView(new ArrayBuffer(0));
      this.write = 0;
      if (_0x51c8fc !== null && _0x51c8fc !== undefined) {
        this.putBytes(_0x51c8fc);
      }
      if ("writeOffset" in _0x1f7ee2) {
        this.write = _0x1f7ee2.writeOffset;
      }
    }
    _0x2f6393.DataBuffer = _0x69956f;
    _0x2f6393.DataBuffer.prototype.length = function () {
      return this.write - this.read;
    };
    _0x2f6393.DataBuffer.prototype.isEmpty = function () {
      return this.length() <= 0;
    };
    _0x2f6393.DataBuffer.prototype.accommodate = function (_0x36fce8, _0x2f8866) {
      if (this.length() >= _0x36fce8) {
        return this;
      }
      _0x2f8866 = Math.max(_0x2f8866 || this.growSize, _0x36fce8);
      var _0x5b3838 = new Uint8Array(this.data.buffer, this.data.byteOffset, this.data.byteLength);
      var _0x234049 = new Uint8Array(this.length() + _0x2f8866);
      _0x234049.set(_0x5b3838);
      this.data = new DataView(_0x234049.buffer);
      return this;
    };
    _0x2f6393.DataBuffer.prototype.putByte = function (_0x208d1d) {
      this.accommodate(1);
      this.data.setUint8(this.write++, _0x208d1d);
      return this;
    };
    _0x2f6393.DataBuffer.prototype.fillWithByte = function (_0x138548, _0x32e8a9) {
      this.accommodate(_0x32e8a9);
      for (var _0x204628 = 0; _0x204628 < _0x32e8a9; ++_0x204628) {
        this.data.setUint8(_0x138548);
      }
      return this;
    };
    _0x2f6393.DataBuffer.prototype.putBytes = function (_0x2a9746, _0x5e7163) {
      if (_0x2f6393.isArrayBufferView(_0x2a9746)) {
        var _0x25c95a = new Uint8Array(_0x2a9746.buffer, _0x2a9746.byteOffset, _0x2a9746.byteLength);
        var _0x413333 = _0x25c95a.byteLength - _0x25c95a.byteOffset;
        this.accommodate(_0x413333);
        var _0xc3c380 = new Uint8Array(this.data.buffer, this.write);
        _0xc3c380.set(_0x25c95a);
        this.write += _0x413333;
        return this;
      }
      if (_0x2f6393.isArrayBuffer(_0x2a9746)) {
        var _0x25c95a = new Uint8Array(_0x2a9746);
        this.accommodate(_0x25c95a.byteLength);
        var _0xc3c380 = new Uint8Array(this.data.buffer);
        _0xc3c380.set(_0x25c95a, this.write);
        this.write += _0x25c95a.byteLength;
        return this;
      }
      if (_0x2a9746 instanceof _0x2f6393.DataBuffer || typeof _0x2a9746 === "object" && typeof _0x2a9746.read === "number" && typeof _0x2a9746.write === "number" && _0x2f6393.isArrayBufferView(_0x2a9746.data)) {
        var _0x25c95a = new Uint8Array(_0x2a9746.data.byteLength, _0x2a9746.read, _0x2a9746.length());
        this.accommodate(_0x25c95a.byteLength);
        var _0xc3c380 = new Uint8Array(_0x2a9746.data.byteLength, this.write);
        _0xc3c380.set(_0x25c95a);
        this.write += _0x25c95a.byteLength;
        return this;
      }
      if (_0x2a9746 instanceof _0x2f6393.ByteStringBuffer) {
        _0x2a9746 = _0x2a9746.data;
        _0x5e7163 = "binary";
      }
      _0x5e7163 = _0x5e7163 || "binary";
      if (typeof _0x2a9746 === "string") {
        var _0x1fb12e;
        if (_0x5e7163 === "hex") {
          this.accommodate(Math.ceil(_0x2a9746.length / 2));
          _0x1fb12e = new Uint8Array(this.data.buffer, this.write);
          this.write += _0x2f6393.binary.hex.decode(_0x2a9746, _0x1fb12e, this.write);
          return this;
        }
        if (_0x5e7163 === "base64") {
          this.accommodate(Math.ceil(_0x2a9746.length / 4) * 3);
          _0x1fb12e = new Uint8Array(this.data.buffer, this.write);
          this.write += _0x2f6393.binary.base64.decode(_0x2a9746, _0x1fb12e, this.write);
          return this;
        }
        if (_0x5e7163 === "utf8") {
          _0x2a9746 = _0x2f6393.encodeUtf8(_0x2a9746);
          _0x5e7163 = "binary";
        }
        if (_0x5e7163 === "binary" || _0x5e7163 === "raw") {
          this.accommodate(_0x2a9746.length);
          _0x1fb12e = new Uint8Array(this.data.buffer, this.write);
          this.write += _0x2f6393.binary.raw.decode(_0x1fb12e);
          return this;
        }
        if (_0x5e7163 === "utf16") {
          this.accommodate(_0x2a9746.length * 2);
          _0x1fb12e = new Uint16Array(this.data.buffer, this.write);
          this.write += _0x2f6393.text.utf16.encode(_0x1fb12e);
          return this;
        }
        throw new Error("Invalid encoding: " + _0x5e7163);
      }
      throw Error("Invalid parameter: " + _0x2a9746);
    };
    _0x2f6393.DataBuffer.prototype.putBuffer = function (_0x531f31) {
      this.putBytes(_0x531f31);
      _0x531f31.clear();
      return this;
    };
    _0x2f6393.DataBuffer.prototype.putString = function (_0x3a673a) {
      return this.putBytes(_0x3a673a, "utf16");
    };
    _0x2f6393.DataBuffer.prototype.putInt16 = function (_0x501a5a) {
      this.accommodate(2);
      this.data.setInt16(this.write, _0x501a5a);
      this.write += 2;
      return this;
    };
    _0x2f6393.DataBuffer.prototype.putInt24 = function (_0x12c494) {
      this.accommodate(3);
      this.data.setInt16(this.write, _0x12c494 >> 8 & 65535);
      this.data.setInt8(this.write, _0x12c494 >> 16 & 255);
      this.write += 3;
      return this;
    };
    _0x2f6393.DataBuffer.prototype.putInt32 = function (_0x463903) {
      this.accommodate(4);
      this.data.setInt32(this.write, _0x463903);
      this.write += 4;
      return this;
    };
    _0x2f6393.DataBuffer.prototype.putInt16Le = function (_0x4ad1a9) {
      this.accommodate(2);
      this.data.setInt16(this.write, _0x4ad1a9, true);
      this.write += 2;
      return this;
    };
    _0x2f6393.DataBuffer.prototype.putInt24Le = function (_0x5afdff) {
      this.accommodate(3);
      this.data.setInt8(this.write, _0x5afdff >> 16 & 255);
      this.data.setInt16(this.write, _0x5afdff >> 8 & 65535, true);
      this.write += 3;
      return this;
    };
    _0x2f6393.DataBuffer.prototype.putInt32Le = function (_0x5b8dae) {
      this.accommodate(4);
      this.data.setInt32(this.write, _0x5b8dae, true);
      this.write += 4;
      return this;
    };
    _0x2f6393.DataBuffer.prototype.putInt = function (_0x3f6bf7, _0x4092a2) {
      _0x51fed3(_0x4092a2);
      this.accommodate(_0x4092a2 / 8);
      do {
        _0x4092a2 -= 8;
        this.data.setInt8(this.write++, _0x3f6bf7 >> _0x4092a2 & 255);
      } while (_0x4092a2 > 0);
      return this;
    };
    _0x2f6393.DataBuffer.prototype.putSignedInt = function (_0x269d44, _0x21540f) {
      _0x51fed3(_0x21540f);
      this.accommodate(_0x21540f / 8);
      if (_0x269d44 < 0) {
        _0x269d44 += 2 << _0x21540f - 1;
      }
      return this.putInt(_0x269d44, _0x21540f);
    };
    _0x2f6393.DataBuffer.prototype.getByte = function () {
      return this.data.getInt8(this.read++);
    };
    _0x2f6393.DataBuffer.prototype.getInt16 = function () {
      var _0x19ed78 = this.data.getInt16(this.read);
      this.read += 2;
      return _0x19ed78;
    };
    _0x2f6393.DataBuffer.prototype.getInt24 = function () {
      var _0x4a8320 = this.data.getInt16(this.read) << 8 ^ this.data.getInt8(this.read + 2);
      this.read += 3;
      return _0x4a8320;
    };
    _0x2f6393.DataBuffer.prototype.getInt32 = function () {
      var _0x3e30f7 = this.data.getInt32(this.read);
      this.read += 4;
      return _0x3e30f7;
    };
    _0x2f6393.DataBuffer.prototype.getInt16Le = function () {
      var _0x3d7d80 = this.data.getInt16(this.read, true);
      this.read += 2;
      return _0x3d7d80;
    };
    _0x2f6393.DataBuffer.prototype.getInt24Le = function () {
      var _0x33885a = this.data.getInt8(this.read) ^ this.data.getInt16(this.read + 1, true) << 8;
      this.read += 3;
      return _0x33885a;
    };
    _0x2f6393.DataBuffer.prototype.getInt32Le = function () {
      var _0x3f6b6a = this.data.getInt32(this.read, true);
      this.read += 4;
      return _0x3f6b6a;
    };
    _0x2f6393.DataBuffer.prototype.getInt = function (_0x4d964d) {
      _0x51fed3(_0x4d964d);
      var _0x52599c = 0;
      do {
        _0x52599c = (_0x52599c << 8) + this.data.getInt8(this.read++);
        _0x4d964d -= 8;
      } while (_0x4d964d > 0);
      return _0x52599c;
    };
    _0x2f6393.DataBuffer.prototype.getSignedInt = function (_0x558ca4) {
      var _0x2c208b = this.getInt(_0x558ca4);
      var _0x125747 = 2 << _0x558ca4 - 2;
      if (_0x2c208b >= _0x125747) {
        _0x2c208b -= _0x125747 << 1;
      }
      return _0x2c208b;
    };
    _0x2f6393.DataBuffer.prototype.getBytes = function (_0x3d814e) {
      var _0x2492ee;
      if (_0x3d814e) {
        _0x3d814e = Math.min(this.length(), _0x3d814e);
        _0x2492ee = this.data.slice(this.read, this.read + _0x3d814e);
        this.read += _0x3d814e;
      } else if (_0x3d814e === 0) {
        _0x2492ee = "";
      } else {
        _0x2492ee = this.read === 0 ? this.data : this.data.slice(this.read);
        this.clear();
      }
      return _0x2492ee;
    };
    _0x2f6393.DataBuffer.prototype.bytes = function (_0x22240a) {
      if (typeof _0x22240a === "undefined") {
        return this.data.slice(this.read);
      } else {
        return this.data.slice(this.read, this.read + _0x22240a);
      }
    };
    _0x2f6393.DataBuffer.prototype.at = function (_0x61dfe) {
      return this.data.getUint8(this.read + _0x61dfe);
    };
    _0x2f6393.DataBuffer.prototype.setAt = function (_0x56100e, _0x40432f) {
      this.data.setUint8(_0x56100e, _0x40432f);
      return this;
    };
    _0x2f6393.DataBuffer.prototype.last = function () {
      return this.data.getUint8(this.write - 1);
    };
    _0x2f6393.DataBuffer.prototype.copy = function () {
      return new _0x2f6393.DataBuffer(this);
    };
    _0x2f6393.DataBuffer.prototype.compact = function () {
      if (this.read > 0) {
        var _0x5d4fbf = new Uint8Array(this.data.buffer, this.read);
        var _0x5b73d7 = new Uint8Array(_0x5d4fbf.byteLength);
        _0x5b73d7.set(_0x5d4fbf);
        this.data = new DataView(_0x5b73d7);
        this.write -= this.read;
        this.read = 0;
      }
      return this;
    };
    _0x2f6393.DataBuffer.prototype.clear = function () {
      this.data = new DataView(new ArrayBuffer(0));
      this.read = this.write = 0;
      return this;
    };
    _0x2f6393.DataBuffer.prototype.truncate = function (_0x40730d) {
      this.write = Math.max(0, this.length() - _0x40730d);
      this.read = Math.min(this.read, this.write);
      return this;
    };
    _0x2f6393.DataBuffer.prototype.toHex = function () {
      var _0x18be08 = "";
      for (var _0x49707e = this.read; _0x49707e < this.data.byteLength; ++_0x49707e) {
        var _0x5468b5 = this.data.getUint8(_0x49707e);
        if (_0x5468b5 < 16) {
          _0x18be08 += "0";
        }
        _0x18be08 += _0x5468b5.toString(16);
      }
      return _0x18be08;
    };
    _0x2f6393.DataBuffer.prototype.toString = function (_0x4e1dc5) {
      var _0x4d22c7 = new Uint8Array(this.data, this.read, this.length());
      _0x4e1dc5 = _0x4e1dc5 || "utf8";
      if (_0x4e1dc5 === "binary" || _0x4e1dc5 === "raw") {
        return _0x2f6393.binary.raw.encode(_0x4d22c7);
      }
      if (_0x4e1dc5 === "hex") {
        return _0x2f6393.binary.hex.encode(_0x4d22c7);
      }
      if (_0x4e1dc5 === "base64") {
        return _0x2f6393.binary.base64.encode(_0x4d22c7);
      }
      if (_0x4e1dc5 === "utf8") {
        return _0x2f6393.text.utf8.decode(_0x4d22c7);
      }
      if (_0x4e1dc5 === "utf16") {
        return _0x2f6393.text.utf16.decode(_0x4d22c7);
      }
      throw new Error("Invalid encoding: " + _0x4e1dc5);
    };
    _0x2f6393.createBuffer = function (_0x4290e4, _0x12352f) {
      _0x12352f = _0x12352f || "raw";
      if (_0x4290e4 !== undefined && _0x12352f === "utf8") {
        _0x4290e4 = _0x2f6393.encodeUtf8(_0x4290e4);
      }
      return new _0x2f6393.ByteBuffer(_0x4290e4);
    };
    _0x2f6393.fillString = function (_0x5ee701, _0x561b10) {
      var _0x2e52f6 = "";
      while (_0x561b10 > 0) {
        if (_0x561b10 & 1) {
          _0x2e52f6 += _0x5ee701;
        }
        _0x561b10 >>>= 1;
        if (_0x561b10 > 0) {
          _0x5ee701 += _0x5ee701;
        }
      }
      return _0x2e52f6;
    };
    _0x2f6393.xorBytes = function (_0xb5f588, _0x2d71a2, _0x32b378) {
      var _0x54c622 = "";
      var _0x4dcd6a = "";
      var _0x1a01cd = "";
      var _0x293546 = 0;
      var _0x2de680 = 0;
      for (; _0x32b378 > 0; --_0x32b378, ++_0x293546) {
        _0x4dcd6a = _0xb5f588.charCodeAt(_0x293546) ^ _0x2d71a2.charCodeAt(_0x293546);
        if (_0x2de680 >= 10) {
          _0x54c622 += _0x1a01cd;
          _0x1a01cd = "";
          _0x2de680 = 0;
        }
        _0x1a01cd += String.fromCharCode(_0x4dcd6a);
        ++_0x2de680;
      }
      _0x54c622 += _0x1a01cd;
      return _0x54c622;
    };
    _0x2f6393.hexToBytes = function (_0x40a922) {
      var _0x115932 = "";
      var _0x382dc7 = 0;
      if (_0x40a922.length & true) {
        _0x382dc7 = 1;
        _0x115932 += String.fromCharCode(parseInt(_0x40a922[0], 16));
      }
      for (; _0x382dc7 < _0x40a922.length; _0x382dc7 += 2) {
        _0x115932 += String.fromCharCode(parseInt(_0x40a922.substr(_0x382dc7, 2), 16));
      }
      return _0x115932;
    };
    _0x2f6393.bytesToHex = function (_0x4e50c8) {
      return _0x2f6393.createBuffer(_0x4e50c8).toHex();
    };
    _0x2f6393.int32ToBytes = function (_0x5a9add) {
      return String.fromCharCode(_0x5a9add >> 24 & 255) + String.fromCharCode(_0x5a9add >> 16 & 255) + String.fromCharCode(_0x5a9add >> 8 & 255) + String.fromCharCode(_0x5a9add & 255);
    };
    var _0x5691c5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var _0x44d386 = [62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
    var _0x4d05d7 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    _0x2f6393.encode64 = function (_0x51b4b0, _0x2e7b2a) {
      var _0x403947 = "";
      var _0x23afaa = "";
      var _0x363aa7;
      var _0x56aaef;
      var _0x196d9f;
      var _0x22c571 = 0;
      while (_0x22c571 < _0x51b4b0.length) {
        _0x363aa7 = _0x51b4b0.charCodeAt(_0x22c571++);
        _0x56aaef = _0x51b4b0.charCodeAt(_0x22c571++);
        _0x196d9f = _0x51b4b0.charCodeAt(_0x22c571++);
        _0x403947 += _0x5691c5.charAt(_0x363aa7 >> 2);
        _0x403947 += _0x5691c5.charAt((_0x363aa7 & 3) << 4 | _0x56aaef >> 4);
        if (isNaN(_0x56aaef)) {
          _0x403947 += "==";
        } else {
          _0x403947 += _0x5691c5.charAt((_0x56aaef & 15) << 2 | _0x196d9f >> 6);
          _0x403947 += isNaN(_0x196d9f) ? "=" : _0x5691c5.charAt(_0x196d9f & 63);
        }
        if (_0x2e7b2a && _0x403947.length > _0x2e7b2a) {
          _0x23afaa += _0x403947.substr(0, _0x2e7b2a) + "\r\n";
          _0x403947 = _0x403947.substr(_0x2e7b2a);
        }
      }
      _0x23afaa += _0x403947;
      return _0x23afaa;
    };
    _0x2f6393.decode64 = function (_0x1a3015) {
      _0x1a3015 = _0x1a3015.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      var _0x5d5372 = "";
      var _0x443809;
      var _0x5455ef;
      var _0x536e8d;
      var _0x4d6ae7;
      var _0x380cc2 = 0;
      while (_0x380cc2 < _0x1a3015.length) {
        _0x443809 = _0x44d386[_0x1a3015.charCodeAt(_0x380cc2++) - 43];
        _0x5455ef = _0x44d386[_0x1a3015.charCodeAt(_0x380cc2++) - 43];
        _0x536e8d = _0x44d386[_0x1a3015.charCodeAt(_0x380cc2++) - 43];
        _0x4d6ae7 = _0x44d386[_0x1a3015.charCodeAt(_0x380cc2++) - 43];
        _0x5d5372 += String.fromCharCode(_0x443809 << 2 | _0x5455ef >> 4);
        if (_0x536e8d !== 64) {
          _0x5d5372 += String.fromCharCode((_0x5455ef & 15) << 4 | _0x536e8d >> 2);
          if (_0x4d6ae7 !== 64) {
            _0x5d5372 += String.fromCharCode((_0x536e8d & 3) << 6 | _0x4d6ae7);
          }
        }
      }
      return _0x5d5372;
    };
    _0x2f6393.encodeUtf8 = function (_0x142555) {
      return unescape(encodeURIComponent(_0x142555));
    };
    _0x2f6393.decodeUtf8 = function (_0x207fc0) {
      return decodeURIComponent(escape(_0x207fc0));
    };
    _0x2f6393.binary = {
      raw: {},
      hex: {},
      base64: {},
      base58: {},
      baseN: {
        encode: _0x3a4a00.encode,
        decode: _0x3a4a00.decode
      }
    };
    _0x2f6393.binary.raw.encode = function (_0x414602) {
      return String.fromCharCode.apply(null, _0x414602);
    };
    _0x2f6393.binary.raw.decode = function (_0x363ee8, _0x6af158, _0x4cf404) {
      var _0x3c9228 = _0x6af158;
      if (!_0x3c9228) {
        _0x3c9228 = new Uint8Array(_0x363ee8.length);
      }
      _0x4cf404 = _0x4cf404 || 0;
      var _0x706663 = _0x4cf404;
      for (var _0x49d615 = 0; _0x49d615 < _0x363ee8.length; ++_0x49d615) {
        _0x3c9228[_0x706663++] = _0x363ee8.charCodeAt(_0x49d615);
      }
      if (_0x6af158) {
        return _0x706663 - _0x4cf404;
      } else {
        return _0x3c9228;
      }
    };
    _0x2f6393.binary.hex.encode = _0x2f6393.bytesToHex;
    _0x2f6393.binary.hex.decode = function (_0x4312ec, _0x4abfb2, _0x3d9c25) {
      var _0x5419fa = _0x4abfb2;
      if (!_0x5419fa) {
        _0x5419fa = new Uint8Array(Math.ceil(_0x4312ec.length / 2));
      }
      _0x3d9c25 = _0x3d9c25 || 0;
      var _0x3367df = 0;
      var _0x2675aa = _0x3d9c25;
      if (_0x4312ec.length & 1) {
        _0x3367df = 1;
        _0x5419fa[_0x2675aa++] = parseInt(_0x4312ec[0], 16);
      }
      for (; _0x3367df < _0x4312ec.length; _0x3367df += 2) {
        _0x5419fa[_0x2675aa++] = parseInt(_0x4312ec.substr(_0x3367df, 2), 16);
      }
      if (_0x4abfb2) {
        return _0x2675aa - _0x3d9c25;
      } else {
        return _0x5419fa;
      }
    };
    _0x2f6393.binary.base64.encode = function (_0x2fe024, _0x371493) {
      var _0x356657 = "";
      var _0x241cc3 = "";
      var _0x3807b1;
      var _0x54c426;
      var _0x583485;
      var _0xaa0454 = 0;
      while (_0xaa0454 < _0x2fe024.byteLength) {
        _0x3807b1 = _0x2fe024[_0xaa0454++];
        _0x54c426 = _0x2fe024[_0xaa0454++];
        _0x583485 = _0x2fe024[_0xaa0454++];
        _0x356657 += _0x5691c5.charAt(_0x3807b1 >> 2);
        _0x356657 += _0x5691c5.charAt((_0x3807b1 & 3) << 4 | _0x54c426 >> 4);
        if (isNaN(_0x54c426)) {
          _0x356657 += "==";
        } else {
          _0x356657 += _0x5691c5.charAt((_0x54c426 & 15) << 2 | _0x583485 >> 6);
          _0x356657 += isNaN(_0x583485) ? "=" : _0x5691c5.charAt(_0x583485 & 63);
        }
        if (_0x371493 && _0x356657.length > _0x371493) {
          _0x241cc3 += _0x356657.substr(0, _0x371493) + "\r\n";
          _0x356657 = _0x356657.substr(_0x371493);
        }
      }
      _0x241cc3 += _0x356657;
      return _0x241cc3;
    };
    _0x2f6393.binary.base64.decode = function (_0x2cfbd1, _0x48a7ae, _0x4fdfca) {
      var _0x59e546 = _0x48a7ae;
      if (!_0x59e546) {
        _0x59e546 = new Uint8Array(Math.ceil(_0x2cfbd1.length / 4) * 3);
      }
      _0x2cfbd1 = _0x2cfbd1.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      _0x4fdfca = _0x4fdfca || 0;
      var _0x4f779a;
      var _0x45e5ff;
      var _0x3262cc;
      var _0x492f07;
      var _0x205f94 = 0;
      var _0x2a3073 = _0x4fdfca;
      while (_0x205f94 < _0x2cfbd1.length) {
        _0x4f779a = _0x44d386[_0x2cfbd1.charCodeAt(_0x205f94++) - 43];
        _0x45e5ff = _0x44d386[_0x2cfbd1.charCodeAt(_0x205f94++) - 43];
        _0x3262cc = _0x44d386[_0x2cfbd1.charCodeAt(_0x205f94++) - 43];
        _0x492f07 = _0x44d386[_0x2cfbd1.charCodeAt(_0x205f94++) - 43];
        _0x59e546[_0x2a3073++] = _0x4f779a << 2 | _0x45e5ff >> 4;
        if (_0x3262cc !== 64) {
          _0x59e546[_0x2a3073++] = (_0x45e5ff & 15) << 4 | _0x3262cc >> 2;
          if (_0x492f07 !== 64) {
            _0x59e546[_0x2a3073++] = (_0x3262cc & 3) << 6 | _0x492f07;
          }
        }
      }
      if (_0x48a7ae) {
        return _0x2a3073 - _0x4fdfca;
      } else {
        return _0x59e546.subarray(0, _0x2a3073);
      }
    };
    _0x2f6393.binary.base58.encode = function (_0x4462d1, _0x2abebc) {
      return _0x2f6393.binary.baseN.encode(_0x4462d1, _0x4d05d7, _0x2abebc);
    };
    _0x2f6393.binary.base58.decode = function (_0x1ed93d, _0xe2cae5) {
      return _0x2f6393.binary.baseN.decode(_0x1ed93d, _0x4d05d7, _0xe2cae5);
    };
    _0x2f6393.text = {
      utf8: {},
      utf16: {}
    };
    _0x2f6393.text.utf8.encode = function (_0x4eee5c, _0x36dbfb, _0x5ce6dc) {
      _0x4eee5c = _0x2f6393.encodeUtf8(_0x4eee5c);
      var _0x51f61a = _0x36dbfb;
      if (!_0x51f61a) {
        _0x51f61a = new Uint8Array(_0x4eee5c.length);
      }
      _0x5ce6dc = _0x5ce6dc || 0;
      var _0x537cf3 = _0x5ce6dc;
      for (var _0x430841 = 0; _0x430841 < _0x4eee5c.length; ++_0x430841) {
        _0x51f61a[_0x537cf3++] = _0x4eee5c.charCodeAt(_0x430841);
      }
      if (_0x36dbfb) {
        return _0x537cf3 - _0x5ce6dc;
      } else {
        return _0x51f61a;
      }
    };
    _0x2f6393.text.utf8.decode = function (_0x2ef85b) {
      return _0x2f6393.decodeUtf8(String.fromCharCode.apply(null, _0x2ef85b));
    };
    _0x2f6393.text.utf16.encode = function (_0x3c14e6, _0x5b4bbd, _0x2e70d9) {
      var _0x2035b1 = _0x5b4bbd;
      if (!_0x2035b1) {
        _0x2035b1 = new Uint8Array(_0x3c14e6.length * 2);
      }
      var _0x444e36 = new Uint16Array(_0x2035b1.buffer);
      _0x2e70d9 = _0x2e70d9 || 0;
      var _0x51e329 = _0x2e70d9;
      var _0x508e8c = _0x2e70d9;
      for (var _0x417cf2 = 0; _0x417cf2 < _0x3c14e6.length; ++_0x417cf2) {
        _0x444e36[_0x508e8c++] = _0x3c14e6.charCodeAt(_0x417cf2);
        _0x51e329 += 2;
      }
      if (_0x5b4bbd) {
        return _0x51e329 - _0x2e70d9;
      } else {
        return _0x2035b1;
      }
    };
    _0x2f6393.text.utf16.decode = function (_0x1289e3) {
      return String.fromCharCode.apply(null, new Uint16Array(_0x1289e3.buffer));
    };
    _0x2f6393.deflate = function (_0x275409, _0x19cc58, _0x235b69) {
      _0x19cc58 = _0x2f6393.decode64(_0x275409.deflate(_0x2f6393.encode64(_0x19cc58)).rval);
      if (_0x235b69) {
        var _0x3434a5 = 2;
        var _0x1aa98f = _0x19cc58.charCodeAt(1);
        if (_0x1aa98f & 32) {
          _0x3434a5 = 6;
        }
        _0x19cc58 = _0x19cc58.substring(_0x3434a5, _0x19cc58.length - 4);
      }
      return _0x19cc58;
    };
    _0x2f6393.inflate = function (_0x45221b, _0x31f349, _0xc60c5f) {
      var _0x1a2db0 = _0x45221b.inflate(_0x2f6393.encode64(_0x31f349)).rval;
      if (_0x1a2db0 === null) {
        return null;
      } else {
        return _0x2f6393.decode64(_0x1a2db0);
      }
    };
    function _0x2b4382(_0x18d3a6, _0x134838, _0xb3f528) {
      if (!_0x18d3a6) {
        throw new Error("WebStorage not available.");
      }
      var _0x10cbd4;
      if (_0xb3f528 === null) {
        _0x10cbd4 = _0x18d3a6.removeItem(_0x134838);
      } else {
        _0xb3f528 = _0x2f6393.encode64(JSON.stringify(_0xb3f528));
        _0x10cbd4 = _0x18d3a6.setItem(_0x134838, _0xb3f528);
      }
      if (typeof _0x10cbd4 !== "undefined" && _0x10cbd4.rval !== true) {
        var _0x48fd25 = new Error(_0x10cbd4.error.message);
        _0x48fd25.id = _0x10cbd4.error.id;
        _0x48fd25.name = _0x10cbd4.error.name;
        throw _0x48fd25;
      }
    }
    function _0x39470f(_0x18978b, _0x298b6d) {
      if (!_0x18978b) {
        throw new Error("WebStorage not available.");
      }
      var _0x11da64 = _0x18978b.getItem(_0x298b6d);
      if (_0x18978b.init) {
        if (_0x11da64.rval === null) {
          if (_0x11da64.error) {
            var _0x3c3bcc = new Error(_0x11da64.error.message);
            _0x3c3bcc.id = _0x11da64.error.id;
            _0x3c3bcc.name = _0x11da64.error.name;
            throw _0x3c3bcc;
          }
          _0x11da64 = null;
        } else {
          _0x11da64 = _0x11da64.rval;
        }
      }
      if (_0x11da64 !== null) {
        _0x11da64 = JSON.parse(_0x2f6393.decode64(_0x11da64));
      }
      return _0x11da64;
    }
    function _0x368878(_0x33e1ad, _0x280cb1, _0x2b40f5, _0x40106b) {
      var _0x56ea1a = _0x39470f(_0x33e1ad, _0x280cb1);
      if (_0x56ea1a === null) {
        _0x56ea1a = {};
      }
      _0x56ea1a[_0x2b40f5] = _0x40106b;
      _0x2b4382(_0x33e1ad, _0x280cb1, _0x56ea1a);
    }
    function _0xbc371(_0x917849, _0x2e583e, _0x1a025b) {
      var _0x1c769a = _0x39470f(_0x917849, _0x2e583e);
      if (_0x1c769a !== null) {
        _0x1c769a = _0x1a025b in _0x1c769a ? _0x1c769a[_0x1a025b] : null;
      }
      return _0x1c769a;
    }
    function _0x917d8b(_0x4dd064, _0x1fb811, _0x4fc160) {
      var _0x2f7102 = _0x39470f(_0x4dd064, _0x1fb811);
      if (_0x2f7102 !== null && _0x4fc160 in _0x2f7102) {
        delete _0x2f7102[_0x4fc160];
        var _0x203429 = true;
        for (var _0x82fbc9 in _0x2f7102) {
          _0x203429 = false;
          break;
        }
        if (_0x203429) {
          _0x2f7102 = null;
        }
        _0x2b4382(_0x4dd064, _0x1fb811, _0x2f7102);
      }
    }
    function _0x1ff8c5(_0x2fff01, _0xd95328) {
      _0x2b4382(_0x2fff01, _0xd95328, null);
    }
    function _0x38ed87(_0x34ee6f, _0x1256eb, _0x11f42b) {
      var _0x377e33 = null;
      if (typeof _0x11f42b === "undefined") {
        _0x11f42b = ["web", "flash"];
      }
      var _0x4beaf7;
      var _0x455cd2 = false;
      var _0x22ad3f = null;
      for (var _0x58b6d8 in _0x11f42b) {
        _0x4beaf7 = _0x11f42b[_0x58b6d8];
        try {
          if (_0x4beaf7 === "flash" || _0x4beaf7 === "both") {
            if (_0x1256eb[0] === null) {
              throw new Error("Flash local storage not available.");
            }
            _0x377e33 = _0x34ee6f.apply(this, _0x1256eb);
            _0x455cd2 = _0x4beaf7 === "flash";
          }
          if (_0x4beaf7 === "web" || _0x4beaf7 === "both") {
            _0x1256eb[0] = localStorage;
            _0x377e33 = _0x34ee6f.apply(this, _0x1256eb);
            _0x455cd2 = true;
          }
        } catch (_0x488292) {
          _0x22ad3f = _0x488292;
        }
        if (_0x455cd2) {
          break;
        }
      }
      if (!_0x455cd2) {
        throw _0x22ad3f;
      }
      return _0x377e33;
    }
    _0x2f6393.setItem = function (_0x53c7d4, _0x5d37f9, _0x380a2d, _0x35bcab, _0x2a7ac8) {
      _0x38ed87(_0x368878, arguments, _0x2a7ac8);
    };
    _0x2f6393.getItem = function (_0x58f83c, _0x57d17f, _0x3097e1, _0x41ea42) {
      return _0x38ed87(_0xbc371, arguments, _0x41ea42);
    };
    _0x2f6393.removeItem = function (_0xa344b4, _0x420de7, _0x5e51d1, _0x907237) {
      _0x38ed87(_0x917d8b, arguments, _0x907237);
    };
    _0x2f6393.clearItems = function (_0x29dbab, _0x2790d3, _0x1c3d01) {
      _0x38ed87(_0x1ff8c5, arguments, _0x1c3d01);
    };
    _0x2f6393.isEmpty = function (_0x301268) {
      for (var _0x118831 in _0x301268) {
        if (_0x301268.hasOwnProperty(_0x118831)) {
          return false;
        }
      }
      return true;
    };
    _0x2f6393.format = function (_0x5417d7) {
      var _0xd253a = /%./g;
      var _0x378b41;
      var _0x19e2d0;
      var _0x12a6d6 = 0;
      var _0x671e4b = [];
      var _0x317a83 = 0;
      while (_0x378b41 = _0xd253a.exec(_0x5417d7)) {
        _0x19e2d0 = _0x5417d7.substring(_0x317a83, _0xd253a.lastIndex - 2);
        if (_0x19e2d0.length > 0) {
          _0x671e4b.push(_0x19e2d0);
        }
        _0x317a83 = _0xd253a.lastIndex;
        var _0x5dbcfe = _0x378b41[0][1];
        switch (_0x5dbcfe) {
          case "s":
          case "o":
            if (_0x12a6d6 < arguments.length) {
              _0x671e4b.push(arguments[_0x12a6d6++ + 1]);
            } else {
              _0x671e4b.push("<?>");
            }
            break;
          case "%":
            _0x671e4b.push("%");
            break;
          default:
            _0x671e4b.push("<%" + _0x5dbcfe + "?>");
        }
      }
      _0x671e4b.push(_0x5417d7.substring(_0x317a83));
      return _0x671e4b.join("");
    };
    _0x2f6393.formatNumber = function (_0x5d7e81, _0xf595f2, _0x1c026b, _0x93987) {
      var _0x525a51 = _0x5d7e81;
      var _0xc42e27 = isNaN(_0xf595f2 = Math.abs(_0xf595f2)) ? 2 : _0xf595f2;
      var _0x558f87 = _0x1c026b === undefined ? "," : _0x1c026b;
      var _0xf17a3b = _0x93987 === undefined ? "." : _0x93987;
      var _0x3e117a = _0x525a51 < 0 ? "-" : "";
      var _0x3f2fa9 = parseInt(_0x525a51 = Math.abs(+_0x525a51 || 0).toFixed(_0xc42e27), 10) + "";
      var _0x5a9bbb = _0x3f2fa9.length > 3 ? _0x3f2fa9.length % 3 : 0;
      return _0x3e117a + (_0x5a9bbb ? _0x3f2fa9.substr(0, _0x5a9bbb) + _0xf17a3b : "") + _0x3f2fa9.substr(_0x5a9bbb).replace(/(\d{3})(?=\d)/g, "$1" + _0xf17a3b) + (_0xc42e27 ? _0x558f87 + Math.abs(_0x525a51 - _0x3f2fa9).toFixed(_0xc42e27).slice(2) : "");
    };
    _0x2f6393.formatSize = function (_0xc8ff66) {
      if (_0xc8ff66 >= 1073741824) {
        _0xc8ff66 = _0x2f6393.formatNumber(_0xc8ff66 / 1073741824, 2, ".", "") + " GiB";
      } else if (_0xc8ff66 >= 1048576) {
        _0xc8ff66 = _0x2f6393.formatNumber(_0xc8ff66 / 1048576, 2, ".", "") + " MiB";
      } else if (_0xc8ff66 >= 1024) {
        _0xc8ff66 = _0x2f6393.formatNumber(_0xc8ff66 / 1024, 0) + " KiB";
      } else {
        _0xc8ff66 = _0x2f6393.formatNumber(_0xc8ff66, 0) + " bytes";
      }
      return _0xc8ff66;
    };
    _0x2f6393.bytesFromIP = function (_0x21ad29) {
      if (_0x21ad29.indexOf(".") !== -1) {
        return _0x2f6393.bytesFromIPv4(_0x21ad29);
      }
      if (_0x21ad29.indexOf(":") !== -1) {
        return _0x2f6393.bytesFromIPv6(_0x21ad29);
      }
      return null;
    };
    _0x2f6393.bytesFromIPv4 = function (_0x5dd129) {
      _0x5dd129 = _0x5dd129.split(".");
      if (_0x5dd129.length !== 4) {
        return null;
      }
      var _0x28e192 = _0x2f6393.createBuffer();
      for (var _0x4990d3 = 0; _0x4990d3 < _0x5dd129.length; ++_0x4990d3) {
        var _0x2a3708 = parseInt(_0x5dd129[_0x4990d3], 10);
        if (isNaN(_0x2a3708)) {
          return null;
        }
        _0x28e192.putByte(_0x2a3708);
      }
      return _0x28e192.getBytes();
    };
    _0x2f6393.bytesFromIPv6 = function (_0x1c4286) {
      var _0x22e2d8 = 0;
      _0x1c4286 = _0x1c4286.split(":").filter(function (_0x230ab6) {
        if (_0x230ab6.length === 0) {
          ++_0x22e2d8;
        }
        return true;
      });
      var _0x3c0d9b = (8 - _0x1c4286.length + _0x22e2d8) * 2;
      var _0x1c416d = _0x2f6393.createBuffer();
      for (var _0x2dbf56 = 0; _0x2dbf56 < 8; ++_0x2dbf56) {
        if (!_0x1c4286[_0x2dbf56] || _0x1c4286[_0x2dbf56].length === 0) {
          _0x1c416d.fillWithByte(0, _0x3c0d9b);
          _0x3c0d9b = 0;
          continue;
        }
        var _0x2b030b = _0x2f6393.hexToBytes(_0x1c4286[_0x2dbf56]);
        if (_0x2b030b.length < 2) {
          _0x1c416d.putByte(0);
        }
        _0x1c416d.putBytes(_0x2b030b);
      }
      return _0x1c416d.getBytes();
    };
    _0x2f6393.bytesToIP = function (_0x4cdc41) {
      if (_0x4cdc41.length === 4) {
        return _0x2f6393.bytesToIPv4(_0x4cdc41);
      }
      if (_0x4cdc41.length === 16) {
        return _0x2f6393.bytesToIPv6(_0x4cdc41);
      }
      return null;
    };
    _0x2f6393.bytesToIPv4 = function (_0x3b9e61) {
      if (_0x3b9e61.length !== 4) {
        return null;
      }
      var _0x364375 = [];
      for (var _0x2f5c1f = 0; _0x2f5c1f < _0x3b9e61.length; ++_0x2f5c1f) {
        _0x364375.push(_0x3b9e61.charCodeAt(_0x2f5c1f));
      }
      return _0x364375.join(".");
    };
    _0x2f6393.bytesToIPv6 = function (_0x2c8857) {
      if (_0x2c8857.length !== 16) {
        return null;
      }
      var _0x29c9a2 = [];
      var _0x429470 = [];
      var _0x581363 = 0;
      for (var _0x5e0881 = 0; _0x5e0881 < _0x2c8857.length; _0x5e0881 += 2) {
        var _0x5d1737 = _0x2f6393.bytesToHex(_0x2c8857[_0x5e0881] + _0x2c8857[_0x5e0881 + 1]);
        while (_0x5d1737[0] === "0" && _0x5d1737 !== "0") {
          _0x5d1737 = _0x5d1737.substr(1);
        }
        if (_0x5d1737 === "0") {
          var _0x554a58 = _0x429470[_0x429470.length - 1];
          var _0x92b122 = _0x29c9a2.length;
          if (!_0x554a58 || _0x92b122 !== _0x554a58.end + 1) {
            _0x429470.push({
              start: _0x92b122,
              end: _0x92b122
            });
          } else {
            _0x554a58.end = _0x92b122;
            if (_0x554a58.end - _0x554a58.start > _0x429470[_0x581363].end - _0x429470[_0x581363].start) {
              _0x581363 = _0x429470.length - 1;
            }
          }
        }
        _0x29c9a2.push(_0x5d1737);
      }
      if (_0x429470.length > 0) {
        var _0x2eda16 = _0x429470[_0x581363];
        if (_0x2eda16.end - _0x2eda16.start > 0) {
          _0x29c9a2.splice(_0x2eda16.start, _0x2eda16.end - _0x2eda16.start + 1, "");
          if (_0x2eda16.start === 0) {
            _0x29c9a2.unshift("");
          }
          if (_0x2eda16.end === 7) {
            _0x29c9a2.push("");
          }
        }
      }
      return _0x29c9a2.join(":");
    };
    _0x2f6393.estimateCores = function (_0x4018fc, _0x57a73c) {
      if (typeof _0x4018fc === "function") {
        _0x57a73c = _0x4018fc;
        _0x4018fc = {};
      }
      _0x4018fc = _0x4018fc || {};
      if ("cores" in _0x2f6393 && !_0x4018fc.update) {
        return _0x57a73c(null, _0x2f6393.cores);
      }
      if (typeof navigator !== "undefined" && "hardwareConcurrency" in navigator && navigator.hardwareConcurrency > 0) {
        _0x2f6393.cores = navigator.hardwareConcurrency;
        return _0x57a73c(null, _0x2f6393.cores);
      }
      if (typeof Worker === "undefined") {
        _0x2f6393.cores = 1;
        return _0x57a73c(null, _0x2f6393.cores);
      }
      if (typeof Blob === "undefined") {
        _0x2f6393.cores = 2;
        return _0x57a73c(null, _0x2f6393.cores);
      }
      var _0x79585f = URL.createObjectURL(new Blob(["(", function () {
        self.addEventListener("message", function (_0x3b5def) {
          var _0x1c7fc2 = Date.now();
          var _0x56563f = _0x1c7fc2 + 4;
          while (Date.now() < _0x56563f);
          self.postMessage({
            st: _0x1c7fc2,
            et: _0x56563f
          });
        });
      }.toString(), ")()"], {
        type: "application/javascript"
      }));
      _0x4e1a9b([], 5, 16);
      function _0x4e1a9b(_0x20bf3e, _0x439847, _0x2562d7) {
        if (_0x439847 === 0) {
          var _0x2a7166 = Math.floor(_0x20bf3e.reduce(function (_0x292e2e, _0x4fd841) {
            return _0x292e2e + _0x4fd841;
          }, 0) / _0x20bf3e.length);
          _0x2f6393.cores = Math.max(1, _0x2a7166);
          URL.revokeObjectURL(_0x79585f);
          return _0x57a73c(null, _0x2f6393.cores);
        }
        _0x27b4eb(_0x2562d7, function (_0x4ac317, _0x30353c) {
          _0x20bf3e.push(_0x23db41(_0x2562d7, _0x30353c));
          _0x4e1a9b(_0x20bf3e, _0x439847 - 1, _0x2562d7);
        });
      }
      function _0x27b4eb(_0x24b5eb, _0x1743a0) {
        var _0x584942 = [];
        var _0x3bb284 = [];
        for (var _0x269a00 = 0; _0x269a00 < _0x24b5eb; ++_0x269a00) {
          var _0x47cf7f = new Worker(_0x79585f);
          _0x47cf7f.addEventListener("message", function (_0x3f68d1) {
            _0x3bb284.push(_0x3f68d1.data);
            if (_0x3bb284.length === _0x24b5eb) {
              for (var _0x35c104 = 0; _0x35c104 < _0x24b5eb; ++_0x35c104) {
                _0x584942[_0x35c104].terminate();
              }
              _0x1743a0(null, _0x3bb284);
            }
          });
          _0x584942.push(_0x47cf7f);
        }
        for (var _0x269a00 = 0; _0x269a00 < _0x24b5eb; ++_0x269a00) {
          _0x584942[_0x269a00].postMessage(_0x269a00);
        }
      }
      function _0x23db41(_0x5c31ed, _0xd4eb58) {
        var _0x3cf628 = [];
        for (var _0x231725 = 0; _0x231725 < _0x5c31ed; ++_0x231725) {
          var _0x3e2a61 = _0xd4eb58[_0x231725];
          var _0x36d36e = _0x3cf628[_0x231725] = [];
          for (var _0x1c7d83 = 0; _0x1c7d83 < _0x5c31ed; ++_0x1c7d83) {
            if (_0x231725 === _0x1c7d83) {
              continue;
            }
            var _0x55baea = _0xd4eb58[_0x1c7d83];
            if (_0x3e2a61.st > _0x55baea.st && _0x3e2a61.st < _0x55baea.et || _0x55baea.st > _0x3e2a61.st && _0x55baea.st < _0x3e2a61.et) {
              _0x36d36e.push(_0x1c7d83);
            }
          }
        }
        return _0x3cf628.reduce(function (_0x142449, _0x55a141) {
          return Math.max(_0x142449, _0x55a141.length);
        }, 0);
      }
    };
  }
});
var require_cipher = __commonJS({
  "node_modules/node-forge/lib/cipher.js"(_0x385262, _0x851536) {
    var _0x43d1c2 = require_forge();
    require_util();
    _0x851536.exports = _0x43d1c2.cipher = _0x43d1c2.cipher || {};
    _0x43d1c2.cipher.algorithms = _0x43d1c2.cipher.algorithms || {};
    _0x43d1c2.cipher.createCipher = function (_0x220aab, _0x588bdb) {
      var _0x38ef2c = _0x220aab;
      if (typeof _0x38ef2c === "string") {
        _0x38ef2c = _0x43d1c2.cipher.getAlgorithm(_0x38ef2c);
        _0x38ef2c &&= _0x38ef2c();
      }
      if (!_0x38ef2c) {
        throw new Error("Unsupported algorithm: " + _0x220aab);
      }
      return new _0x43d1c2.cipher.BlockCipher({
        algorithm: _0x38ef2c,
        key: _0x588bdb,
        decrypt: false
      });
    };
    _0x43d1c2.cipher.createDecipher = function (_0x1ffa8c, _0x43534e) {
      var _0xdf413f = _0x1ffa8c;
      if (typeof _0xdf413f === "string") {
        _0xdf413f = _0x43d1c2.cipher.getAlgorithm(_0xdf413f);
        _0xdf413f &&= _0xdf413f();
      }
      if (!_0xdf413f) {
        throw new Error("Unsupported algorithm: " + _0x1ffa8c);
      }
      return new _0x43d1c2.cipher.BlockCipher({
        algorithm: _0xdf413f,
        key: _0x43534e,
        decrypt: true
      });
    };
    _0x43d1c2.cipher.registerAlgorithm = function (_0x3d8958, _0x5eb8cb) {
      _0x3d8958 = _0x3d8958.toUpperCase();
      _0x43d1c2.cipher.algorithms[_0x3d8958] = _0x5eb8cb;
    };
    _0x43d1c2.cipher.getAlgorithm = function (_0x2fce3d) {
      _0x2fce3d = _0x2fce3d.toUpperCase();
      if (_0x2fce3d in _0x43d1c2.cipher.algorithms) {
        return _0x43d1c2.cipher.algorithms[_0x2fce3d];
      }
      return null;
    };
    var _0x280d44 = _0x43d1c2.cipher.BlockCipher = function (_0x3dffe9) {
      this.algorithm = _0x3dffe9.algorithm;
      this.mode = this.algorithm.mode;
      this.blockSize = this.mode.blockSize;
      this._finish = false;
      this._input = null;
      this.output = null;
      this._op = _0x3dffe9.decrypt ? this.mode.decrypt : this.mode.encrypt;
      this._decrypt = _0x3dffe9.decrypt;
      this.algorithm.initialize(_0x3dffe9);
    };
    _0x280d44.prototype.start = function (_0x5e2579) {
      _0x5e2579 = _0x5e2579 || {};
      var _0x58e7f4 = {};
      for (var _0x435b45 in _0x5e2579) {
        _0x58e7f4[_0x435b45] = _0x5e2579[_0x435b45];
      }
      _0x58e7f4.decrypt = this._decrypt;
      this._finish = false;
      this._input = _0x43d1c2.util.createBuffer();
      this.output = _0x5e2579.output || _0x43d1c2.util.createBuffer();
      this.mode.start(_0x58e7f4);
    };
    _0x280d44.prototype.update = function (_0x57d111) {
      if (_0x57d111) {
        this._input.putBuffer(_0x57d111);
      }
      while (!this._op.call(this.mode, this._input, this.output, this._finish) && !this._finish) {}
      this._input.compact();
    };
    _0x280d44.prototype.finish = function (_0x5eb1c5) {
      if (_0x5eb1c5 && (this.mode.name === "ECB" || this.mode.name === "CBC")) {
        this.mode.pad = function (_0x9e5b64) {
          return _0x5eb1c5(this.blockSize, _0x9e5b64, false);
        };
        this.mode.unpad = function (_0x1f007f) {
          return _0x5eb1c5(this.blockSize, _0x1f007f, true);
        };
      }
      var _0x5b0ae9 = {
        decrypt: this._decrypt
      };
      _0x5b0ae9.overflow = this._input.length() % this.blockSize;
      if (!this._decrypt && this.mode.pad) {
        if (!this.mode.pad(this._input, _0x5b0ae9)) {
          return false;
        }
      }
      this._finish = true;
      this.update();
      if (this._decrypt && this.mode.unpad) {
        if (!this.mode.unpad(this.output, _0x5b0ae9)) {
          return false;
        }
      }
      if (this.mode.afterFinish) {
        if (!this.mode.afterFinish(this.output, _0x5b0ae9)) {
          return false;
        }
      }
      return true;
    };
  }
});
var require_cipherModes = __commonJS({
  "node_modules/node-forge/lib/cipherModes.js"(_0x39ea36, _0x4d55c5) {
    var _0x375547 = require_forge();
    require_util();
    _0x375547.cipher = _0x375547.cipher || {};
    var _0x2e9df7 = _0x4d55c5.exports = _0x375547.cipher.modes = _0x375547.cipher.modes || {};
    _0x2e9df7.ecb = function (_0x31f0d7) {
      _0x31f0d7 = _0x31f0d7 || {};
      this.name = "ECB";
      this.cipher = _0x31f0d7.cipher;
      this.blockSize = _0x31f0d7.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = new Array(this._ints);
      this._outBlock = new Array(this._ints);
    };
    _0x2e9df7.ecb.prototype.start = function (_0x261ee7) {};
    _0x2e9df7.ecb.prototype.encrypt = function (_0xca3844, _0x18ed0f, _0x27f58d) {
      if (_0xca3844.length() < this.blockSize && (!_0x27f58d || !(_0xca3844.length() > 0))) {
        return true;
      }
      for (var _0x989789 = 0; _0x989789 < this._ints; ++_0x989789) {
        this._inBlock[_0x989789] = _0xca3844.getInt32();
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      for (var _0x989789 = 0; _0x989789 < this._ints; ++_0x989789) {
        _0x18ed0f.putInt32(this._outBlock[_0x989789]);
      }
    };
    _0x2e9df7.ecb.prototype.decrypt = function (_0x43d61e, _0x34da6d, _0x23d1c8) {
      if (_0x43d61e.length() < this.blockSize && (!_0x23d1c8 || !(_0x43d61e.length() > 0))) {
        return true;
      }
      for (var _0xd60432 = 0; _0xd60432 < this._ints; ++_0xd60432) {
        this._inBlock[_0xd60432] = _0x43d61e.getInt32();
      }
      this.cipher.decrypt(this._inBlock, this._outBlock);
      for (var _0xd60432 = 0; _0xd60432 < this._ints; ++_0xd60432) {
        _0x34da6d.putInt32(this._outBlock[_0xd60432]);
      }
    };
    _0x2e9df7.ecb.prototype.pad = function (_0x5e2438, _0x30e97f) {
      var _0x1245fe = _0x5e2438.length() === this.blockSize ? this.blockSize : this.blockSize - _0x5e2438.length();
      _0x5e2438.fillWithByte(_0x1245fe, _0x1245fe);
      return true;
    };
    _0x2e9df7.ecb.prototype.unpad = function (_0x2a71ac, _0x3cbc17) {
      if (_0x3cbc17.overflow > 0) {
        return false;
      }
      var _0x3f3f5a = _0x2a71ac.length();
      var _0x413ede = _0x2a71ac.at(_0x3f3f5a - 1);
      if (_0x413ede > this.blockSize << 2) {
        return false;
      }
      _0x2a71ac.truncate(_0x413ede);
      return true;
    };
    _0x2e9df7.cbc = function (_0x5be60e) {
      _0x5be60e = _0x5be60e || {};
      this.name = "CBC";
      this.cipher = _0x5be60e.cipher;
      this.blockSize = _0x5be60e.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = new Array(this._ints);
      this._outBlock = new Array(this._ints);
    };
    _0x2e9df7.cbc.prototype.start = function (_0x119ac4) {
      if (_0x119ac4.iv === null) {
        if (!this._prev) {
          throw new Error("Invalid IV parameter.");
        }
        this._iv = this._prev.slice(0);
      } else if (!("iv" in _0x119ac4)) {
        throw new Error("Invalid IV parameter.");
      } else {
        this._iv = _0x530f8a(_0x119ac4.iv, this.blockSize);
        this._prev = this._iv.slice(0);
      }
    };
    _0x2e9df7.cbc.prototype.encrypt = function (_0x35e8f5, _0x51491f, _0xe04b7b) {
      if (_0x35e8f5.length() < this.blockSize && (!_0xe04b7b || !(_0x35e8f5.length() > 0))) {
        return true;
      }
      for (var _0x60cf78 = 0; _0x60cf78 < this._ints; ++_0x60cf78) {
        this._inBlock[_0x60cf78] = this._prev[_0x60cf78] ^ _0x35e8f5.getInt32();
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      for (var _0x60cf78 = 0; _0x60cf78 < this._ints; ++_0x60cf78) {
        _0x51491f.putInt32(this._outBlock[_0x60cf78]);
      }
      this._prev = this._outBlock;
    };
    _0x2e9df7.cbc.prototype.decrypt = function (_0x379957, _0x249168, _0x1ca3ea) {
      if (_0x379957.length() < this.blockSize && (!_0x1ca3ea || !(_0x379957.length() > 0))) {
        return true;
      }
      for (var _0x34ad15 = 0; _0x34ad15 < this._ints; ++_0x34ad15) {
        this._inBlock[_0x34ad15] = _0x379957.getInt32();
      }
      this.cipher.decrypt(this._inBlock, this._outBlock);
      for (var _0x34ad15 = 0; _0x34ad15 < this._ints; ++_0x34ad15) {
        _0x249168.putInt32(this._prev[_0x34ad15] ^ this._outBlock[_0x34ad15]);
      }
      this._prev = this._inBlock.slice(0);
    };
    _0x2e9df7.cbc.prototype.pad = function (_0x2b227f, _0xe9000f) {
      var _0x3217e0 = _0x2b227f.length() === this.blockSize ? this.blockSize : this.blockSize - _0x2b227f.length();
      _0x2b227f.fillWithByte(_0x3217e0, _0x3217e0);
      return true;
    };
    _0x2e9df7.cbc.prototype.unpad = function (_0x5a7964, _0x30c6a5) {
      if (_0x30c6a5.overflow > 0) {
        return false;
      }
      var _0x17771d = _0x5a7964.length();
      var _0x45d7e8 = _0x5a7964.at(_0x17771d - 1);
      if (_0x45d7e8 > this.blockSize << 2) {
        return false;
      }
      _0x5a7964.truncate(_0x45d7e8);
      return true;
    };
    _0x2e9df7.cfb = function (_0x406a13) {
      _0x406a13 = _0x406a13 || {};
      this.name = "CFB";
      this.cipher = _0x406a13.cipher;
      this.blockSize = _0x406a13.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = null;
      this._outBlock = new Array(this._ints);
      this._partialBlock = new Array(this._ints);
      this._partialOutput = _0x375547.util.createBuffer();
      this._partialBytes = 0;
    };
    _0x2e9df7.cfb.prototype.start = function (_0x1a0ee4) {
      if (!("iv" in _0x1a0ee4)) {
        throw new Error("Invalid IV parameter.");
      }
      this._iv = _0x530f8a(_0x1a0ee4.iv, this.blockSize);
      this._inBlock = this._iv.slice(0);
      this._partialBytes = 0;
    };
    _0x2e9df7.cfb.prototype.encrypt = function (_0xe1442, _0x2583a1, _0x4d723c) {
      var _0x4318a5 = _0xe1442.length();
      if (_0x4318a5 === 0) {
        return true;
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      if (this._partialBytes === 0 && _0x4318a5 >= this.blockSize) {
        for (var _0x4f8712 = 0; _0x4f8712 < this._ints; ++_0x4f8712) {
          this._inBlock[_0x4f8712] = _0xe1442.getInt32() ^ this._outBlock[_0x4f8712];
          _0x2583a1.putInt32(this._inBlock[_0x4f8712]);
        }
        return;
      }
      var _0x3f5763 = (this.blockSize - _0x4318a5) % this.blockSize;
      if (_0x3f5763 > 0) {
        _0x3f5763 = this.blockSize - _0x3f5763;
      }
      this._partialOutput.clear();
      for (var _0x4f8712 = 0; _0x4f8712 < this._ints; ++_0x4f8712) {
        this._partialBlock[_0x4f8712] = _0xe1442.getInt32() ^ this._outBlock[_0x4f8712];
        this._partialOutput.putInt32(this._partialBlock[_0x4f8712]);
      }
      if (_0x3f5763 > 0) {
        _0xe1442.read -= this.blockSize;
      } else {
        for (var _0x4f8712 = 0; _0x4f8712 < this._ints; ++_0x4f8712) {
          this._inBlock[_0x4f8712] = this._partialBlock[_0x4f8712];
        }
      }
      if (this._partialBytes > 0) {
        this._partialOutput.getBytes(this._partialBytes);
      }
      if (_0x3f5763 > 0 && !_0x4d723c) {
        _0x2583a1.putBytes(this._partialOutput.getBytes(_0x3f5763 - this._partialBytes));
        this._partialBytes = _0x3f5763;
        return true;
      }
      _0x2583a1.putBytes(this._partialOutput.getBytes(_0x4318a5 - this._partialBytes));
      this._partialBytes = 0;
    };
    _0x2e9df7.cfb.prototype.decrypt = function (_0x457ff1, _0x5308fd, _0x5bf613) {
      var _0x2c2f35 = _0x457ff1.length();
      if (_0x2c2f35 === 0) {
        return true;
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      if (this._partialBytes === 0 && _0x2c2f35 >= this.blockSize) {
        for (var _0x11b2cd = 0; _0x11b2cd < this._ints; ++_0x11b2cd) {
          this._inBlock[_0x11b2cd] = _0x457ff1.getInt32();
          _0x5308fd.putInt32(this._inBlock[_0x11b2cd] ^ this._outBlock[_0x11b2cd]);
        }
        return;
      }
      var _0x5b304d = (this.blockSize - _0x2c2f35) % this.blockSize;
      if (_0x5b304d > 0) {
        _0x5b304d = this.blockSize - _0x5b304d;
      }
      this._partialOutput.clear();
      for (var _0x11b2cd = 0; _0x11b2cd < this._ints; ++_0x11b2cd) {
        this._partialBlock[_0x11b2cd] = _0x457ff1.getInt32();
        this._partialOutput.putInt32(this._partialBlock[_0x11b2cd] ^ this._outBlock[_0x11b2cd]);
      }
      if (_0x5b304d > 0) {
        _0x457ff1.read -= this.blockSize;
      } else {
        for (var _0x11b2cd = 0; _0x11b2cd < this._ints; ++_0x11b2cd) {
          this._inBlock[_0x11b2cd] = this._partialBlock[_0x11b2cd];
        }
      }
      if (this._partialBytes > 0) {
        this._partialOutput.getBytes(this._partialBytes);
      }
      if (_0x5b304d > 0 && !_0x5bf613) {
        _0x5308fd.putBytes(this._partialOutput.getBytes(_0x5b304d - this._partialBytes));
        this._partialBytes = _0x5b304d;
        return true;
      }
      _0x5308fd.putBytes(this._partialOutput.getBytes(_0x2c2f35 - this._partialBytes));
      this._partialBytes = 0;
    };
    _0x2e9df7.ofb = function (_0x11df67) {
      _0x11df67 = _0x11df67 || {};
      this.name = "OFB";
      this.cipher = _0x11df67.cipher;
      this.blockSize = _0x11df67.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = null;
      this._outBlock = new Array(this._ints);
      this._partialOutput = _0x375547.util.createBuffer();
      this._partialBytes = 0;
    };
    _0x2e9df7.ofb.prototype.start = function (_0x3c83bb) {
      if (!("iv" in _0x3c83bb)) {
        throw new Error("Invalid IV parameter.");
      }
      this._iv = _0x530f8a(_0x3c83bb.iv, this.blockSize);
      this._inBlock = this._iv.slice(0);
      this._partialBytes = 0;
    };
    _0x2e9df7.ofb.prototype.encrypt = function (_0x51f669, _0x5b998d, _0x4d6dee) {
      var _0x157720 = _0x51f669.length();
      if (_0x51f669.length() === 0) {
        return true;
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      if (this._partialBytes === 0 && _0x157720 >= this.blockSize) {
        for (var _0x4ca85a = 0; _0x4ca85a < this._ints; ++_0x4ca85a) {
          _0x5b998d.putInt32(_0x51f669.getInt32() ^ this._outBlock[_0x4ca85a]);
          this._inBlock[_0x4ca85a] = this._outBlock[_0x4ca85a];
        }
        return;
      }
      var _0x37423b = (this.blockSize - _0x157720) % this.blockSize;
      if (_0x37423b > 0) {
        _0x37423b = this.blockSize - _0x37423b;
      }
      this._partialOutput.clear();
      for (var _0x4ca85a = 0; _0x4ca85a < this._ints; ++_0x4ca85a) {
        this._partialOutput.putInt32(_0x51f669.getInt32() ^ this._outBlock[_0x4ca85a]);
      }
      if (_0x37423b > 0) {
        _0x51f669.read -= this.blockSize;
      } else {
        for (var _0x4ca85a = 0; _0x4ca85a < this._ints; ++_0x4ca85a) {
          this._inBlock[_0x4ca85a] = this._outBlock[_0x4ca85a];
        }
      }
      if (this._partialBytes > 0) {
        this._partialOutput.getBytes(this._partialBytes);
      }
      if (_0x37423b > 0 && !_0x4d6dee) {
        _0x5b998d.putBytes(this._partialOutput.getBytes(_0x37423b - this._partialBytes));
        this._partialBytes = _0x37423b;
        return true;
      }
      _0x5b998d.putBytes(this._partialOutput.getBytes(_0x157720 - this._partialBytes));
      this._partialBytes = 0;
    };
    _0x2e9df7.ofb.prototype.decrypt = _0x2e9df7.ofb.prototype.encrypt;
    _0x2e9df7.ctr = function (_0x149735) {
      _0x149735 = _0x149735 || {};
      this.name = "CTR";
      this.cipher = _0x149735.cipher;
      this.blockSize = _0x149735.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = null;
      this._outBlock = new Array(this._ints);
      this._partialOutput = _0x375547.util.createBuffer();
      this._partialBytes = 0;
    };
    _0x2e9df7.ctr.prototype.start = function (_0x1ac879) {
      if (!("iv" in _0x1ac879)) {
        throw new Error("Invalid IV parameter.");
      }
      this._iv = _0x530f8a(_0x1ac879.iv, this.blockSize);
      this._inBlock = this._iv.slice(0);
      this._partialBytes = 0;
    };
    _0x2e9df7.ctr.prototype.encrypt = function (_0x5edf52, _0x357f58, _0x3e3635) {
      var _0x3962ff = _0x5edf52.length();
      if (_0x3962ff === 0) {
        return true;
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      if (this._partialBytes === 0 && _0x3962ff >= this.blockSize) {
        for (var _0x1b585f = 0; _0x1b585f < this._ints; ++_0x1b585f) {
          _0x357f58.putInt32(_0x5edf52.getInt32() ^ this._outBlock[_0x1b585f]);
        }
      } else {
        var _0x49f603 = (this.blockSize - _0x3962ff) % this.blockSize;
        if (_0x49f603 > 0) {
          _0x49f603 = this.blockSize - _0x49f603;
        }
        this._partialOutput.clear();
        for (var _0x1b585f = 0; _0x1b585f < this._ints; ++_0x1b585f) {
          this._partialOutput.putInt32(_0x5edf52.getInt32() ^ this._outBlock[_0x1b585f]);
        }
        if (_0x49f603 > 0) {
          _0x5edf52.read -= this.blockSize;
        }
        if (this._partialBytes > 0) {
          this._partialOutput.getBytes(this._partialBytes);
        }
        if (_0x49f603 > 0 && !_0x3e3635) {
          _0x357f58.putBytes(this._partialOutput.getBytes(_0x49f603 - this._partialBytes));
          this._partialBytes = _0x49f603;
          return true;
        }
        _0x357f58.putBytes(this._partialOutput.getBytes(_0x3962ff - this._partialBytes));
        this._partialBytes = 0;
      }
      _0x1dd6d1(this._inBlock);
    };
    _0x2e9df7.ctr.prototype.decrypt = _0x2e9df7.ctr.prototype.encrypt;
    _0x2e9df7.gcm = function (_0x1b967d) {
      _0x1b967d = _0x1b967d || {};
      this.name = "GCM";
      this.cipher = _0x1b967d.cipher;
      this.blockSize = _0x1b967d.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = new Array(this._ints);
      this._outBlock = new Array(this._ints);
      this._partialOutput = _0x375547.util.createBuffer();
      this._partialBytes = 0;
      this._R = 3774873600;
    };
    _0x2e9df7.gcm.prototype.start = function (_0x3f314e) {
      if (!("iv" in _0x3f314e)) {
        throw new Error("Invalid IV parameter.");
      }
      var _0x6b366f = _0x375547.util.createBuffer(_0x3f314e.iv);
      this._cipherLength = 0;
      var _0x175433;
      if ("additionalData" in _0x3f314e) {
        _0x175433 = _0x375547.util.createBuffer(_0x3f314e.additionalData);
      } else {
        _0x175433 = _0x375547.util.createBuffer();
      }
      if ("tagLength" in _0x3f314e) {
        this._tagLength = _0x3f314e.tagLength;
      } else {
        this._tagLength = 128;
      }
      this._tag = null;
      if (_0x3f314e.decrypt) {
        this._tag = _0x375547.util.createBuffer(_0x3f314e.tag).getBytes();
        if (this._tag.length !== this._tagLength / 8) {
          throw new Error("Authentication tag does not match tag length.");
        }
      }
      this._hashBlock = new Array(this._ints);
      this.tag = null;
      this._hashSubkey = new Array(this._ints);
      this.cipher.encrypt([0, 0, 0, 0], this._hashSubkey);
      this.componentBits = 4;
      this._m = this.generateHashTable(this._hashSubkey, this.componentBits);
      var _0x24b6b0 = _0x6b366f.length();
      if (_0x24b6b0 === 12) {
        this._j0 = [_0x6b366f.getInt32(), _0x6b366f.getInt32(), _0x6b366f.getInt32(), 1];
      } else {
        this._j0 = [0, 0, 0, 0];
        while (_0x6b366f.length() > 0) {
          this._j0 = this.ghash(this._hashSubkey, this._j0, [_0x6b366f.getInt32(), _0x6b366f.getInt32(), _0x6b366f.getInt32(), _0x6b366f.getInt32()]);
        }
        this._j0 = this.ghash(this._hashSubkey, this._j0, [0, 0].concat(_0x20db13(_0x24b6b0 * 8)));
      }
      this._inBlock = this._j0.slice(0);
      _0x1dd6d1(this._inBlock);
      this._partialBytes = 0;
      _0x175433 = _0x375547.util.createBuffer(_0x175433);
      this._aDataLength = _0x20db13(_0x175433.length() * 8);
      var _0x5e5527 = _0x175433.length() % this.blockSize;
      if (_0x5e5527) {
        _0x175433.fillWithByte(0, this.blockSize - _0x5e5527);
      }
      this._s = [0, 0, 0, 0];
      while (_0x175433.length() > 0) {
        this._s = this.ghash(this._hashSubkey, this._s, [_0x175433.getInt32(), _0x175433.getInt32(), _0x175433.getInt32(), _0x175433.getInt32()]);
      }
    };
    _0x2e9df7.gcm.prototype.encrypt = function (_0x3feb0c, _0x425b64, _0x279023) {
      var _0x19ed72 = _0x3feb0c.length();
      if (_0x19ed72 === 0) {
        return true;
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      if (this._partialBytes === 0 && _0x19ed72 >= this.blockSize) {
        for (var _0x1e7993 = 0; _0x1e7993 < this._ints; ++_0x1e7993) {
          _0x425b64.putInt32(this._outBlock[_0x1e7993] ^= _0x3feb0c.getInt32());
        }
        this._cipherLength += this.blockSize;
      } else {
        var _0x2300d7 = (this.blockSize - _0x19ed72) % this.blockSize;
        if (_0x2300d7 > 0) {
          _0x2300d7 = this.blockSize - _0x2300d7;
        }
        this._partialOutput.clear();
        for (var _0x1e7993 = 0; _0x1e7993 < this._ints; ++_0x1e7993) {
          this._partialOutput.putInt32(_0x3feb0c.getInt32() ^ this._outBlock[_0x1e7993]);
        }
        if (_0x2300d7 <= 0 || _0x279023) {
          if (_0x279023) {
            var _0x5b14ad = _0x19ed72 % this.blockSize;
            this._cipherLength += _0x5b14ad;
            this._partialOutput.truncate(this.blockSize - _0x5b14ad);
          } else {
            this._cipherLength += this.blockSize;
          }
          for (var _0x1e7993 = 0; _0x1e7993 < this._ints; ++_0x1e7993) {
            this._outBlock[_0x1e7993] = this._partialOutput.getInt32();
          }
          this._partialOutput.read -= this.blockSize;
        }
        if (this._partialBytes > 0) {
          this._partialOutput.getBytes(this._partialBytes);
        }
        if (_0x2300d7 > 0 && !_0x279023) {
          _0x3feb0c.read -= this.blockSize;
          _0x425b64.putBytes(this._partialOutput.getBytes(_0x2300d7 - this._partialBytes));
          this._partialBytes = _0x2300d7;
          return true;
        }
        _0x425b64.putBytes(this._partialOutput.getBytes(_0x19ed72 - this._partialBytes));
        this._partialBytes = 0;
      }
      this._s = this.ghash(this._hashSubkey, this._s, this._outBlock);
      _0x1dd6d1(this._inBlock);
    };
    _0x2e9df7.gcm.prototype.decrypt = function (_0x2587ed, _0x339f01, _0x175dd4) {
      var _0x3eae99 = _0x2587ed.length();
      if (_0x3eae99 < this.blockSize && (!_0x175dd4 || !(_0x3eae99 > 0))) {
        return true;
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      _0x1dd6d1(this._inBlock);
      this._hashBlock[0] = _0x2587ed.getInt32();
      this._hashBlock[1] = _0x2587ed.getInt32();
      this._hashBlock[2] = _0x2587ed.getInt32();
      this._hashBlock[3] = _0x2587ed.getInt32();
      this._s = this.ghash(this._hashSubkey, this._s, this._hashBlock);
      for (var _0x401d21 = 0; _0x401d21 < this._ints; ++_0x401d21) {
        _0x339f01.putInt32(this._outBlock[_0x401d21] ^ this._hashBlock[_0x401d21]);
      }
      if (_0x3eae99 < this.blockSize) {
        this._cipherLength += _0x3eae99 % this.blockSize;
      } else {
        this._cipherLength += this.blockSize;
      }
    };
    _0x2e9df7.gcm.prototype.afterFinish = function (_0x49ad34, _0x843c04) {
      var _0x356b8a = true;
      if (_0x843c04.decrypt && _0x843c04.overflow) {
        _0x49ad34.truncate(this.blockSize - _0x843c04.overflow);
      }
      this.tag = _0x375547.util.createBuffer();
      var _0x11719e = this._aDataLength.concat(_0x20db13(this._cipherLength * 8));
      this._s = this.ghash(this._hashSubkey, this._s, _0x11719e);
      var _0x582c04 = [];
      this.cipher.encrypt(this._j0, _0x582c04);
      for (var _0x4d78d8 = 0; _0x4d78d8 < this._ints; ++_0x4d78d8) {
        this.tag.putInt32(this._s[_0x4d78d8] ^ _0x582c04[_0x4d78d8]);
      }
      this.tag.truncate(this.tag.length() % (this._tagLength / 8));
      if (_0x843c04.decrypt && this.tag.bytes() !== this._tag) {
        _0x356b8a = false;
      }
      return _0x356b8a;
    };
    _0x2e9df7.gcm.prototype.multiply = function (_0x2d5771, _0x492602) {
      var _0x48f81c = [0, 0, 0, 0];
      var _0x5a8fa9 = _0x492602.slice(0);
      for (var _0x11b910 = 0; _0x11b910 < 128; ++_0x11b910) {
        var _0x512ec2 = _0x2d5771[_0x11b910 / 32 | 0] & 1 << 31 - _0x11b910 % 32;
        if (_0x512ec2) {
          _0x48f81c[0] ^= _0x5a8fa9[0];
          _0x48f81c[1] ^= _0x5a8fa9[1];
          _0x48f81c[2] ^= _0x5a8fa9[2];
          _0x48f81c[3] ^= _0x5a8fa9[3];
        }
        this.pow(_0x5a8fa9, _0x5a8fa9);
      }
      return _0x48f81c;
    };
    _0x2e9df7.gcm.prototype.pow = function (_0x3bae02, _0x288298) {
      var _0x304da0 = _0x3bae02[3] & 1;
      for (var _0x58004f = 3; _0x58004f > 0; --_0x58004f) {
        _0x288298[_0x58004f] = _0x3bae02[_0x58004f] >>> 1 | (_0x3bae02[_0x58004f - 1] & 1) << 31;
      }
      _0x288298[0] = _0x3bae02[0] >>> 1;
      if (_0x304da0) {
        _0x288298[0] ^= this._R;
      }
    };
    _0x2e9df7.gcm.prototype.tableMultiply = function (_0x329a70) {
      var _0x943c24 = [0, 0, 0, 0];
      for (var _0x364222 = 0; _0x364222 < 32; ++_0x364222) {
        var _0x2b825b = _0x364222 / 8 | 0;
        var _0x2b6c9a = _0x329a70[_0x2b825b] >>> (7 - _0x364222 % 8) * 4 & 15;
        var _0x56b29f = this._m[_0x364222][_0x2b6c9a];
        _0x943c24[0] ^= _0x56b29f[0];
        _0x943c24[1] ^= _0x56b29f[1];
        _0x943c24[2] ^= _0x56b29f[2];
        _0x943c24[3] ^= _0x56b29f[3];
      }
      return _0x943c24;
    };
    _0x2e9df7.gcm.prototype.ghash = function (_0x468f44, _0x41b9e9, _0x47bd7f) {
      _0x41b9e9[0] ^= _0x47bd7f[0];
      _0x41b9e9[1] ^= _0x47bd7f[1];
      _0x41b9e9[2] ^= _0x47bd7f[2];
      _0x41b9e9[3] ^= _0x47bd7f[3];
      return this.tableMultiply(_0x41b9e9);
    };
    _0x2e9df7.gcm.prototype.generateHashTable = function (_0x5c1549, _0x2053a8) {
      var _0xf14788 = 8 / _0x2053a8;
      var _0x294e27 = _0xf14788 * 4;
      var _0x360b25 = _0xf14788 * 16;
      var _0x4b25a9 = new Array(_0x360b25);
      for (var _0x38f344 = 0; _0x38f344 < _0x360b25; ++_0x38f344) {
        var _0x4fbfa9 = [0, 0, 0, 0];
        var _0xc5e7eb = _0x38f344 / _0x294e27 | 0;
        var _0x152690 = (_0x294e27 - 1 - _0x38f344 % _0x294e27) * _0x2053a8;
        _0x4fbfa9[_0xc5e7eb] = 1 << _0x2053a8 - 1 << _0x152690;
        _0x4b25a9[_0x38f344] = this.generateSubHashTable(this.multiply(_0x4fbfa9, _0x5c1549), _0x2053a8);
      }
      return _0x4b25a9;
    };
    _0x2e9df7.gcm.prototype.generateSubHashTable = function (_0x5b785b, _0x20ab96) {
      var _0x1c0243 = 1 << _0x20ab96;
      var _0x1e7e7e = _0x1c0243 >>> 1;
      var _0x29ae8c = new Array(_0x1c0243);
      _0x29ae8c[_0x1e7e7e] = _0x5b785b.slice(0);
      var _0x83cec3 = _0x1e7e7e >>> 1;
      while (_0x83cec3 > 0) {
        this.pow(_0x29ae8c[_0x83cec3 * 2], _0x29ae8c[_0x83cec3] = []);
        _0x83cec3 >>= 1;
      }
      _0x83cec3 = 2;
      while (_0x83cec3 < _0x1e7e7e) {
        for (var _0x50d1cc = 1; _0x50d1cc < _0x83cec3; ++_0x50d1cc) {
          var _0x5bbee8 = _0x29ae8c[_0x83cec3];
          var _0x48316a = _0x29ae8c[_0x50d1cc];
          _0x29ae8c[_0x83cec3 + _0x50d1cc] = [_0x5bbee8[0] ^ _0x48316a[0], _0x5bbee8[1] ^ _0x48316a[1], _0x5bbee8[2] ^ _0x48316a[2], _0x5bbee8[3] ^ _0x48316a[3]];
        }
        _0x83cec3 *= 2;
      }
      _0x29ae8c[0] = [0, 0, 0, 0];
      for (_0x83cec3 = _0x1e7e7e + 1; _0x83cec3 < _0x1c0243; ++_0x83cec3) {
        var _0x4daa5a = _0x29ae8c[_0x83cec3 ^ _0x1e7e7e];
        _0x29ae8c[_0x83cec3] = [_0x5b785b[0] ^ _0x4daa5a[0], _0x5b785b[1] ^ _0x4daa5a[1], _0x5b785b[2] ^ _0x4daa5a[2], _0x5b785b[3] ^ _0x4daa5a[3]];
      }
      return _0x29ae8c;
    };
    function _0x530f8a(_0x589fea, _0x2d5386) {
      if (typeof _0x589fea === "string") {
        _0x589fea = _0x375547.util.createBuffer(_0x589fea);
      }
      if (_0x375547.util.isArray(_0x589fea) && _0x589fea.length > 4) {
        var _0x5d1e88 = _0x589fea;
        _0x589fea = _0x375547.util.createBuffer();
        for (var _0x342b17 = 0; _0x342b17 < _0x5d1e88.length; ++_0x342b17) {
          _0x589fea.putByte(_0x5d1e88[_0x342b17]);
        }
      }
      if (_0x589fea.length() < _0x2d5386) {
        throw new Error("Invalid IV length; got " + _0x589fea.length() + " bytes and expected " + _0x2d5386 + " bytes.");
      }
      if (!_0x375547.util.isArray(_0x589fea)) {
        var _0x2707da = [];
        var _0x246b80 = _0x2d5386 / 4;
        for (var _0x342b17 = 0; _0x342b17 < _0x246b80; ++_0x342b17) {
          _0x2707da.push(_0x589fea.getInt32());
        }
        _0x589fea = _0x2707da;
      }
      return _0x589fea;
    }
    function _0x1dd6d1(_0x1e703a) {
      _0x1e703a[_0x1e703a.length - 1] = _0x1e703a[_0x1e703a.length - 1] + 1 & -1;
    }
    function _0x20db13(_0x182469) {
      return [_0x182469 / 4294967296 | 0, _0x182469 & -1];
    }
  }
});
var require_aes = __commonJS({
  "node_modules/node-forge/lib/aes.js"(_0x373f64, _0x5b035e) {
    var _0x41cbd7 = require_forge();
    require_cipher();
    require_cipherModes();
    require_util();
    _0x5b035e.exports = _0x41cbd7.aes = _0x41cbd7.aes || {};
    _0x41cbd7.aes.startEncrypting = function (_0x2f7684, _0x3dd8a7, _0x2d96e2, _0x57774c) {
      var _0x1fe03b = _0x3b609c({
        key: _0x2f7684,
        output: _0x2d96e2,
        decrypt: false,
        mode: _0x57774c
      });
      _0x1fe03b.start(_0x3dd8a7);
      return _0x1fe03b;
    };
    _0x41cbd7.aes.createEncryptionCipher = function (_0x19e597, _0x2ef825) {
      return _0x3b609c({
        key: _0x19e597,
        output: null,
        decrypt: false,
        mode: _0x2ef825
      });
    };
    _0x41cbd7.aes.startDecrypting = function (_0x5adecf, _0x57791d, _0x51f7da, _0x15ce07) {
      var _0xed5f49 = _0x3b609c({
        key: _0x5adecf,
        output: _0x51f7da,
        decrypt: true,
        mode: _0x15ce07
      });
      _0xed5f49.start(_0x57791d);
      return _0xed5f49;
    };
    _0x41cbd7.aes.createDecryptionCipher = function (_0xff5c2f, _0x2a573d) {
      return _0x3b609c({
        key: _0xff5c2f,
        output: null,
        decrypt: true,
        mode: _0x2a573d
      });
    };
    _0x41cbd7.aes.Algorithm = function (_0x7e0ad6, _0x2074c3) {
      if (!_0x230d09) {
        _0x4a5166();
      }
      var _0x2e2f99 = this;
      _0x2e2f99.name = _0x7e0ad6;
      _0x2e2f99.mode = new _0x2074c3({
        blockSize: 16,
        cipher: {
          encrypt: function (_0x309771, _0x249eb8) {
            return _0xd9016a(_0x2e2f99._w, _0x309771, _0x249eb8, false);
          },
          decrypt: function (_0x35b84b, _0x1d1fe1) {
            return _0xd9016a(_0x2e2f99._w, _0x35b84b, _0x1d1fe1, true);
          }
        }
      });
      _0x2e2f99._init = false;
    };
    _0x41cbd7.aes.Algorithm.prototype.initialize = function (_0x202a18) {
      if (this._init) {
        return;
      }
      var _0x5f282c = _0x202a18.key;
      var _0x24e569;
      if (typeof _0x5f282c === "string" && (_0x5f282c.length === 16 || _0x5f282c.length === 24 || _0x5f282c.length === 32)) {
        _0x5f282c = _0x41cbd7.util.createBuffer(_0x5f282c);
      } else if (_0x41cbd7.util.isArray(_0x5f282c) && (_0x5f282c.length === 16 || _0x5f282c.length === 24 || _0x5f282c.length === 32)) {
        _0x24e569 = _0x5f282c;
        _0x5f282c = _0x41cbd7.util.createBuffer();
        for (var _0x38223c = 0; _0x38223c < _0x24e569.length; ++_0x38223c) {
          _0x5f282c.putByte(_0x24e569[_0x38223c]);
        }
      }
      if (!_0x41cbd7.util.isArray(_0x5f282c)) {
        _0x24e569 = _0x5f282c;
        _0x5f282c = [];
        var _0xb7bad6 = _0x24e569.length();
        if (_0xb7bad6 === 16 || _0xb7bad6 === 24 || _0xb7bad6 === 32) {
          _0xb7bad6 = _0xb7bad6 >>> 2;
          for (var _0x38223c = 0; _0x38223c < _0xb7bad6; ++_0x38223c) {
            _0x5f282c.push(_0x24e569.getInt32());
          }
        }
      }
      if (!_0x41cbd7.util.isArray(_0x5f282c) || _0x5f282c.length !== 4 && _0x5f282c.length !== 6 && _0x5f282c.length !== 8) {
        throw new Error("Invalid key parameter.");
      }
      var _0x1d4450 = this.mode.name;
      var _0x34534e = ["CFB", "OFB", "CTR", "GCM"].indexOf(_0x1d4450) !== -1;
      this._w = _0x4affb5(_0x5f282c, _0x202a18.decrypt && !_0x34534e);
      this._init = true;
    };
    _0x41cbd7.aes._expandKey = function (_0x454a6d, _0xa5cd8b) {
      if (!_0x230d09) {
        _0x4a5166();
      }
      return _0x4affb5(_0x454a6d, _0xa5cd8b);
    };
    _0x41cbd7.aes._updateBlock = _0xd9016a;
    _0x23bb70("AES-ECB", _0x41cbd7.cipher.modes.ecb);
    _0x23bb70("AES-CBC", _0x41cbd7.cipher.modes.cbc);
    _0x23bb70("AES-CFB", _0x41cbd7.cipher.modes.cfb);
    _0x23bb70("AES-OFB", _0x41cbd7.cipher.modes.ofb);
    _0x23bb70("AES-CTR", _0x41cbd7.cipher.modes.ctr);
    _0x23bb70("AES-GCM", _0x41cbd7.cipher.modes.gcm);
    function _0x23bb70(_0x5b22c2, _0x365e43) {
      function _0x29905f() {
        return new _0x41cbd7.aes.Algorithm(_0x5b22c2, _0x365e43);
      }
      _0x41cbd7.cipher.registerAlgorithm(_0x5b22c2, _0x29905f);
    }
    var _0x230d09 = false;
    var _0x598480 = 4;
    var _0x24a995;
    var _0x5b8bf6;
    var _0x1285b3;
    var _0x2f8db0;
    var _0x5687c6;
    function _0x4a5166() {
      _0x230d09 = true;
      _0x1285b3 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
      var _0x3de730 = new Array(256);
      for (var _0x390b15 = 0; _0x390b15 < 128; ++_0x390b15) {
        _0x3de730[_0x390b15] = _0x390b15 << 1;
        _0x3de730[_0x390b15 + 128] = _0x390b15 + 128 << 1 ^ 283;
      }
      _0x24a995 = new Array(256);
      _0x5b8bf6 = new Array(256);
      _0x2f8db0 = new Array(4);
      _0x5687c6 = new Array(4);
      for (var _0x390b15 = 0; _0x390b15 < 4; ++_0x390b15) {
        _0x2f8db0[_0x390b15] = new Array(256);
        _0x5687c6[_0x390b15] = new Array(256);
      }
      var _0xdb0dfe = 0;
      var _0x51589d = 0;
      var _0x9f2d85;
      var _0x45bd42;
      var _0x49b6fd;
      var _0x40bb7b;
      var _0x1d8803;
      var _0x897e2a;
      var _0x5c20c4;
      for (var _0x390b15 = 0; _0x390b15 < 256; ++_0x390b15) {
        _0x40bb7b = _0x51589d ^ _0x51589d << 1 ^ _0x51589d << 2 ^ _0x51589d << 3 ^ _0x51589d << 4;
        _0x40bb7b = _0x40bb7b >> 8 ^ _0x40bb7b & 255 ^ 99;
        _0x24a995[_0xdb0dfe] = _0x40bb7b;
        _0x5b8bf6[_0x40bb7b] = _0xdb0dfe;
        _0x1d8803 = _0x3de730[_0x40bb7b];
        _0x9f2d85 = _0x3de730[_0xdb0dfe];
        _0x45bd42 = _0x3de730[_0x9f2d85];
        _0x49b6fd = _0x3de730[_0x45bd42];
        _0x897e2a = _0x1d8803 << 24 ^ _0x40bb7b << 16 ^ _0x40bb7b << 8 ^ (_0x40bb7b ^ _0x1d8803);
        _0x5c20c4 = (_0x9f2d85 ^ _0x45bd42 ^ _0x49b6fd) << 24 ^ (_0xdb0dfe ^ _0x49b6fd) << 16 ^ (_0xdb0dfe ^ _0x45bd42 ^ _0x49b6fd) << 8 ^ (_0xdb0dfe ^ _0x9f2d85 ^ _0x49b6fd);
        for (var _0x2a53ff = 0; _0x2a53ff < 4; ++_0x2a53ff) {
          _0x2f8db0[_0x2a53ff][_0xdb0dfe] = _0x897e2a;
          _0x5687c6[_0x2a53ff][_0x40bb7b] = _0x5c20c4;
          _0x897e2a = _0x897e2a << 24 | _0x897e2a >>> 8;
          _0x5c20c4 = _0x5c20c4 << 24 | _0x5c20c4 >>> 8;
        }
        if (_0xdb0dfe === 0) {
          _0xdb0dfe = _0x51589d = 1;
        } else {
          _0xdb0dfe = _0x9f2d85 ^ _0x3de730[_0x3de730[_0x3de730[_0x9f2d85 ^ _0x49b6fd]]];
          _0x51589d ^= _0x3de730[_0x3de730[_0x51589d]];
        }
      }
    }
    function _0x4affb5(_0x4e4986, _0x9ef3db) {
      var _0x11f2d1 = _0x4e4986.slice(0);
      var _0xdb8ca;
      var _0x9b2eb3 = 1;
      var _0x3525d2 = _0x11f2d1.length;
      var _0x16e21b = _0x3525d2 + 6 + 1;
      var _0x5c609c = _0x598480 * _0x16e21b;
      for (var _0x1ecb36 = _0x3525d2; _0x1ecb36 < _0x5c609c; ++_0x1ecb36) {
        _0xdb8ca = _0x11f2d1[_0x1ecb36 - 1];
        if (_0x1ecb36 % _0x3525d2 === 0) {
          _0xdb8ca = _0x24a995[_0xdb8ca >>> 16 & 255] << 24 ^ _0x24a995[_0xdb8ca >>> 8 & 255] << 16 ^ _0x24a995[_0xdb8ca & 255] << 8 ^ _0x24a995[_0xdb8ca >>> 24] ^ _0x1285b3[_0x9b2eb3] << 24;
          _0x9b2eb3++;
        } else if (_0x3525d2 > 6 && _0x1ecb36 % _0x3525d2 === 4) {
          _0xdb8ca = _0x24a995[_0xdb8ca >>> 24] << 24 ^ _0x24a995[_0xdb8ca >>> 16 & 255] << 16 ^ _0x24a995[_0xdb8ca >>> 8 & 255] << 8 ^ _0x24a995[_0xdb8ca & 255];
        }
        _0x11f2d1[_0x1ecb36] = _0x11f2d1[_0x1ecb36 - _0x3525d2] ^ _0xdb8ca;
      }
      if (_0x9ef3db) {
        var _0x56c7f4;
        var _0x41814e = _0x5687c6[0];
        var _0x2046f7 = _0x5687c6[1];
        var _0x1903ab = _0x5687c6[2];
        var _0x1750d2 = _0x5687c6[3];
        var _0x8653e3 = _0x11f2d1.slice(0);
        _0x5c609c = _0x11f2d1.length;
        for (var _0x1ecb36 = 0, _0x525848 = _0x5c609c - _0x598480; _0x1ecb36 < _0x5c609c; _0x1ecb36 += _0x598480, _0x525848 -= _0x598480) {
          if (_0x1ecb36 === 0 || _0x1ecb36 === _0x5c609c - _0x598480) {
            _0x8653e3[_0x1ecb36] = _0x11f2d1[_0x525848];
            _0x8653e3[_0x1ecb36 + 1] = _0x11f2d1[_0x525848 + 3];
            _0x8653e3[_0x1ecb36 + 2] = _0x11f2d1[_0x525848 + 2];
            _0x8653e3[_0x1ecb36 + 3] = _0x11f2d1[_0x525848 + 1];
          } else {
            for (var _0x3319b0 = 0; _0x3319b0 < _0x598480; ++_0x3319b0) {
              _0x56c7f4 = _0x11f2d1[_0x525848 + _0x3319b0];
              _0x8653e3[_0x1ecb36 + (-_0x3319b0 & 3)] = _0x41814e[_0x24a995[_0x56c7f4 >>> 24]] ^ _0x2046f7[_0x24a995[_0x56c7f4 >>> 16 & 255]] ^ _0x1903ab[_0x24a995[_0x56c7f4 >>> 8 & 255]] ^ _0x1750d2[_0x24a995[_0x56c7f4 & 255]];
            }
          }
        }
        _0x11f2d1 = _0x8653e3;
      }
      return _0x11f2d1;
    }
    function _0xd9016a(_0xd0c6fd, _0x10887b, _0x69027, _0x266f91) {
      var _0x402100 = _0xd0c6fd.length / 4 - 1;
      var _0x4f379a;
      var _0x229fff;
      var _0x5a44bd;
      var _0x11c7dc;
      var _0x32e594;
      if (_0x266f91) {
        _0x4f379a = _0x5687c6[0];
        _0x229fff = _0x5687c6[1];
        _0x5a44bd = _0x5687c6[2];
        _0x11c7dc = _0x5687c6[3];
        _0x32e594 = _0x5b8bf6;
      } else {
        _0x4f379a = _0x2f8db0[0];
        _0x229fff = _0x2f8db0[1];
        _0x5a44bd = _0x2f8db0[2];
        _0x11c7dc = _0x2f8db0[3];
        _0x32e594 = _0x24a995;
      }
      var _0xfb6091;
      var _0xe5b513;
      var _0x1c9df3;
      var _0xfd9da1;
      var _0x1947ba;
      var _0x24b1a5;
      var _0x3ccb93;
      _0xfb6091 = _0x10887b[0] ^ _0xd0c6fd[0];
      _0xe5b513 = _0x10887b[_0x266f91 ? 3 : 1] ^ _0xd0c6fd[1];
      _0x1c9df3 = _0x10887b[2] ^ _0xd0c6fd[2];
      _0xfd9da1 = _0x10887b[_0x266f91 ? 1 : 3] ^ _0xd0c6fd[3];
      var _0x5cc552 = 3;
      for (var _0x250197 = 1; _0x250197 < _0x402100; ++_0x250197) {
        _0x1947ba = _0x4f379a[_0xfb6091 >>> 24] ^ _0x229fff[_0xe5b513 >>> 16 & 255] ^ _0x5a44bd[_0x1c9df3 >>> 8 & 255] ^ _0x11c7dc[_0xfd9da1 & 255] ^ _0xd0c6fd[++_0x5cc552];
        _0x24b1a5 = _0x4f379a[_0xe5b513 >>> 24] ^ _0x229fff[_0x1c9df3 >>> 16 & 255] ^ _0x5a44bd[_0xfd9da1 >>> 8 & 255] ^ _0x11c7dc[_0xfb6091 & 255] ^ _0xd0c6fd[++_0x5cc552];
        _0x3ccb93 = _0x4f379a[_0x1c9df3 >>> 24] ^ _0x229fff[_0xfd9da1 >>> 16 & 255] ^ _0x5a44bd[_0xfb6091 >>> 8 & 255] ^ _0x11c7dc[_0xe5b513 & 255] ^ _0xd0c6fd[++_0x5cc552];
        _0xfd9da1 = _0x4f379a[_0xfd9da1 >>> 24] ^ _0x229fff[_0xfb6091 >>> 16 & 255] ^ _0x5a44bd[_0xe5b513 >>> 8 & 255] ^ _0x11c7dc[_0x1c9df3 & 255] ^ _0xd0c6fd[++_0x5cc552];
        _0xfb6091 = _0x1947ba;
        _0xe5b513 = _0x24b1a5;
        _0x1c9df3 = _0x3ccb93;
      }
      _0x69027[0] = _0x32e594[_0xfb6091 >>> 24] << 24 ^ _0x32e594[_0xe5b513 >>> 16 & 255] << 16 ^ _0x32e594[_0x1c9df3 >>> 8 & 255] << 8 ^ _0x32e594[_0xfd9da1 & 255] ^ _0xd0c6fd[++_0x5cc552];
      _0x69027[_0x266f91 ? 3 : 1] = _0x32e594[_0xe5b513 >>> 24] << 24 ^ _0x32e594[_0x1c9df3 >>> 16 & 255] << 16 ^ _0x32e594[_0xfd9da1 >>> 8 & 255] << 8 ^ _0x32e594[_0xfb6091 & 255] ^ _0xd0c6fd[++_0x5cc552];
      _0x69027[2] = _0x32e594[_0x1c9df3 >>> 24] << 24 ^ _0x32e594[_0xfd9da1 >>> 16 & 255] << 16 ^ _0x32e594[_0xfb6091 >>> 8 & 255] << 8 ^ _0x32e594[_0xe5b513 & 255] ^ _0xd0c6fd[++_0x5cc552];
      _0x69027[_0x266f91 ? 1 : 3] = _0x32e594[_0xfd9da1 >>> 24] << 24 ^ _0x32e594[_0xfb6091 >>> 16 & 255] << 16 ^ _0x32e594[_0xe5b513 >>> 8 & 255] << 8 ^ _0x32e594[_0x1c9df3 & 255] ^ _0xd0c6fd[++_0x5cc552];
    }
    function _0x3b609c(_0x55e787) {
      _0x55e787 = _0x55e787 || {};
      var _0x27ef52 = (_0x55e787.mode || "CBC").toUpperCase();
      var _0x2bb7b9 = "AES-" + _0x27ef52;
      var _0x2b343e;
      if (_0x55e787.decrypt) {
        _0x2b343e = _0x41cbd7.cipher.createDecipher(_0x2bb7b9, _0x55e787.key);
      } else {
        _0x2b343e = _0x41cbd7.cipher.createCipher(_0x2bb7b9, _0x55e787.key);
      }
      var _0x4a74ff = _0x2b343e.start;
      _0x2b343e.start = function (_0x17bbff, _0x41aaf6) {
        var _0x3363ab = null;
        if (_0x41aaf6 instanceof _0x41cbd7.util.ByteBuffer) {
          _0x3363ab = _0x41aaf6;
          _0x41aaf6 = {};
        }
        _0x41aaf6 = _0x41aaf6 || {};
        _0x41aaf6.output = _0x3363ab;
        _0x41aaf6.iv = _0x17bbff;
        _0x4a74ff.call(_0x2b343e, _0x41aaf6);
      };
      return _0x2b343e;
    }
  }
});
var require_oids = __commonJS({
  "node_modules/node-forge/lib/oids.js"(_0x65e55e, _0x4e8ac3) {
    var _0x360cfa = require_forge();
    _0x360cfa.pki = _0x360cfa.pki || {};
    var _0x4cb83a = _0x4e8ac3.exports = _0x360cfa.pki.oids = _0x360cfa.oids = _0x360cfa.oids || {};
    function _0x55d491(_0x52ad04, _0x2cce6a) {
      _0x4cb83a[_0x52ad04] = _0x2cce6a;
      _0x4cb83a[_0x2cce6a] = _0x52ad04;
    }
    function _0x1bb777(_0x531637, _0xa4e445) {
      _0x4cb83a[_0x531637] = _0xa4e445;
    }
    _0x55d491("1.2.840.113549.1.1.1", "rsaEncryption");
    _0x55d491("1.2.840.113549.1.1.4", "md5WithRSAEncryption");
    _0x55d491("1.2.840.113549.1.1.5", "sha1WithRSAEncryption");
    _0x55d491("1.2.840.113549.1.1.7", "RSAES-OAEP");
    _0x55d491("1.2.840.113549.1.1.8", "mgf1");
    _0x55d491("1.2.840.113549.1.1.9", "pSpecified");
    _0x55d491("1.2.840.113549.1.1.10", "RSASSA-PSS");
    _0x55d491("1.2.840.113549.1.1.11", "sha256WithRSAEncryption");
    _0x55d491("1.2.840.113549.1.1.12", "sha384WithRSAEncryption");
    _0x55d491("1.2.840.113549.1.1.13", "sha512WithRSAEncryption");
    _0x55d491("1.3.101.112", "EdDSA25519");
    _0x55d491("1.2.840.10040.4.3", "dsa-with-sha1");
    _0x55d491("1.3.14.3.2.7", "desCBC");
    _0x55d491("1.3.14.3.2.26", "sha1");
    _0x55d491("1.3.14.3.2.29", "sha1WithRSASignature");
    _0x55d491("2.16.840.1.101.3.4.2.1", "sha256");
    _0x55d491("2.16.840.1.101.3.4.2.2", "sha384");
    _0x55d491("2.16.840.1.101.3.4.2.3", "sha512");
    _0x55d491("2.16.840.1.101.3.4.2.4", "sha224");
    _0x55d491("2.16.840.1.101.3.4.2.5", "sha512-224");
    _0x55d491("2.16.840.1.101.3.4.2.6", "sha512-256");
    _0x55d491("1.2.840.113549.2.2", "md2");
    _0x55d491("1.2.840.113549.2.5", "md5");
    _0x55d491("1.2.840.113549.1.7.1", "data");
    _0x55d491("1.2.840.113549.1.7.2", "signedData");
    _0x55d491("1.2.840.113549.1.7.3", "envelopedData");
    _0x55d491("1.2.840.113549.1.7.4", "signedAndEnvelopedData");
    _0x55d491("1.2.840.113549.1.7.5", "digestedData");
    _0x55d491("1.2.840.113549.1.7.6", "encryptedData");
    _0x55d491("1.2.840.113549.1.9.1", "emailAddress");
    _0x55d491("1.2.840.113549.1.9.2", "unstructuredName");
    _0x55d491("1.2.840.113549.1.9.3", "contentType");
    _0x55d491("1.2.840.113549.1.9.4", "messageDigest");
    _0x55d491("1.2.840.113549.1.9.5", "signingTime");
    _0x55d491("1.2.840.113549.1.9.6", "counterSignature");
    _0x55d491("1.2.840.113549.1.9.7", "challengePassword");
    _0x55d491("1.2.840.113549.1.9.8", "unstructuredAddress");
    _0x55d491("1.2.840.113549.1.9.14", "extensionRequest");
    _0x55d491("1.2.840.113549.1.9.20", "friendlyName");
    _0x55d491("1.2.840.113549.1.9.21", "localKeyId");
    _0x55d491("1.2.840.113549.1.9.22.1", "x509Certificate");
    _0x55d491("1.2.840.113549.1.12.10.1.1", "keyBag");
    _0x55d491("1.2.840.113549.1.12.10.1.2", "pkcs8ShroudedKeyBag");
    _0x55d491("1.2.840.113549.1.12.10.1.3", "certBag");
    _0x55d491("1.2.840.113549.1.12.10.1.4", "crlBag");
    _0x55d491("1.2.840.113549.1.12.10.1.5", "secretBag");
    _0x55d491("1.2.840.113549.1.12.10.1.6", "safeContentsBag");
    _0x55d491("1.2.840.113549.1.5.13", "pkcs5PBES2");
    _0x55d491("1.2.840.113549.1.5.12", "pkcs5PBKDF2");
    _0x55d491("1.2.840.113549.1.12.1.1", "pbeWithSHAAnd128BitRC4");
    _0x55d491("1.2.840.113549.1.12.1.2", "pbeWithSHAAnd40BitRC4");
    _0x55d491("1.2.840.113549.1.12.1.3", "pbeWithSHAAnd3-KeyTripleDES-CBC");
    _0x55d491("1.2.840.113549.1.12.1.4", "pbeWithSHAAnd2-KeyTripleDES-CBC");
    _0x55d491("1.2.840.113549.1.12.1.5", "pbeWithSHAAnd128BitRC2-CBC");
    _0x55d491("1.2.840.113549.1.12.1.6", "pbewithSHAAnd40BitRC2-CBC");
    _0x55d491("1.2.840.113549.2.7", "hmacWithSHA1");
    _0x55d491("1.2.840.113549.2.8", "hmacWithSHA224");
    _0x55d491("1.2.840.113549.2.9", "hmacWithSHA256");
    _0x55d491("1.2.840.113549.2.10", "hmacWithSHA384");
    _0x55d491("1.2.840.113549.2.11", "hmacWithSHA512");
    _0x55d491("1.2.840.113549.3.7", "des-EDE3-CBC");
    _0x55d491("2.16.840.1.101.3.4.1.2", "aes128-CBC");
    _0x55d491("2.16.840.1.101.3.4.1.22", "aes192-CBC");
    _0x55d491("2.16.840.1.101.3.4.1.42", "aes256-CBC");
    _0x55d491("2.5.4.3", "commonName");
    _0x55d491("2.5.4.4", "surname");
    _0x55d491("2.5.4.5", "serialNumber");
    _0x55d491("2.5.4.6", "countryName");
    _0x55d491("2.5.4.7", "localityName");
    _0x55d491("2.5.4.8", "stateOrProvinceName");
    _0x55d491("2.5.4.9", "streetAddress");
    _0x55d491("2.5.4.10", "organizationName");
    _0x55d491("2.5.4.11", "organizationalUnitName");
    _0x55d491("2.5.4.12", "title");
    _0x55d491("2.5.4.13", "description");
    _0x55d491("2.5.4.15", "businessCategory");
    _0x55d491("2.5.4.17", "postalCode");
    _0x55d491("2.5.4.42", "givenName");
    _0x55d491("2.5.4.65", "pseudonym");
    _0x55d491("1.3.6.1.4.1.311.60.2.1.2", "jurisdictionOfIncorporationStateOrProvinceName");
    _0x55d491("1.3.6.1.4.1.311.60.2.1.3", "jurisdictionOfIncorporationCountryName");
    _0x55d491("2.16.840.1.113730.1.1", "nsCertType");
    _0x55d491("2.16.840.1.113730.1.13", "nsComment");
    _0x1bb777("2.5.29.1", "authorityKeyIdentifier");
    _0x1bb777("2.5.29.2", "keyAttributes");
    _0x1bb777("2.5.29.3", "certificatePolicies");
    _0x1bb777("2.5.29.4", "keyUsageRestriction");
    _0x1bb777("2.5.29.5", "policyMapping");
    _0x1bb777("2.5.29.6", "subtreesConstraint");
    _0x1bb777("2.5.29.7", "subjectAltName");
    _0x1bb777("2.5.29.8", "issuerAltName");
    _0x1bb777("2.5.29.9", "subjectDirectoryAttributes");
    _0x1bb777("2.5.29.10", "basicConstraints");
    _0x1bb777("2.5.29.11", "nameConstraints");
    _0x1bb777("2.5.29.12", "policyConstraints");
    _0x1bb777("2.5.29.13", "basicConstraints");
    _0x55d491("2.5.29.14", "subjectKeyIdentifier");
    _0x55d491("2.5.29.15", "keyUsage");
    _0x1bb777("2.5.29.16", "privateKeyUsagePeriod");
    _0x55d491("2.5.29.17", "subjectAltName");
    _0x55d491("2.5.29.18", "issuerAltName");
    _0x55d491("2.5.29.19", "basicConstraints");
    _0x1bb777("2.5.29.20", "cRLNumber");
    _0x1bb777("2.5.29.21", "cRLReason");
    _0x1bb777("2.5.29.22", "expirationDate");
    _0x1bb777("2.5.29.23", "instructionCode");
    _0x1bb777("2.5.29.24", "invalidityDate");
    _0x1bb777("2.5.29.25", "cRLDistributionPoints");
    _0x1bb777("2.5.29.26", "issuingDistributionPoint");
    _0x1bb777("2.5.29.27", "deltaCRLIndicator");
    _0x1bb777("2.5.29.28", "issuingDistributionPoint");
    _0x1bb777("2.5.29.29", "certificateIssuer");
    _0x1bb777("2.5.29.30", "nameConstraints");
    _0x55d491("2.5.29.31", "cRLDistributionPoints");
    _0x55d491("2.5.29.32", "certificatePolicies");
    _0x1bb777("2.5.29.33", "policyMappings");
    _0x1bb777("2.5.29.34", "policyConstraints");
    _0x55d491("2.5.29.35", "authorityKeyIdentifier");
    _0x1bb777("2.5.29.36", "policyConstraints");
    _0x55d491("2.5.29.37", "extKeyUsage");
    _0x1bb777("2.5.29.46", "freshestCRL");
    _0x1bb777("2.5.29.54", "inhibitAnyPolicy");
    _0x55d491("1.3.6.1.4.1.11129.2.4.2", "timestampList");
    _0x55d491("1.3.6.1.5.5.7.1.1", "authorityInfoAccess");
    _0x55d491("1.3.6.1.5.5.7.3.1", "serverAuth");
    _0x55d491("1.3.6.1.5.5.7.3.2", "clientAuth");
    _0x55d491("1.3.6.1.5.5.7.3.3", "codeSigning");
    _0x55d491("1.3.6.1.5.5.7.3.4", "emailProtection");
    _0x55d491("1.3.6.1.5.5.7.3.8", "timeStamping");
  }
});
var require_asn1 = __commonJS({
  "node_modules/node-forge/lib/asn1.js"(_0x2ba78a, _0x1f914c) {
    var _0x5e36fb = require_forge();
    require_util();
    require_oids();
    var _0x563718 = _0x1f914c.exports = _0x5e36fb.asn1 = _0x5e36fb.asn1 || {};
    _0x563718.Class = {
      UNIVERSAL: 0,
      APPLICATION: 64,
      CONTEXT_SPECIFIC: 128,
      PRIVATE: 192
    };
    _0x563718.Type = {
      NONE: 0,
      BOOLEAN: 1,
      INTEGER: 2,
      BITSTRING: 3,
      OCTETSTRING: 4,
      NULL: 5,
      OID: 6,
      ODESC: 7,
      EXTERNAL: 8,
      REAL: 9,
      ENUMERATED: 10,
      EMBEDDED: 11,
      UTF8: 12,
      ROID: 13,
      SEQUENCE: 16,
      SET: 17,
      PRINTABLESTRING: 19,
      IA5STRING: 22,
      UTCTIME: 23,
      GENERALIZEDTIME: 24,
      BMPSTRING: 30
    };
    _0x563718.maxDepth = 256;
    _0x563718.create = function (_0x330075, _0x3b42ed, _0x577f81, _0x52ee70, _0x94a835) {
      if (_0x5e36fb.util.isArray(_0x52ee70)) {
        var _0x135cee = [];
        for (var _0x353b6f = 0; _0x353b6f < _0x52ee70.length; ++_0x353b6f) {
          if (_0x52ee70[_0x353b6f] !== undefined) {
            _0x135cee.push(_0x52ee70[_0x353b6f]);
          }
        }
        _0x52ee70 = _0x135cee;
      }
      var _0x7572c7 = {
        tagClass: _0x330075,
        type: _0x3b42ed,
        constructed: _0x577f81,
        composed: _0x577f81 || _0x5e36fb.util.isArray(_0x52ee70),
        value: _0x52ee70
      };
      if (_0x94a835 && "bitStringContents" in _0x94a835) {
        _0x7572c7.bitStringContents = _0x94a835.bitStringContents;
        _0x7572c7.original = _0x563718.copy(_0x7572c7);
      }
      return _0x7572c7;
    };
    _0x563718.copy = function (_0x2f18ff, _0xc06168) {
      var _0xa9a440;
      if (_0x5e36fb.util.isArray(_0x2f18ff)) {
        _0xa9a440 = [];
        for (var _0x168122 = 0; _0x168122 < _0x2f18ff.length; ++_0x168122) {
          _0xa9a440.push(_0x563718.copy(_0x2f18ff[_0x168122], _0xc06168));
        }
        return _0xa9a440;
      }
      if (typeof _0x2f18ff === "string") {
        return _0x2f18ff;
      }
      _0xa9a440 = {
        tagClass: _0x2f18ff.tagClass,
        type: _0x2f18ff.type,
        constructed: _0x2f18ff.constructed,
        composed: _0x2f18ff.composed,
        value: _0x563718.copy(_0x2f18ff.value, _0xc06168)
      };
      if (_0xc06168 && !_0xc06168.excludeBitStringContents) {
        _0xa9a440.bitStringContents = _0x2f18ff.bitStringContents;
      }
      return _0xa9a440;
    };
    _0x563718.equals = function (_0x2953a5, _0x39a242, _0x595dd0) {
      if (_0x5e36fb.util.isArray(_0x2953a5)) {
        if (!_0x5e36fb.util.isArray(_0x39a242)) {
          return false;
        }
        if (_0x2953a5.length !== _0x39a242.length) {
          return false;
        }
        for (var _0x36876e = 0; _0x36876e < _0x2953a5.length; ++_0x36876e) {
          if (!_0x563718.equals(_0x2953a5[_0x36876e], _0x39a242[_0x36876e])) {
            return false;
          }
        }
        return true;
      }
      if (typeof _0x2953a5 !== typeof _0x39a242) {
        return false;
      }
      if (typeof _0x2953a5 === "string") {
        return _0x2953a5 === _0x39a242;
      }
      var _0x9f83b9 = _0x2953a5.tagClass === _0x39a242.tagClass && _0x2953a5.type === _0x39a242.type && _0x2953a5.constructed === _0x39a242.constructed && _0x2953a5.composed === _0x39a242.composed && _0x563718.equals(_0x2953a5.value, _0x39a242.value);
      if (_0x595dd0 && _0x595dd0.includeBitStringContents) {
        _0x9f83b9 = _0x9f83b9 && _0x2953a5.bitStringContents === _0x39a242.bitStringContents;
      }
      return _0x9f83b9;
    };
    _0x563718.getBerValueLength = function (_0x4ded15) {
      var _0x14a2f2 = _0x4ded15.getByte();
      if (_0x14a2f2 === 128) {
        return undefined;
      }
      var _0x13045b;
      var _0xf1059a = _0x14a2f2 & 128;
      if (!_0xf1059a) {
        _0x13045b = _0x14a2f2;
      } else {
        _0x13045b = _0x4ded15.getInt((_0x14a2f2 & 127) << 3);
      }
      return _0x13045b;
    };
    function _0xefc02b(_0x6b4c2b, _0x4c259b, _0x3047d1) {
      if (_0x3047d1 > _0x4c259b) {
        var _0x10e87a = new Error("Too few bytes to parse DER.");
        _0x10e87a.available = _0x6b4c2b.length();
        _0x10e87a.remaining = _0x4c259b;
        _0x10e87a.requested = _0x3047d1;
        throw _0x10e87a;
      }
    }
    function _0x27d886(_0x15ef3a, _0x5c94e3) {
      var _0x3f119b = _0x15ef3a.getByte();
      _0x5c94e3--;
      if (_0x3f119b === 128) {
        return undefined;
      }
      var _0x2d1370;
      var _0x164bcc = _0x3f119b & 128;
      if (!_0x164bcc) {
        _0x2d1370 = _0x3f119b;
      } else {
        var _0x3c8523 = _0x3f119b & 127;
        _0xefc02b(_0x15ef3a, _0x5c94e3, _0x3c8523);
        _0x2d1370 = _0x15ef3a.getInt(_0x3c8523 << 3);
      }
      if (_0x2d1370 < 0) {
        throw new Error("Negative length: " + _0x2d1370);
      }
      return _0x2d1370;
    }
    _0x563718.fromDer = function (_0x441ba2, _0x1f740f = {
      strict: true,
      parseAllBytes: true,
      decodeBitStrings: true
    }) {
      if (typeof _0x1f740f === "boolean") {
        _0x1f740f = {
          strict: _0x1f740f,
          parseAllBytes: true,
          decodeBitStrings: true
        };
      }
      if (!("strict" in _0x1f740f)) {
        _0x1f740f.strict = true;
      }
      if (!("parseAllBytes" in _0x1f740f)) {
        _0x1f740f.parseAllBytes = true;
      }
      if (!("decodeBitStrings" in _0x1f740f)) {
        _0x1f740f.decodeBitStrings = true;
      }
      if (!("maxDepth" in _0x1f740f)) {
        _0x1f740f.maxDepth = _0x563718.maxDepth;
      }
      if (typeof _0x441ba2 === "string") {
        _0x441ba2 = _0x5e36fb.util.createBuffer(_0x441ba2);
      }
      var _0x177da2 = _0x441ba2.length();
      var _0x5e48f1 = _0x41e474(_0x441ba2, _0x441ba2.length(), 0, _0x1f740f);
      if (_0x1f740f.parseAllBytes && _0x441ba2.length() !== 0) {
        var _0x4e0e94 = new Error("Unparsed DER bytes remain after ASN.1 parsing.");
        _0x4e0e94.byteCount = _0x177da2;
        _0x4e0e94.remaining = _0x441ba2.length();
        throw _0x4e0e94;
      }
      return _0x5e48f1;
    };
    function _0x41e474(_0x19c954, _0x547e2f, _0x419141, _0x52e6e2) {
      if (_0x419141 >= _0x52e6e2.maxDepth) {
        throw new Error("ASN.1 parsing error: Max depth exceeded.");
      }
      var _0x1f9bf6;
      _0xefc02b(_0x19c954, _0x547e2f, 2);
      var _0x4938e6 = _0x19c954.getByte();
      _0x547e2f--;
      var _0x279a82 = _0x4938e6 & 192;
      var _0x2d82da = _0x4938e6 & 31;
      _0x1f9bf6 = _0x19c954.length();
      var _0x4487d7 = _0x27d886(_0x19c954, _0x547e2f);
      _0x547e2f -= _0x1f9bf6 - _0x19c954.length();
      if (_0x4487d7 !== undefined && _0x4487d7 > _0x547e2f) {
        if (_0x52e6e2.strict) {
          var _0xd463e6 = new Error("Too few bytes to read ASN.1 value.");
          _0xd463e6.available = _0x19c954.length();
          _0xd463e6.remaining = _0x547e2f;
          _0xd463e6.requested = _0x4487d7;
          throw _0xd463e6;
        }
        _0x4487d7 = _0x547e2f;
      }
      var _0x384619;
      var _0x4c54d1;
      var _0x1ce18b = (_0x4938e6 & 32) === 32;
      if (_0x1ce18b) {
        _0x384619 = [];
        if (_0x4487d7 === undefined) {
          while (true) {
            _0xefc02b(_0x19c954, _0x547e2f, 2);
            if (_0x19c954.bytes(2) === String.fromCharCode(0, 0)) {
              _0x19c954.getBytes(2);
              _0x547e2f -= 2;
              break;
            }
            _0x1f9bf6 = _0x19c954.length();
            _0x384619.push(_0x41e474(_0x19c954, _0x547e2f, _0x419141 + 1, _0x52e6e2));
            _0x547e2f -= _0x1f9bf6 - _0x19c954.length();
          }
        } else {
          while (_0x4487d7 > 0) {
            _0x1f9bf6 = _0x19c954.length();
            _0x384619.push(_0x41e474(_0x19c954, _0x4487d7, _0x419141 + 1, _0x52e6e2));
            _0x547e2f -= _0x1f9bf6 - _0x19c954.length();
            _0x4487d7 -= _0x1f9bf6 - _0x19c954.length();
          }
        }
      }
      if (_0x384619 === undefined && _0x279a82 === _0x563718.Class.UNIVERSAL && _0x2d82da === _0x563718.Type.BITSTRING) {
        _0x4c54d1 = _0x19c954.bytes(_0x4487d7);
      }
      if (_0x384619 === undefined && _0x52e6e2.decodeBitStrings && _0x279a82 === _0x563718.Class.UNIVERSAL && _0x2d82da === _0x563718.Type.BITSTRING && _0x4487d7 > 1) {
        var _0xcd23c = _0x19c954.read;
        var _0x44620e = _0x547e2f;
        var _0x3c5101 = 0;
        if (_0x2d82da === _0x563718.Type.BITSTRING) {
          _0xefc02b(_0x19c954, _0x547e2f, 1);
          _0x3c5101 = _0x19c954.getByte();
          _0x547e2f--;
        }
        if (_0x3c5101 === 0) {
          try {
            _0x1f9bf6 = _0x19c954.length();
            var _0xe9a151 = {
              strict: true,
              decodeBitStrings: true
            };
            var _0x5959ba = _0x41e474(_0x19c954, _0x547e2f, _0x419141 + 1, _0xe9a151);
            var _0x48167b = _0x1f9bf6 - _0x19c954.length();
            _0x547e2f -= _0x48167b;
            if (_0x2d82da == _0x563718.Type.BITSTRING) {
              _0x48167b++;
            }
            var _0x57ea64 = _0x5959ba.tagClass;
            if (_0x48167b === _0x4487d7 && (_0x57ea64 === _0x563718.Class.UNIVERSAL || _0x57ea64 === _0x563718.Class.CONTEXT_SPECIFIC)) {
              _0x384619 = [_0x5959ba];
            }
          } catch (_0x3bc795) {}
        }
        if (_0x384619 === undefined) {
          _0x19c954.read = _0xcd23c;
          _0x547e2f = _0x44620e;
        }
      }
      if (_0x384619 === undefined) {
        if (_0x4487d7 === undefined) {
          if (_0x52e6e2.strict) {
            throw new Error("Non-constructed ASN.1 object of indefinite length.");
          }
          _0x4487d7 = _0x547e2f;
        }
        if (_0x2d82da === _0x563718.Type.BMPSTRING) {
          _0x384619 = "";
          for (; _0x4487d7 > 0; _0x4487d7 -= 2) {
            _0xefc02b(_0x19c954, _0x547e2f, 2);
            _0x384619 += String.fromCharCode(_0x19c954.getInt16());
            _0x547e2f -= 2;
          }
        } else {
          _0x384619 = _0x19c954.getBytes(_0x4487d7);
          _0x547e2f -= _0x4487d7;
        }
      }
      var _0x54614d = _0x4c54d1 === undefined ? null : {
        bitStringContents: _0x4c54d1
      };
      return _0x563718.create(_0x279a82, _0x2d82da, _0x1ce18b, _0x384619, _0x54614d);
    }
    _0x563718.toDer = function (_0x2af79d) {
      var _0x58a119 = _0x5e36fb.util.createBuffer();
      var _0x20ebc2 = _0x2af79d.tagClass | _0x2af79d.type;
      var _0x1e9c9d = _0x5e36fb.util.createBuffer();
      var _0x6bdd7d = false;
      if ("bitStringContents" in _0x2af79d) {
        _0x6bdd7d = true;
        if (_0x2af79d.original) {
          _0x6bdd7d = _0x563718.equals(_0x2af79d, _0x2af79d.original);
        }
      }
      if (_0x6bdd7d) {
        _0x1e9c9d.putBytes(_0x2af79d.bitStringContents);
      } else if (_0x2af79d.composed) {
        if (_0x2af79d.constructed) {
          _0x20ebc2 |= 32;
        } else {
          _0x1e9c9d.putByte(0);
        }
        for (var _0x42b0a3 = 0; _0x42b0a3 < _0x2af79d.value.length; ++_0x42b0a3) {
          if (_0x2af79d.value[_0x42b0a3] !== undefined) {
            _0x1e9c9d.putBuffer(_0x563718.toDer(_0x2af79d.value[_0x42b0a3]));
          }
        }
      } else if (_0x2af79d.type === _0x563718.Type.BMPSTRING) {
        for (var _0x42b0a3 = 0; _0x42b0a3 < _0x2af79d.value.length; ++_0x42b0a3) {
          _0x1e9c9d.putInt16(_0x2af79d.value.charCodeAt(_0x42b0a3));
        }
      } else if (_0x2af79d.type === _0x563718.Type.INTEGER && _0x2af79d.value.length > 1 && (_0x2af79d.value.charCodeAt(0) === 0 && (_0x2af79d.value.charCodeAt(1) & 128) === 0 || _0x2af79d.value.charCodeAt(0) === 255 && (_0x2af79d.value.charCodeAt(1) & 128) === 128)) {
        _0x1e9c9d.putBytes(_0x2af79d.value.substr(1));
      } else {
        _0x1e9c9d.putBytes(_0x2af79d.value);
      }
      _0x58a119.putByte(_0x20ebc2);
      if (_0x1e9c9d.length() <= 127) {
        _0x58a119.putByte(_0x1e9c9d.length() & 127);
      } else {
        var _0x3447bf = _0x1e9c9d.length();
        var _0x276b1b = "";
        do {
          _0x276b1b += String.fromCharCode(_0x3447bf & 255);
          _0x3447bf = _0x3447bf >>> 8;
        } while (_0x3447bf > 0);
        _0x58a119.putByte(_0x276b1b.length | 128);
        for (var _0x42b0a3 = _0x276b1b.length - 1; _0x42b0a3 >= 0; --_0x42b0a3) {
          _0x58a119.putByte(_0x276b1b.charCodeAt(_0x42b0a3));
        }
      }
      _0x58a119.putBuffer(_0x1e9c9d);
      return _0x58a119;
    };
    _0x563718.oidToDer = function (_0x181571) {
      var _0x158dae = _0x181571.split(".");
      var _0x1abaf0 = _0x5e36fb.util.createBuffer();
      _0x1abaf0.putByte(parseInt(_0x158dae[0], 10) * 40 + parseInt(_0x158dae[1], 10));
      var _0x56a339;
      var _0x44b79b;
      var _0x4df77b;
      var _0x1deacb;
      for (var _0xff1276 = 2; _0xff1276 < _0x158dae.length; ++_0xff1276) {
        _0x56a339 = true;
        _0x44b79b = [];
        _0x4df77b = parseInt(_0x158dae[_0xff1276], 10);
        if (_0x4df77b > 4294967295) {
          throw new Error("OID value too large; max is 32-bits.");
        }
        do {
          _0x1deacb = _0x4df77b & 127;
          _0x4df77b = _0x4df77b >>> 7;
          if (!_0x56a339) {
            _0x1deacb |= 128;
          }
          _0x44b79b.push(_0x1deacb);
          _0x56a339 = false;
        } while (_0x4df77b > 0);
        for (var _0x51aa81 = _0x44b79b.length - 1; _0x51aa81 >= 0; --_0x51aa81) {
          _0x1abaf0.putByte(_0x44b79b[_0x51aa81]);
        }
      }
      return _0x1abaf0;
    };
    _0x563718.derToOid = function (_0x4a632c) {
      var _0x46ab8f;
      if (typeof _0x4a632c === "string") {
        _0x4a632c = _0x5e36fb.util.createBuffer(_0x4a632c);
      }
      var _0x1458bb = _0x4a632c.getByte();
      _0x46ab8f = Math.floor(_0x1458bb / 40) + "." + _0x1458bb % 40;
      var _0x15b00f = 0;
      while (_0x4a632c.length() > 0) {
        if (_0x15b00f > 70368744177663) {
          throw new Error("OID value too large; max is 53-bits.");
        }
        _0x1458bb = _0x4a632c.getByte();
        _0x15b00f = _0x15b00f * 128;
        if (_0x1458bb & 128) {
          _0x15b00f += _0x1458bb & 127;
        } else {
          _0x46ab8f += "." + (_0x15b00f + _0x1458bb);
          _0x15b00f = 0;
        }
      }
      return _0x46ab8f;
    };
    _0x563718.utcTimeToDate = function (_0x2f8a9b) {
      var _0x56662a = new Date();
      var _0x1a6c31 = parseInt(_0x2f8a9b.substr(0, 2), 10);
      _0x1a6c31 = _0x1a6c31 >= 50 ? 1900 + _0x1a6c31 : 2000 + _0x1a6c31;
      var _0x2c7d25 = parseInt(_0x2f8a9b.substr(2, 2), 10) - 1;
      var _0x254b73 = parseInt(_0x2f8a9b.substr(4, 2), 10);
      var _0x3d932b = parseInt(_0x2f8a9b.substr(6, 2), 10);
      var _0x4a1a2b = parseInt(_0x2f8a9b.substr(8, 2), 10);
      var _0x41fd7f = 0;
      if (_0x2f8a9b.length > 11) {
        var _0xed35cc = _0x2f8a9b.charAt(10);
        var _0x3237d3 = 10;
        if (_0xed35cc !== "+" && _0xed35cc !== "-") {
          _0x41fd7f = parseInt(_0x2f8a9b.substr(10, 2), 10);
          _0x3237d3 += 2;
        }
      }
      _0x56662a.setUTCFullYear(_0x1a6c31, _0x2c7d25, _0x254b73);
      _0x56662a.setUTCHours(_0x3d932b, _0x4a1a2b, _0x41fd7f, 0);
      if (_0x3237d3) {
        _0xed35cc = _0x2f8a9b.charAt(_0x3237d3);
        if (_0xed35cc === "+" || _0xed35cc === "-") {
          var _0x25229b = parseInt(_0x2f8a9b.substr(_0x3237d3 + 1, 2), 10);
          var _0xa3dd86 = parseInt(_0x2f8a9b.substr(_0x3237d3 + 4, 2), 10);
          var _0x14c1c6 = _0x25229b * 60 + _0xa3dd86;
          _0x14c1c6 *= 60000;
          if (_0xed35cc === "+") {
            _0x56662a.setTime(+_0x56662a - _0x14c1c6);
          } else {
            _0x56662a.setTime(+_0x56662a + _0x14c1c6);
          }
        }
      }
      return _0x56662a;
    };
    _0x563718.generalizedTimeToDate = function (_0x39f4aa) {
      var _0x102b72 = new Date();
      var _0xef1c73 = parseInt(_0x39f4aa.substr(0, 4), 10);
      var _0x486737 = parseInt(_0x39f4aa.substr(4, 2), 10) - 1;
      var _0xd560da = parseInt(_0x39f4aa.substr(6, 2), 10);
      var _0x55196b = parseInt(_0x39f4aa.substr(8, 2), 10);
      var _0x1fbd50 = parseInt(_0x39f4aa.substr(10, 2), 10);
      var _0x58f2e2 = parseInt(_0x39f4aa.substr(12, 2), 10);
      var _0x26cc7c = 0;
      var _0xf2458 = 0;
      var _0x3a9a83 = false;
      if (_0x39f4aa.charAt(_0x39f4aa.length - 1) === "Z") {
        _0x3a9a83 = true;
      }
      var _0x59aea8 = _0x39f4aa.length - 5;
      var _0x2392dd = _0x39f4aa.charAt(_0x59aea8);
      if (_0x2392dd === "+" || _0x2392dd === "-") {
        var _0xc5f434 = parseInt(_0x39f4aa.substr(_0x59aea8 + 1, 2), 10);
        var _0x49f450 = parseInt(_0x39f4aa.substr(_0x59aea8 + 4, 2), 10);
        _0xf2458 = _0xc5f434 * 60 + _0x49f450;
        _0xf2458 *= 60000;
        if (_0x2392dd === "+") {
          _0xf2458 *= -1;
        }
        _0x3a9a83 = true;
      }
      if (_0x39f4aa.charAt(14) === ".") {
        _0x26cc7c = parseFloat(_0x39f4aa.substr(14), 10) * 1000;
      }
      if (_0x3a9a83) {
        _0x102b72.setUTCFullYear(_0xef1c73, _0x486737, _0xd560da);
        _0x102b72.setUTCHours(_0x55196b, _0x1fbd50, _0x58f2e2, _0x26cc7c);
        _0x102b72.setTime(+_0x102b72 + _0xf2458);
      } else {
        _0x102b72.setFullYear(_0xef1c73, _0x486737, _0xd560da);
        _0x102b72.setHours(_0x55196b, _0x1fbd50, _0x58f2e2, _0x26cc7c);
      }
      return _0x102b72;
    };
    _0x563718.dateToUtcTime = function (_0x2b57e1) {
      if (typeof _0x2b57e1 === "string") {
        return _0x2b57e1;
      }
      var _0x30a718 = "";
      var _0x3131e8 = [];
      _0x3131e8.push(("" + _0x2b57e1.getUTCFullYear()).substr(2));
      _0x3131e8.push("" + (_0x2b57e1.getUTCMonth() + 1));
      _0x3131e8.push("" + _0x2b57e1.getUTCDate());
      _0x3131e8.push("" + _0x2b57e1.getUTCHours());
      _0x3131e8.push("" + _0x2b57e1.getUTCMinutes());
      _0x3131e8.push("" + _0x2b57e1.getUTCSeconds());
      for (var _0x11fd72 = 0; _0x11fd72 < _0x3131e8.length; ++_0x11fd72) {
        if (_0x3131e8[_0x11fd72].length < 2) {
          _0x30a718 += "0";
        }
        _0x30a718 += _0x3131e8[_0x11fd72];
      }
      _0x30a718 += "Z";
      return _0x30a718;
    };
    _0x563718.dateToGeneralizedTime = function (_0x1139dd) {
      if (typeof _0x1139dd === "string") {
        return _0x1139dd;
      }
      var _0x374d14 = "";
      var _0x170e40 = [];
      _0x170e40.push("" + _0x1139dd.getUTCFullYear());
      _0x170e40.push("" + (_0x1139dd.getUTCMonth() + 1));
      _0x170e40.push("" + _0x1139dd.getUTCDate());
      _0x170e40.push("" + _0x1139dd.getUTCHours());
      _0x170e40.push("" + _0x1139dd.getUTCMinutes());
      _0x170e40.push("" + _0x1139dd.getUTCSeconds());
      for (var _0x6c3a4c = 0; _0x6c3a4c < _0x170e40.length; ++_0x6c3a4c) {
        if (_0x170e40[_0x6c3a4c].length < 2) {
          _0x374d14 += "0";
        }
        _0x374d14 += _0x170e40[_0x6c3a4c];
      }
      _0x374d14 += "Z";
      return _0x374d14;
    };
    _0x563718.integerToDer = function (_0x21e7b3) {
      var _0x27353b = _0x5e36fb.util.createBuffer();
      if (_0x21e7b3 >= -128 && _0x21e7b3 < 128) {
        return _0x27353b.putSignedInt(_0x21e7b3, 8);
      }
      if (_0x21e7b3 >= -32768 && _0x21e7b3 < 32768) {
        return _0x27353b.putSignedInt(_0x21e7b3, 16);
      }
      if (_0x21e7b3 >= -8388608 && _0x21e7b3 < 8388608) {
        return _0x27353b.putSignedInt(_0x21e7b3, 24);
      }
      if (_0x21e7b3 >= -2147483648 && _0x21e7b3 < 2147483648) {
        return _0x27353b.putSignedInt(_0x21e7b3, 32);
      }
      var _0x53b1ba = new Error("Integer too large; max is 32-bits.");
      _0x53b1ba.integer = _0x21e7b3;
      throw _0x53b1ba;
    };
    _0x563718.derToInteger = function (_0x4a94e5) {
      if (typeof _0x4a94e5 === "string") {
        _0x4a94e5 = _0x5e36fb.util.createBuffer(_0x4a94e5);
      }
      var _0x2b4e9f = _0x4a94e5.length() * 8;
      if (_0x2b4e9f > 32) {
        throw new Error("Integer too large; max is 32-bits.");
      }
      return _0x4a94e5.getSignedInt(_0x2b4e9f);
    };
    _0x563718.validate = function (_0x23f8b4, _0x33b7b3, _0x295db5, _0x24d017) {
      var _0x4efe7b = false;
      if ((_0x23f8b4.tagClass === _0x33b7b3.tagClass || typeof _0x33b7b3.tagClass === "undefined") && (_0x23f8b4.type === _0x33b7b3.type || typeof _0x33b7b3.type === "undefined")) {
        if (_0x23f8b4.constructed === _0x33b7b3.constructed || typeof _0x33b7b3.constructed === "undefined") {
          _0x4efe7b = true;
          if (_0x33b7b3.value && _0x5e36fb.util.isArray(_0x33b7b3.value)) {
            var _0x54cfa9 = 0;
            for (var _0xef4882 = 0; _0x4efe7b && _0xef4882 < _0x33b7b3.value.length; ++_0xef4882) {
              var _0x2a3b5d = _0x33b7b3.value[_0xef4882];
              _0x4efe7b = !!_0x2a3b5d.optional;
              var _0x2b7e20 = _0x23f8b4.value[_0x54cfa9];
              if (!_0x2b7e20) {
                if (!_0x2a3b5d.optional) {
                  _0x4efe7b = false;
                  if (_0x24d017) {
                    _0x24d017.push("[" + _0x33b7b3.name + "] Missing required element. Expected tag class \"" + _0x2a3b5d.tagClass + "\", type \"" + _0x2a3b5d.type + "\"");
                  }
                }
                continue;
              }
              var _0x3052da = typeof _0x2a3b5d.tagClass !== "undefined" && typeof _0x2a3b5d.type !== "undefined";
              if (_0x3052da && (_0x2b7e20.tagClass !== _0x2a3b5d.tagClass || _0x2b7e20.type !== _0x2a3b5d.type)) {
                if (_0x2a3b5d.optional) {
                  _0x4efe7b = true;
                  continue;
                } else {
                  _0x4efe7b = false;
                  if (_0x24d017) {
                    _0x24d017.push("[" + _0x33b7b3.name + "] Tag mismatch. Expected (" + _0x2a3b5d.tagClass + "," + _0x2a3b5d.type + "), got (" + _0x2b7e20.tagClass + "," + _0x2b7e20.type + ")");
                  }
                  break;
                }
              }
              var _0x14bf7f = _0x563718.validate(_0x2b7e20, _0x2a3b5d, _0x295db5, _0x24d017);
              if (_0x14bf7f) {
                ++_0x54cfa9;
                _0x4efe7b = true;
              } else if (_0x2a3b5d.optional) {
                _0x4efe7b = true;
              } else {
                _0x4efe7b = false;
                break;
              }
            }
          }
          if (_0x4efe7b && _0x295db5) {
            if (_0x33b7b3.capture) {
              _0x295db5[_0x33b7b3.capture] = _0x23f8b4.value;
            }
            if (_0x33b7b3.captureAsn1) {
              _0x295db5[_0x33b7b3.captureAsn1] = _0x23f8b4;
            }
            if (_0x33b7b3.captureBitStringContents && "bitStringContents" in _0x23f8b4) {
              _0x295db5[_0x33b7b3.captureBitStringContents] = _0x23f8b4.bitStringContents;
            }
            if (_0x33b7b3.captureBitStringValue && "bitStringContents" in _0x23f8b4) {
              var _0x49f8b9;
              if (_0x23f8b4.bitStringContents.length < 2) {
                _0x295db5[_0x33b7b3.captureBitStringValue] = "";
              } else {
                var _0x1bd6f2 = _0x23f8b4.bitStringContents.charCodeAt(0);
                if (_0x1bd6f2 !== 0) {
                  throw new Error("captureBitStringValue only supported for zero unused bits");
                }
                _0x295db5[_0x33b7b3.captureBitStringValue] = _0x23f8b4.bitStringContents.slice(1);
              }
            }
          }
        } else if (_0x24d017) {
          _0x24d017.push("[" + _0x33b7b3.name + "] Expected constructed \"" + _0x33b7b3.constructed + "\", got \"" + _0x23f8b4.constructed + "\"");
        }
      } else if (_0x24d017) {
        if (_0x23f8b4.tagClass !== _0x33b7b3.tagClass) {
          _0x24d017.push("[" + _0x33b7b3.name + "] Expected tag class \"" + _0x33b7b3.tagClass + "\", got \"" + _0x23f8b4.tagClass + "\"");
        }
        if (_0x23f8b4.type !== _0x33b7b3.type) {
          _0x24d017.push("[" + _0x33b7b3.name + "] Expected type \"" + _0x33b7b3.type + "\", got \"" + _0x23f8b4.type + "\"");
        }
      }
      return _0x4efe7b;
    };
    var _0x32fd03 = /[^\\u0000-\\u00ff]/;
    _0x563718.prettyPrint = function (_0x2b80b9, _0x3b1aea, _0x47c1e5) {
      var _0x542884 = "";
      _0x3b1aea = _0x3b1aea || 0;
      _0x47c1e5 = _0x47c1e5 || 2;
      if (_0x3b1aea > 0) {
        _0x542884 += "\n";
      }
      var _0x1cdb06 = "";
      for (var _0x45a24d = 0; _0x45a24d < _0x3b1aea * _0x47c1e5; ++_0x45a24d) {
        _0x1cdb06 += " ";
      }
      _0x542884 += _0x1cdb06 + "Tag: ";
      switch (_0x2b80b9.tagClass) {
        case _0x563718.Class.UNIVERSAL:
          _0x542884 += "Universal:";
          break;
        case _0x563718.Class.APPLICATION:
          _0x542884 += "Application:";
          break;
        case _0x563718.Class.CONTEXT_SPECIFIC:
          _0x542884 += "Context-Specific:";
          break;
        case _0x563718.Class.PRIVATE:
          _0x542884 += "Private:";
          break;
      }
      if (_0x2b80b9.tagClass === _0x563718.Class.UNIVERSAL) {
        _0x542884 += _0x2b80b9.type;
        switch (_0x2b80b9.type) {
          case _0x563718.Type.NONE:
            _0x542884 += " (None)";
            break;
          case _0x563718.Type.BOOLEAN:
            _0x542884 += " (Boolean)";
            break;
          case _0x563718.Type.INTEGER:
            _0x542884 += " (Integer)";
            break;
          case _0x563718.Type.BITSTRING:
            _0x542884 += " (Bit string)";
            break;
          case _0x563718.Type.OCTETSTRING:
            _0x542884 += " (Octet string)";
            break;
          case _0x563718.Type.NULL:
            _0x542884 += " (Null)";
            break;
          case _0x563718.Type.OID:
            _0x542884 += " (Object Identifier)";
            break;
          case _0x563718.Type.ODESC:
            _0x542884 += " (Object Descriptor)";
            break;
          case _0x563718.Type.EXTERNAL:
            _0x542884 += " (External or Instance of)";
            break;
          case _0x563718.Type.REAL:
            _0x542884 += " (Real)";
            break;
          case _0x563718.Type.ENUMERATED:
            _0x542884 += " (Enumerated)";
            break;
          case _0x563718.Type.EMBEDDED:
            _0x542884 += " (Embedded PDV)";
            break;
          case _0x563718.Type.UTF8:
            _0x542884 += " (UTF8)";
            break;
          case _0x563718.Type.ROID:
            _0x542884 += " (Relative Object Identifier)";
            break;
          case _0x563718.Type.SEQUENCE:
            _0x542884 += " (Sequence)";
            break;
          case _0x563718.Type.SET:
            _0x542884 += " (Set)";
            break;
          case _0x563718.Type.PRINTABLESTRING:
            _0x542884 += " (Printable String)";
            break;
          case _0x563718.Type.IA5String:
            _0x542884 += " (IA5String (ASCII))";
            break;
          case _0x563718.Type.UTCTIME:
            _0x542884 += " (UTC time)";
            break;
          case _0x563718.Type.GENERALIZEDTIME:
            _0x542884 += " (Generalized time)";
            break;
          case _0x563718.Type.BMPSTRING:
            _0x542884 += " (BMP String)";
            break;
        }
      } else {
        _0x542884 += _0x2b80b9.type;
      }
      _0x542884 += "\n";
      _0x542884 += _0x1cdb06 + "Constructed: " + _0x2b80b9.constructed + "\n";
      if (_0x2b80b9.composed) {
        var _0x165329 = 0;
        var _0x1c4827 = "";
        for (var _0x45a24d = 0; _0x45a24d < _0x2b80b9.value.length; ++_0x45a24d) {
          if (_0x2b80b9.value[_0x45a24d] !== undefined) {
            _0x165329 += 1;
            _0x1c4827 += _0x563718.prettyPrint(_0x2b80b9.value[_0x45a24d], _0x3b1aea + 1, _0x47c1e5);
            if (_0x45a24d + 1 < _0x2b80b9.value.length) {
              _0x1c4827 += ",";
            }
          }
        }
        _0x542884 += _0x1cdb06 + "Sub values: " + _0x165329 + _0x1c4827;
      } else {
        _0x542884 += _0x1cdb06 + "Value: ";
        if (_0x2b80b9.type === _0x563718.Type.OID) {
          var _0x305b24 = _0x563718.derToOid(_0x2b80b9.value);
          _0x542884 += _0x305b24;
          if (_0x5e36fb.pki && _0x5e36fb.pki.oids) {
            if (_0x305b24 in _0x5e36fb.pki.oids) {
              _0x542884 += " (" + _0x5e36fb.pki.oids[_0x305b24] + ") ";
            }
          }
        }
        if (_0x2b80b9.type === _0x563718.Type.INTEGER) {
          try {
            _0x542884 += _0x563718.derToInteger(_0x2b80b9.value);
          } catch (_0x16b3cb) {
            _0x542884 += "0x" + _0x5e36fb.util.bytesToHex(_0x2b80b9.value);
          }
        } else if (_0x2b80b9.type === _0x563718.Type.BITSTRING) {
          if (_0x2b80b9.value.length > 1) {
            _0x542884 += "0x" + _0x5e36fb.util.bytesToHex(_0x2b80b9.value.slice(1));
          } else {
            _0x542884 += "(none)";
          }
          if (_0x2b80b9.value.length > 0) {
            var _0x239c8c = _0x2b80b9.value.charCodeAt(0);
            if (_0x239c8c == 1) {
              _0x542884 += " (1 unused bit shown)";
            } else if (_0x239c8c > 1) {
              _0x542884 += " (" + _0x239c8c + " unused bits shown)";
            }
          }
        } else if (_0x2b80b9.type === _0x563718.Type.OCTETSTRING) {
          if (!_0x32fd03.test(_0x2b80b9.value)) {
            _0x542884 += "(" + _0x2b80b9.value + ") ";
          }
          _0x542884 += "0x" + _0x5e36fb.util.bytesToHex(_0x2b80b9.value);
        } else if (_0x2b80b9.type === _0x563718.Type.UTF8) {
          try {
            _0x542884 += _0x5e36fb.util.decodeUtf8(_0x2b80b9.value);
          } catch (_0x35b241) {
            if (_0x35b241.message === "URI malformed") {
              _0x542884 += "0x" + _0x5e36fb.util.bytesToHex(_0x2b80b9.value) + " (malformed UTF8)";
            } else {
              throw _0x35b241;
            }
          }
        } else if (_0x2b80b9.type === _0x563718.Type.PRINTABLESTRING || _0x2b80b9.type === _0x563718.Type.IA5String) {
          _0x542884 += _0x2b80b9.value;
        } else if (_0x32fd03.test(_0x2b80b9.value)) {
          _0x542884 += "0x" + _0x5e36fb.util.bytesToHex(_0x2b80b9.value);
        } else if (_0x2b80b9.value.length === 0) {
          _0x542884 += "[null]";
        } else {
          _0x542884 += _0x2b80b9.value;
        }
      }
      return _0x542884;
    };
  }
});
var require_md = __commonJS({
  "node_modules/node-forge/lib/md.js"(_0x3107b8, _0x2388ed) {
    var _0x516e21 = require_forge();
    _0x2388ed.exports = _0x516e21.md = _0x516e21.md || {};
    _0x516e21.md.algorithms = _0x516e21.md.algorithms || {};
  }
});
var require_hmac = __commonJS({
  "node_modules/node-forge/lib/hmac.js"(_0x4b71d4, _0x4b1b10) {
    var _0x238849 = require_forge();
    require_md();
    require_util();
    var _0x223fb0 = _0x4b1b10.exports = _0x238849.hmac = _0x238849.hmac || {};
    _0x223fb0.create = function () {
      var _0x22768e = null;
      var _0x19284e = null;
      var _0x1024d1 = null;
      var _0x38de20 = null;
      var _0x4eca63 = {};
      _0x4eca63.start = function (_0x22d75e, _0x54c9ee) {
        if (_0x22d75e !== null) {
          if (typeof _0x22d75e === "string") {
            _0x22d75e = _0x22d75e.toLowerCase();
            if (_0x22d75e in _0x238849.md.algorithms) {
              _0x19284e = _0x238849.md.algorithms[_0x22d75e].create();
            } else {
              throw new Error("Unknown hash algorithm \"" + _0x22d75e + "\"");
            }
          } else {
            _0x19284e = _0x22d75e;
          }
        }
        if (_0x54c9ee === null) {
          _0x54c9ee = _0x22768e;
        } else {
          if (typeof _0x54c9ee === "string") {
            _0x54c9ee = _0x238849.util.createBuffer(_0x54c9ee);
          } else if (_0x238849.util.isArray(_0x54c9ee)) {
            var _0x4e001f = _0x54c9ee;
            _0x54c9ee = _0x238849.util.createBuffer();
            for (var _0x31c48e = 0; _0x31c48e < _0x4e001f.length; ++_0x31c48e) {
              _0x54c9ee.putByte(_0x4e001f[_0x31c48e]);
            }
          }
          var _0x26c305 = _0x54c9ee.length();
          if (_0x26c305 > _0x19284e.blockLength) {
            _0x19284e.start();
            _0x19284e.update(_0x54c9ee.bytes());
            _0x54c9ee = _0x19284e.digest();
          }
          _0x1024d1 = _0x238849.util.createBuffer();
          _0x38de20 = _0x238849.util.createBuffer();
          _0x26c305 = _0x54c9ee.length();
          for (var _0x31c48e = 0; _0x31c48e < _0x26c305; ++_0x31c48e) {
            var _0x4e001f = _0x54c9ee.at(_0x31c48e);
            _0x1024d1.putByte(_0x4e001f ^ 54);
            _0x38de20.putByte(_0x4e001f ^ 92);
          }
          if (_0x26c305 < _0x19284e.blockLength) {
            var _0x4e001f = _0x19284e.blockLength - _0x26c305;
            for (var _0x31c48e = 0; _0x31c48e < _0x4e001f; ++_0x31c48e) {
              _0x1024d1.putByte(54);
              _0x38de20.putByte(92);
            }
          }
          _0x22768e = _0x54c9ee;
          _0x1024d1 = _0x1024d1.bytes();
          _0x38de20 = _0x38de20.bytes();
        }
        _0x19284e.start();
        _0x19284e.update(_0x1024d1);
      };
      _0x4eca63.update = function (_0x3f0f10) {
        _0x19284e.update(_0x3f0f10);
      };
      _0x4eca63.getMac = function () {
        var _0x52598d = _0x19284e.digest().bytes();
        _0x19284e.start();
        _0x19284e.update(_0x38de20);
        _0x19284e.update(_0x52598d);
        return _0x19284e.digest();
      };
      _0x4eca63.digest = _0x4eca63.getMac;
      return _0x4eca63;
    };
  }
});
var require_md5 = __commonJS({
  "node_modules/node-forge/lib/md5.js"(_0x57b6f2, _0x38bd5f) {
    var _0x4f096d = require_forge();
    require_md();
    require_util();
    var _0x17a97c = _0x38bd5f.exports = _0x4f096d.md5 = _0x4f096d.md5 || {};
    _0x4f096d.md.md5 = _0x4f096d.md.algorithms.md5 = _0x17a97c;
    _0x17a97c.create = function () {
      if (!_0x33efb4) {
        _0x1a0233();
      }
      var _0x5d6b7b = null;
      var _0x1fdee4 = _0x4f096d.util.createBuffer();
      var _0x678db4 = new Array(16);
      var _0x269eb1 = {
        algorithm: "md5",
        blockLength: 64,
        digestLength: 16,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 8
      };
      _0x269eb1.start = function () {
        _0x269eb1.messageLength = 0;
        _0x269eb1.fullMessageLength = _0x269eb1.messageLength64 = [];
        var _0xfed652 = _0x269eb1.messageLengthSize / 4;
        for (var _0x9851f9 = 0; _0x9851f9 < _0xfed652; ++_0x9851f9) {
          _0x269eb1.fullMessageLength.push(0);
        }
        _0x1fdee4 = _0x4f096d.util.createBuffer();
        _0x5d6b7b = {
          h0: 1732584193,
          h1: 4023233417,
          h2: 2562383102,
          h3: 271733878
        };
        return _0x269eb1;
      };
      _0x269eb1.start();
      _0x269eb1.update = function (_0x3a0a34, _0x302c3a) {
        if (_0x302c3a === "utf8") {
          _0x3a0a34 = _0x4f096d.util.encodeUtf8(_0x3a0a34);
        }
        var _0x588138 = _0x3a0a34.length;
        _0x269eb1.messageLength += _0x588138;
        _0x588138 = [_0x588138 / 4294967296 >>> 0, _0x588138 >>> 0];
        for (var _0x265f08 = _0x269eb1.fullMessageLength.length - 1; _0x265f08 >= 0; --_0x265f08) {
          _0x269eb1.fullMessageLength[_0x265f08] += _0x588138[1];
          _0x588138[1] = _0x588138[0] + (_0x269eb1.fullMessageLength[_0x265f08] / 4294967296 >>> 0);
          _0x269eb1.fullMessageLength[_0x265f08] = _0x269eb1.fullMessageLength[_0x265f08] >>> 0;
          _0x588138[0] = _0x588138[1] / 4294967296 >>> 0;
        }
        _0x1fdee4.putBytes(_0x3a0a34);
        _0xd1f519(_0x5d6b7b, _0x678db4, _0x1fdee4);
        if (_0x1fdee4.read > 2048 || _0x1fdee4.length() === 0) {
          _0x1fdee4.compact();
        }
        return _0x269eb1;
      };
      _0x269eb1.digest = function () {
        var _0x113e3f = _0x4f096d.util.createBuffer();
        _0x113e3f.putBytes(_0x1fdee4.bytes());
        var _0x3ed0c8 = _0x269eb1.fullMessageLength[_0x269eb1.fullMessageLength.length - 1] + _0x269eb1.messageLengthSize;
        var _0x5e42b5 = _0x3ed0c8 & _0x269eb1.blockLength - 1;
        _0x113e3f.putBytes(_0xa7ccc9.substr(0, _0x269eb1.blockLength - _0x5e42b5));
        var _0x33907b;
        var _0x2522e6 = 0;
        for (var _0x29f7cc = _0x269eb1.fullMessageLength.length - 1; _0x29f7cc >= 0; --_0x29f7cc) {
          _0x33907b = _0x269eb1.fullMessageLength[_0x29f7cc] * 8 + _0x2522e6;
          _0x2522e6 = _0x33907b / 4294967296 >>> 0;
          _0x113e3f.putInt32Le(_0x33907b >>> 0);
        }
        var _0x1d2bdc = {
          h0: _0x5d6b7b.h0,
          h1: _0x5d6b7b.h1,
          h2: _0x5d6b7b.h2,
          h3: _0x5d6b7b.h3
        };
        _0xd1f519(_0x1d2bdc, _0x678db4, _0x113e3f);
        var _0x7957cb = _0x4f096d.util.createBuffer();
        _0x7957cb.putInt32Le(_0x1d2bdc.h0);
        _0x7957cb.putInt32Le(_0x1d2bdc.h1);
        _0x7957cb.putInt32Le(_0x1d2bdc.h2);
        _0x7957cb.putInt32Le(_0x1d2bdc.h3);
        return _0x7957cb;
      };
      return _0x269eb1;
    };
    var _0xa7ccc9 = null;
    var _0x22447f = null;
    var _0xdcb63 = null;
    var _0x3200a1 = null;
    var _0x33efb4 = false;
    function _0x1a0233() {
      _0xa7ccc9 = String.fromCharCode(128);
      _0xa7ccc9 += _0x4f096d.util.fillString(String.fromCharCode(0), 64);
      _0x22447f = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 6, 11, 0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 5, 8, 11, 14, 1, 4, 7, 10, 13, 0, 3, 6, 9, 12, 15, 2, 0, 7, 14, 5, 12, 3, 10, 1, 8, 15, 6, 13, 4, 11, 2, 9];
      _0xdcb63 = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21];
      _0x3200a1 = new Array(64);
      for (var _0x51b026 = 0; _0x51b026 < 64; ++_0x51b026) {
        _0x3200a1[_0x51b026] = Math.floor(Math.abs(Math.sin(_0x51b026 + 1)) * 4294967296);
      }
      _0x33efb4 = true;
    }
    function _0xd1f519(_0x51f8ac, _0x3489e5, _0xb5cd85) {
      var _0x4355e9;
      var _0x51aadf;
      var _0x25d1f5;
      var _0x7d6db5;
      var _0x3c4bd8;
      var _0x3d54ce;
      var _0x5aa67d;
      var _0x22757f;
      var _0x3fb9d9 = _0xb5cd85.length();
      while (_0x3fb9d9 >= 64) {
        _0x51aadf = _0x51f8ac.h0;
        _0x25d1f5 = _0x51f8ac.h1;
        _0x7d6db5 = _0x51f8ac.h2;
        _0x3c4bd8 = _0x51f8ac.h3;
        for (_0x22757f = 0; _0x22757f < 16; ++_0x22757f) {
          _0x3489e5[_0x22757f] = _0xb5cd85.getInt32Le();
          _0x3d54ce = _0x3c4bd8 ^ _0x25d1f5 & (_0x7d6db5 ^ _0x3c4bd8);
          _0x4355e9 = _0x51aadf + _0x3d54ce + _0x3200a1[_0x22757f] + _0x3489e5[_0x22757f];
          _0x5aa67d = _0xdcb63[_0x22757f];
          _0x51aadf = _0x3c4bd8;
          _0x3c4bd8 = _0x7d6db5;
          _0x7d6db5 = _0x25d1f5;
          _0x25d1f5 += _0x4355e9 << _0x5aa67d | _0x4355e9 >>> 32 - _0x5aa67d;
        }
        for (; _0x22757f < 32; ++_0x22757f) {
          _0x3d54ce = _0x7d6db5 ^ _0x3c4bd8 & (_0x25d1f5 ^ _0x7d6db5);
          _0x4355e9 = _0x51aadf + _0x3d54ce + _0x3200a1[_0x22757f] + _0x3489e5[_0x22447f[_0x22757f]];
          _0x5aa67d = _0xdcb63[_0x22757f];
          _0x51aadf = _0x3c4bd8;
          _0x3c4bd8 = _0x7d6db5;
          _0x7d6db5 = _0x25d1f5;
          _0x25d1f5 += _0x4355e9 << _0x5aa67d | _0x4355e9 >>> 32 - _0x5aa67d;
        }
        for (; _0x22757f < 48; ++_0x22757f) {
          _0x3d54ce = _0x25d1f5 ^ _0x7d6db5 ^ _0x3c4bd8;
          _0x4355e9 = _0x51aadf + _0x3d54ce + _0x3200a1[_0x22757f] + _0x3489e5[_0x22447f[_0x22757f]];
          _0x5aa67d = _0xdcb63[_0x22757f];
          _0x51aadf = _0x3c4bd8;
          _0x3c4bd8 = _0x7d6db5;
          _0x7d6db5 = _0x25d1f5;
          _0x25d1f5 += _0x4355e9 << _0x5aa67d | _0x4355e9 >>> 32 - _0x5aa67d;
        }
        for (; _0x22757f < 64; ++_0x22757f) {
          _0x3d54ce = _0x7d6db5 ^ (_0x25d1f5 | ~_0x3c4bd8);
          _0x4355e9 = _0x51aadf + _0x3d54ce + _0x3200a1[_0x22757f] + _0x3489e5[_0x22447f[_0x22757f]];
          _0x5aa67d = _0xdcb63[_0x22757f];
          _0x51aadf = _0x3c4bd8;
          _0x3c4bd8 = _0x7d6db5;
          _0x7d6db5 = _0x25d1f5;
          _0x25d1f5 += _0x4355e9 << _0x5aa67d | _0x4355e9 >>> 32 - _0x5aa67d;
        }
        _0x51f8ac.h0 = _0x51f8ac.h0 + _0x51aadf | 0;
        _0x51f8ac.h1 = _0x51f8ac.h1 + _0x25d1f5 | 0;
        _0x51f8ac.h2 = _0x51f8ac.h2 + _0x7d6db5 | 0;
        _0x51f8ac.h3 = _0x51f8ac.h3 + _0x3c4bd8 | 0;
        _0x3fb9d9 -= 64;
      }
    }
  }
});
var require_pem = __commonJS({
  "node_modules/node-forge/lib/pem.js"(_0x34018a, _0x5876b1) {
    var _0x4efd55 = require_forge();
    require_util();
    var _0x61fc20 = _0x5876b1.exports = _0x4efd55.pem = _0x4efd55.pem || {};
    _0x61fc20.encode = function (_0x24ed27, _0x24d066) {
      _0x24d066 = _0x24d066 || {};
      var _0x35d8a2 = "-----BEGIN " + _0x24ed27.type + "-----\r\n";
      var _0x255cb1;
      if (_0x24ed27.procType) {
        _0x255cb1 = {
          name: "Proc-Type",
          values: [String(_0x24ed27.procType.version), _0x24ed27.procType.type]
        };
        _0x35d8a2 += _0x2bdbc7(_0x255cb1);
      }
      if (_0x24ed27.contentDomain) {
        _0x255cb1 = {
          name: "Content-Domain",
          values: [_0x24ed27.contentDomain]
        };
        _0x35d8a2 += _0x2bdbc7(_0x255cb1);
      }
      if (_0x24ed27.dekInfo) {
        _0x255cb1 = {
          name: "DEK-Info",
          values: [_0x24ed27.dekInfo.algorithm]
        };
        if (_0x24ed27.dekInfo.parameters) {
          _0x255cb1.values.push(_0x24ed27.dekInfo.parameters);
        }
        _0x35d8a2 += _0x2bdbc7(_0x255cb1);
      }
      if (_0x24ed27.headers) {
        for (var _0x11582f = 0; _0x11582f < _0x24ed27.headers.length; ++_0x11582f) {
          _0x35d8a2 += _0x2bdbc7(_0x24ed27.headers[_0x11582f]);
        }
      }
      if (_0x24ed27.procType) {
        _0x35d8a2 += "\r\n";
      }
      _0x35d8a2 += _0x4efd55.util.encode64(_0x24ed27.body, _0x24d066.maxline || 64) + "\r\n";
      _0x35d8a2 += "-----END " + _0x24ed27.type + "-----\r\n";
      return _0x35d8a2;
    };
    _0x61fc20.decode = function (_0x5afe99) {
      var _0xbe9c0f = [];
      var _0x5374d3 = /\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g;
      var _0x3fc6cd = /([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/;
      var _0x4db871 = /\r?\n/;
      var _0x2cb63b;
      while (true) {
        _0x2cb63b = _0x5374d3.exec(_0x5afe99);
        if (!_0x2cb63b) {
          break;
        }
        var _0x1db2b5 = _0x2cb63b[1];
        if (_0x1db2b5 === "NEW CERTIFICATE REQUEST") {
          _0x1db2b5 = "CERTIFICATE REQUEST";
        }
        var _0x263f70 = {
          type: _0x1db2b5,
          procType: null,
          contentDomain: null,
          dekInfo: null,
          headers: [],
          body: _0x4efd55.util.decode64(_0x2cb63b[3])
        };
        _0xbe9c0f.push(_0x263f70);
        if (!_0x2cb63b[2]) {
          continue;
        }
        var _0x16e2be = _0x2cb63b[2].split(_0x4db871);
        var _0x353a78 = 0;
        while (_0x2cb63b && _0x353a78 < _0x16e2be.length) {
          var _0x23bc2b = _0x16e2be[_0x353a78].replace(/\s+$/, "");
          for (var _0x34d4a7 = _0x353a78 + 1; _0x34d4a7 < _0x16e2be.length; ++_0x34d4a7) {
            var _0x4c64b3 = _0x16e2be[_0x34d4a7];
            if (!/\s/.test(_0x4c64b3[0])) {
              break;
            }
            _0x23bc2b += _0x4c64b3;
            _0x353a78 = _0x34d4a7;
          }
          _0x2cb63b = _0x23bc2b.match(_0x3fc6cd);
          if (_0x2cb63b) {
            var _0xca365d = {
              name: _0x2cb63b[1],
              values: []
            };
            var _0x32ea50 = _0x2cb63b[2].split(",");
            for (var _0x61606c = 0; _0x61606c < _0x32ea50.length; ++_0x61606c) {
              _0xca365d.values.push(_0x5792c4(_0x32ea50[_0x61606c]));
            }
            if (!_0x263f70.procType) {
              if (_0xca365d.name !== "Proc-Type") {
                throw new Error("Invalid PEM formatted message. The first encapsulated header must be \"Proc-Type\".");
              } else if (_0xca365d.values.length !== 2) {
                throw new Error("Invalid PEM formatted message. The \"Proc-Type\" header must have two subfields.");
              }
              _0x263f70.procType = {
                version: _0x32ea50[0],
                type: _0x32ea50[1]
              };
            } else if (!_0x263f70.contentDomain && _0xca365d.name === "Content-Domain") {
              _0x263f70.contentDomain = _0x32ea50[0] || "";
            } else if (!_0x263f70.dekInfo && _0xca365d.name === "DEK-Info") {
              if (_0xca365d.values.length === 0) {
                throw new Error("Invalid PEM formatted message. The \"DEK-Info\" header must have at least one subfield.");
              }
              _0x263f70.dekInfo = {
                algorithm: _0x32ea50[0],
                parameters: _0x32ea50[1] || null
              };
            } else {
              _0x263f70.headers.push(_0xca365d);
            }
          }
          ++_0x353a78;
        }
        if (_0x263f70.procType === "ENCRYPTED" && !_0x263f70.dekInfo) {
          throw new Error("Invalid PEM formatted message. The \"DEK-Info\" header must be present if \"Proc-Type\" is \"ENCRYPTED\".");
        }
      }
      if (_0xbe9c0f.length === 0) {
        throw new Error("Invalid PEM formatted message.");
      }
      return _0xbe9c0f;
    };
    function _0x2bdbc7(_0x435e87) {
      var _0x3c19ed = _0x435e87.name + ": ";
      var _0xdd676a = [];
      function _0x4b394f(_0xdbf6e0, _0x517314) {
        return " " + _0x517314;
      }
      for (var _0x3320dd = 0; _0x3320dd < _0x435e87.values.length; ++_0x3320dd) {
        _0xdd676a.push(_0x435e87.values[_0x3320dd].replace(/^(\S+\r\n)/, _0x4b394f));
      }
      _0x3c19ed += _0xdd676a.join(",") + "\r\n";
      var _0x45fee0 = 0;
      var _0x5c6e23 = -1;
      for (var _0x3320dd = 0; _0x3320dd < _0x3c19ed.length; ++_0x3320dd, ++_0x45fee0) {
        if (_0x45fee0 > 65 && _0x5c6e23 !== -1) {
          var _0x3dffee = _0x3c19ed[_0x5c6e23];
          if (_0x3dffee === ",") {
            ++_0x5c6e23;
            _0x3c19ed = _0x3c19ed.substr(0, _0x5c6e23) + "\r\n " + _0x3c19ed.substr(_0x5c6e23);
          } else {
            _0x3c19ed = _0x3c19ed.substr(0, _0x5c6e23) + "\r\n" + _0x3dffee + _0x3c19ed.substr(_0x5c6e23 + 1);
          }
          _0x45fee0 = _0x3320dd - _0x5c6e23 - 1;
          _0x5c6e23 = -1;
          ++_0x3320dd;
        } else if (_0x3c19ed[_0x3320dd] === " " || _0x3c19ed[_0x3320dd] === "\t" || _0x3c19ed[_0x3320dd] === ",") {
          _0x5c6e23 = _0x3320dd;
        }
      }
      return _0x3c19ed;
    }
    function _0x5792c4(_0x242584) {
      return _0x242584.replace(/^\s+/, "");
    }
  }
});
var require_des = __commonJS({
  "node_modules/node-forge/lib/des.js"(_0x4bc226, _0xf34721) {
    var _0x269a2c = require_forge();
    require_cipher();
    require_cipherModes();
    require_util();
    _0xf34721.exports = _0x269a2c.des = _0x269a2c.des || {};
    _0x269a2c.des.startEncrypting = function (_0x3a2b0c, _0x75ce86, _0x5977ac, _0x469230) {
      var _0x44d12a = _0x935e37({
        key: _0x3a2b0c,
        output: _0x5977ac,
        decrypt: false,
        mode: _0x469230 || (_0x75ce86 === null ? "ECB" : "CBC")
      });
      _0x44d12a.start(_0x75ce86);
      return _0x44d12a;
    };
    _0x269a2c.des.createEncryptionCipher = function (_0x49a811, _0x1992bd) {
      return _0x935e37({
        key: _0x49a811,
        output: null,
        decrypt: false,
        mode: _0x1992bd
      });
    };
    _0x269a2c.des.startDecrypting = function (_0x36f199, _0x5d0358, _0x3d8c89, _0x24582c) {
      var _0x40f827 = _0x935e37({
        key: _0x36f199,
        output: _0x3d8c89,
        decrypt: true,
        mode: _0x24582c || (_0x5d0358 === null ? "ECB" : "CBC")
      });
      _0x40f827.start(_0x5d0358);
      return _0x40f827;
    };
    _0x269a2c.des.createDecryptionCipher = function (_0x4b8b79, _0x46b485) {
      return _0x935e37({
        key: _0x4b8b79,
        output: null,
        decrypt: true,
        mode: _0x46b485
      });
    };
    _0x269a2c.des.Algorithm = function (_0x20995e, _0x1e5223) {
      var _0x3d66b9 = this;
      _0x3d66b9.name = _0x20995e;
      _0x3d66b9.mode = new _0x1e5223({
        blockSize: 8,
        cipher: {
          encrypt: function (_0x58c409, _0x53df00) {
            return _0x5021d1(_0x3d66b9._keys, _0x58c409, _0x53df00, false);
          },
          decrypt: function (_0x48093b, _0x2a4d73) {
            return _0x5021d1(_0x3d66b9._keys, _0x48093b, _0x2a4d73, true);
          }
        }
      });
      _0x3d66b9._init = false;
    };
    _0x269a2c.des.Algorithm.prototype.initialize = function (_0x43ee3a) {
      if (this._init) {
        return;
      }
      var _0x5da1cb = _0x269a2c.util.createBuffer(_0x43ee3a.key);
      if (this.name.indexOf("3DES") === 0) {
        if (_0x5da1cb.length() !== 24) {
          throw new Error("Invalid Triple-DES key size: " + _0x5da1cb.length() * 8);
        }
      }
      this._keys = _0x3a34fb(_0x5da1cb);
      this._init = true;
    };
    _0x474dc8("DES-ECB", _0x269a2c.cipher.modes.ecb);
    _0x474dc8("DES-CBC", _0x269a2c.cipher.modes.cbc);
    _0x474dc8("DES-CFB", _0x269a2c.cipher.modes.cfb);
    _0x474dc8("DES-OFB", _0x269a2c.cipher.modes.ofb);
    _0x474dc8("DES-CTR", _0x269a2c.cipher.modes.ctr);
    _0x474dc8("3DES-ECB", _0x269a2c.cipher.modes.ecb);
    _0x474dc8("3DES-CBC", _0x269a2c.cipher.modes.cbc);
    _0x474dc8("3DES-CFB", _0x269a2c.cipher.modes.cfb);
    _0x474dc8("3DES-OFB", _0x269a2c.cipher.modes.ofb);
    _0x474dc8("3DES-CTR", _0x269a2c.cipher.modes.ctr);
    function _0x474dc8(_0x4b75b3, _0x36de7b) {
      function _0x2f57d8() {
        return new _0x269a2c.des.Algorithm(_0x4b75b3, _0x36de7b);
      }
      _0x269a2c.cipher.registerAlgorithm(_0x4b75b3, _0x2f57d8);
    }
    var _0x39a84b = [16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756];
    var _0x13ec2f = [-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344];
    var _0x58b216 = [520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584];
    var _0x51a243 = [8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928];
    var _0x59ace2 = [256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080];
    var _0x3004f9 = [536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312];
    var _0x29aec2 = [2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154];
    var _0x305596 = [268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696];
    function _0x3a34fb(_0x4fbb39) {
      var _0x188510 = [0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964];
      var _0x5c6a89 = [0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697];
      var _0x3270e2 = [0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272];
      var _0x53700f = [0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144];
      var _0xed7d40 = [0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256];
      var _0x219c36 = [0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488];
      var _0x2fa050 = [0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746];
      var _0x2d5a03 = [0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568];
      var _0x48aa44 = [0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578];
      var _0xd57b05 = [0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488];
      var _0x19c7db = [0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800];
      var _0x3048d6 = [0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744];
      var _0x376401 = [0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128];
      var _0x47e14e = [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261];
      var _0x15bf14 = _0x4fbb39.length() > 8 ? 3 : 1;
      var _0x3d348d = [];
      var _0xcea060 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0];
      var _0x175bb8 = 0;
      var _0x1676fc;
      for (var _0x3bcd94 = 0; _0x3bcd94 < _0x15bf14; _0x3bcd94++) {
        var _0x5c6731 = _0x4fbb39.getInt32();
        var _0x4332e2 = _0x4fbb39.getInt32();
        _0x1676fc = (_0x5c6731 >>> 4 ^ _0x4332e2) & 252645135;
        _0x4332e2 ^= _0x1676fc;
        _0x5c6731 ^= _0x1676fc << 4;
        _0x1676fc = (_0x4332e2 >>> -16 ^ _0x5c6731) & 65535;
        _0x5c6731 ^= _0x1676fc;
        _0x4332e2 ^= _0x1676fc << -16;
        _0x1676fc = (_0x5c6731 >>> 2 ^ _0x4332e2) & 858993459;
        _0x4332e2 ^= _0x1676fc;
        _0x5c6731 ^= _0x1676fc << 2;
        _0x1676fc = (_0x4332e2 >>> -16 ^ _0x5c6731) & 65535;
        _0x5c6731 ^= _0x1676fc;
        _0x4332e2 ^= _0x1676fc << -16;
        _0x1676fc = (_0x5c6731 >>> 1 ^ _0x4332e2) & 1431655765;
        _0x4332e2 ^= _0x1676fc;
        _0x5c6731 ^= _0x1676fc << 1;
        _0x1676fc = (_0x4332e2 >>> 8 ^ _0x5c6731) & 16711935;
        _0x5c6731 ^= _0x1676fc;
        _0x4332e2 ^= _0x1676fc << 8;
        _0x1676fc = (_0x5c6731 >>> 1 ^ _0x4332e2) & 1431655765;
        _0x4332e2 ^= _0x1676fc;
        _0x5c6731 ^= _0x1676fc << 1;
        _0x1676fc = _0x5c6731 << 8 | _0x4332e2 >>> 20 & 240;
        _0x5c6731 = _0x4332e2 << 24 | _0x4332e2 << 8 & 16711680 | _0x4332e2 >>> 8 & 65280 | _0x4332e2 >>> 24 & 240;
        _0x4332e2 = _0x1676fc;
        for (var _0x2a173d = 0; _0x2a173d < _0xcea060.length; ++_0x2a173d) {
          if (_0xcea060[_0x2a173d]) {
            _0x5c6731 = _0x5c6731 << 2 | _0x5c6731 >>> 26;
            _0x4332e2 = _0x4332e2 << 2 | _0x4332e2 >>> 26;
          } else {
            _0x5c6731 = _0x5c6731 << 1 | _0x5c6731 >>> 27;
            _0x4332e2 = _0x4332e2 << 1 | _0x4332e2 >>> 27;
          }
          _0x5c6731 &= -15;
          _0x4332e2 &= -15;
          var _0x292f7d = _0x188510[_0x5c6731 >>> 28] | _0x5c6a89[_0x5c6731 >>> 24 & 15] | _0x3270e2[_0x5c6731 >>> 20 & 15] | _0x53700f[_0x5c6731 >>> 16 & 15] | _0xed7d40[_0x5c6731 >>> 12 & 15] | _0x219c36[_0x5c6731 >>> 8 & 15] | _0x2fa050[_0x5c6731 >>> 4 & 15];
          var _0x45a70a = _0x2d5a03[_0x4332e2 >>> 28] | _0x48aa44[_0x4332e2 >>> 24 & 15] | _0xd57b05[_0x4332e2 >>> 20 & 15] | _0x19c7db[_0x4332e2 >>> 16 & 15] | _0x3048d6[_0x4332e2 >>> 12 & 15] | _0x376401[_0x4332e2 >>> 8 & 15] | _0x47e14e[_0x4332e2 >>> 4 & 15];
          _0x1676fc = (_0x45a70a >>> 16 ^ _0x292f7d) & 65535;
          _0x3d348d[_0x175bb8++] = _0x292f7d ^ _0x1676fc;
          _0x3d348d[_0x175bb8++] = _0x45a70a ^ _0x1676fc << 16;
        }
      }
      return _0x3d348d;
    }
    function _0x5021d1(_0x4d5123, _0x599398, _0x531100, _0xa42a4a) {
      var _0x2c9582 = _0x4d5123.length === 32 ? 3 : 9;
      var _0x7d662e;
      if (_0x2c9582 === 3) {
        _0x7d662e = _0xa42a4a ? [30, -2, -2] : [0, 32, 2];
      } else {
        _0x7d662e = _0xa42a4a ? [94, 62, -2, 32, 64, 2, 30, -2, -2] : [0, 32, 2, 62, 30, -2, 64, 96, 2];
      }
      var _0x31a86e;
      var _0x47ca0e = _0x599398[0];
      var _0x454ac8 = _0x599398[1];
      _0x31a86e = (_0x47ca0e >>> 4 ^ _0x454ac8) & 252645135;
      _0x454ac8 ^= _0x31a86e;
      _0x47ca0e ^= _0x31a86e << 4;
      _0x31a86e = (_0x47ca0e >>> 16 ^ _0x454ac8) & 65535;
      _0x454ac8 ^= _0x31a86e;
      _0x47ca0e ^= _0x31a86e << 16;
      _0x31a86e = (_0x454ac8 >>> 2 ^ _0x47ca0e) & 858993459;
      _0x47ca0e ^= _0x31a86e;
      _0x454ac8 ^= _0x31a86e << 2;
      _0x31a86e = (_0x454ac8 >>> 8 ^ _0x47ca0e) & 16711935;
      _0x47ca0e ^= _0x31a86e;
      _0x454ac8 ^= _0x31a86e << 8;
      _0x31a86e = (_0x47ca0e >>> 1 ^ _0x454ac8) & 1431655765;
      _0x454ac8 ^= _0x31a86e;
      _0x47ca0e ^= _0x31a86e << 1;
      _0x47ca0e = _0x47ca0e << 1 | _0x47ca0e >>> 31;
      _0x454ac8 = _0x454ac8 << 1 | _0x454ac8 >>> 31;
      for (var _0x3fc329 = 0; _0x3fc329 < _0x2c9582; _0x3fc329 += 3) {
        var _0x49a41b = _0x7d662e[_0x3fc329 + 1];
        var _0x492c17 = _0x7d662e[_0x3fc329 + 2];
        for (var _0x1cce12 = _0x7d662e[_0x3fc329]; _0x1cce12 != _0x49a41b; _0x1cce12 += _0x492c17) {
          var _0x2bc33f = _0x454ac8 ^ _0x4d5123[_0x1cce12];
          var _0x238ee2 = (_0x454ac8 >>> 4 | _0x454ac8 << 28) ^ _0x4d5123[_0x1cce12 + 1];
          _0x31a86e = _0x47ca0e;
          _0x47ca0e = _0x454ac8;
          _0x454ac8 = _0x31a86e ^ (_0x13ec2f[_0x2bc33f >>> 24 & 63] | _0x51a243[_0x2bc33f >>> 16 & 63] | _0x3004f9[_0x2bc33f >>> 8 & 63] | _0x305596[_0x2bc33f & 63] | _0x39a84b[_0x238ee2 >>> 24 & 63] | _0x58b216[_0x238ee2 >>> 16 & 63] | _0x59ace2[_0x238ee2 >>> 8 & 63] | _0x29aec2[_0x238ee2 & 63]);
        }
        _0x31a86e = _0x47ca0e;
        _0x47ca0e = _0x454ac8;
        _0x454ac8 = _0x31a86e;
      }
      _0x47ca0e = _0x47ca0e >>> 1 | _0x47ca0e << 31;
      _0x454ac8 = _0x454ac8 >>> 1 | _0x454ac8 << 31;
      _0x31a86e = (_0x47ca0e >>> 1 ^ _0x454ac8) & 1431655765;
      _0x454ac8 ^= _0x31a86e;
      _0x47ca0e ^= _0x31a86e << 1;
      _0x31a86e = (_0x454ac8 >>> 8 ^ _0x47ca0e) & 16711935;
      _0x47ca0e ^= _0x31a86e;
      _0x454ac8 ^= _0x31a86e << 8;
      _0x31a86e = (_0x454ac8 >>> 2 ^ _0x47ca0e) & 858993459;
      _0x47ca0e ^= _0x31a86e;
      _0x454ac8 ^= _0x31a86e << 2;
      _0x31a86e = (_0x47ca0e >>> 16 ^ _0x454ac8) & 65535;
      _0x454ac8 ^= _0x31a86e;
      _0x47ca0e ^= _0x31a86e << 16;
      _0x31a86e = (_0x47ca0e >>> 4 ^ _0x454ac8) & 252645135;
      _0x454ac8 ^= _0x31a86e;
      _0x47ca0e ^= _0x31a86e << 4;
      _0x531100[0] = _0x47ca0e;
      _0x531100[1] = _0x454ac8;
    }
    function _0x935e37(_0x802cc0) {
      _0x802cc0 = _0x802cc0 || {};
      var _0x42549d = (_0x802cc0.mode || "CBC").toUpperCase();
      var _0x52480c = "DES-" + _0x42549d;
      var _0x5b30ff;
      if (_0x802cc0.decrypt) {
        _0x5b30ff = _0x269a2c.cipher.createDecipher(_0x52480c, _0x802cc0.key);
      } else {
        _0x5b30ff = _0x269a2c.cipher.createCipher(_0x52480c, _0x802cc0.key);
      }
      var _0x2e36d8 = _0x5b30ff.start;
      _0x5b30ff.start = function (_0x22e04d, _0x147501) {
        var _0x36bee6 = null;
        if (_0x147501 instanceof _0x269a2c.util.ByteBuffer) {
          _0x36bee6 = _0x147501;
          _0x147501 = {};
        }
        _0x147501 = _0x147501 || {};
        _0x147501.output = _0x36bee6;
        _0x147501.iv = _0x22e04d;
        _0x2e36d8.call(_0x5b30ff, _0x147501);
      };
      return _0x5b30ff;
    }
  }
});
var require_crypto = __commonJS({
  "(disabled):crypto"() {}
});
var require_pbkdf2 = __commonJS({
  "node_modules/node-forge/lib/pbkdf2.js"(_0x6d7969, _0x2e7ece) {
    var _0x856e84 = require_forge();
    require_hmac();
    require_md();
    require_util();
    var _0x146614 = _0x856e84.pkcs5 = _0x856e84.pkcs5 || {};
    var _0x530dc4;
    if (_0x856e84.util.isNodejs && !_0x856e84.options.usePureJavaScript) {
      _0x530dc4 = require_crypto();
    }
    _0x2e7ece.exports = _0x856e84.pbkdf2 = _0x146614.pbkdf2 = function (_0x26d7b1, _0x58ecce, _0x18e380, _0x2a9246, _0x169936, _0x369756) {
      if (typeof _0x169936 === "function") {
        _0x369756 = _0x169936;
        _0x169936 = null;
      }
      if (_0x856e84.util.isNodejs && !_0x856e84.options.usePureJavaScript && _0x530dc4.pbkdf2 && (_0x169936 === null || typeof _0x169936 !== "object") && (_0x530dc4.pbkdf2Sync.length > 4 || !_0x169936 || _0x169936 === "sha1")) {
        if (typeof _0x169936 !== "string") {
          _0x169936 = "sha1";
        }
        _0x26d7b1 = Buffer.from(_0x26d7b1, "binary");
        _0x58ecce = Buffer.from(_0x58ecce, "binary");
        if (!_0x369756) {
          if (_0x530dc4.pbkdf2Sync.length === 4) {
            return _0x530dc4.pbkdf2Sync(_0x26d7b1, _0x58ecce, _0x18e380, _0x2a9246).toString("binary");
          }
          return _0x530dc4.pbkdf2Sync(_0x26d7b1, _0x58ecce, _0x18e380, _0x2a9246, _0x169936).toString("binary");
        }
        if (_0x530dc4.pbkdf2Sync.length === 4) {
          return _0x530dc4.pbkdf2(_0x26d7b1, _0x58ecce, _0x18e380, _0x2a9246, function (_0x14d864, _0x545633) {
            if (_0x14d864) {
              return _0x369756(_0x14d864);
            }
            _0x369756(null, _0x545633.toString("binary"));
          });
        }
        return _0x530dc4.pbkdf2(_0x26d7b1, _0x58ecce, _0x18e380, _0x2a9246, _0x169936, function (_0x348927, _0x4bb795) {
          if (_0x348927) {
            return _0x369756(_0x348927);
          }
          _0x369756(null, _0x4bb795.toString("binary"));
        });
      }
      if (typeof _0x169936 === "undefined" || _0x169936 === null) {
        _0x169936 = "sha1";
      }
      if (typeof _0x169936 === "string") {
        if (!(_0x169936 in _0x856e84.md.algorithms)) {
          throw new Error("Unknown hash algorithm: " + _0x169936);
        }
        _0x169936 = _0x856e84.md[_0x169936].create();
      }
      var _0x1a0a0d = _0x169936.digestLength;
      if (_0x2a9246 > _0x1a0a0d * 4294967295) {
        var _0x2a1387 = new Error("Derived key is too long.");
        if (_0x369756) {
          return _0x369756(_0x2a1387);
        }
        throw _0x2a1387;
      }
      var _0x3f3148 = Math.ceil(_0x2a9246 / _0x1a0a0d);
      var _0x32bb73 = _0x2a9246 - (_0x3f3148 - 1) * _0x1a0a0d;
      var _0x42b6ce = _0x856e84.hmac.create();
      _0x42b6ce.start(_0x169936, _0x26d7b1);
      var _0x297622 = "";
      var _0x2b4d52;
      var _0x1679a8;
      var _0x370e40;
      if (!_0x369756) {
        for (var _0x3769d7 = 1; _0x3769d7 <= _0x3f3148; ++_0x3769d7) {
          _0x42b6ce.start(null, null);
          _0x42b6ce.update(_0x58ecce);
          _0x42b6ce.update(_0x856e84.util.int32ToBytes(_0x3769d7));
          _0x2b4d52 = _0x370e40 = _0x42b6ce.digest().getBytes();
          for (var _0x31f9f6 = 2; _0x31f9f6 <= _0x18e380; ++_0x31f9f6) {
            _0x42b6ce.start(null, null);
            _0x42b6ce.update(_0x370e40);
            _0x1679a8 = _0x42b6ce.digest().getBytes();
            _0x2b4d52 = _0x856e84.util.xorBytes(_0x2b4d52, _0x1679a8, _0x1a0a0d);
            _0x370e40 = _0x1679a8;
          }
          _0x297622 += _0x3769d7 < _0x3f3148 ? _0x2b4d52 : _0x2b4d52.substr(0, _0x32bb73);
        }
        return _0x297622;
      }
      var _0x3769d7 = 1;
      var _0x31f9f6;
      function _0x2578f3() {
        if (_0x3769d7 > _0x3f3148) {
          return _0x369756(null, _0x297622);
        }
        _0x42b6ce.start(null, null);
        _0x42b6ce.update(_0x58ecce);
        _0x42b6ce.update(_0x856e84.util.int32ToBytes(_0x3769d7));
        _0x2b4d52 = _0x370e40 = _0x42b6ce.digest().getBytes();
        _0x31f9f6 = 2;
        _0x775b50();
      }
      function _0x775b50() {
        if (_0x31f9f6 <= _0x18e380) {
          _0x42b6ce.start(null, null);
          _0x42b6ce.update(_0x370e40);
          _0x1679a8 = _0x42b6ce.digest().getBytes();
          _0x2b4d52 = _0x856e84.util.xorBytes(_0x2b4d52, _0x1679a8, _0x1a0a0d);
          _0x370e40 = _0x1679a8;
          ++_0x31f9f6;
          return _0x856e84.util.setImmediate(_0x775b50);
        }
        _0x297622 += _0x3769d7 < _0x3f3148 ? _0x2b4d52 : _0x2b4d52.substr(0, _0x32bb73);
        ++_0x3769d7;
        _0x2578f3();
      }
      _0x2578f3();
    };
  }
});
var require_sha256 = __commonJS({
  "node_modules/node-forge/lib/sha256.js"(_0x15f0c7, _0x415bd0) {
    var _0x32e679 = require_forge();
    require_md();
    require_util();
    var _0x2a88f2 = _0x415bd0.exports = _0x32e679.sha256 = _0x32e679.sha256 || {};
    _0x32e679.md.sha256 = _0x32e679.md.algorithms.sha256 = _0x2a88f2;
    _0x2a88f2.create = function () {
      if (!_0x54e87b) {
        _0x27de3d();
      }
      var _0x1d3132 = null;
      var _0x38ef11 = _0x32e679.util.createBuffer();
      var _0x5dc565 = new Array(64);
      var _0x2901d8 = {
        algorithm: "sha256",
        blockLength: 64,
        digestLength: 32,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 8
      };
      _0x2901d8.start = function () {
        _0x2901d8.messageLength = 0;
        _0x2901d8.fullMessageLength = _0x2901d8.messageLength64 = [];
        var _0x101bb9 = _0x2901d8.messageLengthSize / 4;
        for (var _0x571593 = 0; _0x571593 < _0x101bb9; ++_0x571593) {
          _0x2901d8.fullMessageLength.push(0);
        }
        _0x38ef11 = _0x32e679.util.createBuffer();
        _0x1d3132 = {
          h0: 1779033703,
          h1: 3144134277,
          h2: 1013904242,
          h3: 2773480762,
          h4: 1359893119,
          h5: 2600822924,
          h6: 528734635,
          h7: 1541459225
        };
        return _0x2901d8;
      };
      _0x2901d8.start();
      _0x2901d8.update = function (_0x152f28, _0x155d86) {
        if (_0x155d86 === "utf8") {
          _0x152f28 = _0x32e679.util.encodeUtf8(_0x152f28);
        }
        var _0x2bf7ae = _0x152f28.length;
        _0x2901d8.messageLength += _0x2bf7ae;
        _0x2bf7ae = [_0x2bf7ae / 4294967296 >>> 0, _0x2bf7ae >>> 0];
        for (var _0x2d422a = _0x2901d8.fullMessageLength.length - 1; _0x2d422a >= 0; --_0x2d422a) {
          _0x2901d8.fullMessageLength[_0x2d422a] += _0x2bf7ae[1];
          _0x2bf7ae[1] = _0x2bf7ae[0] + (_0x2901d8.fullMessageLength[_0x2d422a] / 4294967296 >>> 0);
          _0x2901d8.fullMessageLength[_0x2d422a] = _0x2901d8.fullMessageLength[_0x2d422a] >>> 0;
          _0x2bf7ae[0] = _0x2bf7ae[1] / 4294967296 >>> 0;
        }
        _0x38ef11.putBytes(_0x152f28);
        _0x368de2(_0x1d3132, _0x5dc565, _0x38ef11);
        if (_0x38ef11.read > 2048 || _0x38ef11.length() === 0) {
          _0x38ef11.compact();
        }
        return _0x2901d8;
      };
      _0x2901d8.digest = function () {
        var _0x28b813 = _0x32e679.util.createBuffer();
        _0x28b813.putBytes(_0x38ef11.bytes());
        var _0x2d1a22 = _0x2901d8.fullMessageLength[_0x2901d8.fullMessageLength.length - 1] + _0x2901d8.messageLengthSize;
        var _0x1d1e98 = _0x2d1a22 & _0x2901d8.blockLength - 1;
        _0x28b813.putBytes(_0x41c646.substr(0, _0x2901d8.blockLength - _0x1d1e98));
        var _0x3a7eb4;
        var _0x3bbc95;
        var _0x385e01 = _0x2901d8.fullMessageLength[0] * 8;
        for (var _0x44a57f = 0; _0x44a57f < _0x2901d8.fullMessageLength.length - 1; ++_0x44a57f) {
          _0x3a7eb4 = _0x2901d8.fullMessageLength[_0x44a57f + 1] * 8;
          _0x3bbc95 = _0x3a7eb4 / 4294967296 >>> 0;
          _0x385e01 += _0x3bbc95;
          _0x28b813.putInt32(_0x385e01 >>> 0);
          _0x385e01 = _0x3a7eb4 >>> 0;
        }
        _0x28b813.putInt32(_0x385e01);
        var _0x3e6af0 = {
          h0: _0x1d3132.h0,
          h1: _0x1d3132.h1,
          h2: _0x1d3132.h2,
          h3: _0x1d3132.h3,
          h4: _0x1d3132.h4,
          h5: _0x1d3132.h5,
          h6: _0x1d3132.h6,
          h7: _0x1d3132.h7
        };
        _0x368de2(_0x3e6af0, _0x5dc565, _0x28b813);
        var _0x376a5d = _0x32e679.util.createBuffer();
        _0x376a5d.putInt32(_0x3e6af0.h0);
        _0x376a5d.putInt32(_0x3e6af0.h1);
        _0x376a5d.putInt32(_0x3e6af0.h2);
        _0x376a5d.putInt32(_0x3e6af0.h3);
        _0x376a5d.putInt32(_0x3e6af0.h4);
        _0x376a5d.putInt32(_0x3e6af0.h5);
        _0x376a5d.putInt32(_0x3e6af0.h6);
        _0x376a5d.putInt32(_0x3e6af0.h7);
        return _0x376a5d;
      };
      return _0x2901d8;
    };
    var _0x41c646 = null;
    var _0x54e87b = false;
    var _0x55071e = null;
    function _0x27de3d() {
      _0x41c646 = String.fromCharCode(128);
      _0x41c646 += _0x32e679.util.fillString(String.fromCharCode(0), 64);
      _0x55071e = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
      _0x54e87b = true;
    }
    function _0x368de2(_0x4a9362, _0x14a143, _0x38871a) {
      var _0x5c9b19;
      var _0x464f8a;
      var _0x2d1ab8;
      var _0x5745b4;
      var _0x45e35d;
      var _0x2f5213;
      var _0xf6eefc;
      var _0x27a8cd;
      var _0x21eb0e;
      var _0xed78f2;
      var _0x2e7143;
      var _0x1a5899;
      var _0x4b6607;
      var _0x9ef206;
      var _0x28982b;
      var _0x4b9359 = _0x38871a.length();
      while (_0x4b9359 >= 64) {
        for (_0xf6eefc = 0; _0xf6eefc < 16; ++_0xf6eefc) {
          _0x14a143[_0xf6eefc] = _0x38871a.getInt32();
        }
        for (; _0xf6eefc < 64; ++_0xf6eefc) {
          _0x5c9b19 = _0x14a143[_0xf6eefc - 2];
          _0x5c9b19 = (_0x5c9b19 >>> 17 | _0x5c9b19 << 15) ^ (_0x5c9b19 >>> 19 | _0x5c9b19 << 13) ^ _0x5c9b19 >>> 10;
          _0x464f8a = _0x14a143[_0xf6eefc - 15];
          _0x464f8a = (_0x464f8a >>> 7 | _0x464f8a << 25) ^ (_0x464f8a >>> 18 | _0x464f8a << 14) ^ _0x464f8a >>> 3;
          _0x14a143[_0xf6eefc] = _0x5c9b19 + _0x14a143[_0xf6eefc - 7] + _0x464f8a + _0x14a143[_0xf6eefc - 16] | 0;
        }
        _0x27a8cd = _0x4a9362.h0;
        _0x21eb0e = _0x4a9362.h1;
        _0xed78f2 = _0x4a9362.h2;
        _0x2e7143 = _0x4a9362.h3;
        _0x1a5899 = _0x4a9362.h4;
        _0x4b6607 = _0x4a9362.h5;
        _0x9ef206 = _0x4a9362.h6;
        _0x28982b = _0x4a9362.h7;
        for (_0xf6eefc = 0; _0xf6eefc < 64; ++_0xf6eefc) {
          _0x5745b4 = (_0x1a5899 >>> 6 | _0x1a5899 << 26) ^ (_0x1a5899 >>> 11 | _0x1a5899 << 21) ^ (_0x1a5899 >>> 25 | _0x1a5899 << 7);
          _0x45e35d = _0x9ef206 ^ _0x1a5899 & (_0x4b6607 ^ _0x9ef206);
          _0x2d1ab8 = (_0x27a8cd >>> 2 | _0x27a8cd << 30) ^ (_0x27a8cd >>> 13 | _0x27a8cd << 19) ^ (_0x27a8cd >>> 22 | _0x27a8cd << 10);
          _0x2f5213 = _0x27a8cd & _0x21eb0e | _0xed78f2 & (_0x27a8cd ^ _0x21eb0e);
          _0x5c9b19 = _0x28982b + _0x5745b4 + _0x45e35d + _0x55071e[_0xf6eefc] + _0x14a143[_0xf6eefc];
          _0x464f8a = _0x2d1ab8 + _0x2f5213;
          _0x28982b = _0x9ef206;
          _0x9ef206 = _0x4b6607;
          _0x4b6607 = _0x1a5899;
          _0x1a5899 = _0x2e7143 + _0x5c9b19 >>> 0;
          _0x2e7143 = _0xed78f2;
          _0xed78f2 = _0x21eb0e;
          _0x21eb0e = _0x27a8cd;
          _0x27a8cd = _0x5c9b19 + _0x464f8a >>> 0;
        }
        _0x4a9362.h0 = _0x4a9362.h0 + _0x27a8cd | 0;
        _0x4a9362.h1 = _0x4a9362.h1 + _0x21eb0e | 0;
        _0x4a9362.h2 = _0x4a9362.h2 + _0xed78f2 | 0;
        _0x4a9362.h3 = _0x4a9362.h3 + _0x2e7143 | 0;
        _0x4a9362.h4 = _0x4a9362.h4 + _0x1a5899 | 0;
        _0x4a9362.h5 = _0x4a9362.h5 + _0x4b6607 | 0;
        _0x4a9362.h6 = _0x4a9362.h6 + _0x9ef206 | 0;
        _0x4a9362.h7 = _0x4a9362.h7 + _0x28982b | 0;
        _0x4b9359 -= 64;
      }
    }
  }
});
var require_prng = __commonJS({
  "node_modules/node-forge/lib/prng.js"(_0x3416c2, _0x389814) {
    var _0x2036e7 = require_forge();
    require_util();
    var _0x787527 = null;
    if (_0x2036e7.util.isNodejs && !_0x2036e7.options.usePureJavaScript && !process.versions["node-webkit"]) {
      _0x787527 = require_crypto();
    }
    var _0x5ec429 = _0x389814.exports = _0x2036e7.prng = _0x2036e7.prng || {};
    _0x5ec429.create = function (_0x3c3b8d) {
      var _0x50be9b = {
        plugin: _0x3c3b8d,
        key: null,
        seed: null,
        time: null,
        reseeds: 0,
        generated: 0,
        keyBytes: ""
      };
      var _0x39e972 = _0x3c3b8d.md;
      var _0x545d40 = new Array(32);
      for (var _0x3e3241 = 0; _0x3e3241 < 32; ++_0x3e3241) {
        _0x545d40[_0x3e3241] = _0x39e972.create();
      }
      _0x50be9b.pools = _0x545d40;
      _0x50be9b.pool = 0;
      _0x50be9b.generate = function (_0x5d1219, _0x430eec) {
        if (!_0x430eec) {
          return _0x50be9b.generateSync(_0x5d1219);
        }
        var _0x277ac3 = _0x50be9b.plugin.cipher;
        var _0x30f83c = _0x50be9b.plugin.increment;
        var _0x4fa027 = _0x50be9b.plugin.formatKey;
        var _0x5c1e13 = _0x50be9b.plugin.formatSeed;
        var _0x468fbd = _0x2036e7.util.createBuffer();
        _0x50be9b.key = null;
        _0x23325c();
        function _0x23325c(_0x104838) {
          if (_0x104838) {
            return _0x430eec(_0x104838);
          }
          if (_0x468fbd.length() >= _0x5d1219) {
            return _0x430eec(null, _0x468fbd.getBytes(_0x5d1219));
          }
          if (_0x50be9b.generated > 1048575) {
            _0x50be9b.key = null;
          }
          if (_0x50be9b.key === null) {
            return _0x2036e7.util.nextTick(function () {
              _0x3c7f89(_0x23325c);
            });
          }
          var _0x2574e8 = _0x277ac3(_0x50be9b.key, _0x50be9b.seed);
          _0x50be9b.generated += _0x2574e8.length;
          _0x468fbd.putBytes(_0x2574e8);
          _0x50be9b.key = _0x4fa027(_0x277ac3(_0x50be9b.key, _0x30f83c(_0x50be9b.seed)));
          _0x50be9b.seed = _0x5c1e13(_0x277ac3(_0x50be9b.key, _0x50be9b.seed));
          _0x2036e7.util.setImmediate(_0x23325c);
        }
      };
      _0x50be9b.generateSync = function (_0x131950) {
        var _0x95d8e9 = _0x50be9b.plugin.cipher;
        var _0x196724 = _0x50be9b.plugin.increment;
        var _0x26af1f = _0x50be9b.plugin.formatKey;
        var _0x28cc9a = _0x50be9b.plugin.formatSeed;
        _0x50be9b.key = null;
        var _0xdb49da = _0x2036e7.util.createBuffer();
        while (_0xdb49da.length() < _0x131950) {
          if (_0x50be9b.generated > 1048575) {
            _0x50be9b.key = null;
          }
          if (_0x50be9b.key === null) {
            _0x5b3c44();
          }
          var _0x24ebfc = _0x95d8e9(_0x50be9b.key, _0x50be9b.seed);
          _0x50be9b.generated += _0x24ebfc.length;
          _0xdb49da.putBytes(_0x24ebfc);
          _0x50be9b.key = _0x26af1f(_0x95d8e9(_0x50be9b.key, _0x196724(_0x50be9b.seed)));
          _0x50be9b.seed = _0x28cc9a(_0x95d8e9(_0x50be9b.key, _0x50be9b.seed));
        }
        return _0xdb49da.getBytes(_0x131950);
      };
      function _0x3c7f89(_0x752989) {
        if (_0x50be9b.pools[0].messageLength >= 32) {
          _0x1fb714();
          return _0x752989();
        }
        var _0x3094b4 = 32 - _0x50be9b.pools[0].messageLength << 5;
        _0x50be9b.seedFile(_0x3094b4, function (_0x48581e, _0x2f0da5) {
          if (_0x48581e) {
            return _0x752989(_0x48581e);
          }
          _0x50be9b.collect(_0x2f0da5);
          _0x1fb714();
          _0x752989();
        });
      }
      function _0x5b3c44() {
        if (_0x50be9b.pools[0].messageLength >= 32) {
          return _0x1fb714();
        }
        var _0x5f25fb = 32 - _0x50be9b.pools[0].messageLength << 5;
        _0x50be9b.collect(_0x50be9b.seedFileSync(_0x5f25fb));
        _0x1fb714();
      }
      function _0x1fb714() {
        _0x50be9b.reseeds = _0x50be9b.reseeds === 4294967295 ? 0 : _0x50be9b.reseeds + 1;
        var _0x20115a = _0x50be9b.plugin.md.create();
        _0x20115a.update(_0x50be9b.keyBytes);
        var _0x597de4 = 1;
        for (var _0x32f734 = 0; _0x32f734 < 32; ++_0x32f734) {
          if (_0x50be9b.reseeds % _0x597de4 === 0) {
            _0x20115a.update(_0x50be9b.pools[_0x32f734].digest().getBytes());
            _0x50be9b.pools[_0x32f734].start();
          }
          _0x597de4 = _0x597de4 << 1;
        }
        _0x50be9b.keyBytes = _0x20115a.digest().getBytes();
        _0x20115a.start();
        _0x20115a.update(_0x50be9b.keyBytes);
        var _0x2aee65 = _0x20115a.digest().getBytes();
        _0x50be9b.key = _0x50be9b.plugin.formatKey(_0x50be9b.keyBytes);
        _0x50be9b.seed = _0x50be9b.plugin.formatSeed(_0x2aee65);
        _0x50be9b.generated = 0;
      }
      function _0xa39dd3(_0x32c73f) {
        var _0x2fec08 = null;
        var _0x282c08 = _0x2036e7.util.globalScope;
        var _0xc46d47 = _0x282c08.crypto || _0x282c08.msCrypto;
        if (_0xc46d47 && _0xc46d47.getRandomValues) {
          _0x2fec08 = function (_0xb35ee2) {
            return _0xc46d47.getRandomValues(_0xb35ee2);
          };
        }
        var _0x13ca9e = _0x2036e7.util.createBuffer();
        if (_0x2fec08) {
          while (_0x13ca9e.length() < _0x32c73f) {
            var _0x51617d = Math.max(1, Math.min(_0x32c73f - _0x13ca9e.length(), 65536) / 4);
            var _0x10c9bf = new Uint32Array(Math.floor(_0x51617d));
            try {
              _0x2fec08(_0x10c9bf);
              for (var _0x304849 = 0; _0x304849 < _0x10c9bf.length; ++_0x304849) {
                _0x13ca9e.putInt32(_0x10c9bf[_0x304849]);
              }
            } catch (_0x193f16) {
              if (typeof QuotaExceededError === "undefined" || !(_0x193f16 instanceof QuotaExceededError)) {
                throw _0x193f16;
              }
            }
          }
        }
        if (_0x13ca9e.length() < _0x32c73f) {
          var _0x42d848;
          var _0x126a21;
          var _0x4ecb88;
          var _0x26b36b = Math.floor(Math.random() * 65536);
          while (_0x13ca9e.length() < _0x32c73f) {
            _0x126a21 = (_0x26b36b & 65535) * 16807;
            _0x42d848 = (_0x26b36b >> 16) * 16807;
            _0x126a21 += (_0x42d848 & 32767) << 16;
            _0x126a21 += _0x42d848 >> 15;
            _0x126a21 = (_0x126a21 & 2147483647) + (_0x126a21 >> 31);
            _0x26b36b = _0x126a21 & -1;
            for (var _0x304849 = 0; _0x304849 < 3; ++_0x304849) {
              _0x4ecb88 = _0x26b36b >>> (_0x304849 << 3);
              _0x4ecb88 ^= Math.floor(Math.random() * 256);
              _0x13ca9e.putByte(_0x4ecb88 & 255);
            }
          }
        }
        return _0x13ca9e.getBytes(_0x32c73f);
      }
      if (_0x787527) {
        _0x50be9b.seedFile = function (_0x2e0e8d, _0x9b0a98) {
          _0x787527.randomBytes(_0x2e0e8d, function (_0x16cb00, _0x4ffa9e) {
            if (_0x16cb00) {
              return _0x9b0a98(_0x16cb00);
            }
            _0x9b0a98(null, _0x4ffa9e.toString());
          });
        };
        _0x50be9b.seedFileSync = function (_0x3f396d) {
          return _0x787527.randomBytes(_0x3f396d).toString();
        };
      } else {
        _0x50be9b.seedFile = function (_0x58630f, _0x43e9df) {
          try {
            _0x43e9df(null, _0xa39dd3(_0x58630f));
          } catch (_0x1d5665) {
            _0x43e9df(_0x1d5665);
          }
        };
        _0x50be9b.seedFileSync = _0xa39dd3;
      }
      _0x50be9b.collect = function (_0x5b2152) {
        var _0x4650c4 = _0x5b2152.length;
        for (var _0x35cece = 0; _0x35cece < _0x4650c4; ++_0x35cece) {
          _0x50be9b.pools[_0x50be9b.pool].update(_0x5b2152.substr(_0x35cece, 1));
          _0x50be9b.pool = _0x50be9b.pool === 31 ? 0 : _0x50be9b.pool + 1;
        }
      };
      _0x50be9b.collectInt = function (_0x441719, _0x278995) {
        var _0x5d67dd = "";
        for (var _0x2bfa90 = 0; _0x2bfa90 < _0x278995; _0x2bfa90 += 8) {
          _0x5d67dd += String.fromCharCode(_0x441719 >> _0x2bfa90 & 255);
        }
        _0x50be9b.collect(_0x5d67dd);
      };
      _0x50be9b.registerWorker = function (_0x12fa56) {
        if (_0x12fa56 === self) {
          _0x50be9b.seedFile = function (_0xdc2491, _0x5aba5d) {
            function _0x52e017(_0x51d967) {
              var _0x3f9c53 = _0x51d967.data;
              if (_0x3f9c53.forge && _0x3f9c53.forge.prng) {
                self.removeEventListener("message", _0x52e017);
                _0x5aba5d(_0x3f9c53.forge.prng.err, _0x3f9c53.forge.prng.bytes);
              }
            }
            self.addEventListener("message", _0x52e017);
            self.postMessage({
              forge: {
                prng: {
                  needed: _0xdc2491
                }
              }
            });
          };
        } else {
          function _0x412b43(_0x2dbb42) {
            var _0x3ed9d6 = _0x2dbb42.data;
            if (_0x3ed9d6.forge && _0x3ed9d6.forge.prng) {
              _0x50be9b.seedFile(_0x3ed9d6.forge.prng.needed, function (_0x2095fd, _0x2a738b) {
                _0x12fa56.postMessage({
                  forge: {
                    prng: {
                      err: _0x2095fd,
                      bytes: _0x2a738b
                    }
                  }
                });
              });
            }
          }
          _0x12fa56.addEventListener("message", _0x412b43);
        }
      };
      return _0x50be9b;
    };
  }
});
var require_random = __commonJS({
  "node_modules/node-forge/lib/random.js"(_0x54ec17, _0x5e697f) {
    var _0x4ca0db = require_forge();
    require_aes();
    require_sha256();
    require_prng();
    require_util();
    (function () {
      if (_0x4ca0db.random && _0x4ca0db.random.getBytes) {
        _0x5e697f.exports = _0x4ca0db.random;
        return;
      }
      (function (_0x530c97) {
        var _0x2cf0cf = {};
        var _0xf4a539 = new Array(4);
        var _0x4b21e5 = _0x4ca0db.util.createBuffer();
        _0x2cf0cf.formatKey = function (_0x5c6adc) {
          var _0x57416b = _0x4ca0db.util.createBuffer(_0x5c6adc);
          _0x5c6adc = new Array(4);
          _0x5c6adc[0] = _0x57416b.getInt32();
          _0x5c6adc[1] = _0x57416b.getInt32();
          _0x5c6adc[2] = _0x57416b.getInt32();
          _0x5c6adc[3] = _0x57416b.getInt32();
          return _0x4ca0db.aes._expandKey(_0x5c6adc, false);
        };
        _0x2cf0cf.formatSeed = function (_0x2e040c) {
          var _0x5276b6 = _0x4ca0db.util.createBuffer(_0x2e040c);
          _0x2e040c = new Array(4);
          _0x2e040c[0] = _0x5276b6.getInt32();
          _0x2e040c[1] = _0x5276b6.getInt32();
          _0x2e040c[2] = _0x5276b6.getInt32();
          _0x2e040c[3] = _0x5276b6.getInt32();
          return _0x2e040c;
        };
        _0x2cf0cf.cipher = function (_0x50c3ab, _0x2f99c2) {
          _0x4ca0db.aes._updateBlock(_0x50c3ab, _0x2f99c2, _0xf4a539, false);
          _0x4b21e5.putInt32(_0xf4a539[0]);
          _0x4b21e5.putInt32(_0xf4a539[1]);
          _0x4b21e5.putInt32(_0xf4a539[2]);
          _0x4b21e5.putInt32(_0xf4a539[3]);
          return _0x4b21e5.getBytes();
        };
        _0x2cf0cf.increment = function (_0x31c933) {
          ++_0x31c933[3];
          return _0x31c933;
        };
        _0x2cf0cf.md = _0x4ca0db.md.sha256;
        function _0x38f3ec() {
          var _0x495ae6 = _0x4ca0db.prng.create(_0x2cf0cf);
          _0x495ae6.getBytes = function (_0x5b3086, _0x4aad8f) {
            return _0x495ae6.generate(_0x5b3086, _0x4aad8f);
          };
          _0x495ae6.getBytesSync = function (_0x26ed98) {
            return _0x495ae6.generate(_0x26ed98);
          };
          return _0x495ae6;
        }
        var _0x1c9149 = _0x38f3ec();
        var _0x29d4eb = null;
        var _0x46f4fa = _0x4ca0db.util.globalScope;
        var _0x21c308 = _0x46f4fa.crypto || _0x46f4fa.msCrypto;
        if (_0x21c308 && _0x21c308.getRandomValues) {
          _0x29d4eb = function (_0x570c25) {
            return _0x21c308.getRandomValues(_0x570c25);
          };
        }
        if (_0x4ca0db.options.usePureJavaScript || !_0x4ca0db.util.isNodejs && !_0x29d4eb) {
          if (typeof window === "undefined" || window.document === undefined) {}
          _0x1c9149.collectInt(+new Date(), 32);
          if (typeof navigator !== "undefined") {
            var _0x380ce4 = "";
            for (var _0x4c4605 in navigator) {
              try {
                if (typeof navigator[_0x4c4605] == "string") {
                  _0x380ce4 += navigator[_0x4c4605];
                }
              } catch (_0x282868) {}
            }
            _0x1c9149.collect(_0x380ce4);
            _0x380ce4 = null;
          }
          if (_0x530c97) {
            _0x530c97().mousemove(function (_0x59a80c) {
              _0x1c9149.collectInt(_0x59a80c.clientX, 16);
              _0x1c9149.collectInt(_0x59a80c.clientY, 16);
            });
            _0x530c97().keypress(function (_0x4e91d0) {
              _0x1c9149.collectInt(_0x4e91d0.charCode, 8);
            });
          }
        }
        if (!_0x4ca0db.random) {
          _0x4ca0db.random = _0x1c9149;
        } else {
          for (var _0x4c4605 in _0x1c9149) {
            _0x4ca0db.random[_0x4c4605] = _0x1c9149[_0x4c4605];
          }
        }
        _0x4ca0db.random.createInstance = _0x38f3ec;
        _0x5e697f.exports = _0x4ca0db.random;
      })(typeof jQuery !== "undefined" ? jQuery : null);
    })();
  }
});
var require_rc2 = __commonJS({
  "node_modules/node-forge/lib/rc2.js"(_0x35b8c6, _0x5a3595) {
    var _0x7b1fef = require_forge();
    require_util();
    var _0x43a3c1 = [217, 120, 249, 196, 25, 221, 181, 237, 40, 233, 253, 121, 74, 160, 216, 157, 198, 126, 55, 131, 43, 118, 83, 142, 98, 76, 100, 136, 68, 139, 251, 162, 23, 154, 89, 245, 135, 179, 79, 19, 97, 69, 109, 141, 9, 129, 125, 50, 189, 143, 64, 235, 134, 183, 123, 11, 240, 149, 33, 34, 92, 107, 78, 130, 84, 214, 101, 147, 206, 96, 178, 28, 115, 86, 192, 20, 167, 140, 241, 220, 18, 117, 202, 31, 59, 190, 228, 209, 66, 61, 212, 48, 163, 60, 182, 38, 111, 191, 14, 218, 70, 105, 7, 87, 39, 242, 29, 155, 188, 148, 67, 3, 248, 17, 199, 246, 144, 239, 62, 231, 6, 195, 213, 47, 200, 102, 30, 215, 8, 232, 234, 222, 128, 82, 238, 247, 132, 170, 114, 172, 53, 77, 106, 42, 150, 26, 210, 113, 90, 21, 73, 116, 75, 159, 208, 94, 4, 24, 164, 236, 194, 224, 65, 110, 15, 81, 203, 204, 36, 145, 175, 80, 161, 244, 112, 57, 153, 124, 58, 133, 35, 184, 180, 122, 252, 2, 54, 91, 37, 85, 151, 49, 45, 93, 250, 152, 227, 138, 146, 174, 5, 223, 41, 16, 103, 108, 186, 201, 211, 0, 230, 207, 225, 158, 168, 44, 99, 22, 1, 63, 88, 226, 137, 169, 13, 56, 52, 27, 171, 51, 255, 176, 187, 72, 12, 95, 185, 177, 205, 46, 197, 243, 219, 71, 229, 165, 156, 119, 10, 166, 32, 104, 254, 127, 193, 173];
    var _0x4d4e98 = [1, 2, 3, 5];
    function _0x3cd658(_0x4f21af, _0x449ecf) {
      return _0x4f21af << _0x449ecf & 65535 | (_0x4f21af & 65535) >> 16 - _0x449ecf;
    }
    function _0x1f54a5(_0x5477fa, _0x4b6fe9) {
      return (_0x5477fa & 65535) >> _0x4b6fe9 | _0x5477fa << 16 - _0x4b6fe9 & 65535;
    }
    _0x5a3595.exports = _0x7b1fef.rc2 = _0x7b1fef.rc2 || {};
    _0x7b1fef.rc2.expandKey = function (_0xbe097e, _0x3a2cd3) {
      if (typeof _0xbe097e === "string") {
        _0xbe097e = _0x7b1fef.util.createBuffer(_0xbe097e);
      }
      _0x3a2cd3 = _0x3a2cd3 || 128;
      var _0x7bc80e = _0xbe097e;
      var _0x2838cc = _0xbe097e.length();
      var _0x41861f = _0x3a2cd3;
      var _0xe0b325 = Math.ceil(_0x41861f / 8);
      var _0x173f5e = 255 >> (_0x41861f & 7);
      var _0x2ff583;
      for (_0x2ff583 = _0x2838cc; _0x2ff583 < 128; _0x2ff583++) {
        _0x7bc80e.putByte(_0x43a3c1[_0x7bc80e.at(_0x2ff583 - 1) + _0x7bc80e.at(_0x2ff583 - _0x2838cc) & 255]);
      }
      _0x7bc80e.setAt(128 - _0xe0b325, _0x43a3c1[_0x7bc80e.at(128 - _0xe0b325) & _0x173f5e]);
      for (_0x2ff583 = 127 - _0xe0b325; _0x2ff583 >= 0; _0x2ff583--) {
        _0x7bc80e.setAt(_0x2ff583, _0x43a3c1[_0x7bc80e.at(_0x2ff583 + 1) ^ _0x7bc80e.at(_0x2ff583 + _0xe0b325)]);
      }
      return _0x7bc80e;
    };
    function _0x6e3d7f(_0x38e22d, _0x30f899, _0x6faa28) {
      var _0x2f10b6 = false;
      var _0xe74352 = null;
      var _0x2479cc = null;
      var _0x4ba4d3 = null;
      var _0x2756c0;
      var _0x388ddd;
      var _0x5b363f;
      var _0xacae8;
      var _0x140fdf = [];
      _0x38e22d = _0x7b1fef.rc2.expandKey(_0x38e22d, _0x30f899);
      for (_0x5b363f = 0; _0x5b363f < 64; _0x5b363f++) {
        _0x140fdf.push(_0x38e22d.getInt16Le());
      }
      if (_0x6faa28) {
        _0x2756c0 = function (_0x131cce) {
          for (_0x5b363f = 0; _0x5b363f < 4; _0x5b363f++) {
            _0x131cce[_0x5b363f] += _0x140fdf[_0xacae8] + (_0x131cce[(_0x5b363f + 3) % 4] & _0x131cce[(_0x5b363f + 2) % 4]) + (~_0x131cce[(_0x5b363f + 3) % 4] & _0x131cce[(_0x5b363f + 1) % 4]);
            _0x131cce[_0x5b363f] = _0x3cd658(_0x131cce[_0x5b363f], _0x4d4e98[_0x5b363f]);
            _0xacae8++;
          }
        };
        _0x388ddd = function (_0x916bb8) {
          for (_0x5b363f = 0; _0x5b363f < 4; _0x5b363f++) {
            _0x916bb8[_0x5b363f] += _0x140fdf[_0x916bb8[(_0x5b363f + 3) % 4] & 63];
          }
        };
      } else {
        _0x2756c0 = function (_0x216816) {
          for (_0x5b363f = 3; _0x5b363f >= 0; _0x5b363f--) {
            _0x216816[_0x5b363f] = _0x1f54a5(_0x216816[_0x5b363f], _0x4d4e98[_0x5b363f]);
            _0x216816[_0x5b363f] -= _0x140fdf[_0xacae8] + (_0x216816[(_0x5b363f + 3) % 4] & _0x216816[(_0x5b363f + 2) % 4]) + (~_0x216816[(_0x5b363f + 3) % 4] & _0x216816[(_0x5b363f + 1) % 4]);
            _0xacae8--;
          }
        };
        _0x388ddd = function (_0x51aa42) {
          for (_0x5b363f = 3; _0x5b363f >= 0; _0x5b363f--) {
            _0x51aa42[_0x5b363f] -= _0x140fdf[_0x51aa42[(_0x5b363f + 3) % 4] & 63];
          }
        };
      }
      function _0x2790c0(_0x23d5f6) {
        var _0x187648 = [];
        for (_0x5b363f = 0; _0x5b363f < 4; _0x5b363f++) {
          var _0xcc2ef6 = _0xe74352.getInt16Le();
          if (_0x4ba4d3 !== null) {
            if (_0x6faa28) {
              _0xcc2ef6 ^= _0x4ba4d3.getInt16Le();
            } else {
              _0x4ba4d3.putInt16Le(_0xcc2ef6);
            }
          }
          _0x187648.push(_0xcc2ef6 & 65535);
        }
        _0xacae8 = _0x6faa28 ? 0 : 63;
        for (var _0x21ad8f = 0; _0x21ad8f < _0x23d5f6.length; _0x21ad8f++) {
          for (var _0x1306fe = 0; _0x1306fe < _0x23d5f6[_0x21ad8f][0]; _0x1306fe++) {
            _0x23d5f6[_0x21ad8f][1](_0x187648);
          }
        }
        for (_0x5b363f = 0; _0x5b363f < 4; _0x5b363f++) {
          if (_0x4ba4d3 !== null) {
            if (_0x6faa28) {
              _0x4ba4d3.putInt16Le(_0x187648[_0x5b363f]);
            } else {
              _0x187648[_0x5b363f] ^= _0x4ba4d3.getInt16Le();
            }
          }
          _0x2479cc.putInt16Le(_0x187648[_0x5b363f]);
        }
      }
      var _0x44abfd = null;
      _0x44abfd = {
        start: function (_0x46a14d, _0x15d5fd) {
          if (_0x46a14d) {
            if (typeof _0x46a14d === "string") {
              _0x46a14d = _0x7b1fef.util.createBuffer(_0x46a14d);
            }
          }
          _0x2f10b6 = false;
          _0xe74352 = _0x7b1fef.util.createBuffer();
          _0x2479cc = _0x15d5fd || new _0x7b1fef.util.createBuffer();
          _0x4ba4d3 = _0x46a14d;
          _0x44abfd.output = _0x2479cc;
        },
        update: function (_0x2644dd) {
          if (!_0x2f10b6) {
            _0xe74352.putBuffer(_0x2644dd);
          }
          while (_0xe74352.length() >= 8) {
            _0x2790c0([[5, _0x2756c0], [1, _0x388ddd], [6, _0x2756c0], [1, _0x388ddd], [5, _0x2756c0]]);
          }
        },
        finish: function (_0x56d000) {
          var _0x5e6ce7 = true;
          if (_0x6faa28) {
            if (_0x56d000) {
              _0x5e6ce7 = _0x56d000(8, _0xe74352, !_0x6faa28);
            } else {
              var _0x44451c = _0xe74352.length() === 8 ? 8 : 8 - _0xe74352.length();
              _0xe74352.fillWithByte(_0x44451c, _0x44451c);
            }
          }
          if (_0x5e6ce7) {
            _0x2f10b6 = true;
            _0x44abfd.update();
          }
          if (!_0x6faa28) {
            _0x5e6ce7 = _0xe74352.length() === 0;
            if (_0x5e6ce7) {
              if (_0x56d000) {
                _0x5e6ce7 = _0x56d000(8, _0x2479cc, !_0x6faa28);
              } else {
                var _0x5a09ef = _0x2479cc.length();
                var _0x29bbbb = _0x2479cc.at(_0x5a09ef - 1);
                if (_0x29bbbb > _0x5a09ef) {
                  _0x5e6ce7 = false;
                } else {
                  _0x2479cc.truncate(_0x29bbbb);
                }
              }
            }
          }
          return _0x5e6ce7;
        }
      };
      return _0x44abfd;
    }
    _0x7b1fef.rc2.startEncrypting = function (_0x24abc2, _0x54ca70, _0x1420d5) {
      var _0x2e4baf = _0x7b1fef.rc2.createEncryptionCipher(_0x24abc2, 128);
      _0x2e4baf.start(_0x54ca70, _0x1420d5);
      return _0x2e4baf;
    };
    _0x7b1fef.rc2.createEncryptionCipher = function (_0x500af6, _0x32f6f9) {
      return _0x6e3d7f(_0x500af6, _0x32f6f9, true);
    };
    _0x7b1fef.rc2.startDecrypting = function (_0x1dd01a, _0x18125c, _0x349efd) {
      var _0x2532e7 = _0x7b1fef.rc2.createDecryptionCipher(_0x1dd01a, 128);
      _0x2532e7.start(_0x18125c, _0x349efd);
      return _0x2532e7;
    };
    _0x7b1fef.rc2.createDecryptionCipher = function (_0x3cd2b0, _0x5e6ed0) {
      return _0x6e3d7f(_0x3cd2b0, _0x5e6ed0, false);
    };
  }
});
var require_jsbn = __commonJS({
  "node_modules/node-forge/lib/jsbn.js"(_0x3802fe, _0xb83ab0) {
    var _0x4c437a = require_forge();
    _0xb83ab0.exports = _0x4c437a.jsbn = _0x4c437a.jsbn || {};
    var _0x2f4ce1;
    var _0x201807 = 244837814094590;
    var _0x2f5582 = (_0x201807 & 16777215) == 15715070;
    function _0x249691(_0x252f0c, _0xa8e636, _0xf2c405) {
      this.data = [];
      if (_0x252f0c != null) {
        if (typeof _0x252f0c == "number") {
          this.fromNumber(_0x252f0c, _0xa8e636, _0xf2c405);
        } else if (_0xa8e636 == null && typeof _0x252f0c != "string") {
          this.fromString(_0x252f0c, 256);
        } else {
          this.fromString(_0x252f0c, _0xa8e636);
        }
      }
    }
    _0x4c437a.jsbn.BigInteger = _0x249691;
    function _0x213fdd() {
      return new _0x249691(null);
    }
    function _0x51b852(_0x3dec11, _0x3a1a44, _0x1b72ce, _0x375a85, _0x3aed8a, _0x1e824f) {
      while (--_0x1e824f >= 0) {
        var _0x25daae = _0x3a1a44 * this.data[_0x3dec11++] + _0x1b72ce.data[_0x375a85] + _0x3aed8a;
        _0x3aed8a = Math.floor(_0x25daae / 67108864);
        _0x1b72ce.data[_0x375a85++] = _0x25daae & 67108863;
      }
      return _0x3aed8a;
    }
    function _0xa0abbf(_0x103354, _0x3b64fd, _0x2f51e8, _0x41d546, _0x6fbe98, _0x5bb1d1) {
      var _0x26b3aa = _0x3b64fd & 32767;
      var _0x442f37 = _0x3b64fd >> 15;
      while (--_0x5bb1d1 >= 0) {
        var _0x27e5d2 = this.data[_0x103354] & 32767;
        var _0x39f3ab = this.data[_0x103354++] >> 15;
        var _0x286804 = _0x442f37 * _0x27e5d2 + _0x39f3ab * _0x26b3aa;
        _0x27e5d2 = _0x26b3aa * _0x27e5d2 + ((_0x286804 & 32767) << 15) + _0x2f51e8.data[_0x41d546] + (_0x6fbe98 & 1073741823);
        _0x6fbe98 = (_0x27e5d2 >>> 30) + (_0x286804 >>> 15) + _0x442f37 * _0x39f3ab + (_0x6fbe98 >>> 30);
        _0x2f51e8.data[_0x41d546++] = _0x27e5d2 & 1073741823;
      }
      return _0x6fbe98;
    }
    function _0x33593d(_0x4b9b4a, _0x249b00, _0x54dab9, _0x56cb05, _0xb8cd12, _0x1a2b85) {
      var _0xc198f1 = _0x249b00 & 16383;
      var _0x16ea05 = _0x249b00 >> 14;
      while (--_0x1a2b85 >= 0) {
        var _0x1f0e17 = this.data[_0x4b9b4a] & 16383;
        var _0x6709f3 = this.data[_0x4b9b4a++] >> 14;
        var _0x233dab = _0x16ea05 * _0x1f0e17 + _0x6709f3 * _0xc198f1;
        _0x1f0e17 = _0xc198f1 * _0x1f0e17 + ((_0x233dab & 16383) << 14) + _0x54dab9.data[_0x56cb05] + _0xb8cd12;
        _0xb8cd12 = (_0x1f0e17 >> 28) + (_0x233dab >> 14) + _0x16ea05 * _0x6709f3;
        _0x54dab9.data[_0x56cb05++] = _0x1f0e17 & 268435455;
      }
      return _0xb8cd12;
    }
    if (typeof navigator === "undefined") {
      _0x249691.prototype.am = _0x33593d;
      _0x2f4ce1 = 28;
    } else if (_0x2f5582 && navigator.appName == "Microsoft Internet Explorer") {
      _0x249691.prototype.am = _0xa0abbf;
      _0x2f4ce1 = 30;
    } else if (_0x2f5582 && navigator.appName != "Netscape") {
      _0x249691.prototype.am = _0x51b852;
      _0x2f4ce1 = 26;
    } else {
      _0x249691.prototype.am = _0x33593d;
      _0x2f4ce1 = 28;
    }
    _0x249691.prototype.DB = _0x2f4ce1;
    _0x249691.prototype.DM = (1 << _0x2f4ce1) - 1;
    _0x249691.prototype.DV = 1 << _0x2f4ce1;
    var _0x1285ad = 52;
    _0x249691.prototype.FV = Math.pow(2, _0x1285ad);
    _0x249691.prototype.F1 = _0x1285ad - _0x2f4ce1;
    _0x249691.prototype.F2 = _0x2f4ce1 * 2 - _0x1285ad;
    var _0x58ac64 = "0123456789abcdefghijklmnopqrstuvwxyz";
    var _0x50dc91 = new Array();
    var _0x58b831;
    var _0x580257;
    _0x58b831 = "0".charCodeAt(0);
    for (_0x580257 = 0; _0x580257 <= 9; ++_0x580257) {
      _0x50dc91[_0x58b831++] = _0x580257;
    }
    _0x58b831 = "a".charCodeAt(0);
    for (_0x580257 = 10; _0x580257 < 36; ++_0x580257) {
      _0x50dc91[_0x58b831++] = _0x580257;
    }
    _0x58b831 = "A".charCodeAt(0);
    for (_0x580257 = 10; _0x580257 < 36; ++_0x580257) {
      _0x50dc91[_0x58b831++] = _0x580257;
    }
    function _0x19d675(_0xb0e9fc) {
      return _0x58ac64.charAt(_0xb0e9fc);
    }
    function _0x232729(_0x288f56, _0x411f12) {
      var _0x5d7d6f = _0x50dc91[_0x288f56.charCodeAt(_0x411f12)];
      if (_0x5d7d6f == null) {
        return -1;
      } else {
        return _0x5d7d6f;
      }
    }
    function _0x4679cf(_0x2fef4a) {
      for (var _0x3bd444 = this.t - 1; _0x3bd444 >= 0; --_0x3bd444) {
        _0x2fef4a.data[_0x3bd444] = this.data[_0x3bd444];
      }
      _0x2fef4a.t = this.t;
      _0x2fef4a.s = this.s;
    }
    function _0x4442a2(_0x5c4201) {
      this.t = 1;
      this.s = _0x5c4201 < 0 ? -1 : 0;
      if (_0x5c4201 > 0) {
        this.data[0] = _0x5c4201;
      } else if (_0x5c4201 < -1) {
        this.data[0] = _0x5c4201 + this.DV;
      } else {
        this.t = 0;
      }
    }
    function _0x509fb0(_0x575e1e) {
      var _0x49a413 = _0x213fdd();
      _0x49a413.fromInt(_0x575e1e);
      return _0x49a413;
    }
    function _0x173f31(_0x489b9d, _0x625d4f) {
      var _0x43c6bd;
      if (_0x625d4f == 16) {
        _0x43c6bd = 4;
      } else if (_0x625d4f == 8) {
        _0x43c6bd = 3;
      } else if (_0x625d4f == 256) {
        _0x43c6bd = 8;
      } else if (_0x625d4f == 2) {
        _0x43c6bd = 1;
      } else if (_0x625d4f == 32) {
        _0x43c6bd = 5;
      } else if (_0x625d4f == 4) {
        _0x43c6bd = 2;
      } else {
        this.fromRadix(_0x489b9d, _0x625d4f);
        return;
      }
      this.t = 0;
      this.s = 0;
      var _0x2ae24c = _0x489b9d.length;
      var _0x1dea77 = false;
      var _0x330a34 = 0;
      while (--_0x2ae24c >= 0) {
        var _0x4daf07 = _0x43c6bd == 8 ? _0x489b9d[_0x2ae24c] & 255 : _0x232729(_0x489b9d, _0x2ae24c);
        if (_0x4daf07 < 0) {
          if (_0x489b9d.charAt(_0x2ae24c) == "-") {
            _0x1dea77 = true;
          }
          continue;
        }
        _0x1dea77 = false;
        if (_0x330a34 == 0) {
          this.data[this.t++] = _0x4daf07;
        } else if (_0x330a34 + _0x43c6bd > this.DB) {
          this.data[this.t - 1] |= (_0x4daf07 & (1 << this.DB - _0x330a34) - 1) << _0x330a34;
          this.data[this.t++] = _0x4daf07 >> this.DB - _0x330a34;
        } else {
          this.data[this.t - 1] |= _0x4daf07 << _0x330a34;
        }
        _0x330a34 += _0x43c6bd;
        if (_0x330a34 >= this.DB) {
          _0x330a34 -= this.DB;
        }
      }
      if (_0x43c6bd == 8 && (_0x489b9d[0] & 128) != 0) {
        this.s = -1;
        if (_0x330a34 > 0) {
          this.data[this.t - 1] |= (1 << this.DB - _0x330a34) - 1 << _0x330a34;
        }
      }
      this.clamp();
      if (_0x1dea77) {
        _0x249691.ZERO.subTo(this, this);
      }
    }
    function _0x2a3d82() {
      var _0x116656 = this.s & this.DM;
      while (this.t > 0 && this.data[this.t - 1] == _0x116656) {
        --this.t;
      }
    }
    function _0x371860(_0xa031d3) {
      if (this.s < 0) {
        return "-" + this.negate().toString(_0xa031d3);
      }
      var _0x1da332;
      if (_0xa031d3 == 16) {
        _0x1da332 = 4;
      } else if (_0xa031d3 == 8) {
        _0x1da332 = 3;
      } else if (_0xa031d3 == 2) {
        _0x1da332 = 1;
      } else if (_0xa031d3 == 32) {
        _0x1da332 = 5;
      } else if (_0xa031d3 == 4) {
        _0x1da332 = 2;
      } else {
        return this.toRadix(_0xa031d3);
      }
      var _0x5ce95e = (1 << _0x1da332) - 1;
      var _0x315130;
      var _0xba4ca2 = false;
      var _0x3cd82b = "";
      var _0x4b4088 = this.t;
      var _0x202102 = this.DB - _0x4b4088 * this.DB % _0x1da332;
      if (_0x4b4088-- > 0) {
        if (_0x202102 < this.DB && (_0x315130 = this.data[_0x4b4088] >> _0x202102) > 0) {
          _0xba4ca2 = true;
          _0x3cd82b = _0x19d675(_0x315130);
        }
        while (_0x4b4088 >= 0) {
          if (_0x202102 < _0x1da332) {
            _0x315130 = (this.data[_0x4b4088] & (1 << _0x202102) - 1) << _0x1da332 - _0x202102;
            _0x315130 |= this.data[--_0x4b4088] >> (_0x202102 += this.DB - _0x1da332);
          } else {
            _0x315130 = this.data[_0x4b4088] >> (_0x202102 -= _0x1da332) & _0x5ce95e;
            if (_0x202102 <= 0) {
              _0x202102 += this.DB;
              --_0x4b4088;
            }
          }
          if (_0x315130 > 0) {
            _0xba4ca2 = true;
          }
          if (_0xba4ca2) {
            _0x3cd82b += _0x19d675(_0x315130);
          }
        }
      }
      if (_0xba4ca2) {
        return _0x3cd82b;
      } else {
        return "0";
      }
    }
    function _0x4e2d65() {
      var _0x2e4afd = _0x213fdd();
      _0x249691.ZERO.subTo(this, _0x2e4afd);
      return _0x2e4afd;
    }
    function _0x4fae1b() {
      if (this.s < 0) {
        return this.negate();
      } else {
        return this;
      }
    }
    function _0x2ea714(_0x3949c9) {
      var _0xdf3171 = this.s - _0x3949c9.s;
      if (_0xdf3171 != 0) {
        return _0xdf3171;
      }
      var _0x498e66 = this.t;
      _0xdf3171 = _0x498e66 - _0x3949c9.t;
      if (_0xdf3171 != 0) {
        if (this.s < 0) {
          return -_0xdf3171;
        } else {
          return _0xdf3171;
        }
      }
      while (--_0x498e66 >= 0) {
        if ((_0xdf3171 = this.data[_0x498e66] - _0x3949c9.data[_0x498e66]) != 0) {
          return _0xdf3171;
        }
      }
      return 0;
    }
    function _0x416952(_0x38a792) {
      var _0x1406d6 = 1;
      var _0x2d413e;
      if ((_0x2d413e = _0x38a792 >>> 16) != 0) {
        _0x38a792 = _0x2d413e;
        _0x1406d6 += 16;
      }
      if ((_0x2d413e = _0x38a792 >> 8) != 0) {
        _0x38a792 = _0x2d413e;
        _0x1406d6 += 8;
      }
      if ((_0x2d413e = _0x38a792 >> 4) != 0) {
        _0x38a792 = _0x2d413e;
        _0x1406d6 += 4;
      }
      if ((_0x2d413e = _0x38a792 >> 2) != 0) {
        _0x38a792 = _0x2d413e;
        _0x1406d6 += 2;
      }
      if ((_0x2d413e = _0x38a792 >> 1) != 0) {
        _0x38a792 = _0x2d413e;
        _0x1406d6 += 1;
      }
      return _0x1406d6;
    }
    function _0x2c508e() {
      if (this.t <= 0) {
        return 0;
      }
      return this.DB * (this.t - 1) + _0x416952(this.data[this.t - 1] ^ this.s & this.DM);
    }
    function _0xba350d(_0x3ce866, _0x46822a) {
      var _0x77e40b;
      for (_0x77e40b = this.t - 1; _0x77e40b >= 0; --_0x77e40b) {
        _0x46822a.data[_0x77e40b + _0x3ce866] = this.data[_0x77e40b];
      }
      for (_0x77e40b = _0x3ce866 - 1; _0x77e40b >= 0; --_0x77e40b) {
        _0x46822a.data[_0x77e40b] = 0;
      }
      _0x46822a.t = this.t + _0x3ce866;
      _0x46822a.s = this.s;
    }
    function _0x548476(_0x2a5bd5, _0x5aac85) {
      for (var _0x51b6e2 = _0x2a5bd5; _0x51b6e2 < this.t; ++_0x51b6e2) {
        _0x5aac85.data[_0x51b6e2 - _0x2a5bd5] = this.data[_0x51b6e2];
      }
      _0x5aac85.t = Math.max(this.t - _0x2a5bd5, 0);
      _0x5aac85.s = this.s;
    }
    function _0x5b808d(_0x15db82, _0x7105ac) {
      var _0xd60a6b = _0x15db82 % this.DB;
      var _0x35fb1c = this.DB - _0xd60a6b;
      var _0x2adaed = (1 << _0x35fb1c) - 1;
      var _0x45587c = Math.floor(_0x15db82 / this.DB);
      var _0x5e6a5a = this.s << _0xd60a6b & this.DM;
      var _0x4c9e07;
      for (_0x4c9e07 = this.t - 1; _0x4c9e07 >= 0; --_0x4c9e07) {
        _0x7105ac.data[_0x4c9e07 + _0x45587c + 1] = this.data[_0x4c9e07] >> _0x35fb1c | _0x5e6a5a;
        _0x5e6a5a = (this.data[_0x4c9e07] & _0x2adaed) << _0xd60a6b;
      }
      for (_0x4c9e07 = _0x45587c - 1; _0x4c9e07 >= 0; --_0x4c9e07) {
        _0x7105ac.data[_0x4c9e07] = 0;
      }
      _0x7105ac.data[_0x45587c] = _0x5e6a5a;
      _0x7105ac.t = this.t + _0x45587c + 1;
      _0x7105ac.s = this.s;
      _0x7105ac.clamp();
    }
    function _0x109248(_0x5268d0, _0x41e1eb) {
      _0x41e1eb.s = this.s;
      var _0x28e33d = Math.floor(_0x5268d0 / this.DB);
      if (_0x28e33d >= this.t) {
        _0x41e1eb.t = 0;
        return;
      }
      var _0x4f09ab = _0x5268d0 % this.DB;
      var _0x4b3706 = this.DB - _0x4f09ab;
      var _0x69d0e7 = (1 << _0x4f09ab) - 1;
      _0x41e1eb.data[0] = this.data[_0x28e33d] >> _0x4f09ab;
      for (var _0x4f58d1 = _0x28e33d + 1; _0x4f58d1 < this.t; ++_0x4f58d1) {
        _0x41e1eb.data[_0x4f58d1 - _0x28e33d - 1] |= (this.data[_0x4f58d1] & _0x69d0e7) << _0x4b3706;
        _0x41e1eb.data[_0x4f58d1 - _0x28e33d] = this.data[_0x4f58d1] >> _0x4f09ab;
      }
      if (_0x4f09ab > 0) {
        _0x41e1eb.data[this.t - _0x28e33d - 1] |= (this.s & _0x69d0e7) << _0x4b3706;
      }
      _0x41e1eb.t = this.t - _0x28e33d;
      _0x41e1eb.clamp();
    }
    function _0x4b62bf(_0x4d160a, _0x48c4d9) {
      var _0x2ed4ac = 0;
      var _0x5930d4 = 0;
      var _0x588a3a = Math.min(_0x4d160a.t, this.t);
      while (_0x2ed4ac < _0x588a3a) {
        _0x5930d4 += this.data[_0x2ed4ac] - _0x4d160a.data[_0x2ed4ac];
        _0x48c4d9.data[_0x2ed4ac++] = _0x5930d4 & this.DM;
        _0x5930d4 >>= this.DB;
      }
      if (_0x4d160a.t < this.t) {
        _0x5930d4 -= _0x4d160a.s;
        while (_0x2ed4ac < this.t) {
          _0x5930d4 += this.data[_0x2ed4ac];
          _0x48c4d9.data[_0x2ed4ac++] = _0x5930d4 & this.DM;
          _0x5930d4 >>= this.DB;
        }
        _0x5930d4 += this.s;
      } else {
        _0x5930d4 += this.s;
        while (_0x2ed4ac < _0x4d160a.t) {
          _0x5930d4 -= _0x4d160a.data[_0x2ed4ac];
          _0x48c4d9.data[_0x2ed4ac++] = _0x5930d4 & this.DM;
          _0x5930d4 >>= this.DB;
        }
        _0x5930d4 -= _0x4d160a.s;
      }
      _0x48c4d9.s = _0x5930d4 < 0 ? -1 : 0;
      if (_0x5930d4 < -1) {
        _0x48c4d9.data[_0x2ed4ac++] = this.DV + _0x5930d4;
      } else if (_0x5930d4 > 0) {
        _0x48c4d9.data[_0x2ed4ac++] = _0x5930d4;
      }
      _0x48c4d9.t = _0x2ed4ac;
      _0x48c4d9.clamp();
    }
    function _0x2d5a90(_0x4e4b65, _0x1c1202) {
      var _0x5dc7ec = this.abs();
      var _0x416160 = _0x4e4b65.abs();
      var _0x168abc = _0x5dc7ec.t;
      _0x1c1202.t = _0x168abc + _0x416160.t;
      while (--_0x168abc >= 0) {
        _0x1c1202.data[_0x168abc] = 0;
      }
      for (_0x168abc = 0; _0x168abc < _0x416160.t; ++_0x168abc) {
        _0x1c1202.data[_0x168abc + _0x5dc7ec.t] = _0x5dc7ec.am(0, _0x416160.data[_0x168abc], _0x1c1202, _0x168abc, 0, _0x5dc7ec.t);
      }
      _0x1c1202.s = 0;
      _0x1c1202.clamp();
      if (this.s != _0x4e4b65.s) {
        _0x249691.ZERO.subTo(_0x1c1202, _0x1c1202);
      }
    }
    function _0x379ba2(_0x3b8c13) {
      var _0x4e0d99 = this.abs();
      var _0xa4facf = _0x3b8c13.t = _0x4e0d99.t * 2;
      while (--_0xa4facf >= 0) {
        _0x3b8c13.data[_0xa4facf] = 0;
      }
      for (_0xa4facf = 0; _0xa4facf < _0x4e0d99.t - 1; ++_0xa4facf) {
        var _0x173f47 = _0x4e0d99.am(_0xa4facf, _0x4e0d99.data[_0xa4facf], _0x3b8c13, _0xa4facf * 2, 0, 1);
        if ((_0x3b8c13.data[_0xa4facf + _0x4e0d99.t] += _0x4e0d99.am(_0xa4facf + 1, _0x4e0d99.data[_0xa4facf] * 2, _0x3b8c13, _0xa4facf * 2 + 1, _0x173f47, _0x4e0d99.t - _0xa4facf - 1)) >= _0x4e0d99.DV) {
          _0x3b8c13.data[_0xa4facf + _0x4e0d99.t] -= _0x4e0d99.DV;
          _0x3b8c13.data[_0xa4facf + _0x4e0d99.t + 1] = 1;
        }
      }
      if (_0x3b8c13.t > 0) {
        _0x3b8c13.data[_0x3b8c13.t - 1] += _0x4e0d99.am(_0xa4facf, _0x4e0d99.data[_0xa4facf], _0x3b8c13, _0xa4facf * 2, 0, 1);
      }
      _0x3b8c13.s = 0;
      _0x3b8c13.clamp();
    }
    function _0x341661(_0xb8283, _0x22e280, _0x2df845) {
      var _0x447cf8 = _0xb8283.abs();
      if (_0x447cf8.t <= 0) {
        return;
      }
      var _0x38422d = this.abs();
      if (_0x38422d.t < _0x447cf8.t) {
        if (_0x22e280 != null) {
          _0x22e280.fromInt(0);
        }
        if (_0x2df845 != null) {
          this.copyTo(_0x2df845);
        }
        return;
      }
      if (_0x2df845 == null) {
        _0x2df845 = _0x213fdd();
      }
      var _0x6e3e12 = _0x213fdd();
      var _0x12a03f = this.s;
      var _0x46759c = _0xb8283.s;
      var _0x25431e = this.DB - _0x416952(_0x447cf8.data[_0x447cf8.t - 1]);
      if (_0x25431e > 0) {
        _0x447cf8.lShiftTo(_0x25431e, _0x6e3e12);
        _0x38422d.lShiftTo(_0x25431e, _0x2df845);
      } else {
        _0x447cf8.copyTo(_0x6e3e12);
        _0x38422d.copyTo(_0x2df845);
      }
      var _0x55de24 = _0x6e3e12.t;
      var _0x379445 = _0x6e3e12.data[_0x55de24 - 1];
      if (_0x379445 == 0) {
        return;
      }
      var _0x234938 = _0x379445 * (1 << this.F1) + (_0x55de24 > 1 ? _0x6e3e12.data[_0x55de24 - 2] >> this.F2 : 0);
      var _0x450a02 = this.FV / _0x234938;
      var _0xf0ec3b = (1 << this.F1) / _0x234938;
      var _0x149626 = 1 << this.F2;
      var _0x3697db = _0x2df845.t;
      var _0x5732d0 = _0x3697db - _0x55de24;
      var _0x185a20 = _0x22e280 == null ? _0x213fdd() : _0x22e280;
      _0x6e3e12.dlShiftTo(_0x5732d0, _0x185a20);
      if (_0x2df845.compareTo(_0x185a20) >= 0) {
        _0x2df845.data[_0x2df845.t++] = 1;
        _0x2df845.subTo(_0x185a20, _0x2df845);
      }
      _0x249691.ONE.dlShiftTo(_0x55de24, _0x185a20);
      _0x185a20.subTo(_0x6e3e12, _0x6e3e12);
      while (_0x6e3e12.t < _0x55de24) {
        _0x6e3e12.data[_0x6e3e12.t++] = 0;
      }
      while (--_0x5732d0 >= 0) {
        var _0x20d83e = _0x2df845.data[--_0x3697db] == _0x379445 ? this.DM : Math.floor(_0x2df845.data[_0x3697db] * _0x450a02 + (_0x2df845.data[_0x3697db - 1] + _0x149626) * _0xf0ec3b);
        if ((_0x2df845.data[_0x3697db] += _0x6e3e12.am(0, _0x20d83e, _0x2df845, _0x5732d0, 0, _0x55de24)) < _0x20d83e) {
          _0x6e3e12.dlShiftTo(_0x5732d0, _0x185a20);
          _0x2df845.subTo(_0x185a20, _0x2df845);
          while (_0x2df845.data[_0x3697db] < --_0x20d83e) {
            _0x2df845.subTo(_0x185a20, _0x2df845);
          }
        }
      }
      if (_0x22e280 != null) {
        _0x2df845.drShiftTo(_0x55de24, _0x22e280);
        if (_0x12a03f != _0x46759c) {
          _0x249691.ZERO.subTo(_0x22e280, _0x22e280);
        }
      }
      _0x2df845.t = _0x55de24;
      _0x2df845.clamp();
      if (_0x25431e > 0) {
        _0x2df845.rShiftTo(_0x25431e, _0x2df845);
      }
      if (_0x12a03f < 0) {
        _0x249691.ZERO.subTo(_0x2df845, _0x2df845);
      }
    }
    function _0x497e3d(_0x159f32) {
      var _0x1c80eb = _0x213fdd();
      this.abs().divRemTo(_0x159f32, null, _0x1c80eb);
      if (this.s < 0 && _0x1c80eb.compareTo(_0x249691.ZERO) > 0) {
        _0x159f32.subTo(_0x1c80eb, _0x1c80eb);
      }
      return _0x1c80eb;
    }
    function _0x3387a9(_0x10407b) {
      this.m = _0x10407b;
    }
    function _0x53376c(_0x42d22b) {
      if (_0x42d22b.s < 0 || _0x42d22b.compareTo(this.m) >= 0) {
        return _0x42d22b.mod(this.m);
      } else {
        return _0x42d22b;
      }
    }
    function _0x28c5da(_0x3e0a64) {
      return _0x3e0a64;
    }
    function _0x8c4b7c(_0x53417b) {
      _0x53417b.divRemTo(this.m, null, _0x53417b);
    }
    function _0x1e695a(_0x4987a3, _0x338df3, _0x3d9c46) {
      _0x4987a3.multiplyTo(_0x338df3, _0x3d9c46);
      this.reduce(_0x3d9c46);
    }
    function _0x1b365e(_0x3e93cf, _0x46ddec) {
      _0x3e93cf.squareTo(_0x46ddec);
      this.reduce(_0x46ddec);
    }
    _0x3387a9.prototype.convert = _0x53376c;
    _0x3387a9.prototype.revert = _0x28c5da;
    _0x3387a9.prototype.reduce = _0x8c4b7c;
    _0x3387a9.prototype.mulTo = _0x1e695a;
    _0x3387a9.prototype.sqrTo = _0x1b365e;
    function _0x2f8042() {
      if (this.t < 1) {
        return 0;
      }
      var _0x9d4c88 = this.data[0];
      if ((_0x9d4c88 & 1) == 0) {
        return 0;
      }
      var _0x5ec31a = _0x9d4c88 & 3;
      _0x5ec31a = _0x5ec31a * (2 - (_0x9d4c88 & 15) * _0x5ec31a) & 15;
      _0x5ec31a = _0x5ec31a * (2 - (_0x9d4c88 & 255) * _0x5ec31a) & 255;
      _0x5ec31a = _0x5ec31a * (2 - ((_0x9d4c88 & 65535) * _0x5ec31a & 65535)) & 65535;
      _0x5ec31a = _0x5ec31a * (2 - _0x9d4c88 * _0x5ec31a % this.DV) % this.DV;
      if (_0x5ec31a > 0) {
        return this.DV - _0x5ec31a;
      } else {
        return -_0x5ec31a;
      }
    }
    function _0x47826d(_0x4583a6) {
      this.m = _0x4583a6;
      this.mp = _0x4583a6.invDigit();
      this.mpl = this.mp & 32767;
      this.mph = this.mp >> 15;
      this.um = (1 << _0x4583a6.DB - 15) - 1;
      this.mt2 = _0x4583a6.t * 2;
    }
    function _0x1cb092(_0x36af35) {
      var _0x4eeb6e = _0x213fdd();
      _0x36af35.abs().dlShiftTo(this.m.t, _0x4eeb6e);
      _0x4eeb6e.divRemTo(this.m, null, _0x4eeb6e);
      if (_0x36af35.s < 0 && _0x4eeb6e.compareTo(_0x249691.ZERO) > 0) {
        this.m.subTo(_0x4eeb6e, _0x4eeb6e);
      }
      return _0x4eeb6e;
    }
    function _0x28a1d3(_0x4cea90) {
      var _0x45cdd0 = _0x213fdd();
      _0x4cea90.copyTo(_0x45cdd0);
      this.reduce(_0x45cdd0);
      return _0x45cdd0;
    }
    function _0x10b8f2(_0x46d1b2) {
      while (_0x46d1b2.t <= this.mt2) {
        _0x46d1b2.data[_0x46d1b2.t++] = 0;
      }
      for (var _0x31c0e0 = 0; _0x31c0e0 < this.m.t; ++_0x31c0e0) {
        var _0x4c44c4 = _0x46d1b2.data[_0x31c0e0] & 32767;
        var _0x57a3bc = _0x4c44c4 * this.mpl + ((_0x4c44c4 * this.mph + (_0x46d1b2.data[_0x31c0e0] >> 15) * this.mpl & this.um) << 15) & _0x46d1b2.DM;
        _0x4c44c4 = _0x31c0e0 + this.m.t;
        _0x46d1b2.data[_0x4c44c4] += this.m.am(0, _0x57a3bc, _0x46d1b2, _0x31c0e0, 0, this.m.t);
        while (_0x46d1b2.data[_0x4c44c4] >= _0x46d1b2.DV) {
          _0x46d1b2.data[_0x4c44c4] -= _0x46d1b2.DV;
          _0x46d1b2.data[++_0x4c44c4]++;
        }
      }
      _0x46d1b2.clamp();
      _0x46d1b2.drShiftTo(this.m.t, _0x46d1b2);
      if (_0x46d1b2.compareTo(this.m) >= 0) {
        _0x46d1b2.subTo(this.m, _0x46d1b2);
      }
    }
    function _0x4c533f(_0x2e8966, _0x1c9b13) {
      _0x2e8966.squareTo(_0x1c9b13);
      this.reduce(_0x1c9b13);
    }
    function _0x3ec80d(_0x1ff0aa, _0x561639, _0x58f5d1) {
      _0x1ff0aa.multiplyTo(_0x561639, _0x58f5d1);
      this.reduce(_0x58f5d1);
    }
    _0x47826d.prototype.convert = _0x1cb092;
    _0x47826d.prototype.revert = _0x28a1d3;
    _0x47826d.prototype.reduce = _0x10b8f2;
    _0x47826d.prototype.mulTo = _0x3ec80d;
    _0x47826d.prototype.sqrTo = _0x4c533f;
    function _0xd14902() {
      return (this.t > 0 ? this.data[0] & 1 : this.s) == 0;
    }
    function _0x28b1c0(_0x4571b1, _0x59315c) {
      if (_0x4571b1 > 4294967295 || _0x4571b1 < 1) {
        return _0x249691.ONE;
      }
      var _0x37c319 = _0x213fdd();
      var _0x312e12 = _0x213fdd();
      var _0x5ebc7e = _0x59315c.convert(this);
      var _0x382ca4 = _0x416952(_0x4571b1) - 1;
      _0x5ebc7e.copyTo(_0x37c319);
      while (--_0x382ca4 >= 0) {
        _0x59315c.sqrTo(_0x37c319, _0x312e12);
        if ((_0x4571b1 & 1 << _0x382ca4) > 0) {
          _0x59315c.mulTo(_0x312e12, _0x5ebc7e, _0x37c319);
        } else {
          var _0xc76ecd = _0x37c319;
          _0x37c319 = _0x312e12;
          _0x312e12 = _0xc76ecd;
        }
      }
      return _0x59315c.revert(_0x37c319);
    }
    function _0x25b9e7(_0x1ae827, _0x3802cb) {
      var _0xbc4027;
      if (_0x1ae827 < 256 || _0x3802cb.isEven()) {
        _0xbc4027 = new _0x3387a9(_0x3802cb);
      } else {
        _0xbc4027 = new _0x47826d(_0x3802cb);
      }
      return this.exp(_0x1ae827, _0xbc4027);
    }
    _0x249691.prototype.copyTo = _0x4679cf;
    _0x249691.prototype.fromInt = _0x4442a2;
    _0x249691.prototype.fromString = _0x173f31;
    _0x249691.prototype.clamp = _0x2a3d82;
    _0x249691.prototype.dlShiftTo = _0xba350d;
    _0x249691.prototype.drShiftTo = _0x548476;
    _0x249691.prototype.lShiftTo = _0x5b808d;
    _0x249691.prototype.rShiftTo = _0x109248;
    _0x249691.prototype.subTo = _0x4b62bf;
    _0x249691.prototype.multiplyTo = _0x2d5a90;
    _0x249691.prototype.squareTo = _0x379ba2;
    _0x249691.prototype.divRemTo = _0x341661;
    _0x249691.prototype.invDigit = _0x2f8042;
    _0x249691.prototype.isEven = _0xd14902;
    _0x249691.prototype.exp = _0x28b1c0;
    _0x249691.prototype.toString = _0x371860;
    _0x249691.prototype.negate = _0x4e2d65;
    _0x249691.prototype.abs = _0x4fae1b;
    _0x249691.prototype.compareTo = _0x2ea714;
    _0x249691.prototype.bitLength = _0x2c508e;
    _0x249691.prototype.mod = _0x497e3d;
    _0x249691.prototype.modPowInt = _0x25b9e7;
    _0x249691.ZERO = _0x509fb0(0);
    _0x249691.ONE = _0x509fb0(1);
    function _0x57b3c9() {
      var _0x1a0fca = _0x213fdd();
      this.copyTo(_0x1a0fca);
      return _0x1a0fca;
    }
    function _0x137220() {
      if (this.s < 0) {
        if (this.t == 1) {
          return this.data[0] - this.DV;
        } else if (this.t == 0) {
          return -1;
        }
      } else if (this.t == 1) {
        return this.data[0];
      } else if (this.t == 0) {
        return 0;
      }
      return (this.data[1] & (1 << 32 - this.DB) - 1) << this.DB | this.data[0];
    }
    function _0x2d6bcc() {
      if (this.t == 0) {
        return this.s;
      } else {
        return this.data[0] << 24 >> 24;
      }
    }
    function _0xf74a90() {
      if (this.t == 0) {
        return this.s;
      } else {
        return this.data[0] << 16 >> 16;
      }
    }
    function _0x4fc8b4(_0x4aa9e8) {
      return Math.floor(Math.LN2 * this.DB / Math.log(_0x4aa9e8));
    }
    function _0x63ebae() {
      if (this.s < 0) {
        return -1;
      } else if (this.t <= 0 || this.t == 1 && this.data[0] <= 0) {
        return 0;
      } else {
        return 1;
      }
    }
    function _0x4b5c0c(_0x6bba24) {
      if (_0x6bba24 == null) {
        _0x6bba24 = 10;
      }
      if (this.signum() == 0 || _0x6bba24 < 2 || _0x6bba24 > 36) {
        return "0";
      }
      var _0x3f8ab1 = this.chunkSize(_0x6bba24);
      var _0x3a360f = Math.pow(_0x6bba24, _0x3f8ab1);
      var _0x537f4c = _0x509fb0(_0x3a360f);
      var _0x179dab = _0x213fdd();
      var _0x108ae1 = _0x213fdd();
      var _0x17c7fb = "";
      this.divRemTo(_0x537f4c, _0x179dab, _0x108ae1);
      while (_0x179dab.signum() > 0) {
        _0x17c7fb = (_0x3a360f + _0x108ae1.intValue()).toString(_0x6bba24).substr(1) + _0x17c7fb;
        _0x179dab.divRemTo(_0x537f4c, _0x179dab, _0x108ae1);
      }
      return _0x108ae1.intValue().toString(_0x6bba24) + _0x17c7fb;
    }
    function _0x104386(_0x2b7b3e, _0x1e4202) {
      this.fromInt(0);
      if (_0x1e4202 == null) {
        _0x1e4202 = 10;
      }
      var _0x17f61c = this.chunkSize(_0x1e4202);
      var _0x15121f = Math.pow(_0x1e4202, _0x17f61c);
      var _0x1d1b7f = false;
      var _0xc9ba6a = 0;
      var _0x421f54 = 0;
      for (var _0x486005 = 0; _0x486005 < _0x2b7b3e.length; ++_0x486005) {
        var _0x5b1cd4 = _0x232729(_0x2b7b3e, _0x486005);
        if (_0x5b1cd4 < 0) {
          if (_0x2b7b3e.charAt(_0x486005) == "-" && this.signum() == 0) {
            _0x1d1b7f = true;
          }
          continue;
        }
        _0x421f54 = _0x1e4202 * _0x421f54 + _0x5b1cd4;
        if (++_0xc9ba6a >= _0x17f61c) {
          this.dMultiply(_0x15121f);
          this.dAddOffset(_0x421f54, 0);
          _0xc9ba6a = 0;
          _0x421f54 = 0;
        }
      }
      if (_0xc9ba6a > 0) {
        this.dMultiply(Math.pow(_0x1e4202, _0xc9ba6a));
        this.dAddOffset(_0x421f54, 0);
      }
      if (_0x1d1b7f) {
        _0x249691.ZERO.subTo(this, this);
      }
    }
    function _0x308008(_0x6aedec, _0x3b63ca, _0x4340f0) {
      if (typeof _0x3b63ca == "number") {
        if (_0x6aedec < 2) {
          this.fromInt(1);
        } else {
          this.fromNumber(_0x6aedec, _0x4340f0);
          if (!this.testBit(_0x6aedec - 1)) {
            this.bitwiseTo(_0x249691.ONE.shiftLeft(_0x6aedec - 1), _0x509ad7, this);
          }
          if (this.isEven()) {
            this.dAddOffset(1, 0);
          }
          while (!this.isProbablePrime(_0x3b63ca)) {
            this.dAddOffset(2, 0);
            if (this.bitLength() > _0x6aedec) {
              this.subTo(_0x249691.ONE.shiftLeft(_0x6aedec - 1), this);
            }
          }
        }
      } else {
        var _0x46d3fb = new Array();
        var _0x2ce8b9 = _0x6aedec & 7;
        _0x46d3fb.length = (_0x6aedec >> 3) + 1;
        _0x3b63ca.nextBytes(_0x46d3fb);
        if (_0x2ce8b9 > 0) {
          _0x46d3fb[0] &= (1 << _0x2ce8b9) - 1;
        } else {
          _0x46d3fb[0] = 0;
        }
        this.fromString(_0x46d3fb, 256);
      }
    }
    function _0x2e2405() {
      var _0x341e09 = this.t;
      var _0x560344 = new Array();
      _0x560344[0] = this.s;
      var _0x30a4f0 = this.DB - _0x341e09 * this.DB % 8;
      var _0xef33cb;
      var _0x3fb970 = 0;
      if (_0x341e09-- > 0) {
        if (_0x30a4f0 < this.DB && (_0xef33cb = this.data[_0x341e09] >> _0x30a4f0) != (this.s & this.DM) >> _0x30a4f0) {
          _0x560344[_0x3fb970++] = _0xef33cb | this.s << this.DB - _0x30a4f0;
        }
        while (_0x341e09 >= 0) {
          if (_0x30a4f0 < 8) {
            _0xef33cb = (this.data[_0x341e09] & (1 << _0x30a4f0) - 1) << 8 - _0x30a4f0;
            _0xef33cb |= this.data[--_0x341e09] >> (_0x30a4f0 += this.DB - 8);
          } else {
            _0xef33cb = this.data[_0x341e09] >> (_0x30a4f0 -= 8) & 255;
            if (_0x30a4f0 <= 0) {
              _0x30a4f0 += this.DB;
              --_0x341e09;
            }
          }
          if ((_0xef33cb & 128) != 0) {
            _0xef33cb |= -256;
          }
          if (_0x3fb970 == 0 && (this.s & 128) != (_0xef33cb & 128)) {
            ++_0x3fb970;
          }
          if (_0x3fb970 > 0 || _0xef33cb != this.s) {
            _0x560344[_0x3fb970++] = _0xef33cb;
          }
        }
      }
      return _0x560344;
    }
    function _0x303c70(_0x23a4e5) {
      return this.compareTo(_0x23a4e5) == 0;
    }
    function _0x2fc253(_0x598926) {
      if (this.compareTo(_0x598926) < 0) {
        return this;
      } else {
        return _0x598926;
      }
    }
    function _0x5196ce(_0xc39cc6) {
      if (this.compareTo(_0xc39cc6) > 0) {
        return this;
      } else {
        return _0xc39cc6;
      }
    }
    function _0x498a85(_0x3c4417, _0x5ae4a5, _0x572903) {
      var _0x3b2594;
      var _0x5650eb;
      var _0x112b38 = Math.min(_0x3c4417.t, this.t);
      for (_0x3b2594 = 0; _0x3b2594 < _0x112b38; ++_0x3b2594) {
        _0x572903.data[_0x3b2594] = _0x5ae4a5(this.data[_0x3b2594], _0x3c4417.data[_0x3b2594]);
      }
      if (_0x3c4417.t < this.t) {
        _0x5650eb = _0x3c4417.s & this.DM;
        for (_0x3b2594 = _0x112b38; _0x3b2594 < this.t; ++_0x3b2594) {
          _0x572903.data[_0x3b2594] = _0x5ae4a5(this.data[_0x3b2594], _0x5650eb);
        }
        _0x572903.t = this.t;
      } else {
        _0x5650eb = this.s & this.DM;
        for (_0x3b2594 = _0x112b38; _0x3b2594 < _0x3c4417.t; ++_0x3b2594) {
          _0x572903.data[_0x3b2594] = _0x5ae4a5(_0x5650eb, _0x3c4417.data[_0x3b2594]);
        }
        _0x572903.t = _0x3c4417.t;
      }
      _0x572903.s = _0x5ae4a5(this.s, _0x3c4417.s);
      _0x572903.clamp();
    }
    function _0x42e18f(_0x3da1e1, _0xccd843) {
      return _0x3da1e1 & _0xccd843;
    }
    function _0x260402(_0x32c4b2) {
      var _0x44aadf = _0x213fdd();
      this.bitwiseTo(_0x32c4b2, _0x42e18f, _0x44aadf);
      return _0x44aadf;
    }
    function _0x509ad7(_0x5d65e6, _0x27b9d4) {
      return _0x5d65e6 | _0x27b9d4;
    }
    function _0x4ec2d7(_0x4d4a21) {
      var _0x2f6f6d = _0x213fdd();
      this.bitwiseTo(_0x4d4a21, _0x509ad7, _0x2f6f6d);
      return _0x2f6f6d;
    }
    function _0x24c8a8(_0x2e5fc6, _0x176d96) {
      return _0x2e5fc6 ^ _0x176d96;
    }
    function _0x49fb92(_0x141b2d) {
      var _0x4291dc = _0x213fdd();
      this.bitwiseTo(_0x141b2d, _0x24c8a8, _0x4291dc);
      return _0x4291dc;
    }
    function _0x32096c(_0x22dffa, _0x410b87) {
      return _0x22dffa & ~_0x410b87;
    }
    function _0x2eca10(_0x5c0352) {
      var _0x101246 = _0x213fdd();
      this.bitwiseTo(_0x5c0352, _0x32096c, _0x101246);
      return _0x101246;
    }
    function _0x227fd0() {
      var _0x28ea63 = _0x213fdd();
      for (var _0xdafe92 = 0; _0xdafe92 < this.t; ++_0xdafe92) {
        _0x28ea63.data[_0xdafe92] = this.DM & ~this.data[_0xdafe92];
      }
      _0x28ea63.t = this.t;
      _0x28ea63.s = ~this.s;
      return _0x28ea63;
    }
    function _0x4aaa01(_0x1f9546) {
      var _0x3f527c = _0x213fdd();
      if (_0x1f9546 < 0) {
        this.rShiftTo(-_0x1f9546, _0x3f527c);
      } else {
        this.lShiftTo(_0x1f9546, _0x3f527c);
      }
      return _0x3f527c;
    }
    function _0x4560a0(_0x3c2849) {
      var _0x50cbf9 = _0x213fdd();
      if (_0x3c2849 < 0) {
        this.lShiftTo(-_0x3c2849, _0x50cbf9);
      } else {
        this.rShiftTo(_0x3c2849, _0x50cbf9);
      }
      return _0x50cbf9;
    }
    function _0x39b6e6(_0x32e83f) {
      if (_0x32e83f == 0) {
        return -1;
      }
      var _0x62fe9b = 0;
      if ((_0x32e83f & 65535) == 0) {
        _0x32e83f >>= 16;
        _0x62fe9b += 16;
      }
      if ((_0x32e83f & 255) == 0) {
        _0x32e83f >>= 8;
        _0x62fe9b += 8;
      }
      if ((_0x32e83f & 15) == 0) {
        _0x32e83f >>= 4;
        _0x62fe9b += 4;
      }
      if ((_0x32e83f & 3) == 0) {
        _0x32e83f >>= 2;
        _0x62fe9b += 2;
      }
      if ((_0x32e83f & 1) == 0) {
        ++_0x62fe9b;
      }
      return _0x62fe9b;
    }
    function _0x54ddc6() {
      for (var _0x34ff9e = 0; _0x34ff9e < this.t; ++_0x34ff9e) {
        if (this.data[_0x34ff9e] != 0) {
          return _0x34ff9e * this.DB + _0x39b6e6(this.data[_0x34ff9e]);
        }
      }
      if (this.s < 0) {
        return this.t * this.DB;
      }
      return -1;
    }
    function _0x208787(_0x59a1c9) {
      var _0x3c82fc = 0;
      while (_0x59a1c9 != 0) {
        _0x59a1c9 &= _0x59a1c9 - 1;
        ++_0x3c82fc;
      }
      return _0x3c82fc;
    }
    function _0x6c9c96() {
      var _0x35941a = 0;
      var _0x646973 = this.s & this.DM;
      for (var _0x456a82 = 0; _0x456a82 < this.t; ++_0x456a82) {
        _0x35941a += _0x208787(this.data[_0x456a82] ^ _0x646973);
      }
      return _0x35941a;
    }
    function _0x5244ff(_0x391552) {
      var _0x21207d = Math.floor(_0x391552 / this.DB);
      if (_0x21207d >= this.t) {
        return this.s != 0;
      }
      return (this.data[_0x21207d] & 1 << _0x391552 % this.DB) != 0;
    }
    function _0x556b85(_0x279dcb, _0x215eff) {
      var _0xc9780d = _0x249691.ONE.shiftLeft(_0x279dcb);
      this.bitwiseTo(_0xc9780d, _0x215eff, _0xc9780d);
      return _0xc9780d;
    }
    function _0x2fdabe(_0x247991) {
      return this.changeBit(_0x247991, _0x509ad7);
    }
    function _0x194041(_0x369bff) {
      return this.changeBit(_0x369bff, _0x32096c);
    }
    function _0x348093(_0x3b0eea) {
      return this.changeBit(_0x3b0eea, _0x24c8a8);
    }
    function _0x1f4c9c(_0x58e16b, _0x20def9) {
      var _0x1531c9 = 0;
      var _0x4dd278 = 0;
      var _0x5a0da4 = Math.min(_0x58e16b.t, this.t);
      while (_0x1531c9 < _0x5a0da4) {
        _0x4dd278 += this.data[_0x1531c9] + _0x58e16b.data[_0x1531c9];
        _0x20def9.data[_0x1531c9++] = _0x4dd278 & this.DM;
        _0x4dd278 >>= this.DB;
      }
      if (_0x58e16b.t < this.t) {
        _0x4dd278 += _0x58e16b.s;
        while (_0x1531c9 < this.t) {
          _0x4dd278 += this.data[_0x1531c9];
          _0x20def9.data[_0x1531c9++] = _0x4dd278 & this.DM;
          _0x4dd278 >>= this.DB;
        }
        _0x4dd278 += this.s;
      } else {
        _0x4dd278 += this.s;
        while (_0x1531c9 < _0x58e16b.t) {
          _0x4dd278 += _0x58e16b.data[_0x1531c9];
          _0x20def9.data[_0x1531c9++] = _0x4dd278 & this.DM;
          _0x4dd278 >>= this.DB;
        }
        _0x4dd278 += _0x58e16b.s;
      }
      _0x20def9.s = _0x4dd278 < 0 ? -1 : 0;
      if (_0x4dd278 > 0) {
        _0x20def9.data[_0x1531c9++] = _0x4dd278;
      } else if (_0x4dd278 < -1) {
        _0x20def9.data[_0x1531c9++] = this.DV + _0x4dd278;
      }
      _0x20def9.t = _0x1531c9;
      _0x20def9.clamp();
    }
    function _0x339ee2(_0x192d56) {
      var _0x7c726b = _0x213fdd();
      this.addTo(_0x192d56, _0x7c726b);
      return _0x7c726b;
    }
    function _0x5013e0(_0x3a9083) {
      var _0xb065a5 = _0x213fdd();
      this.subTo(_0x3a9083, _0xb065a5);
      return _0xb065a5;
    }
    function _0x285493(_0x2e3115) {
      var _0x5c5e0e = _0x213fdd();
      this.multiplyTo(_0x2e3115, _0x5c5e0e);
      return _0x5c5e0e;
    }
    function _0x44dc79() {
      var _0x9f702a = _0x213fdd();
      this.squareTo(_0x9f702a);
      return _0x9f702a;
    }
    function _0x53de2b(_0x2624e8) {
      var _0x348573 = _0x213fdd();
      this.divRemTo(_0x2624e8, _0x348573, null);
      return _0x348573;
    }
    function _0x490cd4(_0x13b033) {
      var _0x2cf05d = _0x213fdd();
      this.divRemTo(_0x13b033, null, _0x2cf05d);
      return _0x2cf05d;
    }
    function _0x47ffe6(_0x5432f9) {
      var _0x1d2d49 = _0x213fdd();
      var _0x4a4379 = _0x213fdd();
      this.divRemTo(_0x5432f9, _0x1d2d49, _0x4a4379);
      return new Array(_0x1d2d49, _0x4a4379);
    }
    function _0x352154(_0x5211ec) {
      this.data[this.t] = this.am(0, _0x5211ec - 1, this, 0, 0, this.t);
      ++this.t;
      this.clamp();
    }
    function _0x417ffa(_0x1cc3e8, _0x16d855) {
      if (_0x1cc3e8 == 0) {
        return;
      }
      while (this.t <= _0x16d855) {
        this.data[this.t++] = 0;
      }
      this.data[_0x16d855] += _0x1cc3e8;
      while (this.data[_0x16d855] >= this.DV) {
        this.data[_0x16d855] -= this.DV;
        if (++_0x16d855 >= this.t) {
          this.data[this.t++] = 0;
        }
        ++this.data[_0x16d855];
      }
    }
    function _0x2472bf() {}
    function _0x4b1b0f(_0x4a4bce) {
      return _0x4a4bce;
    }
    function _0x463c38(_0x18954d, _0x40b194, _0x5b9b70) {
      _0x18954d.multiplyTo(_0x40b194, _0x5b9b70);
    }
    function _0x5bd874(_0x215c8d, _0x4cabe1) {
      _0x215c8d.squareTo(_0x4cabe1);
    }
    _0x2472bf.prototype.convert = _0x4b1b0f;
    _0x2472bf.prototype.revert = _0x4b1b0f;
    _0x2472bf.prototype.mulTo = _0x463c38;
    _0x2472bf.prototype.sqrTo = _0x5bd874;
    function _0x3e6071(_0x546edf) {
      return this.exp(_0x546edf, new _0x2472bf());
    }
    function _0xf238b5(_0x283938, _0x102007, _0x3bd0ed) {
      var _0xe55633 = Math.min(this.t + _0x283938.t, _0x102007);
      _0x3bd0ed.s = 0;
      _0x3bd0ed.t = _0xe55633;
      while (_0xe55633 > 0) {
        _0x3bd0ed.data[--_0xe55633] = 0;
      }
      var _0x276321;
      for (_0x276321 = _0x3bd0ed.t - this.t; _0xe55633 < _0x276321; ++_0xe55633) {
        _0x3bd0ed.data[_0xe55633 + this.t] = this.am(0, _0x283938.data[_0xe55633], _0x3bd0ed, _0xe55633, 0, this.t);
      }
      for (_0x276321 = Math.min(_0x283938.t, _0x102007); _0xe55633 < _0x276321; ++_0xe55633) {
        this.am(0, _0x283938.data[_0xe55633], _0x3bd0ed, _0xe55633, 0, _0x102007 - _0xe55633);
      }
      _0x3bd0ed.clamp();
    }
    function _0x48ec66(_0x1e132c, _0x14cfda, _0x16728d) {
      --_0x14cfda;
      var _0x593bef = _0x16728d.t = this.t + _0x1e132c.t - _0x14cfda;
      _0x16728d.s = 0;
      while (--_0x593bef >= 0) {
        _0x16728d.data[_0x593bef] = 0;
      }
      for (_0x593bef = Math.max(_0x14cfda - this.t, 0); _0x593bef < _0x1e132c.t; ++_0x593bef) {
        _0x16728d.data[this.t + _0x593bef - _0x14cfda] = this.am(_0x14cfda - _0x593bef, _0x1e132c.data[_0x593bef], _0x16728d, 0, 0, this.t + _0x593bef - _0x14cfda);
      }
      _0x16728d.clamp();
      _0x16728d.drShiftTo(1, _0x16728d);
    }
    function _0x438aea(_0x5026ed) {
      this.r2 = _0x213fdd();
      this.q3 = _0x213fdd();
      _0x249691.ONE.dlShiftTo(_0x5026ed.t * 2, this.r2);
      this.mu = this.r2.divide(_0x5026ed);
      this.m = _0x5026ed;
    }
    function _0x19be94(_0x409022) {
      if (_0x409022.s < 0 || _0x409022.t > this.m.t * 2) {
        return _0x409022.mod(this.m);
      } else if (_0x409022.compareTo(this.m) < 0) {
        return _0x409022;
      } else {
        var _0x3d9a8c = _0x213fdd();
        _0x409022.copyTo(_0x3d9a8c);
        this.reduce(_0x3d9a8c);
        return _0x3d9a8c;
      }
    }
    function _0x4cd9ab(_0x4fb675) {
      return _0x4fb675;
    }
    function _0x12c8e0(_0x2dca25) {
      _0x2dca25.drShiftTo(this.m.t - 1, this.r2);
      if (_0x2dca25.t > this.m.t + 1) {
        _0x2dca25.t = this.m.t + 1;
        _0x2dca25.clamp();
      }
      this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
      this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
      while (_0x2dca25.compareTo(this.r2) < 0) {
        _0x2dca25.dAddOffset(1, this.m.t + 1);
      }
      _0x2dca25.subTo(this.r2, _0x2dca25);
      while (_0x2dca25.compareTo(this.m) >= 0) {
        _0x2dca25.subTo(this.m, _0x2dca25);
      }
    }
    function _0x312638(_0x4e759a, _0x2e9f98) {
      _0x4e759a.squareTo(_0x2e9f98);
      this.reduce(_0x2e9f98);
    }
    function _0x29f29d(_0x445348, _0x3ff24e, _0x16cdd2) {
      _0x445348.multiplyTo(_0x3ff24e, _0x16cdd2);
      this.reduce(_0x16cdd2);
    }
    _0x438aea.prototype.convert = _0x19be94;
    _0x438aea.prototype.revert = _0x4cd9ab;
    _0x438aea.prototype.reduce = _0x12c8e0;
    _0x438aea.prototype.mulTo = _0x29f29d;
    _0x438aea.prototype.sqrTo = _0x312638;
    function _0x5d3630(_0x4b62a1, _0x5c8104) {
      var _0x1973fa = _0x4b62a1.bitLength();
      var _0x3f0ef3;
      var _0x2f9786 = _0x509fb0(1);
      var _0x5c9953;
      if (_0x1973fa <= 0) {
        return _0x2f9786;
      } else if (_0x1973fa < 18) {
        _0x3f0ef3 = 1;
      } else if (_0x1973fa < 48) {
        _0x3f0ef3 = 3;
      } else if (_0x1973fa < 144) {
        _0x3f0ef3 = 4;
      } else if (_0x1973fa < 768) {
        _0x3f0ef3 = 5;
      } else {
        _0x3f0ef3 = 6;
      }
      if (_0x1973fa < 8) {
        _0x5c9953 = new _0x3387a9(_0x5c8104);
      } else if (_0x5c8104.isEven()) {
        _0x5c9953 = new _0x438aea(_0x5c8104);
      } else {
        _0x5c9953 = new _0x47826d(_0x5c8104);
      }
      var _0x41f53e = new Array();
      var _0x21f424 = 3;
      var _0x4e3e46 = _0x3f0ef3 - 1;
      var _0x200593 = (1 << _0x3f0ef3) - 1;
      _0x41f53e[1] = _0x5c9953.convert(this);
      if (_0x3f0ef3 > 1) {
        var _0x550b1c = _0x213fdd();
        _0x5c9953.sqrTo(_0x41f53e[1], _0x550b1c);
        while (_0x21f424 <= _0x200593) {
          _0x41f53e[_0x21f424] = _0x213fdd();
          _0x5c9953.mulTo(_0x550b1c, _0x41f53e[_0x21f424 - 2], _0x41f53e[_0x21f424]);
          _0x21f424 += 2;
        }
      }
      var _0x18f4f4 = _0x4b62a1.t - 1;
      var _0x1481b8;
      var _0x26c3df = true;
      var _0x7310ec = _0x213fdd();
      var _0x5c03b4;
      _0x1973fa = _0x416952(_0x4b62a1.data[_0x18f4f4]) - 1;
      while (_0x18f4f4 >= 0) {
        if (_0x1973fa >= _0x4e3e46) {
          _0x1481b8 = _0x4b62a1.data[_0x18f4f4] >> _0x1973fa - _0x4e3e46 & _0x200593;
        } else {
          _0x1481b8 = (_0x4b62a1.data[_0x18f4f4] & (1 << _0x1973fa + 1) - 1) << _0x4e3e46 - _0x1973fa;
          if (_0x18f4f4 > 0) {
            _0x1481b8 |= _0x4b62a1.data[_0x18f4f4 - 1] >> this.DB + _0x1973fa - _0x4e3e46;
          }
        }
        _0x21f424 = _0x3f0ef3;
        while ((_0x1481b8 & 1) == 0) {
          _0x1481b8 >>= 1;
          --_0x21f424;
        }
        if ((_0x1973fa -= _0x21f424) < 0) {
          _0x1973fa += this.DB;
          --_0x18f4f4;
        }
        if (_0x26c3df) {
          _0x41f53e[_0x1481b8].copyTo(_0x2f9786);
          _0x26c3df = false;
        } else {
          while (_0x21f424 > 1) {
            _0x5c9953.sqrTo(_0x2f9786, _0x7310ec);
            _0x5c9953.sqrTo(_0x7310ec, _0x2f9786);
            _0x21f424 -= 2;
          }
          if (_0x21f424 > 0) {
            _0x5c9953.sqrTo(_0x2f9786, _0x7310ec);
          } else {
            _0x5c03b4 = _0x2f9786;
            _0x2f9786 = _0x7310ec;
            _0x7310ec = _0x5c03b4;
          }
          _0x5c9953.mulTo(_0x7310ec, _0x41f53e[_0x1481b8], _0x2f9786);
        }
        while (_0x18f4f4 >= 0 && (_0x4b62a1.data[_0x18f4f4] & 1 << _0x1973fa) == 0) {
          _0x5c9953.sqrTo(_0x2f9786, _0x7310ec);
          _0x5c03b4 = _0x2f9786;
          _0x2f9786 = _0x7310ec;
          _0x7310ec = _0x5c03b4;
          if (--_0x1973fa < 0) {
            _0x1973fa = this.DB - 1;
            --_0x18f4f4;
          }
        }
      }
      return _0x5c9953.revert(_0x2f9786);
    }
    function _0x4cabf2(_0x323b71) {
      var _0x569b0a = this.s < 0 ? this.negate() : this.clone();
      var _0x2f02f7 = _0x323b71.s < 0 ? _0x323b71.negate() : _0x323b71.clone();
      if (_0x569b0a.compareTo(_0x2f02f7) < 0) {
        var _0x49961c = _0x569b0a;
        _0x569b0a = _0x2f02f7;
        _0x2f02f7 = _0x49961c;
      }
      var _0x418021 = _0x569b0a.getLowestSetBit();
      var _0x3c5305 = _0x2f02f7.getLowestSetBit();
      if (_0x3c5305 < 0) {
        return _0x569b0a;
      }
      if (_0x418021 < _0x3c5305) {
        _0x3c5305 = _0x418021;
      }
      if (_0x3c5305 > 0) {
        _0x569b0a.rShiftTo(_0x3c5305, _0x569b0a);
        _0x2f02f7.rShiftTo(_0x3c5305, _0x2f02f7);
      }
      while (_0x569b0a.signum() > 0) {
        if ((_0x418021 = _0x569b0a.getLowestSetBit()) > 0) {
          _0x569b0a.rShiftTo(_0x418021, _0x569b0a);
        }
        if ((_0x418021 = _0x2f02f7.getLowestSetBit()) > 0) {
          _0x2f02f7.rShiftTo(_0x418021, _0x2f02f7);
        }
        if (_0x569b0a.compareTo(_0x2f02f7) >= 0) {
          _0x569b0a.subTo(_0x2f02f7, _0x569b0a);
          _0x569b0a.rShiftTo(1, _0x569b0a);
        } else {
          _0x2f02f7.subTo(_0x569b0a, _0x2f02f7);
          _0x2f02f7.rShiftTo(1, _0x2f02f7);
        }
      }
      if (_0x3c5305 > 0) {
        _0x2f02f7.lShiftTo(_0x3c5305, _0x2f02f7);
      }
      return _0x2f02f7;
    }
    function _0x13010b(_0xb75d21) {
      if (_0xb75d21 <= 0) {
        return 0;
      }
      var _0x505a83 = this.DV % _0xb75d21;
      var _0x4be37a = this.s < 0 ? _0xb75d21 - 1 : 0;
      if (this.t > 0) {
        if (_0x505a83 == 0) {
          _0x4be37a = this.data[0] % _0xb75d21;
        } else {
          for (var _0x1110e3 = this.t - 1; _0x1110e3 >= 0; --_0x1110e3) {
            _0x4be37a = (_0x505a83 * _0x4be37a + this.data[_0x1110e3]) % _0xb75d21;
          }
        }
      }
      return _0x4be37a;
    }
    function _0x289725(_0xb9e5a1) {
      if (this.signum() == 0) {
        return _0x249691.ZERO;
      }
      var _0x4e4528 = _0xb9e5a1.isEven();
      if (this.isEven() && _0x4e4528 || _0xb9e5a1.signum() == 0) {
        return _0x249691.ZERO;
      }
      var _0x3d933a = _0xb9e5a1.clone();
      var _0x43624d = this.clone();
      var _0x3a599b = _0x509fb0(1);
      var _0x37fff7 = _0x509fb0(0);
      var _0x53ed32 = _0x509fb0(0);
      var _0x4a41bf = _0x509fb0(1);
      while (_0x3d933a.signum() != 0) {
        while (_0x3d933a.isEven()) {
          _0x3d933a.rShiftTo(1, _0x3d933a);
          if (_0x4e4528) {
            if (!_0x3a599b.isEven() || !_0x37fff7.isEven()) {
              _0x3a599b.addTo(this, _0x3a599b);
              _0x37fff7.subTo(_0xb9e5a1, _0x37fff7);
            }
            _0x3a599b.rShiftTo(1, _0x3a599b);
          } else if (!_0x37fff7.isEven()) {
            _0x37fff7.subTo(_0xb9e5a1, _0x37fff7);
          }
          _0x37fff7.rShiftTo(1, _0x37fff7);
        }
        while (_0x43624d.isEven()) {
          _0x43624d.rShiftTo(1, _0x43624d);
          if (_0x4e4528) {
            if (!_0x53ed32.isEven() || !_0x4a41bf.isEven()) {
              _0x53ed32.addTo(this, _0x53ed32);
              _0x4a41bf.subTo(_0xb9e5a1, _0x4a41bf);
            }
            _0x53ed32.rShiftTo(1, _0x53ed32);
          } else if (!_0x4a41bf.isEven()) {
            _0x4a41bf.subTo(_0xb9e5a1, _0x4a41bf);
          }
          _0x4a41bf.rShiftTo(1, _0x4a41bf);
        }
        if (_0x3d933a.compareTo(_0x43624d) >= 0) {
          _0x3d933a.subTo(_0x43624d, _0x3d933a);
          if (_0x4e4528) {
            _0x3a599b.subTo(_0x53ed32, _0x3a599b);
          }
          _0x37fff7.subTo(_0x4a41bf, _0x37fff7);
        } else {
          _0x43624d.subTo(_0x3d933a, _0x43624d);
          if (_0x4e4528) {
            _0x53ed32.subTo(_0x3a599b, _0x53ed32);
          }
          _0x4a41bf.subTo(_0x37fff7, _0x4a41bf);
        }
      }
      if (_0x43624d.compareTo(_0x249691.ONE) != 0) {
        return _0x249691.ZERO;
      }
      if (_0x4a41bf.compareTo(_0xb9e5a1) >= 0) {
        return _0x4a41bf.subtract(_0xb9e5a1);
      }
      if (_0x4a41bf.signum() < 0) {
        _0x4a41bf.addTo(_0xb9e5a1, _0x4a41bf);
      } else {
        return _0x4a41bf;
      }
      if (_0x4a41bf.signum() < 0) {
        return _0x4a41bf.add(_0xb9e5a1);
      } else {
        return _0x4a41bf;
      }
    }
    var _0x4ac08c = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
    var _0x15e210 = 67108864 / _0x4ac08c[_0x4ac08c.length - 1];
    function _0x6bdc33(_0x3bd75c) {
      var _0x3eb8a2;
      var _0x460946 = this.abs();
      if (_0x460946.t == 1 && _0x460946.data[0] <= _0x4ac08c[_0x4ac08c.length - 1]) {
        for (_0x3eb8a2 = 0; _0x3eb8a2 < _0x4ac08c.length; ++_0x3eb8a2) {
          if (_0x460946.data[0] == _0x4ac08c[_0x3eb8a2]) {
            return true;
          }
        }
        return false;
      }
      if (_0x460946.isEven()) {
        return false;
      }
      _0x3eb8a2 = 1;
      while (_0x3eb8a2 < _0x4ac08c.length) {
        var _0x366026 = _0x4ac08c[_0x3eb8a2];
        var _0x792ccc = _0x3eb8a2 + 1;
        while (_0x792ccc < _0x4ac08c.length && _0x366026 < _0x15e210) {
          _0x366026 *= _0x4ac08c[_0x792ccc++];
        }
        _0x366026 = _0x460946.modInt(_0x366026);
        while (_0x3eb8a2 < _0x792ccc) {
          if (_0x366026 % _0x4ac08c[_0x3eb8a2++] == 0) {
            return false;
          }
        }
      }
      return _0x460946.millerRabin(_0x3bd75c);
    }
    function _0x1f88c2(_0xffbc7b) {
      var _0x3632e4 = this.subtract(_0x249691.ONE);
      var _0x2accdf = _0x3632e4.getLowestSetBit();
      if (_0x2accdf <= 0) {
        return false;
      }
      var _0x27dc83 = _0x3632e4.shiftRight(_0x2accdf);
      var _0x20215f = _0x877228();
      var _0xda1a60;
      for (var _0x758d2e = 0; _0x758d2e < _0xffbc7b; ++_0x758d2e) {
        do {
          _0xda1a60 = new _0x249691(this.bitLength(), _0x20215f);
        } while (_0xda1a60.compareTo(_0x249691.ONE) <= 0 || _0xda1a60.compareTo(_0x3632e4) >= 0);
        var _0x45b4fb = _0xda1a60.modPow(_0x27dc83, this);
        if (_0x45b4fb.compareTo(_0x249691.ONE) != 0 && _0x45b4fb.compareTo(_0x3632e4) != 0) {
          var _0x59c950 = 1;
          while (_0x59c950++ < _0x2accdf && _0x45b4fb.compareTo(_0x3632e4) != 0) {
            _0x45b4fb = _0x45b4fb.modPowInt(2, this);
            if (_0x45b4fb.compareTo(_0x249691.ONE) == 0) {
              return false;
            }
          }
          if (_0x45b4fb.compareTo(_0x3632e4) != 0) {
            return false;
          }
        }
      }
      return true;
    }
    function _0x877228() {
      return {
        nextBytes: function (_0xe87188) {
          for (var _0x5680d2 = 0; _0x5680d2 < _0xe87188.length; ++_0x5680d2) {
            _0xe87188[_0x5680d2] = Math.floor(Math.random() * 256);
          }
        }
      };
    }
    _0x249691.prototype.chunkSize = _0x4fc8b4;
    _0x249691.prototype.toRadix = _0x4b5c0c;
    _0x249691.prototype.fromRadix = _0x104386;
    _0x249691.prototype.fromNumber = _0x308008;
    _0x249691.prototype.bitwiseTo = _0x498a85;
    _0x249691.prototype.changeBit = _0x556b85;
    _0x249691.prototype.addTo = _0x1f4c9c;
    _0x249691.prototype.dMultiply = _0x352154;
    _0x249691.prototype.dAddOffset = _0x417ffa;
    _0x249691.prototype.multiplyLowerTo = _0xf238b5;
    _0x249691.prototype.multiplyUpperTo = _0x48ec66;
    _0x249691.prototype.modInt = _0x13010b;
    _0x249691.prototype.millerRabin = _0x1f88c2;
    _0x249691.prototype.clone = _0x57b3c9;
    _0x249691.prototype.intValue = _0x137220;
    _0x249691.prototype.byteValue = _0x2d6bcc;
    _0x249691.prototype.shortValue = _0xf74a90;
    _0x249691.prototype.signum = _0x63ebae;
    _0x249691.prototype.toByteArray = _0x2e2405;
    _0x249691.prototype.equals = _0x303c70;
    _0x249691.prototype.min = _0x2fc253;
    _0x249691.prototype.max = _0x5196ce;
    _0x249691.prototype.and = _0x260402;
    _0x249691.prototype.or = _0x4ec2d7;
    _0x249691.prototype.xor = _0x49fb92;
    _0x249691.prototype.andNot = _0x2eca10;
    _0x249691.prototype.not = _0x227fd0;
    _0x249691.prototype.shiftLeft = _0x4aaa01;
    _0x249691.prototype.shiftRight = _0x4560a0;
    _0x249691.prototype.getLowestSetBit = _0x54ddc6;
    _0x249691.prototype.bitCount = _0x6c9c96;
    _0x249691.prototype.testBit = _0x5244ff;
    _0x249691.prototype.setBit = _0x2fdabe;
    _0x249691.prototype.clearBit = _0x194041;
    _0x249691.prototype.flipBit = _0x348093;
    _0x249691.prototype.add = _0x339ee2;
    _0x249691.prototype.subtract = _0x5013e0;
    _0x249691.prototype.multiply = _0x285493;
    _0x249691.prototype.divide = _0x53de2b;
    _0x249691.prototype.remainder = _0x490cd4;
    _0x249691.prototype.divideAndRemainder = _0x47ffe6;
    _0x249691.prototype.modPow = _0x5d3630;
    _0x249691.prototype.modInverse = _0x289725;
    _0x249691.prototype.pow = _0x3e6071;
    _0x249691.prototype.gcd = _0x4cabf2;
    _0x249691.prototype.isProbablePrime = _0x6bdc33;
    _0x249691.prototype.square = _0x44dc79;
  }
});
var require_sha1 = __commonJS({
  "node_modules/node-forge/lib/sha1.js"(_0x358ba9, _0x59f9e6) {
    var _0x126470 = require_forge();
    require_md();
    require_util();
    var _0xc9d27d = _0x59f9e6.exports = _0x126470.sha1 = _0x126470.sha1 || {};
    _0x126470.md.sha1 = _0x126470.md.algorithms.sha1 = _0xc9d27d;
    _0xc9d27d.create = function () {
      if (!_0x122760) {
        _0x1becaa();
      }
      var _0x5dc98f = null;
      var _0x7b7149 = _0x126470.util.createBuffer();
      var _0x1e7bc5 = new Array(80);
      var _0x4cc7d7 = {
        algorithm: "sha1",
        blockLength: 64,
        digestLength: 20,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 8
      };
      _0x4cc7d7.start = function () {
        _0x4cc7d7.messageLength = 0;
        _0x4cc7d7.fullMessageLength = _0x4cc7d7.messageLength64 = [];
        var _0x2d14cd = _0x4cc7d7.messageLengthSize / 4;
        for (var _0x430972 = 0; _0x430972 < _0x2d14cd; ++_0x430972) {
          _0x4cc7d7.fullMessageLength.push(0);
        }
        _0x7b7149 = _0x126470.util.createBuffer();
        _0x5dc98f = {
          h0: 1732584193,
          h1: 4023233417,
          h2: 2562383102,
          h3: 271733878,
          h4: 3285377520
        };
        return _0x4cc7d7;
      };
      _0x4cc7d7.start();
      _0x4cc7d7.update = function (_0x4bd69d, _0x6b431a) {
        if (_0x6b431a === "utf8") {
          _0x4bd69d = _0x126470.util.encodeUtf8(_0x4bd69d);
        }
        var _0x57a664 = _0x4bd69d.length;
        _0x4cc7d7.messageLength += _0x57a664;
        _0x57a664 = [_0x57a664 / 4294967296 >>> 0, _0x57a664 >>> 0];
        for (var _0xd16870 = _0x4cc7d7.fullMessageLength.length - 1; _0xd16870 >= 0; --_0xd16870) {
          _0x4cc7d7.fullMessageLength[_0xd16870] += _0x57a664[1];
          _0x57a664[1] = _0x57a664[0] + (_0x4cc7d7.fullMessageLength[_0xd16870] / 4294967296 >>> 0);
          _0x4cc7d7.fullMessageLength[_0xd16870] = _0x4cc7d7.fullMessageLength[_0xd16870] >>> 0;
          _0x57a664[0] = _0x57a664[1] / 4294967296 >>> 0;
        }
        _0x7b7149.putBytes(_0x4bd69d);
        _0x5389f0(_0x5dc98f, _0x1e7bc5, _0x7b7149);
        if (_0x7b7149.read > 2048 || _0x7b7149.length() === 0) {
          _0x7b7149.compact();
        }
        return _0x4cc7d7;
      };
      _0x4cc7d7.digest = function () {
        var _0xa276af = _0x126470.util.createBuffer();
        _0xa276af.putBytes(_0x7b7149.bytes());
        var _0x2cf2b2 = _0x4cc7d7.fullMessageLength[_0x4cc7d7.fullMessageLength.length - 1] + _0x4cc7d7.messageLengthSize;
        var _0x38c46a = _0x2cf2b2 & _0x4cc7d7.blockLength - 1;
        _0xa276af.putBytes(_0x31a3db.substr(0, _0x4cc7d7.blockLength - _0x38c46a));
        var _0x1fdd98;
        var _0x1f60cd;
        var _0x5d8a04 = _0x4cc7d7.fullMessageLength[0] * 8;
        for (var _0x2da58b = 0; _0x2da58b < _0x4cc7d7.fullMessageLength.length - 1; ++_0x2da58b) {
          _0x1fdd98 = _0x4cc7d7.fullMessageLength[_0x2da58b + 1] * 8;
          _0x1f60cd = _0x1fdd98 / 4294967296 >>> 0;
          _0x5d8a04 += _0x1f60cd;
          _0xa276af.putInt32(_0x5d8a04 >>> 0);
          _0x5d8a04 = _0x1fdd98 >>> 0;
        }
        _0xa276af.putInt32(_0x5d8a04);
        var _0x11d4d6 = {
          h0: _0x5dc98f.h0,
          h1: _0x5dc98f.h1,
          h2: _0x5dc98f.h2,
          h3: _0x5dc98f.h3,
          h4: _0x5dc98f.h4
        };
        _0x5389f0(_0x11d4d6, _0x1e7bc5, _0xa276af);
        var _0x4a73b3 = _0x126470.util.createBuffer();
        _0x4a73b3.putInt32(_0x11d4d6.h0);
        _0x4a73b3.putInt32(_0x11d4d6.h1);
        _0x4a73b3.putInt32(_0x11d4d6.h2);
        _0x4a73b3.putInt32(_0x11d4d6.h3);
        _0x4a73b3.putInt32(_0x11d4d6.h4);
        return _0x4a73b3;
      };
      return _0x4cc7d7;
    };
    var _0x31a3db = null;
    var _0x122760 = false;
    function _0x1becaa() {
      _0x31a3db = String.fromCharCode(128);
      _0x31a3db += _0x126470.util.fillString(String.fromCharCode(0), 64);
      _0x122760 = true;
    }
    function _0x5389f0(_0x2e229e, _0x3dd577, _0x254da7) {
      var _0x1852f0;
      var _0x512f87;
      var _0x59322b;
      var _0x4a8963;
      var _0x367a07;
      var _0x2dc30c;
      var _0x10da63;
      var _0x1de801;
      var _0x1987bf = _0x254da7.length();
      while (_0x1987bf >= 64) {
        _0x512f87 = _0x2e229e.h0;
        _0x59322b = _0x2e229e.h1;
        _0x4a8963 = _0x2e229e.h2;
        _0x367a07 = _0x2e229e.h3;
        _0x2dc30c = _0x2e229e.h4;
        for (_0x1de801 = 0; _0x1de801 < 16; ++_0x1de801) {
          _0x1852f0 = _0x254da7.getInt32();
          _0x3dd577[_0x1de801] = _0x1852f0;
          _0x10da63 = _0x367a07 ^ _0x59322b & (_0x4a8963 ^ _0x367a07);
          _0x1852f0 = (_0x512f87 << 5 | _0x512f87 >>> 27) + _0x10da63 + _0x2dc30c + 1518500249 + _0x1852f0;
          _0x2dc30c = _0x367a07;
          _0x367a07 = _0x4a8963;
          _0x4a8963 = (_0x59322b << 30 | _0x59322b >>> 2) >>> 0;
          _0x59322b = _0x512f87;
          _0x512f87 = _0x1852f0;
        }
        for (; _0x1de801 < 20; ++_0x1de801) {
          _0x1852f0 = _0x3dd577[_0x1de801 - 3] ^ _0x3dd577[_0x1de801 - 8] ^ _0x3dd577[_0x1de801 - 14] ^ _0x3dd577[_0x1de801 - 16];
          _0x1852f0 = _0x1852f0 << 1 | _0x1852f0 >>> 31;
          _0x3dd577[_0x1de801] = _0x1852f0;
          _0x10da63 = _0x367a07 ^ _0x59322b & (_0x4a8963 ^ _0x367a07);
          _0x1852f0 = (_0x512f87 << 5 | _0x512f87 >>> 27) + _0x10da63 + _0x2dc30c + 1518500249 + _0x1852f0;
          _0x2dc30c = _0x367a07;
          _0x367a07 = _0x4a8963;
          _0x4a8963 = (_0x59322b << 30 | _0x59322b >>> 2) >>> 0;
          _0x59322b = _0x512f87;
          _0x512f87 = _0x1852f0;
        }
        for (; _0x1de801 < 32; ++_0x1de801) {
          _0x1852f0 = _0x3dd577[_0x1de801 - 3] ^ _0x3dd577[_0x1de801 - 8] ^ _0x3dd577[_0x1de801 - 14] ^ _0x3dd577[_0x1de801 - 16];
          _0x1852f0 = _0x1852f0 << 1 | _0x1852f0 >>> 31;
          _0x3dd577[_0x1de801] = _0x1852f0;
          _0x10da63 = _0x59322b ^ _0x4a8963 ^ _0x367a07;
          _0x1852f0 = (_0x512f87 << 5 | _0x512f87 >>> 27) + _0x10da63 + _0x2dc30c + 1859775393 + _0x1852f0;
          _0x2dc30c = _0x367a07;
          _0x367a07 = _0x4a8963;
          _0x4a8963 = (_0x59322b << 30 | _0x59322b >>> 2) >>> 0;
          _0x59322b = _0x512f87;
          _0x512f87 = _0x1852f0;
        }
        for (; _0x1de801 < 40; ++_0x1de801) {
          _0x1852f0 = _0x3dd577[_0x1de801 - 6] ^ _0x3dd577[_0x1de801 - 16] ^ _0x3dd577[_0x1de801 - 28] ^ _0x3dd577[_0x1de801 - 32];
          _0x1852f0 = _0x1852f0 << 2 | _0x1852f0 >>> 30;
          _0x3dd577[_0x1de801] = _0x1852f0;
          _0x10da63 = _0x59322b ^ _0x4a8963 ^ _0x367a07;
          _0x1852f0 = (_0x512f87 << 5 | _0x512f87 >>> 27) + _0x10da63 + _0x2dc30c + 1859775393 + _0x1852f0;
          _0x2dc30c = _0x367a07;
          _0x367a07 = _0x4a8963;
          _0x4a8963 = (_0x59322b << 30 | _0x59322b >>> 2) >>> 0;
          _0x59322b = _0x512f87;
          _0x512f87 = _0x1852f0;
        }
        for (; _0x1de801 < 60; ++_0x1de801) {
          _0x1852f0 = _0x3dd577[_0x1de801 - 6] ^ _0x3dd577[_0x1de801 - 16] ^ _0x3dd577[_0x1de801 - 28] ^ _0x3dd577[_0x1de801 - 32];
          _0x1852f0 = _0x1852f0 << 2 | _0x1852f0 >>> 30;
          _0x3dd577[_0x1de801] = _0x1852f0;
          _0x10da63 = _0x59322b & _0x4a8963 | _0x367a07 & (_0x59322b ^ _0x4a8963);
          _0x1852f0 = (_0x512f87 << 5 | _0x512f87 >>> 27) + _0x10da63 + _0x2dc30c + 2400959708 + _0x1852f0;
          _0x2dc30c = _0x367a07;
          _0x367a07 = _0x4a8963;
          _0x4a8963 = (_0x59322b << 30 | _0x59322b >>> 2) >>> 0;
          _0x59322b = _0x512f87;
          _0x512f87 = _0x1852f0;
        }
        for (; _0x1de801 < 80; ++_0x1de801) {
          _0x1852f0 = _0x3dd577[_0x1de801 - 6] ^ _0x3dd577[_0x1de801 - 16] ^ _0x3dd577[_0x1de801 - 28] ^ _0x3dd577[_0x1de801 - 32];
          _0x1852f0 = _0x1852f0 << 2 | _0x1852f0 >>> 30;
          _0x3dd577[_0x1de801] = _0x1852f0;
          _0x10da63 = _0x59322b ^ _0x4a8963 ^ _0x367a07;
          _0x1852f0 = (_0x512f87 << 5 | _0x512f87 >>> 27) + _0x10da63 + _0x2dc30c + 3395469782 + _0x1852f0;
          _0x2dc30c = _0x367a07;
          _0x367a07 = _0x4a8963;
          _0x4a8963 = (_0x59322b << 30 | _0x59322b >>> 2) >>> 0;
          _0x59322b = _0x512f87;
          _0x512f87 = _0x1852f0;
        }
        _0x2e229e.h0 = _0x2e229e.h0 + _0x512f87 | 0;
        _0x2e229e.h1 = _0x2e229e.h1 + _0x59322b | 0;
        _0x2e229e.h2 = _0x2e229e.h2 + _0x4a8963 | 0;
        _0x2e229e.h3 = _0x2e229e.h3 + _0x367a07 | 0;
        _0x2e229e.h4 = _0x2e229e.h4 + _0x2dc30c | 0;
        _0x1987bf -= 64;
      }
    }
  }
});
var require_pkcs1 = __commonJS({
  "node_modules/node-forge/lib/pkcs1.js"(_0x29ea19, _0x27d218) {
    var _0x2c2264 = require_forge();
    require_util();
    require_random();
    require_sha1();
    var _0x247e17 = _0x27d218.exports = _0x2c2264.pkcs1 = _0x2c2264.pkcs1 || {};
    _0x247e17.encode_rsa_oaep = function (_0x4c8d33, _0x4cd037, _0x2b762d) {
      var _0x513455;
      var _0x549d15;
      var _0x3eee68;
      var _0x5516c4;
      if (typeof _0x2b762d === "string") {
        _0x513455 = _0x2b762d;
        _0x549d15 = arguments[3] || undefined;
        _0x3eee68 = arguments[4] || undefined;
      } else if (_0x2b762d) {
        _0x513455 = _0x2b762d.label || undefined;
        _0x549d15 = _0x2b762d.seed || undefined;
        _0x3eee68 = _0x2b762d.md || undefined;
        if (_0x2b762d.mgf1 && _0x2b762d.mgf1.md) {
          _0x5516c4 = _0x2b762d.mgf1.md;
        }
      }
      if (!_0x3eee68) {
        _0x3eee68 = _0x2c2264.md.sha1.create();
      } else {
        _0x3eee68.start();
      }
      if (!_0x5516c4) {
        _0x5516c4 = _0x3eee68;
      }
      var _0x4a8510 = Math.ceil(_0x4c8d33.n.bitLength() / 8);
      var _0x2feb7f = _0x4a8510 - _0x3eee68.digestLength * 2 - 2;
      if (_0x4cd037.length > _0x2feb7f) {
        var _0x360245 = new Error("RSAES-OAEP input message length is too long.");
        _0x360245.length = _0x4cd037.length;
        _0x360245.maxLength = _0x2feb7f;
        throw _0x360245;
      }
      if (!_0x513455) {
        _0x513455 = "";
      }
      _0x3eee68.update(_0x513455, "raw");
      var _0x431a96 = _0x3eee68.digest();
      var _0x5beebc = "";
      var _0x466bce = _0x2feb7f - _0x4cd037.length;
      for (var _0x36ec51 = 0; _0x36ec51 < _0x466bce; _0x36ec51++) {
        _0x5beebc += "\0";
      }
      var _0x40e8e1 = _0x431a96.getBytes() + _0x5beebc + "" + _0x4cd037;
      if (!_0x549d15) {
        _0x549d15 = _0x2c2264.random.getBytes(_0x3eee68.digestLength);
      } else if (_0x549d15.length !== _0x3eee68.digestLength) {
        var _0x360245 = new Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.");
        _0x360245.seedLength = _0x549d15.length;
        _0x360245.digestLength = _0x3eee68.digestLength;
        throw _0x360245;
      }
      var _0x9221fb = _0x2818f2(_0x549d15, _0x4a8510 - _0x3eee68.digestLength - 1, _0x5516c4);
      var _0x4c568d = _0x2c2264.util.xorBytes(_0x40e8e1, _0x9221fb, _0x40e8e1.length);
      var _0x1155c4 = _0x2818f2(_0x4c568d, _0x3eee68.digestLength, _0x5516c4);
      var _0x16f6a7 = _0x2c2264.util.xorBytes(_0x549d15, _0x1155c4, _0x549d15.length);
      return "\0" + _0x16f6a7 + _0x4c568d;
    };
    _0x247e17.decode_rsa_oaep = function (_0x2db06b, _0x26c397, _0x53785a) {
      var _0x42f373;
      var _0x42a987;
      var _0xc75a2e;
      if (typeof _0x53785a === "string") {
        _0x42f373 = _0x53785a;
        _0x42a987 = arguments[3] || undefined;
      } else if (_0x53785a) {
        _0x42f373 = _0x53785a.label || undefined;
        _0x42a987 = _0x53785a.md || undefined;
        if (_0x53785a.mgf1 && _0x53785a.mgf1.md) {
          _0xc75a2e = _0x53785a.mgf1.md;
        }
      }
      var _0x32aefb = Math.ceil(_0x2db06b.n.bitLength() / 8);
      if (_0x26c397.length !== _0x32aefb) {
        var _0x429a37 = new Error("RSAES-OAEP encoded message length is invalid.");
        _0x429a37.length = _0x26c397.length;
        _0x429a37.expectedLength = _0x32aefb;
        throw _0x429a37;
      }
      if (_0x42a987 === undefined) {
        _0x42a987 = _0x2c2264.md.sha1.create();
      } else {
        _0x42a987.start();
      }
      if (!_0xc75a2e) {
        _0xc75a2e = _0x42a987;
      }
      if (_0x32aefb < _0x42a987.digestLength * 2 + 2) {
        throw new Error("RSAES-OAEP key is too short for the hash function.");
      }
      if (!_0x42f373) {
        _0x42f373 = "";
      }
      _0x42a987.update(_0x42f373, "raw");
      var _0x30c0b9 = _0x42a987.digest().getBytes();
      var _0x56cf97 = _0x26c397.charAt(0);
      var _0x5de580 = _0x26c397.substring(1, _0x42a987.digestLength + 1);
      var _0x182e8a = _0x26c397.substring(1 + _0x42a987.digestLength);
      var _0x16bf6d = _0x2818f2(_0x182e8a, _0x42a987.digestLength, _0xc75a2e);
      var _0x4de7e9 = _0x2c2264.util.xorBytes(_0x5de580, _0x16bf6d, _0x5de580.length);
      var _0x3f0fcd = _0x2818f2(_0x4de7e9, _0x32aefb - _0x42a987.digestLength - 1, _0xc75a2e);
      var _0xf9d785 = _0x2c2264.util.xorBytes(_0x182e8a, _0x3f0fcd, _0x182e8a.length);
      var _0x1a276d = _0xf9d785.substring(0, _0x42a987.digestLength);
      var _0x429a37 = _0x56cf97 !== "\0";
      for (var _0x5a9685 = 0; _0x5a9685 < _0x42a987.digestLength; ++_0x5a9685) {
        _0x429a37 |= _0x30c0b9.charAt(_0x5a9685) !== _0x1a276d.charAt(_0x5a9685);
      }
      var _0x8a9b72 = 1;
      var _0x5f2bd5 = _0x42a987.digestLength;
      for (var _0x35dd5a = _0x42a987.digestLength; _0x35dd5a < _0xf9d785.length; _0x35dd5a++) {
        var _0x2a57c5 = _0xf9d785.charCodeAt(_0x35dd5a);
        var _0xfb411d = _0x2a57c5 & 1 ^ 1;
        var _0x37aa3e = _0x8a9b72 ? 65534 : 0;
        _0x429a37 |= _0x2a57c5 & _0x37aa3e;
        _0x8a9b72 = _0x8a9b72 & _0xfb411d;
        _0x5f2bd5 += _0x8a9b72;
      }
      if (_0x429a37 || _0xf9d785.charCodeAt(_0x5f2bd5) !== 1) {
        throw new Error("Invalid RSAES-OAEP padding.");
      }
      return _0xf9d785.substring(_0x5f2bd5 + 1);
    };
    function _0x2818f2(_0x1b7e16, _0x39fa65, _0x2cf697) {
      if (!_0x2cf697) {
        _0x2cf697 = _0x2c2264.md.sha1.create();
      }
      var _0xbe9dab = "";
      var _0x392f7b = Math.ceil(_0x39fa65 / _0x2cf697.digestLength);
      for (var _0x319331 = 0; _0x319331 < _0x392f7b; ++_0x319331) {
        var _0x5ba193 = String.fromCharCode(_0x319331 >> 24 & 255, _0x319331 >> 16 & 255, _0x319331 >> 8 & 255, _0x319331 & 255);
        _0x2cf697.start();
        _0x2cf697.update(_0x1b7e16 + _0x5ba193);
        _0xbe9dab += _0x2cf697.digest().getBytes();
      }
      return _0xbe9dab.substring(0, _0x39fa65);
    }
  }
});
var require_prime = __commonJS({
  "node_modules/node-forge/lib/prime.js"(_0x29ebd4, _0x111ded) {
    var _0x3314c6 = require_forge();
    require_util();
    require_jsbn();
    require_random();
    (function () {
      if (_0x3314c6.prime) {
        _0x111ded.exports = _0x3314c6.prime;
        return;
      }
      var _0x44b961 = _0x111ded.exports = _0x3314c6.prime = _0x3314c6.prime || {};
      var _0x4c6803 = _0x3314c6.jsbn.BigInteger;
      var _0x3f515e = [6, 4, 2, 4, 2, 4, 6, 2];
      var _0x51efb8 = new _0x4c6803(null);
      _0x51efb8.fromInt(30);
      function _0x3ab14e(_0x259df2, _0x2ad97a) {
        return _0x259df2 | _0x2ad97a;
      }
      _0x44b961.generateProbablePrime = function (_0x367e9a, _0x4d29f2, _0x4e9eb2) {
        if (typeof _0x4d29f2 === "function") {
          _0x4e9eb2 = _0x4d29f2;
          _0x4d29f2 = {};
        }
        _0x4d29f2 = _0x4d29f2 || {};
        var _0x2b0dcd = _0x4d29f2.algorithm || "PRIMEINC";
        if (typeof _0x2b0dcd === "string") {
          _0x2b0dcd = {
            name: _0x2b0dcd
          };
        }
        _0x2b0dcd.options = _0x2b0dcd.options || {};
        var _0x494fe3 = _0x4d29f2.prng || _0x3314c6.random;
        var _0x115094 = {
          nextBytes: function (_0x37c37e) {
            var _0x45a42b = _0x494fe3.getBytesSync(_0x37c37e.length);
            for (var _0x179a88 = 0; _0x179a88 < _0x37c37e.length; ++_0x179a88) {
              _0x37c37e[_0x179a88] = _0x45a42b.charCodeAt(_0x179a88);
            }
          }
        };
        if (_0x2b0dcd.name === "PRIMEINC") {
          return _0x5f17d3(_0x367e9a, _0x115094, _0x2b0dcd.options, _0x4e9eb2);
        }
        throw new Error("Invalid prime generation algorithm: " + _0x2b0dcd.name);
      };
      function _0x5f17d3(_0x2facc8, _0x12b43e, _0x58ecf0, _0x13c7f2) {
        if ("workers" in _0x58ecf0) {
          return _0x25b5b8(_0x2facc8, _0x12b43e, _0x58ecf0, _0x13c7f2);
        }
        return _0x38eaec(_0x2facc8, _0x12b43e, _0x58ecf0, _0x13c7f2);
      }
      function _0x38eaec(_0x522284, _0x41b737, _0x4463cd, _0x3e5586) {
        var _0x24ce59 = _0xbda228(_0x522284, _0x41b737);
        var _0x3398ac = 0;
        var _0x20b020 = _0x59d8bf(_0x24ce59.bitLength());
        if ("millerRabinTests" in _0x4463cd) {
          _0x20b020 = _0x4463cd.millerRabinTests;
        }
        var _0xeaef34 = 10;
        if ("maxBlockTime" in _0x4463cd) {
          _0xeaef34 = _0x4463cd.maxBlockTime;
        }
        _0x2e90f6(_0x24ce59, _0x522284, _0x41b737, _0x3398ac, _0x20b020, _0xeaef34, _0x3e5586);
      }
      function _0x2e90f6(_0x8a7adb, _0x36c6cf, _0x23ac78, _0x3affeb, _0x13012d, _0xf657d2, _0x536086) {
        var _0x529a67 = +new Date();
        do {
          if (_0x8a7adb.bitLength() > _0x36c6cf) {
            _0x8a7adb = _0xbda228(_0x36c6cf, _0x23ac78);
          }
          if (_0x8a7adb.isProbablePrime(_0x13012d)) {
            return _0x536086(null, _0x8a7adb);
          }
          _0x8a7adb.dAddOffset(_0x3f515e[_0x3affeb++ % 8], 0);
        } while (_0xf657d2 < 0 || +new Date() - _0x529a67 < _0xf657d2);
        _0x3314c6.util.setImmediate(function () {
          _0x2e90f6(_0x8a7adb, _0x36c6cf, _0x23ac78, _0x3affeb, _0x13012d, _0xf657d2, _0x536086);
        });
      }
      function _0x25b5b8(_0x4e0711, _0xba0928, _0x2119aa, _0x270eb8) {
        if (typeof Worker === "undefined") {
          return _0x38eaec(_0x4e0711, _0xba0928, _0x2119aa, _0x270eb8);
        }
        var _0x32f7e4 = _0xbda228(_0x4e0711, _0xba0928);
        var _0x24e884 = _0x2119aa.workers;
        var _0xbd31e4 = _0x2119aa.workLoad || 100;
        var _0x3e52db = _0xbd31e4 * 30 / 8;
        var _0x30ba32 = _0x2119aa.workerScript || "forge/prime.worker.js";
        if (_0x24e884 === -1) {
          return _0x3314c6.util.estimateCores(function (_0x3786d7, _0x948c53) {
            if (_0x3786d7) {
              _0x948c53 = 2;
            }
            _0x24e884 = _0x948c53 - 1;
            _0x10ff75();
          });
        }
        _0x10ff75();
        function _0x10ff75() {
          _0x24e884 = Math.max(1, _0x24e884);
          var _0x241184 = [];
          for (var _0x5afc83 = 0; _0x5afc83 < _0x24e884; ++_0x5afc83) {
            _0x241184[_0x5afc83] = new Worker(_0x30ba32);
          }
          var _0x2fd7fc = _0x24e884;
          for (var _0x5afc83 = 0; _0x5afc83 < _0x24e884; ++_0x5afc83) {
            _0x241184[_0x5afc83].addEventListener("message", _0x14c20b);
          }
          var _0x239571 = false;
          function _0x14c20b(_0x15084c) {
            if (_0x239571) {
              return;
            }
            --_0x2fd7fc;
            var _0x24f7df = _0x15084c.data;
            if (_0x24f7df.found) {
              for (var _0x567bd7 = 0; _0x567bd7 < _0x241184.length; ++_0x567bd7) {
                _0x241184[_0x567bd7].terminate();
              }
              _0x239571 = true;
              return _0x270eb8(null, new _0x4c6803(_0x24f7df.prime, 16));
            }
            if (_0x32f7e4.bitLength() > _0x4e0711) {
              _0x32f7e4 = _0xbda228(_0x4e0711, _0xba0928);
            }
            var _0x3ae859 = _0x32f7e4.toString(16);
            _0x15084c.target.postMessage({
              hex: _0x3ae859,
              workLoad: _0xbd31e4
            });
            _0x32f7e4.dAddOffset(_0x3e52db, 0);
          }
        }
      }
      function _0xbda228(_0x438c9c, _0x17cffb) {
        var _0x4d9485 = new _0x4c6803(_0x438c9c, _0x17cffb);
        var _0x53f3aa = _0x438c9c - 1;
        if (!_0x4d9485.testBit(_0x53f3aa)) {
          _0x4d9485.bitwiseTo(_0x4c6803.ONE.shiftLeft(_0x53f3aa), _0x3ab14e, _0x4d9485);
        }
        _0x4d9485.dAddOffset(31 - _0x4d9485.mod(_0x51efb8).byteValue(), 0);
        return _0x4d9485;
      }
      function _0x59d8bf(_0x1dfd25) {
        if (_0x1dfd25 <= 100) {
          return 27;
        }
        if (_0x1dfd25 <= 150) {
          return 18;
        }
        if (_0x1dfd25 <= 200) {
          return 15;
        }
        if (_0x1dfd25 <= 250) {
          return 12;
        }
        if (_0x1dfd25 <= 300) {
          return 9;
        }
        if (_0x1dfd25 <= 350) {
          return 8;
        }
        if (_0x1dfd25 <= 400) {
          return 7;
        }
        if (_0x1dfd25 <= 500) {
          return 6;
        }
        if (_0x1dfd25 <= 600) {
          return 5;
        }
        if (_0x1dfd25 <= 800) {
          return 4;
        }
        if (_0x1dfd25 <= 1250) {
          return 3;
        }
        return 2;
      }
    })();
  }
});
var require_rsa = __commonJS({
  "node_modules/node-forge/lib/rsa.js"(_0x3ba0fa, _0x485de3) {
    var _0x1f2a21 = require_forge();
    require_asn1();
    require_jsbn();
    require_oids();
    require_pkcs1();
    require_prime();
    require_random();
    require_util();
    if (typeof _0x524483 === "undefined") {
      _0x524483 = _0x1f2a21.jsbn.BigInteger;
    }
    var _0x524483;
    var _0x31fd0c = _0x1f2a21.util.isNodejs ? require_crypto() : null;
    var _0x7f5163 = _0x1f2a21.asn1;
    var _0x441ead = _0x1f2a21.util;
    _0x1f2a21.pki = _0x1f2a21.pki || {};
    _0x485de3.exports = _0x1f2a21.pki.rsa = _0x1f2a21.rsa = _0x1f2a21.rsa || {};
    var _0x5aa694 = _0x1f2a21.pki;
    var _0x565d74 = [6, 4, 2, 4, 2, 4, 6, 2];
    var _0x5df227 = {
      name: "PrivateKeyInfo",
      tagClass: _0x7f5163.Class.UNIVERSAL,
      type: _0x7f5163.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "PrivateKeyInfo.version",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.INTEGER,
        constructed: false,
        capture: "privateKeyVersion"
      }, {
        name: "PrivateKeyInfo.privateKeyAlgorithm",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "AlgorithmIdentifier.algorithm",
          tagClass: _0x7f5163.Class.UNIVERSAL,
          type: _0x7f5163.Type.OID,
          constructed: false,
          capture: "privateKeyOid"
        }]
      }, {
        name: "PrivateKeyInfo",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.OCTETSTRING,
        constructed: false,
        capture: "privateKey"
      }]
    };
    var _0x450f7c = {
      name: "RSAPrivateKey",
      tagClass: _0x7f5163.Class.UNIVERSAL,
      type: _0x7f5163.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "RSAPrivateKey.version",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.INTEGER,
        constructed: false,
        capture: "privateKeyVersion"
      }, {
        name: "RSAPrivateKey.modulus",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.INTEGER,
        constructed: false,
        capture: "privateKeyModulus"
      }, {
        name: "RSAPrivateKey.publicExponent",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.INTEGER,
        constructed: false,
        capture: "privateKeyPublicExponent"
      }, {
        name: "RSAPrivateKey.privateExponent",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.INTEGER,
        constructed: false,
        capture: "privateKeyPrivateExponent"
      }, {
        name: "RSAPrivateKey.prime1",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.INTEGER,
        constructed: false,
        capture: "privateKeyPrime1"
      }, {
        name: "RSAPrivateKey.prime2",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.INTEGER,
        constructed: false,
        capture: "privateKeyPrime2"
      }, {
        name: "RSAPrivateKey.exponent1",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.INTEGER,
        constructed: false,
        capture: "privateKeyExponent1"
      }, {
        name: "RSAPrivateKey.exponent2",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.INTEGER,
        constructed: false,
        capture: "privateKeyExponent2"
      }, {
        name: "RSAPrivateKey.coefficient",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.INTEGER,
        constructed: false,
        capture: "privateKeyCoefficient"
      }]
    };
    var _0x591724 = {
      name: "RSAPublicKey",
      tagClass: _0x7f5163.Class.UNIVERSAL,
      type: _0x7f5163.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "RSAPublicKey.modulus",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.INTEGER,
        constructed: false,
        capture: "publicKeyModulus"
      }, {
        name: "RSAPublicKey.exponent",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.INTEGER,
        constructed: false,
        capture: "publicKeyExponent"
      }]
    };
    var _0x40906d = _0x1f2a21.pki.rsa.publicKeyValidator = {
      name: "SubjectPublicKeyInfo",
      tagClass: _0x7f5163.Class.UNIVERSAL,
      type: _0x7f5163.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "subjectPublicKeyInfo",
      value: [{
        name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "AlgorithmIdentifier.algorithm",
          tagClass: _0x7f5163.Class.UNIVERSAL,
          type: _0x7f5163.Type.OID,
          constructed: false,
          capture: "publicKeyOid"
        }]
      }, {
        name: "SubjectPublicKeyInfo.subjectPublicKey",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.BITSTRING,
        constructed: false,
        value: [{
          name: "SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",
          tagClass: _0x7f5163.Class.UNIVERSAL,
          type: _0x7f5163.Type.SEQUENCE,
          constructed: true,
          optional: true,
          captureAsn1: "rsaPublicKey"
        }]
      }]
    };
    var _0x561528 = {
      name: "DigestInfo",
      tagClass: _0x7f5163.Class.UNIVERSAL,
      type: _0x7f5163.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "DigestInfo.DigestAlgorithm",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "DigestInfo.DigestAlgorithm.algorithmIdentifier",
          tagClass: _0x7f5163.Class.UNIVERSAL,
          type: _0x7f5163.Type.OID,
          constructed: false,
          capture: "algorithmIdentifier"
        }, {
          name: "DigestInfo.DigestAlgorithm.parameters",
          tagClass: _0x7f5163.Class.UNIVERSAL,
          type: _0x7f5163.Type.NULL,
          capture: "parameters",
          optional: true,
          constructed: false
        }]
      }, {
        name: "DigestInfo.digest",
        tagClass: _0x7f5163.Class.UNIVERSAL,
        type: _0x7f5163.Type.OCTETSTRING,
        constructed: false,
        capture: "digest"
      }]
    };
    function _0x47709a(_0x5d3823) {
      var _0x13dcfc;
      if (_0x5d3823.algorithm in _0x5aa694.oids) {
        _0x13dcfc = _0x5aa694.oids[_0x5d3823.algorithm];
      } else {
        var _0x1a015c = new Error("Unknown message digest algorithm.");
        _0x1a015c.algorithm = _0x5d3823.algorithm;
        throw _0x1a015c;
      }
      var _0x32f954 = _0x7f5163.oidToDer(_0x13dcfc).getBytes();
      var _0x14eb54 = _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.SEQUENCE, true, []);
      var _0x1bcd87 = _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.SEQUENCE, true, []);
      _0x1bcd87.value.push(_0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.OID, false, _0x32f954));
      _0x1bcd87.value.push(_0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.NULL, false, ""));
      var _0x3ae34b = _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.OCTETSTRING, false, _0x5d3823.digest().getBytes());
      _0x14eb54.value.push(_0x1bcd87);
      _0x14eb54.value.push(_0x3ae34b);
      return _0x7f5163.toDer(_0x14eb54).getBytes();
    }
    function _0xa8d694(_0x4c8b18, _0x58221b, _0x8c574a) {
      if (_0x8c574a) {
        return _0x4c8b18.modPow(_0x58221b.e, _0x58221b.n);
      }
      if (!_0x58221b.p || !_0x58221b.q) {
        return _0x4c8b18.modPow(_0x58221b.d, _0x58221b.n);
      }
      if (!_0x58221b.dP) {
        _0x58221b.dP = _0x58221b.d.mod(_0x58221b.p.subtract(_0x524483.ONE));
      }
      if (!_0x58221b.dQ) {
        _0x58221b.dQ = _0x58221b.d.mod(_0x58221b.q.subtract(_0x524483.ONE));
      }
      if (!_0x58221b.qInv) {
        _0x58221b.qInv = _0x58221b.q.modInverse(_0x58221b.p);
      }
      var _0x4de9be;
      do {
        _0x4de9be = new _0x524483(_0x1f2a21.util.bytesToHex(_0x1f2a21.random.getBytes(_0x58221b.n.bitLength() / 8)), 16);
      } while (_0x4de9be.compareTo(_0x58221b.n) >= 0 || !_0x4de9be.gcd(_0x58221b.n).equals(_0x524483.ONE));
      _0x4c8b18 = _0x4c8b18.multiply(_0x4de9be.modPow(_0x58221b.e, _0x58221b.n)).mod(_0x58221b.n);
      var _0x4b8017 = _0x4c8b18.mod(_0x58221b.p).modPow(_0x58221b.dP, _0x58221b.p);
      var _0x5a9337 = _0x4c8b18.mod(_0x58221b.q).modPow(_0x58221b.dQ, _0x58221b.q);
      while (_0x4b8017.compareTo(_0x5a9337) < 0) {
        _0x4b8017 = _0x4b8017.add(_0x58221b.p);
      }
      var _0x23908d = _0x4b8017.subtract(_0x5a9337).multiply(_0x58221b.qInv).mod(_0x58221b.p).multiply(_0x58221b.q).add(_0x5a9337);
      _0x23908d = _0x23908d.multiply(_0x4de9be.modInverse(_0x58221b.n)).mod(_0x58221b.n);
      return _0x23908d;
    }
    _0x5aa694.rsa.encrypt = function (_0x7ece86, _0x11a12d, _0x20f24b) {
      var _0x1f09fb = _0x20f24b;
      var _0x2e1360;
      var _0x5c1370 = Math.ceil(_0x11a12d.n.bitLength() / 8);
      if (_0x20f24b !== false && _0x20f24b !== true) {
        _0x1f09fb = _0x20f24b === 2;
        _0x2e1360 = _0x541df9(_0x7ece86, _0x11a12d, _0x20f24b);
      } else {
        _0x2e1360 = _0x1f2a21.util.createBuffer();
        _0x2e1360.putBytes(_0x7ece86);
      }
      var _0x54154d = new _0x524483(_0x2e1360.toHex(), 16);
      var _0xdcb7cb = _0xa8d694(_0x54154d, _0x11a12d, _0x1f09fb);
      var _0x47d428 = _0xdcb7cb.toString(16);
      var _0x3b40d1 = _0x1f2a21.util.createBuffer();
      var _0x4dadeb = _0x5c1370 - Math.ceil(_0x47d428.length / 2);
      while (_0x4dadeb > 0) {
        _0x3b40d1.putByte(0);
        --_0x4dadeb;
      }
      _0x3b40d1.putBytes(_0x1f2a21.util.hexToBytes(_0x47d428));
      return _0x3b40d1.getBytes();
    };
    _0x5aa694.rsa.decrypt = function (_0x4bab75, _0x5e998e, _0x312676, _0x42d4fa) {
      var _0x1b7fff = Math.ceil(_0x5e998e.n.bitLength() / 8);
      if (_0x4bab75.length !== _0x1b7fff) {
        var _0x248482 = new Error("Encrypted message length is invalid.");
        _0x248482.length = _0x4bab75.length;
        _0x248482.expected = _0x1b7fff;
        throw _0x248482;
      }
      var _0x2e0a55 = new _0x524483(_0x1f2a21.util.createBuffer(_0x4bab75).toHex(), 16);
      if (_0x2e0a55.compareTo(_0x5e998e.n) >= 0) {
        throw new Error("Encrypted message is invalid.");
      }
      var _0x27caf3 = _0xa8d694(_0x2e0a55, _0x5e998e, _0x312676);
      var _0x11accd = _0x27caf3.toString(16);
      var _0x1ae218 = _0x1f2a21.util.createBuffer();
      var _0x400013 = _0x1b7fff - Math.ceil(_0x11accd.length / 2);
      while (_0x400013 > 0) {
        _0x1ae218.putByte(0);
        --_0x400013;
      }
      _0x1ae218.putBytes(_0x1f2a21.util.hexToBytes(_0x11accd));
      if (_0x42d4fa !== false) {
        return _0x337257(_0x1ae218.getBytes(), _0x5e998e, _0x312676);
      }
      return _0x1ae218.getBytes();
    };
    _0x5aa694.rsa.createKeyPairGenerationState = function (_0x128cad, _0x39f3e6, _0x3f09b7) {
      if (typeof _0x128cad === "string") {
        _0x128cad = parseInt(_0x128cad, 10);
      }
      _0x128cad = _0x128cad || 2048;
      _0x3f09b7 = _0x3f09b7 || {};
      var _0x2f71b6 = _0x3f09b7.prng || _0x1f2a21.random;
      var _0x17ad7f = {
        nextBytes: function (_0x432bdc) {
          var _0x580507 = _0x2f71b6.getBytesSync(_0x432bdc.length);
          for (var _0x2ded4c = 0; _0x2ded4c < _0x432bdc.length; ++_0x2ded4c) {
            _0x432bdc[_0x2ded4c] = _0x580507.charCodeAt(_0x2ded4c);
          }
        }
      };
      var _0x18ecd7 = _0x3f09b7.algorithm || "PRIMEINC";
      var _0x34f626;
      if (_0x18ecd7 === "PRIMEINC") {
        _0x34f626 = {
          algorithm: _0x18ecd7,
          state: 0,
          bits: _0x128cad,
          rng: _0x17ad7f,
          eInt: _0x39f3e6 || 65537,
          e: new _0x524483(null),
          p: null,
          q: null,
          qBits: _0x128cad >> 1,
          pBits: _0x128cad - (_0x128cad >> 1),
          pqState: 0,
          num: null,
          keys: null
        };
        _0x34f626.e.fromInt(_0x34f626.eInt);
      } else {
        throw new Error("Invalid key generation algorithm: " + _0x18ecd7);
      }
      return _0x34f626;
    };
    _0x5aa694.rsa.stepKeyPairGenerationState = function (_0x24c6e1, _0x5ac144) {
      if (!("algorithm" in _0x24c6e1)) {
        _0x24c6e1.algorithm = "PRIMEINC";
      }
      var _0x90e432 = new _0x524483(null);
      _0x90e432.fromInt(30);
      var _0x17587d = 0;
      function _0x5a56c9(_0x43ad85, _0x1b959a) {
        return _0x43ad85 | _0x1b959a;
      }
      var _0x18b7a8 = +new Date();
      var _0x35a43b;
      var _0x598c21 = 0;
      while (_0x24c6e1.keys === null && (_0x5ac144 <= 0 || _0x598c21 < _0x5ac144)) {
        if (_0x24c6e1.state === 0) {
          var _0x5ea860 = _0x24c6e1.p === null ? _0x24c6e1.pBits : _0x24c6e1.qBits;
          var _0xc40ef1 = _0x5ea860 - 1;
          if (_0x24c6e1.pqState === 0) {
            _0x24c6e1.num = new _0x524483(_0x5ea860, _0x24c6e1.rng);
            if (!_0x24c6e1.num.testBit(_0xc40ef1)) {
              _0x24c6e1.num.bitwiseTo(_0x524483.ONE.shiftLeft(_0xc40ef1), _0x5a56c9, _0x24c6e1.num);
            }
            _0x24c6e1.num.dAddOffset(31 - _0x24c6e1.num.mod(_0x90e432).byteValue(), 0);
            _0x17587d = 0;
            ++_0x24c6e1.pqState;
          } else if (_0x24c6e1.pqState === 1) {
            if (_0x24c6e1.num.bitLength() > _0x5ea860) {
              _0x24c6e1.pqState = 0;
            } else if (_0x24c6e1.num.isProbablePrime(_0x1d643f(_0x24c6e1.num.bitLength()))) {
              ++_0x24c6e1.pqState;
            } else {
              _0x24c6e1.num.dAddOffset(_0x565d74[_0x17587d++ % 8], 0);
            }
          } else if (_0x24c6e1.pqState === 2) {
            _0x24c6e1.pqState = _0x24c6e1.num.subtract(_0x524483.ONE).gcd(_0x24c6e1.e).compareTo(_0x524483.ONE) === 0 ? 3 : 0;
          } else if (_0x24c6e1.pqState === 3) {
            _0x24c6e1.pqState = 0;
            if (_0x24c6e1.p === null) {
              _0x24c6e1.p = _0x24c6e1.num;
            } else {
              _0x24c6e1.q = _0x24c6e1.num;
            }
            if (_0x24c6e1.p !== null && _0x24c6e1.q !== null) {
              ++_0x24c6e1.state;
            }
            _0x24c6e1.num = null;
          }
        } else if (_0x24c6e1.state === 1) {
          if (_0x24c6e1.p.compareTo(_0x24c6e1.q) < 0) {
            _0x24c6e1.num = _0x24c6e1.p;
            _0x24c6e1.p = _0x24c6e1.q;
            _0x24c6e1.q = _0x24c6e1.num;
          }
          ++_0x24c6e1.state;
        } else if (_0x24c6e1.state === 2) {
          _0x24c6e1.p1 = _0x24c6e1.p.subtract(_0x524483.ONE);
          _0x24c6e1.q1 = _0x24c6e1.q.subtract(_0x524483.ONE);
          _0x24c6e1.phi = _0x24c6e1.p1.multiply(_0x24c6e1.q1);
          ++_0x24c6e1.state;
        } else if (_0x24c6e1.state === 3) {
          if (_0x24c6e1.phi.gcd(_0x24c6e1.e).compareTo(_0x524483.ONE) === 0) {
            ++_0x24c6e1.state;
          } else {
            _0x24c6e1.p = null;
            _0x24c6e1.q = null;
            _0x24c6e1.state = 0;
          }
        } else if (_0x24c6e1.state === 4) {
          _0x24c6e1.n = _0x24c6e1.p.multiply(_0x24c6e1.q);
          if (_0x24c6e1.n.bitLength() === _0x24c6e1.bits) {
            ++_0x24c6e1.state;
          } else {
            _0x24c6e1.q = null;
            _0x24c6e1.state = 0;
          }
        } else if (_0x24c6e1.state === 5) {
          var _0x3c67c9 = _0x24c6e1.e.modInverse(_0x24c6e1.phi);
          _0x24c6e1.keys = {
            privateKey: _0x5aa694.rsa.setPrivateKey(_0x24c6e1.n, _0x24c6e1.e, _0x3c67c9, _0x24c6e1.p, _0x24c6e1.q, _0x3c67c9.mod(_0x24c6e1.p1), _0x3c67c9.mod(_0x24c6e1.q1), _0x24c6e1.q.modInverse(_0x24c6e1.p)),
            publicKey: _0x5aa694.rsa.setPublicKey(_0x24c6e1.n, _0x24c6e1.e)
          };
        }
        _0x35a43b = +new Date();
        _0x598c21 += _0x35a43b - _0x18b7a8;
        _0x18b7a8 = _0x35a43b;
      }
      return _0x24c6e1.keys !== null;
    };
    _0x5aa694.rsa.generateKeyPair = function (_0x31cc03, _0x5f287d, _0x4b602d, _0x5d888b) {
      if (arguments.length === 1) {
        if (typeof _0x31cc03 === "object") {
          _0x4b602d = _0x31cc03;
          _0x31cc03 = undefined;
        } else if (typeof _0x31cc03 === "function") {
          _0x5d888b = _0x31cc03;
          _0x31cc03 = undefined;
        }
      } else if (arguments.length === 2) {
        if (typeof _0x31cc03 === "number") {
          if (typeof _0x5f287d === "function") {
            _0x5d888b = _0x5f287d;
            _0x5f287d = undefined;
          } else if (typeof _0x5f287d !== "number") {
            _0x4b602d = _0x5f287d;
            _0x5f287d = undefined;
          }
        } else {
          _0x4b602d = _0x31cc03;
          _0x5d888b = _0x5f287d;
          _0x31cc03 = undefined;
          _0x5f287d = undefined;
        }
      } else if (arguments.length === 3) {
        if (typeof _0x5f287d === "number") {
          if (typeof _0x4b602d === "function") {
            _0x5d888b = _0x4b602d;
            _0x4b602d = undefined;
          }
        } else {
          _0x5d888b = _0x4b602d;
          _0x4b602d = _0x5f287d;
          _0x5f287d = undefined;
        }
      }
      _0x4b602d = _0x4b602d || {};
      if (_0x31cc03 === undefined) {
        _0x31cc03 = _0x4b602d.bits || 2048;
      }
      if (_0x5f287d === undefined) {
        _0x5f287d = _0x4b602d.e || 65537;
      }
      if (!_0x1f2a21.options.usePureJavaScript && !_0x4b602d.prng && _0x31cc03 >= 256 && _0x31cc03 <= 16384 && (_0x5f287d === 65537 || _0x5f287d === 3)) {
        if (_0x5d888b) {
          if (_0x18f735("generateKeyPair")) {
            return _0x31fd0c.generateKeyPair("rsa", {
              modulusLength: _0x31cc03,
              publicExponent: _0x5f287d,
              publicKeyEncoding: {
                type: "spki",
                format: "pem"
              },
              privateKeyEncoding: {
                type: "pkcs8",
                format: "pem"
              }
            }, function (_0x522c08, _0x498138, _0x4af4c8) {
              if (_0x522c08) {
                return _0x5d888b(_0x522c08);
              }
              _0x5d888b(null, {
                privateKey: _0x5aa694.privateKeyFromPem(_0x4af4c8),
                publicKey: _0x5aa694.publicKeyFromPem(_0x498138)
              });
            });
          }
          if (_0x593936("generateKey") && _0x593936("exportKey")) {
            return _0x441ead.globalScope.crypto.subtle.generateKey({
              name: "RSASSA-PKCS1-v1_5",
              modulusLength: _0x31cc03,
              publicExponent: _0x42f470(_0x5f287d),
              hash: {
                name: "SHA-256"
              }
            }, true, ["sign", "verify"]).then(function (_0x962bb) {
              return _0x441ead.globalScope.crypto.subtle.exportKey("pkcs8", _0x962bb.privateKey);
            }).then(undefined, function (_0x1df182) {
              _0x5d888b(_0x1df182);
            }).then(function (_0x4b3dcd) {
              if (_0x4b3dcd) {
                var _0x2223da = _0x5aa694.privateKeyFromAsn1(_0x7f5163.fromDer(_0x1f2a21.util.createBuffer(_0x4b3dcd)));
                _0x5d888b(null, {
                  privateKey: _0x2223da,
                  publicKey: _0x5aa694.setRsaPublicKey(_0x2223da.n, _0x2223da.e)
                });
              }
            });
          }
          if (_0x571130("generateKey") && _0x571130("exportKey")) {
            var _0x175a14 = _0x441ead.globalScope.msCrypto.subtle.generateKey({
              name: "RSASSA-PKCS1-v1_5",
              modulusLength: _0x31cc03,
              publicExponent: _0x42f470(_0x5f287d),
              hash: {
                name: "SHA-256"
              }
            }, true, ["sign", "verify"]);
            _0x175a14.oncomplete = function (_0x3951ed) {
              var _0x19eb5c = _0x3951ed.target.result;
              var _0xe6d81d = _0x441ead.globalScope.msCrypto.subtle.exportKey("pkcs8", _0x19eb5c.privateKey);
              _0xe6d81d.oncomplete = function (_0x39f19a) {
                var _0x3f2fc4 = _0x39f19a.target.result;
                var _0xd01435 = _0x5aa694.privateKeyFromAsn1(_0x7f5163.fromDer(_0x1f2a21.util.createBuffer(_0x3f2fc4)));
                _0x5d888b(null, {
                  privateKey: _0xd01435,
                  publicKey: _0x5aa694.setRsaPublicKey(_0xd01435.n, _0xd01435.e)
                });
              };
              _0xe6d81d.onerror = function (_0x45a62b) {
                _0x5d888b(_0x45a62b);
              };
            };
            _0x175a14.onerror = function (_0x3c1329) {
              _0x5d888b(_0x3c1329);
            };
            return;
          }
        } else if (_0x18f735("generateKeyPairSync")) {
          var _0x883c97 = _0x31fd0c.generateKeyPairSync("rsa", {
            modulusLength: _0x31cc03,
            publicExponent: _0x5f287d,
            publicKeyEncoding: {
              type: "spki",
              format: "pem"
            },
            privateKeyEncoding: {
              type: "pkcs8",
              format: "pem"
            }
          });
          return {
            privateKey: _0x5aa694.privateKeyFromPem(_0x883c97.privateKey),
            publicKey: _0x5aa694.publicKeyFromPem(_0x883c97.publicKey)
          };
        }
      }
      var _0x5ef537 = _0x5aa694.rsa.createKeyPairGenerationState(_0x31cc03, _0x5f287d, _0x4b602d);
      if (!_0x5d888b) {
        _0x5aa694.rsa.stepKeyPairGenerationState(_0x5ef537, 0);
        return _0x5ef537.keys;
      }
      _0x426819(_0x5ef537, _0x4b602d, _0x5d888b);
    };
    _0x5aa694.setRsaPublicKey = _0x5aa694.rsa.setPublicKey = function (_0x3fabc8, _0x4e3836) {
      var _0x14eda0 = {
        n: _0x3fabc8,
        e: _0x4e3836
      };
      _0x14eda0.encrypt = function (_0x546085, _0x54cf1f, _0x36abae) {
        if (typeof _0x54cf1f === "string") {
          _0x54cf1f = _0x54cf1f.toUpperCase();
        } else if (_0x54cf1f === undefined) {
          _0x54cf1f = "RSAES-PKCS1-V1_5";
        }
        if (_0x54cf1f === "RSAES-PKCS1-V1_5") {
          _0x54cf1f = {
            encode: function (_0x3390ec, _0x46be3b, _0x2bfa09) {
              return _0x541df9(_0x3390ec, _0x46be3b, 2).getBytes();
            }
          };
        } else if (_0x54cf1f === "RSA-OAEP" || _0x54cf1f === "RSAES-OAEP") {
          _0x54cf1f = {
            encode: function (_0x582b06, _0x177ec5) {
              return _0x1f2a21.pkcs1.encode_rsa_oaep(_0x177ec5, _0x582b06, _0x36abae);
            }
          };
        } else if (["RAW", "NONE", "NULL", null].indexOf(_0x54cf1f) !== -1) {
          _0x54cf1f = {
            encode: function (_0x2a6747) {
              return _0x2a6747;
            }
          };
        } else if (typeof _0x54cf1f === "string") {
          throw new Error("Unsupported encryption scheme: \"" + _0x54cf1f + "\".");
        }
        var _0x3fca84 = _0x54cf1f.encode(_0x546085, _0x14eda0, true);
        return _0x5aa694.rsa.encrypt(_0x3fca84, _0x14eda0, true);
      };
      _0x14eda0.verify = function (_0x2b9758, _0x18983f, _0x4a39f8, _0x3ae2e) {
        if (typeof _0x4a39f8 === "string") {
          _0x4a39f8 = _0x4a39f8.toUpperCase();
        } else if (_0x4a39f8 === undefined) {
          _0x4a39f8 = "RSASSA-PKCS1-V1_5";
        }
        if (_0x3ae2e === undefined) {
          _0x3ae2e = {
            _parseAllDigestBytes: true,
            _skipPaddingChecks: false
          };
        }
        if (!("_parseAllDigestBytes" in _0x3ae2e)) {
          _0x3ae2e._parseAllDigestBytes = true;
        }
        if (!("_skipPaddingChecks" in _0x3ae2e)) {
          _0x3ae2e._skipPaddingChecks = false;
        }
        if (_0x4a39f8 === "RSASSA-PKCS1-V1_5") {
          _0x4a39f8 = {
            verify: function (_0x3105ba, _0x239c05) {
              _0x239c05 = _0x337257(_0x239c05, _0x14eda0, true, undefined, _0x3ae2e);
              var _0x18e65a = _0x7f5163.fromDer(_0x239c05, {
                parseAllBytes: _0x3ae2e._parseAllDigestBytes
              });
              var _0x23b597 = {};
              var _0x3f8dd1 = [];
              if (!_0x7f5163.validate(_0x18e65a, _0x561528, _0x23b597, _0x3f8dd1) || _0x18e65a.value.length !== 2) {
                var _0x5e80c3 = new Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value.");
                _0x5e80c3.errors = _0x3f8dd1;
                throw _0x5e80c3;
              }
              var _0xdcd966 = _0x7f5163.derToOid(_0x23b597.algorithmIdentifier);
              if (_0xdcd966 !== _0x1f2a21.oids.md2 && _0xdcd966 !== _0x1f2a21.oids.md5 && _0xdcd966 !== _0x1f2a21.oids.sha1 && _0xdcd966 !== _0x1f2a21.oids.sha224 && _0xdcd966 !== _0x1f2a21.oids.sha256 && _0xdcd966 !== _0x1f2a21.oids.sha384 && _0xdcd966 !== _0x1f2a21.oids.sha512 && _0xdcd966 !== _0x1f2a21.oids["sha512-224"] && _0xdcd966 !== _0x1f2a21.oids["sha512-256"]) {
                var _0x5e80c3 = new Error("Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier.");
                _0x5e80c3.oid = _0xdcd966;
                throw _0x5e80c3;
              }
              if (_0xdcd966 === _0x1f2a21.oids.md2 || _0xdcd966 === _0x1f2a21.oids.md5) {
                if (!("parameters" in _0x23b597)) {
                  throw new Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifier NULL parameters.");
                }
              }
              return _0x3105ba === _0x23b597.digest;
            }
          };
        } else if (_0x4a39f8 === "NONE" || _0x4a39f8 === "NULL" || _0x4a39f8 === null) {
          _0x4a39f8 = {
            verify: function (_0x1988ad, _0x57bf1f) {
              _0x57bf1f = _0x337257(_0x57bf1f, _0x14eda0, true, undefined, _0x3ae2e);
              return _0x1988ad === _0x57bf1f;
            }
          };
        }
        var _0x38a116 = _0x5aa694.rsa.decrypt(_0x18983f, _0x14eda0, true, false);
        return _0x4a39f8.verify(_0x2b9758, _0x38a116, _0x14eda0.n.bitLength());
      };
      return _0x14eda0;
    };
    _0x5aa694.setRsaPrivateKey = _0x5aa694.rsa.setPrivateKey = function (_0x590ba9, _0xd5a464, _0x52504b, _0x26b0a0, _0x1a8eb0, _0x9e3294, _0x5c44ea, _0x26a985) {
      var _0xc676c3 = {
        n: _0x590ba9,
        e: _0xd5a464,
        d: _0x52504b,
        p: _0x26b0a0,
        q: _0x1a8eb0,
        dP: _0x9e3294,
        dQ: _0x5c44ea,
        qInv: _0x26a985
      };
      _0xc676c3.decrypt = function (_0x23e089, _0x3eb682, _0x818e3a) {
        if (typeof _0x3eb682 === "string") {
          _0x3eb682 = _0x3eb682.toUpperCase();
        } else if (_0x3eb682 === undefined) {
          _0x3eb682 = "RSAES-PKCS1-V1_5";
        }
        var _0x413cfa = _0x5aa694.rsa.decrypt(_0x23e089, _0xc676c3, false, false);
        if (_0x3eb682 === "RSAES-PKCS1-V1_5") {
          _0x3eb682 = {
            decode: _0x337257
          };
        } else if (_0x3eb682 === "RSA-OAEP" || _0x3eb682 === "RSAES-OAEP") {
          _0x3eb682 = {
            decode: function (_0x356139, _0x7261af) {
              return _0x1f2a21.pkcs1.decode_rsa_oaep(_0x7261af, _0x356139, _0x818e3a);
            }
          };
        } else if (["RAW", "NONE", "NULL", null].indexOf(_0x3eb682) !== -1) {
          _0x3eb682 = {
            decode: function (_0x5ddb16) {
              return _0x5ddb16;
            }
          };
        } else {
          throw new Error("Unsupported encryption scheme: \"" + _0x3eb682 + "\".");
        }
        return _0x3eb682.decode(_0x413cfa, _0xc676c3, false);
      };
      _0xc676c3.sign = function (_0xb2008, _0x3198b7) {
        var _0x237a7e = false;
        if (typeof _0x3198b7 === "string") {
          _0x3198b7 = _0x3198b7.toUpperCase();
        }
        if (_0x3198b7 === undefined || _0x3198b7 === "RSASSA-PKCS1-V1_5") {
          _0x3198b7 = {
            encode: _0x47709a
          };
          _0x237a7e = 1;
        } else if (_0x3198b7 === "NONE" || _0x3198b7 === "NULL" || _0x3198b7 === null) {
          _0x3198b7 = {
            encode: function () {
              return _0xb2008;
            }
          };
          _0x237a7e = 1;
        }
        var _0x449039 = _0x3198b7.encode(_0xb2008, _0xc676c3.n.bitLength());
        return _0x5aa694.rsa.encrypt(_0x449039, _0xc676c3, _0x237a7e);
      };
      return _0xc676c3;
    };
    _0x5aa694.wrapRsaPrivateKey = function (_0x3d6534) {
      return _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.SEQUENCE, true, [_0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.INTEGER, false, _0x7f5163.integerToDer(0).getBytes()), _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.SEQUENCE, true, [_0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.OID, false, _0x7f5163.oidToDer(_0x5aa694.oids.rsaEncryption).getBytes()), _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.NULL, false, "")]), _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.OCTETSTRING, false, _0x7f5163.toDer(_0x3d6534).getBytes())]);
    };
    _0x5aa694.privateKeyFromAsn1 = function (_0x1d64b2) {
      var _0x41e721 = {};
      var _0x9b8673 = [];
      if (_0x7f5163.validate(_0x1d64b2, _0x5df227, _0x41e721, _0x9b8673)) {
        _0x1d64b2 = _0x7f5163.fromDer(_0x1f2a21.util.createBuffer(_0x41e721.privateKey));
      }
      _0x41e721 = {};
      _0x9b8673 = [];
      if (!_0x7f5163.validate(_0x1d64b2, _0x450f7c, _0x41e721, _0x9b8673)) {
        var _0x4d52a3 = new Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.");
        _0x4d52a3.errors = _0x9b8673;
        throw _0x4d52a3;
      }
      var _0x716f57;
      var _0x589457;
      var _0x19292e;
      var _0x3cf5f8;
      var _0x4dc025;
      var _0x385b90;
      var _0x2e1efb;
      var _0x1edc80;
      _0x716f57 = _0x1f2a21.util.createBuffer(_0x41e721.privateKeyModulus).toHex();
      _0x589457 = _0x1f2a21.util.createBuffer(_0x41e721.privateKeyPublicExponent).toHex();
      _0x19292e = _0x1f2a21.util.createBuffer(_0x41e721.privateKeyPrivateExponent).toHex();
      _0x3cf5f8 = _0x1f2a21.util.createBuffer(_0x41e721.privateKeyPrime1).toHex();
      _0x4dc025 = _0x1f2a21.util.createBuffer(_0x41e721.privateKeyPrime2).toHex();
      _0x385b90 = _0x1f2a21.util.createBuffer(_0x41e721.privateKeyExponent1).toHex();
      _0x2e1efb = _0x1f2a21.util.createBuffer(_0x41e721.privateKeyExponent2).toHex();
      _0x1edc80 = _0x1f2a21.util.createBuffer(_0x41e721.privateKeyCoefficient).toHex();
      return _0x5aa694.setRsaPrivateKey(new _0x524483(_0x716f57, 16), new _0x524483(_0x589457, 16), new _0x524483(_0x19292e, 16), new _0x524483(_0x3cf5f8, 16), new _0x524483(_0x4dc025, 16), new _0x524483(_0x385b90, 16), new _0x524483(_0x2e1efb, 16), new _0x524483(_0x1edc80, 16));
    };
    _0x5aa694.privateKeyToAsn1 = _0x5aa694.privateKeyToRSAPrivateKey = function (_0x1602c3) {
      return _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.SEQUENCE, true, [_0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.INTEGER, false, _0x7f5163.integerToDer(0).getBytes()), _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.INTEGER, false, _0x2c5466(_0x1602c3.n)), _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.INTEGER, false, _0x2c5466(_0x1602c3.e)), _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.INTEGER, false, _0x2c5466(_0x1602c3.d)), _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.INTEGER, false, _0x2c5466(_0x1602c3.p)), _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.INTEGER, false, _0x2c5466(_0x1602c3.q)), _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.INTEGER, false, _0x2c5466(_0x1602c3.dP)), _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.INTEGER, false, _0x2c5466(_0x1602c3.dQ)), _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.INTEGER, false, _0x2c5466(_0x1602c3.qInv))]);
    };
    _0x5aa694.publicKeyFromAsn1 = function (_0x345d43) {
      var _0x3ccf16 = {};
      var _0x40b45b = [];
      if (_0x7f5163.validate(_0x345d43, _0x40906d, _0x3ccf16, _0x40b45b)) {
        var _0x268f5e = _0x7f5163.derToOid(_0x3ccf16.publicKeyOid);
        if (_0x268f5e !== _0x5aa694.oids.rsaEncryption) {
          var _0x3b857d = new Error("Cannot read public key. Unknown OID.");
          _0x3b857d.oid = _0x268f5e;
          throw _0x3b857d;
        }
        _0x345d43 = _0x3ccf16.rsaPublicKey;
      }
      _0x40b45b = [];
      if (!_0x7f5163.validate(_0x345d43, _0x591724, _0x3ccf16, _0x40b45b)) {
        var _0x3b857d = new Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.");
        _0x3b857d.errors = _0x40b45b;
        throw _0x3b857d;
      }
      var _0xaed03d = _0x1f2a21.util.createBuffer(_0x3ccf16.publicKeyModulus).toHex();
      var _0x3d9a89 = _0x1f2a21.util.createBuffer(_0x3ccf16.publicKeyExponent).toHex();
      return _0x5aa694.setRsaPublicKey(new _0x524483(_0xaed03d, 16), new _0x524483(_0x3d9a89, 16));
    };
    _0x5aa694.publicKeyToAsn1 = _0x5aa694.publicKeyToSubjectPublicKeyInfo = function (_0x5a9499) {
      return _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.SEQUENCE, true, [_0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.SEQUENCE, true, [_0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.OID, false, _0x7f5163.oidToDer(_0x5aa694.oids.rsaEncryption).getBytes()), _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.NULL, false, "")]), _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.BITSTRING, false, [_0x5aa694.publicKeyToRSAPublicKey(_0x5a9499)])]);
    };
    _0x5aa694.publicKeyToRSAPublicKey = function (_0x2962e8) {
      return _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.SEQUENCE, true, [_0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.INTEGER, false, _0x2c5466(_0x2962e8.n)), _0x7f5163.create(_0x7f5163.Class.UNIVERSAL, _0x7f5163.Type.INTEGER, false, _0x2c5466(_0x2962e8.e))]);
    };
    function _0x541df9(_0xca01d6, _0x8dce60, _0x3430c9) {
      var _0x15cdaf = _0x1f2a21.util.createBuffer();
      var _0x552a61 = Math.ceil(_0x8dce60.n.bitLength() / 8);
      if (_0xca01d6.length > _0x552a61 - 11) {
        var _0x513827 = new Error("Message is too long for PKCS#1 v1.5 padding.");
        _0x513827.length = _0xca01d6.length;
        _0x513827.max = _0x552a61 - 11;
        throw _0x513827;
      }
      _0x15cdaf.putByte(0);
      _0x15cdaf.putByte(_0x3430c9);
      var _0x193a01 = _0x552a61 - 3 - _0xca01d6.length;
      var _0x585cd9;
      if (_0x3430c9 === 0 || _0x3430c9 === 1) {
        _0x585cd9 = _0x3430c9 === 0 ? 0 : 255;
        for (var _0x49046c = 0; _0x49046c < _0x193a01; ++_0x49046c) {
          _0x15cdaf.putByte(_0x585cd9);
        }
      } else {
        while (_0x193a01 > 0) {
          var _0x56d991 = 0;
          var _0xae6e59 = _0x1f2a21.random.getBytes(_0x193a01);
          for (var _0x49046c = 0; _0x49046c < _0x193a01; ++_0x49046c) {
            _0x585cd9 = _0xae6e59.charCodeAt(_0x49046c);
            if (_0x585cd9 === 0) {
              ++_0x56d991;
            } else {
              _0x15cdaf.putByte(_0x585cd9);
            }
          }
          _0x193a01 = _0x56d991;
        }
      }
      _0x15cdaf.putByte(0);
      _0x15cdaf.putBytes(_0xca01d6);
      return _0x15cdaf;
    }
    function _0x337257(_0x2ada0c, _0x3d7629, _0x3631e0, _0x13f505, _0x121e3b) {
      var _0xd1951f = Math.ceil(_0x3d7629.n.bitLength() / 8);
      var _0x40d8bf = _0x1f2a21.util.createBuffer(_0x2ada0c);
      var _0x24f2ee = _0x40d8bf.getByte();
      var _0x481b1c = _0x40d8bf.getByte();
      if (_0x24f2ee !== 0 || _0x3631e0 && _0x481b1c !== 0 && _0x481b1c !== 1 || !_0x3631e0 && _0x481b1c !== 2 || _0x3631e0 && _0x481b1c === 0 && typeof _0x13f505 === "undefined") {
        throw new Error("Encryption block is invalid.");
      }
      var _0x5285d8 = 0;
      if (_0x481b1c === 0) {
        _0x5285d8 = _0xd1951f - 3 - _0x13f505;
        for (var _0x5f3af5 = 0; _0x5f3af5 < _0x5285d8; ++_0x5f3af5) {
          if (_0x40d8bf.getByte() !== 0) {
            throw new Error("Encryption block is invalid.");
          }
        }
      } else if (_0x481b1c === 1) {
        _0x5285d8 = 0;
        while (_0x40d8bf.length() > 1) {
          if (_0x40d8bf.getByte() !== 255) {
            --_0x40d8bf.read;
            break;
          }
          ++_0x5285d8;
        }
        if (_0x5285d8 < 8 && !(_0x121e3b ? _0x121e3b._skipPaddingChecks : false)) {
          throw new Error("Encryption block is invalid.");
        }
      } else if (_0x481b1c === 2) {
        _0x5285d8 = 0;
        while (_0x40d8bf.length() > 1) {
          if (_0x40d8bf.getByte() === 0) {
            --_0x40d8bf.read;
            break;
          }
          ++_0x5285d8;
        }
        if (_0x5285d8 < 8 && !(_0x121e3b ? _0x121e3b._skipPaddingChecks : false)) {
          throw new Error("Encryption block is invalid.");
        }
      }
      var _0x3db784 = _0x40d8bf.getByte();
      if (_0x3db784 !== 0 || _0x5285d8 !== _0xd1951f - 3 - _0x40d8bf.length()) {
        throw new Error("Encryption block is invalid.");
      }
      return _0x40d8bf.getBytes();
    }
    function _0x426819(_0xdb78d7, _0x570fce, _0x368f77) {
      if (typeof _0x570fce === "function") {
        _0x368f77 = _0x570fce;
        _0x570fce = {};
      }
      _0x570fce = _0x570fce || {};
      var _0x415433 = {
        algorithm: {
          name: _0x570fce.algorithm || "PRIMEINC",
          options: {
            workers: _0x570fce.workers || 2,
            workLoad: _0x570fce.workLoad || 100,
            workerScript: _0x570fce.workerScript
          }
        }
      };
      if ("prng" in _0x570fce) {
        _0x415433.prng = _0x570fce.prng;
      }
      _0x2047ae();
      function _0x2047ae() {
        _0x5de731(_0xdb78d7.pBits, function (_0x3c0a58, _0x5d88a7) {
          if (_0x3c0a58) {
            return _0x368f77(_0x3c0a58);
          }
          _0xdb78d7.p = _0x5d88a7;
          if (_0xdb78d7.q !== null) {
            return _0xe851d3(_0x3c0a58, _0xdb78d7.q);
          }
          _0x5de731(_0xdb78d7.qBits, _0xe851d3);
        });
      }
      function _0x5de731(_0x58ba7e, _0x336261) {
        _0x1f2a21.prime.generateProbablePrime(_0x58ba7e, _0x415433, _0x336261);
      }
      function _0xe851d3(_0x747ec7, _0x3e08fe) {
        if (_0x747ec7) {
          return _0x368f77(_0x747ec7);
        }
        _0xdb78d7.q = _0x3e08fe;
        if (_0xdb78d7.p.compareTo(_0xdb78d7.q) < 0) {
          var _0x10c6f5 = _0xdb78d7.p;
          _0xdb78d7.p = _0xdb78d7.q;
          _0xdb78d7.q = _0x10c6f5;
        }
        if (_0xdb78d7.p.subtract(_0x524483.ONE).gcd(_0xdb78d7.e).compareTo(_0x524483.ONE) !== 0) {
          _0xdb78d7.p = null;
          _0x2047ae();
          return;
        }
        if (_0xdb78d7.q.subtract(_0x524483.ONE).gcd(_0xdb78d7.e).compareTo(_0x524483.ONE) !== 0) {
          _0xdb78d7.q = null;
          _0x5de731(_0xdb78d7.qBits, _0xe851d3);
          return;
        }
        _0xdb78d7.p1 = _0xdb78d7.p.subtract(_0x524483.ONE);
        _0xdb78d7.q1 = _0xdb78d7.q.subtract(_0x524483.ONE);
        _0xdb78d7.phi = _0xdb78d7.p1.multiply(_0xdb78d7.q1);
        if (_0xdb78d7.phi.gcd(_0xdb78d7.e).compareTo(_0x524483.ONE) !== 0) {
          _0xdb78d7.p = _0xdb78d7.q = null;
          _0x2047ae();
          return;
        }
        _0xdb78d7.n = _0xdb78d7.p.multiply(_0xdb78d7.q);
        if (_0xdb78d7.n.bitLength() !== _0xdb78d7.bits) {
          _0xdb78d7.q = null;
          _0x5de731(_0xdb78d7.qBits, _0xe851d3);
          return;
        }
        var _0x110511 = _0xdb78d7.e.modInverse(_0xdb78d7.phi);
        _0xdb78d7.keys = {
          privateKey: _0x5aa694.rsa.setPrivateKey(_0xdb78d7.n, _0xdb78d7.e, _0x110511, _0xdb78d7.p, _0xdb78d7.q, _0x110511.mod(_0xdb78d7.p1), _0x110511.mod(_0xdb78d7.q1), _0xdb78d7.q.modInverse(_0xdb78d7.p)),
          publicKey: _0x5aa694.rsa.setPublicKey(_0xdb78d7.n, _0xdb78d7.e)
        };
        _0x368f77(null, _0xdb78d7.keys);
      }
    }
    function _0x2c5466(_0x5743ea) {
      var _0x4d75cf = _0x5743ea.toString(16);
      if (_0x4d75cf[0] >= "8") {
        _0x4d75cf = "00" + _0x4d75cf;
      }
      var _0x476663 = _0x1f2a21.util.hexToBytes(_0x4d75cf);
      if (_0x476663.length > 1 && (_0x476663.charCodeAt(0) === 0 && (_0x476663.charCodeAt(1) & 128) === 0 || _0x476663.charCodeAt(0) === 255 && (_0x476663.charCodeAt(1) & 128) === 128)) {
        return _0x476663.substr(1);
      }
      return _0x476663;
    }
    function _0x1d643f(_0x2a2225) {
      if (_0x2a2225 <= 100) {
        return 27;
      }
      if (_0x2a2225 <= 150) {
        return 18;
      }
      if (_0x2a2225 <= 200) {
        return 15;
      }
      if (_0x2a2225 <= 250) {
        return 12;
      }
      if (_0x2a2225 <= 300) {
        return 9;
      }
      if (_0x2a2225 <= 350) {
        return 8;
      }
      if (_0x2a2225 <= 400) {
        return 7;
      }
      if (_0x2a2225 <= 500) {
        return 6;
      }
      if (_0x2a2225 <= 600) {
        return 5;
      }
      if (_0x2a2225 <= 800) {
        return 4;
      }
      if (_0x2a2225 <= 1250) {
        return 3;
      }
      return 2;
    }
    function _0x18f735(_0x42dbda) {
      return _0x1f2a21.util.isNodejs && typeof _0x31fd0c[_0x42dbda] === "function";
    }
    function _0x593936(_0x50a972) {
      return typeof _0x441ead.globalScope !== "undefined" && typeof _0x441ead.globalScope.crypto === "object" && typeof _0x441ead.globalScope.crypto.subtle === "object" && typeof _0x441ead.globalScope.crypto.subtle[_0x50a972] === "function";
    }
    function _0x571130(_0x3eb5a3) {
      return typeof _0x441ead.globalScope !== "undefined" && typeof _0x441ead.globalScope.msCrypto === "object" && typeof _0x441ead.globalScope.msCrypto.subtle === "object" && typeof _0x441ead.globalScope.msCrypto.subtle[_0x3eb5a3] === "function";
    }
    function _0x42f470(_0x2097bb) {
      var _0xc4221d = _0x1f2a21.util.hexToBytes(_0x2097bb.toString(16));
      var _0x316ff3 = new Uint8Array(_0xc4221d.length);
      for (var _0x24a13c = 0; _0x24a13c < _0xc4221d.length; ++_0x24a13c) {
        _0x316ff3[_0x24a13c] = _0xc4221d.charCodeAt(_0x24a13c);
      }
      return _0x316ff3;
    }
  }
});
var require_pbe = __commonJS({
  "node_modules/node-forge/lib/pbe.js"(_0x308d98, _0x398d6f) {
    var _0x439d84 = require_forge();
    require_aes();
    require_asn1();
    require_des();
    require_md();
    require_oids();
    require_pbkdf2();
    require_pem();
    require_random();
    require_rc2();
    require_rsa();
    require_util();
    if (typeof _0x3d29cb === "undefined") {
      _0x3d29cb = _0x439d84.jsbn.BigInteger;
    }
    var _0x3d29cb;
    var _0x335ceb = _0x439d84.asn1;
    var _0x18ee8f = _0x439d84.pki = _0x439d84.pki || {};
    _0x398d6f.exports = _0x18ee8f.pbe = _0x439d84.pbe = _0x439d84.pbe || {};
    var _0x2c1d67 = _0x18ee8f.oids;
    var _0x253db7 = {
      name: "EncryptedPrivateKeyInfo",
      tagClass: _0x335ceb.Class.UNIVERSAL,
      type: _0x335ceb.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "EncryptedPrivateKeyInfo.encryptionAlgorithm",
        tagClass: _0x335ceb.Class.UNIVERSAL,
        type: _0x335ceb.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "AlgorithmIdentifier.algorithm",
          tagClass: _0x335ceb.Class.UNIVERSAL,
          type: _0x335ceb.Type.OID,
          constructed: false,
          capture: "encryptionOid"
        }, {
          name: "AlgorithmIdentifier.parameters",
          tagClass: _0x335ceb.Class.UNIVERSAL,
          type: _0x335ceb.Type.SEQUENCE,
          constructed: true,
          captureAsn1: "encryptionParams"
        }]
      }, {
        name: "EncryptedPrivateKeyInfo.encryptedData",
        tagClass: _0x335ceb.Class.UNIVERSAL,
        type: _0x335ceb.Type.OCTETSTRING,
        constructed: false,
        capture: "encryptedData"
      }]
    };
    var _0xc27394 = {
      name: "PBES2Algorithms",
      tagClass: _0x335ceb.Class.UNIVERSAL,
      type: _0x335ceb.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "PBES2Algorithms.keyDerivationFunc",
        tagClass: _0x335ceb.Class.UNIVERSAL,
        type: _0x335ceb.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "PBES2Algorithms.keyDerivationFunc.oid",
          tagClass: _0x335ceb.Class.UNIVERSAL,
          type: _0x335ceb.Type.OID,
          constructed: false,
          capture: "kdfOid"
        }, {
          name: "PBES2Algorithms.params",
          tagClass: _0x335ceb.Class.UNIVERSAL,
          type: _0x335ceb.Type.SEQUENCE,
          constructed: true,
          value: [{
            name: "PBES2Algorithms.params.salt",
            tagClass: _0x335ceb.Class.UNIVERSAL,
            type: _0x335ceb.Type.OCTETSTRING,
            constructed: false,
            capture: "kdfSalt"
          }, {
            name: "PBES2Algorithms.params.iterationCount",
            tagClass: _0x335ceb.Class.UNIVERSAL,
            type: _0x335ceb.Type.INTEGER,
            constructed: false,
            capture: "kdfIterationCount"
          }, {
            name: "PBES2Algorithms.params.keyLength",
            tagClass: _0x335ceb.Class.UNIVERSAL,
            type: _0x335ceb.Type.INTEGER,
            constructed: false,
            optional: true,
            capture: "keyLength"
          }, {
            name: "PBES2Algorithms.params.prf",
            tagClass: _0x335ceb.Class.UNIVERSAL,
            type: _0x335ceb.Type.SEQUENCE,
            constructed: true,
            optional: true,
            value: [{
              name: "PBES2Algorithms.params.prf.algorithm",
              tagClass: _0x335ceb.Class.UNIVERSAL,
              type: _0x335ceb.Type.OID,
              constructed: false,
              capture: "prfOid"
            }]
          }]
        }]
      }, {
        name: "PBES2Algorithms.encryptionScheme",
        tagClass: _0x335ceb.Class.UNIVERSAL,
        type: _0x335ceb.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "PBES2Algorithms.encryptionScheme.oid",
          tagClass: _0x335ceb.Class.UNIVERSAL,
          type: _0x335ceb.Type.OID,
          constructed: false,
          capture: "encOid"
        }, {
          name: "PBES2Algorithms.encryptionScheme.iv",
          tagClass: _0x335ceb.Class.UNIVERSAL,
          type: _0x335ceb.Type.OCTETSTRING,
          constructed: false,
          capture: "encIv"
        }]
      }]
    };
    var _0x206a2a = {
      name: "pkcs-12PbeParams",
      tagClass: _0x335ceb.Class.UNIVERSAL,
      type: _0x335ceb.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "pkcs-12PbeParams.salt",
        tagClass: _0x335ceb.Class.UNIVERSAL,
        type: _0x335ceb.Type.OCTETSTRING,
        constructed: false,
        capture: "salt"
      }, {
        name: "pkcs-12PbeParams.iterations",
        tagClass: _0x335ceb.Class.UNIVERSAL,
        type: _0x335ceb.Type.INTEGER,
        constructed: false,
        capture: "iterations"
      }]
    };
    _0x18ee8f.encryptPrivateKeyInfo = function (_0x43a5ae, _0x30b92b, _0x5e5c90) {
      _0x5e5c90 = _0x5e5c90 || {};
      _0x5e5c90.saltSize = _0x5e5c90.saltSize || 8;
      _0x5e5c90.count = _0x5e5c90.count || 2048;
      _0x5e5c90.algorithm = _0x5e5c90.algorithm || "aes128";
      _0x5e5c90.prfAlgorithm = _0x5e5c90.prfAlgorithm || "sha1";
      var _0x1ac22e = _0x439d84.random.getBytesSync(_0x5e5c90.saltSize);
      var _0x154b84 = _0x5e5c90.count;
      var _0x1522db = _0x335ceb.integerToDer(_0x154b84);
      var _0x5edaaa;
      var _0x3d42e7;
      var _0x1b331b;
      if (_0x5e5c90.algorithm.indexOf("aes") === 0 || _0x5e5c90.algorithm === "des") {
        var _0x46f1d0;
        var _0xfa7fed;
        var _0x1b032a;
        switch (_0x5e5c90.algorithm) {
          case "aes128":
            _0x5edaaa = 16;
            _0x46f1d0 = 16;
            _0xfa7fed = _0x2c1d67["aes128-CBC"];
            _0x1b032a = _0x439d84.aes.createEncryptionCipher;
            break;
          case "aes192":
            _0x5edaaa = 24;
            _0x46f1d0 = 16;
            _0xfa7fed = _0x2c1d67["aes192-CBC"];
            _0x1b032a = _0x439d84.aes.createEncryptionCipher;
            break;
          case "aes256":
            _0x5edaaa = 32;
            _0x46f1d0 = 16;
            _0xfa7fed = _0x2c1d67["aes256-CBC"];
            _0x1b032a = _0x439d84.aes.createEncryptionCipher;
            break;
          case "des":
            _0x5edaaa = 8;
            _0x46f1d0 = 8;
            _0xfa7fed = _0x2c1d67.desCBC;
            _0x1b032a = _0x439d84.des.createEncryptionCipher;
            break;
          default:
            var _0x4dd791 = new Error("Cannot encrypt private key. Unknown encryption algorithm.");
            _0x4dd791.algorithm = _0x5e5c90.algorithm;
            throw _0x4dd791;
        }
        var _0xc9c50c = "hmacWith" + _0x5e5c90.prfAlgorithm.toUpperCase();
        var _0x84bcdb = _0x35a62b(_0xc9c50c);
        var _0x136498 = _0x439d84.pkcs5.pbkdf2(_0x30b92b, _0x1ac22e, _0x154b84, _0x5edaaa, _0x84bcdb);
        var _0x4a52f9 = _0x439d84.random.getBytesSync(_0x46f1d0);
        var _0x19acda = _0x1b032a(_0x136498);
        _0x19acda.start(_0x4a52f9);
        _0x19acda.update(_0x335ceb.toDer(_0x43a5ae));
        _0x19acda.finish();
        _0x1b331b = _0x19acda.output.getBytes();
        var _0x2d284c = _0x53fbdd(_0x1ac22e, _0x1522db, _0x5edaaa, _0xc9c50c);
        _0x3d42e7 = _0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.SEQUENCE, true, [_0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.OID, false, _0x335ceb.oidToDer(_0x2c1d67.pkcs5PBES2).getBytes()), _0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.SEQUENCE, true, [_0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.SEQUENCE, true, [_0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.OID, false, _0x335ceb.oidToDer(_0x2c1d67.pkcs5PBKDF2).getBytes()), _0x2d284c]), _0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.SEQUENCE, true, [_0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.OID, false, _0x335ceb.oidToDer(_0xfa7fed).getBytes()), _0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.OCTETSTRING, false, _0x4a52f9)])])]);
      } else if (_0x5e5c90.algorithm === "3des") {
        _0x5edaaa = 24;
        var _0x3211b5 = new _0x439d84.util.ByteBuffer(_0x1ac22e);
        var _0x136498 = _0x18ee8f.pbe.generatePkcs12Key(_0x30b92b, _0x3211b5, 1, _0x154b84, _0x5edaaa);
        var _0x4a52f9 = _0x18ee8f.pbe.generatePkcs12Key(_0x30b92b, _0x3211b5, 2, _0x154b84, _0x5edaaa);
        var _0x19acda = _0x439d84.des.createEncryptionCipher(_0x136498);
        _0x19acda.start(_0x4a52f9);
        _0x19acda.update(_0x335ceb.toDer(_0x43a5ae));
        _0x19acda.finish();
        _0x1b331b = _0x19acda.output.getBytes();
        _0x3d42e7 = _0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.SEQUENCE, true, [_0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.OID, false, _0x335ceb.oidToDer(_0x2c1d67["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()), _0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.SEQUENCE, true, [_0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.OCTETSTRING, false, _0x1ac22e), _0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.INTEGER, false, _0x1522db.getBytes())])]);
      } else {
        var _0x4dd791 = new Error("Cannot encrypt private key. Unknown encryption algorithm.");
        _0x4dd791.algorithm = _0x5e5c90.algorithm;
        throw _0x4dd791;
      }
      var _0x85fb50 = _0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.SEQUENCE, true, [_0x3d42e7, _0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.OCTETSTRING, false, _0x1b331b)]);
      return _0x85fb50;
    };
    _0x18ee8f.decryptPrivateKeyInfo = function (_0x1aea1b, _0x1884f1) {
      var _0x249e11 = null;
      var _0x4bea2f = {};
      var _0x581627 = [];
      if (!_0x335ceb.validate(_0x1aea1b, _0x253db7, _0x4bea2f, _0x581627)) {
        var _0x2662fa = new Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
        _0x2662fa.errors = _0x581627;
        throw _0x2662fa;
      }
      var _0x5ab21b = _0x335ceb.derToOid(_0x4bea2f.encryptionOid);
      var _0x4b3aaf = _0x18ee8f.pbe.getCipher(_0x5ab21b, _0x4bea2f.encryptionParams, _0x1884f1);
      var _0x4cd3fe = _0x439d84.util.createBuffer(_0x4bea2f.encryptedData);
      _0x4b3aaf.update(_0x4cd3fe);
      if (_0x4b3aaf.finish()) {
        _0x249e11 = _0x335ceb.fromDer(_0x4b3aaf.output);
      }
      return _0x249e11;
    };
    _0x18ee8f.encryptedPrivateKeyToPem = function (_0x35ed4c, _0x22c0cd) {
      var _0x4c064a = {
        type: "ENCRYPTED PRIVATE KEY",
        body: _0x335ceb.toDer(_0x35ed4c).getBytes()
      };
      return _0x439d84.pem.encode(_0x4c064a, {
        maxline: _0x22c0cd
      });
    };
    _0x18ee8f.encryptedPrivateKeyFromPem = function (_0x1e2d52) {
      var _0x482506 = _0x439d84.pem.decode(_0x1e2d52)[0];
      if (_0x482506.type !== "ENCRYPTED PRIVATE KEY") {
        var _0x4acde3 = new Error("Could not convert encrypted private key from PEM; PEM header type is \"ENCRYPTED PRIVATE KEY\".");
        _0x4acde3.headerType = _0x482506.type;
        throw _0x4acde3;
      }
      if (_0x482506.procType && _0x482506.procType.type === "ENCRYPTED") {
        throw new Error("Could not convert encrypted private key from PEM; PEM is encrypted.");
      }
      return _0x335ceb.fromDer(_0x482506.body);
    };
    _0x18ee8f.encryptRsaPrivateKey = function (_0x1c1df7, _0x29bde1, _0x3eaf93) {
      _0x3eaf93 = _0x3eaf93 || {};
      if (!_0x3eaf93.legacy) {
        var _0xa06099 = _0x18ee8f.wrapRsaPrivateKey(_0x18ee8f.privateKeyToAsn1(_0x1c1df7));
        _0xa06099 = _0x18ee8f.encryptPrivateKeyInfo(_0xa06099, _0x29bde1, _0x3eaf93);
        return _0x18ee8f.encryptedPrivateKeyToPem(_0xa06099);
      }
      var _0x1e3692;
      var _0x81c962;
      var _0x7bdc6f;
      var _0x1ff770;
      switch (_0x3eaf93.algorithm) {
        case "aes128":
          _0x1e3692 = "AES-128-CBC";
          _0x7bdc6f = 16;
          _0x81c962 = _0x439d84.random.getBytesSync(16);
          _0x1ff770 = _0x439d84.aes.createEncryptionCipher;
          break;
        case "aes192":
          _0x1e3692 = "AES-192-CBC";
          _0x7bdc6f = 24;
          _0x81c962 = _0x439d84.random.getBytesSync(16);
          _0x1ff770 = _0x439d84.aes.createEncryptionCipher;
          break;
        case "aes256":
          _0x1e3692 = "AES-256-CBC";
          _0x7bdc6f = 32;
          _0x81c962 = _0x439d84.random.getBytesSync(16);
          _0x1ff770 = _0x439d84.aes.createEncryptionCipher;
          break;
        case "3des":
          _0x1e3692 = "DES-EDE3-CBC";
          _0x7bdc6f = 24;
          _0x81c962 = _0x439d84.random.getBytesSync(8);
          _0x1ff770 = _0x439d84.des.createEncryptionCipher;
          break;
        case "des":
          _0x1e3692 = "DES-CBC";
          _0x7bdc6f = 8;
          _0x81c962 = _0x439d84.random.getBytesSync(8);
          _0x1ff770 = _0x439d84.des.createEncryptionCipher;
          break;
        default:
          var _0x4c78ca = new Error("Could not encrypt RSA private key; unsupported encryption algorithm \"" + _0x3eaf93.algorithm + "\".");
          _0x4c78ca.algorithm = _0x3eaf93.algorithm;
          throw _0x4c78ca;
      }
      var _0x37d51b = _0x439d84.pbe.opensslDeriveBytes(_0x29bde1, _0x81c962.substr(0, 8), _0x7bdc6f);
      var _0xa4cfaf = _0x1ff770(_0x37d51b);
      _0xa4cfaf.start(_0x81c962);
      _0xa4cfaf.update(_0x335ceb.toDer(_0x18ee8f.privateKeyToAsn1(_0x1c1df7)));
      _0xa4cfaf.finish();
      var _0x14b6d5 = {
        type: "RSA PRIVATE KEY",
        procType: {
          version: "4",
          type: "ENCRYPTED"
        },
        dekInfo: {
          algorithm: _0x1e3692,
          parameters: _0x439d84.util.bytesToHex(_0x81c962).toUpperCase()
        },
        body: _0xa4cfaf.output.getBytes()
      };
      return _0x439d84.pem.encode(_0x14b6d5);
    };
    _0x18ee8f.decryptRsaPrivateKey = function (_0x54e02f, _0x49899d) {
      var _0x46963d = null;
      var _0x3d8b1c = _0x439d84.pem.decode(_0x54e02f)[0];
      if (_0x3d8b1c.type !== "ENCRYPTED PRIVATE KEY" && _0x3d8b1c.type !== "PRIVATE KEY" && _0x3d8b1c.type !== "RSA PRIVATE KEY") {
        var _0x113066 = new Error("Could not convert private key from PEM; PEM header type is not \"ENCRYPTED PRIVATE KEY\", \"PRIVATE KEY\", or \"RSA PRIVATE KEY\".");
        _0x113066.headerType = _0x113066;
        throw _0x113066;
      }
      if (_0x3d8b1c.procType && _0x3d8b1c.procType.type === "ENCRYPTED") {
        var _0x39a582;
        var _0x26d510;
        switch (_0x3d8b1c.dekInfo.algorithm) {
          case "DES-CBC":
            _0x39a582 = 8;
            _0x26d510 = _0x439d84.des.createDecryptionCipher;
            break;
          case "DES-EDE3-CBC":
            _0x39a582 = 24;
            _0x26d510 = _0x439d84.des.createDecryptionCipher;
            break;
          case "AES-128-CBC":
            _0x39a582 = 16;
            _0x26d510 = _0x439d84.aes.createDecryptionCipher;
            break;
          case "AES-192-CBC":
            _0x39a582 = 24;
            _0x26d510 = _0x439d84.aes.createDecryptionCipher;
            break;
          case "AES-256-CBC":
            _0x39a582 = 32;
            _0x26d510 = _0x439d84.aes.createDecryptionCipher;
            break;
          case "RC2-40-CBC":
            _0x39a582 = 5;
            _0x26d510 = function (_0x352e87) {
              return _0x439d84.rc2.createDecryptionCipher(_0x352e87, 40);
            };
            break;
          case "RC2-64-CBC":
            _0x39a582 = 8;
            _0x26d510 = function (_0x4a6747) {
              return _0x439d84.rc2.createDecryptionCipher(_0x4a6747, 64);
            };
            break;
          case "RC2-128-CBC":
            _0x39a582 = 16;
            _0x26d510 = function (_0x31afab) {
              return _0x439d84.rc2.createDecryptionCipher(_0x31afab, 128);
            };
            break;
          default:
            var _0x113066 = new Error("Could not decrypt private key; unsupported encryption algorithm \"" + _0x3d8b1c.dekInfo.algorithm + "\".");
            _0x113066.algorithm = _0x3d8b1c.dekInfo.algorithm;
            throw _0x113066;
        }
        var _0x5ef7b5 = _0x439d84.util.hexToBytes(_0x3d8b1c.dekInfo.parameters);
        var _0x3c0e97 = _0x439d84.pbe.opensslDeriveBytes(_0x49899d, _0x5ef7b5.substr(0, 8), _0x39a582);
        var _0x5cea61 = _0x26d510(_0x3c0e97);
        _0x5cea61.start(_0x5ef7b5);
        _0x5cea61.update(_0x439d84.util.createBuffer(_0x3d8b1c.body));
        if (_0x5cea61.finish()) {
          _0x46963d = _0x5cea61.output.getBytes();
        } else {
          return _0x46963d;
        }
      } else {
        _0x46963d = _0x3d8b1c.body;
      }
      if (_0x3d8b1c.type === "ENCRYPTED PRIVATE KEY") {
        _0x46963d = _0x18ee8f.decryptPrivateKeyInfo(_0x335ceb.fromDer(_0x46963d), _0x49899d);
      } else {
        _0x46963d = _0x335ceb.fromDer(_0x46963d);
      }
      if (_0x46963d !== null) {
        _0x46963d = _0x18ee8f.privateKeyFromAsn1(_0x46963d);
      }
      return _0x46963d;
    };
    _0x18ee8f.pbe.generatePkcs12Key = function (_0x2b9b3a, _0xfa76c2, _0x53b197, _0xa32f7e, _0x5b9a92, _0x3804b7) {
      var _0x1f0711;
      var _0x4756ea;
      if (typeof _0x3804b7 === "undefined" || _0x3804b7 === null) {
        if (!("sha1" in _0x439d84.md)) {
          throw new Error("\"sha1\" hash algorithm unavailable.");
        }
        _0x3804b7 = _0x439d84.md.sha1.create();
      }
      var _0x58b70a = _0x3804b7.digestLength;
      var _0x4d95a9 = _0x3804b7.blockLength;
      var _0x273f74 = new _0x439d84.util.ByteBuffer();
      var _0x44509c = new _0x439d84.util.ByteBuffer();
      if (_0x2b9b3a !== null && _0x2b9b3a !== undefined) {
        for (_0x4756ea = 0; _0x4756ea < _0x2b9b3a.length; _0x4756ea++) {
          _0x44509c.putInt16(_0x2b9b3a.charCodeAt(_0x4756ea));
        }
        _0x44509c.putInt16(0);
      }
      var _0x4b6159 = _0x44509c.length();
      var _0x47d1d9 = _0xfa76c2.length();
      var _0x5e64db = new _0x439d84.util.ByteBuffer();
      _0x5e64db.fillWithByte(_0x53b197, _0x4d95a9);
      var _0x39a384 = _0x4d95a9 * Math.ceil(_0x47d1d9 / _0x4d95a9);
      var _0x2ae6cd = new _0x439d84.util.ByteBuffer();
      for (_0x4756ea = 0; _0x4756ea < _0x39a384; _0x4756ea++) {
        _0x2ae6cd.putByte(_0xfa76c2.at(_0x4756ea % _0x47d1d9));
      }
      var _0x418236 = _0x4d95a9 * Math.ceil(_0x4b6159 / _0x4d95a9);
      var _0x29b070 = new _0x439d84.util.ByteBuffer();
      for (_0x4756ea = 0; _0x4756ea < _0x418236; _0x4756ea++) {
        _0x29b070.putByte(_0x44509c.at(_0x4756ea % _0x4b6159));
      }
      var _0xbfeb1c = _0x2ae6cd;
      _0xbfeb1c.putBuffer(_0x29b070);
      var _0x2d7078 = Math.ceil(_0x5b9a92 / _0x58b70a);
      for (var _0x6423a8 = 1; _0x6423a8 <= _0x2d7078; _0x6423a8++) {
        var _0x1dfcd2 = new _0x439d84.util.ByteBuffer();
        _0x1dfcd2.putBytes(_0x5e64db.bytes());
        _0x1dfcd2.putBytes(_0xbfeb1c.bytes());
        for (var _0x50f244 = 0; _0x50f244 < _0xa32f7e; _0x50f244++) {
          _0x3804b7.start();
          _0x3804b7.update(_0x1dfcd2.getBytes());
          _0x1dfcd2 = _0x3804b7.digest();
        }
        var _0x2d85a0 = new _0x439d84.util.ByteBuffer();
        for (_0x4756ea = 0; _0x4756ea < _0x4d95a9; _0x4756ea++) {
          _0x2d85a0.putByte(_0x1dfcd2.at(_0x4756ea % _0x58b70a));
        }
        var _0x2c9e26 = Math.ceil(_0x47d1d9 / _0x4d95a9) + Math.ceil(_0x4b6159 / _0x4d95a9);
        var _0x727ad0 = new _0x439d84.util.ByteBuffer();
        for (_0x1f0711 = 0; _0x1f0711 < _0x2c9e26; _0x1f0711++) {
          var _0x487d78 = new _0x439d84.util.ByteBuffer(_0xbfeb1c.getBytes(_0x4d95a9));
          var _0x469656 = 511;
          for (_0x4756ea = _0x2d85a0.length() - 1; _0x4756ea >= 0; _0x4756ea--) {
            _0x469656 = _0x469656 >> 8;
            _0x469656 += _0x2d85a0.at(_0x4756ea) + _0x487d78.at(_0x4756ea);
            _0x487d78.setAt(_0x4756ea, _0x469656 & 255);
          }
          _0x727ad0.putBuffer(_0x487d78);
        }
        _0xbfeb1c = _0x727ad0;
        _0x273f74.putBuffer(_0x1dfcd2);
      }
      _0x273f74.truncate(_0x273f74.length() - _0x5b9a92);
      return _0x273f74;
    };
    _0x18ee8f.pbe.getCipher = function (_0x59c9af, _0x3c4023, _0x16956d) {
      switch (_0x59c9af) {
        case _0x18ee8f.oids.pkcs5PBES2:
          return _0x18ee8f.pbe.getCipherForPBES2(_0x59c9af, _0x3c4023, _0x16956d);
        case _0x18ee8f.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
        case _0x18ee8f.oids["pbewithSHAAnd40BitRC2-CBC"]:
          return _0x18ee8f.pbe.getCipherForPKCS12PBE(_0x59c9af, _0x3c4023, _0x16956d);
        default:
          var _0x47706b = new Error("Cannot read encrypted PBE data block. Unsupported OID.");
          _0x47706b.oid = _0x59c9af;
          _0x47706b.supportedOids = ["pkcs5PBES2", "pbeWithSHAAnd3-KeyTripleDES-CBC", "pbewithSHAAnd40BitRC2-CBC"];
          throw _0x47706b;
      }
    };
    _0x18ee8f.pbe.getCipherForPBES2 = function (_0xb1c53a, _0x5e46be, _0x4070db) {
      var _0x4df1fe = {};
      var _0x1df57c = [];
      if (!_0x335ceb.validate(_0x5e46be, _0xc27394, _0x4df1fe, _0x1df57c)) {
        var _0x414047 = new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
        _0x414047.errors = _0x1df57c;
        throw _0x414047;
      }
      _0xb1c53a = _0x335ceb.derToOid(_0x4df1fe.kdfOid);
      if (_0xb1c53a !== _0x18ee8f.oids.pkcs5PBKDF2) {
        var _0x414047 = new Error("Cannot read encrypted private key. Unsupported key derivation function OID.");
        _0x414047.oid = _0xb1c53a;
        _0x414047.supportedOids = ["pkcs5PBKDF2"];
        throw _0x414047;
      }
      _0xb1c53a = _0x335ceb.derToOid(_0x4df1fe.encOid);
      if (_0xb1c53a !== _0x18ee8f.oids["aes128-CBC"] && _0xb1c53a !== _0x18ee8f.oids["aes192-CBC"] && _0xb1c53a !== _0x18ee8f.oids["aes256-CBC"] && _0xb1c53a !== _0x18ee8f.oids["des-EDE3-CBC"] && _0xb1c53a !== _0x18ee8f.oids.desCBC) {
        var _0x414047 = new Error("Cannot read encrypted private key. Unsupported encryption scheme OID.");
        _0x414047.oid = _0xb1c53a;
        _0x414047.supportedOids = ["aes128-CBC", "aes192-CBC", "aes256-CBC", "des-EDE3-CBC", "desCBC"];
        throw _0x414047;
      }
      var _0x37b140 = _0x4df1fe.kdfSalt;
      var _0x18297d = _0x439d84.util.createBuffer(_0x4df1fe.kdfIterationCount);
      _0x18297d = _0x18297d.getInt(_0x18297d.length() << 3);
      var _0x4ec796;
      var _0x5ed9ba;
      switch (_0x18ee8f.oids[_0xb1c53a]) {
        case "aes128-CBC":
          _0x4ec796 = 16;
          _0x5ed9ba = _0x439d84.aes.createDecryptionCipher;
          break;
        case "aes192-CBC":
          _0x4ec796 = 24;
          _0x5ed9ba = _0x439d84.aes.createDecryptionCipher;
          break;
        case "aes256-CBC":
          _0x4ec796 = 32;
          _0x5ed9ba = _0x439d84.aes.createDecryptionCipher;
          break;
        case "des-EDE3-CBC":
          _0x4ec796 = 24;
          _0x5ed9ba = _0x439d84.des.createDecryptionCipher;
          break;
        case "desCBC":
          _0x4ec796 = 8;
          _0x5ed9ba = _0x439d84.des.createDecryptionCipher;
          break;
      }
      var _0x4d7ec4 = _0x326b5a(_0x4df1fe.prfOid);
      var _0xa97a58 = _0x439d84.pkcs5.pbkdf2(_0x4070db, _0x37b140, _0x18297d, _0x4ec796, _0x4d7ec4);
      var _0x1cad92 = _0x4df1fe.encIv;
      var _0x24d9a6 = _0x5ed9ba(_0xa97a58);
      _0x24d9a6.start(_0x1cad92);
      return _0x24d9a6;
    };
    _0x18ee8f.pbe.getCipherForPKCS12PBE = function (_0x56c5e0, _0x23195f, _0x50e752) {
      var _0x20e1ef = {};
      var _0x509ade = [];
      if (!_0x335ceb.validate(_0x23195f, _0x206a2a, _0x20e1ef, _0x509ade)) {
        var _0x1f714d = new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
        _0x1f714d.errors = _0x509ade;
        throw _0x1f714d;
      }
      var _0x284881 = _0x439d84.util.createBuffer(_0x20e1ef.salt);
      var _0x599898 = _0x439d84.util.createBuffer(_0x20e1ef.iterations);
      _0x599898 = _0x599898.getInt(_0x599898.length() << 3);
      var _0x8df0f1;
      var _0xd5b77a;
      var _0x388689;
      switch (_0x56c5e0) {
        case _0x18ee8f.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
          _0x8df0f1 = 24;
          _0xd5b77a = 8;
          _0x388689 = _0x439d84.des.startDecrypting;
          break;
        case _0x18ee8f.oids["pbewithSHAAnd40BitRC2-CBC"]:
          _0x8df0f1 = 5;
          _0xd5b77a = 8;
          _0x388689 = function (_0x8e018c, _0x23cc54) {
            var _0x130d2a = _0x439d84.rc2.createDecryptionCipher(_0x8e018c, 40);
            _0x130d2a.start(_0x23cc54, null);
            return _0x130d2a;
          };
          break;
        default:
          var _0x1f714d = new Error("Cannot read PKCS #12 PBE data block. Unsupported OID.");
          _0x1f714d.oid = _0x56c5e0;
          throw _0x1f714d;
      }
      var _0xb442fd = _0x326b5a(_0x20e1ef.prfOid);
      var _0xc93f44 = _0x18ee8f.pbe.generatePkcs12Key(_0x50e752, _0x284881, 1, _0x599898, _0x8df0f1, _0xb442fd);
      _0xb442fd.start();
      var _0x41ef04 = _0x18ee8f.pbe.generatePkcs12Key(_0x50e752, _0x284881, 2, _0x599898, _0xd5b77a, _0xb442fd);
      return _0x388689(_0xc93f44, _0x41ef04);
    };
    _0x18ee8f.pbe.opensslDeriveBytes = function (_0x5a40f3, _0x1e5d8f, _0x54aec4, _0x2dffef) {
      if (typeof _0x2dffef === "undefined" || _0x2dffef === null) {
        if (!("md5" in _0x439d84.md)) {
          throw new Error("\"md5\" hash algorithm unavailable.");
        }
        _0x2dffef = _0x439d84.md.md5.create();
      }
      if (_0x1e5d8f === null) {
        _0x1e5d8f = "";
      }
      var _0x55e991 = [_0x196a8b(_0x2dffef, _0x5a40f3 + _0x1e5d8f)];
      for (var _0x24e374 = 16, _0x32db58 = 1; _0x24e374 < _0x54aec4; ++_0x32db58, _0x24e374 += 16) {
        _0x55e991.push(_0x196a8b(_0x2dffef, _0x55e991[_0x32db58 - 1] + _0x5a40f3 + _0x1e5d8f));
      }
      return _0x55e991.join("").substr(0, _0x54aec4);
    };
    function _0x196a8b(_0x3ded39, _0x3a5953) {
      return _0x3ded39.start().update(_0x3a5953).digest().getBytes();
    }
    function _0x326b5a(_0x37ff1d) {
      var _0x1b949b;
      if (!_0x37ff1d) {
        _0x1b949b = "hmacWithSHA1";
      } else {
        _0x1b949b = _0x18ee8f.oids[_0x335ceb.derToOid(_0x37ff1d)];
        if (!_0x1b949b) {
          var _0x395326 = new Error("Unsupported PRF OID.");
          _0x395326.oid = _0x37ff1d;
          _0x395326.supported = ["hmacWithSHA1", "hmacWithSHA224", "hmacWithSHA256", "hmacWithSHA384", "hmacWithSHA512"];
          throw _0x395326;
        }
      }
      return _0x35a62b(_0x1b949b);
    }
    function _0x35a62b(_0x41e979) {
      var _0x21e40d = _0x439d84.md;
      switch (_0x41e979) {
        case "hmacWithSHA224":
          _0x21e40d = _0x439d84.md.sha512;
        case "hmacWithSHA1":
        case "hmacWithSHA256":
        case "hmacWithSHA384":
        case "hmacWithSHA512":
          _0x41e979 = _0x41e979.substr(8).toLowerCase();
          break;
        default:
          var _0x20cc49 = new Error("Unsupported PRF algorithm.");
          _0x20cc49.algorithm = _0x41e979;
          _0x20cc49.supported = ["hmacWithSHA1", "hmacWithSHA224", "hmacWithSHA256", "hmacWithSHA384", "hmacWithSHA512"];
          throw _0x20cc49;
      }
      if (!_0x21e40d || !(_0x41e979 in _0x21e40d)) {
        throw new Error("Unknown hash algorithm: " + _0x41e979);
      }
      return _0x21e40d[_0x41e979].create();
    }
    function _0x53fbdd(_0x44e311, _0x598129, _0x321262, _0x44c207) {
      var _0x4b23a4 = _0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.SEQUENCE, true, [_0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.OCTETSTRING, false, _0x44e311), _0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.INTEGER, false, _0x598129.getBytes())]);
      if (_0x44c207 !== "hmacWithSHA1") {
        _0x4b23a4.value.push(_0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.INTEGER, false, _0x439d84.util.hexToBytes(_0x321262.toString(16))), _0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.SEQUENCE, true, [_0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.OID, false, _0x335ceb.oidToDer(_0x18ee8f.oids[_0x44c207]).getBytes()), _0x335ceb.create(_0x335ceb.Class.UNIVERSAL, _0x335ceb.Type.NULL, false, "")]));
      }
      return _0x4b23a4;
    }
  }
});
var require_pkcs7asn1 = __commonJS({
  "node_modules/node-forge/lib/pkcs7asn1.js"(_0x367a90, _0x3b807d) {
    var _0x4fb58f = require_forge();
    require_asn1();
    require_util();
    var _0x1e2c19 = _0x4fb58f.asn1;
    var _0x5e892e = _0x3b807d.exports = _0x4fb58f.pkcs7asn1 = _0x4fb58f.pkcs7asn1 || {};
    _0x4fb58f.pkcs7 = _0x4fb58f.pkcs7 || {};
    _0x4fb58f.pkcs7.asn1 = _0x5e892e;
    var _0x5a3eb0 = {
      name: "ContentInfo",
      tagClass: _0x1e2c19.Class.UNIVERSAL,
      type: _0x1e2c19.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "ContentInfo.ContentType",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.OID,
        constructed: false,
        capture: "contentType"
      }, {
        name: "ContentInfo.content",
        tagClass: _0x1e2c19.Class.CONTEXT_SPECIFIC,
        type: 0,
        constructed: true,
        optional: true,
        captureAsn1: "content"
      }]
    };
    _0x5e892e.contentInfoValidator = _0x5a3eb0;
    var _0x22fce3 = {
      name: "EncryptedContentInfo",
      tagClass: _0x1e2c19.Class.UNIVERSAL,
      type: _0x1e2c19.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "EncryptedContentInfo.contentType",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.OID,
        constructed: false,
        capture: "contentType"
      }, {
        name: "EncryptedContentInfo.contentEncryptionAlgorithm",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",
          tagClass: _0x1e2c19.Class.UNIVERSAL,
          type: _0x1e2c19.Type.OID,
          constructed: false,
          capture: "encAlgorithm"
        }, {
          name: "EncryptedContentInfo.contentEncryptionAlgorithm.parameter",
          tagClass: _0x1e2c19.Class.UNIVERSAL,
          captureAsn1: "encParameter"
        }]
      }, {
        name: "EncryptedContentInfo.encryptedContent",
        tagClass: _0x1e2c19.Class.CONTEXT_SPECIFIC,
        type: 0,
        capture: "encryptedContent",
        captureAsn1: "encryptedContentAsn1"
      }]
    };
    _0x5e892e.envelopedDataValidator = {
      name: "EnvelopedData",
      tagClass: _0x1e2c19.Class.UNIVERSAL,
      type: _0x1e2c19.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "EnvelopedData.Version",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.INTEGER,
        constructed: false,
        capture: "version"
      }, {
        name: "EnvelopedData.RecipientInfos",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.SET,
        constructed: true,
        captureAsn1: "recipientInfos"
      }].concat(_0x22fce3)
    };
    _0x5e892e.encryptedDataValidator = {
      name: "EncryptedData",
      tagClass: _0x1e2c19.Class.UNIVERSAL,
      type: _0x1e2c19.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "EncryptedData.Version",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.INTEGER,
        constructed: false,
        capture: "version"
      }].concat(_0x22fce3)
    };
    var _0x2093cc = {
      name: "SignerInfo",
      tagClass: _0x1e2c19.Class.UNIVERSAL,
      type: _0x1e2c19.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "SignerInfo.version",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.INTEGER,
        constructed: false
      }, {
        name: "SignerInfo.issuerAndSerialNumber",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "SignerInfo.issuerAndSerialNumber.issuer",
          tagClass: _0x1e2c19.Class.UNIVERSAL,
          type: _0x1e2c19.Type.SEQUENCE,
          constructed: true,
          captureAsn1: "issuer"
        }, {
          name: "SignerInfo.issuerAndSerialNumber.serialNumber",
          tagClass: _0x1e2c19.Class.UNIVERSAL,
          type: _0x1e2c19.Type.INTEGER,
          constructed: false,
          capture: "serial"
        }]
      }, {
        name: "SignerInfo.digestAlgorithm",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "SignerInfo.digestAlgorithm.algorithm",
          tagClass: _0x1e2c19.Class.UNIVERSAL,
          type: _0x1e2c19.Type.OID,
          constructed: false,
          capture: "digestAlgorithm"
        }, {
          name: "SignerInfo.digestAlgorithm.parameter",
          tagClass: _0x1e2c19.Class.UNIVERSAL,
          constructed: false,
          captureAsn1: "digestParameter",
          optional: true
        }]
      }, {
        name: "SignerInfo.authenticatedAttributes",
        tagClass: _0x1e2c19.Class.CONTEXT_SPECIFIC,
        type: 0,
        constructed: true,
        optional: true,
        capture: "authenticatedAttributes"
      }, {
        name: "SignerInfo.digestEncryptionAlgorithm",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.SEQUENCE,
        constructed: true,
        capture: "signatureAlgorithm"
      }, {
        name: "SignerInfo.encryptedDigest",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.OCTETSTRING,
        constructed: false,
        capture: "signature"
      }, {
        name: "SignerInfo.unauthenticatedAttributes",
        tagClass: _0x1e2c19.Class.CONTEXT_SPECIFIC,
        type: 1,
        constructed: true,
        optional: true,
        capture: "unauthenticatedAttributes"
      }]
    };
    _0x5e892e.signedDataValidator = {
      name: "SignedData",
      tagClass: _0x1e2c19.Class.UNIVERSAL,
      type: _0x1e2c19.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "SignedData.Version",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.INTEGER,
        constructed: false,
        capture: "version"
      }, {
        name: "SignedData.DigestAlgorithms",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.SET,
        constructed: true,
        captureAsn1: "digestAlgorithms"
      }, _0x5a3eb0, {
        name: "SignedData.Certificates",
        tagClass: _0x1e2c19.Class.CONTEXT_SPECIFIC,
        type: 0,
        optional: true,
        captureAsn1: "certificates"
      }, {
        name: "SignedData.CertificateRevocationLists",
        tagClass: _0x1e2c19.Class.CONTEXT_SPECIFIC,
        type: 1,
        optional: true,
        captureAsn1: "crls"
      }, {
        name: "SignedData.SignerInfos",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.SET,
        capture: "signerInfos",
        optional: true,
        value: [_0x2093cc]
      }]
    };
    _0x5e892e.recipientInfoValidator = {
      name: "RecipientInfo",
      tagClass: _0x1e2c19.Class.UNIVERSAL,
      type: _0x1e2c19.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "RecipientInfo.version",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.INTEGER,
        constructed: false,
        capture: "version"
      }, {
        name: "RecipientInfo.issuerAndSerial",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "RecipientInfo.issuerAndSerial.issuer",
          tagClass: _0x1e2c19.Class.UNIVERSAL,
          type: _0x1e2c19.Type.SEQUENCE,
          constructed: true,
          captureAsn1: "issuer"
        }, {
          name: "RecipientInfo.issuerAndSerial.serialNumber",
          tagClass: _0x1e2c19.Class.UNIVERSAL,
          type: _0x1e2c19.Type.INTEGER,
          constructed: false,
          capture: "serial"
        }]
      }, {
        name: "RecipientInfo.keyEncryptionAlgorithm",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "RecipientInfo.keyEncryptionAlgorithm.algorithm",
          tagClass: _0x1e2c19.Class.UNIVERSAL,
          type: _0x1e2c19.Type.OID,
          constructed: false,
          capture: "encAlgorithm"
        }, {
          name: "RecipientInfo.keyEncryptionAlgorithm.parameter",
          tagClass: _0x1e2c19.Class.UNIVERSAL,
          constructed: false,
          captureAsn1: "encParameter",
          optional: true
        }]
      }, {
        name: "RecipientInfo.encryptedKey",
        tagClass: _0x1e2c19.Class.UNIVERSAL,
        type: _0x1e2c19.Type.OCTETSTRING,
        constructed: false,
        capture: "encKey"
      }]
    };
  }
});
var require_mgf1 = __commonJS({
  "node_modules/node-forge/lib/mgf1.js"(_0x5b77df, _0x541f08) {
    var _0x53ef64 = require_forge();
    require_util();
    _0x53ef64.mgf = _0x53ef64.mgf || {};
    var _0x248770 = _0x541f08.exports = _0x53ef64.mgf.mgf1 = _0x53ef64.mgf1 = _0x53ef64.mgf1 || {};
    _0x248770.create = function (_0x296f01) {
      var _0x3964a0 = {
        generate: function (_0x5bf35c, _0x2c21f2) {
          var _0x32572a = new _0x53ef64.util.ByteBuffer();
          var _0x5023ff = Math.ceil(_0x2c21f2 / _0x296f01.digestLength);
          for (var _0x394a34 = 0; _0x394a34 < _0x5023ff; _0x394a34++) {
            var _0x50f289 = new _0x53ef64.util.ByteBuffer();
            _0x50f289.putInt32(_0x394a34);
            _0x296f01.start();
            _0x296f01.update(_0x5bf35c + _0x50f289.getBytes());
            _0x32572a.putBuffer(_0x296f01.digest());
          }
          _0x32572a.truncate(_0x32572a.length() - _0x2c21f2);
          return _0x32572a.getBytes();
        }
      };
      return _0x3964a0;
    };
  }
});
var require_mgf = __commonJS({
  "node_modules/node-forge/lib/mgf.js"(_0x10ba65, _0xfae89b) {
    var _0x317f5a = require_forge();
    require_mgf1();
    _0xfae89b.exports = _0x317f5a.mgf = _0x317f5a.mgf || {};
    _0x317f5a.mgf.mgf1 = _0x317f5a.mgf1;
  }
});
var require_pss = __commonJS({
  "node_modules/node-forge/lib/pss.js"(_0x32c187, _0x3774dd) {
    var _0x5dfbf8 = require_forge();
    require_random();
    require_util();
    var _0x3260b9 = _0x3774dd.exports = _0x5dfbf8.pss = _0x5dfbf8.pss || {};
    _0x3260b9.create = function (_0x43adb6) {
      if (arguments.length === 3) {
        _0x43adb6 = {
          md: arguments[0],
          mgf: arguments[1],
          saltLength: arguments[2]
        };
      }
      var _0x358a65 = _0x43adb6.md;
      var _0x30eab9 = _0x43adb6.mgf;
      var _0x503c48 = _0x358a65.digestLength;
      var _0x24ff67 = _0x43adb6.salt || null;
      if (typeof _0x24ff67 === "string") {
        _0x24ff67 = _0x5dfbf8.util.createBuffer(_0x24ff67);
      }
      var _0x2433b2;
      if ("saltLength" in _0x43adb6) {
        _0x2433b2 = _0x43adb6.saltLength;
      } else if (_0x24ff67 !== null) {
        _0x2433b2 = _0x24ff67.length();
      } else {
        throw new Error("Salt length not specified or specific salt not given.");
      }
      if (_0x24ff67 !== null && _0x24ff67.length() !== _0x2433b2) {
        throw new Error("Given salt length does not match length of given salt.");
      }
      var _0x500d29 = _0x43adb6.prng || _0x5dfbf8.random;
      var _0x55b2d0 = {};
      _0x55b2d0.encode = function (_0x5cd3d1, _0x33361b) {
        var _0xc0d4c0;
        var _0x22b264 = _0x33361b - 1;
        var _0x32f96f = Math.ceil(_0x22b264 / 8);
        var _0x8bf47 = _0x5cd3d1.digest().getBytes();
        if (_0x32f96f < _0x503c48 + _0x2433b2 + 2) {
          throw new Error("Message is too long to encrypt.");
        }
        var _0x2a7a84;
        if (_0x24ff67 === null) {
          _0x2a7a84 = _0x500d29.getBytesSync(_0x2433b2);
        } else {
          _0x2a7a84 = _0x24ff67.bytes();
        }
        var _0x13dc30 = new _0x5dfbf8.util.ByteBuffer();
        _0x13dc30.fillWithByte(0, 8);
        _0x13dc30.putBytes(_0x8bf47);
        _0x13dc30.putBytes(_0x2a7a84);
        _0x358a65.start();
        _0x358a65.update(_0x13dc30.getBytes());
        var _0x3a1e51 = _0x358a65.digest().getBytes();
        var _0x1f462e = new _0x5dfbf8.util.ByteBuffer();
        _0x1f462e.fillWithByte(0, _0x32f96f - _0x2433b2 - _0x503c48 - 2);
        _0x1f462e.putByte(1);
        _0x1f462e.putBytes(_0x2a7a84);
        var _0x223098 = _0x1f462e.getBytes();
        var _0xdc6e18 = _0x32f96f - _0x503c48 - 1;
        var _0x4d76a = _0x30eab9.generate(_0x3a1e51, _0xdc6e18);
        var _0x58606b = "";
        for (_0xc0d4c0 = 0; _0xc0d4c0 < _0xdc6e18; _0xc0d4c0++) {
          _0x58606b += String.fromCharCode(_0x223098.charCodeAt(_0xc0d4c0) ^ _0x4d76a.charCodeAt(_0xc0d4c0));
        }
        var _0x140532 = 65280 >> _0x32f96f * 8 - _0x22b264 & 255;
        _0x58606b = String.fromCharCode(_0x58606b.charCodeAt(0) & ~_0x140532) + _0x58606b.substr(1);
        return _0x58606b + _0x3a1e51 + String.fromCharCode(188);
      };
      _0x55b2d0.verify = function (_0xbf6c40, _0x3a93da, _0x34d7ae) {
        var _0x4da940;
        var _0x240e81 = _0x34d7ae - 1;
        var _0x4a24cb = Math.ceil(_0x240e81 / 8);
        _0x3a93da = _0x3a93da.substr(-_0x4a24cb);
        if (_0x4a24cb < _0x503c48 + _0x2433b2 + 2) {
          throw new Error("Inconsistent parameters to PSS signature verification.");
        }
        if (_0x3a93da.charCodeAt(_0x4a24cb - 1) !== 188) {
          throw new Error("Encoded message does not end in 0xBC.");
        }
        var _0x1ede73 = _0x4a24cb - _0x503c48 - 1;
        var _0xd2aa36 = _0x3a93da.substr(0, _0x1ede73);
        var _0x535533 = _0x3a93da.substr(_0x1ede73, _0x503c48);
        var _0x2cee18 = 65280 >> _0x4a24cb * 8 - _0x240e81 & 255;
        if ((_0xd2aa36.charCodeAt(0) & _0x2cee18) !== 0) {
          throw new Error("Bits beyond keysize not zero as expected.");
        }
        var _0x93e80a = _0x30eab9.generate(_0x535533, _0x1ede73);
        var _0x37ae96 = "";
        for (_0x4da940 = 0; _0x4da940 < _0x1ede73; _0x4da940++) {
          _0x37ae96 += String.fromCharCode(_0xd2aa36.charCodeAt(_0x4da940) ^ _0x93e80a.charCodeAt(_0x4da940));
        }
        _0x37ae96 = String.fromCharCode(_0x37ae96.charCodeAt(0) & ~_0x2cee18) + _0x37ae96.substr(1);
        var _0x32354d = _0x4a24cb - _0x503c48 - _0x2433b2 - 2;
        for (_0x4da940 = 0; _0x4da940 < _0x32354d; _0x4da940++) {
          if (_0x37ae96.charCodeAt(_0x4da940) !== 0) {
            throw new Error("Leftmost octets not zero as expected");
          }
        }
        if (_0x37ae96.charCodeAt(_0x32354d) !== 1) {
          throw new Error("Inconsistent PSS signature, 0x01 marker not found");
        }
        var _0x100169 = _0x37ae96.substr(-_0x2433b2);
        var _0x3ce8e2 = new _0x5dfbf8.util.ByteBuffer();
        _0x3ce8e2.fillWithByte(0, 8);
        _0x3ce8e2.putBytes(_0xbf6c40);
        _0x3ce8e2.putBytes(_0x100169);
        _0x358a65.start();
        _0x358a65.update(_0x3ce8e2.getBytes());
        var _0x52a227 = _0x358a65.digest().getBytes();
        return _0x535533 === _0x52a227;
      };
      return _0x55b2d0;
    };
  }
});
var require_x509 = __commonJS({
  "node_modules/node-forge/lib/x509.js"(_0x47c7f5, _0x39b02e) {
    var _0x3b22bd = require_forge();
    require_aes();
    require_asn1();
    require_des();
    require_md();
    require_mgf();
    require_oids();
    require_pem();
    require_pss();
    require_rsa();
    require_util();
    var _0x443467 = _0x3b22bd.asn1;
    var _0x51d4f5 = _0x39b02e.exports = _0x3b22bd.pki = _0x3b22bd.pki || {};
    var _0x3e371e = _0x51d4f5.oids;
    var _0x4d2380 = {
      CN: _0x3e371e.commonName,
      commonName: "CN",
      C: _0x3e371e.countryName,
      countryName: "C",
      L: _0x3e371e.localityName,
      localityName: "L",
      ST: _0x3e371e.stateOrProvinceName,
      stateOrProvinceName: "ST",
      O: _0x3e371e.organizationName,
      organizationName: "O",
      OU: _0x3e371e.organizationalUnitName,
      organizationalUnitName: "OU",
      E: _0x3e371e.emailAddress,
      emailAddress: "E"
    };
    var _0x399a1f = _0x3b22bd.pki.rsa.publicKeyValidator;
    var _0x10c2bc = {
      name: "Certificate",
      tagClass: _0x443467.Class.UNIVERSAL,
      type: _0x443467.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "Certificate.TBSCertificate",
        tagClass: _0x443467.Class.UNIVERSAL,
        type: _0x443467.Type.SEQUENCE,
        constructed: true,
        captureAsn1: "tbsCertificate",
        value: [{
          name: "Certificate.TBSCertificate.version",
          tagClass: _0x443467.Class.CONTEXT_SPECIFIC,
          type: 0,
          constructed: true,
          optional: true,
          value: [{
            name: "Certificate.TBSCertificate.version.integer",
            tagClass: _0x443467.Class.UNIVERSAL,
            type: _0x443467.Type.INTEGER,
            constructed: false,
            capture: "certVersion"
          }]
        }, {
          name: "Certificate.TBSCertificate.serialNumber",
          tagClass: _0x443467.Class.UNIVERSAL,
          type: _0x443467.Type.INTEGER,
          constructed: false,
          capture: "certSerialNumber"
        }, {
          name: "Certificate.TBSCertificate.signature",
          tagClass: _0x443467.Class.UNIVERSAL,
          type: _0x443467.Type.SEQUENCE,
          constructed: true,
          value: [{
            name: "Certificate.TBSCertificate.signature.algorithm",
            tagClass: _0x443467.Class.UNIVERSAL,
            type: _0x443467.Type.OID,
            constructed: false,
            capture: "certinfoSignatureOid"
          }, {
            name: "Certificate.TBSCertificate.signature.parameters",
            tagClass: _0x443467.Class.UNIVERSAL,
            optional: true,
            captureAsn1: "certinfoSignatureParams"
          }]
        }, {
          name: "Certificate.TBSCertificate.issuer",
          tagClass: _0x443467.Class.UNIVERSAL,
          type: _0x443467.Type.SEQUENCE,
          constructed: true,
          captureAsn1: "certIssuer"
        }, {
          name: "Certificate.TBSCertificate.validity",
          tagClass: _0x443467.Class.UNIVERSAL,
          type: _0x443467.Type.SEQUENCE,
          constructed: true,
          value: [{
            name: "Certificate.TBSCertificate.validity.notBefore (utc)",
            tagClass: _0x443467.Class.UNIVERSAL,
            type: _0x443467.Type.UTCTIME,
            constructed: false,
            optional: true,
            capture: "certValidity1UTCTime"
          }, {
            name: "Certificate.TBSCertificate.validity.notBefore (generalized)",
            tagClass: _0x443467.Class.UNIVERSAL,
            type: _0x443467.Type.GENERALIZEDTIME,
            constructed: false,
            optional: true,
            capture: "certValidity2GeneralizedTime"
          }, {
            name: "Certificate.TBSCertificate.validity.notAfter (utc)",
            tagClass: _0x443467.Class.UNIVERSAL,
            type: _0x443467.Type.UTCTIME,
            constructed: false,
            optional: true,
            capture: "certValidity3UTCTime"
          }, {
            name: "Certificate.TBSCertificate.validity.notAfter (generalized)",
            tagClass: _0x443467.Class.UNIVERSAL,
            type: _0x443467.Type.GENERALIZEDTIME,
            constructed: false,
            optional: true,
            capture: "certValidity4GeneralizedTime"
          }]
        }, {
          name: "Certificate.TBSCertificate.subject",
          tagClass: _0x443467.Class.UNIVERSAL,
          type: _0x443467.Type.SEQUENCE,
          constructed: true,
          captureAsn1: "certSubject"
        }, _0x399a1f, {
          name: "Certificate.TBSCertificate.issuerUniqueID",
          tagClass: _0x443467.Class.CONTEXT_SPECIFIC,
          type: 1,
          constructed: true,
          optional: true,
          value: [{
            name: "Certificate.TBSCertificate.issuerUniqueID.id",
            tagClass: _0x443467.Class.UNIVERSAL,
            type: _0x443467.Type.BITSTRING,
            constructed: false,
            captureBitStringValue: "certIssuerUniqueId"
          }]
        }, {
          name: "Certificate.TBSCertificate.subjectUniqueID",
          tagClass: _0x443467.Class.CONTEXT_SPECIFIC,
          type: 2,
          constructed: true,
          optional: true,
          value: [{
            name: "Certificate.TBSCertificate.subjectUniqueID.id",
            tagClass: _0x443467.Class.UNIVERSAL,
            type: _0x443467.Type.BITSTRING,
            constructed: false,
            captureBitStringValue: "certSubjectUniqueId"
          }]
        }, {
          name: "Certificate.TBSCertificate.extensions",
          tagClass: _0x443467.Class.CONTEXT_SPECIFIC,
          type: 3,
          constructed: true,
          captureAsn1: "certExtensions",
          optional: true
        }]
      }, {
        name: "Certificate.signatureAlgorithm",
        tagClass: _0x443467.Class.UNIVERSAL,
        type: _0x443467.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "Certificate.signatureAlgorithm.algorithm",
          tagClass: _0x443467.Class.UNIVERSAL,
          type: _0x443467.Type.OID,
          constructed: false,
          capture: "certSignatureOid"
        }, {
          name: "Certificate.TBSCertificate.signature.parameters",
          tagClass: _0x443467.Class.UNIVERSAL,
          optional: true,
          captureAsn1: "certSignatureParams"
        }]
      }, {
        name: "Certificate.signatureValue",
        tagClass: _0x443467.Class.UNIVERSAL,
        type: _0x443467.Type.BITSTRING,
        constructed: false,
        captureBitStringValue: "certSignature"
      }]
    };
    var _0x29d34b = {
      name: "rsapss",
      tagClass: _0x443467.Class.UNIVERSAL,
      type: _0x443467.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "rsapss.hashAlgorithm",
        tagClass: _0x443467.Class.CONTEXT_SPECIFIC,
        type: 0,
        constructed: true,
        value: [{
          name: "rsapss.hashAlgorithm.AlgorithmIdentifier",
          tagClass: _0x443467.Class.UNIVERSAL,
          type: _0x443467.Class.SEQUENCE,
          constructed: true,
          optional: true,
          value: [{
            name: "rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",
            tagClass: _0x443467.Class.UNIVERSAL,
            type: _0x443467.Type.OID,
            constructed: false,
            capture: "hashOid"
          }]
        }]
      }, {
        name: "rsapss.maskGenAlgorithm",
        tagClass: _0x443467.Class.CONTEXT_SPECIFIC,
        type: 1,
        constructed: true,
        value: [{
          name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier",
          tagClass: _0x443467.Class.UNIVERSAL,
          type: _0x443467.Class.SEQUENCE,
          constructed: true,
          optional: true,
          value: [{
            name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",
            tagClass: _0x443467.Class.UNIVERSAL,
            type: _0x443467.Type.OID,
            constructed: false,
            capture: "maskGenOid"
          }, {
            name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",
            tagClass: _0x443467.Class.UNIVERSAL,
            type: _0x443467.Type.SEQUENCE,
            constructed: true,
            value: [{
              name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",
              tagClass: _0x443467.Class.UNIVERSAL,
              type: _0x443467.Type.OID,
              constructed: false,
              capture: "maskGenHashOid"
            }]
          }]
        }]
      }, {
        name: "rsapss.saltLength",
        tagClass: _0x443467.Class.CONTEXT_SPECIFIC,
        type: 2,
        optional: true,
        value: [{
          name: "rsapss.saltLength.saltLength",
          tagClass: _0x443467.Class.UNIVERSAL,
          type: _0x443467.Class.INTEGER,
          constructed: false,
          capture: "saltLength"
        }]
      }, {
        name: "rsapss.trailerField",
        tagClass: _0x443467.Class.CONTEXT_SPECIFIC,
        type: 3,
        optional: true,
        value: [{
          name: "rsapss.trailer.trailer",
          tagClass: _0x443467.Class.UNIVERSAL,
          type: _0x443467.Class.INTEGER,
          constructed: false,
          capture: "trailer"
        }]
      }]
    };
    var _0x3953ed = {
      name: "CertificationRequestInfo",
      tagClass: _0x443467.Class.UNIVERSAL,
      type: _0x443467.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "certificationRequestInfo",
      value: [{
        name: "CertificationRequestInfo.integer",
        tagClass: _0x443467.Class.UNIVERSAL,
        type: _0x443467.Type.INTEGER,
        constructed: false,
        capture: "certificationRequestInfoVersion"
      }, {
        name: "CertificationRequestInfo.subject",
        tagClass: _0x443467.Class.UNIVERSAL,
        type: _0x443467.Type.SEQUENCE,
        constructed: true,
        captureAsn1: "certificationRequestInfoSubject"
      }, _0x399a1f, {
        name: "CertificationRequestInfo.attributes",
        tagClass: _0x443467.Class.CONTEXT_SPECIFIC,
        type: 0,
        constructed: true,
        optional: true,
        capture: "certificationRequestInfoAttributes",
        value: [{
          name: "CertificationRequestInfo.attributes",
          tagClass: _0x443467.Class.UNIVERSAL,
          type: _0x443467.Type.SEQUENCE,
          constructed: true,
          value: [{
            name: "CertificationRequestInfo.attributes.type",
            tagClass: _0x443467.Class.UNIVERSAL,
            type: _0x443467.Type.OID,
            constructed: false
          }, {
            name: "CertificationRequestInfo.attributes.value",
            tagClass: _0x443467.Class.UNIVERSAL,
            type: _0x443467.Type.SET,
            constructed: true
          }]
        }]
      }]
    };
    var _0x47c114 = {
      name: "CertificationRequest",
      tagClass: _0x443467.Class.UNIVERSAL,
      type: _0x443467.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "csr",
      value: [_0x3953ed, {
        name: "CertificationRequest.signatureAlgorithm",
        tagClass: _0x443467.Class.UNIVERSAL,
        type: _0x443467.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "CertificationRequest.signatureAlgorithm.algorithm",
          tagClass: _0x443467.Class.UNIVERSAL,
          type: _0x443467.Type.OID,
          constructed: false,
          capture: "csrSignatureOid"
        }, {
          name: "CertificationRequest.signatureAlgorithm.parameters",
          tagClass: _0x443467.Class.UNIVERSAL,
          optional: true,
          captureAsn1: "csrSignatureParams"
        }]
      }, {
        name: "CertificationRequest.signature",
        tagClass: _0x443467.Class.UNIVERSAL,
        type: _0x443467.Type.BITSTRING,
        constructed: false,
        captureBitStringValue: "csrSignature"
      }]
    };
    _0x51d4f5.RDNAttributesAsArray = function (_0x3bdf9d, _0x32f8c6) {
      var _0x1a9178 = [];
      var _0x321a42;
      var _0x40bd42;
      var _0x32b53b;
      for (var _0x5dee40 = 0; _0x5dee40 < _0x3bdf9d.value.length; ++_0x5dee40) {
        _0x321a42 = _0x3bdf9d.value[_0x5dee40];
        for (var _0x2638ba = 0; _0x2638ba < _0x321a42.value.length; ++_0x2638ba) {
          _0x32b53b = {};
          _0x40bd42 = _0x321a42.value[_0x2638ba];
          _0x32b53b.type = _0x443467.derToOid(_0x40bd42.value[0].value);
          _0x32b53b.value = _0x40bd42.value[1].value;
          _0x32b53b.valueTagClass = _0x40bd42.value[1].type;
          if (_0x32b53b.type in _0x3e371e) {
            _0x32b53b.name = _0x3e371e[_0x32b53b.type];
            if (_0x32b53b.name in _0x4d2380) {
              _0x32b53b.shortName = _0x4d2380[_0x32b53b.name];
            }
          }
          if (_0x32f8c6) {
            _0x32f8c6.update(_0x32b53b.type);
            _0x32f8c6.update(_0x32b53b.value);
          }
          _0x1a9178.push(_0x32b53b);
        }
      }
      return _0x1a9178;
    };
    _0x51d4f5.CRIAttributesAsArray = function (_0x5a43d4) {
      var _0x5e9f4e = [];
      for (var _0x120d78 = 0; _0x120d78 < _0x5a43d4.length; ++_0x120d78) {
        var _0x287c2a = _0x5a43d4[_0x120d78];
        var _0xbafa5f = _0x443467.derToOid(_0x287c2a.value[0].value);
        var _0x40346e = _0x287c2a.value[1].value;
        for (var _0x37d21b = 0; _0x37d21b < _0x40346e.length; ++_0x37d21b) {
          var _0x2c905d = {
            type: _0xbafa5f,
            value: _0x40346e[_0x37d21b].value,
            valueTagClass: _0x40346e[_0x37d21b].type
          };
          if (_0x2c905d.type in _0x3e371e) {
            _0x2c905d.name = _0x3e371e[_0x2c905d.type];
            if (_0x2c905d.name in _0x4d2380) {
              _0x2c905d.shortName = _0x4d2380[_0x2c905d.name];
            }
          }
          if (_0x2c905d.type === _0x3e371e.extensionRequest) {
            _0x2c905d.extensions = [];
            for (var _0x5ca73c = 0; _0x5ca73c < _0x2c905d.value.length; ++_0x5ca73c) {
              _0x2c905d.extensions.push(_0x51d4f5.certificateExtensionFromAsn1(_0x2c905d.value[_0x5ca73c]));
            }
          }
          _0x5e9f4e.push(_0x2c905d);
        }
      }
      return _0x5e9f4e;
    };
    function _0x3c7c7e(_0x303092, _0x53a2b4) {
      if (typeof _0x53a2b4 === "string") {
        _0x53a2b4 = {
          shortName: _0x53a2b4
        };
      }
      var _0x21fb04 = null;
      var _0x3e2926;
      for (var _0x34e809 = 0; _0x21fb04 === null && _0x34e809 < _0x303092.attributes.length; ++_0x34e809) {
        _0x3e2926 = _0x303092.attributes[_0x34e809];
        if (_0x53a2b4.type && _0x53a2b4.type === _0x3e2926.type) {
          _0x21fb04 = _0x3e2926;
        } else if (_0x53a2b4.name && _0x53a2b4.name === _0x3e2926.name) {
          _0x21fb04 = _0x3e2926;
        } else if (_0x53a2b4.shortName && _0x53a2b4.shortName === _0x3e2926.shortName) {
          _0x21fb04 = _0x3e2926;
        }
      }
      return _0x21fb04;
    }
    function _0x1375c6(_0x14dc6b, _0x20bd78, _0x2f125b) {
      var _0x8be529 = {};
      if (_0x14dc6b !== _0x3e371e["RSASSA-PSS"]) {
        return _0x8be529;
      }
      if (_0x2f125b) {
        _0x8be529 = {
          hash: {
            algorithmOid: _0x3e371e.sha1
          },
          mgf: {
            algorithmOid: _0x3e371e.mgf1,
            hash: {
              algorithmOid: _0x3e371e.sha1
            }
          },
          saltLength: 20
        };
      }
      var _0x1d94fb = {};
      var _0x4f7dd7 = [];
      if (!_0x443467.validate(_0x20bd78, _0x29d34b, _0x1d94fb, _0x4f7dd7)) {
        var _0xa2d666 = new Error("Cannot read RSASSA-PSS parameter block.");
        _0xa2d666.errors = _0x4f7dd7;
        throw _0xa2d666;
      }
      if (_0x1d94fb.hashOid !== undefined) {
        _0x8be529.hash = _0x8be529.hash || {};
        _0x8be529.hash.algorithmOid = _0x443467.derToOid(_0x1d94fb.hashOid);
      }
      if (_0x1d94fb.maskGenOid !== undefined) {
        _0x8be529.mgf = _0x8be529.mgf || {};
        _0x8be529.mgf.algorithmOid = _0x443467.derToOid(_0x1d94fb.maskGenOid);
        _0x8be529.mgf.hash = _0x8be529.mgf.hash || {};
        _0x8be529.mgf.hash.algorithmOid = _0x443467.derToOid(_0x1d94fb.maskGenHashOid);
      }
      if (_0x1d94fb.saltLength !== undefined) {
        _0x8be529.saltLength = _0x1d94fb.saltLength.charCodeAt(0);
      }
      return _0x8be529;
    }
    function _0x512c0c(_0x229037) {
      switch (_0x3e371e[_0x229037.signatureOid]) {
        case "sha1WithRSAEncryption":
        case "sha1WithRSASignature":
          return _0x3b22bd.md.sha1.create();
        case "md5WithRSAEncryption":
          return _0x3b22bd.md.md5.create();
        case "sha256WithRSAEncryption":
          return _0x3b22bd.md.sha256.create();
        case "sha384WithRSAEncryption":
          return _0x3b22bd.md.sha384.create();
        case "sha512WithRSAEncryption":
          return _0x3b22bd.md.sha512.create();
        case "RSASSA-PSS":
          return _0x3b22bd.md.sha256.create();
        default:
          var _0x123639 = new Error("Could not compute " + _0x229037.type + " digest. Unknown signature OID.");
          _0x123639.signatureOid = _0x229037.signatureOid;
          throw _0x123639;
      }
    }
    function _0x344bd5(_0x4f2096) {
      var _0x20e13a = _0x4f2096.certificate;
      var _0x51bddf;
      switch (_0x20e13a.signatureOid) {
        case _0x3e371e.sha1WithRSAEncryption:
        case _0x3e371e.sha1WithRSASignature:
          break;
        case _0x3e371e["RSASSA-PSS"]:
          var _0x5ceb2d;
          var _0x2a8c03;
          _0x5ceb2d = _0x3e371e[_0x20e13a.signatureParameters.mgf.hash.algorithmOid];
          if (_0x5ceb2d === undefined || _0x3b22bd.md[_0x5ceb2d] === undefined) {
            var _0x12fd9a = new Error("Unsupported MGF hash function.");
            _0x12fd9a.oid = _0x20e13a.signatureParameters.mgf.hash.algorithmOid;
            _0x12fd9a.name = _0x5ceb2d;
            throw _0x12fd9a;
          }
          _0x2a8c03 = _0x3e371e[_0x20e13a.signatureParameters.mgf.algorithmOid];
          if (_0x2a8c03 === undefined || _0x3b22bd.mgf[_0x2a8c03] === undefined) {
            var _0x12fd9a = new Error("Unsupported MGF function.");
            _0x12fd9a.oid = _0x20e13a.signatureParameters.mgf.algorithmOid;
            _0x12fd9a.name = _0x2a8c03;
            throw _0x12fd9a;
          }
          _0x2a8c03 = _0x3b22bd.mgf[_0x2a8c03].create(_0x3b22bd.md[_0x5ceb2d].create());
          _0x5ceb2d = _0x3e371e[_0x20e13a.signatureParameters.hash.algorithmOid];
          if (_0x5ceb2d === undefined || _0x3b22bd.md[_0x5ceb2d] === undefined) {
            var _0x12fd9a = new Error("Unsupported RSASSA-PSS hash function.");
            _0x12fd9a.oid = _0x20e13a.signatureParameters.hash.algorithmOid;
            _0x12fd9a.name = _0x5ceb2d;
            throw _0x12fd9a;
          }
          _0x51bddf = _0x3b22bd.pss.create(_0x3b22bd.md[_0x5ceb2d].create(), _0x2a8c03, _0x20e13a.signatureParameters.saltLength);
          break;
      }
      return _0x20e13a.publicKey.verify(_0x4f2096.md.digest().getBytes(), _0x4f2096.signature, _0x51bddf);
    }
    _0x51d4f5.certificateFromPem = function (_0x331902, _0x4832ae, _0x509179) {
      var _0xc7b0c1 = _0x3b22bd.pem.decode(_0x331902)[0];
      if (_0xc7b0c1.type !== "CERTIFICATE" && _0xc7b0c1.type !== "X509 CERTIFICATE" && _0xc7b0c1.type !== "TRUSTED CERTIFICATE") {
        var _0x3ad660 = new Error("Could not convert certificate from PEM; PEM header type is not \"CERTIFICATE\", \"X509 CERTIFICATE\", or \"TRUSTED CERTIFICATE\".");
        _0x3ad660.headerType = _0xc7b0c1.type;
        throw _0x3ad660;
      }
      if (_0xc7b0c1.procType && _0xc7b0c1.procType.type === "ENCRYPTED") {
        throw new Error("Could not convert certificate from PEM; PEM is encrypted.");
      }
      var _0x13efaa = _0x443467.fromDer(_0xc7b0c1.body, _0x509179);
      return _0x51d4f5.certificateFromAsn1(_0x13efaa, _0x4832ae);
    };
    _0x51d4f5.certificateToPem = function (_0x5bc511, _0x2b1515) {
      var _0x45447b = {
        type: "CERTIFICATE",
        body: _0x443467.toDer(_0x51d4f5.certificateToAsn1(_0x5bc511)).getBytes()
      };
      return _0x3b22bd.pem.encode(_0x45447b, {
        maxline: _0x2b1515
      });
    };
    _0x51d4f5.publicKeyFromPem = function (_0x3ed44e) {
      var _0x14082a = _0x3b22bd.pem.decode(_0x3ed44e)[0];
      if (_0x14082a.type !== "PUBLIC KEY" && _0x14082a.type !== "RSA PUBLIC KEY") {
        var _0x5cf22a = new Error("Could not convert public key from PEM; PEM header type is not \"PUBLIC KEY\" or \"RSA PUBLIC KEY\".");
        _0x5cf22a.headerType = _0x14082a.type;
        throw _0x5cf22a;
      }
      if (_0x14082a.procType && _0x14082a.procType.type === "ENCRYPTED") {
        throw new Error("Could not convert public key from PEM; PEM is encrypted.");
      }
      var _0x1be26a = _0x443467.fromDer(_0x14082a.body);
      return _0x51d4f5.publicKeyFromAsn1(_0x1be26a);
    };
    _0x51d4f5.publicKeyToPem = function (_0x2273af, _0x443f69) {
      var _0x42af8b = {
        type: "PUBLIC KEY",
        body: _0x443467.toDer(_0x51d4f5.publicKeyToAsn1(_0x2273af)).getBytes()
      };
      return _0x3b22bd.pem.encode(_0x42af8b, {
        maxline: _0x443f69
      });
    };
    _0x51d4f5.publicKeyToRSAPublicKeyPem = function (_0x2266c6, _0x28207f) {
      var _0x3d2074 = {
        type: "RSA PUBLIC KEY",
        body: _0x443467.toDer(_0x51d4f5.publicKeyToRSAPublicKey(_0x2266c6)).getBytes()
      };
      return _0x3b22bd.pem.encode(_0x3d2074, {
        maxline: _0x28207f
      });
    };
    _0x51d4f5.getPublicKeyFingerprint = function (_0x371898, _0x5e4c89) {
      _0x5e4c89 = _0x5e4c89 || {};
      var _0x2915c7 = _0x5e4c89.md || _0x3b22bd.md.sha1.create();
      var _0x5df192 = _0x5e4c89.type || "RSAPublicKey";
      var _0x2e6f94;
      switch (_0x5df192) {
        case "RSAPublicKey":
          _0x2e6f94 = _0x443467.toDer(_0x51d4f5.publicKeyToRSAPublicKey(_0x371898)).getBytes();
          break;
        case "SubjectPublicKeyInfo":
          _0x2e6f94 = _0x443467.toDer(_0x51d4f5.publicKeyToAsn1(_0x371898)).getBytes();
          break;
        default:
          throw new Error("Unknown fingerprint type \"" + _0x5e4c89.type + "\".");
      }
      _0x2915c7.start();
      _0x2915c7.update(_0x2e6f94);
      var _0x5f5818 = _0x2915c7.digest();
      if (_0x5e4c89.encoding === "hex") {
        var _0x5ef9fa = _0x5f5818.toHex();
        if (_0x5e4c89.delimiter) {
          return _0x5ef9fa.match(/.{2}/g).join(_0x5e4c89.delimiter);
        }
        return _0x5ef9fa;
      } else if (_0x5e4c89.encoding === "binary") {
        return _0x5f5818.getBytes();
      } else if (_0x5e4c89.encoding) {
        throw new Error("Unknown encoding \"" + _0x5e4c89.encoding + "\".");
      }
      return _0x5f5818;
    };
    _0x51d4f5.certificationRequestFromPem = function (_0xc8e0f0, _0x2709a3, _0x3f54d4) {
      var _0x3099e7 = _0x3b22bd.pem.decode(_0xc8e0f0)[0];
      if (_0x3099e7.type !== "CERTIFICATE REQUEST") {
        var _0x29ddcc = new Error("Could not convert certification request from PEM; PEM header type is not \"CERTIFICATE REQUEST\".");
        _0x29ddcc.headerType = _0x3099e7.type;
        throw _0x29ddcc;
      }
      if (_0x3099e7.procType && _0x3099e7.procType.type === "ENCRYPTED") {
        throw new Error("Could not convert certification request from PEM; PEM is encrypted.");
      }
      var _0x2d28cc = _0x443467.fromDer(_0x3099e7.body, _0x3f54d4);
      return _0x51d4f5.certificationRequestFromAsn1(_0x2d28cc, _0x2709a3);
    };
    _0x51d4f5.certificationRequestToPem = function (_0x13c02b, _0x549b70) {
      var _0x1d585c = {
        type: "CERTIFICATE REQUEST",
        body: _0x443467.toDer(_0x51d4f5.certificationRequestToAsn1(_0x13c02b)).getBytes()
      };
      return _0x3b22bd.pem.encode(_0x1d585c, {
        maxline: _0x549b70
      });
    };
    _0x51d4f5.createCertificate = function () {
      var _0x265cb3 = {
        version: 2,
        serialNumber: "00",
        signatureOid: null,
        signature: null,
        siginfo: {}
      };
      _0x265cb3.siginfo.algorithmOid = null;
      _0x265cb3.validity = {};
      _0x265cb3.validity.notBefore = new Date();
      _0x265cb3.validity.notAfter = new Date();
      _0x265cb3.issuer = {};
      _0x265cb3.issuer.getField = function (_0x4df627) {
        return _0x3c7c7e(_0x265cb3.issuer, _0x4df627);
      };
      _0x265cb3.issuer.addField = function (_0x5adc5b) {
        _0x543cc1([_0x5adc5b]);
        _0x265cb3.issuer.attributes.push(_0x5adc5b);
      };
      _0x265cb3.issuer.attributes = [];
      _0x265cb3.issuer.hash = null;
      _0x265cb3.subject = {};
      _0x265cb3.subject.getField = function (_0x1999d7) {
        return _0x3c7c7e(_0x265cb3.subject, _0x1999d7);
      };
      _0x265cb3.subject.addField = function (_0x51f64c) {
        _0x543cc1([_0x51f64c]);
        _0x265cb3.subject.attributes.push(_0x51f64c);
      };
      _0x265cb3.subject.attributes = [];
      _0x265cb3.subject.hash = null;
      _0x265cb3.extensions = [];
      _0x265cb3.publicKey = null;
      _0x265cb3.md = null;
      _0x265cb3.setSubject = function (_0x4b24e0, _0x222087) {
        _0x543cc1(_0x4b24e0);
        _0x265cb3.subject.attributes = _0x4b24e0;
        delete _0x265cb3.subject.uniqueId;
        if (_0x222087) {
          _0x265cb3.subject.uniqueId = _0x222087;
        }
        _0x265cb3.subject.hash = null;
      };
      _0x265cb3.setIssuer = function (_0x373e8e, _0x518204) {
        _0x543cc1(_0x373e8e);
        _0x265cb3.issuer.attributes = _0x373e8e;
        delete _0x265cb3.issuer.uniqueId;
        if (_0x518204) {
          _0x265cb3.issuer.uniqueId = _0x518204;
        }
        _0x265cb3.issuer.hash = null;
      };
      _0x265cb3.setExtensions = function (_0x32edae) {
        for (var _0x4179b7 = 0; _0x4179b7 < _0x32edae.length; ++_0x4179b7) {
          _0x55b75e(_0x32edae[_0x4179b7], {
            cert: _0x265cb3
          });
        }
        _0x265cb3.extensions = _0x32edae;
      };
      _0x265cb3.getExtension = function (_0x56f1af) {
        if (typeof _0x56f1af === "string") {
          _0x56f1af = {
            name: _0x56f1af
          };
        }
        var _0x3a109b = null;
        var _0x40620a;
        for (var _0x33ea02 = 0; _0x3a109b === null && _0x33ea02 < _0x265cb3.extensions.length; ++_0x33ea02) {
          _0x40620a = _0x265cb3.extensions[_0x33ea02];
          if (_0x56f1af.id && _0x40620a.id === _0x56f1af.id) {
            _0x3a109b = _0x40620a;
          } else if (_0x56f1af.name && _0x40620a.name === _0x56f1af.name) {
            _0x3a109b = _0x40620a;
          }
        }
        return _0x3a109b;
      };
      _0x265cb3.sign = function (_0x445993, _0x6f0405) {
        _0x265cb3.md = _0x6f0405 || _0x3b22bd.md.sha1.create();
        var _0x12f6e3 = _0x3e371e[_0x265cb3.md.algorithm + "WithRSAEncryption"];
        if (!_0x12f6e3) {
          var _0x68c06f = new Error("Could not compute certificate digest. Unknown message digest algorithm OID.");
          _0x68c06f.algorithm = _0x265cb3.md.algorithm;
          throw _0x68c06f;
        }
        _0x265cb3.signatureOid = _0x265cb3.siginfo.algorithmOid = _0x12f6e3;
        _0x265cb3.tbsCertificate = _0x51d4f5.getTBSCertificate(_0x265cb3);
        var _0x314328 = _0x443467.toDer(_0x265cb3.tbsCertificate);
        _0x265cb3.md.update(_0x314328.getBytes());
        _0x265cb3.signature = _0x445993.sign(_0x265cb3.md);
      };
      _0x265cb3.verify = function (_0x562d88) {
        var _0x305984 = false;
        if (!_0x265cb3.issued(_0x562d88)) {
          var _0x220b7a = _0x562d88.issuer;
          var _0x48470a = _0x265cb3.subject;
          var _0x3dede2 = new Error("The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.");
          _0x3dede2.expectedIssuer = _0x48470a.attributes;
          _0x3dede2.actualIssuer = _0x220b7a.attributes;
          throw _0x3dede2;
        }
        var _0x4f5ca7 = _0x562d88.md;
        if (_0x4f5ca7 === null) {
          _0x4f5ca7 = _0x512c0c({
            signatureOid: _0x562d88.signatureOid,
            type: "certificate"
          });
          var _0x3ffc25 = _0x562d88.tbsCertificate || _0x51d4f5.getTBSCertificate(_0x562d88);
          var _0x5ad897 = _0x443467.toDer(_0x3ffc25);
          _0x4f5ca7.update(_0x5ad897.getBytes());
        }
        if (_0x4f5ca7 !== null) {
          _0x305984 = _0x344bd5({
            certificate: _0x265cb3,
            md: _0x4f5ca7,
            signature: _0x562d88.signature
          });
        }
        return _0x305984;
      };
      _0x265cb3.isIssuer = function (_0x2b3be5) {
        var _0x450cfc = false;
        var _0x5ec4bc = _0x265cb3.issuer;
        var _0x3bae00 = _0x2b3be5.subject;
        if (_0x5ec4bc.hash && _0x3bae00.hash) {
          _0x450cfc = _0x5ec4bc.hash === _0x3bae00.hash;
        } else if (_0x5ec4bc.attributes.length === _0x3bae00.attributes.length) {
          _0x450cfc = true;
          var _0x16d085;
          var _0x7b1028;
          for (var _0x403477 = 0; _0x450cfc && _0x403477 < _0x5ec4bc.attributes.length; ++_0x403477) {
            _0x16d085 = _0x5ec4bc.attributes[_0x403477];
            _0x7b1028 = _0x3bae00.attributes[_0x403477];
            if (_0x16d085.type !== _0x7b1028.type || _0x16d085.value !== _0x7b1028.value) {
              _0x450cfc = false;
            }
          }
        }
        return _0x450cfc;
      };
      _0x265cb3.issued = function (_0x4bd7f3) {
        return _0x4bd7f3.isIssuer(_0x265cb3);
      };
      _0x265cb3.generateSubjectKeyIdentifier = function () {
        return _0x51d4f5.getPublicKeyFingerprint(_0x265cb3.publicKey, {
          type: "RSAPublicKey"
        });
      };
      _0x265cb3.verifySubjectKeyIdentifier = function () {
        var _0xd10e30 = _0x3e371e.subjectKeyIdentifier;
        for (var _0x1da11d = 0; _0x1da11d < _0x265cb3.extensions.length; ++_0x1da11d) {
          var _0x2febfd = _0x265cb3.extensions[_0x1da11d];
          if (_0x2febfd.id === _0xd10e30) {
            var _0x512fb0 = _0x265cb3.generateSubjectKeyIdentifier().getBytes();
            return _0x3b22bd.util.hexToBytes(_0x2febfd.subjectKeyIdentifier) === _0x512fb0;
          }
        }
        return false;
      };
      return _0x265cb3;
    };
    _0x51d4f5.certificateFromAsn1 = function (_0x490843, _0x552f71) {
      var _0x400fce = {};
      var _0x19cfd9 = [];
      if (!_0x443467.validate(_0x490843, _0x10c2bc, _0x400fce, _0x19cfd9)) {
        var _0x465170 = new Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.");
        _0x465170.errors = _0x19cfd9;
        throw _0x465170;
      }
      var _0x21dab2 = _0x443467.derToOid(_0x400fce.publicKeyOid);
      if (_0x21dab2 !== _0x51d4f5.oids.rsaEncryption) {
        throw new Error("Cannot read public key. OID is not RSA.");
      }
      var _0xdea5a5 = _0x51d4f5.createCertificate();
      _0xdea5a5.version = _0x400fce.certVersion ? _0x400fce.certVersion.charCodeAt(0) : 0;
      var _0x5b4cfb = _0x3b22bd.util.createBuffer(_0x400fce.certSerialNumber);
      _0xdea5a5.serialNumber = _0x5b4cfb.toHex();
      _0xdea5a5.signatureOid = _0x3b22bd.asn1.derToOid(_0x400fce.certSignatureOid);
      _0xdea5a5.signatureParameters = _0x1375c6(_0xdea5a5.signatureOid, _0x400fce.certSignatureParams, true);
      _0xdea5a5.siginfo.algorithmOid = _0x3b22bd.asn1.derToOid(_0x400fce.certinfoSignatureOid);
      _0xdea5a5.siginfo.parameters = _0x1375c6(_0xdea5a5.siginfo.algorithmOid, _0x400fce.certinfoSignatureParams, false);
      _0xdea5a5.signature = _0x400fce.certSignature;
      var _0x430e5b = [];
      if (_0x400fce.certValidity1UTCTime !== undefined) {
        _0x430e5b.push(_0x443467.utcTimeToDate(_0x400fce.certValidity1UTCTime));
      }
      if (_0x400fce.certValidity2GeneralizedTime !== undefined) {
        _0x430e5b.push(_0x443467.generalizedTimeToDate(_0x400fce.certValidity2GeneralizedTime));
      }
      if (_0x400fce.certValidity3UTCTime !== undefined) {
        _0x430e5b.push(_0x443467.utcTimeToDate(_0x400fce.certValidity3UTCTime));
      }
      if (_0x400fce.certValidity4GeneralizedTime !== undefined) {
        _0x430e5b.push(_0x443467.generalizedTimeToDate(_0x400fce.certValidity4GeneralizedTime));
      }
      if (_0x430e5b.length > 2) {
        throw new Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");
      }
      if (_0x430e5b.length < 2) {
        throw new Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");
      }
      _0xdea5a5.validity.notBefore = _0x430e5b[0];
      _0xdea5a5.validity.notAfter = _0x430e5b[1];
      _0xdea5a5.tbsCertificate = _0x400fce.tbsCertificate;
      if (_0x552f71) {
        _0xdea5a5.md = _0x512c0c({
          signatureOid: _0xdea5a5.signatureOid,
          type: "certificate"
        });
        var _0x35d1da = _0x443467.toDer(_0xdea5a5.tbsCertificate);
        _0xdea5a5.md.update(_0x35d1da.getBytes());
      }
      var _0x17817a = _0x3b22bd.md.sha1.create();
      var _0x141986 = _0x443467.toDer(_0x400fce.certIssuer);
      _0x17817a.update(_0x141986.getBytes());
      _0xdea5a5.issuer.getField = function (_0x36f33e) {
        return _0x3c7c7e(_0xdea5a5.issuer, _0x36f33e);
      };
      _0xdea5a5.issuer.addField = function (_0x270955) {
        _0x543cc1([_0x270955]);
        _0xdea5a5.issuer.attributes.push(_0x270955);
      };
      _0xdea5a5.issuer.attributes = _0x51d4f5.RDNAttributesAsArray(_0x400fce.certIssuer);
      if (_0x400fce.certIssuerUniqueId) {
        _0xdea5a5.issuer.uniqueId = _0x400fce.certIssuerUniqueId;
      }
      _0xdea5a5.issuer.hash = _0x17817a.digest().toHex();
      var _0x45e73c = _0x3b22bd.md.sha1.create();
      var _0x2499c2 = _0x443467.toDer(_0x400fce.certSubject);
      _0x45e73c.update(_0x2499c2.getBytes());
      _0xdea5a5.subject.getField = function (_0x1a8955) {
        return _0x3c7c7e(_0xdea5a5.subject, _0x1a8955);
      };
      _0xdea5a5.subject.addField = function (_0x49209a) {
        _0x543cc1([_0x49209a]);
        _0xdea5a5.subject.attributes.push(_0x49209a);
      };
      _0xdea5a5.subject.attributes = _0x51d4f5.RDNAttributesAsArray(_0x400fce.certSubject);
      if (_0x400fce.certSubjectUniqueId) {
        _0xdea5a5.subject.uniqueId = _0x400fce.certSubjectUniqueId;
      }
      _0xdea5a5.subject.hash = _0x45e73c.digest().toHex();
      if (_0x400fce.certExtensions) {
        _0xdea5a5.extensions = _0x51d4f5.certificateExtensionsFromAsn1(_0x400fce.certExtensions);
      } else {
        _0xdea5a5.extensions = [];
      }
      _0xdea5a5.publicKey = _0x51d4f5.publicKeyFromAsn1(_0x400fce.subjectPublicKeyInfo);
      return _0xdea5a5;
    };
    _0x51d4f5.certificateExtensionsFromAsn1 = function (_0x13cd4d) {
      var _0x4a0cb8 = [];
      for (var _0x3af869 = 0; _0x3af869 < _0x13cd4d.value.length; ++_0x3af869) {
        var _0x1ba747 = _0x13cd4d.value[_0x3af869];
        for (var _0x5342aa = 0; _0x5342aa < _0x1ba747.value.length; ++_0x5342aa) {
          _0x4a0cb8.push(_0x51d4f5.certificateExtensionFromAsn1(_0x1ba747.value[_0x5342aa]));
        }
      }
      return _0x4a0cb8;
    };
    _0x51d4f5.certificateExtensionFromAsn1 = function (_0xe532ef) {
      var _0x3090b5 = {};
      _0x3090b5.id = _0x443467.derToOid(_0xe532ef.value[0].value);
      _0x3090b5.critical = false;
      if (_0xe532ef.value[1].type === _0x443467.Type.BOOLEAN) {
        _0x3090b5.critical = _0xe532ef.value[1].value.charCodeAt(0) !== 0;
        _0x3090b5.value = _0xe532ef.value[2].value;
      } else {
        _0x3090b5.value = _0xe532ef.value[1].value;
      }
      if (_0x3090b5.id in _0x3e371e) {
        _0x3090b5.name = _0x3e371e[_0x3090b5.id];
        if (_0x3090b5.name === "keyUsage") {
          var _0x9192af = _0x443467.fromDer(_0x3090b5.value);
          var _0x2526c1 = 0;
          var _0x410a3e = 0;
          if (_0x9192af.value.length > 1) {
            _0x2526c1 = _0x9192af.value.charCodeAt(1);
            _0x410a3e = _0x9192af.value.length > 2 ? _0x9192af.value.charCodeAt(2) : 0;
          }
          _0x3090b5.digitalSignature = (_0x2526c1 & 128) === 128;
          _0x3090b5.nonRepudiation = (_0x2526c1 & 64) === 64;
          _0x3090b5.keyEncipherment = (_0x2526c1 & 32) === 32;
          _0x3090b5.dataEncipherment = (_0x2526c1 & 16) === 16;
          _0x3090b5.keyAgreement = (_0x2526c1 & 8) === 8;
          _0x3090b5.keyCertSign = (_0x2526c1 & 4) === 4;
          _0x3090b5.cRLSign = (_0x2526c1 & 2) === 2;
          _0x3090b5.encipherOnly = (_0x2526c1 & 1) === 1;
          _0x3090b5.decipherOnly = (_0x410a3e & 128) === 128;
        } else if (_0x3090b5.name === "basicConstraints") {
          var _0x9192af = _0x443467.fromDer(_0x3090b5.value);
          if (_0x9192af.value.length > 0 && _0x9192af.value[0].type === _0x443467.Type.BOOLEAN) {
            _0x3090b5.cA = _0x9192af.value[0].value.charCodeAt(0) !== 0;
          } else {
            _0x3090b5.cA = false;
          }
          var _0x22145d = null;
          if (_0x9192af.value.length > 0 && _0x9192af.value[0].type === _0x443467.Type.INTEGER) {
            _0x22145d = _0x9192af.value[0].value;
          } else if (_0x9192af.value.length > 1) {
            _0x22145d = _0x9192af.value[1].value;
          }
          if (_0x22145d !== null) {
            _0x3090b5.pathLenConstraint = _0x443467.derToInteger(_0x22145d);
          }
        } else if (_0x3090b5.name === "extKeyUsage") {
          var _0x9192af = _0x443467.fromDer(_0x3090b5.value);
          for (var _0xee609c = 0; _0xee609c < _0x9192af.value.length; ++_0xee609c) {
            var _0x212f76 = _0x443467.derToOid(_0x9192af.value[_0xee609c].value);
            if (_0x212f76 in _0x3e371e) {
              _0x3090b5[_0x3e371e[_0x212f76]] = true;
            } else {
              _0x3090b5[_0x212f76] = true;
            }
          }
        } else if (_0x3090b5.name === "nsCertType") {
          var _0x9192af = _0x443467.fromDer(_0x3090b5.value);
          var _0x2526c1 = 0;
          if (_0x9192af.value.length > 1) {
            _0x2526c1 = _0x9192af.value.charCodeAt(1);
          }
          _0x3090b5.client = (_0x2526c1 & 128) === 128;
          _0x3090b5.server = (_0x2526c1 & 64) === 64;
          _0x3090b5.email = (_0x2526c1 & 32) === 32;
          _0x3090b5.objsign = (_0x2526c1 & 16) === 16;
          _0x3090b5.reserved = (_0x2526c1 & 8) === 8;
          _0x3090b5.sslCA = (_0x2526c1 & 4) === 4;
          _0x3090b5.emailCA = (_0x2526c1 & 2) === 2;
          _0x3090b5.objCA = (_0x2526c1 & 1) === 1;
        } else if (_0x3090b5.name === "subjectAltName" || _0x3090b5.name === "issuerAltName") {
          _0x3090b5.altNames = [];
          var _0x38be6b;
          var _0x9192af = _0x443467.fromDer(_0x3090b5.value);
          for (var _0x43876c = 0; _0x43876c < _0x9192af.value.length; ++_0x43876c) {
            _0x38be6b = _0x9192af.value[_0x43876c];
            var _0x40e9b7 = {
              type: _0x38be6b.type,
              value: _0x38be6b.value
            };
            _0x3090b5.altNames.push(_0x40e9b7);
            switch (_0x38be6b.type) {
              case 1:
              case 2:
              case 6:
                break;
              case 7:
                _0x40e9b7.ip = _0x3b22bd.util.bytesToIP(_0x38be6b.value);
                break;
              case 8:
                _0x40e9b7.oid = _0x443467.derToOid(_0x38be6b.value);
                break;
              default:
            }
          }
        } else if (_0x3090b5.name === "subjectKeyIdentifier") {
          var _0x9192af = _0x443467.fromDer(_0x3090b5.value);
          _0x3090b5.subjectKeyIdentifier = _0x3b22bd.util.bytesToHex(_0x9192af.value);
        }
      }
      return _0x3090b5;
    };
    _0x51d4f5.certificationRequestFromAsn1 = function (_0x490089, _0x106c68) {
      var _0x32656b = {};
      var _0x2f374d = [];
      if (!_0x443467.validate(_0x490089, _0x47c114, _0x32656b, _0x2f374d)) {
        var _0x3a6d5c = new Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.");
        _0x3a6d5c.errors = _0x2f374d;
        throw _0x3a6d5c;
      }
      var _0x4ce22d = _0x443467.derToOid(_0x32656b.publicKeyOid);
      if (_0x4ce22d !== _0x51d4f5.oids.rsaEncryption) {
        throw new Error("Cannot read public key. OID is not RSA.");
      }
      var _0x38b167 = _0x51d4f5.createCertificationRequest();
      _0x38b167.version = _0x32656b.csrVersion ? _0x32656b.csrVersion.charCodeAt(0) : 0;
      _0x38b167.signatureOid = _0x3b22bd.asn1.derToOid(_0x32656b.csrSignatureOid);
      _0x38b167.signatureParameters = _0x1375c6(_0x38b167.signatureOid, _0x32656b.csrSignatureParams, true);
      _0x38b167.siginfo.algorithmOid = _0x3b22bd.asn1.derToOid(_0x32656b.csrSignatureOid);
      _0x38b167.siginfo.parameters = _0x1375c6(_0x38b167.siginfo.algorithmOid, _0x32656b.csrSignatureParams, false);
      _0x38b167.signature = _0x32656b.csrSignature;
      _0x38b167.certificationRequestInfo = _0x32656b.certificationRequestInfo;
      if (_0x106c68) {
        _0x38b167.md = _0x512c0c({
          signatureOid: _0x38b167.signatureOid,
          type: "certification request"
        });
        var _0x115864 = _0x443467.toDer(_0x38b167.certificationRequestInfo);
        _0x38b167.md.update(_0x115864.getBytes());
      }
      var _0x2ee593 = _0x3b22bd.md.sha1.create();
      _0x38b167.subject.getField = function (_0x27c29a) {
        return _0x3c7c7e(_0x38b167.subject, _0x27c29a);
      };
      _0x38b167.subject.addField = function (_0xe50a3a) {
        _0x543cc1([_0xe50a3a]);
        _0x38b167.subject.attributes.push(_0xe50a3a);
      };
      _0x38b167.subject.attributes = _0x51d4f5.RDNAttributesAsArray(_0x32656b.certificationRequestInfoSubject, _0x2ee593);
      _0x38b167.subject.hash = _0x2ee593.digest().toHex();
      _0x38b167.publicKey = _0x51d4f5.publicKeyFromAsn1(_0x32656b.subjectPublicKeyInfo);
      _0x38b167.getAttribute = function (_0x2e071b) {
        return _0x3c7c7e(_0x38b167, _0x2e071b);
      };
      _0x38b167.addAttribute = function (_0x3a8c1c) {
        _0x543cc1([_0x3a8c1c]);
        _0x38b167.attributes.push(_0x3a8c1c);
      };
      _0x38b167.attributes = _0x51d4f5.CRIAttributesAsArray(_0x32656b.certificationRequestInfoAttributes || []);
      return _0x38b167;
    };
    _0x51d4f5.createCertificationRequest = function () {
      var _0xf93b57 = {
        version: 0,
        signatureOid: null,
        signature: null,
        siginfo: {}
      };
      _0xf93b57.siginfo.algorithmOid = null;
      _0xf93b57.subject = {};
      _0xf93b57.subject.getField = function (_0xc4b9b4) {
        return _0x3c7c7e(_0xf93b57.subject, _0xc4b9b4);
      };
      _0xf93b57.subject.addField = function (_0x1ae141) {
        _0x543cc1([_0x1ae141]);
        _0xf93b57.subject.attributes.push(_0x1ae141);
      };
      _0xf93b57.subject.attributes = [];
      _0xf93b57.subject.hash = null;
      _0xf93b57.publicKey = null;
      _0xf93b57.attributes = [];
      _0xf93b57.getAttribute = function (_0x3b13a6) {
        return _0x3c7c7e(_0xf93b57, _0x3b13a6);
      };
      _0xf93b57.addAttribute = function (_0x250a8f) {
        _0x543cc1([_0x250a8f]);
        _0xf93b57.attributes.push(_0x250a8f);
      };
      _0xf93b57.md = null;
      _0xf93b57.setSubject = function (_0x56b3b1) {
        _0x543cc1(_0x56b3b1);
        _0xf93b57.subject.attributes = _0x56b3b1;
        _0xf93b57.subject.hash = null;
      };
      _0xf93b57.setAttributes = function (_0x1589f3) {
        _0x543cc1(_0x1589f3);
        _0xf93b57.attributes = _0x1589f3;
      };
      _0xf93b57.sign = function (_0x47ba58, _0x552e7c) {
        _0xf93b57.md = _0x552e7c || _0x3b22bd.md.sha1.create();
        var _0xa51b34 = _0x3e371e[_0xf93b57.md.algorithm + "WithRSAEncryption"];
        if (!_0xa51b34) {
          var _0x38dee8 = new Error("Could not compute certification request digest. Unknown message digest algorithm OID.");
          _0x38dee8.algorithm = _0xf93b57.md.algorithm;
          throw _0x38dee8;
        }
        _0xf93b57.signatureOid = _0xf93b57.siginfo.algorithmOid = _0xa51b34;
        _0xf93b57.certificationRequestInfo = _0x51d4f5.getCertificationRequestInfo(_0xf93b57);
        var _0x115a2a = _0x443467.toDer(_0xf93b57.certificationRequestInfo);
        _0xf93b57.md.update(_0x115a2a.getBytes());
        _0xf93b57.signature = _0x47ba58.sign(_0xf93b57.md);
      };
      _0xf93b57.verify = function () {
        var _0x220977 = false;
        var _0x194aeb = _0xf93b57.md;
        if (_0x194aeb === null) {
          _0x194aeb = _0x512c0c({
            signatureOid: _0xf93b57.signatureOid,
            type: "certification request"
          });
          var _0x1eab9d = _0xf93b57.certificationRequestInfo || _0x51d4f5.getCertificationRequestInfo(_0xf93b57);
          var _0x190423 = _0x443467.toDer(_0x1eab9d);
          _0x194aeb.update(_0x190423.getBytes());
        }
        if (_0x194aeb !== null) {
          _0x220977 = _0x344bd5({
            certificate: _0xf93b57,
            md: _0x194aeb,
            signature: _0xf93b57.signature
          });
        }
        return _0x220977;
      };
      return _0xf93b57;
    };
    function _0x4af65b(_0x3c7161) {
      var _0x24605e = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, []);
      var _0x1a25d0;
      var _0x4d763f;
      var _0x2de700 = _0x3c7161.attributes;
      for (var _0x2cab2a = 0; _0x2cab2a < _0x2de700.length; ++_0x2cab2a) {
        _0x1a25d0 = _0x2de700[_0x2cab2a];
        var _0x4cd0fc = _0x1a25d0.value;
        var _0x3718ac = _0x443467.Type.PRINTABLESTRING;
        if ("valueTagClass" in _0x1a25d0) {
          _0x3718ac = _0x1a25d0.valueTagClass;
          if (_0x3718ac === _0x443467.Type.UTF8) {
            _0x4cd0fc = _0x3b22bd.util.encodeUtf8(_0x4cd0fc);
          }
        }
        _0x4d763f = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SET, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.OID, false, _0x443467.oidToDer(_0x1a25d0.type).getBytes()), _0x443467.create(_0x443467.Class.UNIVERSAL, _0x3718ac, false, _0x4cd0fc)])]);
        _0x24605e.value.push(_0x4d763f);
      }
      return _0x24605e;
    }
    function _0x543cc1(_0x3a0d0f) {
      var _0x4904a7;
      for (var _0x3bfd23 = 0; _0x3bfd23 < _0x3a0d0f.length; ++_0x3bfd23) {
        _0x4904a7 = _0x3a0d0f[_0x3bfd23];
        if (typeof _0x4904a7.name === "undefined") {
          if (_0x4904a7.type && _0x4904a7.type in _0x51d4f5.oids) {
            _0x4904a7.name = _0x51d4f5.oids[_0x4904a7.type];
          } else if (_0x4904a7.shortName && _0x4904a7.shortName in _0x4d2380) {
            _0x4904a7.name = _0x51d4f5.oids[_0x4d2380[_0x4904a7.shortName]];
          }
        }
        if (typeof _0x4904a7.type === "undefined") {
          if (_0x4904a7.name && _0x4904a7.name in _0x51d4f5.oids) {
            _0x4904a7.type = _0x51d4f5.oids[_0x4904a7.name];
          } else {
            var _0x411d24 = new Error("Attribute type not specified.");
            _0x411d24.attribute = _0x4904a7;
            throw _0x411d24;
          }
        }
        if (typeof _0x4904a7.shortName === "undefined") {
          if (_0x4904a7.name && _0x4904a7.name in _0x4d2380) {
            _0x4904a7.shortName = _0x4d2380[_0x4904a7.name];
          }
        }
        if (_0x4904a7.type === _0x3e371e.extensionRequest) {
          _0x4904a7.valueConstructed = true;
          _0x4904a7.valueTagClass = _0x443467.Type.SEQUENCE;
          if (!_0x4904a7.value && _0x4904a7.extensions) {
            _0x4904a7.value = [];
            for (var _0x518e32 = 0; _0x518e32 < _0x4904a7.extensions.length; ++_0x518e32) {
              _0x4904a7.value.push(_0x51d4f5.certificateExtensionToAsn1(_0x55b75e(_0x4904a7.extensions[_0x518e32])));
            }
          }
        }
        if (typeof _0x4904a7.value === "undefined") {
          var _0x411d24 = new Error("Attribute value not specified.");
          _0x411d24.attribute = _0x4904a7;
          throw _0x411d24;
        }
      }
    }
    function _0x55b75e(_0x1cb33c, _0xdca2e) {
      _0xdca2e = _0xdca2e || {};
      if (typeof _0x1cb33c.name === "undefined") {
        if (_0x1cb33c.id && _0x1cb33c.id in _0x51d4f5.oids) {
          _0x1cb33c.name = _0x51d4f5.oids[_0x1cb33c.id];
        }
      }
      if (typeof _0x1cb33c.id === "undefined") {
        if (_0x1cb33c.name && _0x1cb33c.name in _0x51d4f5.oids) {
          _0x1cb33c.id = _0x51d4f5.oids[_0x1cb33c.name];
        } else {
          var _0x24f8db = new Error("Extension ID not specified.");
          _0x24f8db.extension = _0x1cb33c;
          throw _0x24f8db;
        }
      }
      if (typeof _0x1cb33c.value !== "undefined") {
        return _0x1cb33c;
      }
      if (_0x1cb33c.name === "keyUsage") {
        var _0x1e37dd = 0;
        var _0x4127f9 = 0;
        var _0x486067 = 0;
        if (_0x1cb33c.digitalSignature) {
          _0x4127f9 |= 128;
          _0x1e37dd = 7;
        }
        if (_0x1cb33c.nonRepudiation) {
          _0x4127f9 |= 64;
          _0x1e37dd = 6;
        }
        if (_0x1cb33c.keyEncipherment) {
          _0x4127f9 |= 32;
          _0x1e37dd = 5;
        }
        if (_0x1cb33c.dataEncipherment) {
          _0x4127f9 |= 16;
          _0x1e37dd = 4;
        }
        if (_0x1cb33c.keyAgreement) {
          _0x4127f9 |= 8;
          _0x1e37dd = 3;
        }
        if (_0x1cb33c.keyCertSign) {
          _0x4127f9 |= 4;
          _0x1e37dd = 2;
        }
        if (_0x1cb33c.cRLSign) {
          _0x4127f9 |= 2;
          _0x1e37dd = 1;
        }
        if (_0x1cb33c.encipherOnly) {
          _0x4127f9 |= 1;
          _0x1e37dd = 0;
        }
        if (_0x1cb33c.decipherOnly) {
          _0x486067 |= 128;
          _0x1e37dd = 7;
        }
        var _0x4909a3 = String.fromCharCode(_0x1e37dd);
        if (_0x486067 !== 0) {
          _0x4909a3 += String.fromCharCode(_0x4127f9) + String.fromCharCode(_0x486067);
        } else if (_0x4127f9 !== 0) {
          _0x4909a3 += String.fromCharCode(_0x4127f9);
        }
        _0x1cb33c.value = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.BITSTRING, false, _0x4909a3);
      } else if (_0x1cb33c.name === "basicConstraints") {
        _0x1cb33c.value = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, []);
        if (_0x1cb33c.cA) {
          _0x1cb33c.value.value.push(_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.BOOLEAN, false, String.fromCharCode(255)));
        }
        if ("pathLenConstraint" in _0x1cb33c) {
          _0x1cb33c.value.value.push(_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.INTEGER, false, _0x443467.integerToDer(_0x1cb33c.pathLenConstraint).getBytes()));
        }
      } else if (_0x1cb33c.name === "extKeyUsage") {
        _0x1cb33c.value = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, []);
        var _0xc2f995 = _0x1cb33c.value.value;
        for (var _0x3e7a25 in _0x1cb33c) {
          if (_0x1cb33c[_0x3e7a25] !== true) {
            continue;
          }
          if (_0x3e7a25 in _0x3e371e) {
            _0xc2f995.push(_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.OID, false, _0x443467.oidToDer(_0x3e371e[_0x3e7a25]).getBytes()));
          } else if (_0x3e7a25.indexOf(".") !== -1) {
            _0xc2f995.push(_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.OID, false, _0x443467.oidToDer(_0x3e7a25).getBytes()));
          }
        }
      } else if (_0x1cb33c.name === "nsCertType") {
        var _0x1e37dd = 0;
        var _0x4127f9 = 0;
        if (_0x1cb33c.client) {
          _0x4127f9 |= 128;
          _0x1e37dd = 7;
        }
        if (_0x1cb33c.server) {
          _0x4127f9 |= 64;
          _0x1e37dd = 6;
        }
        if (_0x1cb33c.email) {
          _0x4127f9 |= 32;
          _0x1e37dd = 5;
        }
        if (_0x1cb33c.objsign) {
          _0x4127f9 |= 16;
          _0x1e37dd = 4;
        }
        if (_0x1cb33c.reserved) {
          _0x4127f9 |= 8;
          _0x1e37dd = 3;
        }
        if (_0x1cb33c.sslCA) {
          _0x4127f9 |= 4;
          _0x1e37dd = 2;
        }
        if (_0x1cb33c.emailCA) {
          _0x4127f9 |= 2;
          _0x1e37dd = 1;
        }
        if (_0x1cb33c.objCA) {
          _0x4127f9 |= 1;
          _0x1e37dd = 0;
        }
        var _0x4909a3 = String.fromCharCode(_0x1e37dd);
        if (_0x4127f9 !== 0) {
          _0x4909a3 += String.fromCharCode(_0x4127f9);
        }
        _0x1cb33c.value = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.BITSTRING, false, _0x4909a3);
      } else if (_0x1cb33c.name === "subjectAltName" || _0x1cb33c.name === "issuerAltName") {
        _0x1cb33c.value = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, []);
        var _0x991c39;
        for (var _0x12b72e = 0; _0x12b72e < _0x1cb33c.altNames.length; ++_0x12b72e) {
          _0x991c39 = _0x1cb33c.altNames[_0x12b72e];
          var _0x4909a3 = _0x991c39.value;
          if (_0x991c39.type === 7 && _0x991c39.ip) {
            _0x4909a3 = _0x3b22bd.util.bytesFromIP(_0x991c39.ip);
            if (_0x4909a3 === null) {
              var _0x24f8db = new Error("Extension \"ip\" value is not a valid IPv4 or IPv6 address.");
              _0x24f8db.extension = _0x1cb33c;
              throw _0x24f8db;
            }
          } else if (_0x991c39.type === 8) {
            if (_0x991c39.oid) {
              _0x4909a3 = _0x443467.oidToDer(_0x443467.oidToDer(_0x991c39.oid));
            } else {
              _0x4909a3 = _0x443467.oidToDer(_0x4909a3);
            }
          }
          _0x1cb33c.value.value.push(_0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, _0x991c39.type, false, _0x4909a3));
        }
      } else if (_0x1cb33c.name === "nsComment" && _0xdca2e.cert) {
        if (!/^[\x00-\x7F]*$/.test(_0x1cb33c.comment) || _0x1cb33c.comment.length < 1 || _0x1cb33c.comment.length > 128) {
          throw new Error("Invalid \"nsComment\" content.");
        }
        _0x1cb33c.value = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.IA5STRING, false, _0x1cb33c.comment);
      } else if (_0x1cb33c.name === "subjectKeyIdentifier" && _0xdca2e.cert) {
        var _0x267ae6 = _0xdca2e.cert.generateSubjectKeyIdentifier();
        _0x1cb33c.subjectKeyIdentifier = _0x267ae6.toHex();
        _0x1cb33c.value = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.OCTETSTRING, false, _0x267ae6.getBytes());
      } else if (_0x1cb33c.name === "authorityKeyIdentifier" && _0xdca2e.cert) {
        _0x1cb33c.value = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, []);
        var _0xc2f995 = _0x1cb33c.value.value;
        if (_0x1cb33c.keyIdentifier) {
          var _0x39c9db = _0x1cb33c.keyIdentifier === true ? _0xdca2e.cert.generateSubjectKeyIdentifier().getBytes() : _0x1cb33c.keyIdentifier;
          _0xc2f995.push(_0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, 0, false, _0x39c9db));
        }
        if (_0x1cb33c.authorityCertIssuer) {
          var _0x10165a = [_0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, 4, true, [_0x4af65b(_0x1cb33c.authorityCertIssuer === true ? _0xdca2e.cert.issuer : _0x1cb33c.authorityCertIssuer)])];
          _0xc2f995.push(_0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, 1, true, _0x10165a));
        }
        if (_0x1cb33c.serialNumber) {
          var _0x591ebc = _0x3b22bd.util.hexToBytes(_0x1cb33c.serialNumber === true ? _0xdca2e.cert.serialNumber : _0x1cb33c.serialNumber);
          _0xc2f995.push(_0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, 2, false, _0x591ebc));
        }
      } else if (_0x1cb33c.name === "cRLDistributionPoints") {
        _0x1cb33c.value = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, []);
        var _0xc2f995 = _0x1cb33c.value.value;
        var _0x5fa085 = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, []);
        var _0x3ce509 = _0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, 0, true, []);
        var _0x991c39;
        for (var _0x12b72e = 0; _0x12b72e < _0x1cb33c.altNames.length; ++_0x12b72e) {
          _0x991c39 = _0x1cb33c.altNames[_0x12b72e];
          var _0x4909a3 = _0x991c39.value;
          if (_0x991c39.type === 7 && _0x991c39.ip) {
            _0x4909a3 = _0x3b22bd.util.bytesFromIP(_0x991c39.ip);
            if (_0x4909a3 === null) {
              var _0x24f8db = new Error("Extension \"ip\" value is not a valid IPv4 or IPv6 address.");
              _0x24f8db.extension = _0x1cb33c;
              throw _0x24f8db;
            }
          } else if (_0x991c39.type === 8) {
            if (_0x991c39.oid) {
              _0x4909a3 = _0x443467.oidToDer(_0x443467.oidToDer(_0x991c39.oid));
            } else {
              _0x4909a3 = _0x443467.oidToDer(_0x4909a3);
            }
          }
          _0x3ce509.value.push(_0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, _0x991c39.type, false, _0x4909a3));
        }
        _0x5fa085.value.push(_0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, 0, true, [_0x3ce509]));
        _0xc2f995.push(_0x5fa085);
      }
      if (typeof _0x1cb33c.value === "undefined") {
        var _0x24f8db = new Error("Extension value not specified.");
        _0x24f8db.extension = _0x1cb33c;
        throw _0x24f8db;
      }
      return _0x1cb33c;
    }
    function _0x36f200(_0x5542af, _0x5c5fee) {
      switch (_0x5542af) {
        case _0x3e371e["RSASSA-PSS"]:
          var _0x3620db = [];
          if (_0x5c5fee.hash.algorithmOid !== undefined) {
            _0x3620db.push(_0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, 0, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.OID, false, _0x443467.oidToDer(_0x5c5fee.hash.algorithmOid).getBytes()), _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.NULL, false, "")])]));
          }
          if (_0x5c5fee.mgf.algorithmOid !== undefined) {
            _0x3620db.push(_0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, 1, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.OID, false, _0x443467.oidToDer(_0x5c5fee.mgf.algorithmOid).getBytes()), _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.OID, false, _0x443467.oidToDer(_0x5c5fee.mgf.hash.algorithmOid).getBytes()), _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.NULL, false, "")])])]));
          }
          if (_0x5c5fee.saltLength !== undefined) {
            _0x3620db.push(_0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, 2, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.INTEGER, false, _0x443467.integerToDer(_0x5c5fee.saltLength).getBytes())]));
          }
          return _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, _0x3620db);
        default:
          return _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.NULL, false, "");
      }
    }
    function _0x497896(_0x2b0e3b) {
      var _0x1ab9b4 = _0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, 0, true, []);
      if (_0x2b0e3b.attributes.length === 0) {
        return _0x1ab9b4;
      }
      var _0x5a00b2 = _0x2b0e3b.attributes;
      for (var _0x15648c = 0; _0x15648c < _0x5a00b2.length; ++_0x15648c) {
        var _0x49ea76 = _0x5a00b2[_0x15648c];
        var _0x23a82a = _0x49ea76.value;
        var _0xed4f19 = _0x443467.Type.UTF8;
        if ("valueTagClass" in _0x49ea76) {
          _0xed4f19 = _0x49ea76.valueTagClass;
        }
        if (_0xed4f19 === _0x443467.Type.UTF8) {
          _0x23a82a = _0x3b22bd.util.encodeUtf8(_0x23a82a);
        }
        var _0x55ca6e = false;
        if ("valueConstructed" in _0x49ea76) {
          _0x55ca6e = _0x49ea76.valueConstructed;
        }
        var _0x44cf85 = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.OID, false, _0x443467.oidToDer(_0x49ea76.type).getBytes()), _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SET, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0xed4f19, _0x55ca6e, _0x23a82a)])]);
        _0x1ab9b4.value.push(_0x44cf85);
      }
      return _0x1ab9b4;
    }
    var _0x5bdb83 = new Date("1950-01-01T00:00:00Z");
    var _0x5b27b8 = new Date("2050-01-01T00:00:00Z");
    function _0xf038b3(_0x2b2298) {
      if (_0x2b2298 >= _0x5bdb83 && _0x2b2298 < _0x5b27b8) {
        return _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.UTCTIME, false, _0x443467.dateToUtcTime(_0x2b2298));
      } else {
        return _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.GENERALIZEDTIME, false, _0x443467.dateToGeneralizedTime(_0x2b2298));
      }
    }
    _0x51d4f5.getTBSCertificate = function (_0xdc9043) {
      var _0x54aea5 = _0xf038b3(_0xdc9043.validity.notBefore);
      var _0x6164e8 = _0xf038b3(_0xdc9043.validity.notAfter);
      var _0x1d41cb = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, [_0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, 0, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.INTEGER, false, _0x443467.integerToDer(_0xdc9043.version).getBytes())]), _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.INTEGER, false, _0x3b22bd.util.hexToBytes(_0xdc9043.serialNumber)), _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.OID, false, _0x443467.oidToDer(_0xdc9043.siginfo.algorithmOid).getBytes()), _0x36f200(_0xdc9043.siginfo.algorithmOid, _0xdc9043.siginfo.parameters)]), _0x4af65b(_0xdc9043.issuer), _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, [_0x54aea5, _0x6164e8]), _0x4af65b(_0xdc9043.subject), _0x51d4f5.publicKeyToAsn1(_0xdc9043.publicKey)]);
      if (_0xdc9043.issuer.uniqueId) {
        _0x1d41cb.value.push(_0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, 1, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.BITSTRING, false, String.fromCharCode(0) + _0xdc9043.issuer.uniqueId)]));
      }
      if (_0xdc9043.subject.uniqueId) {
        _0x1d41cb.value.push(_0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, 2, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.BITSTRING, false, String.fromCharCode(0) + _0xdc9043.subject.uniqueId)]));
      }
      if (_0xdc9043.extensions.length > 0) {
        _0x1d41cb.value.push(_0x51d4f5.certificateExtensionsToAsn1(_0xdc9043.extensions));
      }
      return _0x1d41cb;
    };
    _0x51d4f5.getCertificationRequestInfo = function (_0x136ade) {
      var _0x4b330f = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.INTEGER, false, _0x443467.integerToDer(_0x136ade.version).getBytes()), _0x4af65b(_0x136ade.subject), _0x51d4f5.publicKeyToAsn1(_0x136ade.publicKey), _0x497896(_0x136ade)]);
      return _0x4b330f;
    };
    _0x51d4f5.distinguishedNameToAsn1 = function (_0x123ac3) {
      return _0x4af65b(_0x123ac3);
    };
    _0x51d4f5.certificateToAsn1 = function (_0x11b190) {
      var _0x48d191 = _0x11b190.tbsCertificate || _0x51d4f5.getTBSCertificate(_0x11b190);
      return _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, [_0x48d191, _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.OID, false, _0x443467.oidToDer(_0x11b190.signatureOid).getBytes()), _0x36f200(_0x11b190.signatureOid, _0x11b190.signatureParameters)]), _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.BITSTRING, false, String.fromCharCode(0) + _0x11b190.signature)]);
    };
    _0x51d4f5.certificateExtensionsToAsn1 = function (_0x3c943d) {
      var _0x28be56 = _0x443467.create(_0x443467.Class.CONTEXT_SPECIFIC, 3, true, []);
      var _0xf029f5 = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, []);
      _0x28be56.value.push(_0xf029f5);
      for (var _0x2625d3 = 0; _0x2625d3 < _0x3c943d.length; ++_0x2625d3) {
        _0xf029f5.value.push(_0x51d4f5.certificateExtensionToAsn1(_0x3c943d[_0x2625d3]));
      }
      return _0x28be56;
    };
    _0x51d4f5.certificateExtensionToAsn1 = function (_0x177656) {
      var _0x4a1eb8 = _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, []);
      _0x4a1eb8.value.push(_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.OID, false, _0x443467.oidToDer(_0x177656.id).getBytes()));
      if (_0x177656.critical) {
        _0x4a1eb8.value.push(_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.BOOLEAN, false, String.fromCharCode(255)));
      }
      var _0x23809e = _0x177656.value;
      if (typeof _0x177656.value !== "string") {
        _0x23809e = _0x443467.toDer(_0x23809e).getBytes();
      }
      _0x4a1eb8.value.push(_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.OCTETSTRING, false, _0x23809e));
      return _0x4a1eb8;
    };
    _0x51d4f5.certificationRequestToAsn1 = function (_0x316615) {
      var _0x21bfc3 = _0x316615.certificationRequestInfo || _0x51d4f5.getCertificationRequestInfo(_0x316615);
      return _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, [_0x21bfc3, _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.SEQUENCE, true, [_0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.OID, false, _0x443467.oidToDer(_0x316615.signatureOid).getBytes()), _0x36f200(_0x316615.signatureOid, _0x316615.signatureParameters)]), _0x443467.create(_0x443467.Class.UNIVERSAL, _0x443467.Type.BITSTRING, false, String.fromCharCode(0) + _0x316615.signature)]);
    };
    _0x51d4f5.createCaStore = function (_0x130c29) {
      var _0x14fb89 = {
        certs: {}
      };
      _0x14fb89.getIssuer = function (_0xf83164) {
        var _0x37be6a = _0x579fd0(_0xf83164.issuer);
        return _0x37be6a;
      };
      _0x14fb89.addCertificate = function (_0x535561) {
        if (typeof _0x535561 === "string") {
          _0x535561 = _0x3b22bd.pki.certificateFromPem(_0x535561);
        }
        _0x255e36(_0x535561.subject);
        if (!_0x14fb89.hasCertificate(_0x535561)) {
          if (_0x535561.subject.hash in _0x14fb89.certs) {
            var _0x132a4e = _0x14fb89.certs[_0x535561.subject.hash];
            if (!_0x3b22bd.util.isArray(_0x132a4e)) {
              _0x132a4e = [_0x132a4e];
            }
            _0x132a4e.push(_0x535561);
            _0x14fb89.certs[_0x535561.subject.hash] = _0x132a4e;
          } else {
            _0x14fb89.certs[_0x535561.subject.hash] = _0x535561;
          }
        }
      };
      _0x14fb89.hasCertificate = function (_0x2dff5e) {
        if (typeof _0x2dff5e === "string") {
          _0x2dff5e = _0x3b22bd.pki.certificateFromPem(_0x2dff5e);
        }
        var _0x39e6ca = _0x579fd0(_0x2dff5e.subject);
        if (!_0x39e6ca) {
          return false;
        }
        if (!_0x3b22bd.util.isArray(_0x39e6ca)) {
          _0x39e6ca = [_0x39e6ca];
        }
        var _0x15153b = _0x443467.toDer(_0x51d4f5.certificateToAsn1(_0x2dff5e)).getBytes();
        for (var _0x1b1014 = 0; _0x1b1014 < _0x39e6ca.length; ++_0x1b1014) {
          var _0x1ae8e3 = _0x443467.toDer(_0x51d4f5.certificateToAsn1(_0x39e6ca[_0x1b1014])).getBytes();
          if (_0x15153b === _0x1ae8e3) {
            return true;
          }
        }
        return false;
      };
      _0x14fb89.listAllCertificates = function () {
        var _0x3a7308 = [];
        for (var _0x2b94e8 in _0x14fb89.certs) {
          if (_0x14fb89.certs.hasOwnProperty(_0x2b94e8)) {
            var _0x42c9f9 = _0x14fb89.certs[_0x2b94e8];
            if (!_0x3b22bd.util.isArray(_0x42c9f9)) {
              _0x3a7308.push(_0x42c9f9);
            } else {
              for (var _0x407fe8 = 0; _0x407fe8 < _0x42c9f9.length; ++_0x407fe8) {
                _0x3a7308.push(_0x42c9f9[_0x407fe8]);
              }
            }
          }
        }
        return _0x3a7308;
      };
      _0x14fb89.removeCertificate = function (_0x5a6efb) {
        var _0x4a9ec4;
        if (typeof _0x5a6efb === "string") {
          _0x5a6efb = _0x3b22bd.pki.certificateFromPem(_0x5a6efb);
        }
        _0x255e36(_0x5a6efb.subject);
        if (!_0x14fb89.hasCertificate(_0x5a6efb)) {
          return null;
        }
        var _0x5361cc = _0x579fd0(_0x5a6efb.subject);
        if (!_0x3b22bd.util.isArray(_0x5361cc)) {
          _0x4a9ec4 = _0x14fb89.certs[_0x5a6efb.subject.hash];
          delete _0x14fb89.certs[_0x5a6efb.subject.hash];
          return _0x4a9ec4;
        }
        var _0x2a8259 = _0x443467.toDer(_0x51d4f5.certificateToAsn1(_0x5a6efb)).getBytes();
        for (var _0x44627e = 0; _0x44627e < _0x5361cc.length; ++_0x44627e) {
          var _0x2b6dd5 = _0x443467.toDer(_0x51d4f5.certificateToAsn1(_0x5361cc[_0x44627e])).getBytes();
          if (_0x2a8259 === _0x2b6dd5) {
            _0x4a9ec4 = _0x5361cc[_0x44627e];
            _0x5361cc.splice(_0x44627e, 1);
          }
        }
        if (_0x5361cc.length === 0) {
          delete _0x14fb89.certs[_0x5a6efb.subject.hash];
        }
        return _0x4a9ec4;
      };
      function _0x579fd0(_0x81846) {
        _0x255e36(_0x81846);
        return _0x14fb89.certs[_0x81846.hash] || null;
      }
      function _0x255e36(_0x5e2b66) {
        if (!_0x5e2b66.hash) {
          var _0x5e2dab = _0x3b22bd.md.sha1.create();
          _0x5e2b66.attributes = _0x51d4f5.RDNAttributesAsArray(_0x4af65b(_0x5e2b66), _0x5e2dab);
          _0x5e2b66.hash = _0x5e2dab.digest().toHex();
        }
      }
      if (_0x130c29) {
        for (var _0x25a39b = 0; _0x25a39b < _0x130c29.length; ++_0x25a39b) {
          var _0x4bef6d = _0x130c29[_0x25a39b];
          _0x14fb89.addCertificate(_0x4bef6d);
        }
      }
      return _0x14fb89;
    };
    _0x51d4f5.certificateError = {
      bad_certificate: "forge.pki.BadCertificate",
      unsupported_certificate: "forge.pki.UnsupportedCertificate",
      certificate_revoked: "forge.pki.CertificateRevoked",
      certificate_expired: "forge.pki.CertificateExpired",
      certificate_unknown: "forge.pki.CertificateUnknown",
      unknown_ca: "forge.pki.UnknownCertificateAuthority"
    };
    _0x51d4f5.verifyCertificateChain = function (_0x5d5b92, _0x160b65, _0x7a398b) {
      if (typeof _0x7a398b === "function") {
        _0x7a398b = {
          verify: _0x7a398b
        };
      }
      _0x7a398b = _0x7a398b || {};
      _0x160b65 = _0x160b65.slice(0);
      var _0x50aafc = _0x160b65.slice(0);
      var _0x3f780c = _0x7a398b.validityCheckDate;
      if (typeof _0x3f780c === "undefined") {
        _0x3f780c = new Date();
      }
      var _0x25b52a = true;
      var _0xd0ded9 = null;
      var _0xb11827 = 0;
      do {
        var _0x502461 = _0x160b65.shift();
        var _0x24079b = null;
        var _0x22882d = false;
        if (_0x3f780c) {
          if (_0x3f780c < _0x502461.validity.notBefore || _0x3f780c > _0x502461.validity.notAfter) {
            _0xd0ded9 = {
              message: "Certificate is not valid yet or has expired.",
              error: _0x51d4f5.certificateError.certificate_expired,
              notBefore: _0x502461.validity.notBefore,
              notAfter: _0x502461.validity.notAfter,
              now: _0x3f780c
            };
          }
        }
        if (_0xd0ded9 === null) {
          _0x24079b = _0x160b65[0] || _0x5d5b92.getIssuer(_0x502461);
          if (_0x24079b === null) {
            if (_0x502461.isIssuer(_0x502461)) {
              _0x22882d = true;
              _0x24079b = _0x502461;
            }
          }
          if (_0x24079b) {
            var _0x458d2b = _0x24079b;
            if (!_0x3b22bd.util.isArray(_0x458d2b)) {
              _0x458d2b = [_0x458d2b];
            }
            var _0x4dfb37 = false;
            while (!_0x4dfb37 && _0x458d2b.length > 0) {
              _0x24079b = _0x458d2b.shift();
              try {
                _0x4dfb37 = _0x24079b.verify(_0x502461);
              } catch (_0x4bdea7) {}
            }
            if (!_0x4dfb37) {
              _0xd0ded9 = {
                message: "Certificate signature is invalid.",
                error: _0x51d4f5.certificateError.bad_certificate
              };
            }
          }
          if (_0xd0ded9 === null && (!_0x24079b || _0x22882d) && !_0x5d5b92.hasCertificate(_0x502461)) {
            _0xd0ded9 = {
              message: "Certificate is not trusted.",
              error: _0x51d4f5.certificateError.unknown_ca
            };
          }
        }
        if (_0xd0ded9 === null && _0x24079b && !_0x502461.isIssuer(_0x24079b)) {
          _0xd0ded9 = {
            message: "Certificate issuer is invalid.",
            error: _0x51d4f5.certificateError.bad_certificate
          };
        }
        if (_0xd0ded9 === null) {
          var _0x1c11c8 = {
            keyUsage: true,
            basicConstraints: true
          };
          for (var _0x9c0362 = 0; _0xd0ded9 === null && _0x9c0362 < _0x502461.extensions.length; ++_0x9c0362) {
            var _0x38efd4 = _0x502461.extensions[_0x9c0362];
            if (_0x38efd4.critical && !(_0x38efd4.name in _0x1c11c8)) {
              _0xd0ded9 = {
                message: "Certificate has an unsupported critical extension.",
                error: _0x51d4f5.certificateError.unsupported_certificate
              };
            }
          }
        }
        if (_0xd0ded9 === null && (!_0x25b52a || _0x160b65.length === 0 && (!_0x24079b || _0x22882d))) {
          var _0x25e97d = _0x502461.getExtension("basicConstraints");
          var _0x4daa94 = _0x502461.getExtension("keyUsage");
          if (_0x4daa94 !== null) {
            if (!_0x4daa94.keyCertSign || _0x25e97d === null) {
              _0xd0ded9 = {
                message: "Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",
                error: _0x51d4f5.certificateError.bad_certificate
              };
            }
          }
          if (_0xd0ded9 === null && _0x25e97d === null) {
            _0xd0ded9 = {
              message: "Certificate is missing basicConstraints extension and cannot be used as a CA.",
              error: _0x51d4f5.certificateError.bad_certificate
            };
          }
          if (_0xd0ded9 === null && _0x25e97d !== null && !_0x25e97d.cA) {
            _0xd0ded9 = {
              message: "Certificate basicConstraints indicates the certificate is not a CA.",
              error: _0x51d4f5.certificateError.bad_certificate
            };
          }
          if (_0xd0ded9 === null && _0x4daa94 !== null && "pathLenConstraint" in _0x25e97d) {
            var _0x52b681 = _0xb11827 - 1;
            if (_0x52b681 > _0x25e97d.pathLenConstraint) {
              _0xd0ded9 = {
                message: "Certificate basicConstraints pathLenConstraint violated.",
                error: _0x51d4f5.certificateError.bad_certificate
              };
            }
          }
        }
        var _0x3ff900 = _0xd0ded9 === null ? true : _0xd0ded9.error;
        var _0x103f2b = _0x7a398b.verify ? _0x7a398b.verify(_0x3ff900, _0xb11827, _0x50aafc) : _0x3ff900;
        if (_0x103f2b === true) {
          _0xd0ded9 = null;
        } else {
          if (_0x3ff900 === true) {
            _0xd0ded9 = {
              message: "The application rejected the certificate.",
              error: _0x51d4f5.certificateError.bad_certificate
            };
          }
          if (_0x103f2b || _0x103f2b === 0) {
            if (typeof _0x103f2b === "object" && !_0x3b22bd.util.isArray(_0x103f2b)) {
              if (_0x103f2b.message) {
                _0xd0ded9.message = _0x103f2b.message;
              }
              if (_0x103f2b.error) {
                _0xd0ded9.error = _0x103f2b.error;
              }
            } else if (typeof _0x103f2b === "string") {
              _0xd0ded9.error = _0x103f2b;
            }
          }
          throw _0xd0ded9;
        }
        _0x25b52a = false;
        ++_0xb11827;
      } while (_0x160b65.length > 0);
      return true;
    };
  }
});
var require_pkcs12 = __commonJS({
  "node_modules/node-forge/lib/pkcs12.js"(_0x5ecbc2, _0x1d8e17) {
    var _0xaa7eb0 = require_forge();
    require_asn1();
    require_hmac();
    require_oids();
    require_pkcs7asn1();
    require_pbe();
    require_random();
    require_rsa();
    require_sha1();
    require_util();
    require_x509();
    var _0x1f81a3 = _0xaa7eb0.asn1;
    var _0x169531 = _0xaa7eb0.pki;
    var _0x35950a = _0x1d8e17.exports = _0xaa7eb0.pkcs12 = _0xaa7eb0.pkcs12 || {};
    var _0x22c245 = {
      name: "ContentInfo",
      tagClass: _0x1f81a3.Class.UNIVERSAL,
      type: _0x1f81a3.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "ContentInfo.contentType",
        tagClass: _0x1f81a3.Class.UNIVERSAL,
        type: _0x1f81a3.Type.OID,
        constructed: false,
        capture: "contentType"
      }, {
        name: "ContentInfo.content",
        tagClass: _0x1f81a3.Class.CONTEXT_SPECIFIC,
        constructed: true,
        captureAsn1: "content"
      }]
    };
    var _0x1e9d97 = {
      name: "PFX",
      tagClass: _0x1f81a3.Class.UNIVERSAL,
      type: _0x1f81a3.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "PFX.version",
        tagClass: _0x1f81a3.Class.UNIVERSAL,
        type: _0x1f81a3.Type.INTEGER,
        constructed: false,
        capture: "version"
      }, _0x22c245, {
        name: "PFX.macData",
        tagClass: _0x1f81a3.Class.UNIVERSAL,
        type: _0x1f81a3.Type.SEQUENCE,
        constructed: true,
        optional: true,
        captureAsn1: "mac",
        value: [{
          name: "PFX.macData.mac",
          tagClass: _0x1f81a3.Class.UNIVERSAL,
          type: _0x1f81a3.Type.SEQUENCE,
          constructed: true,
          value: [{
            name: "PFX.macData.mac.digestAlgorithm",
            tagClass: _0x1f81a3.Class.UNIVERSAL,
            type: _0x1f81a3.Type.SEQUENCE,
            constructed: true,
            value: [{
              name: "PFX.macData.mac.digestAlgorithm.algorithm",
              tagClass: _0x1f81a3.Class.UNIVERSAL,
              type: _0x1f81a3.Type.OID,
              constructed: false,
              capture: "macAlgorithm"
            }, {
              name: "PFX.macData.mac.digestAlgorithm.parameters",
              optional: true,
              tagClass: _0x1f81a3.Class.UNIVERSAL,
              captureAsn1: "macAlgorithmParameters"
            }]
          }, {
            name: "PFX.macData.mac.digest",
            tagClass: _0x1f81a3.Class.UNIVERSAL,
            type: _0x1f81a3.Type.OCTETSTRING,
            constructed: false,
            capture: "macDigest"
          }]
        }, {
          name: "PFX.macData.macSalt",
          tagClass: _0x1f81a3.Class.UNIVERSAL,
          type: _0x1f81a3.Type.OCTETSTRING,
          constructed: false,
          capture: "macSalt"
        }, {
          name: "PFX.macData.iterations",
          tagClass: _0x1f81a3.Class.UNIVERSAL,
          type: _0x1f81a3.Type.INTEGER,
          constructed: false,
          optional: true,
          capture: "macIterations"
        }]
      }]
    };
    var _0x2cebd4 = {
      name: "SafeBag",
      tagClass: _0x1f81a3.Class.UNIVERSAL,
      type: _0x1f81a3.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "SafeBag.bagId",
        tagClass: _0x1f81a3.Class.UNIVERSAL,
        type: _0x1f81a3.Type.OID,
        constructed: false,
        capture: "bagId"
      }, {
        name: "SafeBag.bagValue",
        tagClass: _0x1f81a3.Class.CONTEXT_SPECIFIC,
        constructed: true,
        captureAsn1: "bagValue"
      }, {
        name: "SafeBag.bagAttributes",
        tagClass: _0x1f81a3.Class.UNIVERSAL,
        type: _0x1f81a3.Type.SET,
        constructed: true,
        optional: true,
        capture: "bagAttributes"
      }]
    };
    var _0x5474d2 = {
      name: "Attribute",
      tagClass: _0x1f81a3.Class.UNIVERSAL,
      type: _0x1f81a3.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "Attribute.attrId",
        tagClass: _0x1f81a3.Class.UNIVERSAL,
        type: _0x1f81a3.Type.OID,
        constructed: false,
        capture: "oid"
      }, {
        name: "Attribute.attrValues",
        tagClass: _0x1f81a3.Class.UNIVERSAL,
        type: _0x1f81a3.Type.SET,
        constructed: true,
        capture: "values"
      }]
    };
    var _0x1d13aa = {
      name: "CertBag",
      tagClass: _0x1f81a3.Class.UNIVERSAL,
      type: _0x1f81a3.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "CertBag.certId",
        tagClass: _0x1f81a3.Class.UNIVERSAL,
        type: _0x1f81a3.Type.OID,
        constructed: false,
        capture: "certId"
      }, {
        name: "CertBag.certValue",
        tagClass: _0x1f81a3.Class.CONTEXT_SPECIFIC,
        constructed: true,
        value: [{
          name: "CertBag.certValue[0]",
          tagClass: _0x1f81a3.Class.UNIVERSAL,
          type: _0x1f81a3.Class.OCTETSTRING,
          constructed: false,
          capture: "cert"
        }]
      }]
    };
    function _0x4f6cf5(_0x1ee5d3, _0x5d8d59, _0x455fc1, _0x1621a9) {
      var _0x55d591 = [];
      for (var _0x5574d5 = 0; _0x5574d5 < _0x1ee5d3.length; _0x5574d5++) {
        for (var _0x479883 = 0; _0x479883 < _0x1ee5d3[_0x5574d5].safeBags.length; _0x479883++) {
          var _0x41cc92 = _0x1ee5d3[_0x5574d5].safeBags[_0x479883];
          if (_0x1621a9 !== undefined && _0x41cc92.type !== _0x1621a9) {
            continue;
          }
          if (_0x5d8d59 === null) {
            _0x55d591.push(_0x41cc92);
            continue;
          }
          if (_0x41cc92.attributes[_0x5d8d59] !== undefined && _0x41cc92.attributes[_0x5d8d59].indexOf(_0x455fc1) >= 0) {
            _0x55d591.push(_0x41cc92);
          }
        }
      }
      return _0x55d591;
    }
    _0x35950a.pkcs12FromAsn1 = function (_0x19045f, _0x79091d, _0x2ba4d2) {
      if (typeof _0x79091d === "string") {
        _0x2ba4d2 = _0x79091d;
        _0x79091d = true;
      } else if (_0x79091d === undefined) {
        _0x79091d = true;
      }
      var _0x11cf13 = {};
      var _0x21e3e9 = [];
      if (!_0x1f81a3.validate(_0x19045f, _0x1e9d97, _0x11cf13, _0x21e3e9)) {
        var _0x37cbe9 = new Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.");
        _0x37cbe9.errors = _0x37cbe9;
        throw _0x37cbe9;
      }
      var _0x46b5a5 = {
        version: _0x11cf13.version.charCodeAt(0),
        safeContents: [],
        getBags: function (_0x461ead) {
          var _0x452f37 = {};
          var _0x21f63f;
          if ("localKeyId" in _0x461ead) {
            _0x21f63f = _0x461ead.localKeyId;
          } else if ("localKeyIdHex" in _0x461ead) {
            _0x21f63f = _0xaa7eb0.util.hexToBytes(_0x461ead.localKeyIdHex);
          }
          if (_0x21f63f === undefined && !("friendlyName" in _0x461ead) && "bagType" in _0x461ead) {
            _0x452f37[_0x461ead.bagType] = _0x4f6cf5(_0x46b5a5.safeContents, null, null, _0x461ead.bagType);
          }
          if (_0x21f63f !== undefined) {
            _0x452f37.localKeyId = _0x4f6cf5(_0x46b5a5.safeContents, "localKeyId", _0x21f63f, _0x461ead.bagType);
          }
          if ("friendlyName" in _0x461ead) {
            _0x452f37.friendlyName = _0x4f6cf5(_0x46b5a5.safeContents, "friendlyName", _0x461ead.friendlyName, _0x461ead.bagType);
          }
          return _0x452f37;
        },
        getBagsByFriendlyName: function (_0x2bc97c, _0x4ce0ee) {
          return _0x4f6cf5(_0x46b5a5.safeContents, "friendlyName", _0x2bc97c, _0x4ce0ee);
        },
        getBagsByLocalKeyId: function (_0x24ff6c, _0x14e0ec) {
          return _0x4f6cf5(_0x46b5a5.safeContents, "localKeyId", _0x24ff6c, _0x14e0ec);
        }
      };
      if (_0x11cf13.version.charCodeAt(0) !== 3) {
        var _0x37cbe9 = new Error("PKCS#12 PFX of version other than 3 not supported.");
        _0x37cbe9.version = _0x11cf13.version.charCodeAt(0);
        throw _0x37cbe9;
      }
      if (_0x1f81a3.derToOid(_0x11cf13.contentType) !== _0x169531.oids.data) {
        var _0x37cbe9 = new Error("Only PKCS#12 PFX in password integrity mode supported.");
        _0x37cbe9.oid = _0x1f81a3.derToOid(_0x11cf13.contentType);
        throw _0x37cbe9;
      }
      var _0x57b9e4 = _0x11cf13.content.value[0];
      if (_0x57b9e4.tagClass !== _0x1f81a3.Class.UNIVERSAL || _0x57b9e4.type !== _0x1f81a3.Type.OCTETSTRING) {
        throw new Error("PKCS#12 authSafe content data is not an OCTET STRING.");
      }
      _0x57b9e4 = _0x1c489b(_0x57b9e4);
      if (_0x11cf13.mac) {
        var _0x21f4d4 = null;
        var _0x18664d = 0;
        var _0x18df11 = _0x1f81a3.derToOid(_0x11cf13.macAlgorithm);
        switch (_0x18df11) {
          case _0x169531.oids.sha1:
            _0x21f4d4 = _0xaa7eb0.md.sha1.create();
            _0x18664d = 20;
            break;
          case _0x169531.oids.sha256:
            _0x21f4d4 = _0xaa7eb0.md.sha256.create();
            _0x18664d = 32;
            break;
          case _0x169531.oids.sha384:
            _0x21f4d4 = _0xaa7eb0.md.sha384.create();
            _0x18664d = 48;
            break;
          case _0x169531.oids.sha512:
            _0x21f4d4 = _0xaa7eb0.md.sha512.create();
            _0x18664d = 64;
            break;
          case _0x169531.oids.md5:
            _0x21f4d4 = _0xaa7eb0.md.md5.create();
            _0x18664d = 16;
            break;
        }
        if (_0x21f4d4 === null) {
          throw new Error("PKCS#12 uses unsupported MAC algorithm: " + _0x18df11);
        }
        var _0x380f6d = new _0xaa7eb0.util.ByteBuffer(_0x11cf13.macSalt);
        var _0x5e2e0b = "macIterations" in _0x11cf13 ? parseInt(_0xaa7eb0.util.bytesToHex(_0x11cf13.macIterations), 16) : 1;
        var _0x2b5615 = _0x35950a.generateKey(_0x2ba4d2, _0x380f6d, 3, _0x5e2e0b, _0x18664d, _0x21f4d4);
        var _0x61dcb3 = _0xaa7eb0.hmac.create();
        _0x61dcb3.start(_0x21f4d4, _0x2b5615);
        _0x61dcb3.update(_0x57b9e4.value);
        var _0x5a9840 = _0x61dcb3.getMac();
        if (_0x5a9840.getBytes() !== _0x11cf13.macDigest) {
          throw new Error("PKCS#12 MAC could not be verified. Invalid password?");
        }
      } else if (Array.isArray(_0x19045f.value) && _0x19045f.value.length > 2) {
        throw new Error("Invalid PKCS#12. macData field present but MAC was not validated.");
      }
      _0x14c4b1(_0x46b5a5, _0x57b9e4.value, _0x79091d, _0x2ba4d2);
      return _0x46b5a5;
    };
    function _0x1c489b(_0x35dfed) {
      if (_0x35dfed.composed || _0x35dfed.constructed) {
        var _0x379afc = _0xaa7eb0.util.createBuffer();
        for (var _0x19af75 = 0; _0x19af75 < _0x35dfed.value.length; ++_0x19af75) {
          _0x379afc.putBytes(_0x35dfed.value[_0x19af75].value);
        }
        _0x35dfed.composed = _0x35dfed.constructed = false;
        _0x35dfed.value = _0x379afc.getBytes();
      }
      return _0x35dfed;
    }
    function _0x14c4b1(_0x4187ad, _0x27dfef, _0x5e294f, _0x2a7c0c) {
      _0x27dfef = _0x1f81a3.fromDer(_0x27dfef, _0x5e294f);
      if (_0x27dfef.tagClass !== _0x1f81a3.Class.UNIVERSAL || _0x27dfef.type !== _0x1f81a3.Type.SEQUENCE || _0x27dfef.constructed !== true) {
        throw new Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");
      }
      for (var _0x5483c7 = 0; _0x5483c7 < _0x27dfef.value.length; _0x5483c7++) {
        var _0x42f8ac = _0x27dfef.value[_0x5483c7];
        var _0x8cde2 = {};
        var _0x5ba201 = [];
        if (!_0x1f81a3.validate(_0x42f8ac, _0x22c245, _0x8cde2, _0x5ba201)) {
          var _0x284060 = new Error("Cannot read ContentInfo.");
          _0x284060.errors = _0x5ba201;
          throw _0x284060;
        }
        var _0x5a7ecb = {
          encrypted: false
        };
        var _0x35c561 = null;
        var _0x319392 = _0x8cde2.content.value[0];
        switch (_0x1f81a3.derToOid(_0x8cde2.contentType)) {
          case _0x169531.oids.data:
            if (_0x319392.tagClass !== _0x1f81a3.Class.UNIVERSAL || _0x319392.type !== _0x1f81a3.Type.OCTETSTRING) {
              throw new Error("PKCS#12 SafeContents Data is not an OCTET STRING.");
            }
            _0x35c561 = _0x1c489b(_0x319392).value;
            break;
          case _0x169531.oids.encryptedData:
            _0x35c561 = _0x46500a(_0x319392, _0x2a7c0c);
            _0x5a7ecb.encrypted = true;
            break;
          default:
            var _0x284060 = new Error("Unsupported PKCS#12 contentType.");
            _0x284060.contentType = _0x1f81a3.derToOid(_0x8cde2.contentType);
            throw _0x284060;
        }
        _0x5a7ecb.safeBags = _0xa80ab1(_0x35c561, _0x5e294f, _0x2a7c0c);
        _0x4187ad.safeContents.push(_0x5a7ecb);
      }
    }
    function _0x46500a(_0x4a6524, _0x3bdf17) {
      var _0x49f355 = {};
      var _0x549de0 = [];
      if (!_0x1f81a3.validate(_0x4a6524, _0xaa7eb0.pkcs7.asn1.encryptedDataValidator, _0x49f355, _0x549de0)) {
        var _0x3accd0 = new Error("Cannot read EncryptedContentInfo.");
        _0x3accd0.errors = _0x549de0;
        throw _0x3accd0;
      }
      var _0x937685 = _0x1f81a3.derToOid(_0x49f355.contentType);
      if (_0x937685 !== _0x169531.oids.data) {
        var _0x3accd0 = new Error("PKCS#12 EncryptedContentInfo ContentType is not Data.");
        _0x3accd0.oid = _0x937685;
        throw _0x3accd0;
      }
      _0x937685 = _0x1f81a3.derToOid(_0x49f355.encAlgorithm);
      var _0x13c7b8 = _0x169531.pbe.getCipher(_0x937685, _0x49f355.encParameter, _0x3bdf17);
      var _0x2d1244 = _0x1c489b(_0x49f355.encryptedContentAsn1);
      var _0x88147d = _0xaa7eb0.util.createBuffer(_0x2d1244.value);
      _0x13c7b8.update(_0x88147d);
      if (!_0x13c7b8.finish()) {
        throw new Error("Failed to decrypt PKCS#12 SafeContents.");
      }
      return _0x13c7b8.output.getBytes();
    }
    function _0xa80ab1(_0x37bf72, _0x4d545d, _0x13a1e2) {
      if (!_0x4d545d && _0x37bf72.length === 0) {
        return [];
      }
      _0x37bf72 = _0x1f81a3.fromDer(_0x37bf72, _0x4d545d);
      if (_0x37bf72.tagClass !== _0x1f81a3.Class.UNIVERSAL || _0x37bf72.type !== _0x1f81a3.Type.SEQUENCE || _0x37bf72.constructed !== true) {
        throw new Error("PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.");
      }
      var _0x6ac83e = [];
      for (var _0x5d6896 = 0; _0x5d6896 < _0x37bf72.value.length; _0x5d6896++) {
        var _0x5e2674 = _0x37bf72.value[_0x5d6896];
        var _0x50efb7 = {};
        var _0x34e3d3 = [];
        if (!_0x1f81a3.validate(_0x5e2674, _0x2cebd4, _0x50efb7, _0x34e3d3)) {
          var _0x58a667 = new Error("Cannot read SafeBag.");
          _0x58a667.errors = _0x34e3d3;
          throw _0x58a667;
        }
        var _0x365d99 = {
          type: _0x1f81a3.derToOid(_0x50efb7.bagId),
          attributes: _0x22532e(_0x50efb7.bagAttributes)
        };
        _0x6ac83e.push(_0x365d99);
        var _0x47edbf;
        var _0x1f1a6d;
        var _0x9d8e71 = _0x50efb7.bagValue.value[0];
        switch (_0x365d99.type) {
          case _0x169531.oids.pkcs8ShroudedKeyBag:
            _0x9d8e71 = _0x169531.decryptPrivateKeyInfo(_0x9d8e71, _0x13a1e2);
            if (_0x9d8e71 === null) {
              throw new Error("Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?");
            }
          case _0x169531.oids.keyBag:
            try {
              _0x365d99.key = _0x169531.privateKeyFromAsn1(_0x9d8e71);
            } catch (_0x55106) {
              _0x365d99.key = null;
              _0x365d99.asn1 = _0x9d8e71;
            }
            continue;
          case _0x169531.oids.certBag:
            _0x47edbf = _0x1d13aa;
            _0x1f1a6d = function () {
              if (_0x1f81a3.derToOid(_0x50efb7.certId) !== _0x169531.oids.x509Certificate) {
                var _0x4b4f63 = new Error("Unsupported certificate type, only X.509 supported.");
                _0x4b4f63.oid = _0x1f81a3.derToOid(_0x50efb7.certId);
                throw _0x4b4f63;
              }
              var _0x31f647 = _0x1f81a3.fromDer(_0x50efb7.cert, _0x4d545d);
              try {
                _0x365d99.cert = _0x169531.certificateFromAsn1(_0x31f647, true);
              } catch (_0xb3a1eb) {
                _0x365d99.cert = null;
                _0x365d99.asn1 = _0x31f647;
              }
            };
            break;
          default:
            var _0x58a667 = new Error("Unsupported PKCS#12 SafeBag type.");
            _0x58a667.oid = _0x365d99.type;
            throw _0x58a667;
        }
        if (_0x47edbf !== undefined && !_0x1f81a3.validate(_0x9d8e71, _0x47edbf, _0x50efb7, _0x34e3d3)) {
          var _0x58a667 = new Error("Cannot read PKCS#12 " + _0x47edbf.name);
          _0x58a667.errors = _0x34e3d3;
          throw _0x58a667;
        }
        _0x1f1a6d();
      }
      return _0x6ac83e;
    }
    function _0x22532e(_0x21aa2c) {
      var _0x2c7c47 = {};
      if (_0x21aa2c !== undefined) {
        for (var _0x49ffb1 = 0; _0x49ffb1 < _0x21aa2c.length; ++_0x49ffb1) {
          var _0x28ce78 = {};
          var _0x22582d = [];
          if (!_0x1f81a3.validate(_0x21aa2c[_0x49ffb1], _0x5474d2, _0x28ce78, _0x22582d)) {
            var _0x21f2ca = new Error("Cannot read PKCS#12 BagAttribute.");
            _0x21f2ca.errors = _0x22582d;
            throw _0x21f2ca;
          }
          var _0x4674f1 = _0x1f81a3.derToOid(_0x28ce78.oid);
          if (_0x169531.oids[_0x4674f1] === undefined) {
            continue;
          }
          _0x2c7c47[_0x169531.oids[_0x4674f1]] = [];
          for (var _0x3ccde7 = 0; _0x3ccde7 < _0x28ce78.values.length; ++_0x3ccde7) {
            _0x2c7c47[_0x169531.oids[_0x4674f1]].push(_0x28ce78.values[_0x3ccde7].value);
          }
        }
      }
      return _0x2c7c47;
    }
    _0x35950a.toPkcs12Asn1 = function (_0x5b139c, _0x1a0abc, _0x329a25, _0x19ce74) {
      _0x19ce74 = _0x19ce74 || {};
      _0x19ce74.saltSize = _0x19ce74.saltSize || 8;
      _0x19ce74.count = _0x19ce74.count || 2048;
      _0x19ce74.algorithm = _0x19ce74.algorithm || _0x19ce74.encAlgorithm || "aes128";
      if (!("useMac" in _0x19ce74)) {
        _0x19ce74.useMac = true;
      }
      if (!("localKeyId" in _0x19ce74)) {
        _0x19ce74.localKeyId = null;
      }
      if (!("generateLocalKeyId" in _0x19ce74)) {
        _0x19ce74.generateLocalKeyId = true;
      }
      var _0x36e5c1 = _0x19ce74.localKeyId;
      var _0x224c8f;
      if (_0x36e5c1 !== null) {
        _0x36e5c1 = _0xaa7eb0.util.hexToBytes(_0x36e5c1);
      } else if (_0x19ce74.generateLocalKeyId) {
        if (_0x1a0abc) {
          var _0x2122c9 = _0xaa7eb0.util.isArray(_0x1a0abc) ? _0x1a0abc[0] : _0x1a0abc;
          if (typeof _0x2122c9 === "string") {
            _0x2122c9 = _0x169531.certificateFromPem(_0x2122c9);
          }
          var _0x2c2bcb = _0xaa7eb0.md.sha1.create();
          _0x2c2bcb.update(_0x1f81a3.toDer(_0x169531.certificateToAsn1(_0x2122c9)).getBytes());
          _0x36e5c1 = _0x2c2bcb.digest().getBytes();
        } else {
          _0x36e5c1 = _0xaa7eb0.random.getBytes(20);
        }
      }
      var _0x2436ff = [];
      if (_0x36e5c1 !== null) {
        _0x2436ff.push(_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OID, false, _0x1f81a3.oidToDer(_0x169531.oids.localKeyId).getBytes()), _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SET, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OCTETSTRING, false, _0x36e5c1)])]));
      }
      if ("friendlyName" in _0x19ce74) {
        _0x2436ff.push(_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OID, false, _0x1f81a3.oidToDer(_0x169531.oids.friendlyName).getBytes()), _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SET, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.BMPSTRING, false, _0x19ce74.friendlyName)])]));
      }
      if (_0x2436ff.length > 0) {
        _0x224c8f = _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SET, true, _0x2436ff);
      }
      var _0x3958b5 = [];
      var _0xb43866 = [];
      if (_0x1a0abc !== null) {
        if (_0xaa7eb0.util.isArray(_0x1a0abc)) {
          _0xb43866 = _0x1a0abc;
        } else {
          _0xb43866 = [_0x1a0abc];
        }
      }
      var _0x3ea6c1 = [];
      for (var _0x5cb2f2 = 0; _0x5cb2f2 < _0xb43866.length; ++_0x5cb2f2) {
        _0x1a0abc = _0xb43866[_0x5cb2f2];
        if (typeof _0x1a0abc === "string") {
          _0x1a0abc = _0x169531.certificateFromPem(_0x1a0abc);
        }
        var _0x580ada = _0x5cb2f2 === 0 ? _0x224c8f : undefined;
        var _0x24b11c = _0x169531.certificateToAsn1(_0x1a0abc);
        var _0xb746d1 = _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OID, false, _0x1f81a3.oidToDer(_0x169531.oids.certBag).getBytes()), _0x1f81a3.create(_0x1f81a3.Class.CONTEXT_SPECIFIC, 0, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OID, false, _0x1f81a3.oidToDer(_0x169531.oids.x509Certificate).getBytes()), _0x1f81a3.create(_0x1f81a3.Class.CONTEXT_SPECIFIC, 0, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OCTETSTRING, false, _0x1f81a3.toDer(_0x24b11c).getBytes())])])]), _0x580ada]);
        _0x3ea6c1.push(_0xb746d1);
      }
      if (_0x3ea6c1.length > 0) {
        var _0x152459 = _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, _0x3ea6c1);
        var _0x933c2f = _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OID, false, _0x1f81a3.oidToDer(_0x169531.oids.data).getBytes()), _0x1f81a3.create(_0x1f81a3.Class.CONTEXT_SPECIFIC, 0, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OCTETSTRING, false, _0x1f81a3.toDer(_0x152459).getBytes())])]);
        _0x3958b5.push(_0x933c2f);
      }
      var _0x48568b = null;
      if (_0x5b139c !== null) {
        var _0x57c1bc = _0x169531.wrapRsaPrivateKey(_0x169531.privateKeyToAsn1(_0x5b139c));
        if (_0x329a25 === null) {
          _0x48568b = _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OID, false, _0x1f81a3.oidToDer(_0x169531.oids.keyBag).getBytes()), _0x1f81a3.create(_0x1f81a3.Class.CONTEXT_SPECIFIC, 0, true, [_0x57c1bc]), _0x224c8f]);
        } else {
          _0x48568b = _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OID, false, _0x1f81a3.oidToDer(_0x169531.oids.pkcs8ShroudedKeyBag).getBytes()), _0x1f81a3.create(_0x1f81a3.Class.CONTEXT_SPECIFIC, 0, true, [_0x169531.encryptPrivateKeyInfo(_0x57c1bc, _0x329a25, _0x19ce74)]), _0x224c8f]);
        }
        var _0x2a89c4 = _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, [_0x48568b]);
        var _0x5f5350 = _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OID, false, _0x1f81a3.oidToDer(_0x169531.oids.data).getBytes()), _0x1f81a3.create(_0x1f81a3.Class.CONTEXT_SPECIFIC, 0, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OCTETSTRING, false, _0x1f81a3.toDer(_0x2a89c4).getBytes())])]);
        _0x3958b5.push(_0x5f5350);
      }
      var _0x34f6d9 = _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, _0x3958b5);
      var _0x438e17;
      if (_0x19ce74.useMac) {
        var _0x2c2bcb = _0xaa7eb0.md.sha1.create();
        var _0x5f44fe = new _0xaa7eb0.util.ByteBuffer(_0xaa7eb0.random.getBytes(_0x19ce74.saltSize));
        var _0x44bbf4 = _0x19ce74.count;
        var _0x5b139c = _0x35950a.generateKey(_0x329a25, _0x5f44fe, 3, _0x44bbf4, 20);
        var _0x368d87 = _0xaa7eb0.hmac.create();
        _0x368d87.start(_0x2c2bcb, _0x5b139c);
        _0x368d87.update(_0x1f81a3.toDer(_0x34f6d9).getBytes());
        var _0x5e77f1 = _0x368d87.getMac();
        _0x438e17 = _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OID, false, _0x1f81a3.oidToDer(_0x169531.oids.sha1).getBytes()), _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.NULL, false, "")]), _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OCTETSTRING, false, _0x5e77f1.getBytes())]), _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OCTETSTRING, false, _0x5f44fe.getBytes()), _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.INTEGER, false, _0x1f81a3.integerToDer(_0x44bbf4).getBytes())]);
      }
      return _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.INTEGER, false, _0x1f81a3.integerToDer(3).getBytes()), _0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.SEQUENCE, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OID, false, _0x1f81a3.oidToDer(_0x169531.oids.data).getBytes()), _0x1f81a3.create(_0x1f81a3.Class.CONTEXT_SPECIFIC, 0, true, [_0x1f81a3.create(_0x1f81a3.Class.UNIVERSAL, _0x1f81a3.Type.OCTETSTRING, false, _0x1f81a3.toDer(_0x34f6d9).getBytes())])]), _0x438e17]);
    };
    _0x35950a.generateKey = _0xaa7eb0.pbe.generatePkcs12Key;
  }
});
var require_pki = __commonJS({
  "node_modules/node-forge/lib/pki.js"(_0x148230, _0x156b1e) {
    var _0x4738ef = require_forge();
    require_asn1();
    require_oids();
    require_pbe();
    require_pem();
    require_pbkdf2();
    require_pkcs12();
    require_pss();
    require_rsa();
    require_util();
    require_x509();
    var _0x33008c = _0x4738ef.asn1;
    var _0x5b074b = _0x156b1e.exports = _0x4738ef.pki = _0x4738ef.pki || {};
    _0x5b074b.pemToDer = function (_0x1d529e) {
      var _0x29810e = _0x4738ef.pem.decode(_0x1d529e)[0];
      if (_0x29810e.procType && _0x29810e.procType.type === "ENCRYPTED") {
        throw new Error("Could not convert PEM to DER; PEM is encrypted.");
      }
      return _0x4738ef.util.createBuffer(_0x29810e.body);
    };
    _0x5b074b.privateKeyFromPem = function (_0x479daa) {
      var _0x7a3e6f = _0x4738ef.pem.decode(_0x479daa)[0];
      if (_0x7a3e6f.type !== "PRIVATE KEY" && _0x7a3e6f.type !== "RSA PRIVATE KEY") {
        var _0x215971 = new Error("Could not convert private key from PEM; PEM header type is not \"PRIVATE KEY\" or \"RSA PRIVATE KEY\".");
        _0x215971.headerType = _0x7a3e6f.type;
        throw _0x215971;
      }
      if (_0x7a3e6f.procType && _0x7a3e6f.procType.type === "ENCRYPTED") {
        throw new Error("Could not convert private key from PEM; PEM is encrypted.");
      }
      var _0x29e8f6 = _0x33008c.fromDer(_0x7a3e6f.body);
      return _0x5b074b.privateKeyFromAsn1(_0x29e8f6);
    };
    _0x5b074b.privateKeyToPem = function (_0x68f979, _0x4808f1) {
      var _0x4027ee = {
        type: "RSA PRIVATE KEY",
        body: _0x33008c.toDer(_0x5b074b.privateKeyToAsn1(_0x68f979)).getBytes()
      };
      return _0x4738ef.pem.encode(_0x4027ee, {
        maxline: _0x4808f1
      });
    };
    _0x5b074b.privateKeyInfoToPem = function (_0x5e36e2, _0x4e23f6) {
      var _0x468bec = {
        type: "PRIVATE KEY",
        body: _0x33008c.toDer(_0x5e36e2).getBytes()
      };
      return _0x4738ef.pem.encode(_0x468bec, {
        maxline: _0x4e23f6
      });
    };
  }
});
var require_tls = __commonJS({
  "node_modules/node-forge/lib/tls.js"(_0x53d7d3, _0x494d9d) {
    var _0x29477f = require_forge();
    require_asn1();
    require_hmac();
    require_md5();
    require_pem();
    require_pki();
    require_random();
    require_sha1();
    require_util();
    function _0x462797(_0x18988c, _0x4725a1, _0x91be15, _0x25852c) {
      var _0xea6dd5 = _0x29477f.util.createBuffer();
      var _0x2052eb = _0x18988c.length >> 1;
      var _0x30b09e = _0x2052eb + (_0x18988c.length & 1);
      var _0x55b42e = _0x18988c.substr(0, _0x30b09e);
      var _0x36cc61 = _0x18988c.substr(_0x2052eb, _0x30b09e);
      var _0x1996a2 = _0x29477f.util.createBuffer();
      var _0x3712f8 = _0x29477f.hmac.create();
      _0x91be15 = _0x4725a1 + _0x91be15;
      var _0x2c749f = Math.ceil(_0x25852c / 16);
      var _0x57ff6d = Math.ceil(_0x25852c / 20);
      _0x3712f8.start("MD5", _0x55b42e);
      var _0x3299b0 = _0x29477f.util.createBuffer();
      _0x1996a2.putBytes(_0x91be15);
      for (var _0x411b43 = 0; _0x411b43 < _0x2c749f; ++_0x411b43) {
        _0x3712f8.start(null, null);
        _0x3712f8.update(_0x1996a2.getBytes());
        _0x1996a2.putBuffer(_0x3712f8.digest());
        _0x3712f8.start(null, null);
        _0x3712f8.update(_0x1996a2.bytes() + _0x91be15);
        _0x3299b0.putBuffer(_0x3712f8.digest());
      }
      _0x3712f8.start("SHA1", _0x36cc61);
      var _0x2667b0 = _0x29477f.util.createBuffer();
      _0x1996a2.clear();
      _0x1996a2.putBytes(_0x91be15);
      for (var _0x411b43 = 0; _0x411b43 < _0x57ff6d; ++_0x411b43) {
        _0x3712f8.start(null, null);
        _0x3712f8.update(_0x1996a2.getBytes());
        _0x1996a2.putBuffer(_0x3712f8.digest());
        _0x3712f8.start(null, null);
        _0x3712f8.update(_0x1996a2.bytes() + _0x91be15);
        _0x2667b0.putBuffer(_0x3712f8.digest());
      }
      _0xea6dd5.putBytes(_0x29477f.util.xorBytes(_0x3299b0.getBytes(), _0x2667b0.getBytes(), _0x25852c));
      return _0xea6dd5;
    }
    function _0x33ad84(_0x508f4c, _0x41755d, _0x24096e) {
      var _0x2f0c47 = _0x29477f.hmac.create();
      _0x2f0c47.start("SHA1", _0x508f4c);
      var _0x269a4d = _0x29477f.util.createBuffer();
      _0x269a4d.putInt32(_0x41755d[0]);
      _0x269a4d.putInt32(_0x41755d[1]);
      _0x269a4d.putByte(_0x24096e.type);
      _0x269a4d.putByte(_0x24096e.version.major);
      _0x269a4d.putByte(_0x24096e.version.minor);
      _0x269a4d.putInt16(_0x24096e.length);
      _0x269a4d.putBytes(_0x24096e.fragment.bytes());
      _0x2f0c47.update(_0x269a4d.getBytes());
      return _0x2f0c47.digest().getBytes();
    }
    function _0x50438f(_0x1b6c08, _0x5080b8, _0x4d3cfe) {
      var _0x57a2ac = false;
      try {
        var _0x388cb9 = _0x1b6c08.deflate(_0x5080b8.fragment.getBytes());
        _0x5080b8.fragment = _0x29477f.util.createBuffer(_0x388cb9);
        _0x5080b8.length = _0x388cb9.length;
        _0x57a2ac = true;
      } catch (_0x2fb4b0) {}
      return _0x57a2ac;
    }
    function _0x45c25b(_0x423aeb, _0x4b3a59, _0x1b84d5) {
      var _0x48cee1 = false;
      try {
        var _0x42a176 = _0x423aeb.inflate(_0x4b3a59.fragment.getBytes());
        _0x4b3a59.fragment = _0x29477f.util.createBuffer(_0x42a176);
        _0x4b3a59.length = _0x42a176.length;
        _0x48cee1 = true;
      } catch (_0x13100a) {}
      return _0x48cee1;
    }
    function _0x2d1654(_0x164d14, _0x307e47) {
      var _0x511add = 0;
      switch (_0x307e47) {
        case 1:
          _0x511add = _0x164d14.getByte();
          break;
        case 2:
          _0x511add = _0x164d14.getInt16();
          break;
        case 3:
          _0x511add = _0x164d14.getInt24();
          break;
        case 4:
          _0x511add = _0x164d14.getInt32();
          break;
      }
      return _0x29477f.util.createBuffer(_0x164d14.getBytes(_0x511add));
    }
    function _0x498a1c(_0x49052e, _0x1d8ac1, _0x3425b2) {
      _0x49052e.putInt(_0x3425b2.length(), _0x1d8ac1 << 3);
      _0x49052e.putBuffer(_0x3425b2);
    }
    var _0x3ccd21 = {
      Versions: {
        TLS_1_0: {
          major: 3,
          minor: 1
        },
        TLS_1_1: {
          major: 3,
          minor: 2
        },
        TLS_1_2: {
          major: 3,
          minor: 3
        }
      }
    };
    _0x3ccd21.SupportedVersions = [_0x3ccd21.Versions.TLS_1_1, _0x3ccd21.Versions.TLS_1_0];
    _0x3ccd21.Version = _0x3ccd21.SupportedVersions[0];
    _0x3ccd21.MaxFragment = 15360;
    _0x3ccd21.ConnectionEnd = {
      server: 0,
      client: 1
    };
    _0x3ccd21.PRFAlgorithm = {
      tls_prf_sha256: 0
    };
    _0x3ccd21.BulkCipherAlgorithm = {
      none: null,
      rc4: 0,
      des3: 1,
      aes: 2
    };
    _0x3ccd21.CipherType = {
      stream: 0,
      block: 1,
      aead: 2
    };
    _0x3ccd21.MACAlgorithm = {
      none: null,
      hmac_md5: 0,
      hmac_sha1: 1,
      hmac_sha256: 2,
      hmac_sha384: 3,
      hmac_sha512: 4
    };
    _0x3ccd21.CompressionMethod = {
      none: 0,
      deflate: 1
    };
    _0x3ccd21.ContentType = {
      change_cipher_spec: 20,
      alert: 21,
      handshake: 22,
      application_data: 23,
      heartbeat: 24
    };
    _0x3ccd21.HandshakeType = {
      hello_request: 0,
      client_hello: 1,
      server_hello: 2,
      certificate: 11,
      server_key_exchange: 12,
      certificate_request: 13,
      server_hello_done: 14,
      certificate_verify: 15,
      client_key_exchange: 16,
      finished: 20
    };
    _0x3ccd21.Alert = {};
    _0x3ccd21.Alert.Level = {
      warning: 1,
      fatal: 2
    };
    _0x3ccd21.Alert.Description = {
      close_notify: 0,
      unexpected_message: 10,
      bad_record_mac: 20,
      decryption_failed: 21,
      record_overflow: 22,
      decompression_failure: 30,
      handshake_failure: 40,
      bad_certificate: 42,
      unsupported_certificate: 43,
      certificate_revoked: 44,
      certificate_expired: 45,
      certificate_unknown: 46,
      illegal_parameter: 47,
      unknown_ca: 48,
      access_denied: 49,
      decode_error: 50,
      decrypt_error: 51,
      export_restriction: 60,
      protocol_version: 70,
      insufficient_security: 71,
      internal_error: 80,
      user_canceled: 90,
      no_renegotiation: 100
    };
    _0x3ccd21.HeartbeatMessageType = {
      heartbeat_request: 1,
      heartbeat_response: 2
    };
    _0x3ccd21.CipherSuites = {};
    _0x3ccd21.getCipherSuite = function (_0x3159dd) {
      var _0x2ac42c = null;
      for (var _0x49bd25 in _0x3ccd21.CipherSuites) {
        var _0x2d7ca9 = _0x3ccd21.CipherSuites[_0x49bd25];
        if (_0x2d7ca9.id[0] === _0x3159dd.charCodeAt(0) && _0x2d7ca9.id[1] === _0x3159dd.charCodeAt(1)) {
          _0x2ac42c = _0x2d7ca9;
          break;
        }
      }
      return _0x2ac42c;
    };
    _0x3ccd21.handleUnexpected = function (_0x5c3d75, _0x1b34da) {
      var _0x1e076a = !_0x5c3d75.open && _0x5c3d75.entity === _0x3ccd21.ConnectionEnd.client;
      if (!_0x1e076a) {
        _0x5c3d75.error(_0x5c3d75, {
          message: "Unexpected message. Received TLS record out of order.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.unexpected_message
          }
        });
      }
    };
    _0x3ccd21.handleHelloRequest = function (_0x25a5cb, _0x2b1498, _0x28ab0f) {
      if (!_0x25a5cb.handshaking && _0x25a5cb.handshakes > 0) {
        _0x3ccd21.queue(_0x25a5cb, _0x3ccd21.createAlert(_0x25a5cb, {
          level: _0x3ccd21.Alert.Level.warning,
          description: _0x3ccd21.Alert.Description.no_renegotiation
        }));
        _0x3ccd21.flush(_0x25a5cb);
      }
      _0x25a5cb.process();
    };
    _0x3ccd21.parseHelloMessage = function (_0x8eb44b, _0x21c1f7, _0x2420dc) {
      var _0x3f6bdc = null;
      var _0x5c5b14 = _0x8eb44b.entity === _0x3ccd21.ConnectionEnd.client;
      if (_0x2420dc < 38) {
        _0x8eb44b.error(_0x8eb44b, {
          message: _0x5c5b14 ? "Invalid ServerHello message. Message too short." : "Invalid ClientHello message. Message too short.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.illegal_parameter
          }
        });
      } else {
        var _0x5bf248 = _0x21c1f7.fragment;
        var _0x4a558c = _0x5bf248.length();
        _0x3f6bdc = {
          version: {
            major: _0x5bf248.getByte(),
            minor: _0x5bf248.getByte()
          },
          random: _0x29477f.util.createBuffer(_0x5bf248.getBytes(32)),
          session_id: _0x2d1654(_0x5bf248, 1),
          extensions: []
        };
        if (_0x5c5b14) {
          _0x3f6bdc.cipher_suite = _0x5bf248.getBytes(2);
          _0x3f6bdc.compression_method = _0x5bf248.getByte();
        } else {
          _0x3f6bdc.cipher_suites = _0x2d1654(_0x5bf248, 2);
          _0x3f6bdc.compression_methods = _0x2d1654(_0x5bf248, 1);
        }
        _0x4a558c = _0x2420dc - (_0x4a558c - _0x5bf248.length());
        if (_0x4a558c > 0) {
          var _0xd8589d = _0x2d1654(_0x5bf248, 2);
          while (_0xd8589d.length() > 0) {
            _0x3f6bdc.extensions.push({
              type: [_0xd8589d.getByte(), _0xd8589d.getByte()],
              data: _0x2d1654(_0xd8589d, 2)
            });
          }
          if (!_0x5c5b14) {
            for (var _0x296523 = 0; _0x296523 < _0x3f6bdc.extensions.length; ++_0x296523) {
              var _0x6ed7b5 = _0x3f6bdc.extensions[_0x296523];
              if (_0x6ed7b5.type[0] === 0 && _0x6ed7b5.type[1] === 0) {
                var _0x1c28ee = _0x2d1654(_0x6ed7b5.data, 2);
                while (_0x1c28ee.length() > 0) {
                  var _0x283b96 = _0x1c28ee.getByte();
                  if (_0x283b96 !== 0) {
                    break;
                  }
                  _0x8eb44b.session.extensions.server_name.serverNameList.push(_0x2d1654(_0x1c28ee, 2).getBytes());
                }
              }
            }
          }
        }
        if (_0x8eb44b.session.version) {
          if (_0x3f6bdc.version.major !== _0x8eb44b.session.version.major || _0x3f6bdc.version.minor !== _0x8eb44b.session.version.minor) {
            return _0x8eb44b.error(_0x8eb44b, {
              message: "TLS version change is disallowed during renegotiation.",
              send: true,
              alert: {
                level: _0x3ccd21.Alert.Level.fatal,
                description: _0x3ccd21.Alert.Description.protocol_version
              }
            });
          }
        }
        if (_0x5c5b14) {
          _0x8eb44b.session.cipherSuite = _0x3ccd21.getCipherSuite(_0x3f6bdc.cipher_suite);
        } else {
          var _0x381bc1 = _0x29477f.util.createBuffer(_0x3f6bdc.cipher_suites.bytes());
          while (_0x381bc1.length() > 0) {
            _0x8eb44b.session.cipherSuite = _0x3ccd21.getCipherSuite(_0x381bc1.getBytes(2));
            if (_0x8eb44b.session.cipherSuite !== null) {
              break;
            }
          }
        }
        if (_0x8eb44b.session.cipherSuite === null) {
          return _0x8eb44b.error(_0x8eb44b, {
            message: "No cipher suites in common.",
            send: true,
            alert: {
              level: _0x3ccd21.Alert.Level.fatal,
              description: _0x3ccd21.Alert.Description.handshake_failure
            },
            cipherSuite: _0x29477f.util.bytesToHex(_0x3f6bdc.cipher_suite)
          });
        }
        if (_0x5c5b14) {
          _0x8eb44b.session.compressionMethod = _0x3f6bdc.compression_method;
        } else {
          _0x8eb44b.session.compressionMethod = _0x3ccd21.CompressionMethod.none;
        }
      }
      return _0x3f6bdc;
    };
    _0x3ccd21.createSecurityParameters = function (_0x32f26a, _0x8250dd) {
      var _0x167ff4 = _0x32f26a.entity === _0x3ccd21.ConnectionEnd.client;
      var _0x2089e7 = _0x8250dd.random.bytes();
      var _0x2848cf = _0x167ff4 ? _0x32f26a.session.sp.client_random : _0x2089e7;
      var _0x527e79 = _0x167ff4 ? _0x2089e7 : _0x3ccd21.createRandom().getBytes();
      _0x32f26a.session.sp = {
        entity: _0x32f26a.entity,
        prf_algorithm: _0x3ccd21.PRFAlgorithm.tls_prf_sha256,
        bulk_cipher_algorithm: null,
        cipher_type: null,
        enc_key_length: null,
        block_length: null,
        fixed_iv_length: null,
        record_iv_length: null,
        mac_algorithm: null,
        mac_length: null,
        mac_key_length: null,
        compression_algorithm: _0x32f26a.session.compressionMethod,
        pre_master_secret: null,
        master_secret: null,
        client_random: _0x2848cf,
        server_random: _0x527e79
      };
    };
    _0x3ccd21.handleServerHello = function (_0x6bba8d, _0x23a8aa, _0x1ca560) {
      var _0x3bd2f4 = _0x3ccd21.parseHelloMessage(_0x6bba8d, _0x23a8aa, _0x1ca560);
      if (_0x6bba8d.fail) {
        return;
      }
      if (_0x3bd2f4.version.minor <= _0x6bba8d.version.minor) {
        _0x6bba8d.version.minor = _0x3bd2f4.version.minor;
      } else {
        return _0x6bba8d.error(_0x6bba8d, {
          message: "Incompatible TLS version.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.protocol_version
          }
        });
      }
      _0x6bba8d.session.version = _0x6bba8d.version;
      var _0x828ad6 = _0x3bd2f4.session_id.bytes();
      if (_0x828ad6.length > 0 && _0x828ad6 === _0x6bba8d.session.id) {
        _0x6bba8d.expect = _0x8c6a72;
        _0x6bba8d.session.resuming = true;
        _0x6bba8d.session.sp.server_random = _0x3bd2f4.random.bytes();
      } else {
        _0x6bba8d.expect = _0x3330f5;
        _0x6bba8d.session.resuming = false;
        _0x3ccd21.createSecurityParameters(_0x6bba8d, _0x3bd2f4);
      }
      _0x6bba8d.session.id = _0x828ad6;
      _0x6bba8d.process();
    };
    _0x3ccd21.handleClientHello = function (_0xd465a4, _0x3cf27d, _0x3c9ea2) {
      var _0x3115a1 = _0x3ccd21.parseHelloMessage(_0xd465a4, _0x3cf27d, _0x3c9ea2);
      if (_0xd465a4.fail) {
        return;
      }
      var _0x106565 = _0x3115a1.session_id.bytes();
      var _0x3fbbd0 = null;
      if (_0xd465a4.sessionCache) {
        _0x3fbbd0 = _0xd465a4.sessionCache.getSession(_0x106565);
        if (_0x3fbbd0 === null) {
          _0x106565 = "";
        } else if (_0x3fbbd0.version.major !== _0x3115a1.version.major || _0x3fbbd0.version.minor > _0x3115a1.version.minor) {
          _0x3fbbd0 = null;
          _0x106565 = "";
        }
      }
      if (_0x106565.length === 0) {
        _0x106565 = _0x29477f.random.getBytes(32);
      }
      _0xd465a4.session.id = _0x106565;
      _0xd465a4.session.clientHelloVersion = _0x3115a1.version;
      _0xd465a4.session.sp = {};
      if (_0x3fbbd0) {
        _0xd465a4.version = _0xd465a4.session.version = _0x3fbbd0.version;
        _0xd465a4.session.sp = _0x3fbbd0.sp;
      } else {
        var _0x1dceb3;
        for (var _0x49c1d2 = 1; _0x49c1d2 < _0x3ccd21.SupportedVersions.length; ++_0x49c1d2) {
          _0x1dceb3 = _0x3ccd21.SupportedVersions[_0x49c1d2];
          if (_0x1dceb3.minor <= _0x3115a1.version.minor) {
            break;
          }
        }
        _0xd465a4.version = {
          major: _0x1dceb3.major,
          minor: _0x1dceb3.minor
        };
        _0xd465a4.session.version = _0xd465a4.version;
      }
      if (_0x3fbbd0 !== null) {
        _0xd465a4.expect = _0x445445;
        _0xd465a4.session.resuming = true;
        _0xd465a4.session.sp.client_random = _0x3115a1.random.bytes();
      } else {
        _0xd465a4.expect = _0xd465a4.verifyClient !== false ? _0x257e7b : _0x159f39;
        _0xd465a4.session.resuming = false;
        _0x3ccd21.createSecurityParameters(_0xd465a4, _0x3115a1);
      }
      _0xd465a4.open = true;
      _0x3ccd21.queue(_0xd465a4, _0x3ccd21.createRecord(_0xd465a4, {
        type: _0x3ccd21.ContentType.handshake,
        data: _0x3ccd21.createServerHello(_0xd465a4)
      }));
      if (_0xd465a4.session.resuming) {
        _0x3ccd21.queue(_0xd465a4, _0x3ccd21.createRecord(_0xd465a4, {
          type: _0x3ccd21.ContentType.change_cipher_spec,
          data: _0x3ccd21.createChangeCipherSpec()
        }));
        _0xd465a4.state.pending = _0x3ccd21.createConnectionState(_0xd465a4);
        _0xd465a4.state.current.write = _0xd465a4.state.pending.write;
        _0x3ccd21.queue(_0xd465a4, _0x3ccd21.createRecord(_0xd465a4, {
          type: _0x3ccd21.ContentType.handshake,
          data: _0x3ccd21.createFinished(_0xd465a4)
        }));
      } else {
        _0x3ccd21.queue(_0xd465a4, _0x3ccd21.createRecord(_0xd465a4, {
          type: _0x3ccd21.ContentType.handshake,
          data: _0x3ccd21.createCertificate(_0xd465a4)
        }));
        if (!_0xd465a4.fail) {
          _0x3ccd21.queue(_0xd465a4, _0x3ccd21.createRecord(_0xd465a4, {
            type: _0x3ccd21.ContentType.handshake,
            data: _0x3ccd21.createServerKeyExchange(_0xd465a4)
          }));
          if (_0xd465a4.verifyClient !== false) {
            _0x3ccd21.queue(_0xd465a4, _0x3ccd21.createRecord(_0xd465a4, {
              type: _0x3ccd21.ContentType.handshake,
              data: _0x3ccd21.createCertificateRequest(_0xd465a4)
            }));
          }
          _0x3ccd21.queue(_0xd465a4, _0x3ccd21.createRecord(_0xd465a4, {
            type: _0x3ccd21.ContentType.handshake,
            data: _0x3ccd21.createServerHelloDone(_0xd465a4)
          }));
        }
      }
      _0x3ccd21.flush(_0xd465a4);
      _0xd465a4.process();
    };
    _0x3ccd21.handleCertificate = function (_0x4439c8, _0x151081, _0x5e69af) {
      if (_0x5e69af < 3) {
        return _0x4439c8.error(_0x4439c8, {
          message: "Invalid Certificate message. Message too short.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.illegal_parameter
          }
        });
      }
      var _0x435ec9 = _0x151081.fragment;
      var _0x36e707 = {
        certificate_list: _0x2d1654(_0x435ec9, 3)
      };
      var _0x240045;
      var _0x111c25;
      var _0xcacae0 = [];
      try {
        while (_0x36e707.certificate_list.length() > 0) {
          _0x240045 = _0x2d1654(_0x36e707.certificate_list, 3);
          _0x111c25 = _0x29477f.asn1.fromDer(_0x240045);
          _0x240045 = _0x29477f.pki.certificateFromAsn1(_0x111c25, true);
          _0xcacae0.push(_0x240045);
        }
      } catch (_0x5dfc1c) {
        return _0x4439c8.error(_0x4439c8, {
          message: "Could not parse certificate list.",
          cause: _0x5dfc1c,
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.bad_certificate
          }
        });
      }
      var _0x397383 = _0x4439c8.entity === _0x3ccd21.ConnectionEnd.client;
      if ((_0x397383 || _0x4439c8.verifyClient === true) && _0xcacae0.length === 0) {
        _0x4439c8.error(_0x4439c8, {
          message: _0x397383 ? "No server certificate provided." : "No client certificate provided.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.illegal_parameter
          }
        });
      } else if (_0xcacae0.length === 0) {
        _0x4439c8.expect = _0x397383 ? _0x83940a : _0x159f39;
      } else {
        if (_0x397383) {
          _0x4439c8.session.serverCertificate = _0xcacae0[0];
        } else {
          _0x4439c8.session.clientCertificate = _0xcacae0[0];
        }
        if (_0x3ccd21.verifyCertificateChain(_0x4439c8, _0xcacae0)) {
          _0x4439c8.expect = _0x397383 ? _0x83940a : _0x159f39;
        }
      }
      _0x4439c8.process();
    };
    _0x3ccd21.handleServerKeyExchange = function (_0xe810a4, _0x4805b6, _0x4efd42) {
      if (_0x4efd42 > 0) {
        return _0xe810a4.error(_0xe810a4, {
          message: "Invalid key parameters. Only RSA is supported.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.unsupported_certificate
          }
        });
      }
      _0xe810a4.expect = _0x162825;
      _0xe810a4.process();
    };
    _0x3ccd21.handleClientKeyExchange = function (_0x1f17ac, _0x293260, _0x43d98a) {
      if (_0x43d98a < 48) {
        return _0x1f17ac.error(_0x1f17ac, {
          message: "Invalid key parameters. Only RSA is supported.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.unsupported_certificate
          }
        });
      }
      var _0x202fc7 = _0x293260.fragment;
      var _0xcb603a = {
        enc_pre_master_secret: _0x2d1654(_0x202fc7, 2).getBytes()
      };
      var _0x4e8833 = null;
      if (_0x1f17ac.getPrivateKey) {
        try {
          _0x4e8833 = _0x1f17ac.getPrivateKey(_0x1f17ac, _0x1f17ac.session.serverCertificate);
          _0x4e8833 = _0x29477f.pki.privateKeyFromPem(_0x4e8833);
        } catch (_0x37ad3a) {
          _0x1f17ac.error(_0x1f17ac, {
            message: "Could not get private key.",
            cause: _0x37ad3a,
            send: true,
            alert: {
              level: _0x3ccd21.Alert.Level.fatal,
              description: _0x3ccd21.Alert.Description.internal_error
            }
          });
        }
      }
      if (_0x4e8833 === null) {
        return _0x1f17ac.error(_0x1f17ac, {
          message: "No private key set.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.internal_error
          }
        });
      }
      try {
        var _0x217b5f = _0x1f17ac.session.sp;
        _0x217b5f.pre_master_secret = _0x4e8833.decrypt(_0xcb603a.enc_pre_master_secret);
        var _0xc29f1b = _0x1f17ac.session.clientHelloVersion;
        if (_0xc29f1b.major !== _0x217b5f.pre_master_secret.charCodeAt(0) || _0xc29f1b.minor !== _0x217b5f.pre_master_secret.charCodeAt(1)) {
          throw new Error("TLS version rollback attack detected.");
        }
      } catch (_0x107b15) {
        _0x217b5f.pre_master_secret = _0x29477f.random.getBytes(48);
      }
      _0x1f17ac.expect = _0x445445;
      if (_0x1f17ac.session.clientCertificate !== null) {
        _0x1f17ac.expect = _0x5b4c73;
      }
      _0x1f17ac.process();
    };
    _0x3ccd21.handleCertificateRequest = function (_0x498272, _0xef5674, _0xca05e5) {
      if (_0xca05e5 < 3) {
        return _0x498272.error(_0x498272, {
          message: "Invalid CertificateRequest. Message too short.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.illegal_parameter
          }
        });
      }
      var _0x2b0ada = _0xef5674.fragment;
      var _0x525f54 = {
        certificate_types: _0x2d1654(_0x2b0ada, 1),
        certificate_authorities: _0x2d1654(_0x2b0ada, 2)
      };
      _0x498272.session.certificateRequest = _0x525f54;
      _0x498272.expect = _0x299efc;
      _0x498272.process();
    };
    _0x3ccd21.handleCertificateVerify = function (_0x160446, _0x2d80c4, _0xa80694) {
      if (_0xa80694 < 2) {
        return _0x160446.error(_0x160446, {
          message: "Invalid CertificateVerify. Message too short.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.illegal_parameter
          }
        });
      }
      var _0x358c94 = _0x2d80c4.fragment;
      _0x358c94.read -= 4;
      var _0x3f45c4 = _0x358c94.bytes();
      _0x358c94.read += 4;
      var _0x1299bc = {
        signature: _0x2d1654(_0x358c94, 2).getBytes()
      };
      var _0x10af5b = _0x29477f.util.createBuffer();
      _0x10af5b.putBuffer(_0x160446.session.md5.digest());
      _0x10af5b.putBuffer(_0x160446.session.sha1.digest());
      _0x10af5b = _0x10af5b.getBytes();
      try {
        var _0x302cc4 = _0x160446.session.clientCertificate;
        if (!_0x302cc4.publicKey.verify(_0x10af5b, _0x1299bc.signature, "NONE")) {
          throw new Error("CertificateVerify signature does not match.");
        }
        _0x160446.session.md5.update(_0x3f45c4);
        _0x160446.session.sha1.update(_0x3f45c4);
      } catch (_0x109d4e) {
        return _0x160446.error(_0x160446, {
          message: "Bad signature in CertificateVerify.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.handshake_failure
          }
        });
      }
      _0x160446.expect = _0x445445;
      _0x160446.process();
    };
    _0x3ccd21.handleServerHelloDone = function (_0x37725a, _0x2dee0f, _0x334bde) {
      if (_0x334bde > 0) {
        return _0x37725a.error(_0x37725a, {
          message: "Invalid ServerHelloDone message. Invalid length.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.record_overflow
          }
        });
      }
      if (_0x37725a.serverCertificate === null) {
        var _0x3819df = {
          message: "No server certificate provided. Not enough security.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.insufficient_security
          }
        };
        var _0x27d336 = 0;
        var _0xf71cd1 = _0x37725a.verify(_0x37725a, _0x3819df.alert.description, _0x27d336, []);
        if (_0xf71cd1 !== true) {
          if (_0xf71cd1 || _0xf71cd1 === 0) {
            if (typeof _0xf71cd1 === "object" && !_0x29477f.util.isArray(_0xf71cd1)) {
              if (_0xf71cd1.message) {
                _0x3819df.message = _0xf71cd1.message;
              }
              if (_0xf71cd1.alert) {
                _0x3819df.alert.description = _0xf71cd1.alert;
              }
            } else if (typeof _0xf71cd1 === "number") {
              _0x3819df.alert.description = _0xf71cd1;
            }
          }
          return _0x37725a.error(_0x37725a, _0x3819df);
        }
      }
      if (_0x37725a.session.certificateRequest !== null) {
        _0x2dee0f = _0x3ccd21.createRecord(_0x37725a, {
          type: _0x3ccd21.ContentType.handshake,
          data: _0x3ccd21.createCertificate(_0x37725a)
        });
        _0x3ccd21.queue(_0x37725a, _0x2dee0f);
      }
      _0x2dee0f = _0x3ccd21.createRecord(_0x37725a, {
        type: _0x3ccd21.ContentType.handshake,
        data: _0x3ccd21.createClientKeyExchange(_0x37725a)
      });
      _0x3ccd21.queue(_0x37725a, _0x2dee0f);
      _0x37725a.expect = _0x2a9016;
      function _0x337792(_0x419cec, _0x2c7674) {
        if (_0x419cec.session.certificateRequest !== null && _0x419cec.session.clientCertificate !== null) {
          _0x3ccd21.queue(_0x419cec, _0x3ccd21.createRecord(_0x419cec, {
            type: _0x3ccd21.ContentType.handshake,
            data: _0x3ccd21.createCertificateVerify(_0x419cec, _0x2c7674)
          }));
        }
        _0x3ccd21.queue(_0x419cec, _0x3ccd21.createRecord(_0x419cec, {
          type: _0x3ccd21.ContentType.change_cipher_spec,
          data: _0x3ccd21.createChangeCipherSpec()
        }));
        _0x419cec.state.pending = _0x3ccd21.createConnectionState(_0x419cec);
        _0x419cec.state.current.write = _0x419cec.state.pending.write;
        _0x3ccd21.queue(_0x419cec, _0x3ccd21.createRecord(_0x419cec, {
          type: _0x3ccd21.ContentType.handshake,
          data: _0x3ccd21.createFinished(_0x419cec)
        }));
        _0x419cec.expect = _0x8c6a72;
        _0x3ccd21.flush(_0x419cec);
        _0x419cec.process();
      }
      if (_0x37725a.session.certificateRequest === null || _0x37725a.session.clientCertificate === null) {
        return _0x337792(_0x37725a, null);
      }
      _0x3ccd21.getClientSignature(_0x37725a, _0x337792);
    };
    _0x3ccd21.handleChangeCipherSpec = function (_0x1d60ca, _0xcbe08) {
      if (_0xcbe08.fragment.getByte() !== 1) {
        return _0x1d60ca.error(_0x1d60ca, {
          message: "Invalid ChangeCipherSpec message received.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.illegal_parameter
          }
        });
      }
      var _0x33bf42 = _0x1d60ca.entity === _0x3ccd21.ConnectionEnd.client;
      if (_0x1d60ca.session.resuming && _0x33bf42 || !_0x1d60ca.session.resuming && !_0x33bf42) {
        _0x1d60ca.state.pending = _0x3ccd21.createConnectionState(_0x1d60ca);
      }
      _0x1d60ca.state.current.read = _0x1d60ca.state.pending.read;
      if (!_0x1d60ca.session.resuming && _0x33bf42 || _0x1d60ca.session.resuming && !_0x33bf42) {
        _0x1d60ca.state.pending = null;
      }
      _0x1d60ca.expect = _0x33bf42 ? _0x5d9962 : _0x231f4c;
      _0x1d60ca.process();
    };
    _0x3ccd21.handleFinished = function (_0x3a941b, _0x4bfec0, _0x245cd3) {
      var _0x3d9b34 = _0x4bfec0.fragment;
      _0x3d9b34.read -= 4;
      var _0x1e462f = _0x3d9b34.bytes();
      _0x3d9b34.read += 4;
      var _0x2ca783 = _0x4bfec0.fragment.getBytes();
      _0x3d9b34 = _0x29477f.util.createBuffer();
      _0x3d9b34.putBuffer(_0x3a941b.session.md5.digest());
      _0x3d9b34.putBuffer(_0x3a941b.session.sha1.digest());
      var _0x5810bb = _0x3a941b.entity === _0x3ccd21.ConnectionEnd.client;
      var _0x27e4c6 = _0x5810bb ? "server finished" : "client finished";
      var _0x18e711 = _0x3a941b.session.sp;
      var _0x295ae = 12;
      var _0x4832bd = _0x462797;
      _0x3d9b34 = _0x4832bd(_0x18e711.master_secret, _0x27e4c6, _0x3d9b34.getBytes(), _0x295ae);
      if (_0x3d9b34.getBytes() !== _0x2ca783) {
        return _0x3a941b.error(_0x3a941b, {
          message: "Invalid verify_data in Finished message.",
          send: true,
          alert: {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x3ccd21.Alert.Description.decrypt_error
          }
        });
      }
      _0x3a941b.session.md5.update(_0x1e462f);
      _0x3a941b.session.sha1.update(_0x1e462f);
      if (_0x3a941b.session.resuming && _0x5810bb || !_0x3a941b.session.resuming && !_0x5810bb) {
        _0x3ccd21.queue(_0x3a941b, _0x3ccd21.createRecord(_0x3a941b, {
          type: _0x3ccd21.ContentType.change_cipher_spec,
          data: _0x3ccd21.createChangeCipherSpec()
        }));
        _0x3a941b.state.current.write = _0x3a941b.state.pending.write;
        _0x3a941b.state.pending = null;
        _0x3ccd21.queue(_0x3a941b, _0x3ccd21.createRecord(_0x3a941b, {
          type: _0x3ccd21.ContentType.handshake,
          data: _0x3ccd21.createFinished(_0x3a941b)
        }));
      }
      _0x3a941b.expect = _0x5810bb ? _0x494f0c : _0x387d0e;
      _0x3a941b.handshaking = false;
      ++_0x3a941b.handshakes;
      _0x3a941b.peerCertificate = _0x5810bb ? _0x3a941b.session.serverCertificate : _0x3a941b.session.clientCertificate;
      _0x3ccd21.flush(_0x3a941b);
      _0x3a941b.isConnected = true;
      _0x3a941b.connected(_0x3a941b);
      _0x3a941b.process();
    };
    _0x3ccd21.handleAlert = function (_0x2ce20a, _0x1f9805) {
      var _0x446cc9 = _0x1f9805.fragment;
      var _0xbb94f0 = {
        level: _0x446cc9.getByte(),
        description: _0x446cc9.getByte()
      };
      var _0x26b07f;
      switch (_0xbb94f0.description) {
        case _0x3ccd21.Alert.Description.close_notify:
          _0x26b07f = "Connection closed.";
          break;
        case _0x3ccd21.Alert.Description.unexpected_message:
          _0x26b07f = "Unexpected message.";
          break;
        case _0x3ccd21.Alert.Description.bad_record_mac:
          _0x26b07f = "Bad record MAC.";
          break;
        case _0x3ccd21.Alert.Description.decryption_failed:
          _0x26b07f = "Decryption failed.";
          break;
        case _0x3ccd21.Alert.Description.record_overflow:
          _0x26b07f = "Record overflow.";
          break;
        case _0x3ccd21.Alert.Description.decompression_failure:
          _0x26b07f = "Decompression failed.";
          break;
        case _0x3ccd21.Alert.Description.handshake_failure:
          _0x26b07f = "Handshake failure.";
          break;
        case _0x3ccd21.Alert.Description.bad_certificate:
          _0x26b07f = "Bad certificate.";
          break;
        case _0x3ccd21.Alert.Description.unsupported_certificate:
          _0x26b07f = "Unsupported certificate.";
          break;
        case _0x3ccd21.Alert.Description.certificate_revoked:
          _0x26b07f = "Certificate revoked.";
          break;
        case _0x3ccd21.Alert.Description.certificate_expired:
          _0x26b07f = "Certificate expired.";
          break;
        case _0x3ccd21.Alert.Description.certificate_unknown:
          _0x26b07f = "Certificate unknown.";
          break;
        case _0x3ccd21.Alert.Description.illegal_parameter:
          _0x26b07f = "Illegal parameter.";
          break;
        case _0x3ccd21.Alert.Description.unknown_ca:
          _0x26b07f = "Unknown certificate authority.";
          break;
        case _0x3ccd21.Alert.Description.access_denied:
          _0x26b07f = "Access denied.";
          break;
        case _0x3ccd21.Alert.Description.decode_error:
          _0x26b07f = "Decode error.";
          break;
        case _0x3ccd21.Alert.Description.decrypt_error:
          _0x26b07f = "Decrypt error.";
          break;
        case _0x3ccd21.Alert.Description.export_restriction:
          _0x26b07f = "Export restriction.";
          break;
        case _0x3ccd21.Alert.Description.protocol_version:
          _0x26b07f = "Unsupported protocol version.";
          break;
        case _0x3ccd21.Alert.Description.insufficient_security:
          _0x26b07f = "Insufficient security.";
          break;
        case _0x3ccd21.Alert.Description.internal_error:
          _0x26b07f = "Internal error.";
          break;
        case _0x3ccd21.Alert.Description.user_canceled:
          _0x26b07f = "User canceled.";
          break;
        case _0x3ccd21.Alert.Description.no_renegotiation:
          _0x26b07f = "Renegotiation not supported.";
          break;
        default:
          _0x26b07f = "Unknown error.";
          break;
      }
      if (_0xbb94f0.description === _0x3ccd21.Alert.Description.close_notify) {
        return _0x2ce20a.close();
      }
      _0x2ce20a.error(_0x2ce20a, {
        message: _0x26b07f,
        send: false,
        origin: _0x2ce20a.entity === _0x3ccd21.ConnectionEnd.client ? "server" : "client",
        alert: _0xbb94f0
      });
      _0x2ce20a.process();
    };
    _0x3ccd21.handleHandshake = function (_0x19508c, _0x133a13) {
      var _0x10f448 = _0x133a13.fragment;
      var _0x55eb66 = _0x10f448.getByte();
      var _0x4c7f28 = _0x10f448.getInt24();
      if (_0x4c7f28 > _0x10f448.length()) {
        _0x19508c.fragmented = _0x133a13;
        _0x133a13.fragment = _0x29477f.util.createBuffer();
        _0x10f448.read -= 4;
        return _0x19508c.process();
      }
      _0x19508c.fragmented = null;
      _0x10f448.read -= 4;
      var _0x2d84e3 = _0x10f448.bytes(_0x4c7f28 + 4);
      _0x10f448.read += 4;
      if (_0x55eb66 in _0x4015b2[_0x19508c.entity][_0x19508c.expect]) {
        if (_0x19508c.entity === _0x3ccd21.ConnectionEnd.server && !_0x19508c.open && !_0x19508c.fail) {
          _0x19508c.handshaking = true;
          _0x19508c.session = {
            version: null,
            extensions: {
              server_name: {
                serverNameList: []
              }
            },
            cipherSuite: null,
            compressionMethod: null,
            serverCertificate: null,
            clientCertificate: null,
            md5: _0x29477f.md.md5.create(),
            sha1: _0x29477f.md.sha1.create()
          };
        }
        if (_0x55eb66 !== _0x3ccd21.HandshakeType.hello_request && _0x55eb66 !== _0x3ccd21.HandshakeType.certificate_verify && _0x55eb66 !== _0x3ccd21.HandshakeType.finished) {
          _0x19508c.session.md5.update(_0x2d84e3);
          _0x19508c.session.sha1.update(_0x2d84e3);
        }
        _0x4015b2[_0x19508c.entity][_0x19508c.expect][_0x55eb66](_0x19508c, _0x133a13, _0x4c7f28);
      } else {
        _0x3ccd21.handleUnexpected(_0x19508c, _0x133a13);
      }
    };
    _0x3ccd21.handleApplicationData = function (_0xf8a54, _0x1efcb5) {
      _0xf8a54.data.putBuffer(_0x1efcb5.fragment);
      _0xf8a54.dataReady(_0xf8a54);
      _0xf8a54.process();
    };
    _0x3ccd21.handleHeartbeat = function (_0x4b2ede, _0x305ade) {
      var _0x98716 = _0x305ade.fragment;
      var _0x130e07 = _0x98716.getByte();
      var _0xc398a3 = _0x98716.getInt16();
      var _0x44a76a = _0x98716.getBytes(_0xc398a3);
      if (_0x130e07 === _0x3ccd21.HeartbeatMessageType.heartbeat_request) {
        if (_0x4b2ede.handshaking || _0xc398a3 > _0x44a76a.length) {
          return _0x4b2ede.process();
        }
        _0x3ccd21.queue(_0x4b2ede, _0x3ccd21.createRecord(_0x4b2ede, {
          type: _0x3ccd21.ContentType.heartbeat,
          data: _0x3ccd21.createHeartbeat(_0x3ccd21.HeartbeatMessageType.heartbeat_response, _0x44a76a)
        }));
        _0x3ccd21.flush(_0x4b2ede);
      } else if (_0x130e07 === _0x3ccd21.HeartbeatMessageType.heartbeat_response) {
        if (_0x44a76a !== _0x4b2ede.expectedHeartbeatPayload) {
          return _0x4b2ede.process();
        }
        if (_0x4b2ede.heartbeatReceived) {
          _0x4b2ede.heartbeatReceived(_0x4b2ede, _0x29477f.util.createBuffer(_0x44a76a));
        }
      }
      _0x4b2ede.process();
    };
    var _0x45e1a4 = 0;
    var _0x3330f5 = 1;
    var _0x83940a = 2;
    var _0x162825 = 3;
    var _0x299efc = 4;
    var _0x8c6a72 = 5;
    var _0x5d9962 = 6;
    var _0x494f0c = 7;
    var _0x2a9016 = 8;
    var _0x1db006 = 0;
    var _0x257e7b = 1;
    var _0x159f39 = 2;
    var _0x5b4c73 = 3;
    var _0x445445 = 4;
    var _0x231f4c = 5;
    var _0x387d0e = 6;
    var _0x1e1057 = _0x3ccd21.handleUnexpected;
    var _0x962ab7 = _0x3ccd21.handleChangeCipherSpec;
    var _0x4114fc = _0x3ccd21.handleAlert;
    var _0x5ab3a4 = _0x3ccd21.handleHandshake;
    var _0x1f8b6e = _0x3ccd21.handleApplicationData;
    var _0x286ab3 = _0x3ccd21.handleHeartbeat;
    var _0x2cedf6 = [];
    _0x2cedf6[_0x3ccd21.ConnectionEnd.client] = [[_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1e1057, _0x286ab3], [_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1e1057, _0x286ab3], [_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1e1057, _0x286ab3], [_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1e1057, _0x286ab3], [_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1e1057, _0x286ab3], [_0x962ab7, _0x4114fc, _0x1e1057, _0x1e1057, _0x286ab3], [_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1e1057, _0x286ab3], [_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1f8b6e, _0x286ab3], [_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1e1057, _0x286ab3]];
    _0x2cedf6[_0x3ccd21.ConnectionEnd.server] = [[_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1e1057, _0x286ab3], [_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1e1057, _0x286ab3], [_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1e1057, _0x286ab3], [_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1e1057, _0x286ab3], [_0x962ab7, _0x4114fc, _0x1e1057, _0x1e1057, _0x286ab3], [_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1e1057, _0x286ab3], [_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1f8b6e, _0x286ab3], [_0x1e1057, _0x4114fc, _0x5ab3a4, _0x1e1057, _0x286ab3]];
    var _0x2cf9fe = _0x3ccd21.handleHelloRequest;
    var _0x360a4c = _0x3ccd21.handleServerHello;
    var _0xd73d0f = _0x3ccd21.handleCertificate;
    var _0x11fc00 = _0x3ccd21.handleServerKeyExchange;
    var _0x4c415c = _0x3ccd21.handleCertificateRequest;
    var _0x3af76d = _0x3ccd21.handleServerHelloDone;
    var _0x506700 = _0x3ccd21.handleFinished;
    var _0x4015b2 = [];
    _0x4015b2[_0x3ccd21.ConnectionEnd.client] = [[_0x1e1057, _0x1e1057, _0x360a4c, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057], [_0x2cf9fe, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0xd73d0f, _0x11fc00, _0x4c415c, _0x3af76d, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057], [_0x2cf9fe, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x11fc00, _0x4c415c, _0x3af76d, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057], [_0x2cf9fe, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x4c415c, _0x3af76d, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057], [_0x2cf9fe, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x3af76d, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057], [_0x2cf9fe, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057], [_0x2cf9fe, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x506700], [_0x2cf9fe, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057], [_0x2cf9fe, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057]];
    var _0x49c8bf = _0x3ccd21.handleClientHello;
    var _0x39b934 = _0x3ccd21.handleClientKeyExchange;
    var _0x316b97 = _0x3ccd21.handleCertificateVerify;
    _0x4015b2[_0x3ccd21.ConnectionEnd.server] = [[_0x1e1057, _0x49c8bf, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057], [_0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0xd73d0f, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057], [_0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x39b934, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057], [_0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x316b97, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057], [_0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057], [_0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x506700], [_0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057], [_0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057, _0x1e1057]];
    _0x3ccd21.generateKeys = function (_0x5312e0, _0xf40d04) {
      var _0x3d89bd = _0x462797;
      var _0x42bf05 = _0xf40d04.client_random + _0xf40d04.server_random;
      if (!_0x5312e0.session.resuming) {
        _0xf40d04.master_secret = _0x3d89bd(_0xf40d04.pre_master_secret, "master secret", _0x42bf05, 48).bytes();
        _0xf40d04.pre_master_secret = null;
      }
      _0x42bf05 = _0xf40d04.server_random + _0xf40d04.client_random;
      var _0x4dfdef = _0xf40d04.mac_key_length * 2 + _0xf40d04.enc_key_length * 2;
      var _0x25fc7e = _0x5312e0.version.major === _0x3ccd21.Versions.TLS_1_0.major && _0x5312e0.version.minor === _0x3ccd21.Versions.TLS_1_0.minor;
      if (_0x25fc7e) {
        _0x4dfdef += _0xf40d04.fixed_iv_length * 2;
      }
      var _0x405ed0 = _0x3d89bd(_0xf40d04.master_secret, "key expansion", _0x42bf05, _0x4dfdef);
      var _0x3ed18e = {
        client_write_MAC_key: _0x405ed0.getBytes(_0xf40d04.mac_key_length),
        server_write_MAC_key: _0x405ed0.getBytes(_0xf40d04.mac_key_length),
        client_write_key: _0x405ed0.getBytes(_0xf40d04.enc_key_length),
        server_write_key: _0x405ed0.getBytes(_0xf40d04.enc_key_length)
      };
      if (_0x25fc7e) {
        _0x3ed18e.client_write_IV = _0x405ed0.getBytes(_0xf40d04.fixed_iv_length);
        _0x3ed18e.server_write_IV = _0x405ed0.getBytes(_0xf40d04.fixed_iv_length);
      }
      return _0x3ed18e;
    };
    _0x3ccd21.createConnectionState = function (_0x406b2e) {
      var _0x469dcc = _0x406b2e.entity === _0x3ccd21.ConnectionEnd.client;
      function _0x483637() {
        var _0x311beb = {
          sequenceNumber: [0, 0],
          macKey: null,
          macLength: 0,
          macFunction: null,
          cipherState: null,
          cipherFunction: function (_0x3bcec0) {
            return true;
          },
          compressionState: null,
          compressFunction: function (_0x55144c) {
            return true;
          },
          updateSequenceNumber: function () {
            if (_0x311beb.sequenceNumber[1] === 4294967295) {
              _0x311beb.sequenceNumber[1] = 0;
              ++_0x311beb.sequenceNumber[0];
            } else {
              ++_0x311beb.sequenceNumber[1];
            }
          }
        };
        return _0x311beb;
      }
      var _0x2d70a8 = {
        read: _0x483637(),
        write: _0x483637()
      };
      _0x2d70a8.read.update = function (_0x323f56, _0x20ae55) {
        if (!_0x2d70a8.read.cipherFunction(_0x20ae55, _0x2d70a8.read)) {
          _0x323f56.error(_0x323f56, {
            message: "Could not decrypt record or bad MAC.",
            send: true,
            alert: {
              level: _0x3ccd21.Alert.Level.fatal,
              description: _0x3ccd21.Alert.Description.bad_record_mac
            }
          });
        } else if (!_0x2d70a8.read.compressFunction(_0x323f56, _0x20ae55, _0x2d70a8.read)) {
          _0x323f56.error(_0x323f56, {
            message: "Could not decompress record.",
            send: true,
            alert: {
              level: _0x3ccd21.Alert.Level.fatal,
              description: _0x3ccd21.Alert.Description.decompression_failure
            }
          });
        }
        return !_0x323f56.fail;
      };
      _0x2d70a8.write.update = function (_0x186389, _0x49ada5) {
        if (!_0x2d70a8.write.compressFunction(_0x186389, _0x49ada5, _0x2d70a8.write)) {
          _0x186389.error(_0x186389, {
            message: "Could not compress record.",
            send: false,
            alert: {
              level: _0x3ccd21.Alert.Level.fatal,
              description: _0x3ccd21.Alert.Description.internal_error
            }
          });
        } else if (!_0x2d70a8.write.cipherFunction(_0x49ada5, _0x2d70a8.write)) {
          _0x186389.error(_0x186389, {
            message: "Could not encrypt record.",
            send: false,
            alert: {
              level: _0x3ccd21.Alert.Level.fatal,
              description: _0x3ccd21.Alert.Description.internal_error
            }
          });
        }
        return !_0x186389.fail;
      };
      if (_0x406b2e.session) {
        var _0x2a170c = _0x406b2e.session.sp;
        _0x406b2e.session.cipherSuite.initSecurityParameters(_0x2a170c);
        _0x2a170c.keys = _0x3ccd21.generateKeys(_0x406b2e, _0x2a170c);
        _0x2d70a8.read.macKey = _0x469dcc ? _0x2a170c.keys.server_write_MAC_key : _0x2a170c.keys.client_write_MAC_key;
        _0x2d70a8.write.macKey = _0x469dcc ? _0x2a170c.keys.client_write_MAC_key : _0x2a170c.keys.server_write_MAC_key;
        _0x406b2e.session.cipherSuite.initConnectionState(_0x2d70a8, _0x406b2e, _0x2a170c);
        switch (_0x2a170c.compression_algorithm) {
          case _0x3ccd21.CompressionMethod.none:
            break;
          case _0x3ccd21.CompressionMethod.deflate:
            _0x2d70a8.read.compressFunction = _0x45c25b;
            _0x2d70a8.write.compressFunction = _0x50438f;
            break;
          default:
            throw new Error("Unsupported compression algorithm.");
        }
      }
      return _0x2d70a8;
    };
    _0x3ccd21.createRandom = function () {
      var _0x19f7a6 = new Date();
      var _0x398774 = +_0x19f7a6 + _0x19f7a6.getTimezoneOffset() * 60000;
      var _0x44cbc0 = _0x29477f.util.createBuffer();
      _0x44cbc0.putInt32(_0x398774);
      _0x44cbc0.putBytes(_0x29477f.random.getBytes(28));
      return _0x44cbc0;
    };
    _0x3ccd21.createRecord = function (_0xf3d132, _0x4156de) {
      if (!_0x4156de.data) {
        return null;
      }
      var _0x1f31d5 = {
        type: _0x4156de.type,
        version: {
          major: _0xf3d132.version.major,
          minor: _0xf3d132.version.minor
        },
        length: _0x4156de.data.length(),
        fragment: _0x4156de.data
      };
      return _0x1f31d5;
    };
    _0x3ccd21.createAlert = function (_0x164305, _0x3d51db) {
      var _0x48e4cf = _0x29477f.util.createBuffer();
      _0x48e4cf.putByte(_0x3d51db.level);
      _0x48e4cf.putByte(_0x3d51db.description);
      return _0x3ccd21.createRecord(_0x164305, {
        type: _0x3ccd21.ContentType.alert,
        data: _0x48e4cf
      });
    };
    _0x3ccd21.createClientHello = function (_0x35d442) {
      _0x35d442.session.clientHelloVersion = {
        major: _0x35d442.version.major,
        minor: _0x35d442.version.minor
      };
      var _0x4f3b4e = _0x29477f.util.createBuffer();
      for (var _0x57a35 = 0; _0x57a35 < _0x35d442.cipherSuites.length; ++_0x57a35) {
        var _0x3726cb = _0x35d442.cipherSuites[_0x57a35];
        _0x4f3b4e.putByte(_0x3726cb.id[0]);
        _0x4f3b4e.putByte(_0x3726cb.id[1]);
      }
      var _0x21899d = _0x4f3b4e.length();
      var _0x4ec613 = _0x29477f.util.createBuffer();
      _0x4ec613.putByte(_0x3ccd21.CompressionMethod.none);
      var _0x1b7b86 = _0x4ec613.length();
      var _0x11f81e = _0x29477f.util.createBuffer();
      if (_0x35d442.virtualHost) {
        var _0x627e48 = _0x29477f.util.createBuffer();
        _0x627e48.putByte(0);
        _0x627e48.putByte(0);
        var _0x507bac = _0x29477f.util.createBuffer();
        _0x507bac.putByte(0);
        _0x498a1c(_0x507bac, 2, _0x29477f.util.createBuffer(_0x35d442.virtualHost));
        var _0x23a98d = _0x29477f.util.createBuffer();
        _0x498a1c(_0x23a98d, 2, _0x507bac);
        _0x498a1c(_0x627e48, 2, _0x23a98d);
        _0x11f81e.putBuffer(_0x627e48);
      }
      var _0x24db53 = _0x11f81e.length();
      if (_0x24db53 > 0) {
        _0x24db53 += 2;
      }
      var _0x4051b3 = _0x35d442.session.id;
      var _0x24afae = _0x4051b3.length + 1 + 2 + 4 + 28 + 2 + _0x21899d + 1 + _0x1b7b86 + _0x24db53;
      var _0x593301 = _0x29477f.util.createBuffer();
      _0x593301.putByte(_0x3ccd21.HandshakeType.client_hello);
      _0x593301.putInt24(_0x24afae);
      _0x593301.putByte(_0x35d442.version.major);
      _0x593301.putByte(_0x35d442.version.minor);
      _0x593301.putBytes(_0x35d442.session.sp.client_random);
      _0x498a1c(_0x593301, 1, _0x29477f.util.createBuffer(_0x4051b3));
      _0x498a1c(_0x593301, 2, _0x4f3b4e);
      _0x498a1c(_0x593301, 1, _0x4ec613);
      if (_0x24db53 > 0) {
        _0x498a1c(_0x593301, 2, _0x11f81e);
      }
      return _0x593301;
    };
    _0x3ccd21.createServerHello = function (_0x4bf112) {
      var _0x3bd556 = _0x4bf112.session.id;
      var _0x15f694 = _0x3bd556.length + 1 + 2 + 4 + 28 + 2 + 1;
      var _0x5f3430 = _0x29477f.util.createBuffer();
      _0x5f3430.putByte(_0x3ccd21.HandshakeType.server_hello);
      _0x5f3430.putInt24(_0x15f694);
      _0x5f3430.putByte(_0x4bf112.version.major);
      _0x5f3430.putByte(_0x4bf112.version.minor);
      _0x5f3430.putBytes(_0x4bf112.session.sp.server_random);
      _0x498a1c(_0x5f3430, 1, _0x29477f.util.createBuffer(_0x3bd556));
      _0x5f3430.putByte(_0x4bf112.session.cipherSuite.id[0]);
      _0x5f3430.putByte(_0x4bf112.session.cipherSuite.id[1]);
      _0x5f3430.putByte(_0x4bf112.session.compressionMethod);
      return _0x5f3430;
    };
    _0x3ccd21.createCertificate = function (_0x5d6abe) {
      var _0x2675b9 = _0x5d6abe.entity === _0x3ccd21.ConnectionEnd.client;
      var _0x2d003a = null;
      if (_0x5d6abe.getCertificate) {
        var _0x2f036d;
        if (_0x2675b9) {
          _0x2f036d = _0x5d6abe.session.certificateRequest;
        } else {
          _0x2f036d = _0x5d6abe.session.extensions.server_name.serverNameList;
        }
        _0x2d003a = _0x5d6abe.getCertificate(_0x5d6abe, _0x2f036d);
      }
      var _0x24d0cd = _0x29477f.util.createBuffer();
      if (_0x2d003a !== null) {
        try {
          if (!_0x29477f.util.isArray(_0x2d003a)) {
            _0x2d003a = [_0x2d003a];
          }
          var _0x1f840a = null;
          for (var _0x3d50dd = 0; _0x3d50dd < _0x2d003a.length; ++_0x3d50dd) {
            var _0x21938b = _0x29477f.pem.decode(_0x2d003a[_0x3d50dd])[0];
            if (_0x21938b.type !== "CERTIFICATE" && _0x21938b.type !== "X509 CERTIFICATE" && _0x21938b.type !== "TRUSTED CERTIFICATE") {
              var _0x472229 = new Error("Could not convert certificate from PEM; PEM header type is not \"CERTIFICATE\", \"X509 CERTIFICATE\", or \"TRUSTED CERTIFICATE\".");
              _0x472229.headerType = _0x21938b.type;
              throw _0x472229;
            }
            if (_0x21938b.procType && _0x21938b.procType.type === "ENCRYPTED") {
              throw new Error("Could not convert certificate from PEM; PEM is encrypted.");
            }
            var _0x1cf93c = _0x29477f.util.createBuffer(_0x21938b.body);
            if (_0x1f840a === null) {
              _0x1f840a = _0x29477f.asn1.fromDer(_0x1cf93c.bytes(), false);
            }
            var _0x22a5f0 = _0x29477f.util.createBuffer();
            _0x498a1c(_0x22a5f0, 3, _0x1cf93c);
            _0x24d0cd.putBuffer(_0x22a5f0);
          }
          _0x2d003a = _0x29477f.pki.certificateFromAsn1(_0x1f840a);
          if (_0x2675b9) {
            _0x5d6abe.session.clientCertificate = _0x2d003a;
          } else {
            _0x5d6abe.session.serverCertificate = _0x2d003a;
          }
        } catch (_0x3385c3) {
          return _0x5d6abe.error(_0x5d6abe, {
            message: "Could not send certificate list.",
            cause: _0x3385c3,
            send: true,
            alert: {
              level: _0x3ccd21.Alert.Level.fatal,
              description: _0x3ccd21.Alert.Description.bad_certificate
            }
          });
        }
      }
      var _0x2430de = 3 + _0x24d0cd.length();
      var _0x2a9674 = _0x29477f.util.createBuffer();
      _0x2a9674.putByte(_0x3ccd21.HandshakeType.certificate);
      _0x2a9674.putInt24(_0x2430de);
      _0x498a1c(_0x2a9674, 3, _0x24d0cd);
      return _0x2a9674;
    };
    _0x3ccd21.createClientKeyExchange = function (_0x1edad5) {
      var _0x4450f6 = _0x29477f.util.createBuffer();
      _0x4450f6.putByte(_0x1edad5.session.clientHelloVersion.major);
      _0x4450f6.putByte(_0x1edad5.session.clientHelloVersion.minor);
      _0x4450f6.putBytes(_0x29477f.random.getBytes(46));
      var _0x91fa21 = _0x1edad5.session.sp;
      _0x91fa21.pre_master_secret = _0x4450f6.getBytes();
      var _0x1d0007 = _0x1edad5.session.serverCertificate.publicKey;
      _0x4450f6 = _0x1d0007.encrypt(_0x91fa21.pre_master_secret);
      var _0x881828 = _0x4450f6.length + 2;
      var _0xa5e1c3 = _0x29477f.util.createBuffer();
      _0xa5e1c3.putByte(_0x3ccd21.HandshakeType.client_key_exchange);
      _0xa5e1c3.putInt24(_0x881828);
      _0xa5e1c3.putInt16(_0x4450f6.length);
      _0xa5e1c3.putBytes(_0x4450f6);
      return _0xa5e1c3;
    };
    _0x3ccd21.createServerKeyExchange = function (_0x3cc313) {
      var _0x40d9d7 = 0;
      var _0x39d71f = _0x29477f.util.createBuffer();
      if (_0x40d9d7 > 0) {
        _0x39d71f.putByte(_0x3ccd21.HandshakeType.server_key_exchange);
        _0x39d71f.putInt24(_0x40d9d7);
      }
      return _0x39d71f;
    };
    _0x3ccd21.getClientSignature = function (_0x4e919a, _0x252d9d) {
      var _0x325653 = _0x29477f.util.createBuffer();
      _0x325653.putBuffer(_0x4e919a.session.md5.digest());
      _0x325653.putBuffer(_0x4e919a.session.sha1.digest());
      _0x325653 = _0x325653.getBytes();
      _0x4e919a.getSignature = _0x4e919a.getSignature || function (_0x4c4770, _0x3dba87, _0x16f8f6) {
        var _0x2b8a2f = null;
        if (_0x4c4770.getPrivateKey) {
          try {
            _0x2b8a2f = _0x4c4770.getPrivateKey(_0x4c4770, _0x4c4770.session.clientCertificate);
            _0x2b8a2f = _0x29477f.pki.privateKeyFromPem(_0x2b8a2f);
          } catch (_0x3c36d1) {
            _0x4c4770.error(_0x4c4770, {
              message: "Could not get private key.",
              cause: _0x3c36d1,
              send: true,
              alert: {
                level: _0x3ccd21.Alert.Level.fatal,
                description: _0x3ccd21.Alert.Description.internal_error
              }
            });
          }
        }
        if (_0x2b8a2f === null) {
          _0x4c4770.error(_0x4c4770, {
            message: "No private key set.",
            send: true,
            alert: {
              level: _0x3ccd21.Alert.Level.fatal,
              description: _0x3ccd21.Alert.Description.internal_error
            }
          });
        } else {
          _0x3dba87 = _0x2b8a2f.sign(_0x3dba87, null);
        }
        _0x16f8f6(_0x4c4770, _0x3dba87);
      };
      _0x4e919a.getSignature(_0x4e919a, _0x325653, _0x252d9d);
    };
    _0x3ccd21.createCertificateVerify = function (_0xba1148, _0x1eb199) {
      var _0x41837b = _0x1eb199.length + 2;
      var _0x4c5758 = _0x29477f.util.createBuffer();
      _0x4c5758.putByte(_0x3ccd21.HandshakeType.certificate_verify);
      _0x4c5758.putInt24(_0x41837b);
      _0x4c5758.putInt16(_0x1eb199.length);
      _0x4c5758.putBytes(_0x1eb199);
      return _0x4c5758;
    };
    _0x3ccd21.createCertificateRequest = function (_0x1079fd) {
      var _0x312992 = _0x29477f.util.createBuffer();
      _0x312992.putByte(1);
      var _0x218705 = _0x29477f.util.createBuffer();
      for (var _0x187df8 in _0x1079fd.caStore.certs) {
        var _0x36b071 = _0x1079fd.caStore.certs[_0x187df8];
        var _0x5d3178 = _0x29477f.pki.distinguishedNameToAsn1(_0x36b071.subject);
        var _0x2358a5 = _0x29477f.asn1.toDer(_0x5d3178);
        _0x218705.putInt16(_0x2358a5.length());
        _0x218705.putBuffer(_0x2358a5);
      }
      var _0x5d916e = 1 + _0x312992.length() + 2 + _0x218705.length();
      var _0x34ed26 = _0x29477f.util.createBuffer();
      _0x34ed26.putByte(_0x3ccd21.HandshakeType.certificate_request);
      _0x34ed26.putInt24(_0x5d916e);
      _0x498a1c(_0x34ed26, 1, _0x312992);
      _0x498a1c(_0x34ed26, 2, _0x218705);
      return _0x34ed26;
    };
    _0x3ccd21.createServerHelloDone = function (_0x56ef29) {
      var _0x3d6dc6 = _0x29477f.util.createBuffer();
      _0x3d6dc6.putByte(_0x3ccd21.HandshakeType.server_hello_done);
      _0x3d6dc6.putInt24(0);
      return _0x3d6dc6;
    };
    _0x3ccd21.createChangeCipherSpec = function () {
      var _0xe11865 = _0x29477f.util.createBuffer();
      _0xe11865.putByte(1);
      return _0xe11865;
    };
    _0x3ccd21.createFinished = function (_0x265148) {
      var _0xa716f9 = _0x29477f.util.createBuffer();
      _0xa716f9.putBuffer(_0x265148.session.md5.digest());
      _0xa716f9.putBuffer(_0x265148.session.sha1.digest());
      var _0x1c2d6f = _0x265148.entity === _0x3ccd21.ConnectionEnd.client;
      var _0x1921c4 = _0x265148.session.sp;
      var _0x4f6521 = 12;
      var _0xc4d241 = _0x462797;
      var _0x115731 = _0x1c2d6f ? "client finished" : "server finished";
      _0xa716f9 = _0xc4d241(_0x1921c4.master_secret, _0x115731, _0xa716f9.getBytes(), _0x4f6521);
      var _0x5a61b6 = _0x29477f.util.createBuffer();
      _0x5a61b6.putByte(_0x3ccd21.HandshakeType.finished);
      _0x5a61b6.putInt24(_0xa716f9.length());
      _0x5a61b6.putBuffer(_0xa716f9);
      return _0x5a61b6;
    };
    _0x3ccd21.createHeartbeat = function (_0x27b528, _0x46795b, _0x406256) {
      if (typeof _0x406256 === "undefined") {
        _0x406256 = _0x46795b.length;
      }
      var _0x1c2bb9 = _0x29477f.util.createBuffer();
      _0x1c2bb9.putByte(_0x27b528);
      _0x1c2bb9.putInt16(_0x406256);
      _0x1c2bb9.putBytes(_0x46795b);
      var _0x138fe5 = _0x1c2bb9.length();
      var _0x2b10f1 = Math.max(16, _0x138fe5 - _0x406256 - 3);
      _0x1c2bb9.putBytes(_0x29477f.random.getBytes(_0x2b10f1));
      return _0x1c2bb9;
    };
    _0x3ccd21.queue = function (_0x38bf8d, _0x51b461) {
      if (!_0x51b461) {
        return;
      }
      if (_0x51b461.fragment.length() === 0) {
        if (_0x51b461.type === _0x3ccd21.ContentType.handshake || _0x51b461.type === _0x3ccd21.ContentType.alert || _0x51b461.type === _0x3ccd21.ContentType.change_cipher_spec) {
          return;
        }
      }
      if (_0x51b461.type === _0x3ccd21.ContentType.handshake) {
        var _0x5d2229 = _0x51b461.fragment.bytes();
        _0x38bf8d.session.md5.update(_0x5d2229);
        _0x38bf8d.session.sha1.update(_0x5d2229);
        _0x5d2229 = null;
      }
      var _0x1121d3;
      if (_0x51b461.fragment.length() <= _0x3ccd21.MaxFragment) {
        _0x1121d3 = [_0x51b461];
      } else {
        _0x1121d3 = [];
        var _0x43c373 = _0x51b461.fragment.bytes();
        while (_0x43c373.length > _0x3ccd21.MaxFragment) {
          _0x1121d3.push(_0x3ccd21.createRecord(_0x38bf8d, {
            type: _0x51b461.type,
            data: _0x29477f.util.createBuffer(_0x43c373.slice(0, _0x3ccd21.MaxFragment))
          }));
          _0x43c373 = _0x43c373.slice(_0x3ccd21.MaxFragment);
        }
        if (_0x43c373.length > 0) {
          _0x1121d3.push(_0x3ccd21.createRecord(_0x38bf8d, {
            type: _0x51b461.type,
            data: _0x29477f.util.createBuffer(_0x43c373)
          }));
        }
      }
      for (var _0xdc00e5 = 0; _0xdc00e5 < _0x1121d3.length && !_0x38bf8d.fail; ++_0xdc00e5) {
        var _0x20bd44 = _0x1121d3[_0xdc00e5];
        var _0x1774f5 = _0x38bf8d.state.current.write;
        if (_0x1774f5.update(_0x38bf8d, _0x20bd44)) {
          _0x38bf8d.records.push(_0x20bd44);
        }
      }
    };
    _0x3ccd21.flush = function (_0x46601e) {
      for (var _0x3ba085 = 0; _0x3ba085 < _0x46601e.records.length; ++_0x3ba085) {
        var _0x3035a8 = _0x46601e.records[_0x3ba085];
        _0x46601e.tlsData.putByte(_0x3035a8.type);
        _0x46601e.tlsData.putByte(_0x3035a8.version.major);
        _0x46601e.tlsData.putByte(_0x3035a8.version.minor);
        _0x46601e.tlsData.putInt16(_0x3035a8.fragment.length());
        _0x46601e.tlsData.putBuffer(_0x46601e.records[_0x3ba085].fragment);
      }
      _0x46601e.records = [];
      return _0x46601e.tlsDataReady(_0x46601e);
    };
    function _0x559e00(_0x5a5772) {
      switch (_0x5a5772) {
        case true:
          return true;
        case _0x29477f.pki.certificateError.bad_certificate:
          return _0x3ccd21.Alert.Description.bad_certificate;
        case _0x29477f.pki.certificateError.unsupported_certificate:
          return _0x3ccd21.Alert.Description.unsupported_certificate;
        case _0x29477f.pki.certificateError.certificate_revoked:
          return _0x3ccd21.Alert.Description.certificate_revoked;
        case _0x29477f.pki.certificateError.certificate_expired:
          return _0x3ccd21.Alert.Description.certificate_expired;
        case _0x29477f.pki.certificateError.certificate_unknown:
          return _0x3ccd21.Alert.Description.certificate_unknown;
        case _0x29477f.pki.certificateError.unknown_ca:
          return _0x3ccd21.Alert.Description.unknown_ca;
        default:
          return _0x3ccd21.Alert.Description.bad_certificate;
      }
    }
    function _0x197313(_0x194ae2) {
      switch (_0x194ae2) {
        case true:
          return true;
        case _0x3ccd21.Alert.Description.bad_certificate:
          return _0x29477f.pki.certificateError.bad_certificate;
        case _0x3ccd21.Alert.Description.unsupported_certificate:
          return _0x29477f.pki.certificateError.unsupported_certificate;
        case _0x3ccd21.Alert.Description.certificate_revoked:
          return _0x29477f.pki.certificateError.certificate_revoked;
        case _0x3ccd21.Alert.Description.certificate_expired:
          return _0x29477f.pki.certificateError.certificate_expired;
        case _0x3ccd21.Alert.Description.certificate_unknown:
          return _0x29477f.pki.certificateError.certificate_unknown;
        case _0x3ccd21.Alert.Description.unknown_ca:
          return _0x29477f.pki.certificateError.unknown_ca;
        default:
          return _0x29477f.pki.certificateError.bad_certificate;
      }
    }
    _0x3ccd21.verifyCertificateChain = function (_0x59afe7, _0xd416b5) {
      try {
        var _0x39cb64 = {};
        for (var _0xf9cd82 in _0x59afe7.verifyOptions) {
          _0x39cb64[_0xf9cd82] = _0x59afe7.verifyOptions[_0xf9cd82];
        }
        _0x39cb64.verify = function (_0x5d3b8d, _0xe44fe3, _0x36dd77) {
          var _0x509d05 = _0x559e00(_0x5d3b8d);
          var _0x3c72ed = _0x59afe7.verify(_0x59afe7, _0x5d3b8d, _0xe44fe3, _0x36dd77);
          if (_0x3c72ed !== true) {
            if (typeof _0x3c72ed === "object" && !_0x29477f.util.isArray(_0x3c72ed)) {
              var _0x5a570b = new Error("The application rejected the certificate.");
              _0x5a570b.send = true;
              _0x5a570b.alert = {
                level: _0x3ccd21.Alert.Level.fatal,
                description: _0x3ccd21.Alert.Description.bad_certificate
              };
              if (_0x3c72ed.message) {
                _0x5a570b.message = _0x3c72ed.message;
              }
              if (_0x3c72ed.alert) {
                _0x5a570b.alert.description = _0x3c72ed.alert;
              }
              throw _0x5a570b;
            }
            if (_0x3c72ed !== _0x5d3b8d) {
              _0x3c72ed = _0x197313(_0x3c72ed);
            }
          }
          return _0x3c72ed;
        };
        _0x29477f.pki.verifyCertificateChain(_0x59afe7.caStore, _0xd416b5, _0x39cb64);
      } catch (_0x26487b) {
        var _0x5ab6a8 = _0x26487b;
        if (typeof _0x5ab6a8 !== "object" || _0x29477f.util.isArray(_0x5ab6a8)) {
          _0x5ab6a8 = {
            send: true,
            alert: {
              level: _0x3ccd21.Alert.Level.fatal,
              description: _0x559e00(_0x26487b)
            }
          };
        }
        if (!("send" in _0x5ab6a8)) {
          _0x5ab6a8.send = true;
        }
        if (!("alert" in _0x5ab6a8)) {
          _0x5ab6a8.alert = {
            level: _0x3ccd21.Alert.Level.fatal,
            description: _0x559e00(_0x5ab6a8.error)
          };
        }
        _0x59afe7.error(_0x59afe7, _0x5ab6a8);
      }
      return !_0x59afe7.fail;
    };
    _0x3ccd21.createSessionCache = function (_0x2a5766, _0x184b95) {
      var _0x3e92d6 = null;
      if (_0x2a5766 && _0x2a5766.getSession && _0x2a5766.setSession && _0x2a5766.order) {
        _0x3e92d6 = _0x2a5766;
      } else {
        _0x3e92d6 = {};
        _0x3e92d6.cache = _0x2a5766 || {};
        _0x3e92d6.capacity = Math.max(_0x184b95 || 100, 1);
        _0x3e92d6.order = [];
        for (var _0x5d171c in _0x2a5766) {
          if (_0x3e92d6.order.length <= _0x184b95) {
            _0x3e92d6.order.push(_0x5d171c);
          } else {
            delete _0x2a5766[_0x5d171c];
          }
        }
        _0x3e92d6.getSession = function (_0x5b9558) {
          var _0x25feec = null;
          var _0x496be6 = null;
          if (_0x5b9558) {
            _0x496be6 = _0x29477f.util.bytesToHex(_0x5b9558);
          } else if (_0x3e92d6.order.length > 0) {
            _0x496be6 = _0x3e92d6.order[0];
          }
          if (_0x496be6 !== null && _0x496be6 in _0x3e92d6.cache) {
            _0x25feec = _0x3e92d6.cache[_0x496be6];
            delete _0x3e92d6.cache[_0x496be6];
            for (var _0x4dfa90 in _0x3e92d6.order) {
              if (_0x3e92d6.order[_0x4dfa90] === _0x496be6) {
                _0x3e92d6.order.splice(_0x4dfa90, 1);
                break;
              }
            }
          }
          return _0x25feec;
        };
        _0x3e92d6.setSession = function (_0x3b7a77, _0x2941ee) {
          if (_0x3e92d6.order.length === _0x3e92d6.capacity) {
            var _0x133a5b = _0x3e92d6.order.shift();
            delete _0x3e92d6.cache[_0x133a5b];
          }
          var _0x133a5b = _0x29477f.util.bytesToHex(_0x3b7a77);
          _0x3e92d6.order.push(_0x133a5b);
          _0x3e92d6.cache[_0x133a5b] = _0x2941ee;
        };
      }
      return _0x3e92d6;
    };
    _0x3ccd21.createConnection = function (_0x56c4ed) {
      var _0x3d844f = null;
      if (_0x56c4ed.caStore) {
        if (_0x29477f.util.isArray(_0x56c4ed.caStore)) {
          _0x3d844f = _0x29477f.pki.createCaStore(_0x56c4ed.caStore);
        } else {
          _0x3d844f = _0x56c4ed.caStore;
        }
      } else {
        _0x3d844f = _0x29477f.pki.createCaStore();
      }
      var _0x4c90e5 = _0x56c4ed.cipherSuites || null;
      if (_0x4c90e5 === null) {
        _0x4c90e5 = [];
        for (var _0x414691 in _0x3ccd21.CipherSuites) {
          _0x4c90e5.push(_0x3ccd21.CipherSuites[_0x414691]);
        }
      }
      var _0x1aaf7e = _0x56c4ed.server || false ? _0x3ccd21.ConnectionEnd.server : _0x3ccd21.ConnectionEnd.client;
      var _0x326a79 = _0x56c4ed.sessionCache ? _0x3ccd21.createSessionCache(_0x56c4ed.sessionCache) : null;
      var _0x5bb65e = {
        version: {
          major: _0x3ccd21.Version.major,
          minor: _0x3ccd21.Version.minor
        },
        entity: _0x1aaf7e,
        sessionId: _0x56c4ed.sessionId,
        caStore: _0x3d844f,
        sessionCache: _0x326a79,
        cipherSuites: _0x4c90e5,
        connected: _0x56c4ed.connected,
        virtualHost: _0x56c4ed.virtualHost || null,
        verifyClient: _0x56c4ed.verifyClient || false,
        verify: _0x56c4ed.verify || function (_0x34bcc1, _0x43aabb, _0x16d6e3, _0x2609e1) {
          return _0x43aabb;
        },
        verifyOptions: _0x56c4ed.verifyOptions || {},
        getCertificate: _0x56c4ed.getCertificate || null,
        getPrivateKey: _0x56c4ed.getPrivateKey || null,
        getSignature: _0x56c4ed.getSignature || null,
        input: _0x29477f.util.createBuffer(),
        tlsData: _0x29477f.util.createBuffer(),
        data: _0x29477f.util.createBuffer(),
        tlsDataReady: _0x56c4ed.tlsDataReady,
        dataReady: _0x56c4ed.dataReady,
        heartbeatReceived: _0x56c4ed.heartbeatReceived,
        closed: _0x56c4ed.closed,
        error: function (_0x38a908, _0x22dfee) {
          _0x22dfee.origin = _0x22dfee.origin || (_0x38a908.entity === _0x3ccd21.ConnectionEnd.client ? "client" : "server");
          if (_0x22dfee.send) {
            _0x3ccd21.queue(_0x38a908, _0x3ccd21.createAlert(_0x38a908, _0x22dfee.alert));
            _0x3ccd21.flush(_0x38a908);
          }
          var _0x34c430 = _0x22dfee.fatal !== false;
          if (_0x34c430) {
            _0x38a908.fail = true;
          }
          _0x56c4ed.error(_0x38a908, _0x22dfee);
          if (_0x34c430) {
            _0x38a908.close(false);
          }
        },
        deflate: _0x56c4ed.deflate || null,
        inflate: _0x56c4ed.inflate || null
      };
      _0x5bb65e.reset = function (_0x329484) {
        _0x5bb65e.version = {
          major: _0x3ccd21.Version.major,
          minor: _0x3ccd21.Version.minor
        };
        _0x5bb65e.record = null;
        _0x5bb65e.session = null;
        _0x5bb65e.peerCertificate = null;
        _0x5bb65e.state = {
          pending: null,
          current: null
        };
        _0x5bb65e.expect = _0x5bb65e.entity === _0x3ccd21.ConnectionEnd.client ? _0x45e1a4 : _0x1db006;
        _0x5bb65e.fragmented = null;
        _0x5bb65e.records = [];
        _0x5bb65e.open = false;
        _0x5bb65e.handshakes = 0;
        _0x5bb65e.handshaking = false;
        _0x5bb65e.isConnected = false;
        _0x5bb65e.fail = !_0x329484 && typeof _0x329484 !== "undefined";
        _0x5bb65e.input.clear();
        _0x5bb65e.tlsData.clear();
        _0x5bb65e.data.clear();
        _0x5bb65e.state.current = _0x3ccd21.createConnectionState(_0x5bb65e);
      };
      _0x5bb65e.reset();
      function _0x30e0e0(_0x128093, _0x25542b) {
        var _0x21e6d3 = _0x25542b.type - _0x3ccd21.ContentType.change_cipher_spec;
        var _0xae70ff = _0x2cedf6[_0x128093.entity][_0x128093.expect];
        if (_0x21e6d3 in _0xae70ff) {
          _0xae70ff[_0x21e6d3](_0x128093, _0x25542b);
        } else {
          _0x3ccd21.handleUnexpected(_0x128093, _0x25542b);
        }
      }
      function _0x19f65e(_0x3abbb1) {
        var _0x10f580 = 0;
        var _0x43598c = _0x3abbb1.input;
        var _0x26685a = _0x43598c.length();
        if (_0x26685a < 5) {
          _0x10f580 = 5 - _0x26685a;
        } else {
          _0x3abbb1.record = {
            type: _0x43598c.getByte(),
            version: {
              major: _0x43598c.getByte(),
              minor: _0x43598c.getByte()
            },
            length: _0x43598c.getInt16(),
            fragment: _0x29477f.util.createBuffer(),
            ready: false
          };
          var _0xed6494 = _0x3abbb1.record.version.major === _0x3abbb1.version.major;
          if (_0xed6494 && _0x3abbb1.session && _0x3abbb1.session.version) {
            _0xed6494 = _0x3abbb1.record.version.minor === _0x3abbb1.version.minor;
          }
          if (!_0xed6494) {
            _0x3abbb1.error(_0x3abbb1, {
              message: "Incompatible TLS version.",
              send: true,
              alert: {
                level: _0x3ccd21.Alert.Level.fatal,
                description: _0x3ccd21.Alert.Description.protocol_version
              }
            });
          }
        }
        return _0x10f580;
      }
      function _0x5a2a1b(_0x1714c1) {
        var _0x846038 = 0;
        var _0x431b2f = _0x1714c1.input;
        var _0x4ab821 = _0x431b2f.length();
        if (_0x4ab821 < _0x1714c1.record.length) {
          _0x846038 = _0x1714c1.record.length - _0x4ab821;
        } else {
          _0x1714c1.record.fragment.putBytes(_0x431b2f.getBytes(_0x1714c1.record.length));
          _0x431b2f.compact();
          var _0x35352e = _0x1714c1.state.current.read;
          if (_0x35352e.update(_0x1714c1, _0x1714c1.record)) {
            if (_0x1714c1.fragmented !== null) {
              if (_0x1714c1.fragmented.type === _0x1714c1.record.type) {
                _0x1714c1.fragmented.fragment.putBuffer(_0x1714c1.record.fragment);
                _0x1714c1.record = _0x1714c1.fragmented;
              } else {
                _0x1714c1.error(_0x1714c1, {
                  message: "Invalid fragmented record.",
                  send: true,
                  alert: {
                    level: _0x3ccd21.Alert.Level.fatal,
                    description: _0x3ccd21.Alert.Description.unexpected_message
                  }
                });
              }
            }
            _0x1714c1.record.ready = true;
          }
        }
        return _0x846038;
      }
      _0x5bb65e.handshake = function (_0x16a699) {
        if (_0x5bb65e.entity !== _0x3ccd21.ConnectionEnd.client) {
          _0x5bb65e.error(_0x5bb65e, {
            message: "Cannot initiate handshake as a server.",
            fatal: false
          });
        } else if (_0x5bb65e.handshaking) {
          _0x5bb65e.error(_0x5bb65e, {
            message: "Handshake already in progress.",
            fatal: false
          });
        } else {
          if (_0x5bb65e.fail && !_0x5bb65e.open && _0x5bb65e.handshakes === 0) {
            _0x5bb65e.fail = false;
          }
          _0x5bb65e.handshaking = true;
          _0x16a699 = _0x16a699 || "";
          var _0x327fc8 = null;
          if (_0x16a699.length > 0) {
            if (_0x5bb65e.sessionCache) {
              _0x327fc8 = _0x5bb65e.sessionCache.getSession(_0x16a699);
            }
            if (_0x327fc8 === null) {
              _0x16a699 = "";
            }
          }
          if (_0x16a699.length === 0 && _0x5bb65e.sessionCache) {
            _0x327fc8 = _0x5bb65e.sessionCache.getSession();
            if (_0x327fc8 !== null) {
              _0x16a699 = _0x327fc8.id;
            }
          }
          _0x5bb65e.session = {
            id: _0x16a699,
            version: null,
            cipherSuite: null,
            compressionMethod: null,
            serverCertificate: null,
            certificateRequest: null,
            clientCertificate: null,
            sp: {},
            md5: _0x29477f.md.md5.create(),
            sha1: _0x29477f.md.sha1.create()
          };
          if (_0x327fc8) {
            _0x5bb65e.version = _0x327fc8.version;
            _0x5bb65e.session.sp = _0x327fc8.sp;
          }
          _0x5bb65e.session.sp.client_random = _0x3ccd21.createRandom().getBytes();
          _0x5bb65e.open = true;
          _0x3ccd21.queue(_0x5bb65e, _0x3ccd21.createRecord(_0x5bb65e, {
            type: _0x3ccd21.ContentType.handshake,
            data: _0x3ccd21.createClientHello(_0x5bb65e)
          }));
          _0x3ccd21.flush(_0x5bb65e);
        }
      };
      _0x5bb65e.process = function (_0x314956) {
        var _0xc4b083 = 0;
        if (_0x314956) {
          _0x5bb65e.input.putBytes(_0x314956);
        }
        if (!_0x5bb65e.fail) {
          if (_0x5bb65e.record !== null && _0x5bb65e.record.ready && _0x5bb65e.record.fragment.isEmpty()) {
            _0x5bb65e.record = null;
          }
          if (_0x5bb65e.record === null) {
            _0xc4b083 = _0x19f65e(_0x5bb65e);
          }
          if (!_0x5bb65e.fail && _0x5bb65e.record !== null && !_0x5bb65e.record.ready) {
            _0xc4b083 = _0x5a2a1b(_0x5bb65e);
          }
          if (!_0x5bb65e.fail && _0x5bb65e.record !== null && _0x5bb65e.record.ready) {
            _0x30e0e0(_0x5bb65e, _0x5bb65e.record);
          }
        }
        return _0xc4b083;
      };
      _0x5bb65e.prepare = function (_0x1405a8) {
        _0x3ccd21.queue(_0x5bb65e, _0x3ccd21.createRecord(_0x5bb65e, {
          type: _0x3ccd21.ContentType.application_data,
          data: _0x29477f.util.createBuffer(_0x1405a8)
        }));
        return _0x3ccd21.flush(_0x5bb65e);
      };
      _0x5bb65e.prepareHeartbeatRequest = function (_0x5557b1, _0xb5d8d7) {
        if (_0x5557b1 instanceof _0x29477f.util.ByteBuffer) {
          _0x5557b1 = _0x5557b1.bytes();
        }
        if (typeof _0xb5d8d7 === "undefined") {
          _0xb5d8d7 = _0x5557b1.length;
        }
        _0x5bb65e.expectedHeartbeatPayload = _0x5557b1;
        _0x3ccd21.queue(_0x5bb65e, _0x3ccd21.createRecord(_0x5bb65e, {
          type: _0x3ccd21.ContentType.heartbeat,
          data: _0x3ccd21.createHeartbeat(_0x3ccd21.HeartbeatMessageType.heartbeat_request, _0x5557b1, _0xb5d8d7)
        }));
        return _0x3ccd21.flush(_0x5bb65e);
      };
      _0x5bb65e.close = function (_0x2e75df) {
        if (!_0x5bb65e.fail && _0x5bb65e.sessionCache && _0x5bb65e.session) {
          var _0x36d311 = {
            id: _0x5bb65e.session.id,
            version: _0x5bb65e.session.version,
            sp: _0x5bb65e.session.sp
          };
          _0x36d311.sp.keys = null;
          _0x5bb65e.sessionCache.setSession(_0x36d311.id, _0x36d311);
        }
        if (_0x5bb65e.open) {
          _0x5bb65e.open = false;
          _0x5bb65e.input.clear();
          if (_0x5bb65e.isConnected || _0x5bb65e.handshaking) {
            _0x5bb65e.isConnected = _0x5bb65e.handshaking = false;
            _0x3ccd21.queue(_0x5bb65e, _0x3ccd21.createAlert(_0x5bb65e, {
              level: _0x3ccd21.Alert.Level.warning,
              description: _0x3ccd21.Alert.Description.close_notify
            }));
            _0x3ccd21.flush(_0x5bb65e);
          }
          _0x5bb65e.closed(_0x5bb65e);
        }
        _0x5bb65e.reset(_0x2e75df);
      };
      return _0x5bb65e;
    };
    _0x494d9d.exports = _0x29477f.tls = _0x29477f.tls || {};
    for (_0x4b6c56 in _0x3ccd21) {
      if (typeof _0x3ccd21[_0x4b6c56] !== "function") {
        _0x29477f.tls[_0x4b6c56] = _0x3ccd21[_0x4b6c56];
      }
    }
    var _0x4b6c56;
    _0x29477f.tls.prf_tls1 = _0x462797;
    _0x29477f.tls.hmac_sha1 = _0x33ad84;
    _0x29477f.tls.createSessionCache = _0x3ccd21.createSessionCache;
    _0x29477f.tls.createConnection = _0x3ccd21.createConnection;
  }
});
var require_aesCipherSuites = __commonJS({
  "node_modules/node-forge/lib/aesCipherSuites.js"(_0x21854b, _0x4a4599) {
    var _0x105990 = require_forge();
    require_aes();
    require_tls();
    var _0x55fcd3 = _0x4a4599.exports = _0x105990.tls;
    _0x55fcd3.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA = {
      id: [0, 47],
      name: "TLS_RSA_WITH_AES_128_CBC_SHA",
      initSecurityParameters: function (_0x1aeb1a) {
        _0x1aeb1a.bulk_cipher_algorithm = _0x55fcd3.BulkCipherAlgorithm.aes;
        _0x1aeb1a.cipher_type = _0x55fcd3.CipherType.block;
        _0x1aeb1a.enc_key_length = 16;
        _0x1aeb1a.block_length = 16;
        _0x1aeb1a.fixed_iv_length = 16;
        _0x1aeb1a.record_iv_length = 16;
        _0x1aeb1a.mac_algorithm = _0x55fcd3.MACAlgorithm.hmac_sha1;
        _0x1aeb1a.mac_length = 20;
        _0x1aeb1a.mac_key_length = 20;
      },
      initConnectionState: _0x4290a0
    };
    _0x55fcd3.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA = {
      id: [0, 53],
      name: "TLS_RSA_WITH_AES_256_CBC_SHA",
      initSecurityParameters: function (_0x1ee225) {
        _0x1ee225.bulk_cipher_algorithm = _0x55fcd3.BulkCipherAlgorithm.aes;
        _0x1ee225.cipher_type = _0x55fcd3.CipherType.block;
        _0x1ee225.enc_key_length = 32;
        _0x1ee225.block_length = 16;
        _0x1ee225.fixed_iv_length = 16;
        _0x1ee225.record_iv_length = 16;
        _0x1ee225.mac_algorithm = _0x55fcd3.MACAlgorithm.hmac_sha1;
        _0x1ee225.mac_length = 20;
        _0x1ee225.mac_key_length = 20;
      },
      initConnectionState: _0x4290a0
    };
    function _0x4290a0(_0x48beed, _0x3e7554, _0x157226) {
      var _0x6e8ab4 = _0x3e7554.entity === _0x105990.tls.ConnectionEnd.client;
      _0x48beed.read.cipherState = {
        init: false,
        cipher: _0x105990.cipher.createDecipher("AES-CBC", _0x6e8ab4 ? _0x157226.keys.server_write_key : _0x157226.keys.client_write_key),
        iv: _0x6e8ab4 ? _0x157226.keys.server_write_IV : _0x157226.keys.client_write_IV
      };
      _0x48beed.write.cipherState = {
        init: false,
        cipher: _0x105990.cipher.createCipher("AES-CBC", _0x6e8ab4 ? _0x157226.keys.client_write_key : _0x157226.keys.server_write_key),
        iv: _0x6e8ab4 ? _0x157226.keys.client_write_IV : _0x157226.keys.server_write_IV
      };
      _0x48beed.read.cipherFunction = _0xa6bca;
      _0x48beed.write.cipherFunction = _0x46343e;
      _0x48beed.read.macLength = _0x48beed.write.macLength = _0x157226.mac_length;
      _0x48beed.read.macFunction = _0x48beed.write.macFunction = _0x55fcd3.hmac_sha1;
    }
    function _0x46343e(_0x5efa25, _0x18fc0f) {
      var _0x55f2a8 = false;
      var _0x42ce5f = _0x18fc0f.macFunction(_0x18fc0f.macKey, _0x18fc0f.sequenceNumber, _0x5efa25);
      _0x5efa25.fragment.putBytes(_0x42ce5f);
      _0x18fc0f.updateSequenceNumber();
      var _0x22151b;
      if (_0x5efa25.version.minor === _0x55fcd3.Versions.TLS_1_0.minor) {
        _0x22151b = _0x18fc0f.cipherState.init ? null : _0x18fc0f.cipherState.iv;
      } else {
        _0x22151b = _0x105990.random.getBytesSync(16);
      }
      _0x18fc0f.cipherState.init = true;
      var _0x516615 = _0x18fc0f.cipherState.cipher;
      _0x516615.start({
        iv: _0x22151b
      });
      if (_0x5efa25.version.minor >= _0x55fcd3.Versions.TLS_1_1.minor) {
        _0x516615.output.putBytes(_0x22151b);
      }
      _0x516615.update(_0x5efa25.fragment);
      if (_0x516615.finish(_0x4f5d15)) {
        _0x5efa25.fragment = _0x516615.output;
        _0x5efa25.length = _0x5efa25.fragment.length();
        _0x55f2a8 = true;
      }
      return _0x55f2a8;
    }
    function _0x4f5d15(_0x2a66ab, _0x4e9c5f, _0xdc9814) {
      if (!_0xdc9814) {
        var _0x59e008 = _0x2a66ab - _0x4e9c5f.length() % _0x2a66ab;
        _0x4e9c5f.fillWithByte(_0x59e008 - 1, _0x59e008);
      }
      return true;
    }
    function _0x498571(_0x2b4c1a, _0x224d38, _0x293f7f) {
      var _0x2b1efe = true;
      if (_0x293f7f) {
        var _0x41ea64 = _0x224d38.length();
        var _0xaf4cbc = _0x224d38.last();
        for (var _0x12b75c = _0x41ea64 - 1 - _0xaf4cbc; _0x12b75c < _0x41ea64 - 1; ++_0x12b75c) {
          _0x2b1efe = _0x2b1efe && _0x224d38.at(_0x12b75c) == _0xaf4cbc;
        }
        if (_0x2b1efe) {
          _0x224d38.truncate(_0xaf4cbc + 1);
        }
      }
      return _0x2b1efe;
    }
    function _0xa6bca(_0x47ae96, _0x6591bc) {
      var _0x35c1d7 = false;
      var _0x3a156a;
      if (_0x47ae96.version.minor === _0x55fcd3.Versions.TLS_1_0.minor) {
        _0x3a156a = _0x6591bc.cipherState.init ? null : _0x6591bc.cipherState.iv;
      } else {
        _0x3a156a = _0x47ae96.fragment.getBytes(16);
      }
      _0x6591bc.cipherState.init = true;
      var _0x3988fa = _0x6591bc.cipherState.cipher;
      _0x3988fa.start({
        iv: _0x3a156a
      });
      _0x3988fa.update(_0x47ae96.fragment);
      _0x35c1d7 = _0x3988fa.finish(_0x498571);
      var _0x31d4a5 = _0x6591bc.macLength;
      var _0x142e6f = _0x105990.random.getBytesSync(_0x31d4a5);
      var _0x146d1b = _0x3988fa.output.length();
      if (_0x146d1b >= _0x31d4a5) {
        _0x47ae96.fragment = _0x3988fa.output.getBytes(_0x146d1b - _0x31d4a5);
        _0x142e6f = _0x3988fa.output.getBytes(_0x31d4a5);
      } else {
        _0x47ae96.fragment = _0x3988fa.output.getBytes();
      }
      _0x47ae96.fragment = _0x105990.util.createBuffer(_0x47ae96.fragment);
      _0x47ae96.length = _0x47ae96.fragment.length();
      var _0xb92539 = _0x6591bc.macFunction(_0x6591bc.macKey, _0x6591bc.sequenceNumber, _0x47ae96);
      _0x6591bc.updateSequenceNumber();
      _0x35c1d7 = _0x5c470c(_0x6591bc.macKey, _0x142e6f, _0xb92539) && _0x35c1d7;
      return _0x35c1d7;
    }
    function _0x5c470c(_0xf95a41, _0x51c315, _0x3d0fd8) {
      var _0x4f6642 = _0x105990.hmac.create();
      _0x4f6642.start("SHA1", _0xf95a41);
      _0x4f6642.update(_0x51c315);
      _0x51c315 = _0x4f6642.digest().getBytes();
      _0x4f6642.start(null, null);
      _0x4f6642.update(_0x3d0fd8);
      _0x3d0fd8 = _0x4f6642.digest().getBytes();
      return _0x51c315 === _0x3d0fd8;
    }
  }
});
var require_sha512 = __commonJS({
  "node_modules/node-forge/lib/sha512.js"(_0x5ee79e, _0x499104) {
    var _0x195ff0 = require_forge();
    require_md();
    require_util();
    var _0x58825a = _0x499104.exports = _0x195ff0.sha512 = _0x195ff0.sha512 || {};
    _0x195ff0.md.sha512 = _0x195ff0.md.algorithms.sha512 = _0x58825a;
    var _0x3254f1 = _0x195ff0.sha384 = _0x195ff0.sha512.sha384 = _0x195ff0.sha512.sha384 || {};
    _0x3254f1.create = function () {
      return _0x58825a.create("SHA-384");
    };
    _0x195ff0.md.sha384 = _0x195ff0.md.algorithms.sha384 = _0x3254f1;
    _0x195ff0.sha512.sha256 = _0x195ff0.sha512.sha256 || {
      create: function () {
        return _0x58825a.create("SHA-512/256");
      }
    };
    _0x195ff0.md["sha512/256"] = _0x195ff0.md.algorithms["sha512/256"] = _0x195ff0.sha512.sha256;
    _0x195ff0.sha512.sha224 = _0x195ff0.sha512.sha224 || {
      create: function () {
        return _0x58825a.create("SHA-512/224");
      }
    };
    _0x195ff0.md["sha512/224"] = _0x195ff0.md.algorithms["sha512/224"] = _0x195ff0.sha512.sha224;
    _0x58825a.create = function (_0x516f44) {
      if (!_0x1dbb45) {
        _0x134df5();
      }
      if (typeof _0x516f44 === "undefined") {
        _0x516f44 = "SHA-512";
      }
      if (!(_0x516f44 in _0x14e6bd)) {
        throw new Error("Invalid SHA-512 algorithm: " + _0x516f44);
      }
      var _0x2b0ccb = _0x14e6bd[_0x516f44];
      var _0x3f0218 = null;
      var _0x2142ab = _0x195ff0.util.createBuffer();
      var _0x89f74f = new Array(80);
      for (var _0x4e1eb7 = 0; _0x4e1eb7 < 80; ++_0x4e1eb7) {
        _0x89f74f[_0x4e1eb7] = new Array(2);
      }
      var _0x44ffc0 = 64;
      switch (_0x516f44) {
        case "SHA-384":
          _0x44ffc0 = 48;
          break;
        case "SHA-512/256":
          _0x44ffc0 = 32;
          break;
        case "SHA-512/224":
          _0x44ffc0 = 28;
          break;
      }
      var _0x477a97 = {
        algorithm: _0x516f44.replace("-", "").toLowerCase(),
        blockLength: 128,
        digestLength: _0x44ffc0,
        messageLength: 0,
        fullMessageLength: null,
        messageLengthSize: 16
      };
      _0x477a97.start = function () {
        _0x477a97.messageLength = 0;
        _0x477a97.fullMessageLength = _0x477a97.messageLength128 = [];
        var _0x7dc76a = _0x477a97.messageLengthSize / 4;
        for (var _0x59851b = 0; _0x59851b < _0x7dc76a; ++_0x59851b) {
          _0x477a97.fullMessageLength.push(0);
        }
        _0x2142ab = _0x195ff0.util.createBuffer();
        _0x3f0218 = new Array(_0x2b0ccb.length);
        for (var _0x59851b = 0; _0x59851b < _0x2b0ccb.length; ++_0x59851b) {
          _0x3f0218[_0x59851b] = _0x2b0ccb[_0x59851b].slice(0);
        }
        return _0x477a97;
      };
      _0x477a97.start();
      _0x477a97.update = function (_0x8a4d05, _0x4a4d61) {
        if (_0x4a4d61 === "utf8") {
          _0x8a4d05 = _0x195ff0.util.encodeUtf8(_0x8a4d05);
        }
        var _0x2c5212 = _0x8a4d05.length;
        _0x477a97.messageLength += _0x2c5212;
        _0x2c5212 = [_0x2c5212 / 4294967296 >>> 0, _0x2c5212 >>> 0];
        for (var _0x36989e = _0x477a97.fullMessageLength.length - 1; _0x36989e >= 0; --_0x36989e) {
          _0x477a97.fullMessageLength[_0x36989e] += _0x2c5212[1];
          _0x2c5212[1] = _0x2c5212[0] + (_0x477a97.fullMessageLength[_0x36989e] / 4294967296 >>> 0);
          _0x477a97.fullMessageLength[_0x36989e] = _0x477a97.fullMessageLength[_0x36989e] >>> 0;
          _0x2c5212[0] = _0x2c5212[1] / 4294967296 >>> 0;
        }
        _0x2142ab.putBytes(_0x8a4d05);
        _0x4deba3(_0x3f0218, _0x89f74f, _0x2142ab);
        if (_0x2142ab.read > 2048 || _0x2142ab.length() === 0) {
          _0x2142ab.compact();
        }
        return _0x477a97;
      };
      _0x477a97.digest = function () {
        var _0x5d9692 = _0x195ff0.util.createBuffer();
        _0x5d9692.putBytes(_0x2142ab.bytes());
        var _0x4b168d = _0x477a97.fullMessageLength[_0x477a97.fullMessageLength.length - 1] + _0x477a97.messageLengthSize;
        var _0x3a6397 = _0x4b168d & _0x477a97.blockLength - 1;
        _0x5d9692.putBytes(_0x5a35eb.substr(0, _0x477a97.blockLength - _0x3a6397));
        var _0x2d4183;
        var _0x1538b9;
        var _0x2d5886 = _0x477a97.fullMessageLength[0] * 8;
        for (var _0x2855fc = 0; _0x2855fc < _0x477a97.fullMessageLength.length - 1; ++_0x2855fc) {
          _0x2d4183 = _0x477a97.fullMessageLength[_0x2855fc + 1] * 8;
          _0x1538b9 = _0x2d4183 / 4294967296 >>> 0;
          _0x2d5886 += _0x1538b9;
          _0x5d9692.putInt32(_0x2d5886 >>> 0);
          _0x2d5886 = _0x2d4183 >>> 0;
        }
        _0x5d9692.putInt32(_0x2d5886);
        var _0x4942c5 = new Array(_0x3f0218.length);
        for (var _0x2855fc = 0; _0x2855fc < _0x3f0218.length; ++_0x2855fc) {
          _0x4942c5[_0x2855fc] = _0x3f0218[_0x2855fc].slice(0);
        }
        _0x4deba3(_0x4942c5, _0x89f74f, _0x5d9692);
        var _0x1f8a36 = _0x195ff0.util.createBuffer();
        var _0x4c44cb;
        if (_0x516f44 === "SHA-512") {
          _0x4c44cb = _0x4942c5.length;
        } else if (_0x516f44 === "SHA-384") {
          _0x4c44cb = _0x4942c5.length - 2;
        } else {
          _0x4c44cb = _0x4942c5.length - 4;
        }
        for (var _0x2855fc = 0; _0x2855fc < _0x4c44cb; ++_0x2855fc) {
          _0x1f8a36.putInt32(_0x4942c5[_0x2855fc][0]);
          if (_0x2855fc !== _0x4c44cb - 1 || _0x516f44 !== "SHA-512/224") {
            _0x1f8a36.putInt32(_0x4942c5[_0x2855fc][1]);
          }
        }
        return _0x1f8a36;
      };
      return _0x477a97;
    };
    var _0x5a35eb = null;
    var _0x1dbb45 = false;
    var _0x3f1aa7 = null;
    var _0x14e6bd = null;
    function _0x134df5() {
      _0x5a35eb = String.fromCharCode(128);
      _0x5a35eb += _0x195ff0.util.fillString(String.fromCharCode(0), 128);
      _0x3f1aa7 = [[1116352408, 3609767458], [1899447441, 602891725], [3049323471, 3964484399], [3921009573, 2173295548], [961987163, 4081628472], [1508970993, 3053834265], [2453635748, 2937671579], [2870763221, 3664609560], [3624381080, 2734883394], [310598401, 1164996542], [607225278, 1323610764], [1426881987, 3590304994], [1925078388, 4068182383], [2162078206, 991336113], [2614888103, 633803317], [3248222580, 3479774868], [3835390401, 2666613458], [4022224774, 944711139], [264347078, 2341262773], [604807628, 2007800933], [770255983, 1495990901], [1249150122, 1856431235], [1555081692, 3175218132], [1996064986, 2198950837], [2554220882, 3999719339], [2821834349, 766784016], [2952996808, 2566594879], [3210313671, 3203337956], [3336571891, 1034457026], [3584528711, 2466948901], [113926993, 3758326383], [338241895, 168717936], [666307205, 1188179964], [773529912, 1546045734], [1294757372, 1522805485], [1396182291, 2643833823], [1695183700, 2343527390], [1986661051, 1014477480], [2177026350, 1206759142], [2456956037, 344077627], [2730485921, 1290863460], [2820302411, 3158454273], [3259730800, 3505952657], [3345764771, 106217008], [3516065817, 3606008344], [3600352804, 1432725776], [4094571909, 1467031594], [275423344, 851169720], [430227734, 3100823752], [506948616, 1363258195], [659060556, 3750685593], [883997877, 3785050280], [958139571, 3318307427], [1322822218, 3812723403], [1537002063, 2003034995], [1747873779, 3602036899], [1955562222, 1575990012], [2024104815, 1125592928], [2227730452, 2716904306], [2361852424, 442776044], [2428436474, 593698344], [2756734187, 3733110249], [3204031479, 2999351573], [3329325298, 3815920427], [3391569614, 3928383900], [3515267271, 566280711], [3940187606, 3454069534], [4118630271, 4000239992], [116418474, 1914138554], [174292421, 2731055270], [289380356, 3203993006], [460393269, 320620315], [685471733, 587496836], [852142971, 1086792851], [1017036298, 365543100], [1126000580, 2618297676], [1288033470, 3409855158], [1501505948, 4234509866], [1607167915, 987167468], [1816402316, 1246189591]];
      _0x14e6bd = {};
      _0x14e6bd["SHA-512"] = [[1779033703, 4089235720], [3144134277, 2227873595], [1013904242, 4271175723], [2773480762, 1595750129], [1359893119, 2917565137], [2600822924, 725511199], [528734635, 4215389547], [1541459225, 327033209]];
      _0x14e6bd["SHA-384"] = [[3418070365, 3238371032], [1654270250, 914150663], [2438529370, 812702999], [355462360, 4144912697], [1731405415, 4290775857], [2394180231, 1750603025], [3675008525, 1694076839], [1203062813, 3204075428]];
      _0x14e6bd["SHA-512/256"] = [[573645204, 4230739756], [2673172387, 3360449730], [596883563, 1867755857], [2520282905, 1497426621], [2519219938, 2827943907], [3193839141, 1401305490], [721525244, 746961066], [246885852, 2177182882]];
      _0x14e6bd["SHA-512/224"] = [[2352822216, 424955298], [1944164710, 2312950998], [502970286, 855612546], [1738396948, 1479516111], [258812777, 2077511080], [2011393907, 79989058], [1067287976, 1780299464], [286451373, 2446758561]];
      _0x1dbb45 = true;
    }
    function _0x4deba3(_0x401707, _0x36b807, _0x64beca) {
      var _0x14b5f3;
      var _0x59589c;
      var _0x3e3e21;
      var _0xa6612d;
      var _0x1ca7ef;
      var _0x43dcdd;
      var _0x19682d;
      var _0xaa49db;
      var _0x207cba;
      var _0x46b2f5;
      var _0x481255;
      var _0xd168d;
      var _0x5c5995;
      var _0x5e4878;
      var _0x8fe617;
      var _0x40022c;
      var _0x20165c;
      var _0x1fd5c2;
      var _0x56bc92;
      var _0x1c15b6;
      var _0x4594d7;
      var _0xc835a3;
      var _0x1f23df;
      var _0x2918f;
      var _0x29cb88;
      var _0x8d3ec8;
      var _0x4938ca;
      var _0x4d452a;
      var _0x43c87f;
      var _0x47b909;
      var _0x3e70d1;
      var _0x1a712a;
      var _0x4fa99d;
      var _0x4c86da;
      var _0x47e602;
      var _0xa93cfe = _0x64beca.length();
      while (_0xa93cfe >= 128) {
        for (_0x43c87f = 0; _0x43c87f < 16; ++_0x43c87f) {
          _0x36b807[_0x43c87f][0] = _0x64beca.getInt32() >>> 0;
          _0x36b807[_0x43c87f][1] = _0x64beca.getInt32() >>> 0;
        }
        for (; _0x43c87f < 80; ++_0x43c87f) {
          _0x1a712a = _0x36b807[_0x43c87f - 2];
          _0x47b909 = _0x1a712a[0];
          _0x3e70d1 = _0x1a712a[1];
          _0x14b5f3 = ((_0x47b909 >>> 19 | _0x3e70d1 << 13) ^ (_0x3e70d1 >>> 29 | _0x47b909 << 3) ^ _0x47b909 >>> 6) >>> 0;
          _0x59589c = ((_0x47b909 << 13 | _0x3e70d1 >>> 19) ^ (_0x3e70d1 << 3 | _0x47b909 >>> 29) ^ (_0x47b909 << 26 | _0x3e70d1 >>> 6)) >>> 0;
          _0x4c86da = _0x36b807[_0x43c87f - 15];
          _0x47b909 = _0x4c86da[0];
          _0x3e70d1 = _0x4c86da[1];
          _0x3e3e21 = ((_0x47b909 >>> 1 | _0x3e70d1 << 31) ^ (_0x47b909 >>> 8 | _0x3e70d1 << 24) ^ _0x47b909 >>> 7) >>> 0;
          _0xa6612d = ((_0x47b909 << 31 | _0x3e70d1 >>> 1) ^ (_0x47b909 << 24 | _0x3e70d1 >>> 8) ^ (_0x47b909 << 25 | _0x3e70d1 >>> 7)) >>> 0;
          _0x4fa99d = _0x36b807[_0x43c87f - 7];
          _0x47e602 = _0x36b807[_0x43c87f - 16];
          _0x3e70d1 = _0x59589c + _0x4fa99d[1] + _0xa6612d + _0x47e602[1];
          _0x36b807[_0x43c87f][0] = _0x14b5f3 + _0x4fa99d[0] + _0x3e3e21 + _0x47e602[0] + (_0x3e70d1 / 4294967296 >>> 0) >>> 0;
          _0x36b807[_0x43c87f][1] = _0x3e70d1 >>> 0;
        }
        _0x5c5995 = _0x401707[0][0];
        _0x5e4878 = _0x401707[0][1];
        _0x8fe617 = _0x401707[1][0];
        _0x40022c = _0x401707[1][1];
        _0x20165c = _0x401707[2][0];
        _0x1fd5c2 = _0x401707[2][1];
        _0x56bc92 = _0x401707[3][0];
        _0x1c15b6 = _0x401707[3][1];
        _0x4594d7 = _0x401707[4][0];
        _0xc835a3 = _0x401707[4][1];
        _0x1f23df = _0x401707[5][0];
        _0x2918f = _0x401707[5][1];
        _0x29cb88 = _0x401707[6][0];
        _0x8d3ec8 = _0x401707[6][1];
        _0x4938ca = _0x401707[7][0];
        _0x4d452a = _0x401707[7][1];
        for (_0x43c87f = 0; _0x43c87f < 80; ++_0x43c87f) {
          _0x19682d = ((_0x4594d7 >>> 14 | _0xc835a3 << 18) ^ (_0x4594d7 >>> 18 | _0xc835a3 << 14) ^ (_0xc835a3 >>> 9 | _0x4594d7 << 23)) >>> 0;
          _0xaa49db = ((_0x4594d7 << 18 | _0xc835a3 >>> 14) ^ (_0x4594d7 << 14 | _0xc835a3 >>> 18) ^ (_0xc835a3 << 23 | _0x4594d7 >>> 9)) >>> 0;
          _0x207cba = (_0x29cb88 ^ _0x4594d7 & (_0x1f23df ^ _0x29cb88)) >>> 0;
          _0x46b2f5 = (_0x8d3ec8 ^ _0xc835a3 & (_0x2918f ^ _0x8d3ec8)) >>> 0;
          _0x1ca7ef = ((_0x5c5995 >>> 28 | _0x5e4878 << 4) ^ (_0x5e4878 >>> 2 | _0x5c5995 << 30) ^ (_0x5e4878 >>> 7 | _0x5c5995 << 25)) >>> 0;
          _0x43dcdd = ((_0x5c5995 << 4 | _0x5e4878 >>> 28) ^ (_0x5e4878 << 30 | _0x5c5995 >>> 2) ^ (_0x5e4878 << 25 | _0x5c5995 >>> 7)) >>> 0;
          _0x481255 = (_0x5c5995 & _0x8fe617 | _0x20165c & (_0x5c5995 ^ _0x8fe617)) >>> 0;
          _0xd168d = (_0x5e4878 & _0x40022c | _0x1fd5c2 & (_0x5e4878 ^ _0x40022c)) >>> 0;
          _0x3e70d1 = _0x4d452a + _0xaa49db + _0x46b2f5 + _0x3f1aa7[_0x43c87f][1] + _0x36b807[_0x43c87f][1];
          _0x14b5f3 = _0x4938ca + _0x19682d + _0x207cba + _0x3f1aa7[_0x43c87f][0] + _0x36b807[_0x43c87f][0] + (_0x3e70d1 / 4294967296 >>> 0) >>> 0;
          _0x59589c = _0x3e70d1 >>> 0;
          _0x3e70d1 = _0x43dcdd + _0xd168d;
          _0x3e3e21 = _0x1ca7ef + _0x481255 + (_0x3e70d1 / 4294967296 >>> 0) >>> 0;
          _0xa6612d = _0x3e70d1 >>> 0;
          _0x4938ca = _0x29cb88;
          _0x4d452a = _0x8d3ec8;
          _0x29cb88 = _0x1f23df;
          _0x8d3ec8 = _0x2918f;
          _0x1f23df = _0x4594d7;
          _0x2918f = _0xc835a3;
          _0x3e70d1 = _0x1c15b6 + _0x59589c;
          _0x4594d7 = _0x56bc92 + _0x14b5f3 + (_0x3e70d1 / 4294967296 >>> 0) >>> 0;
          _0xc835a3 = _0x3e70d1 >>> 0;
          _0x56bc92 = _0x20165c;
          _0x1c15b6 = _0x1fd5c2;
          _0x20165c = _0x8fe617;
          _0x1fd5c2 = _0x40022c;
          _0x8fe617 = _0x5c5995;
          _0x40022c = _0x5e4878;
          _0x3e70d1 = _0x59589c + _0xa6612d;
          _0x5c5995 = _0x14b5f3 + _0x3e3e21 + (_0x3e70d1 / 4294967296 >>> 0) >>> 0;
          _0x5e4878 = _0x3e70d1 >>> 0;
        }
        _0x3e70d1 = _0x401707[0][1] + _0x5e4878;
        _0x401707[0][0] = _0x401707[0][0] + _0x5c5995 + (_0x3e70d1 / 4294967296 >>> 0) >>> 0;
        _0x401707[0][1] = _0x3e70d1 >>> 0;
        _0x3e70d1 = _0x401707[1][1] + _0x40022c;
        _0x401707[1][0] = _0x401707[1][0] + _0x8fe617 + (_0x3e70d1 / 4294967296 >>> 0) >>> 0;
        _0x401707[1][1] = _0x3e70d1 >>> 0;
        _0x3e70d1 = _0x401707[2][1] + _0x1fd5c2;
        _0x401707[2][0] = _0x401707[2][0] + _0x20165c + (_0x3e70d1 / 4294967296 >>> 0) >>> 0;
        _0x401707[2][1] = _0x3e70d1 >>> 0;
        _0x3e70d1 = _0x401707[3][1] + _0x1c15b6;
        _0x401707[3][0] = _0x401707[3][0] + _0x56bc92 + (_0x3e70d1 / 4294967296 >>> 0) >>> 0;
        _0x401707[3][1] = _0x3e70d1 >>> 0;
        _0x3e70d1 = _0x401707[4][1] + _0xc835a3;
        _0x401707[4][0] = _0x401707[4][0] + _0x4594d7 + (_0x3e70d1 / 4294967296 >>> 0) >>> 0;
        _0x401707[4][1] = _0x3e70d1 >>> 0;
        _0x3e70d1 = _0x401707[5][1] + _0x2918f;
        _0x401707[5][0] = _0x401707[5][0] + _0x1f23df + (_0x3e70d1 / 4294967296 >>> 0) >>> 0;
        _0x401707[5][1] = _0x3e70d1 >>> 0;
        _0x3e70d1 = _0x401707[6][1] + _0x8d3ec8;
        _0x401707[6][0] = _0x401707[6][0] + _0x29cb88 + (_0x3e70d1 / 4294967296 >>> 0) >>> 0;
        _0x401707[6][1] = _0x3e70d1 >>> 0;
        _0x3e70d1 = _0x401707[7][1] + _0x4d452a;
        _0x401707[7][0] = _0x401707[7][0] + _0x4938ca + (_0x3e70d1 / 4294967296 >>> 0) >>> 0;
        _0x401707[7][1] = _0x3e70d1 >>> 0;
        _0xa93cfe -= 128;
      }
    }
  }
});
var require_asn1_validator = __commonJS({
  "node_modules/node-forge/lib/asn1-validator.js"(_0x5edd8b) {
    var _0x19cbea = require_forge();
    require_asn1();
    var _0x13a340 = _0x19cbea.asn1;
    _0x5edd8b.privateKeyValidator = {
      name: "PrivateKeyInfo",
      tagClass: _0x13a340.Class.UNIVERSAL,
      type: _0x13a340.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "PrivateKeyInfo.version",
        tagClass: _0x13a340.Class.UNIVERSAL,
        type: _0x13a340.Type.INTEGER,
        constructed: false,
        capture: "privateKeyVersion"
      }, {
        name: "PrivateKeyInfo.privateKeyAlgorithm",
        tagClass: _0x13a340.Class.UNIVERSAL,
        type: _0x13a340.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "AlgorithmIdentifier.algorithm",
          tagClass: _0x13a340.Class.UNIVERSAL,
          type: _0x13a340.Type.OID,
          constructed: false,
          capture: "privateKeyOid"
        }]
      }, {
        name: "PrivateKeyInfo",
        tagClass: _0x13a340.Class.UNIVERSAL,
        type: _0x13a340.Type.OCTETSTRING,
        constructed: false,
        capture: "privateKey"
      }]
    };
    _0x5edd8b.publicKeyValidator = {
      name: "SubjectPublicKeyInfo",
      tagClass: _0x13a340.Class.UNIVERSAL,
      type: _0x13a340.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "subjectPublicKeyInfo",
      value: [{
        name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
        tagClass: _0x13a340.Class.UNIVERSAL,
        type: _0x13a340.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "AlgorithmIdentifier.algorithm",
          tagClass: _0x13a340.Class.UNIVERSAL,
          type: _0x13a340.Type.OID,
          constructed: false,
          capture: "publicKeyOid"
        }]
      }, {
        tagClass: _0x13a340.Class.UNIVERSAL,
        type: _0x13a340.Type.BITSTRING,
        constructed: false,
        composed: true,
        captureBitStringValue: "ed25519PublicKey"
      }]
    };
  }
});
var require_ed25519 = __commonJS({
  "node_modules/node-forge/lib/ed25519.js"(_0x3aaf55, _0x4711fc) {
    var _0x47156e = require_forge();
    require_jsbn();
    require_random();
    require_sha512();
    require_util();
    var _0x37a934 = require_asn1_validator();
    var _0x2e0e5b = _0x37a934.publicKeyValidator;
    var _0x49d55b = _0x37a934.privateKeyValidator;
    if (typeof _0x3f8c32 === "undefined") {
      _0x3f8c32 = _0x47156e.jsbn.BigInteger;
    }
    var _0x3f8c32;
    var _0x413e75 = _0x47156e.util.ByteBuffer;
    var _0x5ce779 = typeof Buffer === "undefined" ? Uint8Array : Buffer;
    _0x47156e.pki = _0x47156e.pki || {};
    _0x4711fc.exports = _0x47156e.pki.ed25519 = _0x47156e.ed25519 = _0x47156e.ed25519 || {};
    var _0xf0c5a9 = _0x47156e.ed25519;
    _0xf0c5a9.constants = {};
    _0xf0c5a9.constants.PUBLIC_KEY_BYTE_LENGTH = 32;
    _0xf0c5a9.constants.PRIVATE_KEY_BYTE_LENGTH = 64;
    _0xf0c5a9.constants.SEED_BYTE_LENGTH = 32;
    _0xf0c5a9.constants.SIGN_BYTE_LENGTH = 64;
    _0xf0c5a9.constants.HASH_BYTE_LENGTH = 64;
    _0xf0c5a9.generateKeyPair = function (_0xf250a7) {
      _0xf250a7 = _0xf250a7 || {};
      var _0x48e888 = _0xf250a7.seed;
      if (_0x48e888 === undefined) {
        _0x48e888 = _0x47156e.random.getBytesSync(_0xf0c5a9.constants.SEED_BYTE_LENGTH);
      } else if (typeof _0x48e888 === "string") {
        if (_0x48e888.length !== _0xf0c5a9.constants.SEED_BYTE_LENGTH) {
          throw new TypeError("\"seed\" must be " + _0xf0c5a9.constants.SEED_BYTE_LENGTH + " bytes in length.");
        }
      } else if (!(_0x48e888 instanceof Uint8Array)) {
        throw new TypeError("\"seed\" must be a node.js Buffer, Uint8Array, or a binary string.");
      }
      _0x48e888 = _0xb73cde({
        message: _0x48e888,
        encoding: "binary"
      });
      var _0x46e842 = new _0x5ce779(_0xf0c5a9.constants.PUBLIC_KEY_BYTE_LENGTH);
      var _0x5055e8 = new _0x5ce779(_0xf0c5a9.constants.PRIVATE_KEY_BYTE_LENGTH);
      for (var _0x2e1080 = 0; _0x2e1080 < 32; ++_0x2e1080) {
        _0x5055e8[_0x2e1080] = _0x48e888[_0x2e1080];
      }
      _0x55573f(_0x46e842, _0x5055e8);
      return {
        publicKey: _0x46e842,
        privateKey: _0x5055e8
      };
    };
    _0xf0c5a9.privateKeyFromAsn1 = function (_0x11e152) {
      var _0x42392a = {};
      var _0x365ad4 = [];
      var _0x22ae47 = _0x47156e.asn1.validate(_0x11e152, _0x49d55b, _0x42392a, _0x365ad4);
      if (!_0x22ae47) {
        var _0x98ade0 = new Error("Invalid Key.");
        _0x98ade0.errors = _0x365ad4;
        throw _0x98ade0;
      }
      var _0x3eaf6e = _0x47156e.asn1.derToOid(_0x42392a.privateKeyOid);
      var _0xd485db = _0x47156e.oids.EdDSA25519;
      if (_0x3eaf6e !== _0xd485db) {
        throw new Error("Invalid OID \"" + _0x3eaf6e + "\"; OID must be \"" + _0xd485db + "\".");
      }
      var _0x13accf = _0x42392a.privateKey;
      var _0xb66f46 = _0xb73cde({
        message: _0x47156e.asn1.fromDer(_0x13accf).value,
        encoding: "binary"
      });
      return {
        privateKeyBytes: _0xb66f46
      };
    };
    _0xf0c5a9.publicKeyFromAsn1 = function (_0x5b3ce9) {
      var _0x1bedf8 = {};
      var _0x474695 = [];
      var _0x48e021 = _0x47156e.asn1.validate(_0x5b3ce9, _0x2e0e5b, _0x1bedf8, _0x474695);
      if (!_0x48e021) {
        var _0x4ad823 = new Error("Invalid Key.");
        _0x4ad823.errors = _0x474695;
        throw _0x4ad823;
      }
      var _0x3dfbfd = _0x47156e.asn1.derToOid(_0x1bedf8.publicKeyOid);
      var _0x294ffe = _0x47156e.oids.EdDSA25519;
      if (_0x3dfbfd !== _0x294ffe) {
        throw new Error("Invalid OID \"" + _0x3dfbfd + "\"; OID must be \"" + _0x294ffe + "\".");
      }
      var _0x591ff0 = _0x1bedf8.ed25519PublicKey;
      if (_0x591ff0.length !== _0xf0c5a9.constants.PUBLIC_KEY_BYTE_LENGTH) {
        throw new Error("Key length is invalid.");
      }
      return _0xb73cde({
        message: _0x591ff0,
        encoding: "binary"
      });
    };
    _0xf0c5a9.publicKeyFromPrivateKey = function (_0x1f9314) {
      _0x1f9314 = _0x1f9314 || {};
      var _0x2a42bb = _0xb73cde({
        message: _0x1f9314.privateKey,
        encoding: "binary"
      });
      if (_0x2a42bb.length !== _0xf0c5a9.constants.PRIVATE_KEY_BYTE_LENGTH) {
        throw new TypeError("\"options.privateKey\" must have a byte length of " + _0xf0c5a9.constants.PRIVATE_KEY_BYTE_LENGTH);
      }
      var _0x1913a5 = new _0x5ce779(_0xf0c5a9.constants.PUBLIC_KEY_BYTE_LENGTH);
      for (var _0x5592a6 = 0; _0x5592a6 < _0x1913a5.length; ++_0x5592a6) {
        _0x1913a5[_0x5592a6] = _0x2a42bb[32 + _0x5592a6];
      }
      return _0x1913a5;
    };
    _0xf0c5a9.sign = function (_0x5d758d) {
      _0x5d758d = _0x5d758d || {};
      var _0x4eaded = _0xb73cde(_0x5d758d);
      var _0x5d9989 = _0xb73cde({
        message: _0x5d758d.privateKey,
        encoding: "binary"
      });
      if (_0x5d9989.length === _0xf0c5a9.constants.SEED_BYTE_LENGTH) {
        var _0x3884c4 = _0xf0c5a9.generateKeyPair({
          seed: _0x5d9989
        });
        _0x5d9989 = _0x3884c4.privateKey;
      } else if (_0x5d9989.length !== _0xf0c5a9.constants.PRIVATE_KEY_BYTE_LENGTH) {
        throw new TypeError("\"options.privateKey\" must have a byte length of " + _0xf0c5a9.constants.SEED_BYTE_LENGTH + " or " + _0xf0c5a9.constants.PRIVATE_KEY_BYTE_LENGTH);
      }
      var _0x2a3223 = new _0x5ce779(_0xf0c5a9.constants.SIGN_BYTE_LENGTH + _0x4eaded.length);
      _0x5d9a6e(_0x2a3223, _0x4eaded, _0x4eaded.length, _0x5d9989);
      var _0x1ad5fa = new _0x5ce779(_0xf0c5a9.constants.SIGN_BYTE_LENGTH);
      for (var _0x4cb3c8 = 0; _0x4cb3c8 < _0x1ad5fa.length; ++_0x4cb3c8) {
        _0x1ad5fa[_0x4cb3c8] = _0x2a3223[_0x4cb3c8];
      }
      return _0x1ad5fa;
    };
    _0xf0c5a9.verify = function (_0x45bcd2) {
      _0x45bcd2 = _0x45bcd2 || {};
      var _0x19c92a = _0xb73cde(_0x45bcd2);
      if (_0x45bcd2.signature === undefined) {
        throw new TypeError("\"options.signature\" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a binary string.");
      }
      var _0xa5cbf0 = _0xb73cde({
        message: _0x45bcd2.signature,
        encoding: "binary"
      });
      if (_0xa5cbf0.length !== _0xf0c5a9.constants.SIGN_BYTE_LENGTH) {
        throw new TypeError("\"options.signature\" must have a byte length of " + _0xf0c5a9.constants.SIGN_BYTE_LENGTH);
      }
      var _0x3c986f = _0xb73cde({
        message: _0x45bcd2.publicKey,
        encoding: "binary"
      });
      if (_0x3c986f.length !== _0xf0c5a9.constants.PUBLIC_KEY_BYTE_LENGTH) {
        throw new TypeError("\"options.publicKey\" must have a byte length of " + _0xf0c5a9.constants.PUBLIC_KEY_BYTE_LENGTH);
      }
      var _0x5043c1 = new _0x5ce779(_0xf0c5a9.constants.SIGN_BYTE_LENGTH + _0x19c92a.length);
      var _0x25ddfc = new _0x5ce779(_0xf0c5a9.constants.SIGN_BYTE_LENGTH + _0x19c92a.length);
      var _0xb7b040;
      for (_0xb7b040 = 0; _0xb7b040 < _0xf0c5a9.constants.SIGN_BYTE_LENGTH; ++_0xb7b040) {
        _0x5043c1[_0xb7b040] = _0xa5cbf0[_0xb7b040];
      }
      for (_0xb7b040 = 0; _0xb7b040 < _0x19c92a.length; ++_0xb7b040) {
        _0x5043c1[_0xb7b040 + _0xf0c5a9.constants.SIGN_BYTE_LENGTH] = _0x19c92a[_0xb7b040];
      }
      return _0x563927(_0x25ddfc, _0x5043c1, _0x5043c1.length, _0x3c986f) >= 0;
    };
    function _0xb73cde(_0xc3afbc) {
      var _0x42dccd = _0xc3afbc.message;
      if (_0x42dccd instanceof Uint8Array || _0x42dccd instanceof _0x5ce779) {
        return _0x42dccd;
      }
      var _0x3968f9 = _0xc3afbc.encoding;
      if (_0x42dccd === undefined) {
        if (_0xc3afbc.md) {
          _0x42dccd = _0xc3afbc.md.digest().getBytes();
          _0x3968f9 = "binary";
        } else {
          throw new TypeError("\"options.message\" or \"options.md\" not specified.");
        }
      }
      if (typeof _0x42dccd === "string" && !_0x3968f9) {
        throw new TypeError("\"options.encoding\" must be \"binary\" or \"utf8\".");
      }
      if (typeof _0x42dccd === "string") {
        if (typeof Buffer !== "undefined") {
          return Buffer.from(_0x42dccd, _0x3968f9);
        }
        _0x42dccd = new _0x413e75(_0x42dccd, _0x3968f9);
      } else if (!(_0x42dccd instanceof _0x413e75)) {
        throw new TypeError("\"options.message\" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a string with \"options.encoding\" specifying its encoding.");
      }
      var _0x8f5316 = new _0x5ce779(_0x42dccd.length());
      for (var _0x50cf91 = 0; _0x50cf91 < _0x8f5316.length; ++_0x50cf91) {
        _0x8f5316[_0x50cf91] = _0x42dccd.at(_0x50cf91);
      }
      return _0x8f5316;
    }
    var _0x3b789d = _0x1954a5();
    var _0x23636c = _0x1954a5([1]);
    var _0x166446 = _0x1954a5([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]);
    var _0x40d901 = _0x1954a5([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]);
    var _0x246812 = _0x1954a5([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]);
    var _0xbd1b66 = _0x1954a5([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);
    var _0x537200 = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
    var _0xf84719 = _0x1954a5([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
    function _0x43a800(_0x823180, _0x655463) {
      var _0x375b4c = _0x47156e.md.sha512.create();
      var _0x2bd1ca = new _0x413e75(_0x823180);
      _0x375b4c.update(_0x2bd1ca.getBytes(_0x655463), "binary");
      var _0x22463f = _0x375b4c.digest().getBytes();
      if (typeof Buffer !== "undefined") {
        return Buffer.from(_0x22463f, "binary");
      }
      var _0x4b7c19 = new _0x5ce779(_0xf0c5a9.constants.HASH_BYTE_LENGTH);
      for (var _0x46a5a0 = 0; _0x46a5a0 < 64; ++_0x46a5a0) {
        _0x4b7c19[_0x46a5a0] = _0x22463f.charCodeAt(_0x46a5a0);
      }
      return _0x4b7c19;
    }
    function _0x55573f(_0x25de1b, _0x115f4b) {
      var _0x3be5cb = [_0x1954a5(), _0x1954a5(), _0x1954a5(), _0x1954a5()];
      var _0x39e5e8;
      var _0x38efc0 = _0x43a800(_0x115f4b, 32);
      _0x38efc0[0] &= 248;
      _0x38efc0[31] &= 127;
      _0x38efc0[31] |= 64;
      _0x155347(_0x3be5cb, _0x38efc0);
      _0x520609(_0x25de1b, _0x3be5cb);
      for (_0x39e5e8 = 0; _0x39e5e8 < 32; ++_0x39e5e8) {
        _0x115f4b[_0x39e5e8 + 32] = _0x25de1b[_0x39e5e8];
      }
      return 0;
    }
    function _0x5d9a6e(_0x56c7ce, _0x230aa7, _0x505fa8, _0x3b7852) {
      var _0x507880;
      var _0x4faa08;
      var _0x3b1926 = new Float64Array(64);
      var _0x2c65db = [_0x1954a5(), _0x1954a5(), _0x1954a5(), _0x1954a5()];
      var _0x26c090 = _0x43a800(_0x3b7852, 32);
      _0x26c090[0] &= 248;
      _0x26c090[31] &= 127;
      _0x26c090[31] |= 64;
      var _0x3f22f9 = _0x505fa8 + 64;
      for (_0x507880 = 0; _0x507880 < _0x505fa8; ++_0x507880) {
        _0x56c7ce[64 + _0x507880] = _0x230aa7[_0x507880];
      }
      for (_0x507880 = 0; _0x507880 < 32; ++_0x507880) {
        _0x56c7ce[32 + _0x507880] = _0x26c090[32 + _0x507880];
      }
      var _0x9887b6 = _0x43a800(_0x56c7ce.subarray(32), _0x505fa8 + 32);
      _0x18addf(_0x9887b6);
      _0x155347(_0x2c65db, _0x9887b6);
      _0x520609(_0x56c7ce, _0x2c65db);
      for (_0x507880 = 32; _0x507880 < 64; ++_0x507880) {
        _0x56c7ce[_0x507880] = _0x3b7852[_0x507880];
      }
      var _0x3a606e = _0x43a800(_0x56c7ce, _0x505fa8 + 64);
      _0x18addf(_0x3a606e);
      for (_0x507880 = 32; _0x507880 < 64; ++_0x507880) {
        _0x3b1926[_0x507880] = 0;
      }
      for (_0x507880 = 0; _0x507880 < 32; ++_0x507880) {
        _0x3b1926[_0x507880] = _0x9887b6[_0x507880];
      }
      for (_0x507880 = 0; _0x507880 < 32; ++_0x507880) {
        for (_0x4faa08 = 0; _0x4faa08 < 32; _0x4faa08++) {
          _0x3b1926[_0x507880 + _0x4faa08] += _0x3a606e[_0x507880] * _0x26c090[_0x4faa08];
        }
      }
      _0xe8816f(_0x56c7ce.subarray(32), _0x3b1926);
      return _0x3f22f9;
    }
    function _0x563927(_0x3a836a, _0x216d5a, _0x107a47, _0x56fe5c) {
      var _0x19a426;
      var _0x4fc0fd;
      var _0x8c923b = new _0x5ce779(32);
      var _0x59ab5a = [_0x1954a5(), _0x1954a5(), _0x1954a5(), _0x1954a5()];
      var _0x4e6b8b = [_0x1954a5(), _0x1954a5(), _0x1954a5(), _0x1954a5()];
      _0x4fc0fd = -1;
      if (_0x107a47 < 64) {
        return -1;
      }
      if (_0x2280b0(_0x4e6b8b, _0x56fe5c)) {
        return -1;
      }
      if (!_0x8b8833(_0x216d5a, 32)) {
        return -1;
      }
      for (_0x19a426 = 0; _0x19a426 < _0x107a47; ++_0x19a426) {
        _0x3a836a[_0x19a426] = _0x216d5a[_0x19a426];
      }
      for (_0x19a426 = 0; _0x19a426 < 32; ++_0x19a426) {
        _0x3a836a[_0x19a426 + 32] = _0x56fe5c[_0x19a426];
      }
      var _0x213b5a = _0x43a800(_0x3a836a, _0x107a47);
      _0x18addf(_0x213b5a);
      _0x5a675e(_0x59ab5a, _0x4e6b8b, _0x213b5a);
      _0x155347(_0x4e6b8b, _0x216d5a.subarray(32));
      _0xa11aff(_0x59ab5a, _0x4e6b8b);
      _0x520609(_0x8c923b, _0x59ab5a);
      _0x107a47 -= 64;
      if (_0x5009ce(_0x216d5a, 0, _0x8c923b, 0)) {
        for (_0x19a426 = 0; _0x19a426 < _0x107a47; ++_0x19a426) {
          _0x3a836a[_0x19a426] = 0;
        }
        return -1;
      }
      for (_0x19a426 = 0; _0x19a426 < _0x107a47; ++_0x19a426) {
        _0x3a836a[_0x19a426] = _0x216d5a[_0x19a426 + 64];
      }
      _0x4fc0fd = _0x107a47;
      return _0x4fc0fd;
    }
    function _0x8b8833(_0x4e2839, _0x4851a2) {
      var _0x1e15ef;
      for (_0x1e15ef = 31; _0x1e15ef >= 0; --_0x1e15ef) {
        if (_0x4e2839[_0x4851a2 + _0x1e15ef] < _0x537200[_0x1e15ef]) {
          return true;
        }
        if (_0x4e2839[_0x4851a2 + _0x1e15ef] > _0x537200[_0x1e15ef]) {
          return false;
        }
      }
      return false;
    }
    function _0xe8816f(_0x40fcf6, _0x507f67) {
      var _0x2ce49e;
      var _0x3509ac;
      var _0x28451a;
      var _0xa72ee3;
      for (_0x3509ac = 63; _0x3509ac >= 32; --_0x3509ac) {
        _0x2ce49e = 0;
        _0x28451a = _0x3509ac - 32;
        _0xa72ee3 = _0x3509ac - 12;
        for (; _0x28451a < _0xa72ee3; ++_0x28451a) {
          _0x507f67[_0x28451a] += _0x2ce49e - _0x507f67[_0x3509ac] * 16 * _0x537200[_0x28451a - (_0x3509ac - 32)];
          _0x2ce49e = _0x507f67[_0x28451a] + 128 >> 8;
          _0x507f67[_0x28451a] -= _0x2ce49e * 256;
        }
        _0x507f67[_0x28451a] += _0x2ce49e;
        _0x507f67[_0x3509ac] = 0;
      }
      _0x2ce49e = 0;
      for (_0x28451a = 0; _0x28451a < 32; ++_0x28451a) {
        _0x507f67[_0x28451a] += _0x2ce49e - (_0x507f67[31] >> 4) * _0x537200[_0x28451a];
        _0x2ce49e = _0x507f67[_0x28451a] >> 8;
        _0x507f67[_0x28451a] &= 255;
      }
      for (_0x28451a = 0; _0x28451a < 32; ++_0x28451a) {
        _0x507f67[_0x28451a] -= _0x2ce49e * _0x537200[_0x28451a];
      }
      for (_0x3509ac = 0; _0x3509ac < 32; ++_0x3509ac) {
        _0x507f67[_0x3509ac + 1] += _0x507f67[_0x3509ac] >> 8;
        _0x40fcf6[_0x3509ac] = _0x507f67[_0x3509ac] & 255;
      }
    }
    function _0x18addf(_0x65bb9f) {
      var _0x25d73f = new Float64Array(64);
      for (var _0x233821 = 0; _0x233821 < 64; ++_0x233821) {
        _0x25d73f[_0x233821] = _0x65bb9f[_0x233821];
        _0x65bb9f[_0x233821] = 0;
      }
      _0xe8816f(_0x65bb9f, _0x25d73f);
    }
    function _0xa11aff(_0x3bbedf, _0x1d526a) {
      var _0x2a9856 = _0x1954a5();
      var _0x1a897d = _0x1954a5();
      var _0x2211f0 = _0x1954a5();
      var _0x4f5f8a = _0x1954a5();
      var _0x5a7736 = _0x1954a5();
      var _0x46d072 = _0x1954a5();
      var _0x1ea126 = _0x1954a5();
      var _0x294874 = _0x1954a5();
      var _0x38199a = _0x1954a5();
      _0x4ea39f(_0x2a9856, _0x3bbedf[1], _0x3bbedf[0]);
      _0x4ea39f(_0x38199a, _0x1d526a[1], _0x1d526a[0]);
      _0x5029dc(_0x2a9856, _0x2a9856, _0x38199a);
      _0x43bcc3(_0x1a897d, _0x3bbedf[0], _0x3bbedf[1]);
      _0x43bcc3(_0x38199a, _0x1d526a[0], _0x1d526a[1]);
      _0x5029dc(_0x1a897d, _0x1a897d, _0x38199a);
      _0x5029dc(_0x2211f0, _0x3bbedf[3], _0x1d526a[3]);
      _0x5029dc(_0x2211f0, _0x2211f0, _0x40d901);
      _0x5029dc(_0x4f5f8a, _0x3bbedf[2], _0x1d526a[2]);
      _0x43bcc3(_0x4f5f8a, _0x4f5f8a, _0x4f5f8a);
      _0x4ea39f(_0x5a7736, _0x1a897d, _0x2a9856);
      _0x4ea39f(_0x46d072, _0x4f5f8a, _0x2211f0);
      _0x43bcc3(_0x1ea126, _0x4f5f8a, _0x2211f0);
      _0x43bcc3(_0x294874, _0x1a897d, _0x2a9856);
      _0x5029dc(_0x3bbedf[0], _0x5a7736, _0x46d072);
      _0x5029dc(_0x3bbedf[1], _0x294874, _0x1ea126);
      _0x5029dc(_0x3bbedf[2], _0x1ea126, _0x46d072);
      _0x5029dc(_0x3bbedf[3], _0x5a7736, _0x294874);
    }
    function _0x3f02c2(_0x65e043, _0xc315a6, _0x1e3741) {
      for (var _0x5381db = 0; _0x5381db < 4; ++_0x5381db) {
        _0x18c6b1(_0x65e043[_0x5381db], _0xc315a6[_0x5381db], _0x1e3741);
      }
    }
    function _0x520609(_0xd81524, _0x30f037) {
      var _0x25ab42 = _0x1954a5();
      var _0x248603 = _0x1954a5();
      var _0x2bc9a7 = _0x1954a5();
      _0x3d2fec(_0x2bc9a7, _0x30f037[2]);
      _0x5029dc(_0x25ab42, _0x30f037[0], _0x2bc9a7);
      _0x5029dc(_0x248603, _0x30f037[1], _0x2bc9a7);
      _0x99bcdf(_0xd81524, _0x248603);
      _0xd81524[31] ^= _0x13946f(_0x25ab42) << 7;
    }
    function _0x99bcdf(_0x14a1e8, _0x5e64ed) {
      var _0x1dba28;
      var _0x458245;
      var _0x27f2f5;
      var _0x5216fe = _0x1954a5();
      var _0x4577e9 = _0x1954a5();
      for (_0x1dba28 = 0; _0x1dba28 < 16; ++_0x1dba28) {
        _0x4577e9[_0x1dba28] = _0x5e64ed[_0x1dba28];
      }
      _0x12fc6f(_0x4577e9);
      _0x12fc6f(_0x4577e9);
      _0x12fc6f(_0x4577e9);
      for (_0x458245 = 0; _0x458245 < 2; ++_0x458245) {
        _0x5216fe[0] = _0x4577e9[0] - 65517;
        for (_0x1dba28 = 1; _0x1dba28 < 15; ++_0x1dba28) {
          _0x5216fe[_0x1dba28] = _0x4577e9[_0x1dba28] - 65535 - (_0x5216fe[_0x1dba28 - 1] >> 16 & 1);
          _0x5216fe[_0x1dba28 - 1] &= 65535;
        }
        _0x5216fe[15] = _0x4577e9[15] - 32767 - (_0x5216fe[14] >> 16 & 1);
        _0x27f2f5 = _0x5216fe[15] >> 16 & 1;
        _0x5216fe[14] &= 65535;
        _0x18c6b1(_0x4577e9, _0x5216fe, 1 - _0x27f2f5);
      }
      for (_0x1dba28 = 0; _0x1dba28 < 16; _0x1dba28++) {
        _0x14a1e8[_0x1dba28 * 2] = _0x4577e9[_0x1dba28] & 255;
        _0x14a1e8[_0x1dba28 * 2 + 1] = _0x4577e9[_0x1dba28] >> 8;
      }
    }
    function _0x2280b0(_0x56c777, _0x17ef70) {
      var _0x5748f4 = _0x1954a5();
      var _0xc4941f = _0x1954a5();
      var _0xd84689 = _0x1954a5();
      var _0x4e3268 = _0x1954a5();
      var _0x2e7ee1 = _0x1954a5();
      var _0x1b0b5b = _0x1954a5();
      var _0x40d9dd = _0x1954a5();
      _0x15686a(_0x56c777[2], _0x23636c);
      _0x23f5f9(_0x56c777[1], _0x17ef70);
      _0x22eafe(_0xd84689, _0x56c777[1]);
      _0x5029dc(_0x4e3268, _0xd84689, _0x166446);
      _0x4ea39f(_0xd84689, _0xd84689, _0x56c777[2]);
      _0x43bcc3(_0x4e3268, _0x56c777[2], _0x4e3268);
      _0x22eafe(_0x2e7ee1, _0x4e3268);
      _0x22eafe(_0x1b0b5b, _0x2e7ee1);
      _0x5029dc(_0x40d9dd, _0x1b0b5b, _0x2e7ee1);
      _0x5029dc(_0x5748f4, _0x40d9dd, _0xd84689);
      _0x5029dc(_0x5748f4, _0x5748f4, _0x4e3268);
      _0x47cd21(_0x5748f4, _0x5748f4);
      _0x5029dc(_0x5748f4, _0x5748f4, _0xd84689);
      _0x5029dc(_0x5748f4, _0x5748f4, _0x4e3268);
      _0x5029dc(_0x5748f4, _0x5748f4, _0x4e3268);
      _0x5029dc(_0x56c777[0], _0x5748f4, _0x4e3268);
      _0x22eafe(_0xc4941f, _0x56c777[0]);
      _0x5029dc(_0xc4941f, _0xc4941f, _0x4e3268);
      if (_0x164759(_0xc4941f, _0xd84689)) {
        _0x5029dc(_0x56c777[0], _0x56c777[0], _0xf84719);
      }
      _0x22eafe(_0xc4941f, _0x56c777[0]);
      _0x5029dc(_0xc4941f, _0xc4941f, _0x4e3268);
      if (_0x164759(_0xc4941f, _0xd84689)) {
        return -1;
      }
      if (_0x13946f(_0x56c777[0]) === _0x17ef70[31] >> 7) {
        _0x4ea39f(_0x56c777[0], _0x3b789d, _0x56c777[0]);
      }
      _0x5029dc(_0x56c777[3], _0x56c777[0], _0x56c777[1]);
      return 0;
    }
    function _0x23f5f9(_0x1aa47b, _0x49f591) {
      var _0x1eaaf6;
      for (_0x1eaaf6 = 0; _0x1eaaf6 < 16; ++_0x1eaaf6) {
        _0x1aa47b[_0x1eaaf6] = _0x49f591[_0x1eaaf6 * 2] + (_0x49f591[_0x1eaaf6 * 2 + 1] << 8);
      }
      _0x1aa47b[15] &= 32767;
    }
    function _0x47cd21(_0x5a8fe5, _0x2d99fb) {
      var _0x4a7c68 = _0x1954a5();
      var _0x54c0af;
      for (_0x54c0af = 0; _0x54c0af < 16; ++_0x54c0af) {
        _0x4a7c68[_0x54c0af] = _0x2d99fb[_0x54c0af];
      }
      for (_0x54c0af = 250; _0x54c0af >= 0; --_0x54c0af) {
        _0x22eafe(_0x4a7c68, _0x4a7c68);
        if (_0x54c0af !== 1) {
          _0x5029dc(_0x4a7c68, _0x4a7c68, _0x2d99fb);
        }
      }
      for (_0x54c0af = 0; _0x54c0af < 16; ++_0x54c0af) {
        _0x5a8fe5[_0x54c0af] = _0x4a7c68[_0x54c0af];
      }
    }
    function _0x164759(_0xcec8e7, _0x2a7e18) {
      var _0x104734 = new _0x5ce779(32);
      var _0x41f513 = new _0x5ce779(32);
      _0x99bcdf(_0x104734, _0xcec8e7);
      _0x99bcdf(_0x41f513, _0x2a7e18);
      return _0x5009ce(_0x104734, 0, _0x41f513, 0);
    }
    function _0x5009ce(_0x126d12, _0x466fa2, _0x386f07, _0x541024) {
      return _0xe55de0(_0x126d12, _0x466fa2, _0x386f07, _0x541024, 32);
    }
    function _0xe55de0(_0x281399, _0xb4ca30, _0x4334d1, _0x144ae4, _0x294219) {
      var _0x5e02ee;
      var _0x2b4702 = 0;
      for (_0x5e02ee = 0; _0x5e02ee < _0x294219; ++_0x5e02ee) {
        _0x2b4702 |= _0x281399[_0xb4ca30 + _0x5e02ee] ^ _0x4334d1[_0x144ae4 + _0x5e02ee];
      }
      return (_0x2b4702 - 1 >>> 8 & 1) - 1;
    }
    function _0x13946f(_0x56feff) {
      var _0x150f18 = new _0x5ce779(32);
      _0x99bcdf(_0x150f18, _0x56feff);
      return _0x150f18[0] & 1;
    }
    function _0x5a675e(_0xf75cb7, _0x3276db, _0x5130ac) {
      var _0x2e5bcf;
      var _0x3da928;
      _0x15686a(_0xf75cb7[0], _0x3b789d);
      _0x15686a(_0xf75cb7[1], _0x23636c);
      _0x15686a(_0xf75cb7[2], _0x23636c);
      _0x15686a(_0xf75cb7[3], _0x3b789d);
      for (_0x3da928 = 255; _0x3da928 >= 0; --_0x3da928) {
        _0x2e5bcf = _0x5130ac[_0x3da928 / 8 | 0] >> (_0x3da928 & 7) & 1;
        _0x3f02c2(_0xf75cb7, _0x3276db, _0x2e5bcf);
        _0xa11aff(_0x3276db, _0xf75cb7);
        _0xa11aff(_0xf75cb7, _0xf75cb7);
        _0x3f02c2(_0xf75cb7, _0x3276db, _0x2e5bcf);
      }
    }
    function _0x155347(_0x378b6e, _0x3e731a) {
      var _0x403af9 = [_0x1954a5(), _0x1954a5(), _0x1954a5(), _0x1954a5()];
      _0x15686a(_0x403af9[0], _0x246812);
      _0x15686a(_0x403af9[1], _0xbd1b66);
      _0x15686a(_0x403af9[2], _0x23636c);
      _0x5029dc(_0x403af9[3], _0x246812, _0xbd1b66);
      _0x5a675e(_0x378b6e, _0x403af9, _0x3e731a);
    }
    function _0x15686a(_0x1c236b, _0x567e71) {
      var _0x4fd63f;
      for (_0x4fd63f = 0; _0x4fd63f < 16; _0x4fd63f++) {
        _0x1c236b[_0x4fd63f] = _0x567e71[_0x4fd63f] | 0;
      }
    }
    function _0x3d2fec(_0x3098ff, _0x5a37b6) {
      var _0x5ded70 = _0x1954a5();
      var _0x2cfe7c;
      for (_0x2cfe7c = 0; _0x2cfe7c < 16; ++_0x2cfe7c) {
        _0x5ded70[_0x2cfe7c] = _0x5a37b6[_0x2cfe7c];
      }
      for (_0x2cfe7c = 253; _0x2cfe7c >= 0; --_0x2cfe7c) {
        _0x22eafe(_0x5ded70, _0x5ded70);
        if (_0x2cfe7c !== 2 && _0x2cfe7c !== 4) {
          _0x5029dc(_0x5ded70, _0x5ded70, _0x5a37b6);
        }
      }
      for (_0x2cfe7c = 0; _0x2cfe7c < 16; ++_0x2cfe7c) {
        _0x3098ff[_0x2cfe7c] = _0x5ded70[_0x2cfe7c];
      }
    }
    function _0x12fc6f(_0x375589) {
      var _0x430a83;
      var _0x49374c;
      var _0x482063 = 1;
      for (_0x430a83 = 0; _0x430a83 < 16; ++_0x430a83) {
        _0x49374c = _0x375589[_0x430a83] + _0x482063 + 65535;
        _0x482063 = Math.floor(_0x49374c / 65536);
        _0x375589[_0x430a83] = _0x49374c - _0x482063 * 65536;
      }
      _0x375589[0] += _0x482063 - 1 + (_0x482063 - 1) * 37;
    }
    function _0x18c6b1(_0x500892, _0x4e4749, _0x1780c6) {
      var _0x2225fe;
      var _0x5c6feb = ~(_0x1780c6 - 1);
      for (var _0x16b4eb = 0; _0x16b4eb < 16; ++_0x16b4eb) {
        _0x2225fe = _0x5c6feb & (_0x500892[_0x16b4eb] ^ _0x4e4749[_0x16b4eb]);
        _0x500892[_0x16b4eb] ^= _0x2225fe;
        _0x4e4749[_0x16b4eb] ^= _0x2225fe;
      }
    }
    function _0x1954a5(_0xae86b4) {
      var _0x177441;
      var _0x28b79b = new Float64Array(16);
      if (_0xae86b4) {
        for (_0x177441 = 0; _0x177441 < _0xae86b4.length; ++_0x177441) {
          _0x28b79b[_0x177441] = _0xae86b4[_0x177441];
        }
      }
      return _0x28b79b;
    }
    function _0x43bcc3(_0xc735f9, _0x2fb229, _0x570d84) {
      for (var _0x3b3b42 = 0; _0x3b3b42 < 16; ++_0x3b3b42) {
        _0xc735f9[_0x3b3b42] = _0x2fb229[_0x3b3b42] + _0x570d84[_0x3b3b42];
      }
    }
    function _0x4ea39f(_0x1f9a5c, _0x651b53, _0x220888) {
      for (var _0x2a8a3e = 0; _0x2a8a3e < 16; ++_0x2a8a3e) {
        _0x1f9a5c[_0x2a8a3e] = _0x651b53[_0x2a8a3e] - _0x220888[_0x2a8a3e];
      }
    }
    function _0x22eafe(_0x1189e1, _0x1d219d) {
      _0x5029dc(_0x1189e1, _0x1d219d, _0x1d219d);
    }
    function _0x5029dc(_0x39e318, _0x1025b8, _0x27636e) {
      var _0x11fad1;
      var _0x23a5bd;
      var _0x1f07ce = 0;
      var _0x219bf2 = 0;
      var _0x43b8f7 = 0;
      var _0x1648f4 = 0;
      var _0x4d1a7b = 0;
      var _0x3aa0c9 = 0;
      var _0xbea2ef = 0;
      var _0x556841 = 0;
      var _0x462ced = 0;
      var _0x4c96f7 = 0;
      var _0xbf7b55 = 0;
      var _0xa5ec71 = 0;
      var _0x1706a1 = 0;
      var _0x428ebd = 0;
      var _0x1157f0 = 0;
      var _0x41f491 = 0;
      var _0x1bac94 = 0;
      var _0xe59e1d = 0;
      var _0xd1d751 = 0;
      var _0xd2d20a = 0;
      var _0x334cb0 = 0;
      var _0x547955 = 0;
      var _0x2470a3 = 0;
      var _0x91497e = 0;
      var _0x143483 = 0;
      var _0x3b7e97 = 0;
      var _0x5f589e = 0;
      var _0xab6b12 = 0;
      var _0x5c0f34 = 0;
      var _0x2c8444 = 0;
      var _0x229091 = 0;
      var _0x2209fa = _0x27636e[0];
      var _0x42ca12 = _0x27636e[1];
      var _0x2eef04 = _0x27636e[2];
      var _0x1315fb = _0x27636e[3];
      var _0x46549d = _0x27636e[4];
      var _0x2a5b21 = _0x27636e[5];
      var _0x33dd3f = _0x27636e[6];
      var _0x357b9f = _0x27636e[7];
      var _0x4af73b = _0x27636e[8];
      var _0x1965ce = _0x27636e[9];
      var _0x38d763 = _0x27636e[10];
      var _0x5473c7 = _0x27636e[11];
      var _0x2fd098 = _0x27636e[12];
      var _0x31b22d = _0x27636e[13];
      var _0x18fd45 = _0x27636e[14];
      var _0x291ece = _0x27636e[15];
      _0x11fad1 = _0x1025b8[0];
      _0x1f07ce += _0x11fad1 * _0x2209fa;
      _0x219bf2 += _0x11fad1 * _0x42ca12;
      _0x43b8f7 += _0x11fad1 * _0x2eef04;
      _0x1648f4 += _0x11fad1 * _0x1315fb;
      _0x4d1a7b += _0x11fad1 * _0x46549d;
      _0x3aa0c9 += _0x11fad1 * _0x2a5b21;
      _0xbea2ef += _0x11fad1 * _0x33dd3f;
      _0x556841 += _0x11fad1 * _0x357b9f;
      _0x462ced += _0x11fad1 * _0x4af73b;
      _0x4c96f7 += _0x11fad1 * _0x1965ce;
      _0xbf7b55 += _0x11fad1 * _0x38d763;
      _0xa5ec71 += _0x11fad1 * _0x5473c7;
      _0x1706a1 += _0x11fad1 * _0x2fd098;
      _0x428ebd += _0x11fad1 * _0x31b22d;
      _0x1157f0 += _0x11fad1 * _0x18fd45;
      _0x41f491 += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[1];
      _0x219bf2 += _0x11fad1 * _0x2209fa;
      _0x43b8f7 += _0x11fad1 * _0x42ca12;
      _0x1648f4 += _0x11fad1 * _0x2eef04;
      _0x4d1a7b += _0x11fad1 * _0x1315fb;
      _0x3aa0c9 += _0x11fad1 * _0x46549d;
      _0xbea2ef += _0x11fad1 * _0x2a5b21;
      _0x556841 += _0x11fad1 * _0x33dd3f;
      _0x462ced += _0x11fad1 * _0x357b9f;
      _0x4c96f7 += _0x11fad1 * _0x4af73b;
      _0xbf7b55 += _0x11fad1 * _0x1965ce;
      _0xa5ec71 += _0x11fad1 * _0x38d763;
      _0x1706a1 += _0x11fad1 * _0x5473c7;
      _0x428ebd += _0x11fad1 * _0x2fd098;
      _0x1157f0 += _0x11fad1 * _0x31b22d;
      _0x41f491 += _0x11fad1 * _0x18fd45;
      _0x1bac94 += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[2];
      _0x43b8f7 += _0x11fad1 * _0x2209fa;
      _0x1648f4 += _0x11fad1 * _0x42ca12;
      _0x4d1a7b += _0x11fad1 * _0x2eef04;
      _0x3aa0c9 += _0x11fad1 * _0x1315fb;
      _0xbea2ef += _0x11fad1 * _0x46549d;
      _0x556841 += _0x11fad1 * _0x2a5b21;
      _0x462ced += _0x11fad1 * _0x33dd3f;
      _0x4c96f7 += _0x11fad1 * _0x357b9f;
      _0xbf7b55 += _0x11fad1 * _0x4af73b;
      _0xa5ec71 += _0x11fad1 * _0x1965ce;
      _0x1706a1 += _0x11fad1 * _0x38d763;
      _0x428ebd += _0x11fad1 * _0x5473c7;
      _0x1157f0 += _0x11fad1 * _0x2fd098;
      _0x41f491 += _0x11fad1 * _0x31b22d;
      _0x1bac94 += _0x11fad1 * _0x18fd45;
      _0xe59e1d += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[3];
      _0x1648f4 += _0x11fad1 * _0x2209fa;
      _0x4d1a7b += _0x11fad1 * _0x42ca12;
      _0x3aa0c9 += _0x11fad1 * _0x2eef04;
      _0xbea2ef += _0x11fad1 * _0x1315fb;
      _0x556841 += _0x11fad1 * _0x46549d;
      _0x462ced += _0x11fad1 * _0x2a5b21;
      _0x4c96f7 += _0x11fad1 * _0x33dd3f;
      _0xbf7b55 += _0x11fad1 * _0x357b9f;
      _0xa5ec71 += _0x11fad1 * _0x4af73b;
      _0x1706a1 += _0x11fad1 * _0x1965ce;
      _0x428ebd += _0x11fad1 * _0x38d763;
      _0x1157f0 += _0x11fad1 * _0x5473c7;
      _0x41f491 += _0x11fad1 * _0x2fd098;
      _0x1bac94 += _0x11fad1 * _0x31b22d;
      _0xe59e1d += _0x11fad1 * _0x18fd45;
      _0xd1d751 += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[4];
      _0x4d1a7b += _0x11fad1 * _0x2209fa;
      _0x3aa0c9 += _0x11fad1 * _0x42ca12;
      _0xbea2ef += _0x11fad1 * _0x2eef04;
      _0x556841 += _0x11fad1 * _0x1315fb;
      _0x462ced += _0x11fad1 * _0x46549d;
      _0x4c96f7 += _0x11fad1 * _0x2a5b21;
      _0xbf7b55 += _0x11fad1 * _0x33dd3f;
      _0xa5ec71 += _0x11fad1 * _0x357b9f;
      _0x1706a1 += _0x11fad1 * _0x4af73b;
      _0x428ebd += _0x11fad1 * _0x1965ce;
      _0x1157f0 += _0x11fad1 * _0x38d763;
      _0x41f491 += _0x11fad1 * _0x5473c7;
      _0x1bac94 += _0x11fad1 * _0x2fd098;
      _0xe59e1d += _0x11fad1 * _0x31b22d;
      _0xd1d751 += _0x11fad1 * _0x18fd45;
      _0xd2d20a += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[5];
      _0x3aa0c9 += _0x11fad1 * _0x2209fa;
      _0xbea2ef += _0x11fad1 * _0x42ca12;
      _0x556841 += _0x11fad1 * _0x2eef04;
      _0x462ced += _0x11fad1 * _0x1315fb;
      _0x4c96f7 += _0x11fad1 * _0x46549d;
      _0xbf7b55 += _0x11fad1 * _0x2a5b21;
      _0xa5ec71 += _0x11fad1 * _0x33dd3f;
      _0x1706a1 += _0x11fad1 * _0x357b9f;
      _0x428ebd += _0x11fad1 * _0x4af73b;
      _0x1157f0 += _0x11fad1 * _0x1965ce;
      _0x41f491 += _0x11fad1 * _0x38d763;
      _0x1bac94 += _0x11fad1 * _0x5473c7;
      _0xe59e1d += _0x11fad1 * _0x2fd098;
      _0xd1d751 += _0x11fad1 * _0x31b22d;
      _0xd2d20a += _0x11fad1 * _0x18fd45;
      _0x334cb0 += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[6];
      _0xbea2ef += _0x11fad1 * _0x2209fa;
      _0x556841 += _0x11fad1 * _0x42ca12;
      _0x462ced += _0x11fad1 * _0x2eef04;
      _0x4c96f7 += _0x11fad1 * _0x1315fb;
      _0xbf7b55 += _0x11fad1 * _0x46549d;
      _0xa5ec71 += _0x11fad1 * _0x2a5b21;
      _0x1706a1 += _0x11fad1 * _0x33dd3f;
      _0x428ebd += _0x11fad1 * _0x357b9f;
      _0x1157f0 += _0x11fad1 * _0x4af73b;
      _0x41f491 += _0x11fad1 * _0x1965ce;
      _0x1bac94 += _0x11fad1 * _0x38d763;
      _0xe59e1d += _0x11fad1 * _0x5473c7;
      _0xd1d751 += _0x11fad1 * _0x2fd098;
      _0xd2d20a += _0x11fad1 * _0x31b22d;
      _0x334cb0 += _0x11fad1 * _0x18fd45;
      _0x547955 += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[7];
      _0x556841 += _0x11fad1 * _0x2209fa;
      _0x462ced += _0x11fad1 * _0x42ca12;
      _0x4c96f7 += _0x11fad1 * _0x2eef04;
      _0xbf7b55 += _0x11fad1 * _0x1315fb;
      _0xa5ec71 += _0x11fad1 * _0x46549d;
      _0x1706a1 += _0x11fad1 * _0x2a5b21;
      _0x428ebd += _0x11fad1 * _0x33dd3f;
      _0x1157f0 += _0x11fad1 * _0x357b9f;
      _0x41f491 += _0x11fad1 * _0x4af73b;
      _0x1bac94 += _0x11fad1 * _0x1965ce;
      _0xe59e1d += _0x11fad1 * _0x38d763;
      _0xd1d751 += _0x11fad1 * _0x5473c7;
      _0xd2d20a += _0x11fad1 * _0x2fd098;
      _0x334cb0 += _0x11fad1 * _0x31b22d;
      _0x547955 += _0x11fad1 * _0x18fd45;
      _0x2470a3 += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[8];
      _0x462ced += _0x11fad1 * _0x2209fa;
      _0x4c96f7 += _0x11fad1 * _0x42ca12;
      _0xbf7b55 += _0x11fad1 * _0x2eef04;
      _0xa5ec71 += _0x11fad1 * _0x1315fb;
      _0x1706a1 += _0x11fad1 * _0x46549d;
      _0x428ebd += _0x11fad1 * _0x2a5b21;
      _0x1157f0 += _0x11fad1 * _0x33dd3f;
      _0x41f491 += _0x11fad1 * _0x357b9f;
      _0x1bac94 += _0x11fad1 * _0x4af73b;
      _0xe59e1d += _0x11fad1 * _0x1965ce;
      _0xd1d751 += _0x11fad1 * _0x38d763;
      _0xd2d20a += _0x11fad1 * _0x5473c7;
      _0x334cb0 += _0x11fad1 * _0x2fd098;
      _0x547955 += _0x11fad1 * _0x31b22d;
      _0x2470a3 += _0x11fad1 * _0x18fd45;
      _0x91497e += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[9];
      _0x4c96f7 += _0x11fad1 * _0x2209fa;
      _0xbf7b55 += _0x11fad1 * _0x42ca12;
      _0xa5ec71 += _0x11fad1 * _0x2eef04;
      _0x1706a1 += _0x11fad1 * _0x1315fb;
      _0x428ebd += _0x11fad1 * _0x46549d;
      _0x1157f0 += _0x11fad1 * _0x2a5b21;
      _0x41f491 += _0x11fad1 * _0x33dd3f;
      _0x1bac94 += _0x11fad1 * _0x357b9f;
      _0xe59e1d += _0x11fad1 * _0x4af73b;
      _0xd1d751 += _0x11fad1 * _0x1965ce;
      _0xd2d20a += _0x11fad1 * _0x38d763;
      _0x334cb0 += _0x11fad1 * _0x5473c7;
      _0x547955 += _0x11fad1 * _0x2fd098;
      _0x2470a3 += _0x11fad1 * _0x31b22d;
      _0x91497e += _0x11fad1 * _0x18fd45;
      _0x143483 += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[10];
      _0xbf7b55 += _0x11fad1 * _0x2209fa;
      _0xa5ec71 += _0x11fad1 * _0x42ca12;
      _0x1706a1 += _0x11fad1 * _0x2eef04;
      _0x428ebd += _0x11fad1 * _0x1315fb;
      _0x1157f0 += _0x11fad1 * _0x46549d;
      _0x41f491 += _0x11fad1 * _0x2a5b21;
      _0x1bac94 += _0x11fad1 * _0x33dd3f;
      _0xe59e1d += _0x11fad1 * _0x357b9f;
      _0xd1d751 += _0x11fad1 * _0x4af73b;
      _0xd2d20a += _0x11fad1 * _0x1965ce;
      _0x334cb0 += _0x11fad1 * _0x38d763;
      _0x547955 += _0x11fad1 * _0x5473c7;
      _0x2470a3 += _0x11fad1 * _0x2fd098;
      _0x91497e += _0x11fad1 * _0x31b22d;
      _0x143483 += _0x11fad1 * _0x18fd45;
      _0x3b7e97 += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[11];
      _0xa5ec71 += _0x11fad1 * _0x2209fa;
      _0x1706a1 += _0x11fad1 * _0x42ca12;
      _0x428ebd += _0x11fad1 * _0x2eef04;
      _0x1157f0 += _0x11fad1 * _0x1315fb;
      _0x41f491 += _0x11fad1 * _0x46549d;
      _0x1bac94 += _0x11fad1 * _0x2a5b21;
      _0xe59e1d += _0x11fad1 * _0x33dd3f;
      _0xd1d751 += _0x11fad1 * _0x357b9f;
      _0xd2d20a += _0x11fad1 * _0x4af73b;
      _0x334cb0 += _0x11fad1 * _0x1965ce;
      _0x547955 += _0x11fad1 * _0x38d763;
      _0x2470a3 += _0x11fad1 * _0x5473c7;
      _0x91497e += _0x11fad1 * _0x2fd098;
      _0x143483 += _0x11fad1 * _0x31b22d;
      _0x3b7e97 += _0x11fad1 * _0x18fd45;
      _0x5f589e += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[12];
      _0x1706a1 += _0x11fad1 * _0x2209fa;
      _0x428ebd += _0x11fad1 * _0x42ca12;
      _0x1157f0 += _0x11fad1 * _0x2eef04;
      _0x41f491 += _0x11fad1 * _0x1315fb;
      _0x1bac94 += _0x11fad1 * _0x46549d;
      _0xe59e1d += _0x11fad1 * _0x2a5b21;
      _0xd1d751 += _0x11fad1 * _0x33dd3f;
      _0xd2d20a += _0x11fad1 * _0x357b9f;
      _0x334cb0 += _0x11fad1 * _0x4af73b;
      _0x547955 += _0x11fad1 * _0x1965ce;
      _0x2470a3 += _0x11fad1 * _0x38d763;
      _0x91497e += _0x11fad1 * _0x5473c7;
      _0x143483 += _0x11fad1 * _0x2fd098;
      _0x3b7e97 += _0x11fad1 * _0x31b22d;
      _0x5f589e += _0x11fad1 * _0x18fd45;
      _0xab6b12 += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[13];
      _0x428ebd += _0x11fad1 * _0x2209fa;
      _0x1157f0 += _0x11fad1 * _0x42ca12;
      _0x41f491 += _0x11fad1 * _0x2eef04;
      _0x1bac94 += _0x11fad1 * _0x1315fb;
      _0xe59e1d += _0x11fad1 * _0x46549d;
      _0xd1d751 += _0x11fad1 * _0x2a5b21;
      _0xd2d20a += _0x11fad1 * _0x33dd3f;
      _0x334cb0 += _0x11fad1 * _0x357b9f;
      _0x547955 += _0x11fad1 * _0x4af73b;
      _0x2470a3 += _0x11fad1 * _0x1965ce;
      _0x91497e += _0x11fad1 * _0x38d763;
      _0x143483 += _0x11fad1 * _0x5473c7;
      _0x3b7e97 += _0x11fad1 * _0x2fd098;
      _0x5f589e += _0x11fad1 * _0x31b22d;
      _0xab6b12 += _0x11fad1 * _0x18fd45;
      _0x5c0f34 += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[14];
      _0x1157f0 += _0x11fad1 * _0x2209fa;
      _0x41f491 += _0x11fad1 * _0x42ca12;
      _0x1bac94 += _0x11fad1 * _0x2eef04;
      _0xe59e1d += _0x11fad1 * _0x1315fb;
      _0xd1d751 += _0x11fad1 * _0x46549d;
      _0xd2d20a += _0x11fad1 * _0x2a5b21;
      _0x334cb0 += _0x11fad1 * _0x33dd3f;
      _0x547955 += _0x11fad1 * _0x357b9f;
      _0x2470a3 += _0x11fad1 * _0x4af73b;
      _0x91497e += _0x11fad1 * _0x1965ce;
      _0x143483 += _0x11fad1 * _0x38d763;
      _0x3b7e97 += _0x11fad1 * _0x5473c7;
      _0x5f589e += _0x11fad1 * _0x2fd098;
      _0xab6b12 += _0x11fad1 * _0x31b22d;
      _0x5c0f34 += _0x11fad1 * _0x18fd45;
      _0x2c8444 += _0x11fad1 * _0x291ece;
      _0x11fad1 = _0x1025b8[15];
      _0x41f491 += _0x11fad1 * _0x2209fa;
      _0x1bac94 += _0x11fad1 * _0x42ca12;
      _0xe59e1d += _0x11fad1 * _0x2eef04;
      _0xd1d751 += _0x11fad1 * _0x1315fb;
      _0xd2d20a += _0x11fad1 * _0x46549d;
      _0x334cb0 += _0x11fad1 * _0x2a5b21;
      _0x547955 += _0x11fad1 * _0x33dd3f;
      _0x2470a3 += _0x11fad1 * _0x357b9f;
      _0x91497e += _0x11fad1 * _0x4af73b;
      _0x143483 += _0x11fad1 * _0x1965ce;
      _0x3b7e97 += _0x11fad1 * _0x38d763;
      _0x5f589e += _0x11fad1 * _0x5473c7;
      _0xab6b12 += _0x11fad1 * _0x2fd098;
      _0x5c0f34 += _0x11fad1 * _0x31b22d;
      _0x2c8444 += _0x11fad1 * _0x18fd45;
      _0x229091 += _0x11fad1 * _0x291ece;
      _0x1f07ce += _0x1bac94 * 38;
      _0x219bf2 += _0xe59e1d * 38;
      _0x43b8f7 += _0xd1d751 * 38;
      _0x1648f4 += _0xd2d20a * 38;
      _0x4d1a7b += _0x334cb0 * 38;
      _0x3aa0c9 += _0x547955 * 38;
      _0xbea2ef += _0x2470a3 * 38;
      _0x556841 += _0x91497e * 38;
      _0x462ced += _0x143483 * 38;
      _0x4c96f7 += _0x3b7e97 * 38;
      _0xbf7b55 += _0x5f589e * 38;
      _0xa5ec71 += _0xab6b12 * 38;
      _0x1706a1 += _0x5c0f34 * 38;
      _0x428ebd += _0x2c8444 * 38;
      _0x1157f0 += _0x229091 * 38;
      _0x23a5bd = 1;
      _0x11fad1 = _0x1f07ce + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x1f07ce = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x219bf2 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x219bf2 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x43b8f7 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x43b8f7 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x1648f4 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x1648f4 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x4d1a7b + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x4d1a7b = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x3aa0c9 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x3aa0c9 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0xbea2ef + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0xbea2ef = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x556841 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x556841 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x462ced + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x462ced = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x4c96f7 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x4c96f7 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0xbf7b55 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0xbf7b55 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0xa5ec71 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0xa5ec71 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x1706a1 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x1706a1 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x428ebd + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x428ebd = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x1157f0 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x1157f0 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x41f491 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x41f491 = _0x11fad1 - _0x23a5bd * 65536;
      _0x1f07ce += _0x23a5bd - 1 + (_0x23a5bd - 1) * 37;
      _0x23a5bd = 1;
      _0x11fad1 = _0x1f07ce + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x1f07ce = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x219bf2 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x219bf2 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x43b8f7 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x43b8f7 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x1648f4 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x1648f4 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x4d1a7b + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x4d1a7b = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x3aa0c9 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x3aa0c9 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0xbea2ef + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0xbea2ef = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x556841 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x556841 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x462ced + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x462ced = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x4c96f7 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x4c96f7 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0xbf7b55 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0xbf7b55 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0xa5ec71 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0xa5ec71 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x1706a1 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x1706a1 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x428ebd + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x428ebd = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x1157f0 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x1157f0 = _0x11fad1 - _0x23a5bd * 65536;
      _0x11fad1 = _0x41f491 + _0x23a5bd + 65535;
      _0x23a5bd = Math.floor(_0x11fad1 / 65536);
      _0x41f491 = _0x11fad1 - _0x23a5bd * 65536;
      _0x1f07ce += _0x23a5bd - 1 + (_0x23a5bd - 1) * 37;
      _0x39e318[0] = _0x1f07ce;
      _0x39e318[1] = _0x219bf2;
      _0x39e318[2] = _0x43b8f7;
      _0x39e318[3] = _0x1648f4;
      _0x39e318[4] = _0x4d1a7b;
      _0x39e318[5] = _0x3aa0c9;
      _0x39e318[6] = _0xbea2ef;
      _0x39e318[7] = _0x556841;
      _0x39e318[8] = _0x462ced;
      _0x39e318[9] = _0x4c96f7;
      _0x39e318[10] = _0xbf7b55;
      _0x39e318[11] = _0xa5ec71;
      _0x39e318[12] = _0x1706a1;
      _0x39e318[13] = _0x428ebd;
      _0x39e318[14] = _0x1157f0;
      _0x39e318[15] = _0x41f491;
    }
  }
});
var require_kem = __commonJS({
  "node_modules/node-forge/lib/kem.js"(_0x3000ec, _0x5554d3) {
    var _0x464494 = require_forge();
    require_util();
    require_random();
    require_jsbn();
    _0x5554d3.exports = _0x464494.kem = _0x464494.kem || {};
    var _0x181450 = _0x464494.jsbn.BigInteger;
    _0x464494.kem.rsa = {};
    _0x464494.kem.rsa.create = function (_0x1a2c33, _0x1959b9) {
      _0x1959b9 = _0x1959b9 || {};
      var _0x5c6aad = _0x1959b9.prng || _0x464494.random;
      var _0x481c80 = {};
      _0x481c80.encrypt = function (_0x148ba6, _0x4b2b74) {
        var _0x147fd1 = Math.ceil(_0x148ba6.n.bitLength() / 8);
        var _0x14a1a8;
        do {
          _0x14a1a8 = new _0x181450(_0x464494.util.bytesToHex(_0x5c6aad.getBytesSync(_0x147fd1)), 16).mod(_0x148ba6.n);
        } while (_0x14a1a8.compareTo(_0x181450.ONE) <= 0);
        _0x14a1a8 = _0x464494.util.hexToBytes(_0x14a1a8.toString(16));
        var _0x23c43a = _0x147fd1 - _0x14a1a8.length;
        if (_0x23c43a > 0) {
          _0x14a1a8 = _0x464494.util.fillString(String.fromCharCode(0), _0x23c43a) + _0x14a1a8;
        }
        var _0x5e1f95 = _0x148ba6.encrypt(_0x14a1a8, "NONE");
        var _0x5ac604 = _0x1a2c33.generate(_0x14a1a8, _0x4b2b74);
        return {
          encapsulation: _0x5e1f95,
          key: _0x5ac604
        };
      };
      _0x481c80.decrypt = function (_0xda9a8c, _0x52eb83, _0x4a3235) {
        var _0x4aa691 = _0xda9a8c.decrypt(_0x52eb83, "NONE");
        return _0x1a2c33.generate(_0x4aa691, _0x4a3235);
      };
      return _0x481c80;
    };
    _0x464494.kem.kdf1 = function (_0x1d22a1, _0x1da21b) {
      _0x44e815(this, _0x1d22a1, 0, _0x1da21b || _0x1d22a1.digestLength);
    };
    _0x464494.kem.kdf2 = function (_0x2096c0, _0x5df765) {
      _0x44e815(this, _0x2096c0, 1, _0x5df765 || _0x2096c0.digestLength);
    };
    function _0x44e815(_0x376025, _0x217fbf, _0x494e98, _0x231ddb) {
      _0x376025.generate = function (_0x54ecac, _0x17660c) {
        var _0x2b31ca = new _0x464494.util.ByteBuffer();
        var _0x4ebb08 = Math.ceil(_0x17660c / _0x231ddb) + _0x494e98;
        var _0x19bba5 = new _0x464494.util.ByteBuffer();
        for (var _0xb71bfc = _0x494e98; _0xb71bfc < _0x4ebb08; ++_0xb71bfc) {
          _0x19bba5.putInt32(_0xb71bfc);
          _0x217fbf.start();
          _0x217fbf.update(_0x54ecac + _0x19bba5.getBytes());
          var _0x12a43c = _0x217fbf.digest();
          _0x2b31ca.putBytes(_0x12a43c.getBytes(_0x231ddb));
        }
        _0x2b31ca.truncate(_0x2b31ca.length() - _0x17660c);
        return _0x2b31ca.getBytes();
      };
    }
  }
});
var require_log = __commonJS({
  "node_modules/node-forge/lib/log.js"(_0x265c64, _0x77ca71) {
    var _0x3d9d7c = require_forge();
    require_util();
    _0x77ca71.exports = _0x3d9d7c.log = _0x3d9d7c.log || {};
    _0x3d9d7c.log.levels = ["none", "error", "warning", "info", "debug", "verbose", "max"];
    var _0x4d7513 = {};
    var _0x38d056 = [];
    var _0x29bb7b = null;
    _0x3d9d7c.log.LEVEL_LOCKED = 2;
    _0x3d9d7c.log.NO_LEVEL_CHECK = 4;
    _0x3d9d7c.log.INTERPOLATE = 8;
    for (_0x1c7ed6 = 0; _0x1c7ed6 < _0x3d9d7c.log.levels.length; ++_0x1c7ed6) {
      _0x2d8664 = _0x3d9d7c.log.levels[_0x1c7ed6];
      _0x4d7513[_0x2d8664] = {
        index: _0x1c7ed6,
        name: _0x2d8664.toUpperCase()
      };
    }
    var _0x2d8664;
    var _0x1c7ed6;
    _0x3d9d7c.log.logMessage = function (_0x4941a1) {
      var _0x2112b3 = _0x4d7513[_0x4941a1.level].index;
      for (var _0x438460 = 0; _0x438460 < _0x38d056.length; ++_0x438460) {
        var _0x5dc7c8 = _0x38d056[_0x438460];
        if (_0x5dc7c8.flags & _0x3d9d7c.log.NO_LEVEL_CHECK) {
          _0x5dc7c8.f(_0x4941a1);
        } else {
          var _0x1d1eb7 = _0x4d7513[_0x5dc7c8.level].index;
          if (_0x2112b3 <= _0x1d1eb7) {
            _0x5dc7c8.f(_0x5dc7c8, _0x4941a1);
          }
        }
      }
    };
    _0x3d9d7c.log.prepareStandard = function (_0x2ad9c2) {
      if (!("standard" in _0x2ad9c2)) {
        _0x2ad9c2.standard = _0x4d7513[_0x2ad9c2.level].name + " [" + _0x2ad9c2.category + "] " + _0x2ad9c2.message;
      }
    };
    _0x3d9d7c.log.prepareFull = function (_0x503958) {
      if (!("full" in _0x503958)) {
        var _0x2056cc = [_0x503958.message];
        _0x2056cc = _0x2056cc.concat([]);
        _0x503958.full = _0x3d9d7c.util.format.apply(this, _0x2056cc);
      }
    };
    _0x3d9d7c.log.prepareStandardFull = function (_0x2a3b36) {
      if (!("standardFull" in _0x2a3b36)) {
        _0x3d9d7c.log.prepareStandard(_0x2a3b36);
        _0x2a3b36.standardFull = _0x2a3b36.standard;
      }
    };
    if (true) {
      _0x16ab1c = ["error", "warning", "info", "debug", "verbose"];
      for (_0x1c7ed6 = 0; _0x1c7ed6 < _0x16ab1c.length; ++_0x1c7ed6) {
        (function (_0x47ab8b) {
          _0x3d9d7c.log[_0x47ab8b] = function (_0x58818e, _0x407df8) {
            var _0x356658 = Array.prototype.slice.call(arguments).slice(2);
            var _0x596e17 = {
              timestamp: new Date(),
              level: _0x47ab8b,
              category: _0x58818e,
              message: _0x407df8,
              arguments: _0x356658
            };
            _0x3d9d7c.log.logMessage(_0x596e17);
          };
        })(_0x16ab1c[_0x1c7ed6]);
      }
    }
    var _0x16ab1c;
    var _0x1c7ed6;
    _0x3d9d7c.log.makeLogger = function (_0xcb9a83) {
      var _0x56aee5 = {
        flags: 0,
        f: _0xcb9a83
      };
      _0x3d9d7c.log.setLevel(_0x56aee5, "none");
      return _0x56aee5;
    };
    _0x3d9d7c.log.setLevel = function (_0xed299b, _0x562fb8) {
      var _0x40eced = false;
      if (_0xed299b && !(_0xed299b.flags & _0x3d9d7c.log.LEVEL_LOCKED)) {
        for (var _0x4b2fa2 = 0; _0x4b2fa2 < _0x3d9d7c.log.levels.length; ++_0x4b2fa2) {
          var _0x315cf6 = _0x3d9d7c.log.levels[_0x4b2fa2];
          if (_0x562fb8 == _0x315cf6) {
            _0xed299b.level = _0x562fb8;
            _0x40eced = true;
            break;
          }
        }
      }
      return _0x40eced;
    };
    _0x3d9d7c.log.lock = function (_0xf9555, _0x29029d) {
      if (typeof _0x29029d === "undefined" || _0x29029d) {
        _0xf9555.flags |= _0x3d9d7c.log.LEVEL_LOCKED;
      } else {
        _0xf9555.flags &= ~_0x3d9d7c.log.LEVEL_LOCKED;
      }
    };
    _0x3d9d7c.log.addLogger = function (_0x27386e) {
      _0x38d056.push(_0x27386e);
    };
    if (typeof console !== "undefined" && "log" in console) {
      if (console.error && console.warn && console.info && console.debug) {
        _0x54e344 = {
          error: console.error,
          warning: console.warn,
          info: console.info,
          debug: console.debug,
          verbose: console.debug
        };
        _0x411474 = function (_0x1b9b0, _0x291763) {
          _0x3d9d7c.log.prepareStandard(_0x291763);
          var _0x8049af = _0x54e344[_0x291763.level];
          var _0x448832 = [_0x291763.standard];
          _0x448832 = _0x448832.concat(_0x291763.arguments.slice());
          _0x8049af.apply(console, _0x448832);
        };
        _0x7e7b23 = _0x3d9d7c.log.makeLogger(_0x411474);
      } else {
        _0x411474 = function (_0x551d82, _0x1772c1) {
          _0x3d9d7c.log.prepareStandardFull(_0x1772c1);
          console.log(_0x1772c1.standardFull);
        };
        _0x7e7b23 = _0x3d9d7c.log.makeLogger(_0x411474);
      }
      _0x3d9d7c.log.setLevel(_0x7e7b23, "debug");
      _0x3d9d7c.log.addLogger(_0x7e7b23);
      _0x29bb7b = _0x7e7b23;
    } else {
      console = {
        log: function () {}
      };
    }
    var _0x7e7b23;
    var _0x54e344;
    var _0x411474;
    if (_0x29bb7b !== null && typeof window !== "undefined" && window.location) {
      _0x18b1a4 = new URL(window.location.href).searchParams;
      if (_0x18b1a4.has("console.level")) {
        _0x3d9d7c.log.setLevel(_0x29bb7b, _0x18b1a4.get("console.level").slice(-1)[0]);
      }
      if (_0x18b1a4.has("console.lock")) {
        _0x1cc136 = _0x18b1a4.get("console.lock").slice(-1)[0];
        if (_0x1cc136 == "true") {
          _0x3d9d7c.log.lock(_0x29bb7b);
        }
      }
    }
    var _0x18b1a4;
    var _0x1cc136;
    _0x3d9d7c.log.consoleLogger = _0x29bb7b;
  }
});
var require_md_all = __commonJS({
  "node_modules/node-forge/lib/md.all.js"(_0x1eb94b, _0xf1a190) {
    _0xf1a190.exports = require_md();
    require_md5();
    require_sha1();
    require_sha256();
    require_sha512();
  }
});
var require_pkcs7 = __commonJS({
  "node_modules/node-forge/lib/pkcs7.js"(_0x11316a, _0x49aa21) {
    var _0x3d5560 = require_forge();
    require_aes();
    require_asn1();
    require_des();
    require_oids();
    require_pem();
    require_pkcs7asn1();
    require_random();
    require_util();
    require_x509();
    var _0x342fbe = _0x3d5560.asn1;
    var _0x436d69 = _0x49aa21.exports = _0x3d5560.pkcs7 = _0x3d5560.pkcs7 || {};
    _0x436d69.messageFromPem = function (_0x546af4) {
      var _0x340102 = _0x3d5560.pem.decode(_0x546af4)[0];
      if (_0x340102.type !== "PKCS7") {
        var _0x4ca022 = new Error("Could not convert PKCS#7 message from PEM; PEM header type is not \"PKCS#7\".");
        _0x4ca022.headerType = _0x340102.type;
        throw _0x4ca022;
      }
      if (_0x340102.procType && _0x340102.procType.type === "ENCRYPTED") {
        throw new Error("Could not convert PKCS#7 message from PEM; PEM is encrypted.");
      }
      var _0x487f9f = _0x342fbe.fromDer(_0x340102.body);
      return _0x436d69.messageFromAsn1(_0x487f9f);
    };
    _0x436d69.messageToPem = function (_0x5e8560, _0x21f795) {
      var _0x5485d3 = {
        type: "PKCS7",
        body: _0x342fbe.toDer(_0x5e8560.toAsn1()).getBytes()
      };
      return _0x3d5560.pem.encode(_0x5485d3, {
        maxline: _0x21f795
      });
    };
    _0x436d69.messageFromAsn1 = function (_0x892e04) {
      var _0x5642fc = {};
      var _0xed78e9 = [];
      if (!_0x342fbe.validate(_0x892e04, _0x436d69.asn1.contentInfoValidator, _0x5642fc, _0xed78e9)) {
        var _0x36ad2d = new Error("Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.");
        _0x36ad2d.errors = _0xed78e9;
        throw _0x36ad2d;
      }
      var _0x465fe8 = _0x342fbe.derToOid(_0x5642fc.contentType);
      var _0x3778cb;
      switch (_0x465fe8) {
        case _0x3d5560.pki.oids.envelopedData:
          _0x3778cb = _0x436d69.createEnvelopedData();
          break;
        case _0x3d5560.pki.oids.encryptedData:
          _0x3778cb = _0x436d69.createEncryptedData();
          break;
        case _0x3d5560.pki.oids.signedData:
          _0x3778cb = _0x436d69.createSignedData();
          break;
        default:
          throw new Error("Cannot read PKCS#7 message. ContentType with OID " + _0x465fe8 + " is not (yet) supported.");
      }
      _0x3778cb.fromAsn1(_0x5642fc.content.value[0]);
      return _0x3778cb;
    };
    _0x436d69.createSignedData = function () {
      var _0x329327 = null;
      _0x329327 = {
        type: _0x3d5560.pki.oids.signedData,
        version: 1,
        certificates: [],
        crls: [],
        signers: [],
        digestAlgorithmIdentifiers: [],
        contentInfo: null,
        signerInfos: [],
        fromAsn1: function (_0x105c62) {
          _0x33853e(_0x329327, _0x105c62, _0x436d69.asn1.signedDataValidator);
          _0x329327.certificates = [];
          _0x329327.crls = [];
          _0x329327.digestAlgorithmIdentifiers = [];
          _0x329327.contentInfo = null;
          _0x329327.signerInfos = [];
          if (_0x329327.rawCapture.certificates) {
            var _0x4c3df8 = _0x329327.rawCapture.certificates.value;
            for (var _0x51ada6 = 0; _0x51ada6 < _0x4c3df8.length; ++_0x51ada6) {
              _0x329327.certificates.push(_0x3d5560.pki.certificateFromAsn1(_0x4c3df8[_0x51ada6]));
            }
          }
        },
        toAsn1: function () {
          if (!_0x329327.contentInfo) {
            _0x329327.sign();
          }
          var _0x652637 = [];
          for (var _0x2a2c95 = 0; _0x2a2c95 < _0x329327.certificates.length; ++_0x2a2c95) {
            _0x652637.push(_0x3d5560.pki.certificateToAsn1(_0x329327.certificates[_0x2a2c95]));
          }
          var _0x55ae5e = [];
          var _0x348f72 = _0x342fbe.create(_0x342fbe.Class.CONTEXT_SPECIFIC, 0, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.INTEGER, false, _0x342fbe.integerToDer(_0x329327.version).getBytes()), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SET, true, _0x329327.digestAlgorithmIdentifiers), _0x329327.contentInfo])]);
          if (_0x652637.length > 0) {
            _0x348f72.value[0].value.push(_0x342fbe.create(_0x342fbe.Class.CONTEXT_SPECIFIC, 0, true, _0x652637));
          }
          if (_0x55ae5e.length > 0) {
            _0x348f72.value[0].value.push(_0x342fbe.create(_0x342fbe.Class.CONTEXT_SPECIFIC, 1, true, _0x55ae5e));
          }
          _0x348f72.value[0].value.push(_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SET, true, _0x329327.signerInfos));
          return _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OID, false, _0x342fbe.oidToDer(_0x329327.type).getBytes()), _0x348f72]);
        },
        addSigner: function (_0x467b85) {
          var _0x17602c = _0x467b85.issuer;
          var _0x48f676 = _0x467b85.serialNumber;
          if (_0x467b85.certificate) {
            var _0x1e3e29 = _0x467b85.certificate;
            if (typeof _0x1e3e29 === "string") {
              _0x1e3e29 = _0x3d5560.pki.certificateFromPem(_0x1e3e29);
            }
            _0x17602c = _0x1e3e29.issuer.attributes;
            _0x48f676 = _0x1e3e29.serialNumber;
          }
          var _0x404c8a = _0x467b85.key;
          if (!_0x404c8a) {
            throw new Error("Could not add PKCS#7 signer; no private key specified.");
          }
          if (typeof _0x404c8a === "string") {
            _0x404c8a = _0x3d5560.pki.privateKeyFromPem(_0x404c8a);
          }
          var _0x3fb8bd = _0x467b85.digestAlgorithm || _0x3d5560.pki.oids.sha1;
          switch (_0x3fb8bd) {
            case _0x3d5560.pki.oids.sha1:
            case _0x3d5560.pki.oids.sha256:
            case _0x3d5560.pki.oids.sha384:
            case _0x3d5560.pki.oids.sha512:
            case _0x3d5560.pki.oids.md5:
              break;
            default:
              throw new Error("Could not add PKCS#7 signer; unknown message digest algorithm: " + _0x3fb8bd);
          }
          var _0x30500f = _0x467b85.authenticatedAttributes || [];
          if (_0x30500f.length > 0) {
            var _0x37f2fd = false;
            var _0x561811 = false;
            for (var _0x1eeca6 = 0; _0x1eeca6 < _0x30500f.length; ++_0x1eeca6) {
              var _0x17e715 = _0x30500f[_0x1eeca6];
              if (!_0x37f2fd && _0x17e715.type === _0x3d5560.pki.oids.contentType) {
                _0x37f2fd = true;
                if (_0x561811) {
                  break;
                }
                continue;
              }
              if (!_0x561811 && _0x17e715.type === _0x3d5560.pki.oids.messageDigest) {
                _0x561811 = true;
                if (_0x37f2fd) {
                  break;
                }
                continue;
              }
            }
            if (!_0x37f2fd || !_0x561811) {
              throw new Error("Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.");
            }
          }
          _0x329327.signers.push({
            key: _0x404c8a,
            version: 1,
            issuer: _0x17602c,
            serialNumber: _0x48f676,
            digestAlgorithm: _0x3fb8bd,
            signatureAlgorithm: _0x3d5560.pki.oids.rsaEncryption,
            signature: null,
            authenticatedAttributes: _0x30500f,
            unauthenticatedAttributes: []
          });
        },
        sign: function (_0x4741ff) {
          _0x4741ff = _0x4741ff || {};
          if (typeof _0x329327.content !== "object" || _0x329327.contentInfo === null) {
            _0x329327.contentInfo = _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OID, false, _0x342fbe.oidToDer(_0x3d5560.pki.oids.data).getBytes())]);
            if ("content" in _0x329327) {
              var _0x3773f6;
              if (_0x329327.content instanceof _0x3d5560.util.ByteBuffer) {
                _0x3773f6 = _0x329327.content.bytes();
              } else if (typeof _0x329327.content === "string") {
                _0x3773f6 = _0x3d5560.util.encodeUtf8(_0x329327.content);
              }
              if (_0x4741ff.detached) {
                _0x329327.detachedContent = _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OCTETSTRING, false, _0x3773f6);
              } else {
                _0x329327.contentInfo.value.push(_0x342fbe.create(_0x342fbe.Class.CONTEXT_SPECIFIC, 0, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OCTETSTRING, false, _0x3773f6)]));
              }
            }
          }
          if (_0x329327.signers.length === 0) {
            return;
          }
          var _0x49f0fa = _0x250f98();
          _0x399781(_0x49f0fa);
        },
        verify: function () {
          throw new Error("PKCS#7 signature verification not yet implemented.");
        },
        addCertificate: function (_0x527288) {
          if (typeof _0x527288 === "string") {
            _0x527288 = _0x3d5560.pki.certificateFromPem(_0x527288);
          }
          _0x329327.certificates.push(_0x527288);
        },
        addCertificateRevokationList: function (_0x5df09d) {
          throw new Error("PKCS#7 CRL support not yet implemented.");
        }
      };
      return _0x329327;
      function _0x250f98() {
        var _0x84d57f = {};
        for (var _0x370e85 = 0; _0x370e85 < _0x329327.signers.length; ++_0x370e85) {
          var _0xdba48f = _0x329327.signers[_0x370e85];
          var _0x20af44 = _0xdba48f.digestAlgorithm;
          if (!(_0x20af44 in _0x84d57f)) {
            _0x84d57f[_0x20af44] = _0x3d5560.md[_0x3d5560.pki.oids[_0x20af44]].create();
          }
          if (_0xdba48f.authenticatedAttributes.length === 0) {
            _0xdba48f.md = _0x84d57f[_0x20af44];
          } else {
            _0xdba48f.md = _0x3d5560.md[_0x3d5560.pki.oids[_0x20af44]].create();
          }
        }
        _0x329327.digestAlgorithmIdentifiers = [];
        for (var _0x20af44 in _0x84d57f) {
          _0x329327.digestAlgorithmIdentifiers.push(_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OID, false, _0x342fbe.oidToDer(_0x20af44).getBytes()), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.NULL, false, "")]));
        }
        return _0x84d57f;
      }
      function _0x399781(_0x544de1) {
        var _0x3d4766;
        if (_0x329327.detachedContent) {
          _0x3d4766 = _0x329327.detachedContent;
        } else {
          _0x3d4766 = _0x329327.contentInfo.value[1];
          _0x3d4766 = _0x3d4766.value[0];
        }
        if (!_0x3d4766) {
          throw new Error("Could not sign PKCS#7 message; there is no content to sign.");
        }
        var _0x459d5a = _0x342fbe.derToOid(_0x329327.contentInfo.value[0].value);
        var _0x2f9154 = _0x342fbe.toDer(_0x3d4766);
        _0x2f9154.getByte();
        _0x342fbe.getBerValueLength(_0x2f9154);
        _0x2f9154 = _0x2f9154.getBytes();
        for (var _0x5e3ce4 in _0x544de1) {
          _0x544de1[_0x5e3ce4].start().update(_0x2f9154);
        }
        var _0x5c2174 = new Date();
        for (var _0x155353 = 0; _0x155353 < _0x329327.signers.length; ++_0x155353) {
          var _0x555746 = _0x329327.signers[_0x155353];
          if (_0x555746.authenticatedAttributes.length === 0) {
            if (_0x459d5a !== _0x3d5560.pki.oids.data) {
              throw new Error("Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data.");
            }
          } else {
            _0x555746.authenticatedAttributesAsn1 = _0x342fbe.create(_0x342fbe.Class.CONTEXT_SPECIFIC, 0, true, []);
            var _0x471545 = _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SET, true, []);
            for (var _0x188566 = 0; _0x188566 < _0x555746.authenticatedAttributes.length; ++_0x188566) {
              var _0x362f55 = _0x555746.authenticatedAttributes[_0x188566];
              if (_0x362f55.type === _0x3d5560.pki.oids.messageDigest) {
                _0x362f55.value = _0x544de1[_0x555746.digestAlgorithm].digest();
              } else if (_0x362f55.type === _0x3d5560.pki.oids.signingTime) {
                if (!_0x362f55.value) {
                  _0x362f55.value = _0x5c2174;
                }
              }
              _0x471545.value.push(_0x2a08b7(_0x362f55));
              _0x555746.authenticatedAttributesAsn1.value.push(_0x2a08b7(_0x362f55));
            }
            _0x2f9154 = _0x342fbe.toDer(_0x471545).getBytes();
            _0x555746.md.start().update(_0x2f9154);
          }
          _0x555746.signature = _0x555746.key.sign(_0x555746.md, "RSASSA-PKCS1-V1_5");
        }
        _0x329327.signerInfos = _0x3d0f39(_0x329327.signers);
      }
    };
    _0x436d69.createEncryptedData = function () {
      var _0x1efc1 = null;
      _0x1efc1 = {
        type: _0x3d5560.pki.oids.encryptedData,
        version: 0,
        encryptedContent: {
          algorithm: _0x3d5560.pki.oids["aes256-CBC"]
        },
        fromAsn1: function (_0x3a82c9) {
          _0x33853e(_0x1efc1, _0x3a82c9, _0x436d69.asn1.encryptedDataValidator);
        },
        decrypt: function (_0x55b20) {
          if (_0x55b20 !== undefined) {
            _0x1efc1.encryptedContent.key = _0x55b20;
          }
          _0x3398c8(_0x1efc1);
        }
      };
      return _0x1efc1;
    };
    _0x436d69.createEnvelopedData = function () {
      var _0x5baedf = null;
      _0x5baedf = {
        type: _0x3d5560.pki.oids.envelopedData,
        version: 0,
        recipients: [],
        encryptedContent: {
          algorithm: _0x3d5560.pki.oids["aes256-CBC"]
        },
        fromAsn1: function (_0x31a9c8) {
          var _0x279337 = _0x33853e(_0x5baedf, _0x31a9c8, _0x436d69.asn1.envelopedDataValidator);
          _0x5baedf.recipients = _0x1ca8e2(_0x279337.recipientInfos.value);
        },
        toAsn1: function () {
          return _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OID, false, _0x342fbe.oidToDer(_0x5baedf.type).getBytes()), _0x342fbe.create(_0x342fbe.Class.CONTEXT_SPECIFIC, 0, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.INTEGER, false, _0x342fbe.integerToDer(_0x5baedf.version).getBytes()), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SET, true, _0x45f43d(_0x5baedf.recipients)), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, _0x50a539(_0x5baedf.encryptedContent))])])]);
        },
        findRecipient: function (_0x321a31) {
          var _0x1e773 = _0x321a31.issuer.attributes;
          for (var _0x35b72e = 0; _0x35b72e < _0x5baedf.recipients.length; ++_0x35b72e) {
            var _0x1d398d = _0x5baedf.recipients[_0x35b72e];
            var _0xe98a9 = _0x1d398d.issuer;
            if (_0x1d398d.serialNumber !== _0x321a31.serialNumber) {
              continue;
            }
            if (_0xe98a9.length !== _0x1e773.length) {
              continue;
            }
            var _0x46099d = true;
            for (var _0x20dc92 = 0; _0x20dc92 < _0x1e773.length; ++_0x20dc92) {
              if (_0xe98a9[_0x20dc92].type !== _0x1e773[_0x20dc92].type || _0xe98a9[_0x20dc92].value !== _0x1e773[_0x20dc92].value) {
                _0x46099d = false;
                break;
              }
            }
            if (_0x46099d) {
              return _0x1d398d;
            }
          }
          return null;
        },
        decrypt: function (_0x5986cc, _0x482b81) {
          if (_0x5baedf.encryptedContent.key === undefined && _0x5986cc !== undefined && _0x482b81 !== undefined) {
            switch (_0x5986cc.encryptedContent.algorithm) {
              case _0x3d5560.pki.oids.rsaEncryption:
              case _0x3d5560.pki.oids.desCBC:
                var _0x21e01e = _0x482b81.decrypt(_0x5986cc.encryptedContent.content);
                _0x5baedf.encryptedContent.key = _0x3d5560.util.createBuffer(_0x21e01e);
                break;
              default:
                throw new Error("Unsupported asymmetric cipher, OID " + _0x5986cc.encryptedContent.algorithm);
            }
          }
          _0x3398c8(_0x5baedf);
        },
        addRecipient: function (_0x7aa0fe) {
          _0x5baedf.recipients.push({
            version: 0,
            issuer: _0x7aa0fe.issuer.attributes,
            serialNumber: _0x7aa0fe.serialNumber,
            encryptedContent: {
              algorithm: _0x3d5560.pki.oids.rsaEncryption,
              key: _0x7aa0fe.publicKey
            }
          });
        },
        encrypt: function (_0x35f16f, _0x56dcb8) {
          if (_0x5baedf.encryptedContent.content === undefined) {
            _0x56dcb8 = _0x56dcb8 || _0x5baedf.encryptedContent.algorithm;
            _0x35f16f = _0x35f16f || _0x5baedf.encryptedContent.key;
            var _0x177efc;
            var _0x24eedd;
            var _0x513148;
            switch (_0x56dcb8) {
              case _0x3d5560.pki.oids["aes128-CBC"]:
                _0x177efc = 16;
                _0x24eedd = 16;
                _0x513148 = _0x3d5560.aes.createEncryptionCipher;
                break;
              case _0x3d5560.pki.oids["aes192-CBC"]:
                _0x177efc = 24;
                _0x24eedd = 16;
                _0x513148 = _0x3d5560.aes.createEncryptionCipher;
                break;
              case _0x3d5560.pki.oids["aes256-CBC"]:
                _0x177efc = 32;
                _0x24eedd = 16;
                _0x513148 = _0x3d5560.aes.createEncryptionCipher;
                break;
              case _0x3d5560.pki.oids["des-EDE3-CBC"]:
                _0x177efc = 24;
                _0x24eedd = 8;
                _0x513148 = _0x3d5560.des.createEncryptionCipher;
                break;
              default:
                throw new Error("Unsupported symmetric cipher, OID " + _0x56dcb8);
            }
            if (_0x35f16f === undefined) {
              _0x35f16f = _0x3d5560.util.createBuffer(_0x3d5560.random.getBytes(_0x177efc));
            } else if (_0x35f16f.length() != _0x177efc) {
              throw new Error("Symmetric key has wrong length; got " + _0x35f16f.length() + " bytes, expected " + _0x177efc + ".");
            }
            _0x5baedf.encryptedContent.algorithm = _0x56dcb8;
            _0x5baedf.encryptedContent.key = _0x35f16f;
            _0x5baedf.encryptedContent.parameter = _0x3d5560.util.createBuffer(_0x3d5560.random.getBytes(_0x24eedd));
            var _0x9d4f46 = _0x513148(_0x35f16f);
            _0x9d4f46.start(_0x5baedf.encryptedContent.parameter.copy());
            _0x9d4f46.update(_0x5baedf.content);
            if (!_0x9d4f46.finish()) {
              throw new Error("Symmetric encryption failed.");
            }
            _0x5baedf.encryptedContent.content = _0x9d4f46.output;
          }
          for (var _0x1fec70 = 0; _0x1fec70 < _0x5baedf.recipients.length; ++_0x1fec70) {
            var _0x1e1015 = _0x5baedf.recipients[_0x1fec70];
            if (_0x1e1015.encryptedContent.content !== undefined) {
              continue;
            }
            switch (_0x1e1015.encryptedContent.algorithm) {
              case _0x3d5560.pki.oids.rsaEncryption:
                _0x1e1015.encryptedContent.content = _0x1e1015.encryptedContent.key.encrypt(_0x5baedf.encryptedContent.key.data);
                break;
              default:
                throw new Error("Unsupported asymmetric cipher, OID " + _0x1e1015.encryptedContent.algorithm);
            }
          }
        }
      };
      return _0x5baedf;
    };
    function _0x4d6235(_0x3b381c) {
      var _0x1f07e0 = {};
      var _0x26e6ea = [];
      if (!_0x342fbe.validate(_0x3b381c, _0x436d69.asn1.recipientInfoValidator, _0x1f07e0, _0x26e6ea)) {
        var _0x43a5bc = new Error("Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.");
        _0x43a5bc.errors = _0x26e6ea;
        throw _0x43a5bc;
      }
      return {
        version: _0x1f07e0.version.charCodeAt(0),
        issuer: _0x3d5560.pki.RDNAttributesAsArray(_0x1f07e0.issuer),
        serialNumber: _0x3d5560.util.createBuffer(_0x1f07e0.serial).toHex(),
        encryptedContent: {
          algorithm: _0x342fbe.derToOid(_0x1f07e0.encAlgorithm),
          parameter: _0x1f07e0.encParameter ? _0x1f07e0.encParameter.value : undefined,
          content: _0x1f07e0.encKey
        }
      };
    }
    function _0x462ef4(_0x467fe5) {
      return _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.INTEGER, false, _0x342fbe.integerToDer(_0x467fe5.version).getBytes()), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x3d5560.pki.distinguishedNameToAsn1({
        attributes: _0x467fe5.issuer
      }), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.INTEGER, false, _0x3d5560.util.hexToBytes(_0x467fe5.serialNumber))]), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OID, false, _0x342fbe.oidToDer(_0x467fe5.encryptedContent.algorithm).getBytes()), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.NULL, false, "")]), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OCTETSTRING, false, _0x467fe5.encryptedContent.content)]);
    }
    function _0x1ca8e2(_0x400f8e) {
      var _0x55541e = [];
      for (var _0x2457c1 = 0; _0x2457c1 < _0x400f8e.length; ++_0x2457c1) {
        _0x55541e.push(_0x4d6235(_0x400f8e[_0x2457c1]));
      }
      return _0x55541e;
    }
    function _0x45f43d(_0x16966e) {
      var _0x4a4417 = [];
      for (var _0x3741ac = 0; _0x3741ac < _0x16966e.length; ++_0x3741ac) {
        _0x4a4417.push(_0x462ef4(_0x16966e[_0x3741ac]));
      }
      return _0x4a4417;
    }
    function _0x7e74d6(_0x5a993a) {
      var _0x47abd6 = _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.INTEGER, false, _0x342fbe.integerToDer(_0x5a993a.version).getBytes()), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x3d5560.pki.distinguishedNameToAsn1({
        attributes: _0x5a993a.issuer
      }), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.INTEGER, false, _0x3d5560.util.hexToBytes(_0x5a993a.serialNumber))]), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OID, false, _0x342fbe.oidToDer(_0x5a993a.digestAlgorithm).getBytes()), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.NULL, false, "")])]);
      if (_0x5a993a.authenticatedAttributesAsn1) {
        _0x47abd6.value.push(_0x5a993a.authenticatedAttributesAsn1);
      }
      _0x47abd6.value.push(_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OID, false, _0x342fbe.oidToDer(_0x5a993a.signatureAlgorithm).getBytes()), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.NULL, false, "")]));
      _0x47abd6.value.push(_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OCTETSTRING, false, _0x5a993a.signature));
      if (_0x5a993a.unauthenticatedAttributes.length > 0) {
        var _0x221f9b = _0x342fbe.create(_0x342fbe.Class.CONTEXT_SPECIFIC, 1, true, []);
        for (var _0x527858 = 0; _0x527858 < _0x5a993a.unauthenticatedAttributes.length; ++_0x527858) {
          var _0x99f657 = _0x5a993a.unauthenticatedAttributes[_0x527858];
          _0x221f9b.values.push(_0x2a08b7(_0x99f657));
        }
        _0x47abd6.value.push(_0x221f9b);
      }
      return _0x47abd6;
    }
    function _0x3d0f39(_0x2a2470) {
      var _0x2ee1fd = [];
      for (var _0x25e2b4 = 0; _0x25e2b4 < _0x2a2470.length; ++_0x25e2b4) {
        _0x2ee1fd.push(_0x7e74d6(_0x2a2470[_0x25e2b4]));
      }
      return _0x2ee1fd;
    }
    function _0x2a08b7(_0x21bdaa) {
      var _0xd6dfd4;
      if (_0x21bdaa.type === _0x3d5560.pki.oids.contentType) {
        _0xd6dfd4 = _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OID, false, _0x342fbe.oidToDer(_0x21bdaa.value).getBytes());
      } else if (_0x21bdaa.type === _0x3d5560.pki.oids.messageDigest) {
        _0xd6dfd4 = _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OCTETSTRING, false, _0x21bdaa.value.bytes());
      } else if (_0x21bdaa.type === _0x3d5560.pki.oids.signingTime) {
        var _0x3cf9e1 = new Date("1950-01-01T00:00:00Z");
        var _0x4d6a78 = new Date("2050-01-01T00:00:00Z");
        var _0x10fcc1 = _0x21bdaa.value;
        if (typeof _0x10fcc1 === "string") {
          var _0x3ac0d3 = Date.parse(_0x10fcc1);
          if (!isNaN(_0x3ac0d3)) {
            _0x10fcc1 = new Date(_0x3ac0d3);
          } else if (_0x10fcc1.length === 13) {
            _0x10fcc1 = _0x342fbe.utcTimeToDate(_0x10fcc1);
          } else {
            _0x10fcc1 = _0x342fbe.generalizedTimeToDate(_0x10fcc1);
          }
        }
        if (_0x10fcc1 >= _0x3cf9e1 && _0x10fcc1 < _0x4d6a78) {
          _0xd6dfd4 = _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.UTCTIME, false, _0x342fbe.dateToUtcTime(_0x10fcc1));
        } else {
          _0xd6dfd4 = _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.GENERALIZEDTIME, false, _0x342fbe.dateToGeneralizedTime(_0x10fcc1));
        }
      }
      return _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OID, false, _0x342fbe.oidToDer(_0x21bdaa.type).getBytes()), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SET, true, [_0xd6dfd4])]);
    }
    function _0x50a539(_0x287041) {
      return [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OID, false, _0x342fbe.oidToDer(_0x3d5560.pki.oids.data).getBytes()), _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.SEQUENCE, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OID, false, _0x342fbe.oidToDer(_0x287041.algorithm).getBytes()), !_0x287041.parameter ? undefined : _0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OCTETSTRING, false, _0x287041.parameter.getBytes())]), _0x342fbe.create(_0x342fbe.Class.CONTEXT_SPECIFIC, 0, true, [_0x342fbe.create(_0x342fbe.Class.UNIVERSAL, _0x342fbe.Type.OCTETSTRING, false, _0x287041.content.getBytes())])];
    }
    function _0x33853e(_0x179917, _0x3843f1, _0x578e8d) {
      var _0x1c7f34 = {};
      var _0x410984 = [];
      if (!_0x342fbe.validate(_0x3843f1, _0x578e8d, _0x1c7f34, _0x410984)) {
        var _0x77c4d9 = new Error("Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.");
        _0x77c4d9.errors = _0x77c4d9;
        throw _0x77c4d9;
      }
      var _0x41ee11 = _0x342fbe.derToOid(_0x1c7f34.contentType);
      if (_0x41ee11 !== _0x3d5560.pki.oids.data) {
        throw new Error("Unsupported PKCS#7 message. Only wrapped ContentType Data supported.");
      }
      if (_0x1c7f34.encryptedContent) {
        var _0x297ce1 = "";
        if (_0x3d5560.util.isArray(_0x1c7f34.encryptedContent)) {
          for (var _0x2f73a6 = 0; _0x2f73a6 < _0x1c7f34.encryptedContent.length; ++_0x2f73a6) {
            if (_0x1c7f34.encryptedContent[_0x2f73a6].type !== _0x342fbe.Type.OCTETSTRING) {
              throw new Error("Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.");
            }
            _0x297ce1 += _0x1c7f34.encryptedContent[_0x2f73a6].value;
          }
        } else {
          _0x297ce1 = _0x1c7f34.encryptedContent;
        }
        _0x179917.encryptedContent = {
          algorithm: _0x342fbe.derToOid(_0x1c7f34.encAlgorithm),
          parameter: _0x3d5560.util.createBuffer(_0x1c7f34.encParameter.value),
          content: _0x3d5560.util.createBuffer(_0x297ce1)
        };
      }
      if (_0x1c7f34.content) {
        var _0x297ce1 = "";
        if (_0x3d5560.util.isArray(_0x1c7f34.content)) {
          for (var _0x2f73a6 = 0; _0x2f73a6 < _0x1c7f34.content.length; ++_0x2f73a6) {
            if (_0x1c7f34.content[_0x2f73a6].type !== _0x342fbe.Type.OCTETSTRING) {
              throw new Error("Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.");
            }
            _0x297ce1 += _0x1c7f34.content[_0x2f73a6].value;
          }
        } else {
          _0x297ce1 = _0x1c7f34.content;
        }
        _0x179917.content = _0x3d5560.util.createBuffer(_0x297ce1);
      }
      _0x179917.version = _0x1c7f34.version.charCodeAt(0);
      _0x179917.rawCapture = _0x1c7f34;
      return _0x1c7f34;
    }
    function _0x3398c8(_0x38b1cb) {
      if (_0x38b1cb.encryptedContent.key === undefined) {
        throw new Error("Symmetric key not available.");
      }
      if (_0x38b1cb.content === undefined) {
        var _0x5ae19a;
        switch (_0x38b1cb.encryptedContent.algorithm) {
          case _0x3d5560.pki.oids["aes128-CBC"]:
          case _0x3d5560.pki.oids["aes192-CBC"]:
          case _0x3d5560.pki.oids["aes256-CBC"]:
            _0x5ae19a = _0x3d5560.aes.createDecryptionCipher(_0x38b1cb.encryptedContent.key);
            break;
          case _0x3d5560.pki.oids.desCBC:
          case _0x3d5560.pki.oids["des-EDE3-CBC"]:
            _0x5ae19a = _0x3d5560.des.createDecryptionCipher(_0x38b1cb.encryptedContent.key);
            break;
          default:
            throw new Error("Unsupported symmetric cipher, OID " + _0x38b1cb.encryptedContent.algorithm);
        }
        _0x5ae19a.start(_0x38b1cb.encryptedContent.parameter);
        _0x5ae19a.update(_0x38b1cb.encryptedContent.content);
        if (!_0x5ae19a.finish()) {
          throw new Error("Symmetric decryption failed.");
        }
        _0x38b1cb.content = _0x5ae19a.output;
      }
    }
  }
});
var require_ssh = __commonJS({
  "node_modules/node-forge/lib/ssh.js"(_0x548ec7, _0x2bba3d) {
    var _0x31cd97 = require_forge();
    require_aes();
    require_hmac();
    require_md5();
    require_sha1();
    require_util();
    var _0x24956c = _0x2bba3d.exports = _0x31cd97.ssh = _0x31cd97.ssh || {};
    _0x24956c.privateKeyToPutty = function (_0x2d25d8, _0x1bd71e, _0x42aa33) {
      _0x42aa33 = _0x42aa33 || "";
      _0x1bd71e = _0x1bd71e || "";
      var _0x32c90d = "ssh-rsa";
      var _0x25af6f = _0x1bd71e === "" ? "none" : "aes256-cbc";
      var _0x14fad4 = "PuTTY-User-Key-File-2: " + _0x32c90d + "\r\n";
      _0x14fad4 += "Encryption: " + _0x25af6f + "\r\n";
      _0x14fad4 += "Comment: " + _0x42aa33 + "\r\n";
      var _0x3ae3b6 = _0x31cd97.util.createBuffer();
      _0x4f2c4b(_0x3ae3b6, _0x32c90d);
      _0x542c59(_0x3ae3b6, _0x2d25d8.e);
      _0x542c59(_0x3ae3b6, _0x2d25d8.n);
      var _0x34b2df = _0x31cd97.util.encode64(_0x3ae3b6.bytes(), 64);
      var _0x3e271a = Math.floor(_0x34b2df.length / 66) + 1;
      _0x14fad4 += "Public-Lines: " + _0x3e271a + "\r\n";
      _0x14fad4 += _0x34b2df;
      var _0x1a94f6 = _0x31cd97.util.createBuffer();
      _0x542c59(_0x1a94f6, _0x2d25d8.d);
      _0x542c59(_0x1a94f6, _0x2d25d8.p);
      _0x542c59(_0x1a94f6, _0x2d25d8.q);
      _0x542c59(_0x1a94f6, _0x2d25d8.qInv);
      var _0x493335;
      if (!_0x1bd71e) {
        _0x493335 = _0x31cd97.util.encode64(_0x1a94f6.bytes(), 64);
      } else {
        var _0x50a1a9 = _0x1a94f6.length() + 16 - 1;
        _0x50a1a9 -= _0x50a1a9 % 16;
        var _0x231aea = _0x11cf4f(_0x1a94f6.bytes());
        _0x231aea.truncate(_0x231aea.length() - _0x50a1a9 + _0x1a94f6.length());
        _0x1a94f6.putBuffer(_0x231aea);
        var _0x2fd3f6 = _0x31cd97.util.createBuffer();
        _0x2fd3f6.putBuffer(_0x11cf4f("\0\0\0\0", _0x1bd71e));
        _0x2fd3f6.putBuffer(_0x11cf4f("\0\0\0", _0x1bd71e));
        var _0x3436ed = _0x31cd97.aes.createEncryptionCipher(_0x2fd3f6.truncate(8), "CBC");
        _0x3436ed.start(_0x31cd97.util.createBuffer().fillWithByte(0, 16));
        _0x3436ed.update(_0x1a94f6.copy());
        _0x3436ed.finish();
        var _0x543f1c = _0x3436ed.output;
        _0x543f1c.truncate(16);
        _0x493335 = _0x31cd97.util.encode64(_0x543f1c.bytes(), 64);
      }
      _0x3e271a = Math.floor(_0x493335.length / 66) + 1;
      _0x14fad4 += "\r\nPrivate-Lines: " + _0x3e271a + "\r\n";
      _0x14fad4 += _0x493335;
      var _0x4d7900 = _0x11cf4f("putty-private-key-file-mac-key", _0x1bd71e);
      var _0x1dda1e = _0x31cd97.util.createBuffer();
      _0x4f2c4b(_0x1dda1e, _0x32c90d);
      _0x4f2c4b(_0x1dda1e, _0x25af6f);
      _0x4f2c4b(_0x1dda1e, _0x42aa33);
      _0x1dda1e.putInt32(_0x3ae3b6.length());
      _0x1dda1e.putBuffer(_0x3ae3b6);
      _0x1dda1e.putInt32(_0x1a94f6.length());
      _0x1dda1e.putBuffer(_0x1a94f6);
      var _0x5e9507 = _0x31cd97.hmac.create();
      _0x5e9507.start("sha1", _0x4d7900);
      _0x5e9507.update(_0x1dda1e.bytes());
      _0x14fad4 += "\r\nPrivate-MAC: " + _0x5e9507.digest().toHex() + "\r\n";
      return _0x14fad4;
    };
    _0x24956c.publicKeyToOpenSSH = function (_0x1abf00, _0xfb78c4) {
      var _0xf12e0c = "ssh-rsa";
      _0xfb78c4 = _0xfb78c4 || "";
      var _0x41cf96 = _0x31cd97.util.createBuffer();
      _0x4f2c4b(_0x41cf96, _0xf12e0c);
      _0x542c59(_0x41cf96, _0x1abf00.e);
      _0x542c59(_0x41cf96, _0x1abf00.n);
      return _0xf12e0c + " " + _0x31cd97.util.encode64(_0x41cf96.bytes()) + " " + _0xfb78c4;
    };
    _0x24956c.privateKeyToOpenSSH = function (_0x35dc60, _0x5c3ca1) {
      if (!_0x5c3ca1) {
        return _0x31cd97.pki.privateKeyToPem(_0x35dc60);
      }
      return _0x31cd97.pki.encryptRsaPrivateKey(_0x35dc60, _0x5c3ca1, {
        legacy: true,
        algorithm: "aes128"
      });
    };
    _0x24956c.getPublicKeyFingerprint = function (_0x2271a1, _0x44663c) {
      _0x44663c = _0x44663c || {};
      var _0x55f6b4 = _0x44663c.md || _0x31cd97.md.md5.create();
      var _0x3f94c0 = "ssh-rsa";
      var _0xb3d4da = _0x31cd97.util.createBuffer();
      _0x4f2c4b(_0xb3d4da, _0x3f94c0);
      _0x542c59(_0xb3d4da, _0x2271a1.e);
      _0x542c59(_0xb3d4da, _0x2271a1.n);
      _0x55f6b4.start();
      _0x55f6b4.update(_0xb3d4da.getBytes());
      var _0x349dea = _0x55f6b4.digest();
      if (_0x44663c.encoding === "hex") {
        var _0x26ab0f = _0x349dea.toHex();
        if (_0x44663c.delimiter) {
          return _0x26ab0f.match(/.{2}/g).join(_0x44663c.delimiter);
        }
        return _0x26ab0f;
      } else if (_0x44663c.encoding === "binary") {
        return _0x349dea.getBytes();
      } else if (_0x44663c.encoding) {
        throw new Error("Unknown encoding \"" + _0x44663c.encoding + "\".");
      }
      return _0x349dea;
    };
    function _0x542c59(_0x651b9e, _0x4748ed) {
      var _0x27b253 = _0x4748ed.toString(16);
      if (_0x27b253[0] >= "8") {
        _0x27b253 = "00" + _0x27b253;
      }
      var _0x539229 = _0x31cd97.util.hexToBytes(_0x27b253);
      _0x651b9e.putInt32(_0x539229.length);
      _0x651b9e.putBytes(_0x539229);
    }
    function _0x4f2c4b(_0x5013f5, _0x4234c4) {
      _0x5013f5.putInt32(_0x4234c4.length);
      _0x5013f5.putString(_0x4234c4);
    }
    function _0x11cf4f() {
      var _0x4ae6e3 = _0x31cd97.md.sha1.create();
      var _0x518681 = arguments.length;
      for (var _0x1b0470 = 0; _0x1b0470 < _0x518681; ++_0x1b0470) {
        _0x4ae6e3.update(arguments[_0x1b0470]);
      }
      return _0x4ae6e3.digest();
    }
  }
});
var require_lib = __commonJS({
  "node_modules/node-forge/lib/index.js"(_0x160194, _0x5d44e9) {
    _0x5d44e9.exports = require_forge();
    require_aes();
    require_aesCipherSuites();
    require_asn1();
    require_cipher();
    require_des();
    require_ed25519();
    require_hmac();
    require_kem();
    require_log();
    require_md_all();
    require_mgf1();
    require_pbkdf2();
    require_pem();
    require_pkcs1();
    require_pkcs12();
    require_pkcs7();
    require_pki();
    require_prime();
    require_prng();
    require_pss();
    require_random();
    require_rc2();
    require_ssh();
    require_tls();
    require_util();
  }
});
var forge = require_lib();
var PROVIDER_NAME = "Peachify";
var AES_KEY_HEX = "a8f2a1b5e9c470814f6b2c3a5d8e7f9c1a2b3c4d5e3f7a8b8cad1e2d0a4d5c5d";
var KEY_BYTES = forge.util.hexToBytes(AES_KEY_HEX);
var MOBILE_UAS = ["Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (Linux; Android 14; SM-F946U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36"];
var TIMEOUT = 15000;
var TMDB_KEY = "439c478a771f35c05022f9feabcca01c";
var SERVERS = [{
  label: "Iron",
  base: "https://uwu.eat-peach.sbs",
  path: "moviebox"
}, {
  label: "Wolf",
  base: "https://usa.eat-peach.sbs",
  path: "air"
}, {
  label: "Spider",
  base: "https://usa.eat-peach.sbs",
  path: "holly"
}, {
  label: "Multi",
  base: "https://usa.eat-peach.sbs",
  path: "multi"
}, {
  label: "Dark",
  base: "https://uwu.eat-peach.sbs",
  path: "net"
}];
function getRequestHeaders(_0x2de58e) {
  return {
    "User-Agent": _0x2de58e,
    Origin: "https://peachify.top",
    Referer: "https://peachify.top/"
  };
}
function b64urlDecode(_0x17c00f) {
  let _0x489051 = _0x17c00f.replace(/-/g, "+").replace(/_/g, "/");
  let _0x3c177f = _0x489051.length % 4 === 0 ? "" : "=".repeat(4 - _0x489051.length % 4);
  return forge.util.decode64(_0x489051 + _0x3c177f);
}
function aesGcmDecrypt(_0x22e479) {
  const _0x587faa = _0x22e479.split(".");
  if (_0x587faa.length < 3) {
    return null;
  }
  const _0x410aa6 = b64urlDecode(_0x587faa[0]);
  const _0x573306 = b64urlDecode(_0x587faa[1]);
  const _0x3787da = b64urlDecode(_0x587faa[2]);
  const _0x5ddef1 = _0x573306 + _0x3787da;
  const _0x342540 = _0x5ddef1.substring(0, _0x5ddef1.length - 16);
  const _0x5af041 = _0x5ddef1.substring(_0x5ddef1.length - 16);
  const _0x246749 = forge.cipher.createDecipher("AES-GCM", KEY_BYTES);
  _0x246749.start({
    iv: _0x410aa6,
    tagLength: 128,
    tag: forge.util.createBuffer(_0x5af041)
  });
  _0x246749.update(forge.util.createBuffer(_0x342540));
  const _0x5156ba = _0x246749.finish();
  if (_0x5156ba) {
    try {
      return JSON.parse(_0x246749.output.toString("utf8"));
    } catch (_0x13c219) {
      return null;
    }
  } else {
    return null;
  }
}
function fetchWithTimeout(_0x7f3e52, _0x17dcbd, _0x5c2b51) {
  return __async(this, null, function* () {
    _0x5c2b51 = _0x5c2b51 || TIMEOUT;
    try {
      var _0x252c14 = typeof AbortSignal !== "undefined" && AbortSignal.timeout ? AbortSignal.timeout(_0x5c2b51) : null;
      var _0x296d17 = __spreadValues({}, _0x17dcbd || {});
      if (_0x252c14) {
        _0x296d17.signal = _0x252c14;
      }
      return yield fetch(_0x7f3e52, _0x296d17);
    } catch (_0x3c2b7a) {
      if (_0x3c2b7a.name === "AbortError" || _0x3c2b7a.name === "TimeoutError") {
        console.log("[" + PROVIDER_NAME + "] Timeout: " + _0x7f3e52.substring(0, 80));
      }
      return null;
    }
  });
}
function fetchFromServer(_0x444c40, _0x1bf881, _0x15ba46, _0x434a64, _0x39f1cf, _0x2f3b78) {
  return __async(this, null, function* () {
    var _0x5f23ec = _0x15ba46 === "tv" || _0x15ba46 === "series" ? "tv" : "movie";
    var _0x4f687b = _0x444c40.base + "/" + _0x444c40.path + "/" + _0x5f23ec + "/" + _0x1bf881;
    if ((_0x15ba46 === "tv" || _0x15ba46 === "series") && _0x434a64 != null && _0x39f1cf != null) {
      _0x4f687b += "/" + _0x434a64 + "/" + _0x39f1cf;
    } else if (_0x15ba46 === "tv" || _0x15ba46 === "series") {
      _0x4f687b += "/1/1";
    }
    console.log("[" + PROVIDER_NAME + "] " + _0x444c40.label + ": " + _0x4f687b.substring(0, 100));
    var _0x4ff8cc = getRequestHeaders(_0x2f3b78);
    var _0x2ea58d = yield fetchWithTimeout(_0x4f687b, {
      headers: _0x4ff8cc
    }, TIMEOUT);
    if (!_0x2ea58d || !_0x2ea58d.ok) {
      console.log("[" + PROVIDER_NAME + "] " + _0x444c40.label + " -> " + (_0x2ea58d ? _0x2ea58d.status : "no response"));
      return null;
    }
    var _0x273d5b = yield _0x2ea58d.json();
    if (!_0x273d5b || !_0x273d5b.isEncrypted || !_0x273d5b.data) {
      console.log("[" + PROVIDER_NAME + "] " + _0x444c40.label + " unexpected format");
      return null;
    }
    var _0x15ac19 = aesGcmDecrypt(_0x273d5b.data);
    if (!_0x15ac19) {
      console.log("[" + PROVIDER_NAME + "] " + _0x444c40.label + " decrypt fail");
      return null;
    }
    var _0x45be48 = _0x15ac19.sources ? _0x15ac19.sources.length : 0;
    console.log("[" + PROVIDER_NAME + "] " + _0x444c40.label + " OK (" + _0x45be48 + " sources)");
    return _0x15ac19;
  });
}
function normalizeQuality(_0x1cd9e1) {
  var _0x3f6698 = String(_0x1cd9e1 || "").toLowerCase();
  var _0x38591e = _0x3f6698.match(/(2160|1080|720|480)\s*p/i);
  if (_0x38591e) {
    return _0x38591e[1] + "p";
  } else if (_0x3f6698.indexOf("4k") >= 0) {
    return "2160p";
  } else {
    return "HD";
  }
}
function buildStreams(_0x386491, _0x4b04b0, _0x6c91cd, _0x5cce07, _0x5d2615, _0x5605de) {
  var _0x47591c = [];
  var _0x5d106f = {};
  if (!_0x386491 || !_0x386491.sources) {
    return _0x47591c;
  }
  var _0x25be7a = _0x5cce07 != null && _0x5d2615 != null;
  var _0x233165 = _0x25be7a ? " S" + _0x5cce07 + "E" + _0x5d2615 : "";
  var _0x33bf39 = _0x6c91cd ? _0x6c91cd + _0x233165 + " - Peachify" : "Peachify";
  for (var _0x4c6aaa = 0; _0x4c6aaa < _0x386491.sources.length; _0x4c6aaa++) {
    var _0x1cdf1e = _0x386491.sources[_0x4c6aaa];
    var _0x59288c = _0x1cdf1e.url || _0x1cdf1e.src || _0x1cdf1e.file || _0x1cdf1e.stream || _0x1cdf1e.streamUrl || "";
    var _0x4c6016 = _0x1cdf1e.dub || _0x1cdf1e.audio || _0x1cdf1e.language || _0x1cdf1e.name || "Original";
    var _0x2337d0 = _0x59288c + "|" + _0x4c6016;
    if (!_0x59288c || _0x5d106f[_0x2337d0]) {
      continue;
    }
    _0x5d106f[_0x2337d0] = true;
    var _0x168eb3 = normalizeQuality(_0x1cdf1e.quality || _0x1cdf1e.resolution || "");
    var _0x416218 = _0x33bf39 + " | " + _0x4b04b0 + " | " + _0x168eb3 + " | " + _0x4c6016;
    var _0x49fc0c = {
      origin: "https://peachify.top",
      referer: "https://peachify.top/",
      "user-agent": _0x5605de,
      accept: "*/*"
    };
    if (_0x1cdf1e.headers) {
      for (var _0x316be8 in _0x1cdf1e.headers) {
        _0x49fc0c[_0x316be8.toLowerCase()] = _0x1cdf1e.headers[_0x316be8];
      }
    }
    var _0x261c14 = _0x1cdf1e.type === "hls" || _0x59288c.indexOf("m3u8") !== -1;
    var _0x3e3c9c = {
      name: _0x416218,
      title: _0x416218,
      url: _0x59288c,
      quality: _0x168eb3,
      behaviorHints: {
        notWebReady: true
      }
    };
    if (_0x261c14) {
      _0x3e3c9c.headers = _0x49fc0c;
    } else {
      _0x3e3c9c.behaviorHints.proxyHeaders = {
        request: _0x49fc0c
      };
    }
    _0x47591c.push(_0x3e3c9c);
  }
  return _0x47591c;
}
function getStreams(_0x968d80, _0x49502e, _0x3bb9a7, _0x3c7b2a) {
  return __async(this, null, function* () {
    try {
      var _0x580bd = MOBILE_UAS[Math.floor(Math.random() * MOBILE_UAS.length)];
      console.log("[" + PROVIDER_NAME + "] ID=" + _0x968d80 + " T=" + _0x49502e + " S=" + _0x3bb9a7 + " E=" + _0x3c7b2a);
      var _0x2fa12a = String(_0x968d80 || "").trim();
      if (_0x2fa12a.indexOf("tt") === 0) {
        console.log("[" + PROVIDER_NAME + "] Resolving IMDb ID...");
        var _0x271704 = yield fetchWithTimeout("https://api.themoviedb.org/3/find/" + _0x2fa12a + "?api_key=" + TMDB_KEY + "&external_source=imdb_id", {
          headers: {
            "User-Agent": _0x580bd
          }
        }, 10000);
        if (_0x271704 && _0x271704.ok) {
          var _0x188d5a = yield _0x271704.json();
          var _0xc5915f = _0x49502e === "tv" || _0x49502e === "series" ? _0x188d5a.tv_results : _0x188d5a.movie_results;
          if (_0xc5915f && _0xc5915f.length > 0) {
            _0x2fa12a = String(_0xc5915f[0].id);
            console.log("[" + PROVIDER_NAME + "] Resolved to TMDB: " + _0x2fa12a);
          }
        }
      }
      var _0x292525 = (() => __async(this, null, function* () {
        var _0x5d1614 = _0x49502e === "tv" || _0x49502e === "series" ? "tv" : "movie";
        try {
          var _0x11676b = yield fetchWithTimeout("https://api.themoviedb.org/3/" + _0x5d1614 + "/" + _0x2fa12a + "?api_key=" + TMDB_KEY, {
            headers: {
              "User-Agent": _0x580bd
            }
          }, 8000);
          if (_0x11676b && _0x11676b.ok) {
            var _0x16bae4 = yield _0x11676b.json();
            return _0x16bae4.title || _0x16bae4.name || null;
          }
        } catch (_0x20b84c) {}
        return null;
      }))();
      var _0x46523a = SERVERS.map(function (_0x382207) {
        return __async(this, null, function* () {
          var _0x35bbda = yield fetchFromServer(_0x382207, _0x2fa12a, _0x49502e, _0x3bb9a7, _0x3c7b2a, _0x580bd);
          return {
            data: _0x35bbda,
            label: _0x382207.label
          };
        });
      });
      var _0xc8e6f = yield _0x292525;
      var _0x581314 = yield Promise.all(_0x46523a);
      var _0x16b5aa = [];
      for (var _0x2451cd = 0; _0x2451cd < _0x581314.length; _0x2451cd++) {
        var _0x25662f = _0x581314[_0x2451cd];
        if (_0x25662f.data) {
          var _0x417ff8 = buildStreams(_0x25662f.data, _0x25662f.label, _0xc8e6f, _0x3bb9a7, _0x3c7b2a, _0x580bd);
          for (var _0x54cab8 = 0; _0x54cab8 < _0x417ff8.length; _0x54cab8++) {
            _0x16b5aa.push(_0x417ff8[_0x54cab8]);
          }
        }
      }
      var _0x4b10db = {
        "2160p": 0,
        "1080p": 1,
        "720p": 2,
        "480p": 3,
        HD: 4
      };
      _0x16b5aa.sort(function (_0x111f51, _0x409586) {
        var _0x5c3d1c = _0x4b10db[_0x111f51.quality] !== undefined ? _0x4b10db[_0x111f51.quality] : 99;
        var _0x587e50 = _0x4b10db[_0x409586.quality] !== undefined ? _0x4b10db[_0x409586.quality] : 99;
        return _0x5c3d1c - _0x587e50;
      });
      console.log("[" + PROVIDER_NAME + "] Total: " + _0x16b5aa.length + " streams");
      return _0x16b5aa;
    } catch (_0x1e6c27) {
      console.error("[" + PROVIDER_NAME + "] Fatal: " + (_0x1e6c27.message || _0x1e6c27));
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