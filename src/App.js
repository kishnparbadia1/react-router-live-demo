import React from "react";
import "./App.css";
import Home from "./Home";
import BrowserRouterPage from "./BrowserRouter";
import LinkNavLink from "./LinkNavLink";
import SwitchRoute from "./SwitchRoute";
import Resources from "./Resources";
import RouteProps from "./RouteProps";
import FavoriteDessert from "./FavoriteDessert";
import { NavLink, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/browser-router'>Browser Router</NavLink>
        <NavLink to='/link-nav-link'>Link Nav Link</NavLink>
      </nav>
      {/* <Home />
      <BrowserRouter />
      <SwitchRoute />
      <LinkNavLink />
      <Resources />
      <RouteProps />
      <FavoriteDessert /> */}
      {/*
        stops the 'fuzzy matching', and only renders Home when the url is localhost:8080
      <Route exact path='/' component={Home} /> */}
        <Route path='/' component={Home} />
      <Switch>
        <Route path='/browser-router' component={BrowserRouterPage} />
        <Route path='/switch-route' component={SwitchRoute} />
        <Route path='/link-nav-link' component={LinkNavLink} />
        <Route path='/route-props' component={RouteProps} />
        <Route path='/favorite-dessert/new' component={BrowserRouterPage} />
        <Route path='/favorite-dessert/:id' component={(routeProps) => <FavoriteDessert {...routeProps} otherProps='test' mac='awesome' />} />
        <Route path='/resources' component={Resources} />

      </Switch>

    </div>
  );
}

export default App;
