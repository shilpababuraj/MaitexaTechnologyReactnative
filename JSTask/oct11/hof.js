// function callbackFunction ()
// {
//     console.log('heloo')
// }

// function HigherOrderFunction (fun)
// {
//     console.log('haiiii')
//     fun(); //we say callback function
// }

// HigherOrderFunction(callbackFunction);

// // Implement the higher order function concept in the function of calculating
// //  the area and diameter of a circle you have done.

// const radius= [1,2,3,4,5]

// function areaOfCircle ()
// {
//     let area=[];
//     for (let i=0; i<=radius.length; i++)
//     {
//         area.push(3.14 * i)
     
//     }
// console.log(area)
// }

// function diameterOfCircle (param)
// {
// let diameter= [];

// for (let i=0; i<=radius.length; i++)
//     {
//      diameter.push (i * i)
//     }
//     param();
//    console.log(diameter)
    
// }


// diameterOfCircle(areaOfCircle);



   
    // const area =[];
    // const diameter=[];

    // function hof (radius)
    // {
    //  for (let i=1; i<=radius.length; i++)
    //  {
    //     area.push(3.14 * i);
    //     diameter.push(i * i);
    //  }
    //     console.log(area);
    //     console.log(diameter);
    // }
    // hof ([1,2,3,4]);

    const radius=[1,2,3];

    const area= function (radius) {
        return Math.PI * radius*radius ;
    }

    const diameter= function (radius){
        return 2*radius;
    }

    const hof =function(radius,logic)
    {
        const output =[];

        for (let i=0; i<radius.length; i++)
        {
            output.push(logic(radius[i]));
        }
      return output;
    };

console.log(hof(radius,area));
console.log(hof(radius,diameter))

   


