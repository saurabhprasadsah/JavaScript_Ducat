// "use strict";
/**
 *
 * Code structure
 *
 * Statements
 * Semicolons
 * Comments
 */

// console.log('hello world');
// console.log('again hello world')

// single line comment

/**
 *
 * multi
 * line
 * comment
 *
 */


/**
 *
 * The modern mode, "use strict"
 *
 * “use strict”
 */

/**
 *
 * Variables
 *
 * A variable
 *
 * let
 * const
 * var
 *
 * Variable naming
 *
 * The name must contain only letters, digits, or the symbols $ and _.
 * The first character must not be a digit.
 */

// firstName = "deepak"

// var

// var firstName = "deepak"
// var firstName = "deepak singh"

// var firstName = "Jhon"

// console.log(firstName);

// let
// let firstName = "deepak";
// firstName = "Jhon"
// console.log(firstName);

// const
// const firstName = "deepak"
// firstName = "Jhon"
// console.log(firstName);

// MEANING FULL
// firstName

// let $firstName = "deepak"
// let _firstName = "Deepak"

// let !firstName = "Deepak"
// let name1 = "deepak"
// let 1name = "deepak"

/**
 * Data types
 *
 * Number
 * BigInt
 * String
 * Boolean (logical type)
 * null
 * undefined
 * Objects and Symbols
 *
 */

// number
// let a = 10;
// let a = -10

// let a = 10.25;

// console.log(a, typeof a);

// bigint
// let number = BigInt('11111111111111111');
// let number = 11111111111111111n;

// console.log(number, typeof number);

// boolean  true/false
// let bool = false

// console.log(bool, typeof bool);

// null
// let number = null;

// console.log(number, typeof number);

// undefined
// let number = undefined;

// console.log(number, typeof number)

// array

// let num1 = 10;
// let num2 = 20;
// let num3 = "deepak"

// let array = [10,20,30]

// console.log(array, typeof array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

// address =  baseAddress + sizeof datatype * index

// string
// let str = 'asfasdf12@#$%^&*P{EGFgkjdsfgdsgsd'
// console.log(str, typeof str);

// let str = "asfasdf12@#$%^&*P{EGFgkjdsfgdsgsd"
// console.log(str, typeof str);


// let str = "a\"sfasdf12@#$%^&*P{EGFgkjdsfgdsgsd"
// console.log(str, typeof str);

// let str = 'a\'sfasdf12@#$%^&*P{EGFgkjdsfgdsgsd'
// console.log(str, typeof str);

// let name = "deepak\\\\singh"
// console.log(name);

// let name = "deepak"

// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);
// console.log(name[5]);

// let array = [10,20]

// array[0] = 50;

// console.log(array);

// let name = "deepak"

// name[0] = "w"

// console.log(name);

// object
// let array = [
//     "deepak@gmail.com",
//     "deepak",
// ]

// console.log("name: " + array[0]);
// console.log("email: " + array[1]);

// let object = {
//     email: "deepak@gmail.com",
//     name : "deepak",
// }

// console.log(object, typeof object);

// console.log("name: " + object.name);
// console.log("email: " + object.email);

// symbol
// let sym = Symbol('id')
// console.log(sym);
// console.log(sym.description);

/**
 * Interaction: alert, prompt, confirm
 *
 * alert
 * prompt
 * confirm
 */

// alert
// alert("Hello world")

// prompt
// let name = prompt('Enter any number?')
// console.log(name, typeof name);

// confirm
// let result = confirm('Are your sure want to delete this record?')
// console.log(result, typeof result);

/**
 *
 * Type Conversions
 *
 * String conversion
 * Numeric Conversion
 * Boolean Conversion
 */

// String conversion
// //  Numeric
// let number = 10.25;

// console.log(number, typeof number);

// let str = String(number)

// console.log(str, typeof str);

// // boolean
// let bool = true;

// console.log(bool , typeof bool);

// let str = String(bool)

// console.log(str, typeof str);

// Numeric Conversion
// string
// let str = "10.25"

// console.log(str, typeof str);

// let number = Number(str);

// console.log(number, typeof number);

// boolean
// let bool = false;

// console.log(bool, typeof bool);

// let number = Number(bool)

// console.log(number , typeof number);

// Boolean Conversion
// numeric
// let number = 0;
// console.log(number , typeof number);

