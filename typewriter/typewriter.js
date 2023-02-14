const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
  setInterval(() => {
    process.stdout.write(char);
  }, 50 + 50);
}

//process.stdout.write
