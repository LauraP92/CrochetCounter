import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import PRODUCTS from '../constants/FAKESTORE';
import {BLACK, WHITE} from '../constants/COLORS';
import LinearGradient from 'react-native-linear-gradient';

const ProductDetails = ({route}) => {
  const {id} = route.params;
  const filteredProduct = PRODUCTS.find(product => {
    return product.id === id;
  });
  const {image, title, description, value, price} = filteredProduct;
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <LinearGradient
          style={styles.textContainer}
          colors={['#00000000', '#000000FF']}>
          <Text style={styles.text}>${price}</Text>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{value}</Text>
        </LinearGradient>
      </View>
      <View style={styles.bottomContainer}>
        <Pressable style={[styles.button, styles.shadow]}>
          <Text style={styles.textButton}>Add To Basket</Text>
        </Pressable>

        {/* style={styles.linearGradient}>
          <Text style={styles.buttonText}>Sign in with Facebook</Text> */}

        <View style={styles.line} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  image: {
    aspectRatio: 1,
    width: '100%',
  },
  textContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    // backgroundColor: `${BLACK}9A`,
  },
  text: {
    color: WHITE,
    fontSize: 22,
  },
  bottomContainer: {
    padding: 20,
  },
  button: {
    backgroundColor: '#9ec5bc',
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textButton: {
    color: WHITE,
    fontSize: 20,
  },
  line: {
    backgroundColor: '#e2e2e2',
    height: 1,
    marginBottom: 20,
  },
  description: {
    fontSize: 13,
    color: '#333333',
  },
  shadow: {
    shadowColor: BLACK,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
});
