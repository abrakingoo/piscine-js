/*
Instructions
Create a function named countLeapYears which accepts a Date. 
Your function should return the number of leap years to have taken place since the year 1.
*/
/**
 * Counts the number of leap years that have taken place since the year 1.
 * 
 * @param {Date} date - The Date object to check.
 * @returns {number} The number of leap years since year 1 up to the year of the given date.
 */
function countLeapYears(date) {
  let years = 0;
  for (let year = 1; year < date.getFullYear(); year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      years++;
    }
  }
  return years;
}
