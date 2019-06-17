
"use strict";

/**
 * ODDS AND ENDS
 *
 * - typeof: type of thing is
 * - instanceof: look for in prototype chain.
 */

var a = 3;
console.log(typeof a); //number

var b = 'test';
console.log(typeof b); // string

var c = {};
console.log(typeof c);  // object

var d = [];
console.log(typeof d); // object -> weird!
console.log(Object.prototype.toString.call(d)); // [ object Array]

function Person(name) {
    this.name = name;
}

var e = new Person('pepe');
console.log(typeof e); // object
console.log(e instanceof Person); // true

console.log(typeof undefined); // undefined
console.log(typeof null); // object... bug!!

var z = function(){};
console.log(typeof z);// function

/**
 * STRICT MODE
 * proocess code in stricter way
 * prevent error under circunstances
 * 'use strict' must go at the top of a file or function.
 */

// declaration of all variables before using them.
var person;
persom = {};
console.log(persom);

// assign getter-only or non-writable property.

// assign non-writable global
var undefined = 5; // throws a TypeError