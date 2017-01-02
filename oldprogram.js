var fs = require('fs');
var path = require('path');
var mymodule = require('./programmodule.js');

var ext = process.argv[3];
var directory = process.argv[2];
mymodule(directory, ext, function(err, data){
	if (err) return err;
	data.forEach(function(d){
		console.log(d);
	});

});


//var buf = fs.readFileSync(process.argv[2]);
//var str = buf.toString();
//console.log(str);
//console.log(str.split('\n').length - 1);

//fs.readFile(process.argv[2],'utf8',function (err,str){
//console.log(str.split('\n').length - 1);
//});

//var ext = process.argv[3];
//var directory = process.argv[2];

//fs.readdir(directory, function(err, files){
//console.log(files);
//console.log(files.filter(function(x) x.isFile) + "\n");
//console.log(files.filter(function(x) path.extname(x).substr(1, path.extname(x).length)) == ext) + "\n");

//files.forEach(function (f){
//if (path.extname(f).substr(1) == ext){
//console.log(f);
//}
//});

//});


//var initarray  = process.argv;
//var arr = initarray.splice(2,initarray.length-1);
//console.log(arr);
//console.log(arr.reduce(function(a,b) {return Number(a) + Number(b);}, 0));


