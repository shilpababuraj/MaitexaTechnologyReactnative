
const email='shilpababuraj92@gmail.com';

const mailRegx =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function validateMail (email)
{
    return email.match(mailRegx)

}

console.log(validateMail())


