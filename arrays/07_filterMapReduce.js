const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const newNumbers = numbers
  .filter((el) => el % 2 === 0)
  .map((el) => el * 2)
  .reduce((acc, el) => (acc += el));

console.log(newNumbers);
