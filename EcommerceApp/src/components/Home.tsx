import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../App';

// type Data ={
//   image:string
//   name:string
//   price:string
// }
type ProductProps = NativeStackScreenProps <AppStackParamList,"Home">;

export default function Home({navigation}:ProductProps) {

 
  
  const [product, setProduct] = useState([]);
  console.log(product, 'products');

  useEffect(() => {
    fetch('https://ecommerce-s2.onrender.com/api/products/viewProduct')
      .then(response => response.json())
      .then(data => setProduct(data.data))
      // .then((data)=>console.log(setProduct(data),'datalisted'))
      .catch(err => console.log('err', err));
  }, []);

 
  const handlePress = (id) => {
console.log(id)
    // Navigate to the product details screen with the productId
    navigation.navigate('ProductDetails', {id });
  };

  const ProductList = ({item}: {item: any}) => {
    console.log(item, 'listingData');
    return (
      <TouchableOpacity  onPress={() => handlePress(item._id)}>
      <View style={styles.card}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.cardDetails}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>Price: ${item.price}</Text>
          {/* <Text>{item.shilpa}</Text> */}
        </View>
      </View>
     </TouchableOpacity>
    );
  };

  

  return (

    <View >

      <FlatList data={product} renderItem={ProductList} 
      keyExtractor={(item,index)=>index.toString()}
      />
      
      {/* {product.map(item => (
        <View style={styles.card}>
          <Image source={{uri: item.image}} style={styles.image} />
          <View style={styles.cardDetails}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>Price: ${item.price}</Text>
          </View>
        </View>
      ))} */}
    </View>
   
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 4, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  cardDetails: {
    width: '100%',
    padding: 10,
    flex:1,
  justifyContent:'center',
  alignItems:'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    width: '45%',
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
});
