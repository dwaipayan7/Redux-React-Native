import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartData = useSelector((state) => state.cart); 
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.container}>
      <View style = {styles.card}>
         <Text style={{ fontSize: 30, color: 'white' }}>{cartItems}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'blue',
    padding: 20,
  },
  card: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 16
  }
});
