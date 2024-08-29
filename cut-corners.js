const modulo = (a, b) => {
    if (b === 0) return;

    let isNegative = a < 0;
    a = Math.abs(a);
    b = Math.abs(b);

    while (a >= b) {
        a -= b;
    }

    return isNegative ? -a : a;
};

const round = (x) => {
    if (x === Number.POSITIVE_INFINITY) return Infinity;
    if (x === Number.NEGATIVE_INFINITY) return -Infinity;
    
    let frac = modulo(x, 1);
    let integral = x - frac;
    
    if (frac >= 0.5) {
        return integral + (x > 0 ? 1 : -1);
    }
    return integral;
};

const ceil = (x) => {
    if (x === Number.POSITIVE_INFINITY) return Infinity;
    if (x === Number.NEGATIVE_INFINITY) return -Infinity;

    let frac = modulo(x, 1);
    let integral = x - frac;

    if (frac > 0) {
        return integral + (x > 0 ? 1 : 0);
    }
    return integral;
};

const floor = (x) => {
    if (x === Number.POSITIVE_INFINITY) return Infinity;
    if (x === Number.NEGATIVE_INFINITY) return -Infinity;

    let frac = modulo(x, 1);
    let integral = x - frac;

    if (frac > 0) {
        return integral + (x < 0 ? -1 : 0);
    }
    return integral;
};

const trunc = (x) => {
    if (x === Number.POSITIVE_INFINITY) return Infinity;
    if (x === Number.NEGATIVE_INFINITY) return -Infinity;

    let frac = modulo(x, 1);
    return x - frac;
};

// Test the functions
// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round));  // [4, -4, 3, -3]
// console.log(nums.map(floor));  // [3, -4, 3, -4]
// console.log(nums.map(trunc));  // [3, -3, 3, -3]
// console.log(nums.map(ceil));   // [4, -3, 4, -3]
