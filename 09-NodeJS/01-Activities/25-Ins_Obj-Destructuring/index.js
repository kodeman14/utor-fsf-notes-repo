const arya = {
  fName: "Arya Stark",
  parents: ["Eddard Stark", "Catelyn Stark"],
};

const jaime = {
  fName: "Jaime Lannister",
  parents: ["Tywin Lannister", "Joanna Lannister"],
};

// In the past, if we wanted to pull off an object's property we'd have to do something like this:

const aryaName = arya.fName;
const aryaParents = arya.parents;

// const { name, parents } = arya;

// console.log(aryaName); // logs `"Arya Stark"`
// console.log(aryaParents); // logs `["Eddard Stark", "Catelyn Stark"]`

// Now with ES6 object destructuring syntax, we can do this:

const { parents, fName } = jaime;
// const { fName: fName, parents: parents } = jaime;

console.log(fName); // logs `"Jaime Lannister"`
console.log(parents); // logs `["Tywin Lannister", "Joanna Lannister"]`

// We can also rename our destructured properties like so:

const { fName: jaimeName } = jaime;
// console.log(jaimeName); // logs `"Jaime Lannister"`

// We can also destructure parameters using the same feature. e.g. previously we might have done something like this:

const logCharacter = (character) =>
  console.log(
    `${character.fName}'s parents are: ${character.parents[0]} and ${character.parents[1]}.`
  );

// logCharacter(arya);

// But now we can do this:

const betterLogCharacter = ({ fName, parents }) =>
  console.log(`${fName}'s parents are: ${parents[0]} and ${parents[1]}.`);

// betterLogCharacter(jaime);

/**
 * const betterLogCharacter = (jaime) => {
 *  const { fName, parents } = jaime;
 *  return "whatever"
 * }
 */

// any other data type will break your code
// const tyrione = ["tyrione"];
// betterLogCharacter(tyrione);

// We can also use array destructuring to pull off an array's elements
const locations = ["Winterfell", "Casterly Rock", "Kings Landing"];
// const [a, b, c] = locations;
const [kingLanding, winterfell, casterlyRock] = locations;
// NOTE: do not recommend this approach

// console.log(a);
// console.log(b);
// console.log(c);

console.log(kingLanding); // -> winterfell
console.log(winterfell); // -> casterly rock
console.log(casterlyRock); // -> kings landing
