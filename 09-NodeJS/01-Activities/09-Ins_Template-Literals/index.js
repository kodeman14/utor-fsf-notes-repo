const arya = {
  first: "Arya",
  last: "Stark",
  age: 20,
  origin: "Winterfell",
  allegiance: "House Stark",
};

const greetingOld =
  "my name is " +
  arya.first +
  " " +
  arya.last +
  "\n blah blah" + expValue +
  ".\n i am loyal to " +
  arya.allegiance +
  "!";

// console.log(greetingOld);

const greetingNew = `My name is ${arya.first}!
and i am ${arya.age > 30 ? "older" : "younger"} than jon.
I am loyal to ${arya.allegiance}.`;

console.log(greetingNew); // prints
// My name is Arya!
// I am loyal to House Stark.

// -----

// arya.age > 30 ? 'older' : 'younger'
var expValue;
if (arya.age > 30) {
  expValue = "older";
} else expValue = "younger";

/**
 * REGULAR IF
 * if (condition === true) { trueResult }
 * else { falseResult } (if false)
 */

/**
 * TERNARY OPERATOR
 * condition ? trueResult : falseResult
 * condition ? trueResult : conditionFailed ? failedResult : falseResult
 */

// if (condition) {trueResult}
// else if (conditionFailed) { failedResult }
// else falseResult