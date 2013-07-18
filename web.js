var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var k = fs.readFileSync('index.html','utf8');

var buf = new Buffer(k);


app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
