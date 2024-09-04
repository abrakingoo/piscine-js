/*
Instructions
Create the function named flow that will act like the _.flow([funcs]) from lodash.

Example
const square = (nbr) => nbr * nbr
const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2

const flowedFunctions = flow([add2Numbers, square])
flowedFunctions(2, 3) // -> 25

*/
function flow(arr) {
  return function (...args) {
    if (args.length > 1) {
      args = [arr[0](...args)];
    }
    return arr.reduce((acc, fn) => fn(acc), args[0]);
  };
}