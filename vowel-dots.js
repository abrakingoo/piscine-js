/*
Create a function named vowelDots that receives a string. Your function should return a new string with a . after every vowel.

Your RegEx should be stored in a variable named vowels.

a, e, i, o and u are considered as vowels here.
*/

const vowelDots = (str) => {
    const vowels = /[aeiou]/;

    let res = "";

    for (char of str) {
        if (vowels.test(char)) {
            res += char + ".";
        } else {
            res += char;
        }
    }

    return res;
}

// console.log(vowelDots('this a mango'))