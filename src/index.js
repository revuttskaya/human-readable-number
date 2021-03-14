const numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "one hundred",
    200: "two hundred",
    300: "three hundred",
    400: "four hundred",
    500: "five hundred",
    600: "six hundred",
    700: "seven hundred",
    800: "eight hundred",
    900: "nine hundred",
};

const pluralForms = ['thousand ', 'million '];

module.exports = function toReadable(number) {
    if (number === 0) {
        return numbers[0];
    }
    let chunks = [];
    while (number > 0) {
        chunks.push(number % 1000);
        number = parseInt(number / 1000);
    }

    let readableNumber = '';
    switch (chunks.length) {
        case 3:
            readableNumber += convert(chunks[2]) + ' ' + pluralForms[1];
        case 2:
            readableNumber += convert(chunks[1]) + ' ' + pluralForms[0];
        case 1:
            readableNumber += convert(chunks[0]);
            break;
        default:
            console.error()
    }

    return readableNumber.trim();
}

function convert(chunk) {
    if (numbers[chunk]) {
        return numbers[chunk];
    }
    let result = '';
    if (chunk.toString().length === 3) {
        result += numbers[parseInt(chunk / 100) * 100] + " ";
        chunk %= 100;
    }
    if (numbers[chunk]) {
        return result + numbers[chunk];
    }
    result += numbers[parseInt(chunk / 10) * 10] + " ";
    result += numbers[chunk % 10];

    return result;
}
