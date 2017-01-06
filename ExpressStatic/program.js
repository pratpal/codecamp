'use strict';
var express = require('express'),
    http = require('http'),
    port = process.argv[2];
    
    
var app = express();
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.listen(port)