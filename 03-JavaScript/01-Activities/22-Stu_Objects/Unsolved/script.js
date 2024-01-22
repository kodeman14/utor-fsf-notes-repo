//WRITE YOUR CODE BELOW
var customerDrink = {
  name: "americano",
  sugars: 2,
  isReady: false,
};

console.log("drink:", customerDrink.name, customerDrink.sugars);

if (customerDrink.isReady) {
  console.log("ready for pickup");
} else {
  // else if (!ready)
  console.log("still in order Q");
}

// ----
// FOR BINARY OPTIONS

// if -> if condition then result -> if (condition) { result }
// ternary op -> condition ? ifTrueResult : ifFalseResult

var isDrinkReady = customerDrink.isReady ? "ready" : "not ready";
console.log("ternary1:", isDrinkReady);
// console.log(customerDrink.isReady ? "t2: ready" : "t2: not ready");
// customerDrink.isReady
//   ? console.log("t3", "ready")
//   : console.log("t3", "not ready");
