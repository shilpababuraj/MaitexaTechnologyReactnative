
// const arrayNum=[1,2,3,4,5];
// const sum = arrayNum.reduce
// (function(a, b) 
// { 
//     return a + b;
//  }, 0);

// console.log(`sum is ${sum}`);

let arrayNum=[1,2,3,4,5];
let sum =0;
for (let i=0; i<arrayNum.length; i++)
{
    sum+=arrayNum[i];
}
console.log(`sum is ${sum}`);

