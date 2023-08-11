// "use strict"
/**
 * 
 * Numbers
 * 
 * Hex, binary and octal numbers
 * toString(base)
 * Rounding
 * Math.floor
 * Math.ceil
 * Math.round
 * Math.trunc
 * Math.toFixed
 * Imprecise calculations
 * Tests: isFinite and isNaN
 * Math.random()
 * Math.pow(n, power)
 * Math.max(a, b, c...) and Math.min(a, b, c...)
 * parseInt and parseFloat
 */

// * Hex, binary and octal numbers
// * toString(base)
// let a = 10;

// // binary
// console.log(a.toString(2));

// // octal
// console.log(a.toString(8));

// // hex
// console.log(a.toString(16));

// // decimal
// console.log(a.toString(10));

// * Rounding
// let a = 10.55;

// //  * Math.floor
// console.log(Math.floor(a));

// //  * Math.ceil
// console.log(Math.ceil(a));

// //  * Math.round
// console.log(Math.round(a));

// //  * Math.trunc
// console.log(Math.trunc(a));

// toFixed

// let a = 10.255525;

// console.log(a.toFixed(3));

// * Imprecise calculations
// console.log(10 + 20 - 10 - false);

// * Tests: isFinite and isNaN
// let number = {firstName: "Deepak"};

// console.log(isFinite(number));

// let a = {firstName: "deepak"};

// console.log(a);

// console.log(isNaN(a));

// * Math.random()
// console.log(Math.floor(Math.random() * 100));

// * Math.pow(n, power)
// console.log(Math.pow(3,3));
// console.log(2**10);

// * Math.max(a, b, c...) and Math.min(a, b, c...)
// console.log(Math.max(20,100,10,50,1000));
// console.log(Math.min(20,100,10,50,1000));

// * parseInt and parseFloat

// let number = "10.25";

// console.log(parseInt(number));
// console.log(parseFloat(number));

/**
 * Strings
 * 
 * Quotes
 * Special characters
 * String length
 * Accessing characters
 * Strings are immutable
 * 
 * Changing the case
 * toUpperCase
 * toLowerCase
 * 
 * Searching for a 
 * substring
 * indexOf
 * lastIndexOf
 * 
 * includes, startsWith, endsWith
 * 
 * Getting a substring
 * slice
 * substring
 * substr
 * 
 * Comparing strings
 * codePointAt
 * fromCodePoint
 * 
 */

// * Quotes
// let firstName = "deepak";
// let a =  'fasdfafasdfasfasf' + firstName
// let b =  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab facilis voluptatem culpa! Iure, nisi ab, repellendus illo veniam sunt earum molestias harum sapiente provident labore? Quibusdam labore at eligendi architecto.  "

// let c = `
// Lorem, ipsum dolor sit amet consectetur
// adipisicing elit.
// ${firstName}
// Ab facilis voluptatem culpa!
// Iure, nisi ab, repellendus illo veniam sunt earum
// molestias harum sapiente provident labore?
// Quibusdam labore at eligendi architecto.
// `

// console.log(c);

// * Special characters
// let a = 'Deepak\'s Hat'

// console.log(a);

// let a = "\"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab facilis voluptatem culpa! Iure, nisi ab, repellendus illo veniam sunt earum molestias harum sapiente provident labore? Quibusdam labore at eligendi architecto.\""

// console.log(a);

// let a = "deepak\\\\singh"
// console.log(a);

// * String length

// let name = "deepak singh gusain"
// console.log(name.length);

// * Accessing characters
// let name = "deepak singh gusain"
// console.log(name[0]);
// console.log(name[1]);

// for (const key in name) {
//     console.log(name[key]);
// }

// * Strings are immutable
// let array = [10,20];

// array[0] = 50;

// console.log(array);

// let name = "deepak singh gusain"

// name[0] = 'w'

// console.log(name);

// * Changing the case
// * toUpperCase
// let name = "deepak singh gusain"
// console.log(name.toUpperCase());

