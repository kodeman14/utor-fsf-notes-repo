// We use a for-loop to execute code more than once
for (var i = 0; i <= 5; i++) {
  // This is the block of code that will run each time
  //   console.log("This is the current value of i: " + i + ".");
  //   if (i % 2 === 0) {
  //     console.log("even index");
  //   } else {
  //     console.log("odd index");
  //   }
}

// For-loops are often used to iterate over arrays
var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

//To determine how many times the loop should execute, we use the array's length
for (var i = 0; i < zooAnimals.length; i++) {
  // i =0 > log > next run through
  // i++ > i = 1 > log > next run through
  // i++ > i = 2 > log > next run through
  // i++ > i = 3 > log > next run through
  // i++ > i = 4 > 4 is not less than 4 > end loop

  console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}

console.log("--");

for (var i = zooAnimals.length - 1; i >= 1; i--) {
  console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}
