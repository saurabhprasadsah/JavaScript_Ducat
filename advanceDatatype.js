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

// binary
// console.log(a.toString(2));

// hex
// console.log(a.toString(16));

// octal
// console.log(a.toString(8));

// decimal
// console.log(a.toString(10));

// * Rounding
// let number = 10.5;

// * Math.floor
// console.log(Math.floor(number));

// * Math.ceil
// console.log(Math.ceil(number));

// * Math.round
// console.log(Math.round(number));

// * Math.trunc
// console.log(Math.trunc(number));

// Math.toFixed
// let a = 10.552525;

// console.log(a.toFixed(2));

// * Imprecise calculations
// console.log(10 + 2 + true - false);

// * Tests: isFinite and isNaN
// let number = 10;
// console.log(isFinite(number));

// let number = "deepak";

// console.log(isNaN(number));

// * Math.random()
// console.log(Math.random() * 10);

// * Math.pow(n, power)
// console.log(Math.pow(2, 3));

// * Math.max(a, b, c...) and Math.min(a, b, c...)
// console.log(Math.max(10,50,90,30,80));
// console.log(Math.min(10,50,90,30,80));

// * parseInt and parseFloat
// let number = "10.25"

// console.log(typeof number);

// console.log(parseInt(number), typeof parseInt(number));
// console.log(parseFloat(number), typeof parseFloat(number));

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
// let str = "Deepak"
// let str1 = 'Deepak'
// let str2 = `${str} singh gusain`;

// * String length
// console.log(str.length);

// * Accessing characters
// console.log(str[0]);

// * Strings are immutable
// let str = "deepak"
// str[0] = "w";
// console.log(str);

// * Changing the case
// * toUpperCase
// let str = "deepak"
// console.log(str.toUpperCase());

// * toLowerCase
// let str = "DEEPAK"
// console.log(str.toLowerCase());

// * Searching for a
// let str = "deepak singh gusain"

// * indexOf
// console.log(str.indexOf('g'));

// * lastIndexOf
// console.log(str.lastIndexOf('g'));

// * includes, startsWith, endsWith
// console.log(str.includes('deepak'));
// console.log(str.startsWith('wee'));
// console.log(str.endsWith('in'));


// * Getting a substring
// let str = "deepak singh gusain"
// * slice
// console.log(str.slice(0,-6));

// * substring
// console.log(str.substring(0,-6));

// * substr
// console.log(str.substr(0,-6));


// * Comparing strings
// let a = "Hello world";
// let b = "hello world";
// console.log(a === b);


// * codePointAt
// let str = "deepak"

// console.log(str[0].codePointAt());
// console.log(str[1].codePointAt());
// console.log(str[2].codePointAt());
// console.log(str[3].codePointAt());
// console.log(str[4].codePointAt());
// console.log(str[5].codePointAt());

// * fromCodePoint
// console.log(String.fromCodePoint(100,101,101,112,97,107));


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
// let array = [10,20,30,40]
// console.log(array);

// new Array
// let array = new Array(10, 20,30)
// console.log(array);

// Array.of
// let array = Array.of(10,20,30,40,50)
// console.log(array);

// Array.from
// let array = Array.from([10,20,30,40,50])
// console.log(array);

// Multidimensional arrays
// let array = [10,[20,40],30,40];
// console.log(array[1][0]);

// toString
// let array = [10,20,30,40]
// console.log(array.toString());

// * Array methods
// let array = [10,20,30,40]

// * Add/remove items

// * arr.push(...items) – adds items to the end,
// let returnValue = array.push(50,50,60);
// console.log(array,returnValue);

// * arr.pop() – extracts an item from the end,
// let returnValue = array.pop();

// console.log(array, returnValue);

// * arr.unshift(...items) – adds items to the beginning.
// let array = [10,20, 30,40];
// array.unshift(100)
// console.log(array);


// * arr.shift() – extracts an item from the beginning,
// let array = [10,20, 30,40];
// let returnValue = array.shift();
// console.log(array, returnValue);

// * splice
// let array = [10,20, 30, 40];

// remove
// array.splice(2,1)

// update
// array.splice(2,1,200)

// add
// array.splice(2,0,100,200)

// console.log(array);

