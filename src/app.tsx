import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './views/main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/taste/:taste" component={Main} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
