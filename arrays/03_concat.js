const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

let a3 = a1 + a2; // This is not concatena!
console.log(typeof a3);

a3 = a1.concat(a2);
console.log(a3);
console.log(typeof a3);

// Using the Rest operator
a3 = [...a1, ...a2];
console.log(a3);
console.log(typeof a3);
