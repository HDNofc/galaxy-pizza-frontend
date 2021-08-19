import { combineReducers } from 'redux';

import pizzas from './pizzas/reducer';
import cart from './cart/reducer';

const rootReducer = combineReducers({
  pizzas,
  cart,
});

export default rootReducer;
