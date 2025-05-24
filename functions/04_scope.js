const name = 'Luiz';

function sayName() {
  console.log(name);
}

sayName();


function sayAge(age) {
  const birthYear = new Date().getFullYear() - age;
  return birthYear;
}

console.log(sayAge(19));
// console.log(birthYear); // undefined