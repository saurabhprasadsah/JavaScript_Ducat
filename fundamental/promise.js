
//syntax
// let promise =  new promise ((resolve, reject)=>{

// })


let item = ['pen','pencil']
let promise =  new promise ((resolve, reject)=>{
    if(item.includes('pen')){
        resolve("item is availible")
    }else{
        reject("item not available")
    }

     })

console.log(promise);
