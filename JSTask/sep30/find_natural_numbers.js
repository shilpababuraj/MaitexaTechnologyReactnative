//js program to find sum of natural numbers

const prompt = require("prompt-sync")();
const number = parseInt(prompt("Enter a number: "));
let sum=0;

for (let i=1; i<=number; i++)
{
    sum += i;
    
}
console.log('The sum of natural numbers:', sum);