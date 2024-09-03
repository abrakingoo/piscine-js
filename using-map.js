
//citiesOnly: accepts an array of objects and returns an array of strings from the city key.
const citiesOnly = (arr) => arr.map((key) => key.city);


/*
upperCasingStates: accepts an array of strings, and returns a new array of strings.
 The returned array will be the same as the argument, except the first letter of every word must be capitalized.
*/
const upperCasingStates = (arr) => arr.map((str) => str[0].toUpperCase() + str.slice(1));

// console.log(upperCasingStates(['alabama', 'new jersey']))

/*
fahrenheitToCelsius: accepts an array of fahrenheit temperatures as strings, 
and returns an array of strings converted to celsius. Round down the result.
*/
//Fahrenheit to Celsius, subtract 32 then multiply by 5/9.
const fahrenheitToCelsius = (arr) => arr.map((item) => Math.floor((item.slice(0,-2) - 32) * (5/9)) + "°C")

// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']))

/*
trimTemp: accepts an array of objects, and returns a new array of objects with the same structure. 
The temperature strings must have their spaces removed in the new array.
*/
const trimTemp = (arr) => {
    return arr.map((item) => {
        return {
            city: item.city,
            temperature: item.temperature.trim().replace(/\s+/g, ""),
        };
    });
};


// console.log(trimTemp([
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
//   ]) )


//tempForecasts: accepts an array of objects, and returns an array of formatted strings. See the example below:
const tempForecasts = (arr) => 
    arr.map((item) => fahrenheitToCelsius([item.temperature])[0].slice(0,-1) + "Celsius" + " in " + item.city + ", " + upperCasingStates([item.state])[0]);

// const forecast = tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' 101 °F',
//       state: 'california',
//       region: 'West',
//     },
//   ])
//   console.log(forecast)
//   // -> ['38°Celsius in Pasadena, California']