// let bool = Boolean(number)

// console.log(bool, typeof bool);

// // string
// let str = "sfsg"
// console.log(str, typeof str);

// let bool = Boolean(str)

// console.log(bool, typeof bool);

/**
 *
 * Basic operators
 *
 * Terms: “unary”, “binary”, “operand”
 *
 * Arithmetic operators
 * Addition +,
 * Subtraction -,
 * Multiplication *,
 * Division /,
 * Remainder %,
 * Exponentiation **
 *
 * String concatenation with binary +
 *
 * Numeric conversion, unary +
 *
 * Operator precedence
 *
 * Increment/decrement
 * ++
 * --
 *
 * Assignment Operators
 * =
 * +=
 * -=
 * *=
 * /=
 * %=
 * **=
 *
 * Bitwise operators
 * AND ( & )
 * OR ( | )
 * XOR ( ^ )
 * NOT ( ~ )
 * LEFT SHIFT ( << )
 * RIGHT SHIFT ( >> )
 * ZERO-FILL RIGHT SHIFT ( >>> )
 *
 * Comma ,
 *
 * Comparison Operators
 * ==	equal to
 * ===	equal value and equal type
 * !=	not equal
 * !==	not equal value or not equal type
 * >	greater than
 * <	less than
 * >=	greater than or equal to
 * <=	less than or equal to
 * ?	ternary operator
 *
 * Logical operators
 * || (OR)
 * && (AND)
 * ! (NOT)
 *
 */
// * Basic operators
// *
// * Terms: “unary”, “binary”, “operand”
// *
// * Arithmetic operators (binary operator)
// * Addition +,
// let a = 10;
// let b = 20;

// console.log(a + b);

// * Subtraction -,
// let a = 10;
// let b = 20;

// console.log(a - b);

// * Multiplication *,
// let a = 10;
// let b = 20;

// console.log(a * b);

// * Division /,
// let a = 110;
// let b = 20;

// console.log(a / b);

// * Remainder %,
// let a = 110;
// let b = 20;

// console.log(a % b);

// * Exponentiation **
// let a = 2;
// let b = 4;

// console.log(a**b);


// * String concatenation with binary +
// let firstName = "Deepak"

// let lastName = "Singh"

// let fullName = firstName + lastName;

// console.log(fullName);

// console.log( 10 + 10 ); // 20
// console.log( 10 - 10 ); // 0
// console.log( 10 * 10 ); // 100
// console.log( 10 / 10 ); // 1
// console.log( 10 % 10 ); // 0
// console.log( 10 ** 10 ); // 10000000000

// console.log( 10 + "10" ); // 1010
// console.log( 10 - "10" ); // 0
// console.log( 10 * "10" ); // 100
// console.log( 10 / "10" ); // 1
// console.log( 10 % "10" ); // 0
// console.log( 10 ** "10" ); // 10000000000

// console.log( 10 + "abc" ); // 10abc
// console.log( 10 - "abc" ); // NaN
// console.log( 10 * "abc" ); // NaN
// console.log( 10 / "abc" ); // NaN
// console.log( 10 % "abc" ); // NaN
// console.log( 10 ** "abc" ); // NaN


// * Numeric conversion, unary +
// let str = "10";

// console.log(str , typeof str);

// let number = +str;

// console.log(number , typeof number);

// * Operator precedence

// console.log(10**2 * 3 / 2 + 10 - 10);

// * Increment/decrement

// Increment ++
// let a = 10

// a++; // a = a + 1

// console.log(a);

// postfix a++
// console.log(a++); // output then increment

// console.log(a);

// prefix ++a
// console.log(++a); // increment then output

// console.log(a);

// decrement
// let a = 10;

// a-- // a = a - 1;

// console.log(a);

// postfix a--
// console.log(a--); // output then decrement

// console.log(a);

// // prefix --a
// console.log(--a); // decrement then output

// console.log(a);


// * ++
// * --

// * Assignment Operators
// * =
// * +=
// let a = 10;
// let b = 20;

// a += b; // a = a + b;

// console.log(a);

// * -=
// let a = 10;
// let b = 20;

// a -= b; // a = a - b;

// console.log(a);

// * *=
// let a = 10;
// let b = 20;

// a *= b; // a = a * b;

// console.log(a);

// * /=
// let a = 10;
// let b = 20;

// a /= b; // a = a / b;

