/*
Create 3 functions, which accept a string which we'll refer to as the dataSet. Your function should return an array of strings.

getURL: returns all URLs present in the dataSet.
greedyQuery: returns URLs from the dataSet, with at least 3 query parameters.
notSoGreedy: returns URLs from the dataSet, with at least 2, but not more then 3 query parameters.
Example dataSet:

qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you
Only http and https URLs are valid. You can search for greedy quantifiers for help.


*/

const getURL = (str) => {
    const pattern = /http(s)?:\/\/[^\s]+/gi;
    let matches = str.match(pattern)

    return matches;
}

const greedyQuery = (str) => {
    urls = getURL(str);
    let list = [];
    matches = urls.map((elem) => {
        let match = elem.match(/=/g);
        if (match && match.length >=3) {
            list.push(elem)
        }
    });


    return list;
}

const notSoGreedy = (str) => {
    urls = getURL(str);
    let list = [];
    matches = urls.map((elem) => {
        let match = elem.match(/=/g);
        if (match && match.length <= 2) {
            list.push(elem)
        }
    });


    return list;
}

// console.log(greedyQuery("qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you"))
// console.log(notSoGreedy("qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you"))
// console.log(getURL("qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you"))