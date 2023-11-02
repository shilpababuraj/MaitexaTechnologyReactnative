
// Create a Student class and initialize it with name and roll number. Make methods to :

// Display - It should display all informations of the student.
// setAge - It should assign age to student
// setMarks - It should assign marks to the student.


class student {  //class define

    constructor(name,roll_number)  // attribute define or initilize
    {
        this.name=name;
        this.roll_number=roll_number;
    }

    Display ()  // function define
    {
        console.log(this.name);
        console.log(this.roll_number);
    }

    setAge (age)
    {
        console.log(age);
    }

    setMarks (marks)
    {
        console.log(marks);
    }
}

const informations = new student ('shilpa',15);   // object create

informations.Display()  // object with function ( need to call function using object (object name .function)
informations.setAge (23)
informations.setMarks(100)

console.log()

// Create a Vehicle class without any variables and methods

class Vehicle{

   
}

// check type of an object

console.log(typeof(informations))


// program to create a class which performs basic calculator operation.

class calculator {

    constructor(number1,number2)
    {
        this.number1=number1;
        this.number2=number2;
    }

    addition ()
    {
      console.log(this.number1 + this.number2)
    }
    substration ()
    {
        console.log(this.number1 - this.number2)
       
    }
    division ()
    {
        console.log(this.number1 / this.number2)
      
    }
    multiplication ()
    {
        console.log(this.number1 * this.number2)
        
    }

  
}

const result = new calculator (5,5)

result.addition ()
result.division ()
result.multiplication ()
result.substration ()


// program to find the area of the rectangle using class

class rectangle {

    constructor (length,breadth)
    {
        this.length= length;
        this.breadth=breadth;
    }

reactangleArea ()
{
    let area =  this.length * this.breadth
    console.log(area)
}
}

const areaReactangle = new rectangle (3,4)
    
areaReactangle.reactangleArea()

//  also find the area of the circle using class 

class area {

    constructor (radius)
    {
     this.radius=radius;

    }

    circleArea (){
         let PI=3.14;
         let area =PI * this.radius * this.radius;
         console.log(area)
    }
    
    
}

const areaCircle = new area (4);
areaCircle.circleArea()
