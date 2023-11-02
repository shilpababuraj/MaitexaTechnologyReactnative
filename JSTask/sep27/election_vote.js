//    Minimum age to Cast your Vote : 18 
//    Minimum age to Contest an Election: 25.
//    Given the age verify if the person can vote and can s(he) contest an election.

let x=18;

if (x<18)
{
    console.log("person can't vote for election")
}
else if((x>=18)&&( x>=25))
{
    console.log("person can vote for election")
}
else
{
    console.log('person can contest an election')
}