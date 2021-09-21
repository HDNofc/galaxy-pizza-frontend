import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './views/main';
import Order from './views/order';
import PageNotFound from './views/page-not-found';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/taste/:taste" component={Main} exact />
        <Route path="/order" component={Order} exact />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
