! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("cloudbase", [], t) : "object" == typeof exports ? exports.cloudbase = t() : e.cloudbase = t()
}("undefined" != typeof window ? window : this, (function() {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) n.d(r, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 13)
    }([function(e, t, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n), Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                })
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            i = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                return o(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.helpers = t.utils = t.events = t.cache = t.adapters = t.constants = void 0;
        var s = i(n(7));
        t.constants = s;
        var a = i(n(17));
        t.adapters = a;
        var u = i(n(24));
        t.cache = u;
        var c = i(n(25));
        t.events = c;
        var f = i(n(4));
        t.utils = f;
        var l = i(n(26));
        t.helpers = l
    }, function(e, t, n) {
        "use strict";
        (function(e, r) {
            n.d(t, "a", (function() {
                return Be
            }));
            var o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};

            function i(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
            }

            function s(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports
            }
            for (var a = function(e) {
                    var t = g(e),
                        n = t[0],
                        r = t[1];
                    return 3 * (n + r) / 4 - r
                }, u = function(e) {
                    var t, n, r = g(e),
                        o = r[0],
                        i = r[1],
                        s = new h(function(e, t, n) {
                            return 3 * (t + n) / 4 - n
                        }(0, o, i)),
                        a = 0,
                        u = i > 0 ? o - 4 : o;
                    for (n = 0; n < u; n += 4) t = l[e.charCodeAt(n)] << 18 | l[e.charCodeAt(n + 1)] << 12 | l[e.charCodeAt(n + 2)] << 6 | l[e.charCodeAt(n + 3)], s[a++] = t >> 16 & 255, s[a++] = t >> 8 & 255, s[a++] = 255 & t;
                    2 === i && (t = l[e.charCodeAt(n)] << 2 | l[e.charCodeAt(n + 1)] >> 4, s[a++] = 255 & t);
                    1 === i && (t = l[e.charCodeAt(n)] << 10 | l[e.charCodeAt(n + 1)] << 4 | l[e.charCodeAt(n + 2)] >> 2, s[a++] = t >> 8 & 255, s[a++] = 255 & t);
                    return s
                }, c = function(e) {
                    for (var t, n = e.length, r = n % 3, o = [], i = 0, s = n - r; i < s; i += 16383) o.push(_(e, i, i + 16383 > s ? s : i + 16383));
                    1 === r ? (t = e[n - 1], o.push(f[t >> 2] + f[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o.push(f[t >> 10] + f[t >> 4 & 63] + f[t << 2 & 63] + "="));
                    return o.join("")
                }, f = [], l = [], h = "undefined" != typeof Uint8Array ? Uint8Array : Array, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, y = p.length; d < y; ++d) f[d] = p[d], l[p.charCodeAt(d)] = d;

            function g(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = e.indexOf("=");
                return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
            }

            function _(e, t, n) {
                for (var r, o, i = [], s = t; s < n; s += 3) r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), i.push(f[(o = r) >> 18 & 63] + f[o >> 12 & 63] + f[o >> 6 & 63] + f[63 & o]);
                return i.join("")
            }
            l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63;
            var v = {
                    byteLength: a,
                    toByteArray: u,
                    fromByteArray: c
                },
                m = function(e, t, n, r, o) {
                    var i, s, a = 8 * o - r - 1,
                        u = (1 << a) - 1,
                        c = u >> 1,
                        f = -7,
                        l = n ? o - 1 : 0,
                        h = n ? -1 : 1,
                        p = e[t + l];
                    for (l += h, i = p & (1 << -f) - 1, p >>= -f, f += a; f > 0; i = 256 * i + e[t + l], l += h, f -= 8);
                    for (s = i & (1 << -f) - 1, i >>= -f, f += r; f > 0; s = 256 * s + e[t + l], l += h, f -= 8);
                    if (0 === i) i = 1 - c;
                    else {
                        if (i === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                        s += Math.pow(2, r), i -= c
                    }
                    return (p ? -1 : 1) * s * Math.pow(2, i - r)
                },
                b = function(e, t, n, r, o, i) {
                    var s, a, u, c = 8 * i - o - 1,
                        f = (1 << c) - 1,
                        l = f >> 1,
                        h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        p = r ? 0 : i - 1,
                        d = r ? 1 : -1,
                        y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (t * u - 1) * Math.pow(2, o), s += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, o), s = 0)); o >= 8; e[n + p] = 255 & a, p += d, a /= 256, o -= 8);
                    for (s = s << o | a, c += o; c > 0; e[n + p] = 255 & s, p += d, s /= 256, c -= 8);
                    e[n + p - d] |= 128 * y
                },
                w = s((function(e, t) {
                    var n = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                    t.Buffer = o, t.SlowBuffer = function(e) {
                        +e != e && (e = 0);
                        return o.alloc(+e)
                    }, t.INSPECT_MAX_BYTES = 50;

                    function r(e) {
                        if (e > 2147483647) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                        var t = new Uint8Array(e);
                        return Object.setPrototypeOf(t, o.prototype), t
                    }

                    function o(e, t, n) {
                        if ("number" == typeof e) {
                            if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                            return a(e)
                        }
                        return i(e, t, n)
                    }

                    function i(e, t, n) {
                        if ("string" == typeof e) return function(e, t) {
                            "string" == typeof t && "" !== t || (t = "utf8");
                            if (!o.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                            var n = 0 | l(e, t),
                                i = r(n),
                                s = i.write(e, t);
                            s !== n && (i = i.slice(0, s));
                            return i
                        }(e, t);
                        if (ArrayBuffer.isView(e)) return function(e) {
                            if (k(e, Uint8Array)) {
                                var t = new Uint8Array(e);
                                return c(t.buffer, t.byteOffset, t.byteLength)
                            }
                            return u(e)
                        }(e);
                        if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + babelHelpers.typeof(e));
                        if (k(e, ArrayBuffer) || e && k(e.buffer, ArrayBuffer)) return c(e, t, n);
                        if ("undefined" != typeof SharedArrayBuffer && (k(e, SharedArrayBuffer) || e && k(e.buffer, SharedArrayBuffer))) return c(e, t, n);
                        if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                        var i = e.valueOf && e.valueOf();
                        if (null != i && i !== e) return o.from(i, t, n);
                        var s = function(e) {
                            if (o.isBuffer(e)) {
                                var t = 0 | f(e.length),
                                    n = r(t);
                                return 0 === n.length || e.copy(n, 0, 0, t), n
                            }
                            if (void 0 !== e.length) return "number" != typeof e.length || q(e.length) ? r(0) : u(e);
                            if ("Buffer" === e.type && Array.isArray(e.data)) return u(e.data)
                        }(e);
                        if (s) return s;
                        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return o.from(e[Symbol.toPrimitive]("string"), t, n);
                        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + babelHelpers.typeof(e))
                    }

                    function s(e) {
                        if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                        if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
                    }

                    function a(e) {
                        return s(e), r(e < 0 ? 0 : 0 | f(e))
                    }

                    function u(e) {
                        for (var t = e.length < 0 ? 0 : 0 | f(e.length), n = r(t), o = 0; o < t; o += 1) n[o] = 255 & e[o];
                        return n
                    }

                    function c(e, t, n) {
                        if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                        if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                        var r;
                        return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, o.prototype), r
                    }

                    function f(e) {
                        if (e >= 2147483647) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647..toString(16) + " bytes");
                        return 0 | e
                    }

                    function l(e, t) {
                        if (o.isBuffer(e)) return e.length;
                        if (ArrayBuffer.isView(e) || k(e, ArrayBuffer)) return e.byteLength;
                        if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + babelHelpers.typeof(e));
                        var n = e.length,
                            r = arguments.length > 2 && !0 === arguments[2];
                        if (!r && 0 === n) return 0;
                        for (var i = !1;;) switch (t) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return n;
                            case "utf8":
                            case "utf-8":
                                return j(e).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * n;
                            case "hex":
                                return n >>> 1;
                            case "base64":
                                return C(e).length;
                            default:
                                if (i) return r ? -1 : j(e).length;
                                t = ("" + t).toLowerCase(), i = !0
                        }
                    }

                    function h(e, t, n) {
                        var r = !1;
                        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                        if ((n >>>= 0) <= (t >>>= 0)) return "";
                        for (e || (e = "utf8");;) switch (e) {
                            case "hex":
                                return T(this, t, n);
                            case "utf8":
                            case "utf-8":
                                return O(this, t, n);
                            case "ascii":
                                return I(this, t, n);
                            case "latin1":
                            case "binary":
                                return N(this, t, n);
                            case "base64":
                                return A(this, t, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return R(this, t, n);
                            default:
                                if (r) throw new TypeError("Unknown encoding: " + e);
                                e = (e + "").toLowerCase(), r = !0
                        }
                    }

                    function p(e, t, n) {
                        var r = e[t];
                        e[t] = e[n], e[n] = r
                    }

                    function d(e, t, n, r, i) {
                        if (0 === e.length) return -1;
                        if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), q(n = +n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                            if (i) return -1;
                            n = e.length - 1
                        } else if (n < 0) {
                            if (!i) return -1;
                            n = 0
                        }
                        if ("string" == typeof t && (t = o.from(t, r)), o.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, n, r, i);
                        if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : y(e, [t], n, r, i);
                        throw new TypeError("val must be string, number or Buffer")
                    }

                    function y(e, t, n, r, o) {
                        var i, s = 1,
                            a = e.length,
                            u = t.length;
                        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                            if (e.length < 2 || t.length < 2) return -1;
                            s = 2, a /= 2, u /= 2, n /= 2
                        }

                        function c(e, t) {
                            return 1 === s ? e[t] : e.readUInt16BE(t * s)
                        }
                        if (o) {
                            var f = -1;
                            for (i = n; i < a; i++)
                                if (c(e, i) === c(t, -1 === f ? 0 : i - f)) {
                                    if (-1 === f && (f = i), i - f + 1 === u) return f * s
                                } else -1 !== f && (i -= i - f), f = -1
                        } else
                            for (n + u > a && (n = a - u), i = n; i >= 0; i--) {
                                for (var l = !0, h = 0; h < u; h++)
                                    if (c(e, i + h) !== c(t, h)) {
                                        l = !1;
                                        break
                                    } if (l) return i
                            }
                        return -1
                    }

                    function g(e, t, n, r) {
                        n = Number(n) || 0;
                        var o = e.length - n;
                        r ? (r = Number(r)) > o && (r = o) : r = o;
                        var i = t.length;
                        r > i / 2 && (r = i / 2);
                        for (var s = 0; s < r; ++s) {
                            var a = parseInt(t.substr(2 * s, 2), 16);
                            if (q(a)) return s;
                            e[n + s] = a
                        }
                        return s
                    }

                    function _(e, t, n, r) {
                        return M(j(t, e.length - n), e, n, r)
                    }

                    function w(e, t, n, r) {
                        return M(function(e) {
                            for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                            return t
                        }(t), e, n, r)
                    }

                    function E(e, t, n, r) {
                        return M(C(t), e, n, r)
                    }

                    function S(e, t, n, r) {
                        return M(function(e, t) {
                            for (var n, r, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) n = e.charCodeAt(s), r = n >> 8, o = n % 256, i.push(o), i.push(r);
                            return i
                        }(t, e.length - n), e, n, r)
                    }

                    function A(e, t, n) {
                        return 0 === t && n === e.length ? v.fromByteArray(e) : v.fromByteArray(e.slice(t, n))
                    }

                    function O(e, t, n) {
                        n = Math.min(e.length, n);
                        for (var r = [], o = t; o < n;) {
                            var i, s, a, u, c = e[o],
                                f = null,
                                l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                            if (o + l <= n) switch (l) {
                                case 1:
                                    c < 128 && (f = c);
                                    break;
                                case 2:
                                    128 == (192 & (i = e[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (f = u);
                                    break;
                                case 3:
                                    i = e[o + 1], s = e[o + 2], 128 == (192 & i) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (f = u);
                                    break;
                                case 4:
                                    i = e[o + 1], s = e[o + 2], a = e[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (f = u)
                            }
                            null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), r.push(f), o += l
                        }
                        return function(e) {
                            var t = e.length;
                            if (t <= 4096) return String.fromCharCode.apply(String, e);
                            var n = "",
                                r = 0;
                            for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
                            return n
                        }(r)
                    }
                    t.kMaxLength = 2147483647, o.TYPED_ARRAY_SUPPORT = function() {
                        try {
                            var e = new Uint8Array(1),
                                t = {
                                    foo: function() {
                                        return 42
                                    }
                                };
                            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                        } catch (e) {
                            return !1
                        }
                    }(), o.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(o.prototype, "parent", {
                        enumerable: !0,
                        get: function() {
                            if (o.isBuffer(this)) return this.buffer
                        }
                    }), Object.defineProperty(o.prototype, "offset", {
                        enumerable: !0,
                        get: function() {
                            if (o.isBuffer(this)) return this.byteOffset
                        }
                    }), o.poolSize = 8192, o.from = function(e, t, n) {
                        return i(e, t, n)
                    }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array), o.alloc = function(e, t, n) {
                        return function(e, t, n) {
                            return s(e), e <= 0 ? r(e) : void 0 !== t ? "string" == typeof n ? r(e).fill(t, n) : r(e).fill(t) : r(e)
                        }(e, t, n)
                    }, o.allocUnsafe = function(e) {
                        return a(e)
                    }, o.allocUnsafeSlow = function(e) {
                        return a(e)
                    }, o.isBuffer = function(e) {
                        return null != e && !0 === e._isBuffer && e !== o.prototype
                    }, o.compare = function(e, t) {
                        if (k(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), k(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                        if (e === t) return 0;
                        for (var n = e.length, r = t.length, i = 0, s = Math.min(n, r); i < s; ++i)
                            if (e[i] !== t[i]) {
                                n = e[i], r = t[i];
                                break
                            } return n < r ? -1 : r < n ? 1 : 0
                    }, o.isEncoding = function(e) {
                        switch (String(e).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }, o.concat = function(e, t) {
                        if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === e.length) return o.alloc(0);
                        var n;
                        if (void 0 === t)
                            for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                        var r = o.allocUnsafe(t),
                            i = 0;
                        for (n = 0; n < e.length; ++n) {
                            var s = e[n];
                            if (k(s, Uint8Array)) i + s.length > r.length ? o.from(s).copy(r, i) : Uint8Array.prototype.set.call(r, s, i);
                            else {
                                if (!o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                                s.copy(r, i)
                            }
                            i += s.length
                        }
                        return r
                    }, o.byteLength = l, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
                        var e = this.length;
                        if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var t = 0; t < e; t += 2) p(this, t, t + 1);
                        return this
                    }, o.prototype.swap32 = function() {
                        var e = this.length;
                        if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
                        return this
                    }, o.prototype.swap64 = function() {
                        var e = this.length;
                        if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
                        return this
                    }, o.prototype.toString = function() {
                        var e = this.length;
                        return 0 === e ? "" : 0 === arguments.length ? O(this, 0, e) : h.apply(this, arguments)
                    }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(e) {
                        if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                        return this === e || 0 === o.compare(this, e)
                    }, o.prototype.inspect = function() {
                        var e = "",
                            n = t.INSPECT_MAX_BYTES;
                        return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
                    }, n && (o.prototype[n] = o.prototype.inspect), o.prototype.compare = function(e, t, n, r, i) {
                        if (k(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), !o.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + babelHelpers.typeof(e));
                        if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                        if (r >= i && t >= n) return 0;
                        if (r >= i) return -1;
                        if (t >= n) return 1;
                        if (this === e) return 0;
                        for (var s = (i >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), u = Math.min(s, a), c = this.slice(r, i), f = e.slice(t, n), l = 0; l < u; ++l)
                            if (c[l] !== f[l]) {
                                s = c[l], a = f[l];
                                break
                            } return s < a ? -1 : a < s ? 1 : 0
                    }, o.prototype.includes = function(e, t, n) {
                        return -1 !== this.indexOf(e, t, n)
                    }, o.prototype.indexOf = function(e, t, n) {
                        return d(this, e, t, n, !0)
                    }, o.prototype.lastIndexOf = function(e, t, n) {
                        return d(this, e, t, n, !1)
                    }, o.prototype.write = function(e, t, n, r) {
                        if (void 0 === t) r = "utf8", n = this.length, t = 0;
                        else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                        else {
                            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                        }
                        var o = this.length - t;
                        if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        r || (r = "utf8");
                        for (var i = !1;;) switch (r) {
                            case "hex":
                                return g(this, e, t, n);
                            case "utf8":
                            case "utf-8":
                                return _(this, e, t, n);
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return w(this, e, t, n);
                            case "base64":
                                return E(this, e, t, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return S(this, e, t, n);
                            default:
                                if (i) throw new TypeError("Unknown encoding: " + r);
                                r = ("" + r).toLowerCase(), i = !0
                        }
                    }, o.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    };

                    function I(e, t, n) {
                        var r = "";
                        n = Math.min(e.length, n);
                        for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
                        return r
                    }

                    function N(e, t, n) {
                        var r = "";
                        n = Math.min(e.length, n);
                        for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
                        return r
                    }

                    function T(e, t, n) {
                        var r = e.length;
                        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                        for (var o = "", i = t; i < n; ++i) o += F[e[i]];
                        return o
                    }

                    function R(e, t, n) {
                        for (var r = e.slice(t, n), o = "", i = 0; i < r.length - 1; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                        return o
                    }

                    function B(e, t, n) {
                        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                        if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
                    }

                    function P(e, t, n, r, i, s) {
                        if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                        if (t > i || t < s) throw new RangeError('"value" argument is out of bounds');
                        if (n + r > e.length) throw new RangeError("Index out of range")
                    }

                    function D(e, t, n, r, o, i) {
                        if (n + r > e.length) throw new RangeError("Index out of range");
                        if (n < 0) throw new RangeError("Index out of range")
                    }

                    function L(e, t, n, r, o) {
                        return t = +t, n >>>= 0, o || D(e, 0, n, 4), b(e, t, n, r, 23, 4), n + 4
                    }

                    function x(e, t, n, r, o) {
                        return t = +t, n >>>= 0, o || D(e, 0, n, 8), b(e, t, n, r, 52, 8), n + 8
                    }
                    o.prototype.slice = function(e, t) {
                        var n = this.length;
                        (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
                        var r = this.subarray(e, t);
                        return Object.setPrototypeOf(r, o.prototype), r
                    }, o.prototype.readUintLE = o.prototype.readUIntLE = function(e, t, n) {
                        e >>>= 0, t >>>= 0, n || B(e, t, this.length);
                        for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
                        return r
                    }, o.prototype.readUintBE = o.prototype.readUIntBE = function(e, t, n) {
                        e >>>= 0, t >>>= 0, n || B(e, t, this.length);
                        for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) r += this[e + --t] * o;
                        return r
                    }, o.prototype.readUint8 = o.prototype.readUInt8 = function(e, t) {
                        return e >>>= 0, t || B(e, 1, this.length), this[e]
                    }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(e, t) {
                        return e >>>= 0, t || B(e, 2, this.length), this[e] | this[e + 1] << 8
                    }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(e, t) {
                        return e >>>= 0, t || B(e, 2, this.length), this[e] << 8 | this[e + 1]
                    }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(e, t) {
                        return e >>>= 0, t || B(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                    }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(e, t) {
                        return e >>>= 0, t || B(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                    }, o.prototype.readIntLE = function(e, t, n) {
                        e >>>= 0, t >>>= 0, n || B(e, t, this.length);
                        for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
                        return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r
                    }, o.prototype.readIntBE = function(e, t, n) {
                        e >>>= 0, t >>>= 0, n || B(e, t, this.length);
                        for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256);) i += this[e + --r] * o;
                        return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
                    }, o.prototype.readInt8 = function(e, t) {
                        return e >>>= 0, t || B(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                    }, o.prototype.readInt16LE = function(e, t) {
                        e >>>= 0, t || B(e, 2, this.length);
                        var n = this[e] | this[e + 1] << 8;
                        return 32768 & n ? 4294901760 | n : n
                    }, o.prototype.readInt16BE = function(e, t) {
                        e >>>= 0, t || B(e, 2, this.length);
                        var n = this[e + 1] | this[e] << 8;
                        return 32768 & n ? 4294901760 | n : n
                    }, o.prototype.readInt32LE = function(e, t) {
                        return e >>>= 0, t || B(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                    }, o.prototype.readInt32BE = function(e, t) {
                        return e >>>= 0, t || B(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                    }, o.prototype.readFloatLE = function(e, t) {
                        return e >>>= 0, t || B(e, 4, this.length), m(this, e, !0, 23, 4)
                    }, o.prototype.readFloatBE = function(e, t) {
                        return e >>>= 0, t || B(e, 4, this.length), m(this, e, !1, 23, 4)
                    }, o.prototype.readDoubleLE = function(e, t) {
                        return e >>>= 0, t || B(e, 8, this.length), m(this, e, !0, 52, 8)
                    }, o.prototype.readDoubleBE = function(e, t) {
                        return e >>>= 0, t || B(e, 8, this.length), m(this, e, !1, 52, 8)
                    }, o.prototype.writeUintLE = o.prototype.writeUIntLE = function(e, t, n, r) {
                        (e = +e, t >>>= 0, n >>>= 0, r) || P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                        var o = 1,
                            i = 0;
                        for (this[t] = 255 & e; ++i < n && (o *= 256);) this[t + i] = e / o & 255;
                        return t + n
                    }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(e, t, n, r) {
                        (e = +e, t >>>= 0, n >>>= 0, r) || P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                        var o = n - 1,
                            i = 1;
                        for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
                        return t + n
                    }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(e, t, n) {
                        return e = +e, t >>>= 0, n || P(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                    }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                    }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                    }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                    }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                    }, o.prototype.writeIntLE = function(e, t, n, r) {
                        if (e = +e, t >>>= 0, !r) {
                            var o = Math.pow(2, 8 * n - 1);
                            P(this, e, t, n, o - 1, -o)
                        }
                        var i = 0,
                            s = 1,
                            a = 0;
                        for (this[t] = 255 & e; ++i < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;
                        return t + n
                    }, o.prototype.writeIntBE = function(e, t, n, r) {
                        if (e = +e, t >>>= 0, !r) {
                            var o = Math.pow(2, 8 * n - 1);
                            P(this, e, t, n, o - 1, -o)
                        }
                        var i = n - 1,
                            s = 1,
                            a = 0;
                        for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;
                        return t + n
                    }, o.prototype.writeInt8 = function(e, t, n) {
                        return e = +e, t >>>= 0, n || P(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                    }, o.prototype.writeInt16LE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                    }, o.prototype.writeInt16BE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                    }, o.prototype.writeInt32LE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                    }, o.prototype.writeInt32BE = function(e, t, n) {
                        return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                    }, o.prototype.writeFloatLE = function(e, t, n) {
                        return L(this, e, t, !0, n)
                    }, o.prototype.writeFloatBE = function(e, t, n) {
                        return L(this, e, t, !1, n)
                    }, o.prototype.writeDoubleLE = function(e, t, n) {
                        return x(this, e, t, !0, n)
                    }, o.prototype.writeDoubleBE = function(e, t, n) {
                        return x(this, e, t, !1, n)
                    }, o.prototype.copy = function(e, t, n, r) {
                        if (!o.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                        if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                        if (0 === e.length || 0 === this.length) return 0;
                        if (t < 0) throw new RangeError("targetStart out of bounds");
                        if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                        if (r < 0) throw new RangeError("sourceEnd out of bounds");
                        r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                        var i = r - n;
                        return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), i
                    }, o.prototype.fill = function(e, t, n, r) {
                        if ("string" == typeof e) {
                            if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                            if ("string" == typeof r && !o.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                            if (1 === e.length) {
                                var i = e.charCodeAt(0);
                                ("utf8" === r && i < 128 || "latin1" === r) && (e = i)
                            }
                        } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                        if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                        if (n <= t) return this;
                        var s;
                        if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                            for (s = t; s < n; ++s) this[s] = e;
                        else {
                            var a = o.isBuffer(e) ? e : o.from(e, r),
                                u = a.length;
                            if (0 === u) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                            for (s = 0; s < n - t; ++s) this[s + t] = a[s % u]
                        }
                        return this
                    };
                    var U = /[^+/0-9A-Za-z-_]/g;

                    function j(e, t) {
                        var n;
                        t = t || 1 / 0;
                        for (var r = e.length, o = null, i = [], s = 0; s < r; ++s) {
                            if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                                if (!o) {
                                    if (n > 56319) {
                                        (t -= 3) > -1 && i.push(239, 191, 189);
                                        continue
                                    }
                                    if (s + 1 === r) {
                                        (t -= 3) > -1 && i.push(239, 191, 189);
                                        continue
                                    }
                                    o = n;
                                    continue
                                }
                                if (n < 56320) {
                                    (t -= 3) > -1 && i.push(239, 191, 189), o = n;
                                    continue
                                }
                                n = 65536 + (o - 55296 << 10 | n - 56320)
                            } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                            if (o = null, n < 128) {
                                if ((t -= 1) < 0) break;
                                i.push(n)
                            } else if (n < 2048) {
                                if ((t -= 2) < 0) break;
                                i.push(n >> 6 | 192, 63 & n | 128)
                            } else if (n < 65536) {
                                if ((t -= 3) < 0) break;
                                i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                            } else {
                                if (!(n < 1114112)) throw new Error("Invalid code point");
                                if ((t -= 4) < 0) break;
                                i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                            }
                        }
                        return i
                    }

                    function C(e) {
                        return v.toByteArray(function(e) {
                            if ((e = (e = e.split("=")[0]).trim().replace(U, "")).length < 2) return "";
                            for (; e.length % 4 != 0;) e += "=";
                            return e
                        }(e))
                    }

                    function M(e, t, n, r) {
                        for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
                        return o
                    }

                    function k(e, t) {
                        return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                    }

                    function q(e) {
                        return e != e
                    }
                    var F = function() {
                        for (var e = new Array(256), t = 0; t < 16; ++t)
                            for (var n = 16 * t, r = 0; r < 16; ++r) e[n + r] = "0123456789abcdef" [t] + "0123456789abcdef" [r];
                        return e
                    }()
                }));
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            w.Buffer, w.SlowBuffer, w.INSPECT_MAX_BYTES, w.kMaxLength;
            var E = {},
                S = "function" == typeof Object.create ? function(e, t) {
                    e.super_ = t, e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    })
                } : function(e, t) {
                    e.super_ = t;
                    var n = function() {};
                    n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
                },
                A = /%[sdj%]/g;

            function O(e) {
                if (!M(e)) {
                    for (var t = [], n = 0; n < arguments.length; n++) t.push(T(arguments[n]));
                    return t.join(" ")
                }
                n = 1;
                for (var r = arguments, o = r.length, i = String(e).replace(A, (function(e) {
                        if ("%%" === e) return "%";
                        if (n >= o) return e;
                        switch (e) {
                            case "%s":
                                return String(r[n++]);
                            case "%d":
                                return Number(r[n++]);
                            case "%j":
                                try {
                                    return JSON.stringify(r[n++])
                                } catch (e) {
                                    return "[Circular]"
                                }
                            default:
                                return e
                        }
                    })), s = r[n]; n < o; s = r[++n]) j(s) || !F(s) ? i += " " + s : i += " " + T(s);
                return i
            }
            var I, N = {};

            function T(e, t) {
                var n = {
                    seen: [],
                    stylize: B
                };
                return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), U(t) ? n.showHidden = t : t && J(n, t), k(n.showHidden) && (n.showHidden = !1), k(n.depth) && (n.depth = 2), k(n.colors) && (n.colors = !1), k(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = R), P(n, e, n.depth)
            }

            function R(e, t) {
                var n = T.styles[t];
                return n ? "[" + T.colors[n][0] + "m" + e + "[" + T.colors[n][1] + "m" : e
            }

            function B(e, t) {
                return e
            }

            function P(e, t, n) {
                if (e.customInspect && t && $(t.inspect) && t.inspect !== T && (!t.constructor || t.constructor.prototype !== t)) {
                    var r = t.inspect(n, e);
                    return M(r) || (r = P(e, r, n)), r
                }
                var o = function(e, t) {
                    if (k(t)) return e.stylize("undefined", "undefined");
                    if (M(t)) {
                        var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return e.stylize(n, "string")
                    }
                    if (C(t)) return e.stylize("" + t, "number");
                    if (U(t)) return e.stylize("" + t, "boolean");
                    if (j(t)) return e.stylize("null", "null")
                }(e, t);
                if (o) return o;
                var i = Object.keys(t),
                    s = function(e) {
                        var t = {};
                        return e.forEach((function(e, n) {
                            t[e] = !0
                        })), t
                    }(i);
                if (e.showHidden && (i = Object.getOwnPropertyNames(t)), Y(t) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0)) return D(t);
                if (0 === i.length) {
                    if ($(t)) {
                        var a = t.name ? ": " + t.name : "";
                        return e.stylize("[Function" + a + "]", "special")
                    }
                    if (q(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
                    if (W(t)) return e.stylize(Date.prototype.toString.call(t), "date");
                    if (Y(t)) return D(t)
                }
                var u, c = "",
                    f = !1,
                    l = ["{", "}"];
                (x(t) && (f = !0, l = ["[", "]"]), $(t)) && (c = " [Function" + (t.name ? ": " + t.name : "") + "]");
                return q(t) && (c = " " + RegExp.prototype.toString.call(t)), W(t) && (c = " " + Date.prototype.toUTCString.call(t)), Y(t) && (c = " " + D(t)), 0 !== i.length || f && 0 != t.length ? n < 0 ? q(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(t), u = f ? function(e, t, n, r, o) {
                    for (var i = [], s = 0, a = t.length; s < a; ++s) z(t, String(s)) ? i.push(L(e, t, n, r, String(s), !0)) : i.push("");
                    return o.forEach((function(o) {
                        o.match(/^\d+$/) || i.push(L(e, t, n, r, o, !0))
                    })), i
                }(e, t, n, s, i) : i.map((function(r) {
                    return L(e, t, n, s, r, f)
                })), e.seen.pop(), function(e, t, n) {
                    if (e.reduce((function(e, t) {
                            return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                        }), 0) > 60) return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
                    return n[0] + t + " " + e.join(", ") + " " + n[1]
                }(u, c, l)) : l[0] + c + l[1]
            }

            function D(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }

            function L(e, t, n, r, o, i) {
                var s, a, u;
                if ((u = Object.getOwnPropertyDescriptor(t, o) || {
                        value: t[o]
                    }).get ? a = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (a = e.stylize("[Setter]", "special")), z(r, o) || (s = "[" + o + "]"), a || (e.seen.indexOf(u.value) < 0 ? (a = j(n) ? P(e, u.value, null) : P(e, u.value, n - 1)).indexOf("\n") > -1 && (a = i ? a.split("\n").map((function(e) {
                        return "  " + e
                    })).join("\n").substr(2) : "\n" + a.split("\n").map((function(e) {
                        return "   " + e
                    })).join("\n")) : a = e.stylize("[Circular]", "special")), k(s)) {
                    if (i && o.match(/^\d+$/)) return a;
                    (s = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"))
                }
                return s + ": " + a
            }

            function x(e) {
                return Array.isArray(e)
            }

            function U(e) {
                return "boolean" == typeof e
            }

            function j(e) {
                return null === e
            }

            function C(e) {
                return "number" == typeof e
            }

            function M(e) {
                return "string" == typeof e
            }

            function k(e) {
                return void 0 === e
            }

            function q(e) {
                return F(e) && "[object RegExp]" === H(e)
            }

            function F(e) {
                return "object" === babelHelpers.typeof(e) && null !== e
            }

            function W(e) {
                return F(e) && "[object Date]" === H(e)
            }

            function Y(e) {
                return F(e) && ("[object Error]" === H(e) || e instanceof Error)
            }

            function $(e) {
                return "function" == typeof e
            }

            function H(e) {
                return Object.prototype.toString.call(e)
            }

            function K(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10)
            }
            T.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, T.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            };
            var G = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            function V() {
                var e = new Date,
                    t = [K(e.getHours()), K(e.getMinutes()), K(e.getSeconds())].join(":");
                return [e.getDate(), G[e.getMonth()], t].join(" ")
            }

            function J(e, t) {
                if (!t || !F(t)) return e;
                for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
                return e
            }

            function z(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var X = {
                    inherits: S,
                    _extend: J,
                    log: function() {
                        console.log("%s - %s", V(), O.apply(null, arguments))
                    },
                    isBuffer: function(e) {
                        return r.isBuffer(e)
                    },
                    isPrimitive: function(e) {
                        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" === babelHelpers.typeof(e) || void 0 === e
                    },
                    isFunction: $,
                    isError: Y,
                    isDate: W,
                    isObject: F,
                    isRegExp: q,
                    isUndefined: k,
                    isSymbol: function(e) {
                        return "symbol" === babelHelpers.typeof(e)
                    },
                    isString: M,
                    isNumber: C,
                    isNullOrUndefined: function(e) {
                        return null == e
                    },
                    isNull: j,
                    isBoolean: U,
                    isArray: x,
                    inspect: T,
                    deprecate: function t(n, r) {
                        if (k(e.process)) return function() {
                            return t(n, r).apply(this, arguments)
                        };
                        var o = !1;
                        return function() {
                            return o || (console.error(r), o = !0), n.apply(this, arguments)
                        }
                    },
                    format: O,
                    debuglog: function(e) {
                        if (k(I) && (I = ""), e = e.toUpperCase(), !N[e])
                            if (new RegExp("\\b" + e + "\\b", "i").test(I)) {
                                N[e] = function() {
                                    var t = O.apply(null, arguments);
                                    console.error("%s %d: %s", e, 0, t)
                                }
                            } else N[e] = function() {};
                        return N[e]
                    }
                },
                Z = s((function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.deprecate = t.isObjectLike = t.isDate = t.haveBuffer = t.isMap = t.isRegExp = t.isBigUInt64Array = t.isBigInt64Array = t.isUint8Array = t.isAnyArrayBuffer = t.randomBytes = t.normalizedFunctionString = void 0, t.normalizedFunctionString = function(e) {
                        return e.toString().replace("function(", "function (")
                    };
                    var n = "object" == typeof o.navigator && "ReactNative" === o.navigator.product ? "BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values." : "BSON: No cryptographic implementation for random bytes present, falling back to a less secure implementation.",
                        r = function(e) {
                            console.warn(n);
                            for (var t = w.Buffer.alloc(e), r = 0; r < e; ++r) t[r] = Math.floor(256 * Math.random());
                            return t
                        };

                    function i(e) {
                        return "object" == typeof e && null !== e
                    }
                    t.randomBytes = function() {
                        if ("undefined" != typeof window) {
                            var e = window.crypto || window.msCrypto;
                            if (e && e.getRandomValues) return function(t) {
                                return e.getRandomValues(w.Buffer.alloc(t))
                            }
                        }
                        if (void 0 !== o && o.crypto && o.crypto.getRandomValues) return function(e) {
                            return o.crypto.getRandomValues(w.Buffer.alloc(e))
                        };
                        var t;
                        try {
                            t = E.randomBytes
                        } catch (e) {}
                        return t || r
                    }(), t.isAnyArrayBuffer = function(e) {
                        return ["[object ArrayBuffer]", "[object SharedArrayBuffer]"].includes(Object.prototype.toString.call(e))
                    }, t.isUint8Array = function(e) {
                        return "[object Uint8Array]" === Object.prototype.toString.call(e)
                    }, t.isBigInt64Array = function(e) {
                        return "[object BigInt64Array]" === Object.prototype.toString.call(e)
                    }, t.isBigUInt64Array = function(e) {
                        return "[object BigUint64Array]" === Object.prototype.toString.call(e)
                    }, t.isRegExp = function(e) {
                        return "[object RegExp]" === Object.prototype.toString.call(e)
                    }, t.isMap = function(e) {
                        return "[object Map]" === Object.prototype.toString.call(e)
                    }, t.haveBuffer = function() {
                        return void 0 !== o && void 0 !== o.Buffer
                    }, t.isDate = function(e) {
                        return i(e) && "[object Date]" === Object.prototype.toString.call(e)
                    }, t.isObjectLike = i, t.deprecate = function(e, t) {
                        if ("undefined" == typeof window && "undefined" == typeof self) return X.deprecate(e, t);
                        var n = !1;
                        return function() {
                            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                            return n || (console.warn(t), n = !0), e.apply(this, r)
                        }
                    }
                }));
            i(Z), Z.deprecate, Z.isObjectLike, Z.isDate, Z.haveBuffer, Z.isMap, Z.isRegExp, Z.isBigUInt64Array, Z.isBigInt64Array, Z.isUint8Array, Z.isAnyArrayBuffer, Z.randomBytes, Z.normalizedFunctionString;
            var Q = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ensureBuffer = void 0, t.ensureBuffer = function(e) {
                    if (ArrayBuffer.isView(e)) return w.Buffer.from(e.buffer, e.byteOffset, e.byteLength);
                    if (Z.isAnyArrayBuffer(e)) return w.Buffer.from(e);
                    throw new TypeError("Must use either Buffer or TypedArray")
                }
            }));
            i(Q), Q.ensureBuffer;
            var ee = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.bufferToUuidHexString = t.uuidHexStringToBuffer = t.uuidValidateString = void 0;
                var n = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15})$/i;
                t.uuidValidateString = function(e) {
                    return "string" == typeof e && n.test(e)
                };
                t.uuidHexStringToBuffer = function(e) {
                    if (!t.uuidValidateString(e)) throw new TypeError('UUID string representations must be a 32 or 36 character hex string (dashes excluded/included). Format: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" or "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".');
                    var n = e.replace(/-/g, "");
                    return w.Buffer.from(n, "hex")
                };
                t.bufferToUuidHexString = function(e, t) {
                    return void 0 === t && (t = !0), t ? e.toString("hex", 0, 4) + "-" + e.toString("hex", 4, 6) + "-" + e.toString("hex", 6, 8) + "-" + e.toString("hex", 8, 10) + "-" + e.toString("hex", 10, 16) : e.toString("hex")
                }
            }));
            i(ee), ee.bufferToUuidHexString, ee.uuidHexStringToBuffer, ee.uuidValidateString;
            var te = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.UUID = void 0;
                var n = Symbol("id"),
                    r = function() {
                        function e(t) {
                            if (void 0 === t) this.id = e.generate();
                            else if (t instanceof e) this[n] = w.Buffer.from(t.id), this.__id = t.__id;
                            else if (ArrayBuffer.isView(t) && 16 === t.byteLength) this.id = Q.ensureBuffer(t);
                            else {
                                if ("string" != typeof t) throw new TypeError("Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");
                                this.id = ee.uuidHexStringToBuffer(t)
                            }
                        }
                        return Object.defineProperty(e.prototype, "id", {
                            get: function() {
                                return this[n]
                            },
                            set: function(t) {
                                this[n] = t, e.cacheHexString && (this.__id = ee.bufferToUuidHexString(t))
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.toHexString = function(t) {
                            if (void 0 === t && (t = !0), e.cacheHexString && this.__id) return this.__id;
                            var n = ee.bufferToUuidHexString(this.id, t);
                            return e.cacheHexString && (this.__id = n), n
                        }, e.prototype.toString = function(e) {
                            return e ? this.id.toString(e) : this.toHexString()
                        }, e.prototype.toJSON = function() {
                            return this.toHexString()
                        }, e.prototype.equals = function(t) {
                            if (!t) return !1;
                            if (t instanceof e) return t.id.equals(this.id);
                            try {
                                return new e(t).id.equals(this.id)
                            } catch (e) {
                                return !1
                            }
                        }, e.prototype.toBinary = function() {
                            return new ne.Binary(this.id, ne.Binary.SUBTYPE_UUID)
                        }, e.generate = function() {
                            var e = Z.randomBytes(16);
                            return e[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128, w.Buffer.from(e)
                        }, e.isValid = function(t) {
                            if (!t) return !1;
                            if (t instanceof e) return !0;
                            if ("string" == typeof t) return ee.uuidValidateString(t);
                            if (Z.isUint8Array(t)) {
                                if (16 !== t.length) return !1;
                                try {
                                    return parseInt(t[6].toString(16)[0], 10) === ne.Binary.SUBTYPE_UUID
                                } catch (e) {
                                    return !1
                                }
                            }
                            return !1
                        }, e.createFromHexString = function(t) {
                            return new e(ee.uuidHexStringToBuffer(t))
                        }, e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
                            return this.inspect()
                        }, e.prototype.inspect = function() {
                            return 'new UUID("' + this.toHexString() + '")'
                        }, e
                    }();
                t.UUID = r, Object.defineProperty(r.prototype, "_bsontype", {
                    value: "UUID"
                })
            }));
            i(te), te.UUID;
            var ne = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Binary = void 0;
                var n = function() {
                    function e(t, n) {
                        if (!(this instanceof e)) return new e(t, n);
                        if (!(null == t || "string" == typeof t || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || Array.isArray(t))) throw new TypeError("Binary can only be constructed from string, Buffer, TypedArray, or Array<number>");
                        this.sub_type = null != n ? n : e.BSON_BINARY_SUBTYPE_DEFAULT, null == t ? (this.buffer = w.Buffer.alloc(e.BUFFER_SIZE), this.position = 0) : ("string" == typeof t ? this.buffer = w.Buffer.from(t, "binary") : Array.isArray(t) ? this.buffer = w.Buffer.from(t) : this.buffer = Q.ensureBuffer(t), this.position = this.buffer.byteLength)
                    }
                    return e.prototype.put = function(t) {
                        if ("string" == typeof t && 1 !== t.length) throw new TypeError("only accepts single character String");
                        if ("number" != typeof t && 1 !== t.length) throw new TypeError("only accepts single character Uint8Array or Array");
                        var n;
                        if ((n = "string" == typeof t ? t.charCodeAt(0) : "number" == typeof t ? t : t[0]) < 0 || n > 255) throw new TypeError("only accepts number in a valid unsigned byte range 0-255");
                        if (this.buffer.length > this.position) this.buffer[this.position++] = n;
                        else {
                            var r = w.Buffer.alloc(e.BUFFER_SIZE + this.buffer.length);
                            this.buffer.copy(r, 0, 0, this.buffer.length), this.buffer = r, this.buffer[this.position++] = n
                        }
                    }, e.prototype.write = function(e, t) {
                        if (t = "number" == typeof t ? t : this.position, this.buffer.length < t + e.length) {
                            var n = w.Buffer.alloc(this.buffer.length + e.length);
                            this.buffer.copy(n, 0, 0, this.buffer.length), this.buffer = n
                        }
                        ArrayBuffer.isView(e) ? (this.buffer.set(Q.ensureBuffer(e), t), this.position = t + e.byteLength > this.position ? t + e.length : this.position) : "string" == typeof e && (this.buffer.write(e, t, e.length, "binary"), this.position = t + e.length > this.position ? t + e.length : this.position)
                    }, e.prototype.read = function(e, t) {
                        return t = t && t > 0 ? t : this.position, this.buffer.slice(e, e + t)
                    }, e.prototype.value = function(e) {
                        return (e = !!e) && this.buffer.length === this.position ? this.buffer : e ? this.buffer.slice(0, this.position) : this.buffer.toString("binary", 0, this.position)
                    }, e.prototype.length = function() {
                        return this.position
                    }, e.prototype.toJSON = function() {
                        return this.buffer.toString("base64")
                    }, e.prototype.toString = function(e) {
                        return this.buffer.toString(e)
                    }, e.prototype.toExtendedJSON = function(e) {
                        e = e || {};
                        var t = this.buffer.toString("base64"),
                            n = Number(this.sub_type).toString(16);
                        return e.legacy ? {
                            $binary: t,
                            $type: 1 === n.length ? "0" + n : n
                        } : {
                            $binary: {
                                base64: t,
                                subType: 1 === n.length ? "0" + n : n
                            }
                        }
                    }, e.prototype.toUUID = function() {
                        if (this.sub_type === e.SUBTYPE_UUID) return new te.UUID(this.buffer.slice(0, this.position));
                        throw new Error('Binary sub_type "' + this.sub_type + '" is not supported for converting to UUID. Only "' + e.SUBTYPE_UUID + '" is currently supported.')
                    }, e.fromExtendedJSON = function(t, n) {
                        var r, o;
                        if (n = n || {}, "$binary" in t ? n.legacy && "string" == typeof t.$binary && "$type" in t ? (o = t.$type ? parseInt(t.$type, 16) : 0, r = w.Buffer.from(t.$binary, "base64")) : "string" != typeof t.$binary && (o = t.$binary.subType ? parseInt(t.$binary.subType, 16) : 0, r = w.Buffer.from(t.$binary.base64, "base64")) : "$uuid" in t && (o = 4, r = ee.uuidHexStringToBuffer(t.$uuid)), !r) throw new TypeError("Unexpected Binary Extended JSON format " + JSON.stringify(t));
                        return new e(r, o)
                    }, e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
                        return this.inspect()
                    }, e.prototype.inspect = function() {
                        return 'new Binary(Buffer.from("' + this.value(!0).toString("hex") + '", "hex"), ' + this.sub_type + ")"
                    }, e.BSON_BINARY_SUBTYPE_DEFAULT = 0, e.BUFFER_SIZE = 256, e.SUBTYPE_DEFAULT = 0, e.SUBTYPE_FUNCTION = 1, e.SUBTYPE_BYTE_ARRAY = 2, e.SUBTYPE_UUID_OLD = 3, e.SUBTYPE_UUID = 4, e.SUBTYPE_MD5 = 5, e.SUBTYPE_USER_DEFINED = 128, e
                }();
                t.Binary = n, Object.defineProperty(n.prototype, "_bsontype", {
                    value: "Binary"
                })
            }));
            i(ne), ne.Binary;
            var re = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Code = void 0;
                var n = function() {
                    function e(t, n) {
                        if (!(this instanceof e)) return new e(t, n);
                        this.code = t, this.scope = n
                    }
                    return e.prototype.toJSON = function() {
                        return {
                            code: this.code,
                            scope: this.scope
                        }
                    }, e.prototype.toExtendedJSON = function() {
                        return this.scope ? {
                            $code: this.code,
                            $scope: this.scope
                        } : {
                            $code: this.code
                        }
                    }, e.fromExtendedJSON = function(t) {
                        return new e(t.$code, t.$scope)
                    }, e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
                        return this.inspect()
                    }, e.prototype.inspect = function() {
                        var e = this.toJSON();
                        return 'new Code("' + e.code + '"' + (e.scope ? ", " + JSON.stringify(e.scope) : "") + ")"
                    }, e
                }();
                t.Code = n, Object.defineProperty(n.prototype, "_bsontype", {
                    value: "Code"
                })
            }));
            i(re), re.Code;
            var oe = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DBRef = t.isDBRefLike = void 0, t.isDBRefLike = function(e) {
                    return Z.isObjectLike(e) && null != e.$id && null != e.$ref
                };
                var n = function() {
                    function e(t, n, r, o) {
                        if (!(this instanceof e)) return new e(t, n, r, o);
                        var i = t.split(".");
                        2 === i.length && (r = i.shift(), t = i.shift()), this.collection = t, this.oid = n, this.db = r, this.fields = o || {}
                    }
                    return Object.defineProperty(e.prototype, "namespace", {
                        get: function() {
                            return this.collection
                        },
                        set: function(e) {
                            this.collection = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.toJSON = function() {
                        var e = Object.assign({
                            $ref: this.collection,
                            $id: this.oid
                        }, this.fields);
                        return null != this.db && (e.$db = this.db), e
                    }, e.prototype.toExtendedJSON = function(e) {
                        e = e || {};
                        var t = {
                            $ref: this.collection,
                            $id: this.oid
                        };
                        return e.legacy ? t : (this.db && (t.$db = this.db), t = Object.assign(t, this.fields))
                    }, e.fromExtendedJSON = function(t) {
                        var n = Object.assign({}, t);
                        return delete n.$ref, delete n.$id, delete n.$db, new e(t.$ref, t.$id, t.$db, n)
                    }, e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
                        return this.inspect()
                    }, e.prototype.inspect = function() {
                        var e = void 0 === this.oid || void 0 === this.oid.toString ? this.oid : this.oid.toString();
                        return 'new DBRef("' + this.namespace + '", new ObjectId("' + e + '")' + (this.db ? ', "' + this.db + '"' : "") + ")"
                    }, e
                }();
                t.DBRef = n, Object.defineProperty(n.prototype, "_bsontype", {
                    value: "DBRef"
                })
            }));
            i(oe), oe.DBRef, oe.isDBRefLike;
            var ie = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Long = void 0;
                var n = void 0;
                try {
                    n = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
                } catch (e) {}
                var r = {},
                    o = {},
                    i = function() {
                        function e(t, n, r) {
                            if (void 0 === t && (t = 0), !(this instanceof e)) return new e(t, n, r);
                            "bigint" == typeof t ? Object.assign(this, e.fromBigInt(t, !!n)) : "string" == typeof t ? Object.assign(this, e.fromString(t, !!n)) : (this.low = 0 | t, this.high = 0 | n, this.unsigned = !!r), Object.defineProperty(this, "__isLong__", {
                                value: !0,
                                configurable: !1,
                                writable: !1,
                                enumerable: !1
                            })
                        }
                        return e.fromBits = function(t, n, r) {
                            return new e(t, n, r)
                        }, e.fromInt = function(t, n) {
                            var i, s, a;
                            return n ? (a = 0 <= (t >>>= 0) && t < 256) && (s = o[t]) ? s : (i = e.fromBits(t, (0 | t) < 0 ? -1 : 0, !0), a && (o[t] = i), i) : (a = -128 <= (t |= 0) && t < 128) && (s = r[t]) ? s : (i = e.fromBits(t, t < 0 ? -1 : 0, !1), a && (r[t] = i), i)
                        }, e.fromNumber = function(t, n) {
                            if (isNaN(t)) return n ? e.UZERO : e.ZERO;
                            if (n) {
                                if (t < 0) return e.UZERO;
                                if (t >= 0x10000000000000000) return e.MAX_UNSIGNED_VALUE
                            } else {
                                if (t <= -0x8000000000000000) return e.MIN_VALUE;
                                if (t + 1 >= 0x8000000000000000) return e.MAX_VALUE
                            }
                            return t < 0 ? e.fromNumber(-t, n).neg() : e.fromBits(t % 4294967296 | 0, t / 4294967296 | 0, n)
                        }, e.fromBigInt = function(t, n) {
                            return e.fromString(t.toString(), n)
                        }, e.fromString = function(t, n, r) {
                            if (0 === t.length) throw Error("empty string");
                            if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t) return e.ZERO;
                            if ("number" == typeof n ? (r = n, n = !1) : n = !!n, (r = r || 10) < 2 || 36 < r) throw RangeError("radix");
                            var o;
                            if ((o = t.indexOf("-")) > 0) throw Error("interior hyphen");
                            if (0 === o) return e.fromString(t.substring(1), n, r).neg();
                            for (var i = e.fromNumber(Math.pow(r, 8)), s = e.ZERO, a = 0; a < t.length; a += 8) {
                                var u = Math.min(8, t.length - a),
                                    c = parseInt(t.substring(a, a + u), r);
                                if (u < 8) {
                                    var f = e.fromNumber(Math.pow(r, u));
                                    s = s.mul(f).add(e.fromNumber(c))
                                } else s = (s = s.mul(i)).add(e.fromNumber(c))
                            }
                            return s.unsigned = n, s
                        }, e.fromBytes = function(t, n, r) {
                            return r ? e.fromBytesLE(t, n) : e.fromBytesBE(t, n)
                        }, e.fromBytesLE = function(t, n) {
                            return new e(t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24, t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24, n)
                        }, e.fromBytesBE = function(t, n) {
                            return new e(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], n)
                        }, e.isLong = function(e) {
                            return Z.isObjectLike(e) && !0 === e.__isLong__
                        }, e.fromValue = function(t, n) {
                            return "number" == typeof t ? e.fromNumber(t, n) : "string" == typeof t ? e.fromString(t, n) : e.fromBits(t.low, t.high, "boolean" == typeof n ? n : t.unsigned)
                        }, e.prototype.add = function(t) {
                            e.isLong(t) || (t = e.fromValue(t));
                            var n = this.high >>> 16,
                                r = 65535 & this.high,
                                o = this.low >>> 16,
                                i = 65535 & this.low,
                                s = t.high >>> 16,
                                a = 65535 & t.high,
                                u = t.low >>> 16,
                                c = 0,
                                f = 0,
                                l = 0,
                                h = 0;
                            return l += (h += i + (65535 & t.low)) >>> 16, h &= 65535, f += (l += o + u) >>> 16, l &= 65535, c += (f += r + a) >>> 16, f &= 65535, c += n + s, c &= 65535, e.fromBits(l << 16 | h, c << 16 | f, this.unsigned)
                        }, e.prototype.and = function(t) {
                            return e.isLong(t) || (t = e.fromValue(t)), e.fromBits(this.low & t.low, this.high & t.high, this.unsigned)
                        }, e.prototype.compare = function(t) {
                            if (e.isLong(t) || (t = e.fromValue(t)), this.eq(t)) return 0;
                            var n = this.isNegative(),
                                r = t.isNegative();
                            return n && !r ? -1 : !n && r ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1
                        }, e.prototype.comp = function(e) {
                            return this.compare(e)
                        }, e.prototype.divide = function(t) {
                            if (e.isLong(t) || (t = e.fromValue(t)), t.isZero()) throw Error("division by zero");
                            if (n) {
                                if (!this.unsigned && -2147483648 === this.high && -1 === t.low && -1 === t.high) return this;
                                var r = (this.unsigned ? n.div_u : n.div_s)(this.low, this.high, t.low, t.high);
                                return e.fromBits(r, n.get_high(), this.unsigned)
                            }
                            if (this.isZero()) return this.unsigned ? e.UZERO : e.ZERO;
                            var o, i, s;
                            if (this.unsigned) {
                                if (t.unsigned || (t = t.toUnsigned()), t.gt(this)) return e.UZERO;
                                if (t.gt(this.shru(1))) return e.UONE;
                                s = e.UZERO
                            } else {
                                if (this.eq(e.MIN_VALUE)) return t.eq(e.ONE) || t.eq(e.NEG_ONE) ? e.MIN_VALUE : t.eq(e.MIN_VALUE) ? e.ONE : (o = this.shr(1).div(t).shl(1)).eq(e.ZERO) ? t.isNegative() ? e.ONE : e.NEG_ONE : (i = this.sub(t.mul(o)), s = o.add(i.div(t)));
                                if (t.eq(e.MIN_VALUE)) return this.unsigned ? e.UZERO : e.ZERO;
                                if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
                                if (t.isNegative()) return this.div(t.neg()).neg();
                                s = e.ZERO
                            }
                            for (i = this; i.gte(t);) {
                                o = Math.max(1, Math.floor(i.toNumber() / t.toNumber()));
                                for (var a = Math.ceil(Math.log(o) / Math.LN2), u = a <= 48 ? 1 : Math.pow(2, a - 48), c = e.fromNumber(o), f = c.mul(t); f.isNegative() || f.gt(i);) o -= u, f = (c = e.fromNumber(o, this.unsigned)).mul(t);
                                c.isZero() && (c = e.ONE), s = s.add(c), i = i.sub(f)
                            }
                            return s
                        }, e.prototype.div = function(e) {
                            return this.divide(e)
                        }, e.prototype.equals = function(t) {
                            return e.isLong(t) || (t = e.fromValue(t)), (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && (this.high === t.high && this.low === t.low)
                        }, e.prototype.eq = function(e) {
                            return this.equals(e)
                        }, e.prototype.getHighBits = function() {
                            return this.high
                        }, e.prototype.getHighBitsUnsigned = function() {
                            return this.high >>> 0
                        }, e.prototype.getLowBits = function() {
                            return this.low
                        }, e.prototype.getLowBitsUnsigned = function() {
                            return this.low >>> 0
                        }, e.prototype.getNumBitsAbs = function() {
                            if (this.isNegative()) return this.eq(e.MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
                            var t, n = 0 !== this.high ? this.high : this.low;
                            for (t = 31; t > 0 && 0 == (n & 1 << t); t--);
                            return 0 !== this.high ? t + 33 : t + 1
                        }, e.prototype.greaterThan = function(e) {
                            return this.comp(e) > 0
                        }, e.prototype.gt = function(e) {
                            return this.greaterThan(e)
                        }, e.prototype.greaterThanOrEqual = function(e) {
                            return this.comp(e) >= 0
                        }, e.prototype.gte = function(e) {
                            return this.greaterThanOrEqual(e)
                        }, e.prototype.ge = function(e) {
                            return this.greaterThanOrEqual(e)
                        }, e.prototype.isEven = function() {
                            return 0 == (1 & this.low)
                        }, e.prototype.isNegative = function() {
                            return !this.unsigned && this.high < 0
                        }, e.prototype.isOdd = function() {
                            return 1 == (1 & this.low)
                        }, e.prototype.isPositive = function() {
                            return this.unsigned || this.high >= 0
                        }, e.prototype.isZero = function() {
                            return 0 === this.high && 0 === this.low
                        }, e.prototype.lessThan = function(e) {
                            return this.comp(e) < 0
                        }, e.prototype.lt = function(e) {
                            return this.lessThan(e)
                        }, e.prototype.lessThanOrEqual = function(e) {
                            return this.comp(e) <= 0
                        }, e.prototype.lte = function(e) {
                            return this.lessThanOrEqual(e)
                        }, e.prototype.modulo = function(t) {
                            if (e.isLong(t) || (t = e.fromValue(t)), n) {
                                var r = (this.unsigned ? n.rem_u : n.rem_s)(this.low, this.high, t.low, t.high);
                                return e.fromBits(r, n.get_high(), this.unsigned)
                            }
                            return this.sub(this.div(t).mul(t))
                        }, e.prototype.mod = function(e) {
                            return this.modulo(e)
                        }, e.prototype.rem = function(e) {
                            return this.modulo(e)
                        }, e.prototype.multiply = function(t) {
                            if (this.isZero()) return e.ZERO;
                            if (e.isLong(t) || (t = e.fromValue(t)), n) {
                                var r = n.mul(this.low, this.high, t.low, t.high);
                                return e.fromBits(r, n.get_high(), this.unsigned)
                            }
                            if (t.isZero()) return e.ZERO;
                            if (this.eq(e.MIN_VALUE)) return t.isOdd() ? e.MIN_VALUE : e.ZERO;
                            if (t.eq(e.MIN_VALUE)) return this.isOdd() ? e.MIN_VALUE : e.ZERO;
                            if (this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
                            if (t.isNegative()) return this.mul(t.neg()).neg();
                            if (this.lt(e.TWO_PWR_24) && t.lt(e.TWO_PWR_24)) return e.fromNumber(this.toNumber() * t.toNumber(), this.unsigned);
                            var o = this.high >>> 16,
                                i = 65535 & this.high,
                                s = this.low >>> 16,
                                a = 65535 & this.low,
                                u = t.high >>> 16,
                                c = 65535 & t.high,
                                f = t.low >>> 16,
                                l = 65535 & t.low,
                                h = 0,
                                p = 0,
                                d = 0,
                                y = 0;
                            return d += (y += a * l) >>> 16, y &= 65535, p += (d += s * l) >>> 16, d &= 65535, p += (d += a * f) >>> 16, d &= 65535, h += (p += i * l) >>> 16, p &= 65535, h += (p += s * f) >>> 16, p &= 65535, h += (p += a * c) >>> 16, p &= 65535, h += o * l + i * f + s * c + a * u, h &= 65535, e.fromBits(d << 16 | y, h << 16 | p, this.unsigned)
                        }, e.prototype.mul = function(e) {
                            return this.multiply(e)
                        }, e.prototype.negate = function() {
                            return !this.unsigned && this.eq(e.MIN_VALUE) ? e.MIN_VALUE : this.not().add(e.ONE)
                        }, e.prototype.neg = function() {
                            return this.negate()
                        }, e.prototype.not = function() {
                            return e.fromBits(~this.low, ~this.high, this.unsigned)
                        }, e.prototype.notEquals = function(e) {
                            return !this.equals(e)
                        }, e.prototype.neq = function(e) {
                            return this.notEquals(e)
                        }, e.prototype.ne = function(e) {
                            return this.notEquals(e)
                        }, e.prototype.or = function(t) {
                            return e.isLong(t) || (t = e.fromValue(t)), e.fromBits(this.low | t.low, this.high | t.high, this.unsigned)
                        }, e.prototype.shiftLeft = function(t) {
                            return e.isLong(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? e.fromBits(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : e.fromBits(0, this.low << t - 32, this.unsigned)
                        }, e.prototype.shl = function(e) {
                            return this.shiftLeft(e)
                        }, e.prototype.shiftRight = function(t) {
                            return e.isLong(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? e.fromBits(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : e.fromBits(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned)
                        }, e.prototype.shr = function(e) {
                            return this.shiftRight(e)
                        }, e.prototype.shiftRightUnsigned = function(t) {
                            if (e.isLong(t) && (t = t.toInt()), 0 === (t &= 63)) return this;
                            var n = this.high;
                            if (t < 32) {
                                var r = this.low;
                                return e.fromBits(r >>> t | n << 32 - t, n >>> t, this.unsigned)
                            }
                            return 32 === t ? e.fromBits(n, 0, this.unsigned) : e.fromBits(n >>> t - 32, 0, this.unsigned)
                        }, e.prototype.shr_u = function(e) {
                            return this.shiftRightUnsigned(e)
                        }, e.prototype.shru = function(e) {
                            return this.shiftRightUnsigned(e)
                        }, e.prototype.subtract = function(t) {
                            return e.isLong(t) || (t = e.fromValue(t)), this.add(t.neg())
                        }, e.prototype.sub = function(e) {
                            return this.subtract(e)
                        }, e.prototype.toInt = function() {
                            return this.unsigned ? this.low >>> 0 : this.low
                        }, e.prototype.toNumber = function() {
                            return this.unsigned ? 4294967296 * (this.high >>> 0) + (this.low >>> 0) : 4294967296 * this.high + (this.low >>> 0)
                        }, e.prototype.toBigInt = function() {
                            return BigInt(this.toString())
                        }, e.prototype.toBytes = function(e) {
                            return e ? this.toBytesLE() : this.toBytesBE()
                        }, e.prototype.toBytesLE = function() {
                            var e = this.high,
                                t = this.low;
                            return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24]
                        }, e.prototype.toBytesBE = function() {
                            var e = this.high,
                                t = this.low;
                            return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
                        }, e.prototype.toSigned = function() {
                            return this.unsigned ? e.fromBits(this.low, this.high, !1) : this
                        }, e.prototype.toString = function(t) {
                            if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
                            if (this.isZero()) return "0";
                            if (this.isNegative()) {
                                if (this.eq(e.MIN_VALUE)) {
                                    var n = e.fromNumber(t),
                                        r = this.div(n),
                                        o = r.mul(n).sub(this);
                                    return r.toString(t) + o.toInt().toString(t)
                                }
                                return "-" + this.neg().toString(t)
                            }
                            for (var i = e.fromNumber(Math.pow(t, 6), this.unsigned), s = this, a = "";;) {
                                var u = s.div(i),
                                    c = (s.sub(u.mul(i)).toInt() >>> 0).toString(t);
                                if ((s = u).isZero()) return c + a;
                                for (; c.length < 6;) c = "0" + c;
                                a = "" + c + a
                            }
                        }, e.prototype.toUnsigned = function() {
                            return this.unsigned ? this : e.fromBits(this.low, this.high, !0)
                        }, e.prototype.xor = function(t) {
                            return e.isLong(t) || (t = e.fromValue(t)), e.fromBits(this.low ^ t.low, this.high ^ t.high, this.unsigned)
                        }, e.prototype.eqz = function() {
                            return this.isZero()
                        }, e.prototype.le = function(e) {
                            return this.lessThanOrEqual(e)
                        }, e.prototype.toExtendedJSON = function(e) {
                            return e && e.relaxed ? this.toNumber() : {
                                $numberLong: this.toString()
                            }
                        }, e.fromExtendedJSON = function(t, n) {
                            var r = e.fromString(t.$numberLong);
                            return n && n.relaxed ? r.toNumber() : r
                        }, e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
                            return this.inspect()
                        }, e.prototype.inspect = function() {
                            return 'new Long("' + this.toString() + '"' + (this.unsigned ? ", true" : "") + ")"
                        }, e.TWO_PWR_24 = e.fromInt(1 << 24), e.MAX_UNSIGNED_VALUE = e.fromBits(-1, -1, !0), e.ZERO = e.fromInt(0), e.UZERO = e.fromInt(0, !0), e.ONE = e.fromInt(1), e.UONE = e.fromInt(1, !0), e.NEG_ONE = e.fromInt(-1), e.MAX_VALUE = e.fromBits(-1, 2147483647, !1), e.MIN_VALUE = e.fromBits(0, -2147483648, !1), e
                    }();
                t.Long = i, Object.defineProperty(i.prototype, "__isLong__", {
                    value: !0
                }), Object.defineProperty(i.prototype, "_bsontype", {
                    value: "Long"
                })
            }));
            i(ie), ie.Long;
            var se = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Decimal128 = void 0;
                var n = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
                    r = /^(\+|-)?(Infinity|inf)$/i,
                    o = /^(\+|-)?NaN$/i,
                    i = [124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
                    s = [248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
                    a = [120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
                    u = /^([-+])?(\d+)?$/;

                function c(e) {
                    return !isNaN(parseInt(e, 10))
                }

                function f(e) {
                    var t = ie.Long.fromNumber(1e9),
                        n = ie.Long.fromNumber(0);
                    if (!(e.parts[0] || e.parts[1] || e.parts[2] || e.parts[3])) return {
                        quotient: e,
                        rem: n
                    };
                    for (var r = 0; r <= 3; r++) n = (n = n.shiftLeft(32)).add(new ie.Long(e.parts[r], 0)), e.parts[r] = n.div(t).low, n = n.modulo(t);
                    return {
                        quotient: e,
                        rem: n
                    }
                }

                function l(e, t) {
                    throw new TypeError('"' + e + '" is not a valid Decimal128 string - ' + t)
                }
                var h = function() {
                    function e(t) {
                        if (!(this instanceof e)) return new e(t);
                        this.bytes = "string" == typeof t ? e.fromString(t).bytes : t
                    }
                    return e.fromString = function(t) {
                        var f, h = !1,
                            p = !1,
                            d = !1,
                            y = 0,
                            g = 0,
                            _ = 0,
                            v = 0,
                            m = 0,
                            b = [0],
                            E = 0,
                            S = 0,
                            A = 0,
                            O = 0,
                            I = 0,
                            N = 0,
                            T = new ie.Long(0, 0),
                            R = new ie.Long(0, 0),
                            B = 0;
                        if (t.length >= 7e3) throw new TypeError(t + " not a valid Decimal128 string");
                        var P = t.match(n),
                            D = t.match(r),
                            L = t.match(o);
                        if (!P && !D && !L || 0 === t.length) throw new TypeError(t + " not a valid Decimal128 string");
                        if (P) {
                            var x = P[2],
                                U = P[4],
                                j = P[5],
                                C = P[6];
                            U && void 0 === C && l(t, "missing exponent power"), U && void 0 === x && l(t, "missing exponent base"), void 0 === U && (j || C) && l(t, "missing e before exponent")
                        }
                        if ("+" !== t[B] && "-" !== t[B] || (h = "-" === t[B++]), !c(t[B]) && "." !== t[B]) {
                            if ("i" === t[B] || "I" === t[B]) return new e(w.Buffer.from(h ? s : a));
                            if ("N" === t[B]) return new e(w.Buffer.from(i))
                        }
                        for (; c(t[B]) || "." === t[B];) "." !== t[B] ? (E < 34 && ("0" !== t[B] || d) && (d || (m = g), d = !0, b[S++] = parseInt(t[B], 10), E += 1), d && (_ += 1), p && (v += 1), g += 1, B += 1) : (p && l(t, "contains multiple periods"), p = !0, B += 1);
                        if (p && !g) throw new TypeError(t + " not a valid Decimal128 string");
                        if ("e" === t[B] || "E" === t[B]) {
                            var M = t.substr(++B).match(u);
                            if (!M || !M[2]) return new e(w.Buffer.from(i));
                            I = parseInt(M[0], 10), B += M[0].length
                        }
                        if (t[B]) return new e(w.Buffer.from(i));
                        if (A = 0, E) {
                            if (O = E - 1, 1 !== (y = _))
                                for (;
                                    "0" === t[m + y - 1];) y -= 1
                        } else A = 0, O = 0, b[0] = 0, _ = 1, E = 1, y = 0;
                        for (I <= v && v - I > 16384 ? I = -6176 : I -= v; I > 6111;) {
                            if ((O += 1) - A > 34) {
                                if (b.join("").match(/^0+$/)) {
                                    I = 6111;
                                    break
                                }
                                l(t, "overflow")
                            }
                            I -= 1
                        }
                        for (; I < -6176 || E < _;) {
                            if (0 === O && y < E) {
                                I = -6176, y = 0;
                                break
                            }
                            if (E < _ ? _ -= 1 : O -= 1, I < 6111) I += 1;
                            else {
                                if (b.join("").match(/^0+$/)) {
                                    I = 6111;
                                    break
                                }
                                l(t, "overflow")
                            }
                        }
                        if (O - A + 1 < y) {
                            var k = g;
                            p && (m += 1, k += 1), h && (m += 1, k += 1);
                            var q = parseInt(t[m + O + 1], 10),
                                F = 0;
                            if (q >= 5 && (F = 1, 5 === q))
                                for (F = b[O] % 2 == 1 ? 1 : 0, N = m + O + 2; N < k; N++)
                                    if (parseInt(t[N], 10)) {
                                        F = 1;
                                        break
                                    } if (F)
                                for (var W = O; W >= 0; W--)
                                    if (++b[W] > 9 && (b[W] = 0, 0 === W)) {
                                        if (!(I < 6111)) return new e(w.Buffer.from(h ? s : a));
                                        I += 1, b[W] = 1
                                    }
                        }
                        if (T = ie.Long.fromNumber(0), R = ie.Long.fromNumber(0), 0 === y) T = ie.Long.fromNumber(0), R = ie.Long.fromNumber(0);
                        else if (O - A < 17) {
                            W = A;
                            for (R = ie.Long.fromNumber(b[W++]), T = new ie.Long(0, 0); W <= O; W++) R = (R = R.multiply(ie.Long.fromNumber(10))).add(ie.Long.fromNumber(b[W]))
                        } else {
                            W = A;
                            for (T = ie.Long.fromNumber(b[W++]); W <= O - 17; W++) T = (T = T.multiply(ie.Long.fromNumber(10))).add(ie.Long.fromNumber(b[W]));
                            for (R = ie.Long.fromNumber(b[W++]); W <= O; W++) R = (R = R.multiply(ie.Long.fromNumber(10))).add(ie.Long.fromNumber(b[W]))
                        }
                        var Y, $, H, K, G = function(e, t) {
                            if (!e && !t) return {
                                high: ie.Long.fromNumber(0),
                                low: ie.Long.fromNumber(0)
                            };
                            var n = e.shiftRightUnsigned(32),
                                r = new ie.Long(e.getLowBits(), 0),
                                o = t.shiftRightUnsigned(32),
                                i = new ie.Long(t.getLowBits(), 0),
                                s = n.multiply(o),
                                a = n.multiply(i),
                                u = r.multiply(o),
                                c = r.multiply(i);
                            return s = s.add(a.shiftRightUnsigned(32)), a = new ie.Long(a.getLowBits(), 0).add(u).add(c.shiftRightUnsigned(32)), {
                                high: s = s.add(a.shiftRightUnsigned(32)),
                                low: c = a.shiftLeft(32).add(new ie.Long(c.getLowBits(), 0))
                            }
                        }(T, ie.Long.fromString("100000000000000000"));
                        G.low = G.low.add(R), Y = G.low, $ = R, H = Y.high >>> 0, K = $.high >>> 0, (H < K || H === K && Y.low >>> 0 < $.low >>> 0) && (G.high = G.high.add(ie.Long.fromNumber(1))), f = I + 6176;
                        var V = {
                            low: ie.Long.fromNumber(0),
                            high: ie.Long.fromNumber(0)
                        };
                        G.high.shiftRightUnsigned(49).and(ie.Long.fromNumber(1)).equals(ie.Long.fromNumber(1)) ? (V.high = V.high.or(ie.Long.fromNumber(3).shiftLeft(61)), V.high = V.high.or(ie.Long.fromNumber(f).and(ie.Long.fromNumber(16383).shiftLeft(47))), V.high = V.high.or(G.high.and(ie.Long.fromNumber(0x7fffffffffff)))) : (V.high = V.high.or(ie.Long.fromNumber(16383 & f).shiftLeft(49)), V.high = V.high.or(G.high.and(ie.Long.fromNumber(562949953421311)))), V.low = G.low, h && (V.high = V.high.or(ie.Long.fromString("9223372036854775808")));
                        var J = w.Buffer.alloc(16);
                        return B = 0, J[B++] = 255 & V.low.low, J[B++] = V.low.low >> 8 & 255, J[B++] = V.low.low >> 16 & 255, J[B++] = V.low.low >> 24 & 255, J[B++] = 255 & V.low.high, J[B++] = V.low.high >> 8 & 255, J[B++] = V.low.high >> 16 & 255, J[B++] = V.low.high >> 24 & 255, J[B++] = 255 & V.high.low, J[B++] = V.high.low >> 8 & 255, J[B++] = V.high.low >> 16 & 255, J[B++] = V.high.low >> 24 & 255, J[B++] = 255 & V.high.high, J[B++] = V.high.high >> 8 & 255, J[B++] = V.high.high >> 16 & 255, J[B++] = V.high.high >> 24 & 255, new e(J)
                    }, e.prototype.toString = function() {
                        for (var e, t = 0, n = new Array(36), r = 0; r < n.length; r++) n[r] = 0;
                        var o, i, s, a = 0,
                            u = !1,
                            c = {
                                parts: [0, 0, 0, 0]
                            },
                            l = [];
                        a = 0;
                        var h = this.bytes,
                            p = h[a++] | h[a++] << 8 | h[a++] << 16 | h[a++] << 24,
                            d = h[a++] | h[a++] << 8 | h[a++] << 16 | h[a++] << 24,
                            y = h[a++] | h[a++] << 8 | h[a++] << 16 | h[a++] << 24,
                            g = h[a++] | h[a++] << 8 | h[a++] << 16 | h[a++] << 24;
                        a = 0, {
                            low: new ie.Long(p, d),
                            high: new ie.Long(y, g)
                        }.high.lessThan(ie.Long.ZERO) && l.push("-");
                        var _ = g >> 26 & 31;
                        if (_ >> 3 == 3) {
                            if (30 === _) return l.join("") + "Infinity";
                            if (31 === _) return "NaN";
                            e = g >> 15 & 16383, o = 8 + (g >> 14 & 1)
                        } else o = g >> 14 & 7, e = g >> 17 & 16383;
                        var v = e - 6176;
                        if (c.parts[0] = (16383 & g) + ((15 & o) << 14), c.parts[1] = y, c.parts[2] = d, c.parts[3] = p, 0 === c.parts[0] && 0 === c.parts[1] && 0 === c.parts[2] && 0 === c.parts[3]) u = !0;
                        else
                            for (s = 3; s >= 0; s--) {
                                var m = 0,
                                    b = f(c);
                                if (c = b.quotient, m = b.rem.low)
                                    for (i = 8; i >= 0; i--) n[9 * s + i] = m % 10, m = Math.floor(m / 10)
                            }
                        if (u) t = 1, n[a] = 0;
                        else
                            for (t = 36; !n[a];) t -= 1, a += 1;
                        var w = t - 1 + v;
                        if (w >= 34 || w <= -7 || v > 0) {
                            if (t > 34) return l.push("0"), v > 0 ? l.push("E+" + v) : v < 0 && l.push("E" + v), l.join("");
                            l.push("" + n[a++]), (t -= 1) && l.push(".");
                            for (r = 0; r < t; r++) l.push("" + n[a++]);
                            l.push("E"), w > 0 ? l.push("+" + w) : l.push("" + w)
                        } else if (v >= 0)
                            for (r = 0; r < t; r++) l.push("" + n[a++]);
                        else {
                            var E = t + v;
                            if (E > 0)
                                for (r = 0; r < E; r++) l.push("" + n[a++]);
                            else l.push("0");
                            for (l.push("."); E++ < 0;) l.push("0");
                            for (r = 0; r < t - Math.max(E - 1, 0); r++) l.push("" + n[a++])
                        }
                        return l.join("")
                    }, e.prototype.toJSON = function() {
                        return {
                            $numberDecimal: this.toString()
                        }
                    }, e.prototype.toExtendedJSON = function() {
                        return {
                            $numberDecimal: this.toString()
                        }
                    }, e.fromExtendedJSON = function(t) {
                        return e.fromString(t.$numberDecimal)
                    }, e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
                        return this.inspect()
                    }, e.prototype.inspect = function() {
                        return 'new Decimal128("' + this.toString() + '")'
                    }, e
                }();
                t.Decimal128 = h, Object.defineProperty(h.prototype, "_bsontype", {
                    value: "Decimal128"
                })
            }));
            i(se), se.Decimal128;
            var ae = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Double = void 0;
                var n = function() {
                    function e(t) {
                        if (!(this instanceof e)) return new e(t);
                        t instanceof Number && (t = t.valueOf()), this.value = +t
                    }
                    return e.prototype.valueOf = function() {
                        return this.value
                    }, e.prototype.toJSON = function() {
                        return this.value
                    }, e.prototype.toExtendedJSON = function(e) {
                        return e && (e.legacy || e.relaxed && isFinite(this.value)) ? this.value : Object.is(Math.sign(this.value), -0) ? {
                            $numberDouble: "-" + this.value.toFixed(1)
                        } : (Number.isInteger(this.value) ? (t = this.value.toFixed(1)).length >= 13 && (t = this.value.toExponential(13).toUpperCase()) : t = this.value.toString(), {
                            $numberDouble: t
                        });
                        var t
                    }, e.fromExtendedJSON = function(t, n) {
                        var r = parseFloat(t.$numberDouble);
                        return n && n.relaxed ? r : new e(r)
                    }, e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
                        return this.inspect()
                    }, e.prototype.inspect = function() {
                        return "new Double(" + this.toExtendedJSON().$numberDouble + ")"
                    }, e
                }();
                t.Double = n, Object.defineProperty(n.prototype, "_bsontype", {
                    value: "Double"
                })
            }));
            i(ae), ae.Double;
            var ue = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Int32 = void 0;
                var n = function() {
                    function e(t) {
                        if (!(this instanceof e)) return new e(t);
                        t instanceof Number && (t = t.valueOf()), this.value = +t
                    }
                    return e.prototype.valueOf = function() {
                        return this.value
                    }, e.prototype.toJSON = function() {
                        return this.value
                    }, e.prototype.toExtendedJSON = function(e) {
                        return e && (e.relaxed || e.legacy) ? this.value : {
                            $numberInt: this.value.toString()
                        }
                    }, e.fromExtendedJSON = function(t, n) {
                        return n && n.relaxed ? parseInt(t.$numberInt, 10) : new e(t.$numberInt)
                    }, e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
                        return this.inspect()
                    }, e.prototype.inspect = function() {
                        return "new Int32(" + this.valueOf() + ")"
                    }, e
                }();
                t.Int32 = n, Object.defineProperty(n.prototype, "_bsontype", {
                    value: "Int32"
                })
            }));
            i(ue), ue.Int32;
            var ce = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.MaxKey = void 0;
                var n = function() {
                    function e() {
                        if (!(this instanceof e)) return new e
                    }
                    return e.prototype.toExtendedJSON = function() {
                        return {
                            $maxKey: 1
                        }
                    }, e.fromExtendedJSON = function() {
                        return new e
                    }, e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
                        return this.inspect()
                    }, e.prototype.inspect = function() {
                        return "new MaxKey()"
                    }, e
                }();
                t.MaxKey = n, Object.defineProperty(n.prototype, "_bsontype", {
                    value: "MaxKey"
                })
            }));
            i(ce), ce.MaxKey;
            var fe = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.MinKey = void 0;
                var n = function() {
                    function e() {
                        if (!(this instanceof e)) return new e
                    }
                    return e.prototype.toExtendedJSON = function() {
                        return {
                            $minKey: 1
                        }
                    }, e.fromExtendedJSON = function() {
                        return new e
                    }, e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
                        return this.inspect()
                    }, e.prototype.inspect = function() {
                        return "new MinKey()"
                    }, e
                }();
                t.MinKey = n, Object.defineProperty(n.prototype, "_bsontype", {
                    value: "MinKey"
                })
            }));
            i(fe), fe.MinKey;
            var le = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ObjectId = void 0;
                var n = new RegExp("^[0-9a-fA-F]{24}$"),
                    r = null,
                    o = Symbol("id"),
                    i = function() {
                        function e(t) {
                            if (!(this instanceof e)) return new e(t);
                            if (t instanceof e && (this[o] = t.id, this.__id = t.__id), "object" == typeof t && t && "id" in t && ("toHexString" in t && "function" == typeof t.toHexString ? this[o] = w.Buffer.from(t.toHexString(), "hex") : this[o] = "string" == typeof t.id ? w.Buffer.from(t.id) : t.id), null != t && "number" != typeof t || (this[o] = e.generate("number" == typeof t ? t : void 0), e.cacheHexString && (this.__id = this.id.toString("hex"))), ArrayBuffer.isView(t) && 12 === t.byteLength && (this[o] = Q.ensureBuffer(t)), "string" == typeof t)
                                if (12 === t.length) {
                                    var r = w.Buffer.from(t);
                                    12 === r.byteLength && (this[o] = r)
                                } else {
                                    if (24 !== t.length || !n.test(t)) throw new TypeError("Argument passed in must be a Buffer or string of 12 bytes or a string of 24 hex characters");
                                    this[o] = w.Buffer.from(t, "hex")
                                } e.cacheHexString && (this.__id = this.id.toString("hex"))
                        }
                        return Object.defineProperty(e.prototype, "id", {
                            get: function() {
                                return this[o]
                            },
                            set: function(t) {
                                this[o] = t, e.cacheHexString && (this.__id = t.toString("hex"))
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "generationTime", {
                            get: function() {
                                return this.id.readInt32BE(0)
                            },
                            set: function(e) {
                                this.id.writeUInt32BE(e, 0)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.toHexString = function() {
                            if (e.cacheHexString && this.__id) return this.__id;
                            var t = this.id.toString("hex");
                            return e.cacheHexString && !this.__id && (this.__id = t), t
                        }, e.getInc = function() {
                            return e.index = (e.index + 1) % 16777215
                        }, e.generate = function(t) {
                            "number" != typeof t && (t = ~~(Date.now() / 1e3));
                            var n = e.getInc(),
                                o = w.Buffer.alloc(12);
                            return o.writeUInt32BE(t, 0), null === r && (r = Z.randomBytes(5)), o[4] = r[0], o[5] = r[1], o[6] = r[2], o[7] = r[3], o[8] = r[4], o[11] = 255 & n, o[10] = n >> 8 & 255, o[9] = n >> 16 & 255, o
                        }, e.prototype.toString = function(e) {
                            return e ? this.id.toString(e) : this.toHexString()
                        }, e.prototype.toJSON = function() {
                            return this.toHexString()
                        }, e.prototype.equals = function(t) {
                            return null != t && (t instanceof e ? this.toString() === t.toString() : "string" == typeof t && e.isValid(t) && 12 === t.length && Z.isUint8Array(this.id) ? t === w.Buffer.prototype.toString.call(this.id, "latin1") : "string" == typeof t && e.isValid(t) && 24 === t.length ? t.toLowerCase() === this.toHexString() : "string" == typeof t && e.isValid(t) && 12 === t.length ? w.Buffer.from(t).equals(this.id) : "object" == typeof t && "toHexString" in t && "function" == typeof t.toHexString && t.toHexString() === this.toHexString())
                        }, e.prototype.getTimestamp = function() {
                            var e = new Date,
                                t = this.id.readUInt32BE(0);
                            return e.setTime(1e3 * Math.floor(t)), e
                        }, e.createPk = function() {
                            return new e
                        }, e.createFromTime = function(t) {
                            var n = w.Buffer.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                            return n.writeUInt32BE(t, 0), new e(n)
                        }, e.createFromHexString = function(t) {
                            if (void 0 === t || null != t && 24 !== t.length) throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
                            return new e(w.Buffer.from(t, "hex"))
                        }, e.isValid = function(t) {
                            return null != t && ("number" == typeof t || ("string" == typeof t ? 12 === t.length || 24 === t.length && n.test(t) : t instanceof e || (!(!Z.isUint8Array(t) || 12 !== t.length) || "object" == typeof t && "toHexString" in t && "function" == typeof t.toHexString && ("string" == typeof t.id ? 12 === t.id.length : 24 === t.toHexString().length && n.test(t.id.toString("hex"))))))
                        }, e.prototype.toExtendedJSON = function() {
                            return this.toHexString ? {
                                $oid: this.toHexString()
                            } : {
                                $oid: this.toString("hex")
                            }
                        }, e.fromExtendedJSON = function(t) {
                            return new e(t.$oid)
                        }, e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
                            return this.inspect()
                        }, e.prototype.inspect = function() {
                            return 'new ObjectId("' + this.toHexString() + '")'
                        }, e.index = ~~(16777215 * Math.random()), e
                    }();
                t.ObjectId = i, Object.defineProperty(i.prototype, "generate", {
                    value: Z.deprecate((function(e) {
                        return i.generate(e)
                    }), "Please use the static `ObjectId.generate(time)` instead")
                }), Object.defineProperty(i.prototype, "getInc", {
                    value: Z.deprecate((function() {
                        return i.getInc()
                    }), "Please use the static `ObjectId.getInc()` instead")
                }), Object.defineProperty(i.prototype, "get_inc", {
                    value: Z.deprecate((function() {
                        return i.getInc()
                    }), "Please use the static `ObjectId.getInc()` instead")
                }), Object.defineProperty(i, "get_inc", {
                    value: Z.deprecate((function() {
                        return i.getInc()
                    }), "Please use the static `ObjectId.getInc()` instead")
                }), Object.defineProperty(i.prototype, "_bsontype", {
                    value: "ObjectID"
                })
            }));
            i(le), le.ObjectId;
            var he = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BSONRegExp = void 0;
                var n = function() {
                    function e(t, n) {
                        if (!(this instanceof e)) return new e(t, n);
                        this.pattern = t, this.options = null != n ? n : "", this.options.split("").sort().join("");
                        for (var r = 0; r < this.options.length; r++)
                            if ("i" !== this.options[r] && "m" !== this.options[r] && "x" !== this.options[r] && "l" !== this.options[r] && "s" !== this.options[r] && "u" !== this.options[r]) throw new Error("The regular expression option [" + this.options[r] + "] is not supported")
                    }
                    return e.parseOptions = function(e) {
                        return e ? e.split("").sort().join("") : ""
                    }, e.prototype.toExtendedJSON = function(e) {
                        return (e = e || {}).legacy ? {
                            $regex: this.pattern,
                            $options: this.options
                        } : {
                            $regularExpression: {
                                pattern: this.pattern,
                                options: this.options
                            }
                        }
                    }, e.fromExtendedJSON = function(t) {
                        if ("$regex" in t) {
                            if ("string" == typeof t.$regex) return new e(t.$regex, e.parseOptions(t.$options));
                            if ("BSONRegExp" === t.$regex._bsontype) return t
                        }
                        if ("$regularExpression" in t) return new e(t.$regularExpression.pattern, e.parseOptions(t.$regularExpression.options));
                        throw new TypeError("Unexpected BSONRegExp EJSON object form: " + JSON.stringify(t))
                    }, e
                }();
                t.BSONRegExp = n, Object.defineProperty(n.prototype, "_bsontype", {
                    value: "BSONRegExp"
                })
            }));
            i(he), he.BSONRegExp;
            var pe = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BSONSymbol = void 0;
                var n = function() {
                    function e(t) {
                        if (!(this instanceof e)) return new e(t);
                        this.value = t
                    }
                    return e.prototype.valueOf = function() {
                        return this.value
                    }, e.prototype.toString = function() {
                        return this.value
                    }, e.prototype.inspect = function() {
                        return 'new BSONSymbol("' + this.value + '")'
                    }, e.prototype.toJSON = function() {
                        return this.value
                    }, e.prototype.toExtendedJSON = function() {
                        return {
                            $symbol: this.value
                        }
                    }, e.fromExtendedJSON = function(t) {
                        return new e(t.$symbol)
                    }, e.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
                        return this.inspect()
                    }, e
                }();
                t.BSONSymbol = n, Object.defineProperty(n.prototype, "_bsontype", {
                    value: "Symbol"
                })
            }));
            i(pe), pe.BSONSymbol;
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var de = function(e, t) {
                return (de = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            };
            var ye = function() {
                return (ye = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function ge(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function _e(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            }

            function ve(e) {
                return this instanceof ve ? (this.v = e, this) : new ve(e)
            }
            var me = Object.freeze({
                    __proto__: null,
                    __extends: function(e, t) {
                        function n() {
                            this.constructor = e
                        }
                        de(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    },
                    get __assign() {
                        return ye
                    },
                    __rest: function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                        }
                        return n
                    },
                    __decorate: function(e, t, n, r) {
                        var o, i = arguments.length,
                            s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                        if ("object" === ("undefined" == typeof Reflect ? "undefined" : babelHelpers.typeof(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                        else
                            for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                        return i > 3 && s && Object.defineProperty(t, n, s), s
                    },
                    __param: function(e, t) {
                        return function(n, r) {
                            t(n, r, e)
                        }
                    },
                    __metadata: function(e, t) {
                        if ("object" === ("undefined" == typeof Reflect ? "undefined" : babelHelpers.typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                    },
                    __awaiter: function(e, t, n, r) {
                        return new(n || (n = Promise))((function(o, i) {
                            function s(e) {
                                try {
                                    u(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function a(e) {
                                try {
                                    u(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(s, a)
                            }
                            u((r = r.apply(e, t || [])).next())
                        }))
                    },
                    __generator: function(e, t) {
                        var n, r, o, i, s = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function a(i) {
                            return function(a) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; s;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return s.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                s.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = s.ops.pop(), s.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    s.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && s.label < o[1]) {
                                                    s.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && s.label < o[2]) {
                                                    s.label = o[2], s.ops.push(i);
                                                    break
                                                }
                                                o[2] && s.ops.pop(), s.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, s)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, a])
                            }
                        }
                    },
                    __createBinding: function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    },
                    __exportStar: function(e, t) {
                        for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
                    },
                    __values: ge,
                    __read: _e,
                    __spread: function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(_e(arguments[t]));
                        return e
                    },
                    __spreadArrays: function() {
                        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                        var r = Array(e),
                            o = 0;
                        for (t = 0; t < n; t++)
                            for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
                        return r
                    },
                    __await: ve,
                    __asyncGenerator: function(e, t, n) {
                        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                        var r, o = n.apply(e, t || []),
                            i = [];
                        return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
                            return this
                        }, r;

                        function s(e) {
                            o[e] && (r[e] = function(t) {
                                return new Promise((function(n, r) {
                                    i.push([e, t, n, r]) > 1 || a(e, t)
                                }))
                            })
                        }

                        function a(e, t) {
                            try {
                                (n = o[e](t)).value instanceof ve ? Promise.resolve(n.value.v).then(u, c) : f(i[0][2], n)
                            } catch (e) {
                                f(i[0][3], e)
                            }
                            var n
                        }

                        function u(e) {
                            a("next", e)
                        }

                        function c(e) {
                            a("throw", e)
                        }

                        function f(e, t) {
                            e(t), i.shift(), i.length && a(i[0][0], i[0][1])
                        }
                    },
                    __asyncDelegator: function(e) {
                        var t, n;
                        return t = {}, r("next"), r("throw", (function(e) {
                            throw e
                        })), r("return"), t[Symbol.iterator] = function() {
                            return this
                        }, t;

                        function r(r, o) {
                            t[r] = e[r] ? function(t) {
                                return (n = !n) ? {
                                    value: ve(e[r](t)),
                                    done: "return" === r
                                } : o ? o(t) : t
                            } : o
                        }
                    },
                    __asyncValues: function(e) {
                        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                        var t, n = e[Symbol.asyncIterator];
                        return n ? n.call(e) : (e = ge(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                            return this
                        }, t);

                        function r(n) {
                            t[n] = e[n] && function(t) {
                                return new Promise((function(r, o) {
                                    (function(e, t, n, r) {
                                        Promise.resolve(r).then((function(t) {
                                            e({
                                                value: t,
                                                done: n
                                            })
                                        }), t)
                                    })(r, o, (t = e[n](t)).done, t.value)
                                }))
                            }
                        }
                    },
                    __makeTemplateObject: function(e, t) {
                        return Object.defineProperty ? Object.defineProperty(e, "raw", {
                            value: t
                        }) : e.raw = t, e
                    },
                    __importStar: function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    __importDefault: function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    },
                    __classPrivateFieldGet: function(e, t) {
                        if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                        return t.get(e)
                    },
                    __classPrivateFieldSet: function(e, t, n) {
                        if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                        return t.set(e, n), n
                    }
                }),
                be = s((function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.Timestamp = t.LongWithoutOverridesClass = void 0, t.LongWithoutOverridesClass = ie.Long;
                    var n = function(e) {
                        function t(n, r) {
                            var o = this;
                            return o instanceof t ? (o = ie.Long.isLong(n) ? e.call(this, n.low, n.high, !0) || this : e.call(this, n, r, !0) || this, Object.defineProperty(o, "_bsontype", {
                                value: "Timestamp",
                                writable: !1,
                                configurable: !1,
                                enumerable: !1
                            }), o) : new t(n, r)
                        }
                        return me.__extends(t, e), t.prototype.toJSON = function() {
                            return {
                                $timestamp: this.toString()
                            }
                        }, t.fromInt = function(e) {
                            return new t(ie.Long.fromInt(e, !0))
                        }, t.fromNumber = function(e) {
                            return new t(ie.Long.fromNumber(e, !0))
                        }, t.fromBits = function(e, n) {
                            return new t(e, n)
                        }, t.fromString = function(e, n) {
                            return new t(ie.Long.fromString(e, !0, n))
                        }, t.prototype.toExtendedJSON = function() {
                            return {
                                $timestamp: {
                                    t: this.high >>> 0,
                                    i: this.low >>> 0
                                }
                            }
                        }, t.fromExtendedJSON = function(e) {
                            return new t(e.$timestamp.i, e.$timestamp.t)
                        }, t.prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
                            return this.inspect()
                        }, t.prototype.inspect = function() {
                            return "new Timestamp(" + this.getLowBits().toString() + ", " + this.getHighBits().toString() + ")"
                        }, t.MAX_VALUE = ie.Long.MAX_UNSIGNED_VALUE, t
                    }(t.LongWithoutOverridesClass);
                    t.Timestamp = n
                }));
            i(be), be.Timestamp, be.LongWithoutOverridesClass;
            var we = s((function(e, t) {
                function n(e) {
                    return Z.isObjectLike(e) && Reflect.has(e, "_bsontype") && "string" == typeof e._bsontype
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EJSON = t.isBSONType = void 0, t.isBSONType = n;
                var r = {
                    $oid: le.ObjectId,
                    $binary: ne.Binary,
                    $uuid: ne.Binary,
                    $symbol: pe.BSONSymbol,
                    $numberInt: ue.Int32,
                    $numberDecimal: se.Decimal128,
                    $numberDouble: ae.Double,
                    $numberLong: ie.Long,
                    $minKey: fe.MinKey,
                    $maxKey: ce.MaxKey,
                    $regex: he.BSONRegExp,
                    $regularExpression: he.BSONRegExp,
                    $timestamp: be.Timestamp
                };

                function o(e) {
                    var t = e.toISOString();
                    return 0 !== e.getUTCMilliseconds() ? t : t.slice(0, -5) + "Z"
                }

                function i(e, t) {
                    if (("object" == typeof e || "function" == typeof e) && null !== e) {
                        var r = t.seenObjects.findIndex((function(t) {
                            return t.obj === e
                        }));
                        if (-1 !== r) {
                            var a = t.seenObjects.map((function(e) {
                                    return e.propertyName
                                })),
                                u = a.slice(0, r).map((function(e) {
                                    return e + " -> "
                                })).join(""),
                                c = a[r],
                                f = " -> " + a.slice(r + 1, a.length - 1).map((function(e) {
                                    return e + " -> "
                                })).join(""),
                                l = a[a.length - 1],
                                h = " ".repeat(u.length + c.length / 2),
                                p = "-".repeat(f.length + (c.length + l.length) / 2 - 1);
                            throw new TypeError("Converting circular structure to EJSON:\n    " + u + c + f + l + "\n    " + h + "\\" + p + "/")
                        }
                        t.seenObjects[t.seenObjects.length - 1].obj = e
                    }
                    if (Array.isArray(e)) return function(e, t) {
                        return e.map((function(e, n) {
                            t.seenObjects.push({
                                propertyName: "index " + n,
                                obj: null
                            });
                            try {
                                return i(e, t)
                            } finally {
                                t.seenObjects.pop()
                            }
                        }))
                    }(e, t);
                    if (void 0 === e) return null;
                    if (e instanceof Date || Z.isDate(e)) {
                        var d = e.getTime(),
                            y = d > -1 && d < 2534023188e5;
                        return t.legacy ? t.relaxed && y ? {
                            $date: e.getTime()
                        } : {
                            $date: o(e)
                        } : t.relaxed && y ? {
                            $date: o(e)
                        } : {
                            $date: {
                                $numberLong: e.getTime().toString()
                            }
                        }
                    }
                    if ("number" == typeof e && !t.relaxed) {
                        if (Math.floor(e) === e) {
                            var g = e >= -0x8000000000000000 && e <= 0x8000000000000000;
                            if (e >= -2147483648 && e <= 2147483647) return {
                                $numberInt: e.toString()
                            };
                            if (g) return {
                                $numberLong: e.toString()
                            }
                        }
                        return {
                            $numberDouble: e.toString()
                        }
                    }
                    if (e instanceof RegExp || Z.isRegExp(e)) {
                        var _ = e.flags;
                        if (void 0 === _) {
                            var v = e.toString().match(/[gimuy]*$/);
                            v && (_ = v[0])
                        }
                        return new he.BSONRegExp(e.source, _).toExtendedJSON(t)
                    }
                    return null != e && "object" == typeof e ? function(e, t) {
                        if (null == e || "object" != typeof e) throw new Error("not an object instance");
                        var r = e._bsontype;
                        if (void 0 === r) {
                            var o = {};
                            for (var a in e) {
                                t.seenObjects.push({
                                    propertyName: a,
                                    obj: null
                                });
                                try {
                                    o[a] = i(e[a], t)
                                } finally {
                                    t.seenObjects.pop()
                                }
                            }
                            return o
                        }
                        if (n(e)) {
                            var u = e;
                            if ("function" != typeof u.toExtendedJSON) {
                                var c = s[e._bsontype];
                                if (!c) throw new TypeError("Unrecognized or invalid _bsontype: " + e._bsontype);
                                u = c(u)
                            }
                            return "Code" === r && u.scope ? u = new re.Code(u.code, i(u.scope, t)) : "DBRef" === r && u.oid && (u = new oe.DBRef(u.collection, i(u.oid, t), u.db, u.fields)), u.toExtendedJSON(t)
                        }
                        throw new Error("_bsontype must be a string, but was: " + typeof r)
                    }(e, t) : e
                }
                var s = {
                    Binary: function(e) {
                        return new ne.Binary(e.value(), e.sub_type)
                    },
                    Code: function(e) {
                        return new re.Code(e.code, e.scope)
                    },
                    DBRef: function(e) {
                        return new oe.DBRef(e.collection || e.namespace, e.oid, e.db, e.fields)
                    },
                    Decimal128: function(e) {
                        return new se.Decimal128(e.bytes)
                    },
                    Double: function(e) {
                        return new ae.Double(e.value)
                    },
                    Int32: function(e) {
                        return new ue.Int32(e.value)
                    },
                    Long: function(e) {
                        return ie.Long.fromBits(null != e.low ? e.low : e.low_, null != e.low ? e.high : e.high_, null != e.low ? e.unsigned : e.unsigned_)
                    },
                    MaxKey: function() {
                        return new ce.MaxKey
                    },
                    MinKey: function() {
                        return new fe.MinKey
                    },
                    ObjectID: function(e) {
                        return new le.ObjectId(e)
                    },
                    ObjectId: function(e) {
                        return new le.ObjectId(e)
                    },
                    BSONRegExp: function(e) {
                        return new he.BSONRegExp(e.pattern, e.options)
                    },
                    Symbol: function(e) {
                        return new pe.BSONSymbol(e.value)
                    },
                    Timestamp: function(e) {
                        return be.Timestamp.fromBits(e.low, e.high)
                    }
                };
                ! function(e) {
                    function t(e, t) {
                        var n = Object.assign({}, {
                            relaxed: !0,
                            legacy: !1
                        }, t);
                        return "boolean" == typeof n.relaxed && (n.strict = !n.relaxed), "boolean" == typeof n.strict && (n.relaxed = !n.strict), JSON.parse(e, (function(e, t) {
                            return function e(t, n) {
                                if (void 0 === n && (n = {}), "number" == typeof t) {
                                    if (n.relaxed || n.legacy) return t;
                                    if (Math.floor(t) === t) {
                                        if (t >= -2147483648 && t <= 2147483647) return new ue.Int32(t);
                                        if (t >= -0x8000000000000000 && t <= 0x8000000000000000) return ie.Long.fromNumber(t)
                                    }
                                    return new ae.Double(t)
                                }
                                if (null == t || "object" != typeof t) return t;
                                if (t.$undefined) return null;
                                for (var o = Object.keys(t).filter((function(e) {
                                        return e.startsWith("$") && null != t[e]
                                    })), i = 0; i < o.length; i++) {
                                    var s = r[o[i]];
                                    if (s) return s.fromExtendedJSON(t, n)
                                }
                                if (null != t.$date) {
                                    var a = t.$date,
                                        u = new Date;
                                    return n.legacy ? "number" == typeof a ? u.setTime(a) : "string" == typeof a && u.setTime(Date.parse(a)) : "string" == typeof a ? u.setTime(Date.parse(a)) : ie.Long.isLong(a) ? u.setTime(a.toNumber()) : "number" == typeof a && n.relaxed && u.setTime(a), u
                                }
                                if (null != t.$code) {
                                    var c = Object.assign({}, t);
                                    return t.$scope && (c.$scope = e(t.$scope)), re.Code.fromExtendedJSON(t)
                                }
                                if (null != t.$ref || null != t.$dbPointer) {
                                    var f = t.$ref ? t : t.$dbPointer;
                                    if (f instanceof oe.DBRef) return f;
                                    var l = Object.keys(f).filter((function(e) {
                                            return e.startsWith("$")
                                        })),
                                        h = !0;
                                    if (l.forEach((function(e) {
                                            -1 === ["$ref", "$id", "$db"].indexOf(e) && (h = !1)
                                        })), h) return oe.DBRef.fromExtendedJSON(f)
                                }
                                return t
                            }(t, n)
                        }))
                    }

                    function n(e, t, n, r) {
                        null != n && "object" == typeof n && (r = n, n = 0), null == t || "object" != typeof t || Array.isArray(t) || (r = t, t = void 0, n = 0);
                        var o = i(e, Object.assign({
                            relaxed: !0,
                            legacy: !1
                        }, r, {
                            seenObjects: [{
                                propertyName: "(root)",
                                obj: null
                            }]
                        }));
                        return JSON.stringify(o, t, n)
                    }
                    e.parse = t, e.stringify = n, e.serialize = function(e, t) {
                        return t = t || {}, JSON.parse(n(e, t))
                    }, e.deserialize = function(e, n) {
                        return n = n || {}, t(JSON.stringify(e), n)
                    }
                }(t.EJSON || (t.EJSON = {}))
            }));
            i(we), we.EJSON, we.isBSONType;
            var Ee = s((function(e, t) {
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Map = void 0, t.Map = n;
                var r = function(e) {
                    return e && e.Math == Math && e
                };
                var i = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof o && o) || Function("return this")();
                Object.prototype.hasOwnProperty.call(i, "Map") ? t.Map = n = i.Map : t.Map = n = function() {
                    function e(e) {
                        void 0 === e && (e = []), this._keys = [], this._values = {};
                        for (var t = 0; t < e.length; t++)
                            if (null != e[t]) {
                                var n = e[t],
                                    r = n[0],
                                    o = n[1];
                                this._keys.push(r), this._values[r] = {
                                    v: o,
                                    i: this._keys.length - 1
                                }
                            }
                    }
                    return e.prototype.clear = function() {
                        this._keys = [], this._values = {}
                    }, e.prototype.delete = function(e) {
                        var t = this._values[e];
                        return null != t && (delete this._values[e], this._keys.splice(t.i, 1), !0)
                    }, e.prototype.entries = function() {
                        var e = this,
                            t = 0;
                        return {
                            next: function() {
                                var n = e._keys[t++];
                                return {
                                    value: void 0 !== n ? [n, e._values[n].v] : void 0,
                                    done: void 0 === n
                                }
                            }
                        }
                    }, e.prototype.forEach = function(e, t) {
                        t = t || this;
                        for (var n = 0; n < this._keys.length; n++) {
                            var r = this._keys[n];
                            e.call(t, this._values[r].v, r, t)
                        }
                    }, e.prototype.get = function(e) {
                        return this._values[e] ? this._values[e].v : void 0
                    }, e.prototype.has = function(e) {
                        return null != this._values[e]
                    }, e.prototype.keys = function() {
                        var e = this,
                            t = 0;
                        return {
                            next: function() {
                                var n = e._keys[t++];
                                return {
                                    value: void 0 !== n ? n : void 0,
                                    done: void 0 === n
                                }
                            }
                        }
                    }, e.prototype.set = function(e, t) {
                        return this._values[e] ? (this._values[e].v = t, this) : (this._keys.push(e), this._values[e] = {
                            v: t,
                            i: this._keys.length - 1
                        }, this)
                    }, e.prototype.values = function() {
                        var e = this,
                            t = 0;
                        return {
                            next: function() {
                                var n = e._keys[t++];
                                return {
                                    value: void 0 !== n ? e._values[n].v : void 0,
                                    done: void 0 === n
                                }
                            }
                        }
                    }, Object.defineProperty(e.prototype, "size", {
                        get: function() {
                            return this._keys.length
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }()
            }));
            i(Ee), Ee.Map;
            var Se = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BSON_BINARY_SUBTYPE_USER_DEFINED = t.BSON_BINARY_SUBTYPE_MD5 = t.BSON_BINARY_SUBTYPE_UUID_NEW = t.BSON_BINARY_SUBTYPE_UUID = t.BSON_BINARY_SUBTYPE_BYTE_ARRAY = t.BSON_BINARY_SUBTYPE_FUNCTION = t.BSON_BINARY_SUBTYPE_DEFAULT = t.BSON_DATA_MAX_KEY = t.BSON_DATA_MIN_KEY = t.BSON_DATA_DECIMAL128 = t.BSON_DATA_LONG = t.BSON_DATA_TIMESTAMP = t.BSON_DATA_INT = t.BSON_DATA_CODE_W_SCOPE = t.BSON_DATA_SYMBOL = t.BSON_DATA_CODE = t.BSON_DATA_DBPOINTER = t.BSON_DATA_REGEXP = t.BSON_DATA_NULL = t.BSON_DATA_DATE = t.BSON_DATA_BOOLEAN = t.BSON_DATA_OID = t.BSON_DATA_UNDEFINED = t.BSON_DATA_BINARY = t.BSON_DATA_ARRAY = t.BSON_DATA_OBJECT = t.BSON_DATA_STRING = t.BSON_DATA_NUMBER = t.JS_INT_MIN = t.JS_INT_MAX = t.BSON_INT64_MIN = t.BSON_INT64_MAX = t.BSON_INT32_MIN = t.BSON_INT32_MAX = void 0, t.BSON_INT32_MAX = 2147483647, t.BSON_INT32_MIN = -2147483648, t.BSON_INT64_MAX = Math.pow(2, 63) - 1, t.BSON_INT64_MIN = -Math.pow(2, 63), t.JS_INT_MAX = Math.pow(2, 53), t.JS_INT_MIN = -Math.pow(2, 53), t.BSON_DATA_NUMBER = 1, t.BSON_DATA_STRING = 2, t.BSON_DATA_OBJECT = 3, t.BSON_DATA_ARRAY = 4, t.BSON_DATA_BINARY = 5, t.BSON_DATA_UNDEFINED = 6, t.BSON_DATA_OID = 7, t.BSON_DATA_BOOLEAN = 8, t.BSON_DATA_DATE = 9, t.BSON_DATA_NULL = 10, t.BSON_DATA_REGEXP = 11, t.BSON_DATA_DBPOINTER = 12, t.BSON_DATA_CODE = 13, t.BSON_DATA_SYMBOL = 14, t.BSON_DATA_CODE_W_SCOPE = 15, t.BSON_DATA_INT = 16, t.BSON_DATA_TIMESTAMP = 17, t.BSON_DATA_LONG = 18, t.BSON_DATA_DECIMAL128 = 19, t.BSON_DATA_MIN_KEY = 255, t.BSON_DATA_MAX_KEY = 127, t.BSON_BINARY_SUBTYPE_DEFAULT = 0, t.BSON_BINARY_SUBTYPE_FUNCTION = 1, t.BSON_BINARY_SUBTYPE_BYTE_ARRAY = 2, t.BSON_BINARY_SUBTYPE_UUID = 3, t.BSON_BINARY_SUBTYPE_UUID_NEW = 4, t.BSON_BINARY_SUBTYPE_MD5 = 5, t.BSON_BINARY_SUBTYPE_USER_DEFINED = 128
            }));
            i(Se), Se.BSON_BINARY_SUBTYPE_USER_DEFINED, Se.BSON_BINARY_SUBTYPE_MD5, Se.BSON_BINARY_SUBTYPE_UUID_NEW, Se.BSON_BINARY_SUBTYPE_UUID, Se.BSON_BINARY_SUBTYPE_BYTE_ARRAY, Se.BSON_BINARY_SUBTYPE_FUNCTION, Se.BSON_BINARY_SUBTYPE_DEFAULT, Se.BSON_DATA_MAX_KEY, Se.BSON_DATA_MIN_KEY, Se.BSON_DATA_DECIMAL128, Se.BSON_DATA_LONG, Se.BSON_DATA_TIMESTAMP, Se.BSON_DATA_INT, Se.BSON_DATA_CODE_W_SCOPE, Se.BSON_DATA_SYMBOL, Se.BSON_DATA_CODE, Se.BSON_DATA_DBPOINTER, Se.BSON_DATA_REGEXP, Se.BSON_DATA_NULL, Se.BSON_DATA_DATE, Se.BSON_DATA_BOOLEAN, Se.BSON_DATA_OID, Se.BSON_DATA_UNDEFINED, Se.BSON_DATA_BINARY, Se.BSON_DATA_ARRAY, Se.BSON_DATA_OBJECT, Se.BSON_DATA_STRING, Se.BSON_DATA_NUMBER, Se.JS_INT_MIN, Se.JS_INT_MAX, Se.BSON_INT64_MIN, Se.BSON_INT64_MAX, Se.BSON_INT32_MIN, Se.BSON_INT32_MAX;
            var Ae = s((function(e, t) {
                function n(e, t, n) {
                    var o = 5;
                    if (Array.isArray(e))
                        for (var i = 0; i < e.length; i++) o += r(i.toString(), e[i], t, !0, n);
                    else
                        for (var s in e.toBSON && (e = e.toBSON()), e) o += r(s, e[s], t, !1, n);
                    return o
                }

                function r(e, t, r, o, i) {
                    switch (void 0 === r && (r = !1), void 0 === o && (o = !1), void 0 === i && (i = !1), t && t.toBSON && (t = t.toBSON()), typeof t) {
                        case "string":
                            return 1 + w.Buffer.byteLength(e, "utf8") + 1 + 4 + w.Buffer.byteLength(t, "utf8") + 1;
                        case "number":
                            return Math.floor(t) === t && t >= Se.JS_INT_MIN && t <= Se.JS_INT_MAX && t >= Se.BSON_INT32_MIN && t <= Se.BSON_INT32_MAX ? (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 5 : (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 9;
                        case "undefined":
                            return o || !i ? (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 : 0;
                        case "boolean":
                            return (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 2;
                        case "object":
                            if (null == t || "MinKey" === t._bsontype || "MaxKey" === t._bsontype) return (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 1;
                            if ("ObjectId" === t._bsontype || "ObjectID" === t._bsontype) return (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 13;
                            if (t instanceof Date || Z.isDate(t)) return (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 9;
                            if (ArrayBuffer.isView(t) || t instanceof ArrayBuffer || Z.isAnyArrayBuffer(t)) return (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 6 + t.byteLength;
                            if ("Long" === t._bsontype || "Double" === t._bsontype || "Timestamp" === t._bsontype) return (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 9;
                            if ("Decimal128" === t._bsontype) return (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 17;
                            if ("Code" === t._bsontype) return null != t.scope && Object.keys(t.scope).length > 0 ? (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + 4 + w.Buffer.byteLength(t.code.toString(), "utf8") + 1 + n(t.scope, r, i) : (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + w.Buffer.byteLength(t.code.toString(), "utf8") + 1;
                            if ("Binary" === t._bsontype) return t.sub_type === ne.Binary.SUBTYPE_BYTE_ARRAY ? (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + (t.position + 1 + 4 + 1 + 4) : (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + (t.position + 1 + 4 + 1);
                            if ("Symbol" === t._bsontype) return (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + w.Buffer.byteLength(t.value, "utf8") + 4 + 1 + 1;
                            if ("DBRef" === t._bsontype) {
                                var s = Object.assign({
                                    $ref: t.collection,
                                    $id: t.oid
                                }, t.fields);
                                return null != t.db && (s.$db = t.db), (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + n(s, r, i)
                            }
                            return t instanceof RegExp || Z.isRegExp(t) ? (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + w.Buffer.byteLength(t.source, "utf8") + 1 + (t.global ? 1 : 0) + (t.ignoreCase ? 1 : 0) + (t.multiline ? 1 : 0) + 1 : "BSONRegExp" === t._bsontype ? (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + w.Buffer.byteLength(t.pattern, "utf8") + 1 + w.Buffer.byteLength(t.options, "utf8") + 1 : (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + n(t, r, i) + 1;
                        case "function":
                            if (t instanceof RegExp || Z.isRegExp(t) || "[object RegExp]" === String.call(t)) return (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + w.Buffer.byteLength(t.source, "utf8") + 1 + (t.global ? 1 : 0) + (t.ignoreCase ? 1 : 0) + (t.multiline ? 1 : 0) + 1;
                            if (r && null != t.scope && Object.keys(t.scope).length > 0) return (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + 4 + w.Buffer.byteLength(Z.normalizedFunctionString(t), "utf8") + 1 + n(t.scope, r, i);
                            if (r) return (null != e ? w.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + w.Buffer.byteLength(Z.normalizedFunctionString(t), "utf8") + 1
                    }
                    return 0
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.calculateObjectSize = void 0, t.calculateObjectSize = n
            }));
            i(Ae), Ae.calculateObjectSize;
            var Oe = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.validateUtf8 = void 0;
                t.validateUtf8 = function(e, t, n) {
                    for (var r = 0, o = t; o < n; o += 1) {
                        var i = e[o];
                        if (r) {
                            if (128 != (192 & i)) return !1;
                            r -= 1
                        } else if (128 & i)
                            if (192 == (224 & i)) r = 1;
                            else if (224 == (240 & i)) r = 2;
                        else {
                            if (240 != (248 & i)) return !1;
                            r = 3
                        }
                    }
                    return !r
                }
            }));
            i(Oe), Oe.validateUtf8;
            var Ie = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.deserialize = void 0;
                var n = ie.Long.fromNumber(Se.JS_INT_MAX),
                    r = ie.Long.fromNumber(Se.JS_INT_MIN),
                    o = {};

                function i(e, t, a, u) {
                    void 0 === u && (u = !1);
                    var c = null != a.evalFunctions && a.evalFunctions,
                        f = null != a.cacheFunctions && a.cacheFunctions,
                        l = null == a.fieldsAsRaw ? null : a.fieldsAsRaw,
                        h = null != a.raw && a.raw,
                        p = "boolean" == typeof a.bsonRegExp && a.bsonRegExp,
                        d = null != a.promoteBuffers && a.promoteBuffers,
                        y = null == a.promoteLongs || a.promoteLongs,
                        g = null == a.promoteValues || a.promoteValues,
                        _ = t;
                    if (e.length < 5) throw new Error("corrupt bson message < 5 bytes long");
                    var v = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                    if (v < 5 || v > e.length) throw new Error("corrupt bson message");
                    for (var m = u ? [] : {}, b = 0;;) {
                        var E = e[t++];
                        if (0 === E) break;
                        for (var S = t; 0 !== e[S] && S < e.length;) S++;
                        if (S >= e.byteLength) throw new Error("Bad BSON Document: illegal CString");
                        var A = u ? b++ : e.toString("utf8", t, S),
                            O = void 0;
                        if (t = S + 1, E === Se.BSON_DATA_STRING) {
                            if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                            if (!Oe.validateUtf8(e, t, t + V - 1)) throw new Error("Invalid UTF-8 string in BSON document");
                            O = e.toString("utf8", t, t + V - 1), t += V
                        } else if (E === Se.BSON_DATA_OID) {
                            var I = w.Buffer.alloc(12);
                            e.copy(I, 0, t, t + 12), O = new le.ObjectId(I), t += 12
                        } else if (E === Se.BSON_DATA_INT && !1 === g) O = new ue.Int32(e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24);
                        else if (E === Se.BSON_DATA_INT) O = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                        else if (E === Se.BSON_DATA_NUMBER && !1 === g) O = new ae.Double(e.readDoubleLE(t)), t += 8;
                        else if (E === Se.BSON_DATA_NUMBER) O = e.readDoubleLE(t), t += 8;
                        else if (E === Se.BSON_DATA_DATE) {
                            var N = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24,
                                T = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                            O = new Date(new ie.Long(N, T).toNumber())
                        } else if (E === Se.BSON_DATA_BOOLEAN) {
                            if (0 !== e[t] && 1 !== e[t]) throw new Error("illegal boolean type value");
                            O = 1 === e[t++]
                        } else if (E === Se.BSON_DATA_OBJECT) {
                            var R = t;
                            if ((K = e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) <= 0 || K > e.length - t) throw new Error("bad embedded document length in bson");
                            O = h ? e.slice(t, t + K) : i(e, R, a, !1), t += K
                        } else if (E === Se.BSON_DATA_ARRAY) {
                            R = t;
                            var B = a,
                                P = t + (K = e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24);
                            if (l && l[A]) {
                                for (var D in B = {}, a) B[D] = a[D];
                                B.raw = !0
                            }
                            if (O = i(e, R, B, !0), 0 !== e[(t += K) - 1]) throw new Error("invalid array terminator byte");
                            if (t !== P) throw new Error("corrupted array bson")
                        } else if (E === Se.BSON_DATA_UNDEFINED) O = void 0;
                        else if (E === Se.BSON_DATA_NULL) O = null;
                        else if (E === Se.BSON_DATA_LONG) {
                            N = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24, T = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                            var L = new ie.Long(N, T);
                            O = y && !0 === g && L.lessThanOrEqual(n) && L.greaterThanOrEqual(r) ? L.toNumber() : L
                        } else if (E === Se.BSON_DATA_DECIMAL128) {
                            var x = w.Buffer.alloc(16);
                            e.copy(x, 0, t, t + 16), t += 16;
                            var U = new se.Decimal128(x);
                            O = "toObject" in U && "function" == typeof U.toObject ? U.toObject() : U
                        } else if (E === Se.BSON_DATA_BINARY) {
                            var j = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24,
                                C = j,
                                M = e[t++];
                            if (j < 0) throw new Error("Negative binary type element size found");
                            if (j > e.byteLength) throw new Error("Binary type size larger than document size");
                            if (null != e.slice) {
                                if (M === ne.Binary.SUBTYPE_BYTE_ARRAY) {
                                    if ((j = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) < 0) throw new Error("Negative binary type element size found for subtype 0x02");
                                    if (j > C - 4) throw new Error("Binary type with subtype 0x02 contains too long binary size");
                                    if (j < C - 4) throw new Error("Binary type with subtype 0x02 contains too short binary size")
                                }
                                O = d && g ? e.slice(t, t + j) : new ne.Binary(e.slice(t, t + j), M)
                            } else {
                                var k = w.Buffer.alloc(j);
                                if (M === ne.Binary.SUBTYPE_BYTE_ARRAY) {
                                    if ((j = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) < 0) throw new Error("Negative binary type element size found for subtype 0x02");
                                    if (j > C - 4) throw new Error("Binary type with subtype 0x02 contains too long binary size");
                                    if (j < C - 4) throw new Error("Binary type with subtype 0x02 contains too short binary size")
                                }
                                for (S = 0; S < j; S++) k[S] = e[t + S];
                                O = d && g ? k : new ne.Binary(k, M)
                            }
                            t += j
                        } else if (E === Se.BSON_DATA_REGEXP && !1 === p) {
                            for (S = t; 0 !== e[S] && S < e.length;) S++;
                            if (S >= e.length) throw new Error("Bad BSON Document: illegal CString");
                            var q = e.toString("utf8", t, S);
                            for (S = t = S + 1; 0 !== e[S] && S < e.length;) S++;
                            if (S >= e.length) throw new Error("Bad BSON Document: illegal CString");
                            var F = e.toString("utf8", t, S);
                            t = S + 1;
                            var W = new Array(F.length);
                            for (S = 0; S < F.length; S++) switch (F[S]) {
                                case "m":
                                    W[S] = "m";
                                    break;
                                case "s":
                                    W[S] = "g";
                                    break;
                                case "i":
                                    W[S] = "i"
                            }
                            O = new RegExp(q, W.join(""))
                        } else if (E === Se.BSON_DATA_REGEXP && !0 === p) {
                            for (S = t; 0 !== e[S] && S < e.length;) S++;
                            if (S >= e.length) throw new Error("Bad BSON Document: illegal CString");
                            q = e.toString("utf8", t, S);
                            for (S = t = S + 1; 0 !== e[S] && S < e.length;) S++;
                            if (S >= e.length) throw new Error("Bad BSON Document: illegal CString");
                            F = e.toString("utf8", t, S);
                            t = S + 1, O = new he.BSONRegExp(q, F)
                        } else if (E === Se.BSON_DATA_SYMBOL) {
                            if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                            var Y = e.toString("utf8", t, t + V - 1);
                            O = g ? Y : new pe.BSONSymbol(Y), t += V
                        } else if (E === Se.BSON_DATA_TIMESTAMP) {
                            N = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24, T = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                            O = new be.Timestamp(N, T)
                        } else if (E === Se.BSON_DATA_MIN_KEY) O = new fe.MinKey;
                        else if (E === Se.BSON_DATA_MAX_KEY) O = new ce.MaxKey;
                        else if (E === Se.BSON_DATA_CODE) {
                            if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                            var $ = e.toString("utf8", t, t + V - 1);
                            O = c ? f ? s($, o, m) : s($) : new re.Code($), t += V
                        } else if (E === Se.BSON_DATA_CODE_W_SCOPE) {
                            var H = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                            if (H < 13) throw new Error("code_w_scope total size shorter minimum expected length");
                            if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                            $ = e.toString("utf8", t, t + V - 1), R = t += V;
                            var K = e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24,
                                G = i(e, R, a, !1);
                            if (t += K, H < 8 + K + V) throw new Error("code_w_scope total size is too short, truncating scope");
                            if (H > 8 + K + V) throw new Error("code_w_scope total size is too long, clips outer document");
                            c ? (O = f ? s($, o, m) : s($)).scope = G : O = new re.Code($, G)
                        } else {
                            if (E !== Se.BSON_DATA_DBPOINTER) throw new Error("Detected unknown BSON type " + E.toString(16) + ' for fieldname "' + A + '"');
                            var V;
                            if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                            if (!Oe.validateUtf8(e, t, t + V - 1)) throw new Error("Invalid UTF-8 string in BSON document");
                            var J = e.toString("utf8", t, t + V - 1);
                            t += V;
                            var z = w.Buffer.alloc(12);
                            e.copy(z, 0, t, t + 12);
                            I = new le.ObjectId(z);
                            t += 12, O = new oe.DBRef(J, I)
                        }
                        "__proto__" === A ? Object.defineProperty(m, A, {
                            value: O,
                            writable: !0,
                            enumerable: !0,
                            configurable: !0
                        }) : m[A] = O
                    }
                    if (v !== t - _) {
                        if (u) throw new Error("corrupt array bson");
                        throw new Error("corrupt object bson")
                    }
                    var X = Object.keys(m).filter((function(e) {
                            return e.startsWith("$")
                        })),
                        Z = !0;
                    if (X.forEach((function(e) {
                            -1 === ["$ref", "$id", "$db"].indexOf(e) && (Z = !1)
                        })), !Z) return m;
                    if (oe.isDBRefLike(m)) {
                        var Q = Object.assign({}, m);
                        return delete Q.$ref, delete Q.$id, delete Q.$db, new oe.DBRef(m.$ref, m.$id, m.$db, Q)
                    }
                    return m
                }

                function s(e, t, n) {
                    return t ? (null == t[e] && (t[e] = new Function(e)), t[e].bind(n)) : new Function(e)
                }
                t.deserialize = function(e, t, n) {
                    var r = (t = null == t ? {} : t) && t.index ? t.index : 0,
                        o = e[r] | e[r + 1] << 8 | e[r + 2] << 16 | e[r + 3] << 24;
                    if (o < 5) throw new Error("bson size must be >= 5, is " + o);
                    if (t.allowObjectSmallerThanBufferSize && e.length < o) throw new Error("buffer length " + e.length + " must be >= bson size " + o);
                    if (!t.allowObjectSmallerThanBufferSize && e.length !== o) throw new Error("buffer length " + e.length + " must === bson size " + o);
                    if (o + r > e.byteLength) throw new Error("(bson size " + o + " + options.index " + r + " must be <= buffer length " + e.byteLength + ")");
                    if (0 !== e[r + o - 1]) throw new Error("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
                    return i(e, r, t, n)
                }
            }));
            i(Ie), Ie.deserialize;
            var Ne = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.writeIEEE754 = t.readIEEE754 = void 0, t.readIEEE754 = function(e, t, n, r, o) {
                    var i, s, a = "big" === n,
                        u = 8 * o - r - 1,
                        c = (1 << u) - 1,
                        f = c >> 1,
                        l = -7,
                        h = a ? 0 : o - 1,
                        p = a ? 1 : -1,
                        d = e[t + h];
                    for (h += p, i = d & (1 << -l) - 1, d >>= -l, l += u; l > 0; i = 256 * i + e[t + h], h += p, l -= 8);
                    for (s = i & (1 << -l) - 1, i >>= -l, l += r; l > 0; s = 256 * s + e[t + h], h += p, l -= 8);
                    if (0 === i) i = 1 - f;
                    else {
                        if (i === c) return s ? NaN : 1 / 0 * (d ? -1 : 1);
                        s += Math.pow(2, r), i -= f
                    }
                    return (d ? -1 : 1) * s * Math.pow(2, i - r)
                }, t.writeIEEE754 = function(e, t, n, r, o, i) {
                    var s, a, u, c = "big" === r,
                        f = 8 * i - o - 1,
                        l = (1 << f) - 1,
                        h = l >> 1,
                        p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        d = c ? i - 1 : 0,
                        y = c ? -1 : 1,
                        g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + h >= 1 ? p / u : p * Math.pow(2, 1 - h)) * u >= 2 && (s++, u /= 2), s + h >= l ? (a = 0, s = l) : s + h >= 1 ? (a = (t * u - 1) * Math.pow(2, o), s += h) : (a = t * Math.pow(2, h - 1) * Math.pow(2, o), s = 0)), isNaN(t) && (a = 0); o >= 8;) e[n + d] = 255 & a, d += y, a /= 256, o -= 8;
                    for (s = s << o | a, isNaN(t) && (s += 8), f += o; f > 0;) e[n + d] = 255 & s, d += y, s /= 256, f -= 8;
                    e[n + d - y] |= 128 * g
                }
            }));
            i(Ne), Ne.writeIEEE754, Ne.readIEEE754;
            var Te = s((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.serializeInto = void 0;
                var n = /\x00/,
                    r = new Set(["$db", "$ref", "$id", "$clusterTime"]);

                function o(e, t, n, r, o) {
                    e[r++] = Se.BSON_DATA_STRING;
                    var i = o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8");
                    e[(r = r + i + 1) - 1] = 0;
                    var s = e.write(n, r + 4, void 0, "utf8");
                    return e[r + 3] = s + 1 >> 24 & 255, e[r + 2] = s + 1 >> 16 & 255, e[r + 1] = s + 1 >> 8 & 255, e[r] = s + 1 & 255, r = r + 4 + s, e[r++] = 0, r
                }

                function i(e, t, n, r, o) {
                    Number.isInteger(n) && n >= Se.BSON_INT32_MIN && n <= Se.BSON_INT32_MAX ? (e[r++] = Se.BSON_DATA_INT, r += o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0, e[r++] = 255 & n, e[r++] = n >> 8 & 255, e[r++] = n >> 16 & 255, e[r++] = n >> 24 & 255) : (e[r++] = Se.BSON_DATA_NUMBER, r += o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0, Ne.writeIEEE754(e, n, r, "little", 52, 8), r += 8);
                    return r
                }

                function s(e, t, n, r, o) {
                    return e[r++] = Se.BSON_DATA_NULL, r += o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0, r
                }

                function a(e, t, n, r, o) {
                    return e[r++] = Se.BSON_DATA_BOOLEAN, r += o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0, e[r++] = n ? 1 : 0, r
                }

                function u(e, t, n, r, o) {
                    e[r++] = Se.BSON_DATA_DATE, r += o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0;
                    var i = ie.Long.fromNumber(n.getTime()),
                        s = i.getLowBits(),
                        a = i.getHighBits();
                    return e[r++] = 255 & s, e[r++] = s >> 8 & 255, e[r++] = s >> 16 & 255, e[r++] = s >> 24 & 255, e[r++] = 255 & a, e[r++] = a >> 8 & 255, e[r++] = a >> 16 & 255, e[r++] = a >> 24 & 255, r
                }

                function c(e, t, r, o, i) {
                    if (e[o++] = Se.BSON_DATA_REGEXP, o += i ? e.write(t, o, void 0, "ascii") : e.write(t, o, void 0, "utf8"), e[o++] = 0, r.source && null != r.source.match(n)) throw Error("value " + r.source + " must not contain null bytes");
                    return o += e.write(r.source, o, void 0, "utf8"), e[o++] = 0, r.ignoreCase && (e[o++] = 105), r.global && (e[o++] = 115), r.multiline && (e[o++] = 109), e[o++] = 0, o
                }

                function f(e, t, r, o, i) {
                    if (e[o++] = Se.BSON_DATA_REGEXP, o += i ? e.write(t, o, void 0, "ascii") : e.write(t, o, void 0, "utf8"), e[o++] = 0, null != r.pattern.match(n)) throw Error("pattern " + r.pattern + " must not contain null bytes");
                    return o += e.write(r.pattern, o, void 0, "utf8"), e[o++] = 0, o += e.write(r.options.split("").sort().join(""), o, void 0, "utf8"), e[o++] = 0, o
                }

                function l(e, t, n, r, o) {
                    return null === n ? e[r++] = Se.BSON_DATA_NULL : "MinKey" === n._bsontype ? e[r++] = Se.BSON_DATA_MIN_KEY : e[r++] = Se.BSON_DATA_MAX_KEY, r += o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0, r
                }

                function h(e, t, n, r, o) {
                    if (e[r++] = Se.BSON_DATA_OID, r += o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0, "string" == typeof n.id) e.write(n.id, r, void 0, "binary");
                    else {
                        if (!n.id || !n.id.copy) throw new TypeError("object [" + JSON.stringify(n) + "] is not a valid ObjectId");
                        n.id.copy(e, r, 0, 12)
                    }
                    return r + 12
                }

                function p(e, t, n, r, o) {
                    e[r++] = Se.BSON_DATA_BINARY, r += o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0;
                    var i = n.length;
                    return e[r++] = 255 & i, e[r++] = i >> 8 & 255, e[r++] = i >> 16 & 255, e[r++] = i >> 24 & 255, e[r++] = Se.BSON_BINARY_SUBTYPE_DEFAULT, e.set(Q.ensureBuffer(n), r), r += i
                }

                function d(e, t, n, r, o, i, s, a, u, c) {
                    void 0 === o && (o = !1), void 0 === i && (i = 0), void 0 === s && (s = !1), void 0 === a && (a = !0), void 0 === u && (u = !1), void 0 === c && (c = []);
                    for (var f = 0; f < c.length; f++)
                        if (c[f] === n) throw new Error("cyclic dependency detected");
                    c.push(n), e[r++] = Array.isArray(n) ? Se.BSON_DATA_ARRAY : Se.BSON_DATA_OBJECT, r += u ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0;
                    var l = A(e, n, o, r, i + 1, s, a, c);
                    return c.pop(), l
                }

                function y(e, t, n, r, o) {
                    return e[r++] = Se.BSON_DATA_DECIMAL128, r += o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0, n.bytes.copy(e, r, 0, 16), r + 16
                }

                function g(e, t, n, r, o) {
                    e[r++] = "Long" === n._bsontype ? Se.BSON_DATA_LONG : Se.BSON_DATA_TIMESTAMP, r += o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0;
                    var i = n.getLowBits(),
                        s = n.getHighBits();
                    return e[r++] = 255 & i, e[r++] = i >> 8 & 255, e[r++] = i >> 16 & 255, e[r++] = i >> 24 & 255, e[r++] = 255 & s, e[r++] = s >> 8 & 255, e[r++] = s >> 16 & 255, e[r++] = s >> 24 & 255, r
                }

                function _(e, t, n, r, o) {
                    return n = n.valueOf(), e[r++] = Se.BSON_DATA_INT, r += o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0, e[r++] = 255 & n, e[r++] = n >> 8 & 255, e[r++] = n >> 16 & 255, e[r++] = n >> 24 & 255, r
                }

                function v(e, t, n, r, o) {
                    return e[r++] = Se.BSON_DATA_NUMBER, r += o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0, Ne.writeIEEE754(e, n.value, r, "little", 52, 8), r += 8
                }

                function m(e, t, n, r, o, i, s) {
                    e[r++] = Se.BSON_DATA_CODE, r += s ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0;
                    var a = Z.normalizedFunctionString(n),
                        u = e.write(a, r + 4, void 0, "utf8") + 1;
                    return e[r] = 255 & u, e[r + 1] = u >> 8 & 255, e[r + 2] = u >> 16 & 255, e[r + 3] = u >> 24 & 255, r = r + 4 + u - 1, e[r++] = 0, r
                }

                function b(e, t, n, r, o, i, s, a, u) {
                    if (void 0 === o && (o = !1), void 0 === i && (i = 0), void 0 === s && (s = !1), void 0 === a && (a = !0), void 0 === u && (u = !1), n.scope && "object" == typeof n.scope) {
                        e[r++] = Se.BSON_DATA_CODE_W_SCOPE, r += u ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0;
                        var c = r,
                            f = "string" == typeof n.code ? n.code : n.code.toString();
                        r += 4;
                        var l = e.write(f, r + 4, void 0, "utf8") + 1;
                        e[r] = 255 & l, e[r + 1] = l >> 8 & 255, e[r + 2] = l >> 16 & 255, e[r + 3] = l >> 24 & 255, e[r + 4 + l - 1] = 0, r = r + l + 4;
                        var h = A(e, n.scope, o, r, i + 1, s, a);
                        r = h - 1;
                        var p = h - c;
                        e[c++] = 255 & p, e[c++] = p >> 8 & 255, e[c++] = p >> 16 & 255, e[c++] = p >> 24 & 255, e[r++] = 0
                    } else {
                        e[r++] = Se.BSON_DATA_CODE, r += u ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0;
                        f = n.code.toString();
                        var d = e.write(f, r + 4, void 0, "utf8") + 1;
                        e[r] = 255 & d, e[r + 1] = d >> 8 & 255, e[r + 2] = d >> 16 & 255, e[r + 3] = d >> 24 & 255, r = r + 4 + d - 1, e[r++] = 0
                    }
                    return r
                }

                function w(e, t, n, r, o) {
                    e[r++] = Se.BSON_DATA_BINARY, r += o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0;
                    var i = n.value(!0),
                        s = n.position;
                    return n.sub_type === ne.Binary.SUBTYPE_BYTE_ARRAY && (s += 4), e[r++] = 255 & s, e[r++] = s >> 8 & 255, e[r++] = s >> 16 & 255, e[r++] = s >> 24 & 255, e[r++] = n.sub_type, n.sub_type === ne.Binary.SUBTYPE_BYTE_ARRAY && (s -= 4, e[r++] = 255 & s, e[r++] = s >> 8 & 255, e[r++] = s >> 16 & 255, e[r++] = s >> 24 & 255), e.set(i, r), r += n.position
                }

                function E(e, t, n, r, o) {
                    e[r++] = Se.BSON_DATA_SYMBOL, r += o ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0;
                    var i = e.write(n.value, r + 4, void 0, "utf8") + 1;
                    return e[r] = 255 & i, e[r + 1] = i >> 8 & 255, e[r + 2] = i >> 16 & 255, e[r + 3] = i >> 24 & 255, r = r + 4 + i - 1, e[r++] = 0, r
                }

                function S(e, t, n, r, o, i, s) {
                    e[r++] = Se.BSON_DATA_OBJECT, r += s ? e.write(t, r, void 0, "ascii") : e.write(t, r, void 0, "utf8"), e[r++] = 0;
                    var a = r,
                        u = {
                            $ref: n.collection || n.namespace,
                            $id: n.oid
                        };
                    null != n.db && (u.$db = n.db);
                    var c = A(e, u = Object.assign(u, n.fields), !1, r, o + 1, i),
                        f = c - a;
                    return e[a++] = 255 & f, e[a++] = f >> 8 & 255, e[a++] = f >> 16 & 255, e[a++] = f >> 24 & 255, c
                }

                function A(e, t, A, O, I, N, T, R) {
                    void 0 === A && (A = !1), void 0 === O && (O = 0), void 0 === I && (I = 0), void 0 === N && (N = !1), void 0 === T && (T = !0), void 0 === R && (R = []), O = O || 0, (R = R || []).push(t);
                    var B = O + 4;
                    if (Array.isArray(t))
                        for (var P = 0; P < t.length; P++) {
                            var D = "" + P;
                            if ((C = t[P]) && C.toBSON) {
                                if ("function" != typeof C.toBSON) throw new TypeError("toBSON is not a function");
                                C = C.toBSON()
                            }
                            if ("string" == typeof C) B = o(e, D, C, B, !0);
                            else if ("number" == typeof C) B = i(e, D, C, B, !0);
                            else {
                                if ("bigint" == typeof C) throw new TypeError("Unsupported type BigInt, please use Decimal128");
                                if ("boolean" == typeof C) B = a(e, D, C, B, !0);
                                else if (C instanceof Date || Z.isDate(C)) B = u(e, D, C, B, !0);
                                else if (void 0 === C) B = s(e, D, 0, B, !0);
                                else if (null === C) B = s(e, D, 0, B, !0);
                                else if ("ObjectId" === C._bsontype || "ObjectID" === C._bsontype) B = h(e, D, C, B, !0);
                                else if (Z.isUint8Array(C)) B = p(e, D, C, B, !0);
                                else if (C instanceof RegExp || Z.isRegExp(C)) B = c(e, D, C, B, !0);
                                else if ("object" == typeof C && null == C._bsontype) B = d(e, D, C, B, A, I, N, T, !0, R);
                                else if ("object" == typeof C && we.isBSONType(C) && "Decimal128" === C._bsontype) B = y(e, D, C, B, !0);
                                else if ("Long" === C._bsontype || "Timestamp" === C._bsontype) B = g(e, D, C, B, !0);
                                else if ("Double" === C._bsontype) B = v(e, D, C, B, !0);
                                else if ("function" == typeof C && N) B = m(e, D, C, B, 0, 0, !0);
                                else if ("Code" === C._bsontype) B = b(e, D, C, B, A, I, N, T, !0);
                                else if ("Binary" === C._bsontype) B = w(e, D, C, B, !0);
                                else if ("Symbol" === C._bsontype) B = E(e, D, C, B, !0);
                                else if ("DBRef" === C._bsontype) B = S(e, D, C, B, I, N, !0);
                                else if ("BSONRegExp" === C._bsontype) B = f(e, D, C, B, !0);
                                else if ("Int32" === C._bsontype) B = _(e, D, C, B, !0);
                                else if ("MinKey" === C._bsontype || "MaxKey" === C._bsontype) B = l(e, D, C, B, !0);
                                else if (void 0 !== C._bsontype) throw new TypeError("Unrecognized or invalid _bsontype: " + C._bsontype)
                            }
                        } else if (t instanceof Ee.Map || Z.isMap(t))
                            for (var L = t.entries(), x = !1; !x;) {
                                var U = L.next();
                                if (!(x = !!U.done)) {
                                    D = U.value[0];
                                    var j = typeof(C = U.value[1]);
                                    if ("string" == typeof D && !r.has(D)) {
                                        if (null != D.match(n)) throw Error("key " + D + " must not contain null bytes");
                                        if (A) {
                                            if ("$" === D[0]) throw Error("key " + D + " must not start with '$'");
                                            if (~D.indexOf(".")) throw Error("key " + D + " must not contain '.'")
                                        }
                                    }
                                    if ("string" === j) B = o(e, D, C, B);
                                    else if ("number" === j) B = i(e, D, C, B);
                                    else {
                                        if ("bigint" === j || Z.isBigInt64Array(C) || Z.isBigUInt64Array(C)) throw new TypeError("Unsupported type BigInt, please use Decimal128");
                                        if ("boolean" === j) B = a(e, D, C, B);
                                        else if (C instanceof Date || Z.isDate(C)) B = u(e, D, C, B);
                                        else if (null === C || void 0 === C && !1 === T) B = s(e, D, 0, B);
                                        else if ("ObjectId" === C._bsontype || "ObjectID" === C._bsontype) B = h(e, D, C, B);
                                        else if (Z.isUint8Array(C)) B = p(e, D, C, B);
                                        else if (C instanceof RegExp || Z.isRegExp(C)) B = c(e, D, C, B);
                                        else if ("object" === j && null == C._bsontype) B = d(e, D, C, B, A, I, N, T, !1, R);
                                        else if ("object" === j && "Decimal128" === C._bsontype) B = y(e, D, C, B);
                                        else if ("Long" === C._bsontype || "Timestamp" === C._bsontype) B = g(e, D, C, B);
                                        else if ("Double" === C._bsontype) B = v(e, D, C, B);
                                        else if ("Code" === C._bsontype) B = b(e, D, C, B, A, I, N, T);
                                        else if ("function" == typeof C && N) B = m(e, D, C, B, 0, 0, N);
                                        else if ("Binary" === C._bsontype) B = w(e, D, C, B);
                                        else if ("Symbol" === C._bsontype) B = E(e, D, C, B);
                                        else if ("DBRef" === C._bsontype) B = S(e, D, C, B, I, N);
                                        else if ("BSONRegExp" === C._bsontype) B = f(e, D, C, B);
                                        else if ("Int32" === C._bsontype) B = _(e, D, C, B);
                                        else if ("MinKey" === C._bsontype || "MaxKey" === C._bsontype) B = l(e, D, C, B);
                                        else if (void 0 !== C._bsontype) throw new TypeError("Unrecognized or invalid _bsontype: " + C._bsontype)
                                    }
                                }
                            } else {
                                if (t.toBSON) {
                                    if ("function" != typeof t.toBSON) throw new TypeError("toBSON is not a function");
                                    if (null != (t = t.toBSON()) && "object" != typeof t) throw new TypeError("toBSON function did not return an object")
                                }
                                for (var D in t) {
                                    var C;
                                    if ((C = t[D]) && C.toBSON) {
                                        if ("function" != typeof C.toBSON) throw new TypeError("toBSON is not a function");
                                        C = C.toBSON()
                                    }
                                    j = typeof C;
                                    if ("string" == typeof D && !r.has(D)) {
                                        if (null != D.match(n)) throw Error("key " + D + " must not contain null bytes");
                                        if (A) {
                                            if ("$" === D[0]) throw Error("key " + D + " must not start with '$'");
                                            if (~D.indexOf(".")) throw Error("key " + D + " must not contain '.'")
                                        }
                                    }
                                    if ("string" === j) B = o(e, D, C, B);
                                    else if ("number" === j) B = i(e, D, C, B);
                                    else {
                                        if ("bigint" === j) throw new TypeError("Unsupported type BigInt, please use Decimal128");
                                        if ("boolean" === j) B = a(e, D, C, B);
                                        else if (C instanceof Date || Z.isDate(C)) B = u(e, D, C, B);
                                        else if (void 0 === C) !1 === T && (B = s(e, D, 0, B));
                                        else if (null === C) B = s(e, D, 0, B);
                                        else if ("ObjectId" === C._bsontype || "ObjectID" === C._bsontype) B = h(e, D, C, B);
                                        else if (Z.isUint8Array(C)) B = p(e, D, C, B);
                                        else if (C instanceof RegExp || Z.isRegExp(C)) B = c(e, D, C, B);
                                        else if ("object" === j && null == C._bsontype) B = d(e, D, C, B, A, I, N, T, !1, R);
                                        else if ("object" === j && "Decimal128" === C._bsontype) B = y(e, D, C, B);
                                        else if ("Long" === C._bsontype || "Timestamp" === C._bsontype) B = g(e, D, C, B);
                                        else if ("Double" === C._bsontype) B = v(e, D, C, B);
                                        else if ("Code" === C._bsontype) B = b(e, D, C, B, A, I, N, T);
                                        else if ("function" == typeof C && N) B = m(e, D, C, B, 0, 0, N);
                                        else if ("Binary" === C._bsontype) B = w(e, D, C, B);
                                        else if ("Symbol" === C._bsontype) B = E(e, D, C, B);
                                        else if ("DBRef" === C._bsontype) B = S(e, D, C, B, I, N);
                                        else if ("BSONRegExp" === C._bsontype) B = f(e, D, C, B);
                                        else if ("Int32" === C._bsontype) B = _(e, D, C, B);
                                        else if ("MinKey" === C._bsontype || "MaxKey" === C._bsontype) B = l(e, D, C, B);
                                        else if (void 0 !== C._bsontype) throw new TypeError("Unrecognized or invalid _bsontype: " + C._bsontype)
                                    }
                                }
                            }
                    R.pop(), e[B++] = 0;
                    var M = B - O;
                    return e[O++] = 255 & M, e[O++] = M >> 8 & 255, e[O++] = M >> 16 & 255, e[O++] = M >> 24 & 255, B
                }
                t.serializeInto = A
            }));
            i(Te), Te.serializeInto;
            var Re = s((function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.ObjectID = t.Decimal128 = t.BSONRegExp = t.MaxKey = t.MinKey = t.Int32 = t.Double = t.Timestamp = t.Long = t.UUID = t.ObjectId = t.Binary = t.DBRef = t.BSONSymbol = t.Map = t.Code = t.LongWithoutOverridesClass = t.EJSON = t.BSON_INT64_MIN = t.BSON_INT64_MAX = t.BSON_INT32_MIN = t.BSON_INT32_MAX = t.BSON_DATA_UNDEFINED = t.BSON_DATA_TIMESTAMP = t.BSON_DATA_SYMBOL = t.BSON_DATA_STRING = t.BSON_DATA_REGEXP = t.BSON_DATA_OID = t.BSON_DATA_OBJECT = t.BSON_DATA_NUMBER = t.BSON_DATA_NULL = t.BSON_DATA_MIN_KEY = t.BSON_DATA_MAX_KEY = t.BSON_DATA_LONG = t.BSON_DATA_INT = t.BSON_DATA_DECIMAL128 = t.BSON_DATA_DBPOINTER = t.BSON_DATA_DATE = t.BSON_DATA_CODE_W_SCOPE = t.BSON_DATA_CODE = t.BSON_DATA_BOOLEAN = t.BSON_DATA_BINARY = t.BSON_DATA_ARRAY = t.BSON_BINARY_SUBTYPE_UUID_NEW = t.BSON_BINARY_SUBTYPE_UUID = t.BSON_BINARY_SUBTYPE_USER_DEFINED = t.BSON_BINARY_SUBTYPE_MD5 = t.BSON_BINARY_SUBTYPE_FUNCTION = t.BSON_BINARY_SUBTYPE_DEFAULT = t.BSON_BINARY_SUBTYPE_BYTE_ARRAY = void 0, t.deserializeStream = t.calculateObjectSize = t.deserialize = t.serializeWithBufferAndIndex = t.serialize = t.setInternalBufferSize = void 0, Object.defineProperty(t, "Binary", {
                        enumerable: !0,
                        get: function() {
                            return ne.Binary
                        }
                    }), Object.defineProperty(t, "Code", {
                        enumerable: !0,
                        get: function() {
                            return re.Code
                        }
                    }), Object.defineProperty(t, "DBRef", {
                        enumerable: !0,
                        get: function() {
                            return oe.DBRef
                        }
                    }), Object.defineProperty(t, "Decimal128", {
                        enumerable: !0,
                        get: function() {
                            return se.Decimal128
                        }
                    }), Object.defineProperty(t, "Double", {
                        enumerable: !0,
                        get: function() {
                            return ae.Double
                        }
                    }), Object.defineProperty(t, "Int32", {
                        enumerable: !0,
                        get: function() {
                            return ue.Int32
                        }
                    }), Object.defineProperty(t, "Long", {
                        enumerable: !0,
                        get: function() {
                            return ie.Long
                        }
                    }), Object.defineProperty(t, "Map", {
                        enumerable: !0,
                        get: function() {
                            return Ee.Map
                        }
                    }), Object.defineProperty(t, "MaxKey", {
                        enumerable: !0,
                        get: function() {
                            return ce.MaxKey
                        }
                    }), Object.defineProperty(t, "MinKey", {
                        enumerable: !0,
                        get: function() {
                            return fe.MinKey
                        }
                    }), Object.defineProperty(t, "ObjectId", {
                        enumerable: !0,
                        get: function() {
                            return le.ObjectId
                        }
                    }), Object.defineProperty(t, "ObjectID", {
                        enumerable: !0,
                        get: function() {
                            return le.ObjectId
                        }
                    }), Object.defineProperty(t, "BSONRegExp", {
                        enumerable: !0,
                        get: function() {
                            return he.BSONRegExp
                        }
                    }), Object.defineProperty(t, "BSONSymbol", {
                        enumerable: !0,
                        get: function() {
                            return pe.BSONSymbol
                        }
                    }), Object.defineProperty(t, "Timestamp", {
                        enumerable: !0,
                        get: function() {
                            return be.Timestamp
                        }
                    }), Object.defineProperty(t, "UUID", {
                        enumerable: !0,
                        get: function() {
                            return te.UUID
                        }
                    }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_BYTE_ARRAY", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_BINARY_SUBTYPE_BYTE_ARRAY
                        }
                    }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_DEFAULT", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_BINARY_SUBTYPE_DEFAULT
                        }
                    }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_FUNCTION", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_BINARY_SUBTYPE_FUNCTION
                        }
                    }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_MD5", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_BINARY_SUBTYPE_MD5
                        }
                    }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_USER_DEFINED", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_BINARY_SUBTYPE_USER_DEFINED
                        }
                    }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_UUID", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_BINARY_SUBTYPE_UUID
                        }
                    }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_UUID_NEW", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_BINARY_SUBTYPE_UUID_NEW
                        }
                    }), Object.defineProperty(t, "BSON_DATA_ARRAY", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_ARRAY
                        }
                    }), Object.defineProperty(t, "BSON_DATA_BINARY", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_BINARY
                        }
                    }), Object.defineProperty(t, "BSON_DATA_BOOLEAN", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_BOOLEAN
                        }
                    }), Object.defineProperty(t, "BSON_DATA_CODE", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_CODE
                        }
                    }), Object.defineProperty(t, "BSON_DATA_CODE_W_SCOPE", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_CODE_W_SCOPE
                        }
                    }), Object.defineProperty(t, "BSON_DATA_DATE", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_DATE
                        }
                    }), Object.defineProperty(t, "BSON_DATA_DBPOINTER", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_DBPOINTER
                        }
                    }), Object.defineProperty(t, "BSON_DATA_DECIMAL128", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_DECIMAL128
                        }
                    }), Object.defineProperty(t, "BSON_DATA_INT", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_INT
                        }
                    }), Object.defineProperty(t, "BSON_DATA_LONG", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_LONG
                        }
                    }), Object.defineProperty(t, "BSON_DATA_MAX_KEY", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_MAX_KEY
                        }
                    }), Object.defineProperty(t, "BSON_DATA_MIN_KEY", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_MIN_KEY
                        }
                    }), Object.defineProperty(t, "BSON_DATA_NULL", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_NULL
                        }
                    }), Object.defineProperty(t, "BSON_DATA_NUMBER", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_NUMBER
                        }
                    }), Object.defineProperty(t, "BSON_DATA_OBJECT", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_OBJECT
                        }
                    }), Object.defineProperty(t, "BSON_DATA_OID", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_OID
                        }
                    }), Object.defineProperty(t, "BSON_DATA_REGEXP", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_REGEXP
                        }
                    }), Object.defineProperty(t, "BSON_DATA_STRING", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_STRING
                        }
                    }), Object.defineProperty(t, "BSON_DATA_SYMBOL", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_SYMBOL
                        }
                    }), Object.defineProperty(t, "BSON_DATA_TIMESTAMP", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_TIMESTAMP
                        }
                    }), Object.defineProperty(t, "BSON_DATA_UNDEFINED", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_DATA_UNDEFINED
                        }
                    }), Object.defineProperty(t, "BSON_INT32_MAX", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_INT32_MAX
                        }
                    }), Object.defineProperty(t, "BSON_INT32_MIN", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_INT32_MIN
                        }
                    }), Object.defineProperty(t, "BSON_INT64_MAX", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_INT64_MAX
                        }
                    }), Object.defineProperty(t, "BSON_INT64_MIN", {
                        enumerable: !0,
                        get: function() {
                            return Se.BSON_INT64_MIN
                        }
                    });
                    var n = we;
                    Object.defineProperty(t, "EJSON", {
                        enumerable: !0,
                        get: function() {
                            return n.EJSON
                        }
                    });
                    var r = be;
                    Object.defineProperty(t, "LongWithoutOverridesClass", {
                        enumerable: !0,
                        get: function() {
                            return r.LongWithoutOverridesClass
                        }
                    });
                    var o = w.Buffer.alloc(17825792);

                    function i(e) {
                        o.length < e && (o = w.Buffer.alloc(e))
                    }

                    function s(e, t) {
                        void 0 === t && (t = {});
                        var n = "boolean" == typeof t.checkKeys && t.checkKeys,
                            r = "boolean" == typeof t.serializeFunctions && t.serializeFunctions,
                            i = "boolean" != typeof t.ignoreUndefined || t.ignoreUndefined,
                            s = "number" == typeof t.minInternalBufferSize ? t.minInternalBufferSize : 17825792;
                        o.length < s && (o = w.Buffer.alloc(s));
                        var a = Te.serializeInto(o, e, n, 0, 0, r, i, []),
                            u = w.Buffer.alloc(a);
                        return o.copy(u, 0, 0, u.length), u
                    }

                    function a(e, t, n) {
                        void 0 === n && (n = {});
                        var r = "boolean" == typeof n.checkKeys && n.checkKeys,
                            i = "boolean" == typeof n.serializeFunctions && n.serializeFunctions,
                            s = "boolean" != typeof n.ignoreUndefined || n.ignoreUndefined,
                            a = "number" == typeof n.index ? n.index : 0,
                            u = Te.serializeInto(o, e, r, 0, 0, i, s);
                        return o.copy(t, a, 0, u), a + u - 1
                    }

                    function u(e, t) {
                        return void 0 === t && (t = {}), Ie.deserialize(Q.ensureBuffer(e), t)
                    }

                    function c(e, t) {
                        void 0 === t && (t = {});
                        var n = "boolean" == typeof(t = t || {}).serializeFunctions && t.serializeFunctions,
                            r = "boolean" != typeof t.ignoreUndefined || t.ignoreUndefined;
                        return Ae.calculateObjectSize(e, n, r)
                    }

                    function f(e, t, n, r, o, i) {
                        for (var s = Object.assign({
                                allowObjectSmallerThanBufferSize: !0,
                                index: 0
                            }, i), a = Q.ensureBuffer(e), u = t, c = 0; c < n; c++) {
                            var f = a[u] | a[u + 1] << 8 | a[u + 2] << 16 | a[u + 3] << 24;
                            s.index = u, r[o + c] = Ie.deserialize(a, s), u += f
                        }
                        return u
                    }
                    t.setInternalBufferSize = i, t.serialize = s, t.serializeWithBufferAndIndex = a, t.deserialize = u, t.calculateObjectSize = c, t.deserializeStream = f;
                    var l = {
                        Binary: ne.Binary,
                        Code: re.Code,
                        DBRef: oe.DBRef,
                        Decimal128: se.Decimal128,
                        Double: ae.Double,
                        Int32: ue.Int32,
                        Long: ie.Long,
                        UUID: te.UUID,
                        Map: Ee.Map,
                        MaxKey: ce.MaxKey,
                        MinKey: fe.MinKey,
                        ObjectId: le.ObjectId,
                        ObjectID: le.ObjectId,
                        BSONRegExp: he.BSONRegExp,
                        BSONSymbol: pe.BSONSymbol,
                        Timestamp: be.Timestamp,
                        EJSON: we.EJSON,
                        setInternalBufferSize: i,
                        serialize: s,
                        serializeWithBufferAndIndex: a,
                        deserialize: u,
                        calculateObjectSize: c,
                        deserializeStream: f
                    };
                    t.default = l
                })),
                Be = (i(Re), Re.ObjectID, Re.Decimal128, Re.BSONRegExp, Re.MaxKey, Re.MinKey, Re.Int32, Re.Double, Re.Timestamp, Re.Long, Re.UUID, Re.ObjectId, Re.Binary, Re.DBRef, Re.BSONSymbol, Re.Map, Re.Code, Re.LongWithoutOverridesClass, Re.EJSON);
            Re.BSON_INT64_MIN, Re.BSON_INT64_MAX, Re.BSON_INT32_MIN, Re.BSON_INT32_MAX, Re.BSON_DATA_UNDEFINED, Re.BSON_DATA_TIMESTAMP, Re.BSON_DATA_SYMBOL, Re.BSON_DATA_STRING, Re.BSON_DATA_REGEXP, Re.BSON_DATA_OID, Re.BSON_DATA_OBJECT, Re.BSON_DATA_NUMBER, Re.BSON_DATA_NULL, Re.BSON_DATA_MIN_KEY, Re.BSON_DATA_MAX_KEY, Re.BSON_DATA_LONG, Re.BSON_DATA_INT, Re.BSON_DATA_DECIMAL128, Re.BSON_DATA_DBPOINTER, Re.BSON_DATA_DATE, Re.BSON_DATA_CODE_W_SCOPE, Re.BSON_DATA_CODE, Re.BSON_DATA_BOOLEAN, Re.BSON_DATA_BINARY, Re.BSON_DATA_ARRAY, Re.BSON_BINARY_SUBTYPE_UUID_NEW, Re.BSON_BINARY_SUBTYPE_UUID, Re.BSON_BINARY_SUBTYPE_USER_DEFINED, Re.BSON_BINARY_SUBTYPE_MD5, Re.BSON_BINARY_SUBTYPE_FUNCTION, Re.BSON_BINARY_SUBTYPE_DEFAULT, Re.BSON_BINARY_SUBTYPE_BYTE_ARRAY, Re.deserializeStream, Re.calculateObjectSize, Re.deserialize, Re.serializeWithBufferAndIndex, Re.serialize, Re.setInternalBufferSize
        }).call(this, n(6), n(32).Buffer)
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "i", (function() {
                return u
            })), n.d(t, "e", (function() {
                return c
            })), n.d(t, "h", (function() {
                return f
            })), n.d(t, "d", (function() {
                return l
            })), n.d(t, "a", (function() {
                return p
            })), n.d(t, "f", (function() {
                return g
            })), n.d(t, "g", (function() {
                return _
            })), n.d(t, "c", (function() {
                return v
            })), n.d(t, "b", (function() {
                return h
            }));
            var r = n(0),
                o = r.constants.setSdkName,
                i = r.constants.setProtocol,
                s = "",
                a = "@cloudbase/js-sdk";

            function u(e) {
                s = e
            }

            function c() {
                return s
            }

            function f(e) {
                a = e, o(e)
            }

            function l() {
                return a
            }
            var h, p = "2020-01-10",
                d = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:",
                y = "//tcb-api.tencentcloudapi.com/web";

            function g(e, t) {
                y = e, t && (d = t, i(t))
            }

            function _(e, t, n) {
                g(t ? "//" + e + "." + t + ".tcb-api.tencentcloudapi.com/web" : "//" + e + ".ap-shanghai.tcb-api.tencentcloudapi.com/web", n)
            }

            function v() {
                return {
                    BASE_URL: y,
                    PROTOCOL: d
                }
            }! function(e) {
                e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.CUSTOM = "CUSTOM", e.NULL = "NULL"
            }(h || (h = {}))
        }).call(this, n(9))
    }, function(e, t, n) {
        "use strict";
        var r;
        n.r(t), n.d(t, "StorageType", (function() {
                return r
            })), n.d(t, "AbstractSDKRequest", (function() {
                return o
            })), n.d(t, "AbstractStorage", (function() {
                return i
            })), n.d(t, "formatUrl", (function() {
                return s
            })),
            function(e) {
                e.local = "local", e.none = "none", e.session = "session"
            }(r || (r = {}));
        var o = function() {},
            i = function() {};

        function s(e, t, n) {
            void 0 === n && (n = {});
            var r = /\?/.test(t),
                o = "";
            for (var i in n) "" === o ? !r && (t += "?") : o += "&", o += i + "=" + encodeURIComponent(n[i]);
            return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t
        }
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.transformPhone = t.sleep = t.printGroupLog = t.throwError = t.printInfo = t.printError = t.printWarn = t.execCallback = t.createPromiseCallback = t.removeParam = t.getHash = t.getQuery = t.toQueryString = t.createSign = t.formatUrl = t.genSeqId = t.isFormData = t.isInstanceOf = t.isNull = t.isPalinObject = t.isUndefined = t.isString = t.isArray = void 0;
        var o = r(n(19)),
            i = r(n(22)),
            s = r(n(23)),
            a = n(7);

        function u(e) {
            var t = i.default.stringify(e);
            return t = (t = (t = t.replace(/=+$/, "")).replace(/\+/g, "-")).replace(/\//g, "_")
        }
        t.isArray = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }, t.isString = function(e) {
            return "string" == typeof e
        }, t.isUndefined = function(e) {
            return void 0 === e
        }, t.isPalinObject = function(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }, t.isNull = function(e) {
            return "[object Null]" === Object.prototype.toString.call(e)
        }, t.isInstanceOf = function(e, t) {
            return e instanceof t
        }, t.isFormData = function(e) {
            return "[object FormData]" === Object.prototype.toString.call(e)
        }, t.genSeqId = function() {
            return Math.random().toString(16).slice(2)
        }, t.formatUrl = function(e, t, n) {
            void 0 === n && (n = {});
            var r = /\?/.test(t),
                o = "";
            for (var i in n) "" === o ? !r && (t += "?") : o += "&", o += i + "=" + encodeURIComponent(n[i]);
            return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t
        }, t.createSign = function(e, t) {
            var n = u(s.default.parse(JSON.stringify({
                alg: "HS256",
                typ: "JWT"
            }))) + "." + u(s.default.parse(JSON.stringify(e)));
            return n + "." + u(o.default(n, t))
        }, t.toQueryString = function(e) {
            void 0 === e && (e = {});
            var t = [];
            for (var n in e) t.push(n + "=" + encodeURIComponent(e[n]));
            return t.join("&")
        }, t.getQuery = function(e, t) {
            if ("undefined" == typeof window) return !1;
            var n = t || window.location.search,
                r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                o = n.substr(n.indexOf("?") + 1).match(r);
            return null != o ? o[2] : ""
        }, t.getHash = function(e) {
            if ("undefined" == typeof window) return "";
            var t = window.location.hash.match(new RegExp("[#?&/]" + e + "=([^&#]*)"));
            return t ? t[1] : ""
        }, t.removeParam = function(e, t) {
            var n = t.split("?")[0],
                r = [],
                o = -1 !== t.indexOf("?") ? t.split("?")[1] : "";
            if ("" !== o) {
                for (var i = (r = o.split("&")).length - 1; i >= 0; i -= 1) r[i].split("=")[0] === e && r.splice(i, 1);
                n = n + "?" + r.join("&")
            }
            return n
        }, t.createPromiseCallback = function() {
            var e;
            if (!Promise) {
                (e = function() {}).promise = {};
                var t = function() {
                    throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.')
                };
                return Object.defineProperty(e.promise, "then", {
                    get: t
                }), Object.defineProperty(e.promise, "catch", {
                    get: t
                }), e
            }
            var n = new Promise((function(t, n) {
                e = function(e, r) {
                    return e ? n(e) : t(r)
                }
            }));
            return e.promise = n, e
        }, t.execCallback = function(e, t, n) {
            if (void 0 === n && (n = null), e && "function" == typeof e) return e(t, n);
            if (t) throw t;
            return n
        }, t.printWarn = function(e, t) {
            console.warn("[" + a.getSdkName() + "][" + e + "]:" + t)
        }, t.printError = function(e, t) {
            console.error({
                code: e,
                msg: "[" + a.getSdkName() + "][" + e + "]:" + t
            })
        }, t.printInfo = function(e, t) {
            console.log("[" + a.getSdkName() + "][" + e + "]:" + t)
        }, t.throwError = function(e, t) {
            throw new Error(JSON.stringify({
                code: e,
                msg: "[" + a.getSdkName() + "][" + e + "]:" + t
            }))
        }, t.printGroupLog = function(e) {
            var t = e.title,
                n = e.subtitle,
                r = void 0 === n ? "" : n,
                o = e.content,
                i = void 0 === o ? [] : o,
                s = e.printTrace,
                a = void 0 !== s && s,
                u = e.collapsed;
            void 0 !== u && u ? console.groupCollapsed(t, r) : console.group(t, r);
            for (var c = 0, f = i; c < f.length; c++) {
                var l = f[c],
                    h = l.type,
                    p = l.body;
                switch (h) {
                    case "info":
                        console.log(p);
                        break;
                    case "warn":
                        console.warn(p);
                        break;
                    case "error":
                        console.error(p)
                }
            }
            a && console.trace("stack trace:"), console.groupEnd()
        }, t.sleep = function(e) {
            return void 0 === e && (e = 0), new Promise((function(t) {
                return setTimeout(t, e)
            }))
        }, t.transformPhone = function(e) {
            return "+86" + e
        }
    }, function(e, t, n) {
        var r;
        e.exports = (r = r || function(e, t) {
            var n = Object.create || function() {
                    function e() {}
                    return function(t) {
                        var n;
                        return e.prototype = t, n = new e, e.prototype = null, n
                    }
                }(),
                r = {},
                o = r.lib = {},
                i = o.Base = {
                    extend: function(e) {
                        var t = n(this);
                        return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                            t.$super.init.apply(this, arguments)
                        }), t.init.prototype = t, t.$super = this, t
                    },
                    create: function() {
                        var e = this.extend();
                        return e.init.apply(e, arguments), e
                    },
                    init: function() {},
                    mixIn: function(e) {
                        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                },
                s = o.WordArray = i.extend({
                    init: function(e, t) {
                        e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
                    },
                    toString: function(e) {
                        return (e || u).stringify(this)
                    },
                    concat: function(e) {
                        var t = this.words,
                            n = e.words,
                            r = this.sigBytes,
                            o = e.sigBytes;
                        if (this.clamp(), r % 4)
                            for (var i = 0; i < o; i++) {
                                var s = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                t[r + i >>> 2] |= s << 24 - (r + i) % 4 * 8
                            } else
                                for (i = 0; i < o; i += 4) t[r + i >>> 2] = n[i >>> 2];
                        return this.sigBytes += o, this
                    },
                    clamp: function() {
                        var t = this.words,
                            n = this.sigBytes;
                        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        return e.words = this.words.slice(0), e
                    },
                    random: function(t) {
                        for (var n, r = [], o = function(t) {
                                t = t;
                                var n = 987654321,
                                    r = 4294967295;
                                return function() {
                                    var o = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;
                                    return o /= 4294967296, (o += .5) * (e.random() > .5 ? 1 : -1)
                                }
                            }, i = 0; i < t; i += 4) {
                            var a = o(4294967296 * (n || e.random()));
                            n = 987654071 * a(), r.push(4294967296 * a() | 0)
                        }
                        return new s.init(r, t)
                    }
                }),
                a = r.enc = {},
                u = a.Hex = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                            var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16))
                        }
                        return r.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                        return new s.init(n, t / 2)
                    }
                },
                c = a.Latin1 = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                            var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            r.push(String.fromCharCode(i))
                        }
                        return r.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                        return new s.init(n, t)
                    }
                },
                f = a.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(escape(c.stringify(e)))
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(e) {
                        return c.parse(unescape(encodeURIComponent(e)))
                    }
                },
                l = o.BufferedBlockAlgorithm = i.extend({
                    reset: function() {
                        this._data = new s.init, this._nDataBytes = 0
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                    },
                    _process: function(t) {
                        var n = this._data,
                            r = n.words,
                            o = n.sigBytes,
                            i = this.blockSize,
                            a = o / (4 * i),
                            u = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,
                            c = e.min(4 * u, o);
                        if (u) {
                            for (var f = 0; f < u; f += i) this._doProcessBlock(r, f);
                            var l = r.splice(0, u);
                            n.sigBytes -= c
                        }
                        return new s.init(l, c)
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        return e._data = this._data.clone(), e
                    },
                    _minBufferSize: 0
                }),
                h = (o.Hasher = l.extend({
                    cfg: i.extend(),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e), this.reset()
                    },
                    reset: function() {
                        l.reset.call(this), this._doReset()
                    },
                    update: function(e) {
                        return this._append(e), this._process(), this
                    },
                    finalize: function(e) {
                        return e && this._append(e), this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function(e) {
                        return function(t, n) {
                            return new e.init(n).finalize(t)
                        }
                    },
                    _createHmacHelper: function(e) {
                        return function(t, n) {
                            return new h.HMAC.init(e, n).finalize(t)
                        }
                    }
                }), r.algo = {});
            return r
        }(Math), r)
    }, function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n), Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                })
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            o = this && this.__exportStar || function(e, t) {
                for (var n in e) "default" === n || t.hasOwnProperty(n) || r(t, e, n)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o(n(8), t), o(n(16), t)
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.COMMUNITY_SITE_URL = t.IS_DEBUG_MODE = t.getProtocol = t.setProtocol = t.getSdkName = t.setSdkName = void 0;
        var r = "@cloudbase/js-sdk";
        t.setSdkName = function(e) {
            r = e
        }, t.getSdkName = function() {
            return r
        };
        var o = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
        t.setProtocol = function(e) {
            o = e
        }, t.getProtocol = function() {
            return o
        }, t.IS_DEBUG_MODE = !1, t.COMMUNITY_SITE_URL = "https://support.qq.com/products/148793"
    }, function(e, t) {
        var n, r, o = e.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                r = s
            }
        }();
        var u, c = [],
            f = !1,
            l = -1;

        function h() {
            f && u && (f = !1, u.length ? c = u.concat(c) : l = -1, c.length && p())
        }

        function p() {
            if (!f) {
                var e = a(h);
                f = !0;
                for (var t = c.length; t;) {
                    for (u = c, c = []; ++l < t;) u && u[l].run();
                    l = -1, t = c.length
                }
                u = null, f = !1,
                    function(e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                        try {
                            r(e)
                        } catch (t) {
                            try {
                                return r.call(null, e)
                            } catch (t) {
                                return r.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function d(e, t) {
            this.fun = e, this.array = t
        }

        function y() {}
        o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            c.push(new d(e, t)), 1 !== c.length || f || a(p)
        }, d.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function(e) {
            return []
        }, o.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    }, function(e, t, n) {
        (function(t) {
            var n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                r = /^\w*$/,
                o = /^\./,
                i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                s = /\\(\\)?/g,
                a = /^\[object .+?Constructor\]$/,
                u = /^(?:0|[1-9]\d*)$/,
                c = "object" == typeof t && t && t.Object === Object && t,
                f = "object" == typeof self && self && self.Object === Object && self,
                l = c || f || Function("return this")();
            var h, p = Array.prototype,
                d = Function.prototype,
                y = Object.prototype,
                g = l["__core-js_shared__"],
                _ = (h = /[^.]+$/.exec(g && g.keys && g.keys.IE_PROTO || "")) ? "Symbol(src)_1." + h : "",
                v = d.toString,
                m = y.hasOwnProperty,
                b = y.toString,
                w = RegExp("^" + v.call(m).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                E = l.Symbol,
                S = p.splice,
                A = j(l, "Map"),
                O = j(Object, "create"),
                I = E ? E.prototype : void 0,
                N = I ? I.toString : void 0;

            function T(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function R(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function B(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function P(e, t, n) {
                var r = e[t];
                m.call(e, t) && F(r, n) && (void 0 !== n || t in e) || (e[t] = n)
            }

            function D(e, t) {
                for (var n = e.length; n--;)
                    if (F(e[n][0], t)) return n;
                return -1
            }

            function L(e) {
                return !(!Y(e) || (t = e, _ && _ in t)) && (function(e) {
                    var t = Y(e) ? b.call(e) : "";
                    return "[object Function]" == t || "[object GeneratorFunction]" == t
                }(e) || function(e) {
                    var t = !1;
                    if (null != e && "function" != typeof e.toString) try {
                        t = !!(e + "")
                    } catch (e) {}
                    return t
                }(e) ? w : a).test(function(e) {
                    if (null != e) {
                        try {
                            return v.call(e)
                        } catch (e) {}
                        try {
                            return e + ""
                        } catch (e) {}
                    }
                    return ""
                }(e));
                var t
            }

            function x(e, t, o, i) {
                if (!Y(e)) return e;
                for (var s = -1, a = (t = function(e, t) {
                        if (W(e)) return !1;
                        var o = typeof e;
                        if ("number" == o || "symbol" == o || "boolean" == o || null == e || $(e)) return !0;
                        return r.test(e) || !n.test(e) || null != t && e in Object(t)
                    }(t, e) ? [t] : function(e) {
                        return W(e) ? e : M(e)
                    }(t)).length, u = a - 1, c = e; null != c && ++s < a;) {
                    var f = k(t[s]),
                        l = o;
                    if (s != u) {
                        var h = c[f];
                        void 0 === (l = i ? i(h, f, c) : void 0) && (l = Y(h) ? h : C(t[s + 1]) ? [] : {})
                    }
                    P(c, f, l), c = c[f]
                }
                return e
            }

            function U(e, t) {
                var n, r, o = e.__data__;
                return ("string" == (r = typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map
            }

            function j(e, t) {
                var n = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return L(n) ? n : void 0
            }

            function C(e, t) {
                return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || u.test(e)) && e > -1 && e % 1 == 0 && e < t
            }
            T.prototype.clear = function() {
                this.__data__ = O ? O(null) : {}
            }, T.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }, T.prototype.get = function(e) {
                var t = this.__data__;
                if (O) {
                    var n = t[e];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return m.call(t, e) ? t[e] : void 0
            }, T.prototype.has = function(e) {
                var t = this.__data__;
                return O ? void 0 !== t[e] : m.call(t, e)
            }, T.prototype.set = function(e, t) {
                return this.__data__[e] = O && void 0 === t ? "__lodash_hash_undefined__" : t, this
            }, R.prototype.clear = function() {
                this.__data__ = []
            }, R.prototype.delete = function(e) {
                var t = this.__data__,
                    n = D(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : S.call(t, n, 1), !0)
            }, R.prototype.get = function(e) {
                var t = this.__data__,
                    n = D(t, e);
                return n < 0 ? void 0 : t[n][1]
            }, R.prototype.has = function(e) {
                return D(this.__data__, e) > -1
            }, R.prototype.set = function(e, t) {
                var n = this.__data__,
                    r = D(n, e);
                return r < 0 ? n.push([e, t]) : n[r][1] = t, this
            }, B.prototype.clear = function() {
                this.__data__ = {
                    hash: new T,
                    map: new(A || R),
                    string: new T
                }
            }, B.prototype.delete = function(e) {
                return U(this, e).delete(e)
            }, B.prototype.get = function(e) {
                return U(this, e).get(e)
            }, B.prototype.has = function(e) {
                return U(this, e).has(e)
            }, B.prototype.set = function(e, t) {
                return U(this, e).set(e, t), this
            };
            var M = q((function(e) {
                var t;
                e = null == (t = e) ? "" : function(e) {
                    if ("string" == typeof e) return e;
                    if ($(e)) return N ? N.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }(t);
                var n = [];
                return o.test(e) && n.push(""), e.replace(i, (function(e, t, r, o) {
                    n.push(r ? o.replace(s, "$1") : t || e)
                })), n
            }));

            function k(e) {
                if ("string" == typeof e || $(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }

            function q(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
                var n = function() {
                    var r = arguments,
                        o = t ? t.apply(this, r) : r[0],
                        i = n.cache;
                    if (i.has(o)) return i.get(o);
                    var s = e.apply(this, r);
                    return n.cache = i.set(o, s), s
                };
                return n.cache = new(q.Cache || B), n
            }

            function F(e, t) {
                return e === t || e != e && t != t
            }
            q.Cache = B;
            var W = Array.isArray;

            function Y(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function $(e) {
                return "symbol" == typeof e || function(e) {
                    return !!e && "object" == typeof e
                }(e) && "[object Symbol]" == b.call(e)
            }
            e.exports = function(e, t, n) {
                return null == e ? e : x(e, t, n)
            }
        }).call(this, n(6))
    }, function(e, t, n) {
        (function(t) {
            var n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                r = /^\w*$/,
                o = /^\./,
                i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                s = /\\(\\)?/g,
                a = /^\[object .+?Constructor\]$/,
                u = "object" == typeof t && t && t.Object === Object && t,
                c = "object" == typeof self && self && self.Object === Object && self,
                f = u || c || Function("return this")();
            var l, h = Array.prototype,
                p = Function.prototype,
                d = Object.prototype,
                y = f["__core-js_shared__"],
                g = (l = /[^.]+$/.exec(y && y.keys && y.keys.IE_PROTO || "")) ? "Symbol(src)_1." + l : "",
                _ = p.toString,
                v = d.hasOwnProperty,
                m = d.toString,
                b = RegExp("^" + _.call(v).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                w = f.Symbol,
                E = h.splice,
                S = U(f, "Map"),
                A = U(Object, "create"),
                O = w ? w.prototype : void 0,
                I = O ? O.toString : void 0;

            function N(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function T(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function R(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function B(e, t) {
                for (var n, r, o = e.length; o--;)
                    if ((n = e[o][0]) === (r = t) || n != n && r != r) return o;
                return -1
            }

            function P(e) {
                return !(!F(e) || (t = e, g && g in t)) && (function(e) {
                    var t = F(e) ? m.call(e) : "";
                    return "[object Function]" == t || "[object GeneratorFunction]" == t
                }(e) || function(e) {
                    var t = !1;
                    if (null != e && "function" != typeof e.toString) try {
                        t = !!(e + "")
                    } catch (e) {}
                    return t
                }(e) ? b : a).test(function(e) {
                    if (null != e) {
                        try {
                            return _.call(e)
                        } catch (e) {}
                        try {
                            return e + ""
                        } catch (e) {}
                    }
                    return ""
                }(e));
                var t
            }

            function D(e, t) {
                e = function(e, t) {
                    return 1 == t.length ? e : function(e, t) {
                        for (var n = 0, r = (t = j(t, e) ? [t] : L(t)).length; null != e && n < r;) e = e[M(t[n++])];
                        return n && n == r ? e : void 0
                    }(e, function(e, t, n) {
                        var r = -1,
                            o = e.length;
                        t < 0 && (t = -t > o ? 0 : o + t), (n = n > o ? o : n) < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
                        for (var i = Array(o); ++r < o;) i[r] = e[r + t];
                        return i
                    }(t, 0, -1))
                }(e, t = j(t, e) ? [t] : L(t));
                var n, r, o = M((r = (n = t) ? n.length : 0) ? n[r - 1] : void 0);
                return !(null != e && v.call(e, o)) || delete e[o]
            }

            function L(e) {
                return q(e) ? e : C(e)
            }

            function x(e, t) {
                var n, r, o = e.__data__;
                return ("string" == (r = typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map
            }

            function U(e, t) {
                var n = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return P(n) ? n : void 0
            }

            function j(e, t) {
                if (q(e)) return !1;
                var o = typeof e;
                return !("number" != o && "symbol" != o && "boolean" != o && null != e && !W(e)) || (r.test(e) || !n.test(e) || null != t && e in Object(t))
            }
            N.prototype.clear = function() {
                this.__data__ = A ? A(null) : {}
            }, N.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }, N.prototype.get = function(e) {
                var t = this.__data__;
                if (A) {
                    var n = t[e];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return v.call(t, e) ? t[e] : void 0
            }, N.prototype.has = function(e) {
                var t = this.__data__;
                return A ? void 0 !== t[e] : v.call(t, e)
            }, N.prototype.set = function(e, t) {
                return this.__data__[e] = A && void 0 === t ? "__lodash_hash_undefined__" : t, this
            }, T.prototype.clear = function() {
                this.__data__ = []
            }, T.prototype.delete = function(e) {
                var t = this.__data__,
                    n = B(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : E.call(t, n, 1), !0)
            }, T.prototype.get = function(e) {
                var t = this.__data__,
                    n = B(t, e);
                return n < 0 ? void 0 : t[n][1]
            }, T.prototype.has = function(e) {
                return B(this.__data__, e) > -1
            }, T.prototype.set = function(e, t) {
                var n = this.__data__,
                    r = B(n, e);
                return r < 0 ? n.push([e, t]) : n[r][1] = t, this
            }, R.prototype.clear = function() {
                this.__data__ = {
                    hash: new N,
                    map: new(S || T),
                    string: new N
                }
            }, R.prototype.delete = function(e) {
                return x(this, e).delete(e)
            }, R.prototype.get = function(e) {
                return x(this, e).get(e)
            }, R.prototype.has = function(e) {
                return x(this, e).has(e)
            }, R.prototype.set = function(e, t) {
                return x(this, e).set(e, t), this
            };
            var C = k((function(e) {
                var t;
                e = null == (t = e) ? "" : function(e) {
                    if ("string" == typeof e) return e;
                    if (W(e)) return I ? I.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }(t);
                var n = [];
                return o.test(e) && n.push(""), e.replace(i, (function(e, t, r, o) {
                    n.push(r ? o.replace(s, "$1") : t || e)
                })), n
            }));

            function M(e) {
                if ("string" == typeof e || W(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }

            function k(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
                var n = function() {
                    var r = arguments,
                        o = t ? t.apply(this, r) : r[0],
                        i = n.cache;
                    if (i.has(o)) return i.get(o);
                    var s = e.apply(this, r);
                    return n.cache = i.set(o, s), s
                };
                return n.cache = new(k.Cache || R), n
            }
            k.Cache = R;
            var q = Array.isArray;

            function F(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function W(e) {
                return "symbol" == typeof e || function(e) {
                    return !!e && "object" == typeof e
                }(e) && "[object Symbol]" == m.call(e)
            }
            e.exports = function(e, t) {
                return null == e || D(e, t)
            }
        }).call(this, n(6))
    }, function(e, t, n) {
        (function(e, n) {
            var r = "[object Arguments]",
                o = "[object Function]",
                i = "[object GeneratorFunction]",
                s = "[object Map]",
                a = "[object Set]",
                u = /\w*$/,
                c = /^\[object .+?Constructor\]$/,
                f = /^(?:0|[1-9]\d*)$/,
                l = {};
            l[r] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object DataView]"] = l["[object Boolean]"] = l["[object Date]"] = l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l[s] = l["[object Number]"] = l["[object Object]"] = l["[object RegExp]"] = l[a] = l["[object String]"] = l["[object Symbol]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = !0, l["[object Error]"] = l[o] = l["[object WeakMap]"] = !1;
            var h = "object" == typeof e && e && e.Object === Object && e,
                p = "object" == typeof self && self && self.Object === Object && self,
                d = h || p || Function("return this")(),
                y = t && !t.nodeType && t,
                g = y && "object" == typeof n && n && !n.nodeType && n,
                _ = g && g.exports === y;

            function v(e, t) {
                return e.set(t[0], t[1]), e
            }

            function m(e, t) {
                return e.add(t), e
            }

            function b(e, t, n, r) {
                var o = -1,
                    i = e ? e.length : 0;
                for (r && i && (n = e[++o]); ++o < i;) n = t(n, e[o], o, e);
                return n
            }

            function w(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "")
                } catch (e) {}
                return t
            }

            function E(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e, r) {
                    n[++t] = [r, e]
                })), n
            }

            function S(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }

            function A(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e) {
                    n[++t] = e
                })), n
            }
            var O, I = Array.prototype,
                N = Function.prototype,
                T = Object.prototype,
                R = d["__core-js_shared__"],
                B = (O = /[^.]+$/.exec(R && R.keys && R.keys.IE_PROTO || "")) ? "Symbol(src)_1." + O : "",
                P = N.toString,
                D = T.hasOwnProperty,
                L = T.toString,
                x = RegExp("^" + P.call(D).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                U = _ ? d.Buffer : void 0,
                j = d.Symbol,
                C = d.Uint8Array,
                M = S(Object.getPrototypeOf, Object),
                k = Object.create,
                q = T.propertyIsEnumerable,
                F = I.splice,
                W = Object.getOwnPropertySymbols,
                Y = U ? U.isBuffer : void 0,
                $ = S(Object.keys, Object),
                H = ge(d, "DataView"),
                K = ge(d, "Map"),
                G = ge(d, "Promise"),
                V = ge(d, "Set"),
                J = ge(d, "WeakMap"),
                z = ge(Object, "create"),
                X = we(H),
                Z = we(K),
                Q = we(G),
                ee = we(V),
                te = we(J),
                ne = j ? j.prototype : void 0,
                re = ne ? ne.valueOf : void 0;

            function oe(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function ie(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function se(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function ae(e) {
                this.__data__ = new ie(e)
            }

            function ue(e, t) {
                var n = Se(e) || function(e) {
                        return function(e) {
                            return function(e) {
                                return !!e && "object" == typeof e
                            }(e) && Ae(e)
                        }(e) && D.call(e, "callee") && (!q.call(e, "callee") || L.call(e) == r)
                    }(e) ? function(e, t) {
                        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                        return r
                    }(e.length, String) : [],
                    o = n.length,
                    i = !!o;
                for (var s in e) !t && !D.call(e, s) || i && ("length" == s || me(s, o)) || n.push(s);
                return n
            }

            function ce(e, t, n) {
                var r = e[t];
                D.call(e, t) && Ee(r, n) && (void 0 !== n || t in e) || (e[t] = n)
            }

            function fe(e, t) {
                for (var n = e.length; n--;)
                    if (Ee(e[n][0], t)) return n;
                return -1
            }

            function le(e, t, n, c, f, h, p) {
                var d;
                if (c && (d = h ? c(e, f, h, p) : c(e)), void 0 !== d) return d;
                if (!Ne(e)) return e;
                var y = Se(e);
                if (y) {
                    if (d = function(e) {
                            var t = e.length,
                                n = e.constructor(t);
                            t && "string" == typeof e[0] && D.call(e, "index") && (n.index = e.index, n.input = e.input);
                            return n
                        }(e), !t) return function(e, t) {
                        var n = -1,
                            r = e.length;
                        t || (t = Array(r));
                        for (; ++n < r;) t[n] = e[n];
                        return t
                    }(e, d)
                } else {
                    var g = ve(e),
                        _ = g == o || g == i;
                    if (Oe(e)) return function(e, t) {
                        if (t) return e.slice();
                        var n = new e.constructor(e.length);
                        return e.copy(n), n
                    }(e, t);
                    if ("[object Object]" == g || g == r || _ && !h) {
                        if (w(e)) return h ? e : {};
                        if (d = function(e) {
                                return "function" != typeof e.constructor || be(e) ? {} : (t = M(e), Ne(t) ? k(t) : {});
                                var t
                            }(_ ? {} : e), !t) return function(e, t) {
                            return de(e, _e(e), t)
                        }(e, function(e, t) {
                            return e && de(t, Te(t), e)
                        }(d, e))
                    } else {
                        if (!l[g]) return h ? e : {};
                        d = function(e, t, n, r) {
                            var o = e.constructor;
                            switch (t) {
                                case "[object ArrayBuffer]":
                                    return pe(e);
                                case "[object Boolean]":
                                case "[object Date]":
                                    return new o(+e);
                                case "[object DataView]":
                                    return function(e, t) {
                                        var n = t ? pe(e.buffer) : e.buffer;
                                        return new e.constructor(n, e.byteOffset, e.byteLength)
                                    }(e, r);
                                case "[object Float32Array]":
                                case "[object Float64Array]":
                                case "[object Int8Array]":
                                case "[object Int16Array]":
                                case "[object Int32Array]":
                                case "[object Uint8Array]":
                                case "[object Uint8ClampedArray]":
                                case "[object Uint16Array]":
                                case "[object Uint32Array]":
                                    return function(e, t) {
                                        var n = t ? pe(e.buffer) : e.buffer;
                                        return new e.constructor(n, e.byteOffset, e.length)
                                    }(e, r);
                                case s:
                                    return function(e, t, n) {
                                        return b(t ? n(E(e), !0) : E(e), v, new e.constructor)
                                    }(e, r, n);
                                case "[object Number]":
                                case "[object String]":
                                    return new o(e);
                                case "[object RegExp]":
                                    return function(e) {
                                        var t = new e.constructor(e.source, u.exec(e));
                                        return t.lastIndex = e.lastIndex, t
                                    }(e);
                                case a:
                                    return function(e, t, n) {
                                        return b(t ? n(A(e), !0) : A(e), m, new e.constructor)
                                    }(e, r, n);
                                case "[object Symbol]":
                                    return i = e, re ? Object(re.call(i)) : {}
                            }
                            var i
                        }(e, g, le, t)
                    }
                }
                p || (p = new ae);
                var S = p.get(e);
                if (S) return S;
                if (p.set(e, d), !y) var O = n ? function(e) {
                    return function(e, t, n) {
                        var r = t(e);
                        return Se(e) ? r : function(e, t) {
                            for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
                            return e
                        }(r, n(e))
                    }(e, Te, _e)
                }(e) : Te(e);
                return function(e, t) {
                    for (var n = -1, r = e ? e.length : 0; ++n < r && !1 !== t(e[n], n, e););
                }(O || e, (function(r, o) {
                    O && (r = e[o = r]), ce(d, o, le(r, t, n, c, o, e, p))
                })), d
            }

            function he(e) {
                return !(!Ne(e) || (t = e, B && B in t)) && (Ie(e) || w(e) ? x : c).test(we(e));
                var t
            }

            function pe(e) {
                var t = new e.constructor(e.byteLength);
                return new C(t).set(new C(e)), t
            }

            function de(e, t, n, r) {
                n || (n = {});
                for (var o = -1, i = t.length; ++o < i;) {
                    var s = t[o],
                        a = r ? r(n[s], e[s], s, n, e) : void 0;
                    ce(n, s, void 0 === a ? e[s] : a)
                }
                return n
            }

            function ye(e, t) {
                var n, r, o = e.__data__;
                return ("string" == (r = typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map
            }

            function ge(e, t) {
                var n = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return he(n) ? n : void 0
            }
            oe.prototype.clear = function() {
                this.__data__ = z ? z(null) : {}
            }, oe.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }, oe.prototype.get = function(e) {
                var t = this.__data__;
                if (z) {
                    var n = t[e];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return D.call(t, e) ? t[e] : void 0
            }, oe.prototype.has = function(e) {
                var t = this.__data__;
                return z ? void 0 !== t[e] : D.call(t, e)
            }, oe.prototype.set = function(e, t) {
                return this.__data__[e] = z && void 0 === t ? "__lodash_hash_undefined__" : t, this
            }, ie.prototype.clear = function() {
                this.__data__ = []
            }, ie.prototype.delete = function(e) {
                var t = this.__data__,
                    n = fe(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : F.call(t, n, 1), !0)
            }, ie.prototype.get = function(e) {
                var t = this.__data__,
                    n = fe(t, e);
                return n < 0 ? void 0 : t[n][1]
            }, ie.prototype.has = function(e) {
                return fe(this.__data__, e) > -1
            }, ie.prototype.set = function(e, t) {
                var n = this.__data__,
                    r = fe(n, e);
                return r < 0 ? n.push([e, t]) : n[r][1] = t, this
            }, se.prototype.clear = function() {
                this.__data__ = {
                    hash: new oe,
                    map: new(K || ie),
                    string: new oe
                }
            }, se.prototype.delete = function(e) {
                return ye(this, e).delete(e)
            }, se.prototype.get = function(e) {
                return ye(this, e).get(e)
            }, se.prototype.has = function(e) {
                return ye(this, e).has(e)
            }, se.prototype.set = function(e, t) {
                return ye(this, e).set(e, t), this
            }, ae.prototype.clear = function() {
                this.__data__ = new ie
            }, ae.prototype.delete = function(e) {
                return this.__data__.delete(e)
            }, ae.prototype.get = function(e) {
                return this.__data__.get(e)
            }, ae.prototype.has = function(e) {
                return this.__data__.has(e)
            }, ae.prototype.set = function(e, t) {
                var n = this.__data__;
                if (n instanceof ie) {
                    var r = n.__data__;
                    if (!K || r.length < 199) return r.push([e, t]), this;
                    n = this.__data__ = new se(r)
                }
                return n.set(e, t), this
            };
            var _e = W ? S(W, Object) : function() {
                    return []
                },
                ve = function(e) {
                    return L.call(e)
                };

            function me(e, t) {
                return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || f.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function be(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || T)
            }

            function we(e) {
                if (null != e) {
                    try {
                        return P.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }

            function Ee(e, t) {
                return e === t || e != e && t != t
            }(H && "[object DataView]" != ve(new H(new ArrayBuffer(1))) || K && ve(new K) != s || G && "[object Promise]" != ve(G.resolve()) || V && ve(new V) != a || J && "[object WeakMap]" != ve(new J)) && (ve = function(e) {
                var t = L.call(e),
                    n = "[object Object]" == t ? e.constructor : void 0,
                    r = n ? we(n) : void 0;
                if (r) switch (r) {
                    case X:
                        return "[object DataView]";
                    case Z:
                        return s;
                    case Q:
                        return "[object Promise]";
                    case ee:
                        return a;
                    case te:
                        return "[object WeakMap]"
                }
                return t
            });
            var Se = Array.isArray;

            function Ae(e) {
                return null != e && function(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                }(e.length) && !Ie(e)
            }
            var Oe = Y || function() {
                return !1
            };

            function Ie(e) {
                var t = Ne(e) ? L.call(e) : "";
                return t == o || t == i
            }

            function Ne(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function Te(e) {
                return Ae(e) ? ue(e) : function(e) {
                    if (!be(e)) return $(e);
                    var t = [];
                    for (var n in Object(e)) D.call(e, n) && "constructor" != n && t.push(n);
                    return t
                }(e)
            }
            n.exports = function(e) {
                return le(e, !0, !0)
            }
        }).call(this, n(6), n(30)(e))
    }, function(e, t, n) {
        n(14), e.exports = n(15)
    }, function(e, t, n) {
        var r = function(e) {
            "use strict";
            var t = Object.prototype,
                n = t.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                o = r.iterator || "@@iterator",
                i = r.asyncIterator || "@@asyncIterator",
                s = r.toStringTag || "@@toStringTag";

            function a(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                a({}, "")
            } catch (e) {
                a = function(e, t, n) {
                    return e[t] = n
                }
            }

            function u(e, t, n, r) {
                var o = t && t.prototype instanceof l ? t : l,
                    i = Object.create(o.prototype),
                    s = new S(r || []);
                return i._invoke = function(e, t, n) {
                    var r = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === o) throw i;
                            return O()
                        }
                        for (n.method = o, n.arg = i;;) {
                            var s = n.delegate;
                            if (s) {
                                var a = b(s, n);
                                if (a) {
                                    if (a === f) continue;
                                    return a
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r) throw r = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var u = c(e, t, n);
                            if ("normal" === u.type) {
                                if (r = n.done ? "completed" : "suspendedYield", u.arg === f) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
                        }
                    }
                }(e, n, s), i
            }

            function c(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = u;
            var f = {};

            function l() {}

            function h() {}

            function p() {}
            var d = {};
            d[o] = function() {
                return this
            };
            var y = Object.getPrototypeOf,
                g = y && y(y(A([])));
            g && g !== t && n.call(g, o) && (d = g);
            var _ = p.prototype = l.prototype = Object.create(d);

            function v(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    a(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function m(e, t) {
                var r;
                this._invoke = function(o, i) {
                    function s() {
                        return new t((function(r, s) {
                            ! function r(o, i, s, a) {
                                var u = c(e[o], e, i);
                                if ("throw" !== u.type) {
                                    var f = u.arg,
                                        l = f.value;
                                    return l && "object" == typeof l && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                                        r("next", e, s, a)
                                    }), (function(e) {
                                        r("throw", e, s, a)
                                    })) : t.resolve(l).then((function(e) {
                                        f.value = e, s(f)
                                    }), (function(e) {
                                        return r("throw", e, s, a)
                                    }))
                                }
                                a(u.arg)
                            }(o, i, r, s)
                        }))
                    }
                    return r = r ? r.then(s, s) : s()
                }
            }

            function b(e, t) {
                var n = e.iterator[t.method];
                if (void 0 === n) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return f;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return f
                }
                var r = c(n, e.iterator, t.arg);
                if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, f;
                var o = r.arg;
                return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
            }

            function w(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function E(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function S(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(w, this), this.reset(!0)
            }

            function A(e) {
                if (e) {
                    var t = e[o];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1,
                            i = function t() {
                                for (; ++r < e.length;)
                                    if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t
                            };
                        return i.next = i
                    }
                }
                return {
                    next: O
                }
            }

            function O() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return h.prototype = _.constructor = p, p.constructor = h, h.displayName = a(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, a(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
            }, e.awrap = function(e) {
                return {
                    __await: e
                }
            }, v(m.prototype), m.prototype[i] = function() {
                return this
            }, e.AsyncIterator = m, e.async = function(t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var s = new m(u(t, n, r, o), i);
                return e.isGeneratorFunction(n) ? s : s.next().then((function(e) {
                    return e.done ? e.value : s.next()
                }))
            }, v(_), a(_, s, "Generator"), _[o] = function() {
                return this
            }, _.toString = function() {
                return "[object Generator]"
            }, e.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                    function n() {
                        for (; t.length;) {
                            var r = t.pop();
                            if (r in e) return n.value = r, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, e.values = A, S.prototype = {
                constructor: S,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
                        for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;

                    function r(n, r) {
                        return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o],
                            s = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var a = n.call(i, "catchLoc"),
                                u = n.call(i, "finallyLoc");
                            if (a && u) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                            } else if (a) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = e, s.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(s)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), f
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                E(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: A(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), f
                }
            }, e
        }(e.exports);
        try {
            regeneratorRuntime = r
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(r)
        }
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n), Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                })
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            i = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                return o(t, e), t
            },
            s = (this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            })(n(40)),
            a = n(39),
            u = n(28),
            c = n(29),
            f = n(38),
            l = n(31),
            h = n(37),
            p = i(n(36)).version;
        s.default.registerVersion(p);
        try {
            a.registerAuth(s.default), u.registerFunctions(s.default), c.registerStorage(s.default), h.registerDatabase(s.default), f.registerRealtime(s.default), l.registerAnalytics(s.default)
        } catch (e) {}
        try {
            window.cloudbase = s.default
        } catch (e) {}
        t.default = s.default, e.exports = s.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ERRORS = void 0, t.ERRORS = {
            INVALID_PARAMS: "INVALID_PARAMS",
            INVALID_SYNTAX: "INVALID_SYNTAX",
            INVALID_OPERATION: "INVALID_OPERATION",
            OPERATION_FAIL: "OPERATION_FAIL",
            NETWORK_ERROR: "NETWORK_ERROR",
            UNKOWN_ERROR: "UNKOWN_ERROR"
        }
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n), Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                })
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            i = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                return o(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.useDefaultAdapter = t.useAdapters = t.RUNTIME = void 0;
        var s, a = i(n(18)),
            u = n(4);
        ! function(e) {
            e.WEB = "web", e.WX_MP = "wx_mp"
        }(s = t.RUNTIME || (t.RUNTIME = {})), t.useAdapters = function(e) {
            for (var t = 0, n = u.isArray(e) ? e : [e]; t < n.length; t++) {
                var r = n[t],
                    o = r.isMatch,
                    i = r.genAdapter,
                    s = r.runtime;
                if (o()) return {
                    adapter: i(),
                    runtime: s
                }
            }
        }, t.useDefaultAdapter = function() {
            return {
                adapter: a.genAdapter(),
                runtime: s.WEB
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r, o = this && this.__extends || (r = function(e, t) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
            i = this && this.__assign || function() {
                return (i = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            s = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            a = this && this.__generator || function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.WebRequest = t.genAdapter = void 0;
        var u = n(3),
            c = n(4),
            f = n(8),
            l = function(e) {
                function t(t) {
                    var n = e.call(this) || this,
                        r = t.timeout,
                        o = t.timeoutMsg,
                        i = t.restrictedMethods;
                    return n._timeout = r || 0, n._timeoutMsg = o || "čŻˇćąčśćś", n._restrictedMethods = i || ["get", "post", "upload", "download"], n
                }
                return o(t, e), t.prototype.get = function(e) {
                    return this._request(i(i({}, e), {
                        method: "get"
                    }), this._restrictedMethods.includes("get"))
                }, t.prototype.post = function(e) {
                    return this._request(i(i({}, e), {
                        method: "post"
                    }), this._restrictedMethods.includes("post"))
                }, t.prototype.put = function(e) {
                    return this._request(i(i({}, e), {
                        method: "put"
                    }))
                }, t.prototype.upload = function(e) {
                    var t = e.data,
                        n = e.file,
                        r = e.name,
                        o = new FormData;
                    for (var s in t) o.append(s, t[s]);
                    return o.append("key", r), o.append("file", n), this._request(i(i({}, e), {
                        data: o,
                        method: "post"
                    }), this._restrictedMethods.includes("upload"))
                }, t.prototype.download = function(e) {
                    return s(this, void 0, void 0, (function() {
                        var t, n, r, o;
                        return a(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, , 3]), [4, this.get(i(i({}, e), {
                                        headers: {},
                                        responseType: "blob"
                                    }))];
                                case 1:
                                    return t = s.sent().data, n = window.URL.createObjectURL(new Blob([t])), r = decodeURIComponent(new URL(e.url).pathname.split("/").pop() || ""), (o = document.createElement("a")).href = n, o.setAttribute("download", r), o.style.display = "none", document.body.appendChild(o), o.click(), window.URL.revokeObjectURL(n), document.body.removeChild(o), [3, 3];
                                case 2:
                                    return s.sent(), [3, 3];
                                case 3:
                                    return [2, new Promise((function(t) {
                                        t({
                                            statusCode: 200,
                                            tempFilePath: e.url
                                        })
                                    }))]
                            }
                        }))
                    }))
                }, t.prototype._request = function(e, t) {
                    var n = this;
                    void 0 === t && (t = !1);
                    var r = String(e.method).toLowerCase() || "get";
                    return new Promise((function(o) {
                        var i, s, a = e.url,
                            u = e.headers,
                            l = void 0 === u ? {} : u,
                            h = e.data,
                            p = e.responseType,
                            d = e.withCredentials,
                            y = e.body,
                            g = e.onUploadProgress,
                            _ = c.formatUrl(f.getProtocol(), a, "get" === r ? h : {}),
                            v = new XMLHttpRequest;
                        for (var m in v.open(r, _), p && (v.responseType = p), l) v.setRequestHeader(m, l[m]);
                        g && v.upload.addEventListener("progress", g), v.onreadystatechange = function() {
                            var e = {};
                            if (4 === v.readyState) {
                                var t = v.getAllResponseHeaders().trim().split(/[\r\n]+/),
                                    n = {};
                                t.forEach((function(e) {
                                    var t = e.split(": "),
                                        r = t.shift().toLowerCase(),
                                        o = t.join(": ");
                                    n[r] = o
                                })), e.header = n, e.statusCode = v.status;
                                try {
                                    e.data = "blob" === p ? v.response : JSON.parse(v.responseText)
                                } catch (t) {
                                    e.data = "blob" === p ? v.response : v.responseText
                                }
                                clearTimeout(i), o(e)
                            }
                        }, t && n._timeout && (i = setTimeout((function() {
                            console.warn(n._timeoutMsg), v.abort()
                        }), n._timeout)), s = c.isFormData(h) ? h : "application/x-www-form-urlencoded" === l["content-type"] ? c.toQueryString(h) : y || (h ? JSON.stringify(h) : void 0), d && (v.withCredentials = !0), v.send(s)
                    }))
                }, t
            }(u.AbstractSDKRequest);
        t.WebRequest = l, t.genAdapter = function() {
            return {
                root: window,
                reqClass: l,
                wsClass: WebSocket,
                localStorage: localStorage,
                sessionStorage: sessionStorage
            }
        }
    }, function(e, t, n) {
        var r;
        e.exports = (r = n(5), n(20), n(21), r.HmacSHA256)
    }, function(e, t, n) {
        var r;
        e.exports = (r = n(5), function(e) {
            var t = r,
                n = t.lib,
                o = n.WordArray,
                i = n.Hasher,
                s = t.algo,
                a = [],
                u = [];
            ! function() {
                function t(t) {
                    for (var n = e.sqrt(t), r = 2; r <= n; r++)
                        if (!(t % r)) return !1;
                    return !0
                }

                function n(e) {
                    return 4294967296 * (e - (0 | e)) | 0
                }
                for (var r = 2, o = 0; o < 64;) t(r) && (o < 8 && (a[o] = n(e.pow(r, .5))), u[o] = n(e.pow(r, 1 / 3)), o++), r++
            }();
            var c = [],
                f = s.SHA256 = i.extend({
                    _doReset: function() {
                        this._hash = new o.init(a.slice(0))
                    },
                    _doProcessBlock: function(e, t) {
                        for (var n = this._hash.words, r = n[0], o = n[1], i = n[2], s = n[3], a = n[4], f = n[5], l = n[6], h = n[7], p = 0; p < 64; p++) {
                            if (p < 16) c[p] = 0 | e[t + p];
                            else {
                                var d = c[p - 15],
                                    y = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3,
                                    g = c[p - 2],
                                    _ = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
                                c[p] = y + c[p - 7] + _ + c[p - 16]
                            }
                            var v = r & o ^ r & i ^ o & i,
                                m = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                                b = h + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & f ^ ~a & l) + u[p] + c[p];
                            h = l, l = f, f = a, a = s + b | 0, s = i, i = o, o = r, r = b + (m + v) | 0
                        }
                        n[0] = n[0] + r | 0, n[1] = n[1] + o | 0, n[2] = n[2] + i | 0, n[3] = n[3] + s | 0, n[4] = n[4] + a | 0, n[5] = n[5] + f | 0, n[6] = n[6] + l | 0, n[7] = n[7] + h | 0
                    },
                    _doFinalize: function() {
                        var t = this._data,
                            n = t.words,
                            r = 8 * this._nDataBytes,
                            o = 8 * t.sigBytes;
                        return n[o >>> 5] |= 128 << 24 - o % 32, n[14 + (o + 64 >>> 9 << 4)] = e.floor(r / 4294967296), n[15 + (o + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * n.length, this._process(), this._hash
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        return e._hash = this._hash.clone(), e
                    }
                });
            t.SHA256 = i._createHelper(f), t.HmacSHA256 = i._createHmacHelper(f)
        }(Math), r.SHA256)
    }, function(e, t, n) {
        var r, o, i, s;
        e.exports = (r = n(5), i = (o = r).lib.Base, s = o.enc.Utf8, void(o.algo.HMAC = i.extend({
            init: function(e, t) {
                e = this._hasher = new e.init, "string" == typeof t && (t = s.parse(t));
                var n = e.blockSize,
                    r = 4 * n;
                t.sigBytes > r && (t = e.finalize(t)), t.clamp();
                for (var o = this._oKey = t.clone(), i = this._iKey = t.clone(), a = o.words, u = i.words, c = 0; c < n; c++) a[c] ^= 1549556828, u[c] ^= 909522486;
                o.sigBytes = i.sigBytes = r, this.reset()
            },
            reset: function() {
                var e = this._hasher;
                e.reset(), e.update(this._iKey)
            },
            update: function(e) {
                return this._hasher.update(e), this
            },
            finalize: function(e) {
                var t = this._hasher,
                    n = t.finalize(e);
                return t.reset(), t.finalize(this._oKey.clone().concat(n))
            }
        })))
    }, function(e, t, n) {
        var r, o, i;
        e.exports = (i = n(5), o = (r = i).lib.WordArray, r.enc.Base64 = {
            stringify: function(e) {
                var t = e.words,
                    n = e.sigBytes,
                    r = this._map;
                e.clamp();
                for (var o = [], i = 0; i < n; i += 3)
                    for (var s = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) o.push(r.charAt(s >>> 6 * (3 - a) & 63));
                var u = r.charAt(64);
                if (u)
                    for (; o.length % 4;) o.push(u);
                return o.join("")
            },
            parse: function(e) {
                var t = e.length,
                    n = this._map,
                    r = this._reverseMap;
                if (!r) {
                    r = this._reverseMap = [];
                    for (var i = 0; i < n.length; i++) r[n.charCodeAt(i)] = i
                }
                var s = n.charAt(64);
                if (s) {
                    var a = e.indexOf(s); - 1 !== a && (t = a)
                }
                return function(e, t, n) {
                    for (var r = [], i = 0, s = 0; s < t; s++)
                        if (s % 4) {
                            var a = n[e.charCodeAt(s - 1)] << s % 4 * 2,
                                u = n[e.charCodeAt(s)] >>> 6 - s % 4 * 2;
                            r[i >>> 2] |= (a | u) << 24 - i % 4 * 8, i++
                        } return o.create(r, i)
                }(e, t, r)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }, i.enc.Base64)
    }, function(e, t, n) {
        var r;
        e.exports = (r = n(5), r.enc.Utf8)
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            var r, o = this && this.__extends || (r = function(e, t) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(e, t)
                }, function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }),
                i = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function s(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                s = this && this.__generator || function(e, t) {
                    var n, r, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CloudbaseCache = void 0;
            var a = n(3),
                u = n(4),
                c = n(7),
                f = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n._root = t, t.tcbCacheObject || (t.tcbCacheObject = {}), n
                    }
                    return o(t, e), t.prototype.setItem = function(e, t) {
                        this._root.tcbCacheObject[e] = t
                    }, t.prototype.getItem = function(e) {
                        return this._root.tcbCacheObject[e]
                    }, t.prototype.removeItem = function(e) {
                        delete this._root.tcbCacheObject[e]
                    }, t.prototype.clear = function() {
                        delete this._root.tcbCacheObject
                    }, t
                }(a.AbstractStorage);

            function l(e, t) {
                switch (e) {
                    case "local":
                        return t.localStorage ? t.localStorage : (u.printWarn(c.ERRORS.INVALID_PARAMS, "localStorage is not supported on current platform"), new f(t.root));
                    case "none":
                        return new f(t.root);
                    case "session":
                        return t.sessionStorage ? t.sessionStorage : (u.printWarn(c.ERRORS.INVALID_PARAMS, "sessionStorage is not supported on current platform"), new f(t.root));
                    default:
                        return t.localStorage ? t.localStorage : (u.printWarn(c.ERRORS.INVALID_PARAMS, "localStorage is not supported on current platform"), new f(t.root))
                }
            }
            var h = function() {
                function t(e) {
                    this.keys = {};
                    var t = e.persistence,
                        n = e.platformInfo,
                        r = void 0 === n ? {} : n,
                        o = e.keys,
                        i = void 0 === o ? {} : o,
                        s = e.alwaysLocalKeys,
                        a = void 0 === s ? [] : s;
                    this._platformInfo = r, this._alwaysLocalKeys = a, this._storage || (this._persistence = r.adapter.primaryStorage || t, this._storage = l(this._persistence, r.adapter), this.keys = i)
                }
                return Object.defineProperty(t.prototype, "mode", {
                    get: function() {
                        return this._storage.mode || "sync"
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "persistence", {
                    get: function() {
                        return this._persistence
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.updatePersistence = function(e) {
                    if ("async" !== this.mode) {
                        if (e !== this._persistence) {
                            var t = "local" === this._persistence;
                            this._persistence = e;
                            var n = l(e, this._platformInfo.adapter);
                            for (var r in this.keys) {
                                var o = this.keys[r];
                                if (!t || !this._alwaysLocalKeys.includes(r)) {
                                    var i = this._storage.getItem(o);
                                    u.isUndefined(i) || u.isNull(i) || (n.setItem(o, i), this._storage.removeItem(o))
                                }
                            }
                            this._storage = n
                        }
                    } else u.printWarn(c.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use updatePersistenceAsync insteed")
                }, t.prototype.updatePersistenceAsync = function(e) {
                    return i(this, void 0, void 0, (function() {
                        var t, n, r, o, i, a, c, f;
                        return s(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (e === this._persistence) return [2];
                                    for (o in t = "local" === this._persistence, this._persistence = e, n = l(e, this._platformInfo.adapter), r = [], this.keys) r.push(o);
                                    i = 0, s.label = 1;
                                case 1:
                                    return i < r.length ? (a = r[i], c = this.keys[a], t && this._alwaysLocalKeys.includes(a) ? [3, 4] : [4, this._storage.getItem(c)]) : [3, 5];
                                case 2:
                                    return f = s.sent(), u.isUndefined(f) || u.isNull(f) ? [3, 4] : (n.setItem(c, f), [4, this._storage.removeItem(c)]);
                                case 3:
                                    s.sent(), s.label = 4;
                                case 4:
                                    return i++, [3, 1];
                                case 5:
                                    return this._storage = n, [2]
                            }
                        }))
                    }))
                }, t.prototype.setStore = function(e, t, n) {
                    if ("async" !== this.mode) {
                        if (this._storage) try {
                            var r = {
                                version: n || "localCachev1",
                                content: t
                            };
                            this._storage.setItem(e, JSON.stringify(r))
                        } catch (e) {
                            throw new Error(JSON.stringify({
                                code: c.ERRORS.OPERATION_FAIL,
                                msg: "[" + c.getSdkName() + "][" + c.ERRORS.OPERATION_FAIL + "]setStore failed",
                                info: e
                            }))
                        }
                    } else u.printWarn(c.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use setStoreAsync insteed")
                }, t.prototype.setStoreAsync = function(e, t, n) {
                    return i(this, void 0, void 0, (function() {
                        var r;
                        return s(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    if (!this._storage) return [2];
                                    o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), r = {
                                        version: n || "localCachev1",
                                        content: t
                                    }, [4, this._storage.setItem(e, JSON.stringify(r))];
                                case 2:
                                    return o.sent(), [3, 4];
                                case 3:
                                    return o.sent(), [2];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, t.prototype.getStore = function(t, n) {
                    var r;
                    if ("async" !== this.mode) {
                        try {
                            if (void 0 !== e && (null === (r = e.env) || void 0 === r ? void 0 : r.tcb_token)) return e.env.tcb_token;
                            if (!this._storage) return ""
                        } catch (e) {
                            return ""
                        }
                        n = n || "localCachev1";
                        var o = this._storage.getItem(t);
                        return o && o.indexOf(n) >= 0 ? JSON.parse(o).content : ""
                    }
                    u.printWarn(c.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use getStoreAsync insteed")
                }, t.prototype.getStoreAsync = function(t, n) {
                    var r;
                    return i(this, void 0, void 0, (function() {
                        var o;
                        return s(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    try {
                                        if (void 0 !== e && (null === (r = e.env) || void 0 === r ? void 0 : r.tcb_token)) return [2, e.env.tcb_token];
                                        if (!this._storage) return [2, ""]
                                    } catch (e) {
                                        return [2, ""]
                                    }
                                    return n = n || "localCachev1", [4, this._storage.getItem(t)];
                                case 1:
                                    return (o = i.sent()) && o.indexOf(n) >= 0 ? [2, JSON.parse(o).content] : [2, ""]
                            }
                        }))
                    }))
                }, t.prototype.removeStore = function(e) {
                    "async" !== this.mode ? this._storage.removeItem(e) : u.printWarn(c.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use removeStoreAsync insteed")
                }, t.prototype.removeStoreAsync = function(e) {
                    return i(this, void 0, void 0, (function() {
                        return s(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this._storage.removeItem(e)];
                                case 1:
                                    return t.sent(), [2]
                            }
                        }))
                    }))
                }, t
            }();
            t.CloudbaseCache = h
        }).call(this, n(9))
    }, function(e, t, n) {
        "use strict";
        var r, o = this && this.__extends || (r = function(e, t) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
            i = this && this.__spreadArrays || function() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    o = 0;
                for (t = 0; t < n; t++)
                    for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
                return r
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.removeEventListener = t.activateEvent = t.addEventListener = t.CloudbaseEventEmitter = t.IErrorEvent = t.CloudbaseEvent = void 0;
        var s = n(4);
        var a = function(e, t) {
            this.data = t || null, this.name = e
        };
        t.CloudbaseEvent = a;
        var u = function(e) {
            function t(t, n) {
                var r = e.call(this, "error", {
                    error: t,
                    data: n
                }) || this;
                return r.error = t, r
            }
            return o(t, e), t
        }(a);
        t.IErrorEvent = u;
        var c = function() {
            function e() {
                this._listeners = {}
            }
            return e.prototype.on = function(e, t) {
                return function(e, t, n) {
                    n[e] = n[e] || [], n[e].push(t)
                }(e, t, this._listeners), this
            }, e.prototype.off = function(e, t) {
                return function(e, t, n) {
                    if (null == n ? void 0 : n[e]) {
                        var r = n[e].indexOf(t); - 1 !== r && n[e].splice(r, 1)
                    }
                }(e, t, this._listeners), this
            }, e.prototype.fire = function(e, t) {
                if (s.isInstanceOf(e, u)) return console.error(e.error), this;
                var n = s.isString(e) ? new a(e, t || {}) : e,
                    r = n.name;
                if (this._listens(r)) {
                    n.target = this;
                    for (var o = 0, c = this._listeners[r] ? i(this._listeners[r]) : []; o < c.length; o++) {
                        c[o].call(this, n)
                    }
                }
                return this
            }, e.prototype._listens = function(e) {
                return this._listeners[e] && this._listeners[e].length > 0
            }, e
        }();
        t.CloudbaseEventEmitter = c;
        var f = new c;
        t.addEventListener = function(e, t) {
            f.on(e, t)
        }, t.activateEvent = function(e, t) {
            void 0 === t && (t = {}), f.fire(e, t)
        }, t.removeEventListener = function(e, t) {
            f.off(e, t)
        }
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n), Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                })
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            o = this && this.__exportStar || function(e, t) {
                for (var n in e) "default" === n || t.hasOwnProperty(n) || r(t, e, n)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o(n(27), t)
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            o = this && this.__generator || function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.catchErrorsDecorator = void 0;
        var i = n(4),
            s = n(7),
            a = !1;
        "undefined" != typeof navigator && navigator.userAgent && (a = -1 !== navigator.userAgent.indexOf("Firefox"));
        var u = a ? /(\.js\/)?__decorate(\$\d+)?<@.*\d$/ : /(\/\w+\.js\.)?__decorate(\$\d+)?\s*\(.*\)$/,
            c = /https?\:\/\/.+\:\d*\/.*\.js\:\d+\:\d+/;

        function f(e) {
            var t = e.err,
                n = e.className,
                r = e.methodName,
                o = e.sourceLink;
            if (!o) return null;
            var i, s = t.stack.split("\n"),
                u = a ? /^catchErrorsDecorator\/<\/descriptor.value@.*\d$/ : new RegExp(n + "\\.descriptor.value\\s*\\[as\\s" + r + "\\]\\s*\\(.*\\)$"),
                f = a ? /^catchErrorsDecorator\/<\/descriptor.value/ : new RegExp(n + "\\.descriptor.value\\s*\\[as\\s" + r + "\\]"),
                l = s.findIndex((function(e) {
                    return u.test(e)
                }));
            if (-1 !== l) {
                var h = s.filter((function(e, t) {
                    return t > l
                }));
                h.unshift(s[l].replace(f, n + "." + r).replace(c, o)), (i = new Error).stack = (a ? "@debugger" : "Error") + "\n" + h.join("\n")
            }
            return i
        }
        t.catchErrorsDecorator = function(e) {
            var t = e.mode,
                n = void 0 === t ? "async" : t,
                a = e.customInfo,
                l = void 0 === a ? {} : a,
                h = e.title,
                p = e.messages,
                d = void 0 === p ? [] : p;
            return function(e, t, a) {
                if (s.IS_DEBUG_MODE) {
                    var p = l.className || e.constructor.name,
                        y = l.methodName || t,
                        g = a.value,
                        _ = function(e) {
                            var t = "",
                                n = e.stack.split("\n"),
                                r = n.findIndex((function(e) {
                                    return u.test(e)
                                }));
                            if (-1 !== r) {
                                var o = c.exec(n[r + 1] || "");
                                t = o ? o[0] : ""
                            }
                            return t
                        }(new Error);
                    a.value = "sync" === n ? function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = f({
                            err: new Error,
                            className: p,
                            methodName: y,
                            sourceLink: _
                        });
                        try {
                            return g.apply(this, e)
                        } catch (e) {
                            var r = e,
                                o = e.message,
                                s = {
                                    title: h || p + "." + y + " failed",
                                    content: [{
                                        type: "error",
                                        body: e
                                    }]
                                };
                            if (o && /^\{.*\}$/.test(o)) {
                                var a = JSON.parse(o);
                                s.subtitle = o, a.code && (n ? (n.code = a.code, n.msg = a.msg) : (e.code = a.code, e.message = a.msg), r = n || e, s.content = d.map((function(e) {
                                    return {
                                        type: "info",
                                        body: e
                                    }
                                })))
                            }
                            throw i.printGroupLog(s), r
                        }
                    } : function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return r(this, void 0, void 0, (function() {
                            var t, n, r, s, a, u;
                            return o(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        t = f({
                                            err: new Error,
                                            className: p,
                                            methodName: y,
                                            sourceLink: _
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, g.apply(this, e)];
                                    case 2:
                                        return [2, o.sent()];
                                    case 3:
                                        throw n = o.sent(), r = n, s = n.message, a = {
                                            title: h || p + "." + y + " failed",
                                            content: [{
                                                type: "error",
                                                body: n
                                            }]
                                        }, s && /^\{.*\}$/.test(s) && (u = JSON.parse(s), a.subtitle = u, u.code && (t ? (t.code = u.code, t.message = u.msg) : (n.code = u.code, n.message = u.msg), r = t || n, a.content = d.map((function(e) {
                                            return {
                                                type: "info",
                                                body: e
                                            }
                                        })))), i.printGroupLog(a), r;
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }
                }
            }
        }
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "registerFunctions", (function() {
            return d
        }));
        var r = n(0),
            o = function(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            },
            i = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            },
            s = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            a = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            u = r.constants.getSdkName,
            c = r.constants.ERRORS,
            f = r.constants.COMMUNITY_SITE_URL,
            l = r.utils.execCallback,
            h = r.helpers.catchErrorsDecorator,
            p = {
                name: "functions",
                entity: {
                    callFunction: (new(function() {
                        function e() {}
                        return e.prototype.callFunction = function(e, t) {
                            return s(this, void 0, void 0, (function() {
                                var n, r, o, i, s, f, h, p, d, y, g, _;
                                return a(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (n = e.name, r = e.data, o = e.query, i = e.parse, s = e.search, !n) throw new Error(JSON.stringify({
                                                code: c.INVALID_PARAMS,
                                                msg: "[functions.callFunction] invalid function name"
                                            }));
                                            try {
                                                f = r ? JSON.stringify(r) : ""
                                            } catch (e) {
                                                throw new Error(JSON.stringify({
                                                    code: c.INVALID_PARAMS,
                                                    msg: "[functions.callFunction] invalid data"
                                                }))
                                            }
                                            h = "functions.invokeFunction", p = {
                                                inQuery: o,
                                                parse: i,
                                                search: s,
                                                function_name: n,
                                                request_data: f
                                            }, d = this.request, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, d.send(h, p)];
                                        case 2:
                                            if ((y = a.sent()).code) return [2, l(t, null, y)];
                                            if (g = y.data.response_data, i) return [2, l(t, null, {
                                                result: g,
                                                requestId: y.requestId
                                            })];
                                            try {
                                                return g = JSON.parse(y.data.response_data), [2, l(t, null, {
                                                    result: g,
                                                    requestId: y.requestId
                                                })]
                                            } catch (e) {
                                                l(t, new Error("[" + u() + "][" + c.INVALID_PARAMS + "][functions.callFunction] response data must be json"))
                                            }
                                            return [3, 4];
                                        case 3:
                                            return _ = a.sent(), l(t, _), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }, o([h({
                            customInfo: {
                                className: "Cloudbase",
                                methodName: "callFunction"
                            },
                            title: "ĺ˝ć°č°ç¨ĺ¤ąč´Ľ",
                            messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ callFunction() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ä¸ćŻĺŚĺ­ĺ¨ć­¤ĺ˝ć°", "  3 - ĺ˝ć°ĺŽĺ¨č§ĺćŻĺŚéĺśäşĺ˝ĺçťĺ˝çśćčŽżéŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + f]
                        }), i("design:type", Function), i("design:paramtypes", [Object, Function]), i("design:returntype", Promise)], e.prototype, "callFunction", null), e
                    }())).callFunction
                }
            };
        try {
            cloudbase.registerComponent(p)
        } catch (e) {}

        function d(e) {
            try {
                e.registerComponent(p)
            } catch (e) {
                console.warn(e)
            }
        }
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "registerStorage", (function() {
            return v
        }));
        var r = n(0),
            o = function(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            },
            i = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            },
            s = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            a = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            u = r.constants.getSdkName,
            c = r.constants.ERRORS,
            f = r.constants.COMMUNITY_SITE_URL,
            l = r.utils.isArray,
            h = r.utils.isString,
            p = r.utils.isPalinObject,
            d = r.utils.execCallback,
            y = r.helpers.catchErrorsDecorator,
            g = new(function() {
                function e() {}
                return e.prototype.uploadFile = function(e, t) {
                    return s(this, void 0, void 0, (function() {
                        var n, r, o, i, s, f, l, p, y, g, _, v, m, b, w;
                        return a(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (n = e.cloudPath, r = e.filePath, o = e.onUploadProgress, !h(n) || !r) throw new Error(JSON.stringify({
                                        code: c.INVALID_PARAMS,
                                        msg: "[storage.uploadFile] invalid params"
                                    }));
                                    return "storage.getUploadMetadata", [4, (i = this.request).send("storage.getUploadMetadata", {
                                        path: n
                                    })];
                                case 1:
                                    return s = a.sent(), f = s.data, l = f.url, p = f.authorization, y = f.token, g = f.fileId, _ = f.cosFileId, v = f.download_url, m = s.requestId, b = {
                                        key: n,
                                        signature: p,
                                        "x-cos-meta-fileid": _,
                                        success_action_status: "201",
                                        "x-cos-security-token": y
                                    }, [4, i.upload({
                                        url: l,
                                        data: b,
                                        file: r,
                                        name: n,
                                        onUploadProgress: o
                                    })];
                                case 2:
                                    return 201 === (w = a.sent()).statusCode ? [2, d(t, null, {
                                        fileID: g,
                                        download_url: v,
                                        requestId: m
                                    })] : [2, d(t, new Error("[" + u() + "][" + c.OPERATION_FAIL + "][storage]:" + w.data))]
                            }
                        }))
                    }))
                }, e.prototype.getUploadMetadata = function(e, t) {
                    return s(this, void 0, void 0, (function() {
                        var n, r, o, i, s;
                        return a(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (n = e.cloudPath, !h(n)) throw new Error(JSON.stringify({
                                        code: c.INVALID_PARAMS,
                                        msg: "[storage.getUploadMetadata] invalid cloudPath"
                                    }));
                                    r = this.request, o = "storage.getUploadMetadata", a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, r.send(o, {
                                        path: n
                                    })];
                                case 2:
                                    return i = a.sent(), [2, d(t, null, i)];
                                case 3:
                                    return s = a.sent(), [2, d(t, s)];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.deleteFile = function(e, t) {
                    return s(this, void 0, void 0, (function() {
                        var n, r, o, i, s, u;
                        return a(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!(n = e.fileList) || !l(n) || 0 === n.length) throw new Error(JSON.stringify({
                                        code: c.INVALID_PARAMS,
                                        msg: "[storage.deleteFile] fileList must not be empty"
                                    }));
                                    for (r = 0, o = n; r < o.length; r++)
                                        if (!(i = o[r]) || !h(i)) throw new Error(JSON.stringify({
                                            code: c.INVALID_PARAMS,
                                            msg: "[storage.deleteFile] fileID must be string"
                                        }));
                                    return "storage.batchDeleteFile", [4, this.request.send("storage.batchDeleteFile", {
                                        fileid_list: n
                                    })];
                                case 1:
                                    return (s = a.sent()).code ? [2, d(t, null, s)] : (u = {
                                        fileList: s.data.delete_list,
                                        requestId: s.requestId
                                    }, [2, d(t, null, u)])
                            }
                        }))
                    }))
                }, e.prototype.getTempFileURL = function(e, t) {
                    return s(this, void 0, void 0, (function() {
                        var n, r, o, i, s, u;
                        return a(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!(n = e.fileList) || !l(n) || 0 === n.length) throw new Error(JSON.stringify({
                                        code: c.INVALID_PARAMS,
                                        msg: "[storage.getTempFileURL] fileList must not be empty"
                                    }));
                                    for (r = [], o = 0, i = n; o < i.length; o++)
                                        if (s = i[o], p(s)) {
                                            if (!s.hasOwnProperty("fileID") || !s.hasOwnProperty("maxAge")) throw new Error(JSON.stringify({
                                                code: c.INVALID_PARAMS,
                                                msg: "[storage.getTempFileURL] file info must include fileID and maxAge"
                                            }));
                                            r.push({
                                                fileid: s.fileID,
                                                max_age: s.maxAge
                                            })
                                        } else {
                                            if (!h(s)) throw new Error(JSON.stringify({
                                                code: c.INVALID_PARAMS,
                                                msg: "[storage.getTempFileURL] invalid fileList"
                                            }));
                                            r.push({
                                                fileid: s
                                            })
                                        } return "storage.batchGetDownloadUrl", [4, this.request.send("storage.batchGetDownloadUrl", {
                                        file_list: r
                                    })];
                                case 1:
                                    return (u = a.sent()).code ? [2, d(t, null, u)] : [2, d(t, null, {
                                        fileList: u.data.download_list,
                                        requestId: u.requestId
                                    })]
                            }
                        }))
                    }))
                }, e.prototype.downloadFile = function(e, t) {
                    return s(this, void 0, void 0, (function() {
                        var n, r, o, i, s, u;
                        return a(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (n = e.fileID, !h(n)) throw new Error(JSON.stringify({
                                        code: c.INVALID_PARAMS,
                                        msg: "[storage.getTempFileURL] fileID must be string"
                                    }));
                                    return [4, this.getTempFileURL.call(this, {
                                        fileList: [{
                                            fileID: n,
                                            maxAge: 600
                                        }]
                                    })];
                                case 1:
                                    return r = a.sent(), "SUCCESS" !== (o = r.fileList[0]).code ? [2, d(t, o)] : (i = this.request, s = encodeURI(o.download_url), [4, i.download({
                                        url: s
                                    })]);
                                case 2:
                                    return u = a.sent(), [2, d(t, null, u)]
                            }
                        }))
                    }))
                }, o([y({
                    customInfo: {
                        className: "Cloudbase",
                        methodName: "uploadFile"
                    },
                    title: "ä¸äź ćäťśĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ uploadFile() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺĺĺćŻĺŚĺ¨ĺŽĺ¨ĺĺĺčĄ¨ä¸­ďźhttps://console.cloud.tencent.com/tcb/env/safety", "  3 - äşĺ­ĺ¨ĺŽĺ¨č§ĺćŻĺŚéĺśäşĺ˝ĺçťĺ˝çśćčŽżéŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + f]
                }), i("design:type", Function), i("design:paramtypes", [Object, Function]), i("design:returntype", Promise)], e.prototype, "uploadFile", null), o([y({
                    customInfo: {
                        className: "Cloudbase",
                        methodName: "getUploadMetadata"
                    },
                    title: "čˇĺä¸äź ĺäżĄćŻĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ getUploadMetadata() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺĺĺćŻĺŚĺ¨ĺŽĺ¨ĺĺĺčĄ¨ä¸­ďźhttps://console.cloud.tencent.com/tcb/env/safety", "  3 - äşĺ­ĺ¨ĺŽĺ¨č§ĺćŻĺŚéĺśäşĺ˝ĺçťĺ˝çśćčŽżéŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + f]
                }), i("design:type", Function), i("design:paramtypes", [Object, Function]), i("design:returntype", Promise)], e.prototype, "getUploadMetadata", null), o([y({
                    customInfo: {
                        className: "Cloudbase",
                        methodName: "deleteFile"
                    },
                    title: "ĺ é¤ćäťśĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ deleteFile() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺĺĺćŻĺŚĺ¨ĺŽĺ¨ĺĺĺčĄ¨ä¸­ďźhttps://console.cloud.tencent.com/tcb/env/safety", "  3 - äşĺ­ĺ¨ĺŽĺ¨č§ĺćŻĺŚéĺśäşĺ˝ĺçťĺ˝çśćčŽżéŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + f]
                }), i("design:type", Function), i("design:paramtypes", [Object, Function]), i("design:returntype", Promise)], e.prototype, "deleteFile", null), o([y({
                    customInfo: {
                        className: "Cloudbase",
                        methodName: "getTempFileURL"
                    },
                    title: "čˇĺćäťśä¸č˝˝éžćĽ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ getTempFileURL() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺĺĺćŻĺŚĺ¨ĺŽĺ¨ĺĺĺčĄ¨ä¸­ďźhttps://console.cloud.tencent.com/tcb/env/safety", "  3 - äşĺ­ĺ¨ĺŽĺ¨č§ĺćŻĺŚéĺśäşĺ˝ĺçťĺ˝çśćčŽżéŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + f]
                }), i("design:type", Function), i("design:paramtypes", [Object, Function]), i("design:returntype", Promise)], e.prototype, "getTempFileURL", null), o([y({
                    customInfo: {
                        className: "Cloudbase",
                        methodName: "downloadFile"
                    },
                    title: "ä¸č˝˝ćäťśĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ downloadFile() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺĺĺćŻĺŚĺ¨ĺŽĺ¨ĺĺĺčĄ¨ä¸­ďźhttps://console.cloud.tencent.com/tcb/env/safety", "  3 - äşĺ­ĺ¨ĺŽĺ¨č§ĺćŻĺŚéĺśäşĺ˝ĺçťĺ˝çśćčŽżéŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + f]
                }), i("design:type", Function), i("design:paramtypes", [Object, Function]), i("design:returntype", Promise)], e.prototype, "downloadFile", null), e
            }()),
            _ = {
                name: "storage",
                entity: {
                    uploadFile: g.uploadFile,
                    deleteFile: g.deleteFile,
                    getTempFileURL: g.getTempFileURL,
                    downloadFile: g.downloadFile,
                    getUploadMetadata: g.getUploadMetadata
                }
            };
        try {
            cloudbase.registerComponent(_)
        } catch (e) {}

        function v(e) {
            try {
                e.registerComponent(_)
            } catch (e) {
                console.warn(e)
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "registerAnalytics", (function() {
            return p
        }));
        var r = n(0),
            o = function(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            },
            i = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            },
            s = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            a = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            u = r.constants.ERRORS,
            c = r.constants.COMMUNITY_SITE_URL,
            f = r.helpers.catchErrorsDecorator,
            l = ["mall"];
        var h = {
            name: "analytics",
            entity: {
                analytics: (new(function() {
                    function e() {}
                    return e.prototype.analytics = function(e) {
                        return s(this, void 0, void 0, (function() {
                            var t, n, r;
                            return a(this, (function(o) {
                                if (! function(e) {
                                        if ("Object" !== Object.prototype.toString.call(e).slice(8, -1)) return !1;
                                        var t = e.report_data,
                                            n = e.report_type;
                                        return !1 !== l.includes(n) && ("Object" === Object.prototype.toString.call(t).slice(8, -1) && (!(void 0 !== t.action_time && !Number.isInteger(t.action_time)) && "string" == typeof t.action_type))
                                    }(e)) throw new Error(JSON.stringify({
                                    code: u.INVALID_PARAMS,
                                    msg: "[analytics.analytics] invalid report data"
                                }));
                                return "analytics.report", t = void 0 === e.report_data.action_time ? Math.floor(Date.now() / 1e3) : e.report_data.action_time, n = {
                                    analytics_scene: e.report_type,
                                    analytics_data: Object.assign({}, e.report_data, {
                                        action_time: t
                                    })
                                }, r = {
                                    requestData: n
                                }, this.request.send("analytics.report", r), [2]
                            }))
                        }))
                    }, o([f({
                        customInfo: {
                            className: "Cloudbase",
                            methodName: "analytics"
                        },
                        title: "ä¸ćĽč°ç¨ĺ¤ąč´Ľ",
                        messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ analytics() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + c]
                    }), i("design:type", Function), i("design:paramtypes", [Object]), i("design:returntype", Promise)], e.prototype, "analytics", null), e
                }())).analytics
            }
        };
        try {
            cloudbase.registerComponent(h)
        } catch (e) {}

        function p(e) {
            try {
                e.registerComponent(h)
            } catch (e) {
                console.warn(e)
            }
        }
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <http://feross.org>
             * @license  MIT
             */
            var r = n(33),
                o = n(34),
                i = n(35);

            function s() {
                return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function a(e, t) {
                if (s() < t) throw new RangeError("Invalid typed array length");
                return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e
            }

            function u(e, t, n) {
                if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, n);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return l(this, e)
                }
                return c(this, e, t, n)
            }

            function c(e, t, n, r) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
                    if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                    t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                    u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = h(e, t);
                    return e
                }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
                    "string" == typeof n && "" !== n || (n = "utf8");
                    if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                    var r = 0 | d(t, n),
                        o = (e = a(e, r)).write(t, n);
                    o !== r && (e = e.slice(0, o));
                    return e
                }(e, t, n) : function(e, t) {
                    if (u.isBuffer(t)) {
                        var n = 0 | p(t.length);
                        return 0 === (e = a(e, n)).length || t.copy(e, 0, 0, n), e
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? a(e, 0) : h(e, t);
                        if ("Buffer" === t.type && i(t.data)) return h(e, t.data)
                    }
                    var r;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function f(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function l(e, t) {
                if (f(t), e = a(e, t < 0 ? 0 : 0 | p(t)), !u.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < t; ++n) e[n] = 0;
                return e
            }

            function h(e, t) {
                var n = t.length < 0 ? 0 : 0 | p(t.length);
                e = a(e, n);
                for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
                return e
            }

            function p(e) {
                if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                return 0 | e
            }

            function d(e, t) {
                if (u.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n) return 0;
                for (var r = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return q(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return F(e).length;
                    default:
                        if (r) return q(e).length;
                        t = ("" + t).toLowerCase(), r = !0
                }
            }

            function y(e, t, n) {
                var r = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if ((n >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return R(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return I(this, t, n);
                    case "ascii":
                        return N(this, t, n);
                    case "latin1":
                    case "binary":
                        return T(this, t, n);
                    case "base64":
                        return O(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return B(this, t, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), r = !0
                }
            }

            function g(e, t, n) {
                var r = e[t];
                e[t] = e[n], e[n] = r
            }

            function _(e, t, n, r, o) {
                if (0 === e.length) return -1;
                if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                    if (o) return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!o) return -1;
                    n = 0
                }
                if ("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, n, r, o);
                if ("number" == typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : v(e, [t], n, r, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function v(e, t, n, r, o) {
                var i, s = 1,
                    a = e.length,
                    u = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, n /= 2
                }

                function c(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }
                if (o) {
                    var f = -1;
                    for (i = n; i < a; i++)
                        if (c(e, i) === c(t, -1 === f ? 0 : i - f)) {
                            if (-1 === f && (f = i), i - f + 1 === u) return f * s
                        } else -1 !== f && (i -= i - f), f = -1
                } else
                    for (n + u > a && (n = a - u), i = n; i >= 0; i--) {
                        for (var l = !0, h = 0; h < u; h++)
                            if (c(e, i + h) !== c(t, h)) {
                                l = !1;
                                break
                            } if (l) return i
                    }
                return -1
            }

            function m(e, t, n, r) {
                n = Number(n) || 0;
                var o = e.length - n;
                r ? (r = Number(r)) > o && (r = o) : r = o;
                var i = t.length;
                if (i % 2 != 0) throw new TypeError("Invalid hex string");
                r > i / 2 && (r = i / 2);
                for (var s = 0; s < r; ++s) {
                    var a = parseInt(t.substr(2 * s, 2), 16);
                    if (isNaN(a)) return s;
                    e[n + s] = a
                }
                return s
            }

            function b(e, t, n, r) {
                return W(q(t, e.length - n), e, n, r)
            }

            function w(e, t, n, r) {
                return W(function(e) {
                    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                    return t
                }(t), e, n, r)
            }

            function E(e, t, n, r) {
                return w(e, t, n, r)
            }

            function S(e, t, n, r) {
                return W(F(t), e, n, r)
            }

            function A(e, t, n, r) {
                return W(function(e, t) {
                    for (var n, r, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) n = e.charCodeAt(s), r = n >> 8, o = n % 256, i.push(o), i.push(r);
                    return i
                }(t, e.length - n), e, n, r)
            }

            function O(e, t, n) {
                return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
            }

            function I(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], o = t; o < n;) {
                    var i, s, a, u, c = e[o],
                        f = null,
                        l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (o + l <= n) switch (l) {
                        case 1:
                            c < 128 && (f = c);
                            break;
                        case 2:
                            128 == (192 & (i = e[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (f = u);
                            break;
                        case 3:
                            i = e[o + 1], s = e[o + 2], 128 == (192 & i) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (f = u);
                            break;
                        case 4:
                            i = e[o + 1], s = e[o + 2], a = e[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (f = u)
                    }
                    null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), r.push(f), o += l
                }
                return function(e) {
                    var t = e.length;
                    if (t <= 4096) return String.fromCharCode.apply(String, e);
                    var n = "",
                        r = 0;
                    for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
                    return n
                }(r)
            }
            t.Buffer = u, t.SlowBuffer = function(e) {
                +e != e && (e = 0);
                return u.alloc(+e)
            }, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), t.kMaxLength = s(), u.poolSize = 8192, u._augment = function(e) {
                return e.__proto__ = u.prototype, e
            }, u.from = function(e, t, n) {
                return c(null, e, t, n)
            }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0
            })), u.alloc = function(e, t, n) {
                return function(e, t, n, r) {
                    return f(t), t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof r ? a(e, t).fill(n, r) : a(e, t).fill(n) : a(e, t)
                }(null, e, t, n)
            }, u.allocUnsafe = function(e) {
                return l(null, e)
            }, u.allocUnsafeSlow = function(e) {
                return l(null, e)
            }, u.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }, u.compare = function(e, t) {
                if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
                    if (e[o] !== t[o]) {
                        n = e[o], r = t[o];
                        break
                    } return n < r ? -1 : r < n ? 1 : 0
            }, u.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, u.concat = function(e, t) {
                if (!i(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return u.alloc(0);
                var n;
                if (void 0 === t)
                    for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                var r = u.allocUnsafe(t),
                    o = 0;
                for (n = 0; n < e.length; ++n) {
                    var s = e[n];
                    if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(r, o), o += s.length
                }
                return r
            }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) g(this, t, t + 1);
                return this
            }, u.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
                return this
            }, u.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
                return this
            }, u.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : y.apply(this, arguments)
            }, u.prototype.equals = function(e) {
                if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === u.compare(this, e)
            }, u.prototype.inspect = function() {
                var e = "",
                    n = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
            }, u.prototype.compare = function(e, t, n, r, o) {
                if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");
                if (r >= o && t >= n) return 0;
                if (r >= o) return -1;
                if (t >= n) return 1;
                if (this === e) return 0;
                for (var i = (o >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(i, s), c = this.slice(r, o), f = e.slice(t, n), l = 0; l < a; ++l)
                    if (c[l] !== f[l]) {
                        i = c[l], s = f[l];
                        break
                    } return i < s ? -1 : s < i ? 1 : 0
            }, u.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }, u.prototype.indexOf = function(e, t, n) {
                return _(this, e, t, n, !0)
            }, u.prototype.lastIndexOf = function(e, t, n) {
                return _(this, e, t, n, !1)
            }, u.prototype.write = function(e, t, n, r) {
                if (void 0 === t) r = "utf8", n = this.length, t = 0;
                else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                var o = this.length - t;
                if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var i = !1;;) switch (r) {
                    case "hex":
                        return m(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return b(this, e, t, n);
                    case "ascii":
                        return w(this, e, t, n);
                    case "latin1":
                    case "binary":
                        return E(this, e, t, n);
                    case "base64":
                        return S(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return A(this, e, t, n);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), i = !0
                }
            }, u.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };

            function N(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
                return r
            }

            function T(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
                return r
            }

            function R(e, t, n) {
                var r = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                for (var o = "", i = t; i < n; ++i) o += k(e[i]);
                return o
            }

            function B(e, t, n) {
                for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                return o
            }

            function P(e, t, n) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function D(e, t, n, r, o, i) {
                if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw new RangeError("Index out of range")
            }

            function L(e, t, n, r) {
                t < 0 && (t = 65535 + t + 1);
                for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o) e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
            }

            function x(e, t, n, r) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o) e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255
            }

            function U(e, t, n, r, o, i) {
                if (n + r > e.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function j(e, t, n, r, i) {
                return i || U(e, 0, n, 4), o.write(e, t, n, r, 23, 4), n + 4
            }

            function C(e, t, n, r, i) {
                return i || U(e, 0, n, 8), o.write(e, t, n, r, 52, 8), n + 8
            }
            u.prototype.slice = function(e, t) {
                var n, r = this.length;
                if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = u.prototype;
                else {
                    var o = t - e;
                    n = new u(o, void 0);
                    for (var i = 0; i < o; ++i) n[i] = this[i + e]
                }
                return n
            }, u.prototype.readUIntLE = function(e, t, n) {
                e |= 0, t |= 0, n || P(e, t, this.length);
                for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
                return r
            }, u.prototype.readUIntBE = function(e, t, n) {
                e |= 0, t |= 0, n || P(e, t, this.length);
                for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) r += this[e + --t] * o;
                return r
            }, u.prototype.readUInt8 = function(e, t) {
                return t || P(e, 1, this.length), this[e]
            }, u.prototype.readUInt16LE = function(e, t) {
                return t || P(e, 2, this.length), this[e] | this[e + 1] << 8
            }, u.prototype.readUInt16BE = function(e, t) {
                return t || P(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, u.prototype.readUInt32LE = function(e, t) {
                return t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, u.prototype.readUInt32BE = function(e, t) {
                return t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, u.prototype.readIntLE = function(e, t, n) {
                e |= 0, t |= 0, n || P(e, t, this.length);
                for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
                return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r
            }, u.prototype.readIntBE = function(e, t, n) {
                e |= 0, t |= 0, n || P(e, t, this.length);
                for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256);) i += this[e + --r] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
            }, u.prototype.readInt8 = function(e, t) {
                return t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, u.prototype.readInt16LE = function(e, t) {
                t || P(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, u.prototype.readInt16BE = function(e, t) {
                t || P(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, u.prototype.readInt32LE = function(e, t) {
                return t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, u.prototype.readInt32BE = function(e, t) {
                return t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, u.prototype.readFloatLE = function(e, t) {
                return t || P(e, 4, this.length), o.read(this, e, !0, 23, 4)
            }, u.prototype.readFloatBE = function(e, t) {
                return t || P(e, 4, this.length), o.read(this, e, !1, 23, 4)
            }, u.prototype.readDoubleLE = function(e, t) {
                return t || P(e, 8, this.length), o.read(this, e, !0, 52, 8)
            }, u.prototype.readDoubleBE = function(e, t) {
                return t || P(e, 8, this.length), o.read(this, e, !1, 52, 8)
            }, u.prototype.writeUIntLE = function(e, t, n, r) {
                (e = +e, t |= 0, n |= 0, r) || D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var o = 1,
                    i = 0;
                for (this[t] = 255 & e; ++i < n && (o *= 256);) this[t + i] = e / o & 255;
                return t + n
            }, u.prototype.writeUIntBE = function(e, t, n, r) {
                (e = +e, t |= 0, n |= 0, r) || D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var o = n - 1,
                    i = 1;
                for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
                return t + n
            }, u.prototype.writeUInt8 = function(e, t, n) {
                return e = +e, t |= 0, n || D(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, u.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e, t |= 0, n || D(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : L(this, e, t, !0), t + 2
            }, u.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e, t |= 0, n || D(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : L(this, e, t, !1), t + 2
            }, u.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e, t |= 0, n || D(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : x(this, e, t, !0), t + 4
            }, u.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e, t |= 0, n || D(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : x(this, e, t, !1), t + 4
            }, u.prototype.writeIntLE = function(e, t, n, r) {
                if (e = +e, t |= 0, !r) {
                    var o = Math.pow(2, 8 * n - 1);
                    D(this, e, t, n, o - 1, -o)
                }
                var i = 0,
                    s = 1,
                    a = 0;
                for (this[t] = 255 & e; ++i < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;
                return t + n
            }, u.prototype.writeIntBE = function(e, t, n, r) {
                if (e = +e, t |= 0, !r) {
                    var o = Math.pow(2, 8 * n - 1);
                    D(this, e, t, n, o - 1, -o)
                }
                var i = n - 1,
                    s = 1,
                    a = 0;
                for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;
                return t + n
            }, u.prototype.writeInt8 = function(e, t, n) {
                return e = +e, t |= 0, n || D(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, u.prototype.writeInt16LE = function(e, t, n) {
                return e = +e, t |= 0, n || D(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : L(this, e, t, !0), t + 2
            }, u.prototype.writeInt16BE = function(e, t, n) {
                return e = +e, t |= 0, n || D(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : L(this, e, t, !1), t + 2
            }, u.prototype.writeInt32LE = function(e, t, n) {
                return e = +e, t |= 0, n || D(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : x(this, e, t, !0), t + 4
            }, u.prototype.writeInt32BE = function(e, t, n) {
                return e = +e, t |= 0, n || D(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : x(this, e, t, !1), t + 4
            }, u.prototype.writeFloatLE = function(e, t, n) {
                return j(this, e, t, !0, n)
            }, u.prototype.writeFloatBE = function(e, t, n) {
                return j(this, e, t, !1, n)
            }, u.prototype.writeDoubleLE = function(e, t, n) {
                return C(this, e, t, !0, n)
            }, u.prototype.writeDoubleBE = function(e, t, n) {
                return C(this, e, t, !1, n)
            }, u.prototype.copy = function(e, t, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                var o, i = r - n;
                if (this === e && n < t && t < r)
                    for (o = i - 1; o >= 0; --o) e[o + t] = this[o + n];
                else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                    for (o = 0; o < i; ++o) e[o + t] = this[o + n];
                else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
                return i
            }, u.prototype.fill = function(e, t, n, r) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                        var o = e.charCodeAt(0);
                        o < 256 && (e = o)
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                if (n <= t) return this;
                var i;
                if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                    for (i = t; i < n; ++i) this[i] = e;
                else {
                    var s = u.isBuffer(e) ? e : q(new u(e, r).toString()),
                        a = s.length;
                    for (i = 0; i < n - t; ++i) this[i + t] = s[i % a]
                }
                return this
            };
            var M = /[^+\/0-9A-Za-z-_]/g;

            function k(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function q(e, t) {
                var n;
                t = t || 1 / 0;
                for (var r = e.length, o = null, i = [], s = 0; s < r; ++s) {
                    if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                        if (!o) {
                            if (n > 56319) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === r) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && i.push(239, 191, 189), o = n;
                            continue
                        }
                        n = 65536 + (o - 55296 << 10 | n - 56320)
                    } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, n < 128) {
                        if ((t -= 1) < 0) break;
                        i.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        i.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return i
            }

            function F(e) {
                return r.toByteArray(function(e) {
                    if ((e = function(e) {
                            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                        }(e).replace(M, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function W(e, t, n, r) {
                for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
                return o
            }
        }).call(this, n(6))
    }, function(e, t, n) {
        "use strict";
        t.byteLength = function(e) {
            var t = c(e),
                n = t[0],
                r = t[1];
            return 3 * (n + r) / 4 - r
        }, t.toByteArray = function(e) {
            var t, n, r = c(e),
                s = r[0],
                a = r[1],
                u = new i(function(e, t, n) {
                    return 3 * (t + n) / 4 - n
                }(0, s, a)),
                f = 0,
                l = a > 0 ? s - 4 : s;
            for (n = 0; n < l; n += 4) t = o[e.charCodeAt(n)] << 18 | o[e.charCodeAt(n + 1)] << 12 | o[e.charCodeAt(n + 2)] << 6 | o[e.charCodeAt(n + 3)], u[f++] = t >> 16 & 255, u[f++] = t >> 8 & 255, u[f++] = 255 & t;
            2 === a && (t = o[e.charCodeAt(n)] << 2 | o[e.charCodeAt(n + 1)] >> 4, u[f++] = 255 & t);
            1 === a && (t = o[e.charCodeAt(n)] << 10 | o[e.charCodeAt(n + 1)] << 4 | o[e.charCodeAt(n + 2)] >> 2, u[f++] = t >> 8 & 255, u[f++] = 255 & t);
            return u
        }, t.fromByteArray = function(e) {
            for (var t, n = e.length, o = n % 3, i = [], s = 0, a = n - o; s < a; s += 16383) i.push(f(e, s, s + 16383 > a ? a : s + 16383));
            1 === o ? (t = e[n - 1], i.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === o && (t = (e[n - 2] << 8) + e[n - 1], i.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
            return i.join("")
        };
        for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) r[a] = s[a], o[s.charCodeAt(a)] = a;

        function c(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
        }

        function f(e, t, n) {
            for (var o, i, s = [], a = t; a < n; a += 3) o = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
            return s.join("")
        }
        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
    }, function(e, t) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        t.read = function(e, t, n, r, o) {
            var i, s, a = 8 * o - r - 1,
                u = (1 << a) - 1,
                c = u >> 1,
                f = -7,
                l = n ? o - 1 : 0,
                h = n ? -1 : 1,
                p = e[t + l];
            for (l += h, i = p & (1 << -f) - 1, p >>= -f, f += a; f > 0; i = 256 * i + e[t + l], l += h, f -= 8);
            for (s = i & (1 << -f) - 1, i >>= -f, f += r; f > 0; s = 256 * s + e[t + l], l += h, f -= 8);
            if (0 === i) i = 1 - c;
            else {
                if (i === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, r), i -= c
            }
            return (p ? -1 : 1) * s * Math.pow(2, i - r)
        }, t.write = function(e, t, n, r, o, i) {
            var s, a, u, c = 8 * i - o - 1,
                f = (1 << c) - 1,
                l = f >> 1,
                h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = r ? 0 : i - 1,
                d = r ? 1 : -1,
                y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (t * u - 1) * Math.pow(2, o), s += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, o), s = 0)); o >= 8; e[n + p] = 255 & a, p += d, a /= 256, o -= 8);
            for (s = s << o | a, c += o; c > 0; e[n + p] = 255 & s, p += d, s /= 256, c -= 8);
            e[n + p - d] |= 128 * y
        }
    }, function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    }, function(e) {
        e.exports = JSON.parse('{"version":"1.7.1"}')
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "registerDatabase", (function() {
            return bt
        }));
        var r, o, i = {};
        n.r(i), n.d(i, "Point", (function() {
                return ce
            })), n.d(i, "LineString", (function() {
                return V
            })), n.d(i, "Polygon", (function() {
                return z
            })), n.d(i, "MultiPoint", (function() {
                return Z
            })), n.d(i, "MultiLineString", (function() {
                return ee
            })), n.d(i, "MultiPolygon", (function() {
                return ne
            })),
            function(e) {
                e.DocIDError = "ććĄŁIDä¸ĺćł", e.CollNameError = "éĺĺç§°ä¸ĺćł", e.OpStrError = "ćä˝çŹŚä¸ĺćł", e.DirectionError = "ćĺşĺ­çŹŚä¸ĺćł", e.IntergerError = "must be integer", e.QueryParamTypeError = "ćĽčŻ˘ĺć°ĺżéĄťä¸şĺŻščąĄ", e.QueryParamValueError = "ćĽčŻ˘ĺć°ĺŻščąĄĺźä¸č˝ĺä¸şundefined"
            }(o || (o = {}));
        var s, a = "Number",
            u = "Object",
            c = "Array",
            f = "GeoPoint",
            l = "GeoLineString",
            h = "GeoPolygon",
            p = "GeoMultiPoint",
            d = "GeoMultiLineString",
            y = "GeoMultiPolygon",
            g = "Date",
            _ = "ServerDate",
            v = "BsonDate",
            m = ["desc", "asc"],
            b = ["<", "<=", "==", ">=", ">"];
        ! function(e) {
            e.lt = "<", e.gt = ">", e.lte = "<=", e.gte = ">=", e.eq = "=="
        }(s || (s = {}));
        var w;
        (r = {})[s.eq] = "$eq", r[s.lt] = "$lt", r[s.lte] = "$lte", r[s.gt] = "$gt", r[s.gte] = "$gte";
        ! function(e) {
            e.WHERE = "WHERE", e.DOC = "DOC"
        }(w || (w = {}));
        var E, S = (E = function(e, t) {
                return (E = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                function n() {
                    this.constructor = e
                }
                E(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
            A = [],
            O = {},
            I = function(e) {
                function t(t, n) {
                    if (n !== O) throw new TypeError("InternalSymbol cannot be constructed with new operator");
                    return e.call(this, t) || this
                }
                return S(t, e), t.for = function(e) {
                    for (var n = 0, r = A.length; n < r; n++)
                        if (A[n].target === e) return A[n].instance;
                    var o = new t(e, O);
                    return A.push({
                        target: e,
                        instance: o
                    }), o
                }, t
            }((function(e) {
                Object.defineProperties(this, {
                    target: {
                        enumerable: !1,
                        writable: !1,
                        configurable: !1,
                        value: e
                    }
                })
            })),
            N = I,
            T = N.for("UNSET_FIELD_NAME"),
            R = N.for("UPDATE_COMMAND"),
            B = N.for("QUERY_COMMAND"),
            P = N.for("LOGIC_COMMAND"),
            D = N.for("GEO_POINT"),
            L = N.for("SYMBOL_GEO_LINE_STRING"),
            x = N.for("SYMBOL_GEO_POLYGON"),
            U = N.for("SYMBOL_GEO_MULTI_POINT"),
            j = N.for("SYMBOL_GEO_MULTI_LINE_STRING"),
            C = N.for("SYMBOL_GEO_MULTI_POLYGON"),
            M = N.for("SERVER_DATE"),
            k = N.for("REGEXP"),
            q = function(e) {
                return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
            },
            F = function(e) {
                return "object" === q(e)
            },
            W = function(e) {
                return "number" === q(e)
            },
            Y = function(e) {
                return Array.isArray(e)
            },
            $ = function(e) {
                return "date" === q(e)
            },
            H = function(e) {
                return "regexp" === q(e)
            },
            K = function(e) {
                return e && e._internalType instanceof I
            },
            G = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            V = function() {
                function e(e) {
                    if (!Y(e)) throw new TypeError('"points" must be of type Point[]. Received type ' + typeof e);
                    if (e.length < 2) throw new Error('"points" must contain 2 points at least');
                    e.forEach((function(e) {
                        if (!(e instanceof ce)) throw new TypeError('"points" must be of type Point[]. Received type ' + typeof e + "[]")
                    })), this.points = e
                }
                return e.prototype.parse = function(e) {
                    var t;
                    return (t = {})[e] = {
                        type: "LineString",
                        coordinates: this.points.map((function(e) {
                            return e.toJSON().coordinates
                        }))
                    }, t
                }, e.prototype.toJSON = function() {
                    return {
                        type: "LineString",
                        coordinates: this.points.map((function(e) {
                            return e.toJSON().coordinates
                        }))
                    }
                }, e.validate = function(e) {
                    var t, n;
                    if ("LineString" !== e.type || !Y(e.coordinates)) return !1;
                    try {
                        for (var r = G(e.coordinates), o = r.next(); !o.done; o = r.next()) {
                            var i = o.value;
                            if (!W(i[0]) || !W(i[1])) return !1
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (n = r.return) && n.call(r)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return !0
                }, e.isClosed = function(e) {
                    var t = e.points[0],
                        n = e.points[e.points.length - 1];
                    if (t.latitude === n.latitude && t.longitude === n.longitude) return !0
                }, Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return L
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(),
            J = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            z = function() {
                function e(e) {
                    if (!Y(e)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + typeof e);
                    if (0 === e.length) throw new Error("Polygon must contain 1 linestring at least");
                    e.forEach((function(e) {
                        if (!(e instanceof V)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + typeof e + "[]");
                        if (!V.isClosed(e)) throw new Error("LineString " + e.points.map((function(e) {
                            return e.toReadableString()
                        })) + " is not a closed cycle")
                    })), this.lines = e
                }
                return e.prototype.parse = function(e) {
                    var t;
                    return (t = {})[e] = {
                        type: "Polygon",
                        coordinates: this.lines.map((function(e) {
                            return e.points.map((function(e) {
                                return [e.longitude, e.latitude]
                            }))
                        }))
                    }, t
                }, e.prototype.toJSON = function() {
                    return {
                        type: "Polygon",
                        coordinates: this.lines.map((function(e) {
                            return e.points.map((function(e) {
                                return [e.longitude, e.latitude]
                            }))
                        }))
                    }
                }, e.validate = function(e) {
                    var t, n, r, o;
                    if ("Polygon" !== e.type || !Y(e.coordinates)) return !1;
                    try {
                        for (var i = J(e.coordinates), s = i.next(); !s.done; s = i.next()) {
                            var a = s.value;
                            if (!this.isCloseLineString(a)) return !1;
                            try {
                                for (var u = (r = void 0, J(a)), c = u.next(); !c.done; c = u.next()) {
                                    var f = c.value;
                                    if (!W(f[0]) || !W(f[1])) return !1
                                }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    c && !c.done && (o = u.return) && o.call(u)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (n = i.return) && n.call(i)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return !0
                }, e.isCloseLineString = function(e) {
                    var t = e[0],
                        n = e[e.length - 1];
                    return t[0] === n[0] && t[1] === n[1]
                }, Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return C
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(),
            X = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            Z = function() {
                function e(e) {
                    if (!Y(e)) throw new TypeError('"points" must be of type Point[]. Received type ' + typeof e);
                    if (0 === e.length) throw new Error('"points" must contain 1 point at least');
                    e.forEach((function(e) {
                        if (!(e instanceof ce)) throw new TypeError('"points" must be of type Point[]. Received type ' + typeof e + "[]")
                    })), this.points = e
                }
                return e.prototype.parse = function(e) {
                    var t;
                    return (t = {})[e] = {
                        type: "MultiPoint",
                        coordinates: this.points.map((function(e) {
                            return e.toJSON().coordinates
                        }))
                    }, t
                }, e.prototype.toJSON = function() {
                    return {
                        type: "MultiPoint",
                        coordinates: this.points.map((function(e) {
                            return e.toJSON().coordinates
                        }))
                    }
                }, e.validate = function(e) {
                    var t, n;
                    if ("MultiPoint" !== e.type || !Y(e.coordinates)) return !1;
                    try {
                        for (var r = X(e.coordinates), o = r.next(); !o.done; o = r.next()) {
                            var i = o.value;
                            if (!W(i[0]) || !W(i[1])) return !1
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (n = r.return) && n.call(r)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return !0
                }, Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return U
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(),
            Q = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            ee = function() {
                function e(e) {
                    if (!Y(e)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + typeof e);
                    if (0 === e.length) throw new Error("Polygon must contain 1 linestring at least");
                    e.forEach((function(e) {
                        if (!(e instanceof V)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + typeof e + "[]")
                    })), this.lines = e
                }
                return e.prototype.parse = function(e) {
                    var t;
                    return (t = {})[e] = {
                        type: "MultiLineString",
                        coordinates: this.lines.map((function(e) {
                            return e.points.map((function(e) {
                                return [e.longitude, e.latitude]
                            }))
                        }))
                    }, t
                }, e.prototype.toJSON = function() {
                    return {
                        type: "MultiLineString",
                        coordinates: this.lines.map((function(e) {
                            return e.points.map((function(e) {
                                return [e.longitude, e.latitude]
                            }))
                        }))
                    }
                }, e.validate = function(e) {
                    var t, n, r, o;
                    if ("MultiLineString" !== e.type || !Y(e.coordinates)) return !1;
                    try {
                        for (var i = Q(e.coordinates), s = i.next(); !s.done; s = i.next()) {
                            var a = s.value;
                            try {
                                for (var u = (r = void 0, Q(a)), c = u.next(); !c.done; c = u.next()) {
                                    var f = c.value;
                                    if (!W(f[0]) || !W(f[1])) return !1
                                }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    c && !c.done && (o = u.return) && o.call(u)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (n = i.return) && n.call(i)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return !0
                }, Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return j
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(),
            te = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            ne = function() {
                function e(e) {
                    var t, n;
                    if (!Y(e)) throw new TypeError('"polygons" must be of type Polygon[]. Received type ' + typeof e);
                    if (0 === e.length) throw new Error("MultiPolygon must contain 1 polygon at least");
                    try {
                        for (var r = te(e), o = r.next(); !o.done; o = r.next()) {
                            var i = o.value;
                            if (!(i instanceof z)) throw new TypeError('"polygon" must be of type Polygon[]. Received type ' + typeof i + "[]")
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (n = r.return) && n.call(r)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    this.polygons = e
                }
                return e.prototype.parse = function(e) {
                    var t;
                    return (t = {})[e] = {
                        type: "MultiPolygon",
                        coordinates: this.polygons.map((function(e) {
                            return e.lines.map((function(e) {
                                return e.points.map((function(e) {
                                    return [e.longitude, e.latitude]
                                }))
                            }))
                        }))
                    }, t
                }, e.prototype.toJSON = function() {
                    return {
                        type: "MultiPolygon",
                        coordinates: this.polygons.map((function(e) {
                            return e.lines.map((function(e) {
                                return e.points.map((function(e) {
                                    return [e.longitude, e.latitude]
                                }))
                            }))
                        }))
                    }
                }, e.validate = function(e) {
                    var t, n, r, o, i, s;
                    if ("MultiPolygon" !== e.type || !Y(e.coordinates)) return !1;
                    try {
                        for (var a = te(e.coordinates), u = a.next(); !u.done; u = a.next()) {
                            var c = u.value;
                            try {
                                for (var f = (r = void 0, te(c)), l = f.next(); !l.done; l = f.next()) {
                                    var h = l.value;
                                    try {
                                        for (var p = (i = void 0, te(h)), d = p.next(); !d.done; d = p.next()) {
                                            var y = d.value;
                                            if (!W(y[0]) || !W(y[1])) return !1
                                        }
                                    } catch (e) {
                                        i = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            d && !d.done && (s = p.return) && s.call(p)
                                        } finally {
                                            if (i) throw i.error
                                        }
                                    }
                                }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    l && !l.done && (o = f.return) && o.call(f)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (n = a.return) && n.call(a)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return !0
                }, Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return x
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(),
            re = function() {
                function e(e) {
                    var t = (void 0 === e ? {} : e).offset,
                        n = void 0 === t ? 0 : t;
                    this.offset = n
                }
                return Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return M
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.parse = function() {
                    return {
                        $date: {
                            offset: this.offset
                        }
                    }
                }, e
            }();

        function oe(e) {
            return new re(e)
        }
        var ie, se = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            },
            ae = function() {
                function e() {}
                return e.formatResDocumentData = function(t) {
                    return t.map((function(t) {
                        return e.formatField(t)
                    }))
                }, e.formatField = function(t) {
                    var n = Object.keys(t),
                        r = {};
                    return Array.isArray(t) && (r = []), n.forEach((function(n) {
                        var o, i = t[n];
                        switch (e.whichType(i)) {
                            case f:
                                o = new ce(i.coordinates[0], i.coordinates[1]);
                                break;
                            case l:
                                o = new V(i.coordinates.map((function(e) {
                                    return new ce(e[0], e[1])
                                })));
                                break;
                            case h:
                                o = new z(i.coordinates.map((function(e) {
                                    return new V(e.map((function(e) {
                                        var t = se(e, 2),
                                            n = t[0],
                                            r = t[1];
                                        return new ce(n, r)
                                    })))
                                })));
                                break;
                            case p:
                                o = new Z(i.coordinates.map((function(e) {
                                    return new ce(e[0], e[1])
                                })));
                                break;
                            case d:
                                o = new ee(i.coordinates.map((function(e) {
                                    return new V(e.map((function(e) {
                                        var t = se(e, 2),
                                            n = t[0],
                                            r = t[1];
                                        return new ce(n, r)
                                    })))
                                })));
                                break;
                            case y:
                                o = new ne(i.coordinates.map((function(e) {
                                    return new z(e.map((function(e) {
                                        return new V(e.map((function(e) {
                                            var t = se(e, 2),
                                                n = t[0],
                                                r = t[1];
                                            return new ce(n, r)
                                        })))
                                    })))
                                })));
                                break;
                            case g:
                                o = new Date(1e3 * i.$timestamp);
                                break;
                            case u:
                            case c:
                                o = e.formatField(i);
                                break;
                            case _:
                                o = new Date(i.$date);
                                break;
                            default:
                                o = i
                        }
                        Array.isArray(r) ? r.push(o) : r[n] = o
                    })), r
                }, e.whichType = function(e) {
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (t === g) return v;
                    if (t === u) {
                        if (e instanceof ce) return f;
                        if (e instanceof Date) return g;
                        if (e instanceof re) return _;
                        e.$timestamp ? t = g : e.$date ? t = _ : ce.validate(e) ? t = f : V.validate(e) ? t = l : z.validate(e) ? t = h : Z.validate(e) ? t = p : ee.validate(e) ? t = d : ne.validate(e) && (t = y)
                    }
                    return t
                }, e.generateDocId = function() {
                    for (var e = "ABCDEFabcdef0123456789", t = "", n = 0; n < 24; n++) t += e.charAt(Math.floor(Math.random() * e.length));
                    return t
                }, e
            }(),
            ue = function() {
                function e() {}
                return e.isGeopoint = function(e, t) {
                    if (ae.whichType(t) !== a) throw new Error("Geo Point must be number type");
                    var n = Math.abs(t);
                    if ("latitude" === e && n > 90) throw new Error("latitude should be a number ranges from -90 to 90");
                    if ("longitude" === e && n > 180) throw new Error("longitude should be a number ranges from -180 to 180");
                    return !0
                }, e.isInteger = function(e, t) {
                    if (!Number.isInteger(t)) throw new Error(e + o.IntergerError);
                    return !0
                }, e.isFieldOrder = function(e) {
                    if (-1 === m.indexOf(e)) throw new Error(o.DirectionError);
                    return !0
                }, e.isFieldPath = function(e) {
                    if (!/^[a-zA-Z0-9-_\.]/.test(e)) throw new Error;
                    return !0
                }, e.isOperator = function(e) {
                    if (-1 === b.indexOf(e)) throw new Error(o.OpStrError);
                    return !0
                }, e.isCollName = function(e) {
                    if (!/^[a-zA-Z0-9]([a-zA-Z0-9-_]){1,32}$/.test(e)) throw new Error(o.CollNameError);
                    return !0
                }, e.isDocID = function(e) {
                    if (!/^([a-fA-F0-9]){24}$/.test(e)) throw new Error(o.DocIDError);
                    return !0
                }, e
            }(),
            ce = function() {
                function e(e, t) {
                    ue.isGeopoint("longitude", e), ue.isGeopoint("latitude", t), this.longitude = e, this.latitude = t
                }
                return e.prototype.parse = function(e) {
                    var t;
                    return (t = {})[e] = {
                        type: "Point",
                        coordinates: [this.longitude, this.latitude]
                    }, t
                }, e.prototype.toJSON = function() {
                    return {
                        type: "Point",
                        coordinates: [this.longitude, this.latitude]
                    }
                }, e.prototype.toReadableString = function() {
                    return "[" + this.longitude + "," + this.latitude + "]"
                }, e.validate = function(e) {
                    return "Point" === e.type && Y(e.coordinates) && ue.isGeopoint("longitude", e.coordinates[0]) && ue.isGeopoint("latitude", e.coordinates[1])
                }, Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return D
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(),
            fe = function() {
                var e;
                if (!Promise) {
                    (e = function() {}).promise = {};
                    var t = function() {
                        throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.')
                    };
                    return Object.defineProperty(e.promise, "then", {
                        get: t
                    }), Object.defineProperty(e.promise, "catch", {
                        get: t
                    }), e
                }
                var n = new Promise((function(t, n) {
                    e = function(e, r) {
                        return e ? n(e) : t(r)
                    }
                }));
                return e.promise = n, e
            };
        ! function(e) {
            e.SET = "set", e.REMOVE = "remove", e.INC = "inc", e.MUL = "mul", e.PUSH = "push", e.PULL = "pull", e.PULL_ALL = "pullAll", e.POP = "pop", e.SHIFT = "shift", e.UNSHIFT = "unshift", e.ADD_TO_SET = "addToSet", e.BIT = "bit", e.RENAME = "rename", e.MAX = "max", e.MIN = "min"
        }(ie || (ie = {}));
        var le = function() {
            function e(e, t, n) {
                this._internalType = R, Object.defineProperties(this, {
                    _internalType: {
                        enumerable: !1,
                        configurable: !1
                    }
                }), this.operator = e, this.operands = t, this.fieldName = n || T
            }
            return e.prototype._setFieldName = function(t) {
                return new e(this.operator, this.operands, t)
            }, e
        }();

        function he(e) {
            return e && e instanceof le && e._internalType === R
        }
        var pe;
        ! function(e) {
            e.AND = "and", e.OR = "or", e.NOT = "not", e.NOR = "nor"
        }(pe || (pe = {}));
        var de = function() {
            function e(e, t, n) {
                if (this._internalType = P, Object.defineProperties(this, {
                        _internalType: {
                            enumerable: !1,
                            configurable: !1
                        }
                    }), this.operator = e, this.operands = t, this.fieldName = n || T, this.fieldName !== T)
                    if (Array.isArray(t)) {
                        t = t.slice(), this.operands = t;
                        for (var r = 0, o = t.length; r < o; r++) {
                            (ye(i = t[r]) || me(i)) && (t[r] = i._setFieldName(this.fieldName))
                        }
                    } else {
                        var i;
                        (ye(i = t) || me(i)) && (t = i._setFieldName(this.fieldName))
                    }
            }
            return e.prototype._setFieldName = function(t) {
                var n = this.operands.map((function(n) {
                    return n instanceof e ? n._setFieldName(t) : n
                }));
                return new e(this.operator, n, t)
            }, e.prototype.and = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments);
                return r.unshift(this), new e(pe.AND, r, this.fieldName)
            }, e.prototype.or = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments);
                return r.unshift(this), new e(pe.OR, r, this.fieldName)
            }, e
        }();

        function ye(e) {
            return e && e instanceof de && e._internalType === P
        }
        var ge, _e = function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        ! function(e) {
            e.EQ = "eq", e.NEQ = "neq", e.GT = "gt", e.GTE = "gte", e.LT = "lt", e.LTE = "lte", e.IN = "in", e.NIN = "nin", e.ALL = "all", e.ELEM_MATCH = "elemMatch", e.EXISTS = "exists", e.SIZE = "size", e.MOD = "mod", e.GEO_NEAR = "geoNear", e.GEO_WITHIN = "geoWithin", e.GEO_INTERSECTS = "geoIntersects"
        }(ge || (ge = {}));
        var ve = function(e) {
            function t(t, n, r) {
                var o = e.call(this, t, n, r) || this;
                return o.operator = t, o._internalType = B, o
            }
            return _e(t, e), t.prototype.toJSON = function() {
                var e, t;
                switch (this.operator) {
                    case ge.IN:
                    case ge.NIN:
                        return (e = {})["$" + this.operator] = this.operands, e;
                    default:
                        return (t = {})["$" + this.operator] = this.operands[0], t
                }
            }, t.prototype._setFieldName = function(e) {
                return new t(this.operator, this.operands, e)
            }, t.prototype.eq = function(e) {
                var n = new t(ge.EQ, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.neq = function(e) {
                var n = new t(ge.NEQ, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.gt = function(e) {
                var n = new t(ge.GT, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.gte = function(e) {
                var n = new t(ge.GTE, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.lt = function(e) {
                var n = new t(ge.LT, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.lte = function(e) {
                var n = new t(ge.LTE, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.in = function(e) {
                var n = new t(ge.IN, e, this.fieldName);
                return this.and(n)
            }, t.prototype.nin = function(e) {
                var n = new t(ge.NIN, e, this.fieldName);
                return this.and(n)
            }, t.prototype.geoNear = function(e) {
                if (!(e.geometry instanceof ce)) throw new TypeError('"geometry" must be of type Point. Received type ' + typeof e.geometry);
                if (void 0 !== e.maxDistance && !W(e.maxDistance)) throw new TypeError('"maxDistance" must be of type Number. Received type ' + typeof e.maxDistance);
                if (void 0 !== e.minDistance && !W(e.minDistance)) throw new TypeError('"minDistance" must be of type Number. Received type ' + typeof e.minDistance);
                var n = new t(ge.GEO_NEAR, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.geoWithin = function(e) {
                if (!(e.geometry instanceof ne || e.geometry instanceof z)) throw new TypeError('"geometry" must be of type Polygon or MultiPolygon. Received type ' + typeof e.geometry);
                var n = new t(ge.GEO_WITHIN, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.geoIntersects = function(e) {
                if (!(e.geometry instanceof ce || e.geometry instanceof V || e.geometry instanceof z || e.geometry instanceof Z || e.geometry instanceof ee || e.geometry instanceof ne)) throw new TypeError('"geometry" must be of type Point, LineString, Polygon, MultiPoint, MultiLineString or MultiPolygon. Received type ' + typeof e.geometry);
                var n = new t(ge.GEO_INTERSECTS, [e], this.fieldName);
                return this.and(n)
            }, t
        }(de);

        function me(e) {
            return e && e instanceof ve && e._internalType === B
        }

        function be(e) {
            return me(e)
        }
        var we = {};
        for (var Ee in ge) we[Ee] = "$" + Ee;
        for (var Ee in pe) we[Ee] = "$" + Ee;
        for (var Ee in ie) we[Ee] = "$" + Ee;

        function Se(e) {
            return we[e] || "$" + e
        }
        we[ge.NEQ] = "$ne", we[ie.REMOVE] = "$unset", we[ie.SHIFT] = "$pop", we[ie.UNSHIFT] = "$push";
        var Ae = function() {
                return (Ae = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            Oe = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            },
            Ie = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Oe(arguments[t]));
                return e
            };

        function Ne(e) {
            return function e(t, n) {
                if (!K(t)) {
                    if ($(t)) return {
                        $date: +t
                    };
                    if (H(t)) return {
                        $regex: t.source,
                        $options: t.flags
                    };
                    if (Y(t)) return t.map((function(t) {
                        if (n.indexOf(t) > -1) throw new Error("Cannot convert circular structure to JSON");
                        return e(t, Ie(n, [t]))
                    }));
                    if (F(t)) {
                        var r = Ae({}, t);
                        for (var o in r) {
                            if (n.indexOf(r[o]) > -1) throw new Error("Cannot convert circular structure to JSON");
                            r[o] = e(r[o], Ie(n, [r[o]]))
                        }
                        return r
                    }
                    return t
                }
                switch (t._internalType) {
                    case D:
                        return t.toJSON();
                    case M:
                    case k:
                        return t.parse();
                    default:
                        return t.toJSON ? t.toJSON() : t
                }
            }(e, [e])
        }
        var Te = function() {
                return (Te = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            Re = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            },
            Be = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Re(arguments[t]));
                return e
            };

        function Pe(e, t, n, r) {
            var o = Te({}, e);
            for (var i in e)
                if (!/^\$/.test(i)) {
                    var s = e[i];
                    if (s && F(s) && !t(s)) {
                        if (r.indexOf(s) > -1) throw new Error("Cannot convert circular structure to JSON");
                        var a = Pe(s, t, Be(n, [i]), Be(r, [s]));
                        o[i] = a;
                        var u = !1;
                        for (var c in a) /^\$/.test(c) ? u = !0 : (o[i + "." + c] = a[c], delete o[i][c]);
                        u || delete o[i]
                    }
                } return o
        }

        function De(e) {
            return Pe(e, xe, [], [e])
        }

        function Le(e, t, n) {
            for (var r in t[n] || delete e[n], t) e[r] ? Y(e[r]) ? e[r].push(t[r]) : F(e[r]) ? F(t[r]) ? Object.assign(e[r], t[r]) : (console.warn("unmergable condition, query is object but condition is " + q(t) + ", can only overwrite", t, n), e[r] = t[r]) : (console.warn("to-merge query is of type " + q(e) + ", can only overwrite", e, t, n), e[r] = t[r]) : e[r] = t[r]
        }

        function xe(e) {
            return K(e) || $(e) || H(e)
        }

        function Ue(e) {
            return Ne(e)
        }
        var je = function() {
                function e() {}
                return e.encode = function(t) {
                    return (new e).encodeUpdate(t)
                }, e.prototype.encodeUpdate = function(e) {
                    return he(e) ? this.encodeUpdateCommand(e) : "object" === q(e) ? this.encodeUpdateObject(e) : e
                }, e.prototype.encodeUpdateCommand = function(e) {
                    if (e.fieldName === T) throw new Error("Cannot encode a comparison command with unset field name");
                    switch (e.operator) {
                        case ie.PUSH:
                        case ie.PULL:
                        case ie.PULL_ALL:
                        case ie.POP:
                        case ie.SHIFT:
                        case ie.UNSHIFT:
                        case ie.ADD_TO_SET:
                            return this.encodeArrayUpdateCommand(e);
                        default:
                            return this.encodeFieldUpdateCommand(e)
                    }
                }, e.prototype.encodeFieldUpdateCommand = function(e) {
                    var t, n, r, o, i = Se(e.operator);
                    switch (e.operator) {
                        case ie.REMOVE:
                            return (t = {})[i] = ((n = {})[e.fieldName] = "", n), t;
                        default:
                            return (r = {})[i] = ((o = {})[e.fieldName] = e.operands[0], o), r
                    }
                }, e.prototype.encodeArrayUpdateCommand = function(e) {
                    var t, n, r, o, i, s, a, u, c, f, l = Se(e.operator);
                    switch (e.operator) {
                        case ie.PUSH:
                            var h = void 0;
                            return h = Y(e.operands) ? {
                                $each: e.operands.map(Ue)
                            } : e.operands, (t = {})[l] = ((n = {})[e.fieldName] = h, n), t;
                        case ie.UNSHIFT:
                            h = {
                                $each: e.operands.map(Ue),
                                $position: 0
                            };
                            return (r = {})[l] = ((o = {})[e.fieldName] = h, o), r;
                        case ie.POP:
                            return (i = {})[l] = ((s = {})[e.fieldName] = 1, s), i;
                        case ie.SHIFT:
                            return (a = {})[l] = ((u = {})[e.fieldName] = -1, u), a;
                        default:
                            return (c = {})[l] = ((f = {})[e.fieldName] = Ue(e.operands), f), c
                    }
                }, e.prototype.encodeUpdateObject = function(e) {
                    var t = De(e);
                    for (var n in t)
                        if (!/^\$/.test(n)) {
                            var r = t[n];
                            if (he(r)) {
                                t[n] = r._setFieldName(n), Le(t, this.encodeUpdateCommand(t[n]), n)
                            } else {
                                t[n] = r = Ue(r);
                                var o = new le(ie.SET, [r], n);
                                Le(t, this.encodeUpdateCommand(o), n)
                            }
                        } return t
                }, e
            }(),
            Ce = {};

        function Me(e) {
            if (!_t.wsClientClass) throw new Error("to use realtime you must import realtime module first");
            var t = e.config.env;
            return Ce[t] || (Ce[t] = new _t.wsClientClass({
                context: {
                    appConfig: {
                        docSizeLimit: 1e3,
                        realtimePingInterval: 1e4,
                        realtimePongWaitTimeout: 5e3,
                        request: new _t.reqClass(e.config)
                    }
                }
            })), Ce[t]
        }
        var ke = function() {
                return (ke = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            qe = function() {
                function e(e, t, n, r) {
                    var o = this;
                    void 0 === r && (r = {}), this.watch = function(e) {
                        return Me(o._db).watch(ke(ke({}, e), {
                            envId: o._db.config.env,
                            collectionName: o._coll,
                            query: JSON.stringify({
                                _id: o.id
                            })
                        }))
                    }, this._db = e, this._coll = t, this.id = n, this.request = new _t.reqClass(this._db.config), this.projection = r
                }
                return e.prototype.create = function(e, t) {
                    t = t || fe();
                    var n = {
                        collectionName: this._coll,
                        data: Ne(e)
                    };
                    return this.id && (n._id = this.id), this.request.send("database.addDocument", n).then((function(e) {
                        e.code ? t(0, e) : t(0, {
                            id: e.data._id,
                            requestId: e.requestId
                        })
                    })).catch((function(e) {
                        t(e)
                    })), t.promise
                }, e.prototype.set = function(e, t) {
                    if (t = t || fe(), !this.id) return Promise.resolve({
                        code: "INVALID_PARAM",
                        message: "docIdä¸č˝ä¸şçŠş"
                    });
                    if (!e || "object" != typeof e) return Promise.resolve({
                        code: "INVALID_PARAM",
                        message: "ĺć°ĺżéćŻéçŠşĺŻščąĄ"
                    });
                    if (e.hasOwnProperty("_id")) return Promise.resolve({
                        code: "INVALID_PARAM",
                        message: "ä¸č˝ć´ć°_idçĺź"
                    });
                    var n = !1,
                        r = function(e) {
                            if ("object" == typeof e)
                                for (var t in e) e[t] instanceof le ? n = !0 : "object" == typeof e[t] && r(e[t])
                        };
                    if (r(e), n) return Promise.resolve({
                        code: "DATABASE_REQUEST_FAILED",
                        message: "update operator complicit"
                    });
                    var o = {
                        collectionName: this._coll,
                        queryType: w.DOC,
                        data: Ne(e),
                        multi: !1,
                        merge: !1,
                        upsert: !0
                    };
                    return this.id && (o.query = {
                        _id: this.id
                    }), this.request.send("database.updateDocument", o).then((function(e) {
                        e.code ? t(0, e) : t(0, {
                            updated: e.data.updated,
                            upsertedId: e.data.upserted_id,
                            requestId: e.requestId
                        })
                    })).catch((function(e) {
                        t(e)
                    })), t.promise
                }, e.prototype.update = function(e, t) {
                    if (t = t || fe(), !e || "object" != typeof e) return Promise.resolve({
                        code: "INVALID_PARAM",
                        message: "ĺć°ĺżéćŻéçŠşĺŻščąĄ"
                    });
                    if (e.hasOwnProperty("_id")) return Promise.resolve({
                        code: "INVALID_PARAM",
                        message: "ä¸č˝ć´ć°_idçĺź"
                    });
                    var n = {
                            _id: this.id
                        },
                        r = {
                            collectionName: this._coll,
                            data: je.encode(e),
                            query: n,
                            queryType: w.DOC,
                            multi: !1,
                            merge: !0,
                            upsert: !1
                        };
                    return this.request.send("database.updateDocument", r).then((function(e) {
                        e.code ? t(0, e) : t(0, {
                            updated: e.data.updated,
                            upsertedId: e.data.upserted_id,
                            requestId: e.requestId
                        })
                    })).catch((function(e) {
                        t(e)
                    })), t.promise
                }, e.prototype.remove = function(e) {
                    e = e || fe();
                    var t = {
                            _id: this.id
                        },
                        n = {
                            collectionName: this._coll,
                            query: t,
                            queryType: w.DOC,
                            multi: !1
                        };
                    return this.request.send("database.deleteDocument", n).then((function(t) {
                        t.code ? e(0, t) : e(0, {
                            deleted: t.data.deleted,
                            requestId: t.requestId
                        })
                    })).catch((function(t) {
                        e(t)
                    })), e.promise
                }, e.prototype.get = function(e) {
                    e = e || fe();
                    var t = {
                            _id: this.id
                        },
                        n = {
                            collectionName: this._coll,
                            query: t,
                            queryType: w.DOC,
                            multi: !1,
                            projection: this.projection
                        };
                    return this.request.send("database.queryDocument", n).then((function(t) {
                        if (t.code) e(0, t);
                        else {
                            var n = ae.formatResDocumentData(t.data.list);
                            e(0, {
                                data: n,
                                requestId: t.requestId,
                                total: t.TotalCount,
                                limit: t.Limit,
                                offset: t.Offset
                            })
                        }
                    })).catch((function(t) {
                        e(t)
                    })), e.promise
                }, e.prototype.field = function(t) {
                    for (var n in t) t[n] ? t[n] = 1 : t[n] = 0;
                    return new e(this._db, this._coll, this.id, t)
                }, e
            }(),
            Fe = function() {
                function e() {}
                return e.encode = function(e) {
                    return (new We).encodeQuery(e)
                }, e
            }(),
            We = function() {
                function e() {}
                return e.prototype.encodeQuery = function(e, t) {
                    var n;
                    return xe(e) ? ye(e) ? this.encodeLogicCommand(e) : me(e) ? this.encodeQueryCommand(e) : ((n = {})[t] = this.encodeQueryObject(e), n) : F(e) ? this.encodeQueryObject(e) : e
                }, e.prototype.encodeRegExp = function(e) {
                    return {
                        $regex: e.source,
                        $options: e.flags
                    }
                }, e.prototype.encodeLogicCommand = function(e) {
                    var t, n, r, o, i, s, a, u = this;
                    switch (e.operator) {
                        case pe.NOR:
                        case pe.AND:
                        case pe.OR:
                            var c = Se(e.operator),
                                f = e.operands.map((function(t) {
                                    return u.encodeQuery(t, e.fieldName)
                                }));
                            return (t = {})[c] = f, t;
                        case pe.NOT:
                            c = Se(e.operator);
                            var l = e.operands[0];
                            if (H(l)) return (n = {})[e.fieldName] = ((r = {})[c] = this.encodeRegExp(l), r), n;
                            f = this.encodeQuery(l)[e.fieldName];
                            return (o = {})[e.fieldName] = ((i = {})[c] = f, i), o;
                        default:
                            c = Se(e.operator);
                            if (1 === e.operands.length) {
                                var h = this.encodeQuery(e.operands[0]);
                                return (s = {})[c] = h, s
                            }
                            f = e.operands.map(this.encodeQuery.bind(this));
                            return (a = {})[c] = f, a
                    }
                }, e.prototype.encodeQueryCommand = function(e) {
                    return be(e), this.encodeComparisonCommand(e)
                }, e.prototype.encodeComparisonCommand = function(e) {
                    var t, n, r, o, i, s, a, u, c;
                    if (e.fieldName === T) throw new Error("Cannot encode a comparison command with unset field name");
                    var f = Se(e.operator);
                    switch (e.operator) {
                        case ge.EQ:
                        case ge.NEQ:
                        case ge.LT:
                        case ge.LTE:
                        case ge.GT:
                        case ge.GTE:
                        case ge.ELEM_MATCH:
                        case ge.EXISTS:
                        case ge.SIZE:
                        case ge.MOD:
                            return (t = {})[e.fieldName] = ((n = {})[f] = Ue(e.operands[0]), n), t;
                        case ge.IN:
                        case ge.NIN:
                        case ge.ALL:
                            return (r = {})[e.fieldName] = ((o = {})[f] = Ue(e.operands), o), r;
                        case ge.GEO_NEAR:
                            var l = e.operands[0];
                            return (i = {})[e.fieldName] = {
                                $nearSphere: {
                                    $geometry: l.geometry.toJSON(),
                                    $maxDistance: l.maxDistance,
                                    $minDistance: l.minDistance
                                }
                            }, i;
                        case ge.GEO_WITHIN:
                            l = e.operands[0];
                            return (s = {})[e.fieldName] = {
                                $geoWithin: {
                                    $geometry: l.geometry.toJSON()
                                }
                            }, s;
                        case ge.GEO_INTERSECTS:
                            l = e.operands[0];
                            return (a = {})[e.fieldName] = {
                                $geoIntersects: {
                                    $geometry: l.geometry.toJSON()
                                }
                            }, a;
                        default:
                            return (u = {})[e.fieldName] = ((c = {})[f] = Ue(e.operands[0]), c), u
                    }
                }, e.prototype.encodeQueryObject = function(e) {
                    var t = De(e);
                    for (var n in t) {
                        var r = t[n];
                        if (ye(r)) {
                            t[n] = r._setFieldName(n);
                            var o = this.encodeLogicCommand(t[n]);
                            this.mergeConditionAfterEncode(t, o, n)
                        } else if (be(r)) {
                            t[n] = r._setFieldName(n);
                            o = this.encodeComparisonCommand(t[n]);
                            this.mergeConditionAfterEncode(t, o, n)
                        } else xe(r) && (t[n] = Ue(r))
                    }
                    return t
                }, e.prototype.mergeConditionAfterEncode = function(e, t, n) {
                    for (var r in t[n] || delete e[n], t) e[r] ? Y(e[r]) ? e[r] = e[r].concat(t[r]) : F(e[r]) ? F(t[r]) ? Object.assign(e, t) : (console.warn("unmergable condition, query is object but condition is " + q(t) + ", can only overwrite", t, n), e[r] = t[r]) : (console.warn("to-merge query is of type " + q(e) + ", can only overwrite", e, t, n), e[r] = t[r]) : e[r] = t[r]
                }, e
            }(),
            Ye = function() {
                return (Ye = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            $e = function() {
                function e(e, t, n, r, o) {
                    var i = this;
                    this.watch = function(e) {
                        return Me(i._db).watch(Ye(Ye({}, e), {
                            envId: i._db.config.env,
                            collectionName: i._coll,
                            query: JSON.stringify(i._fieldFilters || {}),
                            limit: i._queryOptions.limit,
                            orderBy: i._fieldOrders ? i._fieldOrders.reduce((function(e, t) {
                                return e[t.field] = t.direction, e
                            }), {}) : void 0
                        }))
                    }, this._db = e, this._coll = t, this._fieldFilters = n, this._fieldOrders = r || [], this._queryOptions = o || {}, this._request = new _t.reqClass(this._db.config)
                }
                return e.prototype.get = function(e) {
                    e = e || fe();
                    var t = [];
                    this._fieldOrders && this._fieldOrders.forEach((function(e) {
                        t.push(e)
                    }));
                    var n = {
                        collectionName: this._coll,
                        queryType: w.WHERE
                    };
                    return this._fieldFilters && (n.query = this._fieldFilters), t.length > 0 && (n.order = t), this._queryOptions.offset && (n.offset = this._queryOptions.offset), this._queryOptions.limit ? n.limit = this._queryOptions.limit < 1e3 ? this._queryOptions.limit : 1e3 : n.limit = 100, this._queryOptions.projection && (n.projection = this._queryOptions.projection), this._request.send("database.queryDocument", n).then((function(t) {
                        if (t.code) e(0, t);
                        else {
                            var n = {
                                data: ae.formatResDocumentData(t.data.list),
                                requestId: t.requestId
                            };
                            t.TotalCount && (n.total = t.TotalCount), t.Limit && (n.limit = t.Limit), t.Offset && (n.offset = t.Offset), e(0, n)
                        }
                    })).catch((function(t) {
                        e(t)
                    })), e.promise
                }, e.prototype.count = function(e) {
                    e = e || fe();
                    var t = {
                        collectionName: this._coll,
                        queryType: w.WHERE
                    };
                    return this._fieldFilters && (t.query = this._fieldFilters), this._request.send("database.countDocument", t).then((function(t) {
                        t.code ? e(0, t) : e(0, {
                            requestId: t.requestId,
                            total: t.data.total
                        })
                    })).catch((function(t) {
                        e(t)
                    })), e.promise
                }, e.prototype.where = function(t) {
                    if ("Object" !== Object.prototype.toString.call(t).slice(8, -1)) throw Error(o.QueryParamTypeError);
                    var n = Object.keys(t),
                        r = n.some((function(e) {
                            return void 0 !== t[e]
                        }));
                    if (n.length && !r) throw Error(o.QueryParamValueError);
                    return new e(this._db, this._coll, Fe.encode(t), this._fieldOrders, this._queryOptions)
                }, e.prototype.orderBy = function(t, n) {
                    ue.isFieldPath(t), ue.isFieldOrder(n);
                    var r = {
                            field: t,
                            direction: n
                        },
                        o = this._fieldOrders.concat(r);
                    return new e(this._db, this._coll, this._fieldFilters, o, this._queryOptions)
                }, e.prototype.limit = function(t) {
                    ue.isInteger("limit", t);
                    var n = Ye({}, this._queryOptions);
                    return n.limit = t, new e(this._db, this._coll, this._fieldFilters, this._fieldOrders, n)
                }, e.prototype.skip = function(t) {
                    ue.isInteger("offset", t);
                    var n = Ye({}, this._queryOptions);
                    return n.offset = t, new e(this._db, this._coll, this._fieldFilters, this._fieldOrders, n)
                }, e.prototype.update = function(e, t) {
                    if (t = t || fe(), !e || "object" != typeof e) return Promise.resolve({
                        code: "INVALID_PARAM",
                        message: "ĺć°ĺżéćŻéçŠşĺŻščąĄ"
                    });
                    if (e.hasOwnProperty("_id")) return Promise.resolve({
                        code: "INVALID_PARAM",
                        message: "ä¸č˝ć´ć°_idçĺź"
                    });
                    var n = {
                        collectionName: this._coll,
                        query: this._fieldFilters,
                        queryType: w.WHERE,
                        multi: !0,
                        merge: !0,
                        upsert: !1,
                        data: je.encode(e)
                    };
                    return this._request.send("database.updateDocument", n).then((function(e) {
                        e.code ? t(0, e) : t(0, {
                            requestId: e.requestId,
                            updated: e.data.updated,
                            upsertId: e.data.upsert_id
                        })
                    })).catch((function(e) {
                        t(e)
                    })), t.promise
                }, e.prototype.field = function(t) {
                    for (var n in t) t[n] ? "object" != typeof t[n] && (t[n] = 1) : t[n] = 0;
                    var r = Ye({}, this._queryOptions);
                    return r.projection = t, new e(this._db, this._coll, this._fieldFilters, this._fieldOrders, r)
                }, e.prototype.remove = function(e) {
                    e = e || fe(), Object.keys(this._queryOptions).length > 0 && console.warn("`offset`, `limit` and `projection` are not supported in remove() operation"), this._fieldOrders.length > 0 && console.warn("`orderBy` is not supported in remove() operation");
                    var t = {
                        collectionName: this._coll,
                        query: Fe.encode(this._fieldFilters),
                        queryType: w.WHERE,
                        multi: !0
                    };
                    return this._request.send("database.deleteDocument", t).then((function(t) {
                        t.code ? e(0, t) : e(0, {
                            requestId: t.requestId,
                            deleted: t.data.deleted
                        })
                    })).catch((function(t) {
                        e(t)
                    })), e.promise
                }, e
            }(),
            He = n(1),
            Ke = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            Ge = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            Ve = function() {
                function e(e, t) {
                    this._stages = [], e && t && (this._db = e, this._request = new _t.reqClass(this._db.config), this._collectionName = t)
                }
                return e.prototype.end = function() {
                    return Ke(this, void 0, void 0, (function() {
                        var e;
                        return Ge(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!this._collectionName || !this._db) throw new Error("Aggregation pipeline cannot send request");
                                    return [4, this._request.send("database.aggregate", {
                                        collectionName: this._collectionName,
                                        stages: this._stages
                                    })];
                                case 1:
                                    return (e = t.sent()) && e.data && e.data.list ? [2, {
                                        requestId: e.requestId,
                                        data: JSON.parse(e.data.list).map(He.a.parse)
                                    }] : [2, e]
                            }
                        }))
                    }))
                }, e.prototype.unwrap = function() {
                    return this._stages
                }, e.prototype.done = function() {
                    return this._stages.map((function(e) {
                        var t, n = e.stageKey,
                            r = e.stageValue;
                        return (t = {})[n] = JSON.parse(r), t
                    }))
                }, e.prototype._pipe = function(e, t) {
                    return this._stages.push({
                        stageKey: "$" + e,
                        stageValue: JSON.stringify(t)
                    }), this
                }, e.prototype.addFields = function(e) {
                    return this._pipe("addFields", e)
                }, e.prototype.bucket = function(e) {
                    return this._pipe("bucket", e)
                }, e.prototype.bucketAuto = function(e) {
                    return this._pipe("bucketAuto", e)
                }, e.prototype.count = function(e) {
                    return this._pipe("count", e)
                }, e.prototype.geoNear = function(e) {
                    return this._pipe("geoNear", e)
                }, e.prototype.group = function(e) {
                    return this._pipe("group", e)
                }, e.prototype.limit = function(e) {
                    return this._pipe("limit", e)
                }, e.prototype.match = function(e) {
                    return this._pipe("match", Fe.encode(e))
                }, e.prototype.project = function(e) {
                    return this._pipe("project", e)
                }, e.prototype.lookup = function(e) {
                    return this._pipe("lookup", e)
                }, e.prototype.replaceRoot = function(e) {
                    return this._pipe("replaceRoot", e)
                }, e.prototype.sample = function(e) {
                    return this._pipe("sample", e)
                }, e.prototype.skip = function(e) {
                    return this._pipe("skip", e)
                }, e.prototype.sort = function(e) {
                    return this._pipe("sort", e)
                }, e.prototype.sortByCount = function(e) {
                    return this._pipe("sortByCount", e)
                }, e.prototype.unwind = function(e) {
                    return this._pipe("unwind", e)
                }, e
            }(),
            Je = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            ze = function(e) {
                function t(t, n) {
                    return e.call(this, t, n) || this
                }
                return Je(t, e), Object.defineProperty(t.prototype, "name", {
                    get: function() {
                        return this._coll
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.doc = function(e) {
                    if ("string" != typeof e && "number" != typeof e) throw new Error("docIdĺżéĄťä¸şĺ­çŹŚä¸˛ćć°ĺ­");
                    return new qe(this._db, this._coll, e)
                }, t.prototype.add = function(e, t) {
                    return new qe(this._db, this._coll, void 0).create(e, t)
                }, t.prototype.aggregate = function() {
                    return new Ve(this._db, this._coll)
                }, t
            }($e),
            Xe = {
                eq: function(e) {
                    return new ve(ge.EQ, [e])
                },
                neq: function(e) {
                    return new ve(ge.NEQ, [e])
                },
                lt: function(e) {
                    return new ve(ge.LT, [e])
                },
                lte: function(e) {
                    return new ve(ge.LTE, [e])
                },
                gt: function(e) {
                    return new ve(ge.GT, [e])
                },
                gte: function(e) {
                    return new ve(ge.GTE, [e])
                },
                in: function(e) {
                    return new ve(ge.IN, e)
                },
                nin: function(e) {
                    return new ve(ge.NIN, e)
                },
                all: function(e) {
                    return new ve(ge.ALL, e)
                },
                elemMatch: function(e) {
                    return new ve(ge.ELEM_MATCH, [e])
                },
                exists: function(e) {
                    return new ve(ge.EXISTS, [e])
                },
                size: function(e) {
                    return new ve(ge.SIZE, [e])
                },
                mod: function(e) {
                    return new ve(ge.MOD, [e])
                },
                geoNear: function(e) {
                    return new ve(ge.GEO_NEAR, [e])
                },
                geoWithin: function(e) {
                    return new ve(ge.GEO_WITHIN, [e])
                },
                geoIntersects: function(e) {
                    return new ve(ge.GEO_INTERSECTS, [e])
                },
                and: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = Y(arguments[0]) ? arguments[0] : Array.from(arguments);
                    return new de(pe.AND, n)
                },
                nor: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = Y(arguments[0]) ? arguments[0] : Array.from(arguments);
                    return new de(pe.NOR, n)
                },
                or: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = Y(arguments[0]) ? arguments[0] : Array.from(arguments);
                    return new de(pe.OR, n)
                },
                not: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = Y(arguments[0]) ? arguments[0] : Array.from(arguments);
                    return new de(pe.NOT, n)
                },
                set: function(e) {
                    return new le(ie.SET, [e])
                },
                remove: function() {
                    return new le(ie.REMOVE, [])
                },
                inc: function(e) {
                    return new le(ie.INC, [e])
                },
                mul: function(e) {
                    return new le(ie.MUL, [e])
                },
                push: function() {
                    for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    if (F(t[0]) && t[0].hasOwnProperty("each")) {
                        var r = t[0];
                        e = {
                            $each: r.each,
                            $position: r.position,
                            $sort: r.sort,
                            $slice: r.slice
                        }
                    } else e = Y(t[0]) ? t[0] : Array.from(t);
                    return new le(ie.PUSH, e)
                },
                pull: function(e) {
                    return new le(ie.PULL, e)
                },
                pullAll: function(e) {
                    return new le(ie.PULL_ALL, e)
                },
                pop: function() {
                    return new le(ie.POP, [])
                },
                shift: function() {
                    return new le(ie.SHIFT, [])
                },
                unshift: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = Y(arguments[0]) ? arguments[0] : Array.from(arguments);
                    return new le(ie.UNSHIFT, n)
                },
                addToSet: function(e) {
                    return new le(ie.ADD_TO_SET, e)
                },
                rename: function(e) {
                    return new le(ie.RENAME, [e])
                },
                bit: function(e) {
                    return new le(ie.BIT, [e])
                },
                max: function(e) {
                    return new le(ie.MAX, [e])
                },
                min: function(e) {
                    return new le(ie.MIN, [e])
                },
                expr: function(e) {
                    return {
                        $expr: e
                    }
                },
                jsonSchema: function(e) {
                    return {
                        $jsonSchema: e
                    }
                },
                text: function(e) {
                    return "string" === q(e) ? {
                        $search: e.search
                    } : {
                        $search: e.search,
                        $language: e.language,
                        $caseSensitive: e.caseSensitive,
                        $diacriticSensitive: e.diacriticSensitive
                    }
                },
                aggregate: {
                    pipeline: function() {
                        return new Ve
                    },
                    abs: function(e) {
                        return new Ze("abs", e)
                    },
                    add: function(e) {
                        return new Ze("add", e)
                    },
                    ceil: function(e) {
                        return new Ze("ceil", e)
                    },
                    divide: function(e) {
                        return new Ze("divide", e)
                    },
                    exp: function(e) {
                        return new Ze("exp", e)
                    },
                    floor: function(e) {
                        return new Ze("floor", e)
                    },
                    ln: function(e) {
                        return new Ze("ln", e)
                    },
                    log: function(e) {
                        return new Ze("log", e)
                    },
                    log10: function(e) {
                        return new Ze("log10", e)
                    },
                    mod: function(e) {
                        return new Ze("mod", e)
                    },
                    multiply: function(e) {
                        return new Ze("multiply", e)
                    },
                    pow: function(e) {
                        return new Ze("pow", e)
                    },
                    sqrt: function(e) {
                        return new Ze("sqrt", e)
                    },
                    subtract: function(e) {
                        return new Ze("subtract", e)
                    },
                    trunc: function(e) {
                        return new Ze("trunc", e)
                    },
                    arrayElemAt: function(e) {
                        return new Ze("arrayElemAt", e)
                    },
                    arrayToObject: function(e) {
                        return new Ze("arrayToObject", e)
                    },
                    concatArrays: function(e) {
                        return new Ze("concatArrays", e)
                    },
                    filter: function(e) {
                        return new Ze("filter", e)
                    },
                    in: function(e) {
                        return new Ze("in", e)
                    },
                    indexOfArray: function(e) {
                        return new Ze("indexOfArray", e)
                    },
                    isArray: function(e) {
                        return new Ze("isArray", e)
                    },
                    map: function(e) {
                        return new Ze("map", e)
                    },
                    range: function(e) {
                        return new Ze("range", e)
                    },
                    reduce: function(e) {
                        return new Ze("reduce", e)
                    },
                    reverseArray: function(e) {
                        return new Ze("reverseArray", e)
                    },
                    size: function(e) {
                        return new Ze("size", e)
                    },
                    slice: function(e) {
                        return new Ze("slice", e)
                    },
                    zip: function(e) {
                        return new Ze("zip", e)
                    },
                    and: function(e) {
                        return new Ze("and", e)
                    },
                    not: function(e) {
                        return new Ze("not", e)
                    },
                    or: function(e) {
                        return new Ze("or", e)
                    },
                    cmp: function(e) {
                        return new Ze("cmp", e)
                    },
                    eq: function(e) {
                        return new Ze("eq", e)
                    },
                    gt: function(e) {
                        return new Ze("gt", e)
                    },
                    gte: function(e) {
                        return new Ze("gte", e)
                    },
                    lt: function(e) {
                        return new Ze("lt", e)
                    },
                    lte: function(e) {
                        return new Ze("lte", e)
                    },
                    neq: function(e) {
                        return new Ze("ne", e)
                    },
                    cond: function(e) {
                        return new Ze("cond", e)
                    },
                    ifNull: function(e) {
                        return new Ze("ifNull", e)
                    },
                    switch: function(e) {
                        return new Ze("switch", e)
                    },
                    dateFromParts: function(e) {
                        return new Ze("dateFromParts", e)
                    },
                    dateFromString: function(e) {
                        return new Ze("dateFromString", e)
                    },
                    dayOfMonth: function(e) {
                        return new Ze("dayOfMonth", e)
                    },
                    dayOfWeek: function(e) {
                        return new Ze("dayOfWeek", e)
                    },
                    dayOfYear: function(e) {
                        return new Ze("dayOfYear", e)
                    },
                    isoDayOfWeek: function(e) {
                        return new Ze("isoDayOfWeek", e)
                    },
                    isoWeek: function(e) {
                        return new Ze("isoWeek", e)
                    },
                    isoWeekYear: function(e) {
                        return new Ze("isoWeekYear", e)
                    },
                    millisecond: function(e) {
                        return new Ze("millisecond", e)
                    },
                    minute: function(e) {
                        return new Ze("minute", e)
                    },
                    month: function(e) {
                        return new Ze("month", e)
                    },
                    second: function(e) {
                        return new Ze("second", e)
                    },
                    hour: function(e) {
                        return new Ze("hour", e)
                    },
                    week: function(e) {
                        return new Ze("week", e)
                    },
                    year: function(e) {
                        return new Ze("year", e)
                    },
                    literal: function(e) {
                        return new Ze("literal", e)
                    },
                    mergeObjects: function(e) {
                        return new Ze("mergeObjects", e)
                    },
                    objectToArray: function(e) {
                        return new Ze("objectToArray", e)
                    },
                    allElementsTrue: function(e) {
                        return new Ze("allElementsTrue", e)
                    },
                    anyElementTrue: function(e) {
                        return new Ze("anyElementTrue", e)
                    },
                    setDifference: function(e) {
                        return new Ze("setDifference", e)
                    },
                    setEquals: function(e) {
                        return new Ze("setEquals", e)
                    },
                    setIntersection: function(e) {
                        return new Ze("setIntersection", e)
                    },
                    setIsSubset: function(e) {
                        return new Ze("setIsSubset", e)
                    },
                    setUnion: function(e) {
                        return new Ze("setUnion", e)
                    },
                    concat: function(e) {
                        return new Ze("concat", e)
                    },
                    dateToString: function(e) {
                        return new Ze("dateToString", e)
                    },
                    indexOfBytes: function(e) {
                        return new Ze("indexOfBytes", e)
                    },
                    indexOfCP: function(e) {
                        return new Ze("indexOfCP", e)
                    },
                    split: function(e) {
                        return new Ze("split", e)
                    },
                    strLenBytes: function(e) {
                        return new Ze("strLenBytes", e)
                    },
                    strLenCP: function(e) {
                        return new Ze("strLenCP", e)
                    },
                    strcasecmp: function(e) {
                        return new Ze("strcasecmp", e)
                    },
                    substr: function(e) {
                        return new Ze("substr", e)
                    },
                    substrBytes: function(e) {
                        return new Ze("substrBytes", e)
                    },
                    substrCP: function(e) {
                        return new Ze("substrCP", e)
                    },
                    toLower: function(e) {
                        return new Ze("toLower", e)
                    },
                    toUpper: function(e) {
                        return new Ze("toUpper", e)
                    },
                    meta: function(e) {
                        return new Ze("meta", e)
                    },
                    addToSet: function(e) {
                        return new Ze("addToSet", e)
                    },
                    avg: function(e) {
                        return new Ze("avg", e)
                    },
                    first: function(e) {
                        return new Ze("first", e)
                    },
                    last: function(e) {
                        return new Ze("last", e)
                    },
                    max: function(e) {
                        return new Ze("max", e)
                    },
                    min: function(e) {
                        return new Ze("min", e)
                    },
                    push: function(e) {
                        return new Ze("push", e)
                    },
                    stdDevPop: function(e) {
                        return new Ze("stdDevPop", e)
                    },
                    stdDevSamp: function(e) {
                        return new Ze("stdDevSamp", e)
                    },
                    sum: function(e) {
                        return new Ze("sum", e)
                    },
                    let: function(e) {
                        return new Ze("let", e)
                    }
                },
                project: {
                    slice: function(e) {
                        return new Qe("slice", e)
                    },
                    elemMatch: function(e) {
                        return new Qe("elemMatch", e)
                    }
                }
            },
            Ze = function(e, t) {
                this["$" + e] = t
            },
            Qe = function(e, t) {
                this["$" + e] = t
            },
            et = function() {
                function e(e) {
                    var t = e.regexp,
                        n = e.options;
                    if (!t) throw new TypeError("regexp must be a string");
                    this.$regex = t, this.$options = n
                }
                return e.prototype.parse = function() {
                    return {
                        $regex: this.$regex,
                        $options: this.$options
                    }
                }, Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return k
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }();

        function tt(e) {
            return new et(e)
        }
        var nt = {
                code: "INSERT_DOC_FAIL",
                message: "insert document failed"
            },
            rt = {
                code: "DATABASE_TRANSACTION_CONFLICT",
                message: "database transaction conflict"
            },
            ot = function() {
                return (ot = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            it = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            st = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            at = "database.updateDocInTransaction",
            ut = function() {
                function e(e, t, n) {
                    this._coll = t, this.id = n, this._transaction = e, this._request = this._transaction.getRequestMethod(), this._transactionId = this._transaction.getTransactionId()
                }
                return e.prototype.create = function(e) {
                    return it(this, void 0, void 0, (function() {
                        var t, n, r, o;
                        return st(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = {
                                        collectionName: this._coll,
                                        transactionId: this._transactionId,
                                        data: He.a.stringify(Ne(e), {
                                            relaxed: !1
                                        })
                                    }, this.id && (t._id = this.id), [4, this._request.send("database.insertDocInTransaction", t)];
                                case 1:
                                    if ((n = i.sent()).code) throw n;
                                    if (r = He.a.parse(n.inserted), 1 == (o = He.a.parse(n.ok)) && 1 == r) return [2, ot(ot({}, n), {
                                        ok: o,
                                        inserted: r
                                    })];
                                    throw new Error(nt.message)
                            }
                        }))
                    }))
                }, e.prototype.get = function() {
                    return it(this, void 0, void 0, (function() {
                        var e, t;
                        return st(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return e = {
                                        collectionName: this._coll,
                                        transactionId: this._transactionId,
                                        query: {
                                            _id: {
                                                $eq: this.id
                                            }
                                        }
                                    }, [4, this._request.send("database.getInTransaction", e)];
                                case 1:
                                    if ((t = n.sent()).code) throw t;
                                    return [2, {
                                        data: "null" !== t.data ? ae.formatField(He.a.parse(t.data)) : He.a.parse(t.data),
                                        requestId: t.requestId
                                    }]
                            }
                        }))
                    }))
                }, e.prototype.set = function(e) {
                    return it(this, void 0, void 0, (function() {
                        var t, n;
                        return st(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = {
                                        collectionName: this._coll,
                                        transactionId: this._transactionId,
                                        query: {
                                            _id: {
                                                $eq: this.id
                                            }
                                        },
                                        data: He.a.stringify(Ne(e), {
                                            relaxed: !1
                                        }),
                                        upsert: !0
                                    }, [4, this._request.send(at, t)];
                                case 1:
                                    if ((n = r.sent()).code) throw n;
                                    return [2, ot(ot({}, n), {
                                        updated: He.a.parse(n.updated),
                                        upserted: n.upserted ? JSON.parse(n.upserted) : null
                                    })]
                            }
                        }))
                    }))
                }, e.prototype.update = function(e) {
                    return it(this, void 0, void 0, (function() {
                        var t, n;
                        return st(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = {
                                        collectionName: this._coll,
                                        transactionId: this._transactionId,
                                        query: {
                                            _id: {
                                                $eq: this.id
                                            }
                                        },
                                        data: He.a.stringify(je.encode(e), {
                                            relaxed: !1
                                        })
                                    }, [4, this._request.send(at, t)];
                                case 1:
                                    if ((n = r.sent()).code) throw n;
                                    return [2, ot(ot({}, n), {
                                        updated: He.a.parse(n.updated)
                                    })]
                            }
                        }))
                    }))
                }, e.prototype.delete = function() {
                    return it(this, void 0, void 0, (function() {
                        var e, t;
                        return st(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return e = {
                                        collectionName: this._coll,
                                        transactionId: this._transactionId,
                                        query: {
                                            _id: {
                                                $eq: this.id
                                            }
                                        }
                                    }, [4, this._request.send("database.deleteDocInTransaction", e)];
                                case 1:
                                    if ((t = n.sent()).code) throw t;
                                    return [2, ot(ot({}, t), {
                                        deleted: He.a.parse(t.deleted)
                                    })]
                            }
                        }))
                    }))
                }, e
            }(),
            ct = function(e, t) {
                this._coll = t, this._transaction = e
            },
            ft = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            lt = function(e) {
                function t(t, n) {
                    return e.call(this, t, n) || this
                }
                return ft(t, e), Object.defineProperty(t.prototype, "name", {
                    get: function() {
                        return this._coll
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.doc = function(e) {
                    if ("string" != typeof e && "number" != typeof e) throw new Error("docIdĺżéĄťä¸şĺ­çŹŚä¸˛ćć°ĺ­");
                    return new ut(this._transaction, this._coll, e)
                }, t.prototype.add = function(e) {
                    var t;
                    return void 0 !== e._id && (t = e._id), new ut(this._transaction, this._coll, t).create(e)
                }, t
            }(ct),
            ht = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            pt = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            dt = function() {
                function e(e) {
                    this._db = e, this._request = new _t.reqClass(this._db.config), this.aborted = !1, this.commited = !1, this.inited = !1
                }
                return e.prototype.init = function() {
                    return ht(this, void 0, void 0, (function() {
                        var e;
                        return pt(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this._request.send("database.startTransaction")];
                                case 1:
                                    if ((e = t.sent()).code) throw e;
                                    return this.inited = !0, this._id = e.transactionId, [2]
                            }
                        }))
                    }))
                }, e.prototype.collection = function(e) {
                    if (!e) throw new Error("Collection name is required");
                    return new lt(this, e)
                }, e.prototype.getTransactionId = function() {
                    return this._id
                }, e.prototype.getRequestMethod = function() {
                    return this._request
                }, e.prototype.commit = function() {
                    return ht(this, void 0, void 0, (function() {
                        var e, t;
                        return pt(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return e = {
                                        transactionId: this._id
                                    }, [4, this._request.send("database.commitTransaction", e)];
                                case 1:
                                    if ((t = n.sent()).code) throw t;
                                    return this.commited = !0, [2, t]
                            }
                        }))
                    }))
                }, e.prototype.rollback = function(e) {
                    return ht(this, void 0, void 0, (function() {
                        var t, n;
                        return pt(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = {
                                        transactionId: this._id
                                    }, [4, this._request.send("database.abortTransaction", t)];
                                case 1:
                                    if ((n = r.sent()).code) throw n;
                                    return this.aborted = !0, this.abortReason = e, [2, n]
                            }
                        }))
                    }))
                }, e
            }();

        function yt() {
            return ht(this, void 0, void 0, (function() {
                var e;
                return pt(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, (e = new dt(this)).init()];
                        case 1:
                            return t.sent(), [2, e]
                    }
                }))
            }))
        }

        function gt(e, t) {
            return void 0 === t && (t = 3), ht(this, void 0, void 0, (function() {
                var n, r, o, i, s = this;
                return pt(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 4, , 10]), [4, (n = new dt(this)).init()];
                        case 1:
                            return a.sent(), [4, e(n)];
                        case 2:
                            if (r = a.sent(), !0 === n.aborted) throw n.abortReason;
                            return [4, n.commit()];
                        case 3:
                            return a.sent(), [2, r];
                        case 4:
                            if (o = a.sent(), !1 === n.inited) throw o;
                            return i = function(e) {
                                return ht(s, void 0, void 0, (function() {
                                    return pt(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                if (n.aborted || n.commited) return [3, 5];
                                                t.label = 1;
                                            case 1:
                                                return t.trys.push([1, 3, , 4]), [4, n.rollback()];
                                            case 2:
                                                return t.sent(), [3, 4];
                                            case 3:
                                                return t.sent(), [3, 4];
                                            case 4:
                                                throw e;
                                            case 5:
                                                if (!0 === n.aborted) throw n.abortReason;
                                                throw e
                                        }
                                    }))
                                }))
                            }, t <= 0 ? [4, i(o)] : [3, 6];
                        case 5:
                            a.sent(), a.label = 6;
                        case 6:
                            return o && o.code === rt.code ? [4, gt.bind(this)(e, --t)] : [3, 8];
                        case 7:
                            return [2, a.sent()];
                        case 8:
                            return [4, i(o)];
                        case 9:
                            return a.sent(), [3, 10];
                        case 10:
                            return [2]
                    }
                }))
            }))
        }
        var _t = function() {
                function e(e) {
                    this.config = e, this.Geo = i, this.serverDate = oe, this.command = Xe, this.RegExp = tt, this.startTransaction = yt, this.runTransaction = gt, this.logicCommand = de, this.updateCommand = le, this.queryCommand = ve
                }
                return e.prototype.collection = function(e) {
                    if (!e) throw new Error("Collection name is required");
                    return new ze(this, e)
                }, e.prototype.createCollection = function(t) {
                    var n = {
                        collectionName: t
                    };
                    return new e.reqClass(this.config).send("database.addCollection", n)
                }, e
            }(),
            vt = function() {
                return (vt = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };
        var mt = {
            name: "database",
            entity: {
                database: function(e) {
                    var t = this.platform,
                        n = t.adapter,
                        r = t.runtime;
                    return _t.reqClass = this.request.constructor, _t.getAccessToken = this.authInstance ? this.authInstance.getAccessToken.bind(this.authInstance) : function() {
                        return ""
                    }, _t.runtime = r, this.wsClientClass && (_t.wsClass = n.wsClass, _t.wsClientClass = this.wsClientClass), _t.ws || (_t.ws = null), new _t(vt(vt({}, this.config), e))
                }
            }
        };
        try {
            cloudbase.registerComponent(mt)
        } catch (e) {}

        function bt(e) {
            try {
                e.registerComponent(mt)
            } catch (e) {
                console.warn(e)
            }
        }
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "registerRealtime", (function() {
            return q
        }));
        var r = n(10),
            o = n.n(r),
            i = n(11),
            s = n.n(i),
            a = n(12),
            u = n.n(a);

        function c(e) {
            return void 0 === e && (e = ""), (e ? e + "_" : "") + +new Date + "_" + Math.random()
        }
        var f, l, h = function(e) {
                this.close = e.close, this.onChange = e.onChange, this.onError = e.onError, e.debug && Object.defineProperty(this, "virtualClient", {
                    get: function() {
                        return e.virtualClient
                    }
                })
            },
            p = function(e) {
                var t, n, r = e.id,
                    o = e.docChanges,
                    i = e.docs,
                    s = e.msgType,
                    a = e.type;
                Object.defineProperties(this, {
                    id: {
                        get: function() {
                            return r
                        },
                        enumerable: !0
                    },
                    docChanges: {
                        get: function() {
                            return t || (t = JSON.parse(JSON.stringify(o))), t
                        },
                        enumerable: !0
                    },
                    docs: {
                        get: function() {
                            return n || (n = JSON.parse(JSON.stringify(i))), n
                        },
                        enumerable: !0
                    },
                    msgType: {
                        get: function() {
                            return s
                        },
                        enumerable: !0
                    },
                    type: {
                        get: function() {
                            return a
                        },
                        enumerable: !0
                    }
                })
            },
            d = (f = function(e, t) {
                return (f = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                function n() {
                    this.constructor = e
                }
                f(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
            y = function(e) {
                function t(t) {
                    var n = e.call(this, "Watch Error " + JSON.stringify(t.msgData) + " (requestid: " + t.requestId + ")") || this;
                    return n.isRealtimeErrorMessageError = !0, n.payload = t, n
                }
                return d(t, e), t
            }(Error),
            g = function(e) {
                return null == e ? void 0 : e.isRealtimeErrorMessageError
            },
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.type = "timeout", t.payload = null, t.generic = !0, t
                }
                return d(t, e), t
            }(Error),
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.type = "cancelled", t.payload = null, t.generic = !0, t
                }
                return d(t, e), t
            }(Error),
            m = function(e) {
                function t(t) {
                    var n = e.call(this, t.errMsg) || this;
                    return n.errCode = "UNKNOWN_ERROR", Object.defineProperties(n, {
                        message: {
                            get: function() {
                                return "errCode: " + this.errCode + " " + (b[this.errCode] || "") + " | errMsg: " + this.errMsg
                            },
                            set: function(e) {
                                this.errMsg = e
                            }
                        }
                    }), n.errCode = t.errCode || "UNKNOWN_ERROR", n.errMsg = t.errMsg, n
                }
                return d(t, e), Object.defineProperty(t.prototype, "message", {
                    get: function() {
                        return "errCode: " + this.errCode + " | errMsg: " + this.errMsg
                    },
                    set: function(e) {
                        this.errMsg = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), t
            }(Error),
            b = {
                UNKNOWN_ERROR: "UNKNOWN_ERROR",
                SDK_DATABASE_REALTIME_LISTENER_INIT_WATCH_FAIL: "SDK_DATABASE_REALTIME_LISTENER_INIT_WATCH_FAIL",
                SDK_DATABASE_REALTIME_LISTENER_RECONNECT_WATCH_FAIL: "SDK_DATABASE_REALTIME_LISTENER_RECONNECT_WATCH_FAIL",
                SDK_DATABASE_REALTIME_LISTENER_REBUILD_WATCH_FAIL: "SDK_DATABASE_REALTIME_LISTENER_REBUILD_WATCH_FAIL",
                SDK_DATABASE_REALTIME_LISTENER_CLOSE_WATCH_FAIL: "SDK_DATABASE_REALTIME_LISTENER_CLOSE_WATCH_FAIL",
                SDK_DATABASE_REALTIME_LISTENER_SERVER_ERROR_MSG: "SDK_DATABASE_REALTIME_LISTENER_SERVER_ERROR_MSG",
                SDK_DATABASE_REALTIME_LISTENER_RECEIVE_INVALID_SERVER_DATA: "SDK_DATABASE_REALTIME_LISTENER_RECEIVE_INVALID_SERVER_DATA",
                SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_ERROR: "SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_ERROR",
                SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_CLOSED: "SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_CLOSED",
                SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL: "SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL",
                SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR: "SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR"
            },
            w = function(e) {
                return void 0 === e && (e = 0), new Promise((function(t) {
                    return setTimeout(t, e)
                }))
            },
            E = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            S = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            A = function() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    o = 0;
                for (t = 0; t < n; t++)
                    for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
                return r
            };
        ! function(e) {
            e.LOGGINGIN = "LOGGINGIN", e.INITING = "INITING", e.REBUILDING = "REBUILDING", e.ACTIVE = "ACTIVE", e.ERRORED = "ERRORED", e.CLOSING = "CLOSING", e.CLOSED = "CLOSED", e.PAUSED = "PAUSED", e.RESUMING = "RESUMING"
        }(l || (l = {}));
        var O = function() {
            function e(e) {
                var t = this;
                this.watchStatus = l.INITING, this._login = function(e, n) {
                    return E(t, void 0, void 0, (function() {
                        var t;
                        return S(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return this.watchStatus = l.LOGGINGIN, [4, this.login(e, n)];
                                case 1:
                                    return t = r.sent(), this.envId || (this.envId = t.envId), [2, t]
                            }
                        }))
                    }))
                }, this.initWatch = function(e) {
                    return E(t, void 0, void 0, (function() {
                        var t, n = this;
                        return S(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    if (this._initWatchPromise) return [2, this._initWatchPromise];
                                    this._initWatchPromise = new Promise((function(t, r) {
                                        return E(n, void 0, void 0, (function() {
                                            var n, o, i, s, a, u, f, h, d, y;
                                            return S(this, (function(g) {
                                                switch (g.label) {
                                                    case 0:
                                                        return g.trys.push([0, 3, , 4]), this.watchStatus === l.PAUSED ? (console.log("[realtime] initWatch cancelled on pause"), [2, t()]) : [4, this._login(this.envId, e)];
                                                    case 1:
                                                        return n = g.sent().envId, this.watchStatus === l.PAUSED ? (console.log("[realtime] initWatch cancelled on pause"), [2, t()]) : (this.watchStatus = l.INITING, o = {
                                                            watchId: this.watchId,
                                                            requestId: c(),
                                                            msgType: "INIT_WATCH",
                                                            msgData: {
                                                                envId: n,
                                                                collName: this.collectionName,
                                                                query: this.query,
                                                                limit: this.limit,
                                                                orderBy: this.orderBy
                                                            }
                                                        }, [4, this.send({
                                                            msg: o,
                                                            waitResponse: !0,
                                                            skipOnMessage: !0,
                                                            timeout: 1e4
                                                        })]);
                                                    case 2:
                                                        if (i = g.sent(), s = i.msgData, a = s.events, u = s.currEvent, this.sessionInfo = {
                                                                queryID: i.msgData.queryID,
                                                                currentEventId: u - 1,
                                                                currentDocs: []
                                                            }, a.length > 0) {
                                                            for (f = 0, h = a; f < h.length; f++) h[f].ID = u;
                                                            this.handleServerEvents(i)
                                                        } else this.sessionInfo.currentEventId = u, d = new p({
                                                            id: u,
                                                            docChanges: [],
                                                            docs: [],
                                                            type: "init"
                                                        }), this.listener.onChange(d), this.scheduleSendACK();
                                                        return this.onWatchStart(this, this.sessionInfo.queryID), this.watchStatus = l.ACTIVE, this._availableRetries.INIT_WATCH = 2, t(), [3, 4];
                                                    case 3:
                                                        return y = g.sent(), this.handleWatchEstablishmentError(y, {
                                                            operationName: "INIT_WATCH",
                                                            resolve: t,
                                                            reject: r
                                                        }), [3, 4];
                                                    case 4:
                                                        return [2]
                                                }
                                            }))
                                        }))
                                    })), t = !1, r.label = 1;
                                case 1:
                                    return r.trys.push([1, , 3, 4]), [4, this._initWatchPromise];
                                case 2:
                                    return r.sent(), t = !0, [3, 4];
                                case 3:
                                    return this._initWatchPromise = void 0, [7];
                                case 4:
                                    return console.log("[realtime] initWatch " + (t ? "success" : "fail")), [2]
                            }
                        }))
                    }))
                }, this.rebuildWatch = function(e) {
                    return E(t, void 0, void 0, (function() {
                        var t, n = this;
                        return S(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    if (this._rebuildWatchPromise) return [2, this._rebuildWatchPromise];
                                    this._rebuildWatchPromise = new Promise((function(t, r) {
                                        return E(n, void 0, void 0, (function() {
                                            var n, o, i, s;
                                            return S(this, (function(a) {
                                                switch (a.label) {
                                                    case 0:
                                                        return a.trys.push([0, 3, , 4]), this.watchStatus === l.PAUSED ? (console.log("[realtime] rebuildWatch cancelled on pause"), [2, t()]) : [4, this._login(this.envId, e)];
                                                    case 1:
                                                        if (n = a.sent().envId, !this.sessionInfo) throw new Error("can not rebuildWatch without a successful initWatch (lack of sessionInfo)");
                                                        return this.watchStatus === l.PAUSED ? (console.log("[realtime] rebuildWatch cancelled on pause"), [2, t()]) : (this.watchStatus = l.REBUILDING, o = {
                                                            watchId: this.watchId,
                                                            requestId: c(),
                                                            msgType: "REBUILD_WATCH",
                                                            msgData: {
                                                                envId: n,
                                                                collName: this.collectionName,
                                                                queryID: this.sessionInfo.queryID,
                                                                eventID: this.sessionInfo.currentEventId
                                                            }
                                                        }, [4, this.send({
                                                            msg: o,
                                                            waitResponse: !0,
                                                            skipOnMessage: !1,
                                                            timeout: 1e4
                                                        })]);
                                                    case 2:
                                                        return i = a.sent(), this.handleServerEvents(i), this.watchStatus = l.ACTIVE, this._availableRetries.REBUILD_WATCH = 2, t(), [3, 4];
                                                    case 3:
                                                        return s = a.sent(), this.handleWatchEstablishmentError(s, {
                                                            operationName: "REBUILD_WATCH",
                                                            resolve: t,
                                                            reject: r
                                                        }), [3, 4];
                                                    case 4:
                                                        return [2]
                                                }
                                            }))
                                        }))
                                    })), t = !1, r.label = 1;
                                case 1:
                                    return r.trys.push([1, , 3, 4]), [4, this._rebuildWatchPromise];
                                case 2:
                                    return r.sent(), t = !0, [3, 4];
                                case 3:
                                    return this._rebuildWatchPromise = void 0, [7];
                                case 4:
                                    return console.log("[realtime] rebuildWatch " + (t ? "success" : "fail")), [2]
                            }
                        }))
                    }))
                }, this.handleWatchEstablishmentError = function(e, n) {
                    return E(t, void 0, void 0, (function() {
                        var t, r, o, i = this;
                        return S(this, (function(s) {
                            return t = "INIT_WATCH" === n.operationName, r = function() {
                                i.closeWithError(new m({
                                    errCode: t ? b.SDK_DATABASE_REALTIME_LISTENER_INIT_WATCH_FAIL : b.SDK_DATABASE_REALTIME_LISTENER_REBUILD_WATCH_FAIL,
                                    errMsg: e
                                })), n.reject(e)
                            }, o = function(e) {
                                i.useRetryTicket(n.operationName) ? t ? (i._initWatchPromise = void 0, n.resolve(i.initWatch(e))) : (i._rebuildWatchPromise = void 0, n.resolve(i.rebuildWatch(e))) : r()
                            }, this.handleCommonError(e, {
                                onSignError: function() {
                                    return o(!0)
                                },
                                onTimeoutError: function() {
                                    return o(!1)
                                },
                                onNotRetryableError: r,
                                onCancelledError: n.reject,
                                onUnknownError: function() {
                                    return E(i, void 0, void 0, (function() {
                                        var e, t = this;
                                        return S(this, (function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return r.trys.push([0, 8, , 9]), e = function() {
                                                        return E(t, void 0, void 0, (function() {
                                                            return S(this, (function(e) {
                                                                switch (e.label) {
                                                                    case 0:
                                                                        return this.pause(), [4, this.onceWSConnected()];
                                                                    case 1:
                                                                        return e.sent(), o(!0), [2]
                                                                }
                                                            }))
                                                        }))
                                                    }, this.isWSConnected() ? [3, 2] : [4, e()];
                                                case 1:
                                                    return r.sent(), [3, 7];
                                                case 2:
                                                    return [4, w(100)];
                                                case 3:
                                                    return r.sent(), this.watchStatus !== l.PAUSED ? [3, 4] : (n.reject(new v(n.operationName + " cancelled due to pause after unknownError")), [3, 7]);
                                                case 4:
                                                    return this.isWSConnected() ? [3, 6] : [4, e()];
                                                case 5:
                                                    return r.sent(), [3, 7];
                                                case 6:
                                                    o(!1), r.label = 7;
                                                case 7:
                                                    return [3, 9];
                                                case 8:
                                                    return r.sent(), o(!0), [3, 9];
                                                case 9:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                }
                            }), [2]
                        }))
                    }))
                }, this.closeWatch = function() {
                    return E(t, void 0, void 0, (function() {
                        var e, t, n;
                        return S(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    if (e = this.sessionInfo ? this.sessionInfo.queryID : "", this.watchStatus !== l.ACTIVE) return this.watchStatus = l.CLOSED, this.onWatchClose(this, e), [2];
                                    r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, 4, 5]), this.watchStatus = l.CLOSING, t = {
                                        watchId: this.watchId,
                                        requestId: c(),
                                        msgType: "CLOSE_WATCH",
                                        msgData: null
                                    }, [4, this.send({
                                        msg: t
                                    })];
                                case 2:
                                    return r.sent(), this.sessionInfo = void 0, this.watchStatus = l.CLOSED, [3, 5];
                                case 3:
                                    return n = r.sent(), this.closeWithError(new m({
                                        errCode: b.SDK_DATABASE_REALTIME_LISTENER_CLOSE_WATCH_FAIL,
                                        errMsg: n
                                    })), [3, 5];
                                case 4:
                                    return this.onWatchClose(this, e), [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }))
                }, this.scheduleSendACK = function() {
                    t.clearACKSchedule(), t._ackTimeoutId = setTimeout((function() {
                        t._waitExpectedTimeoutId ? t.scheduleSendACK() : t.sendACK()
                    }), 1e4)
                }, this.clearACKSchedule = function() {
                    t._ackTimeoutId && clearTimeout(t._ackTimeoutId)
                }, this.sendACK = function() {
                    return E(t, void 0, void 0, (function() {
                        var e, t, n;
                        return S(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), this.watchStatus !== l.ACTIVE ? (this.scheduleSendACK(), [2]) : this.sessionInfo ? (e = {
                                        watchId: this.watchId,
                                        requestId: c(),
                                        msgType: "CHECK_LAST",
                                        msgData: {
                                            queryID: this.sessionInfo.queryID,
                                            eventID: this.sessionInfo.currentEventId
                                        }
                                    }, [4, this.send({
                                        msg: e
                                    })]) : (console.warn("[realtime listener] can not send ack without a successful initWatch (lack of sessionInfo)"), [2]);
                                case 1:
                                    return r.sent(), this.scheduleSendACK(), [3, 3];
                                case 2:
                                    if (t = r.sent(), g(t)) switch ((n = t.payload).msgData.code) {
                                        case "CHECK_LOGIN_FAILED":
                                        case "SIGN_EXPIRED_ERROR":
                                        case "SIGN_INVALID_ERROR":
                                        case "SIGN_PARAM_INVALID":
                                            return this.rebuildWatch(), [2];
                                        case "QUERYID_INVALID_ERROR":
                                        case "SYS_ERR":
                                        case "INVALIID_ENV":
                                        case "COLLECTION_PERMISSION_DENIED":
                                            return this.closeWithError(new m({
                                                errCode: b.SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL,
                                                errMsg: n.msgData.code
                                            })), [2]
                                    }
                                    return this._availableRetries.CHECK_LAST && this._availableRetries.CHECK_LAST > 0 ? (this._availableRetries.CHECK_LAST--, this.scheduleSendACK()) : this.closeWithError(new m({
                                        errCode: b.SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL,
                                        errMsg: t
                                    })), [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }, this.handleCommonError = function(e, t) {
                    if (g(e)) {
                        switch (e.payload.msgData.code) {
                            case "CHECK_LOGIN_FAILED":
                            case "SIGN_EXPIRED_ERROR":
                            case "SIGN_INVALID_ERROR":
                            case "SIGN_PARAM_INVALID":
                                return void t.onSignError(e);
                            case "QUERYID_INVALID_ERROR":
                            case "SYS_ERR":
                            case "INVALIID_ENV":
                            case "COLLECTION_PERMISSION_DENIED":
                            default:
                                return void t.onNotRetryableError(e)
                        }
                    } else {
                        if (function(e) {
                                return "timeout" === e.type
                            }(e)) return void t.onTimeoutError(e);
                        if (function(e) {
                                return "cancelled" === e.type
                            }(e)) return void t.onCancelledError(e)
                    }
                    t.onUnknownError(e)
                }, this.watchId = "watchid_" + +new Date + "_" + Math.random(), this.envId = e.envId, this.collectionName = e.collectionName, this.query = e.query, this.limit = e.limit, this.orderBy = e.orderBy, this.send = e.send, this.login = e.login, this.isWSConnected = e.isWSConnected, this.onceWSConnected = e.onceWSConnected, this.getWaitExpectedTimeoutLength = e.getWaitExpectedTimeoutLength, this.onWatchStart = e.onWatchStart, this.onWatchClose = e.onWatchClose, this.debug = e.debug, this._availableRetries = {
                    INIT_WATCH: 2,
                    REBUILD_WATCH: 2,
                    CHECK_LAST: 2
                }, this.listener = new h({
                    close: this.closeWatch,
                    onChange: e.onChange,
                    onError: e.onError,
                    debug: this.debug,
                    virtualClient: this
                }), this.initWatch()
            }
            return e.prototype.onMessage = function(e) {
                var t = this;
                switch (this.watchStatus) {
                    case l.PAUSED:
                        if ("ERROR" !== e.msgType) return;
                        break;
                    case l.LOGGINGIN:
                    case l.INITING:
                    case l.REBUILDING:
                        return void console.warn("[realtime listener] internal non-fatal error: unexpected message received while " + this.watchStatus);
                    case l.CLOSED:
                        return void console.warn("[realtime listener] internal non-fatal error: unexpected message received when the watch has closed");
                    case l.ERRORED:
                        return void console.warn("[realtime listener] internal non-fatal error: unexpected message received when the watch has ended with error")
                }
                if (this.sessionInfo) switch (this.scheduleSendACK(), e.msgType) {
                    case "NEXT_EVENT":
                        console.warn("nextevent " + e.msgData.currEvent + " ignored", e), this.handleServerEvents(e);
                        break;
                    case "CHECK_EVENT":
                        this.sessionInfo.currentEventId < e.msgData.currEvent && (this.sessionInfo.expectEventId = e.msgData.currEvent, this.clearWaitExpectedEvent(), this._waitExpectedTimeoutId = setTimeout((function() {
                            t.rebuildWatch()
                        }), this.getWaitExpectedTimeoutLength()), console.log("[realtime] waitExpectedTimeoutLength " + this.getWaitExpectedTimeoutLength()));
                        break;
                    case "ERROR":
                        this.closeWithError(new m({
                            errCode: b.SDK_DATABASE_REALTIME_LISTENER_SERVER_ERROR_MSG,
                            errMsg: e.msgData.code + " - " + e.msgData.message
                        }));
                        break;
                    default:
                        console.warn("[realtime listener] virtual client receive unexpected msg " + e.msgType + ": ", e)
                } else console.warn("[realtime listener] internal non-fatal error: sessionInfo not found while message is received.")
            }, e.prototype.closeWithError = function(e) {
                this.watchStatus = l.ERRORED, this.clearACKSchedule(), this.listener.onError(e), this.onWatchClose(this, this.sessionInfo && this.sessionInfo.queryID || ""), console.log("[realtime] client closed (" + this.collectionName + " " + this.query + ") (watchId " + this.watchId + ")")
            }, e.prototype.pause = function() {
                this.watchStatus = l.PAUSED, console.log("[realtime] client paused (" + this.collectionName + " " + this.query + ") (watchId " + this.watchId + ")")
            }, e.prototype.resume = function() {
                return E(this, void 0, void 0, (function() {
                    var e;
                    return S(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                this.watchStatus = l.RESUMING, console.log("[realtime] client resuming with " + (this.sessionInfo ? "REBUILD_WATCH" : "INIT_WATCH") + " (" + this.collectionName + " " + this.query + ") (" + this.watchId + ")"), t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), [4, this.sessionInfo ? this.rebuildWatch() : this.initWatch()];
                            case 2:
                                return t.sent(), console.log("[realtime] client successfully resumed (" + this.collectionName + " " + this.query + ") (" + this.watchId + ")"), [3, 4];
                            case 3:
                                return e = t.sent(), console.error("[realtime] client resume failed (" + this.collectionName + " " + this.query + ") (" + this.watchId + ")", e), [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.useRetryTicket = function(e) {
                return !!(this._availableRetries[e] && this._availableRetries[e] > 0) && (this._availableRetries[e]--, console.log("[realtime] " + e + " use a retry ticket, now only " + this._availableRetries[e] + " retry left"), !0)
            }, e.prototype.handleServerEvents = function(e) {
                return E(this, void 0, void 0, (function() {
                    var t;
                    return S(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), this.scheduleSendACK(), [4, this._handleServerEvents(e)];
                            case 1:
                                return n.sent(), this._postHandleServerEventsValidityCheck(e), [3, 3];
                            case 2:
                                throw t = n.sent(), console.error("[realtime listener] internal non-fatal error: handle server events failed with error: ", t), t;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype._handleServerEvents = function(e) {
                return E(this, void 0, void 0, (function() {
                    var t, n, r, i, a, c, f, l, h, d, y, g;
                    return S(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                if (t = e.requestId, n = e.msgData.events, r = e.msgType, !n.length || !this.sessionInfo) return [2];
                                i = this.sessionInfo;
                                try {
                                    a = n.map(I)
                                } catch (e) {
                                    return this.closeWithError(new m({
                                        errCode: b.SDK_DATABASE_REALTIME_LISTENER_RECEIVE_INVALID_SERVER_DATA,
                                        errMsg: e
                                    })), [2]
                                }
                                c = A(i.currentDocs), f = !1, l = function(n, l) {
                                    var d, y, g, _, v, w, E, O, I, N, T;
                                    return S(this, (function(S) {
                                        switch (S.label) {
                                            case 0:
                                                return d = a[n], i.currentEventId >= d.id ? (!a[n - 1] || d.id > a[n - 1].id ? console.warn("[realtime] duplicate event received, cur " + i.currentEventId + " but got " + d.id) : console.error("[realtime listener] server non-fatal error: events out of order (the latter event's id is smaller than that of the former) (requestId " + t + ")"), [2, "continue"]) : [3, 1];
                                            case 1:
                                                if (i.currentEventId !== d.id - 1) return [3, 2];
                                                switch (d.dataType) {
                                                    case "update":
                                                        if (!d.doc) switch (d.queueType) {
                                                            case "update":
                                                            case "dequeue":
                                                                if (y = c.find((function(e) {
                                                                        return e._id === d.docId
                                                                    }))) {
                                                                    if (w = u()(y), d.updatedFields)
                                                                        for (v in d.updatedFields) o()(w, v, d.updatedFields[v]);
                                                                    if (d.removedFields)
                                                                        for (g = 0, _ = d.removedFields; g < _.length; g++) v = _[g], s()(w, v);
                                                                    d.doc = w
                                                                } else console.error("[realtime listener] internal non-fatal server error: unexpected update dataType event where no doc is associated.");
                                                                break;
                                                            case "enqueue":
                                                                throw E = new m({
                                                                    errCode: b.SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR,
                                                                    errMsg: 'HandleServerEvents: full doc is not provided with dataType="update" and queueType="enqueue" (requestId ' + e.requestId + ")"
                                                                }), h.closeWithError(E), E
                                                        }
                                                        break;
                                                    case "replace":
                                                        if (!d.doc) throw E = new m({
                                                            errCode: b.SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR,
                                                            errMsg: 'HandleServerEvents: full doc is not provided with dataType="replace" (requestId ' + e.requestId + ")"
                                                        }), h.closeWithError(E), E;
                                                        break;
                                                    case "remove":
                                                        (w = c.find((function(e) {
                                                            return e._id === d.docId
                                                        }))) ? d.doc = w: console.error("[realtime listener] internal non-fatal server error: unexpected remove event where no doc is associated.");
                                                        break;
                                                    case "limit":
                                                        if (!d.doc) switch (d.queueType) {
                                                            case "dequeue":
                                                                (w = c.find((function(e) {
                                                                    return e._id === d.docId
                                                                }))) ? d.doc = w: console.error("[realtime listener] internal non-fatal server error: unexpected limit dataType event where no doc is associated.");
                                                                break;
                                                            case "enqueue":
                                                                throw E = new m({
                                                                    errCode: b.SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR,
                                                                    errMsg: 'HandleServerEvents: full doc is not provided with dataType="limit" and queueType="enqueue" (requestId ' + e.requestId + ")"
                                                                }), h.closeWithError(E), E
                                                        }
                                                }
                                                switch (d.queueType) {
                                                    case "init":
                                                        f ? c.push(d.doc) : (f = !0, c = [d.doc]);
                                                        break;
                                                    case "enqueue":
                                                        c.push(d.doc);
                                                        break;
                                                    case "dequeue":
                                                        (O = c.findIndex((function(e) {
                                                            return e._id === d.docId
                                                        }))) > -1 ? c.splice(O, 1) : console.error("[realtime listener] internal non-fatal server error: unexpected dequeue event where no doc is associated.");
                                                        break;
                                                    case "update":
                                                        (O = c.findIndex((function(e) {
                                                            return e._id === d.docId
                                                        }))) > -1 ? c[O] = d.doc : console.error("[realtime listener] internal non-fatal server error: unexpected queueType update event where no doc is associated.")
                                                }
                                                return (n === l - 1 || a[n + 1] && a[n + 1].id !== d.id) && (I = A(c), N = a.slice(0, n + 1).filter((function(e) {
                                                    return e.id === d.id
                                                })), h.sessionInfo.currentEventId = d.id, h.sessionInfo.currentDocs = c, T = new p({
                                                    id: d.id,
                                                    docChanges: N,
                                                    docs: I,
                                                    msgType: r
                                                }), h.listener.onChange(T)), [3, 4];
                                            case 2:
                                                return console.warn("[realtime listener] event received is out of order, cur " + h.sessionInfo.currentEventId + " but got " + d.id), [4, h.rebuildWatch()];
                                            case 3:
                                                return S.sent(), [2, {
                                                    value: void 0
                                                }];
                                            case 4:
                                                return [2]
                                        }
                                    }))
                                }, h = this, d = 0, y = a.length, _.label = 1;
                            case 1:
                                return d < y ? [5, l(d, y)] : [3, 4];
                            case 2:
                                if ("object" == typeof(g = _.sent())) return [2, g.value];
                                _.label = 3;
                            case 3:
                                return d++, [3, 1];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype._postHandleServerEventsValidityCheck = function(e) {
                this.sessionInfo ? (this.sessionInfo.expectEventId && this.sessionInfo.currentEventId >= this.sessionInfo.expectEventId && this.clearWaitExpectedEvent(), this.sessionInfo.currentEventId < e.msgData.currEvent && console.warn("[realtime listener] internal non-fatal error: client eventId does not match with server event id after server event handling")) : console.error("[realtime listener] internal non-fatal error: sessionInfo lost after server event handling, this should never occur")
            }, e.prototype.clearWaitExpectedEvent = function() {
                this._waitExpectedTimeoutId && (clearTimeout(this._waitExpectedTimeoutId), this._waitExpectedTimeoutId = void 0)
            }, e
        }();

        function I(e) {
            var t = {
                id: e.ID,
                dataType: e.DataType,
                queueType: e.QueueType,
                docId: e.DocID,
                doc: e.Doc && "{}" !== e.Doc ? JSON.parse(e.Doc) : void 0
            };
            return "update" === e.DataType && (e.UpdatedFields && (t.updatedFields = JSON.parse(e.UpdatedFields)), (e.removedFields || e.RemovedFields) && (t.removedFields = JSON.parse(e.removedFields))), t
        }
        var N, T = {
            1e3: {
                code: 1e3,
                name: "Normal Closure",
                description: "Normal closure; the connection successfully completed whatever purpose for which it was created."
            },
            1001: {
                code: 1001,
                name: "Going Away",
                description: "The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection."
            },
            1002: {
                code: 1002,
                name: "Protocol Error",
                description: "The endpoint is terminating the connection due to a protocol error."
            },
            1003: {
                code: 1003,
                name: "Unsupported Data",
                description: "The connection is being terminated because the endpoint received data of a type it cannot accept (for example, a text-only endpoint received binary data)."
            },
            1005: {
                code: 1005,
                name: "No Status Received",
                description: "Indicates that no status code was provided even though one was expected."
            },
            1006: {
                code: 1006,
                name: "Abnormal Closure",
                description: "Used to indicate that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected."
            },
            1007: {
                code: 1007,
                name: "Invalid frame payload data",
                description: "The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message)."
            },
            1008: {
                code: 1008,
                name: "Policy Violation",
                description: "The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable."
            },
            1009: {
                code: 1009,
                name: "Message too big",
                description: "The endpoint is terminating the connection because a data frame was received that is too large."
            },
            1010: {
                code: 1010,
                name: "Missing Extension",
                description: "The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't."
            },
            1011: {
                code: 1011,
                name: "Internal Error",
                description: "The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request."
            },
            1012: {
                code: 1012,
                name: "Service Restart",
                description: "The server is terminating the connection because it is restarting."
            },
            1013: {
                code: 1013,
                name: "Try Again Later",
                description: "The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients."
            },
            1014: {
                code: 1014,
                name: "Bad Gateway",
                description: "The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code."
            },
            1015: {
                code: 1015,
                name: "TLS Handshake",
                description: "Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."
            },
            3e3: {
                code: 3e3,
                name: "Reconnect WebSocket",
                description: "The client is terminating the connection because it wants to reconnect"
            },
            3001: {
                code: 3001,
                name: "No Realtime Listeners",
                description: "The client is terminating the connection because no more realtime listeners exist"
            },
            3002: {
                code: 3002,
                name: "Heartbeat Ping Error",
                description: "The client is terminating the connection due to its failure in sending heartbeat messages"
            },
            3003: {
                code: 3003,
                name: "Heartbeat Pong Timeout Error",
                description: "The client is terminating the connection because no heartbeat response is received from the server"
            },
            3050: {
                code: 3050,
                name: "Server Close",
                description: "The client is terminating the connection because no heartbeat response is received from the server"
            }
        };
        ! function(e) {
            e[e.NormalClosure = 1e3] = "NormalClosure", e[e.GoingAway = 1001] = "GoingAway", e[e.ProtocolError = 1002] = "ProtocolError", e[e.UnsupportedData = 1003] = "UnsupportedData", e[e.NoStatusReceived = 1005] = "NoStatusReceived", e[e.AbnormalClosure = 1006] = "AbnormalClosure", e[e.InvalidFramePayloadData = 1007] = "InvalidFramePayloadData", e[e.PolicyViolation = 1008] = "PolicyViolation", e[e.MessageTooBig = 1009] = "MessageTooBig", e[e.MissingExtension = 1010] = "MissingExtension", e[e.InternalError = 1011] = "InternalError", e[e.ServiceRestart = 1012] = "ServiceRestart", e[e.TryAgainLater = 1013] = "TryAgainLater", e[e.BadGateway = 1014] = "BadGateway", e[e.TLSHandshake = 1015] = "TLSHandshake", e[e.ReconnectWebSocket = 3e3] = "ReconnectWebSocket", e[e.NoRealtimeListeners = 3001] = "NoRealtimeListeners", e[e.HeartbeatPingError = 3002] = "HeartbeatPingError", e[e.HeartbeatPongTimeoutError = 3003] = "HeartbeatPongTimeoutError", e[e.NoAuthentication = 3050] = "NoAuthentication"
        }(N || (N = {}));
        var R = function(e, t) {
                var n = T[e],
                    r = n ? n.name + ", code " + e + ", reason " + (t || n.description) : "code " + e;
                return new m({
                    errCode: b.SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_CLOSED,
                    errMsg: r
                })
            },
            B = null,
            P = "web";

        function D() {
            return P
        }
        var L = function() {
                return (L = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            x = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            U = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            j = 1,
            C = function() {
                function e(e) {
                    var t = this;
                    this._virtualWSClient = new Set, this._queryIdClientMap = new Map, this._watchIdClientMap = new Map, this._pingFailed = 0, this._pongMissed = 0, this._logins = new Map, this._wsReadySubsribers = [], this._wsResponseWait = new Map, this._rttObserved = [], this.send = function(e) {
                        return x(t, void 0, void 0, (function() {
                            var t = this;
                            return U(this, (function(n) {
                                return [2, new Promise((function(n, r) {
                                    return x(t, void 0, void 0, (function() {
                                        var t, o, i, s, a, u, c, f = this;
                                        return U(this, (function(l) {
                                            switch (l.label) {
                                                case 0:
                                                    o = !1, i = !1, s = function(e) {
                                                        o = !0, t && clearTimeout(t), n(e)
                                                    }, a = function(e) {
                                                        i = !0, t && clearTimeout(t), r(e)
                                                    }, e.timeout && (t = setTimeout((function() {
                                                        return x(f, void 0, void 0, (function() {
                                                            return U(this, (function(e) {
                                                                switch (e.label) {
                                                                    case 0:
                                                                        return o && i ? [3, 2] : [4, w(0)];
                                                                    case 1:
                                                                        e.sent(), o && i || a(new _("wsclient.send timedout")), e.label = 2;
                                                                    case 2:
                                                                        return [2]
                                                                }
                                                            }))
                                                        }))
                                                    }), e.timeout)), l.label = 1;
                                                case 1:
                                                    return l.trys.push([1, 8, , 9]), this._wsInitPromise ? [4, this._wsInitPromise] : [3, 3];
                                                case 2:
                                                    l.sent(), l.label = 3;
                                                case 3:
                                                    if (!this._ws) return a(new Error("invalid state: ws connection not exists, can not send message")), [2];
                                                    if (this._ws.readyState !== j) return a(new Error("ws readyState invalid: " + this._ws.readyState + ", can not send message")), [2];
                                                    e.waitResponse && this._wsResponseWait.set(e.msg.requestId, {
                                                        resolve: s,
                                                        reject: a,
                                                        skipOnMessage: e.skipOnMessage
                                                    }), l.label = 4;
                                                case 4:
                                                    return l.trys.push([4, 6, , 7]), [4, this._ws.send(JSON.stringify(e.msg))];
                                                case 5:
                                                    return l.sent(), e.waitResponse || s(), [3, 7];
                                                case 6:
                                                    return (u = l.sent()) && (a(u), e.waitResponse && this._wsResponseWait.delete(e.msg.requestId)), [3, 7];
                                                case 7:
                                                    return [3, 9];
                                                case 8:
                                                    return c = l.sent(), a(c), [3, 9];
                                                case 9:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                }))]
                            }))
                        }))
                    }, this.closeAllClients = function(e) {
                        t._virtualWSClient.forEach((function(t) {
                            t.closeWithError(e)
                        }))
                    }, this.pauseClients = function(e) {
                        (e || t._virtualWSClient).forEach((function(e) {
                            e.pause()
                        }))
                    }, this.resumeClients = function(e) {
                        (e || t._virtualWSClient).forEach((function(e) {
                            e.resume()
                        }))
                    }, this.initWebSocketConnection = function(e, n) {
                        return void 0 === n && (n = t._maxReconnect), x(t, void 0, void 0, (function() {
                            var t = this;
                            return U(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (e && this._reconnectState) return [2];
                                        if (e && (this._reconnectState = !0), this._wsInitPromise) return [2, this._wsInitPromise];
                                        e && this.pauseClients(), this.close(N.ReconnectWebSocket), this._wsInitPromise = new Promise((function(r, o) {
                                            return x(t, void 0, void 0, (function() {
                                                var t, i, s = this;
                                                return U(this, (function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return a.trys.push([0, 6, , 11]), [4, this.getWsSign()];
                                                        case 1:
                                                            return t = a.sent(), [4, new Promise((function(e) {
                                                                var n = t.wsUrl || "wss://tcb-ws.tencentcloudapi.com",
                                                                    r = B;
                                                                s._ws = r ? new r(n) : new WebSocket(n), e()
                                                            }))];
                                                        case 2:
                                                            return a.sent(), this._ws.connect ? [4, this._ws.connect()] : [3, 4];
                                                        case 3:
                                                            a.sent(), a.label = 4;
                                                        case 4:
                                                            return [4, this.initWebSocketEvent()];
                                                        case 5:
                                                            return a.sent(), r(), e && (this.resumeClients(), this._reconnectState = !1), [3, 11];
                                                        case 6:
                                                            return i = a.sent(), console.error("[realtime] initWebSocketConnection connect fail", i), n > 0 ? (!0, this._wsInitPromise = void 0, [4, w(this._reconnectInterval)]) : [3, 9];
                                                        case 7:
                                                            a.sent(), e && (this._reconnectState = !1), a.label = 8;
                                                        case 8:
                                                            return r(this.initWebSocketConnection(e, n - 1)), [3, 10];
                                                        case 9:
                                                            o(i), e && this.closeAllClients(new m({
                                                                errCode: b.SDK_DATABASE_REALTIME_LISTENER_RECONNECT_WATCH_FAIL,
                                                                errMsg: i
                                                            })), a.label = 10;
                                                        case 10:
                                                            return [3, 11];
                                                        case 11:
                                                            return [2]
                                                    }
                                                }))
                                            }))
                                        })), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, 4, 5]), [4, this._wsInitPromise];
                                    case 2:
                                        return r.sent(), this._wsReadySubsribers.forEach((function(e) {
                                            return (0, e.resolve)()
                                        })), [3, 5];
                                    case 3:
                                        return r.sent(), this._wsReadySubsribers.forEach((function(e) {
                                            return (0, e.reject)()
                                        })), [3, 5];
                                    case 4:
                                        return this._wsInitPromise = void 0, this._wsReadySubsribers = [], [7];
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, this.initWebSocketEvent = function() {
                        return new Promise((function(e, n) {
                            if (!t._ws) throw new Error("can not initWebSocketEvent, ws not exists");
                            var r = !1;
                            t._ws.onopen = function(t) {
                                console.warn("[realtime] ws event: open", t), r = !0, e()
                            }, t._ws.onerror = function(e) {
                                t._logins = new Map, r ? (console.error("[realtime] ws event: error", e), t.clearHeartbeat(), t._virtualWSClient.forEach((function(t) {
                                    return t.closeWithError(new m({
                                        errCode: b.SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_ERROR,
                                        errMsg: e
                                    }))
                                }))) : (console.error("[realtime] ws open failed with ws event: error", e), n(e))
                            }, t._ws.onclose = function(e) {
                                switch (console.warn("[realtime] ws event: close", e), t._logins = new Map, t.clearHeartbeat(), e.code) {
                                    case N.ReconnectWebSocket:
                                    case N.NoRealtimeListeners:
                                        break;
                                    case N.HeartbeatPingError:
                                    case N.HeartbeatPongTimeoutError:
                                    case N.NormalClosure:
                                    case N.AbnormalClosure:
                                        t._maxReconnect > 0 ? t.initWebSocketConnection(!0, t._maxReconnect) : t.closeAllClients(R(e.code));
                                        break;
                                    case N.NoAuthentication:
                                        t.closeAllClients(R(e.code, e.reason));
                                        break;
                                    default:
                                        t._maxReconnect > 0 ? t.initWebSocketConnection(!0, t._maxReconnect) : t.closeAllClients(R(e.code))
                                }
                            }, t._ws.onmessage = function(e) {
                                var n, r = e.data;
                                t.heartbeat();
                                try {
                                    n = JSON.parse(r)
                                } catch (e) {
                                    throw new Error("[realtime] onMessage parse res.data error: " + e)
                                }
                                if ("ERROR" === n.msgType) {
                                    var o = null;
                                    t._virtualWSClient.forEach((function(e) {
                                        e.watchId === n.watchId && (o = e)
                                    })), o && o.listener.onError(n)
                                }
                                var i = t._wsResponseWait.get(n.requestId);
                                if (i) {
                                    try {
                                        "ERROR" === n.msgType ? i.reject(new y(n)) : i.resolve(n)
                                    } catch (e) {
                                        console.error("ws onMessage responseWaitSpec.resolve(msg) errored:", e)
                                    } finally {
                                        t._wsResponseWait.delete(n.requestId)
                                    }
                                    if (i.skipOnMessage) return
                                }
                                if ("PONG" !== n.msgType) {
                                    var s = n.watchId && t._watchIdClientMap.get(n.watchId);
                                    if (s) s.onMessage(n);
                                    else switch (console.error("[realtime] no realtime listener found responsible for watchId " + n.watchId + ": ", n), n.msgType) {
                                        case "INIT_EVENT":
                                        case "NEXT_EVENT":
                                        case "CHECK_EVENT":
                                            (s = t._queryIdClientMap.get(n.msgData.queryID)) && s.onMessage(n);
                                            break;
                                        default:
                                            for (var a = 0, u = Array.from(t._watchIdClientMap.entries()); a < u.length; a++) {
                                                u[a][1].onMessage(n);
                                                break
                                            }
                                    }
                                } else if (t._lastPingSendTS) {
                                    var c = Date.now() - t._lastPingSendTS;
                                    if (c > 1e4) return void console.warn("[realtime] untrusted rtt observed: " + c);
                                    t._rttObserved.length >= 3 && t._rttObserved.splice(0, t._rttObserved.length - 3 + 1), t._rttObserved.push(c)
                                }
                            }, t.heartbeat()
                        }))
                    }, this.isWSConnected = function() {
                        return Boolean(t._ws && t._ws.readyState === j)
                    }, this.onceWSConnected = function() {
                        return x(t, void 0, void 0, (function() {
                            var e = this;
                            return U(this, (function(t) {
                                return this.isWSConnected() ? [2] : this._wsInitPromise ? [2, this._wsInitPromise] : [2, new Promise((function(t, n) {
                                    e._wsReadySubsribers.push({
                                        resolve: t,
                                        reject: n
                                    })
                                }))]
                            }))
                        }))
                    }, this.webLogin = function(e, n) {
                        return x(t, void 0, void 0, (function() {
                            var t, r, o, i, s, a, u, f, l = this;
                            return U(this, (function(h) {
                                switch (h.label) {
                                    case 0:
                                        if (!n)
                                            if (e) {
                                                if (t = this._logins.get(e)) {
                                                    if (t.loggedIn && t.loginResult) return [2, t.loginResult];
                                                    if (t.loggingInPromise) return [2, t.loggingInPromise]
                                                }
                                            } else if (null == (r = this._logins.get("")) ? void 0 : r.loggingInPromise) return [2, r.loggingInPromise];
                                        o = new Promise((function(e, t) {
                                            return x(l, void 0, void 0, (function() {
                                                var n, r, o, i, s;
                                                return U(this, (function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return a.trys.push([0, 3, , 4]), [4, this.getWsSign()];
                                                        case 1:
                                                            return n = a.sent(), r = {
                                                                envId: n.envId || "",
                                                                accessToken: "",
                                                                referrer: "web",
                                                                sdkVersion: "",
                                                                dataVersion: ""
                                                            }, o = {
                                                                watchId: void 0,
                                                                requestId: c(),
                                                                msgType: "LOGIN",
                                                                msgData: r,
                                                                exMsgData: {
                                                                    runtime: D(),
                                                                    signStr: n.signStr,
                                                                    secretVersion: n.secretVersion
                                                                }
                                                            }, [4, this.send({
                                                                msg: o,
                                                                waitResponse: !0,
                                                                skipOnMessage: !0,
                                                                timeout: 5e3
                                                            })];
                                                        case 2:
                                                            return (i = a.sent()).msgData.code ? t(new Error(i.msgData.code + " " + i.msgData.message)) : e({
                                                                envId: n.envId
                                                            }), [3, 4];
                                                        case 3:
                                                            return s = a.sent(), t(s), [3, 4];
                                                        case 4:
                                                            return [2]
                                                    }
                                                }))
                                            }))
                                        })), i = e && this._logins.get(e), s = Date.now(), i ? (i.loggedIn = !1, i.loggingInPromise = o, i.loginStartTS = s) : (i = {
                                            loggedIn: !1,
                                            loggingInPromise: o,
                                            loginStartTS: s
                                        }, this._logins.set(e || "", i)), h.label = 1;
                                    case 1:
                                        return h.trys.push([1, 3, , 4]), [4, o];
                                    case 2:
                                        if (a = h.sent(), (u = e && this._logins.get(e)) && u === i && u.loginStartTS === s) return i.loggedIn = !0, i.loggingInPromise = void 0, i.loginStartTS = void 0, i.loginResult = a, [2, a];
                                        if (u) {
                                            if (u.loggedIn && u.loginResult) return [2, u.loginResult];
                                            if (u.loggingInPromise) return [2, u.loggingInPromise];
                                            throw new Error("ws unexpected login info")
                                        }
                                        throw new Error("ws login info reset");
                                    case 3:
                                        throw f = h.sent(), i.loggedIn = !1, i.loggingInPromise = void 0, i.loginStartTS = void 0, i.loginResult = void 0, f;
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, this.getWsSign = function() {
                        return x(t, void 0, void 0, (function() {
                            var e, t, n, r, o, i, s;
                            return U(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this._wsSign && this._wsSign.expiredTs > Date.now() ? [2, this._wsSign] : (e = Date.now() + 6e4, [4, this._context.appConfig.request.send("auth.wsWebSign", {
                                            runtime: D()
                                        })]);
                                    case 1:
                                        if ((t = a.sent()).code) throw new Error("[tcb-js-sdk] čˇĺĺŽćść°ćŽć¨éçťĺ˝çĽ¨ćŽĺ¤ąč´Ľ: " + t.code);
                                        if (t.data) return n = t.data, r = n.signStr, o = n.wsUrl, i = n.secretVersion, s = n.envId, [2, {
                                            signStr: r,
                                            wsUrl: o,
                                            secretVersion: i,
                                            envId: s,
                                            expiredTs: e
                                        }];
                                        throw new Error("[tcb-js-sdk] čˇĺĺŽćść°ćŽć¨éçťĺ˝çĽ¨ćŽĺ¤ąč´Ľ")
                                }
                            }))
                        }))
                    }, this.getWaitExpectedTimeoutLength = function() {
                        return t._rttObserved.length ? t._rttObserved.reduce((function(e, t) {
                            return e + t
                        })) / t._rttObserved.length * 1.5 : 5e3
                    }, this.ping = function() {
                        return x(t, void 0, void 0, (function() {
                            var e;
                            return U(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e = {
                                            watchId: void 0,
                                            requestId: c(),
                                            msgType: "PING",
                                            msgData: null
                                        }, [4, this.send({
                                            msg: e
                                        })];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            }))
                        }))
                    }, this.onWatchStart = function(e, n) {
                        t._queryIdClientMap.set(n, e)
                    }, this.onWatchClose = function(e, n) {
                        n && t._queryIdClientMap.delete(n), t._watchIdClientMap.delete(e.watchId), t._virtualWSClient.delete(e), t._virtualWSClient.size || t.close(N.NoRealtimeListeners)
                    }, this._maxReconnect = e.maxReconnect || 5, this._reconnectInterval = e.reconnectInterval || 1e4, this._context = e.context
                }
                return e.prototype.clearHeartbeat = function() {
                    this._pingTimeoutId && clearTimeout(this._pingTimeoutId), this._pongTimeoutId && clearTimeout(this._pongTimeoutId)
                }, e.prototype.close = function(e) {
                    this.clearHeartbeat(), this._ws && (this._ws.close(e, T[e].name), this._ws = void 0)
                }, e.prototype.watch = function(e) {
                    this._ws || this._wsInitPromise || this.initWebSocketConnection(!1);
                    var t = new O(L(L({}, e), {
                        send: this.send,
                        login: this.webLogin,
                        isWSConnected: this.isWSConnected,
                        onceWSConnected: this.onceWSConnected,
                        getWaitExpectedTimeoutLength: this.getWaitExpectedTimeoutLength,
                        onWatchStart: this.onWatchStart,
                        onWatchClose: this.onWatchClose,
                        debug: !0
                    }));
                    return this._virtualWSClient.add(t), this._watchIdClientMap.set(t.watchId, t), t.listener
                }, e.prototype.heartbeat = function(e) {
                    var t = this;
                    this.clearHeartbeat(), this._pingTimeoutId = setTimeout((function() {
                        return x(t, void 0, void 0, (function() {
                            var e = this;
                            return U(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), this._ws && this._ws.readyState === j ? (this._lastPingSendTS = Date.now(), [4, this.ping()]) : [2];
                                    case 1:
                                        return t.sent(), this._pingFailed = 0, this._pongTimeoutId = setTimeout((function() {
                                            console.error("pong timed out"), e._pongMissed < 2 ? (e._pongMissed++, e.heartbeat(!0)) : e.initWebSocketConnection(!0)
                                        }), this._context.appConfig.realtimePongWaitTimeout), [3, 3];
                                    case 2:
                                        return t.sent(), this._pingFailed < 2 ? (this._pingFailed++, this.heartbeat()) : this.close(N.HeartbeatPingError), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }), e ? 0 : this._context.appConfig.realtimePingInterval)
                }, e
            }(),
            M = {
                target: "database",
                entity: function() {
                    var e, t = this.platform,
                        n = t.adapter,
                        r = t.runtime;
                    e = n.wsClass, B = e,
                        function(e) {
                            P = e
                        }(r)
                }
            },
            k = {
                name: "realtime",
                IIFE: !0,
                entity: function() {
                    this.prototype.wsClientClass = C
                }
            };
        try {
            cloudbase.registerComponent(k), cloudbase.registerHook(M)
        } catch (e) {}

        function q(e) {
            try {
                e.registerComponent(k), e.registerHook(M)
            } catch (e) {
                console.warn(e)
            }
        }
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "LoginState", (function() {
            return $e
        })), n.d(t, "Auth", (function() {
            return He
        })), n.d(t, "AuthProvider", (function() {
            return a
        })), n.d(t, "EVENTS", (function() {
            return Ke
        })), n.d(t, "eventBus", (function() {
            return We
        })), n.d(t, "registerAuth", (function() {
            return Ve
        })), n.d(t, "registerProvider", (function() {
            return Je
        }));
        var r, o = n(0),
            i = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            s = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            a = function() {
                function e(e) {
                    this._config = e, this._cache = e.cache, this._request = e.request
                }
                return e.prototype.checkLocalLoginState = function() {
                    return i(this, void 0, void 0, (function() {
                        var e, t, n, r, o, i;
                        return s(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return e = this._cache.keys, t = e.accessTokenKey, n = e.accessTokenExpireKey, [4, this._cache.getStoreAsync(t)];
                                case 1:
                                    return r = s.sent(), [4, this._cache.getStoreAsync(n)];
                                case 2:
                                    return o = s.sent(), r ? o && o > Date.now() ? [4, (i = new $e({
                                        envId: this._config.env,
                                        cache: this._cache,
                                        request: this._request
                                    })).checkLocalStateAsync()] : [3, 4] : [3, 7];
                                case 3:
                                    return s.sent(), [2, i];
                                case 4:
                                    return [4, this._cache.removeStoreAsync(t)];
                                case 5:
                                    return s.sent(), [4, this._cache.removeStoreAsync(n)];
                                case 6:
                                    s.sent(), s.label = 7;
                                case 7:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.setRefreshToken = function(e) {
                    return i(this, void 0, void 0, (function() {
                        var t, n, r, o;
                        return s(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = this._cache.keys, n = t.accessTokenKey, r = t.accessTokenExpireKey, o = t.refreshTokenKey, [4, this._cache.removeStoreAsync(n)];
                                case 1:
                                    return i.sent(), [4, this._cache.removeStoreAsync(r)];
                                case 2:
                                    return i.sent(), [4, this._cache.setStoreAsync(o, e)];
                                case 3:
                                    return i.sent(), [2]
                            }
                        }))
                    }))
                }, e.prototype.setAccessToken = function(e, t) {
                    return i(this, void 0, void 0, (function() {
                        var n, r, o;
                        return s(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return n = this._cache.keys, r = n.accessTokenKey, o = n.accessTokenExpireKey, [4, this._cache.setStoreAsync(r, e)];
                                case 1:
                                    return i.sent(), [4, this._cache.setStoreAsync(o, t)];
                                case 2:
                                    return i.sent(), [2]
                            }
                        }))
                    }))
                }, e.prototype.refreshUserInfo = function() {
                    return i(this, void 0, void 0, (function() {
                        var e;
                        return s(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return "auth.getUserInfo", [4, this._request.send("auth.getUserInfo", {})];
                                case 1:
                                    return e = t.sent().data, [4, this.setLocalUserInfo(e)];
                                case 2:
                                    return t.sent(), [2, e]
                            }
                        }))
                    }))
                }, e.prototype.setLocalUserInfo = function(e) {
                    return i(this, void 0, void 0, (function() {
                        var t;
                        return s(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return t = this._cache.keys.userInfoKey, [4, this._cache.setStoreAsync(t, e)];
                                case 1:
                                    return n.sent(), [2]
                            }
                        }))
                    }))
                }, e
            }();
        ! function(e) {
            e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL", e.PHONE = "PHONE"
        }(r || (r = {}));
        var u, c = (u = function(e, t) {
                return (u = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                function n() {
                    this.constructor = e
                }
                u(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
            f = function(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            },
            l = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            },
            h = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            p = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            d = o.constants.getSdkName,
            y = o.constants.ERRORS,
            g = o.constants.COMMUNITY_SITE_URL,
            _ = o.adapters.RUNTIME,
            v = o.utils.getQuery,
            m = o.utils.getHash,
            b = o.utils.removeParam,
            w = o.utils.printWarn,
            E = o.helpers.catchErrorsDecorator,
            S = function(e) {
                function t(t, n, r, o) {
                    var i = e.call(this, t) || this;
                    return i._runtime = t.runtime, i._appid = n, i._scope = r, i._state = o || "weixin", i
                }
                return c(t, e), t.prototype.signIn = function() {
                    return h(this, void 0, void 0, (function() {
                        return p(this, (function(e) {
                            return [2, w(y.OPERATION_FAIL, "API signIn has been deprecated, please use signInWithRedirect insteed")]
                        }))
                    }))
                }, t.prototype.signInWithRedirect = function() {
                    return h(this, void 0, void 0, (function() {
                        return p(this, (function(e) {
                            return [2, this._redirect()]
                        }))
                    }))
                }, t.prototype.getRedirectResult = function(e) {
                    return h(this, void 0, void 0, (function() {
                        var t;
                        return p(this, (function(n) {
                            return (t = A()) ? [2, this._signInWithCode(t, e)] : [2, null]
                        }))
                    }))
                }, t.prototype.getLinkRedirectResult = function(e) {
                    return void 0 === e && (e = {}), h(this, void 0, void 0, (function() {
                        var t, n, r, o, i, s;
                        return p(this, (function(a) {
                            return t = e.withUnionId, n = void 0 !== t && t, (r = A()) ? (o = this._appid, i = function(e) {
                                switch (e) {
                                    case "snsapi_login":
                                        return "WECHAT-OPEN";
                                    default:
                                        return "WECHAT-PUBLIC"
                                }
                            }(this._scope), s = this._runtime === _.WX_MP ? "1" : "0", [2, this._request.send("auth.linkWithWeixinCode", {
                                payload: {
                                    appid: o,
                                    loginType: i,
                                    code: r,
                                    hybridMiniapp: s,
                                    withUnionId: n
                                }
                            })]) : [2, null]
                        }))
                    }))
                }, t.prototype._redirect = function() {
                    var e = b("code", location.href);
                    e = b("state", e), e = encodeURIComponent(e);
                    var t = "//open.weixin.qq.com/connect/oauth2/authorize";
                    "snsapi_login" === this._scope && (t = "//open.weixin.qq.com/connect/qrconnect");
                    try {
                        location.href = t + "?appid=" + this._appid + "&redirect_uri=" + e + "&response_type=code&scope=" + this._scope + "&state=" + this._state + "#wechat_redirect"
                    } catch (e) {
                        throw new Error("[" + d() + "][" + y.UNKOWN_ERROR + "]" + e)
                    }
                }, t.prototype._signInWithCode = function(e, t) {
                    return h(this, void 0, void 0, (function() {
                        var n, o, i, s, a, u, c, f;
                        return p(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return n = this._cache.keys, o = n.accessTokenKey, i = n.accessTokenExpireKey, s = n.refreshTokenKey, a = function(e) {
                                        switch (e) {
                                            case "snsapi_login":
                                                return "WECHAT-OPEN";
                                            default:
                                                return "WECHAT-PUBLIC"
                                        }
                                    }(this._scope), [4, this._getRefreshTokenByWXCode(this._appid, a, e, t)];
                                case 1:
                                    return u = l.sent(), c = u.refreshToken, [4, this._cache.setStoreAsync(s, c)];
                                case 2:
                                    return l.sent(), u.accessToken ? [4, this._cache.setStoreAsync(o, u.accessToken)] : [3, 4];
                                case 3:
                                    l.sent(), l.label = 4;
                                case 4:
                                    return u.accessTokenExpire ? [4, this._cache.setStoreAsync(i, String(u.accessTokenExpire + Date.now()))] : [3, 6];
                                case 5:
                                    l.sent(), l.label = 6;
                                case 6:
                                    return We.fire(Ke.LOGIN_STATE_CHANGED), We.fire(Ke.LOGIN_TYPE_CHANGED, {
                                        env: this._config.env,
                                        loginType: r.WECHAT,
                                        persistence: this._config.persistence
                                    }), [4, this.refreshUserInfo()];
                                case 7:
                                    return l.sent(), [4, (f = new $e({
                                        envId: this._config.env,
                                        cache: this._cache,
                                        request: this._request
                                    })).checkLocalStateAsync()];
                                case 8:
                                    return l.sent(), [2, f]
                            }
                        }))
                    }))
                }, t.prototype._getRefreshTokenByWXCode = function(e, t, n, r) {
                    return void 0 === r && (r = {}), h(this, void 0, void 0, (function() {
                        var o, i, s, a, u, c;
                        return p(this, (function(f) {
                            return o = r.withUnionId, i = void 0 !== o && o, s = r.createUser, a = void 0 === s || s, u = "snsapi_base" !== this._scope && (r.syncUserInfo || !1), "auth.signIn", c = this._runtime === _.WX_MP ? "1" : "0", [2, this._request.send("auth.signIn", {
                                appid: e,
                                loginType: t,
                                hybridMiniapp: c,
                                syncUserInfo: u,
                                loginCredential: n,
                                withUnionId: i,
                                createUser: a
                            }).then((function(e) {
                                if (e.code) throw new Error("[" + d() + "][" + y.OPERATION_FAIL + "] failed login via wechat: " + e.code);
                                if (e.refresh_token) return {
                                    refreshToken: e.refresh_token,
                                    accessToken: e.access_token,
                                    accessTokenExpire: e.access_token_expire
                                };
                                throw new Error("[" + d() + "][" + y.OPERATION_FAIL + "] action:getJwt not return refreshToken")
                            }))]
                        }))
                    }))
                }, f([E({
                    title: "čˇłč˝ŹĺžŽäżĄĺŹäźĺˇććĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().weixinAuthProvider().signInWithRedirect() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + g]
                }), l("design:type", Function), l("design:paramtypes", []), l("design:returntype", Promise)], t.prototype, "signInWithRedirect", null), f([E({
                    title: "ĺžŽäżĄĺŹäźĺˇçťĺ˝ĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().weixinAuthProvider().getRedirectResult() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşĺžŽäżĄĺŹäźĺˇçťĺ˝ćć", "  3 - ĺžŽäżĄĺŹäźĺˇç AppId ä¸ AppSecret éç˝ŽćŻĺŚć­ŁçĄŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + g]
                }), l("design:type", Function), l("design:paramtypes", [Object]), l("design:returntype", Promise)], t.prototype, "getRedirectResult", null), f([E({
                    title: "čˇĺĺžŽäżĄéĺŽĺçťĺŽçťć",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().weixinAuthProvider().getLinkRedirectResult() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşĺžŽäżĄĺŹäźĺˇçťĺ˝ćć", "  3 - ĺžŽäżĄĺŹäźĺˇç AppId ä¸ AppSecret éç˝ŽćŻĺŚć­ŁçĄŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + g]
                }), l("design:type", Function), l("design:paramtypes", [Object]), l("design:returntype", Promise)], t.prototype, "getLinkRedirectResult", null), t
            }(a);

        function A() {
            return v("code") || m("code")
        }
        var O = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            I = function(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            },
            N = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            },
            T = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            R = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            B = o.constants.ERRORS,
            P = o.constants.COMMUNITY_SITE_URL,
            D = o.utils.throwError,
            L = o.utils.isString,
            x = o.events.addEventListener,
            U = o.helpers.catchErrorsDecorator,
            j = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._onConverted = n._onConverted.bind(n), x(Ke.ANONYMOUS_CONVERTED, n._onConverted), n
                }
                return O(t, e), t.prototype.signIn = function() {
                    return T(this, void 0, void 0, (function() {
                        var e, t, n, o, i, s, a;
                        return R(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    return [4, this._cache.updatePersistenceAsync("local")];
                                case 1:
                                    return u.sent(), e = this._cache.keys, t = e.anonymousUuidKey, n = e.refreshTokenKey, [4, this._cache.getStoreAsync(t)];
                                case 2:
                                    return o = u.sent(), [4, this._cache.getStoreAsync(n)];
                                case 3:
                                    return i = u.sent(), [4, this._request.send("auth.signInAnonymously", {
                                        anonymous_uuid: o,
                                        refresh_token: i
                                    })];
                                case 4:
                                    return (s = u.sent()).uuid && s.refresh_token ? [4, this._setAnonymousUUID(s.uuid)] : [3, 10];
                                case 5:
                                    return u.sent(), [4, this.setRefreshToken(s.refresh_token)];
                                case 6:
                                    return u.sent(), [4, this._request.refreshAccessToken()];
                                case 7:
                                    return u.sent(), We.fire(Ke.LOGIN_TYPE_CHANGED, {
                                        env: this._config.env,
                                        loginType: r.ANONYMOUS,
                                        persistence: "local"
                                    }), We.fire(Ke.LOGIN_STATE_CHANGED), [4, (a = new $e({
                                        envId: this._config.env,
                                        cache: this._cache,
                                        request: this._request
                                    })).checkLocalStateAsync()];
                                case 8:
                                    return u.sent(), [4, a.user.refresh()];
                                case 9:
                                    return u.sent(), [2, a];
                                case 10:
                                    throw new Error(JSON.stringify({
                                        code: B.OPERATION_FAIL,
                                        msg: JSON.stringify(s) || "anonymous signIn failed"
                                    }))
                            }
                        }))
                    }))
                }, t.prototype.linkAndRetrieveDataWithTicket = function(e) {
                    return T(this, void 0, void 0, (function() {
                        var t, n, o, i, s, a, u;
                        return R(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    return L(e) || D(B.INVALID_PARAMS, "ticket must be a string"), t = this._cache.keys, n = t.anonymousUuidKey, o = t.refreshTokenKey, [4, this._cache.getStoreAsync(n)];
                                case 1:
                                    return i = c.sent(), [4, this._cache.getStoreAsync(o)];
                                case 2:
                                    return s = c.sent(), [4, this._request.send("auth.linkAndRetrieveDataWithTicket", {
                                        anonymous_uuid: i,
                                        refresh_token: s,
                                        ticket: e
                                    })];
                                case 3:
                                    return (a = c.sent()).refresh_token ? [4, this._clearAnonymousUUID()] : [3, 8];
                                case 4:
                                    return c.sent(), [4, this.setRefreshToken(a.refresh_token)];
                                case 5:
                                    return c.sent(), [4, this._request.refreshAccessToken()];
                                case 6:
                                    return c.sent(), We.fire(Ke.ANONYMOUS_CONVERTED, {
                                        env: this._config.env
                                    }), We.fire(Ke.LOGIN_TYPE_CHANGED, {
                                        loginType: r.CUSTOM,
                                        persistence: "local"
                                    }), [4, (u = new $e({
                                        envId: this._config.env,
                                        cache: this._cache,
                                        request: this._request
                                    })).checkLocalStateAsync()];
                                case 7:
                                    return c.sent(), [2, u];
                                case 8:
                                    D(B.OPERATION_FAIL, JSON.stringify(a) || "linkAndRetrieveDataWithTicket failed"), c.label = 9;
                                case 9:
                                    return [2]
                            }
                        }))
                    }))
                }, t.prototype._setAnonymousUUID = function(e) {
                    return T(this, void 0, void 0, (function() {
                        var t, n, o;
                        return R(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = this._cache.keys, n = t.anonymousUuidKey, o = t.loginTypeKey, [4, this._cache.removeStoreAsync(n)];
                                case 1:
                                    return i.sent(), [4, this._cache.setStoreAsync(n, e)];
                                case 2:
                                    return i.sent(), [4, this._cache.setStoreAsync(o, r.ANONYMOUS)];
                                case 3:
                                    return i.sent(), [2]
                            }
                        }))
                    }))
                }, t.prototype._clearAnonymousUUID = function() {
                    return T(this, void 0, void 0, (function() {
                        return R(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this._cache.removeStoreAsync(this._cache.keys.anonymousUuidKey)];
                                case 1:
                                    return e.sent(), [2]
                            }
                        }))
                    }))
                }, t.prototype._onConverted = function(e) {
                    return T(this, void 0, void 0, (function() {
                        return R(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return e.data.env !== this._config.env ? [2] : [4, this._cache.updatePersistenceAsync(this._config.persistence)];
                                case 1:
                                    return t.sent(), [2]
                            }
                        }))
                    }))
                }, I([U({
                    title: "ĺżĺçťĺ˝ĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźĺŻäşĺżĺçťĺ˝", "  2 - č°ç¨ auth().anonymouseProvider().signIn() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + P]
                }), N("design:type", Function), N("design:paramtypes", []), N("design:returntype", Promise)], t.prototype, "signIn", null), t
            }(a),
            C = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            M = function(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            },
            k = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            },
            q = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            F = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            W = o.constants.ERRORS,
            Y = o.constants.COMMUNITY_SITE_URL,
            $ = o.utils.isString,
            H = o.helpers.catchErrorsDecorator,
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return C(t, e), t.prototype.signIn = function(e) {
                    return q(this, void 0, void 0, (function() {
                        var t, n, o, i, s, a, u;
                        return F(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    if (!$(e)) throw new Error(JSON.stringify({
                                        code: W.INVALID_PARAMS,
                                        msg: "ticket must be a string"
                                    }));
                                    return t = this._cache.keys.refreshTokenKey, i = (o = this._request).send, s = ["auth.signInWithTicket"], a = {
                                        ticket: e
                                    }, [4, this._cache.getStoreAsync(t)];
                                case 1:
                                    return [4, i.apply(o, s.concat([(a.refresh_token = c.sent() || "", a)]))];
                                case 2:
                                    return (n = c.sent()).refresh_token ? [4, this.setRefreshToken(n.refresh_token)] : [3, 7];
                                case 3:
                                    return c.sent(), [4, this._request.refreshAccessToken()];
                                case 4:
                                    return c.sent(), We.fire(Ke.LOGIN_TYPE_CHANGED, {
                                        env: this._config.env,
                                        loginType: r.CUSTOM,
                                        persistence: this._config.persistence
                                    }), We.fire(Ke.LOGIN_STATE_CHANGED), [4, this.refreshUserInfo()];
                                case 5:
                                    return c.sent(), [4, (u = new $e({
                                        envId: this._config.env,
                                        cache: this._cache,
                                        request: this._request
                                    })).checkLocalStateAsync()];
                                case 6:
                                    return c.sent(), [2, u];
                                case 7:
                                    throw new Error(JSON.stringify({
                                        code: W.OPERATION_FAIL,
                                        msg: "custom signIn failed"
                                    }))
                            }
                        }))
                    }))
                }, M([H({
                    title: "čŞĺŽäšçťĺ˝ĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźĺŻäşčŞĺŽäšçťĺ˝", "  2 - č°ç¨ auth().customAuthProvider().signIn() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  3 - ticket ćŻĺŚĺ˝ĺąäşĺ˝ĺçŻĺ˘", "  4 - ĺĺťş ticket çčŞĺŽäšçťĺ˝ç§éĽćŻĺŚčżć", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + Y]
                }), k("design:type", Function), k("design:paramtypes", [String]), k("design:returntype", Promise)], t.prototype, "signIn", null), t
            }(a),
            G = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            V = function(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            },
            J = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            },
            z = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            X = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            Z = o.utils.throwError,
            Q = o.utils.isString,
            ee = o.constants.ERRORS,
            te = o.constants.COMMUNITY_SITE_URL,
            ne = o.helpers.catchErrorsDecorator,
            re = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return G(t, e), t.prototype.signIn = function(e, t) {
                    return z(this, void 0, void 0, (function() {
                        var n, o, i, s, a;
                        return X(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    return Q(e) || Z(ee.INVALID_PARAMS, "email must be a string"), n = this._cache.keys.refreshTokenKey, [4, this._request.send("auth.signIn", {
                                        loginType: "EMAIL",
                                        email: e,
                                        password: t,
                                        refresh_token: this._cache.getStore(n) || ""
                                    })];
                                case 1:
                                    return o = u.sent(), i = o.refresh_token, s = o.access_token, a = o.access_token_expire, i ? [4, this.setRefreshToken(i)] : [3, 8];
                                case 2:
                                    return u.sent(), s && a ? [4, this.setAccessToken(s, a)] : [3, 4];
                                case 3:
                                    return u.sent(), [3, 6];
                                case 4:
                                    return [4, this._request.refreshAccessToken()];
                                case 5:
                                    u.sent(), u.label = 6;
                                case 6:
                                    return [4, this.refreshUserInfo()];
                                case 7:
                                    return u.sent(), We.fire(Ke.LOGIN_STATE_CHANGED), We.fire(Ke.LOGIN_TYPE_CHANGED, {
                                        env: this._config.env,
                                        loginType: r.EMAIL,
                                        persistence: this._config.persistence
                                    }), [2, new $e({
                                        envId: this._config.env,
                                        cache: this._cache,
                                        request: this._request
                                    })];
                                case 8:
                                    o.code ? Z(ee.OPERATION_FAIL, "Email login fail[" + o.code + "] " + o.message) : Z(ee.OPERATION_FAIL, "Email login fail"), u.label = 9;
                                case 9:
                                    return [2]
                            }
                        }))
                    }))
                }, t.prototype.signUp = function(e, t) {
                    return z(this, void 0, void 0, (function() {
                        return X(this, (function(n) {
                            return [2, this._request.send("auth.signUpWithEmailAndPassword", {
                                email: e,
                                password: t
                            })]
                        }))
                    }))
                }, t.prototype.resetPassword = function(e) {
                    return z(this, void 0, void 0, (function() {
                        return X(this, (function(t) {
                            return [2, this._request.send("auth.sendPasswordResetEmail", {
                                email: e
                            })]
                        }))
                    }))
                }, t.prototype.resetPasswordWithToken = function(e, t) {
                    return z(this, void 0, void 0, (function() {
                        return X(this, (function(n) {
                            return [2, this._request.send("auth.resetPasswordWithToken", {
                                token: e,
                                newPassword: t
                            })]
                        }))
                    }))
                }, t.prototype.activate = function(e) {
                    return z(this, void 0, void 0, (function() {
                        return X(this, (function(t) {
                            return [2, this._request.send("auth.activateEndUserMail", {
                                token: e
                            })]
                        }))
                    }))
                }, V([ne({
                    title: "éŽçŽąĺŻç çťĺ˝ĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().emailAuthProvider() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşéŽçŽąçťĺ˝", "  3 - éŽçŽąĺ°ĺä¸ĺŻç ćŻĺŚĺšé", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + te]
                }), J("design:type", Function), J("design:paramtypes", [String, String]), J("design:returntype", Promise)], t.prototype, "signIn", null), V([ne({
                    title: "éŽçŽąćł¨ĺĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().signUpWithEmailAndPassword() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşéŽçŽąçťĺ˝", "  3 - ć­¤éŽçŽąĺ°ĺćŻĺŚĺˇ˛çťč˘Ťĺśäťç¨ćˇĺ ç¨", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + te]
                }), J("design:type", Function), J("design:paramtypes", [String, String]), J("design:returntype", Promise)], t.prototype, "signUp", null), V([ne({
                    title: "éç˝ŽĺŻç ĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().sendPasswordResetEmail() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşéŽçŽąçťĺ˝", "  3 - ć­¤éŽçŽąĺ°ĺćŻĺŚĺˇ˛çťä¸ĺ˝ĺç¨ćˇçťĺŽ", "  4 - ć­¤éŽçŽąĺ°ĺćŻĺŚĺˇ˛çťč˘Ťĺśäťç¨ćˇĺ ç¨", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + te]
                }), J("design:type", Function), J("design:paramtypes", [String]), J("design:returntype", Promise)], t.prototype, "resetPassword", null), V([ne({
                    title: "éç˝ŽĺŻç ĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨čŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşéŽçŽąçťĺ˝", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + te]
                }), J("design:type", Function), J("design:paramtypes", [String, String]), J("design:returntype", Promise)], t.prototype, "resetPasswordWithToken", null), V([ne({
                    title: "éŽçŽąćżć´ťĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨čŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşéŽçŽąçťĺ˝", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + te]
                }), J("design:type", Function), J("design:paramtypes", [String]), J("design:returntype", Promise)], t.prototype, "activate", null), t
            }(a),
            oe = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            ie = function(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            },
            se = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            },
            ae = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            ue = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            ce = o.utils.printWarn,
            fe = o.constants.ERRORS,
            le = o.constants.COMMUNITY_SITE_URL,
            he = o.helpers.catchErrorsDecorator,
            pe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return oe(t, e), t.prototype.signIn = function(e, t) {
                    return ae(this, void 0, void 0, (function() {
                        var n, o, i, s, a, u, c, f, l;
                        return ue(this, (function(h) {
                            switch (h.label) {
                                case 0:
                                    if ("string" != typeof e) throw new Error(JSON.stringify({
                                        code: fe.INVALID_PARAMS,
                                        msg: "username must be a string"
                                    }));
                                    return "string" != typeof t && (t = "", ce(fe.INVALID_PARAMS, "password is empty")), n = this._cache.keys.refreshTokenKey, s = (i = this._request).send, a = ["auth.signIn"], u = {
                                        loginType: r.USERNAME,
                                        username: e,
                                        password: t
                                    }, [4, this._cache.getStoreAsync(n)];
                                case 1:
                                    return [4, s.apply(i, a.concat([(u.refresh_token = h.sent() || "", u)]))];
                                case 2:
                                    return o = h.sent(), c = o.refresh_token, f = o.access_token_expire, l = o.access_token, c ? [4, this.setRefreshToken(c)] : [3, 9];
                                case 3:
                                    return h.sent(), l && f ? [4, this.setAccessToken(l, f)] : [3, 5];
                                case 4:
                                    return h.sent(), [3, 7];
                                case 5:
                                    return [4, this._request.refreshAccessToken()];
                                case 6:
                                    h.sent(), h.label = 7;
                                case 7:
                                    return [4, this.refreshUserInfo()];
                                case 8:
                                    return h.sent(), We.fire(Ke.LOGIN_STATE_CHANGED), We.fire(Ke.LOGIN_TYPE_CHANGED, {
                                        env: this._config.env,
                                        loginType: r.USERNAME,
                                        persistence: this._config.persistence
                                    }), [2, new $e({
                                        envId: this._config.env,
                                        cache: this._cache,
                                        request: this._request
                                    })];
                                case 9:
                                    throw o.code ? new Error(JSON.stringify({
                                        code: fe.OPERATION_FAIL,
                                        msg: "login by username failed:[" + o.code + "] " + o.message
                                    })) : new Error(JSON.stringify({
                                        code: fe.OPERATION_FAIL,
                                        msg: "login by username failed"
                                    }));
                                case 10:
                                    return [2]
                            }
                        }))
                    }))
                }, ie([he({
                    title: "ç¨ćˇĺĺŻç çťĺ˝ĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().signInWithUsernameAndPassword() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşç¨ćˇĺĺŻç çťĺ˝", "  3 - ç¨ćˇĺĺŻç ćŻĺŚĺšé", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + le]
                }), se("design:type", Function), se("design:paramtypes", [String, String]), se("design:returntype", Promise)], t.prototype, "signIn", null), t
            }(a),
            de = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            ye = function(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            },
            ge = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            },
            _e = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            ve = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            me = o.utils.throwError,
            be = o.utils.isString,
            we = o.utils.transformPhone,
            Ee = o.constants.ERRORS,
            Se = o.constants.COMMUNITY_SITE_URL,
            Ae = o.helpers.catchErrorsDecorator,
            Oe = "SIGNIN",
            Ie = "SIGNUP",
            Ne = "FORCERESETPWD",
            Te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return de(t, e), t.prototype.signIn = function(e) {
                    return _e(this, void 0, void 0, (function() {
                        var t, n, o, i, s, a, u, c, f;
                        return ve(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return t = e.phoneNumber, n = e.phoneCode, o = e.password, i = e.signMethod, be(t) || me(Ee.INVALID_PARAMS, "phoneNumber must be a string"), be(n) || be(o) || me(Ee.INVALID_PARAMS, "phoneCode or password must be a string"), i || (i = Oe), s = this._cache.keys.refreshTokenKey, [4, this._request.send("auth.signIn", {
                                        loginType: r.PHONE,
                                        phoneNumber: we(t),
                                        phoneCode: n,
                                        password: o,
                                        refresh_token: this._cache.getStore(s) || "",
                                        signMethod: i
                                    })];
                                case 1:
                                    return a = l.sent(), u = a.refresh_token, c = a.access_token, f = a.access_token_expire, u ? [4, this.setRefreshToken(u)] : [3, 8];
                                case 2:
                                    return l.sent(), c && f ? [4, this.setAccessToken(c, f)] : [3, 4];
                                case 3:
                                    return l.sent(), [3, 6];
                                case 4:
                                    return [4, this._request.refreshAccessToken()];
                                case 5:
                                    l.sent(), l.label = 6;
                                case 6:
                                    return [4, this.refreshUserInfo()];
                                case 7:
                                    return l.sent(), We.fire(Ke.LOGIN_STATE_CHANGED), We.fire(Ke.LOGIN_TYPE_CHANGED, {
                                        env: this._config.env,
                                        loginType: r.PHONE,
                                        persistence: this._config.persistence
                                    }), [2, new $e({
                                        envId: this._config.env,
                                        cache: this._cache,
                                        request: this._request
                                    })];
                                case 8:
                                    a.code ? me(Ee.OPERATION_FAIL, "Phone login fail[" + a.code + "] " + a.message) : me(Ee.OPERATION_FAIL, "Phone login fail"), l.label = 9;
                                case 9:
                                    return [2]
                            }
                        }))
                    }))
                }, t.prototype.signUp = function(e, t, n) {
                    return _e(this, void 0, void 0, (function() {
                        return ve(this, (function(r) {
                            return [2, this.signIn({
                                phoneNumber: e,
                                phoneCode: t,
                                password: n,
                                signMethod: Ie
                            })]
                        }))
                    }))
                }, t.prototype.forceResetPwd = function(e, t, n) {
                    return _e(this, void 0, void 0, (function() {
                        return ve(this, (function(r) {
                            return [2, this.signIn({
                                phoneNumber: e,
                                phoneCode: t,
                                password: n,
                                signMethod: Ne
                            })]
                        }))
                    }))
                }, ye([Ae({
                    title: "ććşĺˇçťĺ˝ĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().SmsAuthProvider() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşç­äżĄéŞčŻç çťĺ˝", "  3 - ç­äżĄéŞčŻç /ĺŻç ćŻĺŚć­ŁçĄŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + Se]
                }), ge("design:type", Function), ge("design:paramtypes", [Object]), ge("design:returntype", Promise)], t.prototype, "signIn", null), ye([Ae({
                    title: "ććşç­äżĄćł¨ĺĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().signUpWithPhoneCode() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşç­äżĄéŞčŻç çťĺ˝", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + Se]
                }), ge("design:type", Function), ge("design:paramtypes", [String, String, String]), ge("design:returntype", Promise)], t.prototype, "signUp", null), ye([Ae({
                    title: "ććşĺŻç éç˝Žĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().forceResetPwd() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşç­äżĄéŞčŻç çťĺ˝", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + Se]
                }), ge("design:type", Function), ge("design:paramtypes", [String, String, String]), ge("design:returntype", Promise)], t.prototype, "forceResetPwd", null), t
            }(a),
            Re = function() {
                return (Re = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            Be = function(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            },
            Pe = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            },
            De = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            Le = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            xe = o.events.CloudbaseEventEmitter,
            Ue = o.adapters.RUNTIME,
            je = o.utils.printWarn,
            Ce = o.utils.throwError,
            Me = o.utils.transformPhone,
            ke = o.constants.ERRORS,
            qe = o.constants.COMMUNITY_SITE_URL,
            Fe = o.helpers.catchErrorsDecorator,
            We = new xe,
            Ye = function() {
                function e(e) {
                    var t = e.cache,
                        n = e.request;
                    this._cache = t, this._request = n, this._setUserInfo()
                }
                return e.prototype.checkLocalInfo = function() {
                    return De(this, void 0, void 0, (function() {
                        return Le(this, (function(e) {
                            return this.uid = this._getLocalUserInfo("uid"), this.loginType = this._getLocalUserInfo("loginType"), this.openid = this._getLocalUserInfo("wxOpenId"), this.wxOpenId = this._getLocalUserInfo("wxOpenId"), this.wxPublicId = this._getLocalUserInfo("wxPublicId"), this.unionId = this._getLocalUserInfo("wxUnionId"), this.qqMiniOpenId = this._getLocalUserInfo("qqMiniOpenId"), this.customUserId = this._getLocalUserInfo("customUserId"), this.nickName = this._getLocalUserInfo("nickName"), this.gender = this._getLocalUserInfo("gender"), this.avatarUrl = this._getLocalUserInfo("avatarUrl"), this.email = this._getLocalUserInfo("email"), this.hasPassword = Boolean(this._getLocalUserInfo("hasPassword")), this.phone = this._getLocalUserInfo("phone"), this.username = this._getLocalUserInfo("username"), this.location = {
                                country: this._getLocalUserInfo("country"),
                                province: this._getLocalUserInfo("province"),
                                city: this._getLocalUserInfo("city")
                            }, [2]
                        }))
                    }))
                }, e.prototype.checkLocalInfoAsync = function() {
                    return De(this, void 0, void 0, (function() {
                        var e, t, n, r, o, i, s, a, u, c, f, l, h, p, d, y, g, _;
                        return Le(this, (function(v) {
                            switch (v.label) {
                                case 0:
                                    return e = this, [4, this._getLocalUserInfoAsync("uid")];
                                case 1:
                                    return e.uid = v.sent(), t = this, [4, this._getLocalUserInfoAsync("loginType")];
                                case 2:
                                    return t.loginType = v.sent(), n = this, [4, this._getLocalUserInfoAsync("wxOpenId")];
                                case 3:
                                    return n.openid = v.sent(), r = this, [4, this._getLocalUserInfoAsync("wxOpenId")];
                                case 4:
                                    return r.wxOpenId = v.sent(), o = this, [4, this._getLocalUserInfoAsync("wxPublicId")];
                                case 5:
                                    return o.wxPublicId = v.sent(), i = this, [4, this._getLocalUserInfoAsync("wxUnionId")];
                                case 6:
                                    return i.unionId = v.sent(), s = this, [4, this._getLocalUserInfoAsync("qqMiniOpenId")];
                                case 7:
                                    return s.qqMiniOpenId = v.sent(), a = this, [4, this._getLocalUserInfoAsync("customUserId")];
                                case 8:
                                    return a.customUserId = v.sent(), u = this, [4, this._getLocalUserInfoAsync("nickName")];
                                case 9:
                                    return u.nickName = v.sent(), c = this, [4, this._getLocalUserInfoAsync("gender")];
                                case 10:
                                    return c.gender = v.sent(), f = this, [4, this._getLocalUserInfoAsync("avatarUrl")];
                                case 11:
                                    return f.avatarUrl = v.sent(), l = this, [4, this._getLocalUserInfoAsync("email")];
                                case 12:
                                    return l.email = v.sent(), h = this, p = Boolean, [4, this._getLocalUserInfoAsync("hasPassword")];
                                case 13:
                                    return h.hasPassword = p.apply(void 0, [v.sent()]), d = this, [4, this._getLocalUserInfoAsync("phone")];
                                case 14:
                                    return d.phone = v.sent(), y = this, [4, this._getLocalUserInfoAsync("username")];
                                case 15:
                                    return y.username = v.sent(), g = this, _ = {}, [4, this._getLocalUserInfoAsync("country")];
                                case 16:
                                    return _.country = v.sent(), [4, this._getLocalUserInfoAsync("province")];
                                case 17:
                                    return _.province = v.sent(), [4, this._getLocalUserInfoAsync("city")];
                                case 18:
                                    return g.location = (_.city = v.sent(), _), [2]
                            }
                        }))
                    }))
                }, e.prototype.linkWithTicket = function(e) {
                    if ("string" != typeof e) throw new Error("ticket must be string");
                    return this._request.send("auth.linkWithTicket", {
                        ticket: e
                    })
                }, e.prototype.linkWithRedirect = function(e) {
                    e.signInWithRedirect()
                }, e.prototype.getLinkedUidList = function() {
                    return De(this, void 0, void 0, (function() {
                        var e, t, n, r, o, i;
                        return Le(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, this._request.send("auth.getLinkedUidList", {})];
                                case 1:
                                    for (e = s.sent().data, t = !1, n = e.users, r = 0, o = n; r < o.length; r++)
                                        if ((i = o[r]).wxOpenId && i.wxPublicId) {
                                            t = !0;
                                            break
                                        } return [2, {
                                        users: n,
                                        hasPrimaryUid: t
                                    }]
                            }
                        }))
                    }))
                }, e.prototype.setPrimaryUid = function(e) {
                    return this._request.send("auth.setPrimaryUid", {
                        uid: e
                    })
                }, e.prototype.unlink = function(e) {
                    return this._request.send("auth.unlink", {
                        platform: e
                    })
                }, e.prototype.update = function(e) {
                    return De(this, void 0, void 0, (function() {
                        var t, n, r, o, i, s, a;
                        return Le(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    return t = e.nickName, n = e.gender, r = e.avatarUrl, o = e.province, i = e.country, s = e.city, [4, this._request.send("auth.updateUserInfo", {
                                        nickName: t,
                                        gender: n,
                                        avatarUrl: r,
                                        province: o,
                                        country: i,
                                        city: s
                                    })];
                                case 1:
                                    return a = u.sent().data, this._setLocalUserInfo(a), [2]
                            }
                        }))
                    }))
                }, e.prototype.updatePassword = function(e, t) {
                    return this._request.send("auth.updatePassword", {
                        oldPassword: t,
                        newPassword: e
                    })
                }, e.prototype.updateEmail = function(e, t) {
                    return this._request.send("auth.updateEmail", {
                        newEmail: e,
                        password: t
                    })
                }, e.prototype.updateUsername = function(e) {
                    return "string" != typeof e && Ce(ke.INVALID_PARAMS, "username must be a string"), this._request.send("auth.updateUsername", {
                        username: e
                    })
                }, e.prototype.refresh = function() {
                    return De(this, void 0, void 0, (function() {
                        var e;
                        return Le(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return "auth.getUserInfo", [4, this._request.send("auth.getUserInfo", {})];
                                case 1:
                                    return e = t.sent().data, this._setLocalUserInfo(e), [2, e]
                            }
                        }))
                    }))
                }, e.prototype.linkWithPhoneNumber = function(e, t) {
                    return De(this, void 0, void 0, (function() {
                        return Le(this, (function(n) {
                            return [2, this._request.send("auth.linkOrUpdatePhoneNumber", {
                                phoneNumber: Me(e),
                                phoneCode: t
                            })]
                        }))
                    }))
                }, e.prototype.updatePhoneNumber = function(e, t) {
                    return De(this, void 0, void 0, (function() {
                        return Le(this, (function(n) {
                            return [2, this._request.send("auth.linkOrUpdatePhoneNumber", {
                                phoneNumber: Me(e),
                                phoneCode: t
                            })]
                        }))
                    }))
                }, e.prototype._getLocalUserInfo = function(e) {
                    var t = this._cache.keys.userInfoKey;
                    return this._cache.getStore(t)[e]
                }, e.prototype._getLocalUserInfoAsync = function(e) {
                    return De(this, void 0, void 0, (function() {
                        var t;
                        return Le(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return t = this._cache.keys.userInfoKey, [4, this._cache.getStoreAsync(t)];
                                case 1:
                                    return [2, n.sent()[e]]
                            }
                        }))
                    }))
                }, e.prototype._setUserInfo = function() {
                    var e = this,
                        t = this._cache.keys.userInfoKey,
                        n = this._cache.getStore(t);
                    ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl", "phone", "username"].forEach((function(t) {
                        e[t] = n[t]
                    })), this.location = {
                        country: n.country,
                        province: n.province,
                        city: n.city
                    }
                }, e.prototype._setLocalUserInfo = function(e) {
                    var t = this._cache.keys.userInfoKey;
                    this._cache.setStore(t, e), this._setUserInfo()
                }, Be([Fe({
                    title: "çťĺŽčŞĺŽäšçťĺ˝ĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ User.linkWithTicket() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ć­¤č´ŚćˇćŻĺŚĺˇ˛çťçťĺŽčŞĺŽäšçťĺ˝", "  3 - ticket ĺć°ćŻĺŚĺ˝ĺąĺ˝ĺçŻĺ˘", "  4 - ĺĺťş ticket çčŞĺŽäšçťĺ˝ç§éĽćŻĺŚčżć", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", [String]), Pe("design:returntype", Promise)], e.prototype, "linkWithTicket", null), Be([Fe({
                    title: "çťĺŽçŹŹä¸ćšçťĺ˝ćšĺźĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ User.linkWithRedirect() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ć­¤č´ŚćˇćŻĺŚĺˇ˛çťçťĺŽć­¤çŹŹä¸ćš", "  3 - ć­¤çŹŹä¸ćšćŻĺŚĺˇ˛çťćć", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", [Object]), Pe("design:returntype", void 0)], e.prototype, "linkWithRedirect", null), Be([Fe({
                    title: "čˇĺč´ŚćˇĺčĄ¨ĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ User.getLinkedUidList() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", []), Pe("design:returntype", Promise)], e.prototype, "getLinkedUidList", null), Be([Fe({
                    title: "čŽžç˝ŽĺžŽäżĄä¸ťč´Śĺˇĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ User.setPrimaryUid() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", [String]), Pe("design:returntype", void 0)], e.prototype, "setPrimaryUid", null), Be([Fe({
                    title: "ćĽč§ŚçťĺŽĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ User.unlink() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺč´ŚćˇćŻĺŚĺˇ˛çťä¸ć­¤çťĺ˝ćšĺźč§Łçť", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", [String]), Pe("design:returntype", void 0)], e.prototype, "unlink", null), Be([Fe({
                    title: "ć´ć°ç¨ćˇäżĄćŻĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ User.update() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ç¨ćˇäżĄćŻä¸­ćŻĺŚĺĺŤéćłĺź", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", [Object]), Pe("design:returntype", Promise)], e.prototype, "update", null), Be([Fe({
                    title: "ć´ć°ĺŻç ĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ User.updatePassword() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  3 - ć°ĺŻç ä¸­ćŻĺŚĺĺŤéćłĺ­çŹŚ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", [String, String]), Pe("design:returntype", void 0)], e.prototype, "updatePassword", null), Be([Fe({
                    title: "ć´ć°éŽçŽąĺ°ĺĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ User.updateEmail() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşéŽçŽąĺŻç çťĺ˝", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", [String, String]), Pe("design:returntype", void 0)], e.prototype, "updateEmail", null), Be([Fe({
                    title: "ć´ć°ç¨ćˇĺĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ User.updateUsername() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşç¨ćˇĺĺŻç çťĺ˝", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", [String]), Pe("design:returntype", void 0)], e.prototype, "updateUsername", null), Be([Fe({
                    title: "ĺˇć°ćŹĺ°ç¨ćˇäżĄćŻĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ User.refresh() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", []), Pe("design:returntype", Promise)], e.prototype, "refresh", null), Be([Fe({
                    title: "çťĺŽććşĺˇĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().linkWithPhoneNumber() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşç­äżĄéŞčŻç çťĺ˝", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", [String, String]), Pe("design:returntype", Promise)], e.prototype, "linkWithPhoneNumber", null), Be([Fe({
                    title: "ć´ć°ććşĺˇĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨čŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşç­äżĄéŞčŻç çťĺ˝", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", [String, String]), Pe("design:returntype", Promise)], e.prototype, "updatePhoneNumber", null), e
            }(),
            $e = function() {
                function e(e) {
                    var t = e.envId,
                        n = e.cache,
                        r = e.request;
                    t || Ce(ke.INVALID_PARAMS, "envId is not defined"), this._cache = n, this.user = new Ye({
                        cache: n,
                        request: r
                    })
                }
                return e.prototype.checkLocalState = function() {
                    return De(this, void 0, void 0, (function() {
                        var e, t, n, r, o, i, s;
                        return Le(this, (function(a) {
                            return e = this._cache.keys, t = e.refreshTokenKey, n = e.accessTokenKey, r = e.accessTokenExpireKey, o = this._cache.getStore(t), i = this._cache.getStore(n), s = this._cache.getStore(r), this.credential = {
                                refreshToken: o,
                                accessToken: i,
                                accessTokenExpire: s
                            }, this._loginType = this._cache.getStore(this._cache.keys.loginTypeKey), this.user.checkLocalInfo(), [2]
                        }))
                    }))
                }, e.prototype.checkLocalStateAsync = function() {
                    return De(this, void 0, void 0, (function() {
                        var e, t, n, r, o, i, s, a;
                        return Le(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    return e = this._cache.keys, t = e.refreshTokenKey, n = e.accessTokenKey, r = e.accessTokenExpireKey, [4, this._cache.getStoreAsync(t)];
                                case 1:
                                    return o = u.sent(), [4, this._cache.getStoreAsync(n)];
                                case 2:
                                    return i = u.sent(), [4, this._cache.getStoreAsync(r)];
                                case 3:
                                    return s = u.sent(), this.credential = {
                                        refreshToken: o,
                                        accessToken: i,
                                        accessTokenExpire: s
                                    }, a = this, [4, this._cache.getStoreAsync(this._cache.keys.loginTypeKey)];
                                case 4:
                                    return a._loginType = u.sent(), [4, this.user.checkLocalInfoAsync()];
                                case 5:
                                    return u.sent(), [2]
                            }
                        }))
                    }))
                }, Object.defineProperty(e.prototype, "isAnonymousAuth", {
                    get: function() {
                        return this.loginType === r.ANONYMOUS
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isCustomAuth", {
                    get: function() {
                        return this.loginType === r.CUSTOM
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isWeixinAuth", {
                    get: function() {
                        return this.loginType === r.WECHAT || this.loginType === r.WECHAT_OPEN || this.loginType === r.WECHAT_PUBLIC
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isUsernameAuth", {
                    get: function() {
                        return this.loginType === r.USERNAME
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "loginType", {
                    get: function() {
                        return this._loginType
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isPhoneAuth", {
                    get: function() {
                        return this.loginType === r.PHONE
                    },
                    enumerable: !1,
                    configurable: !0
                }), e
            }(),
            He = function() {
                function e(e) {
                    this._config = e, this._cache = e.cache, this._request = e.request, this._runtime = e.runtime || Ue.WEB, We.on(Ke.LOGIN_TYPE_CHANGED, this._onLoginTypeChanged.bind(this))
                }
                return Object.defineProperty(e.prototype, "currentUser", {
                    get: function() {
                        if ("async" !== this._cache.mode) {
                            var e = this.hasLoginState();
                            return e && e.user || null
                        }
                        je(ke.INVALID_OPERATION, "current platform's storage is asynchronous, please use getCurrenUser insteed")
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "loginType", {
                    get: function() {
                        return this._cache.getStore(this._cache.keys.loginTypeKey)
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.getCurrenUser = function() {
                    return De(this, void 0, void 0, (function() {
                        var e;
                        return Le(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.getLoginState()];
                                case 1:
                                    return (e = t.sent()) ? [4, e.user.checkLocalInfoAsync()] : [3, 3];
                                case 2:
                                    return t.sent(), [2, e.user || null];
                                case 3:
                                    return [2, null]
                            }
                        }))
                    }))
                }, e.prototype.getLoginType = function() {
                    return De(this, void 0, void 0, (function() {
                        return Le(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this._cache.getStoreAsync(this._cache.keys.loginTypeKey)];
                                case 1:
                                    return [2, e.sent()]
                            }
                        }))
                    }))
                }, e.prototype.getAccessToken = function() {
                    return De(this, void 0, void 0, (function() {
                        var e;
                        return Le(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = {}, [4, this._request.getAccessToken()];
                                case 1:
                                    return [2, (e.accessToken = t.sent().accessToken, e.env = this._config.env, e)]
                            }
                        }))
                    }))
                }, e.prototype.weixinAuthProvider = function(e) {
                    var t = e.appid,
                        n = e.scope,
                        r = e.state;
                    return this._weixinAuthProvider || (this._weixinAuthProvider = new S(Re(Re({}, this._config), {
                        cache: this._cache,
                        request: this._request,
                        runtime: this._runtime
                    }), t, n, r)), this._weixinAuthProvider
                }, e.prototype.anonymousAuthProvider = function() {
                    return this._anonymousAuthProvider || (this._anonymousAuthProvider = new j(Re(Re({}, this._config), {
                        cache: this._cache,
                        request: this._request
                    }))), this._anonymousAuthProvider
                }, e.prototype.customAuthProvider = function() {
                    return this._customAuthProvider || (this._customAuthProvider = new K(Re(Re({}, this._config), {
                        cache: this._cache,
                        request: this._request
                    }))), this._customAuthProvider
                }, e.prototype.emailAuthProvider = function() {
                    return this._emailAuthProvider || (this._emailAuthProvider = new re(Re(Re({}, this._config), {
                        cache: this._cache,
                        request: this._request
                    }))), this._emailAuthProvider
                }, e.prototype.usernameAuthProvider = function() {
                    return this._usernameAuthProvider || (this._usernameAuthProvider = new pe(Re(Re({}, this._config), {
                        cache: this._cache,
                        request: this._request
                    }))), this._usernameAuthProvider
                }, e.prototype.phoneAuthProvider = function() {
                    return this._phoneAuthProvider || (this._phoneAuthProvider = new Te(Re(Re({}, this._config), {
                        cache: this._cache,
                        request: this._request
                    }))), this._phoneAuthProvider
                }, e.prototype.signInWithUsernameAndPassword = function(e, t) {
                    return De(this, void 0, void 0, (function() {
                        return Le(this, (function(n) {
                            return [2, this.usernameAuthProvider().signIn(e, t)]
                        }))
                    }))
                }, e.prototype.isUsernameRegistered = function(e) {
                    return De(this, void 0, void 0, (function() {
                        var t;
                        return Le(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return "string" != typeof e && Ce(ke.INVALID_PARAMS, "username must be a string"), [4, this._request.send("auth.isUsernameRegistered", {
                                        username: e
                                    })];
                                case 1:
                                    return [2, null == (t = n.sent().data) ? void 0 : t.isRegistered]
                            }
                        }))
                    }))
                }, e.prototype.signInWithEmailAndPassword = function(e, t) {
                    return De(this, void 0, void 0, (function() {
                        return Le(this, (function(n) {
                            return [2, this.emailAuthProvider().signIn(e, t)]
                        }))
                    }))
                }, e.prototype.signUpWithEmailAndPassword = function(e, t) {
                    return De(this, void 0, void 0, (function() {
                        return Le(this, (function(n) {
                            return [2, this.emailAuthProvider().signUp(e, t)]
                        }))
                    }))
                }, e.prototype.sendPasswordResetEmail = function(e) {
                    return De(this, void 0, void 0, (function() {
                        return Le(this, (function(t) {
                            return [2, this.emailAuthProvider().resetPassword(e)]
                        }))
                    }))
                }, e.prototype.signOut = function() {
                    return De(this, void 0, void 0, (function() {
                        var e, t, n, o, i, s, a;
                        return Le(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    return e = this._cache.keys, t = e.refreshTokenKey, n = e.accessTokenKey, o = e.accessTokenExpireKey, i = "auth.logout", [4, this._cache.getStoreAsync(t)];
                                case 1:
                                    return (s = u.sent()) ? [4, this._request.send(i, {
                                        refresh_token: s
                                    })] : [2];
                                case 2:
                                    return a = u.sent(), this._cache.removeStoreAsync(t), this._cache.removeStoreAsync(n), this._cache.removeStoreAsync(o), We.fire(Ke.LOGIN_STATE_CHANGED), We.fire(Ke.LOGIN_TYPE_CHANGED, {
                                        env: this._config.env,
                                        loginType: r.NULL,
                                        persistence: this._config.persistence
                                    }), [2, a]
                            }
                        }))
                    }))
                }, e.prototype.onLoginStateChanged = function(e) {
                    return De(this, void 0, void 0, (function() {
                        var t, n = this;
                        return Le(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return We.on(Ke.LOGIN_STATE_CHANGED, (function() {
                                        return De(n, void 0, void 0, (function() {
                                            var t;
                                            return Le(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, this.getLoginState()];
                                                    case 1:
                                                        return t = n.sent(), e.call(this, t), [2]
                                                }
                                            }))
                                        }))
                                    })), [4, this.getLoginState()];
                                case 1:
                                    return t = r.sent(), e.call(this, t), [2]
                            }
                        }))
                    }))
                }, e.prototype.onLoginStateExpired = function(e) {
                    We.on(Ke.LOGIN_STATE_EXPIRED, e.bind(this))
                }, e.prototype.onAccessTokenRefreshed = function(e) {
                    We.on(Ke.ACCESS_TOKEN_REFRESHD, e.bind(this))
                }, e.prototype.onAnonymousConverted = function(e) {
                    We.on(Ke.ANONYMOUS_CONVERTED, e.bind(this))
                }, e.prototype.onLoginTypeChanged = function(e) {
                    var t = this;
                    We.on(Ke.LOGIN_TYPE_CHANGED, (function() {
                        return De(t, void 0, void 0, (function() {
                            var t;
                            return Le(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.getLoginState()];
                                    case 1:
                                        return t = n.sent(), e.call(this, t), [2]
                                }
                            }))
                        }))
                    }))
                }, e.prototype.hasLoginState = function() {
                    if ("async" !== this._cache.mode) {
                        var e = this._cache.keys.refreshTokenKey;
                        if (this._cache.getStore(e)) {
                            var t = new $e({
                                envId: this._config.env,
                                cache: this._cache,
                                request: this._request
                            });
                            return t.checkLocalState(), t
                        }
                        return null
                    }
                    je(ke.INVALID_OPERATION, "current platform's storage is asynchronous, please use getLoginState insteed")
                }, e.prototype.getLoginState = function() {
                    return De(this, void 0, void 0, (function() {
                        var e, t;
                        return Le(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return e = this._cache.keys.refreshTokenKey, [4, this._cache.getStoreAsync(e)];
                                case 1:
                                    return n.sent() ? [4, (t = new $e({
                                        envId: this._config.env,
                                        cache: this._cache,
                                        request: this._request
                                    })).checkLocalStateAsync()] : [3, 3];
                                case 2:
                                    return n.sent(), [2, t];
                                case 3:
                                    return [2, null]
                            }
                        }))
                    }))
                }, e.prototype.shouldRefreshAccessToken = function(e) {
                    this._request._shouldRefreshAccessTokenHook = e.bind(this)
                }, e.prototype.getUserInfo = function() {
                    return De(this, void 0, void 0, (function() {
                        var e;
                        return Le(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return "auth.getUserInfo", [4, this._request.send("auth.getUserInfo", {})];
                                case 1:
                                    return (e = t.sent()).code ? [2, e] : [2, Re(Re({}, e.data), {
                                        requestId: e.seqId
                                    })]
                            }
                        }))
                    }))
                }, e.prototype.getAuthHeader = function() {
                    var e = this._cache.keys,
                        t = e.refreshTokenKey,
                        n = e.accessTokenKey,
                        r = this._cache.getStore(t);
                    return {
                        "x-cloudbase-credentials": this._cache.getStore(n) + "/@@/" + r
                    }
                }, e.prototype.getAuthHeaderAsync = function() {
                    return De(this, void 0, void 0, (function() {
                        var e, t, n, r;
                        return Le(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this._request.refreshAccessToken()];
                                case 1:
                                    return o.sent(), e = this._cache.keys, t = e.refreshTokenKey, n = e.accessTokenKey, [4, this._cache.getStoreAsync(t)];
                                case 2:
                                    return r = o.sent(), [4, this._cache.getStoreAsync(n)];
                                case 3:
                                    return [2, {
                                        "x-cloudbase-credentials": o.sent() + "/@@/" + r
                                    }]
                            }
                        }))
                    }))
                }, e.prototype.sendPhoneCode = function(e) {
                    return De(this, void 0, void 0, (function() {
                        return Le(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this._request.send("auth.sendPhoneCode", {
                                        phoneNumber: Me(e)
                                    })];
                                case 1:
                                    return [2, "Ok" === t.sent().data.SendStatus]
                            }
                        }))
                    }))
                }, e.prototype.signUpWithPhoneCode = function(e, t, n) {
                    return De(this, void 0, void 0, (function() {
                        return Le(this, (function(r) {
                            return [2, this.phoneAuthProvider().signUp(e, t, n)]
                        }))
                    }))
                }, e.prototype.signInWithPhoneCodeOrPassword = function(e) {
                    return De(this, void 0, void 0, (function() {
                        return Le(this, (function(t) {
                            return [2, this.phoneAuthProvider().signIn(e)]
                        }))
                    }))
                }, e.prototype.forceResetPwdByPhoneCode = function(e) {
                    return De(this, void 0, void 0, (function() {
                        return Le(this, (function(t) {
                            return [2, this.phoneAuthProvider().signIn(Re(Re({}, e), {
                                signMethod: Ne
                            }))]
                        }))
                    }))
                }, e.prototype._onLoginTypeChanged = function(e) {
                    return De(this, void 0, void 0, (function() {
                        var t, n, r;
                        return Le(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return t = e.data, n = t.loginType, r = t.persistence, t.env !== this._config.env ? [2] : [4, this._cache.updatePersistenceAsync(r)];
                                case 1:
                                    return o.sent(), [4, this._cache.setStoreAsync(this._cache.keys.loginTypeKey, n)];
                                case 2:
                                    return o.sent(), [2]
                            }
                        }))
                    }))
                }, Be([Fe({
                    title: "čˇĺç¨ćˇäżĄćŻĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().getCurrenUser() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", []), Pe("design:returntype", Promise)], e.prototype, "getCurrenUser", null), Be([Fe({
                    title: "čˇĺç¨ćˇćŻĺŚč˘Ťĺ ç¨ĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().isUsernameRegistered() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", [String]), Pe("design:returntype", Promise)], e.prototype, "isUsernameRegistered", null), Be([Fe({
                    title: "ç¨ćˇçťĺşĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().signOut() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺç¨ćˇćŻĺŚä¸şĺżĺçťĺ˝ďźĺżĺçťĺ˝ä¸ćŻćsignOutďź", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", []), Pe("design:returntype", Promise)], e.prototype, "signOut", null), Be([Fe({
                    title: "čˇĺćŹĺ°çťĺ˝ćĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ auth().getLoginState() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", []), Pe("design:returntype", Promise)], e.prototype, "getLoginState", null), Be([Fe({
                    title: "čˇĺç¨ćˇäżĄćŻĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - ćŻĺŚĺˇ˛çťĺ˝", "  2 - č°ç¨ auth().getUserInfo() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", []), Pe("design:returntype", Promise)], e.prototype, "getUserInfo", null), Be([Fe({
                    title: "ĺéç­äżĄéŞčŻç ĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨čŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺ˝ĺçŻĺ˘ćŻĺŚĺźéäşç­äżĄéŞčŻç çťĺ˝", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + qe]
                }), Pe("design:type", Function), Pe("design:paramtypes", [String]), Pe("design:returntype", Promise)], e.prototype, "sendPhoneCode", null), e
            }(),
            Ke = {
                LOGIN_STATE_CHANGED: "loginStateChanged",
                LOGIN_STATE_EXPIRED: "loginStateExpire",
                LOGIN_TYPE_CHANGED: "loginTypeChanged",
                ANONYMOUS_CONVERTED: "anonymousConverted",
                ACCESS_TOKEN_REFRESHD: "refreshAccessToken"
            },
            Ge = {
                name: "auth",
                namespace: "auth",
                injectEvents: {
                    bus: We,
                    events: [Ke.LOGIN_TYPE_CHANGED, Ke.LOGIN_STATE_EXPIRED, Ke.LOGIN_STATE_CHANGED, Ke.ACCESS_TOKEN_REFRESHD, Ke.ANONYMOUS_CONVERTED]
                },
                entity: function(e) {
                    if (void 0 === e && (e = {
                            region: "",
                            persistence: "local"
                        }), this.authInstance) return je(ke.INVALID_OPERATION, "every cloudbase instance should has only one auth object"), this.authInstance;
                    var t = this.platform,
                        n = t.adapter,
                        r = t.runtime,
                        o = e.persistence || n.primaryStorage;
                    o && o !== this.config.persistence && this.updateConfig({
                        persistence: o
                    });
                    var i = this.config,
                        s = i.env,
                        a = i.persistence,
                        u = i.debug;
                    return this.authInstance = new He({
                        env: s,
                        region: e.region,
                        persistence: a,
                        debug: u,
                        cache: this.cache,
                        request: this.request,
                        runtime: r
                    }), this.authInstance
                }
            };
        try {
            cloudbase.registerComponent(Ge)
        } catch (e) {}

        function Ve(e) {
            try {
                e.registerComponent(Ge)
            } catch (e) {
                console.warn(e)
            }
        }

        function Je(e, t) {
            He.prototype[e] = function(n) {
                var r = "_" + e;
                return this[r] || (this[r] = new t(Re(Re({}, n), this._config))), this[r]
            }
        }
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "cloudbase", (function() {
            return re
        }));
        var r, o = n(0),
            i = n(3),
            s = (r = function(e, t) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
            a = function() {
                return (a = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            u = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            c = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };
        var f = function(e) {
                function t(t) {
                    void 0 === t && (t = {});
                    var n = e.call(this) || this,
                        r = t.timeout,
                        o = t.timeoutMsg,
                        i = t.restrictedMethods;
                    return n._timeout = r || 0, n._timeoutMsg = o || "čŻˇćąčśćś", n._restrictedMethods = i || ["get", "post", "upload", "download"], n
                }
                return s(t, e), t.prototype.post = function(e) {
                    var t = this;
                    return new Promise((function(n, r) {
                        var o = e.url,
                            s = e.data,
                            a = e.headers,
                            u = wx.request({
                                url: Object(i.formatUrl)("https:", o),
                                data: s,
                                timeout: t._timeout,
                                method: "POST",
                                header: a,
                                success: function(e) {
                                    n(e)
                                },
                                fail: function(e) {
                                    r(e)
                                },
                                complete: function(e) {
                                    if (e && e.errMsg && (t._timeout && -1 !== t._restrictedMethods.indexOf("post") && "request:fail timeout" === e.errMsg)) {
                                        console.warn(t._timeoutMsg);
                                        try {
                                            u.abort()
                                        } catch (e) {}
                                    }
                                }
                            })
                    }))
                }, t.prototype.upload = function(e) {
                    var t = this,
                        n = this;
                    return new Promise((function(r) {
                        return u(t, void 0, void 0, (function() {
                            var t, o, i, s, u, f;
                            return c(this, (function(c) {
                                return t = e.url, o = e.file, i = e.data, s = e.headers, u = e.onUploadProgress, f = wx.uploadFile({
                                    url: t,
                                    filePath: o,
                                    name: "file",
                                    formData: a({}, i),
                                    header: s,
                                    timeout: this._timeout,
                                    success: function(e) {
                                        var t = {
                                            statusCode: e.statusCode,
                                            data: e.data || {}
                                        };
                                        200 === e.statusCode && i.success_action_status && (t.statusCode = parseInt(i.success_action_status, 10)), r(t)
                                    },
                                    fail: function(e) {
                                        r(e)
                                    },
                                    complete: function(e) {
                                        if (e && e.errMsg && (n._timeout && -1 !== n._restrictedMethods.indexOf("upload") && "request:fail timeout" === e.errMsg)) {
                                            console.warn(n._timeoutMsg);
                                            try {
                                                f.abort()
                                            } catch (e) {}
                                        }
                                    }
                                }), u && f.onProgressUpdate((function(e) {
                                    u(e)
                                })), [2]
                            }))
                        }))
                    }))
                }, t.prototype.download = function(e) {
                    var t = this,
                        n = this;
                    return new Promise((function(r, o) {
                        var s = e.url,
                            a = e.headers,
                            u = wx.downloadFile({
                                url: Object(i.formatUrl)("https:", s),
                                header: a,
                                timeout: t._timeout,
                                success: function(e) {
                                    200 === e.statusCode && e.tempFilePath ? r({
                                        statusCode: 200,
                                        tempFilePath: e.tempFilePath
                                    }) : r(e)
                                },
                                fail: function(e) {
                                    o(e)
                                },
                                complete: function(e) {
                                    if (e && e.errMsg && (n._timeout && -1 !== n._restrictedMethods.indexOf("download") && "request:fail timeout" === e.errMsg)) {
                                        console.warn(n._timeoutMsg);
                                        try {
                                            u.abort()
                                        } catch (e) {}
                                    }
                                }
                            })
                    }))
                }, t
            }(i.AbstractSDKRequest),
            l = {
                setItem: function(e, t) {
                    wx.setStorageSync(e, t)
                },
                getItem: function(e) {
                    return wx.getStorageSync(e)
                },
                removeItem: function(e) {
                    wx.removeStorageSync(e)
                },
                clear: function() {
                    wx.clearStorageSync()
                }
            },
            h = function(e, t) {
                void 0 === t && (t = {});
                var n = wx.connectSocket(a({
                    url: e
                }, t));
                return {
                    set onopen(e) {
                        n.onOpen(e)
                    },
                    set onmessage(e) {
                        n.onMessage(e)
                    },
                    set onclose(e) {
                        n.onClose(e)
                    },
                    set onerror(e) {
                        n.onError(e)
                    },
                    send: function(e) {
                        return n.send({
                            data: e
                        })
                    },
                    close: function(e, t) {
                        return n.close({
                            code: e,
                            reason: t
                        })
                    },
                    get readyState() {
                        return n.readyState
                    },
                    CONNECTING: 0,
                    OPEN: 1,
                    CLOSING: 2,
                    CLOSED: 3
                }
            };
        var p = {
                genAdapter: function() {
                    return {
                        root: {},
                        reqClass: f,
                        wsClass: h,
                        localStorage: l,
                        primaryStorage: i.StorageType.local,
                        getAppSign: function() {
                            var e = wx.getAccountInfoSync();
                            return "undefined" != typeof App || "undefined" != typeof getApp || wx.onAppHide || wx.offAppHide || wx.onAppShow || wx.offAppShow ? e && e.miniProgram ? e.miniProgram.appId : "" : e && e.plugin ? e.plugin.appId : ""
                        }
                    }
                },
                isMatch: function() {
                    if ("undefined" == typeof wx) return !1;
                    if ("undefined" == typeof Page) return !1;
                    if (!wx.getSystemInfoSync) return !1;
                    if (!wx.getStorageSync) return !1;
                    if (!wx.setStorageSync) return !1;
                    if (!wx.connectSocket) return !1;
                    if (!wx.request) return !1;
                    try {
                        if (!wx.getSystemInfoSync()) return !1;
                        if ("qq" === wx.getSystemInfoSync().AppPlatform) return !1
                    } catch (e) {
                        return !1
                    }
                    return !0
                },
                runtime: "wx_mp"
            },
            d = function() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    o = 0;
                for (t = 0; t < n; t++)
                    for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
                return r
            },
            y = o.constants.ERRORS,
            g = {};

        function _(e, t) {
            var n = t.name,
                r = t.namespace,
                o = t.entity,
                i = t.injectEvents,
                s = t.IIFE,
                a = void 0 !== s && s;
            if (g[n] || r && e[r]) throw new Error(JSON.stringify({
                code: y.INVALID_OPERATION,
                msg: "Duplicate component " + n
            }));
            if (a) {
                if (!o || "function" != typeof o) throw new Error(JSON.stringify({
                    code: y.INVALID_PARAMS,
                    msg: "IIFE component's entity must be a function"
                }));
                o.call(e)
            }
            if (g[n] = t, r ? e.prototype[r] = o : function e(t, n) {
                    if (!(n instanceof Object)) return n;
                    switch (n.constructor) {
                        case Date:
                            return new Date(n.getTime());
                        case Object:
                            void 0 === t && (t = {});
                            break;
                        case Array:
                            t = [];
                            break;
                        default:
                            return n
                    }
                    for (var r in n) n.hasOwnProperty(r) && (t[r] = e(t[r], n[r]));
                    return t
                }(e.prototype, o), i) {
                var u = i.bus,
                    c = i.events;
                if (!u || !c || 0 === c.length) return;
                var f = e.prototype.fire || function() {};
                e.prototype.events || (e.prototype.events = {}), (e.prototype.events || {})[n] ? e.prototype.events[n].events = d(e.prototype.events[n].events, c) : e.prototype.events[n] = {
                    bus: u,
                    events: c
                }, e.prototype.fire = function(e, t) {
                    for (var n in f(e, t), this.events) {
                        var r = this.events[n],
                            o = r.bus;
                        if (r.events.includes(e)) {
                            o.fire(e, t);
                            break
                        }
                    }
                }
            }
        }
        var v = {},
            m = function() {
                return (m = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            b = o.cache.CloudbaseCache,
            w = {},
            E = {};

        function S(e) {
            var t = e.env,
                n = e.persistence,
                r = e.platformInfo,
                o = {
                    accessTokenKey: "access_token_" + t,
                    accessTokenExpireKey: "access_token_expire_" + t,
                    refreshTokenKey: "refresh_token_" + t,
                    anonymousUuidKey: "anonymous_uuid_" + t,
                    loginTypeKey: "login_type_" + t,
                    userInfoKey: "user_info_" + t
                };
            w[t] ? w[t].updatePersistence(n) : w[t] = new b(m(m({}, e), {
                keys: o,
                platformInfo: r,
                alwaysLocalKeys: ["anonymousUuidKey"]
            })), E[t] = E[t] || new b(m(m({}, e), {
                keys: o,
                platformInfo: r,
                persistence: "local"
            }))
        }

        function A(e) {
            return w[e]
        }

        function O(e) {
            return E[e]
        }
        var I = n(2),
            N = "loginStateExpire",
            T = "refreshAccessToken",
            R = function() {
                return (R = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            B = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            P = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            D = o.constants.ERRORS,
            L = o.utils.genSeqId,
            x = o.utils.isFormData,
            U = o.utils.formatUrl,
            j = o.utils.createSign,
            C = o.adapters.RUNTIME,
            M = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"];

        function k(e, t, n) {
            var r = e[t];
            e[t] = function(t) {
                var o = {},
                    i = {};
                n.forEach((function(n) {
                    var r = n.call(e, t),
                        s = r.data,
                        a = r.headers;
                    Object.assign(o, s), Object.assign(i, a)
                }));
                var s = t.data;
                return s && function() {
                    if (x(s))
                        for (var e in o) s.append(e, o[e]);
                    else t.data = R(R({}, s), o)
                }(), t.headers = R(R({}, t.headers || {}), i), r.call(e, t)
            }
        }

        function q() {
            var e = L();
            return {
                data: {
                    seqId: e
                },
                headers: {
                    "X-SDK-Version": "@cloudbase/js-sdk/" + Object(I.e)(),
                    "x-seqid": e
                }
            }
        }
        var F = function() {
                function e(e) {
                    this._throwWhenRequestFail = !1, this.config = e, this._reqClass = new v.adapter.reqClass({
                        timeout: this.config.timeout,
                        timeoutMsg: "[@cloudbase/js-sdk] čŻˇćąĺ¨" + this.config.timeout / 1e3 + "sĺćŞĺŽćďźĺˇ˛ä¸­ć­",
                        restrictedMethods: ["post"]
                    }), this._throwWhenRequestFail = e.throw || !1, this._cache = A(this.config.env), this._localCache = O(this.config.env), k(this._reqClass, "post", [q]), k(this._reqClass, "upload", [q]), k(this._reqClass, "download", [q])
                }
                return e.prototype.post = function(e) {
                    return B(this, void 0, void 0, (function() {
                        return P(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this._reqClass.post(e)];
                                case 1:
                                    return [2, t.sent()]
                            }
                        }))
                    }))
                }, e.prototype.upload = function(e) {
                    return B(this, void 0, void 0, (function() {
                        return P(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this._reqClass.upload(e)];
                                case 1:
                                    return [2, t.sent()]
                            }
                        }))
                    }))
                }, e.prototype.download = function(e) {
                    return B(this, void 0, void 0, (function() {
                        return P(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this._reqClass.download(e)];
                                case 1:
                                    return [2, t.sent()]
                            }
                        }))
                    }))
                }, e.prototype.refreshAccessToken = function() {
                    return B(this, void 0, void 0, (function() {
                        var e, t, n;
                        return P(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, this._refreshAccessTokenPromise];
                                case 2:
                                    return e = r.sent(), [3, 4];
                                case 3:
                                    return n = r.sent(), t = n, [3, 4];
                                case 4:
                                    if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t) throw t;
                                    return [2, e]
                            }
                        }))
                    }))
                }, e.prototype.getAccessToken = function() {
                    return B(this, void 0, void 0, (function() {
                        var e, t, n, r, o, i, s, a, u;
                        return P(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    return e = this._cache.keys, t = e.accessTokenKey, n = e.accessTokenExpireKey, r = e.refreshTokenKey, [4, this._cache.getStoreAsync(r)];
                                case 1:
                                    if (!c.sent()) throw new Error(JSON.stringify({
                                        code: D.OPERATION_FAIL,
                                        msg: "refresh token is not exist, your local data might be messed up, please retry after clear localStorage or sessionStorage"
                                    }));
                                    return [4, this._cache.getStoreAsync(t)];
                                case 2:
                                    return o = c.sent(), s = Number, [4, this._cache.getStoreAsync(n)];
                                case 3:
                                    return i = s.apply(void 0, [c.sent()]), a = !0, (u = this._shouldRefreshAccessTokenHook) ? [4, this._shouldRefreshAccessTokenHook(o, i)] : [3, 5];
                                case 4:
                                    u = !c.sent(), c.label = 5;
                                case 5:
                                    return u && (a = !1), o && i && !(i < Date.now()) || !a ? [3, 7] : [4, this.refreshAccessToken()];
                                case 6:
                                    return [2, c.sent()];
                                case 7:
                                    return [2, {
                                        accessToken: o,
                                        accessTokenExpire: i
                                    }]
                            }
                        }))
                    }))
                }, e.prototype.request = function(e, t, n) {
                    return B(this, void 0, void 0, (function() {
                        var r, o, i, s, a, u, c, f, l, h, p, d, y, g, _, m, b, w, E, S, A, O, N, T, B, D;
                        return P(this, (function(P) {
                            switch (P.label) {
                                case 0:
                                    return r = "x-tcb-trace_" + this.config.env, o = "application/x-www-form-urlencoded", i = R({
                                        action: e,
                                        dataVersion: I.a,
                                        env: this.config.env
                                    }, t), -1 !== M.indexOf(e) ? [3, 3] : (s = this._cache.keys.refreshTokenKey, [4, this._cache.getStoreAsync(s)]);
                                case 1:
                                    return P.sent() ? (a = i, [4, this.getAccessToken()]) : [3, 3];
                                case 2:
                                    a.access_token = P.sent().accessToken, P.label = 3;
                                case 3:
                                    if ("storage.uploadFile" === e) {
                                        for (c in u = new FormData) u.hasOwnProperty(c) && void 0 !== u[c] && u.append(c, i[c]);
                                        o = "multipart/form-data"
                                    } else
                                        for (c in o = "application/json;charset=UTF-8", u = {}, i) void 0 !== i[c] && (u[c] = i[c]);
                                    return f = {
                                        headers: {
                                            "content-type": o
                                        }
                                    }, (null == n ? void 0 : n.onUploadProgress) && (f.onUploadProgress = n.onUploadProgress), this.config.region && (f.headers["X-TCB-Region"] = this.config.region), (l = this._localCache.getStore(r)) && (f.headers["X-TCB-Trace"] = l), v.runtime !== C.WEB && (h = this.config, p = h.appSign, d = h.appSecret, y = Date.now(), g = d.appAccessKey, _ = d.appAccessKeyId, m = j({
                                        data: {},
                                        timestamp: y,
                                        appAccessKeyId: _,
                                        appSign: p
                                    }, g), f.headers["X-TCB-App-Source"] = "timestamp=" + y + ";appAccessKeyId=" + _ + ";appSign=" + p + ";sign=" + m), b = t.parse, w = t.inQuery, E = t.search, S = {
                                        env: this.config.env
                                    }, b && (S.parse = !0), w && (S = R(R({}, w), S)), A = Object(I.c)(), O = A.BASE_URL, N = A.PROTOCOL, T = U(N, O, S), E && (T += E), [4, this.post(R({
                                        url: T,
                                        data: u
                                    }, f))];
                                case 4:
                                    if (B = P.sent(), (D = B.header && B.header["x-tcb-trace"]) && this._localCache.setStore(r, D), 200 !== Number(B.status) && 200 !== Number(B.statusCode) || !B.data) throw new Error("network request error");
                                    return [2, B]
                            }
                        }))
                    }))
                }, e.prototype.send = function(e, t) {
                    return void 0 === t && (t = {}), B(this, void 0, void 0, (function() {
                        var n;
                        return P(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, t, {
                                        onUploadProgress: t.onUploadProgress
                                    })];
                                case 1:
                                    return "ACCESS_TOKEN_EXPIRED" !== (n = r.sent()).data.code || -1 !== M.indexOf(e) ? [3, 4] : [4, this.refreshAccessToken()];
                                case 2:
                                    return r.sent(), [4, this.request(e, t, {
                                        onUploadProgress: t.onUploadProgress
                                    })];
                                case 3:
                                    n = r.sent(), r.label = 4;
                                case 4:
                                    if (n.data.code && this._throwWhenRequestFail) throw new Error(JSON.stringify({
                                        code: D.OPERATION_FAIL,
                                        msg: "[" + n.data.code + "] " + n.data.message
                                    }));
                                    return [2, n.data]
                            }
                        }))
                    }))
                }, e.prototype._refreshAccessToken = function(e) {
                    return void 0 === e && (e = 1), B(this, void 0, void 0, (function() {
                        var t, n, r, o, i, s, a, u, c, f, l, h, p;
                        return P(this, (function(d) {
                            switch (d.label) {
                                case 0:
                                    return t = this._cache.keys, n = t.accessTokenKey, r = t.accessTokenExpireKey, o = t.refreshTokenKey, i = t.loginTypeKey, s = t.anonymousUuidKey, [4, this._cache.removeStoreAsync(n)];
                                case 1:
                                    return d.sent(), [4, this._cache.removeStoreAsync(r)];
                                case 2:
                                    return d.sent(), [4, this._cache.getStoreAsync(o)];
                                case 3:
                                    if (!(a = d.sent())) throw new Error(JSON.stringify({
                                        code: D.INVALID_OPERATION,
                                        msg: "not login"
                                    }));
                                    return u = {
                                        refresh_token: a
                                    }, [4, this.request("auth.fetchAccessTokenWithRefreshToken", u)];
                                case 4:
                                    return (c = d.sent()).data.code ? "SIGN_PARAM_INVALID" !== (f = c.data.code) && "REFRESH_TOKEN_EXPIRED" !== f && "INVALID_REFRESH_TOKEN" !== f ? [3, 11] : [4, this._cache.getStoreAsync(i)] : [3, 12];
                                case 5:
                                    return d.sent() === I.b.ANONYMOUS && "INVALID_REFRESH_TOKEN" === f ? [4, this._cache.getStoreAsync(s)] : [3, 9];
                                case 6:
                                    return l = d.sent(), [4, this._cache.getStoreAsync(o)];
                                case 7:
                                    return h = d.sent(), [4, this.send("auth.signInAnonymously", {
                                        anonymous_uuid: l,
                                        refresh_token: h
                                    })];
                                case 8:
                                    if (p = d.sent(), this._setRefreshToken(p.refresh_token), e >= 1) return [2, this._refreshAccessToken(--e)];
                                    throw new Error(JSON.stringify({
                                        code: D.OPERATION_FAIL,
                                        message: "éčŻčˇĺ refresh token ĺ¤ąč´Ľ"
                                    }));
                                case 9:
                                    return re.fire(N), [4, this._cache.removeStoreAsync(o)];
                                case 10:
                                    d.sent(), d.label = 11;
                                case 11:
                                    throw new Error(JSON.stringify({
                                        code: D.NETWORK_ERROR,
                                        msg: "refresh access_token failedďź" + c.data.code
                                    }));
                                case 12:
                                    return c.data.access_token ? (re.fire(T), [4, this._cache.setStoreAsync(n, c.data.access_token)]) : [3, 15];
                                case 13:
                                    return d.sent(), [4, this._cache.setStoreAsync(r, c.data.access_token_expire + Date.now())];
                                case 14:
                                    return d.sent(), [2, {
                                        accessToken: c.data.access_token,
                                        accessTokenExpire: c.data.access_token_expire
                                    }];
                                case 15:
                                    return c.data.refresh_token ? [4, this._cache.removeStoreAsync(o)] : [3, 19];
                                case 16:
                                    return d.sent(), [4, this._cache.setStoreAsync(o, c.data.refresh_token)];
                                case 17:
                                    return d.sent(), [4, this._refreshAccessToken()];
                                case 18:
                                    d.sent(), d.label = 19;
                                case 19:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype._setRefreshToken = function(e) {
                    return B(this, void 0, void 0, (function() {
                        var t, n, r, o;
                        return P(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = this._cache.keys, n = t.accessTokenKey, r = t.accessTokenExpireKey, o = t.refreshTokenKey, [4, this._cache.removeStoreAsync(n)];
                                case 1:
                                    return i.sent(), [4, this._cache.removeStoreAsync(r)];
                                case 2:
                                    return i.sent(), [4, this._cache.setStoreAsync(o, e)];
                                case 3:
                                    return i.sent(), [2]
                            }
                        }))
                    }))
                }, e
            }(),
            W = {};
        var Y = function() {
                return (Y = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            $ = function(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            },
            H = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            },
            K = function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            G = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            V = o.adapters.useAdapters,
            J = o.adapters.useDefaultAdapter,
            z = o.adapters.RUNTIME,
            X = o.constants.ERRORS,
            Z = o.constants.COMMUNITY_SITE_URL,
            Q = o.utils.printWarn,
            ee = o.helpers.catchErrorsDecorator,
            te = {
                timeout: 15e3,
                persistence: "local"
            },
            ne = {},
            re = new(function() {
                function e(e) {
                    this._config = e || this._config, this.authInstance = null
                }
                return Object.defineProperty(e.prototype, "config", {
                    get: function() {
                        return this._config
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "platform", {
                    get: function() {
                        return v
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "cache", {
                    get: function() {
                        return A(this._config.env)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "localCache", {
                    get: function() {
                        return O(this._config.env)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "request", {
                    get: function() {
                        return e = this._config.env, W[e];
                        var e
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.init = function(t) {
                    if (!t.env) throw new Error(JSON.stringify({
                        code: X.INVALID_PARAMS,
                        msg: "env must not be specified"
                    }));
                    if (v.adapter || this._useDefaultAdapter(), this.requestClient = new v.adapter.reqClass({
                            timeout: t.timeout || 5e3,
                            timeoutMsg: "[" + Object(I.d)() + "][REQUEST TIMEOUT] request had been abort since didn't finished within" + t.timeout / 1e3 + "s"
                        }), v.runtime !== z.WEB) {
                        if (!t.appSecret) throw new Error(JSON.stringify({
                            code: X.INVALID_PARAMS,
                            msg: "invalid appSecret"
                        }));
                        var n = v.adapter.getAppSign ? v.adapter.getAppSign() : "";
                        if (t.appSign && n && t.appSign !== n) throw new Error(JSON.stringify({
                            code: X.INVALID_PARAMS,
                            msg: "invalid appSign"
                        }));
                        if (n && (t.appSign = n), !t.appSign) throw new Error(JSON.stringify({
                            code: X.INVALID_PARAMS,
                            msg: "invalid appSign"
                        }))
                    }
                    this._config = Y(Y({}, te), t), this._config.timeout = this._formatTimeout(this._config.timeout);
                    var r = this._config,
                        o = r.env,
                        i = r.persistence,
                        s = r.debug,
                        a = r.timeout,
                        u = r.appSecret,
                        c = r.appSign;
                    S({
                            env: o,
                            persistence: i,
                            debug: s,
                            platformInfo: this.platform
                        }),
                        function(e) {
                            W[e.env] = new F(R(R({}, e), {
                                throw: !0
                            }))
                        }({
                            env: o,
                            region: t.region || "",
                            timeout: a,
                            appSecret: u,
                            appSign: c
                        }), t.region && Object(I.g)(o, t.region || "");
                    var f = new e(this._config);
                    return f.requestClient = this.requestClient, f
                }, e.prototype.updateConfig = function(e) {
                    var t = e.persistence,
                        n = e.debug;
                    this._config.persistence = t, this._config.debug = n, S({
                        env: this._config.env,
                        persistence: t,
                        debug: n,
                        platformInfo: this.platform
                    })
                }, e.prototype.registerExtension = function(e) {
                    ne[e.name] = e
                }, e.prototype.invokeExtension = function(e, t) {
                    return K(this, void 0, void 0, (function() {
                        var n;
                        return G(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    if (!(n = ne[e])) throw new Error(JSON.stringify({
                                        code: X.INVALID_PARAMS,
                                        msg: "extension:" + e + " must be registered before invoke"
                                    }));
                                    return [4, n.invoke(t, this)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        }))
                    }))
                }, e.prototype.useAdapters = function(e) {
                    var t = V(e) || {},
                        n = t.adapter,
                        r = t.runtime;
                    n && (v.adapter = n), r && (v.runtime = r)
                }, e.prototype.registerHook = function(t) {
                    ! function(e, t) {
                        var n = t.entity,
                            r = t.target;
                        if (!e.prototype.hasOwnProperty(r)) throw new Error(JSON.stringify({
                            code: y.INVALID_OPERATION,
                            msg: "target:" + r + " is not exist"
                        }));
                        var o = e.prototype[r];
                        if ("function" != typeof o) throw new Error(JSON.stringify({
                            code: y.INVALID_OPERATION,
                            msg: "target:" + r + " is not a function which is the only type supports hook"
                        }));
                        e.prototype[r] = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return n.call.apply(n, d([this], e)), o.call.apply(o, d([this], e))
                        }
                    }(e, t)
                }, e.prototype.registerComponent = function(t) {
                    _(e, t)
                }, e.prototype.registerVersion = function(e) {
                    Object(I.i)(e)
                }, e.prototype.registerSdkName = function(e) {
                    Object(I.h)(e)
                }, e.prototype.registerEndPoint = function(e, t) {
                    Object(I.f)(e, t)
                }, e.prototype._useDefaultAdapter = function() {
                    var e = J(),
                        t = e.adapter,
                        n = e.runtime;
                    v.adapter = t, v.runtime = n
                }, e.prototype._formatTimeout = function(e) {
                    switch (!0) {
                        case e > 6e5:
                            return Q(X.INVALID_PARAMS, "timeout is greater than maximum value[10min]"), 6e5;
                        case e < 100:
                            return Q(X.INVALID_PARAMS, "timeout is less than maximum value[100ms]"), 100;
                        default:
                            return e
                    }
                }, $([ee({
                    mode: "sync",
                    title: "Cloudbase ĺĺ§ĺĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ cloudbase.init() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - ĺŚććŻéćľč§ĺ¨çŻĺ˘ďźćŻĺŚéç˝ŽäşĺŽĺ¨ĺşç¨ćĽćşďźhttps://docs.cloudbase.net/api-reference/webv2/adapter.html#jie-ru-liu-chengďź", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + Z]
                }), H("design:type", Function), H("design:paramtypes", [Object]), H("design:returntype", e)], e.prototype, "init", null), $([ee({
                    title: "č°ç¨ćŠĺąč˝ĺĺ¤ąč´Ľ",
                    messages: ["čŻˇçĄŽčŽ¤äťĽä¸ĺéĄšďź", "  1 - č°ç¨ invokeExtension() çčŻ­ćłćĺć°ćŻĺŚć­ŁçĄŽ", "  2 - č˘Ťč°ç¨çćŠĺąč˝ĺćŻĺŚĺˇ˛çťĺŽčŁĺšśéčż registerExtension() ćł¨ĺ", "ĺŚćéŽé˘äžçśĺ­ĺ¨ďźĺťşčŽŽĺ°ĺŽćšéŽç­ç¤žĺşćéŽćĺŻťćžĺ¸ŽĺŠďź" + Z]
                }), H("design:type", Function), H("design:paramtypes", [String, Object]), H("design:returntype", Promise)], e.prototype, "invokeExtension", null), e
            }());
        re.useAdapters(p);
        t.default = re
    }])
}));