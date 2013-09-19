(function () {
    var h, k = this, aa = function (a) {
        var b = typeof a;
        if ("object" == b)if (a) {
            if (a instanceof Array)return"array";
            if (a instanceof Object)return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)return"object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return"array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return"function"
        } else return"null";
        else if ("function" == b && "undefined" == typeof a.call)return"object";
        return b
    }, ba = function (a) {
        var b = aa(a);
        return"array" == b || "object" == b && "number" == typeof a.length
    }, l = function (a) {
        return"string" == typeof a
    }, ca = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, da = function (a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b,
                arguments)
        }
    }, m = function (a, b, c) {
        m = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ca : da;
        return m.apply(null, arguments)
    }, ea = function () {
        var a = ["google", "doodle", "jesr"], b = k;
        a[0]in b || !b.execScript || b.execScript("var " + a[0]);
        for (var c; a.length && (c = a.shift());)a.length ? b = b[c] ? b[c] : b[c] = {} : b[c] = !0
    }, fa = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.U = b.prototype;
        a.prototype = new c
    };
    Function.prototype.bind = Function.prototype.bind || function (a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return m.apply(null, c)
        }
        return m(this, a)
    };
    var n = function () {
    };
    n.prototype.w = !1;
    n.prototype.O = function () {
        this.w || (this.w = !0, this.k())
    };
    n.prototype.k = function () {
        if (this.A)for (; this.A.length;)this.A.shift()()
    };
    var ga = function (a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)d += c.shift() + e.shift();
        return d + c.join("%s")
    };
    var p = function (a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, p) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    };
    fa(p, Error);
    var ha = function (a, b) {
        b.unshift(a);
        p.call(this, ga.apply(null, b));
        b.shift()
    };
    fa(ha, p);
    var ia = function (a, b, c) {
        if (!a) {
            var d = Array.prototype.slice.call(arguments, 2), e = "Assertion failed";
            if (b)var e = e + (": " + b), f = d;
            throw new ha("" + e, f || []);
        }
    };
    var r = Array.prototype, ja = r.forEach ? function (a, b, c) {
        ia(null != a.length);
        r.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = l(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
    }, ka = function (a) {
        return r.concat.apply(r, arguments)
    }, la = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
            return c
        }
        return[]
    };
    var ma = "StopIteration"in k ? k.StopIteration : Error("StopIteration"), na = function () {
    };
    na.prototype.a = function () {
        throw ma;
    };
    na.prototype.k = function () {
        return this
    };
    var oa = function (a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = a[d];
        return b
    }, pa = function (a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = d;
        return b
    };
    var s = function (a, b) {
        this.d = {};
        this.a = [];
        this.i = this.g = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof s ? (c = a.F(), d = a.B()) : (c = pa(a), d = oa(a));
            for (var e = 0; e < c.length; e++)this.set(c[e], d[e])
        }
    };
    s.prototype.B = function () {
        t(this);
        for (var a = [], b = 0; b < this.a.length; b++)a.push(this.d[this.a[b]]);
        return a
    };
    s.prototype.F = function () {
        t(this);
        return this.a.concat()
    };
    var t = function (a) {
        if (a.g != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                u(a.d, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.g != a.a.length) {
            for (var e = {}, c = b = 0; b < a.a.length;)d = a.a[b], u(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    }, v = function (a, b) {
        return u(a.d, b) ? a.d[b] : void 0
    };
    s.prototype.set = function (a, b) {
        u(this.d, a) || (this.g++, this.a.push(a), this.i++);
        this.d[a] = b
    };
    s.prototype.K = function () {
        return new s(this)
    };
    s.prototype.k = function (a) {
        t(this);
        var b = 0, c = this.a, d = this.d, e = this.i, f = this, g = new na;
        g.a = function () {
            for (; ;) {
                if (e != f.i)throw Error("The map has changed since the iterator was created");
                if (b >= c.length)throw ma;
                var g = c[b++];
                return a ? g : d[g]
            }
        };
        return g
    };
    var u = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var qa = function (a) {
        if ("function" == typeof a.B)return a.B();
        if (l(a))return a.split("");
        if (ba(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]);
            return b
        }
        return oa(a)
    }, ra = function (a, b, c) {
        if ("function" == typeof a.forEach)a.forEach(b, c); else if (ba(a) || l(a))ja(a, b, c); else {
            var d;
            if ("function" == typeof a.F)d = a.F(); else if ("function" != typeof a.B)if (ba(a) || l(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++)d.push(f)
            } else d = pa(a); else d = void 0;
            for (var e = qa(a), f = e.length, g = 0; g < f; g++)b.call(c, e[g], d && d[g], a)
        }
    };
    var w, x, y, sa, ta = function () {
        return k.navigator ? k.navigator.userAgent : null
    };
    sa = y = x = w = !1;
    var z;
    if (z = ta()) {
        var ua = k.navigator;
        w = 0 == z.lastIndexOf("Opera", 0);
        x = !w && (-1 != z.indexOf("MSIE") || -1 != z.indexOf("Trident"));
        y = !w && -1 != z.indexOf("WebKit");
        sa = !w && !y && !x && "Gecko" == ua.product
    }
    var va = x, wa = sa, xa = y;
    var A;
    if (w && k.opera) {
        var ya = k.opera.version;
        "function" == typeof ya && ya()
    } else wa ? A = /rv\:([^\);]+)(\)|;)/ : va ? A = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : xa && (A = /WebKit\/(\S+)/), A && A.exec(ta());
    var za = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), Ba = function (a) {
        if (Aa) {
            Aa = !1;
            var b = k.location;
            if (b) {
                var c = b.href;
                if (c && (c = (c = Ba(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname)throw Aa = !0, Error();
            }
        }
        return a.match(za)
    }, Aa = xa;
    var B = function (a, b) {
        var c;
        if (a instanceof B)this.H = void 0 !== b ? b : a.H, Ca(this, a.I), this.R = a.R, this.M = a.M, Da(this, a.Q), this.L = a.L, Ea(this, a.G.K()), this.P = a.P; else if (a && (c = Ba(String(a)))) {
            this.H = !!b;
            Ca(this, c[1] || "", !0);
            this.R = c[2] ? decodeURIComponent(c[2] || "") : "";
            this.M = c[3] ? decodeURIComponent(c[3] || "") : "";
            Da(this, c[4]);
            var d = c[5] || "";
            this.L = d ? decodeURIComponent(d) : "";
            Ea(this, c[6] || "", !0);
            this.P = c[7] ? decodeURIComponent(c[7] || "") : ""
        } else this.H = !!b, this.G = new C(null, 0, this.H)
    };
    h = B.prototype;
    h.I = "";
    h.R = "";
    h.M = "";
    h.Q = null;
    h.L = "";
    h.P = "";
    h.H = !1;
    h.toString = function () {
        var a = [], b = this.I;
        b && a.push(D(b, Fa), ":");
        if (b = this.M) {
            a.push("//");
            var c = this.R;
            c && a.push(D(c, Fa), "@");
            a.push(encodeURIComponent(String(b)));
            b = this.Q;
            null != b && a.push(":", String(b))
        }
        if (b = this.L)this.M && "/" != b.charAt(0) && a.push("/"), a.push(D(b, "/" == b.charAt(0) ? Ga : Ha));
        (b = this.G.toString()) && a.push("?", b);
        (b = this.P) && a.push("#", D(b, Ia));
        return a.join("")
    };
    h.K = function () {
        return new B(this)
    };
    var Ca = function (a, b, c) {
            a.I = c ? b ? decodeURIComponent(b) : "" : b;
            a.I && (a.I = a.I.replace(/:$/, ""))
        }, Da = function (a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b)throw Error("Bad port number " + b);
                a.Q = b
            } else a.Q = null
        }, Ea = function (a, b, c) {
            b instanceof C ? (a.G = b, Ja(a.G, a.H)) : (c || (b = D(b, Ka)), a.G = new C(b, 0, a.H))
        }, D = function (a, b) {
            return l(a) ? encodeURI(a).replace(b, La) : null
        }, La = function (a) {
            a = a.charCodeAt(0);
            return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        }, Fa = /[#\/\?@]/g, Ha = /[\#\?:]/g, Ga = /[\#\?]/g, Ka = /[\#\?@]/g, Ia = /#/g,
        C = function (a, b, c) {
            this.d = a || null;
            this.i = !!c
        }, F = function (a) {
            if (!a.a && (a.a = new s, a.g = 0, a.d))for (var b = a.d.split("&"), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("="), e = null, f = null;
                0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
                e = decodeURIComponent(e.replace(/\+/g, " "));
                e = E(a, e);
                d = a;
                f = f ? decodeURIComponent(f.replace(/\+/g, " ")) : "";
                F(d);
                d.d = null;
                var e = E(d, e), g = v(d.a, e);
                g || d.a.set(e, g = []);
                g.push(f);
                d.g++
            }
        };
    C.prototype.a = null;
    C.prototype.g = null;
    var Ma = function (a, b) {
        F(a);
        b = E(a, b);
        if (u(a.a.d, b)) {
            a.d = null;
            a.g -= v(a.a, b).length;
            var c = a.a;
            u(c.d, b) && (delete c.d[b], c.g--, c.i++, c.a.length > 2 * c.g && t(c))
        }
    }, Na = function (a, b) {
        F(a);
        b = E(a, b);
        return u(a.a.d, b)
    };
    h = C.prototype;
    h.F = function () {
        F(this);
        for (var a = this.a.B(), b = this.a.F(), c = [], d = 0; d < b.length; d++)for (var e = a[d], f = 0; f < e.length; f++)c.push(b[d]);
        return c
    };
    h.B = function (a) {
        F(this);
        var b = [];
        if (l(a))Na(this, a) && (b = ka(b, v(this.a, E(this, a)))); else {
            a = this.a.B();
            for (var c = 0; c < a.length; c++)b = ka(b, a[c])
        }
        return b
    };
    h.set = function (a, b) {
        F(this);
        this.d = null;
        a = E(this, a);
        Na(this, a) && (this.g -= v(this.a, a).length);
        this.a.set(a, [b]);
        this.g++;
        return this
    };
    h.toString = function () {
        if (this.d)return this.d;
        if (!this.a)return"";
        for (var a = [], b = this.a.F(), c = 0; c < b.length; c++)for (var d = b[c], e = encodeURIComponent(String(d)), d = this.B(d), f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
            a.push(g)
        }
        return this.d = a.join("&")
    };
    h.K = function () {
        var a = new C;
        a.d = this.d;
        this.a && (a.a = this.a.K(), a.g = this.g);
        return a
    };
    var E = function (a, b) {
        var c = String(b);
        a.i && (c = c.toLowerCase());
        return c
    }, Ja = function (a, b) {
        b && !a.i && (F(a), a.d = null, ra(a.a, function (a, b) {
            var e = b.toLowerCase();
            b != e && (Ma(this, b), Ma(this, e), 0 < a.length && (this.d = null, this.a.set(E(this, e), la(a)), this.g += a.length))
        }, a));
        a.i = b
    };
    var G = navigator.userAgent, Oa = -1 != G.indexOf("Android") || -1 != G.indexOf("Mobile") || -1 != G.indexOf("Silk") || -1 != G.indexOf("iPad") || -1 != G.indexOf("iPhone") || -1 != G.indexOf("iPod"), Pa = 0 <= G.indexOf("MSIE"), Qa = function (a, b) {
            for (var c = 1; c < arguments.length; c += 2) {
                var d = arguments[c], e = arguments[c + 1], f = a.style;
                f && d in f ? f[d] = e : d in a ? a[d] = e : Pa && f && "opacity" == d && (a.zoom = 1, d = (f.filter || "").replace(/alpha\([^)]*\)/, ""), isNaN(parseFloat(e)) || (d += "alpha(opacity=" + 100 * e + ")"), f.filter = d)
            }
        }, Ra = function (a, b) {
            var c;
            if (c =
                a || window.event) {
                var d = c.targetTouches && c.targetTouches[0];
                c = d && void 0 !== d.pageX ? [d.pageX, d.pageY] : void 0 !== c.clientX ? [c.clientX + ("rtl" == document.dir ? -1 : 1) * (document.body.scrollLeft || document.documentElement.scrollLeft || 0), c.clientY + (document.body.scrollTop || document.documentElement.scrollTop || 0)] : void 0 !== c.pageX ? [c.pageX, c.pageY] : [0, 0]
            } else c = [0, 0];
            var d = b, e = 0, f = 0;
            if (d) {
                do e += d.offsetLeft, f += d.offsetTop; while (d = d.offsetParent)
            }
            d = [e, f];
            return[c[0] - d[0], c[1] - d[1]]
        }, Sa = ["", "moz", "ms", "o", "webkit"],
        Ta = function (a) {
            var b = document;
            if (!b)return null;
            for (var c = 0; c < Sa.length; c++) {
                var d = Sa[c], e = a;
                0 < d.length && (e = a.charAt(0).toUpperCase() + a.substr(1));
                d += e;
                if ("undefined" != typeof b[d])return d
            }
            return null
        }, Ua = function () {
            var a = google.doodle;
            if (a && a.url) {
                var b = a.url;
                if (google.nav && google.nav.go) {
                    a = b;
                    if (0 == b.indexOf("/search")) {
                        a = new B(window.location);
                        a.L = "/search";
                        for (var b = (b instanceof B ? b.K() : new B(b, void 0)).G, c = b.F(), d = 0; d < c.length; d++) {
                            var e = c[d], f = a, g = e, e = e ? b.B(e) : [];
                            f.G.set(g, 0 < e.length ? String(e[0]) :
                                void 0)
                        }
                        a = a.toString()
                    }
                    google.nav.go(a)
                } else window.parent ? window.parent.location.replace(b) : window.location.replace(b)
            }
        }, Va = function () {
            for (var a = ["requestAnimationFrame", "mozRequestAnimationFrame", "msRequestAnimationFrame", "oRequestAnimationFrame", "webkitRequestAnimationFrame"], b = 0; b < a.length; b++) {
                var c = window[a[b]];
                if (c)return function (a, b, d) {
                    return c(function (b) {
                        return a.call(d, b)
                    }, b)
                }
            }
            var d = 0, e = 33, f = 50;
            return function (a, b, c) {
                b && 0 > --f && (1.25 < b / e ? (d = 0, e = Math.min(66, ++e)) : 10 < ++d && (d = 0, e = Math.max(17,
                    --e)));
                window.setTimeout(function (b) {
                    a.call(c, b)
                }, e)
            }
        }, H = function (a, b, c) {
            H = Va();
            return H(a, b, c)
        };
    var I = function (a, b, c) {
        this.C = a;
        this.N = b;
        this.T = c;
        this.d = this.a = this.o = !1;
        this.s = (new Date).getTime();
        this.S = Ta("hidden");
        if ((this.i = (this.v = Ta("visibilityState")) ? this.v.replace(/state$/i, "change").toLowerCase() : null) && document.addEventListener) {
            var d = this;
            this.J = function () {
                var a = document[d.v];
                d.o = document[d.S] || "hidden" == a;
                d.o ? Wa(d) : Xa(d)
            };
            document.addEventListener(this.i, this.J, !1)
        }
        Ya(this)
    };
    fa(I, n);
    I.prototype.k = function () {
        window.clearTimeout(this.g);
        this.i && document.removeEventListener && document.removeEventListener(this.i, this.J, !1);
        I.U.k.call(this)
    };
    var Wa = function (a) {
        var b = a.o || a.a;
        a.d && !b ? (a.d = !1, a.T(), Ya(a)) : !a.d && b && (a.d = !0, a.N())
    }, Ya = function (a) {
        a.g && window.clearTimeout(a.g);
        var b = Math.max(100, a.C - ((new Date).getTime() - a.s));
        a.g = window.setTimeout(function () {
            a.g = null;
            a.a = (new Date).getTime() - a.s >= a.C;
            a.a || Ya(a);
            Wa(a)
        }, b)
    }, Xa = function (a) {
        a.s = (new Date).getTime();
        a.a = !1;
        Wa(a)
    };
    var Za = function (a, b) {
        google && google.doodle && (b && (google.doodle.cpDestroy = b), google.doodle.cpInit = function () {
            b && b();
            a()
        })
    }, $a = function (a, b, c) {
        if (google) {
            var d = function () {
                var a = google.msg && google.msg.unlisten;
                a && (a(67, d), c && a(94, c));
                b();
                return!0
            }, e = function () {
                var a = document.getElementById("hplogo");
                a && "hidden" != a.style.visibility && (a = google.msg && google.msg.listen, google.psy && google.psy.q && a && (a(67, d), c && a(94, c)))
            };
            e();
            google.doodle && google.doodle.jesr || (ea(), google.raas && google.raas("doodle", {init: function () {
                e();
                google.doodle.jesrd && (a(), google.doodle.jesrd = !1)
            }, dispose: function () {
                d();
                google.doodle.jesrd = !0
            }}))
        }
    };
    var J, K, L, M, N;
    var ab = Math.PI / 180, bb = 18 * ab, cb = Math.sqrt(9.8 * 3 / 201);
    var db = function (a, b) {
        for (var c = [], d = 0; 4 > d; d++)for (var e = c[d] = 0; 4 > e; e++)c[d] += a[d][e] * b[e];
        return c
    }, eb = function (a, b) {
        return[a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
    }, O = function (a, b) {
        return[a[0] - b[0], a[1] - b[1], a[2] - b[2]]
    }, fb = function (a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
        return[a[0] / b, a[1] / b, a[2] / b]
    }, gb = function (a, b, c) {
        return[(1 - c) * a[0] + c * b[0], (1 - c) * a[1] + c * b[1], (1 - c) * a[2] + c * b[2], 1]
    }, hb, P = [0, 5, -15], Q = [0, 1, 0], R = fb(O([0, 0, -2.5], P)), ib = fb(eb(R, Q)), Q = eb(ib, R);
    hb = [
        [ib[0], Q[0], -R[0], 0],
        [ib[1], Q[1], -R[1], 0],
        [ib[2], Q[2], -R[2], 0],
        [-P[0], -P[1], -P[2], 1]
    ];
    var jb = [
        [1.1 / 100, 0, 0, 0],
        [0, 1.1 / 80, 0, 0],
        [0, 0, -301.1 / 298.9, -660 / 298.9],
        [0, 0, -1, 0]
    ], S = function (a) {
        a = db(jb, db(hb, a));
        return[400 * (0.5 + a[0] / 2), 200 * (0.5 + a[1] / 2)]
    }, T = function (a, b, c) {
        return a < b ? b : a > c ? c : a
    }, kb = function (a) {
        a %= 2 * Math.PI;
        return 0 <= a ? a : a + 2 * Math.PI
    };
    var lb = function (a, b) {
        var c = document.createElement("div"), d = c.style;
        d["-webkit-user-select"] = "none";
        d["-moz-user-select"] = "none";
        d["user-select"] = "none";
        d.position = "absolute";
        d.background = va ? "rgba(255,255,255,.01)" : "none";
        d.width = a + "px";
        d.height = b + "px";
        d.position = "absolute";
        d.zIndex = 1;
        return c
    }, mb = function (a, b, c) {
        a.style.left = b + "px";
        a.style.top = c + "px"
    }, U = function (a, b) {
        return"rgba(" + a + "," + b + ")"
    };
    var ob = function () {
        this.d = 60 * (new Date).getTimezoneOffset();
        this.a = 86400 * Math.floor(nb(this) / 86400)
    }, nb = function (a) {
        return(new Date).getTime() / 1E3 - a.d
    };
    var pb = function (a) {
        this.value = a;
        this.a = 0.5
    };
    var qb = function (a, b) {
        this.value = a;
        this.d = b;
        this.a = 0.5
    };
    var rb = function (a, b) {
        this.g = a;
        this.i = b;
        this.d = !1
    };
    rb.prototype.init = function () {
        sb(this)
    };
    var sb = function (a) {
        var b = lb(38, 40);
        b.setAttribute("title", google.doodle.alt || "");
        b.style.cursor = "pointer";
        b.onclick = Ua;
        b.onmouseover = function () {
            a.d = !0
        };
        b.onmouseout = function () {
            a.d = !1
        };
        a.a = b;
        document.getElementById("hplogo").appendChild(a.a);
        mb(a.a, a.g - 30, a.i - 20)
    };
    var ub = function (a, b, c, d, e, f, g, q) {
        this.value = e;
        this.w = null;
        this.g = !1;
        this.d = 0;
        this.k = b;
        this.s = c;
        this.v = d;
        this.i = f;
        this.o = g;
        this.A = q;
        this.C = a;
        tb(this)
    };
    ub.prototype.init = function () {
    };
    var vb = function (a) {
        a.a && a.a.parentNode && a.a.parentNode.removeChild(a.a)
    }, tb = function (a) {
        var b = lb(20, 20);
        b.onmousedown = function () {
            0 < a.d && (a.g = !0);
            return!1
        };
        b.onmouseup = function () {
            return a.g = !1
        };
        b.onmouseover = function (b) {
            b.button && 0 < a.d && (a.g = !0);
            return!1
        };
        b.onmousemove = function (b) {
            wb(a, Ra(b, a.C)[1])
        };
        a.a = b;
        document.getElementById("hplogo").appendChild(a.a);
        mb(a.a, a.k - 10, xb(a) - 10)
    }, yb = function (a, b) {
        a.a.style.cursor = 0 < a.d ? "pointer" : "default";
        b.beginPath();
        b.arc(a.k, a.s, 2, 0, 2 * Math.PI, !1);
        b.lineWidth =
            2;
        b.strokeStyle = U("56,41,53", a.d);
        b.fillStyle = U("56,41,53", a.d);
        b.fill();
        b.stroke();
        b.beginPath();
        b.arc(a.k, a.v, 2, 0, 2 * Math.PI, !1);
        b.lineWidth = 2;
        b.strokeStyle = U("56,41,53", a.d);
        b.fillStyle = U("56,41,53", a.d);
        b.fill();
        b.stroke();
        b.beginPath();
        b.moveTo(a.k, a.s);
        b.lineWidth = 2;
        b.lineTo(a.k, a.v);
        b.strokeStyle = U("56,41,53", a.d);
        b.stroke();
        b.save();
        b.translate(-642.5 + a.k, -202 + xb(a));
        b.save();
        b.beginPath();
        b.moveTo(650, 202.5);
        b.bezierCurveTo(650, 206.6, 646.6, 210, 642.5, 210);
        b.bezierCurveTo(638.4, 210, 635, 206.6,
            635, 202.5);
        b.bezierCurveTo(635, 198.4, 638.4, 195, 642.5, 195);
        b.bezierCurveTo(646.6, 195, 650, 198.4, 650, 202.5);
        b.closePath();
        b.fillStyle = "rgb(148, 81, 68)";
        b.fill();
        b.beginPath();
        b.moveTo(650, 200.5);
        b.bezierCurveTo(650, 204.6, 646.6, 208, 642.5, 208);
        b.bezierCurveTo(638.4, 208, 635, 204.6, 635, 200.5);
        b.bezierCurveTo(635, 196.4, 638.4, 193, 642.5, 193);
        b.bezierCurveTo(646.6, 193, 650, 196.4, 650, 200.5);
        b.closePath();
        b.fillStyle = "rgb(210, 140, 65)";
        b.fill();
        b.beginPath();
        b.moveTo(650, 200.5);
        b.bezierCurveTo(650, 204.6, 646.6,
            208, 642.5, 208);
        b.bezierCurveTo(638.4, 208, 635, 204.6, 635, 200.5);
        b.bezierCurveTo(635, 196.4, 638.4, 193, 642.5, 193);
        b.bezierCurveTo(646.6, 193, 650, 196.4, 650, 200.5);
        b.closePath();
        b.lineWidth = 2;
        b.strokeStyle = "rgb(233, 173, 80)";
        b.stroke();
        b.restore();
        b.restore()
    }, xb = function (a) {
        return(1 - T((a.value - a.i) / (a.o - a.i), 0, 1)) * a.s + T((a.value - a.i) / (a.o - a.i), 0, 1) * a.v
    }, zb = function (a, b) {
        a.value = b;
        mb(a.a, a.k - 10, xb(a) - 10);
        a.g && a.w && a.w();
        a.A && (a.A.value = b)
    }, wb = function (a, b) {
        if (a.g) {
            var c = (b - a.s) / (a.v - a.s);
            0.01 > c && (c = 0);
            zb(a,
                T((1 - c) * a.i + c * a.o, Math.min(a.o, a.i), Math.max(a.o, a.i)))
        }
    };
    var V = function (a, b, c, d, e) {
        var f = T(nb(b) - b.a, 0, 86500);
        this.g = a;
        this.v = new pb(f);
        this.d = new ub(a, 439, 20, 150, f, 0, 86399, this.v);
        this.w = new qb(c, d);
        this.k = new ub(a, 478, 20, 150, c, 90, -90, this.w);
        this.C = new rb(530, 185);
        this.s = !1;
        this.i = this.o = -1;
        var g = this;
        this.d.w = function () {
            b.a = nb(b) - parseInt(g.d.value, 10)
        };
        this.N = function (a) {
            a = Ra(a, g.g);
            wb(g.d, a[1]);
            wb(g.k, a[1]);
            Xa(e)
        };
        this.A = m(V.prototype.S, this);
        this.J = m(V.prototype.O, this)
    }, Ab = function (a) {
        var b = document.getElementById("hplogo");
        a.a = lb(80, 40);
        a.a.style.cursor =
            "pointer";
        mb(a.a, 420, 165);
        a.a.onclick = function () {
            b && b.removeAttribute("title");
            a.s ? a.O() : (a.o = 5, a.i = -1)
        };
        a.a.onmouseover = function () {
            a.s || (a.w.a = 1, a.v.a = 1)
        };
        a.a.onmouseout = function () {
            a.s || (a.w.a = 0.5, a.v.a = 0.5)
        };
        a.a.onmouseup = a.A;
        b.appendChild(a.a)
    };
    V.prototype.init = function () {
        Ab(this);
        this.C.init();
        this.k.init();
        this.d.init();
        this.g.addEventListener("mousemove", this.N, !1);
        this.g.addEventListener("mouseout", this.A, !1);
        this.g.addEventListener("mouseup", this.A, !1);
        this.g.addEventListener("click", this.J, !1)
    };
    V.prototype.S = function () {
        this.d.g = !1;
        this.k.g = !1
    };
    V.prototype.O = function () {
        0 > this.i && (this.i = 10, this.o = -1);
        this.w.a = 0.5;
        this.v.a = 0.5
    };
    var Bb = {af: [34.4666666667, 0], al: [41.3, 0], dz: [36.7, 0], as: [-14.2666666667, 1], ad: [42.5166666667, 0], ao: [-8.83333333333, 0], ag: [17.3333333333, 1], ar: [-36.5, 1], am: [40.1666666667, 0], aw: [12.5333333333, 1], au: [-35.25, 0], at: [48.2, 0], az: [40.4833333333, 0], bs: [25.0833333333, 1], bh: [26.1666666667, 0], bd: [23.7166666667, 0], bb: [13.0833333333, 1], by: [53.8666666667, 0], be: [50.85, 0], bz: [17.3, 1], bj: [6.38333333333, 0], bt: [27.5166666667, 0], bo: [-16.3333333333, 1], ba: [43.8666666667, 0], bw: [-24.75, 0], br: [-15.7833333333, 1], vg: [18.45,
        1], bn: [4.86666666667, 0], bg: [42.75, 0], bf: [12.25, 1], bi: [-3.26666666667, 0], kh: [11.55, 0], cm: [3.83333333333, 0], ca: [45.45, 1], cv: [15.0333333333, 1], ky: [19.3333333333, 1], cf: [4.38333333333, 0], td: [12.1666666667, 0], cl: [-33.4, 1], cn: [39.9166666667, 0], co: [4.56666666667, 1], cg: [-4.15, 0], cr: [9.91666666667, 1], ci: [6.81666666667, 1], hr: [45.8333333333, 0], cu: [23.1333333333, 1], cy: [35.1666666667, 0], cz: [50.0833333333, 0], dk: [55.6833333333, 0], dj: [11.1333333333, 0], dm: [15.3333333333, 1], "do": [18.5, 1], tl: [-8.48333333333, 0], ec: [-0.25,
        1], eg: [30.0166666667, 0], sv: [13.6666666667, 1], gq: [3.75, 0], er: [15.3166666667, 0], ee: [59.3666666667, 0], et: [9.03333333333, 0], fk: [-51.6666666667, 1], fo: [62.0833333333, 1], fj: [-18.1, 0], fi: [60.25, 0], fr: [48.8333333333, 0], gf: [5.08333333333, 1], pf: [-17.5333333333, 1], ga: [0.416666666667, 0], gm: [13.4666666667, 1], ge: [41.7166666667, 0], de: [52.5, 0], gh: [5.58333333333, 1], gr: [37.9666666667, 0], gl: [64.1666666667, 1], gp: [16, 1], gt: [14.6666666667, 1], gg: [49.4333333333, 1], gn: [9.48333333333, 1], gw: [11.75, 1], gy: [6.83333333333, 1], ht: [18.6666666667,
        1], hm: [-53, 0], hn: [14.0833333333, 1], hu: [47.4833333333, 0], is: [64.1666666667, 1], "in": [28.6166666667, 0], id: [-6.15, 0], ir: [35.7333333333, 0], iq: [33.3333333333, 0], ie: [53.35, 1], il: [31.7833333333, 0], it: [41.9, 0], jm: [18, 1], jo: [31.95, 0], kz: [51.1666666667, 0], ke: [-1.28333333333, 0], ki: [1.5, 0], kw: [29.5, 0], kg: [42.9, 0], la: [17.9666666667, 0], lv: [56.8833333333, 0], lb: [33.8833333333, 0], ls: [-29.3, 0], lr: [6.3, 1], ly: [32.8166666667, 0], li: [47.1333333333, 0], lt: [54.6333333333, 0], lu: [49.6166666667, 0], mg: [-18.9166666667, 0], mw: [-14,
        0], my: [3.15, 0], mv: [4, 0], ml: [12.5666666667, 1], mt: [35.9, 0], mq: [14.6, 1], mr: [-20.1666666667, 0], yt: [-12.8, 0], mx: [19.3333333333, 1], md: [47.0333333333, 0], mz: [-25.9666666667, 0], mm: [16.75, 0], na: [-22.5833333333, 0], np: [27.75, 0], nl: [52.3833333333, 0], an: [12.0833333333, 1], nc: [-22.2833333333, 0], nz: [-41.3166666667, 0], ni: [12.1, 1], ne: [13.45, 0], ng: [9.08333333333, 0], nf: [-45.3333333333, 0], mp: [15.2, 0], no: [59.9166666667, 0], om: [23.6166666667, 0], pk: [33.6666666667, 0], pw: [7.33333333333, 0], pa: [9, 1], pg: [-9.4, 0], py: [-25.1666666667,
        1], pe: [-12, 1], ph: [14.6666666667, 0], pl: [52.2166666667, 0], pt: [38.7, 1], pr: [18.4666666667, 1], qa: [25.25, 0], rw: [-1.98333333333, 0], kp: [37.5166666667, 0], ro: [44.45, 0], ru: [55.75, 0], kn: [17.2833333333, 1], lc: [14.0333333333, 1], pm: [46.7666666667, 1], vc: [13.1666666667, 1], ws: [-13.8333333333, 1], sm: [43.9166666667, 0], st: [0.166666666667, 0], sa: [24.6833333333, 0], sn: [14.5666666667, 1], sl: [8.5, 1], sk: [48.1666666667, 0], si: [46.0666666667, 0], sb: [-9.45, 0], so: [2.03333333333, 0], za: [-25.7333333333, 0], es: [40.4166666667, 1], sd: [15.5166666667,
        0], sr: [5.83333333333, 1], sz: [-26.3, 0], se: [59.3333333333, 0], ch: [46.95, 0], sy: [33.5, 0], tj: [38.55, 0], th: [13.75, 0], mk: [42.0166666667, 0], tg: [6.15, 0], to: [-21.1666666667, 1], tn: [36.8333333333, 0], tr: [39.95, 0], tm: [38, 0], tv: [-8.51666666667, 0], ug: [0.333333333333, 0], ua: [50.5, 0], ae: [24.4666666667, 0], uk: [51.6, 1], tz: [-6.13333333333, 0], com: [40.5166666667, 1], uy: [-34.8333333333, 1], uz: [41.3333333333, 0], vu: [-17.75, 0], ve: [10.5, 1], vn: [21.0833333333, 0], yu: [44.8333333333, 0], zm: [-15.4666666667, 0], zw: [-17.7166666667, 0]};
    var Cb = function () {
        this.i = "/images/sprite-initial.png";
        this.d = !1;
        this.g = [];
        this.a = new Image
    }, Db = function (a) {
        if (!a.a.src) {
            var b = function () {
                if (!a.d) {
                    a.d = !0;
                    for (var b = 0, d; d = a.g[b]; b++)d()
                }
            };
            a.a.onload = b;
            // a.a.src = a.i;
            a.a.src = "images/sprite-initial.png";
            (a.a.complete || "complete" == a.a.readyState) && b()
        }
    }, Eb = function (a, b) {
        a.d ? b() : a.g.push(b)
    };
    var Fb = function (a, b) {
        b && Eb(a.a, b);
        Db(a.a)
    }, Gb = function (a, b, c, d, e) {
        if (a.d) {
            var f = a.g[b], g = f[2], q = f[3];
            c.drawImage(a.a.a, f[0], f[1], g, q, d - 0, e - 0, 1 * g, 1 * q)
        } else Fb(a, function () {
            Gb(a, b, c, d, e)
        })
    };
    var Hb = new function () {
        this.g = [
            [0, 0, 404, 101]
        ];
        this.a = new Cb;
        this.d = !1;
        var a = this;
        Eb(this.a, function () {
            a.d = !0
        })
    };
    var Ib = function (a) {
        this.k = a;
        this.o = Math.cos(a);
        this.s = Math.sin(a);
        this.g = [2 * Math.random() - 2, 2 * Math.random() - 2, 2 * Math.random() - 2, 0];
        this.a = this.D = [60.3 * this.o, 0, 87 + 60.3 * this.s, 1];
        this.d = [0, 0, 0, 1];
        this.v = !0;
        this.i = !1;
        this.w = 0
    }, Kb = function (a, b, c) {
        var d;
        d = W.k;
        var e;
        e = W;
        e = [e.a[0] + 45 * e.d[0], e.a[1] + 45 * e.d[1], e.a[2] + 45 * e.d[2], 1];
        86400 <= b && (b = 86400);
        a.v = 0 < c ? d > 2 * Math.PI - 0.001 || !Jb(a, c, d + 0.001) : 0.001 > d || !Jb(a, c, d - 0.001);
        Jb(a, c, d) ? !a.i && 9 > O(a.d, e)[0] * O(a.d, e)[0] + O(a.d, e)[1] * O(a.d, e)[1] + O(a.d, e)[2] * O(a.d, e)[2] &&
            (a.i = !0, a.w = b) : a.i = !1;
        c = [a.D[0] + 2 * a.o + a.g[0], a.D[1] + a.g[1], a.D[2] + 2 * a.s + a.g[2], 1];
        d = [a.a[0] + 8 * a.o + a.g[0], a.a[1] + a.g[1], a.a[2] + 8 * a.s + a.g[2], 1];
        e = [a.a[0], a.a[1] - 8, a.a[2], 1];
        a.v ? a.i ? (b = Math.max(0, Math.min(1, (b - a.w) / 0.1)), a.a = gb(a.D, c, b), a.d = gb(e, d, b)) : (a.a = a.D, a.d = e) : (a.a = c, a.d = d)
    }, Jb = function (a, b, c) {
        return 0 < b ? kb(a.k) % Math.PI > Math.PI + c : kb(c) > kb(a.k) % Math.PI
    }, Mb = function (a) {
        var b = K, c = S(a.a), d = S(a.d), e = a.v && !a.i, f = 1 + (a.a[2] - 87) / 400;
        e && Lb(b, [1 + c[0], c[1]], f, 3, "rgba(0,0,0,0.1)");
        if (wa)b.beginPath(), b.moveTo(c[0],
            c[1]), b.lineWidth = 4 * f, b.lineCap = "round", b.lineTo(d[0], d[1]), b.strokeStyle = "rgb(123, 63, 10)", b.stroke(), b.moveTo(c[0], c[1]), b.lineTo(d[0], d[1]), b.lineWidth = 4.4 * f, b.strokeStyle = "rgb(250, 212, 111)"; else {
            b.beginPath();
            b.moveTo(c[0], c[1]);
            b.lineWidth = 4 * f;
            b.lineCap = "round";
            b.lineTo(d[0], d[1]);
            var g = fb([d[0] - c[0], d[1] - c[1], 1]), q = 1;
            e || a.k >= Math.PI / 2 && a.k <= 3 * Math.PI / 2 || (q = -1);
            a = b.createLinearGradient(c[0], c[1], c[0] - 4 * q * g[1], c[1] + 4 * q * g[0]);
            a.addColorStop(0, "rgb(250, 212, 111)");
            a.addColorStop(1, "rgb(123, 63, 10)");
            b.strokeStyle = a
        }
        b.stroke();
        e && Lb(b, [d[0], d[1] - 1], f, 2, "rgb(248, 237, 156)") // top of pins color
    }, Lb = function (a, b, c, d, e) {
        a.save();
        a.translate(b[0], b[1]);
        a.scale(c, 0.4 * c);
        a.beginPath();
        a.arc(0, 0, d, 0, 2 * Math.PI, !1);
        a.fillStyle = e;
        a.fill();
        a.restore()
    };
    var W = new function () {
        this.i = [0, -246, 87, 1];
        this.g = this.k = 0;
        this.a = [0, 0, 0, 1];
        this.d = [0, 0, 0]
    }, X = new function () {
        this.o = 10;
        this.s = 90;
        this.i = 1;
        this.g = 0;
        this.a = 1;
        this.k = 0;
        this.d = !1
    }, Y = [], Z = [], $ = !0, Nb = !1, Ob = function () {
        for (var a = 0; 28 > a; a++)Y[a] = new Ib(2 * ((a + 28) / 56) * Math.PI);
        for (a = 0; 28 > a; a++)Z[a] = new Ib(2 * (a / 56) * Math.PI);
        a = function (a, c) {
            return a.D[2] - c.D[2]
        };
        Y.sort(a);
        Z.sort(a)
    }, Pb = function () {
        if ($)Nb = !1; else if (Nb = !0, K = J.getContext("2d")) {
            var a = T(nb(L) - L.a, 0, 86500), b = M.d;
            b.g || zb(b, a);
            var b = M.k.value, c = W;
            c.g =
                86400 > a ? bb * Math.cos(cb * a) : Math.exp(0.2 * -(a - 86400)) * bb * Math.cos(cb * a);
            c.k = -2 * Math.PI * Math.sin(b * ab) * a / 86400;
            c.d = [Math.cos(c.k) * Math.sin(c.g), Math.cos(c.g), Math.sin(c.k) * Math.sin(c.g)];
            c.a = [c.i[0] + 201 * c.d[0], c.i[1] + 201 * c.d[1], c.i[2] + 201 * c.d[2], 1];
            for (c = 0; c < Z.length; c++)Kb(Z[c], a, b);
            for (c = 0; c < Y.length; c++)Kb(Y[c], a, b);
            X.d = X.d || 0 < a;
            X.i = 0.5 + 0.25 * Math.abs(Math.sin(a));
            X.g = 5 * Math.sin(a) * ab;
            X.k = 1 + 1E3 * a;
            X.a = 2.5 > a ? 1 : T(1 - (a - 2.5) / 2.5, 0, 1);
            K.clearRect(0, 0, J.width, J.height);
            a = K;
            c = W;
            Gb(Hb, 0, a, 0, 95);
            b = S([c.a[0] +
                5 * c.d[0], 0, c.a[2], 1]);
            c = 2.5 - c.a[1] / 4;
            a.save();
            a.translate(b[0], b[1]);
            a.scale(1.25, 0.3);
            a.beginPath();
            a.arc(0, 0, c, 0, 2 * Math.PI, !1);
            a.fillStyle = "rgba(0,0,0,0.1)";
            a.fill();
            a.restore();
            for (c = 0; c < Y.length; c++)Mb(Y[c]);
            var d = W, a = K, c = S(d.i), b = S(d.a), d = 1 + (d.a[2] - 50) / 400;
            a.beginPath();
            a.moveTo(c[0], c[1]);
            a.lineWidth = 0.5;
            var e = a.createLinearGradient(0, 0, 0, a.canvas.height / 4);
            e.addColorStop(0, "#fff");
            e.addColorStop(1, "#666");
            a.strokeStyle = e;
            a.lineTo(b[0], b[1]);
            a.stroke();
            c = Math.atan2(c[0] - b[0], b[1] - c[1]);
            // Draw ball!:
            a.save();
            a.translate(b[0], b[1]);
            a.scale(d, d);
            a.rotate(c);
            a.beginPath();
            a.moveTo(1.5, 10);
            a.lineTo(-1.5, 10);
            a.lineTo(-1.5, 0);
            a.lineTo(1.5, 0);
            a.lineTo(1.5, 10);
            a.closePath();
            a.fillStyle = "rgb(216, 156, 54)";
            a.fill();
            a.beginPath();
            a.moveTo(2, 4);
            a.lineTo(-2, 4);
            a.lineTo(-2, 0);
            a.lineTo(2, 0);
            a.lineTo(2, 4);
            a.closePath();
            a.fillStyle = "rgb(72, 50, 59)";
            a.fill();
            a.beginPath();
            a.moveTo(0, 50);
            a.lineTo(-2.5, 46.2);
            a.lineTo(-1.2, 44.2);
            a.lineTo(-2.5, 42.3);
            a.lineTo(2.5, 42.3);
            a.lineTo(1.2, 44.2);
            a.lineTo(2.5, 46.2);
            a.lineTo(0, 50);
            a.closePath();
            a.fillStyle = "rgb(221, 169, 59)";
            a.fill();
            a.beginPath();
            a.moveTo(-2.5, 42.3);
            a.lineTo(-1.2, 44.2);
            a.lineTo(-2, 45.4);
            a.bezierCurveTo(-1.3, 45.5, -0.7, 45.5, 0, 45.5);
            a.bezierCurveTo(0.7, 45.5, 1.3, 45.5, 2, 45.4);
            a.lineTo(1.2, 44.2);
            a.lineTo(2.5, 42.3);
            a.lineTo(-2.5, 42.3);
            a.closePath();
            a.fillStyle = "rgb(188, 88, 50)";
            a.fill();
            a.beginPath();
            a.moveTo(17.5, 25);
            a.bezierCurveTo(17.5, 34.7, 9.7, 42.5, 0, 42.5);
            a.bezierCurveTo(-9.7, 42.5, -17.5, 34.7, -17.5, 25);
            a.bezierCurveTo(-17.5, 15.3, -9.7, 7.5, 0, 7.5);
            a.bezierCurveTo(9.7,
                7.5, 17.5, 15.3, 17.5, 25);
            a.closePath();
            a.fillStyle = "rgb(221, 169, 59)";
            a.fill();
            var img = document.getElementById("naked");
            a.drawImage(img, -62, -53, 100, 100);
            a.restore();
            a.save();
            a.translate(b[0], b[1]);
            a.rotate(c);
            a.scale(d, d);
            a.translate(0, 25.5);
            a.save();
            a.rotate(-c);
            a.translate(0, -25.5);
            a.beginPath();
            a.moveTo(0, 28.5);
            a.bezierCurveTo(-6.1, 28.5, -12, 27.6, -17.5, 25.6);
            a.bezierCurveTo(-17.1, 35, -9.4, 42.5, 0, 42.5);
            a.bezierCurveTo(9.4, 42.5, 17.1, 35, 17.5, 25.6);
            a.bezierCurveTo(12, 29, 6.1, 27.5, 0, 28.5);
            a.closePath();
            a.fillStyle = "rgb(216, 156, 54)";
            a.fill();
            a.beginPath();
            a.moveTo(0, 41.5);
            a.bezierCurveTo(-9.5,
                41.5, -17.2, 33.9, -17.5, 24.5);
            a.bezierCurveTo(-17.5, 24.7, -17.5, 24.8, -17.5, 25);
            a.bezierCurveTo(-17.5, 34.7, -9.7, 42.5, 0, 42.5);
            a.bezierCurveTo(9.7, 42.5, 17.5, 34.7, 17.5, 25);
            a.bezierCurveTo(17.5, 24.8, 17.5, 24.7, 17.5, 24.5);
            a.bezierCurveTo(17.2, 33.9, 9.5, 41.5, 0, 41.5);
            a.closePath();
            a.fillStyle = "rgb(204, 147, 51)";
            a.fill();
            a.restore();
            a.save();
            a.rotate(-0.5 * c);
            a.translate(0, -20.5);
            a.scale(0.5, 0.5);
            a.beginPath();
            a.moveTo(0, 7.5);
            a.bezierCurveTo(-4.5, 7.5, -8.5, 9.2, -11.6, 12);
            a.bezierCurveTo(-8.9, 15.3, -4.7, 17.5, 0, 17.5);
            a.bezierCurveTo(4.7, 17.5, 8.9, 15.3, 11.6, 12);
            a.bezierCurveTo(8.5, 9.2, 4.5, 7.5, 0, 7.5);
            a.closePath();
            a.fillStyle = "rgb(224, 180, 68)";
            a.fill();
            
            a.restore();
            a.restore();
            for (c = 0; c < Z.length; c++)Mb(Z[c]);
            a = K;
            0.01 > X.a || (a.save(), a.translate(X.o, X.s), a.beginPath(), a.lineWidth = 3, a.arc(-1, -1, 3, 3 * Math.PI / 2, 0, !0), a.fillStyle = U("250,212,111", X.a), a.strokeStyle = U("250,212,111", X.a), a.stroke(), a.beginPath(), a.scale(4, 1), a.fillStyle = U("250,212,111", X.a), a.arc(3.5, 1, 3, 2 * Math.PI, 0, !1), a.fill(), a.arc(3.5, 0, 3, 2 * Math.PI, 0,
                !1), a.fillStyle = U("250,212,111", X.a), a.fill(), a.scale(0.25, 1), a.beginPath(), a.lineWidth = 5, a.strokeStyle = U("240,240,220", X.a), a.moveTo(14, -1), a.lineTo(14, -20), a.stroke(), a.beginPath(), a.translate(14, -20), a.beginPath(), a.moveTo(0, 0), b = a.createLinearGradient(0, 0, X.k, 0), b.addColorStop(0, U("255,255,255", X.a)), b.addColorStop(0.4, U("255,255,255", X.a)), b.addColorStop(0.5, U("255,176,40", X.a)), b.addColorStop(0.6, U("0,0,0", X.a)), b.addColorStop(1, U("0,0,0", X.a)), a.lineCap = "round", a.lineWidth = 1, a.lineTo(42, 0),
                a.strokeStyle = b, a.stroke(), X.d && (a.rotate(X.g), a.scale(0.5, X.i), a.arc(0, 0, 3, 0, 2 * Math.PI, !1), a.fillStyle = U("255,176,40", X.a), a.fill()), a.restore());
            if (!Oa) {
                b = M;
                a = K;
                0 <= b.o ? (c = 0 * (1 - (1 - b.o / 5)) + 1 * (1 - b.o / 5), b.k.d = c, b.d.d = c, 0 == b.o && (b.s = !0, b.i = -1), b.o--) : 0 <= b.i && (c = 0 * (1 - b.i / 10) + 1 * (b.i / 10), b.k.d = c, b.d.d = c, 0 == b.i && (b.s = !1), b.i--);
                if (b.s || 0 <= b.o)yb(b.k, a), yb(b.d, a);
                c = b.v;
                a.save();
                // Draw clock:
                a.translate(-153.5, -112);
                0.5 < c.a ? (a.save(), a.save(), a.beginPath(), a.moveTo(605, 295.5), a.bezierCurveTo(605, 302.4, 599.4, 308, 592.5,
                    308), a.bezierCurveTo(585.6, 308, 580, 302.4, 580, 295.5), a.bezierCurveTo(580, 288.6, 585.6, 283, 592.5, 283), a.bezierCurveTo(599.4, 283, 605, 288.6, 605, 295.5), a.closePath(), a.fillStyle = "rgb(220, 188, 176)", a.fill(), a.beginPath(), a.moveTo(605, 295.5), a.bezierCurveTo(605, 302.4, 599.4, 308, 592.5, 308), a.bezierCurveTo(585.6, 308, 580, 302.4, 580, 295.5), a.bezierCurveTo(580, 288.6, 585.6, 283, 592.5, 283), a.bezierCurveTo(599.4, 283, 605, 288.6, 605, 295.5), a.closePath(), d = a.createLinearGradient(580, 295.5, 605, 295.5), d.addColorStop(0,
                    "rgb(247, 241, 238)"), d.addColorStop(1, "rgb(228, 204, 194)"), a.fillStyle = d) : (a.save(), a.save(), a.beginPath(), a.moveTo(605, 295.5), a.bezierCurveTo(605, 302.4, 599.4, 308, 592.5, 308), a.bezierCurveTo(585.6, 308, 580, 302.4, 580, 295.5), a.bezierCurveTo(580, 288.6, 585.6, 283, 592.5, 283), a.bezierCurveTo(599.4, 283, 605, 288.6, 605, 295.5), a.closePath(), a.fillStyle = "rgb(220, 188, 176)");
                a.fill();
                a.beginPath();
                a.moveTo(605, 297.5);
                a.bezierCurveTo(605, 304.4, 599.4, 310, 592.5, 310);
                a.bezierCurveTo(585.6, 310, 580, 304.4, 580, 297.5);
                a.bezierCurveTo(580, 290.6, 585.6, 285, 592.5, 285);
                a.bezierCurveTo(599.4, 285, 605, 290.6, 605, 297.5);
                a.closePath();
                a.lineWidth = 2;
                a.strokeStyle = "rgb(148, 81, 68)";
                a.stroke();
                a.beginPath();
                a.moveTo(605, 295.5);
                a.bezierCurveTo(605, 302.4, 599.4, 308, 592.5, 308);
                a.bezierCurveTo(585.6, 308, 580, 302.4, 580, 295.5);
                a.bezierCurveTo(580, 288.6, 585.6, 283, 592.5, 283);
                a.bezierCurveTo(599.4, 283, 605, 288.6, 605, 295.5);
                a.closePath();
                a.strokeStyle = "rgb(233, 173, 80)";
                a.stroke();
                a.restore();
                a.restore();
                a.restore();
                e = c.value / 86400;
                d =
                    4 * Math.PI * e - Math.PI / 2;
                e = 48 * Math.PI * e - Math.PI / 2;
                a.beginPath();
                a.save();
                a.lineCap = "square";
                a.translate(439, 185);
                a.moveTo(0, 0);
                a.lineTo(5 * Math.cos(d), 6 * Math.sin(d));
                a.moveTo(0, 0);
                a.lineTo(8 * Math.cos(e), 9 * Math.sin(e));
                a.lineWidth = 2;
                a.strokeStyle = U("32,32,32", c.a);
                a.stroke();
                a.restore();
                c = b.w;
                a.save();
                a.translate(-164.5, -111);
                // Draw earth:
                c.d ? (0.5 < c.a ? (a.save(), a.save(), a.beginPath(), a.moveTo(655, 295.5), a.bezierCurveTo(655, 302.4, 649.4, 308, 642.5, 308), a.bezierCurveTo(635.6, 308, 630, 302.4, 630, 295.5), a.bezierCurveTo(630,
                    288.6, 635.6, 283, 642.5, 283), a.bezierCurveTo(649.4, 283, 655, 288.6, 655, 295.5), a.closePath(), a.fillStyle = "rgb(55, 58, 148)", a.fill(), a.beginPath(), a.moveTo(655, 295.5), a.bezierCurveTo(655, 302.4, 649.4, 308, 642.5, 308), a.bezierCurveTo(635.6, 308, 630, 302.4, 630, 295.5), a.bezierCurveTo(630, 288.6, 635.6, 283, 642.5, 283), a.bezierCurveTo(649.4, 283, 655, 288.6, 655, 295.5), a.closePath(), d = a.createLinearGradient(630, 295.5, 655, 295.5), d.addColorStop(0, "rgb(75, 78, 159)"), d.addColorStop(1, "rgb(57, 60, 149)"), a.fillStyle = d) : (a.save(),
                    a.save(), a.beginPath(), a.moveTo(655, 295.5), a.bezierCurveTo(655, 302.4, 649.4, 308, 642.5, 308), a.bezierCurveTo(635.6, 308, 630, 302.4, 630, 295.5), a.bezierCurveTo(630, 288.6, 635.6, 283, 642.5, 283), a.bezierCurveTo(649.4, 283, 655, 288.6, 655, 295.5), a.closePath(), a.fillStyle = "rgb(55, 58, 148)"), a.fill(), a.save(), a.beginPath(), a.moveTo(655, 295.5), a.bezierCurveTo(655, 302.4, 649.4, 308, 642.5, 308), a.bezierCurveTo(635.6, 308, 630, 302.4, 630, 295.5), a.bezierCurveTo(630, 288.6, 635.6, 283, 642.5, 283), a.bezierCurveTo(649.4, 283, 655, 288.6,
                    655, 295.5), a.closePath(), a.clip(), a.save(), a.beginPath(), a.moveTo(639.6, 283.7), a.lineTo(635.5, 284.2), a.lineTo(635.5, 285.8), a.lineTo(637.6, 286.4), a.lineTo(638.6, 288.8), a.lineTo(638.9, 290.3), a.lineTo(640.8, 293.4), a.lineTo(643.8, 294.8), a.lineTo(643.2, 293.6), a.lineTo(641.7, 293.3), a.lineTo(642.3, 291.7), a.lineTo(644.2, 291.8), a.lineTo(644.9, 292.8), a.lineTo(645.3, 290.2), a.lineTo(646.6, 287.6), a.lineTo(645, 286.2), a.lineTo(643.4, 287.4), a.lineTo(642.4, 286.8), a.lineTo(642.1, 284.9), a.lineTo(639.6, 283.7), a.closePath(),
                    a.fillStyle = "rgb(111, 104, 40)", a.fill(), a.beginPath(), a.moveTo(644.5, 283.5), a.lineTo(644.2, 284.9), a.lineTo(647.2, 286.9), a.lineTo(647.2, 284.8), a.lineTo(644.5, 283.5), a.closePath(), a.fill(), a.beginPath(), a.moveTo(643.8, 294.8), a.lineTo(643.1, 296.9), a.lineTo(644.7, 298.5), a.lineTo(643.6, 303.7), a.lineTo(647.1, 300.4), a.lineTo(648.4, 300.1), a.lineTo(650.2, 296.4), a.lineTo(647.6, 295.6), a.lineTo(645.9, 294.2), a.lineTo(643.8, 294.8), a.closePath(), a.fill(), a.beginPath(), a.moveTo(639.3, 306.8), a.lineTo(642.4, 305.7),
                    a.lineTo(644.1, 305.5), a.lineTo(643.5, 306.3), a.lineTo(646.6, 308), a.lineTo(641.1, 309.4), a.lineTo(639.3, 306.8), a.closePath(), a.fill(), a.beginPath(), a.moveTo(632.9, 299), a.lineTo(632.9, 299.9), a.lineTo(634.1, 299.9), a.lineTo(632.9, 299)) : (0.5 < c.a ? (a.save(), a.save(), a.beginPath(), a.moveTo(655, 295.5), a.bezierCurveTo(655, 302.4, 649.4, 308, 642.5, 308), a.bezierCurveTo(635.6, 308, 630, 302.4, 630, 295.5), a.bezierCurveTo(630, 288.6, 635.6, 283, 642.5, 283), a.bezierCurveTo(649.4, 283, 655, 288.6, 655, 295.5), a.closePath(), a.fillStyle =
                    "rgb(55, 58, 148)", a.fill(), a.beginPath(), a.moveTo(655, 295.5), a.bezierCurveTo(655, 302.4, 649.4, 308, 642.5, 308), a.bezierCurveTo(635.6, 308, 630, 302.4, 630, 295.5), a.bezierCurveTo(630, 288.6, 635.6, 283, 642.5, 283), a.bezierCurveTo(649.4, 283, 655, 288.6, 655, 295.5), a.closePath(), d = a.createLinearGradient(630, 295.5, 655, 295.5), d.addColorStop(0, "rgb(75, 78, 159)"), d.addColorStop(1, "rgb(57, 60, 149)"), a.fillStyle = d) : (a.save(), a.save(), a.beginPath(), a.moveTo(655, 295.5), a.bezierCurveTo(655, 302.4, 649.4, 308, 642.5, 308), a.bezierCurveTo(635.6,
                    308, 630, 302.4, 630, 295.5), a.bezierCurveTo(630, 288.6, 635.6, 283, 642.5, 283), a.bezierCurveTo(649.4, 283, 655, 288.6, 655, 295.5), a.closePath(), a.fillStyle = "rgb(55, 58, 148)"), a.fill(), a.save(), a.beginPath(), a.moveTo(655, 295.5), a.bezierCurveTo(655, 302.4, 649.4, 308, 642.5, 308), a.bezierCurveTo(635.6, 308, 630, 302.4, 630, 295.5), a.bezierCurveTo(630, 288.6, 635.6, 283, 642.5, 283), a.bezierCurveTo(649.4, 283, 655, 288.6, 655, 295.5), a.closePath(), a.clip(), a.save(), a.beginPath(), a.moveTo(632.7, 293.2), a.lineTo(632.7, 295.5), a.lineTo(634.2,
                    298.2), a.lineTo(636.2, 297.2), a.lineTo(638.3, 302), a.lineTo(640.4, 301.1), a.lineTo(640.4, 295.5), a.lineTo(639.3, 295.8), a.lineTo(638, 293.1), a.lineTo(640, 294.9), a.lineTo(641.5, 294.5), a.lineTo(640.6, 293), a.lineTo(642.1, 294), a.lineTo(643.5, 293.2), a.lineTo(645.4, 296.8), a.lineTo(645.8, 295.1), a.lineTo(647.5, 293.5), a.lineTo(648.8, 295.5), a.lineTo(650.6, 294.4), a.lineTo(649.6, 291.6), a.lineTo(651.4, 290.1), a.lineTo(652.9, 285.7), a.lineTo(647.3, 283), a.lineTo(644.7, 284.6), a.lineTo(642.1, 285.1), a.lineTo(641, 284.2), a.lineTo(637.2,
                    284.8), a.lineTo(636.6, 287), a.lineTo(637.8, 287.4), a.lineTo(639.2, 286.1), a.lineTo(640.4, 287.2), a.lineTo(640.4, 288.4), a.lineTo(636.8, 288), a.lineTo(634.1, 289.1), a.lineTo(634.2, 290.1), a.lineTo(632.6, 290.5), a.lineTo(632.9, 292.5), a.lineTo(634.6, 291.9), a.lineTo(635.6, 290.6), a.lineTo(636.2, 291.6), a.lineTo(636.6, 291.5), a.lineTo(636, 290.1), a.lineTo(637.6, 290.8), a.lineTo(638.3, 290), a.lineTo(639, 290.4), a.lineTo(638, 291.1), a.lineTo(637.7, 292.5), a.lineTo(632.7, 293.2), a.closePath(), a.fillStyle = "rgb(111, 104, 40)",
                    a.fill(), a.beginPath(), a.moveTo(638.5, 308), a.lineTo(640.4, 305.9), a.lineTo(644.6, 305.9), a.lineTo(646.7, 308), a.lineTo(638.5, 308), a.closePath(), a.fill(), a.beginPath(), a.moveTo(650.1, 298.2), a.lineTo(647.4, 300.2), a.lineTo(647.5, 302), a.lineTo(649.1, 301.6), a.lineTo(651, 303.1), a.lineTo(652.9, 300.9), a.lineTo(650.1, 298.2), a.closePath(), a.fill(), a.beginPath(), a.moveTo(653.2, 286.7), a.lineTo(651.8, 290.7), a.lineTo(650.8, 291.7), a.lineTo(652.1, 291.1), a.lineTo(654.2, 288), a.lineTo(653.2, 286.7), a.closePath(), a.fill(),
                    a.beginPath(), a.moveTo(633.1, 287.8), a.lineTo(632.6, 289.4), a.lineTo(633.6, 288.6), a.lineTo(633.1, 287.8), a.closePath(), a.fill(), a.beginPath(), a.moveTo(642.2, 298.3), a.lineTo(641.4, 299.1), a.lineTo(641.4, 300.4), a.lineTo(642.2, 298.3), a.closePath(), a.fill(), a.beginPath(), a.moveTo(648.2, 296.4), a.lineTo(647.4, 297.1), a.lineTo(648.2, 297.6), a.lineTo(648.8, 297), a.lineTo(648.2, 296.4), a.closePath(), a.fill(), a.beginPath(), a.moveTo(646.7, 297.6), a.lineTo(646.7, 298.4), a.lineTo(647.4, 298.4), a.lineTo(646.7, 297.6), a.closePath(),
                    a.fill(), a.beginPath(), a.moveTo(651, 297), a.lineTo(651.6, 298), a.lineTo(652.9, 298), a.lineTo(651, 297));
                a.closePath();
                a.fill();
                a.restore();
                a.restore();
                a.restore();
                a.restore();
                a.restore();
                a.save();
                a.translate(478, 186);
                a.beginPath();
                a.arc(0, -2.2, 13, 0, 2 * Math.PI, !1);
                a.clip();
                a.beginPath();
                c = -10.5 * (1 - (c.value + 90) / 180) + 14.5 * ((c.value + 90) / 180);
                a.moveTo(-13, -c);
                a.lineTo(13, -c);
                a.lineWidth = 2;
                a.strokeStyle = "rgba(216,156,54,.9)";
                a.stroke();
                a.restore();
                b = b.C;
                a.save();
                a.translate(-705.5 + b.g, -297 + b.i);
                // Draw search:
                b.d ? (a.save(),
                    a.save(), a.beginPath(), a.moveTo(705, 296.5), a.bezierCurveTo(705, 300, 703.6, 303.1, 701.3, 305.3), a.bezierCurveTo(699.1, 307.6, 696, 309, 692.5, 309), a.bezierCurveTo(689, 309, 685.9, 307.6, 683.7, 305.3), a.bezierCurveTo(681.4, 303.1, 680, 300, 680, 296.5), a.bezierCurveTo(680, 293, 681.4, 289.9, 683.7, 287.7), a.bezierCurveTo(685.9, 285.4, 689, 284, 692.5, 284), a.bezierCurveTo(696, 284, 699.1, 285.4, 701.3, 287.7), a.bezierCurveTo(703.6, 289.9, 705, 293, 705, 296.5), a.closePath(), a.lineWidth = 2, a.strokeStyle = "rgb(112, 107, 111)", a.stroke(),
                    a.beginPath(), a.moveTo(705, 295.5), a.bezierCurveTo(705, 299, 703.6, 302.1, 701.3, 304.3), a.bezierCurveTo(699.1, 306.6, 696, 308, 692.5, 308), a.bezierCurveTo(689, 308, 685.9, 306.6, 683.7, 304.3), a.bezierCurveTo(681.4, 302.1, 680, 299, 680, 295.5), a.bezierCurveTo(680, 292, 681.4, 288.9, 683.7, 286.7), a.bezierCurveTo(685.9, 284.4, 689, 283, 692.5, 283), a.bezierCurveTo(696, 283, 699.1, 284.4, 701.3, 286.7), a.bezierCurveTo(703.6, 288.9, 705, 292, 705, 295.5), a.closePath(), a.fillStyle = "rgb(225, 213, 227)", a.fill(), a.beginPath(), a.moveTo(705,
                    295.5), a.bezierCurveTo(705, 302.4, 699.4, 308, 692.5, 308), a.bezierCurveTo(685.6, 308, 680, 302.4, 680, 295.5), a.bezierCurveTo(680, 288.6, 685.6, 283, 692.5, 283), a.bezierCurveTo(699.4, 283, 705, 288.6, 705, 295.5), a.closePath(), b = a.createLinearGradient(680, 295.5, 705, 295.5), b.addColorStop(0, "rgb(247, 241, 238)"), b.addColorStop(1, "rgb(228, 204, 194)"), a.fillStyle = b) : (a.save(), a.save(), a.beginPath(), a.moveTo(705, 296.5), a.bezierCurveTo(705, 300, 703.6, 303.1, 701.3, 305.3), a.bezierCurveTo(699.1, 307.6, 696, 309, 692.5, 309), a.bezierCurveTo(689,
                    309, 685.9, 307.6, 683.7, 305.3), a.bezierCurveTo(681.4, 303.1, 680, 300, 680, 296.5), a.bezierCurveTo(680, 293, 681.4, 289.9, 683.7, 287.7), a.bezierCurveTo(685.9, 285.4, 689, 284, 692.5, 284), a.bezierCurveTo(696, 284, 699.1, 285.4, 701.3, 287.7), a.bezierCurveTo(703.6, 289.9, 705, 293, 705, 296.5), a.closePath(), a.lineWidth = 2, a.strokeStyle = "rgb(112, 107, 111)", a.stroke(), a.beginPath(), a.moveTo(705, 295.5), a.bezierCurveTo(705, 299, 703.6, 302.1, 701.3, 304.3), a.bezierCurveTo(699.1, 306.6, 696, 308, 692.5, 308), a.bezierCurveTo(689, 308, 685.9,
                    306.6, 683.7, 304.3), a.bezierCurveTo(681.4, 302.1, 680, 299, 680, 295.5), a.bezierCurveTo(680, 292, 681.4, 288.9, 683.7, 286.7), a.bezierCurveTo(685.9, 284.4, 689, 283, 692.5, 283), a.bezierCurveTo(696, 283, 699.1, 284.4, 701.3, 286.7), a.bezierCurveTo(703.6, 288.9, 705, 292, 705, 295.5), a.closePath(), a.fillStyle = "rgb(225, 213, 227)");
                a.fill();
                a.save();
                a.beginPath();
                a.moveTo(699.2, 302.3);
                a.lineTo(693.1, 296.1);
                a.stroke();
                a.beginPath();
                a.moveTo(694.4, 293.1);
                a.bezierCurveTo(694.4, 295.5, 692.5, 297.4, 690.1, 297.4);
                a.bezierCurveTo(687.7,
                    297.4, 685.8, 295.5, 685.8, 293.1);
                a.bezierCurveTo(685.8, 290.6, 687.7, 288.7, 690.1, 288.7);
                a.bezierCurveTo(692.5, 288.7, 694.4, 290.6, 694.4, 293.1);
                a.closePath();
                a.stroke();
                a.restore();
                a.restore();
                a.restore();
                a.restore()
            }
            H(Pb)
        }
    };
    (function (a, b, c) {
        var d = function () {
            a();
            window.lol && window.lol()
        }, e = function () {
            $a(d, b, c);
            Za(d, b);
            d()
        };
        google = {};
        google && google.x ? google.x({id: "DOODLE"}, e) : e()
    })(function () {
        L = new ob;
        (J = document.getElementsByTagName("canvas")[0]) && J.getContext && Fb(Hb, function () {
            Nb = $ = !1;
            N = new I(18E4, function () {
                $ = !0
            }, function () {
                $ = !1;
                Nb || H(Pb)
            });
            var a = google.doodle, a = Bb[a ? a.tld : ""] || Bb.com;
            Ob();
            M = new V(J, L, a[0], !!a[1], N);
            Oa ? (J.onclick = Ua, J.ontouchmove = function () {
                Xa(N)
            }, Qa(J, "cursor", "pointer")) : M.init();
            Qa(J, "background", "#fff");
            H(Pb)
        })
    }, function () {
        $ = !0;
        N && N.O();
        if (M) {
            var a = M;
            a.a && a.a.parentNode && a.a.parentNode.removeChild(a.a);
            a.g.removeEventListener("mouseup", a.A, !1);
            a.g.removeEventListener("mouseout", a.A, !1);
            a.g.removeEventListener("mousemove", a.N, !1);
            a.g.removeEventListener("click", a.J, !1);
            var b = a.C;
            b.a && b.a.parentNode && b.a.parentNode.removeChild(b.a);
            vb(a.d);
            vb(a.k)
        }
    });
})();
