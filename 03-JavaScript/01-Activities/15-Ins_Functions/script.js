var pets = 7;
var isLunch = true;
var firstName = "daisy";

// pets islunch firstname are global scoped

// Functions are reusable blocks of code that perform a specific task
// This is a function declaration
function declareHello() {
  console.log("Hello, I am a function declaration.");
  console.log("-----------------------------------");
  console.log("i have " + pets + " pets");
  // Return stops the execution of a function
  return;
}

// expressHello() -> this will throw an error
var hello = "hello";

// This is a function expression
var expressHello = function () {
  console.log("Hello, I am a function expression.");
  console.log("-----------------------------------");
  // console.log(x, y, z);
  return;
};

// Functions must be called to execute
declareHello();
expressHello();

//Functions can be called again to make the block of code execute again
declareHelloAgain(8, "bye", false);

// Functions can take parameters.
// Parameters give a name to the data to be passed into the function
function declareHelloAgain(you, want, anything) {
  // x y z are function scoped
  // console.log("func vars", x, y, z);
  console.log(
    "Hello, my parameter's values are " +
      anything +
      ", " +
      you +
      ", and " +
      want
  );
  console.log("-----------------------------------");
  return;
}

// Function arguments give parameters their values
// Here the parameter x is given the value 7 when the function is called
declareHelloAgain(firstName, isLunch, pets);
// declareHelloAgain(7, "daisy", true);
