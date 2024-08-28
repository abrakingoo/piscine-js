/*
Create 3 functions which each take (a, b) as arguments:

multiply that acts like the * operator, without using it.
divide that acts like the integer division operator /, without using it.
modulo that acts like the % operator, without using it.
*/

const multiply = (a, b) => {
    let mul = 0;
    while(b > 0) {
        mul+=a;
        b--
    }
    return mul;
}

const divide = (a, b) => {
    let count = 0;
    while(a > 0) {
        a -= b;
        count++
    }

    return count;
}

const modulo = (a, b) => {

    if (b > a) {
        return b;
    }
  
    while(a > 0) {
        a -= b;    
        if (a != 0) {
            return a;
        }
    }

    return 0;
}

// console.log(modulo(30, 25))