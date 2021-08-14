import { Dispatch } from 'redux';
import { SET_PIZZAS } from '../action-types';
import { IPizza } from '../store/types';
import { PizzasActionTypes } from './types';
import axiosWrapper from 'core/axios';

export const setPizzas = (items: IPizza[]): PizzasActionTypes => {
  return { type: SET_PIZZAS, payload: items };
};

export const fetchPizzas = () => async (dispatch: Dispatch<PizzasActionTypes>) => {
  // TODO return type
  try {
    const response = await axiosWrapper.get('/pizzas');
    dispatch(setPizzas(response.data.data));
  } catch (error) {
    console.error(error);
  }
};
