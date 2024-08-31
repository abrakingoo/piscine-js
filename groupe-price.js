/*
Create a function named groupPrice, that can find prices in a given string.

Your function will return 2D array with the full price breakdown.

If there is no match, your function should return an empty array.

Example
Given price of USD12.31:

[["USD12.31", "12", "31"]]
*/

const groupPrice = (str) => {
    let fullPrice = [];

    const pattern = /(?<=USD)\d+/;

    if (str.match(pattern)){
        let price = [];
        price.push(str)
        let vals = str.slice(str.indexOf('D')+1).split(".")
        price.push(...vals)
        fullPrice.push(price);
    }
    return fullPrice;
}

// console.log(groupPrice("USD12.31"))