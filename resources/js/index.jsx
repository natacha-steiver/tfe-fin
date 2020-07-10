import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Keyevent from "./components/keyevent/index"
import * as serviceWorker from './serviceWorker';
import './index.css';
import Register from './components/register/index';
import Admin from './components/admin/index';
import Login from './components/login/index';
import Test from './components/test/index';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/" component={App} />
  <Route exact path="/exercice/:id" component={Admin} />
  <Route  exact path="/auth/register" component={Register} />
    <Route  path="/auth/login/c" component={Login} />
    </div>
  </Router>
)



ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
