'use strict';
var express = require('express'),
   port = process.argv[2],
    bodyparser = require('body-parser');
    
var app = express();
app.use(bodyparser.urlencoded({extended: false}))
//app.set('views', process.argv[3])
//app.set('view engine', 'jade')
//console.log(process.argv[3])
app.post("/form", function(req,res){
    
    res.end(req.body.str.split('').reverse().join(''))
    
});

app.listen(port)