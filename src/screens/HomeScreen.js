import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const HomeScreen = () => {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContainer}>
      <View style={styles.section}>
        <Text>Hey, FirstProject!</Text>
      </View>
      <View style={styles.section}>
        <Text>Hey, FirstProject!</Text>
      </View>
      <View style={styles.section}>
        <Text>Hey, FirstProject!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text>Press Me!</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    borderColor: 'purple',
    borderWidth: 5,
  },
  scrollContainer: {
    flexGrow: 1,
    borderWidth: 5,
    borderColor: 'green',
  },
  section: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'red',
  },
  buttonContainer: {
    flexGrow: 1,
    borderWidth: 10,
    justifyContent: 'flex-end',
  },
  button: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#882255',
  },
});

// const andrei = {
//     name: 'aaaa',
//     age: 123,
// metaData: {
// birtheday: '1993'
// }
// }
