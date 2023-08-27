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

// let object = {
//     firstName: "deepak",
//     lastName: "singh",
//     testing: function() {
//         console.log("testing");
//     },
//     "full name": "deepak singh gusain"
// }

// .
// console.log(object.firstName);
// console.log(object.lastName);
// object.testing()

// []
// console.log(object['firstName']);
// console.log(object['lastName']);
// object['testing']()
// console.log(object['full name']);

// for (const key in object) {
//    console.log(key, object[key]);
// }

// Computed properties

// let fullName = "deepak";

// let object = {
//     [fullName]: 10,
//     fullName // fullName: "deepak"
// }

// console.log(object);

// Property names limitations
// let object = {
//     _firstName : "deepak",
//     $firstName: "deepak",
//     // !firstName: "deepak"
//     // 123name: "deepak"
//     name123: "deepak",
//     let : "let",
//     var : "var",
//     const: "const"
// }

// console.log("_firstName" in object);

// for (const key in object) {
//     console.log(key, object[key]);
// }

// function testing() {
//     return {
//         firstName: "deepak"
//     }
// }

// let object  = testing();

// console.log(object);




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

// primitive types
// let number = 10;

// let number1 = number;
// number1 = 12

// console.log(number, number1);

// reference type 
// let array = [10,20,30,40];
// let array2 = array;

// array2[array2.length] = 50;

// console.log(array, array2);

// let a = 10;
// let b = 10;

// console.log(a === b);

// let array = [10,20,30,40,50];
// let array1 = array;

// console.log(array === array1);

// let object = {

// }

// let object1 = object

// console.log(object === object1);

// Cloning and merging, Object.assign

// let object = {
//     firstName: "deepak"
// }

// let object1 = {
//     age: 10,
//     hobbies: "cricket"
// }

// cloning
// let object1 = Object.assign({}, object, {age: 10});

// merging
// let object2 = Object.assign(object, object1)

// console.log(object, object2, object === object2);

// structureClone
// let object = {
//     firstName: "deepak",
//     lastName: "singh",
//     age: 10,
//     hobbies: "cricket"
// }

// let object1 = structuredClone(object);
// object1.testing = "testing";

// console.log(object);
// console.log(object1);
// console.log(object === object1);

/**
 * 
 * Garbage collection
 * 
 */

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
//     getFirstName: function() {
//         return this.firstName;
//     }
// }

// let firstName = object.getFirstName()
// console.log(firstName);

// Method shorthand
// let object = {
//     firstName: "deepak",
//     getFirstName() {
//         console.log(this);
//         return this.firstName;
//     }
// }

// let firstName = object.getFirstName()
// console.log(firstName);

// arrow function
// let object = {
//     firstName: "deepak",
//     getFirstName: () => {
//         console.log(this);
//         return this.firstName;
//     }
// }

// let firstName = object.getFirstName()
// console.log(firstName);


/**
 * Constructor, operator "new"
 * 
 * Constructor function
 * 
 * Constructor mode test: new.target
 * 
 * Return from constructors
 * 
 * Methods in constructor
 */

// function Employee(name, email) {
//     return {
//         name,
//         email
//     }
// }

// let emp1 = Employee("deepak", "deepak@gmail.com")
// let emp2 = Employee("suraj", "suraj@gmail.com")


// console.log(emp1);
// console.log(emp2);

// let name = "deepak"

// let email = "deepak@gmail.com"

// function details() {
//     return {
//         name,
//         email
//     }
// }

// function Employee(name, email) {
//     this.name = name;
//     this.email = email;
//     this.details =  () => {
//         return this.name + " " + this.email;
//     }
// }

// let emp = new Employee("deepak", "deepak@gmail.com")
// console.log(emp);
// console.log(emp.details());

// function testing() {
//     console.log(new.target);
// }

// new testing

// console.log(testing);


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


// let object = {
//     name: {
//         firstName: "deepak",
//         lastName: "singh"
//     },
//     nums1: [10,20,30],
//     testing() {
//         console.log("testing");

//         return "testing"
//     }
// }

// // object
// console.log(object.name?.firstName);

// // array
// console.log(object.nums?.[0]);

// // function
// console.log(object.testing?.())


/**
 * 
 * Symbol type
 * 
 * Symbols 
 * “Hidden” properties
 * Symbols in an object literal
 * Symbols are skipped by for…in
 * Global symbols
 * Symbol.keyFor
 */

let sym = Symbol('id');

// symbol
// console.log(sym);
// console.log(sym.description);

// sym as a literal
// let object = {
//     [sym]: 10,
//     age: 10
// }

// symbol literal value access
// console.log(object[sym]);

// can i access symbol literal value in for in No
// for (const key in object) {
//     console.log(key, object[key]);
// }

// global symbol
let id = Symbol.for('id');
let id1 = Symbol.for('id');
console.log(id.description); // local and global
console.log(Symbol.keyFor(id)); // global

console.log(id === id1);