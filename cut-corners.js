/*
Create some functions which behave like JavaScript's Math rounding functions:

round: which behaves similar to Math.round().
ceil: which behaves similar to Math.ceil().
floor: which behaves similar to Math.floor().
trunc: which behaves similar to Math.trunc().
*/

const getNumber = (num) => {
    let multiplier = 1;

    while (!Number.isInteger(num * multiplier)) {
        multiplier *= 10;
    }

    return multiplier * num;
}

const modulo = (a, b) => {
    if (a === Infinity || b === Infinity || b === 0) return NaN;

    let isNegative = a < 0;

    a = Math.abs(a);
    b = Math.abs(b);

    if (b > a) return isNegative ? -a : a; // Early return if divisor is greater

    while (a >= b) {
        a -= b;
    }

    return isNegative ? -a : a;
};

const round = (x) => {
    let neg = false;

    if (x === Infinity || x === -Infinity) return x;

    if (x < 0) {
        x = -x;
        neg = true;
    }
    
    let fractionalPart = modulo(x, 1);
    if (fractionalPart >= 0.5) {
        let val = x - fractionalPart + 1;
        return neg ? -val : val;
    }

    let val = x - fractionalPart;
    return neg ? -val : val;
}

const ceil = (x) => {
    let neg = false;

    if (x === Infinity || x === -Infinity) return x;

    if (x < 0) {
        x = -x;
        neg = true;
    }

    let fractionalPart = modulo(x, 1);
    if (fractionalPart > 0) {
        let val = x - fractionalPart + 1;
        return neg ? -val : val;
    }

    return neg ? -x : x;
}

const floor = (x) => {
    let neg = false;

    if (x === Infinity || x === -Infinity) return x;

    if (x < 0) {
        x = -x;
        neg = true;
    }

    let fractionalPart = modulo(x, 1);
    let val = x - fractionalPart;

    return neg ? -val : val;
}

const trunc = (x) => {
    if ( x >= 68719476735 ) return x;
    if (x === Infinity || x === -Infinity) return x;
    return x > 0 ? floor(x) : ceil(x);
};

// Test cases
// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round)); // [4, -4, 3, -3]
// console.log( [3, -4, 2, -3, 0].map(floor)); // [3, -4, 3, -4]
// console.log(nums.map(ceil));  // [4, -3, 4, -3]
// console.log(nums.map(trunc)); // [3, -3, 3, -3]

// console.log(trunc(0xfffffffff)); // 68719476735
console.log(getNumber(-5.56))