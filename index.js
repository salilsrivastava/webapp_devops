// Import required modules
const http = require('http');

// Define the port to listen on
const PORT = 3000;

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send a response
  res.end('Hello, World!\n');
});

// Start the server and listen for incoming connections
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
