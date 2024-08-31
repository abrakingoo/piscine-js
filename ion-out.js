/*
Create a function named ionOut, that receives a string and returns an array with every word containing 'ion' following a 't'. 
The words should be returned without the 'ion' part.
*/

const ionOut = (str) => {
    const pattern = /(?<=(t)ion)/ig;

    if (str.match(pattern)) {
        return str.replace(/ion/g, "")
    };
}

// console.log(ionOut("international national traditional day"))