class User {
    #password
    constructor(name, userName, password){
        this.name = name;
        this.userName = userName;
        this.password = password;

    }

    login (userName,password){
        if(userName===this.userName && password ===this.#password){
            console.log('login successfully')
        } else{
            console.log('Authentication failed');
        }
    }

    setPassword (newPassword)
    {
        this.#password=newPassword;
    }
};

const nehal = new User ('Nehal Mahida','nehal_mahida','password:');

nehal.login ('nehal_mahida','password:');


console.log(nehal.name);
console.log(nehal.password);

nehal.setPassword('new_password');
nehal.login('nehal_mahida','password:')
nehal.login('nehal_mahida','new_password:')