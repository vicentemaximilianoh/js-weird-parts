/**************************************
 *      OBJECTS AND FUNCTIONS
 *************************************
 *
 * Object
 * can have properties or methods:
 * - Primitive property
 * - Object property
 * - Function property
 *
 * Object has references where those properties and methods are sitting in memory.
 *
 *
 *
 *
 *
 *
 *          -----------------               _____________________________
 *          |0x001          |               |0x002                      |
 *          |    Object     | ------------> |   Primitive "property"    |
 *          |               |               |___________________________|
 *          -----------------
 *                |       |                 -----------------------------
 *                |       |---------------> |0x002                      |
 *                |                         |   Object "property"       |
 *                |                         |___________________________|
 *                |
 *                |                         -----------------------------
 *                |                         |0x003                      |
 *                |-----------------------> |   Function "property"     |
 *                                          |___________________________|
 */

var person = new Object();
person['firstname'] = 'Max';
person['lastname'] = 'Vicente';


// bracket notation ([]) are operators that allows to find a property in an object: obj[prop].
var propName = 'firstname';
console.log(person[propName]);

// dot notation (.) is another operator to allows us to find a property in an object.
console.log(person.firstname);

// They have left to right associativity sp first look for address prop in person object and then looks for street prop in address object.
// Create an object property in the object
person.address = new Object();
person.address.street = 'Garzon';
person.address.city = 'Rosario';
person.address.state = 'Santa Fe';

/*
 *  OBJECT LITERALS
 */

// Curly braces are a shorthand for "new Object()" but work in the same way internally.

var person1 = {
    firstname: 'Max',
    lastname: 'Vicente',
    address: {
        street: 'Garzon',
        city: 'Rosario',
        state: 'Santa Fe'
    }
};

/**
 * FAKING NAMESPACES
 */

// NAMESPACE: Container for variables and functions. Help to avoid name collisions.

// JSON and JS Object literal

// Function are objects. They can have properties (they can be primitive, object or functions).
// They have 2 special properties:
// - Name: Optional. A function can be anonymous.
// - Code. Yes, code is a property.
// Parenthesys "()" is just an operator that executes code property.

// First-class function: You can you same thing with function than with other types. Assign them to variables, pass them as args, create them on the fly.

/* Expression: Unit of code that results in a value.
 * Function expression:
 * var func1 = function() {
 *      console.log('hi');
 * }
 */

/* Statement: Unit of code that work, does not return a value.
 * Function statement
 * function greet() {
 *      console.log('hi');
 * }
 */

/**
 * IMPORTANT: If we have a function expression, we only can execute it only
 * after it was declarated because the value of the variable is defined in
 * execution phase. The function is not hoisted in this case.
 *
 */

// Mutation: Change of something.
// Immutable: it can't be changed.

/**
 * BY VALUES vs BY REFERENCE
 * This is applied in assignation and passing parameters.
 *
 * By value => copy the value in other memory location.(primitives)
 * a = b
 *
 * By reference => copy the reference which variable is loacted. Now both values points to same memory location (objects)
 * a = b
 *
 * Mutations in one afects the other, since they are same object (they use same
 * location in memory).
 */

// by value
var a = 2;
var b;

b = a;

console.log(a)
console.log(b)


// by reference

var c = {greeting: 'Hi!'};
var d;

d = c;

c.greeting = 'Hello'; // mutate

// They still pointing same memory space. Both are changed.
console.log(c);
console.log(d);

// Same applies for parameters passed in functions.
function changeGreeting(obj) {
    obj.greeting = 'Hola';
}

changeGreeting(c);

// They still pointing same memory space. Both are changed.
console.log(c);
console.log(d);

// Equal operator sets up a new space in memory.
c = {greeting: 'Ciao!'};

// They point to different memory locations now.
console.log(c);
console.log(d);


/**
 * OBJECTS, FUNCTIONS AND 'THIS'
 * When function is invoked ("code" property of function object is executed).
 * Function has:
 * - Variable environment
 * - Reference to outer environment where function lexacally is placed.
 * - THIS keyword: which can point to different object depending on how function is invoked.
 * Created in the creation phase of execution context.
 */

function testThisKeyword() {
    console.log(this); // For functions in global object, this points to global object.
}

var testThisObject = {
    name: 'This is an object',
    log: function() {
        console.log(this); // For methods (function inside object), point to the container object.

        var setname = function(newname) {
            this.name = newname;// THIS points to global object in inernal functions. Solve using: self = this pattern.
        };
        setname('Updated object');
        console.log(this);
    }
};

