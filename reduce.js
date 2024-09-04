/*
Instructions
Create four functions:

fold that receives an array, a function and an accumulator, in this order, 
and applies the function in the elements of the array starting on the left.

foldRight that receives an array, a function and an accumulator, in this order, 
and applies the function in the elements of the array starting on the right.

reduce that works just like the method [].reduce when you don't specify an accumulator. 
The arguments should be an array and a function. 
The starting value of your accumulator must be the first value of the array. 
If your array is less than 1 argument you should throw an error.

reduceRight like reduce, from the last value to the first

Example:

const adder = (a, b) => a + b
fold([1, 2, 3], adder, 2) // returns 8 (2 + 1 + 2 + 3)
foldRight([1, 2, 3], adder, 2) // returns 8 (2 + 3 + 2 + 1)
reduce([1, 2, 3], adder) // returns 6 (1 + 2 + 3)
reduceRight([1, 2, 3], adder) // returns 6 (3 + 2 + 1)
The use of [].reduce and [].reduceRight is forbidden for this exercise.
*/

const fold = (arr, fn, acc) => {
  //   let addi = "" + acc + " + ";
  for (let i = 0; i < arr.length; i++) {
    // addi += i < arr.length-1 ? arr[i] + " + " : arr[i];
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
};

const foldRight = (arr, fn, acc) => {
  // let addi = "" + acc + " + ";
  for (let i = arr.length - 1; i >= 0; i--) {
    // addi += i > 0 ? arr[i] + " + " : arr[i];
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
};

function reduce(arr, fn) {
  let acc = arr[0];
  for (let i = 1; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
}

function reduceRight(arr, fn) {
  let acc = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
}

// const adder = (a, b) => a + b;
// console.log(fold([1, 2, 3], adder, 2));
// console.log(foldRight([1, 2, 3], adder, 2));
