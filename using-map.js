
//citiesOnly: accepts an array of objects and returns an array of strings from the city key.
const citiesOnly = (arr) => arr.map((key) => key.city);


/*
upperCasingStates: accepts an array of strings, and returns a new array of strings.
 The returned array will be the same as the argument, except the first letter of every word must be capitalized.
*/
const upperCasingStates = (arr) => { 
    return arr.map((str) => {
        let res = str[0].toUpperCase();
        for (let i = 1; i < str.length; i++) {
            if (str[i - 1] === " ") {
                res += str[i].toUpperCase();
            } else {
                res += str[i];
            }
        }
        return res;
    });
};

// console.log(upperCasingStates(['alabama', 'new jersey', 'New hampshire']))

/*
fahrenheitToCelsius: accepts an array of fahrenheit temperatures as strings, 
and returns an array of strings converted to celsius. Round down the result.
*/
//Fahrenheit to Celsius, subtract 32 then multiply by 5/9.
function fahrenheitToCelsius(arr) {
    return arr.map(
        (item) =>
            Math.floor((Number(item.replace(/\s+/, "").slice(0, -2)) - 32) * (5 / 9)) + "°C"
    );
}

// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']))
// console.log(fahrenheitToCelsius(['21° F']))

/*
trimTemp: accepts an array of objects, and returns a new array of objects with the same structure. 
The temperature strings must have their spaces removed in the new array.
*/
const trimTemp = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            temperature: item.temperature.replace(/\s+/g, "")
        };
    });
};

// console.log(trimTemp([
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
    // { city: 'San Francisco', temperature: ' 84 ° F   ' },
//   ]) )


//tempForecasts: accepts an array of objects, and returns an array of formatted strings. See the example below:
const tempForecasts = (arr) => 
    arr.map((item) => fahrenheitToCelsius([item.temperature.replace(/\s+/, "")])[0].slice(0,-1) + "Celsius" + " in " + item.city + ", " + upperCasingStates([item.state])[0]);

// const forecast = tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' 101 °F',
//       state: 'california',
//       region: 'West',
//     },
//     { city: 'Juneau', temperature: ' 21° F', state: 'Alaska', region: 'West' },
//   ])
//   console.log(forecast)
//   // -> ['38°Celsius in Pasadena, California']