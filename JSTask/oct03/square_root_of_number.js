const prompt = require("prompt-sync")();

let a = parseInt(prompt("Enter a number: "));

 
for (let i=1; i<=10; i++)
{
    result=i*i;
    console.log(`${i} * ${i} = ${result}`)
}


let i=0;

while(i<=10)
{
    result=i*i;
    console.log(result);
    console.log(`${i} * ${i} = ${result}`)
    i++;
   
}

let j=0;

do
{
 result=j * j;
 j++;
 console.log(result)
}
while(j<=10)