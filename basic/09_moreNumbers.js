let number = 1;
let otherNumber = 2.5;

// toString() -> The method returns a string representing this number value.
console.log(number.toString() + otherNumber);

number = 1500;
console.log(number.toString(2)); // binary representation

let bigNubmber = 10.23430696986523107064587963;
// toFixed -> The method returns a string representing this number using fixed-point with the specified number of decimal places.
console.log(bigNubmber.toFixed(2));

// isInteger() -> The static method determines whether the passed value is an integer.
console.log(Number.isInteger(number));
console.log(Number.isInteger(bigNubmber));

// IsNaN() -> The static method determines whether the passed value is an NaN.
let temp = 'Olá' * 5;
console.log(Number.isNaN(temp));

// 
number = 0.7;
otherNumber = 0.1;

number += otherNumber;
number += otherNumber;
number += otherNumber;

console.log(number);

number = Number(number.toFixed(2));
console.log(number)