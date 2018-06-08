import React from 'react';
import { render } from 'react-dom';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import TodoApp from './containers/TodoApp';
import Fnit from './components/Fnit';
import createStore from './store';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const history = createBrowserHistory();
const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="container">
        <CssBaseline />
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Fnit Todo
            </Typography>
            <Link to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/fnit">
              <Button color="inherit">Fnit</Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Route exact path="/fnit" component={Fnit} />
        <Route exact path="/" component={TodoApp} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
