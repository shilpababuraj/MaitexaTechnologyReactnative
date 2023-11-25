import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '../App';
import siginData from './SiginData';

type SigninProps = NativeStackScreenProps<AppStackParamList, 'SigninData'>;

export default function Signin({navigation}: SigninProps) {

  const [SigninDetails,setSigninDetails] = useState({fullName:'',email:'',phoneNumber:'',password:''})


  const onclickData=()=>
  {
    navigation.navigate('SiginData', {SiginDataDetails:SigninDetails})
    console.log(SigninDetails)
  }
  
const handleSignin=(data:string,value:string)=>{

setSigninDetails({...SigninDetails,[value]:data})
}

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/bg.png')}
        style={styles.imageStyle}
      />
      <Text style={styles.text1}>Get on Board !</Text>
      <Text style={styles.text2}>
        Create your profile and start your journey
      </Text>
      <View style={styles.inputStyle}>
        <AntDesign name="user" style={{top: 18, fontSize: 18, left: 10}} />
        <TextInput
          placeholder="Full Name"
          style={{paddingLeft: 20, fontSize: 16, top: 4}}
          value={SigninDetails.fullName}
          onChangeText={(text)=>{handleSignin(text,'fullName'),console.log(text)}}
        />
      </View>
      <View style={styles.inputStyle}>
        <AntDesign name="mail" style={{top: 18, fontSize: 18, left: 10}} />
        <TextInput
          placeholder="E-Mail"
          value={SigninDetails.email}
          onChangeText={(text)=>{handleSignin(text,'email')}}
          style={{paddingLeft: 20, fontSize: 16, top: 4}}
        />
      </View>
      <View style={styles.inputStyle}>
        <Feather name="hash" style={{top: 18, fontSize: 18, left: 10}} />
        <TextInput
          placeholder="Phone Number"
          value={SigninDetails.phoneNumber}
          onChangeText={(text)=>{handleSignin(text,'phoneNumber')}}
          style={{paddingLeft: 20, fontSize: 16, top: 4}}
        />
      </View>
      <View style={styles.inputStyle}>
        <Entypo name="fingerprint" style={{top: 18, fontSize: 18, left: 10}} />
        <TextInput
          placeholder="Password"
          value={SigninDetails.password}
          onChangeText={(text)=>{handleSignin(text,'password')}}
          style={{paddingLeft: 20, fontSize: 16, top: 4}}
        />
      </View>
      <TouchableOpacity style={styles.button1}
      onPress={onclickData}
      >
        <Text style={styles.button1Text}>SIGNUP</Text>
      </TouchableOpacity>
      <Text style={{textAlign: 'center', fontSize: 18}}>OR</Text>

      <TouchableOpacity style={styles.button2}>
        <Image
          source={require('../assets/images/google.png')}
          style={{width: 30, height: 30, left: 60, top: 8}}
        />
        <Text style={styles.button2Text}>SIGN-IN WITH GOOGLE</Text>
      </TouchableOpacity>
      <View style={styles.loginStyle}>
        <Text>Already have an Account?</Text>
        <TouchableOpacity
          style={{}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#0ABDE3', left: 5}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  imageStyle: {
    width: 200,
    height: 200,
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
  button1: {
    margin: 8,
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 5,
    // width:'90%',
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
    // width: '90%',
  },
  button2Text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'bold',
    bottom: 20,
  },
  loginStyle: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
