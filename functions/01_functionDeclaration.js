// Function Hoisting
sayHi();

function sayHi() {
  console.log('Hi');
}

// First-class objects
const aData = function() {
  console.log('I\'\m a data!');
}

function executeFunction(func) {
  console.log('I will perform your function!');
  func();
}

executeFunction(aData);

// Arrow function
const arrowFunction = () => {
  console.log('I am an arrow function.');
};

// Within an object
const user = {
  say() {
    console.log('Olá, estou falando!')
  }
};

user.say();