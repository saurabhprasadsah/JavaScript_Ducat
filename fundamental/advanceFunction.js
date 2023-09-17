/**
 * advanced function
 * 
 * Recursion and stack
 * THE Excution context and stack
 * Rest parameters and spread syntax
 * 
 * Rest parametrs
 * spread
 * copy and array/objects via speed
 * operator
 *
 * 
 */

//recursion 

// let value = 10;
// function addition(value){
//     let sum = 0;
//     if( value>0){
//         sum = value +addition(value-1);
//     }
//     return sum
// }
// console.log(addition(value));

//stack function 

// function a(){
//     console.log("a");
//     b();
// }
// function b(){
//     console.log("b");
//     c();
// }

// function c(){
//     console.log("C");
// }
// a()


//value will be shown as a,b,c
/*
a
b
c
*/


/* hosting function--> call first the n it should be define as */
// console.log(a);
// a =10    


//Rest parameters
// function addition(...nums){
//     let sum=0;
//     for (const value of nums){
//         sum+=value;
//        }
//        console.log(sum);
// }
// addition(10,50,30)


//spread opeartor/Parameters


// let array =[10,20,30,40,90];

// console.log(array);
// console.log(...array);

// let array = [10,20,30,40,50];
//spread operator
// let array2 = [...array]
// console.log(array);
// console.log(array2);
// array2.push(10000);
// console.log(array);
// console.log(array2);


//objects

// let objects ={
//     firstName :"saurabh",
//     firstName:"raju", 
// }

// let obj2 = {...objects}
// obj2.age=10;

// objects.name="saurabh"

// console.log(objects);
// console.log(obj2);


//objects
// let objects ={
//     first : "saurabh",
//     first:"raju"
// }

// console.log(objects);



//deepak sir code 

/**
 * Variable scope 
 *  
 * 
 * Nested functions
 * 
 * Lexical Environment
 * 
 */

// Nested functions
// function testing() {
//     function t() {
//         console.log("t");
//     }

//     t();
// }

// testing();

// // Lexical Environment
// let a = 10;

// function testing() {

//     function t() {
//         console.log(a);
//     }

//     t();
// }

// testing();

/**
 * 
 * The old "var"
 * “var” has no block scope
 * “var” tolerates redeclarations
 * “var” variables can be declared below their use
 * 
 * IIFE
 */

// {
//     var firstName = 'deepak'
// }

// console.log(firstName);

// let firstName = "deepak"

// {
//     let firstName = "John";
//     console.log(firstName);
// }

// var firstName = "deepak"
// var firstName = "john"
// console.log(firstName);

// function testing(b) {
//     var a = 10;
//     console.log(a, b);
// }

// testing(10)
// console.log(b);

// IIFE
// (() => {
//     console.log("IIFE");
// })()



//endfor code




/*
varible- scope
Nested-function
Lexical-function

*/

//Nested function

// function testing(){
//     function t(){
//         console.log("t");
//     }
//     t();
// }
// testing();


//Lexical environment

// let a =10;
// function testing(){
//     function t (){
//         console.log(a);
//     }
//     t();
// }
// testing();





/**
 * 
 * The old "var"
 * “var” has no block scope
 * “var” tolerates redeclarations
 * “var” variables can be declared below their use
 * 
 * IIFE
 */

//  {
//      var firstName = 'deepak'
//  }
// console.log(firstName);


// let firstName = "deepak"

//  {
//      let firstName = "raju";
//      console.log(firstName);
//  }

























//var ka apna koi block scope nhi hota 

//IIFE(IMEDIATE INVOKE Function EXECUTION)

// (()=>{
//     console.log("HELLO IIFE");
// })()

/* closers ->closers is function which hold the parent value in a memory ! */


// function testing(){
//     let a =10;
//     let b=20;
//     let c = 40;

//     //this function holds the value of the a,b,c
//     return function(){
//         console.log(a+b,c);
//     }
// }

// let t = testing()
// console.log(t);
// t();

