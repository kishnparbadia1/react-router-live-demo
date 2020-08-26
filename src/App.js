import React from "react";
import { NavLink, Route, Switch } from 'react-router-dom';
import "./App.css";
import Home from "./Home";
import BrowserRouter from "./BrowserRouter";
import LinkNavLink from './LinkNavLink';
import Resources from "./Resources";
import RouteProps from './RouteProps';
import SwitchRoute from "./SwitchRoute";
import FavoriteDessert from './FavoriteDessert';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/browser-router" activeClassName="nav-selected">
          Browser Router
        </NavLink>
        <NavLink to="/switch-route" activeClassName="nav-selected">
          Switch & Route
        </NavLink>
        <NavLink to="/link" activeClassName="nav-selected">
          Link & NavLink
        </NavLink>
        <NavLink to="/route-props" activeClassName="nav-selected">
          Route Props
        </NavLink>
        <NavLink to="/resources" activeClassName="nav-selected">
          Resources
        </NavLink>
      </nav>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/browser-router' component={BrowserRouter}></Route>
        <Route path='/switch-route' component={SwitchRoute}></Route>
        <Route path='/link' component={LinkNavLink}></Route>
        <Route path='/route-props' component={RouteProps}></Route>
        <Route path='/favoritedessert/new' component={BrowserRouter}></Route>
        <Route path='/favoritedessert/:dessertId' component={FavoriteDessert}></Route>
        <Route path='/resources' component={Resources}></Route>
      </Switch>

    </div>
  );
}

export default App;
