

// Find the ODD numbers in an array

const arra1=[1,2,3,4,5,6,7,8,9,10]

const result=arra1.filter(number=>{
    return number % 2 !== 0;
});
console.log(result)
