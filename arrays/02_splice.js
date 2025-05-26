//                -5       -4      -3          -2       -1
//                 0        1       2           3        4
const names = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

// The splice() method of Array instances changes the contents of an array
// by removing or replacing existing elements and/or adding new elements in place.
const removed = names.splice(4, 1);
console.log(names, removed);

const added = names.splice(3, 0, "Luiz");
console.log(names, added);

//
const otherExample = names.splice(3, 2, "Gustavo", "Bernardo");
console.log(`Removidos: ${otherExample}\nArray: ${names}`);
