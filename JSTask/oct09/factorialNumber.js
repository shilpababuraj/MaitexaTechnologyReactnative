//Create a function that calculates the factorial of a given number


let n=3;
function factorialNum (n)
{
    let fact=1;
  
       for (let i=1; i<=n; i++)
       {
        fact=fact * i;
       }
    return fact

  
}

console.log(factorialNum(n))


