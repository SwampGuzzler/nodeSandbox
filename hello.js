var http = require('http'); // Require in the http module

http.createServer(function(request, response) {
	response.writeHead(200); // Status code into the header
	response.write("Hello, Node!"); 
	response.end(); // Closes the connection
}).listen(8080); // listen on port 8080

console.log("the server is running on port 8080");