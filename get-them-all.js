/*
Write the body of the getArchitects function, which returns an array containing 2 arrays of HTML elements:

the first array contains the architects, all corresponding to a <a> tag
the second array contains all the non-architects people
*/
export const getArchitects = () => {
    return [
        document.getElementsByTagName("a"),
        document.querySelectorAll("body span")
    ];
}


/*
Write the body of the getClassical function, which returns an array containing 2 arrays of HTML elements:

the first array contains the architects belonging to the classical class
the second array contains the non-classical architects
*/
export const getClassical = () => {
    return [
        document.querySelectorAll("a.classical"),
        document.querySelectorAll("a:not(.classical)"),
    ];
}

/*
Write the body of the getActive function, which returns an array containing 2 arrays of HTML elements:

the first array contains the classical architects who are active in their class
the second array contains the non-active classical architects
*/
export const getActive = () => {
    return [
        document.querySelectorAll("a.classical.active"),
        document.querySelectorAll("a.classical:not(.active)"),
    ];
}


/*
Write the body of the getBonannoPisano function, which returns an array containing:

the HTML element of the architect you're looking for, whose id is BonannoPisano
an aarray which contains all the remaining HTML elements of active classical architects
*/
export const getBonannoPisano = () => {
    return [
        document.getElementById("#BonannoPisano"),
        document.querySelectorAll("a.classical.active"),
    ];
}