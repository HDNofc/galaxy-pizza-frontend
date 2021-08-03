import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';

import store from './redux/store/store';
import { ThemeProvider } from 'styled-components/macro';

import variables from 'styles/variables';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={variables}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
