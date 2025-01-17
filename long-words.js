/*
Instructions
Create three functions, which each accept an array as an argument.

longWords: returns true if every element of the array is a string with at least 5 characters.

oneLongWord: returns true if at least one element of the array is a string with 10 or more characters.

noLongWords: returns true if there are no elements in the array which is a string with at least 7 characters.
*/

const longWords = (arr) =>
  arr.every((item) => typeof item === "string" && item.length >= 5);

const oneLongWord = (arr) =>
  arr.some((item) => typeof item === "string" && item.length >= 10);

const noLongWords = (arr) =>
  arr.every((item) => typeof item !== "string" || item.length < 7);

// console.log(noLongWords(["hellowew", "wwwwworlds", "hwwwwwwwi"]))
