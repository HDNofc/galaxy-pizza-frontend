import { IPizzasInitialState } from 'redux/store/types';
import { PizzasAction } from './action';
import { PizzasActionsType } from './action-types';

const initialState: IPizzasInitialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action: PizzasAction): IPizzasInitialState => {
  switch (action.type) {
    case PizzasActionsType.SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case PizzasActionsType.SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };

    case PizzasActionsType.CLEAR_PIZZAS:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default pizzas;
