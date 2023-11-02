// "producing code" is code that can take some time

// "consuming code" is code that must wait for the result

// A promise is a javascript object that links producing code and consuming code

// function myDisplayer(some){
//     document.getElementById("demo").innerHTML=some;
// }

// let myPromise = new Promise (function(myResolve,myReject)
// {
//     let x=1;

//     if(x==0){
//         myResolve("ok")
//     }else{
//         myReject("error");
//     }
// }

// );

// myPromise.then(
//     function(value) {myDisplayer(value)},
//     function(error){myDisplayer(error)}
// );


// ---- using setTimeout-----

// const myPromise = new Promise (function(myResolve,myReject)
// {
//     setTimeout(function(){myResolve("Hi !!");},3000);

// }
// );

// myPromise.then(function(value)
// {
//     document.getElementById("demo").innerHTML=value;

// }
// );

//----------------------------------

const myPromise=new Promise (function(myResolve,myReject)
{
setTimeout(function(){
    let x=0;
    if(x==0){
        myResolve("ok");
    }else{
        myReject("error")
    }
},3000);
}
);

myPromise.then(function(value)
{
    document.getElementById("demo").innerHTML=value;
}
);