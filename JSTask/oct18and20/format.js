var email=document.getElementById('email');
var error = document.getElementById('error');  // Change 'errors' to 'error'
var phoneNumber = document.getElementById('phoneNumber');
var password = document.getElementById('password')

function validation (){
    // var regexp="/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/;";
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})([a-z]{2,3})?$/; // Remove double quotes and semicolon
    var phonenoregEXP = /^\d{10}$/;
    var passwordregex =  /^[a-zA-Z0-9!@#$%^&*]{6,6}$/;


    // if (email.value == ''){
    //     error.innerHTML = "empty feild";
    //     error.style.color ="red"
        
    // }
    
    // else if(!regexp.test(email.value)){
    //     error.innerHTML ="please enter valid data"
    //     error.style.color ="red"
       
    // }
    // else{
    //     error.innerHTML ="valid email id"
    //     error.style.color ="green"
        
    // }

    // if (phoneNumber.value == ''){
    //     error.innerHTML = "empty feild";
    //     error.style.color ="red"
        
    // }
    // else if (!phonenoregEXP.test(phoneNumber.value)){
    //     error.innerHTML='enter valid data';
    //     error.style.color='red';
      
    // }
    // else{
    //     error.innerHTML ="valid phone number"
    //     error.style.color ="green"
        
    // }
    if (password.value == '' ){
        error.innerHTML = "empty feild";
        error.style.color ="red"
       
    }
    else if (!passwordregex.test(password.value && password.length==6)){
        error.innerHTML = "enter valid data";
        error.style.color ="red"
      
    }
    else{
        error.innerHTML ="valid password"
        error.style.color ="green"
    
    }
}

