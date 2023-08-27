// "use strict";

/**
 * 
 * Code structure
 * 
 * Statements
 * Semicolons
 * Comments 
*/
//  console.log("hello world"); console.log("hello world")

//  single line comments

/**
 * 
 * multi line comments
 * 
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

// console.log(firstName);

// // var
// var firstName = "deepak";
// firstName = "Jhon";

// console.log(firstName);

// var firstName = "deepak";
// var firstName = "Jhon";

// var PI = 3.14;

// PI = 1.2

// console.log(firstName);

// let 
// let firstName = "deepak";
// firstName = "Jhon";
// console.log(firstName);

// const 
// const PI = 3.14;
// console.log(PI);

// first$name = "deepak";
// first_name = "deepak";
// firstname = "deepak";
// Firstname = "deepak";
// firstName = "deepak";
// first1name = "deepak";
// $firstname = "deepak";
// _firstname = "deepak";
// 1name = "deepak";

/**
 * Data types
 * 
 * Number
 * BigInt
 * Boolean (logical type)
 * null
 * undefined
 * array
 * String
 * Objects and Symbols
 * 
 */

// number
// let number = 10;
// number = 10.25;

// console.log(number, typeof number);

//  BigInt
// let number = 1111111111111111111111n;
// let number = BigInt('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');
// console.log(number, typeof number);

// boolean (true / false)
// true 1
// false 0
// let bool = false;
// console.log(bool, typeof bool);

// null
// let number = null;
// console.log(number, typeof number);

// undefined
// let number;
// console.log(number, typeof number);

// array
// let a = 10;
// let b = 20;
// let c = 30;

// let array = [10, 20, 30]
// array[0]  = true;

// console.log(typeof array[0]);

// console.log(array, typeof array);
// console.log(array[0], typeof array[0]);
// console.log(array[1] , array[2], array[2], array[2]);
// console.log(array[2]);
// console.log(array[3]);

// value = baseAddress + sizeofDatatype * index;
//       = 4           +  4 *  0
//       = 4 + 0
//       = 4

// string
// let str = 'sfasfafsdasfd';
// let str = "sfasfafsdasfd";

// let str = "sfasfa\"fsdasfd";
// let str = 'sfasfa\'fsdasfd';

// let str = 'sfasfa\nfsdasfd';

// let str = 'sfasfa\\fsdasfd';

// let str = "deepak singh";

// str = "jhon"

// console.log(str, typeof str);

// str[0] = "s"

// console.log(str[0]);

// object

// let array = [
//     "deepak@gmail.com",
//     "deepak", 
// ];

// console.log(array[0]);
// console.log(array[1]);

// let object = {
//     email: "deepak@gmail.com",
//     name:"deepak",
// }

// object.age = 10;

// console.log(object);
// console.log(typeof object);

// console.log(object.name);
// console.log(object.email);

// symbol
// let sym = Symbol('id');
// console.log(sym);
// console.log(sym.description);

// let str = "123"
// console.log(str[0]);


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
// let name = prompt("enter your name?")

// console.log(name);

// let number = prompt("enter any number");

// console.log(number, typeof number);

// confirm
// let result = confirm("are you sure want to delete this record?")

// console.log(result, typeof result);

// document.write()
// document.write("hello from document.write()")

// console
// console.log("hello form console.log")
// console.warn("hello from console.warn()")
// console.dir(window)

/**
 * 
 * Type Conversions
 * 
 * String conversion
 * Numeric Conversion
 * Boolean Conversion
 */

// String conversion
// number
// let number = 10;
// console.log(number, typeof number);

// let str = String(number);
// console.log(str, typeof str);

// boolean
// let bool = true;
// console.log(bool, typeof bool);

// let str = String(bool);
// console.log(str, typeof str);

// Numeric Conversion
// string
// let str = "abc";
// console.log(str, typeof str);

// let number = Number(str);
// console.log(number, typeof number);

// boolean
// let bool = false;
// console.log(bool, typeof bool);

// let number = Number(bool)
// console.log(number, typeof number);

// boolean conversion
// string
// let str = "";
// console.log(str , typeof str);

// let bool = Boolean(str)
// console.log(bool, typeof bool);

// number
// let number = -10;
// console.log(number ,typeof number);

// let bool = Boolean(number)
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

// let a = 10;

// let b = 20;

// let c = a + b;

// * Arithmetic operators
// * Addition +,
// let a = 10;
// let b = 10;

// console.log(a + b);

