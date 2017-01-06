'use strict';
var express = require('express'),
    http = require('http'),
    port = process.argv[2];
    
var app = express();

 app.put('/message/:id', function(req, res){
     var id = req.params.id;
     
      res.send(require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex'));
 });

app.listen(port)