// * toLowerCase
// let name = "DEEPAK SINGH GUSAIN"
// console.log(name.toLowerCase());

// * Searching for a
// let name = "deepak singh gusain"
// console.log(name);
// * indexOf
// console.log(name.indexOf('e')); // 1
// console.log(name.indexOf('ain')); // 16

// * lastIndexOf
// console.log(name.lastIndexOf('a')); //  16
// console.log(name.lastIndexOf('ain')); // 16

// * includes, startsWith, endsWith
// console.log(name.includes('deepak'));
// console.log(name.startsWith('wee'));
// console.log(name.endsWith('zin'));

// * Getting a substring
// let name = "deepak singh gusain"
// * slice
// console.log(name.slice(0, 6));

// * substring
// console.log(name.substring(0, -6));

// * substr
// console.log(name.substr(0,-6));


// * Comparing strings
// let name = "deepak singh gusain"
// * codePointAt

// console.log(name.codePointAt());

// for (const value of name) {
//     console.log(value.codePointAt());
// }


// * fromCodePoint
// 100 101 101 112 97 107
// console.log(String.fromCodePoint(100, 101, 101,112,97,107));


/**
 * 
 * Arrays
 * 
 * Declaration
 * new Array()
 * Multidimensional arrays
 * toString
 * 
 * Array methods
 * 
 * Add/remove items
 * arr.push(...items) – adds items to the end,
 * arr.pop() – extracts an item from the end,
 * arr.shift() – extracts an item from the beginning,
 * arr.unshift(...items) – adds items to the beginning.
 * 
 * splice
 * 
 * slice
 * 
 * concat
 * 
 * Iterate: forEach
 * 
 * Searching in array
 * indexOf/lastIndexOf and includes
 * find and findIndex/findLastIndex
 * filter
 * 
 * Transform an array
 * map
 * sort(fn)
 * reverse
 * split and join
 * reduce/reduceRight
 * 
 * Array.isArray
 */

// []
// let array = [10,20,30,40,50];

// console.log(array);

// new Array()
// let array = new Array(10)

// console.log(array);

// Array.of()
// let array = Array.of(10);

// console.log(array);

// Array.from()
// let array = Array.from([10,20,30,40])

// console.log(array);

// Multidimensional arrays
// let array = [
//     [10, 20],
//     [30, 40, [
//         50, 60
//     ]],
//     [70, 80, 90, 100]
// ]

// console.log(array[1][2][0]);

// toString
// let array = [10,20,30,40,50];

// "10,20,30,40,50"

// console.log(array.toString());

// * Add/remove items
// let array = [10,20,30,40,50];

// * arr.push(...items) – adds items to the end,
// let returnValue = array.push(100,200)
// console.log(array, returnValue);

// * arr.pop() – extracts an item from the end,
// let returnValue = array.pop()
// console.log(array, returnValue);

// * arr.unshift(...items) – adds items to the beginning.
// let returnValue = array.unshift(1000,2000)
// console.log(array, returnValue);

// * arr.shift() – extracts an item from the beginning,
// let returnValue = array.shift()
// console.log(array,returnValue);

// * splice
// let array = [10,20,30,40,50];

// remove
// let returnValue = array.splice(2,1)
// console.log(array, returnValue);

// update
// let returnValue = array.splice(2,2,1000,2000)
// console.log(array, returnValue);

// add
// let returnValue = array.splice(2,0, 1000,2000)
// console.log(array, returnValue);

// * slice
// let array = [10,20,30,40,50];

// console.log(array.slice(0, 3));

// * concat
// let array = [10,20,30,40,50];
// let array1 = [60,70,80,90,100];

// let result = array.concat(array1);

// console.log(result);

// * Iterate: forEach
// let array = [10,20,30,40,50];

// let returnData = array.forEach((value, index , arr) => {
//     console.log(value, index, arr);
// })

// console.log(returnData);

// * Searching in array
// let array = [10,20,30,30,40,50];

