import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {BACKGROUND, BLACK, PRIMARY, WHITE} from '../constants/COLORS';
import SearchIcon from '../assets/searchIcon.png';
import ProductCart from '../components/ProductCart';
import PRODUCTS from '../constants/FAKESTORE.js';
import {getProductValue} from '../utils/getProductValue';

const ProductList = ({navigation}) => {
  // const [myCounter, setMyCounter] = useState([0, 1, 2, 3, 4]);
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);

  const filteredProducts = PRODUCTS.filter(product => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  console.log(filteredProducts);

  return (
    <View style={styles.container}>
      {/* <Pressable
        onPress={() => {
          setMyCounter([...myCounter, myCounter.length]);
        }}
        style={{
          backgroundColor: 'green',
          margin: 20,
          height: 40,
          width: 80,
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: WHITE,
          }}>
          Click me2
        </Text>
      </Pressable>
      <Text style={{color: WHITE, fontSize: 20}}>{myCounter}</Text> */}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Find a product"
          placeholderTextColor={`${WHITE}88`}
          onChangeText={text => {
            setSearchTerm(text);
          }}
        />
        <View style={styles.image}>
          <Image style={styles.searchIcon} source={SearchIcon} />
        </View>
      </View>
      <ScrollView style={styles.cart}>
        {filteredProducts.map(product => {
          return (
            <ProductCart
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              value={getProductValue(product)}
              navigation={navigation}
              description={product.description}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    padding: 20,
  },
  inputContainer: {
    // marginTop: 70,
  },
  input: {
    color: WHITE,
    backgroundColor: PRIMARY,
    paddingLeft: 60,
    height: 40,
    borderRadius: 7,
  },
  image: {
    height: 40,
    width: 50,
    backgroundColor: BLACK,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  searchIcon: {
    height: 20,
    width: 20,
  },
});
