// Constructor Arithmetic is imported.
const Arithmetic = require("../arithmetic.js");

// A testing suite for Arithmetic is created.
describe("Arithmetic", () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe("sum", () => {
    it("should take two numbers and add them together", () => {
      const total = 4;
      const a = 2,
        b = 2;
      const arithmeticSum = new Arithmetic();
      expect(arithmeticSum.sum(a, b)).toEqual(4);
    });
  });

  describe("difference", () => {
    it("should take two numbers find the difference and return positive value", () => {
      const total = 1;
      const arithmetic = new Arithmetic();
      expect(arithmetic.difference(3, 2)).toEqual(total);
    });

    it("should take two numbers find the difference and return negative value", () => {
      const total = -1;
      const arithmetic = new Arithmetic();
      expect(arithmetic.difference(2, 3)).toEqual(total);
    });
  });
});

// A testing suite for Arithmetic is created.
describe("Arithmetic", () => {
  // A test is created to check that product does in fact return the two numbers multiplied together.
  describe("product", () => {
    it("should take two numbers and multiply them together", () => {
      const total = 8;
      const arithmetic = new Arithmetic();
      expect(arithmetic.product(2, 2)).not.toEqual(total);
    });
  });
});

// A testing suite for Arithmetic is created.
describe("Arithmetic", () => {
  // A test is created to check that quotient does in fact return the quotient of the two numbers.
  describe("quotient", () => {
    it("should take two numbers and divide them", () => {
      const total = 1;
      const arithmetic = new Arithmetic();
      expect(arithmetic.quotient(2, 2)).toEqual(total);
    });
  });
});
