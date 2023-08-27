// syntax
// let promise = new Promise((resolve, reject)=> {
// });

// example
// let items = ['pen', 'paper'];

// let promise = new Promise((resolve, reject)=> {
//     if(items.includes('pen')){
//         resolve("Item is available")
//     }else {
//         reject("Item is not available")
//     }
// });

// console.log(promise);

// then
// promise.then((data) => {
//     console.log(data);
// })

// catch
// promise.catch((error) => {
//     console.log(error);
// })

// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

// normal code execute first
// let promise = new Promise((resolve, reject) => {
//     resolve('Resolved')
// })

// promise.then((data) => {
//     console.log(data);
// })

// console.log("After Promise");

// for (let number = 1; number < 10; number++) {
//     console.log(number);
// }

// promise which has small time excution executes first
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 1')
//     }, 4000)
// });

// promise1.then((data) => {
//     console.log(data);
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

// callback hell function
// function test(callback) {
//     callback()
// }

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

// solution of callback hell function
// let promise = new Promise((resolve, reject) => {
//     resolve('test')
// });

// promise.then((data)=> {
//     console.log("Test 1");
// }).then((data) => {
//     console.log("Test 2");
// }).then((data) => {
//     console.log("Test 3");
// }).then((data) => {
//     console.log("Test 4");
// })

// data tranfer from one then to another
// let promise = new Promise((resolve, reject) => {
//     resolve("Test");
// })

// promise.then((data) => {
//     console.log(data);
//     // throw new Error('Error occur');
//     return data;
// }).then((data) => {

//     console.log(data);
// }).catch((error)=> {
//     console.log(error.message);
// })

// fetch API
// let response = fetch('https://restcountries.com/v3.1/all');

// response.then((data) => {
//     return data.json();
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error.message);
// })

// async await
async function getCountries() {
    let response = await fetch('https://restcountries.com/v3.1/all');

    let data = await response.json();

    return data
}

// console.log(getCountries());
getCountries().then((data) => {
    console.log(data);
})

