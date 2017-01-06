'use strict';
var express = require('express'),
    http = require('http'),
    port = process.argv[2];
    
var app = express();

app.set('views', process.argv[3])
app.set('view engine', 'jade')
//console.log(process.argv[3])
app.get("/home", function(req,res){
    
    res.render('index', {date: new Date().toDateString()})
    
});

app.listen(port)