// * Subtraction -,
// let a = 10;
// let b = 10;

// console.log(a - b);

// * Multiplication *,
// let a = 10;
// let b = 10;

// console.log(a * b);

// * Division /,
// let a = 12;
// let b = 10;

// console.log(a / b);

// * Remainder %,
// let a = 12;
// let b = 10;

// console.log(a % b);

// * Exponentiation **
// let a = 2;
// let b = 3;

// console.log(a ** b);

// String concatenation with binary +
// let firstname = "deepak"
// let secondname = "singh"

// let fullname = firstname + " " + secondname;
// console.log(fullname);

// console.log(10 + 10); // 20
// console.log(10 - 10); // 0
// console.log(10 * 10); // 100
// console.log(10 / 10); // 1
// console.log(10 % 10); // 0
// console.log(10 ** 10); // 10000000000


// console.log("10" + 10); // 1010
// console.log("10" - 10); // 0
// console.log("10" * 10); // 100
// console.log("10" / 10); // 1
// console.log("10" % 10); // 0
// console.log("10" ** 10);// 10000000000

// console.log("abc" + 10); // abc10
// console.log("abc" - 10); // NaN
// console.log("abc" * 10); // NaN
// console.log("abc" / 10); // NaN
// console.log("abc" % 10); // NaN
// console.log("abc" ** 10);// NaN

// Numeric conversion, unary +
// let string = "10";

// console.log(string, typeof string);

// let number =  +string;

// console.log(number, typeof number);

// increment ++ unary operator +1
// let a = 10;

// postfix variable++
// console.log(a++); // output then increment
// console.log(a);

// prefix ++variable
// console.log(++a); // increment then output
// console.log(a);

// let a = 20;
// console.log(++a + a++ + a);
// console.log( a - ++a - a++  + ++a - a++);

// decrement val - 1  -- unary operator
// let a = 10;

// postfix variable--
// console.log(a--); // output then decrement
// console.log(a);

// prefix --variable
// console.log(--a); // decrement then output
// console.log(a);

// let a = 1;

// console.log(--a + a-- - a);

// * Assignment Operators
// * =	

// let a = 12 % 2;

// console.log(a);

// * +=	
// let a = 10;
// let b = 10;
// a += b; // a = a + b;
// console.log(a);

// * -=	
// let a = 10;
// let b = 10;
// a -= b; // a = a - b;
// console.log(a);

// * *=	
// let a = 10;
// let b = 10;
// a *= b; // a = a * b;
// console.log(a);

// * /=	
// let a = 10;
// let b = 10;
// a /= b; // a = a / b;
// console.log(a);

// * %=	
// let a = 10;
// let b = 10;
// a %= b; // a = a % b;
// console.log(a);

// * **=
// let a = 10;
// let b = 10;
// a **= b; // a = a ** b;
// console.log(a);

// * Comparison Operators

//  * ==	equal to
// let a = "10";
// let b = 10;
// console.log(a == b); 

//  * ===	equal value and equal type
// let a = 10;
// let b = 10;
// console.log(a === b);

//  * !=	not equal
// let a = "10";
// let b = 10;
// console.log(a != b);

//  * !==	not equal value or not equal type
// let a = 10;
// let b = 10;
// console.log(a !== b);

//  * >	greater than
// let a = 9;
// let b = 10;
// console.log(a > b);

//  * <	less than
// let a = 9;
// let b = 10;
// console.log(a < b);

//  * >=	greater than or equal to
// let a = 11;
// let b = 10;
// console.log(a >= b);

//  * <=	less than or equal to
// let a = 9;
// let b = 10;
// console.log(a <= b);

//  * ?	ternary operator

// condition ? true : false

// let result = (11 % 2 === 0 ? "EVEN" : "ODD")

// console.log(result);

// * Logical operators
// * && (AND)
/**
 * And &&
 * let a = 11;
 * let b = 11;
 * 
 * a === 10 && b === 10  result
 * true        true      true
 * false       true      false
 * true        false     false
 * false       false     false
 */

// let a = 11;
// let b = 11;

// console.log(a === 10 && b === 10);


// * || (OR)
/**
 * OR ||
 * 
 * let a = 11;
 * let b = 11;
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
 * NOT !
 * 
 * let a = 10;
 * 
 * a      !a
 * true   false
 * false  true
 * 
 * a = false 
 * 
 * !a = false
 * !a = true
 * !!a
 * 
 */

// let a = "";

// console.log(! a);

