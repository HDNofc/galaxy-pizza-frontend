import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainApp from './views/main/main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={MainApp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
