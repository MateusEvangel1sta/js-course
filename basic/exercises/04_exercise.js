let varA = 'A'; // B 
let varB = 'B'; // C
let varC = 'C'; // A

console.log(varA, varB, varC);

var varTemp = varA;
varA = varB;
varB = varC;
varC = varTemp;

console.log(varA, varB, varC);