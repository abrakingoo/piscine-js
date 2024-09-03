/*
Instructions
Create a function named dayOfTheYear which accepts a Date. 
Your function should return the number of days since the first day of that year.
*/
function dayOfTheYear(date) {
  let numberOfDays = 1;
  while (!firstofFirst(date)) {
    date.setDate(date.getDate() - 1);
    numberOfDays++;
  }
  return numberOfDays;
}

function firstofFirst(date) {
  return date.getDate() === 1 && date.getMonth() === 0;
}