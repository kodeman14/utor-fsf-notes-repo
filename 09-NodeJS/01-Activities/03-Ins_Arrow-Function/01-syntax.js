// All of the `createGreeting` functions are equivalent
// var createGreeting = function (message, name) {
//   return message + ", " + name + "!";
// };

// We can safely swap out function expressions with arrow functions most of the time (explicit - recommended)
var createGreeting = (message, name) => {
  return message + ", " + name + "!";
};

// If the arrow function body contains only one expression, we can omit the curly braces and auto return it (implicit - don't recommend)
// var createGreeting = (message, name) => message + ", " + name + "!";

// If an arrow function only has one parameter, we can omit the parens () around the single parameter
var greet = (displayMsg) => {
  console.log("greeting is:", displayMsg);
  console.log("blah blah");
};

// We call arrow functions the same way as we call regular functions
var greeting = createGreeting("Hello", "Angie");
// greeting = "Hello, Angie!"
console.log(greeting);

// Logs "Hello, Angie!";

// greet(greeting);
greet("hello");
