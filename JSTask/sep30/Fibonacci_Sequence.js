//JavaScript Program to Print the Fibonacci Sequence

const prompt = require("prompt-sync")();
const number = parseInt(prompt("Enter a number: "));
let n1=0,n2=1,nextTerm;

console.log('fibonacci series')

for (let i=1; i<=number; i++)

{
    console.log(n1)
    nextTerm=n1+n2;
    n1=n2;
    n2=nextTerm;
}