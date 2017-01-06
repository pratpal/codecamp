'use strict';
var express = require('express'),
    http = require('http'),
    port = process.argv[2];
    
var app = express();

app.get("/home", function(req,res){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
    
});

app.listen(port)