/*
Instructions
Create the following functions, which each take an array as the first argument, and a function as the second argument.

filter: that works like the [].filter method.

reject: that works like the reject function from lodash.

partition: that works like the partition function from lodash.
*/

const filter = (arr, fn) => {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }

  return res;
};

const reject = (arr, fn) => {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }

  return res;
};

const partition = (arr, fn) => {
  let res = [];
  let truthy = [];
  let falsy = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      truthy.push(arr[i]);
    } else {
        falsy.push(arr[i]);
    }
  }

  res.push(truthy, falsy)
  return res;
};

// function isBigEnough(value) {
//   return value >= 10;
// }

// console.log(partition([12, 5, 8, 130, 44], isBigEnough));
