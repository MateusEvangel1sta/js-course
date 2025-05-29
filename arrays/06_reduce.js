const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Add all numbers
const sumNumbers = numbers.reduce((acc, el) => acc + el, 0);

console.log(`Soma: ${sumNumbers}`);

// Return an array with the pairs (Filter)
const pairsNumbers = numbers.reduce((acc, el) => {
  if (el % 2 === 0) acc.push(el);
  return acc;
}, []);

console.log(pairsNumbers);

// Return an array with twice the values ​​(MAP)
const doubleNumbers = numbers.reduce((acc, el) => {
  acc.push(el * 2);
  return acc;
}, []);

// Return the older person
const people = [
  { name: "Luiz", age: 62 },
  { name: "Maria", age: 23 },
  { name: "Eduardo", age: 55 },
  { name: "Letícia", age: 10 },
  { name: "Rosana", age: 64 },
  { name: "Wallace", age: 63 },
];

const olderPerson = people.reduce((acc, el) => {
  if (acc.age < el.age) acc = el;
  return acc;
});

console.log(olderPerson);
