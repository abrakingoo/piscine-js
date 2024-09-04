/*
Instructions
Create the following functions with the "currying" process. Those functions should accept only one argument each.

mult2: that multiplies two numbers.
add3: that adds three numbers.
sub4: that subtracts four numbers in the given order: first number minus second number etc.

*/

const mult2 = (a) => {
    return function (b) {
        return a * b;
    }
};

const add3 = (a) => {
  return function (b) {
    return function (c) {
        return a + b + c;
    };
  };
};

const sub4 = (a) => {
  return function (b) {
    return function (c) {
      return function (d) {
        return a-b-c-d
      }
    };
  };
};