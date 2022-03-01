const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("Returns 'Yes' when TRUE", () => {
    expect(booleanToWord(true)).toEqual("Yes");
});
  it("Returns 'No' when FALSE", () => {
    expect(booleanToWord(false)).toEqual("No");
  })
});
