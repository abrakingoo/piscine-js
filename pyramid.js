/*
Instructions
Create a function named pyramid which works just like your triangle function. But, it should be pyramid shaped.

Output example
* character and depth of 5 :
    *
   ***
  *****
 *******
*********
No new line in last line
*/

const pyramid = (str, n) => {
  let res = "";

  for (let row = 1; row <= n; row++) {
    let val = ""; // Start fresh for each row

    for (let col = 1; col <= 2 * n - 1; col++) {
      if (col >= n - (row - 1) && col <= n + (row - 1)) {
        val += str;
      } else {
        val += " ";
      }
    }

    val = val.replace(/\s+$/, ""); // Remove trailing spaces only
    res += val;

    if (row < n) {
      res += "\n";
    }
  }

  return res;
};

console.log(pyramid("a", 5));

