import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ErrorText = ({error}) => {
  return (
    <View style={styles.errorText}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

export default ErrorText;

const styles = StyleSheet.create({
  errorText: {
    height: 31,
    borderRadius: 10,
    borderColor: '#FABC41',
    backgroundColor: '#FABC41',
    justifyContent: 'center',
    opacity: 0.8,
  },
  text: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#EB3D3D',
  },
});
