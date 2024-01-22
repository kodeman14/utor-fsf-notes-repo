// A variable declared in global scope is available to all functions
var hello = "Hello";

function sayHello() {
  console.log(hello);
  return;
}

var sayHelloAgain = function () {
  console.log(hello);
  return;
};

sayHello();
sayHelloAgain();

//A variable declared in local scope is only available to that function
function sayGoodbye() {
  var goodbye = "Goodbye";
  console.log("inside sayGoodbye", goodbye);
  return;
}

sayGoodbye();
// console.log("outside sayGoodbye", goodbye);

//This will throw an error
var goodbye = "bye bye";
var sayGoodbyeAgain = function () {
  console.log(goodbye);
  return;
};
sayGoodbyeAgain();

// Shadowing happens when the same variable is used in the local and global scope
var shadow = "Hello"; // global
console.log(shadow);

// Logs "Hello"
function sayWhat() {
  console.log(shadow);
  return;
}

//Logs "Goodbye"
var sayWhatAgain = function () {
  var shadow = "Goodbye"; // local
  console.log(shadow);
};

console.log(shadow); // hello

// sayGoodbye();
sayWhat();
sayWhatAgain();

console.log("shadow", shadow); //hello
