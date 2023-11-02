
//square root of each element

const numbers = [4, 9, 16, 25];
const sqroot= numbers.map(Math.sqrt);
console.log(sqroot);  // [ 2, 3, 4, 5 ]

//multiply  y 10 of eaach element

const numbers1 = [65, 44, 12, 4];

function mul ()
{
    return numbers1.map((num)=>num * 10) ;
}

console.log (mul()); //[ 650, 440, 120, 40 ]

//full name  for each person

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];

  function getFullName ()
  {

    return persons.map((item)=>[item.firstname, item.lastname].join(' '));

  }
    console.log(getFullName()) // [ 'Malcom Reynolds', 'Kaylee Frye', 'Jayne Cobb' ]

  