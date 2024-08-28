/*
Create a function named slice that works like Array.slice() and String.slice().

It takes 3 arguments:

string or array to process.
starting index.
optional ending index.
*/

const slice = (arr, sIndex, ...eIndex) => {
    let newSlice = [];

    if (sIndex === undefined) {
        return arr
    }
    let stop = eIndex.length > 0 ? eIndex[0] : arr.length;

    if (sIndex < 0) {
        for (let i = arr.length + sIndex; i < arr.length; i++) {
            newSlice.push(arr[i]);
        }
        return newSlice;
    }

    if (stop < 0) {

        for (let i = sIndex; i < arr.length + stop; i++) {
            newSlice.push(arr[i]);
        }
        return newSlice;
    }

    for (let i = sIndex; i < stop; i++) {
        newSlice.push(arr[i]);
    }
    return newSlice;
}

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(slice(animals))