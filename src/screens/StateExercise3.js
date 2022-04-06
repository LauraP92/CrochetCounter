import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {BLACK, WHITE} from '../constants/COLORS';

const StateExercise3 = () => {
  const ingredients = [
    {
      id: 0,
      title: 'Tomatoes',
      quantity: 2,
      unit: 'kg',
    },
    {
      id: 1,
      title: 'Cucumber',
      quantity: 0.5,
      unit: 'kg',
    },
    {
      id: 2,
      title: 'apples',
      quantity: 2,
      unit: 'pcs',
    },
    {
      id: 3,
      title: 'salt',
      quantity: 3.5,
      unit: 'tbsp',
    },
    {
      id: 4,
      title: 'flour',
      quantity: 10,
      unit: 'spoons',
    },
  ];

  const [pressed, setPressed] = useState([]);
  console.log({pressed});

  return (
    <View style={styles.container}>
      <ScrollView>
        {ingredients.map(ingredient => {
          return (
            <Pressable
              key={ingredient.title}
              onPress={() => {
                // setPressed(ingredient.id);
                if (pressed.includes(ingredient.id)) {
                  const filteredItems = pressed.filter(item => {
                    return item !== ingredient.id;
                  });
                  setPressed(filteredItems);
                } else {
                  setPressed([...pressed, ingredient.id]);
                }
              }}
              style={styles.cardContainer}>
              <View
                style={[
                  styles.button,
                  pressed.includes(ingredient.id)
                    ? styles.pressed
                    : styles.notPressed,
                ]}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{ingredient.title}</Text>
                <Text style={styles.text}>
                  {ingredient.quantity}
                  {ingredient.unit}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default StateExercise3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  cardContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#70AAB2',
    margin: 15,
    height: 55,
    padding: 15,
    borderRadius: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingLeft: 10,
  },
  text: {
    color: WHITE,
  },
  button: {
    borderWidth: 1,
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: WHITE,
  },
  notPressed: {
    backgroundColor: '#70AAB2',
  },
  pressed: {
    backgroundColor: WHITE,
  },
});
