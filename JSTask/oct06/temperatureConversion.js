const prompt = require("prompt-sync")();

//temperature conversion

const celsius=prompt("Enter celsius number  :  ");

const fahrenheit=(celsius * 1.8) + 32;

console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit`)