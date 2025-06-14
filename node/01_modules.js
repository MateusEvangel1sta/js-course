const name = "Luiz";
const surname = "Miranda";

const sayName = () => {
  console.log(name, surname);
};

// module.exports.name = name;
// exports.surname = surname;
// this.sayName = sayName;

// console.log(module.exports);

class Person {
  constructor(name) {
    this.name = name;
  }
}

exports.Person = Person;
