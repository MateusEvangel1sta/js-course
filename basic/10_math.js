let number = 9.54578;

// Math.floor() -> The static method always rounds down and returns the largest integer less than or equal to a given number.
console.log(Math.floor(number));

// Math.ceil() -> The static method always rounds up and returns the smallest integer greater than or equal to a given number.
console.log(Math.ceil(number));

// Math.round() -> The static method returns the value of a number rounded to the nearest integer.
console.log(Math.round(number));

// Math.max() -> The static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
console.log(Math.max(1, 2, 90, 10, 536, 455, 478, 991, 223, 1));

// Math.min() -> The static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
console.log(Math.max(1, 2, 90, 10, 536, 455, 478, 991, 223, 1));

// Math.random() -> The static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range.
console.log(Math.random());

// Math.srqt() -> The static method returns the square root of a number. 
number = 9;
console.log(Math.sqrt(number));
// or
console.log(number ** (1 / 2));

// Beware of this
console.log(number / 0);