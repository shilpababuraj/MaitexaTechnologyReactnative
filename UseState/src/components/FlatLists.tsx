import {Image, StyleSheet, Text, View, FlatList, ImageSourcePropType,} from 'react-native';
import React from 'react';

interface Dataprops {   // define props with its type
  id: number;
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  content: string;
}

const RenderItem = ({id, image, title, subtitle, content}: Dataprops) => {  //created renderitem
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.imageStyle}/>
      <View style={styles.contentView}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subtitle}</Text>
      <Text style={styles.cardContent}>{content}</Text>
      </View>
    </View>
  );
};

export default function FlatLists() {

  const Carddata: Dataprops[] = [     // added data content
    {
      id: 1,
      image: require('../assets/images/delhi.jpg'),
      title: 'Delhi',
      subtitle: 'India',
      content: 'poplation:19 million',
    },
    {
      id: 2,
      image: require('../assets/images/delhi.jpg'),
      title: 'London',
      subtitle: 'UK',
      content: 'poplation:19 million',
    },
    {
      id: 3,
      image: require('../assets/images/delhi.jpg'),
      title: 'America',
      subtitle: 'USA',
      content: 'poplation:19 million',
    },
    {
      id: 4,
      image: require('../assets/images/delhi.jpg'),
      title: 'Kerala',
      subtitle: 'India',
      content: 'poplation:19 million',
    },
    {
      id: 5,
      image: require('../assets/images/delhi.jpg'),
      title: 'TamilNadu',
      subtitle: 'India',
      content: 'poplation:19 million',
    },
    {
      id: 6,
      image: require('../assets/images/delhi.jpg'),
      title: 'Karnataka',
      subtitle: 'India',
      content: 'poplation:19 million',
    },
    {
      id: 7,
      image: require('../assets/images/delhi.jpg'),
      title: 'Karnataka',
      subtitle: 'India',
      content: 'poplation:19 million',
    },
  ];
  const item = ({item}: {item: Dataprops}) => (  // created object for each item
    <RenderItem
      id={item.id}
      image={item.image}
      title={item.title}
      subtitle={item.subtitle}
      content={item.content}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Cities around world</Text>

      <FlatList
        data={Carddata}
        renderItem={item}
        keyExtractor={(item: Dataprops) => item.id.toString()}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  mainTitle: {
    fontSize: 30,
    fontWeight: '700',
    backgroundColor: '#F4C724',
    height: 80,
    paddingHorizontal: 30,
    paddingVertical: 20,
    color: 'black',
  },
  card: {
    // borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    flexDirection:'row',
    elevation:4,
    backgroundColor:'white'
  },
  imageStyle:{
    width:300,
    height:150,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'cover'
  },
  contentView:{
  flexDirection:'column',
  padding:20
  },
  title: {
    fontSize:20,
    fontWeight:'600',
    color:'black'
  },
  subTitle: {
    fontSize:18,
    paddingVertical:10
  },
  cardContent: {
    fontSize:16,
  },
});
