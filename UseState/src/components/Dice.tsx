import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import first from '../assets/images/One.png';
import second from '../assets/images/Two.png';
import third from '../assets/images/Three.png';
import fourth from '../assets/images/Four.png';
import fifth from '../assets/images/Five.png';
import sixth from '../assets/images/Six.png';

export default function Dice() {
  const [dice, setDice] = useState(second);

  const diceImages = () => {
    <View>
      <Image source={first} />
      <Image source={second} />
      <Image source={third} />
      <Image source={fourth} />
      <Image source={fifth} />
      <Image source={sixth} />
    </View>;
  };

  const roller = () => {
    let diceCount;

    for (let i = 1; i < 6; i++) {
      diceCount = Math.floor(Math.random() * 6 + 1);
      console.log(diceCount);
      
    }
    setDice(diceCount);
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 200,
      }}>
      <Image source={dice} style={{width: 100, height: 100}} />
    

<View style={{paddingVertical:20}}>
      <Button
        title="Dice Roller"
        color="black"
        onPress={() => {
          roller();
        }}
      />

</View>

    </View>
  );
}

const styles = StyleSheet.create({});
