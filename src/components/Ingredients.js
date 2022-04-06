import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FridgeIcon from '../assets/fridgeicon.png';
import BinIcon from '../assets/binicon.png';

const Ingredients = ({ingredient}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.icon1} source={FridgeIcon} />
        <Text style={styles.ingredient}>{ingredient}</Text>
      </View>
      <Image style={styles.icon2} source={BinIcon} />
    </View>
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  content: {
    flexDirection: 'row',
  },
  ingredient: {
    color: 'black',
    fontSize: 15,
    paddingLeft: 6,
  },
  icon1: {
    height: 18,
    width: 13,
  },
  icon2: {
    height: 18,
    width: 13,
  },
});
