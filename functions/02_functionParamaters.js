function func(name, age) {
  console.log(`Olá, meu nome é ${name} e tenho ${age} anos.`);

  console.log(arguments[2]);
}

func('Enzo', 18, 'Este é um parâmetro não previsto!');


// Other
// arguments -> sustains all the arguments sent
function otherFunction() {
  let total = 0;
  for (let argument of arguments) {
    total += argument;
  }

  console.log(total);
};

otherFunction(1, 2, 3, 4, 5, 6, 7);


// Other
function otherFunction2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

otherFunction2(1, 2, 3);


// default value
function otherFunction2(a = 0, b = 0) {
  console.log(a + b);
}

otherFunction2(5);
otherFunction2(undefined, 5);
otherFunction2(5 + 5);


// object destructuring
function otherFunction3({name, surname, age}) {
  console.log(name, surname, age);
}

let obj = {
  name: 'Luiz',
  surname: 'Oliveira',
  idade: 30
};

otherFunction3(obj);


// array destructuring
function otherFunction4([value1, value2, value3]) {
  console.log(value1, value2, value3); 
}

otherFunction(['Maçã', 'Banana', 'Manga']);