const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 },
];

// 1.

// forEach is a functional way of iterating through an array without a for-loop

for (let i = 0; i < moviePatrons.length; i++) {
  console.log(moviePatrons[i].age);
}

moviePatrons.forEach((patron) => console.log(patron.age));

// moviePatrons.forEach((patron, index) => {
//   if (index === 3) {
//     console.log(patron.name, index + 1);
//   }
//   console.log(patron.age, index + 1);
// });

// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value

const canWatchRatedR = moviePatrons.filter(function (patron) {
  return patron.age > 17;
});

// console.log(canWatchRatedR); // => [{}, {}]

// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array

// lodash -> deep clone -> npm library

const cardedMoviePatrons = moviePatrons.map((patron) => {
  // Copy the object being iterated over so that we don't affect the existing object (immutability). Note that this is not the ideal way of copying the object in this case and we will be using another approach (spread operator) for copying objects later in the module.
  const pObj = JSON.parse(JSON.stringify(patron));
  // Do everything else the same
  if (pObj.age >= 17) {
    pObj.canWatchRatedR = true;
  } else {
    pObj.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return pObj;
});

console.log("Movie Patrons: ");
console.log(moviePatrons);

console.log("\nCarded Movie Patrons: ");
console.log(cardedMoviePatrons);
