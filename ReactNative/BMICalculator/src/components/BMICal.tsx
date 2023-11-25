import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import Entypo from 'react-native-vector-icons/Entypo';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParmist } from '../App';

type bmiProps = NativeStackScreenProps<RootStackParmist,"BMICal">;

export default function BMICal({navigation}:bmiProps) {
  const [gender, setGender] = useState<string | null>(null);
  const [sliderValue, setSliderValue] = useState(135);
  const [weight, setWeight] = useState(20)
  const [age, setAge] = useState(18)


  const genderType = (Gender: string) => {
    setGender(Gender);
  };


  return (
    <ScrollView>
    <View style={styles.container}>
      {/* <Text style={styles.bmiText}>BMI Calculator</Text> */}

      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={[styles.genderIcon,gender === 'male' ? {backgroundColor:'#1d1e33'} :{backgroundColor:'#111328'}]}
          onPress={() => {
            genderType('male');
            console.log('male');
          }}>
          <MaterialCommunityIcons
            name="gender-male"
            color="#DAE0E2"
            size={100}
          />
          <Text style={styles.gender}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.genderIcon,gender === 'female' ? {backgroundColor:'#1d1e33'} :{backgroundColor:'#111328'}]}
          onPress={() => {
            genderType('female');
            console.log('female');
          }}>
          <MaterialCommunityIcons
            name="gender-female"
            color="#DAE0E2"
            size={100}
          />

          <Text style={styles.gender}>
            Female
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.slidercontainer}>
        {/*Text to show slider value*/}
        <Text style={styles.heightText}>
           Height  </Text>
       <Text style={[styles.height]}>{sliderValue} <Text style={styles.heightinCM}>cm</Text></Text>

        {/*Slider with max, min, step and initial value*/}
        <Slider
          maximumValue={200}
          minimumValue={130}
          minimumTrackTintColor="#E74292"
          maximumTrackTintColor="#777E8B"
          step={1}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
          thumbTintColor='#ffff'
        />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.weight}>
    <Text style={[styles.genderIcon]}>Weight</Text>
    <Text style={{color:'#ffff',fontSize:30}}>{weight}</Text>
    <View style={{flexDirection:'row',}}>

        <TouchableOpacity onPress={()=>
           { setWeight(weight + 1)}
        }>
    <Entypo name='plus' size={30} color={'#ffff'} style={styles.incrementIcon}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{
        setWeight(weight - 1)
    }}>
    <Entypo name='minus' size={30} color={'#ffff'} style={styles.incrementIcon}/>
    </TouchableOpacity>
    </View>
    </View>

    <View style={styles.weight}>
    <Text  style={styles.genderIcon}>Age</Text>
    <Text style={{color:'#ffff',fontSize:30}}>{age}</Text>
    <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>{
            setAge(age + 1)
        }}>
    <Entypo name='plus' size={30} color={'#ffff'} style={styles.incrementIcon}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{
        setAge(age - 1)
    }}>
        <Entypo name='minus' size={30} color={'#ffff'} style={styles.incrementIcon}/>
       </TouchableOpacity>
    </View>
      </View>
      </View>

<TouchableOpacity onPress={()=>navigation.navigate('BMIResult',{height:sliderValue,weight:weight})}>
    <Text style={styles.button}>Calculate</Text>
</TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bmiText: {
    fontSize: 25,
    fontFamily: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    color: '#ffff',
  },
  container: {
    backgroundColor: '#090e21',
  },
  innerContainer: {
    flexDirection: 'row',
    marginVertical:5,
  },
  genderIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 20,
    color:'#ffff',
    fontSize:20
  },
  slidercontainer:{
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor:'#111328',
    borderRadius:20,
    margin: 20,
  },
  gender:{
    color: '#777E8B',
    fontSize: 18,
    padding:10
  },
  heightText:{
    color: '#777E8B',
    fontSize:20,
    textAlign:'center'
  },
  height:{
    color: '#ffff',
    fontSize:40,
    textAlign:'center',
    fontWeight:'bold'
  },
  heightinCM:{
    fontSize:18,
    color:'#777E8B'
  },
  weight:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1d1e33',
    borderRadius:20,
    margin: 20,
    paddingBottom:30
    
  },
  incrementIcon:{
    backgroundColor:'grey',
    borderRadius:30,
    padding:10,
    marginHorizontal:10
  },
  button:{
 
    color:'#ffff',
    backgroundColor:'#E74292',
    paddingVertical:12,
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  }
});
