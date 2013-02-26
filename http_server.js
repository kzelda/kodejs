//node "D:\dropbox\Dropbox\Dropbox\nodejs\http_server.js"
var sys = require("sys");
var http = require("http");
var url = require("url");

http.createServer(function(req, res) {
res.setHeader("Content-Type" , "text/html");
res.write("Hello World!");
sys.puts(url.parse(req.url,true));
res.end();
}).listen(8888);
sys.puts("Server running at http://localhost:8888/"); 