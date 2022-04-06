import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {WHITE} from '../constants/COLORS';
// import BUTTONS from '../constants/BUTTONS';

const StateExercise2 = () => {
  const BUTTONS = [1, 2, 3, 4, 5];

  const [selectedButton, setSelectedButton] = useState(false);
  console.log(selectedButton);
  return (
    <View style={styles.container}>
      {BUTTONS.map(button => {
        return (
          <Pressable
            style={[
              styles.button,
              selectedButton === button ? styles.press : styles.notPressed,
            ]}
            onPress={() => {
              setSelectedButton(button);
            }}>
            <Text style={styles.text}>
              {selectedButton === button
                ? 'This button was pressed!'
                : `This is button ${button}`}
            </Text>
            {/* <Text style={styles.text}>
              {selectedButton === button ? (
                <Text>This button was pressed!</Text>
              ) : (
                <Text>This is button{button}</Text>
              )}
            </Text> */}
          </Pressable>
        );
      })}
    </View>
  );
};

export default StateExercise2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'purple',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 20,
  },
  press: {
    backgroundColor: 'green',
  },
  notPressed: {
    backgroundColor: 'purple',
  },
  text: {
    color: WHITE,
    fontSize: 20,
  },
});
