import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {BLACK, PRIMARY, WHITE} from '../constants/COLORS';

const ProductCart = ({
  image,
  title,
  price,
  value,
  description,
  id,
  navigation,
}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate('ProductDetails', {
          id: id,
          // image: image,
          // title: title,
          // price: price,
          // value: value,
          // description: description,
        });
      }}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.cart}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.cost}>
          <Text style={styles.text}>Price: ${price}</Text>
          <Text style={[styles.text, styles.bold]}>{value}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCart;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: PRIMARY,
    borderRadius: 7,
    overflow: 'hidden',
  },
  cart: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  text: {
    color: WHITE,
    fontSize: 13,
  },
  bold: {
    fontWeight: 'bold',
  },
  cost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 80,
    width: 80,
  },
});
