//             01234567
let aString = 'Um texto';
console.log(aString[0]);

// charAt() -> A string representing the character at the specified index.
console.log(aString.charAt())

// concat() -> The function concatenates the string arguments to the calling string and returns a new string.
console.log(aString.concat(' em um lindo dia.'));

// indexOf() -> The method of String values searches this string and returns the index of the first occurrence of the specified substring.
console.log(aString.indexOf('texto'));

// lastIndexOf() -> The last occurrence of searchString found, or -1 if not found.
console.log(aString.lastIndexOf('o'))

//match() -> The method retrieves the result of matching this string against a regular expression.
console.log(aString.match(/[a-z]/g));

// search() -> The method execute a search for a match between a regular expression and this string, returning the index of the first match in the string.
console.log(aString.search(/x/));


aString = 'O rato roeu a roupa do rei de roma.'

// replace() -> A new string, with one, some or all matches of the pattern replaced by the specified replacement.
console.log(aString.replace(/r/g, '#'));

// .length -> Returns the length of string.
console.log(aString.length);

// slice() -> The String value method extracts a section from this string and returns it as a new string, without modifying the original string.
console.log(aString.slice(2, 6));

// substring() -> The method returns the part of this string from the initial index to and excluding the final index, or to the end of the string if no final index is provided.
console.log(aString.substring(0, -5));

// split() -> The method takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
console.log(aString.split(' '));

console.log(aString.toUpperCase());
console.log(aString.toLocaleLowerCase());