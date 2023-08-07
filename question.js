//w.r.t a custom function which has same property as is infinte as is NAN?

// console.log(Math.pow(2,10));

// console.log(2**4);

// w.r.t function to 2nd larget number and 2nd smallest number in an array 



//SECOND SMALLEST NUMBER

// let myarray=[20,65,96,10,25];
// myarray.sort()
// console.log(myarray)
// console.log(myarray[1]);

// let myarray=[20,65,96,10,25,89,65];
//myarray.sort()
// console.log("SECOND LARGEST NUMBER", myarray.sort()[myarray.length-2])
// console.log(myarray[]);


// function secondLarget(arr) {

//     let max = -Infinity, result = -Infinity;
  
//     for (const value of arr) {
//       const nr = Number(value)
  
//       if (nr > max) {
//         [result, max] = [max, nr] 
//       } else if (nr < max && nr > result) {
//         result = nr; // new second biggest
//       }
//     }
  
//     return result;
//   }
  
//   const arr = ['20','120','111','215','54','78'];
//   console.log(secondLarget(arr));


  
//   var arr = [ 6, 3, 5, 2, 9 ];
//   var smallest = arr[0]; 
//   var secondSmallest = arr[1]; 

//   for(var i = 0; i < arr.length; i++) { 
//       if(arr[i] < smallest) {  
//           smallest = arr[i];  
//       }  

//       if(arr[i] > smallest && arr[i] < secondSmallest ) { 
//           secondSmallest = arr[i]; 
//       } 
//   } 

//   console.log(secondSmallest);


//write a function to short an array value with a given type.
//1.accendind order
//2.decending order


//acending order

// let arr = [30,12,68,10,98,5,54]

// //console.log("unsorted array", arr)
// arr.sort((a,b)=> a-b)
// console.log(arr);

//decending order
// let arr = [30,12,68,10,98,5,54]

// arr.sort((a,b)=> b-a)
// console.log(arr);

//remove duplicate element from an elelment

// let arr = [1,2,3,4,5,6,5,6,7,8,2,3,4,4];
  
// function removeDuplicates(arr) {
//     let unique = [];
//     for (i = 0; i < arr.length; i++) {
//         if (unique.indexOf(arr[i]) === -1) {
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
// console.log(removeDuplicates(arr));


//reverse an array without using reverse function?


// let original_array = [1, 2, 3, 4];
 
// let reversed_array = [];

// for (let i = original_array.length - 1; i >= 0; i--) {
//     reversed_array.push(original_array[i]);
// }

// console.log("Reversed Array");
// console.log(reversed_array);











