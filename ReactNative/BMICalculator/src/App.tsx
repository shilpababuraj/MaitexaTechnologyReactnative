import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import BMICal from './components/BMICal';

//tell React that we will implement a navigator
import {NavigationContainer} from '@react-navigation/native';
//create a stack navigator
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BMIResult from './components/BMIResult';

export type RootStackParmist = {   //define navigation structure
  BMICal: undefined;
  BMIResult: {height: number; weight: number};
};

const Stack = createNativeStackNavigator<RootStackParmist>();

function App(): JSX.Element {
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BMICal">
        <Stack.Screen
          name="BMICal"
          component={BMICal}
          options={{title: 'BMI Calculator', headerTitleAlign: 'center',headerStyle:{backgroundColor:'black',},headerTintColor:'white'}}
        />
        <Stack.Screen name="BMIResult" component={BMIResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
