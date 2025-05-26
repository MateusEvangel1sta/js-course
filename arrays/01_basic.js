//                0          1        2
const names = ["Eduardo", "Maria", "Joana"];
names[2] = "João";

console.log(names);

delete names[2];
console.log(names);

// Other Array
const otherNames = new Array("Luís", "Gustavo", "Bernardo");
console.log(otherNames);

// Value by reference
let mirrorArray = names;
mirrorArray.pop();

console.log(names);

// Copying values ​​(does not make reference)
mirrorArray = [...otherNames];
mirrorArray.pop();

console.log(otherNames);
console.log(otherNames.length);

const newNames = names.slice(0, 1);
console.log(newNames);

const userName = "Luiz Otávio Miranda";
console.log(userName.split(" "));
console.log(userName.split(" ").join(" "));