// console.log(a);
// * %=
// let a = 10;
// let b = 20;

// a %= b; // a = a % b;

// console.log(a);

// * **=
// let a = 10;
// let b = 20;

// a **= b; // a = a ** b;

// console.log(a);

// Comparison Operators
// * ==	equal to
// let a = "10"
// let b = 10

// console.log(a == b);

// * ===	equal value and equal type
// let a = "10"
// let b = 10

// console.log(a === b);

// * !=	not equal
// let a = "10"
// let b = 10

// console.log(a != b);

// * !==	not equal value or not equal type
// let a = 10
// let b = 10

// console.log(a !== b);

// * >	greater than
// let a = 11
// let b = 10

// console.log(a > b);


// * <	less than
// let a = 9
// let b = 10

// console.log(a < b);

// * >=	greater than or equal to
// let a = 10
// let b = 10

// console.log(a >= b);

// * <=	less than or equal to
// let a = 9
// let b = 10

// console.log(a <= b);

// * ?	ternary operator
// condition ? true : false;
// let a = 11;
// a % 2 === 0 ? console.log("Even") : console.log("Odd");


// * Logical operators
// * && (AND)
/**
 * let a = 11
 * let b = 11
 * 
 * a === 10 && b === 10 result
 * true        true     true
 * false       true     false
 * true        false    false
 * false       false    false
 * 
 */

// let a = 11;
// let b = 11;
// console.log(a === 10 && b === 10);

// * || (OR)
/**
 * 
 * let a = 11
 * let b = 11
 * 
 * a === 10 || b === 10 result
 * true        true     true
 * false       true     true
 * true        false    true
 * false       false    false
 * 
 */
// let a = 11;
// let b = 11;
// console.log(a === 10 || b === 10);

// * ! (NOT)
/**
 * 
 * let a = 0;
 * 
 * !a       result
 * !true    false
 * !false   true
 * 
 */

// let a = 0;

// console.log(!a);

// * Bitwise operators
// * AND ( & )
// let a = 10; // 1010
// let b = 5;  // 0101

// console.log( a & b);

// * OR ( | )
// let a = 10; // 1010
// let b = 5;  // 0101
// console.log(a | b);


// * XOR ( ^ )
// let a = 64; // 1010
// let b = 32;  // 0101

// console.log(a ^ b);

// * NOT ( ~ )
// let a = 10;

// console.log(~a);

// * LEFT SHIFT ( << )
// let a = 10; // 101000

// console.log(a << 2);

// * RIGHT SHIFT ( >> )
// let a = 10; // 10

// console.log(a >> 2);

// * ZERO-FILL RIGHT SHIFT ( >>> )
// let a = -10; // 101

// console.log(a >>> 1);

/**
 * 
 * Conditional branching
 * 
 * The “if” statement
 * The “else” clause
 * Several conditions: “else if”
 * Conditional operator ‘?’
 * 
 */

// syntax
// if(condition) {
// }

// let a = 10;
// if(a === 10) {
//     console.log("a is 10");
// }

// syntax
// if (condition) {
// } else {
// }

// let a = 11;

// if (a === 10) {
//     console.log("a is 10");
// } else {
//     console.log(" a is not 10");
// }

// if elseif block

// syntax
// if(condition) {
// } else if(condition) {
// } else if(condition)
// else {
// }

// let a = 11;

// if (a % 2 === 0 && a % 5 === 0) {
//     console.log("a and b are divisible by 2 and 5");
// } else if (a % 5 === 0) {
//     console.log("a is divisible by 5");
// } else if (a % 2 === 0) {
//     console.log("a is divisible by 2");
// } else {
//     console.log(" a is neither divisible by 2 nor divisible by 5");
// }

// even and odd
// let a = 10;

// if (a % 2 === 0)
//     console.log("a is even");
// else
//     console.log("a is odd");

// console.log( a % 2 === 0 ? "a is even" : "a is odd" );


/**
 * 
 * The "switch" statement
 * Grouping of “case”
 * 
 */

// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }

// let a = 12;

// switch (a) {
//     case 10:
//         console.log("a is 10");
//         break;
//     case 11:
//         console.log("a is 11");
//         break;
//     default:
//         console.log("default");
// }

/**
 * 
 * Nullish coalescing operator '??'
 * 
 */

// let price = 12.25;

