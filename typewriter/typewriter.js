const sentence = "hello there from lighthouse labs";

let currentLetterIndex = 0;
let currentCharIndex = 0;
let intervalTime;


const printMessage = () => {
  const letter = sentence[currentLetterIndex];
  process.stdout.write(letter[currentCharIndex]);

  currentCharIndex++;

  // checks to see if the letter is finished interating.
  if (currentCharIndex === letter.length) {
    currentLetterIndex++;
    currentCharIndex = 0;
  }

  // checks to see if the whole sentence is finished interating.
  if (currentLetterIndex === sentence.length) {
    clearInterval(intervalTime);
    console.log('\n');
  }
};
//callback putting the entire function into setInterval;
intervalTime = setInterval(printMessage, 50);
