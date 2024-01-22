var a = "50";
var b = 50;
var c = 100;
var d = c % b; //0
var e = c / 2; //50

var expression1 = b === e; //true
var expression2 = e < d; //false

// Use comparison operators so all expressions below log to the console as true
console.log(a == b);
console.log(b == e);
console.log(c >= b);
console.log(d <= 0);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 || expression2); //true & false
console.log(!expression1 || !expression2); //false | true
