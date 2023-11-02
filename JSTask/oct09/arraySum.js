
// Create a function that takes an array of integers and returns the
// sum of all positive numbers in the array.

let sum=0;
function arraySum()
{
   for (let i=0; i<array.length; i++)
   {
      sum+=array[i];
   }
   return sum;

}

const array=[1,2,3,5,6]
arraySum(array)

console.log(sum)