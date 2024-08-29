/*
Create some functions which behave like JavaScript's Math rounding functions:

round: which behaves similar to Math.round().
ceil: which behaves similar to Math.ceil().
floor: which behaves similar to Math.floor().
trunc: which behaves similar to Math.trunc().
*/

const modulo = (a, b) => {

    if (b === 0) {
        return
    }
    
    let isNegative = (a < 0);

    a = Math.abs(a);
    b = Math.abs(b);

    while(a >= b) {
        a -= b;
    }

    return isNegative ? -a : a;
}

const round = (x) => {
    let neg = false;

    if (x === Number.POSITIVE_INFINITY) return Infinity;
    if (x === Number.NEGATIVE_INFINITY) return -Infinity;

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

    if (x === Number.POSITIVE_INFINITY) return Infinity;
    if (x === Number.NEGATIVE_INFINITY) return -Infinity;

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

    if (x === Number.POSITIVE_INFINITY) return Infinity;
    if (x === Number.NEGATIVE_INFINITY) return -Infinity;

    if (x < 0) {
        x = Math.abs(x);
        neg = true;
    }

    if (x < 0 && neg) return -0;

    let val = x - (modulo(x, 1))

    return neg ? -(val+1) : val;

}

const trunc = (x) => {
    let neg = false;

    if (x === Number.POSITIVE_INFINITY) return Infinity;
    if (x === Number.NEGATIVE_INFINITY) return -Infinity;

    if (x < 0) {
        x = Math.abs(x);
        neg = true;
    }
    
    let val = x - (modulo(x, 1)) + 1

    return neg ? -(x - modulo(x, 1)) : x - modulo(x, 1);
}


// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))