/*
Create a function named forEach which takes an array as the first argument, 
a function as the second argument, and that works like the Array.prototype.forEach method.
*/

const forEach = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr)
    }
};