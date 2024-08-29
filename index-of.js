/*
Create 3 functions which accept an array to be searched, and a value to be matched.

indexOf: which returns the index of the first occurrence. It also accepts an optional index from where the search should begin.
 If the value was not found, -1 is returned.
lastIndexOf: which works just like your indexOf function, but returns the index of the last occurrence.
includes: which returns true if the value was found in the array, and false otherwise.
*/

const indexOf = (arr, val, ...optional) => {

    let index = optional.length > 0 && optional[0] < arr.length ? optional[0] : 0;

    for (index; index < arr.length; index++) {
        if (val === arr[index]) {
            return index;
        }
    }

    return -1;
}
const lastIndexOf = (arr, val, ...optional) => {

    let index = optional.length > 0 && optional[0] < arr.length ? optional[0] : arr.length -1;

    for (index; index >= 0; index--) {
        if (val === arr[index]) {
            return index;
        }
    }

    return -1;
}


const includes = (arr,  val) => {
    for (let elem of arr) {
        if (elem === val) {
            return true;
        }
    }
    return false;
}



console.log(lastIndexOf(['t',0,0,'t'],'t',2))