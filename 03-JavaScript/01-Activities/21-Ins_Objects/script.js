// Objects are a collection of properties
var planet = {
  // Properties are made up of key-value pairs
  pName: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion",
};

// To access a property's value that is a string, number or boolean, use the object's name and the associated key

// Uses dot notation and logs "Earth"
console.log("name", planet.pName);

// console.log("planet", planet);

// Uses bracket notation and logs "Earth"
console.log("bracket", planet["pName"]);

// -----

/**
 * SYNTAX FOR HIGHER ORDER DATA TYPES
 * array = []
 * object = {}
 *
 * key: value
 * obj = { key1: val1, key2: val2, .....}
 *
 * obj.key1 = val1 (or) obj[key2] = val2
 */
