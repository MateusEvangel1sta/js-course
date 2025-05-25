// IIFE -> Immediately invoked function expression
(function(age) {

  const surname = 'Miranda';
  function createName(name) {
    return `${name} ${surname} tem ${age} anos de idade.`;
  }

  function sayName() {
    console.log(createName('Luiz'));
  }

  sayName();
})(19);