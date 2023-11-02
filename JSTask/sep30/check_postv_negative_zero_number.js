//check if number is +,- or 0

const number2 = parseInt(prompt("Enter a number: "));
// check if number is greater than 0
if (number2 > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number2 == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}