// console.log(price ?? 0);

// if (price !== null) {
//     console.log(price);
// } else {
//     console.log(0);
// }

// console.log(price !== null ? price : 0);

// console.log(price);

/**
 * 
 * Loops: while and for
 * 
 * The “while” loop
 * The “do…while” loop
 * The “for” loop
 * The “for in” loop
 * The “for of” loop
 * Breaking the loop
 * Continue to the next iteration
 */

// The “for” loop

// console.log("testing");
// console.log("testing");
// console.log("testing");
// console.log("testing");
// console.log("testing");
// console.log("testing");
// console.log("testing");
// console.log("testing");
// console.log("testing");
// console.log("testing");

// for (intialization; condition ; updation) {
// }

// print 1 to 10
// for (let i = 1; i <= 10 ; i++) {
//     console.log(i);
// }

// array
// let array = [10,20,30,40,50];

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// for in
// let array = [10,20,30,40,50];

// for (let key in array) {
//     console.log(key, array[key]);
// }

// for of
// let array = [10,20,30,40,50];

// for (const value of array) {
//     console.log(value);
// }

// while loop
// while (condition) {
// }

// print 1 to 10
// let i = 1
// while (i <= 10) {
//     console.log(i);

//     i++;
// }

// array
// let array = [10,20,30,40,50];

// let index = 0;

// while (index < array.length) {
//     console.log(index, array[index]);
//     index++;
// }

// dowhile
// do {

// } while (condition);

// print 1 to 10
// let i = 1;

// do {
//     console.log(i);
//     i++
// } while (i<=10);

// breaking the loop
// let array = [10,20,30,40,50];

// for (const value of array) {

//     if(value === 30) {
//         break;
//     }

//     console.log(value);
// }

// skipping the value
// let array = [10,20,30,40,50];

// for (const value of array) {

//     if(value === 30) {
//         continue;
//     }

//     console.log(value);
// }

/**
 * 
 * Functions
 * 
 * Function Declaration
 * Local variables
 * Outer variables
 * Parameters
 * Default values
 * Returning a value
 * Function expressions
 * Callback functions
 * Arrow functions
 * 
 */

// let a = 10;
// let b = 10;

// console.log(a + b);

// a = 20;
// b = 20;

// console.log(a + b);

// function declarations and definitions
// function addition() {
//     let a = 10;
//     let b = 10;

//     console.log(a + b);
// }

// function calling
// addition();

// function parameters and arguments
// function addition(number1,number2) {
//     console.log(number1 + number2);
// }

// function arguments
// addition(10,20)
// addition(40,20)

// * Local variables
// function testing (num) {
//     let a = 10;

//     console.log(num, a);
// }
// console.log(num);

// testing(100)

// * Outer variables
// let a = 10;

// function testing (num) {

//     console.log(num, a);
// }

// console.log(a);

// testing(100)

// default values
// function test (a, b = 0 ,c  = 0) {
// console.log(a +  b  + c);
// }

// test(10, 20);

// returning a value

// function addition(a,b) {
//     return a + b;
// }

// let result = addition(10,20); // 30
// console.log(result);

// Function expressions

// let addition = function(a, b) {
//     console.log(a + b);
// }

// addition(10,20)

// arrow function
// ( parameters) => { statement }

// let addition = (a,b) => {
//     console.log(a + b);
// }

// addition(10,20)

// let addition = (a,b) =>  a + b;

// let sum = addition(10,20)

// console.log(sum);

// let squareOfNumber = a => a * a;

// console.log(squareOfNumber(10));

// function calculator(num1 = 0, num2 = 0, operator = "+") {
//     if(operator === "+") {
//         console.log(num1 +  num2);
//     }

//     if(operator === "-") {
//         console.log(num1 - num2);
//     }

//     if(operator === "*") {
//         console.log(num1 *  num2);
//     }

//     if(operator === "/") {
//         console.log(num1 /  num2);
//     }

//     if(operator === "%") {
//         console.log(num1 %  num2);
//     }

//     if(operator === "**") {
//         console.log(num1 ** num2);
//     }
// }

// function calculator(num1 = 0, num2 = 0, callback) {
//     callback(num1, num2)
// }

// calculator(10,20, function(a, b) {
//     console.log(a + b);
// })

// calculator(10,20, function(a, b) {
//     console.log(a - b);
// })
