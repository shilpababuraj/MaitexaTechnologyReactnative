//string

const firstName="John";
const lastName="Roy";

// console.log(firstName +' ' + lastName) // output :John Roy
// '' = no space allowed
// ' ' = space allowed
// \n = next line output: John
                    //    Roy   
// \t= tab line output:John    Roy



//string methods

// 1) String length
//syntax:str.length
let nam="shilpa shabin";
let result1=nam.length;
console.log(result1)  //13

// 2) String replace()
//syntax:str.replace(pattern, replacement)
let result2=nam.replace('shilpa','shabin') //str.replace(pattern, replacement)
console.log(result2)  //shabin shabin

// 3) String indexOf()
//syntax:str.indexOf(searchValue, fromIndex)
let result3=nam.indexOf('pa')
console.log(result3) //4

// 4) String lastIndexOf()
//syntax:str.lastIndexOf(searchValue, fromIndex)
let result4=nam.lastIndexOf('sha')
console.log(result4) //7

// 5) String startsWith()
// syntax:str.startsWith(searchString, position)
let result5=nam.startsWith('a')
console.log(result5) //false

// 6) String endsWith()
//syntax:str.endsWith(searchString, length)
let result6=nam.endsWith('a')
console.log(result6) //false

// 7) String toUpperCase()
//syntax:str.toUpperCase()
let result0=nam.toUpperCase()
console.log(result0) //SHILPA SHABIN

// 8) String toLowerCase()
//stntax:str.toLowerCase()
let result01=nam.toLowerCase()
console.log(result01) //shilpa shabin

// 9) String includes()
//syntax:str.includes(searchString, position)
let result7=nam.includes('ilk')
console.log(result7) // false

// 10) String repeat()
//syntax:str.repeat(count)
let result8=nam.repeat(3)
console.log(result8) //shilpa shabinshilpa shabinshilpa shabin

// 11) String match()
//syntax:str.match(regexp)
let result9=nam.match('shabin')
console.log(result9)  //[ 'shabin', index: 7, input: 'shilpa shabin', groups: undefined ]

// 12) String search()
//syntax:str.search(regexp)
let result10=nam.search('sha')
console.log(result10) //7

// 13) String concat()
// syntax : str.concat(str1, ..., strN)
let result11=nam.concat('Niharika')
console.log(result11) // shilpa shabinNiharika

// 14) String split()
//syntax:str.split(separator, limit)
let result12=nam.split("/")
console.log(result12)

// 15) String slice()
// syntax:str.slice(beginIndex, endIndex)
let result13=nam.slice(0,9)
console.log(result13)  //shilpa sh

// 16) chatAt()


