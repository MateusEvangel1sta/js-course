function returnFunction() {
  const name = 'Luiz';

  return function() {
    return name;
  };
}

const func = returnFunction();
console.log(func());