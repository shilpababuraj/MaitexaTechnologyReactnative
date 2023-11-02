// program to find the largest among three numbers


const num1 = parseInt(prompt("Enter a first number: "));
const num2 = parseInt(prompt("Enter a second number: "));
const num3 = parseInt(prompt("Enter a third number: "));

let largest;;

if (num1>=num2 && num1>=num3)
{
    largest==num1;
}
else if (num2>=num1 && num2>=num3)
{
    largest=num2;
}
else
{
    largest==num3
}

console.log(`The largest among three number is ${largest}`)