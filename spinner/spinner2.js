const animationSequences = [  '\r|   ',  '\r/   ',  '\r-   ',  '\r\\   ',  '\r|   ',];

let iterationCount = 0; // Keep track of the number of iterations

const intervalId = setInterval(() => {
  // the modulus operator is used to keep animation running by ensuring the index limit count.
  const sequence = animationSequences[iterationCount % animationSequences.length];
  process.stdout.write(sequence);

  iterationCount++;

  // Check if we've reached the maximum number of iterations
  if (iterationCount === 4 * 4) { // 4 is the number of animation frames
    clearInterval(intervalId);
    process.stdout.write('\n');
  }
}, 250);

process.stdout.write('hello from spinner2.js... \rheyyy\n');