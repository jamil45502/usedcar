(function() {
    var getVariables = getUrlVars(),
        gclid = (isset(getVariables['gclid'] ? getVariables['gclid'] : null)),
        utm_source = (isset(getVariables['utm_source'] ? getVariables['utm_source'] : null)),
        utm_medium = (isset(getVariables['utm_medium'] ? getVariables['utm_medium'] : null)),
        utm_content = (isset(getVariables['utm_content'] ? getVariables['utm_content'] : null)),
        utm_campaign = (isset(getVariables['utm_campaign'] ? getVariables['utm_campaign'] : null));
    getIpAddress();


    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });
        return vars;
    }

    function isset() {
        var a = arguments;
        var l = a.length;
        var i = 0;
        var undef;
        if (l === 0)
            throw new Error('Empty isset');
        while (i !== l) {
            if (a[i] === undef || a[i] === null) {
                return false;
            }
            i++;
        }
        return true;
    }

    function getIpAddress() {
        var url = "https://server.drivehelix.com/getIP.php";
        var http_request;
        http_request = new XMLHttpRequest();
        http_request.onreadystatechange = function() {
            if (this.readyState === 4) {
                sendAnalytics(this.responseText);
            }
        };
        http_request.open("POST", url);
        http_request.withCredentials = true;
        http_request.setRequestHeader("Content-Type", "application/json");
        http_request.send({
            'request': "authentication token"
        });
    }

    function sendAnalytics(ipAddress) {
        var data = new FormData();
        data.append("gclid", gclid);
        data.append("utm_source", utm_source);
        data.append("utm_medium", utm_medium);
        data.append("utm_content", utm_content);
        data.append("utm_campaign", utm_campaign);
        data.append('ip', ipAddress);
        data.append("url", window.location.href);
        var url = "https://server.drivehelix.com/saveAnalytics.php";
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function() {
            if (this.readyState === 4) {}
        });
        xhr.open("POST", url);
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.send(data);
    }
})();