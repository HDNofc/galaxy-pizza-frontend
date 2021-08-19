import { Action } from 'redux';
import { PizzaCartItem } from './state';

export enum CartActionsType {
  ADD_PIZZA_TO_CART = 'cart/ADD_PIZZA_TO_CART',
  PLUS_CART_ITEM = 'cart/PLUS_CART_ITEM',
  MINUS_CART_ITEM = 'cart/MINUS_CART_ITEM',
  REMOVE_CART_ITEM = 'cart/REMOVE_CART_ITEM',
  CLEAR_CART = 'cart/CLEAR_CART',
}

export interface AddPizzaToCartActionInterface extends Action<CartActionsType> {
  type: CartActionsType.ADD_PIZZA_TO_CART;
  payload: PizzaCartItem;
}

export interface PlusCartItemActionInterface extends Action<CartActionsType> {
  type: CartActionsType.PLUS_CART_ITEM;
  payload: number;
}

export interface MinusCartItemActionInterface extends Action<CartActionsType> {
  type: CartActionsType.MINUS_CART_ITEM;
  payload: number;
}
export interface RemoveCartItemActionInterface extends Action<CartActionsType> {
  type: CartActionsType.REMOVE_CART_ITEM;
  payload: number;
}

export interface ClearCartActionInterface extends Action<CartActionsType> {
  type: CartActionsType.CLEAR_CART;
}
