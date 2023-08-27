
//syntax
// let promise =  new promise ((resolve, reject)=>{

// })


// let item = ['pen','pencil']
// let promise =  new Promise ((resolve, reject)=>{
//     if(item.includes('pen')){
//         resolve("item is availible")
//     }else{
//         reject("item not available")
//     }
//     })

// console.log(promise);

// //then
// promise.then((data)=>{
//     console.log(data);
// })

// //catch
// promise.catch((error)=>{
//     console.log(error);
// })

// promise.then((data) => {
//         console.log(data);
//     }).catch((error) => {
//         console.log(error);
//     })

// normal code execute first
// let promise = new Promise((resolve, reject) => {
//     resolve('Resolved')
// })
// promise.then((data) => {
//          console.log(data);
//     })
// console.log("After Promise");

// for (let number = 1; number < 10; number++) {
//     console.log(number);
// }

// promise which has small time excution executes first
//set time out will be excution on according to the time

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 1')
//     }, 4000)
// });

// promise1.then((data) => {
//          console.log(data);
// })
    


// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 2')
//     }, 0)
// });

// promise2.then((data) => {
//     console.log(data);
// })



// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 3')
//     }, 3000)
// });

// promise3.then((data) => {
//     console.log(data);
// })

// let promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 4')
//     }, 1000)
// });

// promise4.then((data) => {
//     console.log(data);
// })


//callback hell function

// function test(callback) {
//     callback()
// }

// test(()=>{
//     console.log("Test 1");
//     test(()=>{
//         console.log("Test 2");
//         test(()=>{
//             console.log("Test 3");
//     })
// })
// })

// test(()=> {
//     console.log("Test 1");
//     test(() => {
//         console.log("Test 2");
//         test(()=> {
//             console.log("Test 3");
//             test(() => {
//                 console.log("Test 4");
//             })
//         })
//     })
// })


//solition of callback hell function

// let promise = new Promise ((resolve,reject)=>{
//     resolve('test')
// })

// console.log(promise);

// promise.then((data)=>{
//     console.log("Test 1");
// }).then((data)=>{
//     console.log("Test 2");
// }).then((data)=>{
//     console.log("Test 3");
// })



























// let fetch = fetch('https://restcountries.com/v3.1.all');

// reponse.then((data)=>{
//     console.log(data);
//     return data.json();
// })
