/*
Create 2 functions:

get: a function that takes a key and returns the corresponding value from the sourceObject.

set: a function that takes a key and a value. Update the value for the corresponding property of the sourceObject and return the value.
*/

  const get = (key) => sourceObject[key];
  const set = (key, value) =>  {
      sourceObject[key] = value;
      return value
  }