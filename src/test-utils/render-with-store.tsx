import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import cart, { defaultState } from 'redux/cart/reducer';
import { ThemeProvider } from 'styled-components/macro';
import variables from 'styles/variables';

const reducer = combineReducers({
  cart,
});

const originalState = {
  cart: defaultState,
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
