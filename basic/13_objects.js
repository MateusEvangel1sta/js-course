const student = {
  name: 'Pedro',
  surname: 'Oliveira',
  age: 17,
  classroom: '2 Aº',
  studantGrade(points) {
    return `A nota de ${this.name} é ${points}`;
  }
}

console.log(student);
console.log(student.studantGrade(9));


// Factory function
function createPerson(name, surnmame, age) {
  return {
    name,
    surnmame,
    age
  }
}

const onePerson = createPerson('Enzo', 'Evangelista', 18);
console.log(onePerson);