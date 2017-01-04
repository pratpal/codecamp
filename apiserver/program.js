'use strict';
var url = require('url'),
    http = require('http'),
    port =process.argv[2];
  
 



var server = http.createServer((req,res) => {
  var parse = url.parse(req.url, true);
  var result  = '';
  var isodate = new Date(parse.query.iso);
  
  console.log(parse);
  console.log(parse.query.iso);
  
  if (parse.pathname.indexOf('parsetime') > 0){
      result = {
            hour: isodate.getHours(),
            minute: isodate.getMinutes(),
            second: isodate.getSeconds()
        };
  }
  else if (parse.pathname.indexOf('unixtime') > 0){
      result = {
            unixtime: isodate.getTime()
        };
  }
  
  res.writeHead(200, { 'Content-Type': 'application/json' })
  
  
  return res.end(JSON.stringify(result));
  
})


server.listen(port)






