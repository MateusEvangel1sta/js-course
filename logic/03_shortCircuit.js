/**
 * && -> false && true -> false
 * || -> false || true -> true
 */

console.log("Luiz Otávio" && 0 && "Maria");
console.log("Luiz Otávio" || 0 || "Maria");

// false returns
console.log(false);
console.log(0);
console.log("");
console.log(null);
console.log(undefined);
console.log(NaN);

// Anything different from the above values ​​return true.

// Using the AND
function sayHi() {
  return "oi";
}

let toExecute = false;
console.log(toExecute && sayHi());

toExecute = true;
console.log(toExecute && sayHi());

// Using the OR
console.log(0 || false || null || "Luiz Otávio" || true);

const userColor = "vermelho";
const defaultColor = userColor || "preto";

console.log(defaultColor);
