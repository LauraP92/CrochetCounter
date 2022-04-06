import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const Details = ({navigation}) => {
  return (
    <View>
      <Text>Details</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('ProductList');
        }}>
        <Text>Click to products!!</Text>
      </Pressable>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'yellow',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
