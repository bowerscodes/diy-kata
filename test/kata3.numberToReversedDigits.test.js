const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1])
    expect(numberToReversedDigits(36912)).toEqual([2, 1, 9, 6, 3])
    expect(numberToReversedDigits(5101520)).toEqual([0, 2, 5, 1, 0, 1, 5])

  });
});
