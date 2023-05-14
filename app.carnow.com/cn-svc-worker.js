self.addEventListener('install', function(event) {});
self.addEventListener('fetch', function(event) {
    var msg = null;
    if (event.request.url.indexOf("chat_request") >= 0) {
        msg = {
            event: "chatInitialized"
        };
    }
    if (msg) {
        msg.source_url = location.href;
        self.clients.matchAll().then(function(clients) {
            for (var i = 0; i < clients.length; i++) {
                clients[i].postMessage(msg);
            }
        })
    }
});