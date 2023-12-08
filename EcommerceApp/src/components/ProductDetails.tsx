import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../App';
import { ScrollView } from 'react-native-gesture-handler';


   type ProductProps = NativeStackScreenProps <AppStackParamList,"ProductDetails">;


export default function ProductDetails({navigation}:ProductProps) {


  const [productList, setProductList] = useState({})
  // console.log(productList,'productlist')

  
  const route = useRoute();    // used to display params data
  const {id}=route.params as {
    id: {}
  }
useEffect(() => {
  
fetch(`https://ecommerce-s2.onrender.com/api/products/view-product/${productList.id}`)
.then((response)=>response.json())
.then((data)=>console.log(setProductList(data.data),'datalisted'))
// .then((data)=>setProductList(data.data))
  .catch((err)=>console.error(err))
}, )

  return (
    <ScrollView>
    <View>
      {productList ? (
        <View>
          <Image source={{ uri: productList.image }} style={styles.image} />
          <View style={{flexDirection:'row',padding:20,justifyContent:'center'}}>
           <Text style={styles.title}>{productList.name}</Text>
            <Text style={styles.price}>Price: ${productList.price}</Text>
            </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    width: '45%',
  },
  price: {
    fontSize: 20,
    color: '#888',
    left:20,
    fontWeight: 'bold',
  },

})