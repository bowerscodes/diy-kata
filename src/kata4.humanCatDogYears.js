const humanCatDogYears = number => {
//    METHOD 1

    // let catYears = 0
    // let dogYears = 0
    // let n = 0
    // while (n < number) {
    //     if (n < 1) {
    //         catYears += 15;
    //         dogYears += 15;
    //         n + 1;
    //     }
    //     if (n === 1) {
    //         catYears += 9;
    //         dogYears += 9;
    //         n + 1;

    //     }
    //     else if (n >= 2) {
    //         catYears += 4;
    //         dogYears += 5;
    //         n + 1;
    //     }
    //     return [number, catYears, dogYears]
    // }

// METHOD 2  

    // const n = number
    let catYears = 0;
    let dogYears = 0;

    if (number >= 1) {
        catYears += 15;
        dogYears += 15;
    }
    if (number >= 2) {
        catYears += 9;
        dogYears += 9;
    }
    if (number >2) {
        catYears += ((number-2) * 5)
        dogYears += ((number-2) * 4)
    }
    return [n, catYears, dogYears]
};

// CAT YEARS
// Y1: +15yrs
// Y2: +9yrs
// Y3+: +4yrs


// DOG YEARS
// Y1: +15yrs
// Y2: +9yrs
// Y3+: +5yrs

module.exports = humanCatDogYears;
