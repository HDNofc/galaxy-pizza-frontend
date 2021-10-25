import { load } from 'redux-localstorage-simple';

import getIndexEqualPizza from 'helpers/get-index-equal-pizza';
import { CartAction } from './action';
import { CartActionsType } from './contracts/action-types';
import { PizzaCartState } from './contracts/state';

export const defaultState: PizzaCartState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

const savedCart: any = load({ namespace: 'cart', states: ['cart'] });
const initialState: PizzaCartState = savedCart && savedCart.cart ? savedCart.cart : defaultState;

const cart = (state = initialState, action: CartAction): PizzaCartState => {
  switch (action.type) {
    case CartActionsType.ADD_PIZZA_TO_CART: {
      const newPizzaItems = [...state.items];
      const existPizzaIndex = getIndexEqualPizza(action.payload, state.items);

      if (existPizzaIndex !== null) {
        const newPizzaItem = { ...state.items[existPizzaIndex] };
        newPizzaItem.amount += 1;
        newPizzaItems[existPizzaIndex] = newPizzaItem;
      } else {
        newPizzaItems.push(action.payload);
      }

      const totalCount = getTotalCount(newPizzaItems);
      const totalPrice = getTotalPrice(newPizzaItems);

      return {
        items: newPizzaItems,
        totalCount: totalCount,
        totalPrice,
      };
    }

    case CartActionsType.PLUS_CART_ITEM: {
      const newPizzaItems = [...state.items];
      const newPizzaItem = { ...state.items[action.payload] };

      newPizzaItem.amount += 1;
      newPizzaItems[action.payload] = newPizzaItem;

      const totalCount = getTotalCount(newPizzaItems);
      const totalPrice = getTotalPrice(newPizzaItems);

      return {
        items: newPizzaItems,
        totalCount,
        totalPrice,
      };
    }

    case CartActionsType.MINUS_CART_ITEM: {
      const newPizzaItems = [...state.items];
      const newPizzaItem = { ...state.items[action.payload] };

      if (newPizzaItem.amount === 1) {
        newPizzaItems.splice(action.payload, 1);
      } else {
        newPizzaItem.amount -= 1;
        newPizzaItems[action.payload] = newPizzaItem;
      }

      const totalCount = getTotalCount(newPizzaItems);
      const totalPrice = getTotalPrice(newPizzaItems);

      return {
        items: newPizzaItems,
        totalCount,
        totalPrice,
      };
    }

    case CartActionsType.REMOVE_CART_ITEM: {
      const newPizzaItems = [...state.items];
      newPizzaItems.splice(action.payload, 1);

      const totalCount = getTotalCount(newPizzaItems);
      const totalPrice = getTotalPrice(newPizzaItems);

      return {
        items: newPizzaItems,
        totalCount,
        totalPrice,
      };
    }

    case CartActionsType.CLEAR_CART:
      return defaultState;

    default:
      return state;
  }
};

const getTotalCount = (items: PizzaCartState['items']) => {
  let totalCount = 0;
  items.forEach((item) => {
    totalCount += item.amount;
  });
  return totalCount;
};

const getTotalPrice = (items: PizzaCartState['items']) => {
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.price * item.amount;
  });
  return totalPrice;
};

export default cart;
