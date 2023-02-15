const [node, script, ...times] = process.argv;


// created a function its own to call when needed.
const beep = () => {
  process.stdout.write('\x07'); 
  // this is the sound FX provided by LHL
};

const setTimers = (times) => {
  times
    .map(Number) //need to ensure it is a number if it s inputted as a string.
    .filter(time => !isNaN(time)) //filtering out SOME edge cases with isNaN(time). Super useful code.
    .sort((a, b) => a - b) // sorting the numbers to ensure the alarm is set in order.
    .forEach((time, i) => { // this is the part where the alarm is set for each time
      setTimeout(beep, time * 1000 + i * 1000); 
      // extra 1000 is added to make up for the delay from first beep.
    });
};

setTimers(times);

/* node timer1.js 10 3 5 15 9 

This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds
*/
