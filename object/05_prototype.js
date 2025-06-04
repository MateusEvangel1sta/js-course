function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.fullName = function () {
  return `${this.name} ${this.surname}`;
};

const person1 = new Person("Luiz", "O.");
const person2 = new Person("Maria", "A.");

console.dir(person1);
console.dir(person2);

console.log(person1.fullName());
