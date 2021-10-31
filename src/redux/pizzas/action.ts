import { IPizza } from '../store/types';
import {
  ClearPizzasActionInterface,
  SetLoadedActionInterface,
  SetPizzasActionInterface,
  PizzasActionsType,
} from './contracts/action-types';

export const setPizzas = (payload: IPizza[]): SetPizzasActionInterface => ({
  type: PizzasActionsType.SET_PIZZAS,
  payload,
});

export const clearPizzas = (): ClearPizzasActionInterface => ({
  type: PizzasActionsType.CLEAR_PIZZAS,
});

export const setLoaded = (payload: boolean): SetLoadedActionInterface => ({
  type: PizzasActionsType.SET_LOADED,
  payload,
});

export type PizzasAction =
  | SetPizzasActionInterface
  | ClearPizzasActionInterface
  | SetLoadedActionInterface;
