/*
Create 3 functions which each take (a, b) as arguments:

multiply that acts like the * operator, without using it.
divide that acts like the integer division operator /, without using it.
modulo that acts like the % operator, without using it.
*/

let neg = false;

const multiply = (a, b) => {
    let result = 0;
    let isNegative = (a < 0) ^ (b < 0); // XOR to determine if the result should be negative

    a = Math.abs(a);
    b = Math.abs(b);

    while (b > 0) {
        result += a;
        b--;
    }

    return isNegative ? -result : result;
};


const divide = (a, b) => {
    let count = 0;
    let isNegative = (a < 0) ^ (b < 0);

    a = Math.abs(a);
    b = Math.abs(b);

    while(a >= b) {
        a -= b
        count++
    }

    return isNegative ? -count : count;
}

const modulo = (a, b) => {
    let isNegative = (a < 0) ^ (b < 0);

    a = Math.abs(a);
    b = Math.abs(b);

    while(a >= b) {
        a -= b;
    }

    return isNegative ? -a : a;
}

console.log(modulo(-123, 22))