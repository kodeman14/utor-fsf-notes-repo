// Constructor can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
function Animal(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () {
    console.log("Zzzzzzzzz");
  };
  this.food = function () {
    if (this.age <= 1) {
      console.log("eat baby food");
    } else if (this.age > 1 && this.age < 5) {
      console.log("eat adult food");
    } else {
      console.log("can eat human food");
    }
  };
}

// Animal.prototype.nap = function () {
//   console.log("Zzzzzzzzz");
// };

// Animal.prototype.food = function () {
//   if (this.age <= 1) {
//     console.log("eat baby food");
//   } else if (this.age > 1 && this.age < 5) {
//     console.log("eat adult food");
//   } else {
//     console.log("can eat human food");
//   }
// };

// Dog constructor can use the Animal constructor's call method to inherit properties "name", "age", "breed", and the "nap()" function
function Dog(name, age, breed, puppies) {
  Animal.call(this, name, age, breed);
  this.puppies = puppies;
}

Dog.prototype.bark = function () {
  console.log("Woof!");
};

// Cat constructor can use the Animal constructor's call method to inherit properties "name", "age", "breed", and the "nap()" function
function Cat(name, age, breed, kittens) {
  Animal.call(this, name, age, breed);
  this.kittens = kittens;
  // this.meow = function () {
  //   console.log("meow");
  // };
}

Cat.prototype.meow = function () {
  console.log("Meow!");
};

const dog = new Dog("Rex", 2, "Bulldog", ["Baxter", "Marley", "Scooby"]);
const cat = new Cat("Tom", 2, "Shorthair", ["Garfield", "Felix", "Salem"]);

const bambi = new Animal("Bambi", 5, "deer");

// dog.bark();
// bambi.nap();
// dog.nap();
// cat.meow();
// cat.nap();

// bambi.bark();

dog.food();
cat.food();

console.log(new Animal());
console.log(new Dog());
