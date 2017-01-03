'use strict';
var fs = require('fs'),
    http = require('http'),
    port = process.argv[2],
    file = process.argv[3];




var server = http.createServer((req,res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })
  return fs.createReadStream(file).pipe(res);
      
})


server.listen(port)






