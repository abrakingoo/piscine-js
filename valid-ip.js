/*
Instructions
Create a function named findIP, that returns an array of valid IP addresses from a given string. These addresses may or may not have a port.

For the IP part, the syntax will be as follows, where x is a number from 0-255. Values with leading zeros are not valid:

x.x.x.x
*/

function findIP(str) {
  return str.match(
    /\b(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}(:([1-9]\d{0,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5]))?\b/g
  );
}


const exampleString = `
  233.123.12.234, 
  192.169.1.23, 
  10.1.23.7, 
  0.0.0.0:22, 
  0.0.0.0:68768, 
  192.168.1.123:8080, 
  255.253.123.2:8000, 
  192.168.1.123, 
  0.0.0.0`;
console.log(findIP(exampleString)); 