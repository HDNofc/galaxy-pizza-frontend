import { combineReducers } from 'redux';

import pizzas from './pizzas/reducer';
import cart from './cart/reducer';
import location from './location/reducer';

const rootReducer = combineReducers({
  pizzas,
  cart,
  location,
});

export default rootReducer;
