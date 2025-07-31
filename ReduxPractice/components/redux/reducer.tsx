import { ADD_TO_CART } from "./constants";
import Product from "./types/types";
import Action from './types/actions.types'


const initialState: Product[] = [];

const reducer = (state = initialState, action: Action): Product[] => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data!];
    default:
      return state;
  }
};

export default reducer;
