const fs = require('fs');
const net = require('net');
const readline = require('readline');

const host = '127.0.0.1';
const port = 3000;
const path = '/Users/ivanchew/Documents/GitHub/async/networkStretch/';
const filename = '/Users/ivanchew/Documents/GitHub/async/networkStretch/README.md';

const client = net.createConnection(port, host, () => {
  console.log(`Connected to tcp://${host}:${port}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

// read input from stdin and write to the socket
rl.on('line', (input) => {
  client.write(input.trim() + '\n');
  rl.prompt();
});

// read data from the socket and write to stdout
client.on('data', (data) => {
  process.stdout.write(data.toString());
});

// close the readline interface and the socket on exit
rl.on('close', () => {
  console.log('Exiting.');
  client.destroy();
});

const downloadFile = function(path, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    const request = `GET ${path} HTTP/1.1\r\nHost: ${host}\r\n\r\n`;

    client.write(request);

    client.on('data', (chunk) => {
      file.write(chunk);

      if (chunk.includes(Buffer.from('\r\n\r\n'))) {
        const headerEndIndex = chunk.indexOf(Buffer.from('\r\n\r\n'));
        const header = chunk.slice(0, headerEndIndex).toString();

        if (!header.includes('200 OK')) {
          console.error(`Failed to download file: ${header}`);
          reject(header);
        }
      }
    });

    client.on('end', () => {
      file.end();
      console.log(`Downloaded and saved ${file.bytesWritten} bytes to ${filename}`);
      resolve(filename);
    });

    client.on('error', (error) => {
      console.error(error);
      reject(error);
    });
  });
};

// usage example:
downloadFile(path, filename).then((filename) => {
  console.log(`File downloaded: ${filename}`);
}).catch((error) => {
  console.error(`Failed to download file: ${error}`);
});