import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import BackgroundImageHome from '../assets/HomeScreen.png';

const HomeScreenApp = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={BackgroundImageHome} />
    </View>
  );
};

export default HomeScreenApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
});
