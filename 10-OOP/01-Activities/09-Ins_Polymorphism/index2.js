function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () {
    console.log("Zzzzzzzzz");
  };
  this.getLives = function () {
    return 1;
  };
}

function Animal(name, age, breed, puppies) {
  Dog.call(this, name, age, breed);
  this.puppies = puppies;
  this.age = 7 * age;
}

Dog.prototype.bark = function () {
  console.log("Woof!");
};

function Cat(name, age, breed, kittens) {
  Animal.call(this, name, age, breed);
  this.kittens = kittens;
  // this.name = name + breed;
  this.name = `${name} ${breed}`;
  // 'getLives()' method is overriden to provide Cat with a different functionality
  this.getLives = function () {
    return 9;
  };
}

Cat.prototype.meow = function () {
  console.log("Meow!");
};

const dog = new Dog("Rex", 2, "Bulldog", ["Baxter", "Marley", "Scooby"]);
const cat = new Cat("Tom", 2, "Shorthair", ["Garfield", "Felix", "Salem"]);

console.log(dog.getLives());
console.log(cat.getLives());
console.log(cat.name);
console.log("dog age in human years:", dog.age);
