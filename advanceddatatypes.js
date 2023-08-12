// let a =" kdgagda";

// let b = 'akdadbabdabb';
 
// let c = `dadajbdkjbaldnlandlnand
// ${a}
// lkadlnadnandlnad
// kadaldanlda`;
// console.log(c);

// let a = "saurabh\\kumar"
// console.log(a);
// let name = "saurabh\\kumar";

// console.log(name.length);



//accsesing character
// let name= "saurabh kumar";
// console.log(name[0]);
// console.log(name[2]);

// for (const key in name) {
//     console.log(name);
// }

// let name = "saurabhkumar" /// string are immutable

// name[1] ="e"
// console.log(name);

//let name = "deepak singh gussain"

// console.log(name.includes('deepak'));

// console.log(name.includes('d'));

 //console.log(name.endsWith('ain'));

//console.log(name.startsWith('dee'));



//INDEXOF

// let name ="saurabhkumar"

// console.log(name.indexOf('saurabh'));

//lastindexof

//  let name ="saurabhkumar";



//  console.log(name.lastIndexOf("r"));




//CAMPARING STRING...

// let name = "deepak kumar gussain"

// for (const value of name) {
//     console.log(value.codePointAt());
    
// }

//Array

//[]

// let array=[10,30,40,50]

// console.log(array);

//new array
// let array = new Array(10);

// console.log(array);

//ARRAY.OF
// let array = Array.OF(10);

// console.log(array);  


//Multidimensional array


// let array =[[10,20],
//     [30,40,50], 
//        [40,65,85,45]
// ]
// console.log(array[2][3]);


//ARRAY FROM
// let array = Array.from([10,20,30]);

// console.log(array);



// Push arrray

// let array = [10,20,30,40,50,60]

// let returnValue = array.push(1000)
// console.log(array, returnValue)

// let array = [10,20,30,40,50,60]

//pop will be remove the value from the array

// let returnValue =  array.pop()
// console.log(array, returnValue);

// let array = [10,20,30,40,50,60]
//unshift will be add the value from the 1st index
// let = array.unshift(1000)
// console.log(array)

// let array = [10,20,30,40,50,60]
//shift will be remove the first value form the index
// let returnValue =array.shift()
// console.log(array,returnValue);
//splice (add,update, and delete)
// let array =[10,20,30,40,50]
//delete the value
// let returnValue = array.splice(2,2)

// console.log(array,returnValue);

// let array =[10,20,30,40,50]
//add
// let returnValue = array.splice(2,2,100,200)
// console.log(array,returnValue);

// let array =[10,20,30,40,50]

// let  = array.splice(2,0,100,200)
// console.log(array);


/**
 * 
 * Iterables
 * String is iterable
 * Iterables and array-likes
 */

// let array = [10,20,30,40]

// for (const value of array){
//     console.log(array);
// }

// let str = "saurabh"

// for (const value of str){
//     console.log(str);
// }

//object is not iterable in javascript
// let object = {
// firstname:"saurabh",
// lastname:"kumar",

// }
// console.log(object);

// for(const key of object){
//     console.log(key);
// }


/**
 * 
 * Map and Set
 * 
 * Map
 * new Map() – creates the map.
 * map.set(key, value) – stores the value by the key.
 * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
 * map.has(key) – returns true if the key exists, false otherwise.
 * map.delete(key) – removes the value by the key.
 * map.clear() – removes everything from the map.
 * map.size – returns the current element count.
 * 
 * Iteration over Map
 * map.keys() – returns an iterable for keys,
 * map.values() – returns an iterable for values,
 * map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
 * 
 * 
 * Set
 * new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
 * set.add(value) – adds a value, returns the set itself.
 * set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
 * set.has(value) – returns true if the value exists in the set, otherwise false.
 * set.clear() – removes everything from the set.
 * set.size – is the elements count.
 * 
 * Iteration over Set
 */



// new Map()

// let map = new Map();
// map.set(1,  10)
// map.set(2, 20)
// map.set(3, 30)
// map.set(4, 40)
// map.set(5, 50)
// map.set(6, 60)
// map.set(7, 70)
// map.set(8, 80)

// console.log(map.get(4));

// console.log(map.has(5));

// //console.log(map.delete(5));
// console.log(map);

//map.clear()
// console.log(map);


//Destructing assingment

// let array = [10,20,30,40];

// let [a,b,c,d] = array;
// console.log(a,b,c,d);


///pass the default the value
// let array =[10];

// let [a,b=10,c=30] = array;

// console.log(a,b,c);


//object 


// let object={
//     firtName:"saurabh",
//     lastName:"kumar",
//     age:10
// }


//call the value will be on the key pair
// let {firtName,lastName,age,test ="test"} =object

//rename the key of objects
// let {firstName:first,lastName,age} = object

//change the name of the key and call the key value

// console.log(first,lastName,age);

// console.log(object);









