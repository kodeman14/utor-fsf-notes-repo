// * It's done when I compare those two variables to see whether they are the same or not.

// * It's done if the program returns `true` when the values are the same and `false` if they are not.

// console.log(process.argv[2] === process.argv[3])

/**
 * define and assign the variables
 * if statement to check equality
 * return true or false depending
 */

let github1 = process.argv[2];
let github2 = process.argv[3];

function checkParamsOld() {
  if (github1 === github2) {
    return "true";
  } else return "false";
}

const checkParamsNew = () => github1 === github2 ? true : false;

console.log(checkParams());
