//A callback is a function passed as an argument to another function

// This techique allows a function to call another function

// A callback function can run after another function has finished


//--------Examples-----------

//suppose you want to do a calculation , and then display the result

// you could call a calculator function (mycalculator), save the result, and then call another function to display result:

//function myDisplayer(some){
//     document.getElementById("demo").innerHTML=some;  //display 

// }


// function mycalculator(num1,num2){
//     let sum=num1 + num2;
//     return sum;
// }

// let result = myCalculator (5,5);
// myDisplayer(result)

//-----------exapmle 2 ----------

//or u could a calculator function (myCalculator), and let the calculator function callback

//function myDisplayer(some){
//     document.getElementById("demo").innerHTML =  some;
// }

// function myCalculator(num1,num2){
//     let sum= num1 + num2;
//     myDisplayer(sum);
// }

// myCalculator(5,5);

//---------example 3 using callback------

//the problem with the first example above is that u have to call 2 function to display

//the problem with the second example , is that cannot prevent the calculator function from

//using a callback , you could call the calculator function(myCalculator) with a callback, and
//function run the callback after the calculation is finished

//function myDisplayer(some){
//     document.getElementById("demo").innerHTML=some;
// }

// function myCalculator (num1,num2,myCallback){
//     let sum = num1 + num2 ;
//     myCallback(sum);
// }

// myCalculator(5,5, myDisplayer);


//----------callback in setTimeout--------

// function myFunction (value){
//     document.getElementById("demo").innerHTML=value;

// }

// setTimeout(()=>{myFunction("hi !!!")},3000);