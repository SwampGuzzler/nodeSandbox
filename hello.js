var http = require('http'); // Require in the http module

http.createServer(function(request, response) {
	response.writeHead(200); // Status code into the header
	response.write("Hello, Node! "); 
	setTimeout(function() {
		response.write("Node is Done."),
		response.end();
	}, 5000);
}).listen(8080); // listen on port 8080

console.log("the server is running on port 8080");