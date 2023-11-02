// create a program using function that the page can find total marks ,average,percentage of 5
// subjects of a student mark list.


var sub1='Eng',sub2='Mal',sub3='Maths',sub4='Social',sub5='Science';
var m1=50,m2=30,m3=40,m4=60,m5=80;
var percentage=totalMark/100;
var totalMark=m1+m2+m3+m4+m5;
var average=totalMark/5;

console.log(`totalMark=${totalMark}`)
console.log(`average=${average}`)

if (average>=100)
{
console.log('grade A')

}
else if (average>=80)
{
console.log('grade B')
}

else if (average>=60)
{
console.log('grade C')
}
else if (average>=40)
{
console.log('grade D')
}
else{
console.log('Fail')
}