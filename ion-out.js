/*
Create a function named ionOut, that receives a string and returns an array with every word containing 'ion' following a 't'. 
The words should be returned without the 'ion' part.
*/

const ionOut = (str) => {
    // const pattern = /(?<=(t)ion)/ig;
    const pattern = /(?<=t)ion/ig;

    let matches = [];
    for (let elem of str.split(" ")) {
        if (elem.match(pattern)) {
            matches.push(elem.replace(/ion/ig, "").replace(',', ""))
        }
    }

    return matches;
}

console.log(ionOut("international national traditional day"))
console.log(ionOut('attention, direction'))