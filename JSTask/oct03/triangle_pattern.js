
// let n=5;
// let string="";

// for (let i=1 ; i<=n; i++)
// {
//     for(let j=1; j<=i; j++)
//     {
//         string+=j
//     }

//     string+="\n"
// }

// console.log(string)





let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  // Adding spaces to center align the numbers
  for (let s = 1; s <= n - i; s++) {
    string += " ";
  }

  // Adding numbers in increasing order
  for (let j = 1; j <= 2 * i - 1; j++) {
    string += j;
  }

  string += "\n";
}

console.log(string);
