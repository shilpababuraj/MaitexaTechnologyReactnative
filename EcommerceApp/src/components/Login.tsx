import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import logo from '../assets/images/logo.png';
// import axios from 'axios';

export default function Login({navigation}) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
 // State variable to track password visibility 
 const [showPassword, setShowPassword] = useState(false); 

    const handleLogin = () => {

        console.log('haiii');
        console.log(userName);
        console.log(password);
        
        
        
        // axios.post('url',{username: userName, password: password})
    //     axios
    //   .post('https://jsonplaceholder.typicode.com/posts', {
    //     username:userName,
    //     password:password
    //   })
    //   .then((response) => response.json())
    //         .then((responseData) => {
    //           console.log((responseData));
    //         })

    //     .catch ((err)=>console.log(err))

        fetch("https://ecommerce-s2.onrender.com/api/login", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body:{
                username:userName,
                password:password
            },
          })
            .then((response) => response.json())
            .then((responseData) => {
              console.log((responseData));
            })

        .catch ((err)=>console.log(err))
       

    }
  // Function to toggle the password visibility state 
  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
}; 

    return (
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image source={logo} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    value={userName}
                    style={styles.inputText}
                    placeholder="username"
                    placeholderTextColor="#AFAFAF"
                    onChangeText={email => setUserName(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                   secureTextEntry={!showPassword}
                    value={password}
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#AFAFAF"
                    onChangeText={password => setPassword(password)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.actions}>
                <TouchableOpacity style={{ marginHorizontal: 15 }}>
                    <Text
                    //   style={styles.forgot}
                    >Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                    <Text style={styles.singUp}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#fb5b5a',
        marginBottom: 40,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#EAEAEA',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: '#777777',
        fontWeight: '800',
    },
    singUp: {
        color: '#d33db2',
        fontWeight: '500',
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#d33db2',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    loginText: {
        color: '#ffffff',
        fontWeight: '800',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    logoView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
        marginTop: 0,
    },
    logo: {
        marginBottom: 25,
        width: 250,
        height: 100,
    },
});