!
function(t) {
    var n = {};
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, e),
        i.l = !0,
        i.exports
    }
    e.m = t,
    e.c = n,
    e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: r
        })
    },
    e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    e.t = function(t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (e.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & n && "string" != typeof t) for (var i in t) e.d(r, i,
        function(n) {
            return t[n]
        }.bind(null, i));
        return r
    },
    e.n = function(t) {
        var n = t && t.__esModule ?
        function() {
            return t.
        default
        }:
        function() {
            return t
        };
        return e.d(n, "a", n),
        n
    },
    e.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    },
    e.p = "",
    e(e.s = 1)
} ([function(t, n, e) {
    "use strict";
    e.r(n);
    var r = function(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    },
    i = function(t) {
        return 1 === t.length && (t = function(t) {
            return function(n, e) {
                return r(t(n), e)
            }
        } (t)),
        {
            left: function(n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var u = r + i >>> 1;
                    t(n[u], e) < 0 ? r = u + 1 : i = u
                }
                return r
            },
            right: function(n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var u = r + i >>> 1;
                    t(n[u], e) > 0 ? i = u: r = u + 1
                }
                return r
            }
        }
    };
    var u = i(r),
    o = u.right,
    a = u.left,
    c = o,
    f = function(t, n) {
        null == n && (n = s);
        for (var e = 0,
        r = t.length - 1,
        i = t[0], u = new Array(r < 0 ? 0 : r); e < r;) u[e] = n(i, i = t[++e]);
        return u
    };
    function s(t, n) {
        return [t, n]
    }
    var l = function(t, n, e) {
        var r, i, u, o, a = t.length,
        c = n.length,
        f = new Array(a * c);
        for (null == e && (e = s), r = u = 0; r < a; ++r) for (o = t[r], i = 0; i < c; ++i, ++u) f[u] = e(o, n[i]);
        return f
    },
    h = function(t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    },
    d = function(t) {
        return null === t ? NaN: +t
    },
    p = function(t, n) {
        var e, r, i = t.length,
        u = 0,
        o = -1,
        a = 0,
        c = 0;
        if (null == n) for (; ++o < i;) isNaN(e = d(t[o])) || (c += (r = e - a) * (e - (a += r / ++u)));
        else for (; ++o < i;) isNaN(e = d(n(t[o], o, t))) || (c += (r = e - a) * (e - (a += r / ++u)));
        if (u > 1) return c / (u - 1)
    },
    v = function(t, n) {
        var e = p(t, n);
        return e ? Math.sqrt(e) : e
    },
    g = function(t, n) {
        var e, r, i, u = t.length,
        o = -1;
        if (null == n) {
            for (; ++o < u;) if (null != (e = t[o]) && e >= e) for (r = i = e; ++o < u;) null != (e = t[o]) && (r > e && (r = e), i < e && (i = e))
        } else for (; ++o < u;) if (null != (e = n(t[o], o, t)) && e >= e) for (r = i = e; ++o < u;) null != (e = n(t[o], o, t)) && (r > e && (r = e), i < e && (i = e));
        return [r, i]
    },
    y = Array.prototype,
    b = y.slice,
    _ = y.map,
    m = function(t) {
        return function() {
            return t
        }
    },
    x = function(t) {
        return t
    },
    w = function(t, n, e) {
        t = +t,
        n = +n,
        e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
        for (var r = -1,
        i = 0 | Math.max(0, Math.ceil((n - t) / e)), u = new Array(i); ++r < i;) u[r] = t + r * e;
        return u
    },
    M = Math.sqrt(50),
    A = Math.sqrt(10),
    S = Math.sqrt(2),
    k = function(t, n, e) {
        var r, i, u, o, a = -1;
        if (e = +e, (t = +t) === (n = +n) && e > 0) return [t];
        if ((r = n < t) && (i = t, t = n, n = i), 0 === (o = T(t, n, e)) || !isFinite(o)) return [];
        if (o > 0) for (t = Math.ceil(t / o), n = Math.floor(n / o), u = new Array(i = Math.ceil(n - t + 1)); ++a < i;) u[a] = (t + a) * o;
        else for (t = Math.floor(t * o), n = Math.ceil(n * o), u = new Array(i = Math.ceil(t - n + 1)); ++a < i;) u[a] = (t - a) / o;
        return r && u.reverse(),
        u
    };
    function T(t, n, e) {
        var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        u = r / Math.pow(10, i);
        return i >= 0 ? (u >= M ? 10 : u >= A ? 5 : u >= S ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (u >= M ? 10 : u >= A ? 5 : u >= S ? 2 : 1)
    }
    function N(t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        u = r / i;
        return u >= M ? i *= 10 : u >= A ? i *= 5 : u >= S && (i *= 2),
        n < t ? -i: i
    }
    var E = function(t) {
        return Math.ceil(Math.log(t.length) / Math.LN2) + 1
    },
    C = function() {
        var t = x,
        n = g,
        e = E;
        function r(r) {
            var i, u, o = r.length,
            a = new Array(o);
            for (i = 0; i < o; ++i) a[i] = t(r[i], i, r);
            var f = n(a),
            s = f[0],
            l = f[1],
            h = e(a, s, l);
            Array.isArray(h) || (h = N(s, l, h), h = w(Math.ceil(s / h) * h, Math.floor(l / h) * h, h));
            for (var d = h.length; h[0] <= s;) h.shift(),
            --d;
            for (; h[d - 1] > l;) h.pop(),
            --d;
            var p, v = new Array(d + 1);
            for (i = 0; i <= d; ++i)(p = v[i] = []).x0 = i > 0 ? h[i - 1] : s,
            p.x1 = i < d ? h[i] : l;
            for (i = 0; i < o; ++i) s <= (u = a[i]) && u <= l && v[c(h, u, 0, d)].push(r[i]);
            return v
        }
        return r.value = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n: m(n), r) : t
        },
        r.domain = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t: m([t[0], t[1]]), r) : n
        },
        r.thresholds = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t: Array.isArray(t) ? m(b.call(t)) : m(t), r) : e
        },
        r
    },
    P = function(t, n, e) {
        if (null == e && (e = d), r = t.length) {
            if ((n = +n) <= 0 || r < 2) return + e(t[0], 0, t);
            if (n >= 1) return + e(t[r - 1], r - 1, t);
            var r, i = (r - 1) * n,
            u = Math.floor(i),
            o = +e(t[u], u, t);
            return o + ( + e(t[u + 1], u + 1, t) - o) * (i - u)
        }
    },
    z = function(t, n, e) {
        return t = _.call(t, d).sort(r),
        Math.ceil((e - n) / (2 * (P(t, .75) - P(t, .25)) * Math.pow(t.length, -1 / 3)))
    },
    R = function(t, n, e) {
        return Math.ceil((e - n) / (3.5 * v(t) * Math.pow(t.length, -1 / 3)))
    },
    L = function(t, n) {
        var e, r, i = t.length,
        u = -1;
        if (null == n) {
            for (; ++u < i;) if (null != (e = t[u]) && e >= e) for (r = e; ++u < i;) null != (e = t[u]) && e > r && (r = e)
        } else for (; ++u < i;) if (null != (e = n(t[u], u, t)) && e >= e) for (r = e; ++u < i;) null != (e = n(t[u], u, t)) && e > r && (r = e);
        return r
    },
    D = function(t, n) {
        var e, r = t.length,
        i = r,
        u = -1,
        o = 0;
        if (null == n) for (; ++u < r;) isNaN(e = d(t[u])) ? --i: o += e;
        else for (; ++u < r;) isNaN(e = d(n(t[u], u, t))) ? --i: o += e;
        if (i) return o / i
    },
    U = function(t, n) {
        var e, i = t.length,
        u = -1,
        o = [];
        if (null == n) for (; ++u < i;) isNaN(e = d(t[u])) || o.push(e);
        else for (; ++u < i;) isNaN(e = d(n(t[u], u, t))) || o.push(e);
        return P(o.sort(r), .5)
    },
    O = function(t) {
        for (var n, e, r, i = t.length,
        u = -1,
        o = 0; ++u < i;) o += t[u].length;
        for (e = new Array(o); --i >= 0;) for (n = (r = t[i]).length; --n >= 0;) e[--o] = r[n];
        return e
    },
    q = function(t, n) {
        var e, r, i = t.length,
        u = -1;
        if (null == n) {
            for (; ++u < i;) if (null != (e = t[u]) && e >= e) for (r = e; ++u < i;) null != (e = t[u]) && r > e && (r = e)
        } else for (; ++u < i;) if (null != (e = n(t[u], u, t)) && e >= e) for (r = e; ++u < i;) null != (e = n(t[u], u, t)) && r > e && (r = e);
        return r
    },
    Y = function(t, n) {
        for (var e = n.length,
        r = new Array(e); e--;) r[e] = t[n[e]];
        return r
    },
    B = function(t, n) {
        if (e = t.length) {
            var e, i, u = 0,
            o = 0,
            a = t[o];
            for (null == n && (n = r); ++u < e;)(n(i = t[u], a) < 0 || 0 !== n(a, a)) && (a = i, o = u);
            return 0 === n(a, a) ? o: void 0
        }
    },
    I = function(t, n, e) {
        for (var r, i, u = (null == e ? t.length: e) - (n = null == n ? 0 : +n); u;) i = Math.random() * u--|0,
        r = t[u + n],
        t[u + n] = t[i + n],
        t[i + n] = r;
        return t
    },
    F = function(t, n) {
        var e, r = t.length,
        i = -1,
        u = 0;
        if (null == n) for (; ++i < r;)(e = +t[i]) && (u += e);
        else for (; ++i < r;)(e = +n(t[i], i, t)) && (u += e);
        return u
    },
    j = function(t) {
        if (! (i = t.length)) return [];
        for (var n = -1,
        e = q(t, H), r = new Array(e); ++n < e;) for (var i, u = -1,
        o = r[n] = new Array(i); ++u < i;) o[u] = t[u][n];
        return r
    };
    function H(t) {
        return t.length
    }
    var X = function() {
        return j(arguments)
    },
    G = Array.prototype.slice,
    V = function(t) {
        return t
    },
    $ = 1,
    W = 2,
    Z = 3,
    Q = 4,
    J = 1e-6;
    function K(t) {
        return "translate(" + (t + .5) + ",0)"
    }
    function tt(t) {
        return "translate(0," + (t + .5) + ")"
    }
    function nt() {
        return ! this.__axis
    }
    function et(t, n) {
        var e = [],
        r = null,
        i = null,
        u = 6,
        o = 6,
        a = 3,
        c = t === $ || t === Q ? -1 : 1,
        f = t === Q || t === W ? "x": "y",
        s = t === $ || t === Z ? K: tt;
        function l(l) {
            var h = null == r ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r,
            d = null == i ? n.tickFormat ? n.tickFormat.apply(n, e) : V: i,
            p = Math.max(u, 0) + a,
            v = n.range(),
            g = +v[0] + .5,
            y = +v[v.length - 1] + .5,
            b = (n.bandwidth ?
            function(t) {
                var n = Math.max(0, t.bandwidth() - 1) / 2;
                return t.round() && (n = Math.round(n)),
                function(e) {
                    return + t(e) + n
                }
            }: function(t) {
                return function(n) {
                    return + t(n)
                }
            })(n.copy()),
            _ = l.selection ? l.selection() : l,
            m = _.selectAll(".domain").data([null]),
            x = _.selectAll(".tick").data(h, n).order(),
            w = x.exit(),
            M = x.enter().append("g").attr("class", "tick"),
            A = x.select("line"),
            S = x.select("text");
            m = m.merge(m.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")),
            x = x.merge(M),
            A = A.merge(M.append("line").attr("stroke", "currentColor").attr(f + "2", c * u)),
            S = S.merge(M.append("text").attr("fill", "currentColor").attr(f, c * p).attr("dy", t === $ ? "0em": t === Z ? "0.71em": "0.32em")),
            l !== _ && (m = m.transition(l), x = x.transition(l), A = A.transition(l), S = S.transition(l), w = w.transition(l).attr("opacity", J).attr("transform",
            function(t) {
                return isFinite(t = b(t)) ? s(t) : this.getAttribute("transform")
            }), M.attr("opacity", J).attr("transform",
            function(t) {
                var n = this.parentNode.__axis;
                return s(n && isFinite(n = n(t)) ? n: b(t))
            })),
            w.remove(),
            m.attr("d", t === Q || t == W ? "M" + c * o + "," + g + "H0.5V" + y + "H" + c * o: "M" + g + "," + c * o + "V0.5H" + y + "V" + c * o),
            x.attr("opacity", 1).attr("transform",
            function(t) {
                return s(b(t))
            }),
            A.attr(f + "2", c * u),
            S.attr(f, c * p).text(d),
            _.filter(nt).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === W ? "start": t === Q ? "end": "middle"),
            _.each(function() {
                this.__axis = b
            })
        }
        return l.scale = function(t) {
            return arguments.length ? (n = t, l) : n
        },
        l.ticks = function() {
            return e = G.call(arguments),
            l
        },
        l.tickArguments = function(t) {
            return arguments.length ? (e = null == t ? [] : G.call(t), l) : e.slice()
        },
        l.tickValues = function(t) {
            return arguments.length ? (r = null == t ? null: G.call(t), l) : r && r.slice()
        },
        l.tickFormat = function(t) {
            return arguments.length ? (i = t, l) : i
        },
        l.tickSize = function(t) {
            return arguments.length ? (u = o = +t, l) : u
        },
        l.tickSizeInner = function(t) {
            return arguments.length ? (u = +t, l) : u
        },
        l.tickSizeOuter = function(t) {
            return arguments.length ? (o = +t, l) : o
        },
        l.tickPadding = function(t) {
            return arguments.length ? (a = +t, l) : a
        },
        l
    }
    function rt(t) {
        return et($, t)
    }
    function it(t) {
        return et(W, t)
    }
    function ut(t) {
        return et(Z, t)
    }
    function ot(t) {
        return et(Q, t)
    }
    var at = {
        value: function() {}
    };
    function ct() {
        for (var t, n = 0,
        e = arguments.length,
        r = {}; n < e; ++n) {
            if (! (t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new ft(r)
    }
    function ft(t) {
        this._ = t
    }
    function st(t, n) {
        for (var e, r = 0,
        i = t.length; r < i; ++r) if ((e = t[r]).name === n) return e.value
    }
    function lt(t, n, e) {
        for (var r = 0,
        i = t.length; r < i; ++r) if (t[r].name === n) {
            t[r] = at,
            t = t.slice(0, r).concat(t.slice(r + 1));
            break
        }
        return null != e && t.push({
            name: n,
            value: e
        }),
        t
    }
    ft.prototype = ct.prototype = {
        constructor: ft,
        on: function(t, n) {
            var e, r = this._,
            i = function(t, n) {
                return t.trim().split(/^|\s+/).map(function(t) {
                    var e = "",
                    r = t.indexOf(".");
                    if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    return {
                        type: t,
                        name: e
                    }
                })
            } (t + "", r),
            u = -1,
            o = i.length;
            if (! (arguments.length < 2)) {
                if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                for (; ++u < o;) if (e = (t = i[u]).type) r[e] = lt(r[e], t.name, n);
                else if (null == n) for (e in r) r[e] = lt(r[e], t.name, null);
                return this
            }
            for (; ++u < o;) if ((e = (t = i[u]).type) && (e = st(r[e], t.name))) return e
        },
        copy: function() {
            var t = {},
            n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new ft(t)
        },
        call: function(t, n) {
            if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), u = 0; u < e; ++u) i[u] = arguments[u + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (u = 0, e = (r = this._[t]).length; u < e; ++u) r[u].value.apply(n, i)
        },
        apply: function(t, n, e) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var r = this._[t], i = 0, u = r.length; i < u; ++i) r[i].value.apply(n, e)
        }
    };
    var ht = ct,
    dt = "http://www.w3.org/1999/xhtml",
    pt = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: dt,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    },
    vt = function(t) {
        var n = t += "",
        e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
        pt.hasOwnProperty(n) ? {
            space: pt[n],
            local: t
        }: t
    };
    var gt = function(t) {
        var n = vt(t);
        return (n.local ?
        function(t) {
            return function() {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        }: function(t) {
            return function() {
                var n = this.ownerDocument,
                e = this.namespaceURI;
                return e === dt && n.documentElement.namespaceURI === dt ? n.createElement(t) : n.createElementNS(e, t)
            }
        })(n)
    };
    function yt() {}
    var bt = function(t) {
        return null == t ? yt: function() {
            return this.querySelector(t)
        }
    };
    function _t() {
        return []
    }
    var mt = function(t) {
        return null == t ? _t: function() {
            return this.querySelectorAll(t)
        }
    },
    xt = function(t) {
        return function() {
            return this.matches(t)
        }
    };
    if ("undefined" != typeof document) {
        var wt = document.documentElement;
        if (!wt.matches) {
            var Mt = wt.webkitMatchesSelector || wt.msMatchesSelector || wt.mozMatchesSelector || wt.oMatchesSelector;
            xt = function(t) {
                return function() {
                    return Mt.call(this, t)
                }
            }
        }
    }
    var At = xt,
    St = function(t) {
        return new Array(t.length)
    };
    function kt(t, n) {
        this.ownerDocument = t.ownerDocument,
        this.namespaceURI = t.namespaceURI,
        this._next = null,
        this._parent = t,
        this.__data__ = n
    }
    kt.prototype = {
        constructor: kt,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function(t, n) {
            return this._parent.insertBefore(t, n)
        },
        querySelector: function(t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t)
        }
    };
    var Tt = "$";
    function Nt(t, n, e, r, i, u) {
        for (var o, a = 0,
        c = n.length,
        f = u.length; a < f; ++a)(o = n[a]) ? (o.__data__ = u[a], r[a] = o) : e[a] = new kt(t, u[a]);
        for (; a < c; ++a)(o = n[a]) && (i[a] = o)
    }
    function Et(t, n, e, r, i, u, o) {
        var a, c, f, s = {},
        l = n.length,
        h = u.length,
        d = new Array(l);
        for (a = 0; a < l; ++a)(c = n[a]) && (d[a] = f = Tt + o.call(c, c.__data__, a, n), f in s ? i[a] = c: s[f] = c);
        for (a = 0; a < h; ++a)(c = s[f = Tt + o.call(t, u[a], a, u)]) ? (r[a] = c, c.__data__ = u[a], s[f] = null) : e[a] = new kt(t, u[a]);
        for (a = 0; a < l; ++a)(c = n[a]) && s[d[a]] === c && (i[a] = c)
    }
    function Ct(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    var Pt = function(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    };
    function zt(t, n) {
        return t.style.getPropertyValue(n) || Pt(t).getComputedStyle(t, null).getPropertyValue(n)
    }
    function Rt(t) {
        return t.trim().split(/^|\s+/)
    }
    function Lt(t) {
        return t.classList || new Dt(t)
    }
    function Dt(t) {
        this._node = t,
        this._names = Rt(t.getAttribute("class") || "")
    }
    function Ut(t, n) {
        for (var e = Lt(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
    }
    function Ot(t, n) {
        for (var e = Lt(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
    }
    Dt.prototype = {
        add: function(t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0
        }
    };
    function qt() {
        this.textContent = ""
    }
    function Yt() {
        this.innerHTML = ""
    }
    function Bt() {
        this.nextSibling && this.parentNode.appendChild(this)
    }
    function It() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function Ft() {
        return null
    }
    function jt() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }
    function Ht() {
        return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
    }
    function Xt() {
        return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
    }
    var Gt = {},
    Vt = null;
    "undefined" != typeof document && ("onmouseenter" in document.documentElement || (Gt = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }));
    function $t(t, n, e) {
        return t = Wt(t, n, e),
        function(n) {
            var e = n.relatedTarget;
            e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
        }
    }
    function Wt(t, n, e) {
        return function(r) {
            var i = Vt;
            Vt = r;
            try {
                t.call(this, this.__data__, n, e)
            } finally {
                Vt = i
            }
        }
    }
    function Zt(t) {
        return function() {
            var n = this.__on;
            if (n) {
                for (var e, r = 0,
                i = -1,
                u = n.length; r < u; ++r) e = n[r],
                t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e: this.removeEventListener(e.type, e.listener, e.capture); ++i ? n.length = i: delete this.__on
            }
        }
    }
    function Qt(t, n, e) {
        var r = Gt.hasOwnProperty(t.type) ? $t: Wt;
        return function(i, u, o) {
            var a, c = this.__on,
            f = r(n, u, o);
            if (c) for (var s = 0,
            l = c.length; s < l; ++s) if ((a = c[s]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture),
            this.addEventListener(a.type, a.listener = f, a.capture = e),
            void(a.value = n);
            this.addEventListener(t.type, f, e),
            a = {
                type: t.type,
                name: t.name,
                value: n,
                listener: f,
                capture: e
            },
            c ? c.push(a) : this.__on = [a]
        }
    }
    function Jt(t, n, e, r) {
        var i = Vt;
        t.sourceEvent = Vt,
        Vt = t;
        try {
            return n.apply(e, r)
        } finally {
            Vt = i
        }
    }
    function Kt(t, n, e) {
        var r = Pt(t),
        i = r.CustomEvent;
        "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)),
        t.dispatchEvent(i)
    }
    var tn = [null];
    function nn(t, n) {
        this._groups = t,
        this._parents = n
    }
    function en() {
        return new nn([[document.documentElement]], tn)
    }
    nn.prototype = en.prototype = {
        constructor: nn,
        select: function(t) {
            "function" != typeof t && (t = bt(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var u, o, a = n[i], c = a.length, f = r[i] = new Array(c), s = 0; s < c; ++s)(u = a[s]) && (o = t.call(u, u.__data__, s, a)) && ("__data__" in u && (o.__data__ = u.__data__), f[s] = o);
            return new nn(r, this._parents)
        },
        selectAll: function(t) {
            "function" != typeof t && (t = mt(t));
            for (var n = this._groups,
            e = n.length,
            r = [], i = [], u = 0; u < e; ++u) for (var o, a = n[u], c = a.length, f = 0; f < c; ++f)(o = a[f]) && (r.push(t.call(o, o.__data__, f, a)), i.push(o));
            return new nn(r, i)
        },
        filter: function(t) {
            "function" != typeof t && (t = At(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var u, o = n[i], a = o.length, c = r[i] = [], f = 0; f < a; ++f)(u = o[f]) && t.call(u, u.__data__, f, o) && c.push(u);
            return new nn(r, this._parents)
        },
        data: function(t, n) {
            if (!t) return d = new Array(this.size()),
            f = -1,
            this.each(function(t) {
                d[++f] = t
            }),
            d;
            var e = n ? Et: Nt,
            r = this._parents,
            i = this._groups;
            "function" != typeof t && (t = function(t) {
                return function() {
                    return t
                }
            } (t));
            for (var u = i.length,
            o = new Array(u), a = new Array(u), c = new Array(u), f = 0; f < u; ++f) {
                var s = r[f],
                l = i[f],
                h = l.length,
                d = t.call(s, s && s.__data__, f, r),
                p = d.length,
                v = a[f] = new Array(p),
                g = o[f] = new Array(p);
                e(s, l, v, g, c[f] = new Array(h), d, n);
                for (var y, b, _ = 0,
                m = 0; _ < p; ++_) if (y = v[_]) {
                    for (_ >= m && (m = _ + 1); ! (b = g[m]) && ++m < p;);
                    y._next = b || null
                }
            }
            return (o = new nn(o, r))._enter = a,
            o._exit = c,
            o
        },
        enter: function() {
            return new nn(this._enter || this._groups.map(St), this._parents)
        },
        exit: function() {
            return new nn(this._exit || this._groups.map(St), this._parents)
        },
        merge: function(t) {
            for (var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            u = Math.min(r, i), o = new Array(r), a = 0; a < u; ++a) for (var c, f = n[a], s = e[a], l = f.length, h = o[a] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
            for (; a < r; ++a) o[a] = n[a];
            return new nn(o, this._parents)
        },
        order: function() {
            for (var t = this._groups,
            n = -1,
            e = t.length; ++n < e;) for (var r, i = t[n], u = i.length - 1, o = i[u]; --u >= 0;)(r = i[u]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r);
            return this
        },
        sort: function(t) {
            function n(n, e) {
                return n && e ? t(n.__data__, e.__data__) : !n - !e
            }
            t || (t = Ct);
            for (var e = this._groups,
            r = e.length,
            i = new Array(r), u = 0; u < r; ++u) {
                for (var o, a = e[u], c = a.length, f = i[u] = new Array(c), s = 0; s < c; ++s)(o = a[s]) && (f[s] = o);
                f.sort(n)
            }
            return new nn(i, this._parents).order()
        },
        call: function() {
            var t = arguments[0];
            return arguments[0] = this,
            t.apply(null, arguments),
            this
        },
        nodes: function() {
            var t = new Array(this.size()),
            n = -1;
            return this.each(function() {
                t[++n] = this
            }),
            t
        },
        node: function() {
            for (var t = this._groups,
            n = 0,
            e = t.length; n < e; ++n) for (var r = t[n], i = 0, u = r.length; i < u; ++i) {
                var o = r[i];
                if (o) return o
            }
            return null
        },
        size: function() {
            var t = 0;
            return this.each(function() {++t
            }),
            t
        },
        empty: function() {
            return ! this.node()
        },
        each: function(t) {
            for (var n = this._groups,
            e = 0,
            r = n.length; e < r; ++e) for (var i, u = n[e], o = 0, a = u.length; o < a; ++o)(i = u[o]) && t.call(i, i.__data__, o, u);
            return this
        },
        attr: function(t, n) {
            var e = vt(t);
            if (arguments.length < 2) {
                var r = this.node();
                return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
            }
            return this.each((null == n ? e.local ?
            function(t) {
                return function() {
                    this.removeAttributeNS(t.space, t.local)
                }
            }: function(t) {
                return function() {
                    this.removeAttribute(t)
                }
            }: "function" == typeof n ? e.local ?
            function(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                }
            }: function(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                }
            }: e.local ?
            function(t, n) {
                return function() {
                    this.setAttributeNS(t.space, t.local, n)
                }
            }: function(t, n) {
                return function() {
                    this.setAttribute(t, n)
                }
            })(e, n))
        },
        style: function(t, n, e) {
            return arguments.length > 1 ? this.each((null == n ?
            function(t) {
                return function() {
                    this.style.removeProperty(t)
                }
            }: "function" == typeof n ?
            function(t, n, e) {
                return function() {
                    var r = n.apply(this, arguments);
                    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                }
            }: function(t, n, e) {
                return function() {
                    this.style.setProperty(t, n, e)
                }
            })(t, n, null == e ? "": e)) : zt(this.node(), t)
        },
        property: function(t, n) {
            return arguments.length > 1 ? this.each((null == n ?
            function(t) {
                return function() {
                    delete this[t]
                }
            }: "function" == typeof n ?
            function(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? delete this[t] : this[t] = e
                }
            }: function(t, n) {
                return function() {
                    this[t] = n
                }
            })(t, n)) : this.node()[t]
        },
        classed: function(t, n) {
            var e = Rt(t + "");
            if (arguments.length < 2) {
                for (var r = Lt(this.node()), i = -1, u = e.length; ++i < u;) if (!r.contains(e[i])) return ! 1;
                return ! 0
            }
            return this.each(("function" == typeof n ?
            function(t, n) {
                return function() { (n.apply(this, arguments) ? Ut: Ot)(this, t)
                }
            }: n ?
            function(t) {
                return function() {
                    Ut(this, t)
                }
            }: function(t) {
                return function() {
                    Ot(this, t)
                }
            })(e, n))
        },
        text: function(t) {
            return arguments.length ? this.each(null == t ? qt: ("function" == typeof t ?
            function(t) {
                return function() {
                    var n = t.apply(this, arguments);
                    this.textContent = null == n ? "": n
                }
            }: function(t) {
                return function() {
                    this.textContent = t
                }
            })(t)) : this.node().textContent
        },
        html: function(t) {
            return arguments.length ? this.each(null == t ? Yt: ("function" == typeof t ?
            function(t) {
                return function() {
                    var n = t.apply(this, arguments);
                    this.innerHTML = null == n ? "": n
                }
            }: function(t) {
                return function() {
                    this.innerHTML = t
                }
            })(t)) : this.node().innerHTML
        },
        raise: function() {
            return this.each(Bt)
        },
        lower: function() {
            return this.each(It)
        },
        append: function(t) {
            var n = "function" == typeof t ? t: gt(t);
            return this.select(function() {
                return this.appendChild(n.apply(this, arguments))
            })
        },
        insert: function(t, n) {
            var e = "function" == typeof t ? t: gt(t),
            r = null == n ? Ft: "function" == typeof n ? n: bt(n);
            return this.select(function() {
                return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
            })
        },
        remove: function() {
            return this.each(jt)
        },
        clone: function(t) {
            return this.select(t ? Xt: Ht)
        },
        datum: function(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        },
        on: function(t, n, e) {
            var r, i, u = function(t) {
                return t.trim().split(/^|\s+/).map(function(t) {
                    var n = "",
                    e = t.indexOf(".");
                    return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)),
                    {
                        type: t,
                        name: n
                    }
                })
            } (t + ""),
            o = u.length;
            if (! (arguments.length < 2)) {
                for (a = n ? Qt: Zt, null == e && (e = !1), r = 0; r < o; ++r) this.each(a(u[r], n, e));
                return this
            }
            var a = this.node().__on;
            if (a) for (var c, f = 0,
            s = a.length; f < s; ++f) for (r = 0, c = a[f]; r < o; ++r) if ((i = u[r]).type === c.type && i.name === c.name) return c.value
        },
        dispatch: function(t, n) {
            return this.each(("function" == typeof n ?
            function(t, n) {
                return function() {
                    return Kt(this, t, n.apply(this, arguments))
                }
            }: function(t, n) {
                return function() {
                    return Kt(this, t, n)
                }
            })(t, n))
        }
    };
    var rn = en,
    un = function(t) {
        return "string" == typeof t ? new nn([[document.querySelector(t)]], [document.documentElement]) : new nn([[t]], tn)
    },
    on = function(t) {
        return un(gt(t).call(document.documentElement))
    },
    an = 0;
    function cn() {
        return new fn
    }
    function fn() {
        this._ = "@" + (++an).toString(36)
    }
    fn.prototype = cn.prototype = {
        constructor: fn,
        get: function(t) {
            for (var n = this._; ! (n in t);) if (! (t = t.parentNode)) return;
            return t[n]
        },
        set: function(t, n) {
            return t[this._] = n
        },
        remove: function(t) {
            return this._ in t && delete t[this._]
        },
        toString: function() {
            return this._
        }
    };
    var sn = function() {
        for (var t, n = Vt; t = n.sourceEvent;) n = t;
        return n
    },
    ln = function(t, n) {
        var e = t.ownerSVGElement || t;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            return r.x = n.clientX,
            r.y = n.clientY,
            [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
        }
        var i = t.getBoundingClientRect();
        return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
    },
    hn = function(t) {
        var n = sn();
        return n.changedTouches && (n = n.changedTouches[0]),
        ln(t, n)
    },
    dn = function(t) {
        return "string" == typeof t ? new nn([document.querySelectorAll(t)], [document.documentElement]) : new nn([null == t ? [] : t], tn)
    },
    pn = function(t, n, e) {
        arguments.length < 3 && (e = n, n = sn().changedTouches);
        for (var r, i = 0,
        u = n ? n.length: 0; i < u; ++i) if ((r = n[i]).identifier === e) return ln(t, r);
        return null
    },
    vn = function(t, n) {
        null == n && (n = sn().touches);
        for (var e = 0,
        r = n ? n.length: 0, i = new Array(r); e < r; ++e) i[e] = ln(t, n[e]);
        return i
    };
    function gn() {
        Vt.stopImmediatePropagation()
    }
    var yn = function() {
        Vt.preventDefault(),
        Vt.stopImmediatePropagation()
    },
    bn = function(t) {
        var n = t.document.documentElement,
        e = un(t).on("dragstart.drag", yn, !0);
        "onselectstart" in n ? e.on("selectstart.drag", yn, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
    };
    function _n(t, n) {
        var e = t.document.documentElement,
        r = un(t).on("dragstart.drag", null);
        n && (r.on("click.drag", yn, !0), setTimeout(function() {
            r.on("click.drag", null)
        },
        0)),
        "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
    }
    var mn = function(t) {
        return function() {
            return t
        }
    };
    function xn(t, n, e, r, i, u, o, a, c, f) {
        this.target = t,
        this.type = n,
        this.subject = e,
        this.identifier = r,
        this.active = i,
        this.x = u,
        this.y = o,
        this.dx = a,
        this.dy = c,
        this._ = f
    }
    function wn() {
        return ! Vt.button
    }
    function Mn() {
        return this.parentNode
    }
    function An(t) {
        return null == t ? {
            x: Vt.x,
            y: Vt.y
        }: t
    }
    function Sn() {
        return "ontouchstart" in this
    }
    xn.prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this: t
    };
    var kn = function() {
        var t, n, e, r, i = wn,
        u = Mn,
        o = An,
        a = Sn,
        c = {},
        f = ht("start", "drag", "end"),
        s = 0,
        l = 0;
        function h(t) {
            t.on("mousedown.drag", d).filter(a).on("touchstart.drag", g).on("touchmove.drag", y).on("touchend.drag touchcancel.drag", b).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }
        function d() {
            if (!r && i.apply(this, arguments)) {
                var o = _("mouse", u.apply(this, arguments), hn, this, arguments);
                o && (un(Vt.view).on("mousemove.drag", p, !0).on("mouseup.drag", v, !0), bn(Vt.view), gn(), e = !1, t = Vt.clientX, n = Vt.clientY, o("start"))
            }
        }
        function p() {
            if (yn(), !e) {
                var r = Vt.clientX - t,
                i = Vt.clientY - n;
                e = r * r + i * i > l
            }
            c.mouse("drag")
        }
        function v() {
            un(Vt.view).on("mousemove.drag mouseup.drag", null),
            _n(Vt.view, e),
            yn(),
            c.mouse("end")
        }
        function g() {
            if (i.apply(this, arguments)) {
                var t, n, e = Vt.changedTouches,
                r = u.apply(this, arguments),
                o = e.length;
                for (t = 0; t < o; ++t)(n = _(e[t].identifier, r, pn, this, arguments)) && (gn(), n("start"))
            }
        }
        function y() {
            var t, n, e = Vt.changedTouches,
            r = e.length;
            for (t = 0; t < r; ++t)(n = c[e[t].identifier]) && (yn(), n("drag"))
        }
        function b() {
            var t, n, e = Vt.changedTouches,
            i = e.length;
            for (r && clearTimeout(r), r = setTimeout(function() {
                r = null
            },
            500), t = 0; t < i; ++t)(n = c[e[t].identifier]) && (gn(), n("end"))
        }
        function _(t, n, e, r, i) {
            var u, a, l, d = e(n, t),
            p = f.copy();
            if (Jt(new xn(h, "beforestart", u, t, s, d[0], d[1], 0, 0, p),
            function() {
                return null != (Vt.subject = u = o.apply(r, i)) && (a = u.x - d[0] || 0, l = u.y - d[1] || 0, !0)
            })) return function o(f) {
                var v, g = d;
                switch (f) {
                case "start":
                    c[t] = o,
                    v = s++;
                    break;
                case "end":
                    delete c[t],
                    --s;
                case "drag":
                    d = e(n, t),
                    v = s
                }
                Jt(new xn(h, f, u, t, v, d[0] + a, d[1] + l, d[0] - g[0], d[1] - g[1], p), p.apply, p, [f, r, i])
            }
        }
        return h.filter = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t: mn( !! t), h) : i
        },
        h.container = function(t) {
            return arguments.length ? (u = "function" == typeof t ? t: mn(t), h) : u
        },
        h.subject = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t: mn(t), h) : o
        },
        h.touchable = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t: mn( !! t), h) : a
        },
        h.on = function() {
            var t = f.on.apply(f, arguments);
            return t === f ? h: t
        },
        h.clickDistance = function(t) {
            return arguments.length ? (l = (t = +t) * t, h) : Math.sqrt(l)
        },
        h
    },
    Tn = function(t, n, e) {
        t.prototype = n.prototype = e,
        e.constructor = t
    };
    function Nn(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e
    }
    function En() {}
    var Cn = "\\s*([+-]?\\d+)\\s*",
    Pn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    zn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    Rn = /^#([0-9a-f]{3})$/,
    Ln = /^#([0-9a-f]{6})$/,
    Dn = new RegExp("^rgb\\(" + [Cn, Cn, Cn] + "\\)$"),
    Un = new RegExp("^rgb\\(" + [zn, zn, zn] + "\\)$"),
    On = new RegExp("^rgba\\(" + [Cn, Cn, Cn, Pn] + "\\)$"),
    qn = new RegExp("^rgba\\(" + [zn, zn, zn, Pn] + "\\)$"),
    Yn = new RegExp("^hsl\\(" + [Pn, zn, zn] + "\\)$"),
    Bn = new RegExp("^hsla\\(" + [Pn, zn, zn, Pn] + "\\)$"),
    In = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    function Fn(t) {
        var n;
        return t = (t + "").trim().toLowerCase(),
        (n = Rn.exec(t)) ? new Vn((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = Ln.exec(t)) ? jn(parseInt(n[1], 16)) : (n = Dn.exec(t)) ? new Vn(n[1], n[2], n[3], 1) : (n = Un.exec(t)) ? new Vn(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = On.exec(t)) ? Hn(n[1], n[2], n[3], n[4]) : (n = qn.exec(t)) ? Hn(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Yn.exec(t)) ? Wn(n[1], n[2] / 100, n[3] / 100, 1) : (n = Bn.exec(t)) ? Wn(n[1], n[2] / 100, n[3] / 100, n[4]) : In.hasOwnProperty(t) ? jn(In[t]) : "transparent" === t ? new Vn(NaN, NaN, NaN, 0) : null
    }
    function jn(t) {
        return new Vn(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }
    function Hn(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN),
        new Vn(t, n, e, r)
    }
    function Xn(t) {
        return t instanceof En || (t = Fn(t)),
        t ? new Vn((t = t.rgb()).r, t.g, t.b, t.opacity) : new Vn
    }
    function Gn(t, n, e, r) {
        return 1 === arguments.length ? Xn(t) : new Vn(t, n, e, null == r ? 1 : r)
    }
    function Vn(t, n, e, r) {
        this.r = +t,
        this.g = +n,
        this.b = +e,
        this.opacity = +r
    }
    function $n(t) {
        return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0": "") + t.toString(16)
    }
    function Wn(t, n, e, r) {
        return r <= 0 ? t = n = e = NaN: e <= 0 || e >= 1 ? t = n = NaN: n <= 0 && (t = NaN),
        new Qn(t, n, e, r)
    }
    function Zn(t, n, e, r) {
        return 1 === arguments.length ?
        function(t) {
            if (t instanceof Qn) return new Qn(t.h, t.s, t.l, t.opacity);
            if (t instanceof En || (t = Fn(t)), !t) return new Qn;
            if (t instanceof Qn) return t;
            var n = (t = t.rgb()).r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = Math.min(n, e, r),
            u = Math.max(n, e, r),
            o = NaN,
            a = u - i,
            c = (u + i) / 2;
            return a ? (o = n === u ? (e - r) / a + 6 * (e < r) : e === u ? (r - n) / a + 2 : (n - e) / a + 4, a /= c < .5 ? u + i: 2 - u - i, o *= 60) : a = c > 0 && c < 1 ? 0 : o,
            new Qn(o, a, c, t.opacity)
        } (t) : new Qn(t, n, e, null == r ? 1 : r)
    }
    function Qn(t, n, e, r) {
        this.h = +t,
        this.s = +n,
        this.l = +e,
        this.opacity = +r
    }
    function Jn(t, n, e) {
        return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e: t < 240 ? n + (e - n) * (240 - t) / 60 : n)
    }
    Tn(En, Fn, {
        displayable: function() {
            return this.rgb().displayable()
        },
        hex: function() {
            return this.rgb().hex()
        },
        toString: function() {
            return this.rgb() + ""
        }
    }),
    Tn(Vn, Gn, Nn(En, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Vn(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Vn(this.r * t, this.g * t, this.b * t, this.opacity)
        },
        rgb: function() {
            return this
        },
        displayable: function() {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        },
        hex: function() {
            return "#" + $n(this.r) + $n(this.g) + $n(this.b)
        },
        toString: function() {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(": "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")": ", " + t + ")")
        }
    })),
    Tn(Qn, Zn, Nn(En, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Qn(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Qn(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = this.h % 360 + 360 * (this.h < 0),
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            e = this.l,
            r = e + (e < .5 ? e: 1 - e) * n,
            i = 2 * e - r;
            return new Vn(Jn(t >= 240 ? t - 240 : t + 120, i, r), Jn(t, i, r), Jn(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));
    var Kn = Math.PI / 180,
    te = 180 / Math.PI,
    ne = .96422,
    ee = 1,
    re = .82521,
    ie = 4 / 29,
    ue = 6 / 29,
    oe = 3 * ue * ue,
    ae = ue * ue * ue;
    function ce(t) {
        if (t instanceof le) return new le(t.l, t.a, t.b, t.opacity);
        if (t instanceof _e) {
            if (isNaN(t.h)) return new le(t.l, 0, 0, t.opacity);
            var n = t.h * Kn;
            return new le(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
        }
        t instanceof Vn || (t = Xn(t));
        var e, r, i = ve(t.r),
        u = ve(t.g),
        o = ve(t.b),
        a = he((.2225045 * i + .7168786 * u + .0606169 * o) / ee);
        return i === u && u === o ? e = r = a: (e = he((.4360747 * i + .3850649 * u + .1430804 * o) / ne), r = he((.0139322 * i + .0971045 * u + .7141733 * o) / re)),
        new le(116 * a - 16, 500 * (e - a), 200 * (a - r), t.opacity)
    }
    function fe(t, n) {
        return new le(t, 0, 0, null == n ? 1 : n)
    }
    function se(t, n, e, r) {
        return 1 === arguments.length ? ce(t) : new le(t, n, e, null == r ? 1 : r)
    }
    function le(t, n, e, r) {
        this.l = +t,
        this.a = +n,
        this.b = +e,
        this.opacity = +r
    }
    function he(t) {
        return t > ae ? Math.pow(t, 1 / 3) : t / oe + ie
    }
    function de(t) {
        return t > ue ? t * t * t: oe * (t - ie)
    }
    function pe(t) {
        return 255 * (t <= .0031308 ? 12.92 * t: 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }
    function ve(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }
    function ge(t) {
        if (t instanceof _e) return new _e(t.h, t.c, t.l, t.opacity);
        if (t instanceof le || (t = ce(t)), 0 === t.a && 0 === t.b) return new _e(NaN, 0, t.l, t.opacity);
        var n = Math.atan2(t.b, t.a) * te;
        return new _e(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
    }
    function ye(t, n, e, r) {
        return 1 === arguments.length ? ge(t) : new _e(e, n, t, null == r ? 1 : r)
    }
    function be(t, n, e, r) {
        return 1 === arguments.length ? ge(t) : new _e(t, n, e, null == r ? 1 : r)
    }
    function _e(t, n, e, r) {
        this.h = +t,
        this.c = +n,
        this.l = +e,
        this.opacity = +r
    }
    Tn(le, se, Nn(En, {
        brighter: function(t) {
            return new le(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        darker: function(t) {
            return new le(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        },
        rgb: function() {
            var t = (this.l + 16) / 116,
            n = isNaN(this.a) ? t: t + this.a / 500,
            e = isNaN(this.b) ? t: t - this.b / 200;
            return new Vn(pe(3.1338561 * (n = ne * de(n)) - 1.6168667 * (t = ee * de(t)) - .4906146 * (e = re * de(e))), pe( - .9787684 * n + 1.9161415 * t + .033454 * e), pe(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
        }
    })),
    Tn(_e, be, Nn(En, {
        brighter: function(t) {
            return new _e(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
        },
        darker: function(t) {
            return new _e(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
        },
        rgb: function() {
            return ce(this).rgb()
        }
    }));
    var me = -.29227,
    xe = -.90649,
    we = 1.97294,
    Me = we * xe,
    Ae = 1.78277 * we,
    Se = 1.78277 * me - -.14861 * xe;
    function ke(t, n, e, r) {
        return 1 === arguments.length ?
        function(t) {
            if (t instanceof Te) return new Te(t.h, t.s, t.l, t.opacity);
            t instanceof Vn || (t = Xn(t));
            var n = t.r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = (Se * r + Me * n - Ae * e) / (Se + Me - Ae),
            u = r - i,
            o = (we * (e - i) - me * u) / xe,
            a = Math.sqrt(o * o + u * u) / (we * i * (1 - i)),
            c = a ? Math.atan2(o, u) * te - 120 : NaN;
            return new Te(c < 0 ? c + 360 : c, a, i, t.opacity)
        } (t) : new Te(t, n, e, null == r ? 1 : r)
    }
    function Te(t, n, e, r) {
        this.h = +t,
        this.s = +n,
        this.l = +e,
        this.opacity = +r
    }
    function Ne(t, n, e, r, i) {
        var u = t * t,
        o = u * t;
        return ((1 - 3 * t + 3 * u - o) * n + (4 - 6 * u + 3 * o) * e + (1 + 3 * t + 3 * u - 3 * o) * r + o * i) / 6
    }
    Tn(Te, ke, Nn(En, {
        brighter: function(t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
            new Te(this.h, this.s, this.l * t, this.opacity)
        },
        darker: function(t) {
            return t = null == t ? .7 : Math.pow(.7, t),
            new Te(this.h, this.s, this.l * t, this.opacity)
        },
        rgb: function() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * Kn,
            n = +this.l,
            e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
            r = Math.cos(t),
            i = Math.sin(t);
            return new Vn(255 * (n + e * ( - .14861 * r + 1.78277 * i)), 255 * (n + e * (me * r + xe * i)), 255 * (n + e * (we * r)), this.opacity)
        }
    }));
    var Ee = function(t) {
        var n = t.length - 1;
        return function(e) {
            var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
            i = t[r],
            u = t[r + 1],
            o = r > 0 ? t[r - 1] : 2 * i - u,
            a = r < n - 1 ? t[r + 2] : 2 * u - i;
            return Ne((e - r / n) * n, o, i, u, a)
        }
    },
    Ce = function(t) {
        var n = t.length;
        return function(e) {
            var r = Math.floor(((e %= 1) < 0 ? ++e: e) * n),
            i = t[(r + n - 1) % n],
            u = t[r % n],
            o = t[(r + 1) % n],
            a = t[(r + 2) % n];
            return Ne((e - r / n) * n, i, u, o, a)
        }
    },
    Pe = function(t) {
        return function() {
            return t
        }
    };
    function ze(t, n) {
        return function(e) {
            return t + e * n
        }
    }
    function Re(t, n) {
        var e = n - t;
        return e ? ze(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Pe(isNaN(t) ? n: t)
    }
    function Le(t) {
        return 1 == (t = +t) ? De: function(n, e) {
            return e - n ?
            function(t, n, e) {
                return t = Math.pow(t, e),
                n = Math.pow(n, e) - t,
                e = 1 / e,
                function(r) {
                    return Math.pow(t + r * n, e)
                }
            } (n, e, t) : Pe(isNaN(n) ? e: n)
        }
    }
    function De(t, n) {
        var e = n - t;
        return e ? ze(t, e) : Pe(isNaN(t) ? n: t)
    }
    var Ue = function t(n) {
        var e = Le(n);
        function r(t, n) {
            var r = e((t = Gn(t)).r, (n = Gn(n)).r),
            i = e(t.g, n.g),
            u = e(t.b, n.b),
            o = De(t.opacity, n.opacity);
            return function(n) {
                return t.r = r(n),
                t.g = i(n),
                t.b = u(n),
                t.opacity = o(n),
                t + ""
            }
        }
        return r.gamma = t,
        r
    } (1);
    function Oe(t) {
        return function(n) {
            var e, r, i = n.length,
            u = new Array(i),
            o = new Array(i),
            a = new Array(i);
            for (e = 0; e < i; ++e) r = Gn(n[e]),
            u[e] = r.r || 0,
            o[e] = r.g || 0,
            a[e] = r.b || 0;
            return u = t(u),
            o = t(o),
            a = t(a),
            r.opacity = 1,
            function(t) {
                return r.r = u(t),
                r.g = o(t),
                r.b = a(t),
                r + ""
            }
        }
    }
    var qe = Oe(Ee),
    Ye = Oe(Ce),
    Be = function(t, n) {
        var e, r = n ? n.length: 0,
        i = t ? Math.min(r, t.length) : 0,
        u = new Array(i),
        o = new Array(r);
        for (e = 0; e < i; ++e) u[e] = Qe(t[e], n[e]);
        for (; e < r; ++e) o[e] = n[e];
        return function(t) {
            for (e = 0; e < i; ++e) o[e] = u[e](t);
            return o
        }
    },
    Ie = function(t, n) {
        var e = new Date;
        return n -= t = +t,
        function(r) {
            return e.setTime(t + n * r),
            e
        }
    },
    Fe = function(t, n) {
        return n -= t = +t,
        function(e) {
            return t + n * e
        }
    },
    je = function(t, n) {
        var e, r = {},
        i = {};
        for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? r[e] = Qe(t[e], n[e]) : i[e] = n[e];
        return function(t) {
            for (e in r) i[e] = r[e](t);
            return i
        }
    },
    He = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Xe = new RegExp(He.source, "g");
    var Ge, Ve, $e, We, Ze = function(t, n) {
        var e, r, i, u = He.lastIndex = Xe.lastIndex = 0,
        o = -1,
        a = [],
        c = [];
        for (t += "", n += ""; (e = He.exec(t)) && (r = Xe.exec(n));)(i = r.index) > u && (i = n.slice(u, i), a[o] ? a[o] += i: a[++o] = i),
        (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r: a[++o] = r: (a[++o] = null, c.push({
            i: o,
            x: Fe(e, r)
        })),
        u = Xe.lastIndex;
        return u < n.length && (i = n.slice(u), a[o] ? a[o] += i: a[++o] = i),
        a.length < 2 ? c[0] ?
        function(t) {
            return function(n) {
                return t(n) + ""
            }
        } (c[0].x) : function(t) {
            return function() {
                return t
            }
        } (n) : (n = c.length,
        function(t) {
            for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
            return a.join("")
        })
    },
    Qe = function(t, n) {
        var e, r = typeof n;
        return null == n || "boolean" === r ? Pe(n) : ("number" === r ? Fe: "string" === r ? (e = Fn(n)) ? (n = e, Ue) : Ze: n instanceof Fn ? Ue: n instanceof Date ? Ie: Array.isArray(n) ? Be: "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? je: Fe)(t, n)
    },
    Je = function(t, n) {
        return n -= t = +t,
        function(e) {
            return Math.round(t + n * e)
        }
    },
    Ke = 180 / Math.PI,
    tr = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
    },
    nr = function(t, n, e, r, i, u) {
        var o, a, c;
        return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o),
        (c = t * e + n * r) && (e -= t * c, r -= n * c),
        (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a),
        t * r < n * e && (t = -t, n = -n, c = -c, o = -o),
        {
            translateX: i,
            translateY: u,
            rotate: Math.atan2(n, t) * Ke,
            skewX: Math.atan(c) * Ke,
            scaleX: o,
            scaleY: a
        }
    };
    function er(t, n, e, r) {
        function i(t) {
            return t.length ? t.pop() + " ": ""
        }
        return function(u, o) {
            var a = [],
            c = [];
            return u = t(u),
            o = t(o),
            function(t, r, i, u, o, a) {
                if (t !== i || r !== u) {
                    var c = o.push("translate(", null, n, null, e);
                    a.push({
                        i: c - 4,
                        x: Fe(t, i)
                    },
                    {
                        i: c - 2,
                        x: Fe(r, u)
                    })
                } else(i || u) && o.push("translate(" + i + n + u + e)
            } (u.translateX, u.translateY, o.translateX, o.translateY, a, c),
            function(t, n, e, u) {
                t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), u.push({
                    i: e.push(i(e) + "rotate(", null, r) - 2,
                    x: Fe(t, n)
                })) : n && e.push(i(e) + "rotate(" + n + r)
            } (u.rotate, o.rotate, a, c),
            function(t, n, e, u) {
                t !== n ? u.push({
                    i: e.push(i(e) + "skewX(", null, r) - 2,
                    x: Fe(t, n)
                }) : n && e.push(i(e) + "skewX(" + n + r)
            } (u.skewX, o.skewX, a, c),
            function(t, n, e, r, u, o) {
                if (t !== e || n !== r) {
                    var a = u.push(i(u) + "scale(", null, ",", null, ")");
                    o.push({
                        i: a - 4,
                        x: Fe(t, e)
                    },
                    {
                        i: a - 2,
                        x: Fe(n, r)
                    })
                } else 1 === e && 1 === r || u.push(i(u) + "scale(" + e + "," + r + ")")
            } (u.scaleX, u.scaleY, o.scaleX, o.scaleY, a, c),
            u = o = null,
            function(t) {
                for (var n, e = -1,
                r = c.length; ++e < r;) a[(n = c[e]).i] = n.x(t);
                return a.join("")
            }
        }
    }
    var rr = er(function(t) {
        return "none" === t ? tr: (Ge || (Ge = document.createElement("DIV"), Ve = document.documentElement, $e = document.defaultView), Ge.style.transform = t, t = $e.getComputedStyle(Ve.appendChild(Ge), null).getPropertyValue("transform"), Ve.removeChild(Ge), t = t.slice(7, -1).split(","), nr( + t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
    },
    "px, ", "px)", "deg)"),
    ir = er(function(t) {
        return null == t ? tr: (We || (We = document.createElementNS("http://www.w3.org/2000/svg", "g")), We.setAttribute("transform", t), (t = We.transform.baseVal.consolidate()) ? (t = t.matrix, nr(t.a, t.b, t.c, t.d, t.e, t.f)) : tr)
    },
    ", ", ")", ")"),
    ur = Math.SQRT2;
    function or(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2
    }
    var ar = function(t, n) {
        var e, r, i = t[0],
        u = t[1],
        o = t[2],
        a = n[0],
        c = n[1],
        f = n[2],
        s = a - i,
        l = c - u,
        h = s * s + l * l;
        if (h < 1e-12) r = Math.log(f / o) / ur,
        e = function(t) {
            return [i + t * s, u + t * l, o * Math.exp(ur * t * r)]
        };
        else {
            var d = Math.sqrt(h),
            p = (f * f - o * o + 4 * h) / (2 * o * 2 * d),
            v = (f * f - o * o - 4 * h) / (2 * f * 2 * d),
            g = Math.log(Math.sqrt(p * p + 1) - p),
            y = Math.log(Math.sqrt(v * v + 1) - v);
            r = (y - g) / ur,
            e = function(t) {
                var n = t * r,
                e = or(g),
                a = o / (2 * d) * (e *
                function(t) {
                    return ((t = Math.exp(2 * t)) - 1) / (t + 1)
                } (ur * n + g) -
                function(t) {
                    return ((t = Math.exp(t)) - 1 / t) / 2
                } (g));
                return [i + a * s, u + a * l, o * e / or(ur * n + g)]
            }
        }
        return e.duration = 1e3 * r,
        e
    };
    function cr(t) {
        return function(n, e) {
            var r = t((n = Zn(n)).h, (e = Zn(e)).h),
            i = De(n.s, e.s),
            u = De(n.l, e.l),
            o = De(n.opacity, e.opacity);
            return function(t) {
                return n.h = r(t),
                n.s = i(t),
                n.l = u(t),
                n.opacity = o(t),
                n + ""
            }
        }
    }
    var fr = cr(Re),
    sr = cr(De);
    function lr(t, n) {
        var e = De((t = se(t)).l, (n = se(n)).l),
        r = De(t.a, n.a),
        i = De(t.b, n.b),
        u = De(t.opacity, n.opacity);
        return function(n) {
            return t.l = e(n),
            t.a = r(n),
            t.b = i(n),
            t.opacity = u(n),
            t + ""
        }
    }
    function hr(t) {
        return function(n, e) {
            var r = t((n = be(n)).h, (e = be(e)).h),
            i = De(n.c, e.c),
            u = De(n.l, e.l),
            o = De(n.opacity, e.opacity);
            return function(t) {
                return n.h = r(t),
                n.c = i(t),
                n.l = u(t),
                n.opacity = o(t),
                n + ""
            }
        }
    }
    var dr = hr(Re),
    pr = hr(De);
    function vr(t) {
        return function n(e) {
            function r(n, r) {
                var i = t((n = ke(n)).h, (r = ke(r)).h),
                u = De(n.s, r.s),
                o = De(n.l, r.l),
                a = De(n.opacity, r.opacity);
                return function(t) {
                    return n.h = i(t),
                    n.s = u(t),
                    n.l = o(Math.pow(t, e)),
                    n.opacity = a(t),
                    n + ""
                }
            }
            return e = +e,
            r.gamma = n,
            r
        } (1)
    }
    var gr = vr(Re),
    yr = vr(De);
    function br(t, n) {
        for (var e = 0,
        r = n.length - 1,
        i = n[0], u = new Array(r < 0 ? 0 : r); e < r;) u[e] = t(i, i = n[++e]);
        return function(t) {
            var n = Math.max(0, Math.min(r - 1, Math.floor(t *= r)));
            return u[n](t - n)
        }
    }
    var _r, mr, xr = function(t, n) {
        for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
        return e
    },
    wr = 0,
    Mr = 0,
    Ar = 0,
    Sr = 1e3,
    kr = 0,
    Tr = 0,
    Nr = 0,
    Er = "object" == typeof performance && performance.now ? performance: Date,
    Cr = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
        setTimeout(t, 17)
    };
    function Pr() {
        return Tr || (Cr(zr), Tr = Er.now() + Nr)
    }
    function zr() {
        Tr = 0
    }
    function Rr() {
        this._call = this._time = this._next = null
    }
    function Lr(t, n, e) {
        var r = new Rr;
        return r.restart(t, n, e),
        r
    }
    function Dr() {
        Pr(),
        ++wr;
        for (var t, n = _r; n;)(t = Tr - n._time) >= 0 && n._call.call(null, t),
        n = n._next; --wr
    }
    function Ur() {
        Tr = (kr = Er.now()) + Nr,
        wr = Mr = 0;
        try {
            Dr()
        } finally {
            wr = 0,
            function() {
                var t, n, e = _r,
                r = 1 / 0;
                for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n: _r = n);
                mr = t,
                qr(r)
            } (),
            Tr = 0
        }
    }
    function Or() {
        var t = Er.now(),
        n = t - kr;
        n > Sr && (Nr -= n, kr = t)
    }
    function qr(t) {
        wr || (Mr && (Mr = clearTimeout(Mr)), t - Tr > 24 ? (t < 1 / 0 && (Mr = setTimeout(Ur, t - Er.now() - Nr)), Ar && (Ar = clearInterval(Ar))) : (Ar || (kr = Er.now(), Ar = setInterval(Or, Sr)), wr = 1, Cr(Ur)))
    }
    Rr.prototype = Lr.prototype = {
        constructor: Rr,
        restart: function(t, n, e) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            e = (null == e ? Pr() : +e) + (null == n ? 0 : +n),
            this._next || mr === this || (mr ? mr._next = this: _r = this, mr = this),
            this._call = t,
            this._time = e,
            qr()
        },
        stop: function() {
            this._call && (this._call = null, this._time = 1 / 0, qr())
        }
    };
    var Yr = function(t, n, e) {
        var r = new Rr;
        return n = null == n ? 0 : +n,
        r.restart(function(e) {
            r.stop(),
            t(e + n)
        },
        n, e),
        r
    },
    Br = function(t, n, e) {
        var r = new Rr,
        i = n;
        return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? Pr() : +e, r.restart(function u(o) {
            o += i,
            r.restart(u, i += n, e),
            t(o)
        },
        n, e), r)
    },
    Ir = ht("start", "end", "interrupt"),
    Fr = [],
    jr = 0,
    Hr = 1,
    Xr = 2,
    Gr = 3,
    Vr = 4,
    $r = 5,
    Wr = 6,
    Zr = function(t, n, e, r, i, u) {
        var o = t.__transition;
        if (o) {
            if (e in o) return
        } else t.__transition = {}; !
        function(t, n, e) {
            var r, i = t.__transition;
            function u(c) {
                var f, s, l, h;
                if (e.state !== Hr) return a();
                for (f in i) if ((h = i[f]).name === e.name) {
                    if (h.state === Gr) return Yr(u);
                    h.state === Vr ? (h.state = Wr, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[f]) : +f < n && (h.state = Wr, h.timer.stop(), delete i[f])
                }
                if (Yr(function() {
                    e.state === Gr && (e.state = Vr, e.timer.restart(o, e.delay, e.time), o(c))
                }), e.state = Xr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Xr) {
                    for (e.state = Gr, r = new Array(l = e.tween.length), f = 0, s = -1; f < l; ++f)(h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
                    r.length = s + 1
                }
            }
            function o(n) {
                for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = $r, 1), u = -1, o = r.length; ++u < o;) r[u].call(null, i);
                e.state === $r && (e.on.call("end", t, t.__data__, e.index, e.group), a())
            }
            function a() {
                for (var r in e.state = Wr,
                e.timer.stop(), delete i[n], i) return;
                delete t.__transition
            }
            i[n] = e,
            e.timer = Lr(function(t) {
                e.state = Hr,
                e.timer.restart(u, e.delay, e.time),
                e.delay <= t && u(t - e.delay)
            },
            0, e.time)
        } (t, e, {
            name: n,
            index: r,
            group: i,
            on: Ir,
            tween: Fr,
            time: u.time,
            delay: u.delay,
            duration: u.duration,
            ease: u.ease,
            timer: null,
            state: jr
        })
    };
    function Qr(t, n) {
        var e = Kr(t, n);
        if (e.state > jr) throw new Error("too late; already scheduled");
        return e
    }
    function Jr(t, n) {
        var e = Kr(t, n);
        if (e.state > Xr) throw new Error("too late; already started");
        return e
    }
    function Kr(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("transition not found");
        return e
    }
    var ti = function(t, n) {
        var e, r, i, u = t.__transition,
        o = !0;
        if (u) {
            for (i in n = null == n ? null: n + "", u)(e = u[i]).name === n ? (r = e.state > Xr && e.state < $r, e.state = Wr, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete u[i]) : o = !1;
            o && delete t.__transition
        }
    };
    function ni(t, n, e) {
        var r = t._id;
        return t.each(function() {
            var t = Jr(this, r); (t.value || (t.value = {}))[n] = e.apply(this, arguments)
        }),
        function(t) {
            return Kr(t, r).value[n]
        }
    }
    var ei = function(t, n) {
        var e;
        return ("number" == typeof n ? Fe: n instanceof Fn ? Ue: (e = Fn(n)) ? (n = e, Ue) : Ze)(t, n)
    };
    var ri = rn.prototype.constructor;
    var ii = 0;
    function ui(t, n, e, r) {
        this._groups = t,
        this._parents = n,
        this._name = e,
        this._id = r
    }
    function oi(t) {
        return rn().transition(t)
    }
    function ai() {
        return++ii
    }
    var ci = rn.prototype;
    function fi(t) {
        return + t
    }
    function si(t) {
        return t * t
    }
    function li(t) {
        return t * (2 - t)
    }
    function hi(t) {
        return ((t *= 2) <= 1 ? t * t: --t * (2 - t) + 1) / 2
    }
    function di(t) {
        return t * t * t
    }
    function pi(t) {
        return--t * t * t + 1
    }
    function vi(t) {
        return ((t *= 2) <= 1 ? t * t * t: (t -= 2) * t * t + 2) / 2
    }
    ui.prototype = oi.prototype = {
        constructor: ui,
        select: function(t) {
            var n = this._name,
            e = this._id;
            "function" != typeof t && (t = bt(t));
            for (var r = this._groups,
            i = r.length,
            u = new Array(i), o = 0; o < i; ++o) for (var a, c, f = r[o], s = f.length, l = u[o] = new Array(s), h = 0; h < s; ++h)(a = f[h]) && (c = t.call(a, a.__data__, h, f)) && ("__data__" in a && (c.__data__ = a.__data__), l[h] = c, Zr(l[h], n, e, h, l, Kr(a, e)));
            return new ui(u, this._parents, n, e)
        },
        selectAll: function(t) {
            var n = this._name,
            e = this._id;
            "function" != typeof t && (t = mt(t));
            for (var r = this._groups,
            i = r.length,
            u = [], o = [], a = 0; a < i; ++a) for (var c, f = r[a], s = f.length, l = 0; l < s; ++l) if (c = f[l]) {
                for (var h, d = t.call(c, c.__data__, l, f), p = Kr(c, e), v = 0, g = d.length; v < g; ++v)(h = d[v]) && Zr(h, n, e, v, d, p);
                u.push(d),
                o.push(c)
            }
            return new ui(u, o, n, e)
        },
        filter: function(t) {
            "function" != typeof t && (t = At(t));
            for (var n = this._groups,
            e = n.length,
            r = new Array(e), i = 0; i < e; ++i) for (var u, o = n[i], a = o.length, c = r[i] = [], f = 0; f < a; ++f)(u = o[f]) && t.call(u, u.__data__, f, o) && c.push(u);
            return new ui(r, this._parents, this._name, this._id)
        },
        merge: function(t) {
            if (t._id !== this._id) throw new Error;
            for (var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            u = Math.min(r, i), o = new Array(r), a = 0; a < u; ++a) for (var c, f = n[a], s = e[a], l = f.length, h = o[a] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
            for (; a < r; ++a) o[a] = n[a];
            return new ui(o, this._parents, this._name, this._id)
        },
        selection: function() {
            return new ri(this._groups, this._parents)
        },
        transition: function() {
            for (var t = this._name,
            n = this._id,
            e = ai(), r = this._groups, i = r.length, u = 0; u < i; ++u) for (var o, a = r[u], c = a.length, f = 0; f < c; ++f) if (o = a[f]) {
                var s = Kr(o, n);
                Zr(o, t, e, f, a, {
                    time: s.time + s.delay + s.duration,
                    delay: 0,
                    duration: s.duration,
                    ease: s.ease
                })
            }
            return new ui(r, this._parents, t, e)
        },
        call: ci.call,
        nodes: ci.nodes,
        node: ci.node,
        size: ci.size,
        empty: ci.empty,
        each: ci.each,
        on: function(t, n) {
            var e = this._id;
            return arguments.length < 2 ? Kr(this.node(), e).on.on(t) : this.each(function(t, n, e) {
                var r, i, u = function(t) {
                    return (t + "").trim().split(/^|\s+/).every(function(t) {
                        var n = t.indexOf(".");
                        return n >= 0 && (t = t.slice(0, n)),
                        !t || "start" === t
                    })
                } (n) ? Qr: Jr;
                return function() {
                    var o = u(this, t),
                    a = o.on;
                    a !== r && (i = (r = a).copy()).on(n, e),
                    o.on = i
                }
            } (e, t, n))
        },
        attr: function(t, n) {
            var e = vt(t),
            r = "transform" === e ? ir: ei;
            return this.attrTween(t, "function" == typeof n ? (e.local ?
            function(t, n, e) {
                var r, i, u;
                return function() {
                    var o, a = e(this);
                    if (null != a) return (o = this.getAttributeNS(t.space, t.local)) === a ? null: o === r && a === i ? u: u = n(r = o, i = a);
                    this.removeAttributeNS(t.space, t.local)
                }
            }: function(t, n, e) {
                var r, i, u;
                return function() {
                    var o, a = e(this);
                    if (null != a) return (o = this.getAttribute(t)) === a ? null: o === r && a === i ? u: u = n(r = o, i = a);
                    this.removeAttribute(t)
                }
            })(e, r, ni(this, "attr." + t, n)) : null == n ? (e.local ?
            function(t) {
                return function() {
                    this.removeAttributeNS(t.space, t.local)
                }
            }: function(t) {
                return function() {
                    this.removeAttribute(t)
                }
            })(e) : (e.local ?
            function(t, n, e) {
                var r, i;
                return function() {
                    var u = this.getAttributeNS(t.space, t.local);
                    return u === e ? null: u === r ? i: i = n(r = u, e)
                }
            }: function(t, n, e) {
                var r, i;
                return function() {
                    var u = this.getAttribute(t);
                    return u === e ? null: u === r ? i: i = n(r = u, e)
                }
            })(e, r, n + ""))
        },
        attrTween: function(t, n) {
            var e = "attr." + t;
            if (arguments.length < 2) return (e = this.tween(e)) && e._value;
            if (null == n) return this.tween(e, null);
            if ("function" != typeof n) throw new Error;
            var r = vt(t);
            return this.tween(e, (r.local ?
            function(t, n) {
                function e() {
                    var e = this,
                    r = n.apply(e, arguments);
                    return r &&
                    function(n) {
                        e.setAttributeNS(t.space, t.local, r(n))
                    }
                }
                return e._value = n,
                e
            }: function(t, n) {
                function e() {
                    var e = this,
                    r = n.apply(e, arguments);
                    return r &&
                    function(n) {
                        e.setAttribute(t, r(n))
                    }
                }
                return e._value = n,
                e
            })(r, n))
        },
        style: function(t, n, e) {
            var r = "transform" == (t += "") ? rr: ei;
            return null == n ? this.styleTween(t,
            function(t, n) {
                var e, r, i;
                return function() {
                    var u = zt(this, t),
                    o = (this.style.removeProperty(t), zt(this, t));
                    return u === o ? null: u === e && o === r ? i: i = n(e = u, r = o)
                }
            } (t, r)).on("end.style." + t,
            function(t) {
                return function() {
                    this.style.removeProperty(t)
                }
            } (t)) : this.styleTween(t, "function" == typeof n ?
            function(t, n, e) {
                var r, i, u;
                return function() {
                    var o = zt(this, t),
                    a = e(this);
                    return null == a && (this.style.removeProperty(t), a = zt(this, t)),
                    o === a ? null: o === r && a === i ? u: u = n(r = o, i = a)
                }
            } (t, r, ni(this, "style." + t, n)) : function(t, n, e) {
                var r, i;
                return function() {
                    var u = zt(this, t);
                    return u === e ? null: u === r ? i: i = n(r = u, e)
                }
            } (t, r, n + ""), e)
        },
        styleTween: function(t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == n) return this.tween(r, null);
            if ("function" != typeof n) throw new Error;
            return this.tween(r,
            function(t, n, e) {
                function r() {
                    var r = this,
                    i = n.apply(r, arguments);
                    return i &&
                    function(n) {
                        r.style.setProperty(t, i(n), e)
                    }
                }
                return r._value = n,
                r
            } (t, n, null == e ? "": e))
        },
        text: function(t) {
            return this.tween("text", "function" == typeof t ?
            function(t) {
                return function() {
                    var n = t(this);
                    this.textContent = null == n ? "": n
                }
            } (ni(this, "text", t)) : function(t) {
                return function() {
                    this.textContent = t
                }
            } (null == t ? "": t + ""))
        },
        remove: function() {
            return this.on("end.remove",
            function(t) {
                return function() {
                    var n = this.parentNode;
                    for (var e in this.__transition) if ( + e !== t) return;
                    n && n.removeChild(this)
                }
            } (this._id))
        },
        tween: function(t, n) {
            var e = this._id;
            if (t += "", arguments.length < 2) {
                for (var r, i = Kr(this.node(), e).tween, u = 0, o = i.length; u < o; ++u) if ((r = i[u]).name === t) return r.value;
                return null
            }
            return this.each((null == n ?
            function(t, n) {
                var e, r;
                return function() {
                    var i = Jr(this, t),
                    u = i.tween;
                    if (u !== e) for (var o = 0,
                    a = (r = e = u).length; o < a; ++o) if (r[o].name === n) { (r = r.slice()).splice(o, 1);
                        break
                    }
                    i.tween = r
                }
            }: function(t, n, e) {
                var r, i;
                if ("function" != typeof e) throw new Error;
                return function() {
                    var u = Jr(this, t),
                    o = u.tween;
                    if (o !== r) {
                        i = (r = o).slice();
                        for (var a = {
                            name: n,
                            value: e
                        },
                        c = 0, f = i.length; c < f; ++c) if (i[c].name === n) {
                            i[c] = a;
                            break
                        }
                        c === f && i.push(a)
                    }
                    u.tween = i
                }
            })(e, t, n))
        },
        delay: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ?
            function(t, n) {
                return function() {
                    Qr(this, t).delay = +n.apply(this, arguments)
                }
            }: function(t, n) {
                return n = +n,
                function() {
                    Qr(this, t).delay = n
                }
            })(n, t)) : Kr(this.node(), n).delay
        },
        duration: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ?
            function(t, n) {
                return function() {
                    Jr(this, t).duration = +n.apply(this, arguments)
                }
            }: function(t, n) {
                return n = +n,
                function() {
                    Jr(this, t).duration = n
                }
            })(n, t)) : Kr(this.node(), n).duration
        },
        ease: function(t) {
            var n = this._id;
            return arguments.length ? this.each(function(t, n) {
                if ("function" != typeof n) throw new Error;
                return function() {
                    Jr(this, t).ease = n
                }
            } (n, t)) : Kr(this.node(), n).ease
        }
    };
    var gi = function t(n) {
        function e(t) {
            return Math.pow(t, n)
        }
        return n = +n,
        e.exponent = t,
        e
    } (3),
    yi = function t(n) {
        function e(t) {
            return 1 - Math.pow(1 - t, n)
        }
        return n = +n,
        e.exponent = t,
        e
    } (3),
    bi = function t(n) {
        function e(t) {
            return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
        }
        return n = +n,
        e.exponent = t,
        e
    } (3),
    _i = Math.PI,
    mi = _i / 2;
    function xi(t) {
        return 1 - Math.cos(t * mi)
    }
    function wi(t) {
        return Math.sin(t * mi)
    }
    function Mi(t) {
        return (1 - Math.cos(_i * t)) / 2
    }
    function Ai(t) {
        return Math.pow(2, 10 * t - 10)
    }
    function Si(t) {
        return 1 - Math.pow(2, -10 * t)
    }
    function ki(t) {
        return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
    }
    function Ti(t) {
        return 1 - Math.sqrt(1 - t * t)
    }
    function Ni(t) {
        return Math.sqrt(1 - --t * t)
    }
    function Ei(t) {
        return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
    }
    var Ci = 4 / 11,
    Pi = 6 / 11,
    zi = 8 / 11,
    Ri = .75,
    Li = 9 / 11,
    Di = 10 / 11,
    Ui = .9375,
    Oi = 21 / 22,
    qi = 63 / 64,
    Yi = 1 / Ci / Ci;
    function Bi(t) {
        return 1 - Ii(1 - t)
    }
    function Ii(t) {
        return (t = +t) < Ci ? Yi * t * t: t < zi ? Yi * (t -= Pi) * t + Ri: t < Di ? Yi * (t -= Li) * t + Ui: Yi * (t -= Oi) * t + qi
    }
    function Fi(t) {
        return ((t *= 2) <= 1 ? 1 - Ii(1 - t) : Ii(t - 1) + 1) / 2
    }
    var ji = function t(n) {
        function e(t) {
            return t * t * ((n + 1) * t - n)
        }
        return n = +n,
        e.overshoot = t,
        e
    } (1.70158),
    Hi = function t(n) {
        function e(t) {
            return--t * t * ((n + 1) * t + n) + 1
        }
        return n = +n,
        e.overshoot = t,
        e
    } (1.70158),
    Xi = function t(n) {
        function e(t) {
            return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
        }
        return n = +n,
        e.overshoot = t,
        e
    } (1.70158),
    Gi = 2 * Math.PI,
    Vi = function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Gi);
        function i(t) {
            return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e)
        }
        return i.amplitude = function(n) {
            return t(n, e * Gi)
        },
        i.period = function(e) {
            return t(n, e)
        },
        i
    } (1, .3),
    $i = function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Gi);
        function i(t) {
            return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e)
        }
        return i.amplitude = function(n) {
            return t(n, e * Gi)
        },
        i.period = function(e) {
            return t(n, e)
        },
        i
    } (1, .3),
    Wi = function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Gi);
        function i(t) {
            return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
        }
        return i.amplitude = function(n) {
            return t(n, e * Gi)
        },
        i.period = function(e) {
            return t(n, e)
        },
        i
    } (1, .3),
    Zi = {
        time: null,
        delay: 0,
        duration: 250,
        ease: vi
    };
    function Qi(t, n) {
        for (var e; ! (e = t.__transition) || !(e = e[n]);) if (! (t = t.parentNode)) return Zi.time = Pr(),
        Zi;
        return e
    }
    rn.prototype.interrupt = function(t) {
        return this.each(function() {
            ti(this, t)
        })
    },
    rn.prototype.transition = function(t) {
        var n, e;
        t instanceof ui ? (n = t._id, t = t._name) : (n = ai(), (e = Zi).time = Pr(), t = null == t ? null: t + "");
        for (var r = this._groups,
        i = r.length,
        u = 0; u < i; ++u) for (var o, a = r[u], c = a.length, f = 0; f < c; ++f)(o = a[f]) && Zr(o, t, n, f, a, e || Qi(o, n));
        return new ui(r, this._parents, t, n)
    };
    var Ji = [null],
    Ki = function(t, n) {
        var e, r, i = t.__transition;
        if (i) for (r in n = null == n ? null: n + "", i) if ((e = i[r]).state > Hr && e.name === n) return new ui([[t]], Ji, n, +r);
        return null
    },
    tu = function(t) {
        return function() {
            return t
        }
    },
    nu = function(t, n, e) {
        this.target = t,
        this.type = n,
        this.selection = e
    };
    function eu() {
        Vt.stopImmediatePropagation()
    }
    var ru = function() {
        Vt.preventDefault(),
        Vt.stopImmediatePropagation()
    },
    iu = {
        name: "drag"
    },
    uu = {
        name: "space"
    },
    ou = {
        name: "handle"
    },
    au = {
        name: "center"
    },
    cu = {
        name: "x",
        handles: ["e", "w"].map(gu),
        input: function(t, n) {
            return t && [[t[0], n[0][1]], [t[1], n[1][1]]]
        },
        output: function(t) {
            return t && [t[0][0], t[1][0]]
        }
    },
    fu = {
        name: "y",
        handles: ["n", "s"].map(gu),
        input: function(t, n) {
            return t && [[n[0][0], t[0]], [n[1][0], t[1]]]
        },
        output: function(t) {
            return t && [t[0][1], t[1][1]]
        }
    },
    su = {
        name: "xy",
        handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(gu),
        input: function(t) {
            return t
        },
        output: function(t) {
            return t
        }
    },
    lu = {
        overlay: "crosshair",
        selection: "move",
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    },
    hu = {
        e: "w",
        w: "e",
        nw: "ne",
        ne: "nw",
        se: "sw",
        sw: "se"
    },
    du = {
        n: "s",
        s: "n",
        nw: "sw",
        ne: "se",
        se: "ne",
        sw: "nw"
    },
    pu = {
        overlay: 1,
        selection: 1,
        n: null,
        e: 1,
        s: null,
        w: -1,
        nw: -1,
        ne: 1,
        se: 1,
        sw: -1
    },
    vu = {
        overlay: 1,
        selection: 1,
        n: -1,
        e: null,
        s: 1,
        w: null,
        nw: -1,
        ne: -1,
        se: 1,
        sw: 1
    };
    function gu(t) {
        return {
            type: t
        }
    }
    function yu() {
        return ! Vt.button
    }
    function bu() {
        var t = this.ownerSVGElement || this;
        return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]
    }
    function _u(t) {
        for (; ! t.__brush;) if (! (t = t.parentNode)) return;
        return t.__brush
    }
    function mu(t) {
        return t[0][0] === t[1][0] || t[0][1] === t[1][1]
    }
    function xu(t) {
        var n = t.__brush;
        return n ? n.dim.output(n.selection) : null
    }
    function wu() {
        return Su(cu)
    }
    function Mu() {
        return Su(fu)
    }
    var Au = function() {
        return Su(su)
    };
    function Su(t) {
        var n, e = bu,
        r = yu,
        i = ht(o, "start", "brush", "end"),
        u = 6;
        function o(n) {
            var e = n.property("__brush", l).selectAll(".overlay").data([gu("overlay")]);
            e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", lu.overlay).merge(e).each(function() {
                var t = _u(this).extent;
                un(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
            }),
            n.selectAll(".selection").data([gu("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", lu.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
            var r = n.selectAll(".handle").data(t.handles,
            function(t) {
                return t.type
            });
            r.exit().remove(),
            r.enter().append("rect").attr("class",
            function(t) {
                return "handle handle--" + t.type
            }).attr("cursor",
            function(t) {
                return lu[t.type]
            }),
            n.each(a).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", s)
        }
        function a() {
            var t = un(this),
            n = _u(this).selection;
            n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x",
            function(t) {
                return "e" === t.type[t.type.length - 1] ? n[1][0] - u / 2 : n[0][0] - u / 2
            }).attr("y",
            function(t) {
                return "s" === t.type[0] ? n[1][1] - u / 2 : n[0][1] - u / 2
            }).attr("width",
            function(t) {
                return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + u: u
            }).attr("height",
            function(t) {
                return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + u: u
            })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
        }
        function c(t, n) {
            return t.__brush.emitter || new f(t, n)
        }
        function f(t, n) {
            this.that = t,
            this.args = n,
            this.state = t.__brush,
            this.active = 0
        }
        function s() {
            if (Vt.touches) {
                if (Vt.changedTouches.length < Vt.touches.length) return ru()
            } else if (n) return;
            if (r.apply(this, arguments)) {
                var e, i, u, o, f, s, l, h, d, p, v, g, y, b = this,
                _ = Vt.target.__data__.type,
                m = "selection" === (Vt.metaKey ? _ = "overlay": _) ? iu: Vt.altKey ? au: ou,
                x = t === fu ? null: pu[_],
                w = t === cu ? null: vu[_],
                M = _u(b),
                A = M.extent,
                S = M.selection,
                k = A[0][0],
                T = A[0][1],
                N = A[1][0],
                E = A[1][1],
                C = x && w && Vt.shiftKey,
                P = hn(b),
                z = P,
                R = c(b, arguments).beforestart();
                "overlay" === _ ? M.selection = S = [[e = t === fu ? k: P[0], u = t === cu ? T: P[1]], [f = t === fu ? N: e, l = t === cu ? E: u]] : (e = S[0][0], u = S[0][1], f = S[1][0], l = S[1][1]),
                i = e,
                o = u,
                s = f,
                h = l;
                var L = un(b).attr("pointer-events", "none"),
                D = L.selectAll(".overlay").attr("cursor", lu[_]);
                if (Vt.touches) L.on("touchmove.brush", O, !0).on("touchend.brush touchcancel.brush", Y, !0);
                else {
                    var U = un(Vt.view).on("keydown.brush",
                    function() {
                        switch (Vt.keyCode) {
                        case 16:
                            C = x && w;
                            break;
                        case 18:
                            m === ou && (x && (f = s - d * x, e = i + d * x), w && (l = h - p * w, u = o + p * w), m = au, q());
                            break;
                        case 32:
                            m !== ou && m !== au || (x < 0 ? f = s - d: x > 0 && (e = i - d), w < 0 ? l = h - p: w > 0 && (u = o - p), m = uu, D.attr("cursor", lu.selection), q());
                            break;
                        default:
                            return
                        }
                        ru()
                    },
                    !0).on("keyup.brush",
                    function() {
                        switch (Vt.keyCode) {
                        case 16:
                            C && (g = y = C = !1, q());
                            break;
                        case 18:
                            m === au && (x < 0 ? f = s: x > 0 && (e = i), w < 0 ? l = h: w > 0 && (u = o), m = ou, q());
                            break;
                        case 32:
                            m === uu && (Vt.altKey ? (x && (f = s - d * x, e = i + d * x), w && (l = h - p * w, u = o + p * w), m = au) : (x < 0 ? f = s: x > 0 && (e = i), w < 0 ? l = h: w > 0 && (u = o), m = ou), D.attr("cursor", lu[_]), q());
                            break;
                        default:
                            return
                        }
                        ru()
                    },
                    !0).on("mousemove.brush", O, !0).on("mouseup.brush", Y, !0);
                    bn(Vt.view)
                }
                eu(),
                ti(b),
                a.call(b),
                R.start()
            }
            function O() {
                var t = hn(b); ! C || g || y || (Math.abs(t[0] - z[0]) > Math.abs(t[1] - z[1]) ? y = !0 : g = !0),
                z = t,
                v = !0,
                ru(),
                q()
            }
            function q() {
                var t;
                switch (d = z[0] - P[0], p = z[1] - P[1], m) {
                case uu:
                case iu:
                    x && (d = Math.max(k - e, Math.min(N - f, d)), i = e + d, s = f + d),
                    w && (p = Math.max(T - u, Math.min(E - l, p)), o = u + p, h = l + p);
                    break;
                case ou:
                    x < 0 ? (d = Math.max(k - e, Math.min(N - e, d)), i = e + d, s = f) : x > 0 && (d = Math.max(k - f, Math.min(N - f, d)), i = e, s = f + d),
                    w < 0 ? (p = Math.max(T - u, Math.min(E - u, p)), o = u + p, h = l) : w > 0 && (p = Math.max(T - l, Math.min(E - l, p)), o = u, h = l + p);
                    break;
                case au:
                    x && (i = Math.max(k, Math.min(N, e - d * x)), s = Math.max(k, Math.min(N, f + d * x))),
                    w && (o = Math.max(T, Math.min(E, u - p * w)), h = Math.max(T, Math.min(E, l + p * w)))
                }
                s < i && (x *= -1, t = e, e = f, f = t, t = i, i = s, s = t, _ in hu && D.attr("cursor", lu[_ = hu[_]])),
                h < o && (w *= -1, t = u, u = l, l = t, t = o, o = h, h = t, _ in du && D.attr("cursor", lu[_ = du[_]])),
                M.selection && (S = M.selection),
                g && (i = S[0][0], s = S[1][0]),
                y && (o = S[0][1], h = S[1][1]),
                S[0][0] === i && S[0][1] === o && S[1][0] === s && S[1][1] === h || (M.selection = [[i, o], [s, h]], a.call(b), R.brush())
            }
            function Y() {
                if (eu(), Vt.touches) {
                    if (Vt.touches.length) return;
                    n && clearTimeout(n),
                    n = setTimeout(function() {
                        n = null
                    },
                    500),
                    L.on("touchmove.brush touchend.brush touchcancel.brush", null)
                } else _n(Vt.view, v),
                U.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                L.attr("pointer-events", "all"),
                D.attr("cursor", lu.overlay),
                M.selection && (S = M.selection),
                mu(S) && (M.selection = null, a.call(b)),
                R.end()
            }
        }
        function l() {
            var n = this.__brush || {
                selection: null
            };
            return n.extent = e.apply(this, arguments),
            n.dim = t,
            n
        }
        return o.move = function(n, e) {
            n.selection ? n.on("start.brush",
            function() {
                c(this, arguments).beforestart().start()
            }).on("interrupt.brush end.brush",
            function() {
                c(this, arguments).end()
            }).tween("brush",
            function() {
                var n = this,
                r = n.__brush,
                i = c(n, arguments),
                u = r.selection,
                o = t.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent),
                f = Qe(u, o);
                function s(t) {
                    r.selection = 1 === t && mu(o) ? null: f(t),
                    a.call(n),
                    i.brush()
                }
                return u && o ? s: s(1)
            }) : n.each(function() {
                var n = arguments,
                r = this.__brush,
                i = t.input("function" == typeof e ? e.apply(this, n) : e, r.extent),
                u = c(this, n).beforestart();
                ti(this),
                r.selection = null == i || mu(i) ? null: i,
                a.call(this),
                u.start().brush().end()
            })
        },
        f.prototype = {
            beforestart: function() {
                return 1 == ++this.active && (this.state.emitter = this, this.starting = !0),
                this
            },
            start: function() {
                return this.starting && (this.starting = !1, this.emit("start")),
                this
            },
            brush: function() {
                return this.emit("brush"),
                this
            },
            end: function() {
                return 0 == --this.active && (delete this.state.emitter, this.emit("end")),
                this
            },
            emit: function(n) {
                Jt(new nu(o, n, t.output(this.state.selection)), i.apply, i, [n, this.that, this.args])
            }
        },
        o.extent = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t: tu([[ + t[0][0], +t[0][1]], [ + t[1][0], +t[1][1]]]), o) : e
        },
        o.filter = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t: tu( !! t), o) : r
        },
        o.handleSize = function(t) {
            return arguments.length ? (u = +t, o) : u
        },
        o.on = function() {
            var t = i.on.apply(i, arguments);
            return t === i ? o: t
        },
        o
    }
    var ku = Math.cos,
    Tu = Math.sin,
    Nu = Math.PI,
    Eu = Nu / 2,
    Cu = 2 * Nu,
    Pu = Math.max;
    var zu = function() {
        var t = 0,
        n = null,
        e = null,
        r = null;
        function i(i) {
            var u, o, a, c, f, s, l = i.length,
            h = [],
            d = w(l),
            p = [],
            v = [],
            g = v.groups = new Array(l),
            y = new Array(l * l);
            for (u = 0, f = -1; ++f < l;) {
                for (o = 0, s = -1; ++s < l;) o += i[f][s];
                h.push(o),
                p.push(w(l)),
                u += o
            }
            for (n && d.sort(function(t, e) {
                return n(h[t], h[e])
            }), e && p.forEach(function(t, n) {
                t.sort(function(t, r) {
                    return e(i[n][t], i[n][r])
                })
            }), c = (u = Pu(0, Cu - t * l) / u) ? t: Cu / l, o = 0, f = -1; ++f < l;) {
                for (a = o, s = -1; ++s < l;) {
                    var b = d[f],
                    _ = p[b][s],
                    m = i[b][_],
                    x = o,
                    M = o += m * u;
                    y[_ * l + b] = {
                        index: b,
                        subindex: _,
                        startAngle: x,
                        endAngle: M,
                        value: m
                    }
                }
                g[b] = {
                    index: b,
                    startAngle: a,
                    endAngle: o,
                    value: h[b]
                },
                o += c
            }
            for (f = -1; ++f < l;) for (s = f - 1; ++s < l;) {
                var A = y[s * l + f],
                S = y[f * l + s]; (A.value || S.value) && v.push(A.value < S.value ? {
                    source: S,
                    target: A
                }: {
                    source: A,
                    target: S
                })
            }
            return r ? v.sort(r) : v
        }
        return i.padAngle = function(n) {
            return arguments.length ? (t = Pu(0, n), i) : t
        },
        i.sortGroups = function(t) {
            return arguments.length ? (n = t, i) : n
        },
        i.sortSubgroups = function(t) {
            return arguments.length ? (e = t, i) : e
        },
        i.sortChords = function(t) {
            return arguments.length ? (null == t ? r = null: (r = function(t) {
                return function(n, e) {
                    return t(n.source.value + n.target.value, e.source.value + e.target.value)
                }
            } (t))._ = t, i) : r && r._
        },
        i
    },
    Ru = Array.prototype.slice,
    Lu = function(t) {
        return function() {
            return t
        }
    },
    Du = Math.PI,
    Uu = 2 * Du,
    Ou = Uu - 1e-6;
    function qu() {
        this._x0 = this._y0 = this._x1 = this._y1 = null,
        this._ = ""
    }
    function Yu() {
        return new qu
    }
    qu.prototype = Yu.prototype = {
        constructor: qu,
        moveTo: function(t, n) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
        },
        closePath: function() {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
        },
        lineTo: function(t, n) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
        },
        quadraticCurveTo: function(t, n, e, r) {
            this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
        },
        bezierCurveTo: function(t, n, e, r, i, u) {
            this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +u)
        },
        arcTo: function(t, n, e, r, i) {
            t = +t,
            n = +n,
            e = +e,
            r = +r,
            i = +i;
            var u = this._x1,
            o = this._y1,
            a = e - t,
            c = r - n,
            f = u - t,
            s = o - n,
            l = f * f + s * s;
            if (i < 0) throw new Error("negative radius: " + i);
            if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
            else if (l > 1e-6) if (Math.abs(s * a - c * f) > 1e-6 && i) {
                var h = e - u,
                d = r - o,
                p = a * a + c * c,
                v = h * h + d * d,
                g = Math.sqrt(p),
                y = Math.sqrt(l),
                b = i * Math.tan((Du - Math.acos((p + l - v) / (2 * g * y))) / 2),
                _ = b / y,
                m = b / g;
                Math.abs(_ - 1) > 1e-6 && (this._ += "L" + (t + _ * f) + "," + (n + _ * s)),
                this._ += "A" + i + "," + i + ",0,0," + +(s * h > f * d) + "," + (this._x1 = t + m * a) + "," + (this._y1 = n + m * c)
            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
            else;
        },
        arc: function(t, n, e, r, i, u) {
            t = +t,
            n = +n;
            var o = (e = +e) * Math.cos(r),
            a = e * Math.sin(r),
            c = t + o,
            f = n + a,
            s = 1 ^ u,
            l = u ? r - i: i - r;
            if (e < 0) throw new Error("negative radius: " + e);
            null === this._x1 ? this._ += "M" + c + "," + f: (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - f) > 1e-6) && (this._ += "L" + c + "," + f),
            e && (l < 0 && (l = l % Uu + Uu), l > Ou ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - o) + "," + (n - a) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = f) : l > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(l >= Du) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
        },
        rect: function(t, n, e, r) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
        },
        toString: function() {
            return this._
        }
    };
    var Bu = Yu;
    function Iu(t) {
        return t.source
    }
    function Fu(t) {
        return t.target
    }
    function ju(t) {
        return t.radius
    }
    function Hu(t) {
        return t.startAngle
    }
    function Xu(t) {
        return t.endAngle
    }
    var Gu = function() {
        var t = Iu,
        n = Fu,
        e = ju,
        r = Hu,
        i = Xu,
        u = null;
        function o() {
            var o, a = Ru.call(arguments),
            c = t.apply(this, a),
            f = n.apply(this, a),
            s = +e.apply(this, (a[0] = c, a)),
            l = r.apply(this, a) - Eu,
            h = i.apply(this, a) - Eu,
            d = s * ku(l),
            p = s * Tu(l),
            v = +e.apply(this, (a[0] = f, a)),
            g = r.apply(this, a) - Eu,
            y = i.apply(this, a) - Eu;
            if (u || (u = o = Bu()), u.moveTo(d, p), u.arc(0, 0, s, l, h), l === g && h === y || (u.quadraticCurveTo(0, 0, v * ku(g), v * Tu(g)), u.arc(0, 0, v, g, y)), u.quadraticCurveTo(0, 0, d, p), u.closePath(), o) return u = null,
            o + "" || null
        }
        return o.radius = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t: Lu( + t), o) : e
        },
        o.startAngle = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t: Lu( + t), o) : r
        },
        o.endAngle = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t: Lu( + t), o) : i
        },
        o.source = function(n) {
            return arguments.length ? (t = n, o) : t
        },
        o.target = function(t) {
            return arguments.length ? (n = t, o) : n
        },
        o.context = function(t) {
            return arguments.length ? (u = null == t ? null: t, o) : u
        },
        o
    };
    function Vu() {}
    function $u(t, n) {
        var e = new Vu;
        if (t instanceof Vu) t.each(function(t, n) {
            e.set(n, t)
        });
        else if (Array.isArray(t)) {
            var r, i = -1,
            u = t.length;
            if (null == n) for (; ++i < u;) e.set(i, t[i]);
            else for (; ++i < u;) e.set(n(r = t[i], i, t), r)
        } else if (t) for (var o in t) e.set(o, t[o]);
        return e
    }
    Vu.prototype = $u.prototype = {
        constructor: Vu,
        has: function(t) {
            return "$" + t in this
        },
        get: function(t) {
            return this["$" + t]
        },
        set: function(t, n) {
            return this["$" + t] = n,
            this
        },
        remove: function(t) {
            var n = "$" + t;
            return n in this && delete this[n]
        },
        clear: function() {
            for (var t in this)"$" === t[0] && delete this[t]
        },
        keys: function() {
            var t = [];
            for (var n in this)"$" === n[0] && t.push(n.slice(1));
            return t
        },
        values: function() {
            var t = [];
            for (var n in this)"$" === n[0] && t.push(this[n]);
            return t
        },
        entries: function() {
            var t = [];
            for (var n in this)"$" === n[0] && t.push({
                key: n.slice(1),
                value: this[n]
            });
            return t
        },
        size: function() {
            var t = 0;
            for (var n in this)"$" === n[0] && ++t;
            return t
        },
        empty: function() {
            for (var t in this) if ("$" === t[0]) return ! 1;
            return ! 0
        },
        each: function(t) {
            for (var n in this)"$" === n[0] && t(this[n], n.slice(1), this)
        }
    };
    var Wu = $u,
    Zu = function() {
        var t, n, e, r = [],
        i = [];
        function u(e, i, o, a) {
            if (i >= r.length) return null != t && e.sort(t),
            null != n ? n(e) : e;
            for (var c, f, s, l = -1,
            h = e.length,
            d = r[i++], p = Wu(), v = o(); ++l < h;)(s = p.get(c = d(f = e[l]) + "")) ? s.push(f) : p.set(c, [f]);
            return p.each(function(t, n) {
                a(v, n, u(t, i, o, a))
            }),
            v
        }
        return e = {
            object: function(t) {
                return u(t, 0, Qu, Ju)
            },
            map: function(t) {
                return u(t, 0, Ku, to)
            },
            entries: function(t) {
                return function t(e, u) {
                    if (++u > r.length) return e;
                    var o, a = i[u - 1];
                    return null != n && u >= r.length ? o = e.entries() : (o = [], e.each(function(n, e) {
                        o.push({
                            key: e,
                            values: t(n, u)
                        })
                    })),
                    null != a ? o.sort(function(t, n) {
                        return a(t.key, n.key)
                    }) : o
                } (u(t, 0, Ku, to), 0)
            },
            key: function(t) {
                return r.push(t),
                e
            },
            sortKeys: function(t) {
                return i[r.length - 1] = t,
                e
            },
            sortValues: function(n) {
                return t = n,
                e
            },
            rollup: function(t) {
                return n = t,
                e
            }
        }
    };
    function Qu() {
        return {}
    }
    function Ju(t, n, e) {
        t[n] = e
    }
    function Ku() {
        return Wu()
    }
    function to(t, n, e) {
        t.set(n, e)
    }
    function no() {}
    var eo = Wu.prototype;
    function ro(t, n) {
        var e = new no;
        if (t instanceof no) t.each(function(t) {
            e.add(t)
        });
        else if (t) {
            var r = -1,
            i = t.length;
            if (null == n) for (; ++r < i;) e.add(t[r]);
            else for (; ++r < i;) e.add(n(t[r], r, t))
        }
        return e
    }
    no.prototype = ro.prototype = {
        constructor: no,
        has: eo.has,
        add: function(t) {
            return this["$" + (t += "")] = t,
            this
        },
        remove: eo.remove,
        clear: eo.clear,
        values: eo.keys,
        size: eo.size,
        empty: eo.empty,
        each: eo.each
    };
    var io = ro,
    uo = function(t) {
        var n = [];
        for (var e in t) n.push(e);
        return n
    },
    oo = function(t) {
        var n = [];
        for (var e in t) n.push(t[e]);
        return n
    },
    ao = function(t) {
        var n = [];
        for (var e in t) n.push({
            key: e,
            value: t[e]
        });
        return n
    },
    co = Array.prototype.slice,
    fo = function(t, n) {
        return t - n
    },
    so = function(t) {
        for (var n = 0,
        e = t.length,
        r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; ++n < e;) r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
        return r
    },
    lo = function(t) {
        return function() {
            return t
        }
    },
    ho = function(t, n) {
        for (var e, r = -1,
        i = n.length; ++r < i;) if (e = po(t, n[r])) return e;
        return 0
    };
    function po(t, n) {
        for (var e = n[0], r = n[1], i = -1, u = 0, o = t.length, a = o - 1; u < o; a = u++) {
            var c = t[u],
            f = c[0],
            s = c[1],
            l = t[a],
            h = l[0],
            d = l[1];
            if (vo(c, l, n)) return 0;
            s > r != d > r && e < (h - f) * (r - s) / (d - s) + f && (i = -i)
        }
        return i
    }
    function vo(t, n, e) {
        var r;
        return function(t, n, e) {
            return (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1])
        } (t, n, e) &&
        function(t, n, e) {
            return t <= n && n <= e || e <= n && n <= t
        } (t[r = +(t[0] === n[0])], e[r], n[r])
    }
    var go = function() {},
    yo = [[], [[[1, 1.5], [.5, 1]]], [[[1.5, 1], [1, 1.5]]], [[[1.5, 1], [.5, 1]]], [[[1, .5], [1.5, 1]]], [[[1, 1.5], [.5, 1]], [[1, .5], [1.5, 1]]], [[[1, .5], [1, 1.5]]], [[[1, .5], [.5, 1]]], [[[.5, 1], [1, .5]]], [[[1, 1.5], [1, .5]]], [[[.5, 1], [1, .5]], [[1.5, 1], [1, 1.5]]], [[[1.5, 1], [1, .5]]], [[[.5, 1], [1.5, 1]]], [[[1, 1.5], [1.5, 1]]], [[[.5, 1], [1, 1.5]]], []],
    bo = function() {
        var t = 1,
        n = 1,
        e = E,
        r = a;
        function i(t) {
            var n = e(t);
            if (Array.isArray(n)) n = n.slice().sort(fo);
            else {
                var r = g(t),
                i = r[0],
                o = r[1];
                n = N(i, o, n),
                n = w(Math.floor(i / n) * n, Math.floor(o / n) * n, n)
            }
            return n.map(function(n) {
                return u(t, n)
            })
        }
        function u(e, i) {
            var u = [],
            a = [];
            return function(e, r, i) {
                var u, a, c, f, s, l, h = new Array,
                d = new Array;
                u = a = -1,
                f = e[0] >= r,
                yo[f << 1].forEach(p);
                for (; ++u < t - 1;) c = f,
                f = e[u + 1] >= r,
                yo[c | f << 1].forEach(p);
                yo[f << 0].forEach(p);
                for (; ++a < n - 1;) {
                    for (u = -1, f = e[a * t + t] >= r, s = e[a * t] >= r, yo[f << 1 | s << 2].forEach(p); ++u < t - 1;) c = f,
                    f = e[a * t + t + u + 1] >= r,
                    l = s,
                    s = e[a * t + u + 1] >= r,
                    yo[c | f << 1 | s << 2 | l << 3].forEach(p);
                    yo[f | s << 3].forEach(p)
                }
                u = -1,
                s = e[a * t] >= r,
                yo[s << 2].forEach(p);
                for (; ++u < t - 1;) l = s,
                s = e[a * t + u + 1] >= r,
                yo[s << 2 | l << 3].forEach(p);
                function p(t) {
                    var n, e, r = [t[0][0] + u, t[0][1] + a],
                    c = [t[1][0] + u, t[1][1] + a],
                    f = o(r),
                    s = o(c); (n = d[f]) ? (e = h[s]) ? (delete d[n.end], delete h[e.start], n === e ? (n.ring.push(c), i(n.ring)) : h[n.start] = d[e.end] = {
                        start: n.start,
                        end: e.end,
                        ring: n.ring.concat(e.ring)
                    }) : (delete d[n.end], n.ring.push(c), d[n.end = s] = n) : (n = h[s]) ? (e = d[f]) ? (delete h[n.start], delete d[e.end], n === e ? (n.ring.push(c), i(n.ring)) : h[e.start] = d[n.end] = {
                        start: e.start,
                        end: n.end,
                        ring: e.ring.concat(n.ring)
                    }) : (delete h[n.start], n.ring.unshift(r), h[n.start = f] = n) : h[f] = d[s] = {
                        start: f,
                        end: s,
                        ring: [r, c]
                    }
                }
                yo[s << 3].forEach(p)
            } (e, i,
            function(t) {
                r(t, e, i),
                so(t) > 0 ? u.push([t]) : a.push(t)
            }),
            a.forEach(function(t) {
                for (var n, e = 0,
                r = u.length; e < r; ++e) if ( - 1 !== ho((n = u[e])[0], t)) return void n.push(t)
            }),
            {
                type: "MultiPolygon",
                value: i,
                coordinates: u
            }
        }
        function o(n) {
            return 2 * n[0] + n[1] * (t + 1) * 4
        }
        function a(e, r, i) {
            e.forEach(function(e) {
                var u, o = e[0],
                a = e[1],
                c = 0 | o,
                f = 0 | a,
                s = r[f * t + c];
                o > 0 && o < t && c === o && (u = r[f * t + c - 1], e[0] = o + (i - u) / (s - u) - .5),
                a > 0 && a < n && f === a && (u = r[(f - 1) * t + c], e[1] = a + (i - u) / (s - u) - .5)
            })
        }
        return i.contour = u,
        i.size = function(e) {
            if (!arguments.length) return [t, n];
            var r = Math.ceil(e[0]),
            u = Math.ceil(e[1]);
            if (! (r > 0 && u > 0)) throw new Error("invalid size");
            return t = r,
            n = u,
            i
        },
        i.thresholds = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t: Array.isArray(t) ? lo(co.call(t)) : lo(t), i) : e
        },
        i.smooth = function(t) {
            return arguments.length ? (r = t ? a: go, i) : r === a
        },
        i
    };
    function _o(t, n, e) {
        for (var r = t.width,
        i = t.height,
        u = 1 + (e << 1), o = 0; o < i; ++o) for (var a = 0,
        c = 0; a < r + e; ++a) a < r && (c += t.data[a + o * r]),
        a >= e && (a >= u && (c -= t.data[a - u + o * r]), n.data[a - e + o * r] = c / Math.min(a + 1, r - 1 + u - a, u))
    }
    function mo(t, n, e) {
        for (var r = t.width,
        i = t.height,
        u = 1 + (e << 1), o = 0; o < r; ++o) for (var a = 0,
        c = 0; a < i + e; ++a) a < i && (c += t.data[o + a * r]),
        a >= e && (a >= u && (c -= t.data[o + (a - u) * r]), n.data[o + (a - e) * r] = c / Math.min(a + 1, i - 1 + u - a, u))
    }
    function xo(t) {
        return t[0]
    }
    function wo(t) {
        return t[1]
    }
    function Mo() {
        return 1
    }
    var Ao = function() {
        var t = xo,
        n = wo,
        e = Mo,
        r = 960,
        i = 500,
        u = 20,
        o = 2,
        a = 3 * u,
        c = r + 2 * a >> o,
        f = i + 2 * a >> o,
        s = lo(20);
        function l(r) {
            var i = new Float32Array(c * f),
            l = new Float32Array(c * f);
            r.forEach(function(r, u, s) {
                var l = +t(r, u, s) + a >> o,
                h = +n(r, u, s) + a >> o,
                d = +e(r, u, s);
                l >= 0 && l < c && h >= 0 && h < f && (i[l + h * c] += d)
            }),
            _o({
                width: c,
                height: f,
                data: i
            },
            {
                width: c,
                height: f,
                data: l
            },
            u >> o),
            mo({
                width: c,
                height: f,
                data: l
            },
            {
                width: c,
                height: f,
                data: i
            },
            u >> o),
            _o({
                width: c,
                height: f,
                data: i
            },
            {
                width: c,
                height: f,
                data: l
            },
            u >> o),
            mo({
                width: c,
                height: f,
                data: l
            },
            {
                width: c,
                height: f,
                data: i
            },
            u >> o),
            _o({
                width: c,
                height: f,
                data: i
            },
            {
                width: c,
                height: f,
                data: l
            },
            u >> o),
            mo({
                width: c,
                height: f,
                data: l
            },
            {
                width: c,
                height: f,
                data: i
            },
            u >> o);
            var d = s(i);
            if (!Array.isArray(d)) {
                var p = L(i);
                d = N(0, p, d),
                (d = w(0, Math.floor(p / d) * d, d)).shift()
            }
            return bo().thresholds(d).size([c, f])(i).map(h)
        }
        function h(t) {
            return t.value *= Math.pow(2, -2 * o),
            t.coordinates.forEach(d),
            t
        }
        function d(t) {
            t.forEach(p)
        }
        function p(t) {
            t.forEach(v)
        }
        function v(t) {
            t[0] = t[0] * Math.pow(2, o) - a,
            t[1] = t[1] * Math.pow(2, o) - a
        }
        function g() {
            return c = r + 2 * (a = 3 * u) >> o,
            f = i + 2 * a >> o,
            l
        }
        return l.x = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n: lo( + n), l) : t
        },
        l.y = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t: lo( + t), l) : n
        },
        l.weight = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t: lo( + t), l) : e
        },
        l.size = function(t) {
            if (!arguments.length) return [r, i];
            var n = Math.ceil(t[0]),
            e = Math.ceil(t[1]);
            if (! (n >= 0 || n >= 0)) throw new Error("invalid size");
            return r = n,
            i = e,
            g()
        },
        l.cellSize = function(t) {
            if (!arguments.length) return 1 << o;
            if (! ((t = +t) >= 1)) throw new Error("invalid cell size");
            return o = Math.floor(Math.log(t) / Math.LN2),
            g()
        },
        l.thresholds = function(t) {
            return arguments.length ? (s = "function" == typeof t ? t: Array.isArray(t) ? lo(co.call(t)) : lo(t), l) : s
        },
        l.bandwidth = function(t) {
            if (!arguments.length) return Math.sqrt(u * (u + 1));
            if (! ((t = +t) >= 0)) throw new Error("invalid bandwidth");
            return u = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2),
            g()
        },
        l
    },
    So = {},
    ko = {},
    To = 34,
    No = 10,
    Eo = 13;
    function Co(t) {
        return new Function("d", "return {" + t.map(function(t, n) {
            return JSON.stringify(t) + ": d[" + n + "]"
        }).join(",") + "}")
    }
    var Po = function(t) {
        var n = new RegExp('["' + t + "\n\r]"),
        e = t.charCodeAt(0);
        function r(t, n) {
            var r, i = [],
            u = t.length,
            o = 0,
            a = 0,
            c = u <= 0,
            f = !1;
            function s() {
                if (c) return ko;
                if (f) return f = !1,
                So;
                var n, r, i = o;
                if (t.charCodeAt(i) === To) {
                    for (; o++<u && t.charCodeAt(o) !== To || t.charCodeAt(++o) === To;);
                    return (n = o) >= u ? c = !0 : (r = t.charCodeAt(o++)) === No ? f = !0 : r === Eo && (f = !0, t.charCodeAt(o) === No && ++o),
                    t.slice(i + 1, n - 1).replace(/""/g, '"')
                }
                for (; o < u;) {
                    if ((r = t.charCodeAt(n = o++)) === No) f = !0;
                    else if (r === Eo) f = !0,
                    t.charCodeAt(o) === No && ++o;
                    else if (r !== e) continue;
                    return t.slice(i, n)
                }
                return c = !0,
                t.slice(i, u)
            }
            for (t.charCodeAt(u - 1) === No && --u, t.charCodeAt(u - 1) === Eo && --u; (r = s()) !== ko;) {
                for (var l = []; r !== So && r !== ko;) l.push(r),
                r = s();
                n && null == (l = n(l, a++)) || i.push(l)
            }
            return i
        }
        function i(n) {
            return n.map(u).join(t)
        }
        function u(t) {
            return null == t ? "": n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"': t
        }
        return {
            parse: function(t, n) {
                var e, i, u = r(t,
                function(t, r) {
                    if (e) return e(t, r - 1);
                    i = t,
                    e = n ?
                    function(t, n) {
                        var e = Co(t);
                        return function(r, i) {
                            return n(e(r), i, t)
                        }
                    } (t, n) : Co(t)
                });
                return u.columns = i || [],
                u
            },
            parseRows: r,
            format: function(n, e) {
                return null == e && (e = function(t) {
                    var n = Object.create(null),
                    e = [];
                    return t.forEach(function(t) {
                        for (var r in t) r in n || e.push(n[r] = r)
                    }),
                    e
                } (n)),
                [e.map(u).join(t)].concat(n.map(function(n) {
                    return e.map(function(t) {
                        return u(n[t])
                    }).join(t)
                })).join("\n")
            },
            formatRows: function(t) {
                return t.map(i).join("\n")
            }
        }
    },
    zo = Po(","),
    Ro = zo.parse,
    Lo = zo.parseRows,
    Do = zo.format,
    Uo = zo.formatRows,
    Oo = Po("\t"),
    qo = Oo.parse,
    Yo = Oo.parseRows,
    Bo = Oo.format,
    Io = Oo.formatRows;
    function Fo(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.blob()
    }
    var jo = function(t, n) {
        return fetch(t, n).then(Fo)
    };
    function Ho(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.arrayBuffer()
    }
    var Xo = function(t, n) {
        return fetch(t, n).then(Ho)
    };
    function Go(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.text()
    }
    var Vo = function(t, n) {
        return fetch(t, n).then(Go)
    };
    function $o(t) {
        return function(n, e, r) {
            return 2 === arguments.length && "function" == typeof e && (r = e, e = void 0),
            Vo(n, e).then(function(n) {
                return t(n, r)
            })
        }
    }
    function Wo(t, n, e, r) {
        3 === arguments.length && "function" == typeof e && (r = e, e = void 0);
        var i = Po(t);
        return Vo(n, e).then(function(t) {
            return i.parse(t, r)
        })
    }
    var Zo = $o(Ro),
    Qo = $o(qo),
    Jo = function(t, n) {
        return new Promise(function(e, r) {
            var i = new Image;
            for (var u in n) i[u] = n[u];
            i.onerror = r,
            i.onload = function() {
                e(i)
            },
            i.src = t
        })
    };
    function Ko(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.json()
    }
    var ta = function(t, n) {
        return fetch(t, n).then(Ko)
    };
    function na(t) {
        return function(n, e) {
            return Vo(n, e).then(function(n) {
                return (new DOMParser).parseFromString(n, t)
            })
        }
    }
    var ea = na("application/xml"),
    ra = na("text/html"),
    ia = na("image/svg+xml"),
    ua = function(t, n) {
        var e;
        function r() {
            var r, i, u = e.length,
            o = 0,
            a = 0;
            for (r = 0; r < u; ++r) o += (i = e[r]).x,
            a += i.y;
            for (o = o / u - t, a = a / u - n, r = 0; r < u; ++r)(i = e[r]).x -= o,
            i.y -= a
        }
        return null == t && (t = 0),
        null == n && (n = 0),
        r.initialize = function(t) {
            e = t
        },
        r.x = function(n) {
            return arguments.length ? (t = +n, r) : t
        },
        r.y = function(t) {
            return arguments.length ? (n = +t, r) : n
        },
        r
    },
    oa = function(t) {
        return function() {
            return t
        }
    },
    aa = function() {
        return 1e-6 * (Math.random() - .5)
    };
    function ca(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t;
        var i, u, o, a, c, f, s, l, h, d = t._root,
        p = {
            data: r
        },
        v = t._x0,
        g = t._y0,
        y = t._x1,
        b = t._y1;
        if (!d) return t._root = p,
        t;
        for (; d.length;) if ((f = n >= (u = (v + y) / 2)) ? v = u: y = u, (s = e >= (o = (g + b) / 2)) ? g = o: b = o, i = d, !(d = d[l = s << 1 | f])) return i[l] = p,
        t;
        if (a = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === a && e === c) return p.next = d,
        i ? i[l] = p: t._root = p,
        t;
        do {
            i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (u = (v + y) / 2)) ? v = u: y = u, (s = e >= (o = (g + b) / 2)) ? g = o: b = o
        } while (( l = s << 1 | f ) == (h = (c >= o) << 1 | a >= u));
        return i[h] = d,
        i[l] = p,
        t
    }
    var fa = function(t, n, e, r, i) {
        this.node = t,
        this.x0 = n,
        this.y0 = e,
        this.x1 = r,
        this.y1 = i
    };
    function sa(t) {
        return t[0]
    }
    function la(t) {
        return t[1]
    }
    function ha(t, n, e) {
        var r = new da(null == n ? sa: n, null == e ? la: e, NaN, NaN, NaN, NaN);
        return null == t ? r: r.addAll(t)
    }
    function da(t, n, e, r, i, u) {
        this._x = t,
        this._y = n,
        this._x0 = e,
        this._y0 = r,
        this._x1 = i,
        this._y1 = u,
        this._root = void 0
    }
    function pa(t) {
        for (var n = {
            data: t.data
        },
        e = n; t = t.next;) e = e.next = {
            data: t.data
        };
        return n
    }
    var va = ha.prototype = da.prototype;
    function ga(t) {
        return t.x + t.vx
    }
    function ya(t) {
        return t.y + t.vy
    }
    va.copy = function() {
        var t, n, e = new da(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;
        if (!r) return e;
        if (!r.length) return e._root = pa(r),
        e;
        for (t = [{
            source: r,
            target: e._root = new Array(4)
        }]; r = t.pop();) for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
            source: n,
            target: r.target[i] = new Array(4)
        }) : r.target[i] = pa(n));
        return e
    },
    va.add = function(t) {
        var n = +this._x.call(null, t),
        e = +this._y.call(null, t);
        return ca(this.cover(n, e), n, e, t)
    },
    va.addAll = function(t) {
        var n, e, r, i, u = t.length,
        o = new Array(u),
        a = new Array(u),
        c = 1 / 0,
        f = 1 / 0,
        s = -1 / 0,
        l = -1 / 0;
        for (e = 0; e < u; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (o[e] = r, a[e] = i, r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i));
        for (s < c && (c = this._x0, s = this._x1), l < f && (f = this._y0, l = this._y1), this.cover(c, f).cover(s, l), e = 0; e < u; ++e) ca(this, o[e], a[e], t[e]);
        return this
    },
    va.cover = function(t, n) {
        if (isNaN(t = +t) || isNaN(n = +n)) return this;
        var e = this._x0,
        r = this._y0,
        i = this._x1,
        u = this._y1;
        if (isNaN(e)) i = (e = Math.floor(t)) + 1,
        u = (r = Math.floor(n)) + 1;
        else {
            if (! (e > t || t > i || r > n || n > u)) return this;
            var o, a, c = i - e,
            f = this._root;
            switch (a = (n < (r + u) / 2) << 1 | t < (e + i) / 2) {
            case 0:
                do { (o = new Array(4))[a] = f, f = o
                } while ( u = r + ( c *= 2 ), t > (i = e + c) || n > u);
                break;
            case 1:
                do { (o = new Array(4))[a] = f, f = o
                } while ( u = r + ( c *= 2 ), (e = i - c) > t || n > u);
                break;
            case 2:
                do { (o = new Array(4))[a] = f, f = o
                } while ( r = u - ( c *= 2 ), t > (i = e + c) || r > n);
                break;
            case 3:
                do { (o = new Array(4))[a] = f, f = o
                } while ( r = u - ( c *= 2 ), (e = i - c) > t || r > n)
            }
            this._root && this._root.length && (this._root = f)
        }
        return this._x0 = e,
        this._y0 = r,
        this._x1 = i,
        this._y1 = u,
        this
    },
    va.data = function() {
        var t = [];
        return this.visit(function(n) {
            if (!n.length) do {
                t.push(n.data)
            } while ( n = n . next )
        }),
        t
    },
    va.extent = function(t) {
        return arguments.length ? this.cover( + t[0][0], +t[0][1]).cover( + t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
    },
    va.find = function(t, n, e) {
        var r, i, u, o, a, c, f, s = this._x0,
        l = this._y0,
        h = this._x1,
        d = this._y1,
        p = [],
        v = this._root;
        for (v && p.push(new fa(v, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = p.pop();) if (! (! (v = c.node) || (i = c.x0) > h || (u = c.y0) > d || (o = c.x1) < s || (a = c.y1) < l)) if (v.length) {
            var g = (i + o) / 2,
            y = (u + a) / 2;
            p.push(new fa(v[3], g, y, o, a), new fa(v[2], i, y, g, a), new fa(v[1], g, u, o, y), new fa(v[0], i, u, g, y)),
            (f = (n >= y) << 1 | t >= g) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c)
        } else {
            var b = t - +this._x.call(null, v.data),
            _ = n - +this._y.call(null, v.data),
            m = b * b + _ * _;
            if (m < e) {
                var x = Math.sqrt(e = m);
                s = t - x,
                l = n - x,
                h = t + x,
                d = n + x,
                r = v.data
            }
        }
        return r
    },
    va.remove = function(t) {
        if (isNaN(u = +this._x.call(null, t)) || isNaN(o = +this._y.call(null, t))) return this;
        var n, e, r, i, u, o, a, c, f, s, l, h, d = this._root,
        p = this._x0,
        v = this._y0,
        g = this._x1,
        y = this._y1;
        if (!d) return this;
        if (d.length) for (;;) {
            if ((f = u >= (a = (p + g) / 2)) ? p = a: g = a, (s = o >= (c = (v + y) / 2)) ? v = c: y = c, n = d, !(d = d[l = s << 1 | f])) return this;
            if (!d.length) break; (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
        }
        for (; d.data !== t;) if (r = d, !(d = d.next)) return this;
        return (i = d.next) && delete d.next,
        r ? (i ? r.next = i: delete r.next, this) : n ? (i ? n[l] = i: delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d: this._root = d), this) : (this._root = i, this)
    },
    va.removeAll = function(t) {
        for (var n = 0,
        e = t.length; n < e; ++n) this.remove(t[n]);
        return this
    },
    va.root = function() {
        return this._root
    },
    va.size = function() {
        var t = 0;
        return this.visit(function(n) {
            if (!n.length) do {++t
            } while ( n = n . next )
        }),
        t
    },
    va.visit = function(t) {
        var n, e, r, i, u, o, a = [],
        c = this._root;
        for (c && a.push(new fa(c, this._x0, this._y0, this._x1, this._y1)); n = a.pop();) if (!t(c = n.node, r = n.x0, i = n.y0, u = n.x1, o = n.y1) && c.length) {
            var f = (r + u) / 2,
            s = (i + o) / 2; (e = c[3]) && a.push(new fa(e, f, s, u, o)),
            (e = c[2]) && a.push(new fa(e, r, s, f, o)),
            (e = c[1]) && a.push(new fa(e, f, i, u, s)),
            (e = c[0]) && a.push(new fa(e, r, i, f, s))
        }
        return this
    },
    va.visitAfter = function(t) {
        var n, e = [],
        r = [];
        for (this._root && e.push(new fa(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
            var i = n.node;
            if (i.length) {
                var u, o = n.x0,
                a = n.y0,
                c = n.x1,
                f = n.y1,
                s = (o + c) / 2,
                l = (a + f) / 2; (u = i[0]) && e.push(new fa(u, o, a, s, l)),
                (u = i[1]) && e.push(new fa(u, s, a, c, l)),
                (u = i[2]) && e.push(new fa(u, o, l, s, f)),
                (u = i[3]) && e.push(new fa(u, s, l, c, f))
            }
            r.push(n)
        }
        for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
        return this
    },
    va.x = function(t) {
        return arguments.length ? (this._x = t, this) : this._x
    },
    va.y = function(t) {
        return arguments.length ? (this._y = t, this) : this._y
    };
    var ba = function(t) {
        var n, e, r = 1,
        i = 1;
        function u() {
            for (var t, u, a, c, f, s, l, h = n.length,
            d = 0; d < i; ++d) for (u = ha(n, ga, ya).visitAfter(o), t = 0; t < h; ++t) a = n[t],
            s = e[a.index],
            l = s * s,
            c = a.x + a.vx,
            f = a.y + a.vy,
            u.visit(p);
            function p(t, n, e, i, u) {
                var o = t.data,
                h = t.r,
                d = s + h;
                if (!o) return n > c + d || i < c - d || e > f + d || u < f - d;
                if (o.index > a.index) {
                    var p = c - o.x - o.vx,
                    v = f - o.y - o.vy,
                    g = p * p + v * v;
                    g < d * d && (0 === p && (g += (p = aa()) * p), 0 === v && (g += (v = aa()) * v), g = (d - (g = Math.sqrt(g))) / g * r, a.vx += (p *= g) * (d = (h *= h) / (l + h)), a.vy += (v *= g) * d, o.vx -= p * (d = 1 - d), o.vy -= v * d)
                }
            }
        }
        function o(t) {
            if (t.data) return t.r = e[t.data.index];
            for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r)
        }
        function a() {
            if (n) {
                var r, i, u = n.length;
                for (e = new Array(u), r = 0; r < u; ++r) i = n[r],
                e[i.index] = +t(i, r, n)
            }
        }
        return "function" != typeof t && (t = oa(null == t ? 1 : +t)),
        u.initialize = function(t) {
            n = t,
            a()
        },
        u.iterations = function(t) {
            return arguments.length ? (i = +t, u) : i
        },
        u.strength = function(t) {
            return arguments.length ? (r = +t, u) : r
        },
        u.radius = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n: oa( + n), a(), u) : t
        },
        u
    };
    function _a(t) {
        return t.index
    }
    function ma(t, n) {
        var e = t.get(n);
        if (!e) throw new Error("missing: " + n);
        return e
    }
    var xa = function(t) {
        var n, e, r, i, u, o = _a,
        a = function(t) {
            return 1 / Math.min(i[t.source.index], i[t.target.index])
        },
        c = oa(30),
        f = 1;
        function s(r) {
            for (var i = 0,
            o = t.length; i < f; ++i) for (var a, c, s, l, h, d, p, v = 0; v < o; ++v) c = (a = t[v]).source,
            l = (s = a.target).x + s.vx - c.x - c.vx || aa(),
            h = s.y + s.vy - c.y - c.vy || aa(),
            l *= d = ((d = Math.sqrt(l * l + h * h)) - e[v]) / d * r * n[v],
            h *= d,
            s.vx -= l * (p = u[v]),
            s.vy -= h * p,
            c.vx += l * (p = 1 - p),
            c.vy += h * p
        }
        function l() {
            if (r) {
                var a, c, f = r.length,
                s = t.length,
                l = Wu(r, o);
                for (a = 0, i = new Array(f); a < s; ++a)(c = t[a]).index = a,
                "object" != typeof c.source && (c.source = ma(l, c.source)),
                "object" != typeof c.target && (c.target = ma(l, c.target)),
                i[c.source.index] = (i[c.source.index] || 0) + 1,
                i[c.target.index] = (i[c.target.index] || 0) + 1;
                for (a = 0, u = new Array(s); a < s; ++a) c = t[a],
                u[a] = i[c.source.index] / (i[c.source.index] + i[c.target.index]);
                n = new Array(s),
                h(),
                e = new Array(s),
                d()
            }
        }
        function h() {
            if (r) for (var e = 0,
            i = t.length; e < i; ++e) n[e] = +a(t[e], e, t)
        }
        function d() {
            if (r) for (var n = 0,
            i = t.length; n < i; ++n) e[n] = +c(t[n], n, t)
        }
        return null == t && (t = []),
        s.initialize = function(t) {
            r = t,
            l()
        },
        s.links = function(n) {
            return arguments.length ? (t = n, l(), s) : t
        },
        s.id = function(t) {
            return arguments.length ? (o = t, s) : o
        },
        s.iterations = function(t) {
            return arguments.length ? (f = +t, s) : f
        },
        s.strength = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t: oa( + t), h(), s) : a
        },
        s.distance = function(t) {
            return arguments.length ? (c = "function" == typeof t ? t: oa( + t), d(), s) : c
        },
        s
    };
    function wa(t) {
        return t.x
    }
    function Ma(t) {
        return t.y
    }
    var Aa = 10,
    Sa = Math.PI * (3 - Math.sqrt(5)),
    ka = function(t) {
        var n, e = 1,
        r = .001,
        i = 1 - Math.pow(r, 1 / 300),
        u = 0,
        o = .6,
        a = Wu(),
        c = Lr(s),
        f = ht("tick", "end");
        function s() {
            l(),
            f.call("tick", n),
            e < r && (c.stop(), f.call("end", n))
        }
        function l() {
            var n, r, c = t.length;
            for (e += (u - e) * i, a.each(function(t) {
                t(e)
            }), n = 0; n < c; ++n) null == (r = t[n]).fx ? r.x += r.vx *= o: (r.x = r.fx, r.vx = 0),
            null == r.fy ? r.y += r.vy *= o: (r.y = r.fy, r.vy = 0)
        }
        function h() {
            for (var n, e = 0,
            r = t.length; e < r; ++e) {
                if ((n = t[e]).index = e, isNaN(n.x) || isNaN(n.y)) {
                    var i = Aa * Math.sqrt(e),
                    u = e * Sa;
                    n.x = i * Math.cos(u),
                    n.y = i * Math.sin(u)
                } (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
            }
        }
        function d(n) {
            return n.initialize && n.initialize(t),
            n
        }
        return null == t && (t = []),
        h(),
        n = {
            tick: l,
            restart: function() {
                return c.restart(s),
                n
            },
            stop: function() {
                return c.stop(),
                n
            },
            nodes: function(e) {
                return arguments.length ? (t = e, h(), a.each(d), n) : t
            },
            alpha: function(t) {
                return arguments.length ? (e = +t, n) : e
            },
            alphaMin: function(t) {
                return arguments.length ? (r = +t, n) : r
            },
            alphaDecay: function(t) {
                return arguments.length ? (i = +t, n) : +i
            },
            alphaTarget: function(t) {
                return arguments.length ? (u = +t, n) : u
            },
            velocityDecay: function(t) {
                return arguments.length ? (o = 1 - t, n) : 1 - o
            },
            force: function(t, e) {
                return arguments.length > 1 ? (null == e ? a.remove(t) : a.set(t, d(e)), n) : a.get(t)
            },
            find: function(n, e, r) {
                var i, u, o, a, c, f = 0,
                s = t.length;
                for (null == r ? r = 1 / 0 : r *= r, f = 0; f < s; ++f)(o = (i = n - (a = t[f]).x) * i + (u = e - a.y) * u) < r && (c = a, r = o);
                return c
            },
            on: function(t, e) {
                return arguments.length > 1 ? (f.on(t, e), n) : f.on(t)
            }
        }
    },
    Ta = function() {
        var t, n, e, r, i = oa( - 30),
        u = 1,
        o = 1 / 0,
        a = .81;
        function c(r) {
            var i, u = t.length,
            o = ha(t, wa, Ma).visitAfter(s);
            for (e = r, i = 0; i < u; ++i) n = t[i],
            o.visit(l)
        }
        function f() {
            if (t) {
                var n, e, u = t.length;
                for (r = new Array(u), n = 0; n < u; ++n) e = t[n],
                r[e.index] = +i(e, n, t)
            }
        }
        function s(t) {
            var n, e, i, u, o, a = 0,
            c = 0;
            if (t.length) {
                for (i = u = o = 0; o < 4; ++o)(n = t[o]) && (e = Math.abs(n.value)) && (a += n.value, c += e, i += e * n.x, u += e * n.y);
                t.x = i / c,
                t.y = u / c
            } else { (n = t).x = n.data.x,
                n.y = n.data.y;
                do {
                    a += r[n.data.index]
                } while ( n = n . next )
            }
            t.value = a
        }
        function l(t, i, c, f) {
            if (!t.value) return ! 0;
            var s = t.x - n.x,
            l = t.y - n.y,
            h = f - i,
            d = s * s + l * l;
            if (h * h / a < d) return d < o && (0 === s && (d += (s = aa()) * s), 0 === l && (d += (l = aa()) * l), d < u && (d = Math.sqrt(u * d)), n.vx += s * t.value * e / d, n.vy += l * t.value * e / d),
            !0;
            if (! (t.length || d >= o)) { (t.data !== n || t.next) && (0 === s && (d += (s = aa()) * s), 0 === l && (d += (l = aa()) * l), d < u && (d = Math.sqrt(u * d)));
                do {
                    t.data !== n && (h = r[t.data.index] * e / d, n.vx += s * h, n.vy += l * h)
                } while ( t = t . next )
            }
        }
        return c.initialize = function(n) {
            t = n,
            f()
        },
        c.strength = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t: oa( + t), f(), c) : i
        },
        c.distanceMin = function(t) {
            return arguments.length ? (u = t * t, c) : Math.sqrt(u)
        },
        c.distanceMax = function(t) {
            return arguments.length ? (o = t * t, c) : Math.sqrt(o)
        },
        c.theta = function(t) {
            return arguments.length ? (a = t * t, c) : Math.sqrt(a)
        },
        c
    },
    Na = function(t, n, e) {
        var r, i, u, o = oa(.1);
        function a(t) {
            for (var o = 0,
            a = r.length; o < a; ++o) {
                var c = r[o],
                f = c.x - n || 1e-6,
                s = c.y - e || 1e-6,
                l = Math.sqrt(f * f + s * s),
                h = (u[o] - l) * i[o] * t / l;
                c.vx += f * h,
                c.vy += s * h
            }
        }
        function c() {
            if (r) {
                var n, e = r.length;
                for (i = new Array(e), u = new Array(e), n = 0; n < e; ++n) u[n] = +t(r[n], n, r),
                i[n] = isNaN(u[n]) ? 0 : +o(r[n], n, r)
            }
        }
        return "function" != typeof t && (t = oa( + t)),
        null == n && (n = 0),
        null == e && (e = 0),
        a.initialize = function(t) {
            r = t,
            c()
        },
        a.strength = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t: oa( + t), c(), a) : o
        },
        a.radius = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n: oa( + n), c(), a) : t
        },
        a.x = function(t) {
            return arguments.length ? (n = +t, a) : n
        },
        a.y = function(t) {
            return arguments.length ? (e = +t, a) : e
        },
        a
    },
    Ea = function(t) {
        var n, e, r, i = oa(.1);
        function u(t) {
            for (var i, u = 0,
            o = n.length; u < o; ++u)(i = n[u]).vx += (r[u] - i.x) * e[u] * t
        }
        function o() {
            if (n) {
                var u, o = n.length;
                for (e = new Array(o), r = new Array(o), u = 0; u < o; ++u) e[u] = isNaN(r[u] = +t(n[u], u, n)) ? 0 : +i(n[u], u, n)
            }
        }
        return "function" != typeof t && (t = oa(null == t ? 0 : +t)),
        u.initialize = function(t) {
            n = t,
            o()
        },
        u.strength = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t: oa( + t), o(), u) : i
        },
        u.x = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n: oa( + n), o(), u) : t
        },
        u
    },
    Ca = function(t) {
        var n, e, r, i = oa(.1);
        function u(t) {
            for (var i, u = 0,
            o = n.length; u < o; ++u)(i = n[u]).vy += (r[u] - i.y) * e[u] * t
        }
        function o() {
            if (n) {
                var u, o = n.length;
                for (e = new Array(o), r = new Array(o), u = 0; u < o; ++u) e[u] = isNaN(r[u] = +t(n[u], u, n)) ? 0 : +i(n[u], u, n)
            }
        }
        return "function" != typeof t && (t = oa(null == t ? 0 : +t)),
        u.initialize = function(t) {
            n = t,
            o()
        },
        u.strength = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t: oa( + t), o(), u) : i
        },
        u.y = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n: oa( + n), o(), u) : t
        },
        u
    },
    Pa = function(t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var e, r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
    },
    za = function(t) {
        return (t = Pa(Math.abs(t))) ? t[1] : NaN
    },
    Ra = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function La(t) {
        return new Da(t)
    }
    function Da(t) {
        if (! (n = Ra.exec(t))) throw new Error("invalid format: " + t);
        var n;
        this.fill = n[1] || " ",
        this.align = n[2] || ">",
        this.sign = n[3] || "-",
        this.symbol = n[4] || "",
        this.zero = !!n[5],
        this.width = n[6] && +n[6],
        this.comma = !!n[7],
        this.precision = n[8] && +n[8].slice(1),
        this.trim = !!n[9],
        this.type = n[10] || ""
    }
    La.prototype = Da.prototype,
    Da.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0": "") + (null == this.width ? "": Math.max(1, 0 | this.width)) + (this.comma ? ",": "") + (null == this.precision ? "": "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~": "") + this.type
    };
    var Ua, Oa, qa, Ya, Ba = function(t) {
        t: for (var n, e = t.length,
        r = 1,
        i = -1; r < e; ++r) switch (t[r]) {
        case ".":
            i = n = r;
            break;
        case "0":
            0 === i && (i = r),
            n = r;
            break;
        default:
            if (i > 0) {
                if (!+t[r]) break t;
                i = 0
            }
        }
        return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
    },
    Ia = function(t, n) {
        var e = Pa(t, n);
        if (!e) return t + "";
        var r = e[0],
        i = e[1];
        return i < 0 ? "0." + new Array( - i).join("0") + r: r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
    },
    Fa = {
        "%": function(t, n) {
            return (100 * t).toFixed(n)
        },
        b: function(t) {
            return Math.round(t).toString(2)
        },
        c: function(t) {
            return t + ""
        },
        d: function(t) {
            return Math.round(t).toString(10)
        },
        e: function(t, n) {
            return t.toExponential(n)
        },
        f: function(t, n) {
            return t.toFixed(n)
        },
        g: function(t, n) {
            return t.toPrecision(n)
        },
        o: function(t) {
            return Math.round(t).toString(8)
        },
        p: function(t, n) {
            return Ia(100 * t, n)
        },
        r: Ia,
        s: function(t, n) {
            var e = Pa(t, n);
            if (!e) return t + "";
            var r = e[0],
            i = e[1],
            u = i - (Ua = 3 * Math.max( - 8, Math.min(8, Math.floor(i / 3)))) + 1,
            o = r.length;
            return u === o ? r: u > o ? r + new Array(u - o + 1).join("0") : u > 0 ? r.slice(0, u) + "." + r.slice(u) : "0." + new Array(1 - u).join("0") + Pa(t, Math.max(0, n + u - 1))[0]
        },
        X: function(t) {
            return Math.round(t).toString(16).toUpperCase()
        },
        x: function(t) {
            return Math.round(t).toString(16)
        }
    },
    ja = function(t) {
        return t
    },
    Ha = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
    Xa = function(t) {
        var n = t.grouping && t.thousands ?
        function(t, n) {
            return function(e, r) {
                for (var i = e.length,
                u = [], o = 0, a = t[0], c = 0; i > 0 && a > 0 && (c + a + 1 > r && (a = Math.max(1, r - c)), u.push(e.substring(i -= a, i + a)), !((c += a + 1) > r));) a = t[o = (o + 1) % t.length];
                return u.reverse().join(n)
            }
        } (t.grouping, t.thousands) : ja,
        e = t.currency,
        r = t.decimal,
        i = t.numerals ?
        function(t) {
            return function(n) {
                return n.replace(/[0-9]/g,
                function(n) {
                    return t[ + n]
                })
            }
        } (t.numerals) : ja,
        u = t.percent || "%";
        function o(t) {
            var o = (t = La(t)).fill,
            a = t.align,
            c = t.sign,
            f = t.symbol,
            s = t.zero,
            l = t.width,
            h = t.comma,
            d = t.precision,
            p = t.trim,
            v = t.type;
            "n" === v ? (h = !0, v = "g") : Fa[v] || (null == d && (d = 12), p = !0, v = "g"),
            (s || "0" === o && "=" === a) && (s = !0, o = "0", a = "=");
            var g = "$" === f ? e[0] : "#" === f && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "",
            y = "$" === f ? e[1] : /[%p]/.test(v) ? u: "",
            b = Fa[v],
            _ = /[defgprs%]/.test(v);
            function m(t) {
                var e, u, f, m = g,
                x = y;
                if ("c" === v) x = b(t) + x,
                t = "";
                else {
                    var w = (t = +t) < 0;
                    if (t = b(Math.abs(t), d), p && (t = Ba(t)), w && 0 == +t && (w = !1), m = (w ? "(" === c ? c: "-": "-" === c || "(" === c ? "": c) + m, x = ("s" === v ? Ha[8 + Ua / 3] : "") + x + (w && "(" === c ? ")": ""), _) for (e = -1, u = t.length; ++e < u;) if (48 > (f = t.charCodeAt(e)) || f > 57) {
                        x = (46 === f ? r + t.slice(e + 1) : t.slice(e)) + x,
                        t = t.slice(0, e);
                        break
                    }
                }
                h && !s && (t = n(t, 1 / 0));
                var M = m.length + t.length + x.length,
                A = M < l ? new Array(l - M + 1).join(o) : "";
                switch (h && s && (t = n(A + t, A.length ? l - x.length: 1 / 0), A = ""), a) {
                case "<":
                    t = m + t + x + A;
                    break;
                case "=":
                    t = m + A + t + x;
                    break;
                case "^":
                    t = A.slice(0, M = A.length >> 1) + m + t + x + A.slice(M);
                    break;
                default:
                    t = A + m + t + x
                }
                return i(t)
            }
            return d = null == d ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)),
            m.toString = function() {
                return t + ""
            },
            m
        }
        return {
            format: o,
            formatPrefix: function(t, n) {
                var e = o(((t = La(t)).type = "f", t)),
                r = 3 * Math.max( - 8, Math.min(8, Math.floor(za(n) / 3))),
                i = Math.pow(10, -r),
                u = Ha[8 + r / 3];
                return function(t) {
                    return e(i * t) + u
                }
            }
        }
    };
    function Ga(t) {
        return Oa = Xa(t),
        qa = Oa.format,
        Ya = Oa.formatPrefix,
        Oa
    }
    Ga({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    });
    var Va = function(t) {
        return Math.max(0, -za(Math.abs(t)))
    },
    $a = function(t, n) {
        return Math.max(0, 3 * Math.max( - 8, Math.min(8, Math.floor(za(n) / 3))) - za(Math.abs(t)))
    },
    Wa = function(t, n) {
        return t = Math.abs(t),
        n = Math.abs(n) - t,
        Math.max(0, za(n) - za(t)) + 1
    },
    Za = function() {
        return new Qa
    };
    function Qa() {
        this.reset()
    }
    Qa.prototype = {
        constructor: Qa,
        reset: function() {
            this.s = this.t = 0
        },
        add: function(t) {
            Ka(Ja, t, this.t),
            Ka(this, Ja.s, this.s),
            this.s ? this.t += Ja.t: this.s = Ja.t
        },
        valueOf: function() {
            return this.s
        }
    };
    var Ja = new Qa;
    function Ka(t, n, e) {
        var r = t.s = n + e,
        i = r - n,
        u = r - i;
        t.t = n - u + (e - i)
    }
    var tc = 1e-6,
    nc = Math.PI,
    ec = nc / 2,
    rc = nc / 4,
    ic = 2 * nc,
    uc = 180 / nc,
    oc = nc / 180,
    ac = Math.abs,
    cc = Math.atan,
    fc = Math.atan2,
    sc = Math.cos,
    lc = Math.ceil,
    hc = Math.exp,
    dc = (Math.floor, Math.log),
    pc = Math.pow,
    vc = Math.sin,
    gc = Math.sign ||
    function(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0
    },
    yc = Math.sqrt,
    bc = Math.tan;
    function _c(t) {
        return t > 1 ? 0 : t < -1 ? nc: Math.acos(t)
    }
    function mc(t) {
        return t > 1 ? ec: t < -1 ? -ec: Math.asin(t)
    }
    function xc(t) {
        return (t = vc(t / 2)) * t
    }
    function wc() {}
    function Mc(t, n) {
        t && Sc.hasOwnProperty(t.type) && Sc[t.type](t, n)
    }
    var Ac = {
        Feature: function(t, n) {
            Mc(t.geometry, n)
        },
        FeatureCollection: function(t, n) {
            for (var e = t.features,
            r = -1,
            i = e.length; ++r < i;) Mc(e[r].geometry, n)
        }
    },
    Sc = {
        Sphere: function(t, n) {
            n.sphere()
        },
        Point: function(t, n) {
            t = t.coordinates,
            n.point(t[0], t[1], t[2])
        },
        MultiPoint: function(t, n) {
            for (var e = t.coordinates,
            r = -1,
            i = e.length; ++r < i;) t = e[r],
            n.point(t[0], t[1], t[2])
        },
        LineString: function(t, n) {
            kc(t.coordinates, n, 0)
        },
        MultiLineString: function(t, n) {
            for (var e = t.coordinates,
            r = -1,
            i = e.length; ++r < i;) kc(e[r], n, 0)
        },
        Polygon: function(t, n) {
            Tc(t.coordinates, n)
        },
        MultiPolygon: function(t, n) {
            for (var e = t.coordinates,
            r = -1,
            i = e.length; ++r < i;) Tc(e[r], n)
        },
        GeometryCollection: function(t, n) {
            for (var e = t.geometries,
            r = -1,
            i = e.length; ++r < i;) Mc(e[r], n)
        }
    };
    function kc(t, n, e) {
        var r, i = -1,
        u = t.length - e;
        for (n.lineStart(); ++i < u;) r = t[i],
        n.point(r[0], r[1], r[2]);
        n.lineEnd()
    }
    function Tc(t, n) {
        var e = -1,
        r = t.length;
        for (n.polygonStart(); ++e < r;) kc(t[e], n, 1);
        n.polygonEnd()
    }
    var Nc, Ec, Cc, Pc, zc, Rc = function(t, n) {
        t && Ac.hasOwnProperty(t.type) ? Ac[t.type](t, n) : Mc(t, n)
    },
    Lc = Za(),
    Dc = Za(),
    Uc = {
        point: wc,
        lineStart: wc,
        lineEnd: wc,
        polygonStart: function() {
            Lc.reset(),
            Uc.lineStart = Oc,
            Uc.lineEnd = qc
        },
        polygonEnd: function() {
            var t = +Lc;
            Dc.add(t < 0 ? ic + t: t),
            this.lineStart = this.lineEnd = this.point = wc
        },
        sphere: function() {
            Dc.add(ic)
        }
    };
    function Oc() {
        Uc.point = Yc
    }
    function qc() {
        Bc(Nc, Ec)
    }
    function Yc(t, n) {
        Uc.point = Bc,
        Nc = t,
        Ec = n,
        Cc = t *= oc,
        Pc = sc(n = (n *= oc) / 2 + rc),
        zc = vc(n)
    }
    function Bc(t, n) {
        n = (n *= oc) / 2 + rc;
        var e = (t *= oc) - Cc,
        r = e >= 0 ? 1 : -1,
        i = r * e,
        u = sc(n),
        o = vc(n),
        a = zc * o,
        c = Pc * u + a * sc(i),
        f = a * r * vc(i);
        Lc.add(fc(f, c)),
        Cc = t,
        Pc = u,
        zc = o
    }
    var Ic = function(t) {
        return Dc.reset(),
        Rc(t, Uc),
        2 * Dc
    };
    function Fc(t) {
        return [fc(t[1], t[0]), mc(t[2])]
    }
    function jc(t) {
        var n = t[0],
        e = t[1],
        r = sc(e);
        return [r * sc(n), r * vc(n), vc(e)]
    }
    function Hc(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }
    function Xc(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }
    function Gc(t, n) {
        t[0] += n[0],
        t[1] += n[1],
        t[2] += n[2]
    }
    function Vc(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n]
    }
    function $c(t) {
        var n = yc(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n,
        t[1] /= n,
        t[2] /= n
    }
    var Wc, Zc, Qc, Jc, Kc, tf, nf, ef, rf, uf, of = Za(),
    af = {
        point: cf,
        lineStart: sf,
        lineEnd: lf,
        polygonStart: function() {
            af.point = hf,
            af.lineStart = df,
            af.lineEnd = pf,
            of.reset(),
            Uc.polygonStart()
        },
        polygonEnd: function() {
            Uc.polygonEnd(),
            af.point = cf,
            af.lineStart = sf,
            af.lineEnd = lf,
            Lc < 0 ? (Wc = -(Qc = 180), Zc = -(Jc = 90)) : of > tc ? Jc = 90 : of < -tc && (Zc = -90),
            uf[0] = Wc,
            uf[1] = Qc
        }
    };
    function cf(t, n) {
        rf.push(uf = [Wc = t, Qc = t]),
        n < Zc && (Zc = n),
        n > Jc && (Jc = n)
    }
    function ff(t, n) {
        var e = jc([t * oc, n * oc]);
        if (ef) {
            var r = Xc(ef, e),
            i = Xc([r[1], -r[0], 0], r);
            $c(i),
            i = Fc(i);
            var u, o = t - Kc,
            a = o > 0 ? 1 : -1,
            c = i[0] * uc * a,
            f = ac(o) > 180;
            f ^ (a * Kc < c && c < a * t) ? (u = i[1] * uc) > Jc && (Jc = u) : f ^ (a * Kc < (c = (c + 360) % 360 - 180) && c < a * t) ? (u = -i[1] * uc) < Zc && (Zc = u) : (n < Zc && (Zc = n), n > Jc && (Jc = n)),
            f ? t < Kc ? vf(Wc, t) > vf(Wc, Qc) && (Qc = t) : vf(t, Qc) > vf(Wc, Qc) && (Wc = t) : Qc >= Wc ? (t < Wc && (Wc = t), t > Qc && (Qc = t)) : t > Kc ? vf(Wc, t) > vf(Wc, Qc) && (Qc = t) : vf(t, Qc) > vf(Wc, Qc) && (Wc = t)
        } else rf.push(uf = [Wc = t, Qc = t]);
        n < Zc && (Zc = n),
        n > Jc && (Jc = n),
        ef = e,
        Kc = t
    }
    function sf() {
        af.point = ff
    }
    function lf() {
        uf[0] = Wc,
        uf[1] = Qc,
        af.point = cf,
        ef = null
    }
    function hf(t, n) {
        if (ef) {
            var e = t - Kc;
            of.add(ac(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
        } else tf = t,
        nf = n;
        Uc.point(t, n),
        ff(t, n)
    }
    function df() {
        Uc.lineStart()
    }
    function pf() {
        hf(tf, nf),
        Uc.lineEnd(),
        ac(of) > tc && (Wc = -(Qc = 180)),
        uf[0] = Wc,
        uf[1] = Qc,
        ef = null
    }
    function vf(t, n) {
        return (n -= t) < 0 ? n + 360 : n
    }
    function gf(t, n) {
        return t[0] - n[0]
    }
    function yf(t, n) {
        return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
    }
    var bf, _f, mf, xf, wf, Mf, Af, Sf, kf, Tf, Nf, Ef, Cf, Pf, zf, Rf, Lf = function(t) {
        var n, e, r, i, u, o, a;
        if (Jc = Qc = -(Wc = Zc = 1 / 0), rf = [], Rc(t, af), e = rf.length) {
            for (rf.sort(gf), n = 1, u = [r = rf[0]]; n < e; ++n) yf(r, (i = rf[n])[0]) || yf(r, i[1]) ? (vf(r[0], i[1]) > vf(r[0], r[1]) && (r[1] = i[1]), vf(i[0], r[1]) > vf(r[0], r[1]) && (r[0] = i[0])) : u.push(r = i);
            for (o = -1 / 0, n = 0, r = u[e = u.length - 1]; n <= e; r = i, ++n) i = u[n],
            (a = vf(r[1], i[0])) > o && (o = a, Wc = i[0], Qc = r[1])
        }
        return rf = uf = null,
        Wc === 1 / 0 || Zc === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[Wc, Zc], [Qc, Jc]]
    },
    Df = {
        sphere: wc,
        point: Uf,
        lineStart: qf,
        lineEnd: If,
        polygonStart: function() {
            Df.lineStart = Ff,
            Df.lineEnd = jf
        },
        polygonEnd: function() {
            Df.lineStart = qf,
            Df.lineEnd = If
        }
    };
    function Uf(t, n) {
        t *= oc;
        var e = sc(n *= oc);
        Of(e * sc(t), e * vc(t), vc(n))
    }
    function Of(t, n, e) {
        mf += (t - mf) / ++bf,
        xf += (n - xf) / bf,
        wf += (e - wf) / bf
    }
    function qf() {
        Df.point = Yf
    }
    function Yf(t, n) {
        t *= oc;
        var e = sc(n *= oc);
        Pf = e * sc(t),
        zf = e * vc(t),
        Rf = vc(n),
        Df.point = Bf,
        Of(Pf, zf, Rf)
    }
    function Bf(t, n) {
        t *= oc;
        var e = sc(n *= oc),
        r = e * sc(t),
        i = e * vc(t),
        u = vc(n),
        o = fc(yc((o = zf * u - Rf * i) * o + (o = Rf * r - Pf * u) * o + (o = Pf * i - zf * r) * o), Pf * r + zf * i + Rf * u);
        _f += o,
        Mf += o * (Pf + (Pf = r)),
        Af += o * (zf + (zf = i)),
        Sf += o * (Rf + (Rf = u)),
        Of(Pf, zf, Rf)
    }
    function If() {
        Df.point = Uf
    }
    function Ff() {
        Df.point = Hf
    }
    function jf() {
        Xf(Ef, Cf),
        Df.point = Uf
    }
    function Hf(t, n) {
        Ef = t,
        Cf = n,
        t *= oc,
        n *= oc,
        Df.point = Xf;
        var e = sc(n);
        Pf = e * sc(t),
        zf = e * vc(t),
        Rf = vc(n),
        Of(Pf, zf, Rf)
    }
    function Xf(t, n) {
        t *= oc;
        var e = sc(n *= oc),
        r = e * sc(t),
        i = e * vc(t),
        u = vc(n),
        o = zf * u - Rf * i,
        a = Rf * r - Pf * u,
        c = Pf * i - zf * r,
        f = yc(o * o + a * a + c * c),
        s = mc(f),
        l = f && -s / f;
        kf += l * o,
        Tf += l * a,
        Nf += l * c,
        _f += s,
        Mf += s * (Pf + (Pf = r)),
        Af += s * (zf + (zf = i)),
        Sf += s * (Rf + (Rf = u)),
        Of(Pf, zf, Rf)
    }
    var Gf = function(t) {
        bf = _f = mf = xf = wf = Mf = Af = Sf = kf = Tf = Nf = 0,
        Rc(t, Df);
        var n = kf,
        e = Tf,
        r = Nf,
        i = n * n + e * e + r * r;
        return i < 1e-12 && (n = Mf, e = Af, r = Sf, _f < tc && (n = mf, e = xf, r = wf), (i = n * n + e * e + r * r) < 1e-12) ? [NaN, NaN] : [fc(e, n) * uc, mc(r / yc(i)) * uc]
    },
    Vf = function(t) {
        return function() {
            return t
        }
    },
    $f = function(t, n) {
        function e(e, r) {
            return e = t(e, r),
            n(e[0], e[1])
        }
        return t.invert && n.invert && (e.invert = function(e, r) {
            return (e = n.invert(e, r)) && t.invert(e[0], e[1])
        }),
        e
    };
    function Wf(t, n) {
        return [t > nc ? t - ic: t < -nc ? t + ic: t, n]
    }
    function Zf(t, n, e) {
        return (t %= ic) ? n || e ? $f(Jf(t), Kf(n, e)) : Jf(t) : n || e ? Kf(n, e) : Wf
    }
    function Qf(t) {
        return function(n, e) {
            return [(n += t) > nc ? n - ic: n < -nc ? n + ic: n, e]
        }
    }
    function Jf(t) {
        var n = Qf(t);
        return n.invert = Qf( - t),
        n
    }
    function Kf(t, n) {
        var e = sc(t),
        r = vc(t),
        i = sc(n),
        u = vc(n);
        function o(t, n) {
            var o = sc(n),
            a = sc(t) * o,
            c = vc(t) * o,
            f = vc(n),
            s = f * e + a * r;
            return [fc(c * i - s * u, a * e - f * r), mc(s * i + c * u)]
        }
        return o.invert = function(t, n) {
            var o = sc(n),
            a = sc(t) * o,
            c = vc(t) * o,
            f = vc(n),
            s = f * i - c * u;
            return [fc(c * i + f * u, a * e + s * r), mc(s * e - a * r)]
        },
        o
    }
    Wf.invert = Wf;
    var ts = function(t) {
        function n(n) {
            return (n = t(n[0] * oc, n[1] * oc))[0] *= uc,
            n[1] *= uc,
            n
        }
        return t = Zf(t[0] * oc, t[1] * oc, t.length > 2 ? t[2] * oc: 0),
        n.invert = function(n) {
            return (n = t.invert(n[0] * oc, n[1] * oc))[0] *= uc,
            n[1] *= uc,
            n
        },
        n
    };
    function ns(t, n, e, r, i, u) {
        if (e) {
            var o = sc(n),
            a = vc(n),
            c = r * e;
            null == i ? (i = n + r * ic, u = n - c / 2) : (i = es(o, i), u = es(o, u), (r > 0 ? i < u: i > u) && (i += r * ic));
            for (var f, s = i; r > 0 ? s > u: s < u; s -= c) f = Fc([o, -a * sc(s), -a * vc(s)]),
            t.point(f[0], f[1])
        }
    }
    function es(t, n) { (n = jc(n))[0] -= t,
        $c(n);
        var e = _c( - n[1]);
        return (( - n[2] < 0 ? -e: e) + ic - tc) % ic
    }
    var rs = function() {
        var t, n, e = Vf([0, 0]),
        r = Vf(90),
        i = Vf(6),
        u = {
            point: function(e, r) {
                t.push(e = n(e, r)),
                e[0] *= uc,
                e[1] *= uc
            }
        };
        function o() {
            var o = e.apply(this, arguments),
            a = r.apply(this, arguments) * oc,
            c = i.apply(this, arguments) * oc;
            return t = [],
            n = Zf( - o[0] * oc, -o[1] * oc, 0).invert,
            ns(u, a, c, 1),
            o = {
                type: "Polygon",
                coordinates: [t]
            },
            t = n = null,
            o
        }
        return o.center = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t: Vf([ + t[0], +t[1]]), o) : e
        },
        o.radius = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t: Vf( + t), o) : r
        },
        o.precision = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t: Vf( + t), o) : i
        },
        o
    },
    is = function() {
        var t, n = [];
        return {
            point: function(n, e) {
                t.push([n, e])
            },
            lineStart: function() {
                n.push(t = [])
            },
            lineEnd: wc,
            rejoin: function() {
                n.length > 1 && n.push(n.pop().concat(n.shift()))
            },
            result: function() {
                var e = n;
                return n = [],
                t = null,
                e
            }
        }
    },
    us = function(t, n) {
        return ac(t[0] - n[0]) < tc && ac(t[1] - n[1]) < tc
    };
    function os(t, n, e, r) {
        this.x = t,
        this.z = n,
        this.o = e,
        this.e = r,
        this.v = !1,
        this.n = this.p = null
    }
    var as = function(t, n, e, r, i) {
        var u, o, a = [],
        c = [];
        if (t.forEach(function(t) {
            if (! ((n = t.length - 1) <= 0)) {
                var n, e, r = t[0],
                o = t[n];
                if (us(r, o)) {
                    for (i.lineStart(), u = 0; u < n; ++u) i.point((r = t[u])[0], r[1]);
                    i.lineEnd()
                } else a.push(e = new os(r, t, null, !0)),
                c.push(e.o = new os(r, null, e, !1)),
                a.push(e = new os(o, t, null, !1)),
                c.push(e.o = new os(o, null, e, !0))
            }
        }), a.length) {
            for (c.sort(n), cs(a), cs(c), u = 0, o = c.length; u < o; ++u) c[u].e = e = !e;
            for (var f, s, l = a[0];;) {
                for (var h = l,
                d = !0; h.v;) if ((h = h.n) === l) return;
                f = h.z,
                i.lineStart();
                do {
                    if (h.v = h.o.v = !0, h.e) {
                        if (d) for (u = 0, o = f.length; u < o; ++u) i.point((s = f[u])[0], s[1]);
                        else r(h.x, h.n.x, 1, i);
                        h = h.n
                    } else {
                        if (d) for (f = h.p.z, u = f.length - 1; u >= 0; --u) i.point((s = f[u])[0], s[1]);
                        else r(h.x, h.p.x, -1, i);
                        h = h.p
                    }
                    f = (h = h.o).z, d = !d
                } while (! h . v );
                i.lineEnd()
            }
        }
    };
    function cs(t) {
        if (n = t.length) {
            for (var n, e, r = 0,
            i = t[0]; ++r < n;) i.n = e = t[r],
            e.p = i,
            i = e;
            i.n = e = t[0],
            e.p = i
        }
    }
    var fs = Za(),
    ss = function(t, n) {
        var e = n[0],
        r = n[1],
        i = vc(r),
        u = [vc(e), -sc(e), 0],
        o = 0,
        a = 0;
        fs.reset(),
        1 === i ? r = ec + tc: -1 === i && (r = -ec - tc);
        for (var c = 0,
        f = t.length; c < f; ++c) if (l = (s = t[c]).length) for (var s, l, h = s[l - 1], d = h[0], p = h[1] / 2 + rc, v = vc(p), g = sc(p), y = 0; y < l; ++y, d = _, v = x, g = w, h = b) {
            var b = s[y],
            _ = b[0],
            m = b[1] / 2 + rc,
            x = vc(m),
            w = sc(m),
            M = _ - d,
            A = M >= 0 ? 1 : -1,
            S = A * M,
            k = S > nc,
            T = v * x;
            if (fs.add(fc(T * A * vc(S), g * w + T * sc(S))), o += k ? M + A * ic: M, k ^ d >= e ^ _ >= e) {
                var N = Xc(jc(h), jc(b));
                $c(N);
                var E = Xc(u, N);
                $c(E);
                var C = (k ^ M >= 0 ? -1 : 1) * mc(E[2]); (r > C || r === C && (N[0] || N[1])) && (a += k ^ M >= 0 ? 1 : -1)
            }
        }
        return (o < -tc || o < tc && fs < -tc) ^ 1 & a
    },
    ls = function(t, n, e, r) {
        return function(i) {
            var u, o, a, c = n(i),
            f = is(),
            s = n(f),
            l = !1,
            h = {
                point: d,
                lineStart: v,
                lineEnd: g,
                polygonStart: function() {
                    h.point = y,
                    h.lineStart = b,
                    h.lineEnd = _,
                    o = [],
                    u = []
                },
                polygonEnd: function() {
                    h.point = d,
                    h.lineStart = v,
                    h.lineEnd = g,
                    o = O(o);
                    var t = ss(u, r);
                    o.length ? (l || (i.polygonStart(), l = !0), as(o, ds, t, e, i)) : t && (l || (i.polygonStart(), l = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()),
                    l && (i.polygonEnd(), l = !1),
                    o = u = null
                },
                sphere: function() {
                    i.polygonStart(),
                    i.lineStart(),
                    e(null, null, 1, i),
                    i.lineEnd(),
                    i.polygonEnd()
                }
            };
            function d(n, e) {
                t(n, e) && i.point(n, e)
            }
            function p(t, n) {
                c.point(t, n)
            }
            function v() {
                h.point = p,
                c.lineStart()
            }
            function g() {
                h.point = d,
                c.lineEnd()
            }
            function y(t, n) {
                a.push([t, n]),
                s.point(t, n)
            }
            function b() {
                s.lineStart(),
                a = []
            }
            function _() {
                y(a[0][0], a[0][1]),
                s.lineEnd();
                var t, n, e, r, c = s.clean(),
                h = f.result(),
                d = h.length;
                if (a.pop(), u.push(a), a = null, d) if (1 & c) {
                    if ((n = (e = h[0]).length - 1) > 0) {
                        for (l || (i.polygonStart(), l = !0), i.lineStart(), t = 0; t < n; ++t) i.point((r = e[t])[0], r[1]);
                        i.lineEnd()
                    }
                } else d > 1 && 2 & c && h.push(h.pop().concat(h.shift())),
                o.push(h.filter(hs))
            }
            return h
        }
    };
    function hs(t) {
        return t.length > 1
    }
    function ds(t, n) {
        return ((t = t.x)[0] < 0 ? t[1] - ec - tc: ec - t[1]) - ((n = n.x)[0] < 0 ? n[1] - ec - tc: ec - n[1])
    }
    var ps = ls(function() {
        return ! 0
    },
    function(t) {
        var n, e = NaN,
        r = NaN,
        i = NaN;
        return {
            lineStart: function() {
                t.lineStart(),
                n = 1
            },
            point: function(u, o) {
                var a = u > 0 ? nc: -nc,
                c = ac(u - e);
                ac(c - nc) < tc ? (t.point(e, r = (r + o) / 2 > 0 ? ec: -ec), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(u, r), n = 0) : i !== a && c >= nc && (ac(e - i) < tc && (e -= i * tc), ac(u - a) < tc && (u -= a * tc), r = function(t, n, e, r) {
                    var i, u, o = vc(t - e);
                    return ac(o) > tc ? cc((vc(n) * (u = sc(r)) * vc(e) - vc(r) * (i = sc(n)) * vc(t)) / (i * u * o)) : (n + r) / 2
                } (e, r, u, o), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0),
                t.point(e = u, r = o),
                i = a
            },
            lineEnd: function() {
                t.lineEnd(),
                e = r = NaN
            },
            clean: function() {
                return 2 - n
            }
        }
    },
    function(t, n, e, r) {
        var i;
        if (null == t) i = e * ec,
        r.point( - nc, i),
        r.point(0, i),
        r.point(nc, i),
        r.point(nc, 0),
        r.point(nc, -i),
        r.point(0, -i),
        r.point( - nc, -i),
        r.point( - nc, 0),
        r.point( - nc, i);
        else if (ac(t[0] - n[0]) > tc) {
            var u = t[0] < n[0] ? nc: -nc;
            i = e * u / 2,
            r.point( - u, i),
            r.point(0, i),
            r.point(u, i)
        } else r.point(n[0], n[1])
    },
    [ - nc, -ec]);
    var vs = function(t) {
        var n = sc(t),
        e = 6 * oc,
        r = n > 0,
        i = ac(n) > tc;
        function u(t, e) {
            return sc(t) * sc(e) > n
        }
        function o(t, e, r) {
            var i = [1, 0, 0],
            u = Xc(jc(t), jc(e)),
            o = Hc(u, u),
            a = u[0],
            c = o - a * a;
            if (!c) return ! r && t;
            var f = n * o / c,
            s = -n * a / c,
            l = Xc(i, u),
            h = Vc(i, f);
            Gc(h, Vc(u, s));
            var d = l,
            p = Hc(h, d),
            v = Hc(d, d),
            g = p * p - v * (Hc(h, h) - 1);
            if (! (g < 0)) {
                var y = yc(g),
                b = Vc(d, ( - p - y) / v);
                if (Gc(b, h), b = Fc(b), !r) return b;
                var _, m = t[0],
                x = e[0],
                w = t[1],
                M = e[1];
                x < m && (_ = m, m = x, x = _);
                var A = x - m,
                S = ac(A - nc) < tc;
                if (!S && M < w && (_ = w, w = M, M = _), S || A < tc ? S ? w + M > 0 ^ b[1] < (ac(b[0] - m) < tc ? w: M) : w <= b[1] && b[1] <= M: A > nc ^ (m <= b[0] && b[0] <= x)) {
                    var k = Vc(d, ( - p + y) / v);
                    return Gc(k, h),
                    [b, Fc(k)]
                }
            }
        }
        function a(n, e) {
            var i = r ? t: nc - t,
            u = 0;
            return n < -i ? u |= 1 : n > i && (u |= 2),
            e < -i ? u |= 4 : e > i && (u |= 8),
            u
        }
        return ls(u,
        function(t) {
            var n, e, c, f, s;
            return {
                lineStart: function() {
                    f = c = !1,
                    s = 1
                },
                point: function(l, h) {
                    var d, p = [l, h],
                    v = u(l, h),
                    g = r ? v ? 0 : a(l, h) : v ? a(l + (l < 0 ? nc: -nc), h) : 0;
                    if (!n && (f = c = v) && t.lineStart(), v !== c && (!(d = o(n, p)) || us(n, d) || us(p, d)) && (p[0] += tc, p[1] += tc, v = u(p[0], p[1])), v !== c) s = 0,
                    v ? (t.lineStart(), d = o(p, n), t.point(d[0], d[1])) : (d = o(n, p), t.point(d[0], d[1]), t.lineEnd()),
                    n = d;
                    else if (i && n && r ^ v) {
                        var y;
                        g & e || !(y = o(p, n, !0)) || (s = 0, r ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])))
                    } ! v || n && us(n, p) || t.point(p[0], p[1]),
                    n = p,
                    c = v,
                    e = g
                },
                lineEnd: function() {
                    c && t.lineEnd(),
                    n = null
                },
                clean: function() {
                    return s | (f && c) << 1
                }
            }
        },
        function(n, r, i, u) {
            ns(u, t, e, i, n, r)
        },
        r ? [0, -t] : [ - nc, t - nc])
    },
    gs = function(t, n, e, r, i, u) {
        var o, a = t[0],
        c = t[1],
        f = 0,
        s = 1,
        l = n[0] - a,
        h = n[1] - c;
        if (o = e - a, l || !(o > 0)) {
            if (o /= l, l < 0) {
                if (o < f) return;
                o < s && (s = o)
            } else if (l > 0) {
                if (o > s) return;
                o > f && (f = o)
            }
            if (o = i - a, l || !(o < 0)) {
                if (o /= l, l < 0) {
                    if (o > s) return;
                    o > f && (f = o)
                } else if (l > 0) {
                    if (o < f) return;
                    o < s && (s = o)
                }
                if (o = r - c, h || !(o > 0)) {
                    if (o /= h, h < 0) {
                        if (o < f) return;
                        o < s && (s = o)
                    } else if (h > 0) {
                        if (o > s) return;
                        o > f && (f = o)
                    }
                    if (o = u - c, h || !(o < 0)) {
                        if (o /= h, h < 0) {
                            if (o > s) return;
                            o > f && (f = o)
                        } else if (h > 0) {
                            if (o < f) return;
                            o < s && (s = o)
                        }
                        return f > 0 && (t[0] = a + f * l, t[1] = c + f * h),
                        s < 1 && (n[0] = a + s * l, n[1] = c + s * h),
                        !0
                    }
                }
            }
        }
    },
    ys = 1e9,
    bs = -ys;
    function _s(t, n, e, r) {
        function i(i, u) {
            return t <= i && i <= e && n <= u && u <= r
        }
        function u(i, u, a, f) {
            var s = 0,
            l = 0;
            if (null == i || (s = o(i, a)) !== (l = o(u, a)) || c(i, u) < 0 ^ a > 0) do {
                f.point(0 === s || 3 === s ? t: e, s > 1 ? r: n)
            } while (( s = ( s + a + 4 ) % 4) !== l);
            else f.point(u[0], u[1])
        }
        function o(r, i) {
            return ac(r[0] - t) < tc ? i > 0 ? 0 : 3 : ac(r[0] - e) < tc ? i > 0 ? 2 : 1 : ac(r[1] - n) < tc ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
        }
        function a(t, n) {
            return c(t.x, n.x)
        }
        function c(t, n) {
            var e = o(t, 1),
            r = o(n, 1);
            return e !== r ? e - r: 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
        }
        return function(o) {
            var c, f, s, l, h, d, p, v, g, y, b, _ = o,
            m = is(),
            x = {
                point: w,
                lineStart: function() {
                    x.point = M,
                    f && f.push(s = []);
                    y = !0,
                    g = !1,
                    p = v = NaN
                },
                lineEnd: function() {
                    c && (M(l, h), d && g && m.rejoin(), c.push(m.result()));
                    x.point = w,
                    g && _.lineEnd()
                },
                polygonStart: function() {
                    _ = m,
                    c = [],
                    f = [],
                    b = !0
                },
                polygonEnd: function() {
                    var n = function() {
                        for (var n = 0,
                        e = 0,
                        i = f.length; e < i; ++e) for (var u, o, a = f[e], c = 1, s = a.length, l = a[0], h = l[0], d = l[1]; c < s; ++c) u = h,
                        o = d,
                        l = a[c],
                        h = l[0],
                        d = l[1],
                        o <= r ? d > r && (h - u) * (r - o) > (d - o) * (t - u) && ++n: d <= r && (h - u) * (r - o) < (d - o) * (t - u) && --n;
                        return n
                    } (),
                    e = b && n,
                    i = (c = O(c)).length; (e || i) && (o.polygonStart(), e && (o.lineStart(), u(null, null, 1, o), o.lineEnd()), i && as(c, a, n, u, o), o.polygonEnd());
                    _ = o,
                    c = f = s = null
                }
            };
            function w(t, n) {
                i(t, n) && _.point(t, n)
            }
            function M(u, o) {
                var a = i(u, o);
                if (f && s.push([u, o]), y) l = u,
                h = o,
                d = a,
                y = !1,
                a && (_.lineStart(), _.point(u, o));
                else if (a && g) _.point(u, o);
                else {
                    var c = [p = Math.max(bs, Math.min(ys, p)), v = Math.max(bs, Math.min(ys, v))],
                    m = [u = Math.max(bs, Math.min(ys, u)), o = Math.max(bs, Math.min(ys, o))];
                    gs(c, m, t, n, e, r) ? (g || (_.lineStart(), _.point(c[0], c[1])), _.point(m[0], m[1]), a || _.lineEnd(), b = !1) : a && (_.lineStart(), _.point(u, o), b = !1)
                }
                p = u,
                v = o,
                g = a
            }
            return x
        }
    }
    var ms, xs, ws, Ms = function() {
        var t, n, e, r = 0,
        i = 0,
        u = 960,
        o = 500;
        return e = {
            stream: function(e) {
                return t && n === e ? t: t = _s(r, i, u, o)(n = e)
            },
            extent: function(a) {
                return arguments.length ? (r = +a[0][0], i = +a[0][1], u = +a[1][0], o = +a[1][1], t = n = null, e) : [[r, i], [u, o]]
            }
        }
    },
    As = Za(),
    Ss = {
        sphere: wc,
        point: wc,
        lineStart: function() {
            Ss.point = Ts,
            Ss.lineEnd = ks
        },
        lineEnd: wc,
        polygonStart: wc,
        polygonEnd: wc
    };
    function ks() {
        Ss.point = Ss.lineEnd = wc
    }
    function Ts(t, n) {
        ms = t *= oc,
        xs = vc(n *= oc),
        ws = sc(n),
        Ss.point = Ns
    }
    function Ns(t, n) {
        t *= oc;
        var e = vc(n *= oc),
        r = sc(n),
        i = ac(t - ms),
        u = sc(i),
        o = r * vc(i),
        a = ws * e - xs * r * u,
        c = xs * e + ws * r * u;
        As.add(fc(yc(o * o + a * a), c)),
        ms = t,
        xs = e,
        ws = r
    }
    var Es = function(t) {
        return As.reset(),
        Rc(t, Ss),
        +As
    },
    Cs = [null, null],
    Ps = {
        type: "LineString",
        coordinates: Cs
    },
    zs = function(t, n) {
        return Cs[0] = t,
        Cs[1] = n,
        Es(Ps)
    },
    Rs = {
        Feature: function(t, n) {
            return Ds(t.geometry, n)
        },
        FeatureCollection: function(t, n) {
            for (var e = t.features,
            r = -1,
            i = e.length; ++r < i;) if (Ds(e[r].geometry, n)) return ! 0;
            return ! 1
        }
    },
    Ls = {
        Sphere: function() {
            return ! 0
        },
        Point: function(t, n) {
            return Us(t.coordinates, n)
        },
        MultiPoint: function(t, n) {
            for (var e = t.coordinates,
            r = -1,
            i = e.length; ++r < i;) if (Us(e[r], n)) return ! 0;
            return ! 1
        },
        LineString: function(t, n) {
            return Os(t.coordinates, n)
        },
        MultiLineString: function(t, n) {
            for (var e = t.coordinates,
            r = -1,
            i = e.length; ++r < i;) if (Os(e[r], n)) return ! 0;
            return ! 1
        },
        Polygon: function(t, n) {
            return qs(t.coordinates, n)
        },
        MultiPolygon: function(t, n) {
            for (var e = t.coordinates,
            r = -1,
            i = e.length; ++r < i;) if (qs(e[r], n)) return ! 0;
            return ! 1
        },
        GeometryCollection: function(t, n) {
            for (var e = t.geometries,
            r = -1,
            i = e.length; ++r < i;) if (Ds(e[r], n)) return ! 0;
            return ! 1
        }
    };
    function Ds(t, n) {
        return ! (!t || !Ls.hasOwnProperty(t.type)) && Ls[t.type](t, n)
    }
    function Us(t, n) {
        return 0 === zs(t, n)
    }
    function Os(t, n) {
        var e = zs(t[0], t[1]);
        return zs(t[0], n) + zs(n, t[1]) <= e + tc
    }
    function qs(t, n) {
        return !! ss(t.map(Ys), Bs(n))
    }
    function Ys(t) {
        return (t = t.map(Bs)).pop(),
        t
    }
    function Bs(t) {
        return [t[0] * oc, t[1] * oc]
    }
    var Is = function(t, n) {
        return (t && Rs.hasOwnProperty(t.type) ? Rs[t.type] : Ds)(t, n)
    };
    function Fs(t, n, e) {
        var r = w(t, n - tc, e).concat(n);
        return function(t) {
            return r.map(function(n) {
                return [t, n]
            })
        }
    }
    function js(t, n, e) {
        var r = w(t, n - tc, e).concat(n);
        return function(t) {
            return r.map(function(n) {
                return [n, t]
            })
        }
    }
    function Hs() {
        var t, n, e, r, i, u, o, a, c, f, s, l, h = 10,
        d = h,
        p = 90,
        v = 360,
        g = 2.5;
        function y() {
            return {
                type: "MultiLineString",
                coordinates: b()
            }
        }
        function b() {
            return w(lc(r / p) * p, e, p).map(s).concat(w(lc(a / v) * v, o, v).map(l)).concat(w(lc(n / h) * h, t, h).filter(function(t) {
                return ac(t % p) > tc
            }).map(c)).concat(w(lc(u / d) * d, i, d).filter(function(t) {
                return ac(t % v) > tc
            }).map(f))
        }
        return y.lines = function() {
            return b().map(function(t) {
                return {
                    type: "LineString",
                    coordinates: t
                }
            })
        },
        y.outline = function() {
            return {
                type: "Polygon",
                coordinates: [s(r).concat(l(o).slice(1), s(e).reverse().slice(1), l(a).reverse().slice(1))]
            }
        },
        y.extent = function(t) {
            return arguments.length ? y.extentMajor(t).extentMinor(t) : y.extentMinor()
        },
        y.extentMajor = function(t) {
            return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), y.precision(g)) : [[r, a], [e, o]]
        },
        y.extentMinor = function(e) {
            return arguments.length ? (n = +e[0][0], t = +e[1][0], u = +e[0][1], i = +e[1][1], n > t && (e = n, n = t, t = e), u > i && (e = u, u = i, i = e), y.precision(g)) : [[n, u], [t, i]]
        },
        y.step = function(t) {
            return arguments.length ? y.stepMajor(t).stepMinor(t) : y.stepMinor()
        },
        y.stepMajor = function(t) {
            return arguments.length ? (p = +t[0], v = +t[1], y) : [p, v]
        },
        y.stepMinor = function(t) {
            return arguments.length ? (h = +t[0], d = +t[1], y) : [h, d]
        },
        y.precision = function(h) {
            return arguments.length ? (g = +h, c = Fs(u, i, 90), f = js(n, t, g), s = Fs(a, o, 90), l = js(r, e, g), y) : g
        },
        y.extentMajor([[ - 180, -90 + tc], [180, 90 - tc]]).extentMinor([[ - 180, -80 - tc], [180, 80 + tc]])
    }
    function Xs() {
        return Hs()()
    }
    var Gs, Vs, $s, Ws, Zs = function(t, n) {
        var e = t[0] * oc,
        r = t[1] * oc,
        i = n[0] * oc,
        u = n[1] * oc,
        o = sc(r),
        a = vc(r),
        c = sc(u),
        f = vc(u),
        s = o * sc(e),
        l = o * vc(e),
        h = c * sc(i),
        d = c * vc(i),
        p = 2 * mc(yc(xc(u - r) + o * c * xc(i - e))),
        v = vc(p),
        g = p ?
        function(t) {
            var n = vc(t *= p) / v,
            e = vc(p - t) / v,
            r = e * s + n * h,
            i = e * l + n * d,
            u = e * a + n * f;
            return [fc(i, r) * uc, fc(u, yc(r * r + i * i)) * uc]
        }: function() {
            return [e * uc, r * uc]
        };
        return g.distance = p,
        g
    },
    Qs = function(t) {
        return t
    },
    Js = Za(),
    Ks = Za(),
    tl = {
        point: wc,
        lineStart: wc,
        lineEnd: wc,
        polygonStart: function() {
            tl.lineStart = nl,
            tl.lineEnd = il
        },
        polygonEnd: function() {
            tl.lineStart = tl.lineEnd = tl.point = wc,
            Js.add(ac(Ks)),
            Ks.reset()
        },
        result: function() {
            var t = Js / 2;
            return Js.reset(),
            t
        }
    };
    function nl() {
        tl.point = el
    }
    function el(t, n) {
        tl.point = rl,
        Gs = $s = t,
        Vs = Ws = n
    }
    function rl(t, n) {
        Ks.add(Ws * t - $s * n),
        $s = t,
        Ws = n
    }
    function il() {
        rl(Gs, Vs)
    }
    var ul = tl,
    ol = 1 / 0,
    al = ol,
    cl = -ol,
    fl = cl;
    var sl, ll, hl, dl, pl = {
        point: function(t, n) {
            t < ol && (ol = t);
            t > cl && (cl = t);
            n < al && (al = n);
            n > fl && (fl = n)
        },
        lineStart: wc,
        lineEnd: wc,
        polygonStart: wc,
        polygonEnd: wc,
        result: function() {
            var t = [[ol, al], [cl, fl]];
            return cl = fl = -(al = ol = 1 / 0),
            t
        }
    },
    vl = 0,
    gl = 0,
    yl = 0,
    bl = 0,
    _l = 0,
    ml = 0,
    xl = 0,
    wl = 0,
    Ml = 0,
    Al = {
        point: Sl,
        lineStart: kl,
        lineEnd: El,
        polygonStart: function() {
            Al.lineStart = Cl,
            Al.lineEnd = Pl
        },
        polygonEnd: function() {
            Al.point = Sl,
            Al.lineStart = kl,
            Al.lineEnd = El
        },
        result: function() {
            var t = Ml ? [xl / Ml, wl / Ml] : ml ? [bl / ml, _l / ml] : yl ? [vl / yl, gl / yl] : [NaN, NaN];
            return vl = gl = yl = bl = _l = ml = xl = wl = Ml = 0,
            t
        }
    };
    function Sl(t, n) {
        vl += t,
        gl += n,
        ++yl
    }
    function kl() {
        Al.point = Tl
    }
    function Tl(t, n) {
        Al.point = Nl,
        Sl(hl = t, dl = n)
    }
    function Nl(t, n) {
        var e = t - hl,
        r = n - dl,
        i = yc(e * e + r * r);
        bl += i * (hl + t) / 2,
        _l += i * (dl + n) / 2,
        ml += i,
        Sl(hl = t, dl = n)
    }
    function El() {
        Al.point = Sl
    }
    function Cl() {
        Al.point = zl
    }
    function Pl() {
        Rl(sl, ll)
    }
    function zl(t, n) {
        Al.point = Rl,
        Sl(sl = hl = t, ll = dl = n)
    }
    function Rl(t, n) {
        var e = t - hl,
        r = n - dl,
        i = yc(e * e + r * r);
        bl += i * (hl + t) / 2,
        _l += i * (dl + n) / 2,
        ml += i,
        xl += (i = dl * t - hl * n) * (hl + t),
        wl += i * (dl + n),
        Ml += 3 * i,
        Sl(hl = t, dl = n)
    }
    var Ll = Al;
    function Dl(t) {
        this._context = t
    }
    Dl.prototype = {
        _radius: 4.5,
        pointRadius: function(t) {
            return this._radius = t,
            this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._context.closePath(),
            this._point = NaN
        },
        point: function(t, n) {
            switch (this._point) {
            case 0:
                this._context.moveTo(t, n),
                this._point = 1;
                break;
            case 1:
                this._context.lineTo(t, n);
                break;
            default:
                this._context.moveTo(t + this._radius, n),
                this._context.arc(t, n, this._radius, 0, ic)
            }
        },
        result: wc
    };
    var Ul, Ol, ql, Yl, Bl, Il = Za(),
    Fl = {
        point: wc,
        lineStart: function() {
            Fl.point = jl
        },
        lineEnd: function() {
            Ul && Hl(Ol, ql),
            Fl.point = wc
        },
        polygonStart: function() {
            Ul = !0
        },
        polygonEnd: function() {
            Ul = null
        },
        result: function() {
            var t = +Il;
            return Il.reset(),
            t
        }
    };
    function jl(t, n) {
        Fl.point = Hl,
        Ol = Yl = t,
        ql = Bl = n
    }
    function Hl(t, n) {
        Yl -= t,
        Bl -= n,
        Il.add(yc(Yl * Yl + Bl * Bl)),
        Yl = t,
        Bl = n
    }
    var Xl = Fl;
    function Gl() {
        this._string = []
    }
    function Vl(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }
    Gl.prototype = {
        _radius: 4.5,
        _circle: Vl(4.5),
        pointRadius: function(t) {
            return (t = +t) !== this._radius && (this._radius = t, this._circle = null),
            this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._string.push("Z"),
            this._point = NaN
        },
        point: function(t, n) {
            switch (this._point) {
            case 0:
                this._string.push("M", t, ",", n),
                this._point = 1;
                break;
            case 1:
                this._string.push("L", t, ",", n);
                break;
            default:
                null == this._circle && (this._circle = Vl(this._radius)),
                this._string.push("M", t, ",", n, this._circle)
            }
        },
        result: function() {
            if (this._string.length) {
                var t = this._string.join("");
                return this._string = [],
                t
            }
            return null
        }
    };
    var $l = function(t, n) {
        var e, r, i = 4.5;
        function u(t) {
            return t && ("function" == typeof i && r.pointRadius( + i.apply(this, arguments)), Rc(t, e(r))),
            r.result()
        }
        return u.area = function(t) {
            return Rc(t, e(ul)),
            ul.result()
        },
        u.measure = function(t) {
            return Rc(t, e(Xl)),
            Xl.result()
        },
        u.bounds = function(t) {
            return Rc(t, e(pl)),
            pl.result()
        },
        u.centroid = function(t) {
            return Rc(t, e(Ll)),
            Ll.result()
        },
        u.projection = function(n) {
            return arguments.length ? (e = null == n ? (t = null, Qs) : (t = n).stream, u) : t
        },
        u.context = function(t) {
            return arguments.length ? (r = null == t ? (n = null, new Gl) : new Dl(n = t), "function" != typeof i && r.pointRadius(i), u) : n
        },
        u.pointRadius = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t: (r.pointRadius( + t), +t), u) : i
        },
        u.projection(t).context(n)
    },
    Wl = function(t) {
        return {
            stream: Zl(t)
        }
    };
    function Zl(t) {
        return function(n) {
            var e = new Ql;
            for (var r in t) e[r] = t[r];
            return e.stream = n,
            e
        }
    }
    function Ql() {}
    function Jl(t, n, e) {
        var r = t.clipExtent && t.clipExtent();
        return t.scale(150).translate([0, 0]),
        null != r && t.clipExtent(null),
        Rc(e, t.stream(pl)),
        n(pl.result()),
        null != r && t.clipExtent(r),
        t
    }
    function Kl(t, n, e) {
        return Jl(t,
        function(e) {
            var r = n[1][0] - n[0][0],
            i = n[1][1] - n[0][1],
            u = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
            o = +n[0][0] + (r - u * (e[1][0] + e[0][0])) / 2,
            a = +n[0][1] + (i - u * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * u).translate([o, a])
        },
        e)
    }
    function th(t, n, e) {
        return Kl(t, [[0, 0], n], e)
    }
    function nh(t, n, e) {
        return Jl(t,
        function(e) {
            var r = +n,
            i = r / (e[1][0] - e[0][0]),
            u = (r - i * (e[1][0] + e[0][0])) / 2,
            o = -i * e[0][1];
            t.scale(150 * i).translate([u, o])
        },
        e)
    }
    function eh(t, n, e) {
        return Jl(t,
        function(e) {
            var r = +n,
            i = r / (e[1][1] - e[0][1]),
            u = -i * e[0][0],
            o = (r - i * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * i).translate([u, o])
        },
        e)
    }
    Ql.prototype = {
        constructor: Ql,
        point: function(t, n) {
            this.stream.point(t, n)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    };
    var rh = 16,
    ih = sc(30 * oc),
    uh = function(t, n) {
        return + n ?
        function(t, n) {
            function e(r, i, u, o, a, c, f, s, l, h, d, p, v, g) {
                var y = f - r,
                b = s - i,
                _ = y * y + b * b;
                if (_ > 4 * n && v--) {
                    var m = o + h,
                    x = a + d,
                    w = c + p,
                    M = yc(m * m + x * x + w * w),
                    A = mc(w /= M),
                    S = ac(ac(w) - 1) < tc || ac(u - l) < tc ? (u + l) / 2 : fc(x, m),
                    k = t(S, A),
                    T = k[0],
                    N = k[1],
                    E = T - r,
                    C = N - i,
                    P = b * E - y * C; (P * P / _ > n || ac((y * E + b * C) / _ - .5) > .3 || o * h + a * d + c * p < ih) && (e(r, i, u, o, a, c, T, N, S, m /= M, x /= M, w, v, g), g.point(T, N), e(T, N, S, m, x, w, f, s, l, h, d, p, v, g))
                }
            }
            return function(n) {
                var r, i, u, o, a, c, f, s, l, h, d, p, v = {
                    point: g,
                    lineStart: y,
                    lineEnd: _,
                    polygonStart: function() {
                        n.polygonStart(),
                        v.lineStart = m
                    },
                    polygonEnd: function() {
                        n.polygonEnd(),
                        v.lineStart = y
                    }
                };
                function g(e, r) {
                    e = t(e, r),
                    n.point(e[0], e[1])
                }
                function y() {
                    s = NaN,
                    v.point = b,
                    n.lineStart()
                }
                function b(r, i) {
                    var u = jc([r, i]),
                    o = t(r, i);
                    e(s, l, f, h, d, p, s = o[0], l = o[1], f = r, h = u[0], d = u[1], p = u[2], rh, n),
                    n.point(s, l)
                }
                function _() {
                    v.point = g,
                    n.lineEnd()
                }
                function m() {
                    y(),
                    v.point = x,
                    v.lineEnd = w
                }
                function x(t, n) {
                    b(r = t, n),
                    i = s,
                    u = l,
                    o = h,
                    a = d,
                    c = p,
                    v.point = b
                }
                function w() {
                    e(s, l, f, h, d, p, i, u, r, o, a, c, rh, n),
                    v.lineEnd = _,
                    _()
                }
                return v
            }
        } (t, n) : function(t) {
            return Zl({
                point: function(n, e) {
                    n = t(n, e),
                    this.stream.point(n[0], n[1])
                }
            })
        } (t)
    };
    var oh = Zl({
        point: function(t, n) {
            this.stream.point(t * oc, n * oc)
        }
    });
    function ah(t, n, e, r) {
        var i = sc(r),
        u = vc(r),
        o = i * t,
        a = u * t,
        c = i / t,
        f = u / t,
        s = (u * e - i * n) / t,
        l = (u * n + i * e) / t;
        function h(t, r) {
            return [o * t - a * r + n, e - a * t - o * r]
        }
        return h.invert = function(t, n) {
            return [c * t - f * n + s, l - f * t - c * n]
        },
        h
    }
    function ch(t) {
        return fh(function() {
            return t
        })()
    }
    function fh(t) {
        var n, e, r, i, u, o, a, c, f, s, l = 150,
        h = 480,
        d = 250,
        p = 0,
        v = 0,
        g = 0,
        y = 0,
        b = 0,
        _ = 0,
        m = null,
        x = ps,
        w = null,
        M = Qs,
        A = .5;
        function S(t) {
            return c(t[0] * oc, t[1] * oc)
        }
        function k(t) {
            return (t = c.invert(t[0], t[1])) && [t[0] * uc, t[1] * uc]
        }
        function T() {
            var t = ah(l, 0, 0, _).apply(null, n(p, v)),
            r = (_ ? ah: function(t, n, e) {
                function r(r, i) {
                    return [n + t * r, e - t * i]
                }
                return r.invert = function(r, i) {
                    return [(r - n) / t, (e - i) / t]
                },
                r
            })(l, h - t[0], d - t[1], _);
            return e = Zf(g, y, b),
            a = $f(n, r),
            c = $f(e, a),
            o = uh(a, A),
            N()
        }
        function N() {
            return f = s = null,
            S
        }
        return S.stream = function(t) {
            return f && s === t ? f: f = oh(function(t) {
                return Zl({
                    point: function(n, e) {
                        var r = t(n, e);
                        return this.stream.point(r[0], r[1])
                    }
                })
            } (e)(x(o(M(s = t)))))
        },
        S.preclip = function(t) {
            return arguments.length ? (x = t, m = void 0, N()) : x
        },
        S.postclip = function(t) {
            return arguments.length ? (M = t, w = r = i = u = null, N()) : M
        },
        S.clipAngle = function(t) {
            return arguments.length ? (x = +t ? vs(m = t * oc) : (m = null, ps), N()) : m * uc
        },
        S.clipExtent = function(t) {
            return arguments.length ? (M = null == t ? (w = r = i = u = null, Qs) : _s(w = +t[0][0], r = +t[0][1], i = +t[1][0], u = +t[1][1]), N()) : null == w ? null: [[w, r], [i, u]]
        },
        S.scale = function(t) {
            return arguments.length ? (l = +t, T()) : l
        },
        S.translate = function(t) {
            return arguments.length ? (h = +t[0], d = +t[1], T()) : [h, d]
        },
        S.center = function(t) {
            return arguments.length ? (p = t[0] % 360 * oc, v = t[1] % 360 * oc, T()) : [p * uc, v * uc]
        },
        S.rotate = function(t) {
            return arguments.length ? (g = t[0] % 360 * oc, y = t[1] % 360 * oc, b = t.length > 2 ? t[2] % 360 * oc: 0, T()) : [g * uc, y * uc, b * uc]
        },
        S.angle = function(t) {
            return arguments.length ? (_ = t % 360 * oc, T()) : _ * uc
        },
        S.precision = function(t) {
            return arguments.length ? (o = uh(a, A = t * t), N()) : yc(A)
        },
        S.fitExtent = function(t, n) {
            return Kl(S, t, n)
        },
        S.fitSize = function(t, n) {
            return th(S, t, n)
        },
        S.fitWidth = function(t, n) {
            return nh(S, t, n)
        },
        S.fitHeight = function(t, n) {
            return eh(S, t, n)
        },
        function() {
            return n = t.apply(this, arguments),
            S.invert = n.invert && k,
            T()
        }
    }
    function sh(t) {
        var n = 0,
        e = nc / 3,
        r = fh(t),
        i = r(n, e);
        return i.parallels = function(t) {
            return arguments.length ? r(n = t[0] * oc, e = t[1] * oc) : [n * uc, e * uc]
        },
        i
    }
    function lh(t, n) {
        var e = vc(t),
        r = (e + vc(n)) / 2;
        if (ac(r) < tc) return function(t) {
            var n = sc(t);
            function e(t, e) {
                return [t * n, vc(e) / n]
            }
            return e.invert = function(t, e) {
                return [t / n, mc(e * n)]
            },
            e
        } (t);
        var i = 1 + e * (2 * r - e),
        u = yc(i) / r;
        function o(t, n) {
            var e = yc(i - 2 * r * vc(n)) / r;
            return [e * vc(t *= r), u - e * sc(t)]
        }
        return o.invert = function(t, n) {
            var e = u - n;
            return [fc(t, ac(e)) / r * gc(e), mc((i - (t * t + e * e) * r * r) / (2 * r))]
        },
        o
    }
    var hh = function() {
        return sh(lh).scale(155.424).center([0, 33.6442])
    },
    dh = function() {
        return hh().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([ - .6, 38.7])
    };
    var ph = function() {
        var t, n, e, r, i, u, o = dh(),
        a = hh().rotate([154, 0]).center([ - 2, 58.5]).parallels([55, 65]),
        c = hh().rotate([157, 0]).center([ - 3, 19.9]).parallels([8, 18]),
        f = {
            point: function(t, n) {
                u = [t, n]
            }
        };
        function s(t) {
            var n = t[0],
            o = t[1];
            return u = null,
            e.point(n, o),
            u || (r.point(n, o), u) || (i.point(n, o), u)
        }
        function l() {
            return t = n = null,
            s
        }
        return s.invert = function(t) {
            var n = o.scale(),
            e = o.translate(),
            r = (t[0] - e[0]) / n,
            i = (t[1] - e[1]) / n;
            return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? a: i >= .166 && i < .234 && r >= -.214 && r < -.115 ? c: o).invert(t)
        },
        s.stream = function(e) {
            return t && n === e ? t: t = function(t) {
                var n = t.length;
                return {
                    point: function(e, r) {
                        for (var i = -1; ++i < n;) t[i].point(e, r)
                    },
                    sphere: function() {
                        for (var e = -1; ++e < n;) t[e].sphere()
                    },
                    lineStart: function() {
                        for (var e = -1; ++e < n;) t[e].lineStart()
                    },
                    lineEnd: function() {
                        for (var e = -1; ++e < n;) t[e].lineEnd()
                    },
                    polygonStart: function() {
                        for (var e = -1; ++e < n;) t[e].polygonStart()
                    },
                    polygonEnd: function() {
                        for (var e = -1; ++e < n;) t[e].polygonEnd()
                    }
                }
            } ([o.stream(n = e), a.stream(e), c.stream(e)])
        },
        s.precision = function(t) {
            return arguments.length ? (o.precision(t), a.precision(t), c.precision(t), l()) : o.precision()
        },
        s.scale = function(t) {
            return arguments.length ? (o.scale(t), a.scale(.35 * t), c.scale(t), s.translate(o.translate())) : o.scale()
        },
        s.translate = function(t) {
            if (!arguments.length) return o.translate();
            var n = o.scale(),
            u = +t[0],
            s = +t[1];
            return e = o.translate(t).clipExtent([[u - .455 * n, s - .238 * n], [u + .455 * n, s + .238 * n]]).stream(f),
            r = a.translate([u - .307 * n, s + .201 * n]).clipExtent([[u - .425 * n + tc, s + .12 * n + tc], [u - .214 * n - tc, s + .234 * n - tc]]).stream(f),
            i = c.translate([u - .205 * n, s + .212 * n]).clipExtent([[u - .214 * n + tc, s + .166 * n + tc], [u - .115 * n - tc, s + .234 * n - tc]]).stream(f),
            l()
        },
        s.fitExtent = function(t, n) {
            return Kl(s, t, n)
        },
        s.fitSize = function(t, n) {
            return th(s, t, n)
        },
        s.fitWidth = function(t, n) {
            return nh(s, t, n)
        },
        s.fitHeight = function(t, n) {
            return eh(s, t, n)
        },
        s.scale(1070)
    };
    function vh(t) {
        return function(n, e) {
            var r = sc(n),
            i = sc(e),
            u = t(r * i);
            return [u * i * vc(n), u * vc(e)]
        }
    }
    function gh(t) {
        return function(n, e) {
            var r = yc(n * n + e * e),
            i = t(r),
            u = vc(i),
            o = sc(i);
            return [fc(n * u, r * o), mc(r && e * u / r)]
        }
    }
    var yh = vh(function(t) {
        return yc(2 / (1 + t))
    });
    yh.invert = gh(function(t) {
        return 2 * mc(t / 2)
    });
    var bh = function() {
        return ch(yh).scale(124.75).clipAngle(179.999)
    },
    _h = vh(function(t) {
        return (t = _c(t)) && t / vc(t)
    });
    _h.invert = gh(function(t) {
        return t
    });
    var mh = function() {
        return ch(_h).scale(79.4188).clipAngle(179.999)
    };
    function xh(t, n) {
        return [t, dc(bc((ec + n) / 2))]
    }
    xh.invert = function(t, n) {
        return [t, 2 * cc(hc(n)) - ec]
    };
    var wh = function() {
        return Mh(xh).scale(961 / ic)
    };
    function Mh(t) {
        var n, e, r, i = ch(t),
        u = i.center,
        o = i.scale,
        a = i.translate,
        c = i.clipExtent,
        f = null;
        function s() {
            var u = nc * o(),
            a = i(ts(i.rotate()).invert([0, 0]));
            return c(null == f ? [[a[0] - u, a[1] - u], [a[0] + u, a[1] + u]] : t === xh ? [[Math.max(a[0] - u, f), n], [Math.min(a[0] + u, e), r]] : [[f, Math.max(a[1] - u, n)], [e, Math.min(a[1] + u, r)]])
        }
        return i.scale = function(t) {
            return arguments.length ? (o(t), s()) : o()
        },
        i.translate = function(t) {
            return arguments.length ? (a(t), s()) : a()
        },
        i.center = function(t) {
            return arguments.length ? (u(t), s()) : u()
        },
        i.clipExtent = function(t) {
            return arguments.length ? (null == t ? f = n = e = r = null: (f = +t[0][0], n = +t[0][1], e = +t[1][0], r = +t[1][1]), s()) : null == f ? null: [[f, n], [e, r]]
        },
        s()
    }
    function Ah(t) {
        return bc((ec + t) / 2)
    }
    function Sh(t, n) {
        var e = sc(t),
        r = t === n ? vc(t) : dc(e / sc(n)) / dc(Ah(n) / Ah(t)),
        i = e * pc(Ah(t), r) / r;
        if (!r) return xh;
        function u(t, n) {
            i > 0 ? n < -ec + tc && (n = -ec + tc) : n > ec - tc && (n = ec - tc);
            var e = i / pc(Ah(n), r);
            return [e * vc(r * t), i - e * sc(r * t)]
        }
        return u.invert = function(t, n) {
            var e = i - n,
            u = gc(r) * yc(t * t + e * e);
            return [fc(t, ac(e)) / r * gc(e), 2 * cc(pc(i / u, 1 / r)) - ec]
        },
        u
    }
    var kh = function() {
        return sh(Sh).scale(109.5).parallels([30, 30])
    };
    function Th(t, n) {
        return [t, n]
    }
    Th.invert = Th;
    var Nh = function() {
        return ch(Th).scale(152.63)
    };
    function Eh(t, n) {
        var e = sc(t),
        r = t === n ? vc(t) : (e - sc(n)) / (n - t),
        i = e / r + t;
        if (ac(r) < tc) return Th;
        function u(t, n) {
            var e = i - n,
            u = r * t;
            return [e * vc(u), i - e * sc(u)]
        }
        return u.invert = function(t, n) {
            var e = i - n;
            return [fc(t, ac(e)) / r * gc(e), i - gc(r) * yc(t * t + e * e)]
        },
        u
    }
    var Ch = function() {
        return sh(Eh).scale(131.154).center([0, 13.9389])
    };
    function Ph(t, n) {
        var e = sc(n),
        r = sc(t) * e;
        return [e * vc(t) / r, vc(n) / r]
    }
    Ph.invert = gh(cc);
    var zh = function() {
        return ch(Ph).scale(144.049).clipAngle(60)
    };
    function Rh(t, n, e, r) {
        return 1 === t && 1 === n && 0 === e && 0 === r ? Qs: Zl({
            point: function(i, u) {
                this.stream.point(i * t + e, u * n + r)
            }
        })
    }
    var Lh = function() {
        var t, n, e, r, i, u, o = 1,
        a = 0,
        c = 0,
        f = 1,
        s = 1,
        l = Qs,
        h = null,
        d = Qs;
        function p() {
            return r = i = null,
            u
        }
        return u = {
            stream: function(t) {
                return r && i === t ? r: r = l(d(i = t))
            },
            postclip: function(r) {
                return arguments.length ? (d = r, h = t = n = e = null, p()) : d
            },
            clipExtent: function(r) {
                return arguments.length ? (d = null == r ? (h = t = n = e = null, Qs) : _s(h = +r[0][0], t = +r[0][1], n = +r[1][0], e = +r[1][1]), p()) : null == h ? null: [[h, t], [n, e]]
            },
            scale: function(t) {
                return arguments.length ? (l = Rh((o = +t) * f, o * s, a, c), p()) : o
            },
            translate: function(t) {
                return arguments.length ? (l = Rh(o * f, o * s, a = +t[0], c = +t[1]), p()) : [a, c]
            },
            reflectX: function(t) {
                return arguments.length ? (l = Rh(o * (f = t ? -1 : 1), o * s, a, c), p()) : f < 0
            },
            reflectY: function(t) {
                return arguments.length ? (l = Rh(o * f, o * (s = t ? -1 : 1), a, c), p()) : s < 0
            },
            fitExtent: function(t, n) {
                return Kl(u, t, n)
            },
            fitSize: function(t, n) {
                return th(u, t, n)
            },
            fitWidth: function(t, n) {
                return nh(u, t, n)
            },
            fitHeight: function(t, n) {
                return eh(u, t, n)
            }
        }
    };
    function Dh(t, n) {
        var e = n * n,
        r = e * e;
        return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))]
    }
    Dh.invert = function(t, n) {
        var e, r = n,
        i = 25;
        do {
            var u = r * r,
            o = u * u;
            r -= e = (r * (1.007226 + u * (.015085 + o * (.028874 * u - .044475 - .005916 * o))) - n) / (1.007226 + u * (.045255 + o * (.259866 * u - .311325 - .005916 * 11 * o)))
        } while ( ac ( e ) > tc && --i > 0);
        return [t / (.8707 + (u = r * r) * (u * (u * u * u * (.003971 - .001529 * u) - .013791) - .131979)), r]
    };
    var Uh = function() {
        return ch(Dh).scale(175.295)
    };
    function Oh(t, n) {
        return [sc(n) * vc(t), vc(n)]
    }
    Oh.invert = gh(mc);
    var qh = function() {
        return ch(Oh).scale(249.5).clipAngle(90 + tc)
    };
    function Yh(t, n) {
        var e = sc(n),
        r = 1 + sc(t) * e;
        return [e * vc(t) / r, vc(n) / r]
    }
    Yh.invert = gh(function(t) {
        return 2 * cc(t)
    });
    var Bh = function() {
        return ch(Yh).scale(250).clipAngle(142)
    };
    function Ih(t, n) {
        return [dc(bc((ec + n) / 2)), -t]
    }
    Ih.invert = function(t, n) {
        return [ - n, 2 * cc(hc(t)) - ec]
    };
    var Fh = function() {
        var t = Mh(Ih),
        n = t.center,
        e = t.rotate;
        return t.center = function(t) {
            return arguments.length ? n([ - t[1], t[0]]) : [(t = n())[1], -t[0]]
        },
        t.rotate = function(t) {
            return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = e())[0], t[1], t[2] - 90]
        },
        e([0, 0, 90]).scale(159.155)
    };
    function jh(t, n) {
        return t.parent === n.parent ? 1 : 2
    }
    function Hh(t, n) {
        return t + n.x
    }
    function Xh(t, n) {
        return Math.max(t, n.y)
    }
    var Gh = function() {
        var t = jh,
        n = 1,
        e = 1,
        r = !1;
        function i(i) {
            var u, o = 0;
            i.eachAfter(function(n) {
                var e = n.children;
                e ? (n.x = function(t) {
                    return t.reduce(Hh, 0) / t.length
                } (e), n.y = function(t) {
                    return 1 + t.reduce(Xh, 0)
                } (e)) : (n.x = u ? o += t(n, u) : 0, n.y = 0, u = n)
            });
            var a = function(t) {
                for (var n; n = t.children;) t = n[0];
                return t
            } (i),
            c = function(t) {
                for (var n; n = t.children;) t = n[n.length - 1];
                return t
            } (i),
            f = a.x - t(a, c) / 2,
            s = c.x + t(c, a) / 2;
            return i.eachAfter(r ?
            function(t) {
                t.x = (t.x - i.x) * n,
                t.y = (i.y - t.y) * e
            }: function(t) {
                t.x = (t.x - f) / (s - f) * n,
                t.y = (1 - (i.y ? t.y / i.y: 1)) * e
            })
        }
        return i.separation = function(n) {
            return arguments.length ? (t = n, i) : t
        },
        i.size = function(t) {
            return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null: [n, e]
        },
        i.nodeSize = function(t) {
            return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null
        },
        i
    };
    function Vh(t) {
        var n = 0,
        e = t.children,
        r = e && e.length;
        if (r) for (; --r >= 0;) n += e[r].value;
        else n = 1;
        t.value = n
    }
    function $h(t, n) {
        var e, r, i, u, o, a = new Jh(t),
        c = +t.value && (a.value = t.value),
        f = [a];
        for (null == n && (n = Wh); e = f.pop();) if (c && (e.value = +e.data.value), (i = n(e.data)) && (o = i.length)) for (e.children = new Array(o), u = o - 1; u >= 0; --u) f.push(r = e.children[u] = new Jh(i[u])),
        r.parent = e,
        r.depth = e.depth + 1;
        return a.eachBefore(Qh)
    }
    function Wh(t) {
        return t.children
    }
    function Zh(t) {
        t.data = t.data.data
    }
    function Qh(t) {
        var n = 0;
        do {
            t.height = n
        } while (( t = t . parent ) && t.height < ++n)
    }
    function Jh(t) {
        this.data = t,
        this.depth = this.height = 0,
        this.parent = null
    }
    Jh.prototype = $h.prototype = {
        constructor: Jh,
        count: function() {
            return this.eachAfter(Vh)
        },
        each: function(t) {
            var n, e, r, i, u = this,
            o = [u];
            do {
                for (n = o.reverse(), o = []; u = n.pop();) if (t(u), e = u.children) for (r = 0, i = e.length; r < i; ++r) o.push(e[r])
            } while ( o . length );
            return this
        },
        eachAfter: function(t) {
            for (var n, e, r, i = this,
            u = [i], o = []; i = u.pop();) if (o.push(i), n = i.children) for (e = 0, r = n.length; e < r; ++e) u.push(n[e]);
            for (; i = o.pop();) t(i);
            return this
        },
        eachBefore: function(t) {
            for (var n, e, r = this,
            i = [r]; r = i.pop();) if (t(r), n = r.children) for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
            return this
        },
        sum: function(t) {
            return this.eachAfter(function(n) {
                for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                n.value = e
            })
        },
        sort: function(t) {
            return this.eachBefore(function(n) {
                n.children && n.children.sort(t)
            })
        },
        path: function(t) {
            for (var n = this,
            e = function(t, n) {
                if (t === n) return t;
                var e = t.ancestors(),
                r = n.ancestors(),
                i = null;
                for (t = e.pop(), n = r.pop(); t === n;) i = t,
                t = e.pop(),
                n = r.pop();
                return i
            } (n, t), r = [n]; n !== e;) n = n.parent,
            r.push(n);
            for (var i = r.length; t !== e;) r.splice(i, 0, t),
            t = t.parent;
            return r
        },
        ancestors: function() {
            for (var t = this,
            n = [t]; t = t.parent;) n.push(t);
            return n
        },
        descendants: function() {
            var t = [];
            return this.each(function(n) {
                t.push(n)
            }),
            t
        },
        leaves: function() {
            var t = [];
            return this.eachBefore(function(n) {
                n.children || t.push(n)
            }),
            t
        },
        links: function() {
            var t = this,
            n = [];
            return t.each(function(e) {
                e !== t && n.push({
                    source: e.parent,
                    target: e
                })
            }),
            n
        },
        copy: function() {
            return $h(this).eachBefore(Zh)
        }
    };
    var Kh = Array.prototype.slice;
    var td = function(t) {
        for (var n, e, r = 0,
        i = (t = function(t) {
            for (var n, e, r = t.length; r;) e = Math.random() * r--|0,
            n = t[r],
            t[r] = t[e],
            t[e] = n;
            return t
        } (Kh.call(t))).length, u = []; r < i;) n = t[r],
        e && rd(e, n) ? ++r: (e = ud(u = nd(u, n)), r = 0);
        return e
    };
    function nd(t, n) {
        var e, r;
        if (id(n, t)) return [n];
        for (e = 0; e < t.length; ++e) if (ed(n, t[e]) && id(od(t[e], n), t)) return [t[e], n];
        for (e = 0; e < t.length - 1; ++e) for (r = e + 1; r < t.length; ++r) if (ed(od(t[e], t[r]), n) && ed(od(t[e], n), t[r]) && ed(od(t[r], n), t[e]) && id(ad(t[e], t[r], n), t)) return [t[e], t[r], n];
        throw new Error
    }
    function ed(t, n) {
        var e = t.r - n.r,
        r = n.x - t.x,
        i = n.y - t.y;
        return e < 0 || e * e < r * r + i * i
    }
    function rd(t, n) {
        var e = t.r - n.r + 1e-6,
        r = n.x - t.x,
        i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i
    }
    function id(t, n) {
        for (var e = 0; e < n.length; ++e) if (!rd(t, n[e])) return ! 1;
        return ! 0
    }
    function ud(t) {
        switch (t.length) {
        case 1:
            return function(t) {
                return {
                    x:
                    t.x,
                    y: t.y,
                    r: t.r
                }
            } (t[0]);
        case 2:
            return od(t[0], t[1]);
        case 3:
            return ad(t[0], t[1], t[2])
        }
    }
    function od(t, n) {
        var e = t.x,
        r = t.y,
        i = t.r,
        u = n.x,
        o = n.y,
        a = n.r,
        c = u - e,
        f = o - r,
        s = a - i,
        l = Math.sqrt(c * c + f * f);
        return {
            x: (e + u + c / l * s) / 2,
            y: (r + o + f / l * s) / 2,
            r: (l + i + a) / 2
        }
    }
    function ad(t, n, e) {
        var r = t.x,
        i = t.y,
        u = t.r,
        o = n.x,
        a = n.y,
        c = n.r,
        f = e.x,
        s = e.y,
        l = e.r,
        h = r - o,
        d = r - f,
        p = i - a,
        v = i - s,
        g = c - u,
        y = l - u,
        b = r * r + i * i - u * u,
        _ = b - o * o - a * a + c * c,
        m = b - f * f - s * s + l * l,
        x = d * p - h * v,
        w = (p * m - v * _) / (2 * x) - r,
        M = (v * g - p * y) / x,
        A = (d * _ - h * m) / (2 * x) - i,
        S = (h * y - d * g) / x,
        k = M * M + S * S - 1,
        T = 2 * (u + w * M + A * S),
        N = w * w + A * A - u * u,
        E = -(k ? (T + Math.sqrt(T * T - 4 * k * N)) / (2 * k) : N / T);
        return {
            x: r + w + M * E,
            y: i + A + S * E,
            r: E
        }
    }
    function cd(t, n, e) {
        var r, i, u, o, a = t.x - n.x,
        c = t.y - n.y,
        f = a * a + c * c;
        f ? (i = n.r + e.r, i *= i, o = t.r + e.r, i > (o *= o) ? (r = (f + o - i) / (2 * f), u = Math.sqrt(Math.max(0, o / f - r * r)), e.x = t.x - r * a - u * c, e.y = t.y - r * c + u * a) : (r = (f + i - o) / (2 * f), u = Math.sqrt(Math.max(0, i / f - r * r)), e.x = n.x + r * a - u * c, e.y = n.y + r * c + u * a)) : (e.x = n.x + e.r, e.y = n.y)
    }
    function fd(t, n) {
        var e = t.r + n.r - 1e-6,
        r = n.x - t.x,
        i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i
    }
    function sd(t) {
        var n = t._,
        e = t.next._,
        r = n.r + e.r,
        i = (n.x * e.r + e.x * n.r) / r,
        u = (n.y * e.r + e.y * n.r) / r;
        return i * i + u * u
    }
    function ld(t) {
        this._ = t,
        this.next = null,
        this.previous = null
    }
    function hd(t) {
        if (! (i = t.length)) return 0;
        var n, e, r, i, u, o, a, c, f, s, l;
        if ((n = t[0]).x = 0, n.y = 0, !(i > 1)) return n.r;
        if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
        cd(e, n, r = t[2]),
        n = new ld(n),
        e = new ld(e),
        r = new ld(r),
        n.next = r.previous = e,
        e.next = n.previous = r,
        r.next = e.previous = n;
        t: for (a = 3; a < i; ++a) {
            cd(n._, e._, r = t[a]),
            r = new ld(r),
            c = e.next,
            f = n.previous,
            s = e._.r,
            l = n._.r;
            do {
                if (s <= l) {
                    if (fd(c._, r._)) {
                        e = c,
                        n.next = e,
                        e.previous = n,
                        --a;
                        continue t
                    }
                    s += c._.r,
                    c = c.next
                } else {
                    if (fd(f._, r._)) { (n = f).next = e,
                        e.previous = n,
                        --a;
                        continue t
                    }
                    l += f._.r,
                    f = f.previous
                }
            } while ( c !== f . next );
            for (r.previous = n, r.next = e, n.next = e.previous = e = r, u = sd(n); (r = r.next) !== e;)(o = sd(r)) < u && (n = r, u = o);
            e = n.next
        }
        for (n = [e._], r = e; (r = r.next) !== e;) n.push(r._);
        for (r = td(n), a = 0; a < i; ++a)(n = t[a]).x -= r.x,
        n.y -= r.y;
        return r.r
    }
    var dd = function(t) {
        return hd(t),
        t
    };
    function pd(t) {
        if ("function" != typeof t) throw new Error;
        return t
    }
    function vd() {
        return 0
    }
    var gd = function(t) {
        return function() {
            return t
        }
    };
    function yd(t) {
        return Math.sqrt(t.value)
    }
    var bd = function() {
        var t = null,
        n = 1,
        e = 1,
        r = vd;
        function i(i) {
            return i.x = n / 2,
            i.y = e / 2,
            t ? i.eachBefore(_d(t)).eachAfter(md(r, .5)).eachBefore(xd(1)) : i.eachBefore(_d(yd)).eachAfter(md(vd, 1)).eachAfter(md(r, i.r / Math.min(n, e))).eachBefore(xd(Math.min(n, e) / (2 * i.r))),
            i
        }
        return i.radius = function(n) {
            return arguments.length ? (t = function(t) {
                return null == t ? null: pd(t)
            } (n), i) : t
        },
        i.size = function(t) {
            return arguments.length ? (n = +t[0], e = +t[1], i) : [n, e]
        },
        i.padding = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t: gd( + t), i) : r
        },
        i
    };
    function _d(t) {
        return function(n) {
            n.children || (n.r = Math.max(0, +t(n) || 0))
        }
    }
    function md(t, n) {
        return function(e) {
            if (r = e.children) {
                var r, i, u, o = r.length,
                a = t(e) * n || 0;
                if (a) for (i = 0; i < o; ++i) r[i].r += a;
                if (u = hd(r), a) for (i = 0; i < o; ++i) r[i].r -= a;
                e.r = u + a
            }
        }
    }
    function xd(t) {
        return function(n) {
            var e = n.parent;
            n.r *= t,
            e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
        }
    }
    var wd = function(t) {
        t.x0 = Math.round(t.x0),
        t.y0 = Math.round(t.y0),
        t.x1 = Math.round(t.x1),
        t.y1 = Math.round(t.y1)
    },
    Md = function(t, n, e, r, i) {
        for (var u, o = t.children,
        a = -1,
        c = o.length,
        f = t.value && (r - n) / t.value; ++a < c;)(u = o[a]).y0 = e,
        u.y1 = i,
        u.x0 = n,
        u.x1 = n += u.value * f
    },
    Ad = function() {
        var t = 1,
        n = 1,
        e = 0,
        r = !1;
        function i(i) {
            var u = i.height + 1;
            return i.x0 = i.y0 = e,
            i.x1 = t,
            i.y1 = n / u,
            i.eachBefore(function(t, n) {
                return function(r) {
                    r.children && Md(r, r.x0, t * (r.depth + 1) / n, r.x1, t * (r.depth + 2) / n);
                    var i = r.x0,
                    u = r.y0,
                    o = r.x1 - e,
                    a = r.y1 - e;
                    o < i && (i = o = (i + o) / 2),
                    a < u && (u = a = (u + a) / 2),
                    r.x0 = i,
                    r.y0 = u,
                    r.x1 = o,
                    r.y1 = a
                }
            } (n, u)),
            r && i.eachBefore(wd),
            i
        }
        return i.round = function(t) {
            return arguments.length ? (r = !!t, i) : r
        },
        i.size = function(e) {
            return arguments.length ? (t = +e[0], n = +e[1], i) : [t, n]
        },
        i.padding = function(t) {
            return arguments.length ? (e = +t, i) : e
        },
        i
    },
    Sd = "$",
    kd = {
        depth: -1
    },
    Td = {};
    function Nd(t) {
        return t.id
    }
    function Ed(t) {
        return t.parentId
    }
    var Cd = function() {
        var t = Nd,
        n = Ed;
        function e(e) {
            var r, i, u, o, a, c, f, s = e.length,
            l = new Array(s),
            h = {};
            for (i = 0; i < s; ++i) r = e[i],
            a = l[i] = new Jh(r),
            null != (c = t(r, i, e)) && (c += "") && (h[f = Sd + (a.id = c)] = f in h ? Td: a);
            for (i = 0; i < s; ++i) if (a = l[i], null != (c = n(e[i], i, e)) && (c += "")) {
                if (! (o = h[Sd + c])) throw new Error("missing: " + c);
                if (o === Td) throw new Error("ambiguous: " + c);
                o.children ? o.children.push(a) : o.children = [a],
                a.parent = o
            } else {
                if (u) throw new Error("multiple roots");
                u = a
            }
            if (!u) throw new Error("no root");
            if (u.parent = kd, u.eachBefore(function(t) {
                t.depth = t.parent.depth + 1,
                --s
            }).eachBefore(Qh), u.parent = null, s > 0) throw new Error("cycle");
            return u
        }
        return e.id = function(n) {
            return arguments.length ? (t = pd(n), e) : t
        },
        e.parentId = function(t) {
            return arguments.length ? (n = pd(t), e) : n
        },
        e
    };
    function Pd(t, n) {
        return t.parent === n.parent ? 1 : 2
    }
    function zd(t) {
        var n = t.children;
        return n ? n[0] : t.t
    }
    function Rd(t) {
        var n = t.children;
        return n ? n[n.length - 1] : t.t
    }
    function Ld(t, n, e) {
        var r = e / (n.i - t.i);
        n.c -= r,
        n.s += e,
        t.c += r,
        n.z += e,
        n.m += e
    }
    function Dd(t, n, e) {
        return t.a.parent === n.parent ? t.a: e
    }
    function Ud(t, n) {
        this._ = t,
        this.parent = null,
        this.children = null,
        this.A = null,
        this.a = this,
        this.z = 0,
        this.m = 0,
        this.c = 0,
        this.s = 0,
        this.t = null,
        this.i = n
    }
    Ud.prototype = Object.create(Jh.prototype);
    var Od = function() {
        var t = Pd,
        n = 1,
        e = 1,
        r = null;
        function i(i) {
            var c = function(t) {
                for (var n, e, r, i, u, o = new Ud(t, 0), a = [o]; n = a.pop();) if (r = n._.children) for (n.children = new Array(u = r.length), i = u - 1; i >= 0; --i) a.push(e = n.children[i] = new Ud(r[i], i)),
                e.parent = n;
                return (o.parent = new Ud(null, 0)).children = [o],
                o
            } (i);
            if (c.eachAfter(u), c.parent.m = -c.z, c.eachBefore(o), r) i.eachBefore(a);
            else {
                var f = i,
                s = i,
                l = i;
                i.eachBefore(function(t) {
                    t.x < f.x && (f = t),
                    t.x > s.x && (s = t),
                    t.depth > l.depth && (l = t)
                });
                var h = f === s ? 1 : t(f, s) / 2,
                d = h - f.x,
                p = n / (s.x + h + d),
                v = e / (l.depth || 1);
                i.eachBefore(function(t) {
                    t.x = (t.x + d) * p,
                    t.y = t.depth * v
                })
            }
            return i
        }
        function u(n) {
            var e = n.children,
            r = n.parent.children,
            i = n.i ? r[n.i - 1] : null;
            if (e) { !
                function(t) {
                    for (var n, e = 0,
                    r = 0,
                    i = t.children,
                    u = i.length; --u >= 0;)(n = i[u]).z += e,
                    n.m += e,
                    e += n.s + (r += n.c)
                } (n);
                var u = (e[0].z + e[e.length - 1].z) / 2;
                i ? (n.z = i.z + t(n._, i._), n.m = n.z - u) : n.z = u
            } else i && (n.z = i.z + t(n._, i._));
            n.parent.A = function(n, e, r) {
                if (e) {
                    for (var i, u = n,
                    o = n,
                    a = e,
                    c = u.parent.children[0], f = u.m, s = o.m, l = a.m, h = c.m; a = Rd(a), u = zd(u), a && u;) c = zd(c),
                    (o = Rd(o)).a = n,
                    (i = a.z + l - u.z - f + t(a._, u._)) > 0 && (Ld(Dd(a, n, r), n, i), f += i, s += i),
                    l += a.m,
                    f += u.m,
                    h += c.m,
                    s += o.m;
                    a && !Rd(o) && (o.t = a, o.m += l - s),
                    u && !zd(c) && (c.t = u, c.m += f - h, r = n)
                }
                return r
            } (n, i, n.parent.A || r[0])
        }
        function o(t) {
            t._.x = t.z + t.parent.m,
            t.m += t.parent.m
        }
        function a(t) {
            t.x *= n,
            t.y = t.depth * e
        }
        return i.separation = function(n) {
            return arguments.length ? (t = n, i) : t
        },
        i.size = function(t) {
            return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null: [n, e]
        },
        i.nodeSize = function(t) {
            return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null
        },
        i
    },
    qd = function(t, n, e, r, i) {
        for (var u, o = t.children,
        a = -1,
        c = o.length,
        f = t.value && (i - e) / t.value; ++a < c;)(u = o[a]).x0 = n,
        u.x1 = r,
        u.y0 = e,
        u.y1 = e += u.value * f
    },
    Yd = (1 + Math.sqrt(5)) / 2;
    function Bd(t, n, e, r, i, u) {
        for (var o, a, c, f, s, l, h, d, p, v, g, y = [], b = n.children, _ = 0, m = 0, x = b.length, w = n.value; _ < x;) {
            c = i - e,
            f = u - r;
            do {
                s = b[m++].value
            } while (! s && m < x );
            for (l = h = s, g = s * s * (v = Math.max(f / c, c / f) / (w * t)), p = Math.max(h / g, g / l); m < x; ++m) {
                if (s += a = b[m].value, a < l && (l = a), a > h && (h = a), g = s * s * v, (d = Math.max(h / g, g / l)) > p) {
                    s -= a;
                    break
                }
                p = d
            }
            y.push(o = {
                value: s,
                dice: c < f,
                children: b.slice(_, m)
            }),
            o.dice ? Md(o, e, r, i, w ? r += f * s / w: u) : qd(o, e, r, w ? e += c * s / w: i, u),
            w -= s,
            _ = m
        }
        return y
    }
    var Id = function t(n) {
        function e(t, e, r, i, u) {
            Bd(n, t, e, r, i, u)
        }
        return e.ratio = function(n) {
            return t((n = +n) > 1 ? n: 1)
        },
        e
    } (Yd),
    Fd = function() {
        var t = Id,
        n = !1,
        e = 1,
        r = 1,
        i = [0],
        u = vd,
        o = vd,
        a = vd,
        c = vd,
        f = vd;
        function s(t) {
            return t.x0 = t.y0 = 0,
            t.x1 = e,
            t.y1 = r,
            t.eachBefore(l),
            i = [0],
            n && t.eachBefore(wd),
            t
        }
        function l(n) {
            var e = i[n.depth],
            r = n.x0 + e,
            s = n.y0 + e,
            l = n.x1 - e,
            h = n.y1 - e;
            l < r && (r = l = (r + l) / 2),
            h < s && (s = h = (s + h) / 2),
            n.x0 = r,
            n.y0 = s,
            n.x1 = l,
            n.y1 = h,
            n.children && (e = i[n.depth + 1] = u(n) / 2, r += f(n) - e, s += o(n) - e, l -= a(n) - e, h -= c(n) - e, l < r && (r = l = (r + l) / 2), h < s && (s = h = (s + h) / 2), t(n, r, s, l, h))
        }
        return s.round = function(t) {
            return arguments.length ? (n = !!t, s) : n
        },
        s.size = function(t) {
            return arguments.length ? (e = +t[0], r = +t[1], s) : [e, r]
        },
        s.tile = function(n) {
            return arguments.length ? (t = pd(n), s) : t
        },
        s.padding = function(t) {
            return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner()
        },
        s.paddingInner = function(t) {
            return arguments.length ? (u = "function" == typeof t ? t: gd( + t), s) : u
        },
        s.paddingOuter = function(t) {
            return arguments.length ? s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : s.paddingTop()
        },
        s.paddingTop = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t: gd( + t), s) : o
        },
        s.paddingRight = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t: gd( + t), s) : a
        },
        s.paddingBottom = function(t) {
            return arguments.length ? (c = "function" == typeof t ? t: gd( + t), s) : c
        },
        s.paddingLeft = function(t) {
            return arguments.length ? (f = "function" == typeof t ? t: gd( + t), s) : f
        },
        s
    },
    jd = function(t, n, e, r, i) {
        var u, o, a = t.children,
        c = a.length,
        f = new Array(c + 1);
        for (f[0] = o = u = 0; u < c; ++u) f[u + 1] = o += a[u].value; !
        function t(n, e, r, i, u, o, c) {
            if (n >= e - 1) {
                var s = a[n];
                return s.x0 = i,
                s.y0 = u,
                s.x1 = o,
                void(s.y1 = c)
            }
            var l = f[n],
            h = r / 2 + l,
            d = n + 1,
            p = e - 1;
            for (; d < p;) {
                var v = d + p >>> 1;
                f[v] < h ? d = v + 1 : p = v
            }
            h - f[d - 1] < f[d] - h && n + 1 < d && --d;
            var g = f[d] - l,
            y = r - g;
            if (o - i > c - u) {
                var b = (i * y + o * g) / r;
                t(n, d, g, i, u, b, c),
                t(d, e, y, b, u, o, c)
            } else {
                var _ = (u * y + c * g) / r;
                t(n, d, g, i, u, o, _),
                t(d, e, y, i, _, o, c)
            }
        } (0, c, t.value, n, e, r, i)
    },
    Hd = function(t, n, e, r, i) { (1 & t.depth ? qd: Md)(t, n, e, r, i)
    },
    Xd = function t(n) {
        function e(t, e, r, i, u) {
            if ((o = t._squarify) && o.ratio === n) for (var o, a, c, f, s, l = -1,
            h = o.length,
            d = t.value; ++l < h;) {
                for (c = (a = o[l]).children, f = a.value = 0, s = c.length; f < s; ++f) a.value += c[f].value;
                a.dice ? Md(a, e, r, i, r += (u - r) * a.value / d) : qd(a, e, r, e += (i - e) * a.value / d, u),
                d -= a.value
            } else t._squarify = o = Bd(n, t, e, r, i, u),
            o.ratio = n
        }
        return e.ratio = function(n) {
            return t((n = +n) > 1 ? n: 1)
        },
        e
    } (Yd),
    Gd = function(t) {
        for (var n, e = -1,
        r = t.length,
        i = t[r - 1], u = 0; ++e < r;) n = i,
        i = t[e],
        u += n[1] * i[0] - n[0] * i[1];
        return u / 2
    },
    Vd = function(t) {
        for (var n, e, r = -1,
        i = t.length,
        u = 0,
        o = 0,
        a = t[i - 1], c = 0; ++r < i;) n = a,
        a = t[r],
        c += e = n[0] * a[1] - a[0] * n[1],
        u += (n[0] + a[0]) * e,
        o += (n[1] + a[1]) * e;
        return [u / (c *= 3), o / c]
    },
    $d = function(t, n, e) {
        return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
    };
    function Wd(t, n) {
        return t[0] - n[0] || t[1] - n[1]
    }
    function Zd(t) {
        for (var n = t.length,
        e = [0, 1], r = 2, i = 2; i < n; ++i) {
            for (; r > 1 && $d(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;)--r;
            e[r++] = i
        }
        return e.slice(0, r)
    }
    var Qd = function(t) {
        if ((e = t.length) < 3) return null;
        var n, e, r = new Array(e),
        i = new Array(e);
        for (n = 0; n < e; ++n) r[n] = [ + t[n][0], +t[n][1], n];
        for (r.sort(Wd), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
        var u = Zd(r),
        o = Zd(i),
        a = o[0] === u[0],
        c = o[o.length - 1] === u[u.length - 1],
        f = [];
        for (n = u.length - 1; n >= 0; --n) f.push(t[r[u[n]][2]]);
        for (n = +a; n < o.length - c; ++n) f.push(t[r[o[n]][2]]);
        return f
    },
    Jd = function(t, n) {
        for (var e, r, i = t.length,
        u = t[i - 1], o = n[0], a = n[1], c = u[0], f = u[1], s = !1, l = 0; l < i; ++l) e = (u = t[l])[0],
        (r = u[1]) > a != f > a && o < (c - e) * (a - r) / (f - r) + e && (s = !s),
        c = e,
        f = r;
        return s
    },
    Kd = function(t) {
        for (var n, e, r = -1,
        i = t.length,
        u = t[i - 1], o = u[0], a = u[1], c = 0; ++r < i;) n = o,
        e = a,
        n -= o = (u = t[r])[0],
        e -= a = u[1],
        c += Math.sqrt(n * n + e * e);
        return c
    },
    tp = function() {
        return Math.random()
    },
    np = function t(n) {
        function e(t, e) {
            return t = null == t ? 0 : +t,
            e = null == e ? 1 : +e,
            1 === arguments.length ? (e = t, t = 0) : e -= t,
            function() {
                return n() * e + t
            }
        }
        return e.source = t,
        e
    } (tp),
    ep = function t(n) {
        function e(t, e) {
            var r, i;
            return t = null == t ? 0 : +t,
            e = null == e ? 1 : +e,
            function() {
                var u;
                if (null != r) u = r,
                r = null;
                else do {
                    r = 2 * n() - 1, u = 2 * n() - 1, i = r * r + u * u
                } while (! i || i > 1 );
                return t + e * u * Math.sqrt( - 2 * Math.log(i) / i)
            }
        }
        return e.source = t,
        e
    } (tp),
    rp = function t(n) {
        function e() {
            var t = ep.source(n).apply(this, arguments);
            return function() {
                return Math.exp(t())
            }
        }
        return e.source = t,
        e
    } (tp),
    ip = function t(n) {
        function e(t) {
            return function() {
                for (var e = 0,
                r = 0; r < t; ++r) e += n();
                return e
            }
        }
        return e.source = t,
        e
    } (tp),
    up = function t(n) {
        function e(t) {
            var e = ip.source(n)(t);
            return function() {
                return e() / t
            }
        }
        return e.source = t,
        e
    } (tp),
    op = function t(n) {
        function e(t) {
            return function() {
                return - Math.log(1 - n()) / t
            }
        }
        return e.source = t,
        e
    } (tp),
    ap = Array.prototype,
    cp = ap.map,
    fp = ap.slice,
    sp = {
        name: "implicit"
    };
    function lp(t) {
        var n = Wu(),
        e = [],
        r = sp;
        function i(i) {
            var u = i + "",
            o = n.get(u);
            if (!o) {
                if (r !== sp) return r;
                n.set(u, o = e.push(i))
            }
            return t[(o - 1) % t.length]
        }
        return t = null == t ? [] : fp.call(t),
        i.domain = function(t) {
            if (!arguments.length) return e.slice();
            e = [],
            n = Wu();
            for (var r, u, o = -1,
            a = t.length; ++o < a;) n.has(u = (r = t[o]) + "") || n.set(u, e.push(r));
            return i
        },
        i.range = function(n) {
            return arguments.length ? (t = fp.call(n), i) : t.slice()
        },
        i.unknown = function(t) {
            return arguments.length ? (r = t, i) : r
        },
        i.copy = function() {
            return lp().domain(e).range(t).unknown(r)
        },
        i
    }
    function hp() {
        var t, n, e = lp().unknown(void 0),
        r = e.domain,
        i = e.range,
        u = [0, 1],
        o = !1,
        a = 0,
        c = 0,
        f = .5;
        function s() {
            var e = r().length,
            s = u[1] < u[0],
            l = u[s - 0],
            h = u[1 - s];
            t = (h - l) / Math.max(1, e - a + 2 * c),
            o && (t = Math.floor(t)),
            l += (h - l - t * (e - a)) * f,
            n = t * (1 - a),
            o && (l = Math.round(l), n = Math.round(n));
            var d = w(e).map(function(n) {
                return l + t * n
            });
            return i(s ? d.reverse() : d)
        }
        return delete e.unknown,
        e.domain = function(t) {
            return arguments.length ? (r(t), s()) : r()
        },
        e.range = function(t) {
            return arguments.length ? (u = [ + t[0], +t[1]], s()) : u.slice()
        },
        e.rangeRound = function(t) {
            return u = [ + t[0], +t[1]],
            o = !0,
            s()
        },
        e.bandwidth = function() {
            return n
        },
        e.step = function() {
            return t
        },
        e.round = function(t) {
            return arguments.length ? (o = !!t, s()) : o
        },
        e.padding = function(t) {
            return arguments.length ? (a = c = Math.max(0, Math.min(1, t)), s()) : a
        },
        e.paddingInner = function(t) {
            return arguments.length ? (a = Math.max(0, Math.min(1, t)), s()) : a
        },
        e.paddingOuter = function(t) {
            return arguments.length ? (c = Math.max(0, Math.min(1, t)), s()) : c
        },
        e.align = function(t) {
            return arguments.length ? (f = Math.max(0, Math.min(1, t)), s()) : f
        },
        e.copy = function() {
            return hp().domain(r()).range(u).round(o).paddingInner(a).paddingOuter(c).align(f)
        },
        s()
    }
    function dp() {
        return function t(n) {
            var e = n.copy;
            return n.padding = n.paddingOuter,
            delete n.paddingInner,
            delete n.paddingOuter,
            n.copy = function() {
                return t(e())
            },
            n
        } (hp().paddingInner(1))
    }
    var pp = function(t) {
        return function() {
            return t
        }
    },
    vp = function(t) {
        return + t
    },
    gp = [0, 1];
    function yp(t, n) {
        return (n -= t = +t) ?
        function(e) {
            return (e - t) / n
        }: pp(n)
    }
    function bp(t, n, e, r) {
        var i = t[0],
        u = t[1],
        o = n[0],
        a = n[1];
        return u < i ? (i = e(u, i), o = r(a, o)) : (i = e(i, u), o = r(o, a)),
        function(t) {
            return o(i(t))
        }
    }
    function _p(t, n, e, r) {
        var i = Math.min(t.length, n.length) - 1,
        u = new Array(i),
        o = new Array(i),
        a = -1;
        for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < i;) u[a] = e(t[a], t[a + 1]),
        o[a] = r(n[a], n[a + 1]);
        return function(n) {
            var e = c(t, n, 1, i) - 1;
            return o[e](u[e](n))
        }
    }
    function mp(t, n) {
        return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
    }
    function xp(t, n) {
        var e, r, i, u = gp,
        o = gp,
        a = Qe,
        c = !1;
        function f() {
            return e = Math.min(u.length, o.length) > 2 ? _p: bp,
            r = i = null,
            s
        }
        function s(n) {
            return (r || (r = e(u, o, c ?
            function(t) {
                return function(n, e) {
                    var r = t(n = +n, e = +e);
                    return function(t) {
                        return t <= n ? 0 : t >= e ? 1 : r(t)
                    }
                }
            } (t) : t, a)))( + n)
        }
        return s.invert = function(t) {
            return (i || (i = e(o, u, yp, c ?
            function(t) {
                return function(n, e) {
                    var r = t(n = +n, e = +e);
                    return function(t) {
                        return t <= 0 ? n: t >= 1 ? e: r(t)
                    }
                }
            } (n) : n)))( + t)
        },
        s.domain = function(t) {
            return arguments.length ? (u = cp.call(t, vp), f()) : u.slice()
        },
        s.range = function(t) {
            return arguments.length ? (o = fp.call(t), f()) : o.slice()
        },
        s.rangeRound = function(t) {
            return o = fp.call(t),
            a = Je,
            f()
        },
        s.clamp = function(t) {
            return arguments.length ? (c = !!t, f()) : c
        },
        s.interpolate = function(t) {
            return arguments.length ? (a = t, f()) : a
        },
        f()
    }
    var wp = function(t, n, e) {
        var r, i = t[0],
        u = t[t.length - 1],
        o = N(i, u, null == n ? 10 : n);
        switch ((e = La(null == e ? ",f": e)).type) {
        case "s":
            var a = Math.max(Math.abs(i), Math.abs(u));
            return null != e.precision || isNaN(r = $a(o, a)) || (e.precision = r),
            Ya(e, a);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            null != e.precision || isNaN(r = Wa(o, Math.max(Math.abs(i), Math.abs(u)))) || (e.precision = r - ("e" === e.type));
            break;
        case "f":
        case "%":
            null != e.precision || isNaN(r = Va(o)) || (e.precision = r - 2 * ("%" === e.type))
        }
        return qa(e)
    };
    function Mp(t) {
        var n = t.domain;
        return t.ticks = function(t) {
            var e = n();
            return k(e[0], e[e.length - 1], null == t ? 10 : t)
        },
        t.tickFormat = function(t, e) {
            return wp(n(), t, e)
        },
        t.nice = function(e) {
            null == e && (e = 10);
            var r, i = n(),
            u = 0,
            o = i.length - 1,
            a = i[u],
            c = i[o];
            return c < a && (r = a, a = c, c = r, r = u, u = o, o = r),
            (r = T(a, c, e)) > 0 ? r = T(a = Math.floor(a / r) * r, c = Math.ceil(c / r) * r, e) : r < 0 && (r = T(a = Math.ceil(a * r) / r, c = Math.floor(c * r) / r, e)),
            r > 0 ? (i[u] = Math.floor(a / r) * r, i[o] = Math.ceil(c / r) * r, n(i)) : r < 0 && (i[u] = Math.ceil(a * r) / r, i[o] = Math.floor(c * r) / r, n(i)),
            t
        },
        t
    }
    function Ap() {
        var t = xp(yp, Fe);
        return t.copy = function() {
            return mp(t, Ap())
        },
        Mp(t)
    }
    function Sp() {
        var t = [0, 1];
        function n(t) {
            return + t
        }
        return n.invert = n,
        n.domain = n.range = function(e) {
            return arguments.length ? (t = cp.call(e, vp), n) : t.slice()
        },
        n.copy = function() {
            return Sp().domain(t)
        },
        Mp(n)
    }
    var kp = function(t, n) {
        var e, r = 0,
        i = (t = t.slice()).length - 1,
        u = t[r],
        o = t[i];
        return o < u && (e = r, r = i, i = e, e = u, u = o, o = e),
        t[r] = n.floor(u),
        t[i] = n.ceil(o),
        t
    };
    function Tp(t, n) {
        return (n = Math.log(n / t)) ?
        function(e) {
            return Math.log(e / t) / n
        }: pp(n)
    }
    function Np(t, n) {
        return t < 0 ?
        function(e) {
            return - Math.pow( - n, e) * Math.pow( - t, 1 - e)
        }: function(e) {
            return Math.pow(n, e) * Math.pow(t, 1 - e)
        }
    }
    function Ep(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
    }
    function Cp(t) {
        return 10 === t ? Ep: t === Math.E ? Math.exp: function(n) {
            return Math.pow(t, n)
        }
    }
    function Pp(t) {
        return t === Math.E ? Math.log: 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t),
        function(n) {
            return Math.log(n) / t
        })
    }
    function zp(t) {
        return function(n) {
            return - t( - n)
        }
    }
    function Rp() {
        var t = xp(Tp, Np).domain([1, 10]),
        n = t.domain,
        e = 10,
        r = Pp(10),
        i = Cp(10);
        function u() {
            return r = Pp(e),
            i = Cp(e),
            n()[0] < 0 && (r = zp(r), i = zp(i)),
            t
        }
        return t.base = function(t) {
            return arguments.length ? (e = +t, u()) : e
        },
        t.domain = function(t) {
            return arguments.length ? (n(t), u()) : n()
        },
        t.ticks = function(t) {
            var u, o = n(),
            a = o[0],
            c = o[o.length - 1]; (u = c < a) && (h = a, a = c, c = h);
            var f, s, l, h = r(a),
            d = r(c),
            p = null == t ? 10 : +t,
            v = [];
            if (! (e % 1) && d - h < p) {
                if (h = Math.round(h) - 1, d = Math.round(d) + 1, a > 0) {
                    for (; h < d; ++h) for (s = 1, f = i(h); s < e; ++s) if (! ((l = f * s) < a)) {
                        if (l > c) break;
                        v.push(l)
                    }
                } else for (; h < d; ++h) for (s = e - 1, f = i(h); s >= 1; --s) if (! ((l = f * s) < a)) {
                    if (l > c) break;
                    v.push(l)
                }
            } else v = k(h, d, Math.min(d - h, p)).map(i);
            return u ? v.reverse() : v
        },
        t.tickFormat = function(n, u) {
            if (null == u && (u = 10 === e ? ".0e": ","), "function" != typeof u && (u = qa(u)), n === 1 / 0) return u;
            null == n && (n = 10);
            var o = Math.max(1, e * n / t.ticks().length);
            return function(t) {
                var n = t / i(Math.round(r(t)));
                return n * e < e - .5 && (n *= e),
                n <= o ? u(t) : ""
            }
        },
        t.nice = function() {
            return n(kp(n(), {
                floor: function(t) {
                    return i(Math.floor(r(t)))
                },
                ceil: function(t) {
                    return i(Math.ceil(r(t)))
                }
            }))
        },
        t.copy = function() {
            return mp(t, Rp().base(e))
        },
        t
    }
    function Lp(t, n) {
        return t < 0 ? -Math.pow( - t, n) : Math.pow(t, n)
    }
    function Dp() {
        var t = 1,
        n = xp(function(n, e) {
            return (e = Lp(e, t) - (n = Lp(n, t))) ?
            function(r) {
                return (Lp(r, t) - n) / e
            }: pp(e)
        },
        function(n, e) {
            return e = Lp(e, t) - (n = Lp(n, t)),
            function(r) {
                return Lp(n + e * r, 1 / t)
            }
        }),
        e = n.domain;
        return n.exponent = function(n) {
            return arguments.length ? (t = +n, e(e())) : t
        },
        n.copy = function() {
            return mp(n, Dp().exponent(t))
        },
        Mp(n)
    }
    function Up() {
        return Dp().exponent(.5)
    }
    function Op() {
        var t = [],
        n = [],
        e = [];
        function i() {
            var r = 0,
            i = Math.max(1, n.length);
            for (e = new Array(i - 1); ++r < i;) e[r - 1] = P(t, r / i);
            return u
        }
        function u(t) {
            if (!isNaN(t = +t)) return n[c(e, t)]
        }
        return u.invertExtent = function(r) {
            var i = n.indexOf(r);
            return i < 0 ? [NaN, NaN] : [i > 0 ? e[i - 1] : t[0], i < e.length ? e[i] : t[t.length - 1]]
        },
        u.domain = function(n) {
            if (!arguments.length) return t.slice();
            t = [];
            for (var e, u = 0,
            o = n.length; u < o; ++u) null == (e = n[u]) || isNaN(e = +e) || t.push(e);
            return t.sort(r),
            i()
        },
        u.range = function(t) {
            return arguments.length ? (n = fp.call(t), i()) : n.slice()
        },
        u.quantiles = function() {
            return e.slice()
        },
        u.copy = function() {
            return Op().domain(t).range(n)
        },
        u
    }
    function qp() {
        var t = 0,
        n = 1,
        e = 1,
        r = [.5],
        i = [0, 1];
        function u(t) {
            if (t <= t) return i[c(r, t, 0, e)]
        }
        function o() {
            var i = -1;
            for (r = new Array(e); ++i < e;) r[i] = ((i + 1) * n - (i - e) * t) / (e + 1);
            return u
        }
        return u.domain = function(e) {
            return arguments.length ? (t = +e[0], n = +e[1], o()) : [t, n]
        },
        u.range = function(t) {
            return arguments.length ? (e = (i = fp.call(t)).length - 1, o()) : i.slice()
        },
        u.invertExtent = function(u) {
            var o = i.indexOf(u);
            return o < 0 ? [NaN, NaN] : o < 1 ? [t, r[0]] : o >= e ? [r[e - 1], n] : [r[o - 1], r[o]]
        },
        u.copy = function() {
            return qp().domain([t, n]).range(i)
        },
        Mp(u)
    }
    function Yp() {
        var t = [.5],
        n = [0, 1],
        e = 1;
        function r(r) {
            if (r <= r) return n[c(t, r, 0, e)]
        }
        return r.domain = function(i) {
            return arguments.length ? (t = fp.call(i), e = Math.min(t.length, n.length - 1), r) : t.slice()
        },
        r.range = function(i) {
            return arguments.length ? (n = fp.call(i), e = Math.min(t.length, n.length - 1), r) : n.slice()
        },
        r.invertExtent = function(e) {
            var r = n.indexOf(e);
            return [t[r - 1], t[r]]
        },
        r.copy = function() {
            return Yp().domain(t).range(n)
        },
        r
    }
    var Bp = new Date,
    Ip = new Date;
    function Fp(t, n, e, r) {
        function i(n) {
            return t(n = new Date( + n)),
            n
        }
        return i.floor = i,
        i.ceil = function(e) {
            return t(e = new Date(e - 1)),
            n(e, 1),
            t(e),
            e
        },
        i.round = function(t) {
            var n = i(t),
            e = i.ceil(t);
            return t - n < e - t ? n: e
        },
        i.offset = function(t, e) {
            return n(t = new Date( + t), null == e ? 1 : Math.floor(e)),
            t
        },
        i.range = function(e, r, u) {
            var o, a = [];
            if (e = i.ceil(e), u = null == u ? 1 : Math.floor(u), !(e < r && u > 0)) return a;
            do {
                a.push(o = new Date( + e)), n(e, u), t(e)
            } while ( o < e && e < r );
            return a
        },
        i.filter = function(e) {
            return Fp(function(n) {
                if (n >= n) for (; t(n), !e(n);) n.setTime(n - 1)
            },
            function(t, r) {
                if (t >= t) if (r < 0) for (; ++r <= 0;) for (; n(t, -1), !e(t););
                else for (; --r >= 0;) for (; n(t, 1), !e(t););
            })
        },
        e && (i.count = function(n, r) {
            return Bp.setTime( + n),
            Ip.setTime( + r),
            t(Bp),
            t(Ip),
            Math.floor(e(Bp, Ip))
        },
        i.every = function(t) {
            return t = Math.floor(t),
            isFinite(t) && t > 0 ? t > 1 ? i.filter(r ?
            function(n) {
                return r(n) % t == 0
            }: function(n) {
                return i.count(0, n) % t == 0
            }) : i: null
        }),
        i
    }
    var jp = Fp(function() {},
    function(t, n) {
        t.setTime( + t + n)
    },
    function(t, n) {
        return n - t
    });
    jp.every = function(t) {
        return t = Math.floor(t),
        isFinite(t) && t > 0 ? t > 1 ? Fp(function(n) {
            n.setTime(Math.floor(n / t) * t)
        },
        function(n, e) {
            n.setTime( + n + e * t)
        },
        function(n, e) {
            return (e - n) / t
        }) : jp: null
    };
    var Hp = jp,
    Xp = jp.range,
    Gp = 6e4,
    Vp = 6048e5,
    $p = Fp(function(t) {
        t.setTime(1e3 * Math.floor(t / 1e3))
    },
    function(t, n) {
        t.setTime( + t + 1e3 * n)
    },
    function(t, n) {
        return (n - t) / 1e3
    },
    function(t) {
        return t.getUTCSeconds()
    }),
    Wp = $p,
    Zp = $p.range,
    Qp = Fp(function(t) {
        t.setTime(Math.floor(t / Gp) * Gp)
    },
    function(t, n) {
        t.setTime( + t + n * Gp)
    },
    function(t, n) {
        return (n - t) / Gp
    },
    function(t) {
        return t.getMinutes()
    }),
    Jp = Qp,
    Kp = Qp.range,
    tv = Fp(function(t) {
        var n = t.getTimezoneOffset() * Gp % 36e5;
        n < 0 && (n += 36e5),
        t.setTime(36e5 * Math.floor(( + t - n) / 36e5) + n)
    },
    function(t, n) {
        t.setTime( + t + 36e5 * n)
    },
    function(t, n) {
        return (n - t) / 36e5
    },
    function(t) {
        return t.getHours()
    }),
    nv = tv,
    ev = tv.range,
    rv = Fp(function(t) {
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setDate(t.getDate() + n)
    },
    function(t, n) {
        return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Gp) / 864e5
    },
    function(t) {
        return t.getDate() - 1
    }),
    iv = rv,
    uv = rv.range;
    function ov(t) {
        return Fp(function(n) {
            n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7),
            n.setHours(0, 0, 0, 0)
        },
        function(t, n) {
            t.setDate(t.getDate() + 7 * n)
        },
        function(t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Gp) / Vp
        })
    }
    var av = ov(0),
    cv = ov(1),
    fv = ov(2),
    sv = ov(3),
    lv = ov(4),
    hv = ov(5),
    dv = ov(6),
    pv = av.range,
    vv = cv.range,
    gv = fv.range,
    yv = sv.range,
    bv = lv.range,
    _v = hv.range,
    mv = dv.range,
    xv = Fp(function(t) {
        t.setDate(1),
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setMonth(t.getMonth() + n)
    },
    function(t, n) {
        return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
    },
    function(t) {
        return t.getMonth()
    }),
    wv = xv,
    Mv = xv.range,
    Av = Fp(function(t) {
        t.setMonth(0, 1),
        t.setHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setFullYear(t.getFullYear() + n)
    },
    function(t, n) {
        return n.getFullYear() - t.getFullYear()
    },
    function(t) {
        return t.getFullYear()
    });
    Av.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Fp(function(n) {
            n.setFullYear(Math.floor(n.getFullYear() / t) * t),
            n.setMonth(0, 1),
            n.setHours(0, 0, 0, 0)
        },
        function(n, e) {
            n.setFullYear(n.getFullYear() + e * t)
        }) : null
    };
    var Sv = Av,
    kv = Av.range,
    Tv = Fp(function(t) {
        t.setUTCSeconds(0, 0)
    },
    function(t, n) {
        t.setTime( + t + n * Gp)
    },
    function(t, n) {
        return (n - t) / Gp
    },
    function(t) {
        return t.getUTCMinutes()
    }),
    Nv = Tv,
    Ev = Tv.range,
    Cv = Fp(function(t) {
        t.setUTCMinutes(0, 0, 0)
    },
    function(t, n) {
        t.setTime( + t + 36e5 * n)
    },
    function(t, n) {
        return (n - t) / 36e5
    },
    function(t) {
        return t.getUTCHours()
    }),
    Pv = Cv,
    zv = Cv.range,
    Rv = Fp(function(t) {
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCDate(t.getUTCDate() + n)
    },
    function(t, n) {
        return (n - t) / 864e5
    },
    function(t) {
        return t.getUTCDate() - 1
    }),
    Lv = Rv,
    Dv = Rv.range;
    function Uv(t) {
        return Fp(function(n) {
            n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7),
            n.setUTCHours(0, 0, 0, 0)
        },
        function(t, n) {
            t.setUTCDate(t.getUTCDate() + 7 * n)
        },
        function(t, n) {
            return (n - t) / Vp
        })
    }
    var Ov = Uv(0),
    qv = Uv(1),
    Yv = Uv(2),
    Bv = Uv(3),
    Iv = Uv(4),
    Fv = Uv(5),
    jv = Uv(6),
    Hv = Ov.range,
    Xv = qv.range,
    Gv = Yv.range,
    Vv = Bv.range,
    $v = Iv.range,
    Wv = Fv.range,
    Zv = jv.range,
    Qv = Fp(function(t) {
        t.setUTCDate(1),
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCMonth(t.getUTCMonth() + n)
    },
    function(t, n) {
        return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
    },
    function(t) {
        return t.getUTCMonth()
    }),
    Jv = Qv,
    Kv = Qv.range,
    tg = Fp(function(t) {
        t.setUTCMonth(0, 1),
        t.setUTCHours(0, 0, 0, 0)
    },
    function(t, n) {
        t.setUTCFullYear(t.getUTCFullYear() + n)
    },
    function(t, n) {
        return n.getUTCFullYear() - t.getUTCFullYear()
    },
    function(t) {
        return t.getUTCFullYear()
    });
    tg.every = function(t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Fp(function(n) {
            n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
            n.setUTCMonth(0, 1),
            n.setUTCHours(0, 0, 0, 0)
        },
        function(n, e) {
            n.setUTCFullYear(n.getUTCFullYear() + e * t)
        }) : null
    };
    var ng = tg,
    eg = tg.range;
    function rg(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date( - 1, t.m, t.d, t.H, t.M, t.S, t.L);
            return n.setFullYear(t.y),
            n
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }
    function ig(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC( - 1, t.m, t.d, t.H, t.M, t.S, t.L));
            return n.setUTCFullYear(t.y),
            n
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }
    function ug(t) {
        return {
            y: t,
            m: 0,
            d: 1,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        }
    }
    function og(t) {
        var n = t.dateTime,
        e = t.date,
        r = t.time,
        i = t.periods,
        u = t.days,
        o = t.shortDays,
        a = t.months,
        c = t.shortMonths,
        f = bg(i),
        s = _g(i),
        l = bg(u),
        h = _g(u),
        d = bg(o),
        p = _g(o),
        v = bg(a),
        g = _g(a),
        y = bg(c),
        b = _g(c),
        _ = {
            a: function(t) {
                return o[t.getDay()]
            },
            A: function(t) {
                return u[t.getDay()]
            },
            b: function(t) {
                return c[t.getMonth()]
            },
            B: function(t) {
                return a[t.getMonth()]
            },
            c: null,
            d: Yg,
            e: Yg,
            f: Hg,
            H: Bg,
            I: Ig,
            j: Fg,
            L: jg,
            m: Xg,
            M: Gg,
            p: function(t) {
                return i[ + (t.getHours() >= 12)]
            },
            Q: my,
            s: xy,
            S: Vg,
            u: $g,
            U: Wg,
            V: Zg,
            w: Qg,
            W: Jg,
            x: null,
            X: null,
            y: Kg,
            Y: ty,
            Z: ny,
            "%": _y
        },
        m = {
            a: function(t) {
                return o[t.getUTCDay()]
            },
            A: function(t) {
                return u[t.getUTCDay()]
            },
            b: function(t) {
                return c[t.getUTCMonth()]
            },
            B: function(t) {
                return a[t.getUTCMonth()]
            },
            c: null,
            d: ey,
            e: ey,
            f: ay,
            H: ry,
            I: iy,
            j: uy,
            L: oy,
            m: cy,
            M: fy,
            p: function(t) {
                return i[ + (t.getUTCHours() >= 12)]
            },
            Q: my,
            s: xy,
            S: sy,
            u: ly,
            U: hy,
            V: dy,
            w: py,
            W: vy,
            x: null,
            X: null,
            y: gy,
            Y: yy,
            Z: by,
            "%": _y
        },
        x = {
            a: function(t, n, e) {
                var r = d.exec(n.slice(e));
                return r ? (t.w = p[r[0].toLowerCase()], e + r[0].length) : -1
            },
            A: function(t, n, e) {
                var r = l.exec(n.slice(e));
                return r ? (t.w = h[r[0].toLowerCase()], e + r[0].length) : -1
            },
            b: function(t, n, e) {
                var r = y.exec(n.slice(e));
                return r ? (t.m = b[r[0].toLowerCase()], e + r[0].length) : -1
            },
            B: function(t, n, e) {
                var r = v.exec(n.slice(e));
                return r ? (t.m = g[r[0].toLowerCase()], e + r[0].length) : -1
            },
            c: function(t, e, r) {
                return A(t, n, e, r)
            },
            d: Eg,
            e: Eg,
            f: Dg,
            H: Pg,
            I: Pg,
            j: Cg,
            L: Lg,
            m: Ng,
            M: zg,
            p: function(t, n, e) {
                var r = f.exec(n.slice(e));
                return r ? (t.p = s[r[0].toLowerCase()], e + r[0].length) : -1
            },
            Q: Og,
            s: qg,
            S: Rg,
            u: xg,
            U: wg,
            V: Mg,
            w: mg,
            W: Ag,
            x: function(t, n, r) {
                return A(t, e, n, r)
            },
            X: function(t, n, e) {
                return A(t, r, n, e)
            },
            y: kg,
            Y: Sg,
            Z: Tg,
            "%": Ug
        };
        function w(t, n) {
            return function(e) {
                var r, i, u, o = [],
                a = -1,
                c = 0,
                f = t.length;
                for (e instanceof Date || (e = new Date( + e)); ++a < f;) 37 === t.charCodeAt(a) && (o.push(t.slice(c, a)), null != (i = hg[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " ": "0", (u = n[r]) && (r = u(e, i)), o.push(r), c = a + 1);
                return o.push(t.slice(c, a)),
                o.join("")
            }
        }
        function M(t, n) {
            return function(e) {
                var r, i, u = ug(1900);
                if (A(u, t, e += "", 0) != e.length) return null;
                if ("Q" in u) return new Date(u.Q);
                if ("p" in u && (u.H = u.H % 12 + 12 * u.p), "V" in u) {
                    if (u.V < 1 || u.V > 53) return null;
                    "w" in u || (u.w = 1),
                    "Z" in u ? (r = (i = (r = ig(ug(u.y))).getUTCDay()) > 4 || 0 === i ? qv.ceil(r) : qv(r), r = Lv.offset(r, 7 * (u.V - 1)), u.y = r.getUTCFullYear(), u.m = r.getUTCMonth(), u.d = r.getUTCDate() + (u.w + 6) % 7) : (r = (i = (r = n(ug(u.y))).getDay()) > 4 || 0 === i ? cv.ceil(r) : cv(r), r = iv.offset(r, 7 * (u.V - 1)), u.y = r.getFullYear(), u.m = r.getMonth(), u.d = r.getDate() + (u.w + 6) % 7)
                } else("W" in u || "U" in u) && ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0), i = "Z" in u ? ig(ug(u.y)).getUTCDay() : n(ug(u.y)).getDay(), u.m = 0, u.d = "W" in u ? (u.w + 6) % 7 + 7 * u.W - (i + 5) % 7 : u.w + 7 * u.U - (i + 6) % 7);
                return "Z" in u ? (u.H += u.Z / 100 | 0, u.M += u.Z % 100, ig(u)) : n(u)
            }
        }
        function A(t, n, e, r) {
            for (var i, u, o = 0,
            a = n.length,
            c = e.length; o < a;) {
                if (r >= c) return - 1;
                if (37 === (i = n.charCodeAt(o++))) {
                    if (i = n.charAt(o++), !(u = x[i in hg ? n.charAt(o++) : i]) || (r = u(t, e, r)) < 0) return - 1
                } else if (i != e.charCodeAt(r++)) return - 1
            }
            return r
        }
        return _.x = w(e, _),
        _.X = w(r, _),
        _.c = w(n, _),
        m.x = w(e, m),
        m.X = w(r, m),
        m.c = w(n, m),
        {
            format: function(t) {
                var n = w(t += "", _);
                return n.toString = function() {
                    return t
                },
                n
            },
            parse: function(t) {
                var n = M(t += "", rg);
                return n.toString = function() {
                    return t
                },
                n
            },
            utcFormat: function(t) {
                var n = w(t += "", m);
                return n.toString = function() {
                    return t
                },
                n
            },
            utcParse: function(t) {
                var n = M(t, ig);
                return n.toString = function() {
                    return t
                },
                n
            }
        }
    }
    var ag, cg, fg, sg, lg, hg = {
        "-": "",
        _: " ",
        0 : "0"
    },
    dg = /^\s*\d+/,
    pg = /^%/,
    vg = /[\\^$*+?|[\]().{}]/g;
    function gg(t, n, e) {
        var r = t < 0 ? "-": "",
        i = (r ? -t: t) + "",
        u = i.length;
        return r + (u < e ? new Array(e - u + 1).join(n) + i: i)
    }
    function yg(t) {
        return t.replace(vg, "\\$&")
    }
    function bg(t) {
        return new RegExp("^(?:" + t.map(yg).join("|") + ")", "i")
    }
    function _g(t) {
        for (var n = {},
        e = -1,
        r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
        return n
    }
    function mg(t, n, e) {
        var r = dg.exec(n.slice(e, e + 1));
        return r ? (t.w = +r[0], e + r[0].length) : -1
    }
    function xg(t, n, e) {
        var r = dg.exec(n.slice(e, e + 1));
        return r ? (t.u = +r[0], e + r[0].length) : -1
    }
    function wg(t, n, e) {
        var r = dg.exec(n.slice(e, e + 2));
        return r ? (t.U = +r[0], e + r[0].length) : -1
    }
    function Mg(t, n, e) {
        var r = dg.exec(n.slice(e, e + 2));
        return r ? (t.V = +r[0], e + r[0].length) : -1
    }
    function Ag(t, n, e) {
        var r = dg.exec(n.slice(e, e + 2));
        return r ? (t.W = +r[0], e + r[0].length) : -1
    }
    function Sg(t, n, e) {
        var r = dg.exec(n.slice(e, e + 4));
        return r ? (t.y = +r[0], e + r[0].length) : -1
    }
    function kg(t, n, e) {
        var r = dg.exec(n.slice(e, e + 2));
        return r ? (t.y = +r[0] + ( + r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
    }
    function Tg(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
        return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
    }
    function Ng(t, n, e) {
        var r = dg.exec(n.slice(e, e + 2));
        return r ? (t.m = r[0] - 1, e + r[0].length) : -1
    }
    function Eg(t, n, e) {
        var r = dg.exec(n.slice(e, e + 2));
        return r ? (t.d = +r[0], e + r[0].length) : -1
    }
    function Cg(t, n, e) {
        var r = dg.exec(n.slice(e, e + 3));
        return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
    }
    function Pg(t, n, e) {
        var r = dg.exec(n.slice(e, e + 2));
        return r ? (t.H = +r[0], e + r[0].length) : -1
    }
    function zg(t, n, e) {
        var r = dg.exec(n.slice(e, e + 2));
        return r ? (t.M = +r[0], e + r[0].length) : -1
    }
    function Rg(t, n, e) {
        var r = dg.exec(n.slice(e, e + 2));
        return r ? (t.S = +r[0], e + r[0].length) : -1
    }
    function Lg(t, n, e) {
        var r = dg.exec(n.slice(e, e + 3));
        return r ? (t.L = +r[0], e + r[0].length) : -1
    }
    function Dg(t, n, e) {
        var r = dg.exec(n.slice(e, e + 6));
        return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
    }
    function Ug(t, n, e) {
        var r = pg.exec(n.slice(e, e + 1));
        return r ? e + r[0].length: -1
    }
    function Og(t, n, e) {
        var r = dg.exec(n.slice(e));
        return r ? (t.Q = +r[0], e + r[0].length) : -1
    }
    function qg(t, n, e) {
        var r = dg.exec(n.slice(e));
        return r ? (t.Q = 1e3 * +r[0], e + r[0].length) : -1
    }
    function Yg(t, n) {
        return gg(t.getDate(), n, 2)
    }
    function Bg(t, n) {
        return gg(t.getHours(), n, 2)
    }
    function Ig(t, n) {
        return gg(t.getHours() % 12 || 12, n, 2)
    }
    function Fg(t, n) {
        return gg(1 + iv.count(Sv(t), t), n, 3)
    }
    function jg(t, n) {
        return gg(t.getMilliseconds(), n, 3)
    }
    function Hg(t, n) {
        return jg(t, n) + "000"
    }
    function Xg(t, n) {
        return gg(t.getMonth() + 1, n, 2)
    }
    function Gg(t, n) {
        return gg(t.getMinutes(), n, 2)
    }
    function Vg(t, n) {
        return gg(t.getSeconds(), n, 2)
    }
    function $g(t) {
        var n = t.getDay();
        return 0 === n ? 7 : n
    }
    function Wg(t, n) {
        return gg(av.count(Sv(t), t), n, 2)
    }
    function Zg(t, n) {
        var e = t.getDay();
        return t = e >= 4 || 0 === e ? lv(t) : lv.ceil(t),
        gg(lv.count(Sv(t), t) + (4 === Sv(t).getDay()), n, 2)
    }
    function Qg(t) {
        return t.getDay()
    }
    function Jg(t, n) {
        return gg(cv.count(Sv(t), t), n, 2)
    }
    function Kg(t, n) {
        return gg(t.getFullYear() % 100, n, 2)
    }
    function ty(t, n) {
        return gg(t.getFullYear() % 1e4, n, 4)
    }
    function ny(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-": (n *= -1, "+")) + gg(n / 60 | 0, "0", 2) + gg(n % 60, "0", 2)
    }
    function ey(t, n) {
        return gg(t.getUTCDate(), n, 2)
    }
    function ry(t, n) {
        return gg(t.getUTCHours(), n, 2)
    }
    function iy(t, n) {
        return gg(t.getUTCHours() % 12 || 12, n, 2)
    }
    function uy(t, n) {
        return gg(1 + Lv.count(ng(t), t), n, 3)
    }
    function oy(t, n) {
        return gg(t.getUTCMilliseconds(), n, 3)
    }
    function ay(t, n) {
        return oy(t, n) + "000"
    }
    function cy(t, n) {
        return gg(t.getUTCMonth() + 1, n, 2)
    }
    function fy(t, n) {
        return gg(t.getUTCMinutes(), n, 2)
    }
    function sy(t, n) {
        return gg(t.getUTCSeconds(), n, 2)
    }
    function ly(t) {
        var n = t.getUTCDay();
        return 0 === n ? 7 : n
    }
    function hy(t, n) {
        return gg(Ov.count(ng(t), t), n, 2)
    }
    function dy(t, n) {
        var e = t.getUTCDay();
        return t = e >= 4 || 0 === e ? Iv(t) : Iv.ceil(t),
        gg(Iv.count(ng(t), t) + (4 === ng(t).getUTCDay()), n, 2)
    }
    function py(t) {
        return t.getUTCDay()
    }
    function vy(t, n) {
        return gg(qv.count(ng(t), t), n, 2)
    }
    function gy(t, n) {
        return gg(t.getUTCFullYear() % 100, n, 2)
    }
    function yy(t, n) {
        return gg(t.getUTCFullYear() % 1e4, n, 4)
    }
    function by() {
        return "+0000"
    }
    function _y() {
        return "%"
    }
    function my(t) {
        return + t
    }
    function xy(t) {
        return Math.floor( + t / 1e3)
    }
    function wy(t) {
        return ag = og(t),
        cg = ag.format,
        fg = ag.parse,
        sg = ag.utcFormat,
        lg = ag.utcParse,
        ag
    }
    wy({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    var My = Date.prototype.toISOString ?
    function(t) {
        return t.toISOString()
    }: sg("%Y-%m-%dT%H:%M:%S.%LZ");
    var Ay = +new Date("2000-01-01T00:00:00.000Z") ?
    function(t) {
        var n = new Date(t);
        return isNaN(n) ? null: n
    }: lg("%Y-%m-%dT%H:%M:%S.%LZ"),
    Sy = 1e3,
    ky = 60 * Sy,
    Ty = 60 * ky,
    Ny = 24 * Ty,
    Ey = 7 * Ny,
    Cy = 30 * Ny,
    Py = 365 * Ny;
    function zy(t) {
        return new Date(t)
    }
    function Ry(t) {
        return t instanceof Date ? +t: +new Date( + t)
    }
    function Ly(t, n, e, r, u, o, a, c, f) {
        var s = xp(yp, Fe),
        l = s.invert,
        h = s.domain,
        d = f(".%L"),
        p = f(":%S"),
        v = f("%I:%M"),
        g = f("%I %p"),
        y = f("%a %d"),
        b = f("%b %d"),
        _ = f("%B"),
        m = f("%Y"),
        x = [[a, 1, Sy], [a, 5, 5 * Sy], [a, 15, 15 * Sy], [a, 30, 30 * Sy], [o, 1, ky], [o, 5, 5 * ky], [o, 15, 15 * ky], [o, 30, 30 * ky], [u, 1, Ty], [u, 3, 3 * Ty], [u, 6, 6 * Ty], [u, 12, 12 * Ty], [r, 1, Ny], [r, 2, 2 * Ny], [e, 1, Ey], [n, 1, Cy], [n, 3, 3 * Cy], [t, 1, Py]];
        function w(i) {
            return (a(i) < i ? d: o(i) < i ? p: u(i) < i ? v: r(i) < i ? g: n(i) < i ? e(i) < i ? y: b: t(i) < i ? _: m)(i)
        }
        function M(n, e, r, u) {
            if (null == n && (n = 10), "number" == typeof n) {
                var o = Math.abs(r - e) / n,
                a = i(function(t) {
                    return t[2]
                }).right(x, o);
                a === x.length ? (u = N(e / Py, r / Py, n), n = t) : a ? (u = (a = x[o / x[a - 1][2] < x[a][2] / o ? a - 1 : a])[1], n = a[0]) : (u = Math.max(N(e, r, n), 1), n = c)
            }
            return null == u ? n: n.every(u)
        }
        return s.invert = function(t) {
            return new Date(l(t))
        },
        s.domain = function(t) {
            return arguments.length ? h(cp.call(t, Ry)) : h().map(zy)
        },
        s.ticks = function(t, n) {
            var e, r = h(),
            i = r[0],
            u = r[r.length - 1],
            o = u < i;
            return o && (e = i, i = u, u = e),
            e = (e = M(t, i, u, n)) ? e.range(i, u + 1) : [],
            o ? e.reverse() : e
        },
        s.tickFormat = function(t, n) {
            return null == n ? w: f(n)
        },
        s.nice = function(t, n) {
            var e = h();
            return (t = M(t, e[0], e[e.length - 1], n)) ? h(kp(e, t)) : s
        },
        s.copy = function() {
            return mp(s, Ly(t, n, e, r, u, o, a, c, f))
        },
        s
    }
    var Dy = function() {
        return Ly(Sv, wv, av, iv, nv, Jp, Wp, Hp, cg).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
    },
    Uy = function() {
        return Ly(ng, Jv, Ov, Lv, Pv, Nv, Wp, Hp, sg).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
    };
    function Oy(t) {
        var n = 0,
        e = 1,
        r = 1,
        i = !1;
        function u(e) {
            var u = (e - n) * r;
            return t(i ? Math.max(0, Math.min(1, u)) : u)
        }
        return u.domain = function(t) {
            return arguments.length ? (n = +t[0], e = +t[1], r = n === e ? 0 : 1 / (e - n), u) : [n, e]
        },
        u.clamp = function(t) {
            return arguments.length ? (i = !!t, u) : i
        },
        u.interpolator = function(n) {
            return arguments.length ? (t = n, u) : t
        },
        u.copy = function() {
            return Oy(t).domain([n, e]).clamp(i)
        },
        Mp(u)
    }
    function qy(t) {
        var n = 0,
        e = .5,
        r = 1,
        i = 1,
        u = 1,
        o = !1;
        function a(n) {
            var r = .5 + ((n = +n) - e) * (n < e ? i: u);
            return t(o ? Math.max(0, Math.min(1, r)) : r)
        }
        return a.domain = function(t) {
            return arguments.length ? (n = +t[0], e = +t[1], r = +t[2], i = n === e ? 0 : .5 / (e - n), u = e === r ? 0 : .5 / (r - e), a) : [n, e, r]
        },
        a.clamp = function(t) {
            return arguments.length ? (o = !!t, a) : o
        },
        a.interpolator = function(n) {
            return arguments.length ? (t = n, a) : t
        },
        a.copy = function() {
            return qy(t).domain([n, e, r]).clamp(o)
        },
        Mp(a)
    }
    var Yy = function(t) {
        for (var n = t.length / 6 | 0,
        e = new Array(n), r = 0; r < n;) e[r] = "#" + t.slice(6 * r, 6 * ++r);
        return e
    },
    By = Yy("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
    Iy = Yy("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
    Fy = Yy("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
    jy = Yy("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
    Hy = Yy("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
    Xy = Yy("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
    Gy = Yy("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
    Vy = Yy("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
    $y = Yy("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
    Wy = function(t) {
        return qe(t[t.length - 1])
    },
    Zy = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Yy),
    Qy = Wy(Zy),
    Jy = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Yy),
    Ky = Wy(Jy),
    tb = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Yy),
    nb = Wy(tb),
    eb = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Yy),
    rb = Wy(eb),
    ib = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Yy),
    ub = Wy(ib),
    ob = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Yy),
    ab = Wy(ob),
    cb = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Yy),
    fb = Wy(cb),
    sb = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Yy),
    lb = Wy(sb),
    hb = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Yy),
    db = Wy(hb),
    pb = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Yy),
    vb = Wy(pb),
    gb = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Yy),
    yb = Wy(gb),
    bb = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Yy),
    _b = Wy(bb),
    mb = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Yy),
    xb = Wy(mb),
    wb = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Yy),
    Mb = Wy(wb),
    Ab = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Yy),
    Sb = Wy(Ab),
    kb = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Yy),
    Tb = Wy(kb),
    Nb = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Yy),
    Eb = Wy(Nb),
    Cb = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Yy),
    Pb = Wy(Cb),
    zb = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Yy),
    Rb = Wy(zb),
    Lb = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Yy),
    Db = Wy(Lb),
    Ub = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Yy),
    Ob = Wy(Ub),
    qb = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Yy),
    Yb = Wy(qb),
    Bb = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Yy),
    Ib = Wy(Bb),
    Fb = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Yy),
    jb = Wy(Fb),
    Hb = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Yy),
    Xb = Wy(Hb),
    Gb = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Yy),
    Vb = Wy(Gb),
    $b = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Yy),
    Wb = Wy($b),
    Zb = yr(ke(300, .5, 0), ke( - 240, .5, 1)),
    Qb = yr(ke( - 100, .75, .35), ke(80, 1.5, .8)),
    Jb = yr(ke(260, .75, .35), ke(80, 1.5, .8)),
    Kb = ke(),
    t_ = function(t) { (t < 0 || t > 1) && (t -= Math.floor(t));
        var n = Math.abs(t - .5);
        return Kb.h = 360 * t - 100,
        Kb.s = 1.5 - 1.5 * n,
        Kb.l = .8 - .9 * n,
        Kb + ""
    },
    n_ = Gn(),
    e_ = Math.PI / 3,
    r_ = 2 * Math.PI / 3,
    i_ = function(t) {
        var n;
        return t = (.5 - t) * Math.PI,
        n_.r = 255 * (n = Math.sin(t)) * n,
        n_.g = 255 * (n = Math.sin(t + e_)) * n,
        n_.b = 255 * (n = Math.sin(t + r_)) * n,
        n_ + ""
    };
    function u_(t) {
        var n = t.length;
        return function(e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
        }
    }
    var o_ = u_(Yy("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
    a_ = u_(Yy("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
    c_ = u_(Yy("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
    f_ = u_(Yy("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
    s_ = function(t) {
        return function() {
            return t
        }
    },
    l_ = Math.abs,
    h_ = Math.atan2,
    d_ = Math.cos,
    p_ = Math.max,
    v_ = Math.min,
    g_ = Math.sin,
    y_ = Math.sqrt,
    b_ = 1e-12,
    __ = Math.PI,
    m_ = __ / 2,
    x_ = 2 * __;
    function w_(t) {
        return t >= 1 ? m_: t <= -1 ? -m_: Math.asin(t)
    }
    function M_(t) {
        return t.innerRadius
    }
    function A_(t) {
        return t.outerRadius
    }
    function S_(t) {
        return t.startAngle
    }
    function k_(t) {
        return t.endAngle
    }
    function T_(t) {
        return t && t.padAngle
    }
    function N_(t, n, e, r, i, u, o) {
        var a = t - e,
        c = n - r,
        f = (o ? u: -u) / y_(a * a + c * c),
        s = f * c,
        l = -f * a,
        h = t + s,
        d = n + l,
        p = e + s,
        v = r + l,
        g = (h + p) / 2,
        y = (d + v) / 2,
        b = p - h,
        _ = v - d,
        m = b * b + _ * _,
        x = i - u,
        w = h * v - p * d,
        M = (_ < 0 ? -1 : 1) * y_(p_(0, x * x * m - w * w)),
        A = (w * _ - b * M) / m,
        S = ( - w * b - _ * M) / m,
        k = (w * _ + b * M) / m,
        T = ( - w * b + _ * M) / m,
        N = A - g,
        E = S - y,
        C = k - g,
        P = T - y;
        return N * N + E * E > C * C + P * P && (A = k, S = T),
        {
            cx: A,
            cy: S,
            x01: -s,
            y01: -l,
            x11: A * (i / x - 1),
            y11: S * (i / x - 1)
        }
    }
    var E_ = function() {
        var t = M_,
        n = A_,
        e = s_(0),
        r = null,
        i = S_,
        u = k_,
        o = T_,
        a = null;
        function c() {
            var c, f, s = +t.apply(this, arguments),
            l = +n.apply(this, arguments),
            h = i.apply(this, arguments) - m_,
            d = u.apply(this, arguments) - m_,
            p = l_(d - h),
            v = d > h;
            if (a || (a = c = Bu()), l < s && (f = l, l = s, s = f), l > b_) if (p > x_ - b_) a.moveTo(l * d_(h), l * g_(h)),
            a.arc(0, 0, l, h, d, !v),
            s > b_ && (a.moveTo(s * d_(d), s * g_(d)), a.arc(0, 0, s, d, h, v));
            else {
                var g, y, b = h,
                _ = d,
                m = h,
                x = d,
                w = p,
                M = p,
                A = o.apply(this, arguments) / 2,
                S = A > b_ && (r ? +r.apply(this, arguments) : y_(s * s + l * l)),
                k = v_(l_(l - s) / 2, +e.apply(this, arguments)),
                T = k,
                N = k;
                if (S > b_) {
                    var E = w_(S / s * g_(A)),
                    C = w_(S / l * g_(A)); (w -= 2 * E) > b_ ? (m += E *= v ? 1 : -1, x -= E) : (w = 0, m = x = (h + d) / 2),
                    (M -= 2 * C) > b_ ? (b += C *= v ? 1 : -1, _ -= C) : (M = 0, b = _ = (h + d) / 2)
                }
                var P = l * d_(b),
                z = l * g_(b),
                R = s * d_(x),
                L = s * g_(x);
                if (k > b_) {
                    var D = l * d_(_),
                    U = l * g_(_),
                    O = s * d_(m),
                    q = s * g_(m);
                    if (p < __) {
                        var Y = w > b_ ?
                        function(t, n, e, r, i, u, o, a) {
                            var c = e - t,
                            f = r - n,
                            s = o - i,
                            l = a - u,
                            h = (s * (n - u) - l * (t - i)) / (l * c - s * f);
                            return [t + h * c, n + h * f]
                        } (P, z, O, q, D, U, R, L) : [R, L],
                        B = P - Y[0],
                        I = z - Y[1],
                        F = D - Y[0],
                        j = U - Y[1],
                        H = 1 / g_(function(t) {
                            return t > 1 ? 0 : t < -1 ? __: Math.acos(t)
                        } ((B * F + I * j) / (y_(B * B + I * I) * y_(F * F + j * j))) / 2),
                        X = y_(Y[0] * Y[0] + Y[1] * Y[1]);
                        T = v_(k, (s - X) / (H - 1)),
                        N = v_(k, (l - X) / (H + 1))
                    }
                }
                M > b_ ? N > b_ ? (g = N_(O, q, P, z, l, N, v), y = N_(D, U, R, L, l, N, v), a.moveTo(g.cx + g.x01, g.cy + g.y01), N < k ? a.arc(g.cx, g.cy, N, h_(g.y01, g.x01), h_(y.y01, y.x01), !v) : (a.arc(g.cx, g.cy, N, h_(g.y01, g.x01), h_(g.y11, g.x11), !v), a.arc(0, 0, l, h_(g.cy + g.y11, g.cx + g.x11), h_(y.cy + y.y11, y.cx + y.x11), !v), a.arc(y.cx, y.cy, N, h_(y.y11, y.x11), h_(y.y01, y.x01), !v))) : (a.moveTo(P, z), a.arc(0, 0, l, b, _, !v)) : a.moveTo(P, z),
                s > b_ && w > b_ ? T > b_ ? (g = N_(R, L, D, U, s, -T, v), y = N_(P, z, O, q, s, -T, v), a.lineTo(g.cx + g.x01, g.cy + g.y01), T < k ? a.arc(g.cx, g.cy, T, h_(g.y01, g.x01), h_(y.y01, y.x01), !v) : (a.arc(g.cx, g.cy, T, h_(g.y01, g.x01), h_(g.y11, g.x11), !v), a.arc(0, 0, s, h_(g.cy + g.y11, g.cx + g.x11), h_(y.cy + y.y11, y.cx + y.x11), v), a.arc(y.cx, y.cy, T, h_(y.y11, y.x11), h_(y.y01, y.x01), !v))) : a.arc(0, 0, s, x, m, v) : a.lineTo(R, L)
            } else a.moveTo(0, 0);
            if (a.closePath(), c) return a = null,
            c + "" || null
        }
        return c.centroid = function() {
            var e = ( + t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
            r = ( + i.apply(this, arguments) + +u.apply(this, arguments)) / 2 - __ / 2;
            return [d_(r) * e, g_(r) * e]
        },
        c.innerRadius = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n: s_( + n), c) : t
        },
        c.outerRadius = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t: s_( + t), c) : n
        },
        c.cornerRadius = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t: s_( + t), c) : e
        },
        c.padRadius = function(t) {
            return arguments.length ? (r = null == t ? null: "function" == typeof t ? t: s_( + t), c) : r
        },
        c.startAngle = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t: s_( + t), c) : i
        },
        c.endAngle = function(t) {
            return arguments.length ? (u = "function" == typeof t ? t: s_( + t), c) : u
        },
        c.padAngle = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t: s_( + t), c) : o
        },
        c.context = function(t) {
            return arguments.length ? (a = null == t ? null: t, c) : a
        },
        c
    };
    function C_(t) {
        this._context = t
    }
    C_.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() { (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(t, n)
            }
        }
    };
    var P_ = function(t) {
        return new C_(t)
    };
    function z_(t) {
        return t[0]
    }
    function R_(t) {
        return t[1]
    }
    var L_ = function() {
        var t = z_,
        n = R_,
        e = s_(!0),
        r = null,
        i = P_,
        u = null;
        function o(o) {
            var a, c, f, s = o.length,
            l = !1;
            for (null == r && (u = i(f = Bu())), a = 0; a <= s; ++a) ! (a < s && e(c = o[a], a, o)) === l && ((l = !l) ? u.lineStart() : u.lineEnd()),
            l && u.point( + t(c, a, o), +n(c, a, o));
            if (f) return u = null,
            f + "" || null
        }
        return o.x = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n: s_( + n), o) : t
        },
        o.y = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t: s_( + t), o) : n
        },
        o.defined = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t: s_( !! t), o) : e
        },
        o.curve = function(t) {
            return arguments.length ? (i = t, null != r && (u = i(r)), o) : i
        },
        o.context = function(t) {
            return arguments.length ? (null == t ? r = u = null: u = i(r = t), o) : r
        },
        o
    },
    D_ = function() {
        var t = z_,
        n = null,
        e = s_(0),
        r = R_,
        i = s_(!0),
        u = null,
        o = P_,
        a = null;
        function c(c) {
            var f, s, l, h, d, p = c.length,
            v = !1,
            g = new Array(p),
            y = new Array(p);
            for (null == u && (a = o(d = Bu())), f = 0; f <= p; ++f) {
                if (! (f < p && i(h = c[f], f, c)) === v) if (v = !v) s = f,
                a.areaStart(),
                a.lineStart();
                else {
                    for (a.lineEnd(), a.lineStart(), l = f - 1; l >= s; --l) a.point(g[l], y[l]);
                    a.lineEnd(),
                    a.areaEnd()
                }
                v && (g[f] = +t(h, f, c), y[f] = +e(h, f, c), a.point(n ? +n(h, f, c) : g[f], r ? +r(h, f, c) : y[f]))
            }
            if (d) return a = null,
            d + "" || null
        }
        function f() {
            return L_().defined(i).curve(o).context(u)
        }
        return c.x = function(e) {
            return arguments.length ? (t = "function" == typeof e ? e: s_( + e), n = null, c) : t
        },
        c.x0 = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n: s_( + n), c) : t
        },
        c.x1 = function(t) {
            return arguments.length ? (n = null == t ? null: "function" == typeof t ? t: s_( + t), c) : n
        },
        c.y = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t: s_( + t), r = null, c) : e
        },
        c.y0 = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t: s_( + t), c) : e
        },
        c.y1 = function(t) {
            return arguments.length ? (r = null == t ? null: "function" == typeof t ? t: s_( + t), c) : r
        },
        c.lineX0 = c.lineY0 = function() {
            return f().x(t).y(e)
        },
        c.lineY1 = function() {
            return f().x(t).y(r)
        },
        c.lineX1 = function() {
            return f().x(n).y(e)
        },
        c.defined = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t: s_( !! t), c) : i
        },
        c.curve = function(t) {
            return arguments.length ? (o = t, null != u && (a = o(u)), c) : o
        },
        c.context = function(t) {
            return arguments.length ? (null == t ? u = a = null: a = o(u = t), c) : u
        },
        c
    },
    U_ = function(t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    },
    O_ = function(t) {
        return t
    },
    q_ = function() {
        var t = O_,
        n = U_,
        e = null,
        r = s_(0),
        i = s_(x_),
        u = s_(0);
        function o(o) {
            var a, c, f, s, l, h = o.length,
            d = 0,
            p = new Array(h),
            v = new Array(h),
            g = +r.apply(this, arguments),
            y = Math.min(x_, Math.max( - x_, i.apply(this, arguments) - g)),
            b = Math.min(Math.abs(y) / h, u.apply(this, arguments)),
            _ = b * (y < 0 ? -1 : 1);
            for (a = 0; a < h; ++a)(l = v[p[a] = a] = +t(o[a], a, o)) > 0 && (d += l);
            for (null != n ? p.sort(function(t, e) {
                return n(v[t], v[e])
            }) : null != e && p.sort(function(t, n) {
                return e(o[t], o[n])
            }), a = 0, f = d ? (y - h * _) / d: 0; a < h; ++a, g = s) c = p[a],
            s = g + ((l = v[c]) > 0 ? l * f: 0) + _,
            v[c] = {
                data: o[c],
                index: a,
                value: l,
                startAngle: g,
                endAngle: s,
                padAngle: b
            };
            return v
        }
        return o.value = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n: s_( + n), o) : t
        },
        o.sortValues = function(t) {
            return arguments.length ? (n = t, e = null, o) : n
        },
        o.sort = function(t) {
            return arguments.length ? (e = t, n = null, o) : e
        },
        o.startAngle = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t: s_( + t), o) : r
        },
        o.endAngle = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t: s_( + t), o) : i
        },
        o.padAngle = function(t) {
            return arguments.length ? (u = "function" == typeof t ? t: s_( + t), o) : u
        },
        o
    },
    Y_ = I_(P_);
    function B_(t) {
        this._curve = t
    }
    function I_(t) {
        function n(n) {
            return new B_(t(n))
        }
        return n._curve = t,
        n
    }
    function F_(t) {
        var n = t.curve;
        return t.angle = t.x,
        delete t.x,
        t.radius = t.y,
        delete t.y,
        t.curve = function(t) {
            return arguments.length ? n(I_(t)) : n()._curve
        },
        t
    }
    B_.prototype = {
        areaStart: function() {
            this._curve.areaStart()
        },
        areaEnd: function() {
            this._curve.areaEnd()
        },
        lineStart: function() {
            this._curve.lineStart()
        },
        lineEnd: function() {
            this._curve.lineEnd()
        },
        point: function(t, n) {
            this._curve.point(n * Math.sin(t), n * -Math.cos(t))
        }
    };
    var j_ = function() {
        return F_(L_().curve(Y_))
    },
    H_ = function() {
        var t = D_().curve(Y_),
        n = t.curve,
        e = t.lineX0,
        r = t.lineX1,
        i = t.lineY0,
        u = t.lineY1;
        return t.angle = t.x,
        delete t.x,
        t.startAngle = t.x0,
        delete t.x0,
        t.endAngle = t.x1,
        delete t.x1,
        t.radius = t.y,
        delete t.y,
        t.innerRadius = t.y0,
        delete t.y0,
        t.outerRadius = t.y1,
        delete t.y1,
        t.lineStartAngle = function() {
            return F_(e())
        },
        delete t.lineX0,
        t.lineEndAngle = function() {
            return F_(r())
        },
        delete t.lineX1,
        t.lineInnerRadius = function() {
            return F_(i())
        },
        delete t.lineY0,
        t.lineOuterRadius = function() {
            return F_(u())
        },
        delete t.lineY1,
        t.curve = function(t) {
            return arguments.length ? n(I_(t)) : n()._curve
        },
        t
    },
    X_ = function(t, n) {
        return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
    },
    G_ = Array.prototype.slice;
    function V_(t) {
        return t.source
    }
    function $_(t) {
        return t.target
    }
    function W_(t) {
        var n = V_,
        e = $_,
        r = z_,
        i = R_,
        u = null;
        function o() {
            var o, a = G_.call(arguments),
            c = n.apply(this, a),
            f = e.apply(this, a);
            if (u || (u = o = Bu()), t(u, +r.apply(this, (a[0] = c, a)), +i.apply(this, a), +r.apply(this, (a[0] = f, a)), +i.apply(this, a)), o) return u = null,
            o + "" || null
        }
        return o.source = function(t) {
            return arguments.length ? (n = t, o) : n
        },
        o.target = function(t) {
            return arguments.length ? (e = t, o) : e
        },
        o.x = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t: s_( + t), o) : r
        },
        o.y = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t: s_( + t), o) : i
        },
        o.context = function(t) {
            return arguments.length ? (u = null == t ? null: t, o) : u
        },
        o
    }
    function Z_(t, n, e, r, i) {
        t.moveTo(n, e),
        t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i)
    }
    function Q_(t, n, e, r, i) {
        t.moveTo(n, e),
        t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i)
    }
    function J_(t, n, e, r, i) {
        var u = X_(n, e),
        o = X_(n, e = (e + i) / 2),
        a = X_(r, e),
        c = X_(r, i);
        t.moveTo(u[0], u[1]),
        t.bezierCurveTo(o[0], o[1], a[0], a[1], c[0], c[1])
    }
    function K_() {
        return W_(Z_)
    }
    function tm() {
        return W_(Q_)
    }
    function nm() {
        var t = W_(J_);
        return t.angle = t.x,
        delete t.x,
        t.radius = t.y,
        delete t.y,
        t
    }
    var em = {
        draw: function(t, n) {
            var e = Math.sqrt(n / __);
            t.moveTo(e, 0),
            t.arc(0, 0, e, 0, x_)
        }
    },
    rm = {
        draw: function(t, n) {
            var e = Math.sqrt(n / 5) / 2;
            t.moveTo( - 3 * e, -e),
            t.lineTo( - e, -e),
            t.lineTo( - e, -3 * e),
            t.lineTo(e, -3 * e),
            t.lineTo(e, -e),
            t.lineTo(3 * e, -e),
            t.lineTo(3 * e, e),
            t.lineTo(e, e),
            t.lineTo(e, 3 * e),
            t.lineTo( - e, 3 * e),
            t.lineTo( - e, e),
            t.lineTo( - 3 * e, e),
            t.closePath()
        }
    },
    im = Math.sqrt(1 / 3),
    um = 2 * im,
    om = {
        draw: function(t, n) {
            var e = Math.sqrt(n / um),
            r = e * im;
            t.moveTo(0, -e),
            t.lineTo(r, 0),
            t.lineTo(0, e),
            t.lineTo( - r, 0),
            t.closePath()
        }
    },
    am = Math.sin(__ / 10) / Math.sin(7 * __ / 10),
    cm = Math.sin(x_ / 10) * am,
    fm = -Math.cos(x_ / 10) * am,
    sm = {
        draw: function(t, n) {
            var e = Math.sqrt(.8908130915292852 * n),
            r = cm * e,
            i = fm * e;
            t.moveTo(0, -e),
            t.lineTo(r, i);
            for (var u = 1; u < 5; ++u) {
                var o = x_ * u / 5,
                a = Math.cos(o),
                c = Math.sin(o);
                t.lineTo(c * e, -a * e),
                t.lineTo(a * r - c * i, c * r + a * i)
            }
            t.closePath()
        }
    },
    lm = {
        draw: function(t, n) {
            var e = Math.sqrt(n),
            r = -e / 2;
            t.rect(r, r, e, e)
        }
    },
    hm = Math.sqrt(3),
    dm = {
        draw: function(t, n) {
            var e = -Math.sqrt(n / (3 * hm));
            t.moveTo(0, 2 * e),
            t.lineTo( - hm * e, -e),
            t.lineTo(hm * e, -e),
            t.closePath()
        }
    },
    pm = Math.sqrt(3) / 2,
    vm = 1 / Math.sqrt(12),
    gm = 3 * (vm / 2 + 1),
    ym = {
        draw: function(t, n) {
            var e = Math.sqrt(n / gm),
            r = e / 2,
            i = e * vm,
            u = r,
            o = e * vm + e,
            a = -u,
            c = o;
            t.moveTo(r, i),
            t.lineTo(u, o),
            t.lineTo(a, c),
            t.lineTo( - .5 * r - pm * i, pm * r + -.5 * i),
            t.lineTo( - .5 * u - pm * o, pm * u + -.5 * o),
            t.lineTo( - .5 * a - pm * c, pm * a + -.5 * c),
            t.lineTo( - .5 * r + pm * i, -.5 * i - pm * r),
            t.lineTo( - .5 * u + pm * o, -.5 * o - pm * u),
            t.lineTo( - .5 * a + pm * c, -.5 * c - pm * a),
            t.closePath()
        }
    },
    bm = [em, rm, om, lm, sm, dm, ym],
    _m = function() {
        var t = s_(em),
        n = s_(64),
        e = null;
        function r() {
            var r;
            if (e || (e = r = Bu()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r) return e = null,
            r + "" || null
        }
        return r.type = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n: s_(n), r) : t
        },
        r.size = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t: s_( + t), r) : n
        },
        r.context = function(t) {
            return arguments.length ? (e = null == t ? null: t, r) : e
        },
        r
    },
    mm = function() {};
    function xm(t, n, e) {
        t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
    }
    function wm(t) {
        this._context = t
    }
    wm.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 3:
                xm(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1)
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
                xm(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = n
        }
    };
    var Mm = function(t) {
        return new wm(t)
    };
    function Am(t) {
        this._context = t
    }
    Am.prototype = {
        areaStart: mm,
        areaEnd: mm,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x2, this._y2),
                this._context.closePath();
                break;
            case 2:
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4)
            }
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._x2 = t,
                this._y2 = n;
                break;
            case 1:
                this._point = 2,
                this._x3 = t,
                this._y3 = n;
                break;
            case 2:
                this._point = 3,
                this._x4 = t,
                this._y4 = n,
                this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                break;
            default:
                xm(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = n
        }
    };
    var Sm = function(t) {
        return new Am(t)
    };
    function km(t) {
        this._context = t
    }
    km.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN,
            this._point = 0
        },
        lineEnd: function() { (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var e = (this._x0 + 4 * this._x1 + t) / 6,
                r = (this._y0 + 4 * this._y1 + n) / 6;
                this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                break;
            case 3:
                this._point = 4;
            default:
                xm(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = n
        }
    };
    var Tm = function(t) {
        return new km(t)
    };
    function Nm(t, n) {
        this._basis = new wm(t),
        this._beta = n
    }
    Nm.prototype = {
        lineStart: function() {
            this._x = [],
            this._y = [],
            this._basis.lineStart()
        },
        lineEnd: function() {
            var t = this._x,
            n = this._y,
            e = t.length - 1;
            if (e > 0) for (var r, i = t[0], u = n[0], o = t[e] - i, a = n[e] - u, c = -1; ++c <= e;) r = c / e,
            this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * o), this._beta * n[c] + (1 - this._beta) * (u + r * a));
            this._x = this._y = null,
            this._basis.lineEnd()
        },
        point: function(t, n) {
            this._x.push( + t),
            this._y.push( + n)
        }
    };
    var Em = function t(n) {
        function e(t) {
            return 1 === n ? new wm(t) : new Nm(t, n)
        }
        return e.beta = function(n) {
            return t( + n)
        },
        e
    } (.85);
    function Cm(t, n, e) {
        t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
    }
    function Pm(t, n) {
        this._context = t,
        this._k = (1 - n) / 6
    }
    Pm.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                Cm(this, this._x1, this._y1)
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2,
                this._x1 = t,
                this._y1 = n;
                break;
            case 2:
                this._point = 3;
            default:
                Cm(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var zm = function t(n) {
        function e(t) {
            return new Pm(t, n)
        }
        return e.tension = function(n) {
            return t( + n)
        },
        e
    } (0);
    function Rm(t, n) {
        this._context = t,
        this._k = (1 - n) / 6
    }
    Rm.prototype = {
        areaStart: mm,
        areaEnd: mm,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5)
            }
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._x3 = t,
                this._y3 = n;
                break;
            case 1:
                this._point = 2,
                this._context.moveTo(this._x4 = t, this._y4 = n);
                break;
            case 2:
                this._point = 3,
                this._x5 = t,
                this._y5 = n;
                break;
            default:
                Cm(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var Lm = function t(n) {
        function e(t) {
            return new Rm(t, n)
        }
        return e.tension = function(n) {
            return t( + n)
        },
        e
    } (0);
    function Dm(t, n) {
        this._context = t,
        this._k = (1 - n) / 6
    }
    Dm.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._point = 0
        },
        lineEnd: function() { (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4;
            default:
                Cm(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var Um = function t(n) {
        function e(t) {
            return new Dm(t, n)
        }
        return e.tension = function(n) {
            return t( + n)
        },
        e
    } (0);
    function Om(t, n, e) {
        var r = t._x1,
        i = t._y1,
        u = t._x2,
        o = t._y2;
        if (t._l01_a > b_) {
            var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            c = 3 * t._l01_a * (t._l01_a + t._l12_a);
            r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c,
            i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
        }
        if (t._l23_a > b_) {
            var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            s = 3 * t._l23_a * (t._l23_a + t._l12_a);
            u = (u * f + t._x1 * t._l23_2a - n * t._l12_2a) / s,
            o = (o * f + t._y1 * t._l23_2a - e * t._l12_2a) / s
        }
        t._context.bezierCurveTo(r, i, u, o, t._x2, t._y2)
    }
    function qm(t, n) {
        this._context = t,
        this._alpha = n
    }
    qm.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                this.point(this._x2, this._y2)
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
            default:
                Om(this, t, n)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var Ym = function t(n) {
        function e(t) {
            return n ? new qm(t, n) : new Pm(t, 0)
        }
        return e.alpha = function(n) {
            return t( + n)
        },
        e
    } (.5);
    function Bm(t, n) {
        this._context = t,
        this._alpha = n
    }
    Bm.prototype = {
        areaStart: mm,
        areaEnd: mm,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5)
            }
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1,
                this._x3 = t,
                this._y3 = n;
                break;
            case 1:
                this._point = 2,
                this._context.moveTo(this._x4 = t, this._y4 = n);
                break;
            case 2:
                this._point = 3,
                this._x5 = t,
                this._y5 = n;
                break;
            default:
                Om(this, t, n)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var Im = function t(n) {
        function e(t) {
            return n ? new Bm(t, n) : new Rm(t, 0)
        }
        return e.alpha = function(n) {
            return t( + n)
        },
        e
    } (.5);
    function Fm(t, n) {
        this._context = t,
        this._alpha = n
    }
    Fm.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() { (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t,
                r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4;
            default:
                Om(this, t, n)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var jm = function t(n) {
        function e(t) {
            return n ? new Fm(t, n) : new Dm(t, 0)
        }
        return e.alpha = function(n) {
            return t( + n)
        },
        e
    } (.5);
    function Hm(t) {
        this._context = t
    }
    Hm.prototype = {
        areaStart: mm,
        areaEnd: mm,
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            this._point && this._context.closePath()
        },
        point: function(t, n) {
            t = +t,
            n = +n,
            this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
        }
    };
    var Xm = function(t) {
        return new Hm(t)
    };
    function Gm(t) {
        return t < 0 ? -1 : 1
    }
    function Vm(t, n, e) {
        var r = t._x1 - t._x0,
        i = n - t._x1,
        u = (t._y1 - t._y0) / (r || i < 0 && -0),
        o = (e - t._y1) / (i || r < 0 && -0),
        a = (u * i + o * r) / (r + i);
        return (Gm(u) + Gm(o)) * Math.min(Math.abs(u), Math.abs(o), .5 * Math.abs(a)) || 0
    }
    function $m(t, n) {
        var e = t._x1 - t._x0;
        return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
    }
    function Wm(t, n, e) {
        var r = t._x0,
        i = t._y0,
        u = t._x1,
        o = t._y1,
        a = (u - r) / 3;
        t._context.bezierCurveTo(r + a, i + a * n, u - a, o - a * e, u, o)
    }
    function Zm(t) {
        this._context = t
    }
    function Qm(t) {
        this._context = new Jm(t)
    }
    function Jm(t) {
        this._context = t
    }
    function Km(t) {
        return new Zm(t)
    }
    function tx(t) {
        return new Qm(t)
    }
    function nx(t) {
        this._context = t
    }
    function ex(t) {
        var n, e, r = t.length - 1,
        i = new Array(r),
        u = new Array(r),
        o = new Array(r);
        for (i[0] = 0, u[0] = 2, o[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1,
        u[n] = 4,
        o[n] = 4 * t[n] + 2 * t[n + 1];
        for (i[r - 1] = 2, u[r - 1] = 7, o[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / u[n - 1],
        u[n] -= e,
        o[n] -= e * o[n - 1];
        for (i[r - 1] = o[r - 1] / u[r - 1], n = r - 2; n >= 0; --n) i[n] = (o[n] - i[n + 1]) / u[n];
        for (u[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) u[n] = 2 * t[n + 1] - i[n + 1];
        return [i, u]
    }
    Zm.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                Wm(this, this._t0, $m(this, this._t0))
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            var e = NaN;
            if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
                switch (this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3,
                    Wm(this, $m(this, e = Vm(this, t, n)), e);
                    break;
                default:
                    Wm(this, this._t0, e = Vm(this, t, n))
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = n,
                this._t0 = e
            }
        }
    },
    (Qm.prototype = Object.create(Zm.prototype)).point = function(t, n) {
        Zm.prototype.point.call(this, n, t)
    },
    Jm.prototype = {
        moveTo: function(t, n) {
            this._context.moveTo(n, t)
        },
        closePath: function() {
            this._context.closePath()
        },
        lineTo: function(t, n) {
            this._context.lineTo(n, t)
        },
        bezierCurveTo: function(t, n, e, r, i, u) {
            this._context.bezierCurveTo(n, t, r, e, u, i)
        }
    },
    nx.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = [],
            this._y = []
        },
        lineEnd: function() {
            var t = this._x,
            n = this._y,
            e = t.length;
            if (e) if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
            else for (var r = ex(t), i = ex(n), u = 0, o = 1; o < e; ++u, ++o) this._context.bezierCurveTo(r[0][u], i[0][u], r[1][u], i[1][u], t[o], n[o]); (this._line || 0 !== this._line && 1 === e) && this._context.closePath(),
            this._line = 1 - this._line,
            this._x = this._y = null
        },
        point: function(t, n) {
            this._x.push( + t),
            this._y.push( + n)
        }
    };
    var rx = function(t) {
        return new nx(t)
    };
    function ix(t, n) {
        this._context = t,
        this._t = n
    }
    ix.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = this._y = NaN,
            this._point = 0
        },
        lineEnd: function() {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
        },
        point: function(t, n) {
            switch (t = +t, n = +n, this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
            default:
                if (this._t <= 0) this._context.lineTo(this._x, n),
                this._context.lineTo(t, n);
                else {
                    var e = this._x * (1 - this._t) + t * this._t;
                    this._context.lineTo(e, this._y),
                    this._context.lineTo(e, n)
                }
            }
            this._x = t,
            this._y = n
        }
    };
    var ux = function(t) {
        return new ix(t, .5)
    };
    function ox(t) {
        return new ix(t, 0)
    }
    function ax(t) {
        return new ix(t, 1)
    }
    var cx = function(t, n) {
        if ((i = t.length) > 1) for (var e, r, i, u = 1,
        o = t[n[0]], a = o.length; u < i; ++u) for (r = o, o = t[n[u]], e = 0; e < a; ++e) o[e][1] += o[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
    },
    fx = function(t) {
        for (var n = t.length,
        e = new Array(n); --n >= 0;) e[n] = n;
        return e
    };
    function sx(t, n) {
        return t[n]
    }
    var lx = function() {
        var t = s_([]),
        n = fx,
        e = cx,
        r = sx;
        function i(i) {
            var u, o, a = t.apply(this, arguments),
            c = i.length,
            f = a.length,
            s = new Array(f);
            for (u = 0; u < f; ++u) {
                for (var l, h = a[u], d = s[u] = new Array(c), p = 0; p < c; ++p) d[p] = l = [0, +r(i[p], h, p, i)],
                l.data = i[p];
                d.key = h
            }
            for (u = 0, o = n(s); u < f; ++u) s[o[u]].index = u;
            return e(s, o),
            s
        }
        return i.keys = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n: s_(G_.call(n)), i) : t
        },
        i.value = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t: s_( + t), i) : r
        },
        i.order = function(t) {
            return arguments.length ? (n = null == t ? fx: "function" == typeof t ? t: s_(G_.call(t)), i) : n
        },
        i.offset = function(t) {
            return arguments.length ? (e = null == t ? cx: t, i) : e
        },
        i
    },
    hx = function(t, n) {
        if ((r = t.length) > 0) {
            for (var e, r, i, u = 0,
            o = t[0].length; u < o; ++u) {
                for (i = e = 0; e < r; ++e) i += t[e][u][1] || 0;
                if (i) for (e = 0; e < r; ++e) t[e][u][1] /= i
            }
            cx(t, n)
        }
    },
    dx = function(t, n) {
        if ((a = t.length) > 1) for (var e, r, i, u, o, a, c = 0,
        f = t[n[0]].length; c < f; ++c) for (u = o = 0, e = 0; e < a; ++e)(i = (r = t[n[e]][c])[1] - r[0]) >= 0 ? (r[0] = u, r[1] = u += i) : i < 0 ? (r[1] = o, r[0] = o += i) : r[0] = u
    },
    px = function(t, n) {
        if ((e = t.length) > 0) {
            for (var e, r = 0,
            i = t[n[0]], u = i.length; r < u; ++r) {
                for (var o = 0,
                a = 0; o < e; ++o) a += t[o][r][1] || 0;
                i[r][1] += i[r][0] = -a / 2
            }
            cx(t, n)
        }
    },
    vx = function(t, n) {
        if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
            for (var e, r, i, u = 0,
            o = 1; o < r; ++o) {
                for (var a = 0,
                c = 0,
                f = 0; a < i; ++a) {
                    for (var s = t[n[a]], l = s[o][1] || 0, h = (l - (s[o - 1][1] || 0)) / 2, d = 0; d < a; ++d) {
                        var p = t[n[d]];
                        h += (p[o][1] || 0) - (p[o - 1][1] || 0)
                    }
                    c += l,
                    f += h * l
                }
                e[o - 1][1] += e[o - 1][0] = u,
                c && (u -= f / c)
            }
            e[o - 1][1] += e[o - 1][0] = u,
            cx(t, n)
        }
    },
    gx = function(t) {
        var n = t.map(yx);
        return fx(t).sort(function(t, e) {
            return n[t] - n[e]
        })
    };
    function yx(t) {
        for (var n, e = 0,
        r = -1,
        i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
        return e
    }
    var bx = function(t) {
        return gx(t).reverse()
    },
    _x = function(t) {
        var n, e, r = t.length,
        i = t.map(yx),
        u = fx(t).sort(function(t, n) {
            return i[n] - i[t]
        }),
        o = 0,
        a = 0,
        c = [],
        f = [];
        for (n = 0; n < r; ++n) e = u[n],
        o < a ? (o += i[e], c.push(e)) : (a += i[e], f.push(e));
        return f.reverse().concat(c)
    },
    mx = function(t) {
        return fx(t).reverse()
    },
    xx = function(t) {
        return function() {
            return t
        }
    };
    function wx(t) {
        return t[0]
    }
    function Mx(t) {
        return t[1]
    }
    function Ax() {
        this._ = null
    }
    function Sx(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null
    }
    function kx(t, n) {
        var e = n,
        r = n.R,
        i = e.U;
        i ? i.L === e ? i.L = r: i.R = r: t._ = r,
        r.U = i,
        e.U = r,
        e.R = r.L,
        e.R && (e.R.U = e),
        r.L = e
    }
    function Tx(t, n) {
        var e = n,
        r = n.L,
        i = e.U;
        i ? i.L === e ? i.L = r: i.R = r: t._ = r,
        r.U = i,
        e.U = r,
        e.L = r.R,
        e.L && (e.L.U = e),
        r.R = e
    }
    function Nx(t) {
        for (; t.L;) t = t.L;
        return t
    }
    Ax.prototype = {
        constructor: Ax,
        insert: function(t, n) {
            var e, r, i;
            if (t) {
                if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                    for (t = t.R; t.L;) t = t.L;
                    t.L = n
                } else t.R = n;
                e = t
            } else this._ ? (t = Nx(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
            for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (kx(this, e), e = (t = e).U), e.C = !1, r.C = !0, Tx(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (Tx(this, e), e = (t = e).U), e.C = !1, r.C = !0, kx(this, r)),
            e = t.U;
            this._.C = !1
        },
        remove: function(t) {
            t.N && (t.N.P = t.P),
            t.P && (t.P.N = t.N),
            t.N = t.P = null;
            var n, e, r, i = t.U,
            u = t.L,
            o = t.R;
            if (e = u ? o ? Nx(o) : u: o, i ? i.L === t ? i.L = e: i.R = e: this._ = e, u && o ? (r = e.C, e.C = t.C, e.L = u, u.U = e, e !== o ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = o, o.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) if (t && t.C) t.C = !1;
            else {
                do {
                    if (t === this._) break;
                    if (t === i.L) {
                        if ((n = i.R).C && (n.C = !1, i.C = !0, kx(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                            n.R && n.R.C || (n.L.C = !1, n.C = !0, Tx(this, n), n = i.R),
                            n.C = i.C,
                            i.C = n.R.C = !1,
                            kx(this, i),
                            t = this._;
                            break
                        }
                    } else if ((n = i.L).C && (n.C = !1, i.C = !0, Tx(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                        n.L && n.L.C || (n.R.C = !1, n.C = !0, kx(this, n), n = i.L),
                        n.C = i.C,
                        i.C = n.L.C = !1,
                        Tx(this, i),
                        t = this._;
                        break
                    }
                    n.C = !0, t = i, i = i.U
                } while (! t . C );
                t && (t.C = !1)
            }
        }
    };
    var Ex = Ax;
    function Cx(t, n, e, r) {
        var i = [null, null],
        u = Jx.push(i) - 1;
        return i.left = t,
        i.right = n,
        e && zx(i, t, n, e),
        r && zx(i, n, t, r),
        Zx[t.index].halfedges.push(u),
        Zx[n.index].halfedges.push(u),
        i
    }
    function Px(t, n, e) {
        var r = [n, e];
        return r.left = t,
        r
    }
    function zx(t, n, e, r) {
        t[0] || t[1] ? t.left === e ? t[1] = r: t[0] = r: (t[0] = r, t.left = n, t.right = e)
    }
    function Rx(t, n, e, r, i) {
        var u, o = t[0],
        a = t[1],
        c = o[0],
        f = o[1],
        s = 0,
        l = 1,
        h = a[0] - c,
        d = a[1] - f;
        if (u = n - c, h || !(u > 0)) {
            if (u /= h, h < 0) {
                if (u < s) return;
                u < l && (l = u)
            } else if (h > 0) {
                if (u > l) return;
                u > s && (s = u)
            }
            if (u = r - c, h || !(u < 0)) {
                if (u /= h, h < 0) {
                    if (u > l) return;
                    u > s && (s = u)
                } else if (h > 0) {
                    if (u < s) return;
                    u < l && (l = u)
                }
                if (u = e - f, d || !(u > 0)) {
                    if (u /= d, d < 0) {
                        if (u < s) return;
                        u < l && (l = u)
                    } else if (d > 0) {
                        if (u > l) return;
                        u > s && (s = u)
                    }
                    if (u = i - f, d || !(u < 0)) {
                        if (u /= d, d < 0) {
                            if (u > l) return;
                            u > s && (s = u)
                        } else if (d > 0) {
                            if (u < s) return;
                            u < l && (l = u)
                        }
                        return ! (s > 0 || l < 1) || (s > 0 && (t[0] = [c + s * h, f + s * d]), l < 1 && (t[1] = [c + l * h, f + l * d]), !0)
                    }
                }
            }
        }
    }
    function Lx(t, n, e, r, i) {
        var u = t[1];
        if (u) return ! 0;
        var o, a, c = t[0],
        f = t.left,
        s = t.right,
        l = f[0],
        h = f[1],
        d = s[0],
        p = s[1],
        v = (l + d) / 2,
        g = (h + p) / 2;
        if (p === h) {
            if (v < n || v >= r) return;
            if (l > d) {
                if (c) {
                    if (c[1] >= i) return
                } else c = [v, e];
                u = [v, i]
            } else {
                if (c) {
                    if (c[1] < e) return
                } else c = [v, i];
                u = [v, e]
            }
        } else if (a = g - (o = (l - d) / (p - h)) * v, o < -1 || o > 1) if (l > d) {
            if (c) {
                if (c[1] >= i) return
            } else c = [(e - a) / o, e];
            u = [(i - a) / o, i]
        } else {
            if (c) {
                if (c[1] < e) return
            } else c = [(i - a) / o, i];
            u = [(e - a) / o, e]
        } else if (h < p) {
            if (c) {
                if (c[0] >= r) return
            } else c = [n, o * n + a];
            u = [r, o * r + a]
        } else {
            if (c) {
                if (c[0] < n) return
            } else c = [r, o * r + a];
            u = [n, o * n + a]
        }
        return t[0] = c,
        t[1] = u,
        !0
    }
    function Dx(t, n) {
        var e = t.site,
        r = n.left,
        i = n.right;
        return e === i && (i = r, r = e),
        i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
    }
    function Ux(t, n) {
        return n[ + (n.left !== t.site)]
    }
    function Ox(t, n) {
        return n[ + (n.left === t.site)]
    }
    var qx, Yx = [];
    function Bx(t) {
        var n = t.P,
        e = t.N;
        if (n && e) {
            var r = n.site,
            i = t.site,
            u = e.site;
            if (r !== u) {
                var o = i[0],
                a = i[1],
                c = r[0] - o,
                f = r[1] - a,
                s = u[0] - o,
                l = u[1] - a,
                h = 2 * (c * l - f * s);
                if (! (h >= -tw)) {
                    var d = c * c + f * f,
                    p = s * s + l * l,
                    v = (l * d - f * p) / h,
                    g = (c * p - s * d) / h,
                    y = Yx.pop() || new
                    function() {
                        Sx(this),
                        this.x = this.y = this.arc = this.site = this.cy = null
                    };
                    y.arc = t,
                    y.site = i,
                    y.x = v + o,
                    y.y = (y.cy = g + a) + Math.sqrt(v * v + g * g),
                    t.circle = y;
                    for (var b = null,
                    _ = Qx._; _;) if (y.y < _.y || y.y === _.y && y.x <= _.x) {
                        if (!_.L) {
                            b = _.P;
                            break
                        }
                        _ = _.L
                    } else {
                        if (!_.R) {
                            b = _;
                            break
                        }
                        _ = _.R
                    }
                    Qx.insert(b, y),
                    b || (qx = y)
                }
            }
        }
    }
    function Ix(t) {
        var n = t.circle;
        n && (n.P || (qx = n.N), Qx.remove(n), Yx.push(n), Sx(n), t.circle = null)
    }
    var Fx = [];
    function jx(t) {
        var n = Fx.pop() || new
        function() {
            Sx(this),
            this.edge = this.site = this.circle = null
        };
        return n.site = t,
        n
    }
    function Hx(t) {
        Ix(t),
        Wx.remove(t),
        Fx.push(t),
        Sx(t)
    }
    function Xx(t) {
        var n = t.circle,
        e = n.x,
        r = n.cy,
        i = [e, r],
        u = t.P,
        o = t.N,
        a = [t];
        Hx(t);
        for (var c = u; c.circle && Math.abs(e - c.circle.x) < Kx && Math.abs(r - c.circle.cy) < Kx;) u = c.P,
        a.unshift(c),
        Hx(c),
        c = u;
        a.unshift(c),
        Ix(c);
        for (var f = o; f.circle && Math.abs(e - f.circle.x) < Kx && Math.abs(r - f.circle.cy) < Kx;) o = f.N,
        a.push(f),
        Hx(f),
        f = o;
        a.push(f),
        Ix(f);
        var s, l = a.length;
        for (s = 1; s < l; ++s) f = a[s],
        c = a[s - 1],
        zx(f.edge, c.site, f.site, i);
        c = a[0],
        (f = a[l - 1]).edge = Cx(c.site, f.site, null, i),
        Bx(c),
        Bx(f)
    }
    function Gx(t) {
        for (var n, e, r, i, u = t[0], o = t[1], a = Wx._; a;) if ((r = Vx(a, o) - u) > Kx) a = a.L;
        else {
            if (! ((i = u - $x(a, o)) > Kx)) {
                r > -Kx ? (n = a.P, e = a) : i > -Kx ? (n = a, e = a.N) : n = e = a;
                break
            }
            if (!a.R) {
                n = a;
                break
            }
            a = a.R
        } !
        function(t) {
            Zx[t.index] = {
                site: t,
                halfedges: []
            }
        } (t);
        var c = jx(t);
        if (Wx.insert(n, c), n || e) {
            if (n === e) return Ix(n),
            e = jx(n.site),
            Wx.insert(c, e),
            c.edge = e.edge = Cx(n.site, c.site),
            Bx(n),
            void Bx(e);
            if (e) {
                Ix(n),
                Ix(e);
                var f = n.site,
                s = f[0],
                l = f[1],
                h = t[0] - s,
                d = t[1] - l,
                p = e.site,
                v = p[0] - s,
                g = p[1] - l,
                y = 2 * (h * g - d * v),
                b = h * h + d * d,
                _ = v * v + g * g,
                m = [(g * b - d * _) / y + s, (h * _ - v * b) / y + l];
                zx(e.edge, f, p, m),
                c.edge = Cx(f, t, null, m),
                e.edge = Cx(t, p, null, m),
                Bx(n),
                Bx(e)
            } else c.edge = Cx(n.site, c.site)
        }
    }
    function Vx(t, n) {
        var e = t.site,
        r = e[0],
        i = e[1],
        u = i - n;
        if (!u) return r;
        var o = t.P;
        if (!o) return - 1 / 0;
        var a = (e = o.site)[0],
        c = e[1],
        f = c - n;
        if (!f) return a;
        var s = a - r,
        l = 1 / u - 1 / f,
        h = s / f;
        return l ? ( - h + Math.sqrt(h * h - 2 * l * (s * s / ( - 2 * f) - c + f / 2 + i - u / 2))) / l + r: (r + a) / 2
    }
    function $x(t, n) {
        var e = t.N;
        if (e) return Vx(e, n);
        var r = t.site;
        return r[1] === n ? r[0] : 1 / 0
    }
    var Wx, Zx, Qx, Jx, Kx = 1e-6,
    tw = 1e-12;
    function nw(t, n, e) {
        return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
    }
    function ew(t, n) {
        return n[1] - t[1] || n[0] - t[0]
    }
    function rw(t, n) {
        var e, r, i, u = t.sort(ew).pop();
        for (Jx = [], Zx = new Array(t.length), Wx = new Ex, Qx = new Ex;;) if (i = qx, u && (!i || u[1] < i.y || u[1] === i.y && u[0] < i.x)) u[0] === e && u[1] === r || (Gx(u), e = u[0], r = u[1]),
        u = t.pop();
        else {
            if (!i) break;
            Xx(i.arc)
        }
        if (function() {
            for (var t, n, e, r, i = 0,
            u = Zx.length; i < u; ++i) if ((t = Zx[i]) && (r = (n = t.halfedges).length)) {
                var o = new Array(r),
                a = new Array(r);
                for (e = 0; e < r; ++e) o[e] = e,
                a[e] = Dx(t, Jx[n[e]]);
                for (o.sort(function(t, n) {
                    return a[n] - a[t]
                }), e = 0; e < r; ++e) a[e] = n[o[e]];
                for (e = 0; e < r; ++e) n[e] = a[e]
            }
        } (), n) {
            var o = +n[0][0],
            a = +n[0][1],
            c = +n[1][0],
            f = +n[1][1]; !
            function(t, n, e, r) {
                for (var i, u = Jx.length; u--;) Lx(i = Jx[u], t, n, e, r) && Rx(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > Kx || Math.abs(i[0][1] - i[1][1]) > Kx) || delete Jx[u]
            } (o, a, c, f),
            function(t, n, e, r) {
                var i, u, o, a, c, f, s, l, h, d, p, v, g = Zx.length,
                y = !0;
                for (i = 0; i < g; ++i) if (u = Zx[i]) {
                    for (o = u.site, a = (c = u.halfedges).length; a--;) Jx[c[a]] || c.splice(a, 1);
                    for (a = 0, f = c.length; a < f;) p = (d = Ox(u, Jx[c[a]]))[0],
                    v = d[1],
                    l = (s = Ux(u, Jx[c[++a % f]]))[0],
                    h = s[1],
                    (Math.abs(p - l) > Kx || Math.abs(v - h) > Kx) && (c.splice(a, 0, Jx.push(Px(o, d, Math.abs(p - t) < Kx && r - v > Kx ? [t, Math.abs(l - t) < Kx ? h: r] : Math.abs(v - r) < Kx && e - p > Kx ? [Math.abs(h - r) < Kx ? l: e, r] : Math.abs(p - e) < Kx && v - n > Kx ? [e, Math.abs(l - e) < Kx ? h: n] : Math.abs(v - n) < Kx && p - t > Kx ? [Math.abs(h - n) < Kx ? l: t, n] : null)) - 1), ++f);
                    f && (y = !1)
                }
                if (y) {
                    var b, _, m, x = 1 / 0;
                    for (i = 0, y = null; i < g; ++i)(u = Zx[i]) && (m = (b = (o = u.site)[0] - t) * b + (_ = o[1] - n) * _) < x && (x = m, y = u);
                    if (y) {
                        var w = [t, n],
                        M = [t, r],
                        A = [e, r],
                        S = [e, n];
                        y.halfedges.push(Jx.push(Px(o = y.site, w, M)) - 1, Jx.push(Px(o, M, A)) - 1, Jx.push(Px(o, A, S)) - 1, Jx.push(Px(o, S, w)) - 1)
                    }
                }
                for (i = 0; i < g; ++i)(u = Zx[i]) && (u.halfedges.length || delete Zx[i])
            } (o, a, c, f)
        }
        this.edges = Jx,
        this.cells = Zx,
        Wx = Qx = Jx = Zx = null
    }
    rw.prototype = {
        constructor: rw,
        polygons: function() {
            var t = this.edges;
            return this.cells.map(function(n) {
                var e = n.halfedges.map(function(e) {
                    return Ux(n, t[e])
                });
                return e.data = n.site.data,
                e
            })
        },
        triangles: function() {
            var t = [],
            n = this.edges;
            return this.cells.forEach(function(e, r) {
                if (u = (i = e.halfedges).length) for (var i, u, o, a = e.site,
                c = -1,
                f = n[i[u - 1]], s = f.left === a ? f.right: f.left; ++c < u;) o = s,
                s = (f = n[i[c]]).left === a ? f.right: f.left,
                o && s && r < o.index && r < s.index && nw(a, o, s) < 0 && t.push([a.data, o.data, s.data])
            }),
            t
        },
        links: function() {
            return this.edges.filter(function(t) {
                return t.right
            }).map(function(t) {
                return {
                    source: t.left.data,
                    target: t.right.data
                }
            })
        },
        find: function(t, n, e) {
            for (var r, i, u = this,
            o = u._found || 0,
            a = u.cells.length; ! (i = u.cells[o]);) if (++o >= a) return null;
            var c = t - i.site[0],
            f = n - i.site[1],
            s = c * c + f * f;
            do {
                i = u.cells[r = o], o = null, i.halfedges.forEach(function(e) {
                    var r = u.edges[e],
                    a = r.left;
                    if (a !== i.site && a || (a = r.right)) {
                        var c = t - a[0],
                        f = n - a[1],
                        l = c * c + f * f;
                        l < s && (s = l, o = a.index)
                    }
                })
            } while ( null !== o );
            return u._found = r,
            null == e || s <= e * e ? i.site: null
        }
    };
    var iw = function() {
        var t = wx,
        n = Mx,
        e = null;
        function r(r) {
            return new rw(r.map(function(e, i) {
                var u = [Math.round(t(e, i, r) / Kx) * Kx, Math.round(n(e, i, r) / Kx) * Kx];
                return u.index = i,
                u.data = e,
                u
            }), e)
        }
        return r.polygons = function(t) {
            return r(t).polygons()
        },
        r.links = function(t) {
            return r(t).links()
        },
        r.triangles = function(t) {
            return r(t).triangles()
        },
        r.x = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n: xx( + n), r) : t
        },
        r.y = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t: xx( + t), r) : n
        },
        r.extent = function(t) {
            return arguments.length ? (e = null == t ? null: [[ + t[0][0], +t[0][1]], [ + t[1][0], +t[1][1]]], r) : e && [[e[0][0], e[0][1]], [e[1][0], e[1][1]]]
        },
        r.size = function(t) {
            return arguments.length ? (e = null == t ? null: [[0, 0], [ + t[0], +t[1]]], r) : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]]
        },
        r
    },
    uw = function(t) {
        return function() {
            return t
        }
    };
    function ow(t, n, e) {
        this.k = t,
        this.x = n,
        this.y = e
    }
    ow.prototype = {
        constructor: ow,
        scale: function(t) {
            return 1 === t ? this: new ow(this.k * t, this.x, this.y)
        },
        translate: function(t, n) {
            return 0 === t & 0 === n ? this: new ow(this.k, this.x + this.k * t, this.y + this.k * n)
        },
        apply: function(t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y]
        },
        applyX: function(t) {
            return t * this.k + this.x
        },
        applyY: function(t) {
            return t * this.k + this.y
        },
        invert: function(t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
        },
        invertX: function(t) {
            return (t - this.x) / this.k
        },
        invertY: function(t) {
            return (t - this.y) / this.k
        },
        rescaleX: function(t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
        },
        rescaleY: function(t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
        },
        toString: function() {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
    };
    var aw = new ow(1, 0, 0);
    function cw(t) {
        return t.__zoom || aw
    }
    function fw() {
        Vt.stopImmediatePropagation()
    }
    cw.prototype = ow.prototype;
    var sw = function() {
        Vt.preventDefault(),
        Vt.stopImmediatePropagation()
    };
    function lw() {
        return ! Vt.button
    }
    function hw() {
        var t, n, e = this;
        return e instanceof SVGElement ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight),
        [[0, 0], [t, n]]
    }
    function dw() {
        return this.__zoom || aw
    }
    function pw() {
        return - Vt.deltaY * (Vt.deltaMode ? 120 : 1) / 500
    }
    function vw() {
        return "ontouchstart" in this
    }
    function gw(t, n, e) {
        var r = t.invertX(n[0][0]) - e[0][0],
        i = t.invertX(n[1][0]) - e[1][0],
        u = t.invertY(n[0][1]) - e[0][1],
        o = t.invertY(n[1][1]) - e[1][1];
        return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > u ? (u + o) / 2 : Math.min(0, u) || Math.max(0, o))
    }
    var yw = function() {
        var t, n, e = lw,
        r = hw,
        i = gw,
        u = pw,
        o = vw,
        a = [0, 1 / 0],
        c = [[ - 1 / 0, -1 / 0], [1 / 0, 1 / 0]],
        f = 250,
        s = ar,
        l = [],
        h = ht("start", "zoom", "end"),
        d = 500,
        p = 150,
        v = 0;
        function g(t) {
            t.property("__zoom", dw).on("wheel.zoom", M).on("mousedown.zoom", A).on("dblclick.zoom", S).filter(o).on("touchstart.zoom", k).on("touchmove.zoom", T).on("touchend.zoom touchcancel.zoom", N).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }
        function y(t, n) {
            return (n = Math.max(a[0], Math.min(a[1], n))) === t.k ? t: new ow(n, t.x, t.y)
        }
        function b(t, n, e) {
            var r = n[0] - e[0] * t.k,
            i = n[1] - e[1] * t.k;
            return r === t.x && i === t.y ? t: new ow(t.k, r, i)
        }
        function _(t) {
            return [( + t[0][0] + +t[1][0]) / 2, ( + t[0][1] + +t[1][1]) / 2]
        }
        function m(t, n, e) {
            t.on("start.zoom",
            function() {
                x(this, arguments).start()
            }).on("interrupt.zoom end.zoom",
            function() {
                x(this, arguments).end()
            }).tween("zoom",
            function() {
                var t = arguments,
                i = x(this, t),
                u = r.apply(this, t),
                o = e || _(u),
                a = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
                c = this.__zoom,
                f = "function" == typeof n ? n.apply(this, t) : n,
                l = s(c.invert(o).concat(a / c.k), f.invert(o).concat(a / f.k));
                return function(t) {
                    if (1 === t) t = f;
                    else {
                        var n = l(t),
                        e = a / n[2];
                        t = new ow(e, o[0] - n[0] * e, o[1] - n[1] * e)
                    }
                    i.zoom(null, t)
                }
            })
        }
        function x(t, n) {
            for (var e, r = 0,
            i = l.length; r < i; ++r) if ((e = l[r]).that === t) return e;
            return new w(t, n)
        }
        function w(t, n) {
            this.that = t,
            this.args = n,
            this.index = -1,
            this.active = 0,
            this.extent = r.apply(t, n)
        }
        function M() {
            if (e.apply(this, arguments)) {
                var t = x(this, arguments),
                n = this.__zoom,
                r = Math.max(a[0], Math.min(a[1], n.k * Math.pow(2, u.apply(this, arguments)))),
                o = hn(this);
                if (t.wheel) t.mouse[0][0] === o[0] && t.mouse[0][1] === o[1] || (t.mouse[1] = n.invert(t.mouse[0] = o)),
                clearTimeout(t.wheel);
                else {
                    if (n.k === r) return;
                    t.mouse = [o, n.invert(o)],
                    ti(this),
                    t.start()
                }
                sw(),
                t.wheel = setTimeout(function() {
                    t.wheel = null,
                    t.end()
                },
                p),
                t.zoom("mouse", i(b(y(n, r), t.mouse[0], t.mouse[1]), t.extent, c))
            }
        }
        function A() {
            if (!n && e.apply(this, arguments)) {
                var t = x(this, arguments),
                r = un(Vt.view).on("mousemove.zoom",
                function() {
                    if (sw(), !t.moved) {
                        var n = Vt.clientX - o,
                        e = Vt.clientY - a;
                        t.moved = n * n + e * e > v
                    }
                    t.zoom("mouse", i(b(t.that.__zoom, t.mouse[0] = hn(t.that), t.mouse[1]), t.extent, c))
                },
                !0).on("mouseup.zoom",
                function() {
                    r.on("mousemove.zoom mouseup.zoom", null),
                    _n(Vt.view, t.moved),
                    sw(),
                    t.end()
                },
                !0),
                u = hn(this),
                o = Vt.clientX,
                a = Vt.clientY;
                bn(Vt.view),
                fw(),
                t.mouse = [u, this.__zoom.invert(u)],
                ti(this),
                t.start()
            }
        }
        function S() {
            if (e.apply(this, arguments)) {
                var t = this.__zoom,
                n = hn(this),
                u = t.invert(n),
                o = t.k * (Vt.shiftKey ? .5 : 2),
                a = i(b(y(t, o), n, u), r.apply(this, arguments), c);
                sw(),
                f > 0 ? un(this).transition().duration(f).call(m, a, n) : un(this).call(g.transform, a)
            }
        }
        function k() {
            if (e.apply(this, arguments)) {
                var n, r, i, u, o = x(this, arguments),
                a = Vt.changedTouches,
                c = a.length;
                for (fw(), r = 0; r < c; ++r) i = a[r],
                u = [u = pn(this, a, i.identifier), this.__zoom.invert(u), i.identifier],
                o.touch0 ? o.touch1 || (o.touch1 = u) : (o.touch0 = u, n = !0);
                if (t && (t = clearTimeout(t), !o.touch1)) return o.end(),
                void((u = un(this).on("dblclick.zoom")) && u.apply(this, arguments));
                n && (t = setTimeout(function() {
                    t = null
                },
                d), ti(this), o.start())
            }
        }
        function T() {
            var n, e, r, u, o = x(this, arguments),
            a = Vt.changedTouches,
            f = a.length;
            for (sw(), t && (t = clearTimeout(t)), n = 0; n < f; ++n) e = a[n],
            r = pn(this, a, e.identifier),
            o.touch0 && o.touch0[2] === e.identifier ? o.touch0[0] = r: o.touch1 && o.touch1[2] === e.identifier && (o.touch1[0] = r);
            if (e = o.that.__zoom, o.touch1) {
                var s = o.touch0[0],
                l = o.touch0[1],
                h = o.touch1[0],
                d = o.touch1[1],
                p = (p = h[0] - s[0]) * p + (p = h[1] - s[1]) * p,
                v = (v = d[0] - l[0]) * v + (v = d[1] - l[1]) * v;
                e = y(e, Math.sqrt(p / v)),
                r = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2],
                u = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2]
            } else {
                if (!o.touch0) return;
                r = o.touch0[0],
                u = o.touch0[1]
            }
            o.zoom("touch", i(b(e, r, u), o.extent, c))
        }
        function N() {
            var t, e, r = x(this, arguments),
            i = Vt.changedTouches,
            u = i.length;
            for (fw(), n && clearTimeout(n), n = setTimeout(function() {
                n = null
            },
            d), t = 0; t < u; ++t) e = i[t],
            r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0: r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
            r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1),
            r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end()
        }
        return g.transform = function(t, n) {
            var e = t.selection ? t.selection() : t;
            e.property("__zoom", dw),
            t !== e ? m(t, n) : e.interrupt().each(function() {
                x(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
            })
        },
        g.scaleBy = function(t, n) {
            g.scaleTo(t,
            function() {
                return this.__zoom.k * ("function" == typeof n ? n.apply(this, arguments) : n)
            })
        },
        g.scaleTo = function(t, n) {
            g.transform(t,
            function() {
                var t = r.apply(this, arguments),
                e = this.__zoom,
                u = _(t),
                o = e.invert(u),
                a = "function" == typeof n ? n.apply(this, arguments) : n;
                return i(b(y(e, a), u, o), t, c)
            })
        },
        g.translateBy = function(t, n, e) {
            g.transform(t,
            function() {
                return i(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), r.apply(this, arguments), c)
            })
        },
        g.translateTo = function(t, n, e) {
            g.transform(t,
            function() {
                var t = r.apply(this, arguments),
                u = this.__zoom,
                o = _(t);
                return i(aw.translate(o[0], o[1]).scale(u.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, c)
            })
        },
        w.prototype = {
            start: function() {
                return 1 == ++this.active && (this.index = l.push(this) - 1, this.emit("start")),
                this
            },
            zoom: function(t, n) {
                return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])),
                this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])),
                this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])),
                this.that.__zoom = n,
                this.emit("zoom"),
                this
            },
            end: function() {
                return 0 == --this.active && (l.splice(this.index, 1), this.index = -1, this.emit("end")),
                this
            },
            emit: function(t) {
                Jt(new
                function(t, n, e) {
                    this.target = t,
                    this.type = n,
                    this.transform = e
                } (g, t, this.that.__zoom), h.apply, h, [t, this.that, this.args])
            }
        },
        g.wheelDelta = function(t) {
            return arguments.length ? (u = "function" == typeof t ? t: uw( + t), g) : u
        },
        g.filter = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t: uw( !! t), g) : e
        },
        g.touchable = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t: uw( !! t), g) : o
        },
        g.extent = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t: uw([[ + t[0][0], +t[0][1]], [ + t[1][0], +t[1][1]]]), g) : r
        },
        g.scaleExtent = function(t) {
            return arguments.length ? (a[0] = +t[0], a[1] = +t[1], g) : [a[0], a[1]]
        },
        g.translateExtent = function(t) {
            return arguments.length ? (c[0][0] = +t[0][0], c[1][0] = +t[1][0], c[0][1] = +t[0][1], c[1][1] = +t[1][1], g) : [[c[0][0], c[0][1]], [c[1][0], c[1][1]]]
        },
        g.constrain = function(t) {
            return arguments.length ? (i = t, g) : i
        },
        g.duration = function(t) {
            return arguments.length ? (f = +t, g) : f
        },
        g.interpolate = function(t) {
            return arguments.length ? (s = t, g) : s
        },
        g.on = function() {
            var t = h.on.apply(h, arguments);
            return t === h ? g: t
        },
        g.clickDistance = function(t) {
            return arguments.length ? (v = (t = +t) * t, g) : Math.sqrt(v)
        },
        g
    };
    e.d(n, "version",
    function() {
        return "5.6.0"
    }),
    e.d(n, "bisect",
    function() {
        return c
    }),
    e.d(n, "bisectRight",
    function() {
        return o
    }),
    e.d(n, "bisectLeft",
    function() {
        return a
    }),
    e.d(n, "ascending",
    function() {
        return r
    }),
    e.d(n, "bisector",
    function() {
        return i
    }),
    e.d(n, "cross",
    function() {
        return l
    }),
    e.d(n, "descending",
    function() {
        return h
    }),
    e.d(n, "deviation",
    function() {
        return v
    }),
    e.d(n, "extent",
    function() {
        return g
    }),
    e.d(n, "histogram",
    function() {
        return C
    }),
    e.d(n, "thresholdFreedmanDiaconis",
    function() {
        return z
    }),
    e.d(n, "thresholdScott",
    function() {
        return R
    }),
    e.d(n, "thresholdSturges",
    function() {
        return E
    }),
    e.d(n, "max",
    function() {
        return L
    }),
    e.d(n, "mean",
    function() {
        return D
    }),
    e.d(n, "median",
    function() {
        return U
    }),
    e.d(n, "merge",
    function() {
        return O
    }),
    e.d(n, "min",
    function() {
        return q
    }),
    e.d(n, "pairs",
    function() {
        return f
    }),
    e.d(n, "permute",
    function() {
        return Y
    }),
    e.d(n, "quantile",
    function() {
        return P
    }),
    e.d(n, "range",
    function() {
        return w
    }),
    e.d(n, "scan",
    function() {
        return B
    }),
    e.d(n, "shuffle",
    function() {
        return I
    }),
    e.d(n, "sum",
    function() {
        return F
    }),
    e.d(n, "ticks",
    function() {
        return k
    }),
    e.d(n, "tickIncrement",
    function() {
        return T
    }),
    e.d(n, "tickStep",
    function() {
        return N
    }),
    e.d(n, "transpose",
    function() {
        return j
    }),
    e.d(n, "variance",
    function() {
        return p
    }),
    e.d(n, "zip",
    function() {
        return X
    }),
    e.d(n, "axisTop",
    function() {
        return rt
    }),
    e.d(n, "axisRight",
    function() {
        return it
    }),
    e.d(n, "axisBottom",
    function() {
        return ut
    }),
    e.d(n, "axisLeft",
    function() {
        return ot
    }),
    e.d(n, "brush",
    function() {
        return Au
    }),
    e.d(n, "brushX",
    function() {
        return wu
    }),
    e.d(n, "brushY",
    function() {
        return Mu
    }),
    e.d(n, "brushSelection",
    function() {
        return xu
    }),
    e.d(n, "chord",
    function() {
        return zu
    }),
    e.d(n, "ribbon",
    function() {
        return Gu
    }),
    e.d(n, "nest",
    function() {
        return Zu
    }),
    e.d(n, "set",
    function() {
        return io
    }),
    e.d(n, "map",
    function() {
        return Wu
    }),
    e.d(n, "keys",
    function() {
        return uo
    }),
    e.d(n, "values",
    function() {
        return oo
    }),
    e.d(n, "entries",
    function() {
        return ao
    }),
    e.d(n, "color",
    function() {
        return Fn
    }),
    e.d(n, "rgb",
    function() {
        return Gn
    }),
    e.d(n, "hsl",
    function() {
        return Zn
    }),
    e.d(n, "lab",
    function() {
        return se
    }),
    e.d(n, "hcl",
    function() {
        return be
    }),
    e.d(n, "lch",
    function() {
        return ye
    }),
    e.d(n, "gray",
    function() {
        return fe
    }),
    e.d(n, "cubehelix",
    function() {
        return ke
    }),
    e.d(n, "contours",
    function() {
        return bo
    }),
    e.d(n, "contourDensity",
    function() {
        return Ao
    }),
    e.d(n, "dispatch",
    function() {
        return ht
    }),
    e.d(n, "drag",
    function() {
        return kn
    }),
    e.d(n, "dragDisable",
    function() {
        return bn
    }),
    e.d(n, "dragEnable",
    function() {
        return _n
    }),
    e.d(n, "dsvFormat",
    function() {
        return Po
    }),
    e.d(n, "csvParse",
    function() {
        return Ro
    }),
    e.d(n, "csvParseRows",
    function() {
        return Lo
    }),
    e.d(n, "csvFormat",
    function() {
        return Do
    }),
    e.d(n, "csvFormatRows",
    function() {
        return Uo
    }),
    e.d(n, "tsvParse",
    function() {
        return qo
    }),
    e.d(n, "tsvParseRows",
    function() {
        return Yo
    }),
    e.d(n, "tsvFormat",
    function() {
        return Bo
    }),
    e.d(n, "tsvFormatRows",
    function() {
        return Io
    }),
    e.d(n, "easeLinear",
    function() {
        return fi
    }),
    e.d(n, "easeQuad",
    function() {
        return hi
    }),
    e.d(n, "easeQuadIn",
    function() {
        return si
    }),
    e.d(n, "easeQuadOut",
    function() {
        return li
    }),
    e.d(n, "easeQuadInOut",
    function() {
        return hi
    }),
    e.d(n, "easeCubic",
    function() {
        return vi
    }),
    e.d(n, "easeCubicIn",
    function() {
        return di
    }),
    e.d(n, "easeCubicOut",
    function() {
        return pi
    }),
    e.d(n, "easeCubicInOut",
    function() {
        return vi
    }),
    e.d(n, "easePoly",
    function() {
        return bi
    }),
    e.d(n, "easePolyIn",
    function() {
        return gi
    }),
    e.d(n, "easePolyOut",
    function() {
        return yi
    }),
    e.d(n, "easePolyInOut",
    function() {
        return bi
    }),
    e.d(n, "easeSin",
    function() {
        return Mi
    }),
    e.d(n, "easeSinIn",
    function() {
        return xi
    }),
    e.d(n, "easeSinOut",
    function() {
        return wi
    }),
    e.d(n, "easeSinInOut",
    function() {
        return Mi
    }),
    e.d(n, "easeExp",
    function() {
        return ki
    }),
    e.d(n, "easeExpIn",
    function() {
        return Ai
    }),
    e.d(n, "easeExpOut",
    function() {
        return Si
    }),
    e.d(n, "easeExpInOut",
    function() {
        return ki
    }),
    e.d(n, "easeCircle",
    function() {
        return Ei
    }),
    e.d(n, "easeCircleIn",
    function() {
        return Ti
    }),
    e.d(n, "easeCircleOut",
    function() {
        return Ni
    }),
    e.d(n, "easeCircleInOut",
    function() {
        return Ei
    }),
    e.d(n, "easeBounce",
    function() {
        return Ii
    }),
    e.d(n, "easeBounceIn",
    function() {
        return Bi
    }),
    e.d(n, "easeBounceOut",
    function() {
        return Ii
    }),
    e.d(n, "easeBounceInOut",
    function() {
        return Fi
    }),
    e.d(n, "easeBack",
    function() {
        return Xi
    }),
    e.d(n, "easeBackIn",
    function() {
        return ji
    }),
    e.d(n, "easeBackOut",
    function() {
        return Hi
    }),
    e.d(n, "easeBackInOut",
    function() {
        return Xi
    }),
    e.d(n, "easeElastic",
    function() {
        return $i
    }),
    e.d(n, "easeElasticIn",
    function() {
        return Vi
    }),
    e.d(n, "easeElasticOut",
    function() {
        return $i
    }),
    e.d(n, "easeElasticInOut",
    function() {
        return Wi
    }),
    e.d(n, "blob",
    function() {
        return jo
    }),
    e.d(n, "buffer",
    function() {
        return Xo
    }),
    e.d(n, "dsv",
    function() {
        return Wo
    }),
    e.d(n, "csv",
    function() {
        return Zo
    }),
    e.d(n, "tsv",
    function() {
        return Qo
    }),
    e.d(n, "image",
    function() {
        return Jo
    }),
    e.d(n, "json",
    function() {
        return ta
    }),
    e.d(n, "text",
    function() {
        return Vo
    }),
    e.d(n, "xml",
    function() {
        return ea
    }),
    e.d(n, "html",
    function() {
        return ra
    }),
    e.d(n, "svg",
    function() {
        return ia
    }),
    e.d(n, "forceCenter",
    function() {
        return ua
    }),
    e.d(n, "forceCollide",
    function() {
        return ba
    }),
    e.d(n, "forceLink",
    function() {
        return xa
    }),
    e.d(n, "forceManyBody",
    function() {
        return Ta
    }),
    e.d(n, "forceRadial",
    function() {
        return Na
    }),
    e.d(n, "forceSimulation",
    function() {
        return ka
    }),
    e.d(n, "forceX",
    function() {
        return Ea
    }),
    e.d(n, "forceY",
    function() {
        return Ca
    }),
    e.d(n, "formatDefaultLocale",
    function() {
        return Ga
    }),
    e.d(n, "format",
    function() {
        return qa
    }),
    e.d(n, "formatPrefix",
    function() {
        return Ya
    }),
    e.d(n, "formatLocale",
    function() {
        return Xa
    }),
    e.d(n, "formatSpecifier",
    function() {
        return La
    }),
    e.d(n, "precisionFixed",
    function() {
        return Va
    }),
    e.d(n, "precisionPrefix",
    function() {
        return $a
    }),
    e.d(n, "precisionRound",
    function() {
        return Wa
    }),
    e.d(n, "geoArea",
    function() {
        return Ic
    }),
    e.d(n, "geoBounds",
    function() {
        return Lf
    }),
    e.d(n, "geoCentroid",
    function() {
        return Gf
    }),
    e.d(n, "geoCircle",
    function() {
        return rs
    }),
    e.d(n, "geoClipAntimeridian",
    function() {
        return ps
    }),
    e.d(n, "geoClipCircle",
    function() {
        return vs
    }),
    e.d(n, "geoClipExtent",
    function() {
        return Ms
    }),
    e.d(n, "geoClipRectangle",
    function() {
        return _s
    }),
    e.d(n, "geoContains",
    function() {
        return Is
    }),
    e.d(n, "geoDistance",
    function() {
        return zs
    }),
    e.d(n, "geoGraticule",
    function() {
        return Hs
    }),
    e.d(n, "geoGraticule10",
    function() {
        return Xs
    }),
    e.d(n, "geoInterpolate",
    function() {
        return Zs
    }),
    e.d(n, "geoLength",
    function() {
        return Es
    }),
    e.d(n, "geoPath",
    function() {
        return $l
    }),
    e.d(n, "geoAlbers",
    function() {
        return dh
    }),
    e.d(n, "geoAlbersUsa",
    function() {
        return ph
    }),
    e.d(n, "geoAzimuthalEqualArea",
    function() {
        return bh
    }),
    e.d(n, "geoAzimuthalEqualAreaRaw",
    function() {
        return yh
    }),
    e.d(n, "geoAzimuthalEquidistant",
    function() {
        return mh
    }),
    e.d(n, "geoAzimuthalEquidistantRaw",
    function() {
        return _h
    }),
    e.d(n, "geoConicConformal",
    function() {
        return kh
    }),
    e.d(n, "geoConicConformalRaw",
    function() {
        return Sh
    }),
    e.d(n, "geoConicEqualArea",
    function() {
        return hh
    }),
    e.d(n, "geoConicEqualAreaRaw",
    function() {
        return lh
    }),
    e.d(n, "geoConicEquidistant",
    function() {
        return Ch
    }),
    e.d(n, "geoConicEquidistantRaw",
    function() {
        return Eh
    }),
    e.d(n, "geoEquirectangular",
    function() {
        return Nh
    }),
    e.d(n, "geoEquirectangularRaw",
    function() {
        return Th
    }),
    e.d(n, "geoGnomonic",
    function() {
        return zh
    }),
    e.d(n, "geoGnomonicRaw",
    function() {
        return Ph
    }),
    e.d(n, "geoIdentity",
    function() {
        return Lh
    }),
    e.d(n, "geoProjection",
    function() {
        return ch
    }),
    e.d(n, "geoProjectionMutator",
    function() {
        return fh
    }),
    e.d(n, "geoMercator",
    function() {
        return wh
    }),
    e.d(n, "geoMercatorRaw",
    function() {
        return xh
    }),
    e.d(n, "geoNaturalEarth1",
    function() {
        return Uh
    }),
    e.d(n, "geoNaturalEarth1Raw",
    function() {
        return Dh
    }),
    e.d(n, "geoOrthographic",
    function() {
        return qh
    }),
    e.d(n, "geoOrthographicRaw",
    function() {
        return Oh
    }),
    e.d(n, "geoStereographic",
    function() {
        return Bh
    }),
    e.d(n, "geoStereographicRaw",
    function() {
        return Yh
    }),
    e.d(n, "geoTransverseMercator",
    function() {
        return Fh
    }),
    e.d(n, "geoTransverseMercatorRaw",
    function() {
        return Ih
    }),
    e.d(n, "geoRotation",
    function() {
        return ts
    }),
    e.d(n, "geoStream",
    function() {
        return Rc
    }),
    e.d(n, "geoTransform",
    function() {
        return Wl
    }),
    e.d(n, "cluster",
    function() {
        return Gh
    }),
    e.d(n, "hierarchy",
    function() {
        return $h
    }),
    e.d(n, "pack",
    function() {
        return bd
    }),
    e.d(n, "packSiblings",
    function() {
        return dd
    }),
    e.d(n, "packEnclose",
    function() {
        return td
    }),
    e.d(n, "partition",
    function() {
        return Ad
    }),
    e.d(n, "stratify",
    function() {
        return Cd
    }),
    e.d(n, "tree",
    function() {
        return Od
    }),
    e.d(n, "treemap",
    function() {
        return Fd
    }),
    e.d(n, "treemapBinary",
    function() {
        return jd
    }),
    e.d(n, "treemapDice",
    function() {
        return Md
    }),
    e.d(n, "treemapSlice",
    function() {
        return qd
    }),
    e.d(n, "treemapSliceDice",
    function() {
        return Hd
    }),
    e.d(n, "treemapSquarify",
    function() {
        return Id
    }),
    e.d(n, "treemapResquarify",
    function() {
        return Xd
    }),
    e.d(n, "interpolate",
    function() {
        return Qe
    }),
    e.d(n, "interpolateArray",
    function() {
        return Be
    }),
    e.d(n, "interpolateBasis",
    function() {
        return Ee
    }),
    e.d(n, "interpolateBasisClosed",
    function() {
        return Ce
    }),
    e.d(n, "interpolateDate",
    function() {
        return Ie
    }),
    e.d(n, "interpolateNumber",
    function() {
        return Fe
    }),
    e.d(n, "interpolateObject",
    function() {
        return je
    }),
    e.d(n, "interpolateRound",
    function() {
        return Je
    }),
    e.d(n, "interpolateString",
    function() {
        return Ze
    }),
    e.d(n, "interpolateTransformCss",
    function() {
        return rr
    }),
    e.d(n, "interpolateTransformSvg",
    function() {
        return ir
    }),
    e.d(n, "interpolateZoom",
    function() {
        return ar
    }),
    e.d(n, "interpolateRgb",
    function() {
        return Ue
    }),
    e.d(n, "interpolateRgbBasis",
    function() {
        return qe
    }),
    e.d(n, "interpolateRgbBasisClosed",
    function() {
        return Ye
    }),
    e.d(n, "interpolateHsl",
    function() {
        return fr
    }),
    e.d(n, "interpolateHslLong",
    function() {
        return sr
    }),
    e.d(n, "interpolateLab",
    function() {
        return lr
    }),
    e.d(n, "interpolateHcl",
    function() {
        return dr
    }),
    e.d(n, "interpolateHclLong",
    function() {
        return pr
    }),
    e.d(n, "interpolateCubehelix",
    function() {
        return gr
    }),
    e.d(n, "interpolateCubehelixLong",
    function() {
        return yr
    }),
    e.d(n, "piecewise",
    function() {
        return br
    }),
    e.d(n, "quantize",
    function() {
        return xr
    }),
    e.d(n, "path",
    function() {
        return Bu
    }),
    e.d(n, "polygonArea",
    function() {
        return Gd
    }),
    e.d(n, "polygonCentroid",
    function() {
        return Vd
    }),
    e.d(n, "polygonHull",
    function() {
        return Qd
    }),
    e.d(n, "polygonContains",
    function() {
        return Jd
    }),
    e.d(n, "polygonLength",
    function() {
        return Kd
    }),
    e.d(n, "quadtree",
    function() {
        return ha
    }),
    e.d(n, "randomUniform",
    function() {
        return np
    }),
    e.d(n, "randomNormal",
    function() {
        return ep
    }),
    e.d(n, "randomLogNormal",
    function() {
        return rp
    }),
    e.d(n, "randomBates",
    function() {
        return up
    }),
    e.d(n, "randomIrwinHall",
    function() {
        return ip
    }),
    e.d(n, "randomExponential",
    function() {
        return op
    }),
    e.d(n, "scaleBand",
    function() {
        return hp
    }),
    e.d(n, "scalePoint",
    function() {
        return dp
    }),
    e.d(n, "scaleIdentity",
    function() {
        return Sp
    }),
    e.d(n, "scaleLinear",
    function() {
        return Ap
    }),
    e.d(n, "scaleLog",
    function() {
        return Rp
    }),
    e.d(n, "scaleOrdinal",
    function() {
        return lp
    }),
    e.d(n, "scaleImplicit",
    function() {
        return sp
    }),
    e.d(n, "scalePow",
    function() {
        return Dp
    }),
    e.d(n, "scaleSqrt",
    function() {
        return Up
    }),
    e.d(n, "scaleQuantile",
    function() {
        return Op
    }),
    e.d(n, "scaleQuantize",
    function() {
        return qp
    }),
    e.d(n, "scaleThreshold",
    function() {
        return Yp
    }),
    e.d(n, "scaleTime",
    function() {
        return Dy
    }),
    e.d(n, "scaleUtc",
    function() {
        return Uy
    }),
    e.d(n, "scaleSequential",
    function() {
        return Oy
    }),
    e.d(n, "scaleDiverging",
    function() {
        return qy
    }),
    e.d(n, "schemeCategory10",
    function() {
        return By
    }),
    e.d(n, "schemeAccent",
    function() {
        return Iy
    }),
    e.d(n, "schemeDark2",
    function() {
        return Fy
    }),
    e.d(n, "schemePaired",
    function() {
        return jy
    }),
    e.d(n, "schemePastel1",
    function() {
        return Hy
    }),
    e.d(n, "schemePastel2",
    function() {
        return Xy
    }),
    e.d(n, "schemeSet1",
    function() {
        return Gy
    }),
    e.d(n, "schemeSet2",
    function() {
        return Vy
    }),
    e.d(n, "schemeSet3",
    function() {
        return $y
    }),
    e.d(n, "interpolateBrBG",
    function() {
        return Qy
    }),
    e.d(n, "schemeBrBG",
    function() {
        return Zy
    }),
    e.d(n, "interpolatePRGn",
    function() {
        return Ky
    }),
    e.d(n, "schemePRGn",
    function() {
        return Jy
    }),
    e.d(n, "interpolatePiYG",
    function() {
        return nb
    }),
    e.d(n, "schemePiYG",
    function() {
        return tb
    }),
    e.d(n, "interpolatePuOr",
    function() {
        return rb
    }),
    e.d(n, "schemePuOr",
    function() {
        return eb
    }),
    e.d(n, "interpolateRdBu",
    function() {
        return ub
    }),
    e.d(n, "schemeRdBu",
    function() {
        return ib
    }),
    e.d(n, "interpolateRdGy",
    function() {
        return ab
    }),
    e.d(n, "schemeRdGy",
    function() {
        return ob
    }),
    e.d(n, "interpolateRdYlBu",
    function() {
        return fb
    }),
    e.d(n, "schemeRdYlBu",
    function() {
        return cb
    }),
    e.d(n, "interpolateRdYlGn",
    function() {
        return lb
    }),
    e.d(n, "schemeRdYlGn",
    function() {
        return sb
    }),
    e.d(n, "interpolateSpectral",
    function() {
        return db
    }),
    e.d(n, "schemeSpectral",
    function() {
        return hb
    }),
    e.d(n, "interpolateBuGn",
    function() {
        return vb
    }),
    e.d(n, "schemeBuGn",
    function() {
        return pb
    }),
    e.d(n, "interpolateBuPu",
    function() {
        return yb
    }),
    e.d(n, "schemeBuPu",
    function() {
        return gb
    }),
    e.d(n, "interpolateGnBu",
    function() {
        return _b
    }),
    e.d(n, "schemeGnBu",
    function() {
        return bb
    }),
    e.d(n, "interpolateOrRd",
    function() {
        return xb
    }),
    e.d(n, "schemeOrRd",
    function() {
        return mb
    }),
    e.d(n, "interpolatePuBuGn",
    function() {
        return Mb
    }),
    e.d(n, "schemePuBuGn",
    function() {
        return wb
    }),
    e.d(n, "interpolatePuBu",
    function() {
        return Sb
    }),
    e.d(n, "schemePuBu",
    function() {
        return Ab
    }),
    e.d(n, "interpolatePuRd",
    function() {
        return Tb
    }),
    e.d(n, "schemePuRd",
    function() {
        return kb
    }),
    e.d(n, "interpolateRdPu",
    function() {
        return Eb
    }),
    e.d(n, "schemeRdPu",
    function() {
        return Nb
    }),
    e.d(n, "interpolateYlGnBu",
    function() {
        return Pb
    }),
    e.d(n, "schemeYlGnBu",
    function() {
        return Cb
    }),
    e.d(n, "interpolateYlGn",
    function() {
        return Rb
    }),
    e.d(n, "schemeYlGn",
    function() {
        return zb
    }),
    e.d(n, "interpolateYlOrBr",
    function() {
        return Db
    }),
    e.d(n, "schemeYlOrBr",
    function() {
        return Lb
    }),
    e.d(n, "interpolateYlOrRd",
    function() {
        return Ob
    }),
    e.d(n, "schemeYlOrRd",
    function() {
        return Ub
    }),
    e.d(n, "interpolateBlues",
    function() {
        return Yb
    }),
    e.d(n, "schemeBlues",
    function() {
        return qb
    }),
    e.d(n, "interpolateGreens",
    function() {
        return Ib
    }),
    e.d(n, "schemeGreens",
    function() {
        return Bb
    }),
    e.d(n, "interpolateGreys",
    function() {
        return jb
    }),
    e.d(n, "schemeGreys",
    function() {
        return Fb
    }),
    e.d(n, "interpolatePurples",
    function() {
        return Xb
    }),
    e.d(n, "schemePurples",
    function() {
        return Hb
    }),
    e.d(n, "interpolateReds",
    function() {
        return Vb
    }),
    e.d(n, "schemeReds",
    function() {
        return Gb
    }),
    e.d(n, "interpolateOranges",
    function() {
        return Wb
    }),
    e.d(n, "schemeOranges",
    function() {
        return $b
    }),
    e.d(n, "interpolateCubehelixDefault",
    function() {
        return Zb
    }),
    e.d(n, "interpolateRainbow",
    function() {
        return t_
    }),
    e.d(n, "interpolateWarm",
    function() {
        return Qb
    }),
    e.d(n, "interpolateCool",
    function() {
        return Jb
    }),
    e.d(n, "interpolateSinebow",
    function() {
        return i_
    }),
    e.d(n, "interpolateViridis",
    function() {
        return o_
    }),
    e.d(n, "interpolateMagma",
    function() {
        return a_
    }),
    e.d(n, "interpolateInferno",
    function() {
        return c_
    }),
    e.d(n, "interpolatePlasma",
    function() {
        return f_
    }),
    e.d(n, "create",
    function() {
        return on
    }),
    e.d(n, "creator",
    function() {
        return gt
    }),
    e.d(n, "local",
    function() {
        return cn
    }),
    e.d(n, "matcher",
    function() {
        return At
    }),
    e.d(n, "mouse",
    function() {
        return hn
    }),
    e.d(n, "namespace",
    function() {
        return vt
    }),
    e.d(n, "namespaces",
    function() {
        return pt
    }),
    e.d(n, "clientPoint",
    function() {
        return ln
    }),
    e.d(n, "select",
    function() {
        return un
    }),
    e.d(n, "selectAll",
    function() {
        return dn
    }),
    e.d(n, "selection",
    function() {
        return rn
    }),
    e.d(n, "selector",
    function() {
        return bt
    }),
    e.d(n, "selectorAll",
    function() {
        return mt
    }),
    e.d(n, "style",
    function() {
        return zt
    }),
    e.d(n, "touch",
    function() {
        return pn
    }),
    e.d(n, "touches",
    function() {
        return vn
    }),
    e.d(n, "window",
    function() {
        return Pt
    }),
    e.d(n, "event",
    function() {
        return Vt
    }),
    e.d(n, "customEvent",
    function() {
        return Jt
    }),
    e.d(n, "arc",
    function() {
        return E_
    }),
    e.d(n, "area",
    function() {
        return D_
    }),
    e.d(n, "line",
    function() {
        return L_
    }),
    e.d(n, "pie",
    function() {
        return q_
    }),
    e.d(n, "areaRadial",
    function() {
        return H_
    }),
    e.d(n, "radialArea",
    function() {
        return H_
    }),
    e.d(n, "lineRadial",
    function() {
        return j_
    }),
    e.d(n, "radialLine",
    function() {
        return j_
    }),
    e.d(n, "pointRadial",
    function() {
        return X_
    }),
    e.d(n, "linkHorizontal",
    function() {
        return K_
    }),
    e.d(n, "linkVertical",
    function() {
        return tm
    }),
    e.d(n, "linkRadial",
    function() {
        return nm
    }),
    e.d(n, "symbol",
    function() {
        return _m
    }),
    e.d(n, "symbols",
    function() {
        return bm
    }),
    e.d(n, "symbolCircle",
    function() {
        return em
    }),
    e.d(n, "symbolCross",
    function() {
        return rm
    }),
    e.d(n, "symbolDiamond",
    function() {
        return om
    }),
    e.d(n, "symbolSquare",
    function() {
        return lm
    }),
    e.d(n, "symbolStar",
    function() {
        return sm
    }),
    e.d(n, "symbolTriangle",
    function() {
        return dm
    }),
    e.d(n, "symbolWye",
    function() {
        return ym
    }),
    e.d(n, "curveBasisClosed",
    function() {
        return Sm
    }),
    e.d(n, "curveBasisOpen",
    function() {
        return Tm
    }),
    e.d(n, "curveBasis",
    function() {
        return Mm
    }),
    e.d(n, "curveBundle",
    function() {
        return Em
    }),
    e.d(n, "curveCardinalClosed",
    function() {
        return Lm
    }),
    e.d(n, "curveCardinalOpen",
    function() {
        return Um
    }),
    e.d(n, "curveCardinal",
    function() {
        return zm
    }),
    e.d(n, "curveCatmullRomClosed",
    function() {
        return Im
    }),
    e.d(n, "curveCatmullRomOpen",
    function() {
        return jm
    }),
    e.d(n, "curveCatmullRom",
    function() {
        return Ym
    }),
    e.d(n, "curveLinearClosed",
    function() {
        return Xm
    }),
    e.d(n, "curveLinear",
    function() {
        return P_
    }),
    e.d(n, "curveMonotoneX",
    function() {
        return Km
    }),
    e.d(n, "curveMonotoneY",
    function() {
        return tx
    }),
    e.d(n, "curveNatural",
    function() {
        return rx
    }),
    e.d(n, "curveStep",
    function() {
        return ux
    }),
    e.d(n, "curveStepAfter",
    function() {
        return ax
    }),
    e.d(n, "curveStepBefore",
    function() {
        return ox
    }),
    e.d(n, "stack",
    function() {
        return lx
    }),
    e.d(n, "stackOffsetExpand",
    function() {
        return hx
    }),
    e.d(n, "stackOffsetDiverging",
    function() {
        return dx
    }),
    e.d(n, "stackOffsetNone",
    function() {
        return cx
    }),
    e.d(n, "stackOffsetSilhouette",
    function() {
        return px
    }),
    e.d(n, "stackOffsetWiggle",
    function() {
        return vx
    }),
    e.d(n, "stackOrderAscending",
    function() {
        return gx
    }),
    e.d(n, "stackOrderDescending",
    function() {
        return bx
    }),
    e.d(n, "stackOrderInsideOut",
    function() {
        return _x
    }),
    e.d(n, "stackOrderNone",
    function() {
        return fx
    }),
    e.d(n, "stackOrderReverse",
    function() {
        return mx
    }),
    e.d(n, "timeInterval",
    function() {
        return Fp
    }),
    e.d(n, "timeMillisecond",
    function() {
        return Hp
    }),
    e.d(n, "timeMilliseconds",
    function() {
        return Xp
    }),
    e.d(n, "utcMillisecond",
    function() {
        return Hp
    }),
    e.d(n, "utcMilliseconds",
    function() {
        return Xp
    }),
    e.d(n, "timeSecond",
    function() {
        return Wp
    }),
    e.d(n, "timeSeconds",
    function() {
        return Zp
    }),
    e.d(n, "utcSecond",
    function() {
        return Wp
    }),
    e.d(n, "utcSeconds",
    function() {
        return Zp
    }),
    e.d(n, "timeMinute",
    function() {
        return Jp
    }),
    e.d(n, "timeMinutes",
    function() {
        return Kp
    }),
    e.d(n, "timeHour",
    function() {
        return nv
    }),
    e.d(n, "timeHours",
    function() {
        return ev
    }),
    e.d(n, "timeDay",
    function() {
        return iv
    }),
    e.d(n, "timeDays",
    function() {
        return uv
    }),
    e.d(n, "timeWeek",
    function() {
        return av
    }),
    e.d(n, "timeWeeks",
    function() {
        return pv
    }),
    e.d(n, "timeSunday",
    function() {
        return av
    }),
    e.d(n, "timeSundays",
    function() {
        return pv
    }),
    e.d(n, "timeMonday",
    function() {
        return cv
    }),
    e.d(n, "timeMondays",
    function() {
        return vv
    }),
    e.d(n, "timeTuesday",
    function() {
        return fv
    }),
    e.d(n, "timeTuesdays",
    function() {
        return gv
    }),
    e.d(n, "timeWednesday",
    function() {
        return sv
    }),
    e.d(n, "timeWednesdays",
    function() {
        return yv
    }),
    e.d(n, "timeThursday",
    function() {
        return lv
    }),
    e.d(n, "timeThursdays",
    function() {
        return bv
    }),
    e.d(n, "timeFriday",
    function() {
        return hv
    }),
    e.d(n, "timeFridays",
    function() {
        return _v
    }),
    e.d(n, "timeSaturday",
    function() {
        return dv
    }),
    e.d(n, "timeSaturdays",
    function() {
        return mv
    }),
    e.d(n, "timeMonth",
    function() {
        return wv
    }),
    e.d(n, "timeMonths",
    function() {
        return Mv
    }),
    e.d(n, "timeYear",
    function() {
        return Sv
    }),
    e.d(n, "timeYears",
    function() {
        return kv
    }),
    e.d(n, "utcMinute",
    function() {
        return Nv
    }),
    e.d(n, "utcMinutes",
    function() {
        return Ev
    }),
    e.d(n, "utcHour",
    function() {
        return Pv
    }),
    e.d(n, "utcHours",
    function() {
        return zv
    }),
    e.d(n, "utcDay",
    function() {
        return Lv
    }),
    e.d(n, "utcDays",
    function() {
        return Dv
    }),
    e.d(n, "utcWeek",
    function() {
        return Ov
    }),
    e.d(n, "utcWeeks",
    function() {
        return Hv
    }),
    e.d(n, "utcSunday",
    function() {
        return Ov
    }),
    e.d(n, "utcSundays",
    function() {
        return Hv
    }),
    e.d(n, "utcMonday",
    function() {
        return qv
    }),
    e.d(n, "utcMondays",
    function() {
        return Xv
    }),
    e.d(n, "utcTuesday",
    function() {
        return Yv
    }),
    e.d(n, "utcTuesdays",
    function() {
        return Gv
    }),
    e.d(n, "utcWednesday",
    function() {
        return Bv
    }),
    e.d(n, "utcWednesdays",
    function() {
        return Vv
    }),
    e.d(n, "utcThursday",
    function() {
        return Iv
    }),
    e.d(n, "utcThursdays",
    function() {
        return $v
    }),
    e.d(n, "utcFriday",
    function() {
        return Fv
    }),
    e.d(n, "utcFridays",
    function() {
        return Wv
    }),
    e.d(n, "utcSaturday",
    function() {
        return jv
    }),
    e.d(n, "utcSaturdays",
    function() {
        return Zv
    }),
    e.d(n, "utcMonth",
    function() {
        return Jv
    }),
    e.d(n, "utcMonths",
    function() {
        return Kv
    }),
    e.d(n, "utcYear",
    function() {
        return ng
    }),
    e.d(n, "utcYears",
    function() {
        return eg
    }),
    e.d(n, "timeFormatDefaultLocale",
    function() {
        return wy
    }),
    e.d(n, "timeFormat",
    function() {
        return cg
    }),
    e.d(n, "timeParse",
    function() {
        return fg
    }),
    e.d(n, "utcFormat",
    function() {
        return sg
    }),
    e.d(n, "utcParse",
    function() {
        return lg
    }),
    e.d(n, "timeFormatLocale",
    function() {
        return og
    }),
    e.d(n, "isoFormat",
    function() {
        return My
    }),
    e.d(n, "isoParse",
    function() {
        return Ay
    }),
    e.d(n, "now",
    function() {
        return Pr
    }),
    e.d(n, "timer",
    function() {
        return Lr
    }),
    e.d(n, "timerFlush",
    function() {
        return Dr
    }),
    e.d(n, "timeout",
    function() {
        return Yr
    }),
    e.d(n, "interval",
    function() {
        return Br
    }),
    e.d(n, "transition",
    function() {
        return oi
    }),
    e.d(n, "active",
    function() {
        return Ki
    }),
    e.d(n, "interrupt",
    function() {
        return ti
    }),
    e.d(n, "voronoi",
    function() {
        return iw
    }),
    e.d(n, "zoom",
    function() {
        return yw
    }),
    e.d(n, "zoomTransform",
    function() {
        return cw
    }),
    e.d(n, "zoomIdentity",
    function() {
        return aw
    })
},
function(t, n, e) {
    "use strict";
    var r = function(t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t) for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n.
    default = t,
        n
    } (e(0)),
    i = e(2);
    r.json("./miserables.json").then(function(t) {
        r.select("svg").call(function(t) {
            return function(n) {
                var e = +n.attr("width"),
                i = +n.attr("height"),
                u = r.scaleOrdinal(r.schemeCategory10),
                o = r.forceSimulation().force("link", r.forceLink().id(function(t) {
                    return t.id
                })).force("charge", r.forceManyBody()).force("center", r.forceCenter(e / 2, i / 2)),
                a = r.drag().on("start",
                function(t) {
                    r.event.active || o.alphaTarget(.3).restart(),
                    t.fx = t.x,
                    t.fy = t.y
                }).on("drag",
                function(t) {
                    t.fx = r.event.x,
                    t.fy = r.event.y
                }).on("end",
                function(t) {
                    r.event.active || o.alphaTarget(0),
                    t.fx = null,
                    t.fy = null
                }),
                c = n.append("g").attr("class", "links").selectAll("line").data(t.links).enter().append("line").attr("stroke", "#999").attr("stroke-opacity", .6).attr("stroke-width",
                function(t) {
                    return Math.sqrt(t.value)
                }),
                f = n.append("g").attr("class", "nodes").selectAll("circle").data(t.nodes).enter().append("circle").attr("r", 5).attr("stroke", "#fff").attr("stroke-width", "1.5px").attr("fill",
                function(t) {
                    return u(t.group)
                }).call(a);
                f.append("title").text(function(t) {
                    return t.id
                }),
                o.nodes(t.nodes).on("tick",
                function() {
                    c.attr("x1",
                    function(t) {
                        return t.source.x
                    }).attr("y1",
                    function(t) {
                        return t.source.y
                    }).attr("x2",
                    function(t) {
                        return t.target.x
                    }).attr("y2",
                    function(t) {
                        return t.target.y
                    }),
                    f.attr("cx",
                    function(t) {
                        return t.x
                    }).attr("cy",
                    function(t) {
                        return t.y
                    })
                }),
                o.force("link").links(t.links)
            }
        } (t)).call((0, i.downloadable)().filename("graph"))
    })
},
function(t, n, e) {
    "use strict";
    var r = e(0),
    i = e(3).SVGConverter;
    n.downloadable = function() {
        var t = "image",
        n = function(n) {
            r.select("#downloadable-css").empty() && r.select("head").append("style").attr("id", "downloadable-css").text(".download-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: inline-block;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0,0,0,.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  background-clip: padding-box;\n}\n\n.download-menu>li>a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: 400;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n  text-decoration: none;\n  background: 0 0;\n}\n\n.download-menu>li>a:hover, .download-menu>li>a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5;\n}"),
            n.on("contextmenu",
            function() {
                var e = function() {
                    var e = r.mouse(document.body);
                    i.loadFromElement(n.node()).then(function(n) { !
                        function(t, n, e) {
                            var i = r.select("body").append("ul").classed("download-menu", !0).style("left", t[0] + "px").style("top", t[1] + "px").on("mouseleave",
                            function() {
                                i.remove()
                            }),
                            u = i.append("li");
                            u.append("a").text("Save as SVG").attr("download", n + ".svg").attr("href", e.svgDataURL()),
                            u.append("a").text("Save as PNG").attr("download", n + ".png").attr("href", e.pngDataURL()),
                            u.append("a").text("Save as JPG").attr("download", n + ".jpeg").attr("href", e.jpegDataURL())
                        } (e, t, n)
                    }),
                    r.event.preventDefault()
                };
                null == r.event ? r.customEvent(window.event, e) : e()
            })
        };
        return n.filename = function() {
            return 0 === arguments.length ? t: (t = arguments[0], n)
        },
        n
    }
},
function(t, n, e) {
    "use strict";
    var r = function() {
        function t(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(n, e, r) {
            return e && t(n.prototype, e),
            r && t(n, r),
            n
        }
    } ();
    var i = window.btoa,
    u = new WeakMap,
    o = function(t) {
        return u.get(t).canvas
    },
    a = function() {
        function t(n, e) { !
            function(t, n) {
                if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
            } (this, t),
            u.set(this, {
                svgDataURL: n,
                canvas: e
            })
        }
        return r(t, null, [{
            key: "load",
            value: function(n, e, r) {
                var u = function(t) {
                    return "data:image/svg+xml;charset=utf-8;base64," + i(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,
                    function(t, n) {
                        return String.fromCharCode("0x" + n)
                    }))
                } (n);
                return function(t, n, e) {
                    return new Promise(function(r, i) {
                        var u = document.createElement("canvas"),
                        o = u.getContext("2d"),
                        a = new window.Image;
                        u.width = n,
                        u.height = e,
                        a.onload = function() {
                            o.drawImage(a, 0, 0),
                            r(u)
                        },
                        a.src = t
                    })
                } (u, e, r).then(function(n) {
                    return new t(u, n)
                })
            }
        },
        {
            key: "loadFromElement",
            value: function(n) {
                var e = n.getBoundingClientRect(),
                r = e.width,
                i = e.height,
                u = n.cloneNode(!0);
                return u.setAttributeNS(null, "version", "1.1"),
                u.setAttributeNS(null, "width", r),
                u.setAttributeNS(null, "height", i),
                u.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", "http://www.w3.org/2000/svg"),
                u.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"),
                t.load(u.outerHTML, r, i)
            }
        }]),
        r(t, [{
            key: "svgDataURL",
            value: function() {
                return function(t) {
                    return u.get(t).svgDataURL
                } (this)
            }
        },
        {
            key: "pngDataURL",
            value: function() {
                return o(this).toDataURL("image/png")
            }
        },
        {
            key: "jpegDataURL",
            value: function() {
                return o(this).toDataURL("image/jpeg")
            }
        }]),
        t
    } ();
    n.SVGConverter = a
}]);