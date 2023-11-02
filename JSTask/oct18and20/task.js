
// create a child class bus the will inherit all of the variable and methods of the vehicle class

// create a bus class that inherit from the vehicle class.give the capacity argument of bus .seating_capacity() default value of 50

class vehicle{
    constructor(busName,busColor)
    {
        this.busName=busName;
        this.busColor=busColor;
    }

    busVehicle ()
    {
        return (`Bus details : ${this.busName} ${this.busColor}`)
    }


}
class bus extends vehicle
{
    constructor(busName,busColor,id,capacity=50){
        super(busName,busColor);
        this.id=id;
        this.capacity=capacity;
        
    }
    
    busVehicle ()
    {
        return (`${super.busVehicle()}  ${this.id} `)
    }
    
    seating_capacity()
    {
        return `The bus has a seating capacity of ${this.capacity} passengers`
    }


}

const busDetails= new bus('volvo','orange',1);
console.log(busDetails.busVehicle());
console.log(busDetails.seating_capacity());



// js program to create a class in which one method accepts a string from the user and another print it

const prompt = require("prompt-sync")();

class user {
    constructor()
    {
       this.string1='';
    }
    tostring()
    {
        return this.string1=prompt('what is your name :')
    }

    tostring1()
    {
        return this.string1;
    }

}

const stringUser = new user()
console.log(stringUser.tostring());
console.log(stringUser.tostring1());



// create class animal and sub class dog and based on dog create a another sub class dogchild

//multi level inheritance

class animal{    // base class
    
  
}

class dog extends animal {  //derived class

}

class dogChild extends dog{  //derived class

}


// create a classes calulation1,calculation2 with method summation,multiplication and child class calculation3 with method division

//multiple inheritance 

class calculation1{

    constructor(number1,number2){
        this.number1=number1;
        this.number2=number2;
    }

    summation (){
        return (`sum = ${this.number1 + this.number2}`)
    }
  

}


class calculation2 {

    constructor(number1,number2){
        this.number1=number1;
        this.number2=number2;
    }
    multiplication(){
        return (`mul = ${this.number1 * this.number2}`)
    }
}


class calculation3 extends (calculation1,calculation2){
   
        constructor(number1,number2){
            super(number1,number2)
             this.number1=number1;
             this.number2=number2;
    }
         
    division(){
        return (`div = ${this.number1 / this.number2}`)
    }
}

let result = new calculation1 (2,3);
console.log(result.summation());

let result1 = new calculation2 (2,3);
console.log(result1.multiplication());

let result2 = new calculation3 (3,3);
console.log(result2.division());



// class calculation1{
    
//     constructor(num1,num2){
//         this.num1 =num1;
//         this.num2 =num2;
//     }
//     summation(){
//         return(`Summation = ${this.num1 + this.num2}`);
//     }
// };

// class calculation2{
    
//     constructor(num1,num2){
//         this.num1 =num1;
//         this.num2 =num2
//     }

//     multiplication(){
//         return(`Multiplication =${this.num1 * this.num2}`);
//     }
// };

// class calculation3 extends (calculation1,calculation2){

//     constructor(num1,num2){
//     super(num1,num2);
//     this.num1 =num1;
//     this.num2 =num2; 
//     }

//     division(){
//         return(`Division =${this.num1 / this.num2}`);
//     }
// };

// let obj1 = new calculation1(5,9);
// console.log(obj1.summation());

// let obj2 = new calculation2(3,7);
// console.log(obj2.multiplication());

// let obj3 =new calculation3(9,3);
// console.log(obj3.division());