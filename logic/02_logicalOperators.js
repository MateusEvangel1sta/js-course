/**
 * Logical Operators
 * && -> AND
 * || -> OR
 * ! -> NOT
 */

let number = 500;
let otherNumber = 900;

console.log(number > otherNumber && otherNumber !== number);
console.log(number > otherNumber || otherNumber !== number);
console.log(!(number > otherNumber && otherNumber !== number));

console.log(!(number > otherNumber && otherNumber !== number) || number >= 500);
console.log(!(number > otherNumber && otherNumber !== number) && number >= 500);

console.log(!false);
console.log(!true);