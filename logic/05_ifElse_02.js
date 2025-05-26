const number = 10;

// If (Number> = 0 && Number <= 5) Occur, do this {code}
// If you don't do this {the code}

if (number <= 10) {
  // True
  console.log("O número é menor ou igual a 10.");
}

if (number >= 0 && number <= 5) {
  console.log("O número está entre 0 e 5.");
} else if (number >= 6 && number <= 8) {
  console.log("O número está entre 6 e 8.");
} else if (number >= 9 && number <= 11) {
  // TRUE
  console.log("O número está entre 9 e 11.");
} else {
  console.log("O número não está entre 0 e 11.");
}

console.log("...Aqui vai o resto do código.");
