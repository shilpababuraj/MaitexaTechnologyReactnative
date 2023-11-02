//js program to find factorial of a number
const prompt = require("prompt-sync")();

const number = parseInt(prompt("Enter a number: "));
let factorial=3;

for(let i=1; i<=number; i++)
{
    factorial*=i;

}

console.log(`factorial= ${factorial}`)