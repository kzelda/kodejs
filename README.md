kodejs
======

Code Examples of nodejs

```javascript
var vv;
var http = require("http");
http.get("http://www.google.com/index.html", function(res) {
  console.log("Got response: " + res.statusCode);
   res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
```
