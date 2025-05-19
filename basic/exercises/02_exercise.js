let userName = 'Luiz';
let userSurname = 'Miranda';
let userAge = 30;
let userHeight = 180;
let userWeight = 84;

const Result = userWeight / ((userHeight / 100) ** 2);

console.log(`${userName} ${userSurname}, ${userAge} anos, pesa ${userWeight}. ${userName} tem ${userHeight / 100} metros de altura e seu IMC é de ${Result.toFixed(2)}`);