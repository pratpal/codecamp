var http = require('http');
var i = 0;
var rawData = {};
var urls = [process.argv[2],process.argv[3],process.argv[4]];
var count = 0;




var print = function () {
    var j;
    for (j = 0; j < urls.length; ++j) {
        console.log(rawData[j]);
    }
};


	urls.forEach(function(url) {
		var d= "";
		http.get(url, (res) =>{
			res.setEncoding('utf8');
			res.on('data', (chunk) => {
			  d += chunk;  
			});
			res.on('end', () => {
			   rawData[i] = d;
			   count += 1;
            	if (count === 3) {
                	print();
            	}
			});
		}).on('error', (e) => {
		console.log(`Got error: ${e.message}`);
		});
		i = i + 1;
	});


