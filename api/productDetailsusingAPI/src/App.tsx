
import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet,} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from './components/Products';
import ProductsCategories from './components/ProductsCategories';
import AllProducts from './components/AllProducts';
import ProductCategoryList from './components/ProductCategoryList';
import JeweleryProducts from './components/JeweleryProducts';
import Mens from './components/Mens';
// import { createDrawerNavigator } from "@react-navigation/drawer";

type appStackParamList ={
  AllProducts :undefined;
  Products :undefined;
  ProductsCategories:{categoryList:string}; 
  ProductCategoryList:undefined;
  JeweleryProducts:undefined
}

const Stack = createStackNavigator<appStackParamList>();
// const Drawer = createDrawerNavigator();

function App(): JSX.Element {
 

  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Home"> */}
    <Stack.Navigator  >
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="AllProducts" component={AllProducts} />
      <Stack.Screen name="ProductsCategories" component={ProductsCategories} />
      <Stack.Screen name="ProductCategoryList" component={ProductCategoryList} />
      <Stack.Screen name="JeweleryProducts" component={JeweleryProducts} />
      <Stack.Screen name="Mens" component={Mens} />
    </Stack.Navigator>
    {/* </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
