const net = require("net");

const conn = net.createConnection({
  host: "SERVER IP ADDRESS HERE", // change to IP address of computer, more on that below
  port: 3000,
});

conn.setEncoding("utf8"); // interpret data as text
