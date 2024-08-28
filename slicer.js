/*
Create a function named slice that works like Array.slice() and String.slice().

It takes 3 arguments:

string or array to process.
starting index.
optional ending index.
*/

const slice = (arr, sIndex, ...eIndex) => {
    let newSlice = [];
    let string = false;

    if (typeof(arr) == 'string') {
        string = true;
    }

    if (sIndex === undefined) {
        return arr
    }
    let stop = eIndex.length > 0 ? eIndex[0] : arr.length;

    if (sIndex < 0 && stop < 0) {
        for (let i = arr.length + sIndex; i < arr.length + stop; i++) {
            newSlice.push(arr[i]);
        }
        return string ? newSlice.join("") : newSlice;
    }

    if (sIndex < 0) {
        for (let i = arr.length + sIndex; i < arr.length; i++) {
            newSlice.push(arr[i]);
        }
        return string ? newSlice.join("") : newSlice;
    }

    if (stop < 0) {

        for (let i = sIndex; i < arr.length + stop; i++) {
            newSlice.push(arr[i]);
        }
        return string ? newSlice.join("") : newSlice;
    }

    for (let i = sIndex; i < stop; i++) {
        newSlice.push(arr[i]);
    }
    return string ? newSlice.join("") : newSlice;
}

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const str = 'abcdef';
console.log(slice(str,-3, -1))