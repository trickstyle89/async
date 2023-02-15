const messages = ['4311o', 'th3r3', 'w0r1d'];

const printMessage = (messages) => {
  let i = 0;
  const intervalId = setInterval(() => {
    process.stdout.write(messages[i]);
    i++;
    if (i >= messages.length) {
      clearInterval(intervalId);
    }
  }, 50);
};



printMessage(messages);