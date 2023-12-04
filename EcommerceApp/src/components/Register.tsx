import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text,TouchableOpacity, Image } from 'react-native';
import logo from '../assets/images/logo.png';
import Toast from 'react-native-toast-message';


const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);

  // console.log('Username:', username);
  // console.log('Password:', password);
  // console.log('Name:', name);
  // console.log('Email:', email);
  // console.log('Phone:', phone);

  const handleRegistration = () => {
  
      fetch('https://ecommerce-s2.onrender.com/api/register',
  {
  method :'POST',
  headers:{
    Accept :"application/json",
    "content-Type":"application/json"
  },
  body:JSON.stringify( {
    username:username,
    password:password,
    name:name,
    email:email,
    phone:phone
  }),
  })
  .then((res)=>res.json())
  .then((resData)=>{

  console.log(`registration successfull status : ${resData.Success}`)
  if (resData.Success==true)
  {
    navigation.navigate('Login'); 
  }
  else
  {
    console.log(`Error message : ${resData.Message}`);
  }
 
  })
  
  
  // .catch((error)=>console.log(`registration Fail : ${error}`))
  .catch((error)=>
  Toast.show({
    type: 'error',
    text1: error.Message,
    // text2: 'This is some something 👋'
  }))
  
  // Reset the form after registration
      setUsername('');
      setPassword('');
      setName('');
      setEmail('');
      setPhone('');

     

  };


  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
                <Image source={logo} resizeMode="contain" style={styles.logoImage} />
            </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        maxLength={4}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.loginBtn} onPress={handleRegistration}>
                <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
  },
  input: {
    height: 40,
    width: '80%',
    marginBottom: 40,
    borderWidth: 1,
    padding: 10,
    borderColor:'grey'
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
logoImage: {
  marginBottom: 25,
  width: 250,
  height: 100,
},
logoView: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  marginBottom: 15,
  marginTop: 0,
},
});

export default Register;
