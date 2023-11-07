// -background-changer

import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function BgColorChange() {
    const [bgColor, setBgColor] = useState('#ffffff')

    const GenerateColor= ()=>{
        let hash ='#';
       let colorsRange='0123456789ABCDEF'

        for (let i=0;i<6;i++)
        {
          hash =hash + colorsRange [Math.floor(Math.random()*16)]
        }

        setBgColor(hash)
    }

  return (
    <View style={{flex:1,
      justifyContent:'center',
      alignItems:'center',
        backgroundColor:bgColor,
       
        }}>

       <View style={{marginBottom:700,}}>
    <Button
    
    title='PRESS ME !'
    color='black'
    onPress={()=>{
        GenerateColor()
      
    }}
    />
     </View> 
    </View>
  )
}

const styles = StyleSheet.create({
    // container:{
    //     flex:1,
    //     justifyContent:'center',
    //     alignItems:'center',
    //     backgroundColor:bgColor,
        
    // }
})