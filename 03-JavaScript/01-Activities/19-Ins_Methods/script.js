var comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
var arithmeticOperators = ["+", "-", "%"];
var logicalOperators = ["and", "or", "not"];
var myString = "Hello String";

//Array Methods
// Sorts comparisonOperators array and returns the sorted array
comparisonOperators.sort(); 

//Logs sorted array
console.log(comparisonOperators);

// Adds elements to end of an array. Takes in at least one parameter
arithmeticOperators.push("%");

//Logs array with element "%" added to end
console.log(arithmeticOperators);

//Returns selected elements as a new array.
var logicalOperatorsSliced = logicalOperators.slice(0,2);

//Logs new array
console.log(logicalOperatorsSliced);

// The original array is unchanged
console.log(logicalOperators);

//String Methods
//Replaces "String" with "World" and returns new string
var myNewString = myString.replace("String", "World");
console.log(myNewString);

//The original string is unchanged
console.log(myString);
