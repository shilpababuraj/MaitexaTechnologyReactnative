
//slice (returns a piece of array,does not affect orginal array)
const fruits=['kiwi','apple','orange','banana','grapes','mango','jackfruits' ];

const sliceArray=fruits.slice(1);  // ['apple','orange','banana','grapes'];
// const sliceArray1=fruits.slice(1,4);  //starting range include and ending range exclude

// console.log(fruits.slice(fruits.length-1))  // [ 'mango' ] from ending ,range will start to count 
// console.log(fruits.slice(fruits.length-2))   // [ 'grapes', 'mango' ]
// console.log(fruits.slice(1,4))  //

//splice (changes orginal array ) (it will affect orginal array becoz once we define with variable that will also splice and console also splice so it will affected orginal array)

fruits.splice(2,3,) // [ 'kiwi', 'apple', 'mango', 'jackfruits' ] it will delete from 2nd index position to  3rd position
fruits.splice(2,3,'dragonfruit')//[ 'kiwi', 'apple', 'dragonfruit' ]
console.log(fruits)




