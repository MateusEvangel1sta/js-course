// const firstModule = require("./01_modules");
// firstModule.sayName();

// const sayName = require("./01_modules").sayName;
// sayName();

// const { name, surname } = require("./01_modules");
// console.log(name, surname);

const path = require("path");
const { Person } = require("./01_modules");
const axios = require("axios");

const firstPerson = new Person("Luiz");
console.log(firstPerson);

axios("http://www.otaviomiranda.com.br/files/json/pessoas.json")
  .then((res) => console.log(res.data))
  .catch((e) => console.log(e));
