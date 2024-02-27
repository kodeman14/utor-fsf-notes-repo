// returns an array of command line arguments
console.log(process);

// arguments passed from the command line are accessed by index
// console.log(typeof process.argv[2]);

function sum(a, b) {
  return Number(a) + Number(b);
  // else return false;
}

// if (args[2] === '+') sum();
// if (args[2] === '-') minus();
function whateverNameYouwant(args) {
  if (args.length <= 2) return;
  let sum = 0;
  for (let i = 2; i < args.length; i++) {
    sum += Number(args[i]);
  }
  return sum;
} // happy path only

const summationVal = whateverNameYouwant(process.argv);
console.log(summationVal);

// arguments / parameter -> related to the function
