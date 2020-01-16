import React from 'react';
import {Switch, NavLink, Route} from 'react-router-dom';
import './App.css';
import Home from './Home'
import BrowserRouter from './BrowserRouter'
import LinkNavLink from './LinkNavLink';
import SwitchRoute from './SwitchRoute';


function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/browserrouter" activeClassName="nav-selected">Browser Router</NavLink>
        <NavLink to="/link" activeClassName="nav-selected">Link / NavLink</NavLink>
        <NavLink to="/switch-route" activeClassName="nav-selected">Switch / Route</NavLink>
      </nav>
      <Switch>
        <Route path="/browserrouter" component={BrowserRouter} />
        <Route path="/link" component={LinkNavLink} />
        <Route path="/switch-route" component={SwitchRoute} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
