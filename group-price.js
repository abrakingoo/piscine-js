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
        const pattern = /\$(\d+)(?:\.(\d+))?/;
        const match = str.match(pattern);

        if (match) {
            let price = [`$${match[1]}`];
            if (match[2]) {
                price.push(match[1]);
                price.push(match[2]); 
            } else {
                price.push(match[1]);
            }
            fullPrice.push(price);
        }
    }

    if (str.includes("USD")) {
        const pattern = /USD(\d+)(?:\.(\d+))?/;
        const match = str.match(pattern);

        if (match) {
            let price = [`USD${match[1]}`];
            if (match[2]) {
                price.push(match[1]);
                price.push(match[2]);
            } else {
                price.push(match[1]); 
            }
            fullPrice.push(price);
        }
    }

    return fullPrice;
};


console.log(groupPrice("USD12.31"))
console.log(groupPrice("The price of the cereals is $4.00."));