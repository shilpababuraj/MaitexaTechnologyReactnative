// program for a simple calculator
const prompt = require("prompt-sync")();

const operator=prompt('enter operator(either +, - ,* , /) : ');
const number1=parseFloat(prompt('enter first number : '));
const number2=parseFloat(prompt('enter second nuber : '));
let result;

if(operator== '+')
{
    result=number1 + number2;
}
else if (operator == '-')
{
    result=number1 - number2;
}
else if(operator== '*')
{
    result=number1 * number2;
}
else
{
    result=number1/number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`)