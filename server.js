/*
var http = require('http');
http.createServer(function(request, respond){
    respond.writeHead(200, {'Content-type': 'text/plain'});
    respond.end('Hello!');
}).listen(1337, '127.0.0.1');
console.log('Webserver has started');
*/


var http = require('http');
var file_system = require('fs');
http.createServer(function(request, respond){
	file_system.readFile('index.html', function(error, data){
	    respond.writeHead(200, {'Content-type': 'text/html'});
	    respond.end(data);		
	});
}).listen(1337, '127.0.0.1'); 
console.log('Webserver has started');

