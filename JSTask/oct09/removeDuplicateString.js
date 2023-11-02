
// Write a function that accepts an array of strings and returns a new array
//  with only the unique strings (remove duplicates).

// let arrStrg= ['a','a','b','c','c','d','e','e'];

// function removeDuplicateStrg (arrStrg) 
// {
//     let uniqueArray= [...uniqueArray Set(arrStrg)]
//      return uniqueArray;
// }
// console.log(removeDuplicateStrg(arrStrg))

let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);