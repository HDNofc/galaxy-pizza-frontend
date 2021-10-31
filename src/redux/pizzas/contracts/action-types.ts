import { Action } from 'redux';
import { IPizza } from 'redux/store/types';

export enum PizzasActionsType {
  SET_PIZZAS = 'pizzas/SET_PIZZAS',
  CLEAR_PIZZAS = 'pizzas/CLEAR_PIZZAS',
  SET_LOADED = 'pizzas/SET_LOADED',
}

export interface SetPizzasActionInterface extends Action<PizzasActionsType> {
  type: PizzasActionsType.SET_PIZZAS;
  payload: IPizza[];
}

export interface ClearPizzasActionInterface extends Action<PizzasActionsType> {
  type: PizzasActionsType.CLEAR_PIZZAS;
}

export interface SetLoadedActionInterface extends Action<PizzasActionsType> {
  type: PizzasActionsType.SET_LOADED;
  payload: boolean;
}
