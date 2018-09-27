/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-09-07 10:33:01
 * @version $Id$
 */
var  http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<h1>Node.js</h1>');
	res.end('<p>Hello Node</p>');	
}).listen(3000);
console.log('HTTP server is listening at port 3000.');