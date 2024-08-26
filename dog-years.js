/*

Someone once said that a human year is equal to 7 dog years.

Create a function named dogYears, that accepts the name of a planet, and the age of the dog in seconds.
Your function should return the age of the dog on that planet in dog years.

earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds.
mercury: orbital period 0.2408467 Earth years.
venus: orbital period 0.61519726 Earth years.
mars: orbital period 1.8808158 Earth years.
jupiter: orbital period 11.862615 Earth years.
saturn: orbital period 29.447498 Earth years.
uranus: orbital period 84.016846 Earth years.
neptune: orbital period 164.79132 Earth years.
If you were told that a dog was 1,000,000,000 seconds old, you should calculate that the dog would be 221.82 Earth-years old.

You will have to format the number so that the result is rounded like the example above.
*/

const dogYears = (planetName, dogAge) => {
    const yr = 31557600; 

    switch (planetName.toLowerCase()) {
        case 'earth': {
            const dogyr = (dogAge / yr) * 7;
            return dogyr.toFixed(2);
        }
        case 'mercury': {
            const mPeriod = 0.2408467;
            const dogyr = (dogAge / (mPeriod * yr)) * 7;
            return dogyr.toFixed(2);
        }
        case 'venus': {
            const vPeriod = 0.61519726;
            const dogyr = (dogAge / (vPeriod * yr)) * 7;
            return dogyr.toFixed(2);
        }
        case 'mars': {
            const marPeriod = 1.8808158; 
            const dogyr = (dogAge / (marPeriod * yr)) * 7;
            return dogyr.toFixed(2);
        }
        case 'jupiter': {
            const juOrbPeriod = 11.862615;
            const dogyr = (dogAge / (juOrbPeriod * yr)) * 7;
            return dogyr.toFixed(2);
        }
        case 'saturn': {
            const sartOrbPeriod = 29.447498;
            const dogyr = (dogAge / (sartOrbPeriod * yr)) * 7;
            return dogyr.toFixed(2);
        }
        case 'uranus': {
            const urOrbPeriod = 84.016846;
            const dogyr = (dogAge / (urOrbPeriod * yr)) * 7;
            return dogyr.toFixed(2);
        }
        case 'neptune': {
            const nepOrbPeriod = 164.79132;
            const dogyr = (dogAge / (nepOrbPeriod * yr)) * 7;
            return dogyr.toFixed(2);
        }
        default:
            return "Invalid planet name";
    }
}
