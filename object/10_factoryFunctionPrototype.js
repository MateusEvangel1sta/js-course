function createPerson(name, surname) {
  const personPrototype = {
    sayHello() {
      console.log(`${this.name} está saudando!`);
    },
  };

  return Object.create(personPrototype, {
    name: {
      value: name,
      enumerable: true,
      writable: false,
    },
    surname: {
      value: surname,
      enumerable: true,
      writable: false,
    },
  });
}

const firstPerson = createPerson("Luiz", "Oliveira");
firstPerson.sayHello();
