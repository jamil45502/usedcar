! function(t, e) {
    if (void 0 === e[t]) {
        e[t] = function() {
            e[t].clients.push(this), this._init = [Array.prototype.slice.call(arguments)]
        }, e[t].clients = [];
        for (var o = function(t) {
                return function() {
                    return this["_" + t] = this["_" + t] || [], this["_" + t].push(Array.prototype.slice.call(arguments)), this
                }
            }, i = ["addRecord", "set", "trackEvent", "trackPageview", "ready"], a = 0; a < i.length; a++) {
            var r = i[a];
            e[t].prototype[r] = o(r)
        }
        var n = document.createElement("script");
        n.type = "text/javascript", n.async = !0, n.src = ("https:" === document.location.protocol ? "https:" : "http:") + "//tags-cdn.clarivoy.com/common/read_from_config/clarivoy.js";
        var l = document.getElementsByTagName("script")[0];
        l.parentNode.insertBefore(n, l)
    }
}("Clarivoy", this);
var td = new Clarivoy({
    host: "in.treasuredata.com",
    database: "hits",
    writeKey: "5623/1df365230012adb448e39c10fe30d9e11182b910"
});
properties = {
    "supercarguys.com": [50622, [5, 7, 6, 9, 1, 2]]
};
var property_info = properties[window.location.hostname.replace(/^www./i, '')] || [],
    property_id = property_info.length > 0 ? property_info[0] : '',
    features = property_info.length > 1 ? property_info[1] : [],
    plugins = "";
if (navigator.plugins) {
    for (var np = navigator.plugins, plist = new Array, i = 0; i < np.length; i++) {
        plist[i] = np[i].name + "; ", plist[i] += np[i].description + "; ", plist[i] += np[i].filename + ";";
        for (var n = 0; n < np[i].length; n++) plist[i] += " (" + np[i][n].description + "; " + np[i][n].type + "; " + np[i][n].suffixes + ")";
        plist[i] += ". "
    }
    for (plist.sort(), i = 0; i < np.length; i++) plugins += "Plugin " + i + ": " + plist[i]
}
var timezone = "";
try {
    var timezone = (new Date).getTimezoneOffset().toString()
} catch (e) {}
var cookies = navigator.cookieEnabled ? "enabled" : "disabled";
td.set("$global", "clarivoy_property_id", property_id), td.set('$global', 'features', features), td.set("$global", "clarivoy_user_agent", window.navigator.userAgent), td.set("$global", "clarivoy_plugins", plugins), td.set("$global", "clarivoy_timezone", timezone), td.set("$global", "clarivoy_cookies", cookies), td.set("$global", "td_global_id", "td_global_id"), td.trackPageview("pageviews");