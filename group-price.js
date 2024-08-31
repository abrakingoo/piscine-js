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

    if (str.includes("$")) {
        const pattern = /\$(\d+(\.\d+)?)/;
        const match = str.match(pattern);

        if (match) {
            let price = [];
            price.push(str);
            let vals = match[1].split("."); 
            price.push(...vals);
            fullPrice.push(price);
        }
        return fullPrice;
    }

    if (str.includes("USD")) {
        const pattern = /USD(\d+(\.\d+)?)/;
        const match = str.match(pattern);

        if (match) {
            let price = [];
            price.push(str);
            let vals = match[1].split(".");
            price.push(...vals);
            fullPrice.push(price);
        }
        return fullPrice;
    }

    return fullPrice;
};


// console.log(groupPrice("USD12.31"))
// console.log(groupPrice("$4.00"));