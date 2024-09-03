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
  const year = date.getFullYear();
  
  // Calculate the number of leap years up to the given year
  const leapYears = Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);

  return leapYears;
}