// * Bitwise operators
// * AND ( & )
// let a = 10; // 1010
// let b = 5;  // 0101
//             // 0000
// console.log(a & b);

// * OR ( | )
// let a = 10; // 1010
// let b = 10; // 0101
//             // 1111

// console.log(a | b);


// * XOR ( ^ )
// let a = 10; // 1010
// let b = 10; // 1010
//             // 0000

// console.log(a ^ b);

// * NOT ( ~ )
// let a = -11; //1010
// console.log(~a);

// 000000000000000000000000000000001010
// 111111111111111111111111111111110101

// * LEFT SHIFT ( << )
// let a = 10; // 10100
// console.log(a << 1);



// * RIGHT SHIFT ( >> )

// let a = 10; // 101
// console.log(a >> 1);

// * ZERO-FILL RIGHT SHIFT ( >>> ) 
// let a = 10; // 1010
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

// if
// if (condition) {

// }

// let number = 11;

// if (number % 2 === 0) {
//     console.log("number is even");
// }

// if else
// if (condition) {

// } else {

// } 

// let number = 10;

// if (number % 2 === 0) {
//     console.log("number is even");
// } else {
//     console.log("number is odd");
// }

// if else ladder
// if (condition) {

// } else if(condition) {

// } else if(condition) {

// } else if(condition) {

// } else if(condition) {

// } else if(condition) {

// } else {

// }

// let number = 17;

// if (number % 2 === 0 && number % 5 === 0) {
//     console.log("number is divisible by 2 and 5");
// } else if (number % 5 === 0) {
//     console.log("number is divisible by 5");
// } else if (number % 2 === 0) {
//     console.log("number is divisible by 2");
// } else {
//     console.log("number is not divisible by 2 and 5");
// }

// nested if else

// let number = -10;

// if(number > 0) {
//     if(number% 2 === 0){
//         console.log("number is even");
//     }else {
//         console.log("number is odd");
//     }
// }else {
//     console.log("number is not greater than zero");
// }

// removing {}

// let number = 11;

// if (number % 2 === 0)
//     console.log("number is even");
// else
//     console.log("number is odd");

// ternary operator

// let number = 11;

// number%2 === 0 ? 
//     console.log("number is even") : 
//     console.log("number is odd"); 

/**
 * 
 * The "switch" statement
 * Grouping of “case”
 * 
 */

// let a = 10;
// let b = 20;

// let operator = "**";

// if(operator === "+") {
//     console.log(a +  b);
// }else if (operator === "-") {
//     console.log(a -  b);
// }else if(operator === "*") {
//     console.log(a * b);
// }else if(operator === "/"){
//     console.log(a / b);
// }else if(operator === "%"){
//     console.log(a % b);
// } else {
//     console.log("please enter the valid operator");
// }

// switch (expression) {
//     case value:

//         break;

//     default:
//         break;
// }

// example

// let a = 11

// switch (a) {

//     case 10:
//         console.log("case 10 matched");
//         break;

//     case 11:
//         console.log("case 11 matched");
//         break;

//     default:
//         console.log("default");

// }


// let a = 10;
// let b = 20;

// let operator = "%";

// switch (operator) {
//     case "+":
//         console.log(a + b);
//         break;
//     case "-":
//         console.log(a - b);
//         break;
//     case "*":
//         console.log(a * b);
//         break;
//     case "/":
//         console.log(a / b);
//         break;
//     case "%":
//         console.log(a % b);
//         break;
//     case "**":
//         console.log(a ** b);
//         break;

//     default:
//         console.log("please enter the valid operator");
// }

/**
 * 
 * Nullish coalescing operator '??'
 * 
 */

// let value = null;

// if(!value) {
//     console.log(0);
// }else{
//     console.log(value);
// }

// !value ? console.log(0) : console.log(value);

// console.log(value ?? 0);

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

// console.log(10);
// console.log(10);
// console.log(10);
// console.log(10);
// console.log(10);
// console.log(10);
// console.log(10);
// console.log(10);
// console.log(10);


// for syntax
// for (initializer;condition; updation) {
//    statement
// }

// // 1 to 10
// for (let num = 1; num <= 10; num++) {
//    console.log(num);
// }

// // array
// let array = [10,20,30,40,50];

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// // string
// let str = "deepak";

// for (let index = 0; index < str.length; index++) {
//     console.log(index, str[index]);
// }

// let num = 1

// for (; num <= 10; ) {
//     console.log(num);
//     num++
// }

