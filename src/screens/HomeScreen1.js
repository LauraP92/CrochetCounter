import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen1 = () => {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContainer}>
      <View style={styles.text}>
        <Text style={styles.textArea}>HOW ARE YOU?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>GREAT</Text>
        </Pressable>
        <Pressable style={styles.button1}>
          <Text style={styles.textButton1}>COOL</Text>
        </Pressable>
      </View>
      <View style={styles.footerButton}>
        <Pressable style={styles.button2}>
          <Text style={styles.textButton2}>SUBMIT</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default HomeScreen1;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    borderColor: 'red',
    // borderWidth: 2,
  },
  scrollContainer: {
    flexGrow: 1,
    borderColor: 'green',
    // borderWidth: 2,
  },
  text: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    fontSize: 25,
  },
  buttonsContainer: {
    flexGrow: 1,
    // borderWidth: 3,
    borderColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    height: 100,
    justifyContent: 'flex-end',
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginHorizontal: 20,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  textButton: {
    fontSize: 20,
  },
  button1: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    backgroundColor: 'green',
    alignItems: 'flex-end',
    marginHorizontal: 20,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  textButton1: {
    fontSize: 20,
    color: 'white',
  },
  footerButton: {
    flexGrow: 1,
    // borderWidth: 3,
    justifyContent: 'flex-end',
  },
  button2: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#882255',
    alignItems: 'center',
    margin: 20,
    borderRadius: 25,
  },
  textButton2: {
    fontSize: 20,
    color: 'white',
  },
});
