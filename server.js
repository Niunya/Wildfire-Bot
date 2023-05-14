var http = require('http');
http.createServer(function(req, res) {
  res.write('we connected baybee')
  res.end()
}).listen(8000)