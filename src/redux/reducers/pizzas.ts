import { SET_PIZZAS, CLEAR_PIZZAS } from '../action-types';
import { PizzasActionTypes } from '../actions/types';
import { IPizzasInitialState } from '../store/types';

const initialState: IPizzasInitialState = {
  items: [],
};

const pizzas = (state = initialState, action: PizzasActionTypes): IPizzasInitialState => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
      };

    case CLEAR_PIZZAS:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default pizzas;
