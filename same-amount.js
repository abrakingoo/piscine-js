/*
Instructions
Create a function named sameAmount, that takes three arguments:
a string, and 2 regular expressions. Your function should return a boolean.

The objective is to confirm that the regular expressions match the string the same number of times.

*/

const sameAmount = (str, exp1, exp2) => {
  // Find matches for both regex patterns
  const matches1 = str.match(exp1);
  const matches2 = str.match(exp2);

  // If either doesn't match anything, return false immediately
  if (!matches1 || !matches2) {
    return matches1 === matches2; // Both must be null for them to match the same number of times
  }

  // Compare the lengths of the match arrays
  return matches1.length === matches2.length;
};