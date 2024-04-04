const badmath = require("./badmath.js");

const random = (num) => {
  if (typeof num === "number") return Math.random() * num;

  return "N/A";
};

const checkEq = (arg1, arg2) => {
  if (arg1 === arg2) return "strictly";
  else if (arg1 == arg2) return "partially";

  return "not equal";
};

// console.log(badmath);

// console.log(badmath.pie);
// console.log(badmath.fruit);

// console.log(badmath.predictable());
console.log(random(5));
console.log(random("hello"));

console.log(checkEq('hello', 'hello'));
