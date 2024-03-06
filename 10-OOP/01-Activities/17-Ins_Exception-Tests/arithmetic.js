// Create a new Arithmetic class that behaves much like the previous demonstration.
class Arithmetic {
  constructor(num1, num2, operator) {
    
    // Checks to see that both numbers being passed in are of type number. If not, throw an error.
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error('Please enter numbers for calculation');
    };
    
    this.num1 = num1;
    this.num2 = num2;
    this.operator = operator;
  }
};

module.exports = Arithmetic;
