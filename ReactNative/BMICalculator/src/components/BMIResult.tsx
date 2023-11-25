import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParmist } from '../App';
import { useRoute } from '@react-navigation/native';


type resultProps = NativeStackScreenProps<RootStackParmist,"BMIResult">;
export default function BMIResult({navigation}:resultProps) {

const [result,setResult] = useState('')
const route = useRoute();
const {height,weight}=route.params as {
  height: number;
  weight :number;
}

  const handleCaculateBMI= (height:number,weight:number)=>
  { 

    const convert= (height/100);
    const  BMI = (weight) / (convert * convert) 
    return BMI;
  }

  const checkBmi =(bmi:number)=>
  {

  
      if (bmi < 18.5){
             return('Under weight');
      }
       else if (bmi >= 18.4 && bmi <=24.9){
  
          return('Normal weight')
      }
  
      else if (bmi >=25 && bmi <=29.9){
         return('Over weight')
      }
      else {
          return('Obese')
      }
     
  }


  const bmiTextResult =(bmi:number)=>
  {

  
      if (bmi < 18.5){
             return('You have a Under weight, please eat more😋🌭🥪');
      }
       else if (bmi >= 18.4 && bmi <=24.9){
  
          return('You have a Normal weight good job ✌️')
      }
  
      else if (bmi >=25 && bmi <=29.9){
         return('You have a Over weight please do excerise 💪 ')
      }
      else {
          return('Obese')
      }
     
  }


  useEffect(() => {
   const calculateBMI = handleCaculateBMI(height,weight);
  setResult(calculateBMI.toFixed(2));
   
  }, [])
  
const bmiCheck = checkBmi (parseFloat(result))
 
const catagory= bmiTextResult(parseFloat(result))


  return (
    <View style={styles.container}>
      <Text style={{fontSize:40,color:'white',bottom:50}} >Your Result</Text>

<View style={styles.innerResult}>
<Text style={{fontSize:30,color:'green'}}>{bmiCheck}</Text>
    <Text style={{fontSize:50,color:'white'}}>{result}</Text>
<Text style={{fontSize:18,color:'white',textAlign:'center',top:50,padding:10}}>{catagory}</Text>


</View>

<TouchableOpacity onPress={()=> navigation.replace('BMICal')} style={styles.button}>
    <Text style={{textAlign:'center',
    fontSize:20,
    fontWeight:'bold',color:'white'}}>Recalulate</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'black'
  },
  innerResult:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height:400,
    width:'100%',
    fontSize:20,
    margin:8,
    backgroundColor:'#1d1e33',
  },
  button:{
 
    color:'#ffff',
    backgroundColor:'#E74292',
    padding:20,
    top:20,
    width:'100%'
  }
})