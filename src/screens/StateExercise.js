import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {WHITE} from '../constants/COLORS';

const StateExercise = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Pressable
        // style={counter % 2 === 0 ? styles.button : styles.buttonodd}
        style={[
          styles.button,
          counter % 2 === 0 ? styles.coloreven : styles.colorodd,
        ]}
        onPress={() => {
          setCounter(counter + 1);
        }}>
        <Text style={styles.text}>This button was pressed {counter} times</Text>
      </Pressable>
    </View>
  );
};

export default StateExercise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    borderRadius: 20,
  },
  coloreven: {
    backgroundColor: 'green',
  },
  colorodd: {
    backgroundColor: 'red',
  },
  text: {
    color: WHITE,
    fontSize: 20,
  },
});