// * indexOf/lastIndexOf and includes
// console.log(array.indexOf(30));
// console.log(array.lastIndexOf(30));
// console.log(array.includes(60));

// * find and findIndex/findLastIndex
// let returnData = array.find((value,index, arr) => {
//     if(value === 60) {
//         return index
//     }
// })

// let array = [{name: "deepak", age: 10},{name: "suraj", age:20}];

// let returnData = array.find((value,index, arr) => value.name === "deepak")

// console.log(returnData);

// let array = [10,20,30,30,40,50];

// findIndex
// let resultData = array.findIndex((value, index, arr) => value === 30);

// findLastIndex
// let resultData = array.findLastIndex((value, index, arr) => value === 30);

// console.log(resultData);


// * filter
// let array = [10,20,30,30,40,50];

// let returnData = array.filter((value, index, arr) => value === 30)

// console.log(returnData);

// * Transform an array
// * map
// let array = [10,20,30,30,40,50];

// let mapedArray = array.map((value,index,arr) => {
//     return value + 2;
// })

// console.log(mapedArray);

// * sort(fn)
// let array = [10,40,90,50,60,70, 100, 700, 50, 83 , 90, 80, 50, 40];

// let sortArray =  array.sort((a, b) => {
//     if(a < b) {
//         return 1
//     }

//     if(a === b) {
//         return 0
//     }

//     if(a > b) {
//         return -1
//     }
// });

// let sortArray =  array.sort((a, b) => {
//     return a - b;
// });

// console.log(sortArray);

// * reverse
// let array = [10,40,90,50];

// console.log(array.reverse());

// * split and join
// let array = [10,40,90,50];

// let arrayToString = array.join("|");

// console.log(arrayToString.split("|"));

// * reduce/reduceRight

// let array = [10,40,90,50];

// let sum = 0;

// for (const value of array) {
//     sum += value;
// }

// console.log(sum);

// let sum = array.reduce((acc, currentValue) => {
//     return acc + currentValue;
// }, 0)

// console.log(sum);


// * Array.isArray(variable)

// let array = [10,40,90,50];

// console.log(Array.isArray(array));

/**
 * 
 * Iterables
 * String is iterable
 * Iterables and array-likes
 */

// let array = [10,20,30,40];

// for (const value of array) {
//     console.log(value);
// }

// let str = "deepak"

// for (const value of str) {
//     console.log(value);
// }

// let object = {
//     firstName: "deepak",
//     lastName: "singh"
// }

// console.log(object);

// for (const key of object) {
//     console.log(key);
// }

/**
 * 
 * Map and Set
 * 
 * Map
 * new Map() – creates the map.
 * map.set(key, value) – stores the value by the key.
 * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
 * map.has(key) – returns true if the key exists, false otherwise.
 * map.delete(key) – removes the value by the key.
 * map.clear() – removes everything from the map.
 * map.size – returns the current element count.
 * 
 * Iteration over Map
 * map.keys() – returns an iterable for keys,
 * map.values() – returns an iterable for values,
 * map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
 * 
 * 
 * Set
 * new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
 * set.add(value) – adds a value, returns the set itself.
 * set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
 * set.has(value) – returns true if the value exists in the set, otherwise false.
 * set.clear() – removes everything from the set.
 * set.size – is the elements count.
 * 
 * Iteration over Set
 */

// * Map
// * new Map() – creates the map.
// let map = new Map();

// * map.set(key, value) – stores the value by the key.
// map.set(1, 10)
// map.set(2, 20)
// map.set(3, 30)
// map.set(4, 40)

// * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// console.log(map.get(4));

// * map.has(key) – returns true if the key exists, false otherwise.
// console.log(map.has(5));

// * map.delete(key) – removes the value by the key.
// console.log(map.delete(5))
// console.log(map);

// * map.clear() – removes everything from the map.
// map.clear()
// console.log(map);

// * map.size – returns the current element count.
// console.log(map);
// console.log(map.size);

