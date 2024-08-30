/*
Implement 2 functions:

split that works like String.split, but takes the string as its first argument.

join that works like Array.join, but take the array as its first argument.
*/

const split = (str, separator) => {
    let arr = [];
    if (str.length === 0 && separator.length > 0) {
        return arr
    }

    if (str.length == 1) {
        return[str];
    }

    if (separator === "") {
        return [...str];
    }

    let word = "";
    for (let i = 0; i  < str.length; i++) {
        if ( i + separator.length < str.length &&  str.slice(i, i+ separator.length) ===  separator) {
            arr.push(word)
            word = "";
            i += separator.length;
        }

        word += str[i];
    }

    arr.push(word);
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
// console.log(split('a b c', ' '))
console.log(split('ee,ff,g,', ','))
// console.log([].join(" "))
// console.log(join(["hello", "world", "How", "Is", "This", "Text"], ","))