// program to find the factors of a number
const prompt = require("prompt-sync")();

const num1 = parseInt(prompt("Enter a number: "));

for (let i=0; i<=num1; i++)
    {
        if(num1 % i=== 0)
        {
    console.log(i);
        }
    }