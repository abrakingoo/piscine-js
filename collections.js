/*
Write a bunch of functions which converts data from one type to another:

arrToSet: from Array to Set.
arrToStr: from Array to string.
setToArr: from Set to Array.
setToStr: from Set to string.
strToArr: from string to Array.
strToSet: from string to Set.
mapToObj: from Map to Object.
objToArr: from Object to Array.
objToMap: from Object to Map.
arrToObj: from Array to Object.
strToObj: from string to Object.
Finally, write a function named superTypeOf that unlike typeof returns a specific values for advanced types like Map and Set.

Examples
const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

arrToSet(arr) // -> Set { 1, 2, 3 }
arrToStr(arr) // -> '1213'
setToArr(set) // -> [1, 2, 3]
setToStr(set) // -> '123'
strToArr(str) // -> ['h', 'e', 'l', 'l', 'o']
strToSet(str) // -> Set { 'h', 'e', 'l', 'o' }
mapToObj(map) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
objToArr(obj) // -> [45, 75, 24]
objToMap(obj) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
arrToObj(arr) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
strToObj(str) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

superTypeOf(map) //         -> 'Map'
superTypeOf(set) //         -> 'Set'
superTypeOf(obj) //         -> 'Object'
superTypeOf(str) //         -> 'String'
superTypeOf(666) //         -> 'Number'
superTypeOf(NaN) //         -> 'Number'
superTypeOf(arr) //         -> 'Array'
superTypeOf(null) //        -> 'null'
superTypeOf(undefined) //   -> 'undefined'
superTypeOf(superTypeOf) // -> 'Function'
*/

// const obj = { x: 45, y: 75, radius: 24 };
// const arr = [1, 2, 1, 3]
// const str = 'hello'

const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join(" ");
const setToArr = (set) => [...set];
const setToStr = (set) => setToArr(set).join("");
const strToArr = (str) => str.split('');
const strToSet = (str) => new Set(str);
const mapToObj = (map) => {

    const obj = {};
    for (let [Key, value] of map) {
        obj[Key] = value;

    }
    return obj
}

const objToArr = (obj) => {
    let arr = [];
    for (let [key, value] of Object.entries(obj)){
        arr.push(value);
    }

    return arr;
}

const objToMap = (obj) => {
    const map = new Map();

    for (let [key, value] of Object.entries(obj)) {
        map.set(key, value);
    }

    return map;
}

const arrToObj = (arr) => {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i];
    }
    return obj;
}

const strToObj = (str) => {
    const obj = {};

    for (let i = 0; i < str.length; i++) {
        obj[i] = str[i];
    }

    return obj;
}
// console.log(strToObj(str))