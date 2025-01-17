/*
You will create two functions: addWeek 

You have been given a mission to create a new sense of time.
Normally a week has 7 days right? Well, that is about to change.

Weeks will instead have 14 days.

Let me explain; this new week will have 14 days, 
from Monday to Sunday, then secondMonday to secondSunday.

Your purpose is to create a new function named addWeek, 
that takes a Date as an argument. Your function should 
return the weekday as a string, according to our new 14-day week format. 
The epoch of our new 14-day week is 0001-01-01, and that was a Monday.
 */

const addWeek = (date) => {
  const startDate = new Date("0001-01-01");
  const oneWeekInMs = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

  let dateInput = new Date(date);
//   console.log(dateInput.getTime() , startDate.getTime())

  // Calculate the number of weeks between the start date and the given date
  let differenceInMs = dateInput.getTime() - startDate.getTime();
  let weeks = Math.floor(differenceInMs / oneWeekInMs) + 1; // +1 to count starting from 1st week

  let dayOptions = { weekday: "long" };
  let weekday = dateInput.toLocaleDateString(undefined, dayOptions);

  if(weeks % 2 === 0) {
    return  `second${weekday}`
  } else {
    return weekday
  }
};


// console.log(addWeek(new Date('1664-08-09')))
/*
function: timeTravel

Now imagine you have an appointment with your doctor, and you have to wait for some hours,
but you do not want to wait. So you decide that you need to create a new function named timeTravel,
that allows you to change the time according to your needs.

Your function will take an object as an argument, and return a Date. 
You can see the timeTravel example below to understand the structure of the object argument.

Your objective is to use the information from the object to modify the time of the Date before returning it.


// timeTravel({ date, hour, minute, second })

timeTravel({
  date: new Date('2020-05-29 23:25:22'),
  hour: 21,
  minute: 22,
  second: 22,
}).toString()

// Output: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)
*/
// timeTravel({ date, hour, minute, second })

const timeTravel = (obj) => {
    let date = obj.date;
    date.setHours(obj.hour);
    date.setMinutes(obj.minute);
    date.setSeconds(obj.second)

    return obj.date
}

// console.log(timeTravel({
//   date: new Date("2020-05-29 23:25:22"),
//   hour: 21,
//   minute: 22,
//   second: 22,
// }).toString())


// console.log(addWeek("0001-01-14"));
