// So far, we have been storing one piece of data in variables
var firstName = "Andre";
var pets = 3;
var isStudent = true;

// To store groups of data in a single variable, we use arrays
// names =      0   ,    1  ,      2   ,     3
var namesArr = ["Andre", "Karl", "Rashida", "Olivia"];
var randomArr = [firstName, pets, isStudent, namesArr]; //5

// The entire array can be accessed by using the array's name
console.log("names", namesArr); //[andre, karl, rashida, olivia]
console.log("random", randomArr); // [andre, 3, true]

// To log a single element, we use the name of the array with the index in brackets
console.log(namesArr[1]); //karl
console.log(randomArr[1]); //pets -> 3

// Arrays are zero-indexed, so the index of first element in the array is 0
console.log(namesArr[0]); //andre
console.log(randomArr[0]); //andre

// We can also use index to replace data in an array
// Returns "Olivia"
console.log(namesArr[3]); //olivia
console.log(randomArr[3]); //undefined

//Replaces "Olivia" with "Carter"
namesArr[3] = "Carter";
// randomArr[3] = false;

// Logs "Carter"
console.log(namesArr[3]);

// We use the array's length property to determine how many elements are in the array
console.log(namesArr.length); // 3 + 1 = 4
console.log(randomArr.length); // was 3, now 4
