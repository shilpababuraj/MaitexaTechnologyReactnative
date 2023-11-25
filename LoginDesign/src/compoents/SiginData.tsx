import { StyleSheet, Text, View } from 'react-native'
import React ,{useState} from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../App';
import { useRoute } from '@react-navigation/native';

type LoginDataProps = NativeStackScreenProps <AppStackParamList,"siginData">;

export default function SigINnData({navigation}:LoginDataProps) {


  const route= useRoute();
  const {SiginDataDetails} =route.params as {
    SiginDataDetails:{}

  }

  console.log(SiginDataDetails, 'siginpage')

  return (
    <View>
      <Text> Full Name : {SiginDataDetails.fullName}</Text>
      <Text> E-mail     : {SiginDataDetails.email}</Text>
      <Text>Phone Number : {SiginDataDetails.phoneNumber}</Text>
      <Text>Password : {SiginDataDetails.password}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})