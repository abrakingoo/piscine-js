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

const pyramid = (char, n)  => {
    let str = "";
    let spaces = " ".repeat(char.length);
    for (var i = 1; i <= n; i++) {
        str = str + spaces.repeat(n - i) + char.repeat(2 * i - 1) + "\n";
    }
    return str.slice(0, -1);
}
console.log(pyramid("a", 5));

