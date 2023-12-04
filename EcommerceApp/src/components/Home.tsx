import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React,{useState,useEffect} from 'react';


export default function Home() {


  const [product, setProduct] = useState([])
  console.log(product,'products')

  useEffect(() => {
    fetch('https://ecommerce-s2.onrender.com/api/products/viewProduct')
    .then((response)=>response.json())
    .then((data)=>setProduct(data))
    .catch((err)=>console.log('err',err))
  },)
  
  const ProductList = ({ data }: { data: any; }) => {
    console.log(data, 'listingData')
    return (
      <View style={styles.card}>
         <Image source={{ uri:data.image }} style={styles.image} />
         <View style={styles.cardDetails}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>Price: ${data.price}</Text>
      </View>
   
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <FlatList data={product} renderItem={ProductList} keyExtractor={(data,index)=>index.toString()}/>
    </View>
  );
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
});
