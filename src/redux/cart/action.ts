import { PizzaCartItem } from './contracts/state';
import {
  AddPizzaToCartActionInterface,
  ClearCartActionInterface,
  RemoveCartItemActionInterface,
  PlusCartItemActionInterface,
  MinusCartItemActionInterface,
  CartActionsType,
} from './contracts/action-types';

export const addPizzaToCart = (payload: PizzaCartItem): AddPizzaToCartActionInterface => ({
  type: CartActionsType.ADD_PIZZA_TO_CART,
  payload,
});

export const plusCartItem = (payload: number): PlusCartItemActionInterface => ({
  type: CartActionsType.PLUS_CART_ITEM,
  payload,
});

export const minusCartItem = (payload: number): MinusCartItemActionInterface => ({
  type: CartActionsType.MINUS_CART_ITEM,
  payload,
});
export const removeCartItem = (payload: number): RemoveCartItemActionInterface => ({
  type: CartActionsType.REMOVE_CART_ITEM,
  payload,
});

export const clearCart = (): ClearCartActionInterface => ({
  type: CartActionsType.CLEAR_CART,
});

export type CartAction =
  | AddPizzaToCartActionInterface
  | ClearCartActionInterface
  | RemoveCartItemActionInterface
  | PlusCartItemActionInterface
  | MinusCartItemActionInterface;
