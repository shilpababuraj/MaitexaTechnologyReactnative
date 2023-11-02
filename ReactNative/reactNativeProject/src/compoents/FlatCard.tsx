import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.myTest}>Flat Cards</Text>

      <View style={styles.mainCard}>
        <View style={[styles.card,styles.card1]}>
          <Text >Red</Text>
        </View>
        <View style={[styles.card,styles.card2]}>
          <Text >Green</Text>
        </View>
        <View style={[styles.card,styles.card3]}>
          <Text >Blue</Text>
        </View>
      </View>

    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
 
  myTest: {
    fontSize: 30,
    color: 'grey',
    fontWeight: 'bold',
    paddingHorizontal:10
  },
  mainCard: {
    flex:1,
    flexDirection: 'row',
    padding:8
  },
  card: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
     height: 120,
    borderRadius:6,
    margin:6
  },
  card1: {
    backgroundColor: 'red'

  },
  card2: {
    backgroundColor: 'green'
  },
  card3: {
    backgroundColor: 'blue'
  },
 
});
