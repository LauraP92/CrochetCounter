import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const TextBox = ({title, error}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.topText}>{title}</Text>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  topText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    paddingLeft: 10,
    height: 42,
    borderWidth: 1,
    borderColor: '#FABC41',
    borderRadius: 10,
  },
});
