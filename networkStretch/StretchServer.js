const net = require("net");
const fs = require('fs');
const server = net.createServer();

server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});

server.on("connection", (client) => {
  console.log("New client connected!");
  client.write("Hello there!");
  client.setEncoding("utf8"); // interpret data as text
  client.on("data", (data) => {
    console.log("Message from client: ", data);
});
});

// creating a writable stream to the file you want to save 
const file = fs.createWriteStream(filename);

// HTTP GET request 
http.get(url, (response) => {
  console.log(`Downloading ${url} to ${filename}`);
// piping response stream
  response.pipe(file);


// log a message when the file has finished downloading
  file.on('finish', () => {
    console.log(`Downloaded and saved ${file.bytesWritten} bytes to ${filename}`);
    file.close();
  });
}).on('error', (error) => {
  console.error(error);
});