var http = require('http');
var main = require('./index.js');

var server = http.createServer( (req, res) => {
	res.writeHead(200);
		res.end('<h1>PhenixRTC Lib</h1>');
} );
server.listen(8080);