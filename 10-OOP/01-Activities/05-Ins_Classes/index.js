// Constructor class can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
class Cat {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.whatever = "whatever";
    // this.status = this.age < 2 ? "breedable" : "spayed/neutered";
  }

  status() {
    // return this.whatever;
    return this.age ? (this.age <= 2 ? "breedable" : "spayed/neutered") : "N/A";
  }

  nap() {
    const catStatus = this.status();
    console.log("status", catStatus);

    if (catStatus === "breedable") {
      console.log("Zzzzzzzzz");
    } else if (catStatus === "spayed/neutered") {
      console.log("zoomies");
    } else {
      if (this.name === "Tom") {
        console.log("go catch jerry");
      } else if (this.name === "Garfield") {
        console.log("eat lasagna and then nap");
      } else {
        console.log("let the cat do whatever it wants");
      }
    }
  }

  // nap() {
  //   console.log("Zzzzzzzzz");
  // }
}

// Sets the variables "catOne" and "catTwo" to a Cat object and initializes with name, age, and breed properties
const catOne = new Cat("Tom", undefined, "Shorthair");
const catTwo = new Cat("Garfield", undefined, "Bengal");
const cat3 = new Cat("whatever", undefined, "whatever");

// console.log(new Cat().nap());
// console.log(new Date().getFullYear());

cat3.nap();
// console.log(catTwo);
// it works -> |||
// doesn't work -> ||||

// Calling Cat's nap method
// catOne.nap();
// catTwo.nap();
