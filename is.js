/*
Add new function properties to the is object to check value types. Each function should take one argument, and return a boolean.

is.num: value is a number.
is.nan: value is NaN.
is.str: value is a string.
is.bool: value is a boolean.
is.undef: value is undefined.
is.def: value is defined.
is.arr: value is an array.
is.obj: value is a simple object or null objects.
is.fun: value is a function.
is.truthy: value is truthy.
is.falsy: value is falsy.
*/

is.num = (n) => {
    if (isNaN(Number(n))) {
        return false;
    }

    return true;
}

is.nan = (n) => {
    if (isNaN(Number(n))) {
        return true;
    }

    return false;
}

is.str = (str) => {
    if (typeof(str) === 'string') {
        return true;
    }

    return false;
}

is.bool = (bool) => {
    if (typeof(bool) == 'boolean') {
        return true;
    }

    return false;
}

is.undef = (n) => {
    if (typeof(n) === 'undefined') {
        return true;
    }

    return false;
}

is.def = (n) => {
    if (typeof(n) !== 'undefined' && Boolean(n)) {
        return true;
    }

    return false;
}

is.arr = (n) => Array.isArray(n);
is.obj = (n) => typeof(n) === 'object';
is.fun = (f) => typeof(f) === 'function';
is.truthy = (n) => Boolean(n);
is.falsy = (n) => !Boolean(n);
console.log(is.falsy(''))