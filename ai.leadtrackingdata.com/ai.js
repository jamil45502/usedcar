function ready(e) {
    "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(e, 1) : document.addEventListener("DOMContentLoaded", e)
}
if (ready((function() {
        new autoids_track
    })), void 0 === window.autoid_loaded) {
    var gHelperData = {},
        gStaticElementInited = !1;

    function aihelper() {
        console.log(JSON.stringify(gHelperData, null, "  "))
    }
    gHelperData.swapped_numbers = {}, gHelperData.build_date = " 2023-03-20 11:05:30"
}

function autoids_track() {
    function e(e, t) {
        if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t);
        else if (e.length === +e.length)
            for (var r = 0, n = e.length; r < n; r++) t(e[r], r, e);
        else
            for (var i in e) e.hasOwnProperty(i) && t(e[i], i, e)
    }
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
        var t = this;
        do {
            if (Element.prototype.matches.call(t, e)) return t;
            t = t.parentElement || t.parentNode
        } while (null !== t && 1 === t.nodeType);
        return null
    });
    var t = function(t, r) {
        var n = [];
        return null == t ? n : Array.prototype.map && t.map === Array.prototype.map ? t.map(r) : (e(t, (function(e, t, i) {
            n.push(r(e, t, i))
        })), n)
    };
    let r = pr("aiscript");
    if ("" !== r) {
        if (r.indexOf(".autoid.com/") > 0) return console.log(`attempting to load ai debug script from: ${r}`), void _r(r, "aidebugscript_init");
        console.log("Ignoring non compliant script.")
    }
    if ("boolean" == typeof window.autoid_loaded) return void console.log("Warning: AutoID Javascript file is included multiple times.");

    function n(e) {
        return e.toString().replace(/\D/g, "")
    }
    window.autoid_loaded = !0;
    var o = "ai-uuid",
        a = "ai-sess",
        l = "ai-page",
        c = "ai-gid",
        u = "ai-ddn",
        m = "ai-dni",
        d = !1,
        s = null,
        f = null,
        _ = null,
        v = null,
        p = null,
        g = null,
        h = " 2023-03-20 11:05:30",
        y = (rr() ? "https://" : "http://") + "ai.autoid.com",
        b = y + "/",
        w = function() {
            var e = {
                    cleaned: {},
                    original: []
                },
                t = {},
                r = new RegExp("(\\()?([2-9]{1})([0-9]{2})(\\))?([-. ])?([0-9]{3})([-. ])?([0-9]{4})", "gi"),
                i = document.body.innerHTML.match(r);
            wr(i ? "FindPhoneNumbers: matches found: " + i : "FindPhoneNumbers: no matches found.");
            if (!i) return e;
            for (var o = 0; o < i.length; o++) {
                var a = i[o];
                e.original.push(a);
                var l = n(a);
                wr("FindPhoneNumbers: matches number: " + l), l.length > 10 && (l = l.slice(l.length - 10)), t[l] = l
            }
            var c = {},
                u = 0;
            for (var m in t) c["num_" + ++u] = t[m];
            return e.cleaned = c, wr("FindPhoneNumbers: uniqnums: " + c), e
        }(),
        S = w.cleaned,
        k = {},
        x = "",
        q = !1,
        A = 1e4,
        T = !1,
        C = 4;
    ! function() {
        var e = document.getElementById("autoid_dni");
        if (e) {
            var t = e.getAttribute("data-blur");
            t && (T = "true" === t.toLowerCase()), (t = e.getAttribute("data-blur-density")) && ((C = parseInt(t)) < 1 && (C = 1), C > 10 && (C = 10))
        }
    }(),
    function(e) {
        T || (T = "" !== pr(Ft("YWlibHVy")));
        if (!T) return;
        ! function() {
            if (null !== document.getElementById("aiStylesheet")) return;
            var e = ".aiBlur { filter: blur(" + C + "px);}",
                t = document.head || document.getElementsByTagName("head")[0],
                r = document.createElement("style");
            r.setAttribute("id", "aiStylesheet"), t.appendChild(r), r.type = "text/css", r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
        }();
        var t = [];
        for (var r in e) {
            var i = e[r];
            (i.match(/[-. (]/g) || []).length > 1 && t.push(i)
        }! function(e) {
            for (var t = document.querySelectorAll("body *"), r = 0; r < e.length; r++) {
                var i = e[r],
                    o = n(i),
                    a = o.substring(0, 3),
                    l = o.substring(3, 6),
                    c = o.substring(6, 10);
                new RegExp("(\\(?)" + a + "(\\))?([-. ]?)" + l + "([-. ]?)" + c, "g");
                cr(t, i)
            }
        }(t = t.filter((function(e, t, r) {
            return r.indexOf(e) === t
        })))
    }(w.original);
    var E = JSON.stringify(S);

    function D(e, t) {
        "function" == typeof navigator.sendBeacon ? navigator.sendBeacon(b + "formCapture", JSON.stringify(t)) : wr("Unable to send form data. Beacon API not available.")
    }

    function L(e, t, r, n, i, o, a, l, c) {
        k.wid = !1 !== i ? tr : nr(document.location.host), k.wid = Zt(k.wid), k.uuid = e, k.sid = t, k.pid = r, k.gid = n, k.gutm = o, k.gclid = a, k.utm = l, k.dleu = c, setTimeout((function() {
                ! function() {
                    var e = document.querySelectorAll("form");
                    wr("forms found for capture: " + e.length);
                    for (var t = 0; t < e.length; t++) {
                        var r = e[t];
                        document.addEventListener ? r.addEventListener("submit", ce) : document.attachEvent && r.attachEvent("onsubmit", ce);
                        var n = r.querySelector('[value="submit" i], [type="submit" i]');
                        null !== n && (document.addEventListener ? n.addEventListener("click", ue) : document.attachEvent && n.attachEvent("click", ue))
                    }
                    switch (Mt()) {
                        case he:
                            setTimeout((function() {
                                K(), document.querySelector('.page-section[data-name="srp-wrapper-combined"] .page-section') && window.addEventListener("scroll", (() => {
                                    re(ee, 1e3)
                                }))
                            }), 1e3);
                            break;
                        case ye:
                            ! function() {
                                for (var e = document.querySelectorAll(".form-page-fieldset button.field-submit"), t = 0; t < e.length; t++) {
                                    var r = e[t];
                                    document.addEventListener ? r.addEventListener("click", le) : document.attachEvent && r.attachEvent("click", le)
                                }
                            }();
                            break;
                        case Je:
                            null !== (i = document.querySelector("#btnSetAppointment")) && (document.addEventListener ? i.addEventListener("click", ue) : document.attachEvent && i.attachEvent("click", ue));
                            break;
                        case ke:
                            ! function() {
                                for (var e = function() {
                                        xr((function() {
                                            return wr("waitFor test condition - init_form_capture_for_dealer_eprocess"), document.querySelectorAll("#modal_form_container input[type=submit]").length > 0
                                        }), (function() {
                                            wr("waitFor onReady - init_form_capture_for_dealer_eprocess " + new Date);
                                            var e = document.querySelectorAll("#modal_form_container input[type=submit]");
                                            wr("js handler 4 forms found: " + e.length);
                                            for (var t = 0; t < e.length; t++) {
                                                var r = e[t];
                                                document.addEventListener ? r.addEventListener("click", ue) : document.attachEvent && r.attachEvent("onclick", ue)
                                            }
                                            wr("waitFor onReady Done - init_form_capture_for_dealer_eprocess " + new Date)
                                        }), (function() {
                                            wr("waitFor TIMEOUT EXITING - init_form_capture_for_dealer_eprocess")
                                        }), 3e3)
                                    }, t = document.getElementsByClassName("modal_link_active"), r = 0; r < t.length; r++) {
                                    t[r].addEventListener("click", e, !1)
                                }
                            }();
                            break;
                        case xe:
                            z("a.contact-department", "click", (function(e) {
                                xr((function() {
                                    return wr("waitFor test condition - init_form_capture_for_dealer_fire"), null !== document.querySelector(".overlay-container .overlay-body iframe form")
                                }), (function() {
                                    wr("waitFor onReady - init_form_capture_for_dealer_fire " + new Date);
                                    for (var e = document.querySelectorAll(".overlay-container .overlay-body iframe form"), t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        document.addEventListener ? r.addEventListener("submit", ce) : document.attachEvent && r.attachEvent("onsubmit", ce)
                                    }
                                    wr("waitFor onReady Done - init_form_capture_for_dealer_fire " + new Date)
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING - init_form_capture_for_dealer_fire")
                                }), 3e3)
                            })), z("[class*='hash-s']", "click", (function(e) {
                                xr((function() {
                                    return wr("waitFor test condition - init_form_capture_for_dealer_fire"), null !== document.querySelector(".overlay-container .overlay-body iframe form")
                                }), (function() {
                                    wr("waitFor onReady - init_form_capture_for_dealer_fire " + new Date);
                                    for (var e = document.querySelectorAll(".overlay-container .overlay-body iframe form"), t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        document.addEventListener ? r.addEventListener("submit", ce) : document.attachEvent && r.attachEvent("onsubmit", ce)
                                    }
                                    wr("waitFor onReady Done - init_form_capture_for_dealer_fire " + new Date)
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING - init_form_capture_for_dealer_fire")
                                }), 3e3)
                            })), z("a.js-internal-popup", "click", (function(e) {
                                xr((function() {
                                    return wr("waitFor test condition - init_form_capture_for_df 2"), null !== document.querySelector(".js-popup-wrapper .popup_content form")
                                }), (function() {
                                    wr("waitFor onReady - init_form_capture_for_df 2 " + new Date);
                                    for (var e = document.querySelectorAll(".js-popup-wrapper .popup_content form"), t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        document.addEventListener ? r.addEventListener("submit", ce) : document.attachEvent && r.attachEvent("onsubmit", ce)
                                    }
                                    wr("waitFor onReady Done - init_form_capture_for_df 2 " + new Date)
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING - init_form_capture_for_df 2")
                                }), 3e3)
                            })), z("a.js-action-buttons-share-form-switcher", "click", (function(e) {
                                xr((function() {
                                    return wr("waitFor test condition - init_form_capture_for_df 3"), null !== document.querySelector('.js-popup-content .mfp-content div:not(".hide") > form')
                                }), (function() {
                                    wr("waitFor onReady - init_form_capture_for_df 3 " + new Date);
                                    for (var e = document.querySelectorAll('.js-popup-content .mfp-content div:not(".hide") > form'), t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        document.addEventListener ? r.addEventListener("submit", ce) : document.attachEvent && r.attachEvent("onsubmit", ce)
                                    }
                                    wr("waitFor onReady Done - init_form_capture_for_df 3 " + new Date)
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING - init_form_capture_for_df 3")
                                }), 3e3)
                            }));
                            break;
                        case Ve:
                            ! function() {
                                for (var e = document.querySelectorAll(".button_spotlight"), t = 0; t < e.length; t++) {
                                    var r = e[t];
                                    wr("init_form_capture_for_rnd_interactive: " + r), document.addEventListener ? r.addEventListener("click", ue) : document.attachEvent && r.attachEvent("click", ue)
                                }
                                var n = new Date;
                                xr((function() {
                                    var e = ((new Date).getTime() - n.getTime()) / 1e3;
                                    return wr("seconds: " + e + "forms found: " + document.querySelectorAll("form").length), e > 5
                                }), (function() {
                                    wr("waitFor onReady - init_form_capture_for_rnd_interactive " + new Date);
                                    for (var e = document.querySelectorAll("form"), t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        document.addEventListener ? r.addEventListener("submit", ce) : document.attachEvent && r.attachEvent("onsubmit", ce)
                                    }
                                    for (e = document.querySelectorAll("form .button"), t = 0; t < e.length; t++) {
                                        r = e[t];
                                        document.addEventListener ? r.addEventListener("click", ce) : document.attachEvent && r.attachEvent("click", ce)
                                    }
                                    wr("waitFor onReady Done - init_form_capture_for_rnd_interactive " + new Date)
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING - init_form_capture_for_rnd_interactive")
                                }), 6e3)
                            }();
                            break;
                        case Et:
                            ! function() {
                                for (var e = document.querySelectorAll("a.glp-btn, .btn-contact .btn, .btn-makeoffer .btn, a.contact-us-fixed-btn"), t = 0; t < e.length; t++) {
                                    var r = e[t];
                                    document.addEventListener ? r.addEventListener("click", X) : document.attachEvent && r.attachEvent("click", X)
                                }
                            }();
                            break;
                        case je:
                            z(".ui-dialog-buttonset button:first, .submit_button", "click", (function(e) {
                                var t = e.target.closest(".actionformholder form");
                                (null !== t || null !== (t = e.target.closest(".ui-dialog")) && null !== (t = t.querySelector("form"))) && de(t)
                            }));
                            break;
                        case Ae:
                            z("form .cblt-button", "click", (function(e) {
                                de(this.closest("form"))
                            })), z(".link a[data-vin], .link a[base-modal]", "click", (function(e) {
                                var t = new Date;
                                xr((function() {
                                    wr("waitFor test condition - init_form_capture_for_cobalt");
                                    var e = ((new Date).getTime() - t.getTime()) / 1e3;
                                    return wr("seconds: " + e), e > 2 || document.querySelectorAll("#modal-container form").length > 0
                                }), (function() {
                                    wr("waitFor onReady - init_form_capture_for_cobalt " + new Date);
                                    for (var e = document.querySelectorAll('#modal-container form [type="submit"]'), t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        document.addEventListener ? r.addEventListener("click", ue) : document.attachEvent && r.attachEvent("click", ue)
                                    }
                                    wr("waitFor onReady Done - init_form_capture_for_cobalt " + new Date)
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING - init_form_capture_for_cobalt")
                                }), 3e3)
                            })), z(".set-price-alert.cblt-button, .pricealert-button", "click", (function(e) {
                                var t = new Date;
                                xr((function() {
                                    wr("waitFor test condition - init_form_capture_for_cobalt");
                                    var e = ((new Date).getTime() - t.getTime()) / 1e3;
                                    return wr("seconds: " + e), e > 2
                                }), (function() {
                                    wr("waitFor onReady - init_form_capture_for_cobalt " + new Date);
                                    for (var e = document.querySelectorAll('.dialog-show form [type="submit"]'), t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        document.addEventListener ? r.addEventListener("click", ue) : document.attachEvent && r.attachEvent("click", ue)
                                    }
                                    wr("waitFor onReady Done - init_form_capture_for_cobalt " + new Date)
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING - init_form_capture_for_cobalt")
                                }), 3e3)
                            }));
                            break;
                        case De:
                            ! function() {
                                for (var e = document.querySelectorAll('button[type="submit"], input.submit'), t = 0; t < e.length; t++) {
                                    var r = e[t];
                                    document.addEventListener ? r.addEventListener("click", J) : document.attachEvent && r.attachEvent("click", J)
                                }
                            }(),
                            function() {
                                for (var e = document.querySelectorAll('a[id^="Forms-"]'), t = 0; t < e.length; t++) {
                                    var r = e[t];
                                    document.addEventListener ? r.addEventListener("click", U) : document.attachEvent && r.attachEvent("click", U)
                                }
                            }();
                            break;
                        case $e:
                            ! function() {
                                for (var e = document.querySelectorAll('form button[type="submit"], form input.submit'), t = 0; t < e.length; t++) {
                                    var r = e[t];
                                    document.addEventListener ? r.addEventListener("click", B) : document.attachEvent && r.attachEvent("click", B)
                                }
                            }(),
                            function() {
                                for (var e = document.querySelectorAll(".search-results-list button"), t = 0; t < e.length; t++) {
                                    var r = e[t];
                                    document.addEventListener ? r.addEventListener("click", H) : document.attachEvent && r.attachEvent("click", H)
                                }
                            }();
                            break;
                        case Ze:
                            ! function() {
                                for (var e = document.querySelectorAll('form [type="submit" i], form [value="submit" i], form input.submit'), t = 0; t < e.length; t++) {
                                    var r = e[t];
                                    document.addEventListener ? r.addEventListener("click", ce) : document.attachEvent && r.attachEvent("click", ce)
                                }
                            }();
                            break;
                        case Pe:
                            ! function() {
                                for (var e = document.querySelectorAll('form button[type="submit"]'), t = 0; t < e.length; t++) {
                                    var r = e[t];
                                    document.addEventListener ? r.addEventListener("click", ue) : document.attachEvent && r.attachEvent("click", ue)
                                }
                            }();
                            break;
                        case we:
                            ! function() {
                                for (var e = document.querySelectorAll(".button.expanded.primary"), t = 0; t < e.length; t++) {
                                    var r = e[t];
                                    document.addEventListener ? r.addEventListener("click", Z) : document.attachEvent && r.attachEvent("click", Z)
                                }
                                z(".FormSubmit input.submit", "click", (function(e) {
                                    var t = e.target.closest("#contact.FormDiv");
                                    null !== t && function(e) {
                                        for (var t = "&ai_form_name=Contact Us", r = e.querySelectorAll("input, textarea"), n = 0; n < r.length; n++) {
                                            var i = r[n],
                                                o = i.getAttribute("name"),
                                                a = i.value;
                                            switch (a = Yt(a), o) {
                                                case "FirstName":
                                                    t += "&ai_first_name=" + a;
                                                    break;
                                                case "LastName":
                                                    t += "&ai_last_name=" + a;
                                                    break;
                                                case "Email":
                                                    t += "&ai_email=" + a;
                                                    break;
                                                case "DayPhone":
                                                    t += "&ai_phone=" + a;
                                                    break;
                                                case "Comments":
                                                    t += "&ai_comments=" + a
                                            }
                                        }
                                        var l = t.substring(1);
                                        l = se(l);
                                        var c = fe();
                                        wr("form capture: " + (l = (l = c + t + '&form=""').substring(0, 1e3)));
                                        var u = {};
                                        u.ai_data = _e(), u.ai_form_data = t, D(0, u)
                                    }(t)
                                })), z(".form-wrap input.submit", "click", (function(e) {
                                    var t = e.target.closest(".form-wrap");
                                    null !== t && function(e) {
                                        var t = e.getAttribute("id"),
                                            r = e.closest(".ui-dialog").querySelector(".ui-widget-header");
                                        null !== r && (t = r.querySelector(".ui-dialog-title").innerText.trim());
                                        for (var n = "&ai_form_name=" + t, i = e.querySelectorAll("input, textarea"), o = 0; o < i.length; o++) {
                                            var a = i[o],
                                                l = a.getAttribute("name"),
                                                c = a.value;
                                            switch (c = Yt(c), l) {
                                                case "FirstName":
                                                    n += "&ai_first_name=" + c;
                                                    break;
                                                case "LastName":
                                                    n += "&ai_last_name=" + c;
                                                    break;
                                                case "Email":
                                                    n += "&ai_email=" + c;
                                                    break;
                                                case "DayPhone":
                                                case "Phone":
                                                    n += "&ai_phone=" + c;
                                                    break;
                                                case "Comments":
                                                    n += "&ai_comments=" + c
                                            }
                                        }
                                        var u = n.substring(1);
                                        u = se(u);
                                        var m = fe();
                                        wr("form capture: " + (u = (u = m + n + '&form=""').substring(0, 1e3)));
                                        var d = {};
                                        d.ai_data = _e(), d.ai_form_data = n, D(0, d)
                                    }(t)
                                }))
                            }();
                            break;
                        case Ne:
                            z(".form-modal-button", "click", (function(e) {
                                xr((function() {
                                    return wr("waitFor test condition - init_form_capture_for_remora"), document.querySelectorAll('.form-modal input[type="submit"]').length > 0
                                }), (function() {
                                    wr("waitFor onReady - init_form_capture_for_remora " + new Date);
                                    for (var e = document.querySelectorAll(".form-modal .ui.primary.button"), t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        document.addEventListener ? r.addEventListener("click", ue) : document.attachEvent && r.attachEvent("click", ue)
                                    }
                                    wr("waitFor onReady Done - init_form_capture_for_remora " + new Date)
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING - init_form_capture_for_remora")
                                }), 3e3)
                            })), z("#info_contact_btn", "click", (function(e) {
                                xr((function() {
                                    return wr("waitFor test condition - init_form_capture_for_remora"), document.querySelectorAll('form.form input[type="submit"]').length > 0
                                }), (function() {
                                    wr("waitFor onReady - init_form_capture_for_remora " + new Date);
                                    for (var e = document.querySelectorAll('form.form input[type="submit"]'), t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        document.addEventListener ? r.addEventListener("click", ue) : document.attachEvent && r.attachEvent("click", ue)
                                    }
                                    wr("waitFor onReady Done - init_form_capture_for_remora " + new Date)
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING - init_form_capture_for_remora")
                                }), 3e3)
                            }));
                            break;
                        case Qe:
                            z('.linkButton.buttonControl:not(.myVehiclesButton), input[type="submit"]', "click", (function(e) {
                                de(e.target.closest("form"))
                            })), z(".linkButton.buttonControl:not(.myVehiclesButton)", "click", (function(e) {
                                var t = new Date;
                                xr((function() {
                                    wr("waitFor test condition - init_form_capture_for_naked_lime");
                                    var e = ((new Date).getTime() - t.getTime()) / 1e3;
                                    return wr("seconds: " + e), e > 2
                                }), (function() {
                                    wr("waitFor onReady - init_form_capture_for_naked_lime " + new Date);
                                    for (var e = document.querySelectorAll('.form-modal input[type="submit"]'), t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        document.addEventListener ? r.addEventListener("click", ue) : document.attachEvent && r.attachEvent("click", ue)
                                    }
                                    wr("waitFor onReady Done - init_form_capture_for_naked_lime " + new Date)
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING - init_form_capture_for_naked_lime")
                                }), 3e3)
                            }));
                            break;
                        case tt:
                            z(".Aside-body button.Btn--primary", "click", (function(e) {
                                "have a question" === e.target.textContent.trim().toLowerCase() && z('.Aside-body form button[type="submit"]', "click", (function(e) {
                                    var t = document.querySelector(".Aside-body form");
                                    t && W(t, "Ask Us a Question")
                                }), ".Aside.Aside--contact")
                            }), ".Aside.Aside--contact"), z(".x-btn-inner", "click", (function(e) {
                                if ("submit" === e.target.textContent.trim().toLowerCase()) {
                                    var t = e.target.closest('div[id^="form_"]');
                                    if (null !== t) {
                                        var r = t.getAttribute("id");
                                        W(t, r)
                                    }
                                }
                            })), z(".customSubmit", "click", (function(e) {
                                var t = e.target.textContent.trim(),
                                    r = e.target.closest(".qqForm");
                                null !== r && W(r, t)
                            })), z(".checkAvail.btn", "click", (function(e) {
                                var t = new Date;
                                xr((function() {
                                    wr("waitFor test condition - init_form_capture_for_rick_case");
                                    var e = ((new Date).getTime() - t.getTime()) / 1e3,
                                        r = document.querySelectorAll(".x-window").length;
                                    return wr("seconds: " + e), e > 4 || r > 0
                                }), (function() {
                                    wr("waitFor onReady - init_form_capture_for_rick_case " + new Date);
                                    for (var e = document.querySelectorAll(".x-window button"), t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        "submit" === r.textContent.toLowerCase() && (document.addEventListener ? r.addEventListener("click", Y) : document.attachEvent && r.attachEvent("click", Y))
                                    }
                                    wr("waitFor onReady Done - init_form_capture_for_rick_case " + new Date)
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING - init_form_capture_for_rick_case")
                                }), 3e3)
                            }));
                            break;
                        case Ke:
                            z(".contact-form-submit", "click", (function(e) {
                                var t = e.target.closest(".contact-form-module");
                                null !== t && function(e) {
                                    for (var t = "&ai_form_name=Contact Us", r = e.querySelectorAll("input, textarea"), n = 0; n < r.length; n++) {
                                        var i = r[n],
                                            o = i.getAttribute("class"),
                                            a = i.value;
                                        switch (a = Yt(a), o) {
                                            case "msg-name":
                                                for (var l = a.split("%20"), c = "", u = 0; u < l.length; u++) 0 == u ? t += "&ai_first_name=" + Yt(l[u]) : c += l[u] + " ";
                                                t += "&ai_last_name=" + Yt(c.trim());
                                                break;
                                            case "msg-email":
                                                t += "&ai_email=" + a;
                                                break;
                                            case "msg-phone-number":
                                                t += "&ai_phone=" + a;
                                                break;
                                            case "msg-message":
                                                t += "&ai_comments=" + a
                                        }
                                    }
                                    var m = t.substring(1);
                                    m = se(m);
                                    var d = fe();
                                    wr("form capture: " + (m = (m = d + t + '&form=""').substring(0, 1e3)));
                                    var s = {};
                                    s.ai_data = _e(), s.ai_form_data = t, D(0, s)
                                }(t)
                            }));
                            break;
                        case Le:
                            z(".textbutton.invGetQuote", "click", (function(e) {
                                var t = new Date;
                                xr((function() {
                                    wr("waitFor test condition - init_form_capture_for_dealer_spike");
                                    var e = ((new Date).getTime() - t.getTime()) / 1e3;
                                    return wr("seconds: " + e), e > 4 || document.querySelectorAll(".form-header").length > 0
                                }), (function() {
                                    wr("waitFor onReady - init_form_capture_for_dealer_spike " + new Date);
                                    for (var e = document.querySelectorAll('.modal-content form button[type="submit"]'), t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        document.addEventListener ? r.addEventListener("click", ue) : document.attachEvent && r.attachEvent("click", ue)
                                    }
                                    wr("waitFor onReady Done - init_form_capture_for_dealer_spike " + new Date)
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING - init_form_capture_for_dealer_spike")
                                }), 3e3)
                            })), z(".vehicle-button[data-modal-href]", "click", (function(e) {
                                var t = new Date;
                                xr((function() {
                                    wr("waitFor test condition 2 - init_form_capture_for_dealer_spike");
                                    var e = ((new Date).getTime() - t.getTime()) / 1e3;
                                    return wr("seconds: " + e), e > 4 || document.querySelectorAll("#modalBox .form-header").length > 0
                                }), (function() {
                                    wr("waitFor onReady 2 - init_form_capture_for_dealer_spike " + new Date);
                                    for (var e = document.querySelectorAll('#modalBox .modal-content form button[type="submit"]'), t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        document.addEventListener ? r.addEventListener("click", ue) : document.attachEvent && r.attachEvent("click", ue)
                                    }
                                    wr("waitFor onReady Done 2 - init_form_capture_for_dealer_spike " + new Date)
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING 2- init_form_capture_for_dealer_spike")
                                }), 3e3)
                            })), z(".isModal", "click", (function(e) {
                                var t = new Date;
                                xr((function() {
                                    wr("waitFor test condition 3 - init_form_capture_for_dealer_spike");
                                    var e = ((new Date).getTime() - t.getTime()) / 1e3;
                                    return wr("seconds: " + e), e > 4 || document.querySelectorAll("#modalBox .form-header").length > 0
                                }), (function() {
                                    wr("waitFor onReady 3 - init_form_capture_for_dealer_spike " + new Date);
                                    for (var e = document.querySelectorAll('#modalBox .modal-content form button[type="submit"]'), t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        document.addEventListener ? r.addEventListener("click", ue) : document.attachEvent && r.attachEvent("click", ue)
                                    }
                                    wr("waitFor onReady Done 3 - init_form_capture_for_dealer_spike " + new Date)
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING 3- init_form_capture_for_dealer_spike")
                                }), 3e3)
                            }));
                            break;
                        case rt:
                            z('form [type="submit"]', "click", (function(e) {
                                de(e.target.closest("form"))
                            })), z('input[value="Schedule "], input[value="Schedule"]', "click", (function(e) {
                                de(e.target.closest("#ScheduleTestDrive"))
                            }));
                            break;
                        case yt:
                            ! function() {
                                if ("boolean" == typeof window.vcars_inited) return;
                                window.vcars_inited = !0, wr("init_form_capture_for_volvo_cars: "), R();
                                for (var e = document.querySelectorAll('input[name="ZipCode"]'), t = 0; t < e.length; t++) {
                                    e[t].addEventListener("keyup", G)
                                }
                                for (e = document.querySelectorAll("#dealerfinder_zipcode_desktop"), t = 0; t < e.length; t++) {
                                    e[t].addEventListener("click", R)
                                }
                                for (e = document.querySelectorAll("#dealerfinder_mylocation"), t = 0; t < e.length; t++) {
                                    e[t].addEventListener("click", R)
                                }
                            }();
                            break;
                        case bt:
                            z('[type="submit"], button.btn-submit', "click", (function(e) {
                                null !== (e = e.traget.closest("form")) && de(e)
                            }));
                            break;
                        case at:
                            z(".dl-searchbtn__wrap", "click", (function(e) {
                                wr("search button clicked ");
                                var t = new Date;
                                xr((function() {
                                    wr("waitFor test condition - init_form_capture_for_goodman");
                                    var e = ((new Date).getTime() - t.getTime()) / 1e3;
                                    return wr("seconds: " + e), e > 9 || document.querySelectorAll(".dl-dealer-details").length > 0
                                }), (function() {
                                    document.querySelectorAll(".dl-dealer-details").length > 0 && (wr("retriggering AI"), autoids_track())
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING - init_form_capture_for_goodman")
                                }), 1e4)
                            }));
                            break;
                        case xt:
                            break;
                        case It:
                            gStaticElementInited || (gStaticElementInited = !0, z("nav li.nav-static-element", "click", (function(e) {
                                autoids_track()
                            })), z("ul.ng-scope li", "click", (function(e) {
                                autoids_track()
                            })), z(".car-box", "click", (function(e) {
                                var t = new Date;
                                xr((function() {
                                    wr("waitFor test condition - init_form_capture_for_nabthat");
                                    var e = ((new Date).getTime() - t.getTime()) / 1e3;
                                    return wr("seconds: " + e), e > 6 || document.querySelectorAll(".vdp-inner").length > 0
                                }), (function() {
                                    document.querySelectorAll(".vdp-inner").length > 0 && autoids_track()
                                }), (function() {
                                    wr("waitFor TIMEOUT EXITING - init_form_capture_for_nabthat")
                                }), 5e3)
                            })))
                    }
                    var i
                }()
            }), 4e3),
            function() {
                if (function() {
                        for (var e = !1, t = [ht], r = 0; r < t.length; r++) {
                            if (Wt(t[r])) {
                                e = !0;
                                break
                            }
                        }
                        return e
                    }()) return;
                setTimeout((function() {
                    z(".message-wrapper #message-placeholder, .gg-chat-reply textarea, .gg-message-field, .gg-chat-reply, .gg-chat-wrapper textarea", "keyup", (function(e) {
                            13 == (e.keyCode || e.which) && F()
                        })), z(".gg-view-messenger .gg-message-field textarea, .gg-view-messenger .gg-chat-reply textarea, .gg-chat-wrapper textarea", "keypress", (function(e) {
                            var t = String.fromCharCode(e.keyCode);
                            /[a-zA-Z0-9-_ ]/.test(t) && (x += t)
                        })), z(".gg-btn", "click", (function(e) {
                            document.querySelectorAll(".#gg_chat_messenger").length > 0 && F()
                        })), z(".gg-minimize.gg-close", "click", (function(e) {
                            M = null
                        })),
                        function() {
                            if (!Wt(Je)) return;
                            xr((function() {
                                return document.querySelectorAll(".lpview_form_textarea").length > 0
                            }), (function() {
                                wr("waitFor onReady - init_live_person_chat_capture done " + new Date), wr("waitFor onReady Done - init_live_person_chat_capture " + new Date), z("textarea.lpview_form_textarea", "keyup", (function(e) {
                                    13 == (e.keyCode || e.which) && F()
                                })), z("textarea.lpview_form_textarea", "keypress", (function(e) {
                                    var t = String.fromCharCode(e.keyCode);
                                    /[a-zA-Z0-9-_ ]/.test(t) && (x += t)
                                }))
                            }), (function() {
                                wr("waitFor TIMEOUT EXITING - init_live_person_chat_capture")
                            }), 6e3)
                        }(),
                        function() {
                            for (var e = function() {
                                    var e = [],
                                        t = document.body.innerHTML.toLowerCase(),
                                        r = document.head.innerHTML.toLowerCase(); - 1 === t.indexOf("boldchat") && void 0 === window._bcvmf || (chatProvider = {}, chatProvider.name = "BoldChat", chatProvider.selectors = ".bcStatic, .BoldChat_LiveChat, .bcFloat, #bt_send_table input", e.push(chatProvider)); - 1 === t.indexOf("carnow.com") && -1 === t.indexOf("carNow.implementation") || (chatProvider = {}, chatProvider.name = "CarNow", chatProvider.selectors = ".cn-chat-trigger, a.cn-bar-btn, a#cncbbn, .carcode-widget_main-hub-button, .cn-chat, .cn-chat-bubble, .cn-fadeInLeftBig, #CarcodeWidgetHubWidgetsButtonWrapper, .cn-b13-chat", e.push(chatProvider)); - 1 !== r.indexOf("contactatonce.com") && (chatProvider = {}, chatProvider.name = "ContactAtOnce", chatProvider.selectors = ".lp_submit_button, .caoStandardChatAreaStyle, .lp_mobile .lp_header-content-wrapper", e.push(chatProvider));
                                    document.querySelectorAll("#conversations-corner").length > 0 && (chatProvider = {}, chatProvider.name = "Conversations", chatProvider.selectors = "#conversations-simple-icon", e.push(chatProvider)); - 1 !== r.indexOf("activengage.") && (chatProvider = {}, chatProvider.name = "ActiveEngage", chatProvider.selectors = '.ae-container, .ae-bubble-launcher-content a[channel="chat"], #ActivEngageInvite, #ActivEngage1, #ActivEngageChatButton, .aeBarButtonNormal, .carcode-widget_hub-buttons .hub-button--live-chat, #ae-invite-container, .ae-btn.ae-default.ae-fill, .ae-launcher-container button[channel="chat"]', e.push(chatProvider)); - 1 !== t.indexOf("clickandchat.com") && (chatProvider = {}, chatProvider.name = "Click and Chat", chatProvider.selectors = ".ddc-integrations-chat", e.push(chatProvider)); - 1 !== r.indexOf("carchat24") && (chatProvider = {}, chatProvider.name = "CarChat24", chatProvider.selectors = '.cc24SMSstart, [id^="iconInvite_"]', e.push(chatProvider)); - 1 !== t.indexOf("cdn.livechatinc") && (chatProvider = {}, chatProvider.name = "LiveChat", chatProvider.selectors = "#livechat-compact-container, #livechat-eye-catcher, #full-view-button, #livechat-compact-view", e.push(chatProvider)); - 1 !== r.indexOf("dealerinspire.com") && (chatProvider = {}, chatProvider.name = "Dealer Inspire", chatProvider.selectors = ".conversations-cta-circle, #di-conversations-embed-root", e.push(chatProvider));
                                    if (Wt(Je)) chatProvider = {}, chatProvider.name = "LivePerson", chatProvider.selectors = ".LPMcontainer, .lp_minimized, #designstudio-button", e.push(chatProvider);
                                    else if (Wt(Ge)) try {
                                        for (var n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                                            if (-1 != n[i].src.toLowerCase().indexOf("cdn.livechatinc")) {
                                                chatProvider = {}, chatProvider.name = "LiveChat", chatProvider.selectors = "#livechat-compact-container", e.push(chatProvider);
                                                break
                                            }
                                        }
                                    } catch (e) {
                                        wr("not able to find chat provider:" + e.message)
                                    } else Wt(lt) && (chatProvider = {}, chatProvider.name = "CallRevu", chatProvider.selectors = "", chatProvider.api_host_selector = "api.hubspot.com", chatProvider.api_start_chat_selector = "/welcomeMessages", e.push(chatProvider)); - 1 !== r.indexOf("dealerinspire.com") && (chatProvider = {}, chatProvider.name = "Dealer Inspire", chatProvider.selectors = ".conversations-cta-circle, #di-conversations-embed-root", e.push(chatProvider));
                                    return e
                                }(), t = 0; t < e.length; t++) {
                                var r = e[t];
                                "" !== r.selectors && ("continual" === r.listener_logic || O(r))
                            }
                        }()
                }), 4e3)
            }()
    }

    function O(e) {
        wr("[chat open] waiting for: " + e.name), xr((function() {
            var t = function(e) {
                for (var t = !1, r = e, n = document.querySelectorAll(r.selectors), i = 0; i < n.length; i++) {
                    var o = n[i];
                    if (o && P(o)) {
                        t = !0;
                        break
                    }
                }
                return t
            }(e);
            return wr("[chat open] provider_visible: " + e.name + " = " + t), !0 === t
        }), (function() {
            wr("[chat open] Adding listeners for: " + e.name);
            var t = document.querySelectorAll(e.selectors),
                r = t.length;
            wr("[chat open] found_dom_elements_length: " + r);
            for (var n = 0; n < r; n++) {
                var i = t[n];
                document.addEventListener ? i.addEventListener("click", N.bind(null, e.name)) : document.attachEvent && i.attachEvent("click", N.bind(null, e.name))
            }
        }), (function() {
            wr("[chat open] waitFor chat provider timed out EXITING - " + e.name)
        }), 15e3)
    }

    function N(e) {
        ! function(e) {
            if (q) return;
            wr("===persist_chat_open4: " + e);
            var t = {
                tracking_chat_open: !0
            };
            for (var r in t.chat_provider = e.toLowerCase(), t.chat_html = null, t.last_text_entered = null, t.client_chat_session_id = null, t.chat_record_id = null, k) k.hasOwnProperty(r) && (t[r] = k[r]);
            t, q = !0, wr("chat open data to be sent: " + JSON.stringify(t));
            var n = {
                method: "POST",
                mode: "cors",
                credentials: "omit",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(t)
            };
            Ut(b + "chatCapture", n, A).then((function(e) {
                return wr(" chat open fetch OK"), e.json()
            })).then((function(e) {})).catch((function(e) {
                wr(" fetch chat open error: " + JSON.stringify(e)), -1 !== e.message.indexOf("timed out") ? (console.log("Got timeout from AI: " + b), wr("Timeout sending data to AI at " + Date())) : wr("Some other error sending data to AI at " + Date() + " " + e.message)
            }))
        }(e)
    }

    function I(e) {
        var t = function() {
            for (var e = document.cookie.split(";"), t = {}, r = 0; r < e.length; r++) {
                var n = e[r],
                    i = n.indexOf("="),
                    o = unescape(n.slice(0, i)).trim(),
                    a = unescape(n.slice(i + 1));
                t[":" + o] = a
            }
            return t
        }();
        for (name in t) {
            var r = t[name];
            if (0 == name.indexOf(":" + e)) return r
        }
    }

    function P(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.innerHTML.trim().length)
    }
    var M = null;

    function F() {
        let e = null,
            t = document.querySelector("#gg_chat_messenger .gg-messenger, .gg-chat-content");
        if (t) t = t.innerHTML;
        else {
            const e = document.querySelector(".gg-chat-wrapper");
            if (e) {
                if (t = e.cloneNode(!0).querySelector('[class^="StyledComponents__ChatContainerContent"]'), t) {
                    elItems = t.querySelectorAll('[class^="Terms__TermsWrapper"]');
                    for (let e of elItems) e.remove();
                    elItems = t.querySelectorAll('[class^="TimeStamp__ChatBubbleTimeStamp"]');
                    for (let e of elItems) e.remove();
                    t = t.outerHTML
                }
            }
        }
        let r = Qt("__ggtruid");
        if (r) {
            const t = r.split(".");
            2 == t.length && (e = t[1])
        }
        wr("gubagooChatSubmitCapture buffer: " + x), wr("gubagoo session id: " + e);
        var n = {
            chat_provider: "gubagoo"
        };
        for (var i in n.chat_html = t, n.last_text_entered = x, n.client_chat_session_id = e, null != n.client_chat_session_id && 0 !== n.client_chat_session_id && null !== n.client_chat_session_id || (M = null, n.client_chat_session_id = null), n.chat_record_id = M, k) k.hasOwnProperty(i) && (n[i] = k[i]);
        wr("chat data to be sent: " + JSON.stringify(n));
        var o = {
            method: "POST",
            mode: "cors",
            credentials: "omit",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(n)
        };
        Ut(b + "chatCapture", o, A).then((function(e) {
            return e.json()
        })).then((function(e) {
            wr("fetch chat: " + JSON.stringify(e)), wr("fetch chat session id: " + e.chat_session_id), M = e.chat_session_id
        })).catch((function(e) {
            wr(" chat fetch error: " + JSON.stringify(e)), -1 !== e.message.indexOf("timed out") ? (console.log("Got timeout from AI: " + b), wr("Timeout sending data to AI at " + Date())) : wr("Some other error sending data to AI at " + Date() + " " + e.message)
        })), x = ""
    }

    function V() {
        var e = document.querySelectorAll("form");
        wr("forms found for tear down: " + e.length);
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            document.addEventListener ? r.removeEventListener("submit", ce) : document.attachEvent && r.detachEvent("onsubmit", ce);
            var n = r.querySelector('[value="submit" i], [type="submit" i]');
            null !== n && (document.addEventListener ? n.removeEventListener("click", ue) : document.attachEvent && n.detachEvent("click", ue))
        }
        if (Mt() === he) ! function() {
            for (var e = document.querySelectorAll(".btn.dialog, li.dropdown"), t = 0; t < e.length; t++) {
                var r = e[t];
                document.addEventListener ? r.removeEventListener("click", ae) : document.attachEvent && r.detachEvent("click", ae)
            }
            var n = new Date;
            if (xr((function() {
                    var e = ((new Date).getTime() - n.getTime()) / 1e3,
                        t = document.querySelectorAll("form.gg-po-form");
                    return wr("seconds: " + e + " forms found: " + t.length), t.length > 0 && e > 5
                }), (function() {
                    wr("waitFor onReady - teardown_form_capture_for_dealer_dot_com " + new Date), ie(document.querySelectorAll('form.gg-po-form button[type="submit"]'), ue), wr("waitFor onReady Done - teardown_form_capture_for_dealer_dot_com " + new Date)
                }), (function() {
                    wr("waitFor TIMEOUT EXITING - teardown_form_capture_for_dealer_dot_com")
                }), 6e3), oe()) {
                wr("waiting for modal to show");
                var i = ".ui_dialog ",
                    o = ".ui-dialog ",
                    a = '[data-form-tracking-id*="EPRICE"]';
                xr((function() {
                    var e = document.querySelectorAll(i + a),
                        t = document.querySelectorAll(o + a);
                    return wr("waitFor onReady - teardown_form_capture_for_dealer_dot_com forms1: " + e.length), wr("waitFor onReady - teardown_form_capture_for_dealer_dot_com forms2: " + t.length), e.length > 0 || t.length > 0
                }), (function() {
                    wr("waitFor onReady - teardown_form_capture_for_dealer_dot_com " + new Date);
                    var e = document.querySelectorAll(i + a + ' [type="submit"]');
                    ie(e, ue), ie(e = document.querySelectorAll(o + a + ' [type="submit"]'), ue), wr("waitFor onReady Done - teardown_form_capture_for_dealer_dot_com " + new Date)
                }), (function() {
                    wr("waitFor TIMEOUT EXITING - teardown_form_capture_for_dealer_dot_com")
                }), 6e4)
            }
        }()
    }

    function R(e) {
        var t = new Date;
        xr((function() {
            wr("waitFor test condition - init_form_capture_for_volvo_cars 2");
            var e = ((new Date).getTime() - t.getTime()) / 1e3;
            return wr("seconds: " + e), e > 5 || document.querySelectorAll("#dealersListHolder").length > 0
        }), (function() {
            wr("waitFor onReady - init_form_capture_for_volvo_cars 2 " + new Date), autoids_track(), wr("waitFor onReady Done - init_form_capture_for_volvo_cars 2 " + new Date)
        }), (function() {
            wr("waitFor TIMEOUT EXITING - init_form_capture_for_volvo_cars 2")
        }), 4e3)
    }

    function G(e) {
        13 === e.keyCode && R()
    }

    function Y() {
        var e = document.querySelector(".x-window");
        if (null !== e) {
            var t = e.querySelector(".x-window-header-text");
            W(e, t = t.innerText)
        }
    }

    function W(e, t) {
        for (var r = "&ai_form_name=" + t, n = e.querySelectorAll("input, textarea"), i = 0; i < n.length; i++) {
            var o = n[i],
                a = o.getAttribute("name"),
                l = o.getAttribute("placeholder");
            null !== l && (l = l.toLowerCase());
            var c = o.getAttribute();
            switch (c = Yt(c), a = a || l) {
                case "first name":
                case "firstName":
                    r += "&ai_first_name=" + c;
                    break;
                case "last name":
                case "lastName":
                    r += "&ai_last_name=" + c;
                    break;
                case "email":
                case "email address":
                    r += "&ai_email=" + c;
                    break;
                case "phone (optional)":
                case "homePhone":
                    r += "&ai_phone=" + c;
                    break;
                case "comments":
                case "i’d like to know...":
                    r += "&ai_comments=" + c
            }
        }
        var u = r.substring(1);
        u = se(u);
        wr("form capture: " + (u = (u = fe() + r + '&form=""').substring(0, 1e3)));
        var m = {};
        m.ai_data = _e(), m.ai_form_data = r, D(0, m)
    }

    function Z() {
        var e = new Date;
        xr((function() {
            var t = ((new Date).getTime() - e.getTime()) / 1e3,
                r = document.querySelectorAll(".reveal-overlay form");
            return wr("seconds: " + t + "forms found: " + r.length), r.length > 0
        }), (function() {
            wr("waitFor onReady - delayed_fusionzone_capture " + new Date);
            var e = document.querySelector(".reveal-overlay form");
            null !== e && (null !== e.querySelector(".button") && (document.addEventListener ? e.addEventListener("click", ue) : document.attachEvent && e.attachEvent("click", ue)));
            wr("waitFor onReady Done - delayed_fusionzone_capture " + new Date)
        }), (function() {
            wr("waitFor TIMEOUT EXITING - delayed_fusionzone_capture")
        }), 6e3)
    }

    function B(e) {
        var t = e.target.closest("form"),
            r = "";
        if (null !== t)
            for (var n = t.querySelectorAll("input, textarea"), i = 0; i < n.length; i++) {
                var o = n[i],
                    a = o.getAttribute("name"),
                    l = o.value;
                switch (l = Yt(l), a) {
                    case "name":
                        var c = l.split(/%20(.+)/);
                        r += "&ai_first_name=" + c[0], r += "&ai_last_name=" + c[1];
                        break;
                    case "LastName":
                        r += "&ai_last_name=" + l;
                        break;
                    case "email":
                        r += "&ai_email=" + l;
                        break;
                    case "phone":
                        r += "&ai_phone=" + l;
                        break;
                    case "comments":
                    case "message":
                        r += "&ai_comments=" + l
                }
            }
        var u = r.substring(1);
        u = se(u);
        wr("form capture: " + (u = (u = fe() + r + '&form=""').substring(0, 1e3)));
        var m = {};
        m.ai_data = _e(), m.ai_form_data = r, D(0, m)
    }

    function H() {
        var e = new Date;
        xr((function() {
            var t = ((new Date).getTime() - e.getTime()) / 1e3,
                r = document.querySelectorAll(".modal .modal-body form");
            return wr("seconds: " + t + "forms found: " + r.length), r.length > 0
        }), (function() {
            wr("waitFor onReady - ari_networks_delayed_form_capture " + new Date);
            for (var e = document.querySelectorAll('button[type="submit"]'), t = 0; t < e.length; t++) {
                var r = e[t];
                document.addEventListener ? r.addEventListener("click", B) : document.attachEvent && r.attachEvent("click", B)
            }
            wr("waitFor onReady Done - ari_networks_delayed_form_capture " + new Date)
        }), (function() {
            wr("waitFor TIMEOUT EXITING - ari_networks_delayed_form_capture")
        }), 6e3)
    }

    function J(e) {
        var t = e.target.closest("section").querySelectorAll("input, textarea"),
            r = e.target.closest(".panel").querySelectorAll("input, textarea"),
            n = e.target.closest(".ui-dialog").querySelectorAll("input, textarea"),
            i = (e.target.closest(".modal-body").querySelectorAll("input, textarea"), "");
        if (t.length > 0) {
            if (null !== (u = e.target.closest("section").querySelector(".FormSectionHeader"))) {
                i += "&ai_form_name=" + (d = Yt(d = (d = u.innerText.trim()).toLowerCase()))
            } else {
                var o = e.target.closest(".form");
                null !== o && (i += "&ai_form_name=" + o.getAttribute("id"))
            }
            for (var a = e.target.closest("section").querySelectorAll("input, textarea"), l = 0; l < a.length; l++) {
                var c = (m = a[l]).getAttribute("name");
                switch (d = Yt(d = m.value), c) {
                    case "FirstName":
                        i += "&ai_first_name=" + d;
                        break;
                    case "LastName":
                        i += "&ai_last_name=" + d;
                        break;
                    case "Email":
                        i += "&ai_email=" + d;
                        break;
                    case "DayPhone":
                        i += "&ai_phone=" + d;
                        break;
                    case "Comments":
                        i += "&ai_comments=" + d
                }
            }
        } else if (r.length > 0) {
            if (null !== (u = e.target.closest(".panel").querySelector(".panel-heading"))) i += "&ai_form_name=" + (d = Yt(d = (d = u.innerText.trim()).toLowerCase()));
            for (a = e.target.closest(".panel").querySelectorAll("input, textarea"), l = 0; l < a.length; l++) {
                c = (m = a[l]).getAttribute("name");
                switch (d = Yt(d = m.value), c) {
                    case "FirstName":
                        i += "&ai_first_name=" + d;
                        break;
                    case "LastName":
                        i += "&ai_last_name=" + d;
                        break;
                    case "Email":
                        i += "&ai_email=" + d;
                        break;
                    case "DayPhone":
                        i += "&ai_phone=" + d;
                        break;
                    case "Comments":
                        i += "&ai_comments=" + d
                }
            }
        } else if (n.length > 0) {
            var u;
            if (null !== (u = e.target.closest(".ui-dialog").querySelector(".ui-dialog-titlebar .ui-dialog-title"))) i += "&ai_form_name=" + (d = Yt(d = (d = u.innerText.trim()).toLowerCase()));
            for (a = e.target.closest(".ui-dialog").querySelector("fieldset").querySelectorAll("input, textarea"), l = 0; l < a.length; l++) {
                var m, d;
                c = (m = a[l]).getAttribute("name");
                switch (d = Yt(d = m.value), c) {
                    case "FirstName":
                        i += "&ai_first_name=" + d;
                        break;
                    case "LastName":
                        i += "&ai_last_name=" + d;
                        break;
                    case "Email":
                        i += "&ai_email=" + d;
                        break;
                    case "DayPhone":
                    case "Phone":
                        i += "&ai_phone=" + d;
                        break;
                    case "Comments":
                        i += "&ai_comments=" + d
                }
            }
        }
        var s = i.substring(1);
        s = se(s);
        wr("form capture: " + (s = (s = fe() + i + '&form=""').substring(0, 1e3)));
        var f = {};
        f.ai_data = _e(), f.ai_form_data = i, D(0, f)
    }

    function U() {
        var e = new Date;
        xr((function() {
            var t = ((new Date).getTime() - e.getTime()) / 1e3,
                r = document.querySelectorAll(".ui-dialog, .section, .modal-body");
            return wr("seconds: " + t + "forms found: " + r.length), r.length > 0
        }), (function() {
            wr("waitFor onReady - motorWebDelayedFormCapture " + new Date);
            for (var e = document.querySelectorAll('input.submit, button[type="submit"]'), t = 0; t < e.length; t++) {
                var r = e[t];
                document.addEventListener ? r.addEventListener("click", J) : document.attachEvent && r.attachEvent("click", J)
            }
            wr("waitFor onReady Done - motorWebDelayedFormCapture " + new Date)
        }), (function() {
            wr("waitFor TIMEOUT EXITING - motorWebDelayedFormCapture")
        }), 6e3)
    }

    function X() {
        var e = new Date;
        xr((function() {
            var t = ((new Date).getTime() - e.getTime()) / 1e3,
                r = document.querySelector("#colorbox form");
            return wr("seconds: " + t + "forms found: " + (null !== r)), null !== r || t > 4
        }), (function() {
            if (wr("waitFor onReady - init_form_capture_aa " + new Date), null !== document.querySelector("#colorbox form")) {
                var e = document.querySelector('#colorbox form input[name="SubmitButton"]');
                document.addEventListener ? e.addEventListener("click", ue) : document.attachEvent && e.attachEvent("click", ue)
            }
            wr("waitFor onReady Done - init_form_capture_for_aa " + new Date)
        }), (function() {
            wr("waitFor TIMEOUT EXITING - init_form_capture_for_aa")
        }), 6e3)
    }

    function z(e, t, r, n) {
        (n || document).addEventListener(t, Q.bind(null, e, r))
    }

    function Q(e, t, r) {
        var n = r.target.closest(e);
        n && t.call(n, r)
    }

    function K() {
        var e = document.querySelectorAll(".btn.dialog, li.dropdown");
        wr("init_form_capture_for_dealer_dot_com ai found " + e.length + " dialog forms");
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            document.addEventListener ? r.addEventListener("click", ae) : document.attachEvent && r.attachEvent("click", ae)
        }
        var n = new Date;
        if (xr((function() {
                var e = ((new Date).getTime() - n.getTime()) / 1e3;
                return document.querySelectorAll("form.gg-po-form").length > 0 && e > 5
            }), (function() {
                wr("waitFor onReady - init_form_capture_for_dealer_dot_com " + new Date), ne(document.querySelectorAll('form.gg-po-form button[type="submit"]'), ue), wr("waitFor onReady Done - init_form_capture_for_dealer_dot_com " + new Date)
            }), (function() {}), 6e3), oe()) {
            wr("waiting for modal to show");
            var i = ".ui_dialog ",
                o = ".ui-dialog ",
                a = '[data-form-tracking-id*="EPRICE"]';
            xr((function() {
                var e = document.querySelectorAll(i + a),
                    t = document.querySelectorAll(o + a);
                return wr("waitFor onReady - init_popup_form_capture_for_dealer_dot_com forms1: " + e.length), wr("waitFor onReady - init_popup_form_capture_for_dealer_dot_com forms2: " + t.length), e.length > 0 || t.length > 0
            }), (function() {
                wr("waitFor onReady - init_popup_form_capture_for_dealer_dot_com " + new Date);
                var e = document.querySelectorAll(i + a + ' [type="submit"]');
                ne(e, ue), ne(e = document.querySelectorAll(o + a + ' [type="submit"]'), ue), wr("waitFor onReady Done - init_popup_form_capture_for_dealer_dot_com " + new Date)
            }), (function() {
                wr("waitFor TIMEOUT EXITING - init_popup_form_capture_for_dealer_dot_com")
            }), 6e4)
        }
    }

    function ee() {
        wr(" scrolled throttled"), K()
    }
    let te;
    const re = (e, t) => {
        te || (te = !0, setTimeout((() => {
            e(), te = !1
        }), t))
    };

    function ne(e, t) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            document.addEventListener ? n.addEventListener("click", t) : document.attachEvent && n.attachEvent("click", t)
        }
    }

    function ie(e, t) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            document.addEventListener ? n.removeEventListener("click", t) : document.attachEvent && n.detachEvent("click", t)
        }
    }

    function oe() {
        var e = !1,
            t = pr("sonicpricepopup");
        return t && ("1" !== (t = t.toLowerCase()) && "true" !== t || (e = !0)), e
    }

    function ae() {
        wr("dealerDotComDelayedFormCapture called");
        var e = new Date;
        xr((function() {
            var t = ((new Date).getTime() - e.getTime()) / 1e3;
            return document.querySelectorAll(".ui-dialog-content form, form").length > 0 && t > 2
        }), (function() {
            for (var e = document.querySelectorAll('.ui-dialog-content form [type="submit"], form button[type="submit"]'), t = 0; t < e.length; t++) e[t].addEventListener("click", (function(e) {
                var t = kr(e.target, "form");
                null !== t && de(t)
            }));
            wr("waitFor onReady Done - dealerDotComDelayedFormCapture " + new Date)
        }), (function() {
            wr("waitFor TIMEOUT EXITING - dealerDotComDelayedFormCapture")
        }), 6e3)
    }

    function le() {
        if (me()) wr("ignoring form because on employeement view");
        else {
            var e = this.closest(".form-page-fieldset");
            if (null !== e) {
                var t, r = "";
                if (null !== (t = e.querySelector("article")))
                    if (null !== (t = t.querySelector("header"))) r += "&ai_form_name=" + (o = Yt(o = (o = t.innerText).toLowerCase()));
                for (var n = e.querySelectorAll("input, textArea"), i = 0; i < n.length; i++) {
                    var o, a = n[i],
                        l = a.getAttribute("class");
                    switch (o = Yt(o = a.value), l) {
                        case "field-first-name":
                            r += "&ai_first_name=" + o;
                            break;
                        case "field-last-name":
                            r += "&ai_last_name=" + o;
                            break;
                        case "field-e-mail-address":
                            r += "&ai_email=" + o;
                            break;
                        case "field-day-phone":
                            r += "&ai_phone=" + o;
                            break;
                        case "field-comments":
                            r += "&ai_comments=" + o
                    }
                }
                var c = r.substring(1);
                c = se(c);
                wr("form capture: " + (c = (c = fe() + r + '&form=""').substring(0, 1e3)));
                var u = {};
                u.ai_data = _e(), u.ai_form_data = r, D(0, u)
            }
        }
    }

    function ce(e) {
        de(e.target || e)
    }

    function ue(e) {
        var t = e.target.closest("form");
        if (null === t) {
            var r = e.target.getAttribute("data-form-id");
            null !== r && (t = document.getElementById(r))
        }
        null !== t && de(t)
    }

    function me() {
        var e = -1 !== document.location.pathname.indexOf("/employ"),
            t = -1 !== document.location.pathname.indexOf("/career");
        return e || t
    }

    function de(e) {
        if (me()) wr("ignoring form because on employeement view");
        else {
            var t = function(e) {
                var t, r = [];
                if ("object" == typeof e && "FORM" == e.nodeName) {
                    var n = e.elements.length;
                    for (i = 0; i < n; i++)
                        if ((t = e.elements[i]).name && !t.disabled && "file" != t.type && "reset" != t.type && "submit" != t.type && "button" != t.type)
                            if ("select-multiple" == t.type)
                                for (j = e.elements[i].options.length - 1; j >= 0; j--) t.options[j].selected && (r[r.length] = encodeURIComponent(t.name) + "=" + encodeURIComponent(t.options[j].value));
                            else("checkbox" != t.type && "radio" != t.type || t.checked) && (r[r.length] = encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
                }
                return r.join("&").replace(/%20/g, "+")
            }(e);
            wr("form data: " + (t = se(t)));
            var r = fe(),
                n = function(e) {
                    var t = "";
                    switch (Mt()) {
                        case he:
                            t = function(e) {
                                var t = "";
                                try {
                                    if (null !== (r = e.querySelector('input[name="formTrackingName"]'))) {
                                        t = "&ai_form_name=" + (i = r.value).trim()
                                    } else {
                                        var r = e.querySelector('input[name="form.id"]'),
                                            n = e.querySelector(".gg-po-menu .gg--active");
                                        if (null !== r) t = "&ai_form_name=" + Yt((i = r.value).trim());
                                        else if (null !== n) {
                                            t = "&ai_form_name=" + Yt((i = n.textContent).trim())
                                        } else {
                                            null !== (r = e.getAttribute("data-form-tracking-id")) && (t = "&ai_form_name=" + Yt(r))
                                        }
                                    }
                                } catch (e) {}
                                var i = Rt(e, "first");
                                null !== i && (t += "&ai_first_name=" + i);
                                i = Rt(e, "last"), null !== i && (t += "&ai_last_name=" + i);
                                i = Rt(e, "email"), null !== i && (t += "&ai_email=" + i);
                                i = Rt(e, "vin"), null !== i && (t += "&ai_vin=" + i);
                                i = Rt(e, "phone"), null !== i && (t += "&ai_phone=" + i);
                                i = jt(e, "comment"), null !== i && (t += "&ai_comments=" + i);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Dt:
                            t = function(e) {
                                var t = "";
                                return wr("  form data: " + t), t
                            }();
                            break;
                        case ye:
                            t = function(e) {
                                return document.querySelectorAll('meta[content="Orchard"]').length > 0 ? function(e) {
                                    var t = "";
                                    try {
                                        var r;
                                        if (null !== (r = e.querySelector('input[name="FormName"]'))) t = "&ai_form_name=" + (n = r.value.trim());
                                        else null !== (r = e.getAttribute("id")) && (t = "&ai_form_name=" + r.trim())
                                    } catch (e) {}
                                    var n = Rt(e, "first");
                                    null !== n && (t += "&ai_first_name=" + n);
                                    n = Rt(e, "last"), null !== n && (t += "&ai_last_name=" + n);
                                    if (n = Rt(e, "full"), null !== n) {
                                        var i = n.value.split(" ");
                                        t += "&ai_first_name=" + i[0], void 0 !== i[1] && (t += "&ai_last_name=" + i[1])
                                    }
                                    n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                    n = Rt(e, "vin"), null !== n && (t += "&ai_vin=" + n);
                                    n = Rt(e, "phone"), null !== n && (t += "&ai_phone=" + n);
                                    n = jt(e, "comment"), null !== n && (t += "&ai_comments=" + n);
                                    return wr("  form data: " + t), t
                                }(e) : function(e) {
                                    var t = "";
                                    try {
                                        var r = e.getAttribute("id");
                                        null !== r && (t = "&ai_form_name=" + r.trim(), r.trim())
                                    } catch (e) {}
                                    var n = Rt(e, "first");
                                    null !== n && (t += "&ai_first_name=" + n);
                                    n = Rt(e, "last"), null !== n && (t += "&ai_last_name=" + n);
                                    n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                    n = Rt(e, "phone"), null !== n && (t += "&ai_phone=" + n);
                                    n = jt(e, "comment"), null !== n && (t += "&ai_comments=" + n);
                                    return wr(" form data: " + t), t
                                }(e)
                            }(e);
                            break;
                        case be:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r;
                                    if (null !== (r = e.querySelector('input[name="formName"]'))) t = "&ai_form_name=" + (n = r.value).trim();
                                    else null !== (r = e.getAttribute("id")) && (t = "&ai_form_name=" + r.trim())
                                } catch (e) {}
                                var n = Rt(e, "first");
                                null !== n && (t += "&ai_first_name=" + n);
                                n = Rt(e, "last"), null !== n && (t += "&ai_last_name=" + n);
                                n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                n = Rt(e, "vin"), null !== n && (t += "&ai_vin=" + n);
                                n = Rt(e, "phone"), null !== n && (t += "&ai_phone=" + n);
                                n = jt(e, "comment"), null !== n && (t += "&ai_comments=" + n);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case we:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r;
                                    if (null !== (r = e.querySelector('input[name="form_name"]'))) t = "&ai_form_name=" + Yt((n = r.value).trim());
                                    else null !== (r = e.getAttribute("id")) && (t = "&ai_form_name=" + Yt(r.trim()))
                                } catch (e) {}
                                var n = Rt(e, "first");
                                null !== n && (t += "&ai_first_name=" + n);
                                n = Rt(e, "last"), null !== n && (t += "&ai_last_name=" + n);
                                n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                n = Rt(e, "vin"), null !== n && (t += "&ai_vin=" + n);
                                n = Rt(e, "phone"), null !== n && (t += "&ai_phone=" + n);
                                n = jt(e, "comment"), null !== n && (t += "&ai_comments=" + n);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Se:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("name"),
                                        n = e.querySelector('input[type="submit"]').value,
                                        i = e.querySelector('select[name$="TypeOfRequest"]').value;
                                    void 0 !== i ? t = "&ai_form_name=" + Yt(i.trim()) : void 0 !== n ? t = "&ai_form_name=" + Yt(n.trim()) : void 0 !== r && (t = "&ai_form_name=" + Yt(r.trim()))
                                } catch (e) {}
                                var o = Rt(e, "first"),
                                    a = Rt(e, "full"),
                                    l = o || a;
                                null !== l && (t += "&ai_first_name=" + l);
                                l = Rt(e, "last"), null !== l && (t += "&ai_last_name=" + l);
                                l = Rt(e, "email"), null !== l && (t += "&ai_email=" + l);
                                l = Rt(e, "vin"), null !== l && (t += "&ai_vin=" + l);
                                l = Rt(e, "phone"), null !== l && (t += "&ai_phone=" + l);
                                l = jt(e, "comment"), null !== l && (t += "&ai_comment=" + l);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case ke:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.querySelector(".form_set_header");
                                    null !== r && (t = "&ai_form_name=" + r.innerText.trim());
                                    var n = e.closest(".ui-dialog").querySelector(".ui-dialog-title");
                                    null !== n && (t = "&ai_form_name=" + n.innerText.trim())
                                } catch (e) {}
                                var i = Rt(e, "first");
                                null !== i && (t += "&ai_first_name=" + i);
                                i = Rt(e, "last"), null !== i && (t += "&ai_last_name=" + i);
                                i = Rt(e, "email"), null !== i && (t += "&ai_email=" + i);
                                i = Rt(e, "vin"), null !== i && (t += "&ai_vin=" + i);
                                try {
                                    if (1 == (o = e.querySelectorAll('input[id^="phone_home"]')).length) t += "&ai_phone=" + Yt(i = o[0].value);
                                    else if (3 == o.length) {
                                        t += "&ai_phone=" + Yt(o[0].value + o[1].value + o[2].value)
                                    }
                                } catch (e) {}
                                try {
                                    var o = Rt(e, "comment"),
                                        a = jt(e, "textarea"),
                                        l = jt(e, "comment"),
                                        c = o || a || l;
                                    null !== c && (t += "&ai_comments=" + c)
                                } catch (e) {}
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case xe:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("id"),
                                        n = e.closest("h1"),
                                        i = e.querySelector("fieldset > legend"),
                                        o = e.getAttribute("data-form-title"),
                                        a = document.querySelector(".action-buttons-share-form h3");
                                    null !== r ? t = "&ai_form_name=" + Yt(r) : null !== o && "" !== o ? t = "&ai_form_name=" + Yt(o) : null !== n ? t = "&ai_form_name=" + Yt(n.innerText.replace(/\s/g, "").toLowerCase()) : null !== i ? t = "&ai_form_name=" + Yt(i.innerText.trim()) : null !== a && (t = "&ai_form_name=" + Yt(a.innerText.trim()))
                                } catch (e) {
                                    console.log("an error " + e)
                                }
                                try {
                                    n = e.querySelector('input[id*="full_name"]'), i = e.querySelector('input[id="self_name"]');
                                    if (null !== (r = n || i)) {
                                        for (var l = (m = r.value).split(" "), c = "", u = 0; u < l.length; u++) 0 == u ? t += "&ai_first_name=" + Yt(l[u]) : c += l[u] + " ";
                                        t += "&ai_last_name=" + Yt(c.trim())
                                    } else {
                                        null !== (m = Rt(e, "first")) && (t += "&ai_first_name=" + m)
                                    }
                                } catch (e) {}
                                var m = Rt(e, "last");
                                null !== m && (t += "&ai_last_name=" + m);
                                m = Rt(e, "email"), null !== m && (t += "&ai_email=" + m);
                                m = Rt(e, "vin"), null !== m && (t += "&ai_vin=" + m);
                                m = Rt(e, "phone"), null !== m && (t += "&ai_phone=" + m);
                                r = jt(e, "comment"), n = jt(e, "message");
                                null !== (m = r || n) && (t += "&ai_comments=" + m);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Ae:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("name"),
                                        n = e.querySelector('input[name="cellName"]');
                                    null !== r ? t = "&ai_form_name=" + r.trim() : null !== n && (t = "&ai_form_name=" + n.value.trim()), null !== (r = e.closest(".dialog-show")) && null !== (r = r.querySelector("header span").innerText) && "" !== r && (t = "&ai_form_name=" + Yt(r.trim())), null !== (r = e.parentElement.querySelector(".widgetTitle")) && (t = "&ai_form_name=" + Yt(r.innerText.trim()))
                                } catch (e) {}
                                var i = Rt(e, "first");
                                null !== i && (t += "&ai_first_name=" + i);
                                i = Rt(e, "last"), null !== i && (t += "&ai_last_name=" + i);
                                i = Rt(e, "email"), null !== i && (t += "&ai_email=" + i);
                                i = Rt(e, "vin"), null !== i && (t += "&ai_vin=" + i);
                                i = Rt(e, "phone"), null !== i && (t += "&ai_phone=" + i);
                                r = jt(e, "message"), n = jt(e, "comment");
                                var o = jt(e, "question");
                                null !== (i = r || n || o) && (t += "&ai_comments=" + i);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Te:
                            t = function(e) {
                                var t = "",
                                    r = null;
                                try {
                                    var n = e.getAttribute("data-gf_title"),
                                        i = e.querySelector(".gform_heading .gform_title"),
                                        o = e.closest(".post-content"),
                                        a = e.closest("#ask-a-question-box");
                                    if (null !== n && n.length > 0 ? t = "&ai_form_name=" + Yt(r = n) : null !== i ? t = "&ai_form_name=" + Yt(r = i.textContent) : null !== o ? null !== (o = o.querySelector(".entry-title")) && (t = "&ai_form_name=" + Yt(r = o.textContent.trim())) : null !== a && (t = "&ai_form_name=" + Yt(r = "ask-a-question")), null === r) {
                                        var l = e.getAttribute("action");
                                        if (null !== l)
                                            if (-1 !== l.indexOf("parts-quote")) t = "&ai_form_name=" + Yt("parts_quote"), r = "parts_quote";
                                            else if (-1 !== l.indexOf("schedule-test-drive")) t = "&ai_form_name=" + Yt("schedule_test_drive"), r = "schedule_test_drive";
                                        else if ("/" === l) {
                                            r = (c = e.getAttribute("class").trim().split(" "))[0]
                                        } else {
                                            var c;
                                            t = "&ai_form_name=" + Yt(r = "" == (c = l.split("/"))[0] ? c[1] : c[0])
                                        }
                                    }
                                } catch (e) {}
                                var u = Rt(e, "first");
                                null !== u && (t += "&ai_first_name=" + u);
                                u = Rt(e, "last"), null !== u && (t += "&ai_last_name=" + u);
                                u = Rt(e, "email"), null !== u && (t += "&ai_email=" + u);
                                u = Rt(e, "phone"), null !== u && (t += "&ai_phone=" + u);
                                u = jt(e, "message"), null !== u && (t += "&ai_comments=" + u);
                                return wr(" form data: " + t), t
                            }(e);
                            break;
                        case Ce:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r;
                                    if (null !== (r = e.getAttribute("data-form-id"))) t = "&ai_form_name=" + Yt(r);
                                    else null !== (r = e.getAttribute("id")) && (t = "&ai_form_name=" + Yt(r))
                                } catch (e) {}
                                var n = Rt(e, "first");
                                null !== n && (t += "&ai_first_name=" + n);
                                n = Rt(e, "last"), null !== n && (t += "&ai_last_name=" + n);
                                n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                n = jt(e, "message"), null !== n && (t += "&ai_comments=" + n);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Ee:
                            t = function(e) {
                                var t = "";
                                try {
                                    null !== (n = e.getAttribute("data-form-tracking-id")) && (t = "&ai_form_name=" + n.trim())
                                } catch (e) {}
                                var r = Rt(e, "first");
                                null !== r && (t += "&ai_first_name=" + r);
                                r = Rt(e, "last"), null !== r && (t += "&ai_last_name=" + r);
                                r = Rt(e, "email"), null !== r && (t += "&ai_email=" + r);
                                r = Rt(e, "vin"), null !== r && (t += "&ai_vin=" + r);
                                r = Rt(e, "phone"), null !== r && (t += "&ai_phone=" + r);
                                var n = jt(e, "message"),
                                    i = jt(e, "comment");
                                null !== (r = n || i) && (t += "&ai_comments=" + r);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Re:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.querySelector('input[name="sVMailSubject"]'),
                                        n = e.getAttribute("id");
                                    null !== r ? t = "&ai_form_name=" + Yt(r.value.trim()) : null !== n && (t = "&ai_form_name=" + Yt(n.trim()))
                                } catch (e) {
                                    wr(" error: " + e)
                                }
                                var i = Rt(e, "first");
                                null !== i && (t += "&ai_first_name=" + i);
                                i = Rt(e, "last"), null !== i && (t += "&ai_last_name=" + i);
                                i = Rt(e, "email"), null !== i && (t += "&ai_email=" + i);
                                i = Rt(e, "vin"), null !== i && (t += "&ai_vin=" + i);
                                i = Rt(e, "phone"), null !== i && (t += "&ai_phone=" + i);
                                r = jt(e, "message"), n = jt(e, "comment");
                                null !== (i = r || n) && (t += "&ai_comments=" + i);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case je:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.querySelector('input[name="adSource"]'),
                                        n = e.getAttribute("id");
                                    null !== r ? t = "&ai_form_name=" + Yt(r.value.trim()) : null !== n && (t = "&ai_form_name=" + Yt(n.trim()))
                                } catch (e) {
                                    wr(" error: " + e)
                                }
                                var i = Rt(e, "first");
                                null !== i && (t += "&ai_first_name=" + i);
                                i = Rt(e, "last"), null !== i && (t += "&ai_last_name=" + i);
                                i = Rt(e, "email"), null !== i && (t += "&ai_email=" + i);
                                try {
                                    if (null !== (r = document.querySelector(".infoinfovin"))) t += "&ai_vin=" + (i = r.innerText).trim()
                                } catch (e) {}
                                try {
                                    r = e.querySelector('input[name="mobilePhone"]'), n = e.querySelector('input[name="homePhone"]');
                                    var o = e.querySelector('input[name="workPhone"]');
                                    if (null !== (a = r || n || o)) "" !== (i = a[0].value) && "(___)___-____" !== i && (t += "&ai_phone=" + Yt(i))
                                } catch (e) {}
                                try {
                                    var a;
                                    r = e.querySelector('textarea[name="customComments"]'), n = e.querySelector("textarea#wsEmailFormEmailMessage");
                                    if (null !== (a = r || n)) t += "&ai_comments=" + Yt(i = a.value)
                                } catch (e) {}
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Ge:
                            t = function(e) {
                                var t = "";
                                try {
                                    null !== (n = e.getAttribute("action")) && (t = "&ai_form_name=" + Yt((n = n.split("/"))[1]))
                                } catch (e) {
                                    wr(" error: " + e)
                                }
                                var r = Rt(e, "first");
                                null !== r && (t += "&ai_first_name=" + r);
                                r = Rt(e, "last"), null !== r && (t += "&ai_last_name=" + r);
                                r = Rt(e, "email"), null !== r && (t += "&ai_email=" + r);
                                try {
                                    var n = Rt(e, "tel");
                                    if (null !== n) "" !== (r = n.value) && "(___)___-____" !== r && (t += "&ai_phone=" + Yt(r))
                                } catch (e) {}
                                try {
                                    null !== jt(e, "message") && (t += "&ai_comments=" + r)
                                } catch (e) {}
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Ye:
                            t = function(e) {
                                var t = "";
                                try {
                                    null !== (n = e.getAttribute("action")) && (t = "&ai_form_name=" + Yt((n = n.split("/"))[1]))
                                } catch (e) {
                                    wr(" error: " + e)
                                }
                                var r = Rt(e, "name");
                                null !== r && (t += "&ai_first_name=" + r);
                                r = Rt(e, "last"), null !== r && (t += "&ai_last_name=" + r);
                                r = Rt(e, "email"), null !== r && (t += "&ai_email=" + r);
                                try {
                                    var n = e.querySelector('input[name="tel-57"]'),
                                        i = e.querySelector('input[name="tel-60"]'),
                                        o = null;
                                    if (null !== n) "" !== (r = n.value) && "(___)___-____" !== r && (o = r);
                                    else if (null !== i) {
                                        "" !== (r = i.value) && "(___)___-____" !== r && (o = r)
                                    }
                                    null !== o && (t += "&ai_phone=" + Yt(o))
                                } catch (e) {}
                                r = jt(e, "message"), null !== r && (t += "&ai_comments=" + r);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Ve:
                            t = function(e) {
                                var t = "",
                                    r = -1 !== e.className.indexOf("button");
                                if (r) {
                                    var n = e.closest("form");
                                    n && (t = $t(n))
                                } else t = $t(e);
                                return t
                            }(e);
                            break;
                        case We:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("action");
                                    null !== r && (t = "&ai_form_name=" + Yt((r = r.split("/"))[1]))
                                } catch (e) {
                                    wr("wsi error: " + e)
                                }
                                var n = Rt(e, "name");
                                null !== n && (t += "&ai_first_name=" + n);
                                n = Rt(e, "last"), null !== n && (t += "&ai_last_name=" + n);
                                n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                n = Rt(e, "number"), null !== n && (t += "&ai_phone=" + n);
                                n = jt(e, "message"), null !== n && (t += "&ai_comments" + n);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case dt:
                        case mt:
                        case Ue:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("action").split("/");
                                    if (null !== r) "" === (n = r[1]) && (n = r[r.length - 1]), t = "&ai_form_name=" + Yt(n)
                                } catch (e) {
                                    wr("doing addFormDataForWSI error: " + e)
                                }
                                var n = Rt(e, "first");
                                null !== n && (t += "&ai_first_name=" + n);
                                n = Rt(e, "last"), null !== n && (t += "&ai_last_name=" + n);
                                n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                n = Rt(e, "phone"), null !== n && (t += "&ai_phone=" + n);
                                n = jt(e, "comment"), null !== n && (t += "&ai_comments=" + n);
                                if (-1 == t.indexOf("ai_first_name")) {
                                    var i = nr(document.location.host);
                                    i && -1 !== i.toLowerCase().indexOf("mathenytowtrucks") && (t = function(e) {
                                        var t = "";
                                        try {
                                            var r = e.getAttribute("action").split("/");
                                            if (null !== r) "" === (i = r[1]) && (i = r[r.length - 1]), t = "&ai_form_name=" + Yt(i)
                                        } catch (e) {
                                            wr("doing addFormDataForWSI error: " + e)
                                        }
                                        var n = e.closest(".modal-body");
                                        if (null === n) return t;
                                        e = n;
                                        var i = Rt(e, "first");
                                        null !== i && (t += "&ai_first_name=" + i);
                                        i = Rt(e, "last"), null !== i && (t += "&ai_last_name=" + i);
                                        i = Rt(e, "email"), null !== i && (t += "&ai_email=" + i);
                                        i = Rt(e, "phone"), null !== i && (t += "&ai_phone=" + i);
                                        i = Rt(e, "comment"), null !== i && (t += "&ai_comments=" + i);
                                        return wr("  form data: " + t), t
                                    }(e))
                                }
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Ze:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r;
                                    if (null !== (r = e.getAttribute("id"))) t = "&ai_form_name=" + Yt(r);
                                    else null !== (r = e.querySelector("label")) && (t = "&ai_form_name=" + Yt(r.textContent))
                                } catch (e) {
                                    wr(" error: " + e)
                                }
                                var n = Rt(e, "name");
                                if (null !== n) {
                                    var i = n.split("%20");
                                    i.length > 1 && (t += "&ai_first_name=" + i[0], t += "&ai_last_name=" + i[1])
                                }
                                n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                n = Rt(e, "phone"), null !== n && (t += "&ai_phone=" + n);
                                n = jt(e, "message"), null !== n && (t += "&ai_comments=" + n);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Be:
                            t = function(e) {
                                var t = "",
                                    r = null;
                                try {
                                    null !== (o = e.getAttribute("id")) && (t = "&ai_form_name=" + o.trim(), r = o.trim())
                                } catch (e) {}
                                if (null === r) return t;
                                var n = {
                                    gform_1: {
                                        ai_first_name: "input_1",
                                        ai_phone: "input_2",
                                        ai_email: "input_3",
                                        ai_comments: "input_5"
                                    },
                                    gform_2: {
                                        ai_first_name: "input_1.3",
                                        ai_last_name: "input_1.6",
                                        ai_email: "input_2",
                                        ai_phone: "input_3",
                                        ai_comments: "input_5"
                                    }
                                }[r];
                                if (void 0 === n) return wr("Unknown form: " + r), t;
                                for (var i in n)
                                    if (n.hasOwnProperty(i)) try {
                                        var o, a = n[i];
                                        if (null !== (o = e.querySelector('[name="' + a + '"]'))) t += "&" + i + "=" + Yt(o.value)
                                    } catch (e) {}
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Je:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = !1,
                                        n = -1 !== window.location.pathname.indexOf("booking"),
                                        i = -1 !== window.location.pathname.indexOf("confirm");
                                    if (n && i) r = !0, t = "&ai_form_name=" + Yt("Confirm Booking");
                                    else {
                                        var o = e.getAttribute("id");
                                        null !== o && (t = "&ai_form_name=" + Yt(o), "user-location" === o && function(e) {
                                            try {
                                                var t = e.querySelector('input[id="address"]');
                                                if (null !== t) wr("champion location finder value: " + t.value)
                                            } catch (e) {}
                                        }(e))
                                    }
                                } catch (e) {
                                    wr(" error: " + e)
                                }
                                var a = !1,
                                    l = !1;
                                try {
                                    if (r) {
                                        var c = document.querySelector(".personalInformation").innerText.split(" ");
                                        t += "&ai_first_name=" + Yt(c[0]), void 0 !== c[1] && (t += "&ai_last_name=" + Yt(c[1]), a = !0)
                                    } else {
                                        null !== (m = Rt(e, "first")) && (t += "&ai_first_name=" + m)
                                    }
                                } catch (e) {}
                                if (!a) {
                                    null !== (m = Rt(e, "last")) && (t += "&ai_last_name=" + m)
                                }
                                try {
                                    if (r) t += "&ai_email=" + Yt((u = document.querySelector(".contactInformation").innerHTML.split("<br>"))[0]), void 0 !== u[1] && (t += "&ai_phone=" + Yt(u[1]), l = !0);
                                    else null !== (m = Rt(e, "email")) && (t += "&ai_email=" + m)
                                } catch (e) {}
                                l || null !== (m = Rt(e, "phone")) && (t += "&ai_phone=" + m);
                                try {
                                    var u, m;
                                    if (r) {
                                        if ((u = document.querySelector(".addressInformation").innerHTML.split("<br>")).length > 0) {
                                            var d = u[u.length - 1].split(" ");
                                            t += "&ai_comments=" + Yt(d[d.length - 1])
                                        }
                                    } else null !== (m = jt(e, "comment")) && (t += "&ai_comments=" + m)
                                } catch (e) {}
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case He:
                            break;
                        case Pe:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("id");
                                    null !== r && (t = "&ai_form_name=" + Yt(r))
                                } catch (e) {
                                    wr(" error: " + e)
                                }
                                var n = Rt(e, "full");
                                null !== n && (t += "&ai_first_name=" + n);
                                n = Rt(e, "last"), null !== n && (t += "&ai_last_name=" + n);
                                n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                n = Rt(e, "phone"), null !== n && (t += "&ai_phone=" + n);
                                n = jt(e, "comment"), null !== n && (t += "&ai_comments=" + n);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Xe:
                            t = function(e) {
                                var t = "",
                                    r = null;
                                try {
                                    null !== (o = e.getAttribute("id")) && (t = "&ai_form_name=" + Yt(o), r = o)
                                } catch (e) {}
                                if (null === r) return t;
                                var n = {
                                    "ims-form-module-form-1": {
                                        ai_first_name: "list-response-form-1-item-1",
                                        ai_last_name: "list-response-form-1-item-2",
                                        ai_email: "list-response-form-1-item-3",
                                        ai_comments: "list-response-form-1-item-12"
                                    },
                                    "ims-form-module-form-2": {
                                        ai_first_name: "list-response-form-2-item-1",
                                        ai_last_name: "list-response-form-2-item-2",
                                        ai_email: "list-response-form-2-item-3",
                                        ai_comments: "list-response-form-2-item-12",
                                        phone: "list-response-form-2-item-4"
                                    },
                                    "ims-form-module-form-3": {
                                        ai_first_name: "list-response-form-3-item-1",
                                        ai_last_name: "list-response-form-3-item-2",
                                        ai_email: "list-response-form-3-item-3",
                                        ai_comments: "list-response-form-3-item-12",
                                        phone: "list-response-form-3-item-4"
                                    }
                                }[r];
                                if (void 0 === n) return wr("Unknown form: " + r), t;
                                for (var i in n)
                                    if (n.hasOwnProperty(i)) try {
                                        var o, a = n[i];
                                        if (null !== (o = e.querySelector('[id="' + a + '"]'))) t += "&" + i + "=" + Yt(o.value)
                                    } catch (e) {}
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case ze:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("id");
                                    null !== r && (t = "&ai_form_name=" + Yt(r))
                                } catch (e) {
                                    wr(" error: " + e)
                                }
                                var n = Rt(e, "first");
                                null !== n && (t += "&ai_first_name=" + n);
                                n = Rt(e, "last"), null !== n && (t += "&ai_last_name=" + n);
                                n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                n = Rt(e, "phone"), null !== n && (t += "&ai_phone=" + n);
                                n = jt(e, "message"), null !== n && (t += "&ai_comments=" + n);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Ie:
                            t = function(e) {
                                var t = "",
                                    r = null;
                                try {
                                    if (null !== (a = e.getAttribute("action"))) {
                                        var n = a.split("/");
                                        t = "&ai_form_name=" + Yt(r = "" == n[0] ? n[1] : n[0])
                                    }
                                } catch (e) {}
                                if (null === r) return t;
                                var i = {
                                    "contact-us": {
                                        ai_first_name: "input_5",
                                        ai_last_name: "input_6",
                                        ai_email: "input_2",
                                        ai_phone: "input_3",
                                        ai_comments: "input_4"
                                    }
                                }[r];
                                if (void 0 === i) return wr("Unknown form: " + r), t;
                                for (var o in i)
                                    if (i.hasOwnProperty(o)) try {
                                        var a, l = i[o];
                                        if (null !== (a = e.querySelector('[name="' + l + '"]'))) t += "&" + o + "=" + Yt(a.value)
                                    } catch (e) {}
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Ne:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.closest(".form-modal");
                                    if (null !== r) {
                                        var n = r.querySelector(".header");
                                        null !== n && (t = "&ai_form_name=" + Yt(n.innerText.trim()))
                                    } else {
                                        var i = e.querySelector("h2");
                                        if (null !== i) t = "&ai_form_name=" + Yt(i.innerText.trim());
                                        else {
                                            var o = e.getAttribute("name");
                                            null !== o && (t = "&ai_form_name=" + Yt(o))
                                        }
                                    }
                                } catch (e) {
                                    console.log(" error: " + e)
                                }
                                var a = Rt(e, "first"),
                                    l = Rt(e, "full");
                                if (null !== a) t += "&ai_first_name=" + a;
                                else if (null !== l) {
                                    for (var c = (d = l).split("%20"), u = "", m = 0; m < c.length; m++) 0 == m ? t += "&ai_first_name=" + c[m] : u += c[m] + " ";
                                    t += "&ai_last_name=" + u.trim()
                                }
                                var d = Rt(e, "last");
                                null !== d && (t += "&ai_last_name=" + d);
                                d = Rt(e, "email"), null !== d && (t += "&ai_email=" + d);
                                d = Rt(e, "phone"), null !== d && (t += "&ai_phone=" + d);
                                a = jt(e, "comment"), l = jt(e, "textarea");
                                null !== (d = a || l) && (t += "&ai_comments=" + d);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Qe:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.closest("#modalContentContainer"),
                                        n = e.closest(".formWrapper");
                                    if (null !== r) null !== (i = r.querySelector(".modalTitle")) && (t = "&ai_form_name=" + Yt(i.innerText.trim()));
                                    else if (null !== n) {
                                        var i;
                                        null !== (i = n.querySelector(".title")) && (t = "&ai_form_name=" + Yt(i.innerText.trim()))
                                    } else {
                                        var o = e.getAttribute("id");
                                        null !== o ? t = "&ai_form_name=" + Yt(o) : null !== (o = document.querySelector('input[name="form_id"]')) && (t = "&ai_form_name=" + Yt(o.value))
                                    }
                                } catch (e) {
                                    console.log(" error: " + e)
                                }
                                var a = Rt(e, "first");
                                null !== a && (t += "&ai_first_name=" + a);
                                a = Rt(e, "last"), null !== a && (t += "&ai_last_name=" + a);
                                a = Rt(e, "email"), null !== a && (t += "&ai_email=" + a);
                                a = Rt(e, "phone"), null !== a && (t += "&ai_phone=" + a);
                                a = jt(e, "comment"), null !== a && (t += "&ai_comments=" + a);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Ke:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("name"),
                                        n = e.getAttribute("id") || r;
                                    null !== n && (t = "&ai_form_name=" + Yt(n.trim()))
                                } catch (e) {
                                    console.log(" error: " + e)
                                }
                                var i = Rt(e, "name");
                                if (null !== i) {
                                    for (var o = i.split(" "), a = "", l = 0; l < o.length; l++) 0 == l ? t += "&ai_first_name=" + o[l] : a += o[l] + " ";
                                    t += "&ai_last_name=" + a
                                }
                                i = Rt(e, "email"), null !== i && (t += "&ai_email=" + i);
                                i = Rt(e, "phone"), null !== i && (t += "&ai_phone=" + i);
                                i = jt(e, "message"), null !== i && (t += "&ai_comments=" + i);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case et:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.querySelector("h2");
                                    if (null !== r) t = "&ai_form_name=" + Yt(r.innerText.trim());
                                    else if (null !== (n = e.getAttribute("action")))
                                        if (0 !== n.indexOf("http")) "" == (o = n.split("/"))[0] ? form_class = o[1] : form_class = o[0], t = "&ai_form_name=" + Yt(form_class);
                                        else t = "&ai_form_name=" + Yt(window.location.pathname.replace(/\//g, ""))
                                } catch (e) {}
                                var n = Rt(e, "your-name"),
                                    i = Rt(e, "writer-name");
                                if (null !== (u = n || i)) {
                                    for (var o = u.split(" "), a = "", l = 0; l < o.length; l++) 0 == l ? t += "&ai_first_name=" + o[l] : a += o[l] + " ";
                                    t += "&ai_last_name=" + a
                                } else {
                                    null !== (c = Rt(e, "first")) && (t += "&ai_first_name=" + c)
                                }
                                var c = Rt(e, "last");
                                null !== c && (t += "&ai_last_name=" + c);
                                c = Rt(e, "email"), null !== c && (t += "&ai_email=" + c);
                                c = Rt(e, "phone"), null !== c && (t += "&ai_phone=" + c);
                                var u;
                                n = jt(e, "message"), i = jt(e, "bio");
                                null !== (u = n || i) && (t += "&ai_comments=" + u);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case ct:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("id");
                                    null !== r && (t = "&ai_form_name=" + Yt(r))
                                } catch (e) {}
                                var n = Rt(e, "first");
                                null !== n && (t += "&ai_first_name=" + n);
                                n = Rt(e, "last"), null !== n && (t += "&ai_last_name=" + n);
                                n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                n = Rt(e, "phone"), null !== n && (t += "&ai_phone=" + n);
                                n = jt(e, "comment"), null !== n && (t += "&ai_comments=" + n);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case tt:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("id");
                                    if (null !== r) t = "&ai_form_name=" + Yt(r);
                                    else {
                                        var n = e.closest(".VueModal-inner");
                                        if (null !== n) {
                                            var i = n.querySelector(".VueModal-title");
                                            null !== i && (t = "&ai_form_name=" + Yt(i.innerText.trim()))
                                        }
                                    }
                                } catch (e) {}
                                var o = Rt(e, "first");
                                null !== o && (t += "&ai_first_name=" + o);
                                o = Rt(e, "last"), null !== o && (t += "&ai_last_name=" + o);
                                o = Rt(e, "email"), null !== o && (t += "&ai_email=" + o);
                                o = Rt(e, "phone"), null !== o && (t += "&ai_phone=" + o);
                                o = jt(e, "comment"), null !== o && (t += "&ai_comments=" + o);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case rt:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("id");
                                    null !== r && (t = "&ai_form_name=" + Yt(r));
                                    var n = e.querySelector(".gform_title");
                                    if (null !== n) t = "&ai_form_name=" + Yt(n.innerText);
                                    else if (-1 !== e.className.indexOf("sc-CtfFt")) t = "&ai_form_name=" + Yt("Contact Us");
                                    else if (null !== e.getAttribute("data-form-tracking-id")) {
                                        t = "&ai_form_name=" + Yt(i = e.getAttribute("data-form-tracking-id"))
                                    }
                                } catch (e) {}
                                var i = Rt(e, "first");
                                null !== i && (t += "&ai_first_name=" + i);
                                i = Rt(e, "last"), null !== i && (t += "&ai_last_name=" + i);
                                i = Rt(e, "email"), null !== i && (t += "&ai_email=" + i);
                                i = Rt(e, "phone"), null !== i && (t += "&ai_phone=" + i);
                                i = jt(e, "comment"), null !== i && (t += "&ai_comments=" + i);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Le:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("action");
                                    if (null !== r) t = "&ai_form_name=" + Yt(r);
                                    else {
                                        var n = e.closest(".modal-dialog");
                                        if (null !== n) {
                                            var i = n.querySelector(".modal-header .modal-title");
                                            if (null !== i) t = "&ai_form_name=" + Yt(i.innerText.trim())
                                        }
                                    }
                                } catch (e) {}
                                var o = Rt(e, "fname");
                                null !== o && (t += "&ai_first_name=" + o);
                                o = Rt(e, "lname"), null !== o && (t += "&ai_last_name=" + o);
                                o = Rt(e, "email"), null !== o && (t += "&ai_email=" + o);
                                o = Rt(e, "phone"), null !== o && (t += "&ai_phone=" + o);
                                o = jt(e, "comment"), null !== o && (t += "&ai_comments=" + o);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case ot:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = null,
                                        n = e.getAttribute("action");
                                    if (null !== n)
                                        if (0 !== n.indexOf("http")) t = "&ai_form_name=" + Yt(r = "" == (o = n.split("/"))[0] ? o[1] : o[0])
                                } catch (e) {}
                                if (null === r) return t;
                                var i = Rt(e, "name");
                                if (null !== i) {
                                    for (var o = i.split("%20"), a = "", l = 0; l < o.length; l++) 0 == l ? t += "&ai_first_name=" + o[l] : a += o[l] + " ";
                                    t += "&ai_last_name=" + a
                                }
                                i = Rt(e, "phone"), null !== i && (t += "&ai_phone=" + i);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case ft:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("id");
                                    null !== r && (t = "&ai_form_name=" + Yt(r))
                                } catch (e) {}
                                var n = Rt(e, "name");
                                if (null !== n) {
                                    for (var i = n.split(" "), o = "", a = 0; a < i.length; a++) 0 == a ? t += "&ai_first_name=" + i[a] : o += i[a] + " ";
                                    t += "&ai_last_name=" + o.trim()
                                }
                                n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                n = Rt(e, "phone"), null !== n && (t += "&ai_phone=" + n);
                                n = jt(e, "comment"), null !== n && (t += "&ai_comments=" + n);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case _t:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("id");
                                    null !== r && (t = "&ai_form_name=" + Yt(r))
                                } catch (e) {}
                                var n = Rt(e, "first");
                                null !== n && (t += "&ai_first_name=" + n);
                                n = Rt(e, "last"), null !== n && (t += "&ai_last_name=" + n);
                                n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                n = Rt(e, "phone"), null !== n && (t += "&ai_phone=" + n);
                                n = jt(e, "comment"), null !== n && (t += "&ai_comments=" + n);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case vt:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("id");
                                    if (null !== r) t = "&ai_form_name=" + Yt(r);
                                    else {
                                        var n = e.closest("div");
                                        if (null !== n) {
                                            var i = n.querySelector("h3");
                                            if (null !== i) t = "&ai_form_name=" + Yt(i.innerText.trim())
                                        }
                                    }
                                } catch (e) {}
                                var o = Rt(e, "name");
                                if (null !== o) {
                                    var a = o.split("%20");
                                    t += "&ai_first_name=" + a[0], void 0 !== a[1] && (t += "&ai_last_name=" + a[1])
                                }
                                var l = Rt(e, "email");
                                null !== l && (t += "&ai_email=" + l);
                                l = Rt(e, "phone"), null !== l && (t += "&ai_phone=" + l);
                                o = jt(e, "comment");
                                var c = jt(e, "message");
                                null !== (l = o || c) && (t += "&ai_comments=" + l);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case pt:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("id");
                                    if (null !== r) t = "&ai_form_name=" + Yt(r);
                                    else {
                                        var n = e.closest("div");
                                        if (null !== n) {
                                            var i = n.querySelector("h3");
                                            if (null !== i) t = "&ai_form_name=" + Yt(i.innerTtext.trim())
                                        }
                                    }
                                } catch (e) {}
                                try {
                                    if (null !== (l = e.querySelector('input[name="Name"]'))) {
                                        var o = l.value.split(" ");
                                        t += "&ai_first_name=" + Yt(o[0]), void 0 !== o[1] && (t += "&ai_last_name=" + Yt(o[1]))
                                    }
                                } catch (e) {}
                                var a = Rt(e, "email");
                                null !== a && (t += "&ai_email=" + a);
                                a = Rt(e, "phone"), null !== a && (t += "&ai_phone=" + a);
                                var l = jt(e, "comment"),
                                    c = jt(e, "message");
                                null !== (a = l || c) && (t += "&ai_comments=" + a);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case gt:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("id");
                                    null !== r && (t = "&ai_form_name=" + Yt(r))
                                } catch (e) {}
                                try {
                                    if (null !== (a = e.querySelector('input[name="name"]'))) {
                                        var n = a.value.split(" ");
                                        t += "&ai_first_name=" + Yt(n[0]), void 0 !== n[1] && (t += "&ai_last_name=" + Yt(n[1]))
                                    }
                                } catch (e) {}
                                var i = Rt(e, "email");
                                null !== i && (t += "&ai_email=" + i);
                                try {
                                    if (null !== (a = e.querySelector('input[name="Phone[]"]'))) {
                                        i = "";
                                        for (var o = 0; o < a.length; o++) i += a[o].value;
                                        t += "&ai_phone=" + Yt(i)
                                    }
                                } catch (e) {}
                                var a = Rt(e, "comment"),
                                    l = Rt(e, "message");
                                null !== (i = a || l) && (t += "&ai_comments=" + i);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case bt:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.querySelector(".modal-header");
                                    if (null !== r) t = "&ai_form_name=" + Yt(r.innerText);
                                    else {
                                        var n = e.getAttribute("class");
                                        null !== n && (t = "&ai_form_name=" + Yt(n))
                                    }
                                } catch (e) {}
                                var i = Rt(e, "first");
                                null !== i && (t += "&ai_first_name=" + i);
                                i = Rt(e, "last"), null !== i && (t += "&ai_last_name=" + i);
                                i = Rt(e, "email"), null !== i && (t += "&ai_email=" + i);
                                i = Rt(e, "phone"), null !== i && (t += "&ai_phone=" + i);
                                i = jt(e, "comment"), null !== i && (t += "&ai_comments=" + i);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case St:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("action");
                                    if (null !== r && 0 !== r.indexOf("http")) {
                                        var n = r.split("/");
                                        t = "&ai_form_name=" + Yt("" == n[0] ? n[1] : n[0])
                                    }
                                } catch (e) {}
                                var i = Rt(e, "first");
                                null !== i && (t += "&ai_first_name=" + i);
                                i = Rt(e, "last"), null !== i && (t += "&ai_last_name=" + i);
                                i = Rt(e, "tel"), null !== i && (t += "&ai_phone=" + i);
                                i = Rt(e, "email"), null !== i && (t += "&ai_email=" + i);
                                i = jt(e, "message"), null !== i && (t += "&ai_comments=" + i);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case kt:
                            t = function(e) {
                                var t = "";
                                try {
                                    if (null !== (n = e.querySelector("#request_title"))) t = "&ai_form_name=" + Yt(n.innerText);
                                    else try {
                                        if (null !== (n = e.getAttribute("action")) && 0 === n.indexOf("http")) {
                                            var r = n.split("/");
                                            t = "&ai_form_name=" + Yt("" !== r[r.length - 1] ? r[r.length - 1] : r[r.length - 2])
                                        }
                                    } catch (e) {}
                                } catch (e) {}
                                try {
                                    var n;
                                    n = e.querySelector('input[name="name"]');
                                    if (null !== n) {
                                        var i = n.value.split(" ");
                                        t += "&ai_first_name=" + Yt(i[0]), void 0 !== i[1] && (t += "&ai_last_name=" + Yt(i[1]))
                                    }
                                } catch (e) {}
                                var o = Rt(e, "first");
                                null !== o && (t += "&ai_first_name=" + o);
                                o = Rt(e, "last"), null !== o && (t += "&ai_last_name=" + o);
                                o = Rt(e, "email"), null !== o && (t += "&ai_email=" + o);
                                o = Rt(e, "phone"), null !== o && (t += "&ai_phone=" + o);
                                o = jt(e, "message"), null !== o && (t += "&ai_comments=" + o);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case xt:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.querySelector("legend");
                                    if (null !== r) t = "&ai_form_name=" + Yt(r.textContent);
                                    else if (null !== (n = e.getAttribute("id"))) t = "&ai_form_name=" + Yt(n);
                                    else try {
                                        var n;
                                        if (null !== (n = e.getAttribute("action")) && 0 === n.indexOf("http")) {
                                            var i = n.split("/");
                                            t = "&ai_form_name=" + Yt("" !== i[i.length - 1] ? i[i.length - 1] : i[i.length - 2])
                                        }
                                    } catch (e) {}
                                } catch (e) {}
                                var o = Rt(e, "first");
                                null !== o && (t += "&ai_first_name=" + o);
                                o = Rt(e, "last"), null !== o && (t += "&ai_last_name=" + o);
                                o = Rt(e, "email"), null !== o && (t += "&ai_email=" + o);
                                o = Rt(e, "phone"), null !== o && (t += "&ai_phone=" + o);
                                o = jt(e, "comment"), null !== o && (t += "&ai_comments=" + o);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case At:
                            t = function(e) {
                                var t = "";
                                try {
                                    if (null !== (n = e.getAttribute("id"))) t = "&ai_form_name=" + Yt(n);
                                    else try {
                                        if (null !== (n = e.getAttribute("action"))) t = "&ai_form_name=" + Yt(n.split("/")[1])
                                    } catch (e) {}
                                } catch (e) {}
                                var r = Rt(e, "first");
                                null !== r && (t += "&ai_first_name=" + r);
                                r = Rt(e, "last"), null !== r && (t += "&ai_last_name=" + r);
                                r = Rt(e, "email"), null !== r && (t += "&ai_email=" + r);
                                r = Rt(e, "phone"), null !== r && (t += "&ai_phone=" + r);
                                try {
                                    var n = jt(e, "notes"),
                                        i = jt(e, "message"),
                                        o = n || i;
                                    null !== o && (t += "&ai_comments=" + o)
                                } catch (e) {}
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Tt:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.getAttribute("form_title"),
                                        n = e.querySelector('input[name="name"]');
                                    if (null !== r) t = "&ai_form_name=" + Yt(r);
                                    else null !== n && (t = "&ai_form_name=" + Yt(n.value))
                                } catch (e) {}
                                var i = Rt(e, "first");
                                null !== i && (t += "&ai_first_name=" + i);
                                i = Rt(e, "last"), null !== i && (t += "&ai_last_name=" + i);
                                i = Rt(e, "email"), null !== i && (t += "&ai_email=" + i);
                                i = Rt(e, "phone"), null !== i && (t += "&ai_phone=" + i);
                                i = jt(e, "comment"), null !== i && (t += "&ai_comments=" + i);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Ct:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.closest(".modal-content").querySelector(".modal-header h4"),
                                        n = e.querySelector("h3");
                                    t = "&ai_form_name=" + Yt((r || n).textContent.trim())
                                } catch (e) {}
                                var i = Rt(e, "first");
                                null !== i && (t += "&ai_first_name=" + i);
                                i = Rt(e, "last"), null !== i && (t += "&ai_last_name=" + i);
                                i = Rt(e, "email"), null !== i && (t += "&ai_email=" + i);
                                i = Rt(e, "phone"), null !== i && (t += "&ai_phone=" + i);
                                i = jt(e, "comment"), null !== i && (t += "&ai_comments=" + i);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case lt:
                            t = function(e) {
                                var t = "";
                                try {
                                    t = "&ai_form_name=" + Yt(n = e.getAttribute("data-form-id"))
                                } catch (e) {}
                                var r = Rt(e, "first");
                                null !== r && (t += "&ai_first_name=" + r);
                                r = Rt(e, "last"), null !== r && (t += "&ai_last_name=" + r);
                                r = Rt(e, "email"), null !== r && (t += "&ai_email=" + r);
                                r = Rt(e, "phone"), null !== r && (t += "&ai_phone=" + r);
                                try {
                                    var n = e.querySelector('textarea[name="describe_your_issue"]'),
                                        i = e.querySelector('textarea[name="multi_line"]'),
                                        o = n || i;
                                    if (null !== o) t += "&ai_comments=" + Yt(r = o.value)
                                } catch (e) {}
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Et:
                            t = function(e) {
                                var t = "";
                                try {
                                    t = "&ai_form_name=" + Yt((r = e.querySelector(".heading")).innerText.trim())
                                } catch (e) {}
                                try {
                                    var r;
                                    if (null !== (r = e.querySelector('input[name="FirstName"]'))) {
                                        var n = r.value.split(" ");
                                        t += "&ai_first_name=" + Yt(n[0]), void 0 !== n[1] && (t += "&ai_last_name=" + Yt(n[1]))
                                    }
                                } catch (e) {}
                                var i = Rt(e, "email");
                                null !== i && (t += "&ai_email=" + i);
                                i = Rt(e, "phone"), null !== i && (t += "&ai_phone=" + i);
                                i = jt(e, "comment"), null !== i && (t += "&ai_comments=" + i);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        case Ot:
                            t = function(e) {
                                var t = "";
                                try {
                                    var r = e.querySelector('input[name="_wp_http_referer"]');
                                    if (null !== r) {
                                        var n = r.value,
                                            i = n.split("/");
                                        t = "&ai_form_name=" + Yt((n = i[1]).trim())
                                    }
                                } catch (e) {}
                                var o = Rt(e, "first");
                                null !== o && (t += "&ai_first_name=" + o);
                                o = Rt(e, "last"), null !== o && (t += "&ai_last_name=" + o);
                                o = Rt(e, "email"), null !== o && (t += "&ai_email=" + o);
                                o = Rt(e, "phone"), null !== o && (t += "&ai_phone=" + o);
                                o = jt(e, "comment"), null !== o && (t += "&ai_comments=" + o);
                                return wr("  form data: " + t), t
                            }(e);
                            break;
                        default:
                            t = function(e) {
                                var t = "";
                                if (t = function(e) {
                                        let t = "",
                                            r = e.getAttribute("data-autoid-form-name");
                                        if (null === r) return wr("bailing on AI form catch all. No form name found."), t;
                                        t = "&ai_form_name=" + r;
                                        let n = e.getElementsByClassName("autoid-first-name")[0];
                                        n && (t += "&ai_first_name=" + Yt(n.value.trim()));
                                        n = e.getElementsByClassName("autoid-last-name")[0], n && (t += "&ai_last_name=" + Yt(n.value.trim()));
                                        n = e.getElementsByClassName("autoid-email")[0], n && (t += "&ai_email=" + Yt(n.value.trim()));
                                        n = e.getElementsByClassName("autoid-phone")[0], n && (t += "&ai_phone=" + Yt(n.value.trim()));
                                        n = e.getElementsByClassName("autoid-comment")[0], n && (t += "&ai_comments=" + Yt(n.value.trim()));
                                        if (n = e.getElementsByClassName("autoid-full-name")[0], n) {
                                            var i = n.value.split(" ");
                                            t += "&ai_first_name=" + Yt(i[0].trim()), void 0 !== i[1] && (t += "&ai_last_name=" + Yt(i[1].trim()))
                                        }
                                        return wr("New AI form data: " + t), t
                                    }(e), t) return wr("  ai form data: " + t), t;
                                var r = function(e) {
                                    var t = null;
                                    try {
                                        if (null === t) {
                                            t = e.getAttribute("name");
                                            var r = e.getAttribute("id") || t;
                                            null !== r && (t = r)
                                        }
                                    } catch (a) {}
                                    try {
                                        var n = e.closest("h1"),
                                            i = e.querySelector("fieldset > legend"),
                                            o = e.getAttribute("data-form-title"),
                                            a = document.querySelector(".action-buttons-share-form h3");
                                        null !== o && (t = o), null !== n ? t = n.innerText.replace(/\s/g, "").toLowerCase() : null !== i ? t = i.innerText : null !== a && (t = a.innerText.trim())
                                    } catch (a) {}
                                    try {
                                        if (null === t) {
                                            var l = e.querySelector('input[name="FormName"]'),
                                                c = (n = e.querySelector('input[name="form_name"]'), i = e.getAttribute("data-form-id"), l || n || i);
                                            null !== c && (t = c.value)
                                        }
                                    } catch (a) {}
                                    try {
                                        if (null === t) {
                                            var u = e.closest(".modal-dialog");
                                            if (null !== u) {
                                                var m = u.querySelector(".modal-header .modal-title");
                                                if (null !== m) t = _ = m.innerText.trim()
                                            } else {
                                                var d = e.closest(".form-modal");
                                                if (null !== d) null !== (s = d.querySelector(".header")) && (t = s.innerText)
                                            }
                                        }
                                    } catch (a) {}
                                    try {
                                        if (null === t)
                                            if (null !== (s = e.querySelector(".gform_title"))) t = s.innerText;
                                            else if (-1 !== e.className.indexOf("sc-CtfFt")) t = "Contact Us";
                                        else if (null !== e.getAttribute("data-form-tracking-id")) {
                                            t = e.getAttribute("data-form-tracking-id")
                                        }
                                    } catch (a) {}
                                    try {
                                        if (null === t) {
                                            var s = e.closest("#modalContentContainer"),
                                                f = e.closest(".formWrapper");
                                            if (null !== s) null !== (_ = s.querySelector(".modalTitle")) && (t = _.innerText);
                                            else if (null !== f) {
                                                var _;
                                                null !== (_ = f.querySelector(".title")) && (t = _.innerText)
                                            } else {
                                                var v = e.closest(".ui-dialog").querySelector(".ui-dialog-title");
                                                null !== v && (t = v.innerText)
                                            }
                                        }
                                    } catch (a) {}
                                    try {
                                        if (null === t)
                                            if (null !== (l = e.getAttribute("action")) && 0 !== l.indexOf("http")) {
                                                var p = l.split("/");
                                                t = "" == p[0] ? p[1] : p[0]
                                            }
                                    } catch (a) {}
                                    null === t ? wr("No form name found for catch all") : t = Yt(t.trim());
                                    return t
                                }(e);
                                if (null === r) return wr("bailing on form catch all. No form name found."), t;
                                t = "&ai_form_name=" + r;
                                var n = Rt(e, "first");
                                null !== n && (t += "&ai_first_name=" + n);
                                null !== n && null !== (n = Rt(e, "last")) && (t += "&ai_last_name=" + n);
                                n = Rt(e, "email"), null !== n && (t += "&ai_email=" + n);
                                n = Rt(e, "phone"), null !== n && (t += "&ai_phone=" + n);
                                n = jt(e, "comment"), null !== n && (t += "&ai_comments=" + n);
                                return wr("  form data: " + t), t
                            }(e)
                    }
                    return t
                }(e);
            wr("form capture: " + (t = (t = r + n + "&form=" + t).substring(0, 1e3)));
            var o = {};
            o.ai_data = _e(), o.ai_form_data = n, D(0, o)
        }
    }

    function se(e) {
        var t = "",
            r = /(applicant.ssn=)(.*?(?=&|$))/i;
        t = e.replace(r, "$1");
        r = /(applicant.dob=)(.*?(?=&|$))/i;
        t = t.replace(r, "$1");
        r = /(applicant.contact.address.street=)(.*?(?=&|$))/i;
        t = t.replace(r, "$1");
        r = /(LicenseNumber=)(.*?(?=&|$))/i;
        t = t.replace(r, "$1");
        r = /(SSN=)(.*?(?=&|$))/i;
        t = t.replace(r, "$1");
        r = /(MonthlySalary=)(.*?(?=&|$))/i;
        t = t.replace(r, "$1");
        r = /(Employer=)(.*?(?=&|$))/i;
        t = t.replace(r, "$1");
        r = /(income)(.*?(?=&|$))/i;
        t = t.replace(r, "$1");
        r = /(salary)(.*?(?=&|$))/i;
        t = t.replace(r, "$1");
        r = /(birthdate)(.*?(?=&|$))/i;
        t = t.replace(r, "$1");
        r = /(ssn)(.*?(?=&|$))/i;
        return t = t.replace(r, "$1")
    }

    function fe() {
        var e = "";
        for (var t in k) {
            if (k.hasOwnProperty(t)) e += "&" + t + "=" + k[t]
        }
        return e
    }

    function _e() {
        var e = {};
        for (var t in k) k.hasOwnProperty(t) && (e[t] = k[t]);
        return e
    }
    var ve = 0,
        pe = null;
    const ge = "c3RhdGljLmRlYWxlci5jb20=",
        he = "LmRlYWxlci5jb20=",
        ye = "amF6ZWxhdXRvLmNvbQ==",
        be = "ZGVhbGVyb24uY29t",
        we = "ZnVzaW9uem9uZQ==",
        Se = "YXV0b29uZW1lZGlh",
        ke = "ZGVhbGVyZXByb2Nlc3MuY29t",
        xe = "ZGVhbGVyZmlyZS5jb20=",
        qe = "ZGVhbGVyZmlyZQ==",
        Ae = "Y29iYWx0LmNvbQ==",
        Te = "ZGVhbGVyaW5zcGlyZS5jb20=",
        Ce = "cHJlY2lzaW9uZG9vcg==",
        Ee = "ZGVhbGVyZG5h",
        De = "bW90b3J3ZWJzLmNvbQ==",
        Le = "ZGVhbGVyc3Bpa2UuY29t",
        Oe = "Z3NtYXJrZXRpbmcuY29t",
        Ne = "cmVtb3JhaW5jLmNvbQ==",
        Ie = "Zm94ZGVhbGVyLmNvbQ==",
        Pe = "Y2xpY2ttb3RpdmUuY29t",
        Me = "ZWFybmhhcmR0Zm9yZC5jb20=",
        Fe = "cHJlc3RpZ2VpbXBvcnRzLm5ldA==",
        Ve = "cm5kaW50ZXJhY3RpdmUuY29t",
        Re = "bW90aW9uZnV6ZS5jb20=",
        je = "cHJvbWF4dW5saW1pdGVkLmNvbQ==",
        Ge = "c3RlYW15Y29uY2VwdHMuY29t",
        Ye = "YmV6aWduZGVzaWduLmNvbQ==",
        $e = "YXJpbmV0LmNvbQ==",
        We = "d3NpcHJvbWFya2V0ZXJzLmNvbQ==",
        Ze = "YWllbGxvaG9tZXNlcnZpY2VzLmNvbQ==",
        Be = "c3RyYXR1c2RlbnRhbC5jb20=",
        He = "YXN0b25tYXJ0aW5hbWVyaWNhcy5jb20=",
        Je = "Y2hhbXBpb253aW5kb3cuY29t",
        Ue = "cnZ3ZWJzZXJ2aWNlcy5jb20=",
        Xe = "aW1hcmtldHNvbHV0aW9ucy5jb20=",
        ze = "eGNlbG1lZGlhZ3JvdXAuY29t",
        Qe = "bmFrZWRsaW1lLmNvbQ==",
        Ke = "cmV2b2x1dGlvbnBhcnRzLmNvbQ==",
        et = "Y2J0bmV3cy5jb20=",
        tt = "cmljayBjYXNl",
        rt = "Zm9yZGRpcmVjdA==",
        nt = "Zm9yY2Vta3RnLmNvbQ==",
        it = ["Zm9yY2Vta3RnZGV2LmNvbQ==", "Zm9yY2Vta3RnLmNvbQ=="],
        ot = "Ym93IHJpdmVyIGhlYXJpbmc=",
        at = "Z29vZG1hbm1mZy5jb20=",
        lt = "Y2FsbHJldnU=",
        ct = "cG9yc2NoZWRlYWxlci5jb20=",
        ut = [-108325400, -827254453, -847817114, -1841446615, 680657356, 10619929, 1082601729, -582309437, 2008459546, -509160503, 1847868898, 2107778468, 658238370, 807243152, 394814895, 924089783, 1423348984, 1816779238, -1142717054, -1812490578, 330029198, -601562222, 343793789, 284099562],
        mt = "ti",
        dt = "Y29tbWVyY2lhbHdlYnNlcnZpY2Vz",
        st = [-1601562788, 46152869, -928825526, -268871318],
        ft = "ZGVpY3JlYXRpdmUuY29t",
        _t = "Y2FsbHNvdXJjZS5jb20=",
        vt = "ZWxtb250ZXJ2c2FsZXMuY29t",
        pt = "YW1lcmljYW52aXNpb253aW5kb3dzLmNvbQ==",
        gt = "SEFEIE1hbmdhbWVudA==",
        ht = "Y2Fycy5jb20=",
        yt = "dm9sdm9jYXJzLmNvbQ==",
        bt = "djEyc29mdC5jb20=",
        wt = "ZWJpemF1dG9zLmNvbQ==",
        St = "cGl4ZWxtb3Rpb24=",
        kt = "d2Vic3RhZ2VyLmNvbQ==",
        xt = "ZmlyZXN0b3JtIHdlYnNpdGVz",
        qt = "cG93ZXJzcG9ydHRlY2hub2xvZ2llcy5jb20=",
        At = "dGhvbXBzb25jcmVlay5jb20=",
        Tt = "U29rYWw=",
        Ct = "YXV0b3B1Ymxpc2hlcnMuY29t",
        Et = "aW50ZXJhY3RpdmUgcnYgZGVhbGVy",
        Dt = "bGl0dGxlYmlyZHRhbGVz",
        Lt = "dGVhbXZlbG9jaXR5",
        Ot = "ZnVsbHRocm90dGxl",
        Nt = "c2VyZ2VtZXRyaXguY29t",
        It = "bmFidGhhdC5jb20=",
        Pt = "bm96emxlbm9sZW4uY29t";

    function Mt(e) {
        if (null !== pe) return pe;
        if (ve > 2) return pe = -1;
        ++ve;
        var t = -1,
            r = document.querySelectorAll("footer, .footer_bottom, #footer, .footer-bottom-container, .footer, #footer-bottom, .ddc-footer, .footer-bottom"),
            n = "";
        r.forEach((function(e) {
            const t = e.cloneNode(!0);
            t.querySelectorAll("style, script").forEach((e => {
                e.remove()
            })), n += t.innerHTML.toLowerCase()
        })), e || (e = document.getElementsByTagName("head")[0]);
        const i = e.cloneNode(!0);
        i.querySelectorAll("style, script").forEach((e => {
            e.remove()
        }));
        let o = i.innerHTML.toLowerCase();
        const a = n + o;
        if (wr("findHostingCompany attempt: " + ve), function(e) {
                if (Vt(e, ge)) return !0;
                var t = !1,
                    r = document.querySelector('meta[name="providerID"]');
                null !== r && (t = "ddc" === r.content.toLowerCase());
                return t
            }(a)) t = he;
        else if (Vt(a, "bWV0YSBwcm9wZXJ0eT0ibGJ0Ig==")) t = Dt;
        else if (Vt(a, ye)) t = ye;
        else if (Vt(a, be)) t = be;
        else if (Vt(a, we)) t = we;
        else if (Vt(a, Se)) t = Se;
        else if (Vt(a, ke)) t = ke;
        else if (Vt(a, xe)) t = xe;
        else if (Vt(a, "Y2RrLmNvbQ==") || Vt(a, "Y29iYWx0bml0cmEuY29t") || Vt(a, "Y29iYWx0Z3JvdXAuY29t")) t = Ae;
        else if (Vt(a, Te)) t = Te;
        else if (Vt(a, "ZGVhbGVyaW5zcGlyZWRlYWxlcnRoZW1l")) t = Te;
        else if (Vt(a, "ZWRlYWxlci5jYQ==")) t = "ZWRlYWxlcg==";
        else if (Vt(a, Ce)) t = Ce;
        else if (Vt(a, Ee)) t = Ee;
        else if (Vt(a, De)) t = De;
        else if (Vt(a, "cHNtZmlyZXN0b3JtLmJsb2I=")) t = xt;
        else if (Vt(a, qt)) t = qt;
        else if (Vt(a, At)) t = At;
        else if (Vt(a, Le)) t = Le;
        else if (Vt(a, Oe)) t = Oe;
        else if (Vt(a, Ne)) t = Ne;
        else if (Vt(a, Ie)) t = Ie;
        else if (Vt(a, Pe)) t = Pe;
        else if (Vt(a, Me)) t = Me;
        else if (Vt(a, Fe)) t = Fe;
        else if (Vt(a, Ve)) t = Ve;
        else if (Vt(a, Re)) t = Re;
        else if (Vt(a, je)) t = je;
        else if (Vt(a, Ge)) t = Ge;
        else if (Vt(a, Ye)) t = Ye;
        else if (Vt(a, $e)) t = $e;
        else if (Vt(a, We)) t = We;
        else if (Vt(a, dt)) t = dt;
        else if (Vt(a, "Y3dzIHBsYXRmb3JtIHNpdGU=")) t = dt;
        else if (Vt(a, Ze)) t = Ze;
        else if (Vt(a, Be)) t = Be;
        else if (Vt(a, He)) t = He;
        else if (Vt(a, Je)) t = Je;
        else if (Vt(a, Ue)) t = Ue;
        else if (Vt(a, Xe)) t = Xe;
        else if (Vt(a, ze)) t = ze;
        else if (Vt(a, Qe)) t = Qe;
        else if (Vt(a, Ke)) t = Ke;
        else if (Vt(a, et)) t = et;
        else if (Vt(a, tt)) t = tt;
        else if (Vt(a, "Zm9yZGRpcmVjdHByaXZhY3k=")) t = rt;
        else if (Vt(a, ot)) t = ot;
        else if (Vt(a, at)) t = at;
        else if (Vt(a, ft)) t = ft;
        else if (Vt(a, _t)) t = _t;
        else if (Vt(a, vt)) t = vt;
        else if (Vt(a, pt)) t = pt;
        else if (Vt(a, "L2hhZC8=")) t = gt;
        else if (Vt(a, "aHR0cHM6Ly93d3cuY2Fycy5jb20=")) t = ht;
        else if (Vt(a, "Y2RuLXcudjEyc29mdC5jb20=")) t = bt;
        else if (Vt(a, wt)) t = wt;
        else if (Vt(a, St)) t = St;
        else if (Vt(a, kt)) t = kt;
        else if (Vt(a, yt)) t = yt;
        else if (Vt(a, it[0]) || Vt(a, it[1])) t = nt;
        else if (Vt(a, "Z29zb2thbC5jb20=")) t = Tt;
        else if (Vt(a, Ct)) t = Ct;
        else if (Vt(a, "YXNzZXRzLWNkbi1pbnRlcmFjdHJ2")) t = Et;
        else if (function() {
                var e = !1,
                    t = document.querySelector('meta[name="author"]');
                t && (e = t.getAttribute("content").toLowerCase() === Ft(lt));
                return e
            }()) t = lt;
        else if (Vt(a, Lt)) t = Lt;
        else if (Vt(a, Ot)) t = Ot;
        else if (Vt(a, Nt)) t = Nt;
        else if (Vt(a, It)) t = It;
        else if (Vt(a, Pt)) t = Pt;
        else {
            var l = function(e) {
                if (Array.prototype.reduce) return e.split("").reduce((function(e, t) {
                    return (e = (e << 5) - e + t.charCodeAt(0)) & e
                }), 0);
                var t = 0;
                if (0 === e.length) return t;
                for (var r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r), t &= t;
                return t
            }(document.location.host);
            wr("domain hash: " + l);
            var c = -1 !== st.indexOf(l);
            wr("ti domain_found: " + c), c ? t = mt : c || (wr("rv domain_found: " + (c = -1 !== ut.indexOf(l))), c && (t = Ue))
        } - 1 == t && -1 !== [59230855, -925097978, -981427314].indexOf(l) && (t = ct), -1 == t && window.top === window.self && (t = Mt(window.parent.document.body));
        const u = document.getElementsByClassName("copyrightProvider")[0],
            m = document.querySelector('meta[name="providerID"]');
        return void 0 !== u ? u.textContent.toLowerCase().indexOf(Ft(rt)) > -1 ? t = rt : u.textContent.toLowerCase().indexOf(Ft("ZGVhbGVyb24=")) > -1 && (t = be) : null !== m && (m.getAttribute("content").toLowerCase().indexOf(Ft(qe)) > -1 ? t = xe : m.getAttribute("content").toLowerCase().indexOf(Ft("ZGVhbGVyIGluc3BpcmU=")) > -1 ? t = Te : m.getAttribute("content").toLowerCase().indexOf("ddc") > -1 && (t = he)), "object" == typeof _dfaq && _dfaq.toString().indexOf(Ft(qe) > -1) && (t = xe), pe = t, wr("hosting_company: " + Ft(t)), pe
    }

    function Ft(e) {
        var t = "";
        try {
            "string" == typeof e && (t = window.atob(e))
        } catch (t) {
            wr("Error converting: " + e + " Error: " + t)
        }
        return t
    }

    function Vt(e, t) {
        t = Ft(t);
        return -1 !== e.indexOf(t)
    }

    function Rt(e, t) {
        return Gt(e, "input", t)
    }

    function jt(e, t) {
        return Gt(e, "textarea", t)
    }

    function Gt(e, t, r) {
        var n = null;
        try {
            var i = e.querySelector(`${t}[name*="${r}" i]`),
                o = e.querySelector(`${t}[id*="${r}" i]`),
                a = e.querySelector(`${t}[placeholder*="${r}" i]`),
                l = e.querySelector(`${t}[contactfield*="${r}" i]`),
                c = e.querySelector(`${t}[type*="${r}" i]`),
                u = e.querySelector(`${t}[aria-label*="${r}" i]`),
                m = e.querySelector(`${t}[class*="${r}" i]`),
                d = i || o || a || l || c || u || m;
            n = null !== d ? d.value : function(e, t, r) {
                for (var n = null, i = e.querySelectorAll("label.gfield_label"), o = 0; o < i.length; o++) {
                    var a = i[o];
                    if (a.textContent.toLowerCase().includes(`${r}`)) {
                        n = a.parentElement.querySelector(`.ginput_container ${t}`).value;
                        break
                    }
                }
                return n
            }(e, t, r), null !== n && (n = Yt(n.trim()))
        } catch (e) {}
        return n
    }

    function Yt(e) {
        return encodeURIComponent(e.trim())
    }

    function $t(e) {
        var t = "";
        try {
            null !== (a = e.getAttribute("name")) && (t = "&ai_form_name=" + Yt(a))
        } catch (e) {
            wr(" error: " + e)
        }
        if (null !== (o = Rt(e, "first"))) t += "&ai_phone=" + o;
        else if (null !== (o = Rt(e, "full"))) {
            for (var r = o.split(" "), n = "", i = 0; i < r.length; i++) 0 == i ? t += "&ai_first_name=" + r[i] : n += r[i] + " ";
            t += "&ai_last_name=" + n
        }
        null !== (o = Rt(e, "last")) && (t += "&ai_last_name=" + o), null !== (o = Rt(e, "email")) && (t += "&ai_email=" + o);
        try {
            var o, a = Rt(e, "phone");
            if (null !== a) "" !== (o = a) && "(___)___-____" !== o && (t += "&ai_phone=" + Yt(null))
        } catch (e) {}
        return null !== (o = Rt(e, "comment")) && (t += "&ai_comment=" + o), wr("  form data: " + t), t
    }

    function Wt(e) {
        return Mt() === e
    }

    function Zt(e) {
        var t = e;
        if (Wt(he)) {
            if (void 0 !== window.DDC && void 0 !== window.DDC.siteSettings) {
                var r = window.DDC.siteSettings.defaultDomain;
                wr("default dealer.com defaultDomain: " + (t = nr(r = r.replace(/^https?:\/\//, ""))))
            }
        } else if (Wt(nt)) {
            var n = document.querySelector('meta[name="defaultDomain"]');
            n && wr("default force marketing domain: " + e + " defaultDomain: " + (t = n.getAttribute("content")))
        }
        return t
    }
    async function Bt() {
        const e = {
                ga_cookie: null,
                ga4_cookie: null,
                tid_cookie: null,
                t3website_cookie: null
            },
            t = async function() {
                let e = null;
                return Ht((function() {
                    return e = Qt("_ga") || null, null !== e
                })).then((function() {
                    return zt(e)
                }), (function(e) {
                    wr("[waitFor ga] Timed out looking for GA cookie.")
                }))
            }(),
            r = async function() {
                let e = null;
                return Ht((function() {
                    return e = I("_ga_") || null, null !== e
                })).then((function() {
                    return zt(e)
                }), (function() {
                    wr("[waitFor ga4] Timed out looking for GA4 cookie.")
                }))
            }(),
            n = async function() {
                let e = null;
                return Ht((function() {
                    return e = Qt("TID") || null, null !== e
                })).then((function() {
                    return e
                }), (function() {
                    wr("[waitFor tid] Timed out looking for TID cookie.")
                }))
            }(),
            i = async function() {
                let e = null,
                    t = null;
                return await Ht((function() {
                    return t = Qt("t3website") || null, null !== t
                })).then((function() {
                    if (null !== t) try {
                        e = decodeURI(t)
                    } catch (e) {}
                    return e
                }), (function() {
                    wr("[waitFor t3website] Timed out looking for t3website cookie.")
                }))
            }(),
            o = await Promise.all([t, r, n, i]);
        return e.ga_cookie = o[0], e.ga4_cookie = o[1], e.tid_cookie = o[2], e.t3website_cookie = o[3], e
    }

    function Ht(e, t) {
        t || (t = 2e3);
        var r, n, i = (r = {}, n = new Promise((function(e, t) {
                r.resolve = e, r.reject = t
            })), r.promise = n, r),
            o = !1,
            a = !1;
        const l = setTimeout((function() {
            o = !0, i.reject()
        }), t);
        return setTimeout((function t() {
            if (!o && !a) return e() ? (a = !0, clearTimeout(l), i.resolve()) : void setTimeout(t, 300)
        }), 300), i.promise
    }

    function Jt(e, t, r, n, i) {
        ! function(e, t, r, n, i) {
            Wt(he) && (e.is_ddc_domain = !0, e.last_retry = 9 === window.ddc_retry_counter);
            var s = {
                    method: "POST",
                    mode: "cors",
                    credentials: "omit",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(e)
                },
                g = b + "ai";
            gHelperData.data_to_ai = e, Ut(g, s, A).then((function(e) {
                return e.json()
            })).then((function(e) {
                lr(),
                    function(e, t, r, n, i) {
                        if (wr("Success sending data to AI at " + Date()), gHelperData.data_from_ai = e, function() {
                                Wt(ht) && void 0 !== window.performance && (window.performance.mark("dni_started"), wr("DNI started performance called for cars.com"))
                            }(), e.maintenance_mode_enabled) console.log("ai is currently in maintenance mode: " + e.maintenance_text);
                        else if (e.is_a_bot) wr("bot detected by ai");
                        else if (!0 === e.disabled) console.log("Domain Disabled"), fr();
                        else {
                            null !== e.generated_page_id && (v = e.generated_page_id, function(e, t) {
                                var r = escape(t) + "; expires=0",
                                    n = e + "=" + r + ";domain=." + tr + "; path=/";
                                rr() && (n += ";SameSite=None; Secure");
                                document.cookie = n
                            }(l, v));
                            var s = Xt(f);
                            s && null !== e.generated_uuid ? (f = e.generated_uuid, er(o, f, 180), _ = e.generated_sess, Kt(a, _, 30)) : s || (er(o, f, 180), Xt(_) && null !== e.generated_sess && (_ = e.generated_sess), Kt(a, _, 30)), gHelperData.data_to_ai.sid = _, L(f, _, v, p, cookies, t, r, n, i), d = e.is_mobile && e.domain_settings.every_lead_package > 0 && e.domain_settings.texting_modal;
                            var g = e.result.global_id;
                            if (k.gid !== g && (wr("updating gAIData gid from " + k.gid + " to " + g), k.gid = g), null != e.ddn_result) {
                                if ("string" == typeof e.ddn_result.message && wr("AI Message: *** " + e.ddn_result.message + " ***"), void 0 !== e.ddn_result.dni_triggers_triggered && (wr("DNI_Trgger: data: " + JSON.stringify(e.ddn_result)), e.ddn_result.dni_triggers_triggered && (wr("[DNI Trigger] create cookie if it does not exist with timestamp: " + e.ddn_result.dni_triggered_at), wr("[DNI Trigger] data.ddn_result.dni_triggered_session_length: " + e.ddn_result.dni_triggered_session_length), Kt(u, e.ddn_result.dni_triggered_until, e.ddn_result.dni_triggered_session_length))), e.ddn_result.hasOwnProperty("dni_campaign_numbers")) {
                                    wr("[DNI Trigger] Found DNI Campaign Numbers " + JSON.stringify(e.ddn_result.dni_campaign_numbers));
                                    const t = Object.keys(e.ddn_result.dni_campaign_numbers);
                                    for (var h in gHelperData.swapped_numbers = {}, t) {
                                        const r = t[h],
                                            n = e.ddn_result.dni_campaign_numbers[r];
                                        wr("wanting to swap static: " + r + " with " + n), mr(r, JSON.stringify(n))
                                    }
                                    gHelperData.swapped_numbers = e.ddn_result.dni_campaign_numbers, fr(e)
                                } else if (e.ddn_result.hasOwnProperty("multisite_ddn")) {
                                    for (var h in S) {
                                        var y = S[h],
                                            w = e.ddn_result.multisite_ddn[y];
                                        mr(y, JSON.stringify(w))
                                    }
                                    fr(e)
                                } else if (e.ddn_result.hasOwnProperty("singlesite_ddn")) {
                                    for (var h in S) {
                                        y = S[h], w = e.ddn_result.singlesite_ddn[y];
                                        mr(y, JSON.stringify(w))
                                    }
                                    fr(e)
                                } else null != e.ddn_result.num_1 && null != e.ddn_result.static_1 && (mr(JSON.stringify(e.ddn_result.static_1), JSON.stringify(e.ddn_result.num_1)), mr(JSON.stringify(e.ddn_result.mobile_static_1), JSON.stringify(e.ddn_result.num_1))), null != e.ddn_result.num_2 && null != e.ddn_result.static_2 && (mr(JSON.stringify(e.ddn_result.static_2), JSON.stringify(e.ddn_result.num_2)), mr(JSON.stringify(e.ddn_result.mobile_static_2), JSON.stringify(e.ddn_result.num_2))), null != e.ddn_result.num_3 && null != e.ddn_result.static_3 && (mr(JSON.stringify(e.ddn_result.static_3), JSON.stringify(e.ddn_result.num_3)), mr(JSON.stringify(e.ddn_result.mobile_static_3), JSON.stringify(e.ddn_result.num_3))), null != e.ddn_result.num_4 && null != e.ddn_result.static_4 && (mr(JSON.stringify(e.ddn_result.static_4), JSON.stringify(e.ddn_result.num_4)), mr(JSON.stringify(e.ddn_result.mobile_static_4), JSON.stringify(e.ddn_result.num_4))), null != e.ddn_result.num_5 && null != e.ddn_result.static_5 && (mr(JSON.stringify(e.ddn_result.static_5), JSON.stringify(e.ddn_result.num_5)), mr(JSON.stringify(e.ddn_result.mobile_static_5), JSON.stringify(e.ddn_result.num_5))), fr(e);
                                ! function() {
                                    var e = gHelperData.data_to_ai.sid,
                                        t = gHelperData.data_from_ai.session_length,
                                        r = sr();
                                    if (0 === r.length) return;
                                    var n = {
                                            sid: e,
                                            numbers: r
                                        },
                                        i = JSON.stringify(n);
                                    wr("[createLocalDNICookie] setting dni cookie_value: " + i), Kt(m, i, t)
                                }()
                            } else fr(e);
                            er(c, g, 1800), x = e.is_mobile, "" !== pr(Ft("YWlhbGVydA==")) && (alert("Build Date: " + gHelperData.build_date), alert("Detected as mobile device: " + x), alert("Replaced Numbers: " + JSON.stringify(sr()))),
                                function(e) {
                                    wr("[initChat] data: " + JSON.stringify(e));
                                    let t = 0 === e.domain_settings.chat_hours.length,
                                        r = new Date;
                                    if (e.domain_settings.chat_hours.forEach((function(n) {
                                            (function(e, t, r, n) {
                                                let i = [1, 2, 4, 8, 16, 32, 64];
                                                r = 6e4 * r * -1;
                                                wr(`[isWithinChatHours] locationTimezoneOffset: ${n=null===n?"+0000":n}`);
                                                const o = n = function(e) {
                                                    const t = e.substr(0, 3),
                                                        r = e.substr(3, e.length - 1);
                                                    return 36e5 * `${t}.${r}`
                                                }(n);
                                                wr(`[isWithinChatHours] totalOffset: ${o}`), wr("[isWithinChatHours] totalOffset minutes: " + o / 6e4), wr("[isWithinChatHours] totalOffset hours: " + o / 6e4 / 60);
                                                let a = new Date(e).toUTCString();
                                                wr(`[isWithinChatHours] UTCDate: ${a}`);
                                                let l = new Date(a).getTime();
                                                wr(`[isWithinChatHours] now with calculated offset: ${(e=new Date(l+o)).toUTCString()}`);
                                                let c = i[e.getUTCDay()];
                                                if ((t.day_map & c) == c) try {
                                                    let r = e.getUTCMinutes();
                                                    r = r < 10 ? "0" + r : r;
                                                    let n = e.getUTCHours();
                                                    n = n < 10 ? "0" + n : n;
                                                    let i = Number(`${n}${r}`);
                                                    if (wr(`[isWithinChatHours]  hourRange.start_time: ${t.start_time}`), wr(`[isWithinChatHours]  hourRange.end_time: ${t.end_time}`), wr(`[isWithinChatHours]  currentTimeOfDay: ${i}`), Number(t.start_time) <= i && Number(t.end_time) >= i) return !0
                                                } catch (e) {
                                                    console.log(e)
                                                }
                                                return !1
                                            })(r, n, r.getTimezoneOffset(), e.domain_settings.timezone_offset) && (t = !0)
                                        })), e.domain_settings.chat_enabled && t) {
                                        var n = e.result.global_id,
                                            i = e.wid,
                                            o = f,
                                            a = e.generated_page_id,
                                            l = _;
                                        wr("for chat gid " + n), wr("for chat domain " + i), wr("for chat domain_uuid " + o), wr("for chat page_id " + a), wr("for chat session_id " + l);
                                        var c = `//${"chat.autoid.com"}/chat.js${`?gid=${encodeURIComponent(n)}&d=${encodeURIComponent(i)}&duuid=${encodeURIComponent(o)}&pid=${encodeURIComponent(a)}&sid=${encodeURIComponent(l)}&aidebug=${Lr()}`}`;
                                        _r(c, "aichat_init"), wr(`[initChat] loaded ai chat init script: ${c}`)
                                    }
                                }(e),
                                function(e) {
                                    if (wr("[initBookNow] data: " + JSON.stringify(e)), e.domain_settings.book_now_enabled) {
                                        const t = e.result.global_id,
                                            r = e.wid,
                                            n = f,
                                            i = e.generated_page_id,
                                            o = _;
                                        wr("for book now gid " + t), wr("for book now domain " + r), wr("for book now domain_uuid " + n), wr("for book now page_id " + i), wr("for book now session_id " + o);
                                        const a = `//${"chat.autoid.com"}/book_now.js${`?gid=${encodeURIComponent(t)}&d=${encodeURIComponent(r)}&duuid=${encodeURIComponent(n)}&pid=${encodeURIComponent(i)}&sid=${encodeURIComponent(o)}&aidebug=${Lr()}`}`;
                                        wr(`[initBookNow] attempting to load ai book now script from: ${a}`), _r(a, "ai_book_now"), wr(`[initBookNow] loaded ai book now init script: ${a}`)
                                    }
                                }(e), e.result.refpv && async function(e, t) {
                                    const r = await Bt(),
                                        n = {
                                            pk: e,
                                            toe: t,
                                            ck: r
                                        };
                                    var i = {
                                            method: "POST",
                                            mode: "cors",
                                            credentials: "omit",
                                            headers: {
                                                "Access-Control-Allow-Origin": "*",
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify(n)
                                        },
                                        o = b + "ucc";
                                    Ut(o, i, A)
                                }(e.result.refpv, e.result.reftoe)
                        }
                        var x
                    }(e, t, r, n, i)
            })).catch((function(e) {
                wr(" fetch error: " + JSON.stringify(e)), lr(), -1 !== e.message.indexOf("timed out") ? (console.log("Got timeout from AI: " + b), wr("Timeout sending data to AI at " + Date())) : wr("Some other error sending data to AI at " + Date() + " " + e.message)
            }))
        }(e, t, r, n, i)
    }

    function Ut(e, t, r) {
        const n = new AbortController;
        t.signal = n.signal;
        const i = t;
        setTimeout((function() {
            n.abort()
        }), r);
        return fetch(e, i).then((function(e) {
            if (!e.ok) throw new Error(e.status + ": " + e.statusText);
            return e
        })).catch((function(e) {
            if ("AbortError" === e.name) throw new Error("Response to AI timed out after " + r + " milliseconds.");
            throw new Error(e.message)
        }))
    }

    function Xt(e) {
        return null == e || "" == e || "undefined" == e || "NaN" == e
    }

    function zt(e) {
        let t = null;
        try {
            const r = e.split(".");
            4 === r.length ? t = `${r[2]}.${r[3]}` : 9 === r.length && (t = `${r[2]}.${r[5]}`)
        } catch (e) {
            wr(`[parseGACookieValues] error: ${e}`)
        }
        return t
    }

    function Qt(e) {
        var t, r, n, i = document.cookie.split(";");
        for (t = 0; t < i.length; t++)
            if (r = i[t].substr(0, i[t].indexOf("=")), n = i[t].substr(i[t].indexOf("=") + 1), (r = r.replace(/^\s+|\s+$/g, "")) == e) return unescape(n)
    }

    function Kt(e, t, r) {
        var n = new Date;
        n.setTime(n.getTime() + 60 * r * 1e3);
        var i = e + "=" + (escape(t) + "; expires=" + n.toGMTString()) + ";domain=." + tr + "; path=/";
        rr() && (i += ";SameSite=None; Secure"), document.cookie = i
    }

    function er(e, t, r) {
        var n = new Date;
        n.setTime(n.getTime() + 24 * r * 60 * 60 * 1e3);
        var i = e + "=" + (escape(t) + "; expires=" + n.toGMTString()) + ";domain=." + tr + "; path=/";
        rr() && (i += ";SameSite=None; Secure"), document.cookie = i
    }
    var tr = function() {
        for (var e = "", t = 0, r = document.domain, n = r.split("."), i = "_ai.tmp" + (new Date).getTime(); t < n.length - 1 && -1 == document.cookie.indexOf(i + "=" + i);) e = i + "=" + i + ";domain=" + (r = n.slice(-1 - ++t).join(".")), rr() && (e += ";SameSite=None; Secure"), document.cookie = e;
        return e = i + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + r, rr() && (e += ";SameSite=None; Secure"), document.cookie = e, r
    }();

    function rr() {
        return "https:" == document.location.protocol
    }

    function nr(e) {
        var t = e.match(/(www[0-9]?\.)?(.[^/:]+)/i);
        return null != t && t.length > 2 && "string" == typeof t[2] && t[2].length > 0 ? t[2] : null
    }

    function ir(e) {
        if ("number" == typeof e) return e;
        Math.trunc = Math.trunc || function(e) {
            return isNaN(e) ? NaN : e > 0 ? Math.floor(e) : Math.ceil(e)
        };
        var t = or(e);
        return Math.trunc(t)
    }

    function or(e) {
        var t = e;
        return "string" == typeof e && (t = e.replace(/[^\d.]/g, "")), t
    }

    function ar(e, t) {
        var r = e;
        "string" == typeof e && (r = document.getElementById(e));
        for (var n = "" + r.className; n.indexOf(t) > -1;) n = n.replace(t, "");
        r.className = n
    }

    function lr() {
        if (T)
            for (var e = document.querySelectorAll(".aiBlur"), t = 0; t < e.length; t++) void 0 !== e[t] && ar(e[t], "aiBlur")
    }

    function cr(t, r) {
        try {
            t.length > 0 && e(t, (function(e) {
                var t = e.firstChild;
                if (t)
                    do {
                        if (3 === t.nodeType && -1 !== t.nodeValue.indexOf(r)) {
                            var n = t.parentNode;
                            n && "script" !== n.tagName.toLowerCase() && ur(n, t, r)
                        }
                    } while (t = t.nextSibling)
            }))
        } catch (e) {
            wr("Error in blurText: " + e.message)
        }
    }

    function ur(e, t, r) {
        if (e.innerHTML.length - r.length < 4) e.classList.add("aiBlur");
        else {
            e.normalize();
            var n = e.innerHTML,
                i = n.indexOf("aiBlur") > -1;
            if (null !== n && !i) {
                var o = e.innerHTML.replace(r, '<aidni class="aiBlur">$&</aidni>');
                e.innerHTML = o
            }
        }
    }

    function mr(t, r) {
        if (null != t && null != r && "null" != r) {
            var n = t.substring(0, 3),
                i = t.substring(3, 6),
                o = t.substring(6, 10),
                a = r.substring(0, 3),
                l = r.substring(3, 6),
                c = r.substring(6, 10),
                u = new RegExp("(\\(?)" + n + "(\\))?([-. ]?)" + i + "([-. ]?)" + o, "g");
            document.title = document.title.replace(u, "$1" + a + "$2$3" + l + "$4" + c),
                function(t, r, n, i, o, a) {
                    try {
                        var l = document.querySelectorAll(t);
                        l.length > 0 && e(l, (function(e) {
                            var t, l, c = e.firstChild,
                                u = [];
                            if (c)
                                do {
                                    if (3 === c.nodeType && (l = (t = c.nodeValue).replace(r, n)) !== t)
                                        if (gHelperData.swapped_numbers[o] = a, window.gATLEAST_ONE_NUMBER_WAS_SWAPPED = !0, !i && /</.test(l)) try {
                                            c.insertAdjacentText("beforebegin", l), u.push(c)
                                        } catch (e) {} else c.nodeValue = l
                                } while (c = c.nextSibling);
                            u.length && u.parentNode.removeChild(u)
                        }))
                    } catch (e) {
                        wr("Error in replaceText: " + e.message)
                    }
                }("body *", u, "$1" + a + "$2$3" + l + "$4" + c, !1, t, r);
            for (var m = document.getElementsByTagName("a"), s = 0; s < m.length; s++) {
                var f = m[s],
                    _ = f.getAttribute("href"),
                    v = !1;
                if (null !== _) {
                    var p = _.match(u);
                    if (p)
                        for (s = 0; s < p.length; s++) v = !0
                }
                v && (_ = _.replace(u, "$1" + a + "$2$3" + l + "$4" + c), f.setAttribute("href", _), window.gATLEAST_ONE_NUMBER_WAS_SWAPPED = !0, d && (wr("Swapped existing number: " + t + " AI number: " + r), vr(r, f)))
            }
            if (Wt(Lt) && "string" == typeof salesNumber && (salesNumber = salesNumber.replace(u, "$1" + a + "$2$3" + l + "$4" + c)), Wt(he)) {
                const t = "data-click-to-call-phone";
                e(document.querySelectorAll(`[${t}]`), (function(e) {
                    let r = e.getAttribute(t);
                    if (r) {
                        const n = r;
                        r = r.replace(u, "$1" + a + "$2$3" + l + "$4" + c), e.setAttribute(t, r), wr("[swapnumbers ddc] replaced number for " + t + " attribute from original value: " + n + " to new value: " + r), window.gATLEAST_ONE_NUMBER_WAS_SWAPPED = !0
                    }
                }))
            }
        }
    }

    function dr() {
        V(), autoids_track()
    }

    function sr() {
        var e = [],
            t = 0;
        for (const [r, n] of Object.entries(gHelperData.swapped_numbers))
            if (e.push({
                    sn: r,
                    rn: n
                }), 10 === ++t) break;
        return e
    }

    function fr(e) {
        if (Wt(he) && !window.gATLEAST_ONE_NUMBER_WAS_SWAPPED) return window.ddc_retry_counter = void 0 === window.ddc_retry_counter ? 0 : ++window.ddc_retry_counter, void(window.ddc_retry_counter < 10 ? (wr("[ddc retrying] Attempt: " + window.ddc_retry_counter), setTimeout(dr, 500)) : wr("[ddc retrying] Timeout"));
        lr(), Wt(ht) && void 0 !== window.performance && (window.performance.mark("dni_finished"), wr("DNI completed performance called for cars.com")), void 0 !== e && (e.domain_settings.four_eyes && (_r("//scripts.foureyes.io/fe-init.js", "ai_4eyes"), wr("[four eyes] script has been launched")), e.domain_settings.dvp_script && (_r("//app.dvpwebservices.com/webdvp/script", "ai_dvp"), wr("[DVP] script has been launched")))
    }

    function _r(e, t) {
        if ("string" == typeof t) {
            if (document.getElementById(t)) return
        }
        var r = document.createElement("script");
        r.setAttribute("type", "text/javascript"), r.setAttribute("src", e), "string" == typeof t && r.setAttribute("id", t), document.getElementsByTagName("head")[0].appendChild(r)
    }

    function vr(e, t) {
        var r = function(t) {
            t.preventDefault(),
                function(e) {
                    var t = document.getElementById("autoid_modal");
                    null !== t && t.remove();
                    null !== (t = document.getElementById("autoid_modal_overlay")) && t.remove();
                    r = '#autoid_modal_overlay{display: none; z-index: 99999998; position: fixed; top:0; left:0; width:100%; height:100%; background-color: rgba(0,0,0,0.3);} .ai_modal {display:none; position:absolute; z-index:99999999; left:50%;top:30%; transform:translate(-50%, -30%);} .ai_modal_button{text-decoration:none; text-align:center;padding: 0em 0em;} #ai_modal_content{text-align:center;} .ai_modal_content_container .table{font-size:15pt; width:200px; margin:unset;} .table{background-color: #e8e8e8; border-radius:14px;} .modal_text{color:#434A54; font-size:30px; font-weight:600; font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;} .ai_modal_icon{margin:auto; width:60px;} #phone_icon{ width:50px;} h2{width: 100%; text-align: center; line-height: 0.1em; margin: 10px 0 20px; border-bottom: 1px solid #434A54;} h2 span {padding:0 10px; background-color:#E8E8E8;} .button_container {padding-top:16px;} #ai_call_button .modal_text{margin-bottom:6px;} #ai_or_spacer{text-transform: lowercase; background-color:#E8E8E8;}', n = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style"), n.appendChild(i), i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = r : i.appendChild(document.createTextNode(r));
                    var r, n, i;
                    var o = (rr() ? "https://" : "http://") + "ai.autoid.com",
                        a = '<a style="text-decoration:none;" id="ai_call_button" class="ai_modal_button" href="tel:' + e + '"> <div class="modal_text">Call</div> <img id="phone_icon" class="ai_modal_icon" src="' + o + '/images/phone_icon.svg"></a>',
                        l = '<a style="text-decoration:none;" id="ai_text_button" class="ai_modal_button" href="sms:' + e + '"> <div class="modal_text">Text</div> <img class="ai_modal_icon" src="' + o + '/images/text_icon.svg"></a>',
                        c = '<div class="table">';
                    c += '<div class="button_container">' + a + '</div>  <div class="button_container"><h2><span class="modal_text" id="ai_or_spacer">or</span></h2></div> <div style="padding-bottom:10px;">' + l + "</div>", c += "</div>";
                    var u = document.createElement("div");
                    u.setAttribute("id", "autoid_modal"), u.setAttribute("class", "ai_modal");
                    var m = '<div class="ai_modal_content_container"><div id="ai_modal_content">' + c + "</div></div>";
                    u.innerHTML = m, document.body.appendChild(u);
                    var d = document.createElement("div");
                    d.setAttribute("id", "autoid_modal_overlay"), document.body.appendChild(d), setTimeout((function() {
                        window.onclick = function(e) {
                            e.target !== s && "block" == s.style.display && (s.style.display = "none", f.style.display = "none")
                        }
                    }), 200);
                    var s = document.getElementById("autoid_modal"),
                        f = document.getElementById("autoid_modal_overlay");
                    s.style.display = "block", f.style.display = "block"
                }(e)
        };
        t.addEventListener("click", r), t.addEventListener("touchstart", r)
    }

    function pr(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)", "i").exec(location.search);
        return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
    }

    function gr(e) {
        for (var t = document.cookie.split(";"), r = {}, n = 0; n < t.length; n++) {
            var i = t[n].substring(0, t[n].indexOf("=")).trim(),
                o = t[n].substring(t[n].indexOf("=") + 1, t[n].length).trim();
            r[i] = o
        }
        return e ? r[e] ? r[e] : null : r
    }

    function hr() {
        var e = function() {
                var e;
                return gr("__utma") ? {
                    cookie: e = gr("__utma").split("."),
                    domainhash: e[0],
                    uniqueid: e[1],
                    ftime: e[2],
                    ltime: e[3],
                    stime: e[4],
                    sessions: e[5]
                } : null
            },
            t = function() {
                var e;
                return gr("__utmb") ? {
                    cookie: e = gr("__utmb").split("."),
                    gifrequest: e[1]
                } : null
            },
            r = function() {
                var e;
                return gr("__utmv") ? {
                    cookie: e = gr("__utmv").split("."),
                    value: e[1]
                } : null
            },
            n = function() {
                var e, t, r, n, i, o, a;
                if (!gr("__utmz")) return null;
                for (var l = (e = gr("__utmz").split("."))[4].split("|"), c = 0; c < l.length; c++) {
                    var u = l[c].substring(0, l[c].indexOf("=")),
                        m = decodeURIComponent(l[c].substring(l[c].indexOf("=") + 1, l[c].length));
                    switch (m = m.replace(/^\(|\)$/g, ""), u) {
                        case "utmcsr":
                            t = m;
                            break;
                        case "utmcmd":
                            r = m;
                            break;
                        case "utmccn":
                            n = m;
                            break;
                        case "utmctr":
                            i = m;
                            break;
                        case "utmcct":
                            o = m;
                            break;
                        case "utmgclid":
                            a = m
                    }
                }
                return {
                    cookie: e,
                    source: t,
                    medium: r,
                    name: n,
                    term: i,
                    content: o,
                    gclid: a
                }
            };
        this.getDomainHash = function() {
            return e() && e().domainhash ? e().domainhash : null
        }, this.getUniqueId = function() {
            return e() && e().uniqueid ? e().uniqueid : null
        }, this.getInitialVisitTime = function() {
            return e() && e().ftime ? e().ftime : null
        }, this.getPreviousVisitTime = function() {
            return e() && e().ltime ? e().ltime : null
        }, this.getCurrentVisitTime = function() {
            return e() && e().stime ? e().stime : null
        }, this.getSessionCounter = function() {
            return e() && e().sessions ? e().sessions : null
        }, this.getGifRequests = function() {
            return t() && t().gifrequest ? t().gifrequest : null
        }, this.getUserDefinedValue = function() {
            return r() && r().value ? decodeURIComponent(r().value) : null
        }, this.getCampaignSource = function() {
            return n() && n().source ? n().source : null
        }, this.getCampaignMedium = function() {
            return n() && n().medium ? n().medium : null
        }, this.getCampaignName = function() {
            return n() && n().name ? n().name : null
        }, this.getCampaignTerm = function() {
            return n() && n().term ? n().term : null
        }, this.getCampaignContent = function() {
            return n() && n().content ? n().content : null
        }, this.getGclid = function() {
            return n() && n().gclid ? n().gclid : null
        }
    }

    function yr() {
        return {
            type: 0,
            year: "",
            make: "",
            model: "",
            vin: "",
            price: 0,
            stock_no: "",
            trim: "",
            int_color: "",
            ext_color: "",
            mileage: 0
        }
    }

    function br(e) {
        return ! function(e) {
            return 0 !== e.type && "" !== e.vin && "" !== e.make && "" !== e.model && "" !== e.year
        }(e)
    }

    function wr(e) {
        Lr() && console.log(`[ai] ${e}`)
    }

    function Sr(e) {
        if (-1 !== e.indexOf(";base64,")) return "";
        var t = 0 == e.indexOf("http");
        if (!t) {
            var r = 0 !== e.indexOf("//images");
            e = r ? 0 == e.indexOf("//pictures.dealer.com") || 0 == e.indexOf("//images.dealer.com") ? "https:" + e : 0 == e.indexOf("//media-cdn.jazelc.com") || -1 !== e.indexOf("-jazel-") ? window.location.protocol + e : 0 == e.indexOf("//cdnmedia.endeavorsuite.com") || 0 == e.indexOf("//contentservice.") ? "https:" + e : e.indexOf("rackcdn.comstock-images") > 0 ? e.replace("rackcdn.comstock-images", "rackcdn.com/stock-images") : 0 === e.indexOf("//vimg.remorainc.com") || 0 === e.indexOf("//cdn-ds.com") ? "https:" + e : window.location.protocol + "//" + window.location.host + e : window.location.protocol + e
        }
        return (t = 0 == e.indexOf("http")) || (0 != e.indexOf("/") && (e = "/" + e), e = window.location.protocol + "//" + window.location.host + e), e
    }
    var kr = function(e, t) {
        for (Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
                for (var t = (this.document || this.ownerDocument).querySelectorAll(e), r = t.length; --r >= 0 && t.item(r) !== this;);
                return r > -1
            }); e && e !== document; e = e.parentNode)
            if (e.matches(t)) return e;
        return null
    };

    function xr(e, t, r, n) {
        var i = n || 3e3,
            o = (new Date).getTime(),
            a = !1,
            l = setInterval((function() {
                (new Date).getTime() - o < i && !a ? a = "function" == typeof e ? e() : "testFx parameter should be a function" : a ? (wr("'waitFor()' finished in " + ((new Date).getTime() - o) + "ms."), "function" != typeof t || t(), clearInterval(l)) : (wr("'waitFor()' timeout"), clearInterval(l), "function" != typeof r || r())
            }), 250)
    }

    function qr() {
        wr("jazel_deferred_inventory")
    }

    function Ar(e) {
        var t = {
            type: 0,
            year: "",
            make: "",
            model: "",
            vin: "",
            price: 0,
            stock_no: "",
            trim: "",
            int_color: "",
            ext_color: "",
            mileage: 0
        };
        "new" === e.itemCondition.toLowerCase() ? t.type = 1 : t.type = 2, t.vin = e.vehicleIdentificationNumber, t.year = e.vehicleModelDate, t.model = e.model, t.make = e.manufacturer, t.mileage = or(e.mileageFromOdometer), t.stock_no = e.sku, t.int_color = e.vehicleInteriorColor, t.ext_color = e.color, t.image_url = Sr(e.image);
        var r = document.querySelector('.price-item.active[itemprop="price"]').getAttribute("content");
        return void 0 !== r && (t.price = ir(r)), t
    }

    function Tr() {
        var e = {
            type: 0,
            year: "",
            make: "",
            model: "",
            vin: "",
            price: 0,
            stock_no: "",
            trim: "",
            int_color: "",
            ext_color: "",
            mileage: 0
        };
        if (document.querySelector(".info-area")) {
            var t = document.querySelectorAll("#info #details tbody tr td");
            if (t.length > 0) {
                for (var r = 0; r < t.length; r += 2) {
                    var n = t[r].innerText.toLowerCase(),
                        i = t[r + 1].innerText;
                    switch (n) {
                        case "manufacturer":
                            e.make = i;
                            break;
                        case "model":
                            e.model = i;
                            break;
                        case "year":
                            e.year = i;
                            break;
                        case "price":
                            e.price = ir(i)
                    }
                } - 1 !== document.location.pathname.indexOf("showrooms/") ? e.type = 1 : e.type = 2;
                var o = document.querySelector(".model-image img");
                null !== o && (o = o.getAttribute("src"), e.image_url = Sr(o))
            } else setTimeout(Cr, 3e3)
        }
        return e
    }

    function Cr() {
        var e;
        if (document.querySelector(".info-area")) {
            e = function() {
                xr((function() {
                    return document.querySelectorAll("#info #details tbody tr td").length > 0
                }), (function() {
                    Tr()
                }), (function() {}), 3e3)
            }.bind(null), "complete" === document.readyState ? e() : window.addEventListener ? window.addEventListener("load", e) : window.attachEvent && window.attachEvent("onload", e)
        }
    }

    function Er(e) {
        for (var t = null, r = document.querySelectorAll(".unit-attributes .row"), n = 0; n < r.length; n++) {
            var i = r[n].querySelectorAll("div"),
                o = i[0].innerText.toLowerCase();
            if ("condition" == e.toLowerCase() && "new/used" == o.toLowerCase()) {
                t = i[1].innerText.toLowerCase();
                break
            }
            if (o.toLowerCase() == e) {
                t = i[1].innerText;
                break
            }
        }
        return t.trim()
    }
    var Dr = null;

    function Lr() {
        if (null !== Dr) return Dr;
        var e = Ft("YWlkZWJ1Zw=="),
            t = pr(e);
        if ("" !== t) return Dr = t;
        var r = Qt(e);
        return Dr = void 0 !== r && r
    }! function() {
        f = Qt(o), _ = Qt(a), p = Qt(c), s = Qt(u),
            function() {
                try {
                    if (void 0 !== _) {
                        var e = Qt(m);
                        if (void 0 === e) return;
                        wr("[useOriginalLocalDNICookie] dni cookie value: " + e);
                        var t = JSON.parse(e);
                        if (t.sid !== _) return void wr("[DNI cookie] Not using DNI cookie because session ids do not match.");
                        for (var r in t.numbers) {
                            var n = t.numbers[r];
                            "number" == typeof n.rn && (n.rn = n.rn.toString()), 10 === n.rn.replace(/[^0-9]/g, "").length && mr(n.sn, n.rn)
                        }
                        lr()
                    } else wr("[DNI cookie] not using DNI cookie because session cookie was not found.")
                } catch (e) {
                    wr("[DNI cookie] error: " + e.stack)
                }
            }(), wr("== AutoID == Built: " + h), g = Qt("dkey"), cookies = function() {
                var e = !!navigator.cookieEnabled;
                void 0 !== navigator.cookieEnabled || e || (document.cookie = "testcookie", e = -1 != document.cookie.indexOf("testcookie"));
                return e
            }();
        var e = pr("gclid"),
            r = {};
        r.source = pr("utm_source"), r.medium = pr("utm_medium"), r.term = pr("utm_term"), r.keyword = pr("keyword"), r.content = pr("utm_content"), r.campaign = pr("utm_campaign"), gac = new hr;
        var n = {};
        n.source = gac.getCampaignSource(), n.medium = gac.getCampaignMedium(), n.term = gac.getCampaignTerm(), n.content = gac.getCampaignContent(), n.name = gac.getCampaignName(), n.gclid = gac.getGclid();
        var i = function() {
                var e = null;
                try {
                    "object" == typeof adobeDataLayer && "string" == typeof adobeDataLayer.ecid && (e = adobeDataLayer.ecid)
                } catch (e) {
                    wr("Adobe id related error: " + e.message)
                }
                return e
            }(),
            l = !Xt(f);
        ! function(e, r, n, i, o, a, l, c, u, m, d, s, f, _) {
            var v = {};
            v.build_date = h, v.raw = function() {
                var e = !1;
                try {
                    e = !!window.sessionStorage
                } catch (e) {}
                return [navigator.userAgent, [screen.height, screen.width, screen.colorDepth].join("x"), (new Date).getTimezoneOffset(), e, !0, t(navigator.plugins, (function(e) {
                    return [e.name, e.description, t(e, (function(e) {
                        return [e.type, e.suffixes].join("~")
                    })).join(",")].join("::")
                })).join(";")].join("###")
            }(), !1 !== u ? v.wid = tr : (console.log("document.location.host: " + document.location.host), v.wid = nr(document.location.host));
            v.wid = Zt(v.wid), v.protocol = document.location.protocol, v.href = document.location.href, v.path = document.location.pathname, v.search = document.location.search, v.hash = document.location.hash, v.uuid = e, v.sid = r, v.pid = n, v.gid = i, v.ddn_triggered_until = o, v.width = window.innerWidth, v.height = window.innerHeight, v.ref = document.referrer, v.host = document.location.host, v.number = l, v.dleu = a, v.ddc_sess = c || null, v.gutm_source = m.source, v.gutm_medium = m.medium, v.gutm_term = m.term, v.gutm_content = m.content, v.gutm_name = m.name, v.gutm_gclid = m.gclid, v.gclid = d, v.utm_source = s.source, v.utm_medium = s.medium, v.utm_term = s.term, v.utm_keyword = s.keyword, v.utm_content = s.content, v.utm_campaign = s.campaign, v.adobe_id = f, v.i_type = _.type || 0, v.i_image_url = _.image_url || "", v.i_image_url = encodeURI(v.i_image_url), v.i_vin = _.vin || 0, v.i_year = _.year || "", v.i_make = _.make || "", v.i_model = _.model || "", v.i_price = _.price || 0, v.i_stock_no = _.stock_no || "", v.i_trim = _.trim || "", v.i_int_color = _.int_color || "", v.i_ext_color = _.ext_color || "", v.i_mileage = _.mileage || 0, void 0 !== _.cars_dot_com_srp_data && (v.cars_dot_com_srp_data = JSON.stringify(_.cars_dot_com_srp_data));
            void 0 !== _.cars_dot_com_vdp_data && (v.cars_dot_com_vdp_data = JSON.stringify(_.cars_dot_com_vdp_data));
            v.hosted_by = Ft(Mt()),
                function(e, t, r, n, i) {
                    if (function() {
                            var e = null !== document.getElementById("ai_pixel_tracker");
                            e && wr("aip iframe already exists");
                            return e
                        }()) void 0 !== e.gid && "" !== e.gid && (e.fp = e.gid, Jt(e, t, r, n, i));
                    else {
                        var o = window.addEventListener ? "addEventListener" : "attachEvent";
                        (0, window[o])("attachEvent" == o ? "onmessage" : "message", (function(o) {
                            o.origin === y && (! function(e) {
                                var t = !1;
                                "string" == typeof e && 32 === e.length && (t = !0);
                                return t
                            }(o.data) ? null === o.data ? (wr("[aip] 3rd party cookies are disabled. Using local AI gid cookie:" + e.gid), e.fp = e.gid, Jt(e, t, r, n, i)) : wr("[aip] illegal iframe data: " + o.data) : (wr(" [aip] recevied data from aip iframe!:  " + o.data), e.fp = o.data, Jt(e, t, r, n, i)))
                        }), !1);
                        var a = document.createElement("iframe");
                        a.setAttribute("id", "ai_pixel_tracker"), a.setAttribute("style", "border:none; visibility:hidden; position: absolute; left: 0; top: 0; height:0; width:0;"), document.body.appendChild(a), a.setAttribute("src", y + "/pixel?domain=" + window.location.origin)
                    }
                }(v, m, d, s, a)
        }(f, _, v, p, s, l, E, g, cookies, n, e, r, i, function() {
            var e = function() {
                var e = yr();
                if (1 == document.querySelectorAll('meta[content="product.item"]').length || null !== document.querySelector('meta[property="og:description"][content^="Vehicle Details"]') || 1 == document.querySelectorAll('meta[content="new"]').length || 1 == document.querySelectorAll('meta[content="used"]').length || null !== document.querySelector(".vdp-vehicle-title") || null !== document.querySelector(".vehicleTitleContainer")) {
                    if (function() {
                            var e = null !== document.querySelector('meta[content="new"]'),
                                t = null !== document.querySelector('a.ePriceBtn[data-epriceconfiglocation="NewMobileVdp"]'),
                                r = -1 !== document.body.innerHTML.toLowerCase().indexOf("vdp-new"),
                                n = !1,
                                i = document.querySelector(".breadcrumb"),
                                o = document.querySelector("#breadcrumbs"),
                                a = i || o;
                            null != a && (n = a.innerText.toLowerCase().indexOf("new ") > 0);
                            return e || t || r || n
                        }()) e.type = 1;
                    else {
                        if (i = null !== document.querySelector('meta[content="used"]'), o = null !== document.querySelector('a.ePriceBtn[data-epriceconfiglocation="UsedMobileVdp"]'), a = -1 !== document.body.innerHTML.toLowerCase().indexOf("vdp-used"), !(i || o || a)) return e;
                        e.type = 2
                    }
                    var t = document.querySelector("#vehicleImgLarge .item.active .row");
                    if (null !== t ? (t = t.getAttribute("href"), e.image_url = Sr(t)) : null !== (t = document.querySelector(".carousel__item--hero img")) && (t = t.getAttribute("src"), e.image_url = Sr(t)), "object" == typeof window.digitalData && window.digitalData.page && window.digitalData.page.pageInfo) e.make = window.digitalData.page.pageInfo.vehicleMake, e.model = window.digitalData.page.pageInfo.vehicleModel, e.year = window.digitalData.page.pageInfo.vehicleYear, e.trim = window.digitalData.page.pageInfo.vehicleTrim, e.vin = window.digitalData.page.pageInfo.vehicleVin, e.price = ir(window.digitalData.page.pageInfo.tier3_vehicleMsrp), e.ext_color = window.digitalData.page.pageInfo.tier3_vehicleExteriorColor, e.int_color = window.digitalData.page.pageInfo.tier3_vehicleInteriorColor, e.stock_no = window.digitalData.page.pageInfo.tier3_vehicleStockNumber;
                    else {
                        var r = document.querySelector(".vinDisplay span"),
                            n = document.querySelector(".sms-lead-modal");
                        if (null !== r) e.vin = r.innerText;
                        else if (null !== n) e.vin = n.getAttribute("vin");
                        else try {
                            e.stock_no = document.querySelector(".ePriceBtn").getAttribute("data-vin")
                        } catch (e) {
                            wr(" error:" + e.message)
                        }
                        e = function(e) {
                            try {
                                var t = document.querySelectorAll('#content a[itemprop="url"]');
                                if (t.length > 0)
                                    for (var r = 0; r < t.length; r++) {
                                        var n = t[r].getAttribute("href"),
                                            i = -1 !== n.indexOf("year="),
                                            o = -1 !== n.indexOf("make="),
                                            a = -1 !== n.indexOf("model="),
                                            l = -1 !== n.indexOf("trim=");
                                        if (i && o && a || l)
                                            for (var c = n.substring(n.indexOf("?") + 1).split("&"), u = 0; u < c.length; u++) {
                                                var m = c[u].split("=");
                                                "year" == m[0] ? e.year = m[1] : "make" == m[0] ? e.make = m[1] : "model" == m[0] ? e.model = m[1] : "trim" == m[0] && (e.trim = t[r].firstChild.innerText)
                                            }
                                    } else {
                                        var d = document.querySelector(".ePriceBtn");
                                        if (d)
                                            if (d.getAttribute("data-vin") === e.vin) {
                                                e.year = d.getAttribute("data-year"), e.model = d.getAttribute("data-model");
                                                var s = d.getAttribute("data-make");
                                                e.make = null != s ? s : d.getAttribute("data-name")
                                            }
                                    }
                                try {
                                    e.stock_no = document.querySelector(".ePriceBtn").getAttribute("data-stock")
                                } catch (e) {
                                    wr("dealer on error:" + e.message)
                                }
                                var f = function() {
                                    var e = {
                                        int_color: "",
                                        ext_color: ""
                                    };
                                    try {
                                        var t = document.querySelector(".intColor span");
                                        null != t ? e.int_color = t.innerText : "string" == typeof vehicleIntColor && (e.int_color = vehicleIntColor);
                                        var r = document.querySelector(".extColor span");
                                        null != r ? e.ext_color = r.innerText : "string" == typeof vehicleExtColor ? e.ext_color = vehicleExtColor : e.ext_color = document.querySelector(".ePriceBtn").getAttribute("data-color");
                                        var n = document.querySelector(".vdp-vehicle-info .vdp-color");
                                        if (null !== n) {
                                            var i = n.querySelector(".vdp-info-body-small");
                                            if (null !== i) {
                                                i = i.innerText.trim().toLowerCase();
                                                var o = n.querySelector(".vdp-info-body-title");
                                                if (null !== o) {
                                                    var a = (o = o.innerText.trim()).split(" / ");
                                                    a.length > 1 ? (e.ext_color = a[0].trim(), e.int_color = a[1].trim()) : 0 === i.indexOf("ext. color") ? e.ext_color = o : 0 === i.indexOf("int. color") && (e.int_color = o)
                                                }
                                            }
                                        }
                                    } catch (e) {
                                        wr("dealer on color error:" + e.message)
                                    }
                                    return e
                                }();
                                if (e.int_color = f.int_color, e.ext_color = f.ext_color, e.price = function() {
                                        var e = 0;
                                        try {
                                            "undefined" != typeof vehicleMSRP && (e = ir(vehicleMSRP)), "undefined" != typeof vehiclePrice && (e = ir(vehiclePrice));
                                            var t = document.querySelector(".priceBlock");
                                            if (null !== t) {
                                                var r = t.querySelectorAll(".priceBlockItem.priceBlockItemPrice");
                                                if (1 === r.length) e = ir(i = r[0].innerText.trim().toLowerCase());
                                                else if (r.length > 1)
                                                    for (var n = 0; n < r.length; n++) {
                                                        var i; - 1 === (i = r[n].innerText.trim().toLowerCase()).indexOf(" price") && -1 === i.indexOf("msrp net ") || (e = ir(i))
                                                    } else if (0 == r.length) {
                                                        var o = document.querySelector(".vdp-sidebar-body .vdp-price-price");
                                                        if (null !== o) e = ir((e = o).innerText)
                                                    }
                                            }
                                        } catch (e) {
                                            wr("dealeron price error:" + e.message)
                                        }
                                        return e
                                    }(), 2 === e.type) try {
                                    if ("string" == typeof vehicleOdometer) e.mileage = or(vehicleOdometer);
                                    else {
                                        var _ = document.querySelectorAll(".vdp-vehicle-title li");
                                        for (u = 0; u < _.length; u++) {
                                            var v = _[u].innerText.toLowerCase().trim();
                                            if (-1 !== v.indexOf("mileage"))(c = v.split(" ")).length > 1 && (e.mileage = or(c[1]))
                                        }
                                    }
                                } catch (e) {
                                    wr("dealer on error:" + e.message)
                                }
                            } catch (e) {
                                wr("dealeron inventory error:" + e.message)
                            }
                            return e
                        }(e)
                    }
                }
                var i, o, a;
                return e
            }();
            br(e) && (e = function() {
                var e = yr();
                if (document.querySelectorAll('input[name="vin"]').length > 0 || document.querySelectorAll(".inventory-detail-pricing").length > 0) {
                    var t = document.querySelector('meta[name="keywords"]');
                    if (null !== t && -1 !== t.content.toLowerCase().indexOf("new ")) e.type = 1;
                    else if (null !== t && -1 !== t.content.toLowerCase().indexOf("used ")) e.type = 2;
                    else {
                        if (void 0 === window.DDC) return e;
                        var r = window.DDC.siteSettings.pageAlias.toLowerCase(),
                            n = -1 !== r.indexOf("auto"),
                            i = -1 !== r.indexOf("details"),
                            o = -1 !== r.indexOf("showroom");
                        if (!(n && i || o || "inventory_details_media" === r)) return e;
                        if (e.type = "showroom" === r || "auto_new_details" === r ? 1 : 2, void 0 !== window.DDC.dataLayer && void 0 !== window.DDC.dataLayer.vehicles && window.DDC.dataLayer.vehicles.length > 0) {
                            var a = window.DDC.dataLayer.vehicles[0];
                            "new" === a.inventoryType.toLowerCase() ? e.type = 1 : "new" === a.inventoryType.toLowerCase() && (e.type = 2), void 0 !== a.images && a.images.length > 0 && (e.image_url = Sr(a.images[0].uri)), e.vin = a.vin, e.year = a.modelYear, e.make = a.make, e.model = a.model, e.price = ir(a.msrp), e.mileage = or(a.odometer), e.trim = a.trim
                        }
                    }
                    if (void 0 === e.image_url || "" === e.image_url || null === e.image_url) {
                        var l = document.querySelector(".ddc-content.inventory-detail-media-tabs img"),
                            c = document.querySelector(".ddc-content.inventory-detail-media-tabs .imageViewer img"),
                            u = document.querySelector(".vehicle-media img.photo");
                        null !== c ? (l = c.getAttribute("src"), e.image_url = Sr(l)) : null !== l ? (l = l.getAttribute("src"), e.image_url = Sr(l)) : null !== u && (u = u.getAttribute("src"), e.image_url = Sr(u))
                    }
                    if ("" === e.vin) {
                        var m = document.querySelector('input[name="vin"]');
                        null !== m && (e.vin = m.value)
                    }
                    if ("" === e.make) try {
                        var d = document.querySelector(".ddc-content.vehicle-media");
                        if (null !== d) e.make = d.getAttribute("data-make"), e.model = d.getAttribute("data-model"), e.year = d.getAttribute("data-year");
                        else
                            for (var s = document.getElementsByTagName("script"), f = 0; f < s.length; f++) {
                                var _ = s[f].text;
                                if (-1 != _.indexOf("vehicleId:")) {
                                    try {
                                        var v = /(year:) '([^']+)'/;
                                        e.year = v.exec(_)[2], v = /(make:) '([^']+)'/, e.make = v.exec(_)[2], v = /(model:) '([^']+)'/, e.model = v.exec(_)[2]
                                    } catch (e) {
                                        wr("dealer dot com error:" + e.message)
                                    }
                                    break
                                }
                            }
                    } catch (e) {
                        wr("dealer dot com error2:" + e.message)
                    }
                    try {
                        if (void 0 !== window.DDC && void 0 !== DDC.dataLayer.vehicles[0]) {
                            e.stock_no = DDC.dataLayer.vehicles[0].stockNumber, e.int_color = null === DDC.dataLayer.vehicles[0].interiorColor ? "" : DDC.dataLayer.vehicles[0].interiorColor, e.ext_color = null === DDC.dataLayer.vehicles[0].exteriorColor ? "" : DDC.dataLayer.vehicles[0].exteriorColor;
                            var p = ir(DDC.dataLayer.vehicles[0].internetPrice),
                                g = ir(DDC.dataLayer.vehicles[0].msrp);
                            p > 0 && g > 0 ? e.price = p < g ? p : g : p > 0 ? e.price = p : g > 0 && (e.price = g), 2 === e.type && (e.mileage = or(DDC.dataLayer.vehicles[0].odometer))
                        } else {
                            var h = document.querySelector(".showroom-price");
                            null !== h && (e.price = ir(h.getAttribute("data-showroom-price")))
                        }
                    } catch (e) {
                        wr(" inventory error: " + e)
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (1 == document.querySelectorAll('meta[name="vehicle_id"]').length) {
                    if (document.querySelectorAll('link[itemprop="itemCondition"][href="http://schema.org/NewCondition"]').length > 0) e.type = 1;
                    else {
                        if (!(document.querySelectorAll('link[itemprop="itemCondition"][href="http://schema.org/UsedCondition"]').length > 0)) return e;
                        e.type = 2
                    }
                    var t = document.querySelector("img.preview_vehicle_image_item");
                    if (t) {
                        image_src_1 = t.getAttribute("data-src"), image_src_2 = t.getAttribute("src");
                        var r = null !== image_src_1 ? image_src_1 : image_src_2;
                        e.image_url = Sr(r)
                    } else(t = document.querySelector(".focus-image img")) && (t = t.getAttribute("src"), e.image_url = Sr(t));
                    var n = document.querySelector('meta[itemprop="serialNumber"]');
                    null !== n ? e.vin = n.getAttribute("content") : void 0 !== window.google_tag_params && void 0 !== window.google_tag_params.dynx_itemid && (e.vin = window.google_tag_params.dynx_itemid);
                    try {
                        var i = {},
                            o = document.querySelectorAll(".details-overview_title"),
                            a = document.querySelectorAll(".details-overview_data");
                        if (o && o.length == a.length)
                            for (var l = 0; l < o.length; l++) {
                                var c = o[l].innerText.trim().toLowerCase(),
                                    u = a[l].innerText.trim();
                                i[c] = u
                            }
                        var m = document.querySelector('meta[itemprop="manufacturer"]');
                        if (m && (e.make = m.content), (m = document.querySelector('meta[itemprop="model"]')) && (e.model = m.content), (m = document.querySelector('meta[itemprop="releaseDate"]')) && (e.year = m.content), "" === e.make) try {
                            var d = document.getElementsByTagName("script");
                            for (l = 0; l < d.length; l++) {
                                var s = d[l].innerText,
                                    f = "depEventPublisher.setPageData(";
                                if (-1 != s.indexOf(f)) {
                                    var _ = 'vehicle_year":["';
                                    if (-1 !== (g = s.indexOf(_))) {
                                        var v = s.indexOf("]", g + 1),
                                            p = s.substring(g + _.length, v - 1).trim();
                                        e.year = p
                                    }
                                    _ = 'vehicle_make":["';
                                    if (-1 !== (g = s.indexOf(_))) {
                                        v = s.indexOf("]", g + 1), p = s.substring(g + _.length, v - 1).trim();
                                        e.make = p
                                    }
                                    var g;
                                    _ = 'vehicle_model":["';
                                    if (-1 !== (g = s.indexOf(_))) {
                                        v = s.indexOf("]", g + 1), p = s.substring(g + _.length, v - 1).trim();
                                        e.model = p
                                    }
                                    break
                                }
                            }
                        } catch (e) {
                            wr("not able to find steamy concepts chat provider:" + e.message)
                        }
                        var h = document.querySelector('meta[itemprop="sku"]');
                        null !== h ? e.stock_no = h.getAttribute("content") : (i["stock #"] && (e.stock_no = i["stock #"]), i.vin && (e.vin = i.vin), i.milage && (e.mileage = or(i.milage)));
                        var y = document.querySelector('meta[itemprop="price"]'),
                            b = document.querySelector(".vehicle_price");
                        null !== y ? e.price = ir(y.getAttribute("content")) : null !== b ? e.price = ir(b.textContent.trim()) : void 0 !== window.google_tag_params && void 0 !== window.google_tag_params.dynx_totalvalue && (e.price = ir(window.google_tag_params.dynx_totalvalue));
                        var w = document.querySelector('meta[itemprop="vehicleConfiguration"]');
                        null !== w ? e.trim = w.getAttribute("content") : i.trim && (e.trim = i.trim);
                        var S = document.querySelector('meta[itemprop="color"]');
                        null !== S ? e.ext_color = S.getAttribute("content").trim() : i["exterior color"] && (e.ext_color = i["exterior color"]);
                        var k = document.querySelector('meta[itemprop="vehicleInteriorColor"]');
                        if (null !== k ? e.int_color = k.getAttribute("content").trim() : i["interior color"] && (e.int_color = i["interior color"]), 2 === e.type) {
                            var x = document.querySelector('[itemprop="mileageFromOdometer"] [itemprop="value"]');
                            null !== x && (e.mileage = or(x.getAttribute("content").trim()))
                        }
                        i.mileage && (e.mileage = or(i.mileage))
                    } catch (e) {
                        wr(" error:" + e.message)
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                try {
                    if (document.querySelectorAll('meta[property="og:type"][content="product"]').length > 0 && "object" == typeof window.dataLayer) {
                        for (var t = 0; t < window.dataLayer.length; t++) {
                            var r = window.dataLayer[t];
                            if (r.hasOwnProperty("inventory_type")) {
                                if ("new" === r.inventory_type.toLowerCase()) {
                                    e.type = 1;
                                    break
                                }
                                if (-1 !== r.inventory_type.toLowerCase().indexOf("used")) {
                                    e.type = 2;
                                    break
                                }
                                return e
                            }
                        }
                        e = function(e) {
                            try {
                                if ("object" == typeof inventory_localization && "object" == typeof inventory_localization.vehicle) {
                                    var t = inventory_localization.vehicle;
                                    e.trim = t.trim, e.ext_color = t.ext_color, e.make = t.make, e.model = t.model, e.price = ir(t.our_price), e.stock_no = t.stock, e.vin = t.vin, e.year = t.year
                                }
                                var r = document.querySelector(".maincta-row a");
                                if (null !== r) {
                                    var n = r.getAttribute("data-vehicle"),
                                        i = JSON.parse(n);
                                    e.vin = i.vin, e.ext_color = i.ext_color, e.int_color = i.int_color, e.make = i.make, e.model = i.model, e.year = i.model_year, e.stock_no = i.stock, e.trim = i.trim, e.mileage = or(i.miles)
                                } else {
                                    var o = document.querySelector('input[name="gform_field_values"]');
                                    if (null !== o)
                                        for (var a = (o = o.getAttribute("value")).split("&"), l = 0; l < a.length; l++) {
                                            if (0 === (t = a[l]).indexOf("int_color")) {
                                                var c = t.split("=");
                                                e.int_color = c[1]
                                            } else if (0 === t.indexOf("miles")) {
                                                c = t.split("=");
                                                e.mileage = or(c[1])
                                            }
                                        }
                                }
                                var u = document.querySelector('link[rel="image_src"]');
                                null !== u && (e.image_url = Sr(u.getAttribute("href")))
                            } catch (e) {
                                wr(" error:" + e.message)
                            }
                            return e
                        }(e)
                    }
                } catch (e) {
                    wr(" error:" + e.message)
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (1 == document.querySelectorAll(".vehicle.vdp-container").length && document.querySelectorAll('meta[itemprop="serialNumber"]').length > 0) {
                    if (document.querySelectorAll('link[href*="/new"]').length > 0) e.type = 1;
                    else {
                        if (!(document.querySelectorAll('link[href*="/used"]').length > 0)) return e;
                        e.type = 2
                    }
                    var t = document.querySelector("#rg-gallery img"),
                        r = document.querySelector(".rg-image img"),
                        n = document.querySelector("#vehicleGallery img"),
                        i = document.querySelector(".vdp-container img");
                    if (null !== t || null !== r) {
                        var o = (t || r).getAttribute("src");
                        e.image_url = Sr(o)
                    } else if (null !== n) {
                        o = n.getAttribute("src");
                        e.image_url = Sr(o)
                    } else if (null !== i) {
                        o = i.getAttribute("src");
                        e.image_url = Sr(o)
                    }
                    var a = document.querySelector('meta[itemprop="serialNumber"]');
                    null !== a && (e.vin = a.getAttribute("content"));
                    try {
                        if ("object" == typeof fzDataLayer && void 0 !== fzDataLayer.vehicle && "" !== fzDataLayer.vehicle.vin) e.year = fzDataLayer.vehicle.year, e.make = fzDataLayer.vehicle.make, e.model = fzDataLayer.vehicle.model, e.trim = fzDataLayer.vehicle.trim;
                        else {
                            var l = document.querySelector(".vdp-container .vehicle-title h1").firstChild.nodeValue.trim().split(" ");
                            e.year = l[0].trim(), e.make = l[1].trim(), e.model = l[2], l.length > 2 && (e.model = l[2] + " " + l[3])
                        }
                        var c = document.querySelector("span.drivemotors");
                        if (null !== c) e.price = ir(c.getAttribute("data-price")), e.stock_no = c.getAttribute("data-stock-code"), e.int_color = c.getAttribute("data-int-color"), e.ext_color = c.getAttribute("data-ext-color");
                        else {
                            var u = "<span>Stock #:</span>";
                            if (-1 !== (b = (g = document.body.innerHTML).indexOf(u))) {
                                var m = g.indexOf("</li>", b + u.length);
                                e.stock_no = g.substring(b + u.length, m).trim()
                            }
                            var d = "<span>Ext. Color:</span>";
                            if (-1 !== (b = g.indexOf(d))) {
                                m = g.indexOf("</li>", b + d.length);
                                e.ext_color = g.substring(b + d.length, m).trim()
                            }
                            var s = "<span>Int. Color:</span>";
                            if (-1 !== (b = g.indexOf(s))) {
                                m = g.indexOf("</li>", b + s.length);
                                e.int_color = g.substring(b + s.length, m).trim()
                            }
                            var f = document.querySelectorAll('[itemprop="price"]');
                            if (f.length > 0) {
                                var _ = f[f.length - 1];
                                e.price = ir(_.getAttribute("content"));
                                for (var v = f.length - 1; v >= 0; v--) {
                                    var p = f[v];
                                    if (null === kr(p, ".incentivesGeneric")) {
                                        e.price = p.getAttribute("content");
                                        break
                                    }
                                }
                            } else {
                                var g, h = "Internet Price:</span>";
                                if (-1 !== (b = (g = document.body.innerHTML).indexOf(h))) {
                                    m = g.indexOf("</span>", b + h.length);
                                    e.price = ir(g.substring(b + h.length, m).trim())
                                }
                            }
                            if (2 === e.type) {
                                var y = "<span>Mileage:</span>";
                                if (-1 !== (b = g.indexOf(y))) {
                                    m = g.indexOf("</li>", b + y.length);
                                    e.mileage = or(g.substring(b + y.length, m))
                                } else {
                                    var b;
                                    y = "Mileage:</span>";
                                    if (-1 !== (b = g.indexOf(y))) {
                                        var w = '<span class="field-value">',
                                            S = '</span">',
                                            k = g.indexOf(w, b + y.length);
                                        if (-1 !== k) {
                                            var x = g.indexOf(S, k + w.length);
                                            e.mileage = or(g.substring(k + w.length, x))
                                        }
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        wr(" error:" + e.message)
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (1 == document.querySelectorAll(".vehicle-item--pricing").length && 1 == document.querySelectorAll(".vehicle-details").length) {
                    if (document.querySelectorAll('body[id="new-cars"]').length > 0) e.type = 1;
                    else {
                        if (!(document.querySelectorAll('body[id="used-cars"]').length > 0 || document.querySelectorAll('body[id="certified-cars"]').length > 0)) return e;
                        e.type = 2
                    }
                    var t = document.querySelector(".flex-active-slide a");
                    null !== t && (t = t.getAttribute("href"), e.image_url = Sr(t));
                    var r = document.querySelector(".vin[data-vin]");
                    null !== r && (e.vin = r.innerText);
                    try {
                        for (var n = document.querySelectorAll("script"), i = 0; i < n.length; i++) {
                            var o = n[i].text;
                            if (-1 != o.indexOf("'Rollup._trackEvent', 'Vehicle', 'View'")) {
                                try {
                                    var a = /('Rollup._trackEvent', 'Vehicle', 'View', ')([^"]+)'/.exec(o)[2].split(",");
                                    e.year = a[0].trim(), e.make = a[1].trim(), e.model = a[2].trim()
                                } catch (e) {
                                    wr("auto one error:" + e.message)
                                }
                                break
                            }
                        }
                        var l;
                        null !== (l = document.querySelector(".price--msrp .value")) && (e.price = ir(l.innerText)), null !== (l = document.querySelectorAll(".vehicle--specs__list .stock")) && (e.stock_no = l[1].innerText), null !== (l = document.querySelectorAll(".vehicle--specs__list .interior-color")) && (e.int_color = l[1].innerText), null !== (l = document.querySelectorAll(".vehicle--specs__list .color")) && (e.ext_color = l[1].innerText)
                    } catch (e) {
                        wr(" error:" + e.message)
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (D = 1 == document.querySelectorAll('#flexible-vd-control[itemtype="http://schema.org/IndividualProduct"]').length, L = null !== document.querySelector('body[data-page="VehicleDetails"]'), O = null !== document.querySelector("body.page-type-VehicleDetails"), N = null !== document.querySelector(".Inventory_Details_Photos"), D || L || O || N) {
                    var t = document.querySelector('span[itemprop="itemCondition"]');
                    if (null !== t) {
                        var r = t.textContent.toLowerCase().trim();
                        if ("new" == r) e.type = 1;
                        else {
                            if ("certified" != r && "l/certified" != r && "used" != r && "demo" != r && -1 === r.indexOf("owned")) return e;
                            e.type = 2
                        }
                        var n = document.querySelector('.media figure img[itemprop="associatedMedia"]'),
                            i = document.querySelector('.content figure img[itemprop="image"]'),
                            o = document.querySelector(".inventoryDetailsPhotos .photo-container img");
                        if (n || i || o) {
                            var a = n || i || o;
                            a = a.getAttribute("src"), e.image_url = Sr(a)
                        }
                        var l = document.querySelector('.content .copy [itemprop="vehicleIdentificationNumber"]'),
                            c = document.querySelector('input[name="vehicle:buy:vin"]');
                        if (l || c) {
                            var u = l || c;
                            e.vin = u.innerHTML, "" == e.vin && (e.vin = u.getAttribute("value"))
                        } else if ("object" == typeof ContextManager) e.vin = ContextManager.Vehicle.getVIN();
                        else {
                            var m = "vin:",
                                d = ";",
                                s = vin_3.innerHTML.indexOf(m);
                            if (-1 !== s) {
                                s += m.length;
                                var f = vin_3.innerHTML.indexOf(d, s); - 1 !== f && (e.vin = vin_3.innerHTML.substring(s, f))
                            }
                        }
                        try {
                            e.make = document.querySelector('span[itemprop="manufacturer"]').firstChild.nodeValue, e.model = document.querySelector('span[itemprop="model"]').firstChild.nodeValue;
                            var _ = document.querySelector('span[itemprop="releaseDate"]'),
                                v = document.querySelector('span[itemprop="vehicleModelDate"]');
                            if (null !== _ ? e.year = _.firstChild.nodeValue : null !== v && (e.year = v.firstChild.nodeValue), "object" == typeof ContextManager && "object" == typeof ContextManager.Vehicle) {
                                var p;
                                if (null !== (p = ContextManager.Vehicle.getAskingPrice()) && (e.price = ir(p)), null !== (w = document.querySelector('[itemprop="price"]')))(p = ir(w.innerText)) < e.price && (e.price = p);
                                2 === e.type && (e.mileage = or(ContextManager.Vehicle.getOdometer()))
                            } else {
                                var g = document.querySelector('.msrp [itemprop="price"]'),
                                    h = document.querySelector('[name="vehicle:buy:price:msrp"]'),
                                    y = document.querySelector('[name="vehicle:buy:price:asking"]');
                                if (null !== g) {
                                    var b = g.getAttribute("value") || g.innerText;
                                    e.price = ir(b)
                                } else if (null !== h) {
                                    var w;
                                    if (e.price = ir(h.getAttribute("value")), 0 === parseInt(e.price)) null !== (w = document.querySelector('[itemprop="price"]')) && (e.price = ir(w.innerText)), 0 === parseInt(e.price) && null !== y && (e.price = ir(y.getAttribute("value")));
                                    null !== y && (e.price = ir(y.getAttribute("value")))
                                } else if ("object" == typeof ContextManager) e.price = ir(ContextManager.Vehicle.getPrice());
                                else {
                                    var S = "featuredPrice:",
                                        k = ";",
                                        x = vin_3.innerHTML.indexOf(S);
                                    if (-1 !== x) {
                                        x += S.length;
                                        var q = vin_3.innerHTML.indexOf(k, x); - 1 !== q && (e.price = ir(vin_3.innerHTML.substring(x, q)))
                                    }
                                }
                            }
                            g = document.querySelector('[itemprop="sku"]'), h = document.querySelector('[name="vehicle:buy:stock"]');
                            null !== g ? e.stock_no = g.innerText : null !== h ? e.stock_no = h.getAttribute("value") : "object" == typeof ContextManager && (e.stock_no = ContextManager.Vehicle.getStock());
                            b = document.querySelector('[itemprop="color"]'), h = document.querySelector('[name="vehicle:buy:colorcombination:exteriorcolor_1"]');
                            null !== b ? e.ext_color = b.innerText : null !== h && (e.ext_color = h.getAttribute("value"));
                            b = document.querySelector('[itemprop="vehicleInteriorColor"]'), h = document.querySelector('[name="vehicle:buy:colorcombination:interiorcolor_1"]');
                            null !== b ? e.int_color = b.innerText : null !== h && (e.int_color = h.getAttribute("value"))
                        } catch (e) {
                            wr(" error:" + e.message)
                        }
                        var A = void 0 === e.image_url || "" == e.image_url || (C = e.image_url, E = "==", -1 !== C.indexOf(E, C.length - E.length)),
                            T = !A && -1 != e.image_url.indexOf("loading.gif");
                        (A || T) && wr("image_not_found_yet")
                    }
                }
                var C, E;
                var D, L, O, N;
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (1 == document.querySelectorAll(".vehicle-details").length) {
                    var t = document.querySelector('[itemprop="itemCondition"]');
                    if (null !== t) {
                        var r = t.textContent.toLowerCase().trim();
                        if ("new vehicle" == r) e.type = 1;
                        else {
                            if ("used vehicle" != r) return e;
                            e.type = 2
                        }
                        var n = document.querySelector("#myCarousel .carousel-inner .sliderimg");
                        null !== n && (n = n.getAttribute("src"), e.image_url = Sr(n));
                        var i = document.querySelector("input[name='ucnid']");
                        null !== i && (e.vin = i.value);
                        try {
                            var o;
                            e.make = document.querySelector('input[name="make"]').value, e.model = document.querySelector('input[name="model"]').value, e.year = document.querySelector('input[name="year"]').value, null !== (o = document.querySelector(".pricing_container .price_value")) && (e.price = ir(o.innerText)), null !== (o = document.querySelector('input[name="stockno"]')) && (e.stock_no = o.getAttribute("value"))
                        } catch (e) {
                            wr(" error:" + e.message)
                        }
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr(),
                    t = 1 == document.querySelectorAll(".product-main").length,
                    r = 1 == document.querySelectorAll(".mod-vehicle-gallery").length;
                if (t || r) {
                    for (var n = !1, i = document.querySelectorAll('script[type="application/ld+json"]'), o = 0; o < i.length; o++) {
                        var a = i[o].textContent,
                            l = JSON.parse(a);
                        if ("car" === l["@type"].toLowerCase()) {
                            e.image_url = Sr(l.image[0]), e.vin = l.vehicleIdentificationNumber, e.stock_no = l.sku, e.year = l.productionDate, e.make = l.manufacturer, e.model = l.model, e.ext_color = l.color, e.int_color = l.vehicleInteriorColor, e.price = l.offers.price, 0 === l.offers.itemCondition.toLowerCase().indexOf("new") ? e.type = 1 : e.type = 2, n = !0;
                            break
                        }
                    }
                    if (!n) {
                        var c = document.querySelector(".mod-vehicle-gallery .images li img"),
                            u = document.querySelector(".mod-vehicle-gallery .main-image img"),
                            m = document.querySelector('meta[property="og:image"]'),
                            d = c || u;
                        d ? (d = image.getAttribute("src"), e.image_url = Sr(d)) : m && (e.image_url = Sr(m.content));
                        var s = document.querySelector("meta[itemprop='serialNumber']");
                        null !== s && (e.vin = s.getAttribute("content"));
                        try {
                            null !== document.querySelector('meta[itemprop="manufacturer"]') && (e.make = document.querySelector('meta[itemprop="manufacturer"]').getAttribute("content"), e.model = document.querySelector('meta[itemprop="model"]').getAttribute("content"), e.year = document.querySelector('meta[itemprop="releaseDate"]').getAttribute("content")), null !== (v = document.querySelector('meta[itemprop="price"]')) && (e.price = ir(v.content)), null !== (v = document.querySelector('meta[itemprop="sku"]')) && (e.stock_no = v.content);
                            var f = document.querySelectorAll(".specification-item");
                            for (o = 0; o < f.length; o++) {
                                var _ = f[o].firstElementChild.innerText.toLowerCase();
                                if ("type:" === _) {
                                    if (null !== (v = f[o].children[1])) e.type = 2, "new" === v.innerText.toLowerCase().trim() && (e.type = 1)
                                } else if ("trim:" === _) {
                                    null !== (v = f[o].children[1]) && (e.trim = v.innerText)
                                } else if ("interior:" === _) {
                                    null !== (v = f[o].children[1]) && (e.int_color = v.innerText)
                                } else if ("exterior:" === _) {
                                    null !== (v = f[o].children[1]) && (e.ext_color = v.innerText)
                                } else if ("mileage:" === _) {
                                    var v;
                                    if (2 === e.type) null !== (v = f[o].children[1]) && (e.mileage = or(v.innerText))
                                }
                            }
                            if (0 == e.type)
                                if (document.querySelectorAll('link[itemprop="itemCondition"][href="http://schema.org/NewCondition"]').length > 0) e.type = 1;
                                else {
                                    if (!(document.querySelectorAll('link[itemprop="itemCondition"][href="http://schema.org/UsedCondition"]').length > 0)) return e;
                                    e.type = 2
                                }
                        } catch (e) {
                            wr(" error:" + e.message)
                        }
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (!Wt(ye)) return e;
                if (document.querySelectorAll(".vehicleThumbnail").length > 0) {
                    -1 !== (i = document.location.pathname.toLowerCase()).indexOf("/inventory/") && document.addEventListener("click", (function(e) {
                        var t = null !== kr(e.target, ".vehicleThumbnail"),
                            r = e.target.matches(".vehicleThumbnail");
                        (t || r) && xr((function() {
                            var e = document.querySelector(".vehicle-details-page"),
                                t = document.querySelector(".VehicleDetailsPage");
                            return null !== e || null !== t
                        }), (function() {
                            autoids_track()
                        }), (function() {}), 3e3)
                    }))
                }
                if (1 == document.querySelectorAll(".vehicle-details-page #layout-details-main").length || 1 == document.querySelectorAll(".VehicleDetailsPage").length) {
                    var t, r, n = null === (f = document.querySelector('input[name="q_name_used"]'));
                    if (n) {
                        var i, o = -1 !== (i = document.location.pathname.toLowerCase()).indexOf("/new-"),
                            a = -1 !== i.indexOf("/used-") || -1 !== i.indexOf("/certified-");
                        if (o) e.type = 1;
                        else {
                            if (!a) return e;
                            e.type = 2
                        }
                    } else {
                        var l = f.value;
                        if ("false" == l) e.type = 1;
                        else {
                            if ("true" != l) return e;
                            e.type = 2
                        }
                    }
                    if (n) null !== (t = document.querySelector(".VehicleDetailsPage .image-gallery-image > img")) && (t = t.getAttribute("src"), e.image_url = Sr(t));
                    else null !== (t = document.querySelector(".large-image-link img")) && (t = t.getAttribute("src"), e.image_url = Sr(t));
                    if (n) null !== (r = document.querySelector('span[itemprop="vehicleIdentificationNumber"]')) && (e.vin = r.firstChild.nodeValue);
                    else null !== (r = document.querySelector("input[name='q_name_vin']")) && (e.vin = r.value);
                    try {
                        n ? (e.make = document.querySelector('span[itemprop="manufacturer"]').firstChild.nodeValue, e.model = document.querySelector('span[itemprop="model"]').firstChild.nodeValue, e.year = document.querySelector('span[itemprop="year"]').firstChild.nodeValue) : (e.make = document.querySelector('input[name="q_name_make"]').value, e.model = document.querySelector('input[name="q_name_model"]').value, e.year = document.querySelector('input[name="q_name_autoyear"]').value)
                    } catch (e) {
                        wr("jazel error:" + e.message), setTimeout(qr, 3e3)
                    }
                    if (n) {
                        var c = document.querySelectorAll(".vehiclePricing .row");
                        if (c.length > 0 && (e.price = ir(c[c.length - 1].innerText)), "" == e.price) null !== (f = document.querySelector(".pricing_label")) && (e.price = ir(_.nextSibling.innerHTML))
                    } else {
                        null !== (v = document.querySelector("input[name='q_name_listedprice']")) && (e.price = ir(v.value))
                    }
                    if (n) try {
                        var u = document.querySelector('span[itemprop="vehicleIdentificationNumber"]');
                        if (null !== u)
                            for (var m = u.parentElement.parentElement.querySelectorAll(".pv1"), d = 0; d < m.length; d++) {
                                var s = m[d];
                                0 === s.textContent.toLowerCase().indexOf("stock") && (e.stock_no = s.getAttribute("title"))
                            }
                    } catch (e) {
                        wr("Error getting stock #: " + e)
                    } else null !== (v = document.querySelector("input[name='q_name_stockno']")) && (e.stock_no = v.value);
                    if (n);
                    else null !== (v = document.querySelector("input[name='q_name_trim']")) && (e.trim = v.value);
                    if (n) {
                        var f;
                        (f = document.querySelector('span[itemprop="vehicleInteriorColor"]')) && (e.int_color = f.firstChild.nodeValue);
                        var _ = document.querySelector('span[itemprop="color"]');
                        _ && (e.ext_color = _.firstChild.nodeValue)
                    } else {
                        var v;
                        null !== (v = document.querySelector("input[name='q_name_interiorcolor']")) && (e.int_color = v.value), null !== (v = document.querySelector("input[name='q_name_exteriorcolor']")) && (e.ext_color = v.value)
                    }
                    if (2 === e.type)
                        if (n) null !== (v = document.querySelector('span[itemprop="mileageFromOdometer"]')) && (e.mileage = or(v.innerText))
                } else setTimeout(qr, 3e3);
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector("#hitlist_details")) {
                    var t = document.querySelector("#content_container").getAttribute("data-newused");
                    if ("new" == t) e.type = 1;
                    else {
                        if ("used" != t) return e;
                        e.type = 2
                    }
                    var r = document.querySelector("#hitlist_details .content img");
                    null !== r && (r = r.getAttribute("src"), e.image_url = Sr(r));
                    var n = document.querySelector(".vin_number");
                    null !== n && (e.vin = n.innerText);
                    try {
                        var i = document.querySelector(".ga_btn_testDrive");
                        null !== i && (e.make = /make=([^&]+)/.exec(i)[1], e.model = /model=([^&]+)/.exec(i)[1], e.year = /year=([^&]+)/.exec(i)[1])
                    } catch (e) {
                        wr("motortrak error:" + e.message)
                    }
                    try {
                        e.stock_no = document.querySelector(".ePriceBtn").getAttribute("data-stock")
                    } catch (e) {
                        wr("motortrak error:" + e.message)
                    }
                    try {
                        e.ext_color = document.querySelector(".ePriceBtn").getAttribute("data-color")
                    } catch (e) {
                        wr("motortrak error:" + e.message)
                    }
                    var o = document.querySelector(".primaryPrice");
                    null !== o && (e.price = ir(o.innerText))
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector("#detailList")) {
                    var t = document.querySelector(".module-vehicleBulletsWidget .showField");
                    if (null !== t) {
                        var r = t.firstChild.nodeValue.toLowerCase();
                        e.type = "new" == r ? 1 : 2
                    }
                    if (0 == e.type) return e;
                    var n = document.querySelector(".carousel .item img");
                    null !== n && (n = n.getAttribute("src"), e.image_url = Sr(n));
                    var i = document.querySelector(".vehicleQuickPopupsWidgetonDetailPage");
                    null !== i && (e.vin = i.getAttribute("data-vin"));
                    try {
                        e.year = vehicleDetails.year, e.make = vehicleDetails.make, e.model = vehicleDetails.model, "undefined" != typeof vehicleDetails && (e.price = ir(vehicleDetails.price), e.stock_no = vehicleDetails.stock, e.trim = vehicleDetails.trim, e.int_color = vehicleDetails.interiorColor, e.ext_color = vehicleDetails.exteriorColor)
                    } catch (e) {
                        wr(" error:" + e.message)
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector("#detail-container")) {
                    if (document.getElementById("#newvehicles").classList.contains("activenav") ? e.type = 1 : e.type = 2, 0 == e.type) return e;
                    var t = document.querySelector("img#vehicle-image");
                    null !== t && (t = t.getAttribute("src"), e.image_url = Sr(t));
                    var r = document.querySelector("input#epVin");
                    null !== r && (e.vin = r.getAttribute("value"));
                    try {
                        var n;
                        e.year = document.querySelector("input#epYear").getAttribute("value"), e.make = document.querySelector("input#epMake").getAttribute("value"), e.model = document.querySelector("input#epModel").getAttribute("value"), null !== (n = document.querySelector(".price")) && (e.price = ir(n.innerText)), null !== (n = document.querySelector('[name="epStock"]')) && (e.stock_no = n.getAttribute("value"));
                        var i, o = document.querySelector("#quick-specs-container"),
                            a = "<br>",
                            l = "Color:</strong>",
                            c = o.innerHTML.indexOf(l),
                            u = "Interior:</strong>",
                            m = o.innerHTML.indexOf(u);
                        if (-1 !== c) c += l.length, -1 !== (i = o.innerHTML.indexOf(a, c)) && (e.ext_color = o.innerHTML.substring(c, i).trim());
                        if (-1 !== m) m += u.length, -1 !== (i = o.innerHTML.indexOf(a, m)) && (e.int_color = o.innerHTML.substring(m, i).trim())
                    } catch (e) {
                        wr(" error:" + e.message)
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector("#vdp-banner")) {
                    var t = document.querySelector('link[itemprop="itemCondition"]');
                    if (null !== t && (-1 !== (t = t.getAttribute("href").toLowerCase()).indexOf("new") ? e.type = 1 : e.type = 2), 0 == e.type) return e;
                    var r = document.querySelector(".photo a");
                    null !== r && (r = r.getAttribute("href"), e.image_url = Sr(r));
                    var n = document.querySelector('.schema__wrapper div[itemprop="vehicleIdentificationNumber"]');
                    null !== n && (e.vin = n.firstChild.nodeValue);
                    try {
                        e.year = document.querySelector('.schema__wrapper div[itemprop="productionDate"]').firstChild.nodeValue, e.make = document.querySelector('.schema__wrapper div[itemprop="manufacturer"] meta[itemprop="name"]').getAttribute("content"), e.model = document.querySelector('.schema__wrapper meta[itemprop="model"]').getAttribute("content")
                    } catch (e) {
                        wr(" error:" + e.message)
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr(),
                    t = "undefined" != typeof mode && "vdp" == mode.toLowerCase().trim(),
                    r = 1 == document.querySelectorAll(".tabsarea_overflow").length;
                if (t || r) {
                    var n = document.querySelector('input[name="Vehicle_Type"]');
                    if (!n) return e;
                    var i = n.getAttribute("value").toLowerCase().trim();
                    if (e.type = "new" == i ? 1 : 2, 0 == e.type) return e;
                    var o = document.querySelector("img.details_image_src");
                    null !== o && (o = o.getAttribute("src"), e.image_url = Sr(o));
                    var a = document.querySelector('input[name="VIN"]');
                    null !== a && (e.vin = a.getAttribute("value").trim());
                    try {
                        if (e.year = document.querySelector('input[name="Year"]').getAttribute("value").trim(), e.make = document.querySelector('input[name="Make"]').getAttribute("value").trim(), e.model = document.querySelector('input[name="Model"]').getAttribute("value").trim(), e.stock_no = document.querySelector('input[name="Stock_Number"]').getAttribute("value").trim(), e.trim = document.querySelector('input[name="Trim"]').getAttribute("value").trim(), "undefined" != typeof vehiclePrice) e.price = ir(vehiclePrice);
                        else {
                            var l = document.querySelector(".details_secondary_price-low"),
                                c = document.querySelector(".details_main_price");
                            null !== l ? e.price = ir(l.innerText) : null !== c && (e.price = ir(c.innerText))
                        }
                        if ("undefined" != typeof vehicleIntColor && "undefined" != typeof vehicleExtColor) e.int_color = vehicleIntColor, e.ext_color = vehicleExtColor;
                        else if (1 == document.querySelectorAll('div[name="vehicle data"]').length) {
                            var u = document.querySelectorAll('div[name="vehicle data"] .inventory_items:not(.bold)'),
                                m = document.querySelectorAll('div[name="vehicle data"] .inventory_items.bold');
                            if (u.length > 0)
                                for (var d = 0; d < u.length; d++) {
                                    var s = u[d].innerText.trim().toLowerCase(),
                                        f = m[d].innerText.trim();
                                    switch (s) {
                                        case "exterior color:":
                                            e.ext_color = f;
                                            break;
                                        case "interior color:":
                                            e.int_color = f;
                                            break;
                                        case "stock #:":
                                            e.stock_no = f;
                                            break;
                                        case "vin:":
                                            e.vin = f
                                    }
                                }
                        }
                        2 === e.type && "undefined" != typeof vehicleOdometer && (e.mileage = or(vehicleOdometer))
                    } catch (e) {
                        wr(" error:" + e.message)
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector(".vdpInfo")) {
                    var t = document.querySelector("form#NEWINV");
                    if (e.type = t ? 1 : 2, 0 == e.type) return e;
                    var r = document.querySelector(".vdpInfo img");
                    null !== r && (r = r.getAttribute("src"), e.image_url = Sr(r));
                    var n = document.querySelector('input[name="sVVin"]');
                    null !== n && (e.vin = n.getAttribute("value").trim());
                    try {
                        e.year = document.querySelector('input[name="sVYear"]').getAttribute("value").trim(), e.make = document.querySelector('input[name="sVMake"]').getAttribute("value").trim(), e.model = document.querySelector('input[name="sVModel"]').getAttribute("value").trim(), e.stock_no = document.querySelector('input[name="sVStock"]').getAttribute("value").trim(), e.trim = document.querySelector('input[name="sVTrim"]').getAttribute("value").trim();
                        var i = document.querySelector(".priceInfo h2 span.notranslate");
                        null !== i && (e.price = ir(i.innerText));
                        var o = document.querySelectorAll(".vdpDetails tr");
                        o && (e.int_color = o[4].childNodes[1].innerText, e.ext_color = o[3].childNodes[1].innerText, 2 === e.type && (e.mileage = or(o[0].childNodes[1].innerText)))
                    } catch (e) {
                        wr(" error:" + e.message)
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector("#photoblock")) {
                    var t = 0 == document.querySelector(".scroll-content-item img").getAttribute("alt").toLowerCase().indexOf("new");
                    if (e.type = t ? 1 : 2, 0 == e.type) return e;
                    var r = document.querySelector("#photomain img.photoclick");
                    null !== r && (r = r.getAttribute("src"), e.image_url = Sr(r));
                    var n = document.querySelector(".infoinfovin");
                    null !== n && (e.vin = n.innerText.trim());
                    try {
                        e.year = document.querySelector(".infoinfoyear").innerText.trim(), e.make = document.querySelector(".infoinfomake").innerText.trim(), e.model = document.querySelector(".infoinfomodel").innerText.trim(), e.stock_no = document.querySelector(".infoinfostock").innerText.trim(), 2 === e.type && (e.mileage = or(document.querySelector(".infoinfomileage").innerText));
                        var i = document.querySelector(".infoinfostyle");
                        null !== i && (e.trim = i.innerText.trim()), null !== (i = document.querySelector(".infoinfointcolor")) && (e.int_color = i.innerText.trim()), null !== (i = document.querySelector(".infoinfoextcolor")) && (e.ext_color = i.innerText.trim());
                        var o = document.querySelector(".price.mainprice");
                        null !== o && (e.price = ir(o.innerText))
                    } catch (e) {
                        wr(" error:" + e.message)
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                null !== document.querySelector("#detail .title-row") && 0 == (e = function(e) {
                    if (null !== (n = document.querySelector("span.drivemotors"))) {
                        var t = "new" == n.getAttribute("data-is-new").toLowerCase().trim();
                        e.type = t ? 1 : 2, e.vin = n.getAttribute("data-vin").trim(), e.price = ir(n.getAttribute("data-msrp").trim()), e.stock_no = n.getAttribute("data-stock-code").trim(), e.trim = n.getAttribute("data-model-trim").trim(), e.ext_color = n.getAttribute("data-ext-color").trim(), e.int_color = n.getAttribute("data-int-color").trim();
                        var r = document.querySelector(".carousel-inner .item img");
                        null !== r && (r = r.getAttribute("src"), e.image_url = Sr(r));
                        var n, i = "Forms-vehiclecontacttestdrive-widget~vid:";
                        if (null !== (n = document.querySelector('a[id^="' + i + '"]'))) {
                            var o = ":Year_",
                                a = (n = n.getAttribute("id")).indexOf(o); - 1 !== a && (e.year = n.substring(a + o.length, a + o.length + 4));
                            var l = ";Make_",
                                c = ";",
                                u = n.indexOf(l);
                            if (-1 !== u) {
                                var m = n.indexOf(c, u + l.length);
                                e.make = n.substring(u + l.length, m)
                            }
                            var d = ";Model_",
                                s = n.indexOf(d);
                            if (-1 !== s) {
                                m = n.indexOf(c, s + d.length);
                                e.model = n.substring(s + d.length, m)
                            }
                        }
                        var f = document.querySelectorAll(".detail-prices .price-value"),
                            _ = document.querySelectorAll(".prices .price-value");
                        if (null !== f && f.length > 0) {
                            var v = f[0].innerText.trim();
                            e.price = ir(v)
                        } else if (null !== _ && _.length > 0) {
                            v = _[0].innerText.trim();
                            e.price = ir(v)
                        }
                    }
                    return e
                }(e)).type && (e = function(e) {
                    try {
                        for (var t = document.getElementsByTagName("script"), r = 0; r < t.length; r++)
                            if (-1 !== t[r].text.indexOf(".formsResponsive(")) {
                                var n = '"Condition","Name":"Condition","Value":"New"',
                                    i = -1 !== t[r].text.indexOf(n);
                                e.type = i ? 1 : 2;
                                break
                            }
                        if (0 == e.type) return e;
                        var o = document.querySelector(".carousel-inner .item img");
                        null !== o && (o = o.getAttribute("src"), e.image_url = Sr(o));
                        var a = "Forms-vehiclecontact",
                            l = document.querySelector('a[id^="' + a + '"]');
                        if (void 0 !== l) {
                            var c = (l = l.getAttribute("id")).split(":");
                            e.vin = c[1].split("~")[0];
                            var u = ":Year_",
                                m = l.indexOf(u); - 1 !== m && (e.year = l.substring(m + u.length, m + u.length + 4));
                            var d = ";Make_",
                                s = ";",
                                f = l.indexOf(d);
                            if (-1 !== f) {
                                var _ = l.indexOf(s, f + d.length);
                                e.make = l.substring(f + d.length, _)
                            }
                            var v = ";Model_",
                                p = l.indexOf(v);
                            if (-1 !== p) {
                                _ = l.indexOf(s, p + v.length);
                                e.model = l.substring(p + v.length, _)
                            }
                            var g = ";StockNumber_",
                                h = l.indexOf(g); - 1 !== h && (e.stock_no = l.substring(h + g.length, l.length))
                        }
                        var y = document.querySelectorAll(".detail-row .detail-fields-prices .field");
                        for (r = 0; r < y.length; r++) {
                            var b = y[r].children;
                            if (2 == b.length) {
                                var w = b[0].innerText.trim(),
                                    S = b[1].innerText.trim();
                                switch (w) {
                                    case "Stock Number:":
                                        e.stock_no = S;
                                        break;
                                    case "Interior Color:":
                                        e.int_color = S;
                                        break;
                                    case "Exterior Color:":
                                        e.ext_color = S
                                }
                            }
                        }
                        var k = document.querySelectorAll(".detail-prices .price-value"),
                            x = document.querySelectorAll(".prices .price-value"),
                            q = document.querySelectorAll(".special-price-value"),
                            A = document.querySelectorAll(".high-price-value");
                        if (k.length > 0) {
                            var T = k[0].innerText.trim();
                            e.price = ir(T)
                        } else if (x.length > 0) {
                            T = x[0].innerText.trim();
                            e.price = ir(T)
                        } else if (q.length > 0) {
                            T = q[0].innerText.trim();
                            e.price = ir(T)
                        } else if (A.length > 0) {
                            T = A[0].innerText.trim();
                            e.price = ir(T)
                        }
                    } catch (e) {
                        wr("error: " + e.message)
                    }
                    return e
                }(e));
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector(".unit-attributes")) {
                    var t = "new" == Er("condition");
                    e.type = t ? 1 : 2, e.vin = Er("vin"), e.stock_no = Er("stock #"), e.ext_color = Er("primary color"), e.year = Er("year"), e.make = Er("manufacturer"), e.model = Er("model");
                    var r = document.querySelector(".unit-image-container img");
                    if (null !== r && (r = r.getAttribute("srcset"), e.image_url = Sr(r)), null !== (n = document.querySelector('span[itemprop="price"]'))) {
                        var n = n.innerText.trim();
                        e.price = ir(n)
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr(),
                    t = 1 == document.querySelectorAll(".vehicle-detail-page").length,
                    r = "object" == typeof window.InventoryViewLabels;
                if (t && r) {
                    var n = "new" == window.InventoryViewLabels.InventoryViewTitle.toLowerCase();
                    e.type = n ? 1 : 2;
                    var i = document.querySelector("#stock-and-vin");
                    null !== i && (e.vin = i.getAttribute("data-vin"), e.stock_no = i.getAttribute("data-stock-number"));
                    var o = document.querySelector(".vehicle-title");
                    null !== o && (o = o.innerHTML.trim().split(" "), e.year = o[0], e.make = o[1], e.model = o[2]);
                    var a = document.querySelector(".hero-shot-frame img");
                    if (null !== a && (a = a.getAttribute("src"), e.image_url = Sr(a)), null !== (l = document.querySelector(".vehicle-price-default-price"))) {
                        var l = document.querySelector(l).innerText.trim();
                        e.price = ir(l)
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if ("object" == typeof inventoryModel) {
                    var t = "new" == inventoryModel.general.condition.desc.toLowerCase();
                    if (e.type = t ? 1 : 2, void 0 !== inventoryModel.general.identification) null !== ("vin" == inventoryModel.general.identification.type.toLowerCase()) && (e.vin = inventoryModel.general.identification.value);
                    null !== inventoryModel.general.stockNumber && (e.stock_no = inventoryModel.general.stockNumber.desc), null !== inventoryModel.general.year && (e.year = inventoryModel.general.year.desc), null !== inventoryModel.general.manufacturer && (e.make = inventoryModel.general.manufacturer.desc), null !== inventoryModel.general.model && (e.model = inventoryModel.general.model.desc);
                    var r = document.querySelector(".model-image img");
                    if (null !== r && (r = r.getAttribute("src"), e.image_url = Sr(r)), null !== inventoryModel.general.msrp && "object" == typeof inventoryModel.general.msrp) {
                        var n = ir(inventoryModel.general.msrp.desc);
                        isNaN(n) || (e.price = n)
                    }
                }
                return e
            }());
            br(e) && (e = Tr());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector(".vehicle-data")) {
                    var t = document.querySelector('span[itemprop="itemCondition"]');
                    null !== t && (t = t.innerText.toLowerCase().trim(), e.type = "new" == t ? 1 : 2);
                    var r = document.querySelector(".ws-make-an-offer");
                    null !== r && (e.make = r.getAttribute("data-make"), e.model = r.getAttribute("data-model"), e.year = r.getAttribute("data-year"), e.stock_no = r.getAttribute("data-stock_number"), e.vin = r.getAttribute("data-vin"), e.trim = r.getAttribute("data-trim"), e.ext_color = r.getAttribute("data-color"), e.price = ir(r.getAttribute("data-price")), 2 === e.type && (e.mileage = or(r.getAttribute("data-mileage"))));
                    var n = document.querySelector("#carousel img");
                    null !== n && (n = n.getAttribute("src"), e.image_url = Sr(n))
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector(".inventory-vdp")) {
                    var t = document.querySelector('meta[name="description"]');
                    if (null !== t) {
                        0 === t.getAttribute("content").trim().toLowerCase().indexOf("new") ? e.type = 1 : e.type = 2;
                        var r = document.querySelector(".vehicle-title--make");
                        null !== r && (e.make = r.innerText.trim());
                        var n = document.querySelector(".vehicle-title--model");
                        null !== n && (e.model = n.innerText.trim());
                        var i = document.querySelector(".vehicle-title--year");
                        null !== i && (e.year = i.innerText.trim());
                        var o = document.querySelector(".vehicle-title--trim");
                        null !== o && (e.trim = o.innerText.trim());
                        var a = document.querySelectorAll(".vehicleIds__title"),
                            l = document.querySelectorAll(".vehicleIds__value");
                        if (2 === a.length) {
                            a[0].innerText.trim().toLowerCase();
                            e.stock_no = l[0].innerText.trim();
                            a[1].innerText.trim().toLowerCase();
                            e.vin = l[1].innerText.trim()
                        } else {
                            var c = document.querySelector('.vehicle-details__value[data-vehicle="stock"]');
                            null !== c && (e.stock_no = c.innerText.trim());
                            var u = document.querySelector('.vehicle-details__value[data-vehicle="vin"]');
                            null !== u && (e.vin = u.innerText.trim())
                        }
                        null !== (d = document.querySelector('meta[property="og:image"]')) && (e.image_url = Sr(d.getAttribute("content"))), void 0 !== (m = window.display_price) && (e.price = ir(m));
                        var m, d, s = document.querySelector(".title-vdp a");
                        if (null !== s)
                            if (e.stock_no = s.getAttribute("data-stock").trim(), e.make = s.getAttribute("data-make").trim(), e.model = s.getAttribute("data-model").trim(), e.year = s.getAttribute("data-year").trim(), e.vin = s.getAttribute("data-vin").trim(), null !== (m = document.querySelector("#vehiclePrice")) && (m = m.value, e.price = ir(m)), null !== (d = document.querySelector(".wrap-content-detail img")) && (e.image_url = Sr(d.getAttribute("src"))), null !== (s = document.querySelector(".summarylist"))) {
                                var f = "Exterior Color:",
                                    _ = "Interior Color:",
                                    v = (s = s.innerText).indexOf(f);
                                if (-1 !== v) {
                                    var p = s.indexOf(_, v); - 1 !== p && (e.ext_color = s.substring(v + f.length, p).trim())
                                }
                                var g = s.indexOf(_); - 1 !== g && (e.int_color = s.substring(g + _.length, s.length).trim())
                            }
                        if (2 === e.type) {
                            var h = document.querySelector(".miles");
                            h && (e.mileage = or(h.innerText))
                        }
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector("#vehicle_details")) {
                    var t = document.querySelector(".breadcrumb");
                    if (null !== t) {
                        var r;
                        if (-1 !== t.innerText.toLowerCase().indexOf("new") ? e.type = 1 : e.type = 2, null !== (r = document.querySelector(".item-info.stock div.value"))) e.stock_no = r.innerText.trim();
                        else if (null !== (r = document.querySelector(".stock"))) {
                            var n = r.innerText.trim().split(" ");
                            e.stock_no = n[n.length - 1]
                        }
                        var i = document.querySelector(".item-info.vin div.value");
                        if (null !== i) e.vin = i.innerText.trim();
                        else {
                            var o = document.querySelector(".vin");
                            if (null !== o) {
                                n = o.innerText.trim().split(" ");
                                e.vin = n[n.length - 1]
                            }
                        }
                        var a = document.querySelector(".amount.final-price");
                        null !== a && (a = a.innerText, e.price = ir(a));
                        var l, c = document.querySelector(".lslide.active");
                        if (null !== c && (e.image_url = Sr(c.getAttribute("data-src"))), null !== (l = document.querySelector(".veh-details"))) {
                            var u = "Exterior:",
                                m = "  ";
                            if (-1 !== (w = (l = l.innerText).indexOf(u))) - 1 !== (S = l.indexOf(m, w)) && (e.ext_color = l.substring(w + u.length, S).trim());
                            var d = "Interior:";
                            if (-1 !== (f = l.indexOf(d))) {
                                var s = "  "; - 1 !== (_ = l.indexOf(s, f)) && (e.int_color = l.substring(f + d.length, _).trim())
                            }
                        } else if (null !== (l = document.querySelector(".veh-details-block"))) {
                            u = "Ext Color", m = "  ";
                            if (-1 !== (w = (l = l.innerText).indexOf(u))) - 1 !== (S = l.indexOf(m, w)) && (e.ext_color = l.substring(w + u.length, S).trim());
                            var f;
                            d = "Int Color";
                            if (-1 !== (f = l.indexOf(d))) {
                                var _;
                                s = "  "; - 1 !== (_ = l.indexOf(s, f)) && (e.int_color = l.substring(f + d.length, _).trim())
                            }
                        }
                        if (null !== (l = document.querySelector("#HL_ScriptCall"))) {
                            n = (l = l.getAttribute("src")).split("&");
                            for (var v = 0; v < n.length; v++) {
                                if (0 === n[v].indexOf("Year")) {
                                    var p = n[v].split("=");
                                    e.year = p[1].trim()
                                }
                                if (0 === n[v].indexOf("Make")) {
                                    p = n[v].split("=");
                                    e.make = p[1].trim()
                                }
                                if (0 === n[v].indexOf("Model")) {
                                    p = n[v].split("=");
                                    e.model = p[1].trim()
                                }
                            }
                        } else try {
                            var g = document.getElementsByTagName("script");
                            for (v = 0; v < g.length; v++) {
                                if (-1 != g[v].text.toLowerCase().indexOf("manufacturer")) {
                                    var h = g[v].text,
                                        y = '"productionDate":',
                                        b = ',"'; - 1 !== (w = h.indexOf(y)) && -1 !== (S = h.indexOf(b, w)) && (e.year = h.substring(w + y.length, S).trim());
                                    y = '"manufacturer":"', b = '","'; - 1 !== (w = h.indexOf(y)) && -1 !== (S = h.indexOf(b, w)) && (e.make = h.substring(w + y.length, S).trim());
                                    y = '"model":"', b = '","'; - 1 !== (w = h.indexOf(y)) && -1 !== (S = h.indexOf(b, w)) && (e.model = h.substring(w + y.length, S).trim());
                                    var w, S;
                                    y = '"mileageFromOdometer":', b = ',"'; - 1 !== (w = h.indexOf(y)) && -1 !== (S = h.indexOf(b, w)) && (e.mileage = or(h.substring(w + y.length, S).trim()));
                                    break
                                }
                            }
                        } catch (e) {
                            wr(e.message)
                        }
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector('.contextContainer[itemtype="http://schema.org/Car"]')) {
                    if (document.querySelectorAll('link[itemprop="itemCondition"][href="http://schema.org/NewCondition"]').length > 0) e.type = 1;
                    else {
                        if (!(document.querySelectorAll('link[itemprop="itemCondition"][href="http://schema.org/UsedCondition"]').length > 0)) return e;
                        e.type = 2
                    }
                    var t = document.querySelector('[itemprop="sku"]');
                    null !== t && (e.stock_no = t.innerText.trim());
                    var r = document.querySelector('[itemprop="productID"]');
                    null !== r && (e.vin = r.innerText.trim());
                    var n = document.querySelector('.vehiclePriceDisplay[itemprop="price"]');
                    null !== n && (n = n.innerText, e.price = ir(n));
                    var i = document.querySelector('meta[property="og:image"]');
                    null !== i && (e.image_url = Sr(i.getAttribute("content")));
                    var o = document.querySelector('[itemprop="color"]');
                    null !== o && (e.ext_color = o.innerText.trim());
                    var a = document.querySelector('[itemprop="vehicleInteriorColor"]');
                    if (a && (e.int_color = a.innerText.trim()), 2 === e.type) {
                        var l = document.querySelector('[itemprop="mileageFromOdometer"]');
                        null !== l && (e.mileage = or(l.innerText.trim()))
                    }
                    vehicleYear && (e.year = vehicleYear), vehicleMake && (e.make = vehicleMake), vehicleModel && (e.model = vehicleModel)
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector("#vehicle-detail-container")) {
                    var t = document.querySelector('input[name="condition"]');
                    if (null === t) return e;
                    if ("new" == t.value.trim().toLowerCase() ? e.type = 1 : e.type = 2, null !== (u = document.querySelector("#vehicle-detail-basic-info-container")))
                        for (var r = u.querySelectorAll("dt"), n = u.querySelectorAll("dd"), i = 0; i < r.length; i++) {
                            var o = r[i].innerText.trim().toLowerCase(),
                                a = n[i].innerText.trim();
                            switch (o) {
                                case "price":
                                    e.price = ir(a);
                                    break;
                                case "exterior color":
                                    e.ext_color = a;
                                    break;
                                case "interior color":
                                    e.int_color = a;
                                    break;
                                case "stock #":
                                    e.stock_no = a;
                                    break;
                                case "vin (vehicle identification number)":
                                    e.vin = a
                            }
                        }
                    try {
                        e.image_url = Sr(document.querySelector("#vehicle-detail-images-container img").getAttribute("src"))
                    } catch (e) {}
                    var l = document.querySelector('[itemprop="sku"]');
                    null !== l && (e.stock_no = l.innerText.trim());
                    var c = document.querySelector('[itemprop="productID"]');
                    c && (e.vin = c.innerText.trim());
                    var u, m = document.querySelector("#vehicle-detail-price");
                    if (null !== m && (m = m.innerText, e.price = ir(m)), null !== (u = document.querySelector("#vehicle-detail-basic-info-container")))
                        for (r = u.querySelectorAll("dt"), n = u.querySelectorAll("dd"), i = 0; i < r.length; i++) {
                            o = r[i].innerText.trim().toLowerCase(), a = n[i].innerText.trim();
                            switch (o) {
                                case "price:":
                                    e.price = ir(a);
                                    break;
                                case "exterior color:":
                                    e.ext_color = a;
                                    break;
                                case "interior color:":
                                    e.int_color = a;
                                    break;
                                case "stock #:":
                                    e.stock_no = a;
                                    break;
                                case "vin (vehicle identification number):":
                                    e.vin = a
                            }
                        }
                    var d = document.querySelectorAll('#headline [itemprop="name"]');
                    if (d) {
                        e.make = d[1].innerText, e.model = document.querySelector('#headline [itemprop="model"]').innerText;
                        var s = d[0].innerText.trim(),
                            f = s.indexOf(e.make);
                        if (-1 !== f) {
                            var _ = s.substring(f - 5, f).trim();
                            e.year = _
                        }
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                try {
                    var t = document.querySelector(".leftVDP"),
                        r = void 0 !== window.dataLayer;
                    if (null !== t) {
                        var n = document.querySelector("div.titleInner");
                        if (null === n) return e;
                        0 === n.innerText.trim().toLowerCase().indexOf("new ") ? e.type = 1 : e.type = 2, "object" == typeof vehicleProperties && (vehicleProperties = vehicleProperties[0], e.vin = vehicleProperties.vin, e.year = vehicleProperties.year, e.stock_no = vehicleProperties.stockNumber, e.trim = vehicleProperties.trim, e.model = vehicleProperties.model, e.make = vehicleProperties.make, e.int_color = vehicleProperties.interiorColor, e.ext_color = vehicleProperties.exteriorColor, 2 === e.type && (e.mileage = or(vehicleProperties.odometer)));
                        var i = document.querySelector(".priceHolder .largePrice");
                        null !== i && (e.price = ir(i.innerText))
                    } else if (r && void 0 !== window.dataLayer[0] && void 0 !== window.pageData && void 0 !== window.dataLayer[0].pageName && -1 !== window.dataLayer[0].pageName.toLowerCase().indexOf("vdp")) {
                        var o = window.dataLayer[0].pageName.toLowerCase();
                        if (-1 !== o.indexOf("new")) e.type = 1;
                        else {
                            if (-1 === o.indexOf("used")) return e;
                            e.type = 2
                        }
                        e.int_color = window.pageData.build.interior_color.label, e.ext_color = window.pageData.build.exterior_color.label, e.price = ir(window.pageData.build.dealer_price), e.year = window.pageData.build.year, e.make = window.pageData.build.make, e.model = window.pageData.build.model, e.vin = window.pageData.build.vin, e.mileage = or(window.pageData.build.mileage), e.stock_no = window.pageData.build.stock_number, e.image_url = Sr(window.pageData.build.images[0])
                    }
                } catch (e) {}
                return e
            }());
            br(e) && (e = function() {
                var e = yr(),
                    t = document.querySelector(".vdp-carousel-controls-wrapper"),
                    r = document.querySelector(".VehicleDetailsPage");
                if (null !== t) {
                    var n = vehicleType;
                    if (!n) return e;
                    0 === n.trim().toLowerCase().indexOf("new") ? e.type = 1 : e.type = 2, e.vin = vehicleVin, e.year = vehicleYear, e.stock_no = vehicleStock, e.trim = vehicleTrim, e.model = vehicleModel, e.make = vehicleMake;
                    var i = document.querySelector(".vdp-vehicle-info .vdp-color");
                    if (null !== i) {
                        var o = i.querySelector(".vdp-info-body-small");
                        if (null !== o) {
                            o = o.innerText.trim().toLowerCase();
                            var a = i.querySelector(".vdp-info-body-title");
                            if (null !== a) {
                                var l = (a = a.innerText.trim()).split(" / ");
                                l.length > 1 ? (e.ext_color = l[0].trim(), e.int_color = l[1].trim()) : 0 === o.indexOf("ext. color") ? e.ext_color = a : 0 === o.indexOf("int. color") && (e.int_color = a)
                            }
                        }
                    }
                    var c = document.querySelector(".vdp-pricing-details .primaryPrice"),
                        u = document.querySelector(".vdp-price-price ");
                    null !== c ? e.price = ir(c.innerText) : null !== u && (e.price = ir(u.innerText));
                    var m = document.querySelector(".carousel img");
                    null !== m && (e.image_url = Sr(m.getAttribute("src")))
                } else null !== r && (e = function() {
                    var e = yr(),
                        t = document.querySelector(".hook-title, .why_title, .entry-content > h1");
                    if (null !== t) return e;
                    var r = 0 == t.innerText.trim().toLowerCase().indexOf("new");
                    e.type = r ? 1 : 2;
                    var n = document.querySelector('[itemProp="vehicleIdentificationNumber"]');
                    null !== n && (e.vin = n.textContent.trim());
                    null !== (n = document.querySelector('[itemProp="color"]')) && (e.ext_color = n.textContent.trim());
                    null !== (n = document.querySelector('[itemProp="vehicleInteriorColor"]')) && (e.int_color = n.textContent.trim());
                    null !== (n = document.querySelector('[itemprop="mileageFromOdometer"]')) && (e.mileage = or(n.textContent.trim()));
                    "object" == typeof digitaldata && (e.year = digitaldata.vehicle.modelYear);
                    null !== (n = document.querySelector('[itemProp="model"]')) && (e.model = n.textContent.trim());
                    e.make = "Ford";
                    var i = document.querySelectorAll('[class^="pricing_value_"].value');
                    if (i.length > 0) i = i.length > 1 ? i[i.length - 2] : i[i.length - 1], e.price = ir(i.innerText);
                    else if (null !== document.querySelector(".vehiclePricing")) {
                        var o = document.querySelectorAll(".vehiclePricing .last_row div")[1];
                        e.price = ir(o.textContent)
                    }
                    var a = document.querySelectorAll(".dib.b.w6rem");
                    if (a.length > 0)
                        for (var l = 0; l < a.length; l++) {
                            "stock #:" === a[l].innerText.toLowerCase().trim() && (e.stock_no = a[l].nextElementSibling.innerText.trim())
                        }
                    var c = document.querySelector(".image-gallery-image img");
                    null !== c && (e.image_url = Sr(c.getAttribute("src")));
                    return e
                }());
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (document.querySelector(".vdp-details-list-container")) {
                    var t = document.querySelector(".vdp-details-list-container .ft-lead-form-btn");
                    if (null === t) return e;
                    0 === t.getAttribute("data-type").toLowerCase().trim().indexOf("new") ? e.type = 1 : e.type = 2, e.vin = t.getAttribute("data-vin").trim(), e.price = ir(t.getAttribute("data-price").trim()), e.year = t.getAttribute("data-year").trim(), e.stock_no = t.getAttribute("data-stock").trim(), e.trim = t.getAttribute("data-friendlystyle").trim(), e.model = t.getAttribute("data-model").trim(), e.make = t.getAttribute("data-make").trim(), e.ext_color = t.getAttribute("data-extcolor").trim(), e.int_color = t.getAttribute("data-intcolor").trim();
                    var r = document.querySelector("#carImgs img");
                    if (null !== r && (e.image_url = Sr(r.getAttribute("src"))), 2 === e.type) {
                        var n = document.querySelectorAll("#fl-Details ul span"),
                            i = !1;
                        if (n.length > 0)
                            for (var o = 0; o < n.length; o++) {
                                var a = n[o];
                                if (i) {
                                    e.mileage = or(a.textContent);
                                    break
                                }
                                "miles:" === a.textContent.trim().toLowerCase() && (i = !0)
                            }
                    }
                }
                return e
            }());
            br(e) && Wt(ht) && 3 !== (e = function() {
                var e = yr();
                null !== document.querySelector(".cars-shop-srp-block .srp-container") && (wr("in cars.com srp view"), null !== window.callSourceData && "object" == typeof window.callSourceData ? (wr("cars srp data: " + JSON.stringify(window.callSourceData)), e.type = 3, e.cars_dot_com_srp_data = window.callSourceData) : wr("srp cars.com data not found"));
                return e
            }()).type && (e = function() {
                var e = yr();
                null !== document.querySelector(".vdp-header .vdp-section") && (null !== window.callSourceData && "object" == typeof window.callSourceData ? (wr("vdp cars.com data: " + JSON.stringify(window.callSourceData)), (e = function(e) {
                    var t = yr();
                    try {
                        0 === e.type.trim().toLowerCase().indexOf("new") ? t.type = 1 : t.type = 2, t.vin = e.vin, t.year = year, t.stock_no = e.stockNumber, t.trim = e.trim, t.model = e.model, t.make = e.make, t.ext_color = e.extColor, t.int_color = e.intColor, t.price = ir(e.msrp)
                    } catch (e) {
                        wr("Error processing inventory data: " + e.message)
                    }
                    return t
                }(window.callSourceData)).cars_dot_com_vdp_data = window.callSourceData) : wr("Unable to find cars.com inventory data object window.callSourceData"));
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector(".inventory_detail_item")) {
                    var t = document.querySelector(".inline-report");
                    if (null === t) return e;
                    var r = "" == t.innerHtml;
                    e.type = r ? 1 : 2, e.vin = t.getAttribute("data-carstory-vin").trim();
                    var n = document.querySelector('meta[name="vehicle_year"]');
                    null !== n && (e.year = n.getAttribute("content").trim().toLowerCase()), null !== (n = document.querySelector('meta[name="vehicle_model"]')) && (e.model = n.getAttribute("content").trim()), null !== (n = document.querySelector('meta[name="vehicle_make"]')) && (e.make = n.getAttribute("content").trim()), null !== (n = document.querySelector('meta[name="vehicle_trim"]')) && (e.trim = n.getAttribute("content").trim()), null !== (n = document.querySelector("#details-page-vehicle-price")) && (e.price = ir(n.innerText.trim())), null !== (n = document.querySelector('meta[name="vehicle_stock"]')) && (e.stock_no = n.getAttribute("content").trim()), null !== (n = document.querySelector('meta[name="vehicle_trim"]')) && (e.trim = n.getAttribute("content").trim()), null !== (n = document.querySelector('meta[name="vehicle_exterior_color"]')) && (e.ext_color = n.getAttribute("content").trim());
                    var i = document.querySelectorAll(".picto_detail p");
                    if (i.length > 0) {
                        for (var o = {}, a = 0; a < i.length; a++) {
                            var l = this.innerText.trim().split(":");
                            if (2 == l.length) {
                                var c = l[0].trim().toLowerCase(),
                                    u = l[1].trim();
                                o[c] = u
                            }
                        }
                        o.mileage && (e.mileage = or(o.mileage)), o.id && (e.stock_no = o.id), o.exterior && (e.ext_color = o.exterior), o.interior && (e.int_color = o.interior)
                    }
                    var m = document.querySelector(".vehicle_slide.slick-active:first img");
                    null !== m && (e.image_url = Sr(m.getAttribute("src")))
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector("#vdp"))
                    for (var t = document.querySelectorAll('script[type="application/ld+json"]'), r = 0; r < t.length; r++) {
                        var n = JSON.parse(t[r].innerText);
                        if ("vehicle" == n["@type"].toLowerCase()) {
                            e = Ar(n);
                            break
                        }
                    }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector(".cardealer_container")) {
                    var t = document.querySelector('div[itemprop="itemCondition"]');
                    if (!t) return e;
                    var r = "new" == t.innerText.trim().toLowerCase();
                    e.type = r ? 1 : 2, "object" == typeof settings && (e.stock_no = settings.stockNumber), "string" == typeof vehicleVIN && (e.vin = vehicleVIN), "string" == typeof vehiclePrice && (e.price = ir(vehiclePrice)), "string" == typeof vehicleYear && (e.year = vehicleYear), "string" == typeof vehicleMake && (e.make = vehicleMake), "string" == typeof vehicleModel && (e.model = vehicleModel), "string" == typeof vehicleOdometer && (e.mileage = or(vehicleOdometer)), "string" == typeof vehicleIntColor && (e.int_color = vehicleIntColor), "string" == typeof vehicleExtColor && (e.ext_color = vehicleExtColor);
                    var n = document.querySelector(".slides a"),
                        i = document.querySelector(".cardealer_preview li.active img"),
                        o = n || i;
                    if (null !== o) {
                        var a = o;
                        a && (e.image_url = Sr(a.getAttribute("href") || a.getAttribute("src")))
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector("#vdp-container")) {
                    if ("string" == typeof vehicleCondition) {
                        var t = "new" == vehicleCondition.trim().toLowerCase();
                        e.type = t ? 1 : 2
                    } else e = function() {
                        var e = yr();
                        if (document.querySelectorAll(".vehicle-body .vehicle-details").length > 0)
                            for (var t = document.querySelectorAll(".vehicle-body .vehicle-details .list-group-item"), r = 0; r < t.length; r++) {
                                var n, i = t[r].querySelector(".name").innerText.toLowerCase(),
                                    o = t[r].querySelector("span").innerText;
                                switch (i) {
                                    case "status:":
                                        e.type = "new" === o.toLowerCase() ? 1 : 2;
                                        break;
                                    case "year:":
                                        e.year = o;
                                        break;
                                    case "make:":
                                        e.make = o;
                                        break;
                                    case "model:":
                                        e.model = o;
                                        break;
                                    case "color:":
                                        e.ext_color = o;
                                        break;
                                    case "vin:":
                                        e.vin = o;
                                        break;
                                    case "stock number:":
                                        e.stock_no = o
                                }
                                if ("" === e.year) null !== (n = document.querySelector('[itemprop="modelDate"]')) && (e.year = n.innerText.trim());
                                if ("" === e.make) null !== (n = document.querySelector('[itemprop="brand"]')) && (e.make = n.innerText.trim());
                                if ("" === e.model) null !== (n = document.querySelector('[itemprop="model"]')) && (e.model = n.innerText.trim())
                            }
                        return e
                    }();
                    "string" == typeof vehicleStockNum && (e.stock_no = vehicleStockNum), "string" == typeof vehicleVIN && (e.vin = vehicleVIN), "string" == typeof vehiclePrice && (e.price = ir(vehiclePrice)), "string" == typeof vehicleYear && (e.year = vehicleYear), "string" == typeof vehicleMake && (e.make = vehicleMake), "string" == typeof vehicleModel && (e.model = vehicleModel), "string" == typeof vehicleOdometer && (e.mileage = or(vehicleOdometer)), "string" == typeof vehicleIntColor && (e.int_color = vehicleIntColor), "string" == typeof vehicleExtColor && (e.ext_color = vehicleExtColor);
                    var r = document.querySelector(".images-container img");
                    if (null !== r) {
                        var n = r.getAttribute("src");
                        e.image_url = Sr(n)
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector(".menu-section")) {
                    var t = document.querySelectorAll(".dtal-txt");
                    if (!(t.length > 0)) return e;
                    e = function(e) {
                        for (var t = yr(), r = 0; r < e.length; r++) {
                            var n = e[r].querySelector("label").innerText.trim().toLowerCase(),
                                i = e[r].querySelector("span").innerText.trim();
                            switch (n) {
                                case "condition :":
                                    t.type = "new" === i.toLowerCase() ? 1 : 2;
                                    break;
                                case "year :":
                                    t.year = i;
                                    break;
                                case "make :":
                                    t.make = i;
                                    break;
                                case "model :":
                                    t.model = i;
                                    break;
                                case "color :":
                                    t.ext_color = i;
                                    break;
                                case "vin :":
                                    t.vin = i;
                                    break;
                                case "stock code :":
                                    t.stock_no = i
                            }
                        }
                        return t
                    }(t)
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector('[itemtype="http://schema.org/Motorcycle"]')) {
                    if (!("string" == typeof vehicleCondition)) return e;
                    var t = "new" == vehicleCondition.trim().toLowerCase();
                    e.type = t ? 1 : 2, "string" == typeof vehicleStockNum && (e.stock_no = vehicleStockNum), "string" == typeof vehicleVIN && (e.vin = vehicleVIN), "string" == typeof vehiclePrice && (e.price = ir(vehiclePrice)), "string" == typeof vehicleYear && (e.year = vehicleYear), "string" == typeof vehicleMake && (e.make = vehicleMake), "string" == typeof vehicleModel && (e.model = vehicleModel), "string" == typeof vehicleOdometer && (e.mileage = or(vehicleOdometer)), "string" == typeof vehicleIntColor && (e.int_color = vehicleIntColor), "string" == typeof vehicleExtColor && (e.ext_color = vehicleExtColor);
                    var r = document.querySelector(".images-container img");
                    if (null !== r) {
                        var n = r.getAttribute("src");
                        e.image_url = Sr(n)
                    }
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector(".vdpview")) {
                    var t = !1;
                    if ("object" != typeof store || !store.vehicle.condition) return e;
                    t = !0;
                    var r = "new" == store.vehicle.condition.trim().toLowerCase();
                    e.type = r ? 1 : 2, t ? (e.stock_no = store.vehicle.stockNum, e.vin = store.vehicle.vin, e.price = ir(store.vehicle.pricing.data.internet), e.year = store.vehicle.year, e.make = store.vehicle.make, e.model = store.vehicle.model, e.mileage = or(store.vehicle.mileage), e.int_color = store.vehicle.color.interior.name, e.ext_color = store.vehicle.color.exterior.name, e.image_url = Sr(store.vehicle.media.image[0].src)) : (e.stock_no = store.vehicle.stockNum, e.vin = store.vehicle.vin, e.price = ir(store.vehicle.pricing.data.final), e.year = store.vehicle.year, e.make = store.vehicle.make, e.model = store.vehicle.model, e.mileage = or(store.vehicle.mileage), e.int_color = store.vehicle.color.interior.name, e.ext_color = store.vehicle.color.exterior.name, e.image_url = Sr(store.vehicle.media.image[0].src))
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector("#vdp-page")) {
                    var t = document.querySelector(".event-pageview");
                    if (null === t) return e;
                    var r = "new" == t.getAttribute("data-inventorytype").trim().toLowerCase();
                    e.type = r ? 1 : 2;
                    var n = document.querySelectorAll(".spec-table");
                    if (n.length > 0) {
                        var i, o = n[0],
                            a = n[1];
                        if (o)
                            if (i = o.querySelectorAll("tr")) {
                                var l = i[i.length - 1].querySelectorAll("td");
                                e.int_color = l[l.length - 1].textContent;
                                var c = i[i.length - 2].querySelectorAll("td");
                                e.ext_color = c[c.length - 1].textContent
                            }
                        if (a)
                            if (i = a.querySelectorAll("tr")) {
                                var u = i[2].querySelectorAll("td");
                                e.mileage = or(u[u.length - 1].textContent)
                            }
                    }
                    e.stock_no = t.getAttribute("data-stock").trim(), e.vin = t.getAttribute("data-vin").trim();
                    var m = document.querySelector(".get-price-button");
                    null !== m && (e.price = ir(m.getAttribute("data-price").trim())), e.year = t.getAttribute("data-year").trim(), e.make = t.getAttribute("data-make").trim(), e.model = t.getAttribute("data-model").trim(), e.image_url = Sr(t.getAttribute("data-vehicleimage").trim())
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr(),
                    t = document.querySelector("#hfVehicleType");
                if (null !== t && "object" == typeof window.trackVehicle) {
                    -1 !== t.getAttribute("value").toLowerCase().indexOf("new") ? e.type = 1 : e.type = 2
                }
                if (0 === e.type) return e;
                if ("object" == typeof window.trackVehicle) {
                    e.year = window.trackVehicle.Year, e.make = window.trackVehicle.Make, e.model = window.trackVehicle.Model, e.vin = window.trackVehicle.Vin;
                    for (var r = document.querySelectorAll(".mvdp-details .dw-widget div"), n = 0; n < r.length; n++) {
                        var i = r[n].textContent,
                            o = i.split(":");
                        if (2 === o.length) {
                            var a = o[1].trim(); - 1 !== i.toLowerCase().indexOf("trim") ? e.trim = a : -1 !== i.toLowerCase().indexOf("exterior") ? e.ext_color = a : -1 !== i.toLowerCase().indexOf("interior") ? e.int_color = a : -1 !== i.toLowerCase().indexOf("stock") ? e.stock_no = a : -1 !== i.toLowerCase().indexOf("miles") && (e.mileage = or(a))
                        }
                    }
                    var l = document.querySelectorAll(".w-vdpPriceBox-figure.w-vdpPriceBox-yesPrice");
                    if (l.length > 0) {
                        var c = l[l.length - 1].textContent;
                        e.price = ir(c)
                    }
                    var u = document.querySelector("#w-vdpGallery-lgPhotos img");
                    null !== u && (e.image_url = Sr(u.getAttribute("src")))
                }
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector(".ddsVehicleInfo") && "object" == typeof window.dt_vehicle) {
                    -1 !== window.dt_vehicle.state_of_vehicle.toLowerCase().indexOf("new") ? e.type = 1 : e.type = 2
                }
                if (0 === e.type) return e;
                e.year = window.dt_vehicle.year, e.make = window.dt_vehicle.make, e.model = window.dt_vehicle.model, e.vin = window.dt_vehicle.vin, e.trim = window.dt_vehicle.trim, "object" == typeof window.ddsVars && "object" == typeof window.ddsVars.vehicle && (e.stock_no = window.ddsVars.vehicle.stockNumber);
                e.price = ir(window.dt_vehicle.price);
                var t = document.querySelector(".vdp-details-extcolorname");
                t && (e.ext_color = t.textContent);
                var r = document.querySelector(".vdp-details-intcolorname");
                r && (e.int_color = r.textContent);
                var n = document.querySelector(".vdp-details-mileagenumber");
                n && (e.mileage = or(n.textContent));
                var i = document.querySelector(".vdp-image-container img");
                null !== i && (e.image_url = Sr(i.getAttribute("src")));
                return e
            }());
            br(e) && (e = function() {
                var e = yr();
                if (null !== document.querySelector(".vdp-main")) {
                    if (null !== (i = document.querySelector('[itemProp="itemCondition"]'))) {
                        var t = i.getAttribute("content").toLowerCase().trim();
                        e.type = "new" === t ? 1 : 2
                    }
                }
                if (0 === e.type) return e;
                try {
                    if (null !== (i = document.querySelector('[itemProp="name"]'))) {
                        var r = i.getAttribute("content").trim();
                        if (r) {
                            var n = r.split(" ");
                            e.year = n[0]
                        }
                    }
                    null !== (i = document.querySelector('[itemProp="brand"]')) && (e.model = i.getAttribute("content").trim()), null !== (i = document.querySelector('[itemProp="model"]')) && (e.make = i.getAttribute("content").trim()), null !== (i = document.querySelector('[itemProp="mpn"]')) && (e.vin = i.getAttribute("content").trim()), null !== (i = document.querySelector('[itemProp="sku"]')) && (e.stock_no = i.getAttribute("content").trim()), null !== (i = document.querySelector('[itemProp="price"]')) && (e.price = ir(i.getAttribute("content").trim())), (i = document.querySelector(".mileage-block")) && (e.mileage = or(i.textContent));
                    var i, o = document.querySelector(".img .source");
                    if (null !== o)
                        if (i = o.getAttribute("style")) {
                            n = i.split('"');
                            e.image_url = Sr(n[1])
                        }
                } catch (e) {
                    wr("Error getting vdp data for nabthat: " + e.message)
                }
                return e
            }());
            return function(e, t) {
                Lr() && console.log(e + JSON.stringify(t))
            }(" inventory:", e), e
        }())
    }()
}

function ignoreerror() {
    return !0
}
window.gATLEAST_ONE_NUMBER_WAS_SWAPPED = !1, window.onerror = ignoreerror();