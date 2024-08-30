/*
Implement 2 functions:

split that works like String.split, but takes the string as its first argument.

join that works like Array.join, but take the array as its first argument.
*/

const split = (str, separator) => {
    let arr = [];
    if (str.length == 1) {
        return[str];
    }

    if (separator === "") {
        for (char of str) {
            arr.push(char);
        }
        return arr;
    }

    let word = "";
    for (let i = 0; i  < str.length; i++) {
        if (str[i] === separator.trim()) {
            arr.push(word)
            word = "";
            continue;
        }

        if (str[i] != " ") {
            word += str[i];
        }
    }

    if (word.length > 0) {
        arr.push(word);
    }
    return arr;
}

const join = (arr, separator) => {
    let str = "";
    if (arr.length < 1) {
        return str;
    }

    if (separator === "") {
        for (elem of arr) {
            str += elem;
        }
        return str;
    }

    for (let i = 0; i < arr.length; i++) {
        i < arr.length-1 ? str += arr[i] += separator  : str += arr[i];
    }
    return str;
}

// const str = 'The quick brown fox jumps over the lazy dog.';
console.log(split('ggg - ddd - b', ' - '))
// console.log([].join(" "))
// console.log(join(["hello", "world", "How", "Is", "This", "Text"], ","))