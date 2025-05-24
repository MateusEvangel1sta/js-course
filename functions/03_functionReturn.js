// Returns a value and finishes the function
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 5));


function createUser(name, surname, age, say) {
  return {
    name,
    surname,
    age,
    say
  }
}

const user = createUser(
  'Gustavo',
  'Oliveira',
  2,
  function() {
    return 'Mamãe!';
  }
);

console.log(user.say());


function sayPhrase(start) {
  function sayRest(rest) {
    return `${start} ${rest}`;
  }

  return sayRest;
}

const helloWorld = sayPhrase('Olá');
console.log(helloWorld('mundo!'));