import { ADD_TO_CART } from './constants';
import  Product from './types/types';


export const addToCart = (item: Product) => {
  return {
    type: ADD_TO_CART,
    data: item,
  };
};
