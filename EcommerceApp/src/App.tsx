import React, {useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import Login from '../src/components/Login';
import Register from './components/Register';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/Home';
import Index from './components/Index';
import ProductDetails from './components/ProductDetails';


export type AppStackParamList = {
  Login: undefined;
  Register:undefined;
  Home: { id: string };
  ProductDetails:{
    
    product:ProductProp};
};

const Stack = createStackNavigator<AppStackParamList>();

// {"error": false, 
// "expiresIn": 3600, 
// "loginId": "656ca29647f91e7e40ca73fa",
//  "success": true, 
//  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTZjYTI5NjQ3ZjkxZTdlNDBjYTczZmEiLCJ1c2VyTmFtZSI6InNoaWxwYSIsInVzZXJSb2xlIjoyLCJpYXQiOjE3MDE3NTU5ODEsImV4cCI6MTcwMTc1OTU4MX0.c0Ft2mFhAqCo6JiCGEzl33wiYwsNNGOR3Fd1Edguwf4",
//   "userName": "shilpa",
//    "userRole": 2}

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const saveToken=()=>
  {
    
  }
  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={Index}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: 'Register',
              headerTintColor:'#fff',
              headerStyle: {
                backgroundColor: '#d33db2',
              },
            }}
          />
          <Stack.Screen
           name="Login" 
           component={Login}
           options={{
              title: 'Login',
              headerTintColor:'#fff',
              headerStyle: {
                backgroundColor: '#d33db2',
              },
            }} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
