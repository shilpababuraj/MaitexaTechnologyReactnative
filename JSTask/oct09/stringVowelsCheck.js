// Create a function that counts the number of vowels in a given string (ignore case).

let vowels= ['a','e','i','o','u'];
let string = 'programming language';

function vowelStrg (str)
{
    let count=0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count;

}

console.log(vowelStrg(string))