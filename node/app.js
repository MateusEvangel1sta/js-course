// const firstModule = require("./01_modules");
// firstModule.sayName();

// const sayName = require("./01_modules").sayName;
// sayName();

// const { name, surname } = require("./01_modules");
// console.log(name, surname);

const path = require("path");
// const { Person } = require("./01_modules");
const axios = require("axios");

const firstPerson = new Person("Luiz");
console.log(firstPerson);

const multiplication = require("./01_modules");
console.log(multiplication(2, 2));
