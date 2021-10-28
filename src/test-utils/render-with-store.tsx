import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import cart, { defaultState as cartDefaultState } from 'redux/cart/reducer';
import planetLocation, {
  defaultState as planetLocationDefaultState,
} from 'redux/planet-location/reducer';
import { ThemeProvider } from 'styled-components/macro';
import variables from 'styles/variables';

// объединить обе рендер-функции https://medium.com/nmc-techblog/custom-rendering-in-react-testing-library-done-right-e260e01ba6f7
const reducer = combineReducers({
  cart,
  planetLocation,
});

const originalState = {
  cart: cartDefaultState,
  planetLocation: planetLocationDefaultState,
};

function renderWithStore(
  ui: ReactElement,
  { state = originalState, dispatch = null, withTheme = true }: any = {}
) {
  const observerMiddleware = () => (next: any) => (action: any) => {
    if (dispatch) {
      dispatch(action);
    }
    return next(action);
  };

  const middleware = applyMiddleware(observerMiddleware, thunk);
  const storeMock = createStore(reducer, state, middleware);

  if (withTheme) {
    return render(
      <ThemeProvider theme={variables}>
        <Provider store={storeMock}>{ui}</Provider>
      </ThemeProvider>
    );
  }

  return render(<Provider store={storeMock}>{ui}</Provider>);
}

export default renderWithStore;
