/*
Create some functions which behave like JavaScript's Math rounding functions:

round: which behaves similar to Math.round().
ceil: which behaves similar to Math.ceil().
floor: which behaves similar to Math.floor().
trunc: which behaves similar to Math.trunc().
*/

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
    if (x === Infinity || x === -Infinity) return x;

    let neg = x < 0;

    if (neg) {
        x = -x;
    }
    
    let fractionalPart = x - Math.floor(x);

    if (fractionalPart >= 0.5) {
        x = Math.ceil(x);
    } else {
        x = Math.floor(x);
    }

    return neg ? -x : x;
};

const ceil = (x) => {
    if (x === Infinity || x === -Infinity) return x;

    let neg = x < 0;

    if (neg) {
        x = -x;
        return -Math.floor(x);
    }

    return Math.ceil(x);
};

const floor = (x) => {
    if (x === Infinity || x === -Infinity) return x;

    let neg = x < 0;

    if (neg) {
        x = -x;
        return -Math.ceil(x);
    }

    return Math.floor(x);
};

const trunc = (x) => {
    if (x === Infinity || x === -Infinity) return x;

    return x > 0 ? Math.floor(x) : Math.ceil(x);
};

// Test cases
// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round)); // [4, -4, 3, -3]
// console.log(nums.map(floor)); // [3, -4, 3, -4]
// console.log(nums.map(ceil));  // [4, -3, 4, -3]
// console.log(nums.map(trunc)); // [3, -3, 3, -3]

// console.log(trunc(0xfffffffff + tcx)); // 68719476735
