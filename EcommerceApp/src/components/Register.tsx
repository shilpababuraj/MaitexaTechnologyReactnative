import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text,TouchableOpacity } from 'react-native';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  const handleRegister = () => {
  
fetch('https://ecommerce-s2.onrender.com/api/register',
{
method :'POST',
headers:{
  Accept :"application/json",
  "content-Type":"application/json"
},
body: {
  username:username,
  password:password,
  name:name,
  email:email,
  phone:phone
}
})
.then((res)=>res.json())
.then((resData)=>console.log(resData))
.catch((err)=>console.log(err))

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);

    // Reset the form after registration
    setUsername('');
    setPassword('');
    setName('');
    setEmail('');

    
    setPhone('');
  };

  return (
    <View style={styles.container}>
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
      <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
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
    padding: 20,
  },
  input: {
    height: 40,
    width: '80%',
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
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
});

export default RegisterPage;
