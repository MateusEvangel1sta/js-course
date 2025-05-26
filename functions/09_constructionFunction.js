function User(name, surname) {
  // private
  const ID = 123456;
  const otherMethod = function () {
    console.log(ID);
  };

  this.name = name;
  this.surname = surname;

  this.method = () => {
    return `${this.name} ${this.surname}`;
  };
}

const user = new User("Gustavo", "Oliveira");
const otherUser = new User("Maria", "Oliveira");

console.log(user.method(), otherUser.method());
