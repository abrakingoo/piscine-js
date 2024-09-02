/*
Instructions
Create the following functions:

isValid: accepts a Date, and returns false if the Date is invalid.
isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
isFuture: accepts a Date, and returns true if the Date is valid, and is after than the present date.
isPast: accepts a Date, and returns true if the Date is valid, and is before the present date.
*/

const isValid = (date) => !isNaN(new Date(date).getTime());
const isAfter = (date1, date2) => new Date(date1).getTime() > new Date(date2).getTime();
const isBefore = (date1, date2) => new Date(date1).getTime() < new Date(date2).getTime();
const isFuture = (date) => isValid(date) && isAfter(date, new Date());
const isPast = (date) => isValid(date) && isBefore(date, new Date());


// console.log(isValid('2003-11-09'))
// console.log(isAfter('1990-03-05', '2000-04-03'))
// console.log(isBefore("1990-03-05", "2000-04-03"));
// console.log(isFuture('0001-01-01'))