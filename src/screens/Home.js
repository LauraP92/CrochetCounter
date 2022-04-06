import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <Text>Click!!</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'green',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
