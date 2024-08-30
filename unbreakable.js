/*
Implement 2 functions:

split that works like String.split, but takes the string as its first argument.

join that works like Array.join, but take the array as its first argument.
*/

const split = (str, separator) => {
    let arr = [];

    if (str.length === 0 && separator.length > 0) {
        return [""];
    }

    if (str.length === 1) {
        return [str];
    }

    if (separator === "") {
        return [...str];
    }

    let word = "";
    for (let i = 0; i < str.length; i++) {
        // Check if the current slice of the string matches the separator
        if (str.slice(i, i + separator.length) === separator) {
            arr.push(word);
            word = "";
            i += separator.length - 1;
        } else {
            word += str[i];
        }
    }

    arr.push(word); // Add the last word or empty string
    return arr;
}


const join = (arr, separator) => {
    let str = "";

    if (arr.length < 1) {
        return str;
    }

    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i < arr.length - 1) {
            str += separator;
        }
    }
    
    return str;
}


// const str = 'The quick brown fox jumps over the lazy dog.';
// console.log(split('ggg - ddd - b', ' - '))
// console.log(split('a b c', ' '))
// console.log(split('ee,ff,g,', ','))
// console.log([].join(" "))
// console.log(join(["hello", "world", "How", "Is", "This", "Text"], ","))
// console.log(split('', 'Riad'))