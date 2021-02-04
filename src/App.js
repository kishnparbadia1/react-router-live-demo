import React from "react";
import "./App.css";
import Home from "./Home";
import BrowserRouter from "./BrowserRouter";
import LinkNavLink from "./LinkNavLink";
import SwitchRoute from "./SwitchRoute";
import Resources from "./Resources";
import RouteProps from "./RouteProps";
import FavoriteDessert from "./FavoriteDessert";
import { NavLink, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/browser-router">Browser Router</NavLink>
        <NavLink to="/switch-route">Switch Route</NavLink>
        <NavLink to="/link-nav-link">Link Nav Link</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/route-props">Route Props</NavLink>
      </nav>
      {/* <Home />
      <BrowserRouter />
      <SwitchRoute />
      <LinkNavLink />
      <Resources />
      <RouteProps />
      <FavoriteDessert /> */}
      <Route path="/" component={Home} />
      <Route
        path="/browser-router"
        component={() => <BrowserRouter whateverProp="prop"></BrowserRouter>}
      />
      <Route path="/switch-route" component={SwitchRoute} />
      <Route path="/link-nav-link" component={LinkNavLink} />
      <Route path="/resources" component={Resources} />
      <Route
        path="/route-props/"
        render={(routeProps) => <RouteProps {...routeProps} />}
      />
      <Route
        path="/favorite-dessert/:dessertId"
        render={(routeProps) => <FavoriteDessert {...routeProps} />}
      />
    </div>
  );
}

export default App;
