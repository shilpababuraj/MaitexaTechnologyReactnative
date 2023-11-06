import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather'

export default function Signin() {
  return (
    <View style={styles.container}>

<Image
          source={require('../assets/images/bg.png')}
          style={styles.imageStyle}
        />
         <Text style={styles.text1}>Get on Board !</Text>
      <Text  style={styles.text2}>Create your profile and start your journey</Text>
      <View style={styles.inputStyle}>
        <AntDesign name="user" style={{top: 18, fontSize: 18, left: 10}} />
        <TextInput
          placeholder="Full Name"
          style={{paddingLeft: 20, fontSize: 16, top: 4}}
        />
      </View>
      <View style={styles.inputStyle}>
        <AntDesign name="mail" style={{top: 18, fontSize: 18, left: 10}} />
    <TextInput placeholder='E-Mail'  style={{paddingLeft: 20, fontSize: 16, top: 4}}/>
    </View>
    <View style={styles.inputStyle}>
        <Feather name="hash" style={{top: 18, fontSize: 18, left: 10}} />
    <TextInput placeholder='Phone Number'  style={{paddingLeft: 20, fontSize: 16, top: 4}}/>
    </View>
    <View style={styles.inputStyle}>
    <Entypo name="fingerprint" style={{top: 18, fontSize: 18, left: 10}} />
    <TextInput placeholder='Password' style={{paddingLeft: 20, fontSize: 16, top: 4}}/>
</View>
    <TouchableOpacity style={styles.button1}> 
        <Text style={styles.button1Text}>SIGNUP</Text>
    </TouchableOpacity>
    <Text style={{textAlign:'center',fontSize:18}}>OR</Text>

    <TouchableOpacity style={styles.button2}>
          <Image source={require('../assets/images/google.png')} style={{width:30,height:30,left:60,top:8}}/>
        <Text style={styles.button2Text}>SIGN-IN WITH GOOGLE</Text>
      </TouchableOpacity>
      <View style={styles.loginStyle}>
    <Text >Already have an Account?</Text>
<TouchableOpacity style={{}}>
    <Text style={{color:'#0ABDE3',left:5}}>LOGIN</Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        paddingHorizontal:10
     
           
         },
         imageStyle: {
             width: 200,
             height: 200,
             borderRadius: 60 / 2,
             marginTop:10,
           },
           text1:{
            fontSize:35,
            paddingVertical:10,
            fontWeight:'bold',
            color:'black'
            },
            text2:{
            color:'black',
            fontSize:15,
            },
            inputStyle:{
            borderWidth:0.5,
            borderRadius:5,
            borderColor:'black',
            margin:8,
            flexDirection:'row'
            },
            button1: {
                margin: 8,
                padding: 15,
                backgroundColor: 'black',
                borderRadius: 5,
                // width:'90%',
              },
              button1Text:{
              color:'white',
              textAlign:'center',
              fontSize:16
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
                bottom:20
            
              },
              loginStyle:{
                flexDirection:'row',
                textAlign:'center',
                justifyContent:'center',
                
                
              }
})