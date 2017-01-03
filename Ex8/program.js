var http = require('http');

http.get(process.argv[2], (res) =>{
	res.setEncoding('utf8');
	var rawData = '';
	var len = 0;
	res.on('data', (chunk) => {rawData += chunk; console.log(rawData); len += chunk.length});
	res.on('end', () => {
    try {
      console.log(len);
      //console.log(rawData);
    } catch (e) {
      console.log(e.message);
    }
  });
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});
