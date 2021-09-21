import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './views/main';
import Order from './views/order';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/taste/:taste" component={Main} exact />
        <Route path="/order" component={Order} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
