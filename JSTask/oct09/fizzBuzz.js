
// Implement the FizzBuzz game as a function. It should print numbers from 1 to n,
//  but replace multiples of 3 with "Fizz" and multiples of 5 with "Buzz," and multiples 
//  of both with "FizzBuzz."

let number=10;
function fizzBuxxGame ()
{
    if(number % 5 ===0  && number % 3 ===0) 
    {
        console.log('fizzBuzz')
    }
    else if (number % 3 ===0)
        {
          console.log("fizz")  
        }
    else if(number % 5 ===0 ) {
        console.log('Buzz')
    }
    else 
    {
        console.log('invalid')
    }
    return number;
}
console.log(fizzBuxxGame(number))