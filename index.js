var http = require("http");
var hostname = "127.0.0.1";
var port = 8080;
http.createServer(function (request, result) {
    result.writeHead(200, { "Content-Type": "text/plain" });
    result.end("Hello World!");
}).listen(port, hostname, function () {
    console.log("Server running at " + hostname + ":" + port);
});
//# sourceMappingURL=index.js.map