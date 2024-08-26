/*
Create three copies of the person object named clone1, clone2 and samePerson.

Increase the age of person by one, and set its country to 'FR'.

You must find a way to keep the original values of clone1 and clone2. The values of samePerson should change when person is changed.
*/

person.age = 78;
person.country = 'FR';

const clone1 = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }

  const clone2 = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }

  const samePerson = person