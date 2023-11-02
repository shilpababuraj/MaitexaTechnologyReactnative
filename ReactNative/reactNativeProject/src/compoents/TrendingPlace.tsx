import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TrendingPlace = () => {
  return (
    <View>
      <Text style={styles.myTest}>TrendingPlaces</Text>
      {/* <View style={styles.card}> */}
      <View style={[styles.imageContainer, styles.cardElevated]}>
        <Image
          source={require('../assets/images/Taj-Mahal.jpg')}
          style={styles.imgStyle}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Hawa Mahal</Text>

          <Text style={styles.title1}>PinkCity</Text>

          <Text style={styles.title1}>
            Hawa Mahal is the palace in the city of jaipur,india. Build from red
            and pink standstone, it is on the edge of the city palace,
          </Text>
          <Text style={styles.title1}>12 mins, away</Text>
        </View>
      </View>
    </View>
    // </View>
  );
};

export default TrendingPlace;

const styles = StyleSheet.create({
  myTest: {
    fontSize: 30,
    color: 'grey',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  imageContainer: {
    // flex:1,
    // alignItems:'center',
    // justifyContent:'center',
    marginHorizontal: 10,
    marginVertical: 10,
    // width:380,
    height: 400,
    borderRadius: 8,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  imgStyle: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  title1: {
    fontSize: 16,
    paddingVertical: 10,
  },
  card: {
    borderRadius: 10,
    elevation: 3,
    shadowOffset: {
      width: 100,
      height: 100,
    },
  },
});
