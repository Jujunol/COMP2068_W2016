var http = require("http");
var port = process.env.PORT || 8080;
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("Hello Azure!");
}).listen(port);
//# sourceMappingURL=server.js.map