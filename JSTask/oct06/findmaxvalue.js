const array=[90,78,36,376,89];

console.log(Math.max(...array));   //376  using spread operator

// The ...array part is the spread operator, which spreads the elements of the array into individual arguments for the Math.max() function.
//  This allows Math.max() to find the maximum value among the elements of the array. The spread operator is used here to make it easier to pass
//   the array's elements as separate arguments to the function.