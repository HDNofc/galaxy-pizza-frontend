import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';

import store from './redux/store/store';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
      <GlobalStyle />
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
