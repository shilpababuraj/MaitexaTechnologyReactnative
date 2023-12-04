//compute the sum

const numbers = [65, 44, 12, 4];
let sum =0;

function sumofArray ()
{
    numbers.forEach((item)=>{
    console.log(item)
    sum=sum + item;
    }
    )
return sum;
}


console.log(sumofArray())  //output -125

//item
// 65
// 44
// 12
// 4



