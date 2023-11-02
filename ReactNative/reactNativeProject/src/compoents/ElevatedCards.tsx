import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.myTest}>ElevatedCard</Text>

      <ScrollView horizontal={true} style={styles.container}>

        <View style={[styles.card]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card]}>
          <Text>me</Text>
        </View>

        <View style={[styles.card]}>
          <Text>to</Text>
        </View>

        <View style={[styles.card]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card]}>
          <Text>Tap</Text>
        </View>

      </ScrollView>

    
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  myTest: {
    fontSize: 30,
    color: 'grey',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    padding: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width:140,
    borderRadius: 6,
    margin: 6,
    backgroundColor: '#DAE0E2',
  },
});
