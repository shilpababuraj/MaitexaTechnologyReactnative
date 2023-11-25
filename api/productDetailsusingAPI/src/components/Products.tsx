import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
// import  MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

export default function Products() {

  const navigation = useNavigation();

  const navigateToSection = (section) => {   //using multiple navigation screens in one page,define like this way and naviagte to each screens
    navigation.navigate(section);
  };
  return (
    <View style={styles.container}>
     <TouchableOpacity  
      onPress={() => navigateToSection('AllProducts')}
     >
      <Text style={styles.button}>ALL PRODUCTS</Text>

   

      </TouchableOpacity>

      <TouchableOpacity  
     onPress={() => navigateToSection("ProductsCategories")}
 
     >
      <Text style={styles.button}>PRODUCTS CATEGORIES</Text>

      </TouchableOpacity>

      {/* <MaterialIcon name="arrow-drop-down-circle" size={60} color="white" style={{alignSelf:'center'}}/> */}

      <TouchableOpacity  
     onPress={() => navigateToSection("ElectronicProducts")}>
      <Text style={styles.button}>Electronic Products</Text>
     </TouchableOpacity>
     <TouchableOpacity  
     onPress={() => navigateToSection("JeweleryProducts")}>
      <Text style={styles.button}>Jewelery Products</Text>
     </TouchableOpacity>
     {/* <TouchableOpacity  
     onPress={() => navigateToSection("Mens")}>
      <Text style={styles.button}>Men's clothing</Text>
     </TouchableOpacity> */}
     
    </View>
  )
}

const styles = StyleSheet.create({
container:{
backgroundColor:'#FAD02E',
flex:1,

},
  button: {
    margin: 20,
    padding: 10,
    borderColor: '#3498DB',
    borderWidth: 1.5,
    borderRadius: 5,
    textAlign:'center',
    backgroundColor:'#3498DB',
    fontFamily:'700',
    color:'white'
  },
})