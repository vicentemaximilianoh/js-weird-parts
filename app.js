
// Syntax parser: Program that read the code and determines what it does and if its grammar is valid.
// Execution context: Wrapper to help manage the code that is running.
// Lexical environment: Where something sit PHYSICALLY in the code you write. Lexical means 'having to do with words
// or grammar'. A lexical environment exists in programming languages which WHERE you write something is important.

/*
 *
 * Hoisting -> Setup memory space when context is created.
 *              Variables: assign undefined as value.
 *              Function: Copy to memory entire function definition.
 *
 * 1st phase: CREATION
 * 2nd phase: EXECUTION
 */


// 1. Global execution context is created and executed.

b();

console.log(a);

var a = "Hello world!";

function b() {
    console.log('Hello b!'); // 3. New execution context is created and executed for b function.
}

function b1() {
    b();    // 2. New execution context is created and executed for b1 function.
}

b1();

// Execution Stack
// ----------------------

// b execution context
// b1 execution context
// global execution context

// Variable environment: Environment where the variable lives and how the y relate to each other in memory.

// Scope: Where a variable is available in the code.
// Scope chain: chain of references of outer (lexical) environments that is taken when the code is running.

// In ES6, let is block scoping. Is not allowed to used by the engine until the line of code is ran in the execution phase.

// Synchronous: One at a time.
// Asynchronous: More than one at a time.

// Asynchronous callback:
// We have an EVENT QUEUE that handles all events.
// Each event in the queue is executed ONCE EXECUTION STACK IS EMPTY.


// CLOSURES!!!!!
//


