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


// let firstName = "deepak"

// function getFirstName() {
//     console.log(firstName);
// }

// let emp = {
//     firstName: "deepak",
//     getFirstName: function() {
//         return this.firstName
//     }
// }

// console.log(emp);

// syntax
// class className {
//     // property

//     // methods
// }

// example
// class Employee {
//     // properties
//     firstName = "deepak";
//     lastName = "singh";

//     // methods
//     getFullName() {
//         console.log("getFullName");
//     }
// }

// object
// let emp = new Employee()
// console.log(emp.firstName);
// console.log(emp['lastName']);
// emp.getFullName();

// this
// class Employee {
//     // properties
//     firstName = "deepak";
//     lastName = "singh";

//     // methods
//     getFullName() {
//         console.log(this.firstName);
//         console.log(this.lastName);
//         this.testing()
//     }

//     testing = () => {
//         console.log(this);
//     }
// }

// let emp = new Employee()
// console.log(emp);
// emp.getFullName();

// constructor
// class Employee {
//     // properties
//     firstName = "deepak";
//     lastName = "singh";

//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     // methods
//     getFullName() {
//         console.log("getFullName");
//     }
// }

// let emp = new Employee("deepak", "singh");
// console.log(emp);

// let emp1 = new Employee("suraj", "singh");
// console.log(emp1);


// Class Expression
// let Employee = class {
//     // properties
//     firstName = "deepak";
//     lastName = "singh";

//     // methods
//     getFullName() {
//         console.log("getFullName");
//     }
// }

// let emp = new Employee()
// console.log(emp);

// setter and getter
// class Employee { 
//     firstName = "deepak";

//     // get
//     get getFirstName() {
//         return this.firstName;
//     }

//     // set
//     set setFirstName(value) {
//         this.firstName = value;
//     }
// }

// let emp = new Employee()

// set function called
// emp.setFirstName = "suraj"

// get function called
// console.log(emp.getFirstName);

// Computed names […]
// class Employee { 
//     ["first" + "Name"] = "deepak";

//     ['get' + 'First' +  'Name'] () {
//         return this.firstName;
//     }

//     constructor(key, value) {
//         this[key] = value;
//     }
// }

// let emp = new Employee('firstName', 'deepak');

// console.log(emp.firstName);
// console.log(emp.getFirstName());

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
//     className = "ParentClass";

//     getClassName() {
//         return this.className;
//     }
// }

// class ChildClass extends ParentClass {
    
// }

// let child = new ChildClass();
// console.log(child.className);
// console.log(child.getClassName());

// method overloading
// class Area {
//     area(radius) {
//         return Math.PI * radius * radius;
//     }

//     area(length, breadth) {
//         return length * breadth;
//     }
// }

// let a = new Area();
// console.log(a);
// console.log(a.area(14, 10));

// method overriding
class ParentClass {
    className = "ParentClass";

    getClassName() {
        return this.className;
    }
}

class ChildClass extends ParentClass {
    getClassName() {
        return this.className +  " ChildClass ";
    }
}

let child = new ChildClass()
console.log(child.getClassName());



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

/**
 * Extending built-in classes
 * 
 */

/**
 * 
 * Class checking: "instanceof"
 * 
 * The instanceof operator
 * 
 */