/**
 * ARRAYS
 * var arr = new Array();
 * or shortcut, var arr = [];
 * Arrays can contain elements of any type.
 */

const arr = [
    1,
    false,
    function(name) {
        console.log(name);
    }
];

/**
 * 'arguments' and spread.
 * arguments: special keyword created in the creation phase of execution context of a function.
 * Contains all the parameters given to a function.
 */

function greet(firtname, lastname, language, ...other) {
    // ES6 allows to set a default value for arguments in the delaration of the function: ..., language = 'en') {....
    // We can use default value pattern: language = language || 'es';
    console.log(firstname);
    console.log(lastname);
    console.log(language);

    console.log(arguments);// List of all values of parameters (array like, non exactly an array).
}

// No need to pass arguments. They are hoisted in context creation of the function.
greet();

// Spread: "...other" in tgreeting function.
greet('test', 'maxi', 'es', 'Garzon 2523', '4316895');


/**
 * FUNCTION OVERLOADING
 * Function with same name but different parameters. JS don't support overloading but can be simulated by patterns,
 * like default pattern i.e.
 */

/**
 * AUTOMATIC SEMICOLON INSERTION
 * JS engine inserts ";" automatically when it considers that it is necessary.
 */

function getData() {
    return
    {
        test: 123
    }
}

getData(); // returns undefiend because engine inserts ";" before execution code.


/**
 * WHITESPACES
 */

var
    // comments are ignored by the engine beside the place where they are located.
    firstname,

    lastname,

    lastname;

/**
 * **********************************************************************
 * IIFEs (Immediately Invoked Function Expressions)
 * **********************************************************************
 *
 * A function expression that is invoked immediately after its creation.
 * Function expression can be wrapped by parenthesis same as any expression, i.e.: (1+3*2);
 * so parser treat it as a valid function expression.
 * IIFEs can be created  "on the fly" (not stored in a variable)
 */

var greeting = function(name) {
    console.log('Hello ' + name);
}('John');
// greeting variable stores the value returned by the invokation of the function.

// To trick syntaxt parser to not throw an error when function expression is called it is a common pattern to
// wrap the function expression in parenthesys.
// Parenthesys are used to wrap expression
(function(name) {
    console.log('Hello ' + name);
}('John')); //Invoke can be inside or outside the parenthesis.

/**
 * IIFEs and safe code
 * Create an execution context or the IIFE
 */

var greeting = 'Hola';

// Variable do not collide because we are executing inside an IIFE which creates a new execution context.
(function(name) {
    var greeting = 'Hello';
    console.log(greeting + name);
}());



/**
 * ************************************************
 * CLOSURES
 * ************************************************
 *
 * It's a feature of JS which allows get reference of outer environment's variables even after execution context of
 * outer environment it was finished (it is not more present in execution stack).
 */

// GLOBAL EXECUTION CONTEXT
function greet(whattosay) {

    // return function expression
    return function(name) {
        // function knows whattosay value after execution of greet function.
        //
        console.log(whattosay + ' ' + name);
    }
}
/**
 * Execution Stack of previous example.
 * - Global Execution Context added to execution stack created.
 * - greet() exec. context added to execution stack and created.
 * - greet() execution is finihed: exec. context is popped off of exec. stack
 * - BUT reference to environment is still stored in memory!!!
 * - annonymous function is added to exec. stack and exec. context is created.
 * - outer's environment reference is used to get values and be used in the function.
 */


//greet('Hi')('Tony'); // 'Hi Tony'

// NEW EXECUTION CONTEXT
var sayHi = greet('Hi');
// after execution pop off, but variables created are still in memory.

// NEW EXECUTION CONTEXT.
/**
 * JS engine goes up scope chain checking outer lexical environment even the
 * context execution of the greet function is pop off.
 * sayHi execution context has a reference to the variables of outer environment.
 *
 * Execution context is closed in its outer variables. This is called a closure.
 *
 */
sayHi('Tony'); // 'Hi Tony'. Still knows the value of 'Hi' even greet execution context has gone.

// Using closures

var fs = function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function () {
                return console.log(i);
            }
        );
    }
    return arr;
}

fs[0]();// expects 0, but returns 3
fs[1]();// expects 1, but returns 3
fs[2]();// expects 2, but returns 3

