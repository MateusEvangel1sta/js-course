const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const higherThanTen = numbers.filter((e) => e > 10);

console.log(higherThanTen);

const filteredData = numbers.filter;

// Return the people who have the name with 5 letters or more
// Return people over 50
// Return people whose name ends with "a"

const peoples = [
  { name: "Luiza", age: 62 },
  { name: "Maria", age: 23 },
  { name: "Eduarda", age: 55 },
  { name: "Letícia", age: 19 },
  { name: "Rosana", age: 68 },
  { name: "Wallace", age: 47 },
];

const filteredPeople = peoples
  .filter((e) => e.name.length >= 5)
  .filter((e) => e.age > 50)
  .filter((e) => e.name[e.name.length - 1] === "a");

console.log(filteredPeople);
