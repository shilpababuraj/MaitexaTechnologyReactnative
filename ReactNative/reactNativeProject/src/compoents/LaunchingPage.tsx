import {StyleSheet, View, Image, Text, Button} from 'react-native';
import React from 'react';

export default function LaunchingPage() {
  return (
    <View style={styles.pageContainer}>
      
        <Image
          source={require('../assets/images/bg.png')}
          style={styles.imageStyle}
        />
{/* 
        <View style={styles.textContainer}> */}
          <Text style={styles.text1}>Build Awesome App</Text>
          <Text style={styles.text2}>Lets put your creativity on the highway.</Text>
          <View style={styles.buttonContainer}>
            <Button title="LOGIN" />
            <Button title="SIGNUP" />
          </View>
        {/* </View> */}
      </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF222',
  },
  
  imageStyle: {
    width: 300,
    height: 300,
    borderRadius: 60 / 2,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
//   textContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFF222',
//   },
 text1:{
    fontSize:25,
    fontWeight:'bold',
    color:'black'
   },
   text2:{

   }
});
