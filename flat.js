/*
Create a function named flat that works like Array.flat(), except its first argument is the array.
*/
const flat = (arr, depth=1) => {
    let res = [];

    for (let elem of arr ) {
        if (Array.isArray(elem) && depth > 0) {
            res.push(...flat(elem, depth-1));
        } else {
            res.push(elem);
        }
    }
    return res;
}

// const arr1 = [1, 2, [3, 4]];
// const arr2 = [1, 2, [3, 4, [5, 6]], arr1];
// console.log(flat(arr1))
// console.log(flat(arr2, Infinity))