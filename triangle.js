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

const triangle = (str, n) => {
    let res = "";

    for (let i = 1; i <= n; i++) {
        res += str.repeat(i);
        if (i < n) {
            res += "\n";
        }
    }

    return res;
}

// console.log(triangle("#", 5)) 