//------typesript -Array--------

// 1. Using square brackets. This method is similar to how you would declare arrays in JavaScript.

// let fruits: string[] = ['Apple', 'Orange', 'Banana'];

// 2. Using a generic array type, Array<elementType>.

// let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];

// Both methods produce the same output.

// examples

// 1.Create an array and perform the following operations
// a) Add 8 elements.
// b) Add an element to the end.
// c) Remove the last element.
// d) Remove the first element.
// e) Add an element to the beginning.

// a) Add 8 elements.
// let arr : string[] = ['apple','orange','grape','lemon','jackfruit','stawberry','pineapple','avocado'];

// b) Add an element to the end.
// console.log(arr.push('butter'));  // 9 
// console.log(arr); // [ 'apple','orange', 'grape','lemon', 'jackfruit', 'stawberry',  'pineapple', 'avocado','butter' ]

// // d) Remove the first element.
// console.log(arr.shift())  //apple
// console.log(arr) // [ 'orange', 'grape','lemon','jackfruit', 'stawberry', 'pineapple','avocado',   'butter']

// // c) Remove the last element.
// console.log(arr.pop()) // butter
// console.log(arr) // [ 'orange','grape', 'lemon', 'jackfruit','stawberry', 'pineapple', 'avocado']

// // e) Add an element to the beginning.
// console.log(arr.unshift('kiwi')) // 8
// console.log(arr) // ['kiwi','orange','grape','lemon', 'jackfruit', 'stawberry','pineapple', 'avocado']

// // f) remove second postion.
// console.log(arr[1]); //orange
// console.log(arr.splice(1,1) ); //  [ 'orange' ]
// console.log(arr)  //[ 'apple','grape', 'lemon','jackfruit','stawberry','pineapple','avocado']

// An array in TypeScript can contain elements of different data types using a generic array type syntax, as shown below.

// Example: Multi Type Array 

// let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
// console.log(values)
// // or 
// let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];


//------TypeScript - Tuples---------

// TypeScript introduced a new data type called Tuple. Tuple can contain two values of different data types.

// Example: Tuple vs Other Data Types 

// var empId: number = 1;
// var empName: string = "Steve";        

// // Tuple type variable 
// var employee: [number, string] = [1, "Steve"];


// Example: Tuple 

// var employee: [number, string] = [1, "Steve"];
// var person: [number, string, boolean] = [1, "Steve", true];

// var user: [number, string, boolean, number, string];// declare tuple variable
// user = [1, "Steve", true, 20, "Admin"];// initialize tuple 

//Define tuple with function.

// function value (name:string,age:number):[string,number]
// {
//    return [name,age];
// }

// console.log(value('shilpa',12))

// ---- Type Inference in TypeScript------- (define object type)

// Define object types using interface

// interface user {
//     name:string;
//     age:number;
// }
// let userDetail: user={name:'shilpa',age:30}

// console.log(userDetail);

// Program to find the multiplication of a number using function with arguments.

// function mul (a : number , b : number)
// {
//   return a * b ;
// }
// let multiplication : number =mul(3,3)
// console.log(multiplication)
// console.log(mul(3,3));

// Find the area of circle using function with return type.

// function area (PI:number , radius :number)
// {
// let areaCircle = PI * radius * radius;
//      return  areaCircle;
// }

// let circle : number = area(Math.PI,3);

// console.log(circle )


// 6.Create a class BMI Calculator with following functions :
// bmicalculation() : to perform bmicalcuation and
// display :
// a)Under weight if the result below18.5
// b)Normal weight if the result between 18.4 and 24.9
// c)Overweight if the result between 25 and 29.9
// d)Obese if the result above 


// class BMICalculator {

//     private weight:number;height:number;BMI:number

//     constructor(weight:number,height:number,BMI:number)
//     {
//         this.weight=weight;
//         this.height = height;
//        this.BMI=BMI;

//    }

//    bmicalculation()
//    {
//     let convert= this.height/100;
//     let  BMI = (this.weight) / (convert * convert) 
//     return BMI;
//    }

//    bmiCheck(){

//     if (this.BMI < 18.5){
//             console.log('Under weight');
//     }
//      else if (this.BMI <=18.4 && this.BMI >24.9){

//         console.log('Normal weigh')
//     }

//     else if (this.BMI <= 25 && this.BMI >29.9){
//         console.log('normal weight')
//     }
//     else {
//         console.log('error')
//     }
//    }
// }

// let bmi = new BMICalculator(60,160,18.5);

// bmi.bmicalculation();
// bmi.bmiCheck();
class BMICalculator {

    private weight:number;height:number;

    constructor(weight:number,height:number,)
    {
        this.weight=weight;
        this.height = height;

   }

   bmicalculation():number
   {
    const convert= this.height/100;
    const  BMI = (this.weight) / (convert * convert) 
    return BMI;
   }

   bmiCheck():void{
    const bmi=this.bmicalculation();

    if (bmi < 18.5){
            console.log('Under weight');
    }
     else if (bmi >= 18.4 && bmi <=24.9){

        console.log('Normal weigh')
    }

    else if (bmi >=25 && bmi <=29.9){
        console.log('Over weight')
    }
    else {
        console.log('Obese')
    }
   }
}

let bmi = new BMICalculator(60,160);

const result =bmi.bmicalculation();
const check=bmi.bmiCheck();
console.log(`Your BMI is ${result}`);















