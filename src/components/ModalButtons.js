import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ModalButtons = ({title, onPress, style}) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default ModalButtons;

const styles = StyleSheet.create({
  button: {
    height: 46,
    borderRadius: 10,
    backgroundColor: '#7DB6BA',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  text: {
    color: '#F6F6F6',
    fontSize: 24,
  },
});