/**
 * This happens because when function are executed, it check in the execution context
 * of the outer environment and the value of 'i' after its executed is 3 because
 * for loop was executed.
 * To avoid this, we need to create a new execution context that stores the value of i
 * in the moment the functions were created. IIFEs allow it.
 *
 * Other solution in ES6 is create a let variable to be used each time for loop
 * is executed.
 */

var fs2 = function buildFunctions2() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        // ES6 approach: let j = i;
        arr.push(
            // New execution context is created.
            // Function is invoked immediately so when inner function is executed
            // they will have the right value.
            (function(j) {
                return function() {
                    console.log(j);
                };
            }(i))
        );
    }
}

fs2[0]();// 0
fs2[1]();// 1
fs2[2]();// 2

/**
 * FUNCTION FACTORIES
 * Function that return other functions to be reused.
 */

function makeGreeting(lang) {
    return function(firstname, lastname) {
        var greet;
        if (lang === 'en') {
            greet = 'Hello!';
        }
        if (lang === 'es') {
            greet = 'Hello!';
        }
        console.log(greet + ' ' + firstname + ' ' + lastname);
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Maxi', 'Vicente');
greetSpanish('Maxi', 'Vicente');

/**
 * CLOSURES AND CALLBACKS
 * Callback function: Function to give to another function to be run when the othe function is finished.
 * Function you call, 'calls back' by calling the function you gave it when it finishes.
 */

function sayHiLater() {
    var greeting = 'Hi!';

    setTimeout(function() {
        console.log(greeting);
    }, 3000);
}

// SetTimeout callback is executed after sayHiLater was executed.
// Expression function checks scope chain to find 'greeting' in its outer
// environment.
sayHiLater();

/**
 * CALL vs APPLY vs BIND.
 * Methods of Function object that aloow sets 'this' keyword to a execution context.
 * CALL: Execute the function allowing to set 'this' keyword.
 * APPLY: Execute the function allowing to set 'this' keyword.
 * BIND: Sets a reference to 'this' keyword. Don'execute it.
 * Diference between call and apply: Call take arguments separated by comma,
 * Apply take arguments as an array.
 */

var person2 = {
    firtname: 'Maxi',
    lastname: 'Vicente',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var logName = function(lang1, lang2) {
    console.log(this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
};

var logPersonName = logName.bind(person);
logPersonName('en');

logName.call(person, 'en', 'us');
logName.apply(person, ['en', 'us']);

/**
 * FUNCTION BORROWING:
 * By using call and apply, an object can borrow other object's function.
 */

var person3 = {
    firtname: 'Maxi',
    lastname: 'Vicente'
};

console.log(person2.getFullName.apply(person3));

/**
 * FUNCTION CURRYING
 * Create a copy with some preset parameters.
 */

 function multiply(a, b) {
     return a*b;
 }

var multiplyToTwo = multiply.bind(this, 2);
multiplyToTwo(3) //6
multiplyToTwo(5) //10

var multiplyToThree = multiply.bind(this, 3);
multiplyToThree(3) //9
multiplyToThree(5) //15

/**
 * FUNCTION CURRYING
 * Given a function with paramenters, a new function with one parameters can return a function with one parameter
 * and so on.
 */

function multiply(a) {
    return function(b) {
        return a*b;
    }
}

var multiplyTo2 = multiply(2);
multiplyTo2(3) // 6
multiplyTo2(5) // 10

var multiplyTo3 = multiply(3);
multiplyTo3(3) // 9
multiplyTo3(5) // 15

/**
 * FUNCTIONAL PROGRAMMING.
 * Since JS support first-class function, it makes JS a functional programming
 * language.
 */

 // Take advantage of first-class function and pass by parameters
function mapArray(arr, fn) {
    var myArr = [];
    for (var i=0; i < arr.length; i++) {
        fn(myArr[i]);
    }
    return myArr;
}

var arr1 = [1, 2, 3];
var arr2 = mapArray(array1, function (item) {
    return item * 2;
});

// Make functions as tiny as you can.
var checkPastLimit = function(limiter, item) {
    return item > limiter;
}
var arr4 = mapArray(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

// Better code - Take advantage of power of functional programmings in JS.
var checkPastLimitSimplified = function(limiter, item) {
    return function(limiter, item) {
        return limiter > item;
    }.bind(this, limiter);
}
var arr5 = mapArray(arr1, checkPastLimitSimplified(2));
console.log(arr5); // [false, false, true];