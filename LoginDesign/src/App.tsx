``

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import LandingPage from './compoents/LandingPage';
import Login from './compoents/Login';
import Signin from './compoents/Signin';

function App(): JSX.Element {
 return (
    <SafeAreaView>
      <ScrollView>
{/* <LandingPage/> */}
{/* <Login/> */}
<Signin/>
    
   </ScrollView>
    </SafeAreaView>
  );
}

export default App;
