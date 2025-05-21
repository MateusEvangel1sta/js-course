const students = ['Luiz', 'Maria', 'João'];

console.log(students);
console.log(students[0]);

students[0] = 'Eduardo';
console.log(students)

// Returns length
console.log(students.length);

// Array.protorype.push() -> The method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
students.push('Luiza');
console.log(students);

// Array.protorype.unshift() -> The method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
students.unshift('Fábio');
console.log(students);

console.log(students.length);

// Array.protorype.pop() -> The method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
students.pop();
console.log(students);

// Array.protorype.shift() -> The method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
students.shift();
console.log(students);

console.log(students.length);
