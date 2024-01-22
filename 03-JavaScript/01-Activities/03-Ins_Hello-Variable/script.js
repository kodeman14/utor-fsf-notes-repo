// Declares student variable using var keyword
var DEFAULT_NAME = "John Doe";
var DEFAULT_AGE = 30 + 2;

// THESE ARE DEFAULT VALUES

console.log("pre-name:", DEFAULT_NAME);
console.log("pre-age:", DEFAULT_AGE);
// -> declared, but not assigned = undefined
// -> not declared, not assigned = undefined

// Uses assignment operator(=) to assign a value
// assigned a value based on another variable
var studentName = DEFAULT_NAME;
var studentAge = DEFAULT_AGE;

console.log("studentName", studentName); //->abdul

// To re-assign a variable, use only the variable's name
studentName = "Tonya";
studentAge = 52;

// To access a value stored in a variable, use the variable's name
console.log(studentName); //->tonya

var NAME_STRING = "I was named ";
var AGE_STRING = "My age is ";

//To combine the message with a variable value use the concatenation operator(+)
//Logs "My name is "
console.log(NAME_STRING);

// Logs "My name is Tonya"
// console.log("My name is " + studentName);
// console.log("My name is", studentName);

// logs the person's age
console.log(NAME_STRING + studentName + " and" + AGE_STRING + studentAge);

// single line js comment

/* 
multiline 
js
comment
*/

/**
 * VARIABLE NAMING TIPS
 * one word = lower case -> student
 * two words = camel case -> studentName
 * variables that aren't updated = upper case -> DEFAULT_NAME
 * underscore/capital case can be used (not recommended for now)
 */
