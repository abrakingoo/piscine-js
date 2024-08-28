/*
Create a function named repeat that takes a string and a number as arguments,
and returns the string repeated as many times as the number describes.
It should function like String.repeat(), but of course you must make your own.
*/

const repeat = (str, n) => {

    if (n < 0 || n > Number.POSITIVE_INFINITY) {
        return "RangeError";
    }

    let st = ""
    for (let i = 0; i < Math.floor(n); i++) {
        st += str;
    }
    return st
}

// console.log(repeat("hello", 3))