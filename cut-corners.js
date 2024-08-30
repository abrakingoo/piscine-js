/*
Create some functions which behave like JavaScript's Math rounding functions:

round: which behaves similar to Math.round().
ceil: which behaves similar to Math.ceil().
floor: which behaves similar to Math.floor().
trunc: which behaves similar to Math.trunc().
*/

const getNumber = (num) => {
    let result = 0;
    let isNegative = num < 0;

    // Handle the absolute value of the number
    num = Math.abs(num);
    
    while (num >= 1) {
        num -= 1;
        result += 1;
    }
    
    return result;
}

const round = (x) => {
    let neg = false;

    if (x === Infinity || x === -Infinity) return x;

    if (x < 0) {
        x = -x;
        neg = true;
    }

    let num = getNumber(x);
    let fractionalPart = x - num;
    if (fractionalPart >= 0.5) {
        num += 1;
        return neg ? -num : num;
    }

    return neg ? -num : num;
}

const ceil = (x) => {
    let neg = false;

    if (x === Infinity || x === -Infinity || x == 0 || Number.isInteger(x)) return x;

    if (x < 0) {
        x = -x;
        neg = true;
    }

    let num = getNumber(x);
    
    return neg ? -num : num + 1;
};


const floor = (x) => {
    let neg = false;

    if (x === Infinity || x === -Infinity) return x;

    if (x < 0) {
        x = -x;
        neg = true;
    }

    let val = getNumber(x);

    if (neg) {
        return -(val + (x > val ? 1 : 0));
    }

    return val;
};

const trunc = (n) => {
let intNum = 0;
  const threshold = 0xfffffffff;

  if (n >= threshold || n <= -threshold) {
    n -= threshold;
    intNum += threshold;
  }

  let neg = n < 0;
  let res = n;

  if (neg) {
    n = -n
  }

  while(n >= 1) {
    n -= 1;
    intNum++;
  }

  return neg ? -intNum : intNum;
};

// Test cases
// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round)); // [4, -4, 3, -3]
// console.log(nums.map(floor)); // [3, -4, 3, -4]
// console.log(nums.map(trunc)); // [3, -3, 3, -3]
// console.log(nums.map(ceil));  // [4, -3, 4, -3]

// console.log(trunc(0xfffffffff + 50)); // 68719476735
// console.log(getNumber(-5.56))
// let ctx = 1;
// console.log(trunc(0xfffffffff + ctx))
// console.log(ceil(-1.5))
// console.log(Math.ceil(-1.5))