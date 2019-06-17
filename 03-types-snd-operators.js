

// TYPES

// Dynamic typing: Engine resolves types of data in execution time.

// Operator: Special function that is syntactically (written) differently. i.e. "+" operator: Syntax parser transform "+" into a function internally.
// Operator precedence: Which operation function is called first?
// Associativity: What order operator function get called in: left-to-right or right-to-left for functions that have same precedence.

// Primitive type: Represents a single value.
// Undefined, null, boolean, number, string, symbol (ES6)

// COERCION: Converting one type to another. i.e.: 1 + '2' = 12. 1 es coerced by the JS engine to a string.

// 3 < 2 < 1 = true => false < 1 = true because false is coerced to 0 and 0 < 1 = true


// Comparison operators: == vs ===. Strict Equality does not coerce the value.

// Check existance by using booleans: undefined, null, "" and 0 are coerced to false.


// Default Values: i.e.: a = a || 'default'. Used by libraries to avoid name collisions.


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
