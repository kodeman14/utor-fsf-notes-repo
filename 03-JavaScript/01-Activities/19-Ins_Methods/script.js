var comparisonOperators = [
  "Equal",
  "Not Equal",
  "Strict Equal",
  "Strict Not Equal",
  "Greater Than",
  "Less Than",
];
var arithmeticOperators = ["+", "-", "%"];
var logicalOperators = ["and", "or", "not"];
var myString = "Hello String";

//Array Methods
// Sorts comparisonOperators array and returns the sorted array
comparisonOperators.sort();

//Logs sorted array
console.log("sort", comparisonOperators);

// Adds elements to end of an array. Takes in at least one parameter
arithmeticOperators.push("/");

//Logs array with element "%" added to end
console.log("push", arithmeticOperators);

//Returns selected elements as a new array.
var logicalOperatorsSliced = logicalOperators.slice(1, 2);

//Logs new array
console.log("slice", logicalOperatorsSliced);

// The original array is unchanged
console.log("og", logicalOperators);

//String Methods
//Replaces "String" with "World" and returns new string
var myNewString = myString.replace("String", 3);
console.log("replace", myNewString);

//The original string is unchanged
console.log("og", myString);
