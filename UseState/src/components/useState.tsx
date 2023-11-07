// Change the state of the text when a button is clicked.

import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

export default function UseState() {
  const [text, setText] = useState(
    'Change the state of the text when a button is clicked',
  );
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button
        onPress={() => {
          setText(' changed text');
        }}
        title="Click Here"
        color="#841584"
        accessibilityLabel=" Change the state of the text when a button is clicked."
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
