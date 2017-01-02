var fs = require('fs');
var path = require('path');

module.exports = function(directory, ext, callback) {
	fs.readdir(directory, function(err, files){
      		if(err) return callback(err);
      		var filteredFiles = files.filter(function (f){
         		return (path.extname(f).substr(1) == ext);
      		});
      	return callback(null, filteredFiles);
   	});
};
