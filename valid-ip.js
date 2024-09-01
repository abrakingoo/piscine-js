/*
Instructions
Create a function named findIP, that returns an array of valid IP addresses from a given string. These addresses may or may not have a port.

For the IP part, the syntax will be as follows, where x is a number from 0-255. Values with leading zeros are not valid:

x.x.x.x
*/

const findIP = (input) => {
  // Regular expression to match valid IP addresses with optional port
  const ipRegex =
    /\b((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(:\d+)?\b/g;

  // Match all valid IPs (with or without ports) from the input string
  const matchedIPs = input.match(ipRegex) || [];

  return matchedIPs;
};