// * Iteration over Map
// let map = new Map()

// map.set(1, 10)
// map.set(2, 20)
// map.set(3, 30)
// map.set(4, 40)
// map.set(5, 50)
// map.set(6, 60)
// map.set(7, 70)
// map.set("deepak", 80)

// for (const value of map) {
//     console.log(value);
// }

// * map.keys() – returns an iterable for keys,
// console.log(map.keys());

// for (const value of map.keys()) {
//     console.log(value);
// }

// * map.values() – returns an iterable for values,
// console.log(map.values());

// for (const value of map.values()) {
//     console.log(value);
// }

// * map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
// console.log(map.entries());

// for (const value of map.entries()) {
//     console.log(value[0], value[1]);
// }

// * Set
// * new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// let set = new Set();

// * set.add(value) – adds a value, returns the set itself.
// set.add(10);
// set.add(20);
// set.add(30);
// set.add(40);

// * set.has(value) – returns true if the value exists in the set, otherwise false.
// console.log(set.has(50));

// * set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// console.log(set.delete(50))
// console.log(set);

// * set.clear() – removes everything from the set.
// set.clear();
// console.log(set);

// * set.size – is the elements count.
// console.log(set);
// console.log(set.size);

// let set = new Set()

// set.add(10);
// set.add(20);
// set.add(30);
// set.add(40);
// set.add(50);
// set.add(60);
// set.add(70);
// set.add(80);
// set.add(90);
// set.add(100);

// for (const value of set) {
//     console.log(value);
// }


/**
 * WeakMap and WeakSet
 * 
 * WeakMap
 * weakMap.set(key, value)
 * weakMap.get(key)
 * weakMap.delete(key)
 * weakMap.has(key)
 * 
 * WeakSet
 * weakSet.add(value)
 * weakSet.delete(value)
 * weakSet.has(value)
 */

// * WeakMap
// let weakMap = new WeakMap();

// console.log(weakMap);
// * weakMap.set(key, value)
// let object = {key: 1}
// weakMap.set(object, 10)

// * weakMap.get(key)
// console.log(weakMap.get(object));

// * weakMap.delete(key)
// console.log(weakMap.delete(object));
// console.log(weakMap);
// * weakMap.has(key)
// console.log(weakMap.has(object));
// console.log(weakMap);

// let weakSet = new WeakSet()

// let object = {firstname: "deepak"}

// weakSet.add(object)

// weakSet.delete(object)

// console.log(weakSet.has(object));

// console.log(weakSet);

/**
 * 
 * Object.keys, values, entries
 * 
 * Object.keys(obj) – returns an array of keys.
 * Object.values(obj) – returns an array of values.
 * Object.entries(obj) – returns an array of [key, value] pairs.
 */

let object = {
    firstName: "deepak",
    lastName: "Singh",
    age: 10
}

// for (const value of object) {
//     console.log(value);
// }

// keys
// console.log(Object.keys(object));

// for (const value of Object.keys(object)) {
//     console.log(value);
// }

// value
// console.log(Object.values(object));

// for (const value of Object.values(object)) {
//     console.log(value);
// }

// entries
console.log(Object.entries(object));

for (const value of Object.entries(object)) {
    console.log(value);
}


/**
 * Destructuring assignment
 * 
 * 
 * Array destructuring
 * 
 * The rest ‘…’
 * 
 * Default values
 * 
 * Object destructuring
 * 
 * The rest pattern “…”
 * 
 * Nested destructuring
 */

/***
 * 
 * Date and time
 * 
 * Creation
 * 
 * Access date components
 * getFullYear()
 * getMonth()
 * getDate()
 * getHours()
 * getMinutes() 
 * getSeconds() 
 * getMilliseconds()
 * getDay()
 * 
 * Date.now()
 * 
 * Date.parse from a string
 * 
 */

/**
 * JSON methods
 * 
 * JSON.stringify
 * 
 * JSON.parse
 */
