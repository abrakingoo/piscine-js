/*
Create two functions which accept a string, and return a string:

RNA: that converts a DNA strand into its compliment RNA strand.
DNA: that converts an RNA strand into its compliment DNA strand.
Compliments:

DNA | RNA
 G  -  C
 C  -  G
 T  -  A
 A  -  U
Each strand must be represented as upper case string, without spaces, eg: "ATCG" is a valid DNA strand.
*/

const RNA = (str) => {
    let dna = ""
    const dnaValue = {C: 'G', G: 'C', T: 'A', A: 'U'};

    for (let elem of str) {
        dna += dnaValue[elem.toUpperCase()]
    }
    return dna;
}

const DNA = (str) => {
    let rna = ""
    const rnaValue = {C: 'G', G: 'C', A: 'T', U: 'A'};

    for (let elem of str) {
        rna += rnaValue[elem.toUpperCase()]
    }
    return rna;
}

// console.log(RNA("uagc"))
// console.log(DNA("atcg"))