const humanCatDogYears = number => {

    let catYears = 0
    let dogYears = 0
    let n = 0
    while (n < number) {
        if (n < 1) {
            catYears += 15;
            dogYears += 15;
        }
        else if (n === 1) {
            catYears += 9;
            dogYears += 9;
        }
        else if (n > 1) {
            catYears += 4;
            dogYears += 5;
        }
        n += 1
    }
    return [number, catYears, dogYears]
}

module.exports = humanCatDogYears;
