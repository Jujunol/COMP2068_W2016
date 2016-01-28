/// <reference path="typings/_reference.ts" />

import http = require("http");

var port:number = process.env.PORT || 8080;

var server = http.createServer(function(req:http.ServerRequest, res:http.ServerResponse) {
    res.writeHead(200, {"Content-type" : "text/html"})
    res.end("<h1>Hello World!</h1>");
}).listen(port);
