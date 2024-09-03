// filterShortStateName: accepts an array of strings, and returns only those strings which contain less than 7 characters.
const filterShortStateName = (arr) => arr.filter((item) => item.length < 7)

// filterStartVowel: accepts an array of strings, and returns only those that start with any vowel (a,e,i,o,u).
const filterStartVowel = (arr) => arr.filter((str) => (/[aeiou]/gi).test(str[0]))

//filter5Vowels: accepts an array of strings, and returns only those which contain at least 5 of any vowels (a,e,i,o,u).
const filter5Vowels = (arr) => arr.filter((str) => {
    let count = (str.match(/[aeiou]/gi) || []).length
    return count >=5 
});

/*
filter1DistinctVowel: accepts an array of strings, and returns only those which contain only one distinct vowel (a,e,i,o,u). 
For example, "Alabama" contains only 1 distinct vowel "a".
*/
const filter1DistinctVowel = (arr) => arr.filter((str) => {
    const vowels = str.match(/[aeiou]/gi);
    if (!vowels) return false;
    const distinctVowels = new Set(vowels.map(vowel => vowel.toLowerCase()));
    return distinctVowels.size === 1;
});

// console.log(filter1DistinctVowel(["baeouy", "car", "pppp", "moom"]))

/*
multiFilter: accepts an array of objects, and returns only those which:

the key capital contains at least 8 characters.
the key name does not start with a vowel.
the key tag has at least one vowel.
the key region is not "South"
 */

const multiFilter = (arr) => arr.filter((obj) => 
    obj.capital.length >= 8 &&
    !/[aeiou]/gi.test(obj.name[0]) &&
    /[aeiou]/gi.test(obj.tag) &&
    obj.region !== "South"
);
