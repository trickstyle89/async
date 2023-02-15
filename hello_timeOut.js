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

/*
The currentLetterIndex variable keeps track of the current letter being printed.
 When printMessage is called, it gets the word at the current index from the word array,
and then prints the character at the current index in that message.

After printing the character, printMessage increments the currentCharIndex variable,
 which keeps track of the index of the next character to print in the current word. 
 When currentCharIndex reaches the length of the current word, that means the entire word
  has been printed, and so currentLetterIndex is incremented to move on to the next letter in 
  the sentence, and currentCharIndex is reset to 0 to start printing the first 
  character of the next letter.
  */