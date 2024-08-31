/*
Instructions
Create a function named letterSpaceNumber that accepts a string;
returning an array with every instance of a letter, 
followed by a space, followed by a number, only if that number has only one digit, and is not followed by any letter.

Examples
console.log(letterSpaceNumber('example 1, example 20'))
// output: ['e 1']
*/

const letterSpaceNumber = (str) => {

    const pattern = /[a-zA-Z]\s\d\b/g;

    const match = str.match(pattern)

    return match || []
}

// console.log(letterSpaceNumber('example 1, example 20'))