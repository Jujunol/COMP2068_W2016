import http = require("http");

var port:number = process.env.PORT || 8080;

http.createServer(function(request:http.ServerRequest, response:http.ServerResponse) {
    response.writeHead(200, {"Content-type" : "text/plain"})
    response.end("Hello Azure!");
}).listen(port);
