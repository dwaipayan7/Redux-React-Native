import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './action';

const Product = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    console.log('====================================');
    Alert.alert('Pressed', JSON.stringify(item));
    console.log('====================================');
    dispatch(addToCart(item));
  };

  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>{item.name}</Text>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>{item.price}</Text>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>{item.color}</Text>
      <Image style={styles.imgage} source={{ uri: item.image }}></Image>

      <Button
        title="Add To Cart"
        onPress={() => handleAddToCart(item)}
      ></Button>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgage: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
});
