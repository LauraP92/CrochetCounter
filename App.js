/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreenApp from './src/screens/HomeScreenApp';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import IngredientsScreen from './src/screens/IngredientsScreen';
import ProductList from './src/screens/ProductList';
import StateExercise from './src/screens/StateExercise';
import StateExercise2 from './src/screens/StateExercise2';
import StateExercise3 from './src/screens/StateExercise3';
import CrochetCounter from './src/screens/CrochetCounter';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import ProductDetails from './src/screens/ProductDetails';
import {PRIMARY, WHITE} from './src/constants/COLORS';

const Stack = createNativeStackNavigator();
const App: () => Node = () => {
  // return <HomeScreenApp />;
  // return <LoginScreen />;
  // return <RegistrationScreen />;
  // return <IngredientsScreen />;
  // return <ProductList />;
  // return <StateExercise />;
  // return <StateExercise2 />;
  // return <StateExercise3 />;
  // return <CrochetCounter />;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: PRIMARY},
          headerTintColor: WHITE,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
