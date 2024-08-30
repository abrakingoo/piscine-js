/*
Create a function named triangle that takes a string and a number as arguments. Your function will return a string representing a triangle.

The string will denote the characters which construct the triangle, and the number denotes its height.

Example
* character and depth of 5:
*
**
***
****
*****
No new line in last line
*/

const triangle = (n) => {
    let str = "";

    for (let i = 1; i <= n; i++) {
        str += "*".repeat(i);
        if (i < n) {
            str += "\n";
        }
    }

    return str;
}

// console.log(triangle(5)) 