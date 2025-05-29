// Literal object
const user = {
  name: "Gustavo",
  age: 2,
};

console.log(user);
console.log(user.name);
console.log(user["age"]);

// Object builder
const person = new Object();
person.name = "Luiz";
person.surname = "Miranda";
person.age = 30;

console.log(person);

person.sayName = function () {
  console.log(`${this.name} ${this.surname}`);
};

person.sayName();

person.getBirthdayDate = function () {
  const current = new Date();
  return current.getFullYear() - this.age;
};

console.log(person.getBirthdayDate());
