//w.r.t the program Count the number? 

// function countDigits(input) {
//     var digitCount = 0;
//     var str = String(input);
  
//     for (var i = 0; i < str.length; i++) {

//       if (/\d/.test(str.charAt(i))) {
//         digitCount++;
//       }
//     }
//     return digitCount;
//   }
  
//   var input = 565456545;
//   var result = countDigits(input);
//   console.log("Total number of digits: " + result);


//write a program to revers the number?
// function reverseNumber(number) {
//     var reversed = 0;
//     while (number !== 0) {
//       var digit = number % 10;
//       reversed = (reversed * 10) + digit;
//       number = Math.floor(number / 10);
//     }
  
//     return reversed;
//   }
  

//   var number = 12345;
//   var reversedNumber = reverseNumber(number);
//   console.log("Reversed number: " + reversedNumber);

  
//write a sort the number?  


//call back function
/*function calculate(a,b,func){
    func(a,b)
}
calculate(10,20,function(a,b){
    console.log(a+b)
})
*/


//computed propertied
/* let fullname = 'saurabh'

 function test(){
  return{
    firtname:"raju"
  }
 }
console.log(test);
*/

/*share only address

reference type  
let array=[10,20,30];
let array2 = array;
array2[array2.length] =50;
console.log(array,array2)
console.log(array2)


*/



//var --> old school 
/*var firstName = "saurabh";

var firstName ="raju"; // this will be overwright the value.

console.log(firstName);

var PI =3.14; //when value varible wil be created the same varible will be created.
var PI =2.1;
console.log("PI");

*/


//let --> model school

/*let firstName = "saurabh"

let firstName ="saurabh" // we can use the varible once when we will cretaed.
console.log(firstName);
const -->model school

const firstName ="saurabh";

 firstName = "raju" --> when we varible will be created then no created another time.
console.log(firstName);

*/


/*DATA TYPES

let number = 1111111;
console.log(number, typeof number);


let number = true;
console.log(number, typeof number);
*/

//Object

/*let array = [10,20,30,40,50]

console.log(array[0]);
console.log(array[3]);

let array = ["deepak", 'deepak@gmail.com']

console.log(array[0],array[1]);

let Object ={
    name :"saurabh"
}

console.log(Object)

let Name = prompt("enter  your name");
console.log(Name)

let number = prompt("enter your number")

console.log(number,typeof number);

*/























