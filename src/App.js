import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import './App.css';
import Home from './Home'
import BrowserRouter from './BrowserRouter'
import LinkNavLink from './LinkNavLink';
import SwitchRoute from './SwitchRoute';


function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/browserrouter">Browser Router</Link>
        <Link to="/link">Link / NavLink</Link>
        <Link to="/switch-route">Switch / Route</Link>
      </nav>
      <Home />
      <Switch>
        <Route path="/browserrouter" render={() => (<BrowserRouter />)} />
        <Route path="/link" render={() => (<LinkNavLink />)} />
        <Route path="/switch-route" render={() => (<SwitchRoute />)} />
        <Route exact path="/" render={() => (<Home />)} />
      </Switch>
    </div>
  );
}

export default App;
