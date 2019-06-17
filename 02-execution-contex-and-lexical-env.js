/**
 * Concepts:
 * Syntax parser
 * Program that reads code and checks what id does and if its sintax is valid.
 *
 * Execution context
 * Wrapper to help manage code that is running.
 *
 * Lexical environment
 * where something sits phisically in the code you write.
 * where is wirtten?
 *
 * Name/value pair
 * Name which maps with unique valuein a given content.
 *
 * Object
 * Collection of name/value pairs (in JS)
 *
 * Single threated
 * One command is executed at a time.
 *
 * Synchronous execution
 * One line of code at a time and in order that it appears
 *
 * Variable environment
 * Where the variables live.
 *
 * Scope
 * Where the variable is available in the code
 *
 * Asynchronous
 * More than one at a time.
 */

/**
 * EXECUTION CONTEXT.
 * ------------------------------------
 * 2 phases:
 *
 * Creation phase
 * -----------------
 * We have:
 * Global Object
 * 'this'
 * reference to Outer Environment (if there is one)
 *
 * HOISTING: setup memory space for variables and function
 * Variable: initialiy set as undefined.
 * Function: Copy to memory entire function definition.
 *
 * Execution phase
 * -----------------
 * Run code line by line.
 *
 */

 /**
  * Function invocation and Execution stack
  * - Global Execution Context is created and then executed line by line.
  * - Create execution context and is put in execution stack and then executed line by line (every time a function is invoked).
  * - Function that is executed is placed at the top of the execution stack
  * - Once the function is finished, the function is popped off of the execution stack and it returns to the context which called it
  * - NEW EXECUTION CONTEXT IS CREATED.
  */

/**
 * Functions, context and variable environments
 * - Global execition context created
 * - Variables are put on memory space.
 * - EACH EXECUTION CONTEXT HAS ITS OWN VARIABLE ENVIRONMENT
 */

/**
 * SCOPE CHAIN
 * If the variable does not exist in the execution context it looks to the outer environment for the variable.
 * Reference to the outer environment points where the function is set lexically.
 * This procces is repeated until it reachs the global environment.
 *
 * Scope in let
 * Block scoping
 */

/**
 * Asynchronous callbacks
 * JS Engine can talk with other parts of the client (i.e: browser, rendering engine, HTTP request)
 * Handled by Event Queue that store events triggered by the code.
 * One execution stack is empty (all JS code has been ran) JS Engine looks periodically at Event Queue.
 *
 * More that 1 event:
 * - Execution stack is empty
 * - JS Engine looks at Event Queue, it finds E1
 * - E1 is executed (using execution stack)
 * - Execution stask is empty
 * - JS Engine looks at Event Queue, it finds E2
 * - Execution stask is empty
 * - JS Engine looks at Event Queue, no events founded
 * - Execution finished.
 */