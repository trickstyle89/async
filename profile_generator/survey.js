const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// above is the required code ot enable the ability prompt output and take input.

// creation of empty object to push our profile answers onto
let profile = {};

// object of questions to ask for profile
//note that the keys have been premade along with the prompts
// best practice as it makes easier to maintain and change.

const questions = [
  { key: 'Name', question: 'What is your name? Nicknames preferred!' },
  { key: 'Hobbies', question: 'What do you like to do for fun?' },
  { key: 'Music', question: 'What music or artist do you like?' },
  { key: 'Food', question: 'What do you like to eat?' },
  { key: 'Sports', question: 'What sport do you like to watch or play?' },
  { key: 'Power', question: 'What is your superpower?' }
];

// function to cycle through the index of questions and to create new data on profile object.
const askQuestion = (index) => {
  // renaming variable for the questions object.
  const currentQuestion = questions[index];
  //readling rl.question displaying the currently question and taking the answer.
  rl.question(currentQuestion.question, (answer) => {
    //arrow function that creates a new object key based on answer.
    profile[currentQuestion.key] = answer;
    // conditional to determine if we have reached the end of the questions object index.
    if (index === questions.length - 1) {
      // callback to output the profile paragraph
      profileCompiler(profile);
      //closes the readline function.
      rl.close();
    } else {
      // if not at the end of the question object, go to next and tack on count.
      askQuestion(index + 1);
    }
  });
};

// this actuallyy calls the entire function above starting at the first question (0);
askQuestion(0);

// The final portion of the code that outputs the data into a paragraph form.
const profileCompiler = function(profile) {
  console.log(`Hi my name is ${profile.Name}`);
  console.log(`I enjoy doing the following things for fun: ${profile.Hobbies}`);
  console.log(`Some of my favorites music is: ${profile.Music}`);
  console.log(`I love eating: ${profile.Food}`);
  console.log(`I have a passion for playing: ${profile.Sports}`);
  console.log(`My superpower is: ${profile.Power}`);
};


/* Raw WET UGLY code below.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

rl.question('What is your name? Nicknames preferred!', (nickName) => {
  profile.Name = nickName;
  
  rl.question('What do you like to do for fun?', (hobbies) => {
    profile.Hobbies = hobbies;

    rl.question('What music or artist do you like?', (music) => {
      profile.Music = music;

      rl.question('What do you like to eat?', (food) => {
        profile.Food = food;

        rl.question('What sport do you like to watch or play?', (sport) => {
          profile.Sport = sport;

          rl.question('What is your superpower?', (power) => {
            profile.Power = power;

            profileCompiler(profile);

    rl.close();
  });
});
});
});

const profileCompiler = function(profile) {
  console.log(`Hi my name is ${profile.Name}`);
  console.log(`I enjoy doing the following things for fun: ${profile.Hobbies}`);
  console.log(`Some of my favorites music is: ${profile.Music}`);
  console.log(`I love eating: ${profile.Food}`);
  console.log(`I have a passion for playing: ${profile.Sports}`);
  console.log(`My superpower is: ${profile.Power}`);
}

*/