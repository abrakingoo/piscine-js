/*
Create 3 functions which each take (a, b) as arguments:

multiply that acts like the * operator, without using it.
divide that acts like the integer division operator /, without using it.
modulo that acts like the % operator, without using it.
*/

let neg = false

const multiply = (a, b) => {
    let mul = 0;

    if (a < 0 && b < 0) {
        a = Math.abs(a);
        b = Math.abs(b)
    }

    if (b < 0) {
        b = Math.abs(b)
        neg = true;
    }

    if (a < 0) {
        a = Math.abs(a)
        neg = true;
    }

    while(b > 0) {
        mul+=a;
        b--
    }

    if (neg) {
        return -mul
    }

    return mul;
}

const divide = (a, b) => {
    if (a < 0 && b < 0) {
        a = Math.abs(a);
        b = Math.abs(b)
    }

    if (b < 0) {
        b = Math.abs(b)
        neg = true;
    }

    if (a < 0) {
        a = Math.abs(a)
        neg = true;
    }


    if (b > a) {
        return 0;
    }


    let count = 0;
    while(a > 0) {
        if (a != 0 && a > b){
            count++
        }
        a -= b;
    }

    if (neg) {
        return -count
    }

    return count;
}

const modulo = (a, b) => {

    if (a < 0 && b < 0) {
        a = Math.abs(a);
        b = Math.abs(b)
    }

    if (b < 0) {
        b = Math.abs(b)
    }

    if (a < 0) {
        a = Math.abs(a)
        neg = true;
    }

    if (b < 0) {
        return;
    }

    if (b > a) {
        return a;
    }

  
    while(a > 0) {
        a -= b;    
        if (a != 0 && b > a) {
            if (neg) {
                return -a
            }
            return a;
        }
    }

    return 0;
}

console.log(multiply(22, 123))