const numberToReversedDigits = number => {
    const digits = String(number)
    .split('')
    .map(Number)
    return digits.reverse();
};

module.exports = numberToReversedDigits;
