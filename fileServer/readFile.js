const fs = require('fs');        // Imports the file system module to read files
const http = require('http');    // Imports the HTTP module to create a web server

http.createServer((req, res) => {
    fs.readFile('./demo.html','utf-8', (err, data) => {
        if (err) throw err; // If error reading file, throw it

        res.writeHead(200, { "Content-Type": "text/html" }); // Send response header
        console.log(data); // Logs file buffer (raw binary)
        res.write(data);   // Sends file content as response body
        res.end();         // Ends the response
    });

}).listen(2001); // Server listens on port 2001
