import React from "react";
import "./App.css";
import Home from "./Home";
import BrowserRouter from "./BrowserRouter";
import LinkNavLink from "./LinkNavLink";
import SwitchRoute from "./SwitchRoute";
import Resources from "./Resources";
import RouteProps from "./RouteProps";
import FavoriteDessert from "./FavoriteDessert";
import { NavLink, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/browser-router" activeClassName="nav-selected">
          Browser Router
        </NavLink>
        <NavLink to="/switch-route">Switch Route</NavLink>
        <NavLink to="/link-nav-link">Link Nav Link</NavLink>
        <NavLink to="/route-props">Route Props</NavLink>
        <NavLink to="/resources">Resources</NavLink>
      </nav>
      {/* <Home />
      <BrowserRouter />
      <SwitchRoute></SwitchRoute>
      <LinkNavLink />
      <Resources />
      <RouteProps />
      <FavoriteDessert /> */}
      <Route path="/" component={Home}></Route>
      <Switch>
        <Route path="/browser-router" component={BrowserRouter}></Route>
        <Route path="/switch-route" component={SwitchRoute}></Route>
        <Route path="/link-nav-link" component={LinkNavLink}></Route>
        <Route path="/route-props" component={RouteProps}></Route>
        <Route path="/favorite-dessert/new" component={BrowserRouter}></Route>
        <Route
          path="/favorite-dessert/:dessertId"
          render={(routeProps) => (
            // These are the same
            // <FavoriteDessert {...routeProps} name="Nicole" />
            <FavoriteDessert
              match={routeProps.match}
              history={routeProps.history}
              location={routeProps.location}
              name="Nicole"
            />
          )}
        ></Route>
        <Route path="/resources" component={Resources}></Route>
      </Switch>
    </div>
  );
}

export default App;
