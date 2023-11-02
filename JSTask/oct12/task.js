 
// Given an array of numbers, use the map method to create a new array where each 
// element is double the value of the corresponding element in the original array.

// const numbers = [1, 2, 3, 4, 5]

// const result=numbers.map((item)=>item *item)

// console.log(result)


// Given an array of objects containing people's information, use the map method to
//  create a new array containing only their names.

// const people = [
// { name: "Alice", age: 30 },
// { name: "Bob", age: 25 },
// { name: "Charlie", age: 35 },
// ];

// const data =people.map((item)=>item.name);

// console.log(data)

// Given an array of numbers, use the map method to create a new array where each 
// element is the square root of the corresponding element in the original array.

// const numbers1 = [4, 9, 16, 25]

// const root=numbers1.map((item)=>Math.sqrt(item));
// console.log(root)

// Create a function that takes an array of strings and uses the map method to 
// return a new array where the first letter of each string is capitalized.

// const words = ["apple", "banana", "cherry", "date"];

// const capital =words.map((item)=>item.charAt(0).toUpperCase() + item.slice(1))

// console.log(capital)


// Given an array of numbers, filter out the even numbers and then use the map method
//  to create a new array where each remaining element is squared.

const num = [1, 2, 3, 4, 5, 6]

const evenNumber=num.filter((item)=>item % 2 ===0)
console.log(evenNumber)

const squared= evenNumber.map((item)=>item * item)
console.log(squared);


// Given an array of objects representing rectangles with width and height properties,
//  use the map method to create a new array containing the area of each rectangle.

// rectangles = [
// { width: 4, height: 5 },
// { width: 2, height: 3 },
// { width: 6, height: 8 },
// ]

// const area=rectangles.map((item)=>item.width * item.height)

// console.log(area);

// Given an array of numbers, use the map method to create a new array where each
//  number is converted to its string representation.

// const number = [42, 17, 99, 3]

// const string= number.map((item)=>item.toString())

// console.log(string)