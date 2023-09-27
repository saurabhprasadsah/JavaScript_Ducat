/**
 * 
 * Objects
 * 
 * Literals and properties
 * Square brackets
 * Computed properties
 * Property value shorthand
 * Property names limitations
 * Property existence test, “in” operator
 * The "for..in" loop
 */

/**
    let object = {
    firstName: "deepak",
    lastName: "singh",
    test: function() {
        console.log("testing");
    },
    "full name": "deepak singh"
}

.
console.log(object.firstName);
console.log(object.lastName);
object.test()
console.log(object.full name); 

[]
console.log(object['firstName']);
console.log(object['lastName']);
object['test']()
console.log(object['full name']);

Computed properties

let firstName = "testing"

let object = {
    // [firstName] : firstName
    firstName  // firstName: firstName
}

console.log(object);

Property names limitations
let object = {
    _firstName: "deepak",
    $firstName: "deepak",
    name1: "deepak",
    var : "var"
}

Property existence test, “in” operator
console.log("var" in object);

 The "for..in" loop
for (const key in object) {
   console.log(key, object[key]);
}

Property value shorthand
function testing() {
    return {
        name: "deepak"
    }
}

let obj = testing()

console.log(obj);

**/

/**
 * 
 * Object references and copying
 * 
 * Comparison by reference
 * 
 * Cloning and merging, Object.assign
 * 
 * Nested cloning
 * 
 * structuredClone
 */

// premitive types
// let a = 10;

// let b = a;

// reference types

// let object = {
//     firstName: "deepak"
// }

// let object2 = object;

// object2.firstName = "Jhon"
// console.log(object, object2);

// Comparison by reference

// let a = {}

// let b = a

// console.log(a === b);

// Cloning and merging, Object.assign

// let object = {
//     firstName: "deepak",
//     lastName: "singh"
// }

// let object3 = {
//     age: 10
// }

// copy
// let object2 = Object.assign({},object);

// merge
// Object.assign(object, object3)

// console.log(object);

// structuredClone

// let object = {
//     firstName: "deepak",
//     lastName: "singh"
// }

// let object2 = structuredClone(object);

// console.log(object, object2);

/**
 * 
 * Object methods, "this"
 * Method shorthand
 * “this” in methods
 * “this” is not bound
 * Arrow functions have no “this”
 */

// let object = {
//     firstName: "deepak",
//     lastName: "singh",
//     getFullName: function () {
//         console.log(this.firstName + ' ' + this.lastName);
//     }
// }

// let object = {
//     firstName: "deepak",
//     lastName: "singh",
//     getFullName() { // method shorthand
//         console.log(this.firstName + ' ' + this.lastName);
//     }
// }

// let object = {
//     firstName: "deepak",
//     lastName: "singh",
//     getFullName: () => {
//         console.log(this) // window object
//         console.log(this.firstName + ' ' + this.lastName); // undefined undefined
//     }
// }

// object.getFullName();


/**
 * 
 * Optional chaining '?.'
 * 
 * The “non-existing property” problem
 * 
 * Optional chaining
 * 
 * Short-circuiting
 * 
 * Other variants: ?.(), ?.[]
 */

let object = {
    name1: {
        firstName: "deepak",
        lastName: "singh"
    },
    num: [10,20,30],
    testing1: function() {
        console.log("testing");
    }
}

// object property as object
// console.log(object.name?.firstName);
// console.log(object.name?.lastName);

// array
// console.log(object.nums?.[0]);

// function
object.testing?.()
