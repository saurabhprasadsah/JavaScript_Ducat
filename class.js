/**
 * 
 * Class basic syntax
 * 
 * The “class” syntax
 * 
 * What is a class?
 * 
 * Class Expression
 * 
 * Getters/setters
 * 
 * Computed names […]
 * 
 * Class fields
 * 
 * Making bound methods with class fields
 */

// class Employee {
//     firstName = "deepak";

//     getFirstName() {
//         console.log("getFirstName");
//     }
// }

// let emp = new Employee();

// console.log(emp);

// let Employee = class {
//     firstName = "deepak";

//     getFirstName() {
//         console.log("getFirstName");
//     }
// }

// let emp = new Employee();

// console.log(emp);

// class Employee {
//     firstName;

//     constructor(name) {
//         this.firstName = name;
//     }

//     getFirstName() {
//         console.log("getFirstName");
//     }
// }

// let emp = new Employee("deepak singh");

// console.log(emp);

// setter / getter
// class Employee {
//     firstName;

//     // setter method
//     set setFirstName(name) {
//         this.firstName = name;
//     }

//     // getter method
//     get getFirstName() {
//         return this.firstName;
//     }
// }

// let emp = new Employee;
// emp.setFirstName = "deepak"

// console.log(emp);

// // console.log(emp.getFirstName);
// class Test {
//     ["get" + "Testing"]() {
//         console.log("testing function called");
//     }
// }

// let t = new Test();
// t.getTesting()


/**
 * Class inheritance
 * 
 * The “extends” keyword
 * 
 * Overriding a method
 * 
 * Overriding constructor
 */

// class ParentClass {
//     className;

//     constructor(name) {
//         this.className = name;
//     }

//     getClassName() {
//         return this.className;
//     }
// }

// class ChildClass extends ParentClass {

//     constructor(name) {
//         super(name);
//         this.className = name;
//     }

//     getClassName() {
//         return this.className + " ChildClass";
//     }
// }

// let child = new ChildClass("ParentClass")
// console.log(child);
// console.log(child.className);
// console.log(child.getClassName());

/**
 * Static properties and methods
 * 
 * Static properties
 * 
 * Inheritance of static properties and methods
 */

/**
 * 
 * Private and protected properties and methods
 * 
 * Private
 * 
 */
