const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(10, 2)).toEqual("I should be there in 5 hours.")
    expect(reachDestination(5, 10)).toEqual("I should be there in 0.5 hours.")
    expect(reachDestination(20, 20)).toEqual("I should be there in 1 hours.")
    expect(reachDestination(25, 2)).toEqual("I should be there in 12.5 hours.")
  });
});
