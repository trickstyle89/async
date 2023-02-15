
// 'net' is for the TCP protocol that 
// const net = require('net'); TCP

//FILE SYSTEM from Node.JS
const fs = require('fs');

//HTTP Protocol
const http = require('http');

const url = 'http://www.example.edu/';
const filename = './index.html';

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