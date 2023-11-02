
// spread  (convert array  to each element will be displayed)
// (using spread operator pick each element from the array and return a array elements without array
         

function sumOne (a,b)
{
    return a + b;
}

var myA= [5,4];

console.log(myA); //[5,4]
console.log(...myA);  //5,4  uisng spread
console.log(sumOne(myA)) ; //5,4undefined
console.log(sumOne(...myA)) //9

//rest  (rest of  elements convereted in to an array)

function sumTwo (...args)
{
 console.log(args);
//  let multi = a * b;
 let sum=0;
 for ( const arg of args)
 {
    sum += arg;
 }
 return [ sum];
}
console.log(sumTwo(2,3,1,5,7))
// console.log((2,3,1,5,7))