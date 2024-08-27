/*
Create a function named isPositive that takes a number as a argument, returning true if the number is strictly positive, and false otherwise.

Create a function named abs that takes a number as an argument and returns its absolute value. You must make your own implementation. You must not use Math.abs().
*/

const isPositive = (n) => n > 0 ? true : false;
const abs = (n) => {
    if (typeof(n) !== 'number') {
        if (isNaN(Number(n))) {
            return NaN;
        }
    }
    return Number(n) < 0 ? n * -1 : n;
}

console.log(abs(-18));