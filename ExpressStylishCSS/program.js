'use strict';
var express = require('express'),
    http = require('http'),
    port = process.argv[2];
    
    
var app = express();
app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));
app.listen(port)