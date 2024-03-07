// Create a new Arithmetic class that behaves much like the previous demonstration.
class Arithmetic {
  constructor(num1, num2, operator) {
    // Checks to see that both numbers being passed in are of type number. If not, throw an error.
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Please enter numbers for calculation");
    }

    if (num1 < 0 || num2 < 0) {
      throw new Error("Please enter positive numbers only");
    }

    if (
      operator === "sum" ||
      operator === "difference" ||
      operator === "product" ||
      operator === "quotient" ||
      operator === "modulus" ||
      operator === "squaring"
    ) {
      // console.log("go ahead with:", operator);
      this.num1 = num1;
      this.num2 = num2;
      this.operator = operator;
    } else {
      // operator is something other than the accepted values
      throw new Error("Can only do mathematical operations");
    }
  }

  // A sum method that returns two numbers added together.
  sum() {
    return this.num1 + this.num2;
  }

  // A difference method that returns two numbers subtracted.
  difference() {
    return this.num1 - this.num2;
  }

  // A product method that returns two numbers multiplied together.
  product() {
    return this.num1 * this.num2;
  }

  // A quotient method that returns two numbers divided.
  quotient() {
    return this.num1 / this.num2;
  }

  // A modulus method that currently doesn't do anything.
  modulus() {
    return this.num1 % this.num2;
  }

  squaring() {
    return this.num1 * this.num1;
  }
}

module.exports = Arithmetic;
