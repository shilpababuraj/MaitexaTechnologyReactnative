

// import React, { useEffect, useState } from 'react';
// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';



// const App = () =>{

 
// const [weatherData, setWeatherData] = useState({});
// console.log(weatherData)
// // console.log(weatherData.timezone)

// // console.log(weatherData.weather[0])


// // console.log(weatherData.wind.speed)

// // console.log(weatherData.main.pressure);
// // console.log(weatherData.main.humidity)

// useEffect(()=>{

// fetch ('https://api.openweathermap.org/data/2.5/weather?q=Calicut&appid=cfdd7d308241935021772c1a2c81c743')
// .then((response)=>response.json())
// .then((data)=>{setWeatherData(data)})
// .catch((error)=>{
//   console.log(error)
// });

// },[]);



//   return (
//     <View style={styles.container}>
// <Image
//   source={require('../apiIntegration/src/assests/images/weather.jpg')}
//   style={styles.image}
// />
// {/* <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> */}
// <Text style={styles.text}>{ weatherData.name}</Text>
// {/* <Text>{weatherData.id}</Text>
// <Text>{weatherData.cod}</Text>

// <Text >{weatherData.timezone}</Text> */}

// <Text style={{top:30,fontSize:20}}>Weather Details</Text>

// <Text>{weatherData.weather[0].main}</Text>
// {/* <Text>{weatherData.wind[0].speed}</Text> */}
// {/* <Text>{weatherData.main.pressure}</Text>
// <Text>{weatherData.main.humidity}</Text>  */}
//  {/* </View> */}
// </View>
//   );
// }



// const styles = StyleSheet.create({
  

//   container: {
   
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
    
//   },
//   image: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: 820,
//     zIndex: 1,
//     opacity:0.5,
    
//   },
//   text: {
//     // position: 'absolute',
//     // top: 50,
//     // left: 100,
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: 'black',
//     // zIndex: 2,
   
//   },
// });

// export default App;


// import { FlatList, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'

// export default function App() {

// const [location, setLocation] = useState()
// const [q, setq] = useState()

// const fetchLocation=(searchQuery)=>
// {
//  fetch ('https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=cfdd7d308241935021772c1a2c81c743')
//  .then((response)=>response.json())
//  .then((data)=>setLocation(data))
//  .then((error)=>console.log(error))
  
// }
// const handleLocation =(text)=>
// {
// fetchLocation(text)
// setq(text)
// }
// const renderLocation=({item})=>

// {
//   <TouchableOpacity 
//   // onPress={}
//   >
//     <Text>{item.name}</Text>
//   </TouchableOpacity>
// }

//   return (
//     <View style={{borderWidth:1,flex:1,justifyContent:'center',alignItems:'center'}}>
//       <TextInput
//       placeholder='Search locations'
//       onChangeText={handleLocation}
//       style={{flex:1,justifyContent:'center',alignItems:'center'}}
//       value={q}
//       />
//       <FlatList
//       data={location}
//       renderItem={renderLocation}
//       keyExtractor={(item)=>item.id.toString()}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({})


import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [location, setLocation] = useState()
  const [result, setresult] = useState({})

  const handleLocation =(value)=>
  {
    setLocation(value)
  
  }
  const fetchLocation=()=>
  {


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cfdd7d308241935021772c1a2c81c743`)
    .then((response)=>response.json())
    .then((data)=>setresult(data))
    .then((err)=>console.log(err))

    console.log(result)
  }
  return (

    <View>
     <TextInput
     placeholder='Search locations'
    onChangeText={(text)=>handleLocation(text)}
    value={location}
     style={styles.TextInputStyle}
     />

     <TouchableOpacity
     onPress={fetchLocation}
     >
      <Text style={styles.button}>Submit</Text>
     </TouchableOpacity>
     <Text></Text>
     <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
},
  TextInputStyle:{
    
    borderWidth:1,
    borderRadius:10,
    margin:20,
    borderColor:'grey',
    textAlign:'center'
  },
  button: {
    margin: 50,
    padding: 10,
    borderColor: '#3498DB',
    borderWidth: 1.5,
    borderRadius: 5,
    textAlign:'center',
    backgroundColor:'#3498DB',
    fontFamily:"bold"
  },
})