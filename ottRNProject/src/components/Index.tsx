/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Image,
  StyleSheet,
  
  View,
} from 'react-native';




function OTTScreen(){
 
  return (

        <View
          style={{
            backgroundColor: '#333945',flex:1,justifyContent:'center',alignItems:'center'
          }}>
            <Image source={require ('../assests/images/logo.png')} style={styles.logoStyle}/>
        </View>
  )
}

const styles = StyleSheet.create({
    logoStyle:{
        width:200,
        height:100,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default OTTScreen;
