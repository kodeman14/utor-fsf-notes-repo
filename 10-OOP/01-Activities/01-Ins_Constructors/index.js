// Example dog object made from scratch. Writning 100 of these from scratch would take a long time.
// const dog1 = {
//   name: 'Rex',
//   age: 2,
//   breed: 'Bulldog',
//   status: 'neutered/spayed',
//   nap: () => console.log('naps')
// }

// const dog2 = {
//   name: 'Tex',
//   age: 2,
//   breed: 'Bulldog',
//   status: 'neutered/spayed',
// }

// Constructor function can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
function Pet(name, age, type, breed) {
  this.name = name.toUpperCase() + " Shelter";
  this.age = age;
  this.type = type;
  this.breed = breed;
  this.status = function () {
    if (this.age < 2) {
      return "breedable";
    } else {
      return "spayed/neutered";
    }
    // return (this.age < 2) ? "breedable" : "spayed/neutered";
  };
  this.nap = function () {
    // console.log(`${this.name} is sleeping: Zzzzzzzzz`);
    return `${this.name} the ${this.type} is sleeping: Zzzzzzzzz`;
  };
}

// Sets the variable "dog" to a Dog object and initializes with name, age, and breed properties
const rexBulldog = new Pet("rex", 2, "dog", "Bulldog");
const texBulldog = new Pet("tex", 5, "dog", "Bulldog");
const anotherCat = new Pet("whatever", 10, "cat", "whatever");

// Calling dog's nap method
// console.log(bulldog.name);
// console.log(rexBulldog.nap());
// console.log(texBulldog.status());
console.log(anotherCat.nap());