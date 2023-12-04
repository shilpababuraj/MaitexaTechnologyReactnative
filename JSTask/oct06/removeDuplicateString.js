// const alphabets=['a','v','i','o','a','k','b','v','o','t','o','u','g','h','k','a','v'];

// function removeDuplicate(alphabets)
// {
//     return alphabets.filter((item, index) => alphabets.indexOf(item) === index);
// }
// console.log(removeDuplicate(alphabets))

// filter((element,index)=>{

// })
const alpha=['a','a','b','b','c','c','d']

function removeDuplicateString ()
{
    const duplicateStr= alpha.filter((item,index)=>alpha.indexOf(item)===index)
    return duplicateStr
}
console.log(removeDuplicateString())

const number=[1,1,2,4,6,5,2]

function removeDuplicateNumber()
{
    const result=number.filter((item,index)=>number.indexOf(item)===index)
    return result;
}

console.log(removeDuplicateNumber())

// let num = [3, 6, 7, 12, 18, 23, 44, 62, 81];

// function evenNumber ()
// {
//     const result = num.filter((item)=>
//     item % 2 ===0
//     )
//     return result;
// }

// console.log(evenNumber())

// function oddNumber()
// {
//     const result1=num.filter((item)=>item % 2 != 0);
//     return result1;
// }

// console.log(oddNumber())