import { StyleSheet, Text, View ,FlatList,TouchableOpacity, Image} from 'react-native'
import React ,{useState,useEffect}from 'react'
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { appStackParamList } from '../App';
// import AnimatedLoader from 'react-native-animated-loader';
// import LoaderKit from 'react-native-loader-kit'

type CategoryProp = NativeStackScreenProps <appStackParamList,"ProductsCategories">;

export default function ProductsCategories({ navigation }:CategoryProp) {

const [proCategory, setProCategory] = useState([])

const [product, setProduct] = useState([])

const [visible, setVisible] = useState(false);

const renderCategoryItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>

      <TouchableOpacity 
      // onPress={() => navigation.navigate("ProductCategoryList",{categoryList:categoryName})}
      onPressIn={()=>getData(item)}
      >
        <Text style={styles.textStyle}>{item}</Text>
      </TouchableOpacity>
     
    </View>
  );
};

const renderProduct =(item:any)=>{
  console.log(item,'items');
  
  return (
    <View style={styles.card}>
       <Image source={{ uri:item.item.image }} style={styles.image} />
       <View style={styles.cardDetails}>
      <Text style={styles.title}>{item.item.title}</Text>
      <Text style={styles.category}>{item.item.category}</Text>
      <Text style={styles.price}>Price: ${item.item.price}</Text>
      <Text style={styles.description}>{item.item.description}</Text>
    </View>
 
    </View>
  );
}

const getData=(categorie_name)=>
{
  console.log(categorie_name);
  
  fetch(`https://fakestoreapi.com/products/category/${categorie_name}`)
  .then((res)=>res.json())
  .then((data)=>setProduct(data))
  .catch((err)=>console.log(err))


}


console.log(product)

useEffect(() => {
  fetch('https://fakestoreapi.com/products/categories')
  .then((res)=>res.json())
  .then((data)=>setProCategory(data))
  .catch((err)=>console.log(err))
}, [])


  return (
    <View >
     
     {/* <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      animationStyle={styles.lottie}
      speed={1}>
      <Text>Doing something...</Text>
    </AnimatedLoader> */}

{/* <LoaderKit
  style={{ width: 50, height: 50 }}
  name={'BallPulse'} // Optional: see list of animations below
  size={50} // Required on iOS
  color={'red'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
/> */}

     <FlatList
     data={proCategory}
     renderItem={renderCategoryItem}
     keyExtractor={(item, index) => index.toString()}
     />
    

    {product && product.length > 0 ? (
    <FlatList 
       data={product}
      renderItem={renderProduct}
      keyExtractor={(item,index)=>index.toString()}
      />
    ):(
    null
      )}
    </View>
  )
}

const styles = StyleSheet.create({

   itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
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
  lottie: {
    width: 100,
    height: 100,
  },
})