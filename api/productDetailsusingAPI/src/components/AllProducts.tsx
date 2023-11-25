import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

export default function AllProducts({navigation}) {

    
  const [products, setProducts] = useState([])

  console.log(products,'products')

 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((response)=>response.json())
    .then((data)=>setProducts(data))
    .catch((err)=>console.log('err',err))

  }, [])
  


  const renderProductItem = ({ item }) => {
    return (
      <View style={styles.card}>
         <Image source={{ uri:item.image }} style={styles.image} />
         <View style={styles.cardDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>Price: ${item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
   
      </View>
    );
  };


  return (
    <View style={styles. container}>
        

      <FlatList 
      
      data={products}
      renderItem={renderProductItem }
      keyExtractor={(item)=>item.id.toString()}
      />

   
  
   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
  
    card: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: 15,
      elevation: 4, // For Android shadow
      shadowColor: '#000', // For iOS shadow
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      textAlign:'center'
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      alignSelf:'center'
    },
    cardDetails: {
     width:'100%',
      padding: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      width:'45%'
     
    },
    price: {
      fontSize: 16,
      color: '#888',
      marginBottom: 5,
    },
    category:{
      fontSize: 18,
      color: '#3498DB',
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      color: '#333',
      width:'45%'
    },
})