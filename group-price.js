/*
Create a function named groupPrice, that can find prices in a given string.

Your function will return 2D array with the full price breakdown.

If there is no match, your function should return an empty array.

Example
Given price of USD12.31:

[["USD12.31", "12", "31"]]
*/

const groupPrice = (str) => {
    let fullPrices = [];

    // Check for prices with '$'
    const dollarPattern = /\$(\d+)(?:\.(\d+))?/g;
    let dollarMatch;
    while ((dollarMatch = dollarPattern.exec(str)) !== null) {
        let price = [`$${dollarMatch[1]}`];
        if (dollarMatch[2]) {
            price[0] = `$${dollarMatch[1]}.${dollarMatch[2]}`; // Full price with decimal
            price.push(dollarMatch[1]); // Integer part
            price.push(dollarMatch[2]); // Fractional part
        } else {
            price[0] = `$${dollarMatch[1]}.00`; // Full price with default decimal
            price.push(dollarMatch[1]); // Only integer part
            price.push("00"); // Default fractional part
        }
        fullPrices.push(price);
    }

    // Check for prices with 'USD'
    const usdPattern = /USD(\d+)(?:\.(\d+))?/g;
    let usdMatch;
    while ((usdMatch = usdPattern.exec(str)) !== null) {
        let price = [`USD${usdMatch[1]}`];
        if (usdMatch[2]) {
            price[0] = `USD${usdMatch[1]}.${usdMatch[2]}`; // Full price with decimal
            price.push(usdMatch[1]); // Integer part
            price.push(usdMatch[2]); // Fractional part
        } else {
            price[0] = `USD${usdMatch[1]}.00`; // Full price with default decimal
            price.push(usdMatch[1]); // Only integer part
            price.push("00"); // Default fractional part
        }
        fullPrices.push(price);
    }

    return fullPrices;
};

// Test cases
console.log(groupPrice('product one its $9.98 and the second one its $10.20'));
// Expected: [['$9.98', '9', '98'], ['$10.20', '10', '20']]
