import axiosWrapper from 'core/axios';
import { Dispatch } from 'redux';
import { setPizzas, setLoaded } from './action';
import { SetLoadedActionInterface, SetPizzasActionInterface } from './action-types';

export const fetchPizzas =
  () => async (dispatch: Dispatch<SetPizzasActionInterface | SetLoadedActionInterface>) => {
    dispatch(setLoaded(false));

    try {
      const response = await axiosWrapper.get('/pizzas');
      dispatch(setPizzas(response.data.data));
    } catch (error) {
      console.error(error);
    }
  };
