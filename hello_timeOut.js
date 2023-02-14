const sentence = "hello there from lighthouse labs";

let currentWordIndex = 0;
let currentCharIndex = 0;
let intervalTime;

const printMessage = () => {
  const message = sentence[currentWordIndex];
  process.stdout.write(message[currentCharIndex]);

  currentCharIndex++;

  if (currentCharIndex === message.length) {
    currentWordIndex++;
    currentCharIndex = 0;
  }

  if (currentWordIndex === sentence.length) {
    clearInterval(intervalTime);
    console.log('\n');
  }
};

intervalTime = setInterval(printMessage, 50);