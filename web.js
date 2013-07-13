var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer("sdf", "utf-8");

// 'var buffer2 = new Buffer(fs.readFileSync('index.html'),"utf-8");

app.get('/', function(request, response) {
    response.send(buffer.toString());
//    response.send('test');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
