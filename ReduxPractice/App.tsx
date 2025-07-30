import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/redux/Header';
import Product from './components/redux/Product';


const products = [
  {
    id: 1,
    name: 'Product 1',
    color: 'white',
    price: 10.99,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    color: 'black',
    price: 10.99,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    color: 'gray',
    price: 10.99,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    color: 'gray',
    price: 10.99,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
];

function App() {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView style={styles.productList}>
        {products.map((item) => (
          <Product  item = {item}/>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'center'
  },
  productList: {
    padding: 16,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  imgage: {
    height: 100,
    width: 100,
    marginBottom: 10
  }
});

export default App;
