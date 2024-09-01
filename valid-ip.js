/*
Instructions
Create a function named findIP, that returns an array of valid IP addresses from a given string. These addresses may or may not have a port.

For the IP part, the syntax will be as follows, where x is a number from 0-255. Values with leading zeros are not valid:

x.x.x.x
*/

function findIP(str) {
  return str.match(
    /(?!(((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}):(?!(?![7-9]\d\d\d\d)(?!6[6-9]\d\d\d)(?!65[6-9]\d\d)(?!655[4-9]\d)(?!6553[6-9])(?!0+)(\d{1,5})))((((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4})(?::(?![7-9]\d\d\d\d)(?!6[6-9]\d\d\d)(?!65[6-9]\d\d)(?!655[4-9]\d)(?!6553[6-9])(?!0+)(\d{1,5}))?)/g
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