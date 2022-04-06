import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {WHITE} from '../constants/COLORS';

const CounterButtons = ({text, counter, onMinusPress, onPlusPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.circlesContainer}>
        <Pressable style={styles.circle} onPress={onMinusPress}>
          <Text style={styles.sign}>-</Text>
        </Pressable>
        <Text style={styles.counter}>{counter}</Text>
        <Pressable style={styles.circle} onPress={onPlusPress}>
          <Text style={styles.sign}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CounterButtons;

const styles = StyleSheet.create({
  text: {
    color: WHITE,
    fontSize: 36,
    fontWeight: '200',
    marginBottom: 20,
    marginTop: 50,
  },
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    borderWidth: 3,
    borderRadius: 30,
    borderColor: WHITE,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sign: {
    color: WHITE,
    fontSize: 48,
    lineHeight: 52,
    // borderWidth: 1,
  },
  counter: {
    color: WHITE,
    fontSize: 48,
    fontWeight: '200',
  },
});