// for in
// for (const key in object) {

// }

// array
// let array = [10,20,30,40,50];

// for (const index in array) {
//     console.log(index, array[index]);
// }

// string
// let str = "deepak";

// for (const index in str) {
//     console.log(index, str[index]);
// }

// object 
// let object = {
//     firstName: "deepak"
// }

// for (const key in object) {
//     console.log(key, object[key]);
// }

// for of
// for (const iterator of object) {

// }
// array
// let array = [10,20,30,40,50];

// for (const value of array) {
//     console.log(index);
// }

// string
// let name = "deepak"

// for (const value of name) {
//     console.log(value);
// }

// we cannot use object in for of loop
// let obj = {
//     firstName: "deepak"
// }

// for(let value of obj) {
//     console.log(value);
// }

// while loop
// while (condition) {

// }

// 1  to 10
// let number = 1;

// while(number <= 10) {
//     console.log(number);

//     number++;
// }

// array
// let array = [10,20,30];
// let index = 0;

// while (index < array.length) {
//     console.log(array[index], index);
//     index++;
// }

// do while loop

// do {

// } while (condition);

// let number = 10;

// do {
//     console.log("inside the block");
//     console.log(number);    
//     number--;
// } while (number > 8);

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


// function declaration and defination
// function addition() {
//     let a = 10;
//     let b = 20;

//     console.log(a + b);
// }

// function calling
// addition();

// function arguments and parameters
// parameters
// function addition(num1,num2) {
//    console.log(num1 + num2);
// }

// arguments
// addition(10,20)
// addition(20,20)

// nested functions
// function testing() {
//     console.log("outside test function");
//     function test() {
//         console.log("inside test function");
//     }

//     test();
// }

// testing();
// test();

// local variable
// function testing(c,b) {
//     var a = 10; // local variable

//     console.log(a, b,c);
// }

// testing(10,20)

// we can't use local variable 
// outside the function scope

// console.log(c);  

// global variable
// sum and addition global variable and function
// let sum = 0;

// function addition(a,b) {
//     sum = a + b;
// }

// addition(10,20)

// console.log(sum);

// outer variable
// function testing() {
//     let a = 10 // outer variable
//     function test() {
//         console.log(a);
//     }

//     test();
// }

// testing();

// Default values

// function addition(a, b, c = 0 , d = 0, e = 0) {
//     console.log(a , b , c ,  d , e);

//     console.log(a + b + c +  d + e);
// }

// addition(10, 20)

// returning a value from function
// function addition(a,b) {
//     return a + b;
// }

// console.log(addition(10,20));

// let sum = addition(10,20)

// console.log(sum);

// function addition(a,b) {
//     console.log(a + b);

//     return 10
// }

// console.log(addition(10,20));

// Function expressions
// let addition = function (a, b) {
//     console.log(a, b);
//     console.log("testing");
// }

// addition(10,20);

// arrow function 
// syntax
// let func = () => {

// }

// let addition = (a ,b) => {
//     console.log(a + b);
// }

// remove curly brackets only 
// if only one statement inside the function
// let addition = (a ,b) => console.log(a + b);


// remove return statement only 
// if only one statement inside the function
// let addition = (a ,b) =>  a + b;

// let sum = addition(10,20)

// console.log(sum);

// remove parenthesis only 
// if only one parameter inside the function parenthesis
// let squareOfNumber = num => num*num;

// console.log(squareOfNumber(10));

// callback function

// function calculate(a, b, operator = "+") {
//     switch (operator) {
//         case "+":
//             console.log(a + b);
//             break;
//         case "-":
//             console.log(a - b);
//             break;
//         case "*":
//             console.log(a * b);
//             break;
//         case "/":
//             console.log(a / b);
//             break;
//         case "%":
//             console.log(a % b);
//             break;
//         case "**":
//             console.log(a ** b);
//             break;

//         default:
//             console.log("please enter the valid operator");
//     }
// }

// calculate(10,20, "-")

function calculate(a, b, func) {
    func(a,b)
} 

calculate(10,20,function(a,b) {
    console.log(a + b);
})

calculate(10,20,function(a,b) {
    console.log(a - b);
})

calculate(10,20,function(a,b) {
    console.log(a / b);
})

calculate(10,20,function(a,b) {
    console.log(a % b);
})

calculate(10,20,function(a,b) {
    console.log(a * b);
})

calculate(10,20,function(a,b) {
    console.log(a ** b);
})