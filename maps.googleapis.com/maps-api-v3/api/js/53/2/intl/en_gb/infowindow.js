google.maps.__gjsload__('infowindow', function(_) {
    var wK = function(a) {
            return !!a.infoWindow.get("logAsInternal")
        },
        YBa = function() {
            this.g = new _.w.Set
        },
        ZBa = function(a, b) {
            if (1 === a.g.size) {
                var c = _.v(Array, "from").call(Array, _.v(a.g, "values").call(a.g))[0];
                c.ul !== b.ul && (c.set("map", null), a.g.delete(c))
            }
            a.g.add(b)
        },
        yK = function(a) {
            var b = this;
            this.j = this.D = null;
            this.F = this.G = !1;
            this.dn = a.dn;
            this.shouldFocus = a.shouldFocus;
            this.fa = document.createElement("div");
            this.fa.style.cursor = "default";
            this.fa.style.position = "absolute";
            this.fa.style.left = this.fa.style.top =
                "0";
            a.Bd.floatPane.appendChild(this.fa);
            this.anchor = _.io("div", this.fa);
            this.o = _.io("div", this.anchor);
            this.zb = _.io("div", this.o);
            this.zb.setAttribute("role", "dialog");
            this.zb.tabIndex = -1;
            this.J = _.io("div", this.o);
            this.g = _.io("div", this.zb);
            _.kva(this.fa);
            _.Qn(this.zb, "gm-style-iw");
            _.Qn(this.anchor, "gm-style-iw-a");
            _.Qn(this.o, "gm-style-iw-t");
            _.Qn(this.J, "gm-style-iw-tc");
            _.Qn(this.zb, "gm-style-iw-c");
            _.Qn(this.g, "gm-style-iw-d");
            _.gj.g && !_.gj.F && (a.Sb ? this.zb.style.paddingLeft = "0" : this.zb.style.paddingRight =
                "0", this.zb.style.paddingBottom = "0", this.g.style.overflow = "scroll");
            xK(this, !1);
            _.kf(this.fa, "mousedown", _.af);
            _.kf(this.fa, "mouseup", _.af);
            _.kf(this.fa, "mousemove", _.af);
            _.kf(this.fa, "pointerdown", _.af);
            _.kf(this.fa, "pointerup", _.af);
            _.kf(this.fa, "pointermove", _.af);
            _.kf(this.fa, "dblclick", _.af);
            _.kf(this.fa, "click", _.af);
            _.kf(this.fa, "touchstart", _.af);
            _.kf(this.fa, "touchend", _.af);
            _.kf(this.fa, "touchmove", _.af);
            _.wn(this.fa, "contextmenu", this, this.nC);
            _.wn(this.fa, "wheel", this, _.af);
            _.wn(this.fa,
                "mousewheel", this, _.Ye);
            _.wn(this.fa, "MozMousePixelScroll", this, _.Ye);
            this.h = new _.Fr({
                Hi: new _.R(8, 8),
                Nj: new _.Ag(14, 14),
                offset: new _.R(-6, -6),
                ownerElement: this.zb
            });
            this.zb.appendChild(this.h.element);
            _.kf(this.h.element, "click", function(c) {
                _.af(c);
                _.N(b, "closeclick");
                b.set("open", !1)
            });
            this.C = new _.Fi(function() {
                !b.G && b.get("content") && b.get("visible") && (_.N(b, "domready"), b.G = !0)
            }, 0);
            this.H = _.kf(this.fa, "keydown", function(c) {
                "Escape" !== c.key && "Esc" !== c.key || !b.zb.contains(document.activeElement) ||
                    (c.stopPropagation(), _.N(b, "closeclick"), b.set("open", !1))
            })
        },
        $Ba = function(a) {
            var b = !!a.get("open"),
                c = a.get("content");
            c = b ? c : null;
            if (c == a.j) xK(a, b && a.get("position"));
            else {
                if (a.j) {
                    var d = a.j.parentNode;
                    d == a.g && d.removeChild(a.j)
                }
                c && (a.G = !1, a.g.appendChild(c));
                xK(a, b && a.get("position"));
                a.j = c;
                a.resize()
            }
        },
        aCa = function(a) {
            var b = a.get("pixelOffset") || new _.Ag(0, 0),
                c = new _.Ag(a.zb.offsetWidth, a.zb.offsetHeight);
            a = -b.height + c.height + 11 + 60;
            var d = b.height + 60,
                e = -b.width + c.width / 2 + 60;
            c = b.width + c.width / 2 + 60;
            0 > b.height && (d -= b.height);
            return {
                top: a,
                bottom: d,
                left: e,
                right: c
            }
        },
        xK = function(a, b) {
            a.fa.style.visibility = b ? "" : "hidden";
            b && a.shouldFocus && (a.focus(), a.shouldFocus = !1);
            b ? bCa(a) : a.F = !1
        },
        bCa = function(a) {
            !a.F && a.get("open") && a.get("visible") && a.get("position") && (_.N(a, "visible"), a.F = !0)
        },
        zK = function(a) {
            var b = a.get("position");
            if (b && a.get("pixelOffset")) {
                var c = aCa(a),
                    d = b.x - c.left,
                    e = b.y - c.top,
                    f = b.x + c.right;
                c = b.y + c.bottom;
                _.ho(a.anchor, b);
                b = a.get("zIndex");
                _.jo(a.fa, _.Vd(b) ? b : e + 60);
                a.set("pixelBounds", _.Ii(d,
                    e, f, c))
            }
        },
        cCa = function(a, b) {
            var c = a.__gm;
            a = c.get("panes");
            c = c.get("innerContainer");
            b = {
                Bd: a,
                Sb: _.iw.Sb(),
                dn: c,
                shouldFocus: b
            };
            return new yK(b)
        },
        AK = function(a, b, c) {
            var d = this;
            this.model = a;
            this.isOpen = !0;
            this.g = this.o = this.ia = null;
            this.h = [];
            var e = a.get("shouldFocus");
            this.C = cCa(b, e);
            var f = b.__gm;
            (e = b instanceof _.yf) && c ? c.then(function(l) {
                d.isOpen && (d.ia = l, d.g = new _.pG(function(m) {
                    d.o = new _.ar(b, l, m, function() {});
                    l.sb(d.o);
                    return d.o
                }), d.g.bindTo("latLngPosition", a, "position"), dCa(d))
            }) : (this.g = new _.pG,
                this.g.bindTo("latLngPosition", a, "position"), this.g.bindTo("center", f, "projectionCenterQ"), this.g.bindTo("zoom", f), this.g.bindTo("offset", f), this.g.bindTo("projection", b), this.g.bindTo("focus", b, "position"), dCa(this));
            this.D = e ? wK(a) ? "Ia" : "Id" : null;
            this.F = e ? wK(a) ? 148284 : 148285 : null;
            var g = new _.qG(["scale"], "visible", function(l) {
                return null == l || .3 <= l
            });
            this.g && g.bindTo("scale", this.g);
            var h = this.C;
            h.set("logAsInternal", wK(a));
            h.bindTo("ariaLabel", a);
            h.bindTo("zIndex", a);
            h.bindTo("layoutPixelBounds",
                f, "pixelBounds");
            h.bindTo("disableAutoPan", a);
            h.bindTo("pendingFocus", a);
            h.bindTo("maxWidth", a);
            h.bindTo("minWidth", a);
            h.bindTo("content", a);
            h.bindTo("pixelOffset", a);
            h.bindTo("visible", g);
            this.j = new _.Fi(function() {
                if (b instanceof _.yf)
                    if (d.ia) {
                        var l = a.get("position");
                        l && _.Tja(b, d.ia, new _.Uf(l), aCa(h))
                    } else c.then(function() {
                        d.j.start()
                    });
                else(l = h.get("pixelBounds")) ? _.N(f, "pantobounds", l) : d.j.start()
            }, 150);
            if (e) {
                var k = null;
                this.h.push(_.xn(a, "position_changed", function() {
                    var l = a.get("position");
                    !l || a.get("disableAutoPan") || l.equals(k) || (d.j.start(), k = l)
                }))
            } else a.get("disableAutoPan") || this.j.start();
            h.set("open", !0);
            this.h.push(_.M(h, "domready", function() {
                a.trigger("domready")
            }));
            this.h.push(_.M(h, "visible", function() {
                a.trigger("visible")
            }));
            this.h.push(_.M(h, "closeclick", function() {
                a.close();
                a.trigger("closeclick")
            }));
            this.h.push(_.xn(a, "pixelposition_changed", function() {
                eCa(d)
            }));
            this.D && _.Q(b, this.D);
            this.F && _.P(b, this.F)
        },
        dCa = function(a) {
            a.g && a.h.push(_.xn(a.g, "pixelposition_changed",
                function() {
                    eCa(a)
                }))
        },
        eCa = function(a) {
            var b = a.model.get("pixelPosition") || a.g && a.g.get("pixelPosition");
            a.C.set("position", b)
        },
        fCa = function(a, b, c) {
            return b instanceof _.yf ? new AK(a, b, c) : new AK(a, b)
        },
        gCa = function(a) {
            a = a.__gm;
            a.get("IW_AUTO_CLOSER") || a.set("IW_AUTO_CLOSER", new YBa);
            return a.get("IW_AUTO_CLOSER")
        };
    _.B(yK, _.O);
    _.n = yK.prototype;
    _.n.ariaLabel_changed = function() {
        var a = this.get("ariaLabel");
        a ? this.zb.setAttribute("aria-label", a) : this.zb.removeAttribute("aria-label")
    };
    _.n.open_changed = function() {
        $Ba(this)
    };
    _.n.content_changed = function() {
        $Ba(this)
    };
    _.n.pendingFocus_changed = function() {
        this.get("pendingFocus") && (this.get("open") && this.get("visible") && this.get("position") ? _.jj(this.zb, !0) : console.warn("Setting focus on InfoWindow was ignored. This is most likely due to InfoWindow not being visible yet."), this.set("pendingFocus", !1))
    };
    _.n.dispose = function() {
        var a = this;
        setTimeout(function() {
            document.activeElement && document.activeElement !== document.body || (a.D && a.D !== document.body ? _.jj(a.D, !0) || _.jj(a.dn, !0) : _.jj(a.dn, !0))
        });
        this.H && _.ef(this.H);
        this.fa.parentNode.removeChild(this.fa);
        this.C.stop();
        this.C.dispose()
    };
    _.n.getSize = function() {
        var a = this.get("layoutPixelBounds"),
            b = this.get("pixelOffset"),
            c = this.get("maxWidth") || 648,
            d = this.get("minWidth") || 0;
        if (!b) return null;
        a ? (b = a.xa - a.na - (11 + -b.height), a = a.za - a.va - 6, 240 <= a && (a -= 120), 240 <= b && (b -= 120)) : (a = 648, b = 654);
        a = Math.min(a, c);
        a = Math.max(d, a);
        a = Math.max(0, a);
        b = Math.max(0, b);
        return {
            be: new _.Ag(a, b),
            minWidth: d
        }
    };
    _.n.pixelOffset_changed = function() {
        var a = this.get("pixelOffset") || new _.Ag(0, 0);
        this.o.style.right = _.sn(-a.width);
        this.o.style.bottom = _.sn(-a.height + 11);
        this.resize()
    };
    _.n.layoutPixelBounds_changed = function() {
        this.resize()
    };
    _.n.resize = function() {
        var a = this.getSize();
        if (a) {
            var b = a.be;
            a = a.minWidth;
            this.zb.style.maxWidth = _.sn(b.width);
            this.zb.style.maxHeight = _.sn(b.height);
            this.zb.style.minWidth = _.sn(a);
            this.g.style.maxHeight = _.gj.g ? _.sn(b.height - 18) : _.sn(b.height - 36);
            zK(this);
            this.C.start()
        }
    };
    _.n.position_changed = function() {
        this.get("position") ? (zK(this), xK(this, !!this.get("open"))) : xK(this, !1)
    };
    _.n.zIndex_changed = function() {
        zK(this)
    };
    _.n.visible_changed = function() {
        this.fa.style.display = this.get("visible") ? "" : "none";
        this.C.start();
        if (this.get("visible")) {
            var a = this.h.element.style.display;
            this.h.element.style.display = "none";
            this.h.element.getBoundingClientRect();
            this.h.element.style.display = a;
            bCa(this)
        } else this.F = !1
    };
    _.n.nC = function(a) {
        for (var b = !1, c = this.get("content"), d = a.target; !b && d;) b = d == c, d = d.parentNode;
        b ? _.Ye(a) : _.$e(a)
    };
    _.n.focus = function() {
        this.D = document.activeElement;
        var a;
        _.gj.G && (a = this.g.getBoundingClientRect());
        if (this.get("disableAutoPan")) _.jj(this.zb, !0);
        else {
            var b = _.po(this.g);
            if (b.length) {
                b = b[0];
                a = a || this.g.getBoundingClientRect();
                var c = b.getBoundingClientRect();
                _.jj(c.bottom <= a.bottom && c.right <= a.right ? b : this.zb, !0)
            } else _.jj(this.h.element, !0)
        }
    };
    AK.prototype.close = function() {
        if (this.isOpen) {
            this.isOpen = !1;
            for (var a = _.A(this.h), b = a.next(); !b.done; b = a.next()) _.ef(b.value);
            this.h.length = 0;
            this.j.stop();
            this.j.dispose();
            this.ia && this.o && this.ia.bf(this.o);
            a = this.C;
            a.unbindAll();
            a.set("open", !1);
            a.dispose();
            this.g && this.g.unbindAll()
        }
    };
    _.Te("infowindow", {
        hy: function(a) {
            var b = null;
            _.xn(a, "map_changed", function d() {
                var e = a.get("map");
                b && (b.Fs.g.delete(a), b.IC.close(), b = null);
                if (e) {
                    var f = e.__gm;
                    f.get("panes") ? f.get("innerContainer") ? (b = {
                        IC: fCa(a, e, e instanceof _.yf ? f.h.then(function(g) {
                            return g.ia
                        }) : void 0),
                        Fs: gCa(e)
                    }, ZBa(b.Fs, a)) : _.nf(f, "innercontainer_changed", d) : _.nf(f, "panes_changed", d)
                }
            })
        }
    });
});