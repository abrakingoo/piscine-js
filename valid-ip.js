/*
Instructions
Create a function named findIP, that returns an array of valid IP addresses from a given string. These addresses may or may not have a port.

For the IP part, the syntax will be as follows, where x is a number from 0-255. Values with leading zeros are not valid:

x.x.x.x
*/

const findIP = (input) => {
  // Regular expression to match valid IP addresses with optional ports
  const ipRegex =
    /\b((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9]|0)\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9]|0)(:\d{1,5})?\b/g;

  // Match all valid IPs (with or without ports) from the input string
  const matchedIPs = input.match(ipRegex) || [];

  // Filtering out invalid ports (0-65535) if present
  return matchedIPs.filter((ip) => {
    const [_, port] = ip.split(":");
    if (port) {
      const portNum = parseInt(port, 10);
      return portNum >= 0 && portNum <= 65535;
    }
    return true;
  });
};