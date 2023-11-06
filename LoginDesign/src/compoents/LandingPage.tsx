import {
    StyleSheet,
    View,
    Image,
    Text,
    Button,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  
  export default function LandingPage() {
    return (
      <View style={styles.pageContainer}>
        <Image
          source={require('../assets/images/bg.png')}
          style={styles.imageStyle}
        />
 
       
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>

<Text style={styles.text1}>Build Awesome Apps</Text>
        <Text style={styles.text2}>Lets put your creativity on the development highway.</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>SIGNUP</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    pageContainer: {
      flex: 1,
    width:'100%',
    height:'100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF222',
      
    },
  
    imageStyle: {
      width: 300,
      height: 300,
      borderRadius: 60 / 2,
      marginTop:50
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop:50,
      bottom:50,
    },

    text1: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'black',
      marginTop:50

    },
    text2: {color:'black'},
    button1: {
      margin: 20,
      padding: 10,
      borderColor:'black',
      borderWidth:1.5,
      borderRadius: 5,
      width:'40%',

    },
    button2: {
      margin: 20,
      padding: 10,
      backgroundColor: 'black',
      borderRadius: 5,
      width:'40%',
    },
    buttonText1: {
      color: 'black',
      fontSize: 16,
      textAlign:'center',
    },
    buttonText2: {
      color: 'white',
      fontSize: 16,
      textAlign:'center',
    },
  });
  