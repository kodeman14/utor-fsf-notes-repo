// A constructor Arithmetic is created.
function Arithmetic() {}

// Constructor Arithmetic is given a sum method that returns two numbers added together.
Arithmetic.prototype.sum = (a, b) => {
  return a + b;
};

// Constructor Arithmetic is exported from the file.
module.exports = Arithmetic;
