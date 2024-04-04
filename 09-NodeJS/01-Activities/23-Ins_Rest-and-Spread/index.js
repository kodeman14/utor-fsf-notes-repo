// Without rest operator
function add(x, y) {
  let sum = 0;
  for (let i = x; i <= y; i++) {
    sum += i;
  }
  return sum;
}
console.log(add(1, 100)); // => 3

// 1. With rest operator
// Uncomment this to see how rest operators work!

// function add(...nums) {
//   let sum = 0;
//   // "nums" is treated as an array here
//   // so we can loop through the array
//   console.log("nums", nums, nums[0]);
//   // for (let num of nums) sum += num;
//   nums.forEach((num) => (sum += num));
//   return sum;
// }

// console.log(add(1)); // => 1
// console.log(add(3, 3)); // => 6
// console.log(add(1, 1, 4, 5)); // => 11

// 2. Uncomment to see how rest operators store values!
function howManyArgs(...args) {
  if (args.length >= 3) {
    console.log("arr value", args[2]);
  }
  // console.log("args length", `${args.length}`, args.length);

  // return `You passed ${args.length} arguments.`; // point out the template literal
}

// console.log(howManyArgs(0, 1, { name: "hello", dob: "1/2" })); // You have passed 2 arguments.
// console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.

// 3. Spread Operator
const dragons = ["Drogon", "Viserion", "Rhaegal"];
const weapons1 = ["dragonglass", "wildfire", ...dragons]; // notice the spread operator ...dragons
const weapons2 = ["dragonglass", dragons, "wildfire"]; // notice the spread operator ...dragons

console.log(dragons) // [b,c,d] -> length = 3

// with ...dragons
console.log(weapons)
// [a,b,c,d,e]
// length = 5

// with dragons
console.log(weapons)
// [a,dragons,e]
// [a,[b,c,d],e]
// length = 3

// Uncomment below to see how spread operators work!
// console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]

console.log(weapons1, "\n", weapons2);

// 3, 3 => | -
// 3, error => | -
// 5, 5 => | - ||
// 5, 3 => | - |||
// 5, error => ||| - |
// daisy on the fence => | -
