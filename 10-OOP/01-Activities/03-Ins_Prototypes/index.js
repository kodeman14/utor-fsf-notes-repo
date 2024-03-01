// Prototype methods on constructor function

function Cat() {
  // another constructor
}

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

// this.nap = function () {
Dog.prototype.status = function () {
  return "whatever";
};

Dog.prototype.nap = function () {
  console.log(this.status());
  if (this.status() === "whatever") {
    console.log(this.name, "Zzzzzzzzz");
  } else console.log("zoomies");
};

const dog = new Dog("Rex", 2, "Bulldog");
// Logging the dog object to show that in the browser, the nap method is now a prototype method and not a property of the object
// console.log(dog);

dog.nap();

// 2, 'zzz' -> ||||
