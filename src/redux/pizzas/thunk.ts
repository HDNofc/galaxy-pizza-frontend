import axiosWrapper from 'core/axios';
import { Dispatch } from 'redux';

import { setPizzas, setLoaded } from './action';
import { SetLoadedActionInterface, SetPizzasActionInterface } from './contracts/action-types';

export const fetchPizzas =
  () => async (dispatch: Dispatch<SetPizzasActionInterface | SetLoadedActionInterface>) => {
    dispatch(setLoaded(false));

    try {
      const response = await axiosWrapper.get('/pizzas');
      dispatch(setPizzas(response.data.data));
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

export const fetchPizzasByTaste =
  ({ taste }: { taste?: string }) =>
  async (dispatch: Dispatch<SetPizzasActionInterface | SetLoadedActionInterface>) => {
    dispatch(setLoaded(false));

    try {
      const response = await axiosWrapper.get(`/pizzas/taste/${taste}`);
      dispatch(setPizzas(response.data.data));
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };
