import { combineReducers } from 'redux';

import pizzas from './pizzas/reducer';
import cart from './cart/reducer';
import planetLocation from './planet-location/reducer';

const rootReducer = combineReducers({
  pizzas,
  cart,
  planetLocation,
});

export default rootReducer;
