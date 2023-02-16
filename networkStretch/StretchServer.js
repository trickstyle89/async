const net = require("net");
const fs = require("fs");
const readline = require('readline');

const server = net.createServer();
const fileName = "/Users/ivanchew/Documents/GitHub/async/networkStretch/README.md";

server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});

server.on("connection", (socket) => {
  console.log("New client connected!");

  socket.write("Welcome to my simple file server.\n");
  socket.setEncoding("utf8");

  const rl = readline.createInterface({
    input: socket,
    output: socket,
  });

  let downloadConfirmed = false;

  rl.question(sendPrompt, (answer) => {
    if (answer.toLowerCase() !== 'y') {
      // If the client did not confirm, close the socket and return
      console.log('Client declined to download.');
      socket.end();
      return;
    }

  const sendPrompt = () => {
    socket.write(`Do you want to download ${fileName}? (y/n) `);
  };

  socket.on("data", (data) => {
    console.log("Message from client:", data);

    if (!downloadConfirmed) {
      const answer = data.toString().toLowerCase().trim();
      if (answer === "y") {
        downloadConfirmed = true;
        socket.write("HTTP/1.1 200 OK\r\n");
        socket.write("Content-Disposition: attachment; filename=" + fileName + "\r\n");
        socket.write("Content-Type: text/plain\r\n\r\n");

        const fileStream = fs.createReadStream(fileName);
        fileStream.pipe(socket);
      } else {
        console.log("Client declined to download.");
        socket.end();
      }
    }
  });

  sendPrompt();
});
};