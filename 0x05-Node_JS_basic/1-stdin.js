/**
 * Using Process stdin
 */

// process.stdin.setEncoding("utf8");

// console.log("Welcome to Holberton School, what is your name?");

// process.stdin.on("data", (data) => {
//   console.log(`Your name is: ${data}`);
//   process.stdin.pause();
// });

// console.log("This important software is now closing");

process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("readable", () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on("end", () => {
  process.stdout.write("This important software is now closing\n");
});
