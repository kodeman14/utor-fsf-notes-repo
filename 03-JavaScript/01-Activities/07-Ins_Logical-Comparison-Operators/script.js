var a = 10;
var b = 10;
var c = "10";

// Arithmetic operators combine with numbers to form an expression that returns a single number
console.log(a + b); //110
console.log(a - b); //90
console.log(a / b); //10
console.log(a * b); //1000

// Modulus returns the remainder between two numbers.
console.log(a % b); //0

console.log("--");

// Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false
// Compares equality (loose equality)

console.log(b == c); //true
console.log(b != c); //false

// Compares equality and type (strict equality)
console.log(b === c); //false
console.log(b !== c); //true

// Greater than or less than
console.log(a > b); //true
console.log(a < b); //false

// Greater than or equal to and less than or equal to
console.log(a <= b); // 100 <= 10  false
console.log(a >= b); // needs > or = to be true

console.log("--");

// Logical operators take in two or more expressions and return true or false
var expression1 = b == c; //true
var expression2 = a > b; //false
var evalExpAnd = expression1 && expression2;
var evalExpOr = expression1 || expression2;

// Evaluates to true if expression1 AND expression2 are both true, otherwise false

console.log(evalExpAnd); // true & false -> false

// Evaluates to true if expression1 OR expression2 is true, otherwise false

console.log(evalExpOr); // true | false -> true

console.log("--");

// Logical Not (!) turns an expression that evaluates to true to false and vice versa
// Returns true

console.log(evalExpAnd); //false

// Returns false
console.log(!evalExpAnd); //true
