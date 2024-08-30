/*
Create a function named reverse which accepts an array or a string.
It should work like Array.reverse(), and of course you cannot use that.
*/

const reverse = (arr) => {
    let temp = []
    for (let i = arr.length -1; i >= 0; i--) {
        temp.push(arr[i]);
    }
    return temp
}
