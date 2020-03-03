// http is native to NodeJS. we just have to ask for it
const http = require('http');
// access files in this computer
const fs = require('fs');
// the http module has a createServer method
// take 1 args:
// 1. callback, callback, has 2 args: req, res
const server = http.createServer((req, res) => {
	if (req.url === '/') {
		// res => our way to responding to the requester
		// http message
		// 1. starter-line - CHECK
		// 2. header
		// 3. body
		// writeHead take 2 args:
		// 1. status code
		// 2. object for mim-type
		res.writeHead(200, { 'Content-Type': 'text/html' }); // header
		const homePageHtml = fs.readFileSync('node.html');
		res.write(homePageHtml); // body
		res.end(); // close the connection
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' }); // header
		res.write('<h2>Page not found! please try again..</h2>'); // body
		res.end(); // close the connection
	}
});

// createServer returns an object with a listen method
// listen take 1 arg:
// 1. port to listen for http traffic on
server.listen(3000);
