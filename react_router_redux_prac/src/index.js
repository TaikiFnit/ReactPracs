import React from 'react';
import { render } from 'react-dom';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import TodoApp from './containers/TodoApp';
import Fnit from './components/Fnit';
import createStore from './store';

const history = createBrowserHistory();
const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/fnit">Fnit</Link>
        <Route exact path="/fnit" component={Fnit} />
        <Route exact path="/" component={TodoApp} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
