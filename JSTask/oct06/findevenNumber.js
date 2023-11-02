
let number= [1,2,4,6,8,90,45,23,67,46,87];
let even= [];

for (let i=0; i<number.length; i++)
{
    if(number[i] % 2 === 0)
    {
        even.push(number[i]);
    }
}
console.log(even)