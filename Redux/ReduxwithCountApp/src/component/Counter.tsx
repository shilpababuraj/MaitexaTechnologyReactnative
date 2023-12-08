import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Counter() {
  
    const [counter, setCounter] = useState()
  return (
    <View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>{
            setCounter(counter + 1)
        }}>
    <Entypo name='plus' size={30} color={'#ffff'} style={styles.incrementIcon}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{
        setCounter(counter - 1)
    }}>
        <Entypo name='minus' size={30} color={'#ffff'} style={styles.incrementIcon}/>
       </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({

    incrementIcon:{
        backgroundColor:'grey',
        borderRadius:30,
        padding:10,
        marginHorizontal:10
      },
})