import { SET_PIZZAS, CLEAR_PIZZAS } from '../action-types';
import { IPizza } from '../store/types';

interface ISetPizzas {
  type: typeof SET_PIZZAS;
  payload: IPizza[];
}

interface IClearPizzas {
  type: typeof CLEAR_PIZZAS;
}

export type PizzasActionTypes = ISetPizzas | IClearPizzas;
