class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  sayHello() {
    return `${this.name} está saudando!`;
  }
}

const firstPerson = new Person("Luiz", "Miranda");

console.log(firstPerson);
console.log(firstPerson.sayHello());
