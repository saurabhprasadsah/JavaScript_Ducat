//console.log("hello world")
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


// firstName ="Saurabh";
// console.log(firstName);


// //var
// var firstName ="saurabh"
// firstName ="JUHI"
// console.log(firstName);

// var firstName ="saurabh";

// var PI =3.14;
// var PI =4.34;
// console.log(firstName);
// console.log(PI);


/*Data types
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

//integer type datatypes
// let number = 65;
// console.log(number);
// console.log(typeof number);

//BigINT types
// let number = 444644416161611611111161161616161144161n;
// console.log("Number", typeof number , number );

// * Boolean (logical type)

// let number = true;
// console.log(typeof number);


//undefiend
// let number;
// console.log(number);


//array

// let b=10;
// let c =20;
// let d =30;
// let array =[b,c,d]

// console.log (array);


//string 
// let str = 'sfasfa\\fsdasfd';

// //let str = "deepak singh";

// //str = "jhon"

// console.log(str, typeof str);

// object

// let array = [
//     "deepak@gmail.com",
//     "deepak", 
// ];

// let array =[
//         "saurabh",
//         "kumar"
// ]

// console.log(array[0]);
// console.log(array[1]);

//object

// let object = {
//     email: "deepak@gmail.com",
//     name:"deepak",
// }

// object.age =10;

// console.log(object);
// console.log(typeof object);

// console.log(object.name);
// console.log(object.email);


//Symbol
// let sym = Symbol('id')

// console.log(sym);
// const sym1 = Symbol();
// const sym2 = Symbol("foo");
// const sym3 = Symbol("foo");


// console.log(sym1);
// console.log(sym2);
// console.log(sym3);


/**
 * Interaction: alert, prompt, confirm
 * 
 * alert
 * prompt
 * confirm
 */


//alert("hello world")

// //prompt
// let name= prompt("enter your name here?")

// console.log(name);


//confirm

// let result= confirm("are you sure want to delete your account?")

// console.log("result");


// document.write()
//document.write("hello from document.write()")

// console
// console.log("hello form console.log")
// console.warn("hello from console.warn()")
// console.dir(window)

/* Type Conversions
 * 
 * String conversion
 * Numeric Conversion
 * Boolean Conversion
 */

/*String conversion
* let number =10;
* console.log(typeof number, number);

* let str = String(number)
* console.log(typeof str, str);

* let bool = true;

 */ 
//console.log(typeof bool,bool);

//Numeric conversion

// let string = "saurabh";
// console.log(string, typeof string);

// let number = Number(string);
// console.log(number,typeof number);

//Bool

// let bool = false;
// console.log(bool, typeof bool);


// let number = Number(bool);
// console.log(number,typeof number);



// String concatenation with binary +
// let firstname = "deepak"
// let secondname = "singh"

// let fullname = firstname + " " + secondname;
// console.log(fullname);


// let firstName ="saurabh";
// let lastName="kumar";
// let fullname = firstName+" "+lastName;
// console.log(fullname);



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
//  // if (condition) {

//  }

// let number = 16

// if (number % 2 == 0){

//     console.log("number is even");
// }
// else{
//     console.log("number is odd");
// }


// let num= 13;

// if (num % 2 == 0){
//     console.log("numer is even");
// }
// else{
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

/*let number =25;

if (number % 2 ==0 & number % 5 ==0){
    console.log("this number is divisible by 2 and 5");
}else if(number % 5 ==0 )
{
console.log("this number is divisible by 5");
}
else if( number % 2 ==0){
    console.log("this number is divisible by 2");
}else {
    console.log("number is not diviible by 2 and 5");
}
*/



// class ParentClass{
//     static counter =10;

//     getcounter(){
//         return this.counter;

//     }
// }

// console.log(ParentClass.counter);


class employee{
    firstname ="saurabh";
    //private
    #salary =1000;

    
}

let obj = new employee();
console.log(obj.firstname);
console.log(obj.salary);

