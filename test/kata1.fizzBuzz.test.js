const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  xit("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
    expect(fizzBuzz(24)).toEqual("Fizz");
    expect(fizzBuzz(39)).toEqual("Fizz");
    expect(fizzBuzz(72)).toEqual("Fizz");
  });

  xit("returns Buzz when passed a multiple of 5", () => {});

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {});

  test("returns the number when it isn't a multiple of 3 or 5", () => {});
});
