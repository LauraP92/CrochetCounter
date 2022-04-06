import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import TextBox from '../components/TextBox';
import BackgroundImage from '../assets/background.png';
import ActionButton from '../components/ActionButton';
import ErrorText from '../components/ErrorText';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={BackgroundImage} />
      <View style={styles.content}>
        {/* <TextBox title={'Full Name'} /> */}
        <TextBox title={'Email Address'} />
        <TextBox title={'Password'} />
        <View style={styles.error}>
          <ErrorText error={'password/email combination is incorrect'} />
        </View>
      </View>
      <View style={styles.button}>
        <ActionButton name={'Login'} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  error: {
    paddingRight: 30,
    paddingLeft: 30,
  },
  button: {
    justifyContent: 'flex-end',
    flex: 1,
    padding: 20,
    paddingBottom: 30,
  },
});
