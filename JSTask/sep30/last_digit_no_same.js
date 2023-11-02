  /* program to check whether the last digit of three
numbers is same */

const a= parseInt(prompt('enter the first number'));
const b=parseInt(prompt('enter the second number'));
const c=parseInt(prompt('enter the third number'));

result1=a % 10;
result2=b % 10;
result3=c % 10;

if (result1== result2 && result1 ==result3)
{
    console.log('last digits of 3 number is same')
}
else{
    console.log('last digits of 3 number is different')
}