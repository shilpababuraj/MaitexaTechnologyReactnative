import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { AppStackParamList } from '../App';
import { useRoute } from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type LoginDataProps = NativeStackScreenProps <AppStackParamList,"LoginData">;

export default function LoginData({navigation}:LoginDataProps) {

const [result, setresult] = useState('')

    const route = useRoute();    // used to display params data
    const {Detail}=route.params as {
      Detail: {}
    }

    // useEffect(() => {
    // setresult(Email)
    // }, [])
    
  return (
    <View style={styles.container}>
      <Text>Email Address : {Detail.email}</Text>
      <Text>password:{Detail.password}</Text>
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