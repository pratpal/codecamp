'use strict';
var express = require('express'),
    fs = require("fs"),
    port = process.argv[2];
    
var app = express();

app.get("/books", function(req,res){
   
   fs.readFile(process.argv[3], function(err,data){
            res.json(JSON.parse(data));
   });
});

app.listen(port)