import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ActionButton = ({name}) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.textName}>{name}</Text>
    </Pressable>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    borderRadius: 10,
    backgroundColor: '#FABC41',
  },
  textName: {
    fontSize: 20,
    color: 'white',
  },
});
