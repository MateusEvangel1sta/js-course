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

for (let key in person) {
  // console.log(`${key}: ${person[key]}`);
}

// Factory Function
function peopleFactory(name, surname) {
  return {
    name,
    surname,
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  };
}

const p1 = peopleFactory("Luís", "Oliveira");
console.log(p1.fullName);

// Constructor Function
function PeopleFactory(name, surname) {
  this.name = name;
  this.surname = surname;
}

const p2 = new PeopleFactory("Bernardo", "Oliveira");
console.log(p2);
