/**
 * Property flags and descriptors
 * 
 * Property flags
 * writable – if true, the value can be changed, otherwise it’s read-only.
 * enumerable – if true, then listed in loops, otherwise not listed.
 * configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
 * 
 * Non-writable
 * 
 * Non-enumerable
 * 
 * Non-configurable
 * 
 * Object.defineProperty
 * 
 * Object.getOwnPropertyDescriptors
 * 
 * Sealing an object globally
 * Object.preventExtensions(obj)
 * Object.seal(obj)
 * Object.freeze(obj)
 * Object.isExtensible(obj)
 * Object.isSealed(obj)
 * Object.isFrozen(obj)
 * 
 */

// let object = {
//     firstName: 'John',
//     lastName: 'doe'
// }

// console.log(object);

// let descriptor = Object.getOwnPropertyDescriptors(object);

// console.log(descriptor);

// writable 
// let object = {
//     firstName: 'John',
//     lastName: 'doe'
// }

// Object.defineProperty(object, 'firstName', {
//     writable: false
// })

// let descriptor = Object.getOwnPropertyDescriptors(object);

// console.log(descriptor);

// object.firstName = "deepak"

// console.log(object);

// configurable
// let object = {
//     firstName: 'John',
//     lastName: 'doe'
// }

// Object.defineProperty(object, 'lastName', {
//     configurable: false
// })

// delete object.lastName;
// console.log(object);

// enumerable
// let object = {
//     firstName: 'John',
//     lastName: 'doe'
// }

// Object.defineProperty(object, 'firstName', {
//     enumerable: false
// })

// console.log(object);

// for (const key in object) {
//     console.log(key , object[key]);
// }

/**
 * 
 * Property getters and setters
 * 
 * Getters and setters
 * 
 * Accessor descriptors
 * get – a function without arguments, that works when a property is read,
 * set – a function with one argument, that is called when the property is set,
 * 
 * Smarter getters/setters
 * 
 */

// getter
// let object = {
//     firstName: 'John',
//     lastName: 'doe',
//     getFirstName: function() {
//         return this.firstName;
//     },
//     get getfirstname() {
//         return this.firstName;
//     }
// }

// // .
// console.log(object.firstName);

// // []
// console.log(object['firstName']);

// // method
// console.log(object.getFirstName());

// // getter
// console.log(object.getfullname);

// setter
let object = {
    firstName: 'John',
    lastName: 'doe',
    setFirstName: function(name) {
        this.firstName = name;
    },
    set setfirstname(name){
        this.firstName = name;
    }
}

// . []
object.firstName = "Deepak"
object['firstName'] = "Deepak"

// method
object.setFirstName('deepak')

// setter
object.setfirstname = "deepak"