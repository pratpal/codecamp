
'use strict';
var express = require('express'),
    http = require('http'),
    port = process.argv[2];
    
var app = express();

 app.get('/search', function(req, res){
      res.send(req.query);
 }).listen(port)
