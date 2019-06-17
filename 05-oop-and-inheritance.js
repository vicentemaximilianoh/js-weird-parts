
/**
 * Oriented Object JS and Prototypal Inheritance
 */

/**
 * Classical vs Prototypal Inheritance
 *
 * Inheritance: One object gets access to the properties and methods of another object.
 *
 * Classical:
 * - Verbose
 *
 * Prototypal:
 * - Simpler
 *
 * Prototype:
 *                ----------> prop1
 * _______________|_
 * |                |
 * |    obj         |-------> proto (obj) --------> prop2
 * |                |   |            |
 * -----------------    |            ----------proto -----> prop3
 *                      |
 * _________________    |
 * |                |   |
 * |    obj2        |---|
 * |                |
 * -----------------
 *
 * PROP      => PROTOTYPE CHAIN
 * obj.prop1 => obj.prop1
 * obj.prop2 => obj.proto.prop2
 * obj.prop3 => obj.proto.proto.prop3
 * obj2.prop2 => obj2.proto.prop2
 *
 */

var person = {
    firstname: 'test',
    lastname: 'Default Lastname',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
};

var max = {
    firstname: 'Max',
    lastname: 'Vicente'
};

// don't do this EVER! for demo purposes only!!
max.__proto__ = person; // Max inherits of person.

// JS knows whose belong 'this' keyword too.
console.log(max.getFullName());



var marisol = {
    firstname: 'Marisol'
};
marisol.__proto__ = person;

/**
 * marisol does not have lastname property, so the engine looks at
 * the prototype chain and it found it at the prototype object which is 'person'.
 */
console.log(marisol.getFullName()); // 'Marisol Default Lastname'


/**
 * Everything in JS is an object (or a primitive).
 */

var a = {};
var b = function(){}
var c = [];

console.log(a.__proto__); // Object object
console.log(b.__proto__.__proto__); // Object object
console.log(c.__proto__.__proto__); // Object object


/**
 * Reflection and Extend
 * Reflection: an object can look at itself, listing and changing its properties and methods.
 *
 */

// Let's use 'max' object from previous example.

// iterate all properties in an object
for (var prop in max) {
    // check if the property is from 'max' object or prototype chain.
    if (max.hasOwnProperty(prop)) {
        console.log(prop + ': ' + max[prop]);
    }
}

/**
 * Extend pattern by using reflection.
 */

var andres = {
    address: 'garzon 2523',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
};

var norma = {
    address: 'garzon 2523',
    getFirstName: function() {
        return this.firstname;
    }
};

// put all properties from andres and norma into max object.
_.extend(max, andres, norma);

console.log(max);

