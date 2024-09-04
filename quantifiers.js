/*
Instructions
Create these functions which receive an array and a function each. Each element will return true if

every: every element in the array respects the condition of the function.
some: that returns true if at least one element in the array respects the condition of the function.
none: that returns true if none of the elements in the array respects the condition of the function.
The use of [].every and [].some is forbidden for this exercise.
*/

const every = (arr, fn) => {
  for (elem of arr) {
    if (!fn(elem)) {
      return false;
    }
  }
  return true;
};

const some = (arr, fn) => {
  for (elem of arr) {
    if (fn(elem)) {
      return true;
    }
  }
  return false;
};

const none = (arr, fn) => {
  for (elem of arr) {
    if (fn(elem)) {
      return false;
    }
  }
  return true;
};