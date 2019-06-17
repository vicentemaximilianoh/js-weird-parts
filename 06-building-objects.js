
 /** - history of JS
 * Javascript != Java, just marketing!
 *
 */

 /**
 * BUILDING OBJECTS
 * - literal syntax
 * - constructor (new keyword)
 * - Object.create
 */

/** - Function constructors:
 *  Normal function that is used to construct objects. 'this' variable points
 *  a new object, and that object is returned from the construction automatically.
 * - 'new' operator creates an empty object
 * - call the function.
 * - execution context is created with 'this' object
 * - points to the empty object created by 'new' operator
 * - under the hood JS engine return 'this' under the hood.
 */


function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    // return this;// this is done by JS engine under the hood.
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var max = new Person('Max', 'Vicente');
console.log(max);

var marisol = new Person('Marisol', 'Galizia');
console.log(marisol);

// prototype property is used by the new operator.
// obj.prototype points to prototype of the function constructor.
console.log(max.getFullName());
console.log(marisol.getFullName());

// I can ad functions in any time after the function constructor was created.
Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}
console.log(max.getFormalFullName());
console.log(marisol.getFormalFullName());

// As good practise, properties should be created in the constructor.
// Methods should be created in the prototype because we need just one copy of the
// function. If we created a function inside the constructor, we had same function
// for each object created in memory.

// Capitalize first letter of the function constructor as convention.

/**
 * BUILT-IN FUNCTION CONSTRUCTORS
 * i.e.: Number, String, Date, and so on.
 */

// IMPORTANT: creates a Number object (NOT A PRIMITIVE!!!)
var a = new Number(3);
var str = new String('Max');

// Create a built-in function for all String objects.
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

str.isLengthGreaterThan(2); // true


// Be careful when tou are creating built-in objects instead of primitives
// because we new Number creates an object instead of a primitive
// so if we compare it with a primitive with === (recommended) we have false as result.

var a = 3;
var b = new Number(3);
console.log(a == b); // false because both are 3.
console.log(a === b); // false because both are 3 but 'a' is primitive and 'b' is an object.

/**
 * Arrays and for ... in
 * DON'T ITERATE ARRAYS USING FOR ... IN.
 */

var arr = ['Max', 'Marisol', 'Andres', 'Norma'];

Array.prototype.getAll = 'All';

for (prop in arr) {
    console.log(prop + ':' + arr[prop]); // Also it prints 'All' as a property.
}

/**
 * OTHER WAYS TO CREATE OBJECTS
 * - Object.create
 * - Pure prototypal inheritance
 */

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
};

// create empty object with prototype pointing to object passed as argument.
var maxObject = Object.create(person);
maxObject.firstname = 'Max';
console.log(maxObject);

// polyfill for older function that do not support Object.create()
// polyfill: code that adds a feture which the engine may lack.

if (!Object.create) {
    Object.create = function(o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation only accepts the first parameter.');
        }
        // create empty function.
        function F() {};
        //set function prototype to object to passed in.
        F.prototype = o;
        // retrurn constructor function
        return new F();
    }
}

/**
 * ES6 and classes.
 * - other way to create object and set it to prototype.
 * - it just syntactic sugar:under the hood is same as prototypal inheritance.
 * syntactic sugar: different way to type something thatdoes not change
 * how it works under the hood.
 */

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        return 'Hi ' + firstname;
    }
};

// extends set the prototype.
class InformalPerson extends Person {
    constructor(firstname, lastname) {
        super(firstname, lastname);
    }

    greet() {
        return 'Yo ' + firstname;
    }
}

var pepe = new Person('pepe', 'last');