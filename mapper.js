/*
Instructions
Create a map function that takes an array as the first argument, a function as second, and that works like the method .map

Create a flatMap function that takes an array as the first argument, a function as second, and that works like the method .flatMap

Code provided
The provided code will be added to your solution, and does not need to be submitted.

Array.prototype.map = undefined
Array.prototype.flatMap = undefined
Array.prototype.flat = undefined
Notions
devdocs.io/javascript/global_objects/array/map
devdocs.io/javascript/global_objects/array/flatmap
*/

Array.prototype.map = undefined;

const map = (arr, fn) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i, arr));
    }
    return res;
}

// const fun = (a) => a*2
// console.log(map([1,2,3,4,5], fun))

const flatMap = (arr, fn) => {
  return arr.reduce((acc, item) => acc.concat(fn(item)), []);
};
