function processRomNum(result, symbol, symbolValue) {
    while (result.value >= symbolValue) {
        result.numeral += symbol;
        result.value -= symbolValue;
    }
}

const romNumMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};


function convertToRoman(number) {
    let result = {
        value: number,
        numeral: ""
    };

for (const symbol in romNumMap) {
processRomNum(result, symbol, romNumMap[symbol]);
}

return result.numeral;
}

console.log(convertToRoman(10));








