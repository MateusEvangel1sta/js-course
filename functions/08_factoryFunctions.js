function createPeople(name, surname) {
  return {
    name,
    surname,
    say() {
      return `${this.name} está falando.`;
    }
  }
}

const p1 = createPeople('Luiz', 'Otávio');
console.log(p1);