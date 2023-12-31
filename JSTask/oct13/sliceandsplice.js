
// //slice (returns a piece of array,does not affect orginal array)
const fruits=['kiwi','apple','orange','banana','grapes','mango','jackfruits' ];

// const sliceArray=fruits.slice(1);  
// console.log(sliceArray); //[ 'apple', 'orange', 'banana', 'grapes', 'mango', 'jackfruits' ]
//  const sliceArray1=fruits.slice(1,4);  //starting range include and ending range exclude
//  console.log(sliceArray1);  // [ 'apple', 'orange', 'banana' ]

// // console.log(fruits.slice(fruits.length-1))  // [ 'mango' ] from ending ,range will start to count 
// // console.log(fruits.slice(fruits.length-2))   // [ 'grapes', 'mango' ]
// // console.log(fruits.slice(1,4))  //

// //splice (changes orginal array ) (it will affect orginal array becoz once we define with variable that will also splice and console also splice so it will affected orginal array)

// const fru =fruits.splice(2,3,) // it will delete from 2nd index position to  3rd position
// console.log(fru);  //[ 'orange', 'banana', 'grapes' ]
// console.log(fruits) //  [ 'kiwi', 'apple', 'mango', 'jackfruits' ]

fruits.splice(2,3,'dragonfruit')
console.log(fruits)  //[ 'kiwi', 'apple', 'dragonfruit', 'mango', 'jackfruits' ]

// const num =[1,2,3,4,5,6,7];

// console.log(num.slice(1,2)); // [2]

// console.log(num.slice(2,4)) //[3,4]  

// console.log(num.splice(1,2)) //[4,5,6,7]

// console.log(num) //[1,2,3]

// console.log(num.splice(2,3)) //[3]
// console.log(num) //[1,2,]

// console.log(num.splice(1,4,6)); //[2]


// const fruits=['kiwi','apple','orange','banana','grapes','mango','jackfruits' ];
// console.log(fruits.splice(2,3,) );