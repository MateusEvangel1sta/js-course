/**
 * Rules for creating variables:
 *  We cannot use reserved words.
 *  Variables need to have significant names.
 *  We cannot start the name of a variable with a number.
 *  Variables cannot contain spaces or strokes.
 *  Variables are case-sensitive.
*/

const clientName = 'Júlio'; // Example of valid constant.
console.log(clientName);

// Error -> Containing variables cannot be changed
// clientName = 'Fernando';
console.log(clientName);

// Other examples
const firstNumber = 5;
const secondNumber = 10;

const result = firstNumber * secondNumber;

console.log(result);