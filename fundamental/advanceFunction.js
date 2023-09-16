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


/*
varible- scope
Nested-function
Lexical-function

*/

//var ka apna koi block scope nhi hota 

//IIFE(IMEDIATE INVOKE Function EXECUTION)

// (()=>{
//     console.log("HELLO IIFE");
// })()




