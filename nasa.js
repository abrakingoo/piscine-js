/*
Create a function named nasa that takes a number N as an argument and returns a string
 with all numbers from 1 to N separated by spaces. There are three exceptions:

Convert numbers which are divisible by 3 to "NA".
Convert numbers which are divisible by 5 to "SA".
Convert numbers which are divisible by 3 and 5 to "NASA".
*/

const nasa = (n) => {
    let str = "";
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            str += "NASA";
            if (i < n){
                str += " ";
            }
            continue;
            
        }

        if (i % 5 === 0) {
            str += "SA";
            if (i < n){
                str += " ";
            }
            continue;
        }

        if (i % 3 === 0)  {
            str += "NA";
            if (i < n){
                str += " ";
            }
            continue;
        }

        
        str += i;
        if (i < n){
            str += " ";
        }
    }

    return str;
}

console.log(nasa(15))