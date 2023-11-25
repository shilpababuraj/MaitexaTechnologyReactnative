import React, { useState } from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from './compoents/Signin';
import Login from './compoents/Login';
import LandingPage from './compoents/LandingPage';
import LoginData from './compoents/LoginData';
import SigINnData from './compoents/SiginData';

 export type AppStackParamList = {
  LandingPage: undefined;
  Login:undefined;
  Signin: undefined;
  LoginData:{ Detail: {} };
  siginData:{SiginDataDetails:{}};
};

const Stack = createStackNavigator<AppStackParamList>();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
         
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginData" component={LoginData} />

        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="SiginData" component={SigINnData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
