// WRITE YOUR CODE HERE
/**
 * 
* It's done when the total number of elements in the array is logged to the console. (done)

* It's done when the message "Welcome to the class STUDENT_NAME" is logged using each element in the array. 

* It's done when the first element in the array is replaced with the name of a new student.

* It's done when, after an `if` statement confirms that the first element in the array has been replaced, the message "REPLACED_NAME is in class" is logged.
 */

var studentsArr = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];

console.log(studentsArr.length);

for (var i = 0; i < studentsArr.length; i++) {
  console.log("welcome to the class " + studentsArr[i]);
}

// console.log("welcome to the class " + studentsArr[0]);
// console.log("welcome to the class " + studentsArr[1]);
// console.log("welcome to the class " + studentsArr[2]);
// console.log("welcome to the class " + studentsArr[3]);
// console.log("welcome to the class " + studentsArr[4]);

studentsArr[0] = "Joe";
console.log("updated first student:", studentsArr[0]);

if (studentsArr[0] !== "Sarah") {
  console.log(studentsArr[0] + " is in class");
} else {
  console.log("student not replaced"); // failsafe
}
