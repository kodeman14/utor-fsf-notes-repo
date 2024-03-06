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
  this.type = function () {
    console.log("wild or pet");
  };
}

function Pet(name, age, breed) {
  Animal.call(this, name, age, breed);
  this.type = function () {
    console.log("dog or cat or rabbit or ferret");
  };
}

function Wild(name, age, breed) {
  Animal.call(this, name, age, breed);
  this.type = function () {
    console.log("elephant or wolf or coyote or raccoon");
  };
}

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
  Pet.call(this, name, age, breed);
  this.puppies = puppies;
}

Dog.prototype.bark = function () {
  console.log("Woof!");
};

// Cat constructor can use the Animal constructor's call method to inherit properties "name", "age", "breed", and the "nap()" function
function Cat(name, age, breed, kittens) {
  Pet.call(this, name, age, breed);
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

function Deer(name, age, breed, kids) {
  Wild.call(this, name, age, breed);
  this.kids = kids;
  // this.meow = function () {
  //   console.log("meow");
  // };
}
const bambi = new Deer("Bambi", 5, "deer", ["unsure"]);

// dog.bark();
// bambi.nap();
// dog.nap();
// cat.meow();
// cat.nap();

// bambi.bark();

dog.food();
dog.type();
// cat.food();
bambi.food();
bambi.type();

// console.log(new Animal());
// console.log(new Dog());
