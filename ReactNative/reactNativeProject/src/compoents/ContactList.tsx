import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import user1 from '../assets/images/user1.png';

const data = [
  {name: 'Ajana', post: 'Software Developer'},
  {name: 'Reshma', post: 'Java Developer'},
  {name: 'Maneesha', post: 'Phython Developer'},
  {name: 'Ajana', post: 'Software Developer'},
  {name: 'Reshma', post: 'Java Developer'},
  {name: 'Maneesha', post: 'Phython Developer'},

  // {name:'Ajana',post:'Software Developer',image:"../assets/images/user1.png"},
  // {name:'Reshma',post:'Java Developer',image:"../assets/images/user1.png"},
  // {name:'Maneesha',post:'Phython Developer',image:"../assets/images/user1.png"},
  // {name:'Arun',post:'Flutter Developer',image:"../assets/images/user1.png"},
  // {name:'Sanjay',post:'React Developer',image:"../assets/images/user1.png"},
  // {name:'Shilpa',post:'React Native Developer',image:"../assets/images/user1.png"},
];
const ContactList = () => {
  return (
    <View>
      <Text style={styles.Text}>ContactList</Text>

      <ScrollView>
        {data.map(({name, post}) => (
          <View style={styles.cardContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image source={user1} style={styles.imageStyle} />

              <View style={{flexDirection: 'column',margin:30}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>{name}</Text>
                <Text>{post}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      {}
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
    color: 'grey',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  cardContainer: {
    backgroundColor: '#DAE0E2',
    borderRadius: 8,
    flexDirection:'row',
    alignItems:'center',
    height: 100,
    margin:3,  
    flex:1,
    padding:20
  },
  imageStyle:{
    width: 80,
     height: 80,
     borderRadius:40,
     marginRight:10,
   paddingTop:10
  }

});
