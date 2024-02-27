// TODO: Import `maths.js`
const maths = require("./maths.js");

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
const numOne = Number(process.argv[3]);
const numTwo = Number(process.argv[4]);

// console.log(operation, numOne, numTwo);
console.log(process.argv);

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

// for sum
if (operation === "sum" || operation === "+") {
  console.log(maths.sum(numOne, numTwo));
} else if (operation === "difference" || operation === "-") {
  console.log(maths.difference(numOne, numTwo));
} else console.log("work in progress");
