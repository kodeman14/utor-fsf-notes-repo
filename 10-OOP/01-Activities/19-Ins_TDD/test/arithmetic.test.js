// Constructor Arithmetic is imported.
const Calculator = require("../arithmetic.js");

// A testing suite for Arithmetic is created.
describe("Arithmetic", () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe("sum", () => {
    it("should take two numbers and add them together", () => {
      const total = 4;
      const arithmetic = new Calculator(2, 2, "sum");
      expect(arithmetic.sum()).toEqual(total);
    });
  });
});

// A testing suite for Arithmetic is created.
describe("Arithmetic", () => {
  // A test is created to check that the difference does in fact return the difference between the two numbers.
  describe("difference", () => {
    it("should take two numbers find the difference", () => {
      const total = 0;
      const arithmetic = new Calculator(2, 2, "difference");
      expect(arithmetic.difference()).toEqual(total);
    });

    it("should take two numbers find the difference", () => {
      const total = 1;
      const arithmetic = new Calculator(2, 2, "difference");
      expect(arithmetic.difference()).not.toEqual(total);
    });
  });
});

// A testing suite for Arithmetic is created.
describe("Arithmetic", () => {
  // A test is created to check that product does in fact return the two numbers multiplied together.
  describe("product", () => {
    it("should take two numbers and multiply them together", () => {
      const total = 4;
      const arithmetic = new Calculator(2, 2, "product");
      expect(arithmetic.product()).toEqual(total);
    });
  });
});

// A testing suite for Arithmetic is created.
describe("Arithmetic", () => {
  // A test is created to check that quotient does in fact return the quotient of the two numbers.
  describe("quotient", () => {
    it("should take two numbers and divide them", () => {
      const total = 1;
      const arithmetic = new Calculator(2, 2, "quotient");
      expect(arithmetic.quotient()).toEqual(total);
    });
  });

  describe("quotient", () => {
    it("should show infinity if denominator is 0", () => {
      const total = Infinity;
      const arithmetic = new Calculator(2, 0, "quotient");
      expect(arithmetic.quotient()).toEqual(total);
    });
  });
});

// A testing suite for Arithmetic is created.
describe("Arithmetic", () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
  describe("modulus", () => {
    it("should calculate 2 % 2 and return 0 as the remainder", () => {
      const total = 0;
      const arithmetic = new Calculator(2, 2, "modulus");
      expect(arithmetic.modulus()).toEqual(total);
    });
  });
});

// A testing suite for Arithmetic is created.
describe("Arithmetic", () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  // This test checks to see if 3 % 2 has a remainder of 1 and returns 1.
  describe("modulus", () => {
    it("should calculate 3 % 2 and return 1 as the remainder", () => {
      const total = 1;
      const arithmetic = new Calculator(3, 2, "modulus");
      expect(arithmetic.modulus()).toEqual(total);
    });
  });
});

// A testing suite for Arithmetic is created.
describe("Arithmetic", () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  // This test checks to see if 10 % 6 has a remainder of 4 and returns 4.
  describe("modulus", () => {
    it("should calculate 10 % 6 and return 4 as the remainder", () => {
      const total = 4;
      const arithmetic = new Calculator(10, 6, "modulus");
      // if (3rd value == modulus) return num1 % num2
      expect(arithmetic.modulus()).toEqual(total);
    });
  });
});

// A testing suite for Arithmetic is created.
describe("Arithmetic", () => {
  // This test checks to see if an error is properly thrown if either num1 or num2 are not numbers.
  describe("Num1 and Num2 are integers", () => {
    it("should throw an error when the Num1 or Num2 arguments are not integers", () => {
      const cb = () => new Calculator(1, "1", "sum");
      // if (typeof num1 !== number || typeof num2 !== number) return "error"
      const err = new Error("Please enter numbers for calculation");

      expect(cb).toThrow(err);
    });

    it("should throw an error when the Num1 or Num2 arguments are negative", () => {
      const cb = () => new Calculator(-1, 1, "sum");
      // if (num1 <= 0 || num2 <= 0) return "error"
      const err = new Error("Please enter positive numbers only");

      expect(cb).toThrow(err);
    });

    it("should throw an error when operation is not defined", () => {
      const cb = () => new Calculator(1, 1, "whatever");
      // if (num1 <= 0 || num2 <= 0) return "error"
      const err = new Error("Can only do mathematical operations");

      expect(cb).toThrow(err);
    });
  });
});
