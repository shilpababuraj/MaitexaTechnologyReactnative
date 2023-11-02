

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCard from './compoents/FlatCard';
import ElevatedCards from './compoents/ElevatedCards';
import TrendingPlace from './compoents/TrendingPlace';
import ContactList from './compoents/ContactList';

import LaunchingPage from './compoents/LaunchingPage';

function App(): JSX.Element {
 return (
    <SafeAreaView>
      <ScrollView>

    <LaunchingPage/>
    {/* <FlatCard/>
    <ElevatedCards/>
    <TrendingPlace/>
    <ContactList/> */}

    
   </ScrollView>
    </SafeAreaView>
  );
}

export default App;
