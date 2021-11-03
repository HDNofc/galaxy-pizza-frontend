import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import store from './redux/store/store';

import { ThemeProvider } from 'styled-components/macro';
import { StyleSheetManager } from 'styled-components/macro';
import GlobalStyle from './styles/global';
import variables from 'styles/variables';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyleSheetManager disableVendorPrefixes={process.env.NODE_ENV === 'development'}>
        <ThemeProvider theme={variables}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </StyleSheetManager>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
