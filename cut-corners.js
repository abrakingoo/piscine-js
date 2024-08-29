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
    let neg = false;

    if (x === Infinity || x === -Infinity) return x;

    if (x < 0) {
        x = Math.abs(x);
        neg = true;
    }
    
    if (modulo(x, 1) >= 0.5 ) {
        let val = x - (modulo(x, 1)) + 1
        return neg ? -val : val;
    }

    return neg ? -(x - modulo(x, 1)) : x - modulo(x, 1);
}

const ceil = (x) => {
    let neg = false;

    if (x === 0) return 0;

    if (x === Infinity || x === -Infinity) return x;

    if (x < 0) {
        x = Math.abs(x);
        neg = true;
    }

    if (x < 0 && neg) return -0;

    if (modulo(x, 1) >= 0.5 ) {
        let val = x - (modulo(x, 1)) + 1
        return neg ? -val+1 : val;
    }

    return neg ? -(x - modulo(x, 1)) : (x - modulo(x, 1)+1);

}

const floor = (x) => {
    let neg = false;

    if (x === 0) return 0;

    if (x === Infinity || x === -Infinity) return x;

    if (x < 0) {
        x = Math.abs(x);
        neg = true;
    }

    if (x < 0 && neg) return -0;

    let val = x - (modulo(x, 1))

    return neg ? -(val+1) : val;

}

const trunc = (x) => {
    if (typeof(x) !== typeof(1)) return x;
    if (x === Infinity || x === -Infinity) return x;

    let neg = x < 0;

    if (neg) {
        x = Math.abs(x);
    }
    
    let fractionalPart = modulo(x, 1);
    let truncatedValue = x - fractionalPart;

    return neg ? -truncatedValue : truncatedValue;
};




// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(trunc("0xfffffffff" + "ctx"))
// console.log(nums.map(ceil))

// console.log(modulo(Number.POSITIVE_INFINITY, 1))
