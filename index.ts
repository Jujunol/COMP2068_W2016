import http = require("http");

http.createServer(function(request:http.ServerRequest, response:http.ServerResponse) {
    response.writeHead(200, {"Content-type" : "text/plain"})
}).listen(port, hostname, function() {
    console.log("Server running at " + hostname + ":" + port);
});

var hostname = "127.0.0.1";
var port = 8080;

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type" : "text/plain"})
    response.end("Hello World!");
}).listen(port, hostname, function(){
    console.log("Server running at " + hostname + ":" + port);
});
