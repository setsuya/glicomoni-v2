import React from 'react';
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

import './App.css';

const cookies = new Cookies();

function App() {
  const loggedIn = Boolean(cookies.get('glicomoni_logged_in'));

  return(
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login">
            {loggedIn ? <Redirect to="/" /> : <Login />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
