const messages =['4311o', 'th3r3', 'w0r1d'];

for (let i = 0; i < messages.length; i++) {
  setTimeout(() => { 
    console.log(messages[i]);}, i * 1000);
}