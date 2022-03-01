const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
it("Returns Array consisting of Human years, Cat years and Dog years.", () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15])
    expect(humanCatDogYears(2)).toEqual([1, 24, 24])
    expect(humanCatDogYears(3)).toEqual([1, 28, 29])
    expect(humanCatDogYears(5)).toEqual([1, 36, 39])
    expect(humanCatDogYears(10)).toEqual([10, 56, 64])

})

});

// Look Ma, no handlebars!!!
