(function(g) {
    var window = this;
    'use strict';
    var ueb = function(a, b) {
            return b ? a.captionsInitialState : "CAPTIONS_INITIAL_STATE_UNKNOWN"
        },
        veb = function(a) {
            return g.TK(a) ? g.wJ(a.experiments, "web_player_caption_language_preference_stickiness_duration") : 0
        },
        web = function(a, b) {
            var c = new g.nL;
            c.languageCode = a.languageCode;
            c.languageName = a.languageName;
            c.name = a.name;
            c.kind = a.kind;
            c.isDefault = !1;
            c.j = a.j;
            c.isTranslateable = a.isTranslateable;
            c.vssId = a.vssId;
            c.url = a.url;
            c.translationLanguage = b;
            a.xtags && (c.xtags = a.xtags);
            a.captionId && (c.captionId = a.captionId);
            return c
        },
        xeb = function(a, b) {
            var c, d, e;
            return g.A(function(f) {
                if (1 == f.j) return c = a + "|" + b, g.y(f, g.lB(), 2);
                if (3 != f.j) {
                    d = f.u;
                    if (!d) throw g.JA("gct");
                    return g.y(f, g.eM(d), 3)
                }
                e = f.u;
                return f.return(e.get("captions", c))
            })
        },
        yeb = function(a, b, c) {
            xeb(a, b).then(function(d) {
                d && c(d.trackData, new g.nL(d.metadata))
            })
        },
        Beb = function(a) {
            if (!zeb.test(a)) throw Error("'" + a + "' is not a valid hex color");
            4 == a.length && (a = a.replace(Aeb, "#$1$1$2$2$3$3"));
            a = a.toLowerCase();
            a = parseInt(a.slice(1), 16);
            return [a >> 16, a >> 8 & 255, a & 255]
        },
        Ceb = function() {
            return g.Wz("yt-player-caption-display-settings")
        },
        f5 = function() {
            this.segments = []
        },
        Deb = function(a, b) {
            var c = g.Pb(a.segments, b);
            0 <= c || 0 > c && 1 === (-c - 1) % 2 || (c = -c - 1, 0 < c && 1 === b - a.segments[c - 1] && c < a.segments.length && 1 === a.segments[c] - b ? (g.yb(a.segments, c), g.yb(a.segments, c - 1)) : 0 < c && 1 === b - a.segments[c - 1] ? a.segments[c - 1] = b : c < a.segments.length && 1 === a.segments[c] - b ? a.segments[c] = b : (g.Hb(a.segments, c, 0, b), g.Hb(a.segments, c + 1, 0, b)))
        },
        Eeb = function(a, b, c, d, e, f) {
            g.E.call(this);
            this.policy = a;
            this.player = b;
            this.ea = c;
            this.onLoadCallback = d;
            this.D = e;
            this.T = f;
            this.C = new f5;
            this.I = -1;
            this.B = this.u = this.j = null;
            this.J = new g.Ip(this.qV, 1E3, this);
            this.events = new g.aI(this);
            g.J(this, this.J);
            g.J(this, this.events);
            this.events.S(b, "SEEK_COMPLETE", this.pz);
            this.pz();
            this.qV()
        },
        Feb = function(a) {
            return a.j && a.j.B ? a.j.B + a.player.Hd() < a.player.getCurrentTime() : !1
        },
        Geb = function(a, b) {
            var c = g.rH(b, a.policy, {}).df(),
                d = {
                    format: "RAW",
                    withCredentials: !0
                };
            if (a.policy.Fa) {
                d.method = "POST";
                var e = b.Fs(),
                    f = (0, g.KX)([120, 0]);
                e && g.PL(e, g.fLa);
                d.postBody = f
            }
            a.D && (d.responseType = "arraybuffer");
            a.B = g.Qy(c, d, 3, 100).then(function(h) {
                a: {
                    h = h.xhr;a.isDisposed();
                    if (a.u) {
                        var l = !(a.D ? h.response : h.responseText) || 400 <= h.status,
                            m = g.sua(h);
                        if (m) {
                            h = g.rH(a.u, a.policy, {});
                            a.u.Ck(h, m);
                            Geb(a, a.u);
                            break a
                        }
                        if (l) a.player.xa("capfail", {
                            status: h.status
                        });
                        else if (a.player.Oh().gi("fcb_r"), m = a.u.gb[0].Ma, null != a.onLoadCallback && a.I !== m) {
                            l = a.u.gb[0];
                            if (a.D) a.onLoadCallback(h.response,
                                1E3 * (l.startTime + a.player.Hd()));
                            else a.onLoadCallback(h.responseText, 1E3 * (l.startTime + a.player.Hd()));
                            a.I = m
                        }
                    }
                    a.u = null;a.B = null
                }
            }).Zj(function(h) {
                a.u = null;
                a.B = null;
                var l;
                a.player.xa("capfail", {
                    status: null == (l = h.xhr) ? void 0 : l.status
                })
            });
            a.u = b;
            Deb(a.C, a.u.gb[0].Ma)
        },
        g5 = function(a, b) {
            g.vT.call(this, b.V());
            this.u = a;
            this.F = b;
            this.B = null;
            this.D = !1;
            this.I = g.VK(this.F.V()) && !this.u.isManifestless
        },
        Ieb = function(a, b) {
            var c = [],
                d;
            for (d in a.u.j)
                if (a.u.j.hasOwnProperty(d)) {
                    var e = a.u.j[d];
                    if (g.gLa(e, b || null)) {
                        var f = e.info.id,
                            h = f,
                            l = "." + f,
                            m = "",
                            n = "",
                            p = "";
                        if (e = e.info.captionTrack) f = e.languageCode, h = e.displayName, l = e.vssId, m = e.kind, a.F.V().K("html5_expose_xtags_through_caption_track") && (n = e.xtags), p = e.id;
                        else {
                            e = f;
                            var q = g.vcb.get(e);
                            null == q && (q = Heb[e] || Heb[e.replace(/-/g, "_")], g.vcb.set(e, q));
                            h = q || h
                        }
                        c.push(new g.nL({
                            id: d,
                            languageCode: f,
                            languageName: h,
                            is_servable: !0,
                            is_default: !0,
                            is_translateable: !1,
                            vss_id: l,
                            kind: m,
                            xtags: n,
                            captionId: p
                        }))
                    }
                }
            return c
        },
        Jeb = function(a, b) {
            return null != b && b in a.u.j ? a.u.j[b] : null
        },
        Keb = function(a, b, c) {
            var d = [],
                e;
            for (e in a.u.j)
                if (a.u.j.hasOwnProperty(e)) {
                    var f = a.u.j[e];
                    if (g.gLa(f, c || null)) {
                        var h = f.info.captionTrack;
                        h && h.languageCode === b && d.push(f)
                    }
                }
            return d.length ? d[0] : null
        },
        Meb = function() {
            var a = void 0;
            a = void 0 === a ? {} : a;
            var b = "suggest_correction" in Leb ? Leb.suggest_correction : "Edit caption";
            b = b || "";
            var c = {},
                d;
            for (d in a) {
                c.vA = d;
                var e = function(f) {
                    return function() {
                        return String(a[f.vA])
                    }
                }(c);
                b = b.replace(new RegExp("\\$\\{" + c.vA + "\\}", "gi"), e);
                b = b.replace(new RegExp("\\$" + c.vA, "gi"), e);
                c = {
                    vA: c.vA
                }
            }
            return b
        },
        h5 = function(a, b, c, d, e, f, h, l, m, n) {
            var p = {};
            Object.assign(p, b);
            Object.assign(p, a.params);
            Object.assign(p, c);
            var q = {};
            Object.assign(q, b.Ie);
            a.params.Ie && Object.assign(q, a.params.Ie);
            Object.assign(q, c.Ie);
            p.Ie = q;
            var t = 1 === p.di,
                v = [{
                    G: "span",
                    N: "captions-text",
                    X: {
                        style: "word-wrap: normal; display: block;"
                    }
                }],
                z, B, G;
            (l = l.ob("caption_edit_on_hover") && (null == (z = n.getVideoData().getPlayerResponse()) ? void 0 : null == (B = z.captions) ? void 0 : null == (G = B.playerCaptionsTracklistRenderer) ? void 0 : G.openTranscriptCommand)) && v.unshift({
                G: "button",
                N: "caption-edit",
                X: {
                    tabindex: "0",
                    "aria-label": Meb()
                },
                W: [{
                    G: "svg",
                    X: {
                        fill: "#e3e3e3",
                        height: "100%",
                        viewBox: "5 5 38 38",
                        width: "100%"
                    },
                    W: [{
                        G: "path",
                        X: {
                            d: "M9 39h2.2l24.25-24.25-1.1-1.1-1.1-1.1L9 36.8Zm-3 3v-6.4L35.4 6.2q.85-.85 2.12-.82 1.27.02 2.12.87L41.8 8.4q.85.85.85 2.1t-.85 2.1L12.4 42Zm33.5-31.55L37.45 8.4Zm-4.05 4.3-1.1-1.1-1.1-1.1 2.2 2.2Z"
                        }
                    }]
                }]
            });
            g.V.call(this, {
                G: "div",
                N: "caption-window",
                X: {
                    id: "caption-window-" + a.id,
                    dir: t ? "rtl" : "ltr",
                    tabindex: "0",
                    lang: p.lang
                },
                W: v
            });
            var O = this;
            this.I = [];
            this.Fa = !1;
            this.u = a;
            this.La =
                this.Ja = null;
            this.playerWidth = f;
            this.playerHeight = h;
            this.J = null;
            this.maxWidth = .96 * f;
            this.maxHeight = .96 * h;
            this.j = p;
            this.kd = c;
            this.ya = b;
            this.C = this.Da("captions-text");
            this.pc = "" !== this.C.style.getPropertyValue("box-decoration-break") || "" !== this.C.style.getPropertyValue("-webkit-box-decoration-break");
            this.Oa = Neb(d, e, f, h);
            this.Ic = m;
            l && (this.D = this.Da("caption-edit"), this.S(this.D, "click", function() {
                O.Ic()
            }));
            this.type = 0;
            this.Ya = this.Oa * Oeb(q);
            a = new g.VS(this.element, !0);
            g.J(this, a);
            a.subscribe("dragstart", this.XZ, this);
            a.subscribe("dragmove", this.WZ, this);
            a.subscribe("dragend", this.VZ, this);
            this.kb = this.ib = this.yb = this.tb = 0;
            a = "";
            this.j.windowOpacity && (a = Beb(this.j.windowColor), a = "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + this.j.windowOpacity + ")");
            b = {
                "background-color": a,
                display: !1 === this.j.isVisible ? "none" : "",
                "text-align": Peb[this.j.textAlign]
            };
            this.pc && (b["border-radius"] = a ? this.Ya / 8 + "px" : "");
            (this.B = 2 === this.u.params.di ||
                3 === this.u.params.di) && Qeb(this, this.element);
            g.Rm(this.element, b);
            switch (this.j.Bl) {
                case 0:
                case 1:
                case 2:
                    g.Qp(this.element, "ytp-caption-window-top");
                    break;
                case 6:
                case 7:
                case 8:
                    g.Qp(this.element, "ytp-caption-window-bottom")
            }
        },
        Qeb = function(a, b) {
            var c = "vertical-rl";
            1 === a.j.CP && (c = "vertical-lr");
            g.Ve && (c = "vertical-lr" === c ? "tb-lr" : "tb-rl");
            g.Rm(b, "-o-writing-mode", c);
            g.Rm(b, "-webkit-writing-mode", c);
            g.Rm(b, "writing-mode", c);
            g.Rm(b, "text-orientation", "upright");
            g.Qp(b, "ytp-vertical-caption");
            3 === a.u.params.di && (g.Rm(b, "text-orientation", ""), g.Rm(b, "transform", "rotate(180deg)"))
        },
        Oeb = function(a) {
            var b = 1 + .25 * (a.fontSizeIncrement || 0);
            if (0 === a.offset || 2 === a.offset) b *= .8;
            return b
        },
        Reb = function(a, b) {
            var c = {},
                d = b.background ? b.background : a.j.Ie.background;
            if (null != b.backgroundOpacity || b.background) {
                var e = null != b.backgroundOpacity ? b.backgroundOpacity : a.j.Ie.backgroundOpacity;
                d = Beb(d);
                c.background = "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + e + ")";
                a.pc && (c["box-decoration-break"] = "clone", c["border-radius"] = a.Ya / 8 + "px")
            }
            if (null != b.fontSizeIncrement || null != b.offset) c["font-size"] = a.Oa * Oeb(b) + "px";
            d = 1;
            e = b.color || a.j.Ie.color;
            if (b.color || null != b.textOpacity) e = Beb(e), d = null == b.textOpacity ? a.j.Ie.textOpacity : b.textOpacity, e = "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + d + ")",
                c.color = e, c.fill = e;
            var f = b.charEdgeStyle;
            0 === f && (f = void 0);
            if (f) {
                e = "rgba(34, 34, 34, " + d + ")";
                var h = "rgba(204, 204, 204, " + d + ")";
                b.FK && (h = e = b.FK);
                var l = a.Oa / 16 / 2,
                    m = Math.max(l, 1),
                    n = Math.max(2 * l, 1),
                    p = Math.max(3 * l, 1),
                    q = Math.max(5 * l, 1);
                d = [];
                switch (f) {
                    case 4:
                        for (; p <= q; p += l) d.push(n + "px " + n + "px " + p + "px " + e);
                        break;
                    case 1:
                        n = 2 <= window.devicePixelRatio ? .5 : 1;
                        for (f = m; f <= p; f += n) d.push(f + "px " + f + "px " + e);
                        break;
                    case 2:
                        d.push(m + "px " + m + "px " + h);
                        d.push("-" + m + "px -" + m + "px " + e);
                        break;
                    case 3:
                        for (p = 0; 5 > p; p++) d.push("0 0 " +
                            n + "px " + e)
                }
                c["text-shadow"] = d.join(", ")
            }
            e = "";
            switch (b.fontFamily) {
                case 1:
                    e = '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';
                    break;
                case 2:
                    e = '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif';
                    break;
                case 3:
                    e = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';
                    break;
                case 5:
                    e = '"Comic Sans MS", Impact, Handlee, fantasy';
                    break;
                case 6:
                    e = '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';
                    break;
                case 7:
                    e = g.dz() ?
                        '"Carrois Gothic SC", sans-serif-smallcaps' : '"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif';
                    break;
                case 0:
                case 4:
                    e = '"YouTube Noto", Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif'
            }
            e && (c["font-family"] = e);
            e = b.offset;
            null == e && (e = a.j.Ie.offset);
            switch (e) {
                case 0:
                    c["vertical-align"] = "sub";
                    break;
                case 2:
                    c["vertical-align"] = "super"
            }
            7 === b.fontFamily && (c["font-variant"] = "small-caps");
            b.bold && (c["font-weight"] = "bold");
            b.italic && (c["font-style"] =
                "italic");
            b.underline && (c["text-decoration"] = "underline");
            b.A4 && (c.visibility = "hidden");
            1 === b.HU && a.B && (c["text-combine-upright"] = "all", c["text-orientation"] = "mixed", e = g.XK || g.HA, 3 === a.u.params.di ? c.transform = e ? "rotate(90deg)" : "rotate(180deg)" : e && (c.transform = "rotate(-90deg)"));
            if (1 === b.En || 2 === b.En || 3 === b.En || 4 === b.En || 5 === b.En)
                if (g.XK) c["font-weight"] = "bold";
                else switch (c["text-emphasis-style"] = "filled circle", c["text-emphasis-color"] = "currentcolor", c["webkit-text-emphasis"] = "filled circle", b.En) {
                    case 4:
                    case 3:
                        c["text-emphasis-position"] =
                            "under left";
                        c["webkit-text-emphasis-position"] = "under left";
                        break;
                    case 5:
                    case 2:
                        c["text-emphasis-position"] = "over right", c["webkit-text-emphasis-position"] = "over right"
                }
            return c
        },
        Seb = function(a) {
            a.J = g.Ze("SPAN");
            g.Rm(a.J, {
                display: "block"
            });
            g.Qp(a.J, "caption-visual-line");
            a.C.appendChild(a.J)
        },
        Teb = function(a, b) {
            var c = g.Ze("SPAN");
            g.Rm(c, {
                display: "inline-block",
                "white-space": "pre-wrap"
            });
            g.Rm(c, Reb(a, b));
            c.classList.add("ytp-caption-segment");
            a.J.appendChild(c);
            c.previousElementSibling && (g.Rm(c.previousElementSibling, {
                "border-top-right-radius": "0",
                "border-bottom-right-radius": "0"
            }), g.Rm(c, {
                "border-top-left-radius": "0",
                "border-bottom-left-radius": "0"
            }));
            return c
        },
        Ueb = function(a, b, c) {
            a.Fa = a.Fa || !!c;
            var d = {};
            Object.assign(d, a.j.Ie);
            Object.assign(d, c || b.j);
            Object.assign(d, a.kd.Ie);
            (c = !a.J) && Seb(a);
            for (var e = a.Ja && a.La && g.id(d, a.La) ? a.Ja : Teb(a, d), f = "string" === typeof b.text, h = f ? b.text.split("\n") : [b.text], l = 0; l < h.length; l++) {
                var m = 0 < l || !b.append,
                    n = h[l];
                m && !c ? (Seb(a), e = Teb(a, d)) : m && c && (c = !1);
                n && (e.appendChild(f ? g.ef(n) : n), f || "RUBY" !== n.tagName || 4 !== n.childElementCount || g.XK || !g.Tm(n.children[2], "text-emphasis") || (m = a.B ? "padding-right" : "padding-top", g.Tm(n.children[2], "text-emphasis-position") && (m =
                    a.B ? "padding-left" : "padding-bottom"), g.Nc ? g.Rm(e, m, "1em") : g.Rm(e, m, "0.5em")))
            }
            a.La = d;
            a.Ja = e;
            a.I.push(b)
        },
        Neb = function(a, b, c, d) {
            var e = b / 360 * 16;
            b >= a && (a = 640, d > 1.3 * c && (a = 480), e = c / a * 16);
            return e
        },
        i5 = function(a, b, c, d) {
            g.vT.call(this, a);
            this.videoData = b;
            this.audioTrack = c;
            this.Ua = d;
            this.C = b.CK
        },
        j5 = function(a, b, c, d, e, f, h, l, m, n) {
            h5.call(this, a, b, c, d, e, f, h, l, m, n);
            this.type = 1
        },
        k5 = function(a, b, c, d, e, f, h, l, m, n) {
            h5.call(this, a, b, c, d, e, f, h, l, m, n);
            var p = this;
            this.type = 2;
            this.T = [];
            this.oa = this.Z = this.Wa = 0;
            this.Aa = NaN;
            this.Pb = 0;
            this.Bc = null;
            this.Za = new g.Ip(this.w7, 433, this);
            this.D && (n.sb(this.D, this, 167342), this.S(this.D, "click", function() {
                n.qb(p.D)
            }), a = new g.VS(this.element, !0), g.J(this, a), a.subscribe("hoverstart", function() {
                n.Va(p.D, !0)
            }, this));
            g.Qp(this.element, "ytp-caption-window-rollup");
            g.J(this, this.Za);
            g.Rm(this.element, "overflow", "hidden")
        },
        Veb = function(a, b) {
            if (!b) return "";
            a.B && 1 !== a.u.params.CP && (b *= -1);
            return "translate" + (a.B ? "X" : "Y") + "(" + b + "px)"
        },
        Web = function(a) {
            a.T = Array.from(document.getElementsByClassName("caption-visual-line"));
            for (var b = a.u.params.Oq, c = 0, d = 0, e = a.T.length - 1; c < b && -1 < e;) {
                var f = a.T[e];
                d += a.B ? f.offsetWidth : f.offsetHeight;
                c++;
                e--
            }
            a.T.length < b && (d *= b / a.T.length);
            a.Z = d;
            b = Math;
            c = b.max;
            isNaN(a.Aa) && ((d = a.j.Mr) ? (e = g.Ze("SPAN"), g.mf(e, "\u2013".repeat(d)), g.Rm(e, Reb(a, a.j.Ie)), a.C.appendChild(e), a.Aa = e.offsetWidth, a.C.removeChild(e)) : a.Aa = 0);
            d = a.C;
            a.oa = c.call(b, a.Aa, a.Pb, (a.B ? d.offsetHeight : d.offsetWidth) + 1)
        },
        Xeb = function(a, b) {
            Web(a);
            var c = a.T.reduce(function(e, f) {
                return (a.B ? f.offsetWidth : f.offsetHeight) + e
            }, 0);
            c = a.Z - c;
            if (c !== a.Wa) {
                var d = 0 < c && 0 === a.Wa;
                b || isNaN(c) || d || (g.Qp(a.element, "ytp-rollup-mode"), g.Jp(a.Za));
                g.Rm(a.C, "transform", Veb(a, c));
                a.Wa = c
            }
            Web(a)
        },
        l5 = function(a, b, c, d, e, f, h) {
            f = void 0 === f ? !1 : f;
            h = void 0 === h ? null : h;
            g.gE.call(this, a, a + b, {
                priority: c,
                namespace: "captions"
            });
            this.windowId = d;
            this.text = e;
            this.append = f;
            this.j = h
        },
        m5 = function(a, b, c, d, e) {
            g.gE.call(this, a, a + b, {
                priority: c,
                namespace: "captions"
            });
            this.id = d;
            this.params = e;
            this.j = []
        },
        Yeb = function(a) {
            var b = "_" + n5++;
            return new m5(0, 0x8000000000000, 0, b, a)
        },
        $eb = function(a, b, c, d, e, f, h) {
            var l = f[0],
                m = h[l.getAttribute("p")];
            if (1 === m.Rf) {
                var n = f[1],
                    p = f[2];
                f = f[3];
                l.getAttribute("t");
                n.getAttribute("t");
                p.getAttribute("t");
                f.getAttribute("t");
                l.getAttribute("p");
                n.getAttribute("p");
                f.getAttribute("p");
                h = h[p.getAttribute("p")];
                l = Zeb(l.textContent, n.textContent, p.textContent, f.textContent, h);
                return new l5(a, b, e, c, l, d, m)
            }
            switch (m.Rf) {
                case 9:
                case 10:
                    m.En = 1;
                    break;
                case 11:
                    m.En = 2;
                    break;
                case 12:
                    m.En = 3;
                    break;
                case 13:
                    m.En = 4;
                    break;
                case 14:
                    m.En = 5
            }
            return new l5(a, b, e, c, l.textContent || "", d, m)
        },
        Zeb = function(a, b, c, d, e) {
            var f = g.dz(),
                h =
                f ? g.Ze("DIV") : g.Ze("RUBY"),
                l = g.Ze("SPAN");
            l.textContent = a;
            h.appendChild(l);
            a = f ? g.Ze("DIV") : g.Ze("RP");
            a.textContent = b;
            h.appendChild(a);
            b = f ? g.Ze("DIV") : g.Ze("RT");
            b.textContent = c;
            h.appendChild(b);
            c = e.Rf;
            if (10 === c || 11 === c || 12 === c || 13 === c || 14 === c)
                if (g.Rm(b, "text-emphasis-style", "filled circle"), g.Rm(b, "text-emphasis-color", "currentcolor"), g.Rm(b, "webkit-text-emphasis", "filled circle"), 11 === e.Rf || 13 === e.Rf) g.Rm(b, "webkit-text-emphasis-position", "under left"), g.Rm(b, "text-emphasis-position", "under left");
            c = !0;
            if (4 === e.Rf || 7 === e.Rf || 12 === e.Rf ||
                14 === e.Rf) g.Rm(h, "ruby-position", "over"), g.Rm(h, "-webkit-ruby-position", "before");
            else if (5 === e.Rf || 6 === e.Rf || 11 === e.Rf || 13 === e.Rf) g.Rm(h, "ruby-position", "under"), g.Rm(h, "-webkit-ruby-position", "after"), c = !1;
            e = f ? g.Ze("DIV") : g.Ze("RP");
            e.textContent = d;
            h.appendChild(e);
            f && (d = c, g.Rm(h, {
                display: "inline-block",
                position: "relative"
            }), f = h.firstElementChild.nextElementSibling, g.Rm(f, "display", "none"), f = f.nextElementSibling, g.Rm(f, {
                "font-size": "0.5em",
                "line-height": "1.2em",
                "text-align": "center",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "400%"
            }), g.Rm(h.lastElementChild, "display", "none"), d ? (g.Rm(h, "padding-top", "0.6em"), g.Rm(f, "top", "0")) : (g.Rm(h, "padding-bottom", "0.6em"), g.Rm(f, "bottom", "0")));
            return h
        },
        o5 = function() {
            g.E.apply(this, arguments)
        },
        p5 = function(a) {
            o5.call(this);
            this.C = a;
            this.pens = {};
            this.T = {};
            this.ea = {};
            this.D = "_" + n5++;
            this.J = {};
            this.B = this.j = null;
            this.I = !0
        },
        q5 = function(a, b) {
            a = a.getAttribute(b);
            if (null != a) return Number(a)
        },
        r5 = function(a, b) {
            a = a.getAttribute(b);
            if (null != a) return "1" === a
        },
        s5 = function(a, b) {
            a = q5(a, b);
            return void 0 !== a ? a : null
        },
        u5 = function(a, b) {
            a = a.getAttribute(b);
            if (null != a) return t5.test(a), a
        },
        afb = function(a, b) {
            var c = {},
                d = b.getAttribute("ws");
            Object.assign(c, d ? a.ea[d] : a.C);
            a = s5(b, "mh");
            null != a && (c.gz = a);
            a = s5(b, "ju");
            null != a && (c.textAlign = a);
            a = s5(b, "pd");
            null != a && (c.di = a);
            a = s5(b, "sd");
            null != a && (c.CP = a);
            a = u5(b, "wfc");
            null != a && (c.windowColor = a);
            b = q5(b, "wfo");
            void 0 !== b && (c.windowOpacity = b / 255);
            return c
        },
        bfb = function(a, b) {
            var c = {},
                d = b.getAttribute("wp");
            d && Object.assign(c, a.T[d]);
            a = s5(b, "ap");
            null != a && (c.Bl = a);
            a = q5(b, "cc");
            null != a && (c.Mr = a);
            a = q5(b, "ah");
            null != a && (c.Lj = a);
            a = q5(b, "rc");
            null != a && (c.Oq = a);
            b = q5(b, "av");
            null != b && (c.Fn = b);
            return c
        },
        cfb = function(a, b, c, d) {
            var e = {};
            Object.assign(e, bfb(a, b));
            Object.assign(e, afb(a, b));
            d ? g.id(e, a.C) ? (d = a.D, e = a.C) : d = "_" + n5++ : d = b.getAttribute("id") || "_" + n5++;
            a = q5(b, "t") + c;
            b = q5(b, "d") || 0x8000000000000;
            if (2 === e.di || 3 === e.di) c = e.Oq, e.Oq = e.Mr, e.Mr = c;
            return new m5(a, b, 0, d, e)
        },
        v5 = function(a) {
            o5.call(this);
            this.I = a;
            this.j = new Map;
            this.C = new Map;
            this.D = new Map;
            this.B = new Map
        },
        w5 = function(a) {
            a = g.pe(Math.round(a), 0, 16777215).toString(16).toUpperCase();
            return "#000000".substr(0, 7 - a.length) + a
        },
        dfb = function(a, b, c, d, e) {
            0 === d && (d = 0x8000000000000);
            var f = {};
            b.wpWinPosId && Object.assign(f, a.C.get(b.wpWinPosId));
            b.wsWinStyleId && Object.assign(f, a.D.get(b.wsWinStyleId));
            a = b.rcRowCount;
            void 0 !== a && (f.Oq = a);
            b = b.ccColCount;
            void 0 !== b && (f.Mr = b);
            if (2 === f.di || 3 === f.di) b = f.Oq, f.Oq = f.Mr, f.Mr = b;
            return new m5(c, d, 0, e, f)
        },
        ffb = function() {
            this.B = this.time = this.mode = this.u = 0;
            this.C = new efb(this);
            this.D = new efb(this);
            this.j = [];
            this.clear()
        },
        hfb = function(a, b, c) {
            if (255 === a && 255 === b || !a && !b) return {
                Au: a,
                Ir: b,
                result: 0
            };
            a = gfb[a];
            b = gfb[b];
            if (a & 128) {
                var d;
                if (d = !(b & 128)) d = b, d = c.Ke() && c.Ir === d;
                if (d) return {
                    Au: a,
                    Ir: b,
                    result: 1
                }
            } else if (b & 128 && 1 <= a && 31 >= a) return {
                Au: a,
                Ir: b,
                result: 2
            };
            return {
                Au: a,
                Ir: b,
                result: 3
            }
        },
        jfb = function(a, b, c, d) {
            255 === b && 255 === c || !b && !c ? (45 === ++a.B && a.reset(), a.C.u.clear(), a.D.u.clear()) : (a.B = 0, ifb(a.C, b, c, d))
        },
        kfb = function(a, b) {
            a.j.sort(function(e, f) {
                var h = e.time - f.time;
                return 0 === h ? e.order - f.order : h
            });
            for (var c = g.w(a.j), d = c.next(); !d.done; d = c.next()) d = d.value, a.time = d.time, 0 === d.type ? jfb(a, d.PS, d.QS, b) : 1 === d.type && a.u & 496 && ifb(a.D, d.PS, d.QS, b);
            a.j.length = 0
        },
        x5 = function() {
            this.type = 0
        },
        y5 = function() {
            this.state = this.Ir = this.Au = 0
        },
        lfb = function() {
            this.timestamp = this.j = 0
        },
        z5 = function(a) {
            this.D = a;
            this.B = [];
            this.j = this.u = this.row = 0;
            this.style = new x5;
            for (a = this.C = 0; 15 >= a; a++) {
                this.B[a] = [];
                for (var b = 0; 32 >= b; b++) this.B[a][b] = new lfb
            }
        },
        A5 = function(a, b) {
            if (3 === a.style.type) {
                for (var c = 0, d = 0, e = a.D.time + 0, f = "", h = "", l = e, m = 1; 15 >= m; ++m) {
                    for (var n = !1, p = d ? d : 1; 32 >= p; ++p) {
                        var q = a.B[m][p];
                        if (0 !== q.j) {
                            0 === c && (c = m, d = p);
                            n = String.fromCharCode(q.j);
                            var t = q.timestamp;
                            t < e && (e = t);
                            q.timestamp = l;
                            h && (f += h, h = "");
                            f += n;
                            n = !0
                        }
                        if ((0 === q.j || 32 === p) && n) {
                            h = "\n";
                            break
                        } else if (d && !n) break
                    }
                    if (c && !n) break
                }
                f && b.C(c, d, e, l, f)
            } else
                for (d = c = 0, f = e = a.D.time + 0, h = 1; 15 >= h; ++h)
                    for (l = "", m = 1; 32 >= m; ++m)
                        if (p = a.B[h][m], q = p.j, 0 !== q && (0 === c && (c = h, d = m), n = String.fromCharCode(q), t = p.timestamp, t <= e && (e = t), l += n, p.reset()), 32 === m || 0 === q) l && b.C(c, d, e, f, l), e = f, l = "", d = c = 0
        },
        qfb = function(a, b) {
            switch (a) {
                case 0:
                    return mfb[(b & 127) - 32];
                case 1:
                    return nfb[b & 15];
                case 2:
                    return ofb[b & 31];
                case 3:
                    return pfb[b & 31]
            }
            return 0
        },
        B5 = function(a) {
            return a.B[a.row][a.u]
        },
        C5 = function(a, b, c) {
            2 <= b && 1 < a.u && (--a.u, B5(a).j = 0);
            var d = B5(a);
            d.timestamp = a.D.time + 0;
            d.j = qfb(b, c);
            32 > a.u && a.u++
        },
        rfb = function(a, b, c, d) {
            for (var e = 0; e < d; e++)
                for (var f = 0; 32 >= f; f++) {
                    var h = a.B[b + e][f],
                        l = a.B[c + e][f];
                    h.j = l.j;
                    h.timestamp = l.timestamp
                }
        },
        D5 = function(a, b, c) {
            for (var d = 0; d < c; d++)
                for (var e = 0; 32 >= e; e++) a.B[b + d][e].reset()
        },
        sfb = function(a) {
            a.row = 0 < a.j ? a.j : 1;
            a.u = 1;
            D5(a, 0, 15)
        },
        tfb = function(a) {
            this.B = a;
            this.D = 0;
            this.style = new x5;
            this.I = new z5(this.B);
            this.J = new z5(this.B);
            this.text = new z5(this.B);
            this.u = this.I;
            this.C = this.J;
            this.j = this.u
        },
        ufb = function(a, b, c) {
            var d = a.u,
                e = !1;
            switch (a.style.get()) {
                case 4:
                case 1:
                case 2:
                    4 === a.style.get() && 0 < d.j || (A5(d, c), sfb(a.u), sfb(a.C), d.row = 15, d.j = b, e = !0)
            }
            a.style.set(3);
            a.j = d;
            a.j.style = a.style;
            a.B.mode = 1 << d.C;
            e ? d.u = 1 : d.j !== b && (d.j > b ? (A5(d, c), D5(d, d.row - d.j, b)) : d.row < b && (b = d.j), d.j = b)
        },
        vfb = function(a) {
            a.style.set(1);
            a.j = a.C;
            a.j.j = 0;
            a.j.style = a.style;
            a.B.mode = 1 << a.j.C
        },
        wfb = function(a) {
            a.style.set(4);
            a.j = a.text;
            a.j.style = a.style;
            a.B.mode = 1 << a.j.C
        },
        efb = function(a) {
            this.j = a;
            this.D = 0;
            this.B = new tfb(this.j);
            this.I = new tfb(this.j);
            this.u = new y5;
            this.C = this.B
        },
        ifb = function(a, b, c, d) {
            a.u.update();
            b = hfb(b, c, a.u);
            switch (b.result) {
                case 0:
                    return;
                case 1:
                case 2:
                    return
            }
            var e = b.Au;
            c = b.Ir;
            if (32 <= e || !e) a.j.mode & a.j.u && (b = e, b & 128 && (b = 127), c & 128 && (c = 127), a = a.C.j, b & 96 && C5(a, 0, b), c & 96 && C5(a, 0, c), 0 !== b && 0 !== c && 3 === a.style.type && A5(a, d));
            else if (e & 16) a: if (!a.u.matches(e, c) && (b = a.u, b.Au = e, b.Ir = c, b.state = 2, b = e & 8 ? a.I : a.B, a.C = b, a.j.mode = 1 << (a.D << 2) + (b.D << 1) + (4 === b.style.type ? 1 : 0), (a.j.mode | 1 << (a.D << 2) + (b.D << 1) + (4 !== b.style.type ? 1 : 0)) & a.j.u))
                if (c & 64) {
                    d = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(e & 7) << 1 | c >> 5 & 1];
                    a = c & 16 ? 4 * ((c & 14) >> 1) : 0;
                    c = b.j;
                    switch (b.style.get()) {
                        case 4:
                            d = c.row;
                            break;
                        case 3:
                            if (d !== c.row) {
                                if (d < c.j && (d = c.j, d === c.row)) break;
                                var f = 1 + c.row - c.j,
                                    h = 1 + d - c.j;
                                rfb(c, h, f, c.j);
                                b = f;
                                e = c.j;
                                h < f ? (f = h + e - f, 0 < f && (b += f, e -= f)) : (f = f + e - h, 0 < f && (e -= f));
                                D5(c, b, e)
                            }
                    }
                    c.row = d;
                    c.u = a + 1
                } else switch (e & 7) {
                    case 1:
                        switch (c & 112) {
                            case 32:
                                C5(b.j, 0, 32);
                                break a;
                            case 48:
                                57 === c ? (d = b.j, B5(d).j = 0, 32 > d.u && d.u++) : C5(b.j, 1, c & 15)
                        }
                        break;
                    case 2:
                        c & 32 && C5(b.j, 2, c & 31);
                        break;
                    case 3:
                        c & 32 && C5(b.j, 3, c & 31);
                        break;
                    case 4:
                    case 5:
                        if (32 <= c && 47 >= c) switch (c) {
                            case 32:
                                vfb(b);
                                break;
                            case 33:
                                d = b.j;
                                1 < d.u && (--d.u, B5(d).j = 0);
                                break;
                            case 36:
                                d = b.j;
                                b = B5(d);
                                for (a = 0; 15 >= a; a++)
                                    for (c = 0; 32 >= c; c++)
                                        if (d.B[a][c] === b) {
                                            for (; 32 >= c; c++) d.B[a][c].reset();
                                            break
                                        }
                                break;
                            case 37:
                                ufb(b, 2, d);
                                break;
                            case 38:
                                ufb(b, 3, d);
                                break;
                            case 39:
                                ufb(b, 4, d);
                                break;
                            case 40:
                                C5(b.j, 0, 32);
                                break;
                            case 41:
                                b.style.set(2);
                                b.j = b.u;
                                b.j.j = 0;
                                b.j.style = b.style;
                                b.B.mode = 1 << b.j.C;
                                break;
                            case 42:
                                d = b.text;
                                d.j = 15;
                                d.style.set(4);
                                sfb(d);
                                wfb(b);
                                break;
                            case 43:
                                wfb(b);
                                break;
                            case 44:
                                a = b.u;
                                switch (b.style.get()) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        A5(a, d)
                                }
                                D5(a,
                                    0, 15);
                                break;
                            case 45:
                                b: {
                                    a = b.j;
                                    switch (b.style.get()) {
                                        default:
                                            case 2:
                                            case 1:
                                            break b;
                                        case 4:
                                                if (15 > a.row) {
                                                ++a.row;
                                                a.u = 1;
                                                break b
                                            }
                                        case 3:
                                    }
                                    2 > a.j && (a.j = 2, a.row < a.j && (a.row = a.j));b = a.row - a.j + 1;A5(a, d);rfb(a, b, b + 1, a.j - 1);D5(a, a.row, 1)
                                }
                                break;
                            case 46:
                                D5(b.C, 0, 15);
                                break;
                            case 47:
                                A5(b.u, d), b.C.updateTime(b.B.time + 0), d = b.C, b.C = b.u, b.u = d, vfb(b)
                        }
                        break;
                    case 7:
                        switch (c) {
                            case 33:
                            case 34:
                            case 35:
                                d = b.j, 32 < (d.u += c & 3) && (d.u = 32)
                        }
                }
        },
        xfb = function() {},
        E5 = function(a, b, c) {
            this.trackData = a;
            this.I = c;
            this.version = this.D = this.B = this.byteOffset = 0;
            this.j = new DataView(this.trackData);
            this.u = []
        },
        F5 = function(a) {
            var b = a.byteOffset;
            a.byteOffset += 1;
            return a.j.getUint8(b)
        },
        G5 = function(a) {
            var b = a.byteOffset;
            a.byteOffset += 4;
            return a.j.getUint32(b)
        },
        H5 = function(a, b) {
            o5.call(this);
            this.B = a;
            this.C = b;
            this.track = "CC3" === this.C.languageName ? 4 : 0;
            this.j = new ffb;
            this.j.u = 1 << this.track
        },
        zfb = function(a) {
            if ("string" === typeof a) return !1;
            a = new E5(a, 8, 0);
            return yfb(a)
        },
        yfb = function(a) {
            if (!(a.byteOffset < a.j.byteLength) || 1380139777 !== G5(a)) return !1;
            a.version = F5(a);
            if (1 < a.version) return !1;
            F5(a);
            F5(a);
            F5(a);
            return !0
        },
        I5 = function() {
            o5.call(this)
        },
        Afb = function(a, b, c, d, e, f, h, l, m) {
            switch (h.tagName) {
                case "b":
                    l.bold = !0;
                    break;
                case "i":
                    l.italic = !0;
                    break;
                case "u":
                    l.underline = !0
            }
            for (var n = 0; n < h.childNodes.length; n++) {
                var p = h.childNodes[n];
                if (3 === p.nodeType) p = new l5(b, c, d, e.id, p.nodeValue, f || 0 < n, g.fd(l) ? void 0 : l), m.push(p), e.j.push(p);
                else {
                    var q = {};
                    Object.assign(q, l);
                    Afb(a, b, c, d, e, !0, p, q, m)
                }
            }
        },
        Bfb = function(a) {
            var b = a.split(":");
            a = 0;
            b = g.w(b);
            for (var c = b.next(); !c.done; c = b.next()) a = 60 * a + Number(c.value);
            return 1E3 * a
        },
        Cfb = function(a, b, c, d) {
            d = Object.assign({
                gz: 0
            }, d);
            return new m5(a, b, c, "_" + n5++, d)
        },
        J5 = function(a, b) {
            g.E.call(this);
            this.F = a;
            this.Y = b;
            this.parser = null;
            this.j = this.F.Dy()
        },
        Ifb = function(a, b, c, d, e) {
            d = d || 0;
            e = e || 0;
            if (a.j && b) {
                var f = e,
                    h = Dfb(a, b, d),
                    l = [];
                try {
                    for (var m = g.w(h), n = m.next(); !n.done; n = m.next()) {
                        var p = n.value,
                            q = p.trackData,
                            t = p.sP;
                        l = "string" !== typeof q ? l.concat(Efb(a, c, q, t, f)) : "WEBVTT" === q.substring(0, 6) ? l.concat(Ffb(a, q, t)) : l.concat(Gfb(a, c, q, t))
                    }
                    var v = l
                } catch (z) {
                    g.MD(z), a.clear(), v = []
                }
                if (0 !== v.length) return v
            }
            b = Hfb(b);
            if (!b) return [];
            try {
                return "string" !== typeof b ? Efb(a, c, b, d, e) : "WEBVTT" === b.substring(0, 6) ? Ffb(a, b, d) : Gfb(a, c, b, d)
            } catch (z) {
                return g.MD(z), a.clear(), []
            }
        },
        Hfb = function(a) {
            if ("string" ===
                typeof a || zfb(a)) return a;
            var b = new DataView(a);
            if (8 >= b.byteLength || 1718909296 !== b.getUint32(4)) return "";
            b = g.tG(b, 0, 1835295092);
            if (!b || !b.size) return "";
            a = new Uint8Array(a, b.dataOffset, b.size - (b.dataOffset - b.offset));
            return g.eG(a)
        },
        Dfb = function(a, b, c) {
            if ("string" === typeof b || zfb(b)) return [{
                trackData: b,
                sP: c
            }];
            var d = new DataView(b);
            if (8 >= d.byteLength || 1718909296 !== d.getUint32(4)) return [];
            var e = g.gta(d);
            if (a.j && e) {
                var f = g.Zsa(e),
                    h = g.$sa(e);
                e = e.j;
                f && e && a.j.gE(e, f, h)
            }
            a = g.CG(d, 1835295092);
            if (!a || !a.length || !a[0].size) return [];
            f = [];
            for (h = 0; h < a.length; h++) e = a[h], e = new Uint8Array(b, e.dataOffset, e.size - (e.dataOffset - e.offset)), e = g.eG(e), f.push({
                trackData: e,
                sP: c + 1E3 * h
            });
            Jfb(d, f, c);
            return f = f.filter(function(l) {
                return !!l.trackData
            })
        },
        Jfb = function(a, b, c) {
            var d = g.tG(a, 0, 1836476516),
                e = 9E4;
            d && (e = g.uG(d) || 9E4);
            d = 0;
            for (var f = g.CG(a, 1836019558), h = 0; h < f.length; h++) {
                var l = f[h];
                h < b.length && (l = g.tG(a, l.dataOffset, 1953653094)) && (l = g.tG(a, l.dataOffset, 1952867444)) && (l = g.AG(l) / e * 1E3, 0 === h && (d = l), b[h].sP = l - d + c || c * h * 1E3)
            }
        },
        Efb = function(a, b, c, d, e) {
            if (!zfb(c)) throw Error("Invalid binary caption track data");
            a.parser || (a.parser = new H5(e, b));
            return a.parser.u(c, d)
        },
        Ffb = function(a, b, c) {
            a.parser || (a.parser = new I5);
            a = a.parser.u(b, c);
            .01 > Math.random() && g.ND(Error("Deprecated subtitles format in web player: WebVTT"));
            return a
        },
        Gfb = function(a, b, c, d) {
            if ("{" === c[0]) try {
                return a.parser || (a.parser = new v5(Kfb(b))), a.parser.u(c, d)
            } catch (f) {
                return g.MD(f), []
            }
            var e = g.b8a(c);
            if (!e || !e.firstChild) throw a = Error("Invalid caption track data"), a.params = c, a;
            if ("timedtext" === e.firstChild.tagName) {
                if (3 === Number(e.firstChild.getAttribute("format"))) return a.parser || (a.parser = new p5(Kfb(b), a.Y)), a.parser.u(e, d);
                a = Error("Unsupported subtitles format in web player (Format2)");
                a.params = c;
                throw a;
            }
            if ("transcript" === e.firstChild.tagName) throw a = Error("Unsupported subtitles format in web player (Format1)"), a.params = c, a;
            a = Error("Invalid caption track data");
            a.params = c;
            throw a;
        },
        Kfb = function(a) {
            var b = {};
            if (a = g.qL(a)) b.lang = a, g.c$a.test(a) && (b.di = 1);
            return b
        },
        K5 = function(a) {
            g.sT.call(this, a);
            var b = this;
            this.F = a;
            this.Y = this.F.V();
            this.videoData = this.F.getVideoData();
            this.tb = this.F.jb();
            this.B = {
                Ie: {}
            };
            this.D = {
                Ie: {}
            };
            this.Fa = [];
            this.Z = {};
            this.Wa = {};
            this.ya = !1;
            this.pc = g.pN(this.videoData);
            this.ib = g.hLa(this.videoData, this.F);
            this.Pb = !!this.videoData.captionTracks.length;
            this.Bc = !!this.videoData.Cd;
            this.Za = "3" === this.Y.controlsType;
            this.j = this.J = this.T = this.Oa = this.kb = null;
            this.Ya = new J5(this.F, this.Y);
            this.u = null;
            this.Aa = new g.aI(this);
            this.I = new g.V({
                G: "div",
                N: "ytp-caption-window-container",
                X: {
                    id: "ytp-caption-window-container"
                }
            });
            this.ea = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 1,
                height: 1
            };
            var c = null,
                d = g.yq("yt-html5-player-modules::subtitlesModuleData");
            d && (c = new g.mq(d));
            this.storage = c;
            var e;
            this.Ib = !(null == (e = a.Ce()) || !e.ZD());
            this.C = Lfb(this);
            this.oa = !this.C && this.Za && this.Ib && this.ib;
            g.J(this, this.Ya);
            this.C ? this.La = this.Ja = null : (this.Ja = new g.Gp(this.TP, void 0, this), g.J(this, this.Ja), this.La = new g.Ip(this.Z8, 2E3, this), g.J(this, this.La));
            g.J(this, this.Aa);
            g.uS(this.player, this.I.element,
                4);
            g.J(this, this.I);
            this.C || this.Aa.S(a, "resize", this.WP);
            (this.yb = g.AK(this.Y) && !g.Ez() && !this.F.isFullscreen() && !this.C && !this.oa) && this.Aa.S(a, "resize", this.G6);
            this.Aa.S(a, "onPlaybackAudioChange", this.U5);
            this.Aa.S(a, g.iE("captions"), function(f) {
                b.onCueRangeEnter(f)
            });
            this.Aa.S(a, g.jE("captions"), function(f) {
                b.onCueRangeExit(f)
            });
            Mfb(this, Ceb() || {});
            this.player.Na("onCaptionsModuleAvailable")
        },
        Pfb = function(a) {
            if (1 === a.Y.yb || 1 === a.videoData.AC || "alwayson" === g.TM(a.videoData, "yt:cc")) return !0;
            if (a.videoData.captionTracks.length) var b = a.player.getAudioTrack().u;
            if (2 === a.Y.yb) {
                if (g.TK(a.Y)) var c = Nfb(a);
                else if (a.storage) try {
                    c = a.storage.get("module-enabled")
                } catch (e) {
                    a.storage.remove("module-enabled")
                } else c = null;
                if (null != c) return !!c
            }
            c = ueb(a.player.getAudioTrack(), g.TK(a.Y));
            var d = g.TM(a.videoData, "yt:cc");
            if (void 0 === Ofb(a)) {
                if ("CAPTIONS_INITIAL_STATE_ON_RECOMMENDED" === c) return d ? "on" === d : !0;
                if ("CAPTIONS_INITIAL_STATE_OFF_RECOMMENDED" === c) return "on" === d
            } else return "on" === d;
            return "ON" ===
                b || "on" === g.TM(a.videoData, "yt:cc")
        },
        L5 = function(a, b) {
            if (a.u && (void 0 === b || !b) || !a.videoData.captionTracks.length) return !1;
            a = a.player.getAudioTrack();
            return !!a.j || "FORCED_ON" === a.u
        },
        Ofb = function(a) {
            var b = void 0,
                c = g.cA(g.bA(), 65);
            if (g.TK(a.Y) && null != c) {
                if (null != Nfb(a)) return !1;
                b = !c
            }
            return b
        },
        Qfb = function(a) {
            var b;
            a.pc ? b = new i5(a.Y, a.videoData, a.player.getAudioTrack(), a.player) : a.ib ? b = new g5(a.videoData.j, a.player) : a.Pb ? b = new g.wT(a.Y, a.videoData, a.player.getAudioTrack()) : b = new g.yT(a.Y, a.videoData.Cd, a.videoData.videoId, g.Jya(a.videoData), a.videoData.tm, a.videoData.eventId);
            return b
        },
        N5 = function(a, b) {
            if (a.j) {
                if (a.J && a.J.C) return a.J.C;
                g.fN(a.videoData) && (b = !0);
                b || (b = a.Bc ? !1 : a.Pb ? !1 : !0);
                b = b || Rfb(a);
                b = g.tT(a.j.j, b);
                var c = null;
                if (veb(a.Y)) {
                    var d = a.F.isInline() ? void 0 : g.Wz("yt-player-caption-sticky-language");
                    for (var e = [d, a.videoData.captionsLanguagePreference, a.Y.captionsLanguagePreference, g.TM(a.videoData, "yt:cc_default_lang")], f = !1, h = 0; h < e.length; h++) {
                        var l = e[h];
                        if (l) {
                            f = !0;
                            for (var m = 0; m < b.length; m++)
                                if (g.qL(b[m]) === l) return b[m];
                            l = l.split("-")[0];
                            for (m = 0; m < b.length; m++)
                                if (g.qL(b[m]) === l) return b[m]
                        }
                    }
                    if (a.Y.K("web_player_always_enable_auto_translation") &&
                        f && a.j && (e = a.j.C, e.length))
                        for (e = g.w(e), f = e.next(); !f.done; f = e.next())
                            if (f = f.value, f.languageCode === d) {
                                c = f;
                                break
                            }
                } else
                    for (d = [a.videoData.captionsLanguagePreference, a.Y.captionsLanguagePreference, g.TM(a.videoData, "yt:cc_default_lang")], e = 0; e < d.length; e++)
                        for (f = 0; f < b.length; f++)
                            if (g.qL(b[f]) === d[e]) return b[f];
                d = null;
                a.J && a.J.B && (d = a.J.B);
                d || (d = b.find(function(n) {
                    return n.isDefault
                }) || null);
                d || (d = b[0] || M5(a));
                d && c && (d = web(d, c));
                return d
            }
            return null
        },
        M5 = function(a) {
            return a.J && a.J.j
        },
        O5 = function(a) {
            var b = M5(a);
            return !!b && a.u === b
        },
        Sfb = function(a) {
            g.tT(a.j.j, !0);
            var b = ueb(a.player.getAudioTrack(), g.TK(a.Y)),
                c;
            "CAPTIONS_INITIAL_STATE_ON_REQUIRED" === b ? c = N5(a, a.ya) : "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" === b && L5(a) ? c = M5(a) : Ofb(a) || a.ya || Pfb(a) ? c = N5(a, a.ya) : L5(a) && (c = M5(a));
            if (a.C || a.oa) {
                var d = g.tT(a.j.j, !0);
                b = [];
                for (var e = 0; e < d.length; e++) {
                    var f = d[e],
                        h = g.Ze("TRACK");
                    h.setAttribute("kind", "subtitles");
                    h.setAttribute("label", g.oL(f));
                    h.setAttribute("srclang", g.qL(f));
                    h.setAttribute("id", f.toString());
                    a.oa || h.setAttribute("src", a.j.Wu(f, "vtt"));
                    f === c && h.setAttribute("default",
                        "1");
                    b.push(h)
                }
                c = a.F.Ce();
                c.VA(b);
                c = c.ub();
                a.Ib && a.Aa.S(c.textTracks, "change", a.e8)
            } else !a.u && c && P5(a, c), a.player.Na("onCaptionsTrackListChanged"), a.player.Na("onApiChange")
        },
        Tfb = function(a, b) {
            var c = a.F.Ce().ub().textTracks;
            a = a.u.toString();
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                e.id === a && (b ? "showing" !== e.mode && (e.mode = "showing") : "showing" === e.mode && (e.mode = "disabled"))
            }
        },
        P5 = function(a, b, c) {
            a.loaded && a.unload();
            null != c && (a.ya = c, a.ya && (g.TK(a.Y) ? Q5(a, !!b) : R5(a, !!b)));
            a.u = b;
            L5(a) && (a.u = M5(a));
            a.load()
        },
        Vfb = function(a, b) {
            if (b instanceof m5) {
                var c = a.Z[b.id];
                c && c.u !== b && (c.dispose(), delete a.Z[b.id], c = null);
                c || (c = Ufb(a, b)) && (a.Z[b.id] = c)
            } else c = b.windowId, a.Wa[c] || (a.Wa[c] = []), a.Wa[c].push(b)
        },
        Ufb = function(a, b) {
            var c = Wfb(a);
            if (!c) return null;
            var d = a.u ? g.qL(a.u) : null;
            d && g.c$a.test(d) && (b.params.di = 1);
            var e = a.tb.getPlayerSize();
            d = e.height * a.ea.height;
            e = e.width * a.ea.width;
            "google-live" !== a.Y.playerStyle || a.B.isDefault || Object.assign(b.params, a.B);
            switch (null != b.params.gz ? b.params.gz : 1 < b.j.length ? 1 : 0) {
                case 1:
                    return new j5(b, a.B, a.D, c.width, c.height, e, d, a.Y.experiments, a.aJ.bind(a), a.F);
                case 2:
                    return new k5(b, a.B, a.D, c.width, c.height, e, d, a.Y.experiments, a.aJ.bind(a), a.F);
                default:
                    return new h5(b, a.B, a.D, c.width, c.height, e,
                        d, a.Y.experiments, a.aJ.bind(a), a.F)
            }
        },
        Mfb = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            var d = S5.Ie;
            a.B = {};
            Object.assign(a.B, S5);
            a.B.Ie = {};
            Object.assign(a.B.Ie, d);
            a.D = {
                Ie: {}
            };
            var e = b.backgroundOverride ? a.D : a.B,
                f = b.background || d.background;
            t5.test(f);
            e.Ie.background = f;
            e = b.colorOverride ? a.D : a.B;
            f = b.color || d.color;
            t5.test(f);
            e.Ie.color = f;
            e = b.windowColorOverride ? a.D : a.B;
            f = b.windowColor || S5.windowColor;
            t5.test(f);
            e.windowColor = f;
            e = b.backgroundOpacityOverride ? a.D : a.B;
            f = b.backgroundOpacity;
            null == f && (f = d.backgroundOpacity);
            e.Ie.backgroundOpacity = f;
            e = b.fontSizeIncrementOverride ? a.D : a.B;
            f = b.fontSizeIncrement;
            null == f && (f = d.fontSizeIncrement);
            e.Ie.fontSizeIncrement = f;
            f = b.fontStyleOverride ? a.D : a.B;
            e = b.fontStyle;
            null == e && (e = d.bold && d.italic ? 3 : d.bold ? 1 : d.italic ? 2 : 0);
            f = f.Ie;
            switch (e) {
                case 1:
                    f.bold = !0;
                    delete f.italic;
                    break;
                case 2:
                    delete f.bold;
                    f.italic = !0;
                    break;
                case 3:
                    f.bold = !0;
                    f.italic = !0;
                    break;
                default:
                    delete f.bold, delete f.italic
            }
            e = b.textOpacityOverride ? a.D : a.B;
            f = b.textOpacity;
            null == f && (f = d.textOpacity);
            e.Ie.textOpacity = f;
            e = b.windowOpacityOverride ? a.D : a.B;
            f = b.windowOpacity;
            null == f && (f = S5.windowOpacity);
            e.windowOpacity =
                f;
            e = b.charEdgeStyleOverride ? a.D : a.B;
            f = b.charEdgeStyle;
            null == f && (f = d.charEdgeStyle);
            e.Ie.charEdgeStyle = f;
            e = b.fontFamilyOverride ? a.D : a.B;
            f = b.fontFamily;
            null == f && (f = d.fontFamily);
            e.Ie.fontFamily = f;
            a.loaded && a.WP();
            c && g.Vz("yt-player-caption-display-settings", b, 2592E3)
        },
        Yfb = function(a, b, c) {
            b && !a.T ? (b = Yeb({
                di: 0,
                lang: "en-GB"
            }), a.T = [b, new l5(b.start, b.end - b.start, 0, b.id, null != c ? c : "Captions look like this")], a.player.Ge(a.T)) : !b && a.T && (Xfb(a, a.T), a.T = null)
        },
        Xfb = function(a, b) {
            a.player.ip(b);
            b = g.w(b);
            for (var c = b.next(); !c.done; c = b.next()) g.Ab(a.Fa, c.value);
            g.Hp(a.Ja)
        },
        Wfb = function(a) {
            var b = a.tb.getVideoContentRect(!0).height,
                c = a.tb.getVideoContentRect(!0).width;
            if (!b || !c) return null;
            b *= a.ea.height;
            c *= a.ea.width;
            return {
                width: c,
                height: b
            }
        },
        R5 = function(a, b) {
            if (a.storage) try {
                a.storage.set("module-enabled", b)
            } catch (c) {}
        },
        Q5 = function(a, b) {
            a.F.isInline() || g.Vz("yt-player-sticky-caption", b, 2592E3)
        },
        Nfb = function(a) {
            if (!a.F.isInline()) return g.Wz("yt-player-sticky-caption")
        },
        Lfb = function(a) {
            var b, c = !(null == (b = a.F.Ce()) || !b.YD());
            return a.Za && c && !a.ib
        },
        Rfb = function(a) {
            return a.Y.K("web_deprecate_always_includes_asr_setting") && g.TK(a.Y) ? !0 : !!g.cA(g.bA(), 66)
        };
    g.vW.prototype.KB = g.ba(40, function(a) {
        var b = 2;
        this.Ja.has(a) ? b = 0 : g.dRa(this, a) && (b = 1);
        return b
    });
    g.uY.prototype.KB = g.ba(39, function(a) {
        return this.od.KB(a)
    });
    g.vW.prototype.gE = g.ba(38, function(a, b, c) {
        this.Oa.set(a, {
            Rr: b,
            Fx: c
        })
    });
    g.uY.prototype.gE = g.ba(37, function(a, b, c) {
        this.od.gE(a, b, c)
    });
    g.vT.prototype.rO = g.ba(30, function() {
        return !1
    });
    g.vT.prototype.Vs = g.ba(29, function() {});
    g.wT.prototype.Vs = g.ba(28, function(a, b, c) {
        var d = this;
        this.isDisposed();
        b = this.Wu(a, b);
        this.ir();
        this.u = g.My(b, {
            format: "RAW",
            onSuccess: function(e) {
                d.u = null;
                c(e.responseText, a)
            },
            withCredentials: !0
        })
    });
    g.yT.prototype.Vs = g.ba(27, function(a, b, c) {
        var d = this;
        this.isDisposed();
        b = this.Wu(a, b);
        this.ir();
        this.u = g.My(b, {
            format: "RAW",
            onSuccess: function(e) {
                d.u = null;
                c(e.responseText, a)
            },
            withCredentials: !0
        })
    });
    g.eT.prototype.Tx = g.ba(26, function() {
        for (var a = g.Re(document, "track", void 0, this.j), b = 0; b < a.length; b++) g.jf(a[b])
    });
    g.jW.prototype.Tx = g.ba(25, function() {
        this.mediaElement.Tx()
    });
    g.eT.prototype.ZD = g.ba(24, function() {
        return !(!this.j.textTracks || !this.j.textTracks.addEventListener)
    });
    g.jW.prototype.ZD = g.ba(23, function() {
        return this.mediaElement.ZD()
    });
    g.eT.prototype.YD = g.ba(22, function() {
        return !!this.j.textTracks
    });
    g.jW.prototype.YD = g.ba(21, function() {
        return this.mediaElement.YD()
    });
    g.eT.prototype.VA = g.ba(20, function(a) {
        for (var b = 0; b < a.length; b++) this.j.appendChild(a[b])
    });
    g.jW.prototype.VA = g.ba(19, function(a) {
        this.mediaElement.VA(a)
    });
    g.nY.prototype.aC = g.ba(9, function() {
        return this.I
    });
    g.xZ.prototype.aC = g.ba(8, function() {
        var a;
        return (null == (a = g.dS(this)) ? void 0 : a.Dy()) || null
    });
    g.nS.prototype.Dy = g.ba(7, function() {
        return this.app.aC()
    });
    g.lZ.prototype.Dy = g.ba(6, function() {
        var a;
        return (null == (a = this.Ea) ? void 0 : a.aC()) || null
    });
    g.TF.prototype.ZF = g.ba(2, function(a) {
        return (a = this.Go(a)) ? a.j : 0
    });
    g.IH.prototype.ZF = g.ba(1, function() {
        return 0
    });
    var Aeb = /#(.)(.)(.)/,
        zeb = /^#(?:[0-9a-f]{3}){1,2}$/i,
        Heb = {
            aa: "Afar",
            ab: "Abkhazian",
            ace: "Achinese",
            ach: "Acoli",
            ada: "Adangme",
            ady: "Adyghe",
            ae: "Avestan",
            aeb: "Tunisian Arabic",
            af: "Afrikaans",
            afh: "Afrihili",
            agq: "Aghem",
            ain: "Ainu",
            ak: "Akan",
            akk: "Akkadian",
            akz: "Alabama",
            ale: "Aleut",
            aln: "Gheg Albanian",
            alt: "Southern Altai",
            am: "Amharic",
            an: "Aragonese",
            ang: "Old English",
            anp: "Angika",
            ar: "Arabic",
            ar_001: "Arabic (world)",
            arc: "Aramaic",
            arn: "Mapuche",
            aro: "Araona",
            arp: "Arapaho",
            arq: "Algerian Arabic",
            ars: "Najdi Arabic",
            arw: "Arawak",
            ary: "Moroccan Arabic",
            arz: "Egyptian Arabic",
            as: "Assamese",
            asa: "Asu",
            ase: "American Sign Language",
            ast: "Asturian",
            av: "Avaric",
            avk: "Kotava",
            awa: "Awadhi",
            ay: "Aymara",
            az: "Azerbaijani",
            az_Cyrl: "Azerbaijani (Cyrillic)",
            az_Latn: "Azerbaijani (Latin)",
            ba: "Bashkir",
            bal: "Baluchi",
            ban: "Balinese",
            bar: "Bavarian",
            bas: "Basaa",
            bax: "Bamun",
            bbc: "Batak Toba",
            bbj: "Ghomala",
            be: "Belarusian",
            bej: "Beja",
            bem: "Bemba",
            bew: "Betawi",
            bez: "Bena",
            bfd: "Bafut",
            bfq: "Badaga",
            bg: "Bulgarian",
            bgc: "Haryanvi",
            bgn: "Western Balochi",
            bho: "Bhojpuri",
            bi: "Bislama",
            bik: "Bikol",
            bin: "Bini",
            bjn: "Banjar",
            bkm: "Kom",
            bla: "Siksik\u00e1",
            bm: "Bambara",
            bn: "Bangla",
            bo: "Tibetan",
            bpy: "Bishnupriya",
            bqi: "Bakhtiari",
            br: "Breton",
            bra: "Braj",
            brh: "Brahui",
            brx: "Bodo",
            bs: "Bosnian",
            bs_Cyrl: "Bosnian (Cyrillic)",
            bs_Latn: "Bosnian (Latin)",
            bss: "Akoose",
            bua: "Buriat",
            bug: "Buginese",
            bum: "Bulu",
            byn: "Blin",
            byv: "Medumba",
            ca: "Catalan",
            cad: "Caddo",
            car: "Carib",
            cay: "Cayuga",
            cch: "Atsam",
            ccp: "Chakma",
            ce: "Chechen",
            ceb: "Cebuano",
            cgg: "Chiga",
            ch: "Chamorro",
            chb: "Chibcha",
            chg: "Chagatai",
            chk: "Chuukese",
            chm: "Mari",
            chn: "Chinook Jargon",
            cho: "Choctaw",
            chp: "Chipewyan",
            chr: "Cherokee",
            chy: "Cheyenne",
            ckb: "Central Kurdish",
            ckb_Arab: "Central Kurdish (Arabic)",
            co: "Corsican",
            cop: "Coptic",
            cps: "Capiznon",
            cr: "Cree",
            crh: "Crimean Tatar",
            cs: "Czech",
            csb: "Kashubian",
            cu: "Church Slavic",
            cv: "Chuvash",
            cy: "Welsh",
            da: "Danish",
            dak: "Dakota",
            dar: "Dargwa",
            dav: "Taita",
            de: "German",
            de_AT: "German (Austria)",
            de_CH: "German (Switzerland)",
            del: "Delaware",
            den: "Slave",
            dgr: "Dogrib",
            din: "Dinka",
            dje: "Zarma",
            doi: "Dogri",
            dsb: "Lower Sorbian",
            dua: "Duala",
            dum: "Middle Dutch",
            dv: "Divehi",
            dyo: "Jola-Fonyi",
            dyu: "Dyula",
            dz: "Dzongkha",
            dzg: "Dazaga",
            ebu: "Embu",
            ee: "Ewe",
            efi: "Efik",
            egy: "Ancient Egyptian",
            eka: "Ekajuk",
            el: "Greek",
            elx: "Elamite",
            en: "English",
            en_AU: "English (Australia)",
            en_CA: "English (Canada)",
            en_GB: "English (United Kingdom)",
            en_US: "English (United States)",
            enm: "Middle English",
            eo: "Esperanto",
            es: "Spanish",
            es_419: "Spanish (Latin America)",
            es_ES: "Spanish (Spain)",
            es_MX: "Spanish (Mexico)",
            et: "Estonian",
            eu: "Basque",
            ewo: "Ewondo",
            fa: "Persian",
            fa_AF: "Persian (Afghanistan)",
            fan: "Fang",
            fat: "Fanti",
            ff: "Fula",
            ff_Adlm: "Fula (Adlam)",
            ff_Latn: "Fula (Latin)",
            fi: "Finnish",
            fil: "Filipino",
            fj: "Fijian",
            fo: "Faroese",
            fon: "Fon",
            fr: "French",
            fr_CA: "French (Canada)",
            fr_CH: "French (Switzerland)",
            frm: "Middle French",
            fro: "Old French",
            frr: "Northern Frisian",
            frs: "Eastern Frisian",
            fur: "Friulian",
            fy: "Western Frisian",
            ga: "Irish",
            gaa: "Ga",
            gay: "Gayo",
            gba: "Gbaya",
            gd: "Scottish Gaelic",
            gez: "Geez",
            gil: "Gilbertese",
            gl: "Galician",
            gmh: "Middle High German",
            gn: "Guarani",
            goh: "Old High German",
            gon: "Gondi",
            gor: "Gorontalo",
            got: "Gothic",
            grb: "Grebo",
            grc: "Ancient Greek",
            gsw: "Swiss German",
            gu: "Gujarati",
            guz: "Gusii",
            gv: "Manx",
            gwi: "Gwich\u02bcin",
            ha: "Hausa",
            hai: "Haida",
            haw: "Hawaiian",
            he: "Hebrew",
            hi: "Hindi",
            hi_Latn: "Hindi (Latin)",
            hil: "Hiligaynon",
            hit: "Hittite",
            hmn: "Hmong",
            ho: "Hiri Motu",
            hr: "Croatian",
            hsb: "Upper Sorbian",
            ht: "Haitian Creole",
            hu: "Hungarian",
            hup: "Hupa",
            hy: "Armenian",
            hz: "Herero",
            ia: "Interlingua",
            iba: "Iban",
            ibb: "Ibibio",
            id: "Indonesian",
            ie: "Interlingue",
            ig: "Igbo",
            ii: "Sichuan Yi",
            ik: "Inupiaq",
            ilo: "Iloko",
            "in": "Indonesian",
            inh: "Ingush",
            io: "Ido",
            is: "Icelandic",
            it: "Italian",
            iu: "Inuktitut",
            iw: "Hebrew",
            ja: "Japanese",
            jbo: "Lojban",
            jgo: "Ngomba",
            jmc: "Machame",
            jpr: "Judeo-Persian",
            jrb: "Judeo-Arabic",
            jv: "Javanese",
            ka: "Georgian",
            kaa: "Kara-Kalpak",
            kab: "Kabyle",
            kac: "Kachin",
            kaj: "Jju",
            kam: "Kamba",
            kaw: "Kawi",
            kbd: "Kabardian",
            kbl: "Kanembu",
            kcg: "Tyap",
            kde: "Makonde",
            kea: "Kabuverdianu",
            kfo: "Koro",
            kg: "Kongo",
            kgp: "Kaingang",
            kha: "Khasi",
            kho: "Khotanese",
            khq: "Koyra Chiini",
            ki: "Kikuyu",
            kj: "Kuanyama",
            kk: "Kazakh",
            kkj: "Kako",
            kl: "Kalaallisut",
            kln: "Kalenjin",
            km: "Khmer",
            kmb: "Kimbundu",
            kn: "Kannada",
            ko: "Korean",
            kok: "Konkani",
            kos: "Kosraean",
            kpe: "Kpelle",
            kr: "Kanuri",
            krc: "Karachay-Balkar",
            krl: "Karelian",
            kru: "Kurukh",
            ks: "Kashmiri",
            ks_Arab: "Kashmiri (Arabic)",
            ks_Deva: "Kashmiri (Devanagari)",
            ksb: "Shambala",
            ksf: "Bafia",
            ksh: "Colognian",
            ku: "Kurdish",
            kum: "Kumyk",
            kut: "Kutenai",
            kv: "Komi",
            kw: "Cornish",
            ky: "Kyrgyz",
            la: "Latin",
            lad: "Ladino",
            lag: "Langi",
            lah: "Western Panjabi",
            lam: "Lamba",
            lb: "Luxembourgish",
            lez: "Lezghian",
            lg: "Ganda",
            li: "Limburgish",
            lkt: "Lakota",
            ln: "Lingala",
            lo: "Lao",
            lol: "Mongo",
            loz: "Lozi",
            lrc: "Northern Luri",
            lt: "Lithuanian",
            lu: "Luba-Katanga",
            lua: "Luba-Lulua",
            lui: "Luiseno",
            lun: "Lunda",
            luo: "Luo",
            lus: "Mizo",
            luy: "Luyia",
            lv: "Latvian",
            mad: "Madurese",
            maf: "Mafa",
            mag: "Magahi",
            mai: "Maithili",
            mak: "Makasar",
            man: "Mandingo",
            mas: "Masai",
            mde: "Maba",
            mdf: "Moksha",
            mdr: "Mandar",
            men: "Mende",
            mer: "Meru",
            mfe: "Morisyen",
            mg: "Malagasy",
            mga: "Middle Irish",
            mgh: "Makhuwa-Meetto",
            mgo: "Meta\u02bc",
            mh: "Marshallese",
            mi: "M\u0101ori",
            mic: "Mi'kmaq",
            min: "Minangkabau",
            mk: "Macedonian",
            ml: "Malayalam",
            mn: "Mongolian",
            mnc: "Manchu",
            mni: "Manipuri",
            mni_Beng: "Manipuri (Bangla)",
            mo: "Romanian",
            moh: "Mohawk",
            mos: "Mossi",
            mr: "Marathi",
            ms: "Malay",
            mt: "Maltese",
            mua: "Mundang",
            mul: "Multiple languages",
            mus: "Muscogee",
            mwl: "Mirandese",
            mwr: "Marwari",
            my: "Burmese",
            mye: "Myene",
            myv: "Erzya",
            mzn: "Mazanderani",
            na: "Nauru",
            nap: "Neapolitan",
            naq: "Nama",
            nb: "Norwegian Bokm\u00e5l",
            nd: "North Ndebele",
            nds: "Low German",
            nds_NL: "Low German (Netherlands)",
            ne: "Nepali",
            "new": "Newari",
            ng: "Ndonga",
            nia: "Nias",
            niu: "Niuean",
            nl: "Dutch",
            nl_BE: "Dutch (Belgium)",
            nmg: "Kwasio",
            nn: "Norwegian Nynorsk",
            nnh: "Ngiemboon",
            no: "Norwegian",
            nog: "Nogai",
            non: "Old Norse",
            nqo: "N\u2019Ko",
            nr: "South Ndebele",
            nso: "Northern Sotho",
            nus: "Nuer",
            nv: "Navajo",
            nwc: "Classical Newari",
            ny: "Nyanja",
            nym: "Nyamwezi",
            nyn: "Nyankole",
            nyo: "Nyoro",
            nzi: "Nzima",
            oc: "Occitan",
            oj: "Ojibwa",
            om: "Oromo",
            or: "Odia",
            os: "Ossetic",
            osa: "Osage",
            ota: "Ottoman Turkish",
            pa: "Punjabi",
            pa_Arab: "Punjabi (Arabic)",
            pa_Guru: "Punjabi (Gurmukhi)",
            pag: "Pangasinan",
            pal: "Pahlavi",
            pam: "Pampanga",
            pap: "Papiamento",
            pau: "Palauan",
            pcm: "Nigerian Pidgin",
            peo: "Old Persian",
            phn: "Phoenician",
            pi: "Pali",
            pl: "Polish",
            pon: "Pohnpeian",
            pro: "Old Proven\u00e7al",
            ps: "Pashto",
            pt: "Portuguese",
            pt_BR: "Portuguese (Brazil)",
            pt_PT: "Portuguese (Portugal)",
            qu: "Quechua",
            raj: "Rajasthani",
            rap: "Rapanui",
            rar: "Rarotongan",
            rm: "Romansh",
            rn: "Rundi",
            ro: "Romanian",
            ro_MD: "Romanian (Moldova)",
            rof: "Rombo",
            rom: "Romany",
            ru: "Russian",
            rup: "Aromanian",
            rw: "Kinyarwanda",
            rwk: "Rwa",
            sa: "Sanskrit",
            sad: "Sandawe",
            sah: "Yakut",
            sam: "Samaritan Aramaic",
            saq: "Samburu",
            sas: "Sasak",
            sat: "Santali",
            sat_Olck: "Santali (Ol Chiki)",
            sba: "Ngambay",
            sbp: "Sangu",
            sc: "Sardinian",
            scn: "Sicilian",
            sco: "Scots",
            sd: "Sindhi",
            sd_Arab: "Sindhi (Arabic)",
            sd_Deva: "Sindhi (Devanagari)",
            se: "Northern Sami",
            see: "Seneca",
            seh: "Sena",
            sel: "Selkup",
            ses: "Koyraboro Senni",
            sg: "Sango",
            sga: "Old Irish",
            sh: "Serbo-Croatian",
            shi: "Tachelhit",
            shi_Latn: "Tachelhit (Latin)",
            shi_Tfng: "Tachelhit (Tifinagh)",
            shn: "Shan",
            shu: "Chadian Arabic",
            si: "Sinhala",
            sid: "Sidamo",
            sk: "Slovak",
            sl: "Slovenian",
            sm: "Samoan",
            sma: "Southern Sami",
            smj: "Lule Sami",
            smn: "Inari Sami",
            sms: "Skolt Sami",
            sn: "Shona",
            snk: "Soninke",
            so: "Somali",
            sog: "Sogdien",
            sq: "Albanian",
            sr: "Serbian",
            sr_Cyrl: "Serbian (Cyrillic)",
            sr_Latn: "Serbian (Latin)",
            srn: "Sranan Tongo",
            srr: "Serer",
            ss: "Swati",
            ssy: "Saho",
            st: "Southern Sotho",
            su: "Sundanese",
            su_Latn: "Sundanese (Latin)",
            suk: "Sukuma",
            sus: "Susu",
            sux: "Sumerian",
            sv: "Swedish",
            sw: "Swahili",
            sw_CD: "Swahili (Congo - Kinshasa)",
            swb: "Comorian",
            syc: "Classical Syriac",
            syr: "Syriac",
            ta: "Tamil",
            te: "Telugu",
            tem: "Timne",
            teo: "Teso",
            ter: "Tereno",
            tet: "Tetum",
            tg: "Tajik",
            th: "Thai",
            ti: "Tigrinya",
            tig: "Tigre",
            tiv: "Tiv",
            tk: "Turkmen",
            tkl: "Tokelau",
            tl: "Tagalog",
            tlh: "Klingon",
            tli: "Tlingit",
            tmh: "Tamashek",
            tn: "Tswana",
            to: "Tongan",
            tog: "Nyasa Tonga",
            tpi: "Tok Pisin",
            tr: "Turkish",
            trv: "Taroko",
            ts: "Tsonga",
            tsi: "Tsimshian",
            tt: "Tatar",
            tum: "Tumbuka",
            tvl: "Tuvalu",
            tw: "Twi",
            twq: "Tasawaq",
            ty: "Tahitian",
            tyv: "Tuvinian",
            tzm: "Central Atlas Tamazight",
            udm: "Udmurt",
            ug: "Uyghur",
            uga: "Ugaritic",
            uk: "Ukrainian",
            umb: "Umbundu",
            ur: "Urdu",
            uz: "Uzbek",
            uz_Arab: "Uzbek (Arabic)",
            uz_Cyrl: "Uzbek (Cyrillic)",
            uz_Latn: "Uzbek (Latin)",
            vai: "Vai",
            vai_Latn: "Vai (Latin)",
            vai_Vaii: "Vai (Vai)",
            ve: "Venda",
            vi: "Vietnamese",
            vo: "Volap\u00fck",
            vot: "Votic",
            vun: "Vunjo",
            wa: "Walloon",
            wae: "Walser",
            wal: "Wolaytta",
            war: "Waray",
            was: "Washo",
            wo: "Wolof",
            xal: "Kalmyk",
            xh: "Xhosa",
            xog: "Soga",
            yao: "Yao",
            yap: "Yapese",
            yav: "Yangben",
            ybb: "Yemba",
            yi: "Yiddish",
            yo: "Yoruba",
            yrl: "Nheengatu",
            yue: "Cantonese",
            yue_Hans: "Cantonese (Simplified)",
            yue_Hant: "Cantonese (Traditional)",
            za: "Zhuang",
            zap: "Zapotec",
            zbl: "Blissymbols",
            zen: "Zenaga",
            zgh: "Standard Moroccan Tamazight",
            zh: "Chinese",
            zh_Hans: "Chinese (Simplified)",
            zh_Hant: "Chinese (Traditional)",
            zh_TW: "Chinese (Taiwan)",
            zu: "Zulu",
            zun: "Zuni",
            zxx: "No linguistic content",
            zza: "Zaza"
        };
    f5.prototype.contains = function(a) {
        a = g.Pb(this.segments, a);
        return 0 <= a || 0 > a && 1 === (-a - 1) % 2
    };
    f5.prototype.length = function() {
        return this.segments.length / 2
    };
    g.x(Eeb, g.E);
    g.k = Eeb.prototype;
    g.k.qa = function() {
        g.E.prototype.qa.call(this);
        this.B && this.B.cancel()
    };
    g.k.pz = function() {
        this.seekTo(this.player.getCurrentTime())
    };
    g.k.seekTo = function(a) {
        a -= this.player.Hd();
        var b = this.j;
        this.j = g.qb(this.ea.Zp(a).gb);
        b !== this.j && this.T && this.T()
    };
    g.k.reset = function() {
        this.C = new f5;
        this.I = -1;
        this.B && (this.B.cancel(), this.B = null)
    };
    g.k.qV = function() {
        this.isDisposed();
        var a;
        if (a = null != this.j) a = this.j, a = a.j.Br(a);
        if (a && !this.B && !(this.j && 30 < this.j.startTime - this.player.getCurrentTime())) {
            a = this.j;
            a = a.j.LA(a);
            var b;
            if (null == (b = this.player.getVideoData()) ? 0 : b.enableServerStitchedDai)
                if (b = this.player.Dy()) {
                    var c = a.gb[0].j.info.id,
                        d = a.gb[0].Ma,
                        e = a.gb[0].C;
                    if (this.policy.Fa) {
                        if (b = b.Fs(e, d, c, 3)) a.I = b
                    } else if (c = b.Ho(e, d, c, 3))
                        if (b = b.KB(d), 0 === b) c && (a.u = new g.MF(c));
                        else if (2 === b) {
                        this.J.start();
                        Feb(this) && this.seekTo(this.player.getCurrentTime());
                        return
                    }
                }
            a.gb[0].duration ? (this.C.contains(a.gb[0].Ma) || Geb(this, a), this.j = g.qb(a.gb)) : Feb(this) && this.seekTo(this.player.getCurrentTime())
        }
        this.J.start()
    };
    g.x(g5, g.vT);
    g.k = g5.prototype;
    g.k.Vs = function(a, b, c) {
        var d = this;
        this.ir();
        b = Jeb(this, a.getId());
        b || (b = a.languageCode, b = this.u.isManifestless ? Keb(this, b, "386") : Keb(this, b));
        if (b) {
            var e = 1E3 * (b.index.ZF(b.index.Mm()) - b.index.getStartTime(b.index.Mm())),
                f = new g.cLa(this.Y);
            this.B = new Eeb(f, this.F, b, function(h, l) {
                c(h, a, l, e)
            }, this.I || g.EH(b.info), function() {
                d.B && d.B.reset();
                d.D = !0
            })
        }
    };
    g.k.rO = function() {
        var a = this.D;
        this.D = !1;
        return a
    };
    g.k.Xy = function(a) {
        var b = this.I ? [new g.nL({
            id: "rawcc",
            languageCode: "rawcc",
            languageName: "CC1",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: ".en"
        }), new g.nL({
            id: "rawcc",
            languageCode: "rawcc",
            languageName: "CC3",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: ".en"
        })] : this.u.isManifestless ? Ieb(this, "386") : Ieb(this);
        b = g.w(b);
        for (var c = b.next(); !c.done; c = b.next()) g.uT(this.j, c.value);
        a()
    };
    g.k.ir = function() {
        this.B && (this.B.dispose(), this.B = null)
    };
    g.k.Wu = function() {
        return ""
    };
    var t5 = /^#(?:[0-9a-f]{3}){1,2}$/i,
        Leb = window.yt && window.yt.msgs_ || window.ytcfg && window.ytcfg.msgs || {};
    g.Ka("yt.msgs_", Leb);
    var Peb = ["left", "right", "center", "justify"];
    g.x(h5, g.V);
    g.k = h5.prototype;
    g.k.XZ = function(a, b) {
        this.ib = a;
        this.kb = b;
        var c = g.$m(this.element, this.element.parentElement);
        this.tb = a - c.x;
        this.yb = b - c.y
    };
    g.k.WZ = function(a, b) {
        if (a !== this.ib || b !== this.kb) {
            g.Pp(this.element, "ytp-dragging") || g.Qp(this.element, "ytp-dragging");
            var c = g.bn(this.element);
            a = a - this.tb - .02 * this.playerWidth;
            var d = b - this.yb - .02 * this.playerHeight,
                e = (a + c.width / 2) / this.maxWidth * 3;
            e = Math.floor(g.pe(e, 0, 2));
            var f = (d + c.height / 2) / this.maxHeight * 3;
            f = Math.floor(g.pe(f, 0, 2));
            b = e + 3 * f;
            a = (a + e / 2 * c.width) / this.maxWidth;
            a = 100 * g.pe(a, 0, 1);
            c = (d + f / 2 * c.height) / this.maxHeight;
            c = 100 * g.pe(c, 0, 1);
            this.u.params.Bl = b;
            this.u.params.Fn = c;
            this.u.params.Lj =
                a;
            this.u.params.isDefault = !1;
            this.j.Bl = b;
            this.j.Fn = c;
            this.j.Lj = a;
            this.j.isDefault = !1;
            this.ya.Bl = b;
            this.ya.Fn = c;
            this.ya.Lj = a;
            this.ya.isDefault = !1;
            this.sX()
        }
    };
    g.k.VZ = function() {
        g.Sp(this.element, "ytp-dragging")
    };
    g.k.sX = function() {
        this.Uz(this.I)
    };
    g.k.getType = function() {
        return this.type
    };
    g.k.Uz = function(a) {
        var b = Math.min(this.PT(), this.maxWidth),
            c = this.OT(),
            d = "";
        3 === this.u.params.di && (d = "rotate(180deg)");
        g.Rm(this.element, {
            top: 0,
            left: 0,
            right: "",
            bottom: "",
            width: b ? b + "px" : "",
            height: c ? c + "px" : "",
            "max-width": "96%",
            "max-height": "96%",
            margin: "",
            transform: ""
        });
        this.lK(a);
        d = {
            transform: d,
            top: "",
            left: "",
            width: b ? b + "px" : "",
            height: c ? c + "px" : "",
            "max-width": "",
            "max-height": ""
        };
        var e = .96 * this.j.Lj + 2,
            f = this.j.Bl;
        switch (f) {
            case 0:
            case 3:
            case 6:
                (b = this.j.Ie.fontSizeIncrement) && 0 < b && 2 !== this.j.di && 3 !==
                    this.j.di && (e = Math.max(e / (1 + 2 * b), 2));
                d.left = e + "%";
                break;
            case 1:
            case 4:
            case 7:
                d.left = e + "%";
                e = this.C.offsetWidth;
                b || e ? (b = b || e + 1, d.width = b + "px", d["margin-left"] = b / -2 + "px") : d.transform += " translateX(-50%)";
                break;
            case 2:
            case 5:
            case 8:
                d.right = 100 - e + "%"
        }
        b = .96 * this.j.Fn + 2;
        switch (f) {
            case 0:
            case 1:
            case 2:
                d.top = b + "%";
                break;
            case 3:
            case 4:
            case 5:
                d.top = b + "%";
                (c = c || this.element.clientHeight) ? (d.height = c + "px", d["margin-top"] = c / -2 + "px") : d.transform += " translateY(-50%)";
                break;
            case 6:
            case 7:
            case 8:
                d.bottom = 100 - b + "%"
        }
        g.Rm(this.element,
            d);
        if (this.D) {
            c = this.C.offsetHeight;
            d = 1;
            for (f = 0; f < a.length; f++) b = a[f], "string" === typeof b.text && (d += b.text.split("\n").length - 1, b.append || 0 === f || d++);
            c /= d;
            this.D.style.height = c + "px";
            this.D.style.width = c + "px";
            this.element.style.paddingLeft = c + 5 + "px";
            this.element.style.paddingRight = c + 5 + "px";
            a = Number(this.element.style.marginLeft.replace("px", "")) - c - 5;
            c = Number(this.element.style.marginRight.replace("px", "")) - c - 5;
            this.element.style.marginLeft = a + "px";
            this.element.style.marginRight = c + "px"
        }
    };
    g.k.lK = function(a) {
        var b;
        for (b = 0; b < a.length && a[b] === this.I[b]; b++);
        if (this.Fa || this.I.length > b) b = 0, this.Fa = !1, this.I = [], this.J = this.La = this.Ja = null, g.gf(this.C);
        for (; b < a.length; b++) Ueb(this, a[b])
    };
    g.k.PT = function() {
        return 0
    };
    g.k.OT = function() {
        return 0
    };
    g.k.toString = function() {
        return g.V.prototype.toString.call(this)
    };
    g.x(i5, g.vT);
    i5.prototype.Vs = function(a, b, c) {
        yeb(this.videoData.videoId, a.vssId, c)
    };
    i5.prototype.Xy = function(a) {
        if (this.audioTrack)
            for (var b = g.w(this.audioTrack.captionTracks), c = b.next(); !c.done; c = b.next()) g.uT(this.j, c.value);
        a()
    };
    g.x(j5, h5);
    j5.prototype.lK = function(a) {
        var b = this.u.j;
        h5.prototype.lK.call(this, a);
        for (a = a.length; a < b.length; a++) {
            var c = b[a];
            if (f && c.j === e) var d = f;
            else {
                d = {};
                Object.assign(d, c.j);
                Object.assign(d, Zfb);
                var e = c.j;
                var f = d
            }
            Ueb(this, c, d)
        }
    };
    var Zfb = {
        A4: !0
    };
    g.x(k5, h5);
    g.k = k5.prototype;
    g.k.sX = function() {
        g.Kp(this.Za)
    };
    g.k.w7 = function() {
        g.Sp(this.element, "ytp-rollup-mode");
        this.Uz(this.Bc, !0)
    };
    g.k.OT = function() {
        return this.B ? this.oa : this.Z
    };
    g.k.PT = function() {
        return this.B ? this.Z : this.oa
    };
    g.k.Uz = function(a, b) {
        this.Bc = a;
        if (this.u.params.Oq) {
            for (var c = 0, d = 0; d < this.I.length && c < a.length; d++) this.I[d] === a[c] && c++;
            0 < c && c < a.length && (a = this.I.concat(a.slice(c)));
            this.Pb = this.oa;
            this.Z = this.oa = 0;
            h5.prototype.Uz.call(this, a);
            Xeb(this, b)
        }
        h5.prototype.Uz.call(this, a)
    };
    g.x(l5, g.gE);
    l5.prototype.toString = function() {
        return g.gE.prototype.toString.call(this)
    };
    g.x(m5, g.gE);
    m5.prototype.toString = function() {
        return g.gE.prototype.toString.call(this)
    };
    var n5 = 0;
    g.x(o5, g.E);
    o5.prototype.u = function() {
        return []
    };
    o5.prototype.reset = function() {};
    g.x(p5, o5);
    p5.prototype.reset = function() {
        this.J = {};
        this.B = this.j = null;
        this.I = !0
    };
    p5.prototype.u = function(a, b) {
        a = a.firstChild;
        a.getAttribute("format");
        b = b || 0;
        Number.isFinite(b);
        a = Array.from(a.childNodes);
        a = g.w(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value, 1 === c.nodeType) switch (c.tagName) {
                case "head":
                    var d = c;
                    break;
                case "body":
                    var e = c
            }
        if (d)
            for (d = Array.from(d.childNodes), d = g.w(d), a = d.next(); !a.done; a = d.next())
                if (a = a.value, 1 === a.nodeType) switch (a.tagName) {
                    case "pen":
                        c = a.getAttribute("id");
                        var f = this.pens,
                            h = {},
                            l = a.getAttribute("p");
                        l && Object.assign(h, this.pens[l]);
                        l = r5(a, "b");
                        null != l && (h.bold = l);
                        l = r5(a, "i");
                        null != l && (h.italic = l);
                        l = r5(a, "u");
                        null != l && (h.underline = l);
                        l = s5(a, "et");
                        null != l && (h.charEdgeStyle = l);
                        l = s5(a, "of");
                        null != l && (h.offset = l);
                        l = u5(a, "bc");
                        null != l && (h.background = l);
                        l = u5(a, "ec");
                        null != l && (h.FK = l);
                        l = u5(a, "fc");
                        null != l && (h.color = l);
                        l = s5(a, "fs");
                        null != l && 0 !== l && (h.fontFamily = l);
                        l = q5(a, "sz");
                        void 0 !== l && (h.fontSizeIncrement = l / 100 - 1);
                        l = q5(a, "bo");
                        void 0 !== l && (h.backgroundOpacity = l / 255);
                        l = q5(a, "fo");
                        void 0 !== l && (h.textOpacity = l / 255);
                        l = s5(a, "rb");
                        null != l && 10 !== l &&
                            0 !== l && (h.Rf = 10 < l ? l - 1 : l);
                        a = s5(a, "hg");
                        null != a && (h.HU = a);
                        f[c] = h;
                        break;
                    case "ws":
                        c = a.getAttribute("id");
                        this.ea[c] = afb(this, a);
                        break;
                    case "wp":
                        c = a.getAttribute("id"), this.T[c] = bfb(this, a)
                }
        if (e) {
            d = [];
            e = Array.from(e.childNodes);
            e = g.w(e);
            for (a = e.next(); !a.done; a = e.next())
                if (a = a.value, 1 === a.nodeType) switch (a.tagName) {
                    case "w":
                        this.j = cfb(this, a, b, !1);
                        (a = this.J[this.j.id]) && a.end > this.j.start && (a.end = this.j.start);
                        this.J[this.j.id] = this.j;
                        d.push(this.j);
                        break;
                    case "p":
                        l = b;
                        c = [];
                        f = a.getAttribute("w") || this.D;
                        h = !!r5(a, "a");
                        l = (q5(a, "t") || 0) + l;
                        var m = q5(a, "d") || 5E3;
                        h || (!this.I && this.B && this.B.windowId === f && this.B.end > l && (this.B.end = l), this.B && "\n" === this.B.text && (this.B.text = ""));
                        var n = h ? 6 : 5,
                            p = a.getAttribute("p");
                        p = p ? this.pens[p] : null;
                        var q = Array.from(a.childNodes);
                        q.length && (this.I = null != a.getAttribute("d"));
                        for (var t = 0; t < q.length; t++) {
                            var v = q[t],
                                z = void 0;
                            0 < t && (h = !0);
                            var B = void 0;
                            1 === v.nodeType && (B = v);
                            if (B && "s" === B.tagName) {
                                if ((v = (v = B.getAttribute("p")) ? this.pens[v] : null) && v.Rf && (1 === v.Rf ? (v = q.slice(t, t +
                                        4), 4 === v.length && (z = $eb(l, m, f, h, n, v, this.pens), t += 3)) : z = $eb(l, m, f, h, n, [B], this.pens)), !z) {
                                    var G = B;
                                    z = l;
                                    B = m;
                                    v = f;
                                    var O = h,
                                        N = n,
                                        K = G.textContent ? G.textContent : "",
                                        W = G.getAttribute("p");
                                    W = W ? this.pens[W] : null;
                                    G = q5(G, "t") || 0;
                                    z = new l5(z + G, B - G, N, v, K, O, W)
                                }
                            } else z = new l5(l, m, n, f, v.textContent || "", h, p);
                            c.push(z);
                            this.B = z
                        }
                        if (0 < c.length)
                            for (c[0].windowId === this.D && (this.j = cfb(this, a, b, !0), d.push(this.j)), a = g.w(c), c = a.next(); !c.done; c = a.next()) c = c.value, c.windowId = this.j.id, this.j.j.push(c), d.push(c)
                }
            b = d
        } else b = [];
        return b
    };
    var $fb = new Map([
        [9, 1],
        [10, 1],
        [11, 2],
        [12, 3],
        [13, 4],
        [14, 5]
    ]);
    g.x(v5, o5);
    v5.prototype.reset = function() {
        this.B.clear()
    };
    v5.prototype.u = function(a, b) {
        var c = JSON.parse(a);
        if (!c) return [];
        if (c.pens) {
            a = 0;
            for (var d = g.w(c.pens), e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = {},
                    h = e.pParentId;
                h && Object.assign(f, this.j.get(h));
                e.bAttr && (f.bold = !0);
                e.iAttr && (f.italic = !0);
                e.uAttr && (f.underline = !0);
                h = e.ofOffset;
                null != h && (f.offset = h);
                void 0 !== e.szPenSize && (f.fontSizeIncrement = e.szPenSize / 100 - 1);
                h = e.etEdgeType;
                null != h && (f.charEdgeStyle = h);
                void 0 !== e.ecEdgeColor && (f.FK = w5(e.ecEdgeColor));
                h = e.fsFontStyle;
                null != h && 0 !== h && (f.fontFamily =
                    h);
                void 0 !== e.fcForeColor && (f.color = w5(e.fcForeColor));
                void 0 !== e.foForeAlpha && (f.textOpacity = e.foForeAlpha / 255);
                void 0 !== e.bcBackColor && (f.background = w5(e.bcBackColor));
                void 0 !== e.boBackAlpha && (f.backgroundOpacity = e.boBackAlpha / 255);
                (h = e.rbRuby) && 10 !== h && (f.Rf = 10 < h ? h - 1 : h, f.En = $fb.get(f.Rf));
                e.hgHorizGroup && (f.HU = e.hgHorizGroup);
                this.j.set(a++, f)
            }
        }
        if (c.wsWinStyles)
            for (a = 0, d = g.w(c.wsWinStyles), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wsParentId) ? Object.assign(f, this.D.get(h)) : Object.assign(f,
                this.I), void 0 !== e.mhModeHint && (f.gz = e.mhModeHint), void 0 !== e.juJustifCode && (f.textAlign = e.juJustifCode), void 0 !== e.pdPrintDir && (f.di = e.pdPrintDir), void 0 !== e.sdScrollDir && (f.CP = e.sdScrollDir), void 0 !== e.wfcWinFillColor && (f.windowColor = w5(e.wfcWinFillColor)), void 0 !== e.wfoWinFillAlpha && (f.windowOpacity = e.wfoWinFillAlpha / 255), this.D.set(a++, f);
        if (c.wpWinPositions)
            for (a = 0, d = g.w(c.wpWinPositions), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wpParentId) && Object.assign(f, this.C.get(h)), void 0 !== e.ahHorPos &&
                (f.Lj = e.ahHorPos), void 0 !== e.apPoint && (f.Bl = e.apPoint), void 0 !== e.avVerPos && (f.Fn = e.avVerPos), void 0 !== e.ccCols && (f.Mr = e.ccCols), void 0 !== e.rcRows && (f.Oq = e.rcRows), this.C.set(a++, f);
        if (c.events) {
            a = [];
            c = g.w(c.events);
            for (d = c.next(); !d.done; d = c.next()) {
                var l = d.value;
                d = (l.tStartMs || 0) + b;
                e = l.dDurationMs || 0;
                if (l.id) f = String(l.id), d = dfb(this, l, d, e, f), a.push(d), this.B.set(f, d);
                else {
                    l.wWinId ? f = l.wWinId.toString() : (f = "_" + n5++, h = dfb(this, l, d, e, f), a.push(h), this.B.set(f, h));
                    0 === e && (e = 5E3);
                    h = this.B.get(f);
                    var m = !!l.aAppend,
                        n = m ? 6 : 5,
                        p = l.segs,
                        q = null;
                    l.pPenId && (q = this.j.get(l.pPenId));
                    for (l = 0; l < p.length; l++) {
                        var t = p[l],
                            v = t.utf8;
                        if (v) {
                            var z = t.tOffsetMs || 0,
                                B = null;
                            t.pPenId && (B = this.j.get(t.pPenId));
                            if (2 === (null != h.params.gz ? h.params.gz : 1 < h.j.length ? 1 : 0) && m && "\n" === v) continue;
                            if (t = B && 1 === B.Rf)
                                if (t = l, t + 3 >= p.length || !p[t + 1].pPenId || !p[t + 2].pPenId || !p[t + 3].pPenId) t = !1;
                                else {
                                    var G = p[t + 1].pPenId;
                                    (G = this.j.get(G)) && G.Rf && 2 === G.Rf ? (G = p[t + 2].pPenId, G = this.j.get(G), !G || !G.Rf || 3 > G.Rf ? t = !1 : (G = p[t + 3].pPenId, t = (G = this.j.get(G)) &&
                                        G.Rf && 2 === G.Rf ? !0 : !1)) : t = !1
                                }
                            if (t) {
                                z = p[l + 1].utf8;
                                t = p[l + 3].utf8;
                                G = p[l + 2].utf8;
                                var O = this.j.get(p[l + 2].pPenId);
                                v = Zeb(v, z, G, t, O);
                                m = new l5(d, e, n, f, v, m, B);
                                l += 3
                            } else m = new l5(d + z, e - z, n, h.id, v, m, B || q);
                            m && (a.push(m), h.j.push(m))
                        }
                        m = !0
                    }
                }
            }
            b = a
        } else b = [];
        return b
    };
    ffb.prototype.clear = function() {
        this.B = this.time = this.mode = 0;
        this.j = [];
        this.reset()
    };
    ffb.prototype.reset = function() {
        this.mode = 0;
        this.C.reset(0);
        this.D.reset(1)
    };
    var gfb = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139,
        12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255
    ];
    x5.prototype.set = function(a) {
        this.type = a
    };
    x5.prototype.get = function() {
        return this.type
    };
    y5.prototype.clear = function() {
        this.state = 0
    };
    y5.prototype.update = function() {
        this.state = 2 === this.state ? 1 : 0
    };
    y5.prototype.Ke = function() {
        return 0 !== this.state
    };
    y5.prototype.matches = function(a, b) {
        return this.Ke() && a === this.Au && b === this.Ir
    };
    lfb.prototype.reset = function() {
        this.timestamp = this.j = 0
    };
    z5.prototype.updateTime = function(a) {
        for (var b = 1; 15 >= b; ++b)
            for (var c = 1; 32 >= c; ++c) this.B[b][c].timestamp = a
    };
    z5.prototype.debugString = function() {
        for (var a = "\n", b = 1; 15 >= b; ++b) {
            for (var c = 1; 32 >= c; ++c) {
                var d = this.B[b][c];
                a = 0 === d.j ? a + "_" : a + String.fromCharCode(d.j)
            }
            a += "\n"
        }
        return a
    };
    z5.prototype.reset = function(a) {
        for (var b = 0; 15 >= b; b++)
            for (var c = 0; 32 >= c; c++) this.B[b][c].reset();
        this.C = a;
        this.j = 0;
        this.u = this.row = 1
    };
    var mfb = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632],
        nfb = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251],
        ofb = [193, 201, 211, 218, 220, 252, 8216, 161, 42, 39, 9473, 169, 8480, 183, 8220, 8221, 192, 194, 199, 200, 202, 203, 235,
            206, 207, 239, 212, 217, 249, 219, 171, 187
        ],
        pfb = [195, 227, 205, 204, 236, 210, 242, 213, 245, 123, 125, 92, 94, 95, 124, 126, 196, 228, 214, 246, 223, 165, 164, 9475, 197, 229, 216, 248, 9487, 9491, 9495, 9499];
    tfb.prototype.reset = function(a, b) {
        this.D = b;
        this.style.set(2);
        this.u = this.I;
        this.C = this.J;
        this.j = this.u;
        var c = (a << 2) + (b << 1);
        this.I.reset(c);
        this.J.reset(c);
        this.text.reset((a << 2) + (b << 1) + 1)
    };
    efb.prototype.reset = function(a) {
        this.D = a;
        this.u.clear();
        this.C = this.B;
        this.B.reset(a, 0);
        this.I.reset(a, 1)
    };
    xfb.prototype.C = function() {};
    g.x(E5, xfb);
    E5.prototype.C = function(a, b, c, d, e) {
        if (c < d) {
            var f = "_" + n5++;
            c = c / 1E3 - this.I;
            d = d / 1E3 - this.I;
            a = new m5(c, d - c, 5, f, {
                textAlign: 0,
                Bl: 0,
                Lj: 2.5 * b,
                Fn: 5.33 * a
            });
            e = new l5(c, d - c, 5, f, e);
            this.u.push(a);
            this.u.push(e)
        }
    };
    g.x(H5, o5);
    H5.prototype.u = function(a) {
        a = new E5(a, a.byteLength, this.B);
        if (yfb(a)) {
            for (; a.byteOffset < a.j.byteLength;)
                for (0 === a.version ? a.B = G5(a) * (1E3 / 45) : 1 === a.version && (a.B = 4294967296 * G5(a) + G5(a)), a.D = F5(a); 0 < a.D; a.D--) {
                    var b = F5(a),
                        c = F5(a),
                        d = F5(a);
                    b & 4 && (b & 3) === this.track && (0 === this.track || 1 === this.track) && (b = this.j, b.j.push({
                        time: a.B,
                        type: this.track,
                        PS: c,
                        QS: d,
                        order: b.j.length
                    }))
                }
            kfb(this.j, a);
            return a.u
        }
        return []
    };
    H5.prototype.reset = function() {
        this.j.clear()
    };
    g.x(I5, o5);
    I5.prototype.u = function(a, b) {
        var c = [];
        a = a.split(agb);
        for (var d = 1; d < a.length; d++) {
            var e = a[d],
                f = b;
            if ("" !== e && !bgb.test(e)) {
                var h = cgb.exec(e);
                if (h && 4 <= h.length) {
                    var l = Bfb(h[1]),
                        m = Bfb(h[2]) - l;
                    l += f;
                    var n = (h = h[3]) ? h.split(" ") : [];
                    h = {};
                    var p = null;
                    var q = "";
                    var t = null,
                        v = "";
                    n = g.w(n);
                    for (var z = n.next(); !z.done; z = n.next())
                        if (z = z.value.split(":"), 2 === z.length) {
                            var B = z[1];
                            switch (z[0]) {
                                case "line":
                                    z = B.split(",");
                                    z[0].endsWith("%") && (p = z[0], h.Fn = Number.parseInt(p, 10), 2 === z.length && (q = z[1].trim()));
                                    break;
                                case "position":
                                    z =
                                        B.split(",");
                                    t = z[0];
                                    h.Lj = Number.parseInt(t, 10);
                                    2 === z.length && (v = z[1].trim());
                                    break;
                                case "align":
                                    switch (B) {
                                        case "start":
                                            h.textAlign = 0;
                                            break;
                                        case "middle":
                                            h.textAlign = 2;
                                            break;
                                        case "end":
                                            h.textAlign = 1
                                    }
                            }
                        }
                    p || q || (q = "end");
                    if (!t) switch (h.textAlign) {
                        case 0:
                            h.Lj = 0;
                            break;
                        case 1:
                            h.Lj = 100;
                            break;
                        case 2:
                            h.Lj = 50
                    }
                    if (null != h.textAlign) {
                        p = 0;
                        switch (q) {
                            case "center":
                                p += 3;
                                break;
                            case "end":
                                p += 6;
                                break;
                            default:
                                p += 0
                        }
                        switch (v) {
                            case "line-left":
                                p += 0;
                                break;
                            case "center":
                                p += 1;
                                break;
                            case "line-right":
                                p += 2;
                                break;
                            default:
                                switch (h.textAlign) {
                                    case 0:
                                        p +=
                                            0;
                                        break;
                                    case 2:
                                        p += 1;
                                        break;
                                    case 1:
                                        p += 2
                                }
                        }
                        q = 0 > p || 8 < p ? 7 : p;
                        h.Bl = q
                    }
                    e = e.substring(cgb.lastIndex).replace(/[\x01-\x09\x0b-\x1f]/g, "");
                    v = h;
                    h = e;
                    e = {};
                    if (0 > h.indexOf("<") && 0 > h.indexOf("&")) f = Cfb(l, m, 5, v), m = new l5(l, m, 5, f.id, h, !1, g.fd(e) ? void 0 : e), c.push(f), c.push(m), f.j.push(m);
                    else
                        for (q = h.split(dgb), 1 === q.length ? (h = 5, v = Cfb(l, m, h, v)) : (p = h = 6, v = Object.assign({
                                Mr: 32
                            }, v), v = new m5(l, m, p, "_" + n5++, v)), c.push(v), p = l, t = 0; t < q.length; t++) n = q[t], 0 === t % 2 ? (z = g.b8a("<html>" + n + "</html>"), z.getElementsByTagName("parsererror").length ?
                            (B = z.createElement("span"), B.appendChild(z.createTextNode(n))) : B = z.firstChild, Afb(this, p, m - (p - l), h, v, 0 < t, B, e, c)) : p = Bfb(n) + f
                }
                cgb.lastIndex = 0
            }
        }
        return c
    };
    var bgb = /^NOTE/,
        agb = /(?:\r\n|\r|\n){2,}/,
        cgb = RegExp("^((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})(?:[\\t ]*)(.*)(?:\\r\\n|\\r|\\n)", "gm"),
        dgb = RegExp("<((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})>");
    g.kW.fv(I5, {
        u: "wvppt"
    });
    g.x(J5, g.E);
    J5.prototype.clear = function() {
        this.parser && this.parser.dispose();
        this.parser = null
    };
    J5.prototype.reset = function() {
        this.parser && this.parser.reset()
    };
    J5.prototype.qa = function() {
        g.E.prototype.qa.call(this);
        this.clear()
    };
    var S5 = {
        windowColor: "#080808",
        windowOpacity: 0,
        textAlign: 2,
        Bl: 7,
        Lj: 50,
        Fn: 100,
        isDefault: !0,
        Ie: {
            background: "#080808",
            backgroundOpacity: .75,
            charEdgeStyle: 0,
            color: "#fff",
            fontFamily: 4,
            fontSizeIncrement: 0,
            textOpacity: 1,
            offset: 1
        }
    };
    g.x(K5, g.sT);
    g.k = K5.prototype;
    g.k.qa = function() {
        if (this.C || this.oa) {
            var a = this.F.Ce();
            a && !a.isDisposed() && a.Tx()
        } else Yfb(this, !1);
        g.sT.prototype.qa.call(this)
    };
    g.k.jw = function() {
        if (this.Za) return this.C || this.oa;
        var a = this.player.getAudioTrack();
        if (this.Y.K("html5_honor_caption_availabilities_in_audio_track")) {
            if (!a.captionTracks.length) return !1;
            if (!this.j) return !0
        }
        a = ueb(a, g.TK(this.Y));
        return "CAPTIONS_INITIAL_STATE_ON_REQUIRED" === a ? !0 : "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" === a ? L5(this) : Ofb(this) || L5(this) ? !0 : Pfb(this)
    };
    g.k.load = function() {
        var a = this;
        g.sT.prototype.load.call(this);
        this.J = this.player.getAudioTrack();
        this.j ? this.u && (this.Ya.clear(), this.C ? Tfb(this, !0) : 3 !== this.player.getPresentingPlayerType() && this.j.Vs(this.u, "json3", function(b, c, d, e) {
            b && (a.Y.K("html5_modify_caption_vss_logging") && (a.videoData.Jw = a.u || void 0), a.j.rO() && (a.Fa = [], a.F.lf("captions"), g.Hp(a.Ja), a.Ya.reset()), b = Ifb(a.Ya, b, c, d, e), a.player.Ge(b, void 0, a.ib), !a.ya || a.oa || O5(a) || g.JK(a.Y) || g.CK(a.Y) || g.DK(a.Y) || "shortspage" === a.Y.Ja || a.player.isInline() ||
                (g.Lp(a.La), b = Yeb({
                    Bl: 0,
                    Lj: 5,
                    Fn: 5,
                    Oq: 2,
                    textAlign: 0,
                    di: 0,
                    lang: "en-GB"
                }), a.Oa = [b], c = ["Click ", " for settings"], a.kb || (d = new g.uQ(g.zDa()), g.J(a, d), a.kb = d.element), d = b.end - b.start, (e = g.oL(a.u)) && a.Oa.push(new l5(b.start, d, 0, b.id, e)), a.Oa.push(new l5(b.start, d, 0, b.id, c[0]), new l5(b.start, d, 0, b.id, a.kb, !0), new l5(b.start, d, 0, b.id, c[1], !0)), a.player.Ge(a.Oa), g.Jp(a.La)), !a.ya || a.oa || O5(a) || (g.TK(a.Y) ? Q5(a, !0) : R5(a, !0), a.J && (a.J.C = a.u), a.player.lr()), a.ya = !1)
        }), this.C || this.oa || O5(this) || this.player.Na("captionschanged",
            g.pL(this.u))) : (this.j = Qfb(this), g.J(this, this.j), this.j.Xy(function() {
            Sfb(a)
        }))
    };
    g.k.unload = function() {
        this.C && this.u ? Tfb(this, !1) : (this.La && g.Lp(this.La), this.player.lf("captions"), this.Fa = [], this.j && this.j.ir(), this.Ya.clear(), this.T && this.player.Ge(this.T), this.WP());
        g.sT.prototype.unload.call(this);
        this.player.lr();
        this.player.Na("captionschanged", {})
    };
    g.k.create = function() {
        this.jw() && this.load();
        var a;
        a: {
            var b, c, d;
            if (this.Y.K("suggest_caption_correction_menu_item") && this.Y.K("web_player_nitrate_promo_tooltip") && (null == (b = this.videoData.getPlayerResponse()) ? 0 : null == (c = b.captions) ? 0 : null == (d = c.playerCaptionsTracklistRenderer) ? 0 : d.openTranscriptCommand)) {
                var e, f;
                if (b = null == (a = this.videoData.getPlayerResponse()) ? void 0 : null == (e = a.captions) ? void 0 : null == (f = e.playerCaptionsTracklistRenderer) ? void 0 : f.captionTracks)
                    for (a = g.w(b), e = a.next(); !e.done; e = a.next())
                        if (e =
                            e.value, "asr" === e.kind && "en" === e.languageCode) {
                            a = !0;
                            break a
                        }
            }
            a = !1
        }
        a && this.F.ma("showpromotooltip", this.I.element)
    };
    g.k.e8 = function() {
        for (var a = this.F.Ce().ub().textTracks, b = null, c = 0; c < a.length; c++)
            if ("showing" === a[c].mode) a: {
                b = a[c].id;
                for (var d = g.tT(this.j.j, !0), e = 0; e < d.length; e++)
                    if (d[e].toString() === b) {
                        b = d[e];
                        break a
                    }
                b = null
            }(this.loaded ? this.u : null) !== b && P5(this, b, !0)
    };
    g.k.d$ = function() {
        !this.u && this.C || this.unload()
    };
    g.k.onCueRangeEnter = function(a) {
        this.Fa.push(a);
        g.Hp(this.Ja)
    };
    g.k.onCueRangeExit = function(a) {
        g.Ab(this.Fa, a);
        this.j instanceof g5 && this.j.I && this.player.ip([a]);
        g.Hp(this.Ja)
    };
    g.k.getCaptionWindowContainerId = function() {
        return this.I.element.id
    };
    g.k.Z8 = function() {
        Xfb(this, this.Oa);
        this.Oa = null
    };
    g.k.TP = function() {
        var a = this;
        if (!this.yb || !this.C) {
            this.Ja.stop();
            g.gba(this.Wa);
            this.Fa.sort(g.hE);
            var b = this.Fa;
            if (this.T) {
                var c = g.Wn(b, function(f) {
                    return -1 === this.T.indexOf(f)
                }, this);
                c.length && (b = c)
            }
            b = g.w(b);
            for (c = b.next(); !c.done; c = b.next()) Vfb(this, c.value);
            b = {};
            c = g.w(Object.entries(this.Z));
            for (var d = c.next(); !d.done; b = {
                    Yt: b.Yt,
                    pm: b.pm
                }, d = c.next()) {
                var e = g.w(d.value);
                d = e.next().value;
                e = e.next().value;
                b.Yt = d;
                b.pm = e;
                this.Wa[b.Yt] ? (b.pm.element.parentNode || (b.pm instanceof k5 || b.pm instanceof j5 || g.Yc(this.Z, function(f) {
                    return function(h, l) {
                        l !== f.Yt && h.u.params.Bl === f.pm.u.params.Bl && h.u.params.Lj === f.pm.u.params.Lj && h.u.params.Fn === f.pm.u.params.Fn && (h.dispose(), delete a.Z[l]);
                        return l === f.Yt
                    }
                }(b), this), this.I.element.appendChild(b.pm.element)), b.pm.Uz(this.Wa[b.Yt])) : (b.pm.dispose(), delete this.Z[b.Yt])
            }
        }
    };
    g.k.e9 = function() {
        Mfb(this, {}, !0);
        this.player.Na("captionssettingschanged")
    };
    g.k.S3 = function() {
        var a = S5.Ie;
        a = {
            background: a.background,
            backgroundOpacity: a.backgroundOpacity,
            charEdgeStyle: a.charEdgeStyle,
            color: a.color,
            fontFamily: a.fontFamily,
            fontSizeIncrement: a.fontSizeIncrement,
            fontStyle: a.bold && a.italic ? 3 : a.bold ? 1 : a.italic ? 2 : 0,
            textOpacity: a.textOpacity,
            windowColor: S5.windowColor,
            windowOpacity: S5.windowOpacity
        };
        var b = Ceb() || {};
        null != b.background && (a.background = b.background);
        null != b.backgroundOverride && (a.backgroundOverride = b.backgroundOverride);
        null != b.backgroundOpacity && (a.backgroundOpacity =
            b.backgroundOpacity);
        null != b.backgroundOpacityOverride && (a.backgroundOpacityOverride = b.backgroundOpacityOverride);
        null != b.charEdgeStyle && (a.charEdgeStyle = b.charEdgeStyle);
        null != b.charEdgeStyleOverride && (a.charEdgeStyleOverride = b.charEdgeStyleOverride);
        null != b.color && (a.color = b.color);
        null != b.colorOverride && (a.colorOverride = b.colorOverride);
        null != b.fontFamily && (a.fontFamily = b.fontFamily);
        null != b.fontFamilyOverride && (a.fontFamilyOverride = b.fontFamilyOverride);
        null != b.fontSizeIncrement && (a.fontSizeIncrement =
            b.fontSizeIncrement);
        null != b.fontSizeIncrementOverride && (a.fontSizeIncrementOverride = b.fontSizeIncrementOverride);
        null != b.fontStyle && (a.fontStyle = b.fontStyle);
        null != b.fontStyleOverride && (a.fontStyleOverride = b.fontStyleOverride);
        null != b.textOpacity && (a.textOpacity = b.textOpacity);
        null != b.textOpacityOverride && (a.textOpacityOverride = b.textOpacityOverride);
        null != b.windowColor && (a.windowColor = b.windowColor);
        null != b.windowColorOverride && (a.windowColorOverride = b.windowColorOverride);
        null != b.windowOpacity &&
            (a.windowOpacity = b.windowOpacity);
        null != b.windowOpacityOverride && (a.windowOpacityOverride = b.windowOpacityOverride);
        return a
    };
    g.k.MY = function(a, b) {
        var c = {};
        Object.assign(c, Ceb());
        Object.assign(c, a);
        Mfb(this, c, b);
        this.player.Na("captionssettingschanged")
    };
    g.k.WP = function() {
        !this.C && this.loaded && (g.Uc(this.Z, function(a, b) {
            a.dispose();
            delete this.Z[b]
        }, this), this.TP())
    };
    g.k.rh = function(a, b) {
        switch (a) {
            case "fontSize":
                if (isNaN(b)) break;
                var c = g.pe(b, -2, 4);
                this.MY({
                    fontSizeIncrement: c
                });
                return c;
            case "reload":
                b && !this.C && P5(this, this.u, !0);
                break;
            case "stickyLoading":
                void 0 !== b && this.Y.I && (g.TK(this.Y) ? Q5(this, !!b) : R5(this, !!b));
                break;
            case "track":
                if (!this.j) return {};
                if (b) {
                    if (this.C) break;
                    if (!g.Pa(b)) break;
                    if (g.fd(b)) {
                        P5(this, null, !0);
                        break
                    }
                    a = g.tT(this.j.j, !0);
                    for (var d = 0; d < a.length; d++) {
                        var e = a[d];
                        e.languageCode !== b.languageCode || c && (e.languageName !== b.languageName ||
                            this.Y.K("html5_enable_caption_changes_for_mosaic") && (e.captionId || "") !== (b.captionId || "")) || (c = b.translationLanguage ? web(e, b.translationLanguage) : e)
                    }
                    this.qI(b.position);
                    !c || c === this.u && this.loaded || (a = g.kJ(), b = g.qL(c), a.length && b === a[a.length - 1] || (a.push(b), g.Vz("yt-player-caption-language-preferences", a)), (a = veb(this.Y)) && !this.F.isInline() && g.Vz("yt-player-caption-sticky-language", b, 86400 * a), P5(this, c, !0))
                } else return this.loaded && this.u && !O5(this) ? g.pL(this.u) : {};
                return "";
            case "tracklist":
                return this.j ?
                    g.hm(g.tT(this.j.j, !(!b || !b.includeAsr)), function(f) {
                        return g.pL(f)
                    }) : [];
            case "translationLanguages":
                return this.j ? this.j.C.map(function(f) {
                    return Object.assign({}, f)
                }) : [];
            case "sampleSubtitles":
                this.C || void 0 === b || Yfb(this, !!b);
                break;
            case "sampleSubtitlesCustomized":
                this.C || Yfb(this, !!b, b);
                break;
            case "recommendedTranslationLanguages":
                return g.kJ()
        }
    };
    g.k.getOptions = function() {
        var a = "reload fontSize track tracklist translationLanguages sampleSubtitle".split(" ");
        this.Y.I && a.push("stickyLoading");
        return a
    };
    g.k.bq = function() {
        var a = this.u;
        this.Y.K("html5_modify_caption_vss_logging") && (a = this.videoData.Jw || null);
        if (a) {
            var b = a.vssId;
            a.translationLanguage && b && (b = "t" + b + "." + g.qL(a));
            return {
                cc: b
            }
        }
        return {}
    };
    g.k.R9 = function() {
        this.isSubtitlesOn() ? (g.TK(this.Y) ? Q5(this, !1) : R5(this, !1), this.Y.K("html5_modify_caption_vss_logging") && (this.videoData.Jw = void 0), this.unload(), L5(this, !0) && P5(this, M5(this), !1)) : this.qY()
    };
    g.k.qY = function() {
        this.isSubtitlesOn() || P5(this, O5(this) || !this.u ? N5(this, !0) : this.u, !0)
    };
    g.k.isSubtitlesOn = function() {
        return !!this.loaded && !!this.u && !O5(this)
    };
    g.k.U5 = function() {
        var a = O5(this);
        L5(this, a) ? P5(this, this.player.getAudioTrack().j, !1) : this.videoData.captionTracks.length && (this.loaded && (this.unload(), this.Y.K("html5_honor_caption_availabilities_in_audio_track") && (this.u = null, this.j && (this.j.dispose(), this.j = null))), this.jw() && (a ? P5(this, N5(this), !1) : this.load()))
    };
    g.k.qI = function(a) {
        a && (this.ea = {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left,
            width: 1 - a.left - a.right,
            height: 1 - a.top - a.bottom
        }, this.I.element.style.top = 100 * this.ea.top + "%", this.I.element.style.left = 100 * this.ea.left + "%", this.I.element.style.width = 100 * this.ea.width + "%", this.I.element.style.height = 100 * this.ea.height + "%", this.Y.K("html5_enable_caption_changes_for_mosaic") && (this.I.element.style.position = "absolute", a = Wfb(this))) && (this.I.element.style.width = a.width + "px", this.I.element.style.height =
            a.height + "px")
    };
    g.k.G6 = function() {
        var a = this.F.Ce();
        a && !a.isDisposed() && a.Tx();
        this.F.isFullscreen() ? (this.C = this.Za = !0, this.loaded && Sfb(this)) : (this.Za = "3" === this.Y.controlsType, this.C = Lfb(this));
        P5(this, this.u)
    };
    g.k.aJ = function() {
        var a, b, c, d = null == (a = this.videoData.getPlayerResponse()) ? void 0 : null == (b = a.captions) ? void 0 : null == (c = b.playerCaptionsTracklistRenderer) ? void 0 : c.openTranscriptCommand;
        d && this.player.Na("innertubeCommand", d)
    };
    g.kW.fv(K5, {
        TP: "smucd"
    });
    g.rT("captions", K5);
})(_yt_player);