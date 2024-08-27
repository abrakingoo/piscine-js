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

    if (Array.isArray(n)) {
        return n.filter(val => typeof val === 'number' && !Number.isNaN(val));
    }

    return typeof(n) === 'number' && !Number.isNaN(n);
}

is.nan = (n) => Number.isNaN(n);

is.str = (str) => typeof(str) === 'string';

is.bool = (bool) => typeof(bool) === 'boolean';

is.undef = (n) => typeof(n) === 'undefined';

is.def = (n) => typeof(n) !== 'undefined' && Boolean(n);

is.arr = (n) => Array.isArray(n);

is.obj = (n) => typeof(n) === 'object' && n !== null && !Array.isArray(n);

is.fun = (f) => typeof(f) === 'function';

is.truthy = (n) => Boolean(n);

is.falsy = (n) => !Boolean(n);