import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/bg.png')}
        style={styles.imageStyle}
      />
      <Text style={styles.text1}>Welcome Back,</Text>
      <Text style={styles.text2}>
        Make it work, make it right, make it fast
      </Text>
      <View style={styles.inputStyle}>
        <AntDesign name="user" style={{top: 18, fontSize: 18, left: 10}} />
        <TextInput
          placeholder="E-mail"
          style={{paddingLeft: 20, fontSize: 16, top: 4}}
        />
      </View>

      <View style={styles.inputStyle}>
        <Entypo name="fingerprint" style={{top: 18, fontSize: 18, left: 10}} />
        <TextInput
          placeholder="Password"
          style={{paddingLeft: 20, fontSize: 16, top: 4}}
        />
        <MaterialIcon
          name="visibility"
          style={{top: 18, fontSize: 18, right: 20, position: 'absolute'}}
        />
      </View>
      <TouchableOpacity>
      <Text style={styles.forgotStyle}>Forget Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.button1Text}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={{textAlign: 'center', fontSize: 18}}>OR</Text>

      <TouchableOpacity style={styles.button2}>
          <Image source={require('../assets/images/google.png')} style={{width:30,height:30,left:60,top:8}}/>
        <Text style={styles.button2Text}>Sign-in with google</Text>
      </TouchableOpacity>

      <View style={styles.loginStyle}>
      <Text style={{textAlign: 'center'}}>
        Don't have an Account?
        </Text>
        <TouchableOpacity style={{}}>
        <Text style={{color: '#0ABDE3'}}>  Signup</Text>
        </TouchableOpacity>
  </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 60 / 2,
    marginTop: 10,
  },
  text1: {
    fontSize: 35,
    paddingVertical: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    color: 'black',
    fontSize: 15,
  },
  inputStyle: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'black',
    margin: 8,
    flexDirection: 'row',
  },
  forgotStyle: {
    flexDirection: 'row',
    textAlign: 'right',
    fontSize: 15,
    color: '#0ABDE3',
    fontWeight: 'bold',
  },
  button1: {
    margin: 25,
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 5,
    width: '90%',
  },
  button1Text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  button2: {
    margin: 20,
    // backgroundColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    width: '90%',
  },
  button2Text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'bold',
    bottom:20

  },
  loginStyle:{
    flexDirection:'row',
    textAlign:'center',
    justifyContent:'center',
    
    
  }
});
