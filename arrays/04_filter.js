const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const higherThanTen = numbers.filter((e) => e > 10);

console.log(higherThanTen);

const filteredData = numbers.filter;

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com "a"

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
