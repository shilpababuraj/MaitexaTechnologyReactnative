
//sum of array elements

// function sumArrayValues(arr){
//     let sum=0;
    
// for (let i = 0; i < arr.length; i++)
// {
// sum = sum + arr[i];
// }
// return sum;

// }
// const number =[2,4,6,8];

// console.log(sumArrayValues(number));    // 20 calling function

//------------------------------------------------------------

//without passing para define argument directly using argument object

// function sumAllNums()
// {
//     console.log(arguments) //argument objects without passing aprams
// }

// sumAllNums(1,2,3,4) // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

//-----------------------------------------------------------------

// function sumString()
// {
//     console.log(arguments)
// }

// sumString(9,8,7,6,5,4,3);  // [Arguments] { '0': 9, '1': 8, '2': 7, '3': 6, '4': 5, '5': 4, '6': 3 }
// sumString(0); // [Arguments] { '0': 0 }
// sumString(0,1,2); // [Arguments] { '0': 0, '1': 1, '2': 2 }


function sumString()

{
    let sum=0;
  for(let i=0; i<arguments.length; i++)
  {
    sum=sum + arguments[i];
   
  }
  return sum;
}
console.log(sumString(1,2,3,4)) // 10


//instead we use a parameter followed by rest operator with using arraow function

// const allNumSum = (...param)=>
// {
//     console.log(param)
// }
 
// allNumSum(1,2,3,4);

//using for...of

// const sumNumbers=(...param1)=>
// {
//     let sum=0
//     for(const element of param1)
//     {
//         sum+=element;
//     }
//     return sum;
// }

// console.log(sumNumbers(1,2,3,4,5));

//Anonymous function : anonymous function or without name

// const anonymousFun = function()
// {
//     console.log("i am an anonymous fun and my value is stored in anonymousFun")
// }

//function expression

// const square=function(n)
// {
//     return n*n;

// }
// console.log(square(2))


//self invoking function : they are anonymous function which do not need to  called to return a value

// (
//     function(n){
//     console.log(n * n)
// }
// )(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

// let squaredNum=(function(n)
// {
//     return n* n;
// })(10)

// console.log(squaredNum)