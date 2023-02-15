process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 250);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 750);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1250);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1750);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 2000);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 2250);
