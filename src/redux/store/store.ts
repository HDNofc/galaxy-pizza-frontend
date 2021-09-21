import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { save } from 'redux-localstorage-simple';

import rootReducer from '../root-reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middleware =
  process.env.NODE_ENV !== 'production'
    ? [
        require('redux-immutable-state-invariant').default(),
        thunk,
        save({ namespace: 'cart', states: ['cart'] }),
        save({ namespace: 'planetLocation', states: ['planetLocation'] }),
      ]
    : [
        thunk,
        save({ namespace: 'cart', states: ['cart'] }),
        save({ namespace: 'planetLocation', states: ['planetLocation'] }),
      ];

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
