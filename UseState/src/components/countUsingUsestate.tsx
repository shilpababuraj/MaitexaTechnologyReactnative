// Create an counter app in react native.

import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function CountUsingUsestate() {
    const [counting, seCounting] = useState(0)
  return (
    <View style={styles.container}>
        <Text></Text>
        <Text></Text>
      <Text>{counting}</Text>
      <Text></Text>
      <Text></Text>
      <Button 
      title='Click'
      color='red'
      accessibilityLabel=" state will counting"
      onPress={()=>{
        seCounting (counting + 1)
      }
    }
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})