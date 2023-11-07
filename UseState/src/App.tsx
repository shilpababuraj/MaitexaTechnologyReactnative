import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
// import UseState from './components/useState';
// import CountUsingUsestate from './components/countUsingUsestate';
// import BgColorChange from './components/BgColorChange';
import Dice from './components/Dice'


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>

        {/* <UseState/> */}
        {/* <CountUsingUsestate /> */}
        {/* <BgColorChange/> */}
<Dice/>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
