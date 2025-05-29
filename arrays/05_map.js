const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// double numbers
const doubleNumbers = numbers.map((el) => el * 2);
console.log(doubleNumbers);

// Return only one string with the person's name
// Remove only the "name" key from the object
// Add an ID key to each object

const people = [
  { name: "Luiza", age: 62 },
  { name: "Maria", age: 23 },
  { name: "Eduarda", age: 55 },
  { name: "Letícia", age: 19 },
  { name: "Rosana", age: 68 },
  { name: "Wallace", age: 47 },
];

const justName = people.map((el) => el.name);
console.log(justName);

people.map((el, i) => (el.id = i + 1));
console.log(people);

const justAge = people.map((el) => el.age);
console.log(justAge);

console.log(people);