// * slice
// let array = [10,20,30,40,50,60];

// console.log(array.slice(2,4));

// * concat
// let array = [10,20,30,40,50,60]
// let array2 = [10,20,30,40,50,60]

// let array3 = array.concat(array2);
// console.log(array3);

// * Iterate: forEach
// let array = [10,20,30,40,50,60]
// array.forEach((value, index, arr) => {
//     console.log(value, index,arr);
// })

// * Searching in array
// let array = [10,20,30,30,40,50,60]

// * indexOf/lastIndexOf and includes
// console.log(array.indexOf(30));
// console.log(array.lastIndexOf(30));
// console.log(array.includes(30));

// * find and findIndex/findLastIndex
// let array = [10,20,30,30,40,50,60]
// let data = array.find((value,index,array) => {
//     if(value === 300)
//         return 300
// })

// let data = array.findIndex((value,index,array) => {
//     if(value === 30)
//         return index
// })

// let data = array.findLastIndex((value,index,array) => {
//     if(value === 30)
//         return index
// })

// console.log(data);

// * filter
// let array = [10,20,30,30,40,50,60]

// let data = array.filter((value,index,arr) => {
//     if(value === 30) {
//         return value
//     }
// })

// console.log(data);

// * Transform an array
// * map
// let array = [10,20,30,30,40,50,60]

// let data = array.map((value,index,arr) => {
//     return value * 2
// })

// console.log(data);

// * sort(fn)
// let array = ['a', 'c', 'e', 'd', 'b', 'g'];

// console.log(array.sort());

// let array = [10,20,30,30,40,50,60, 100,200,300,400,500,600]

// let data = array.sort((a,b)=> {
//     if(a>b) return 1;

//     if(a == b) return 0;

//     if(a < b) return -1;
// })

// console.log(data);


// * reverse
// let array = [10,20,30,30,40,50,60, 100,200,300,400,500,600]

// console.log(array.reverse());

// * split and join
// let array = [10,20,30,30,40,50,60, 100,200,300,400,500,600]

// let string = array.join("|");

// console.log(string.split("|"));


// * reduce/reduceRight
// let array = [10,20,30,30,40,50,60, 100,200,300,400,500,600]

// let sum = array.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue
// }, 0)

// console.log(sum);


// * Array.isArray

// let array = 10

// console.log(Array.isArray(array));


/**
 * 
 * Iterables
 * String is iterable
 * Iterables and array-likes
 */

// let array = [10,20,30,30,40,50,60]

// for (const value of array) {
//     console.log(value);
// }

// let str = "deepak"

// for (const value of str) {
//     console.log(value);
// }

// let object = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 10
// }

// for (const iterator of object) {
//     console.log(iterator);
// }

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

// Array destructuring

// let array = [10,20,30,40,50 ,60,70,80];

// let [a,b,...c] = array;

// console.log(a, b,c);

// object destructuring

// let object = {
//     name: {
//         firstName: 'John',
//         lastName: 'Doe'
//     },
//     age: 10
// }

// let {age, ...test} = object;
// console.log(age, test);

// let {name:{firstName}} = object
// console.log(firstName);

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

// let date = new Date()

// console.log(date);

// // * getFullYear()
// console.log(date.getFullYear());

// //  * getMonth()
// console.log(date.getMonth() + 1);

// //  * getDate()
// console.log(date.getDate());

// //  * getHours()
// console.log(date.getHours());

// //  * getMinutes() 
// console.log(date.getMinutes());

// //  * getSeconds() 
// console.log(date.getSeconds());

// //  * getMilliseconds()
// console.log(date.getMilliseconds());

// //  * getDay()
// console.log(date.getDay());

// let date = Date.now()

// console.log(date/1000/60/60/24/30/12);

// let date = Date.parse("10-10-2022")

// console.log(date/1000/60/60/24/30/12);

// let date = new Date("10-10-2022")

// console.log(date);

/**
 * JSON methods
 * 
 * JSON.stringify
 * 
 * JSON.parse
 */

// let object = {
//     name: {
//         firstName: 'John',
//         lastName: 'Doe'
//     },
//     age: 10
// }

// let jsonData = JSON.stringify(object);

// let obj = JSON.parse(jsonData);

// console.log(obj);
