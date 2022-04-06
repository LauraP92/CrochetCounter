import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RecipeButton = ({name}) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.textName}>{name}</Text>
    </Pressable>
  );
};

export default RecipeButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 46,
    width: 147,
    borderRadius: 23,
    backgroundColor: '#FABC41',
  },
  textName: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
});
