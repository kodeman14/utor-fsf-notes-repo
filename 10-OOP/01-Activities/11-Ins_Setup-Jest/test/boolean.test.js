// Constructor Arithmetic is imported.
// const Arithmetic = require("../arithmetic.js");

// A testing suite for Arithmetic is created.
describe("BOOLEAN", () => {
  it("should evaluate true as true", () => {
    expect(true).toEqual(true);
  });

  it("should evaluate false as false", () => {
    expect(false).toEqual(false);
  });
});

describe("STRING", () => {
  it("should evaluate hello as helo", () => {
    const a = 2,
      b = false;
    expect("hello").toEqual("hello");
  });

  it("should not evaluate hi as hey", () => {
    expect("hi").not.toEqual("hey");
  });
});
