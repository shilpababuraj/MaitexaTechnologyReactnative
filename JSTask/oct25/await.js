// The keywordd async before a function makes the function return a promise:

// "async and await make promise easier to write"

// async makes a function return a promise

//await makes a function wait for a promise

// the await keyword can only be used inside an async function

async function myDisplayer (){
    let myPromise = new Promise(function(resolve,reject)
    {
        resolve("hi !!");
    }
    );
    document.getElementById("demo").innerHTML=await myPromise;

}

myDisplayer();