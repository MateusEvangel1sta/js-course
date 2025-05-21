function greeting(name) {
  console.log(`Bom dia, ${name}!`);
}

greeting('Enzo');


function sum(x, y) {
  return x + y;
}

console.log(sum(5, 2));


// Anonymous function
const square = function(n) {
  return n ** (1 / 2);
};

console.log(square(9))

// Arrow function
const otherSquare = n => n ** (1 / 2);
console.log(otherSquare(9));