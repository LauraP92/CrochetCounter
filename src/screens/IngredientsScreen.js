import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';
import PlusIcon from '../assets/plusicon.png';
import RecipeButton from '../components/RecipeButton';
import Ingredients from '../components/Ingredients';

const IngredientsScreen = () => {
  const ingredientList = [
    'Tomatoes',
    'Lettuce',
    'Carrots',
    'Ginger',
    'Salt',
    'Potatoes',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new ingredients"
          underlineColorAndroid="transparent"
        />
        <Image style={styles.image} source={PlusIcon} />
      </View>
      <View style={styles.ingredientList}>
        {ingredientList.map(item => {
          return <Ingredients key={item} ingredient={item} />;
        })}
      </View>
      <View style={styles.button}>
        <RecipeButton name={'RecipeMe!'} />
      </View>
    </View>
  );
};

export default IngredientsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 60,
  },
  inputContainer: {
    justifyContent: 'center',
  },
  image: {
    width: 20,
    height: 20,
    position: 'absolute',
    marginLeft: 15,
  },
  ingredientList: {
    borderWidth: 2,
    borderColor: '#FABC41',
    borderRadius: 23,
    marginTop: 20,
    padding: 6,
  },
  input: {
    backgroundColor: 'white',
    paddingLeft: 40,
    height: 46,
    borderWidth: 2,
    borderColor: '#FABC41',
    borderRadius: 23,
  },
  button: {
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 30,
  },
});
