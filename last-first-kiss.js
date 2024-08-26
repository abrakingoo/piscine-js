/*
Create 3 functions:

first: that takes an array or a string and returns its first element or character.

last: that takes an array or a string and return its last element or character.

kiss: that takes an array or string, and returns an array of 2 elements. The returned array should contain the last and first elements or characters, in that order.
*/

const first = (arr) => arr[0];
const last = (arr) => arr[arr.length - 1];
const kiss = (arr) => {
    const fst = first(arr)
    const lst = last(arr)
    const newArr = [lst, fst]
    return newArr
}