// Find the EVEN numbers in an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = arr.filter(number => {return number % 2 == 0;});
console.log(even);  //[ 2, 4, 6, 8 ]

const odd= arr.filter((number)=>{return number % 2 != 0;});
console.log(odd) //[ 1, 3, 5, 7, 9 ]