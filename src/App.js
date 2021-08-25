import React from "react";
import "./App.css";
import Home from "./Home";
import BrowserRouter from "./BrowserRouter";
import LinkNavLink from "./LinkNavLink";
import SwitchRoute from "./SwitchRoute";
import Resources from "./Resources";
import RouteProps from "./RouteProps";
import FavoriteDessert from "./FavoriteDessert";
import { Route, Switch } from "react-router-dom";

// Route component defines what our routes should render

function App() {
  return (
    <div className="App">
      <nav className="nav"></nav>
      {/* <Home />
      <BrowserRouter />
      <SwitchRoute />
      <LinkNavLink />
      <Resources />
      <RouteProps />
      <FavoriteDessert /> */}
      {/*
        With the "exact" keyword, we no longer render Home on all routes
        <Route exact path='/' component={Home}></Route> */}
      <Route path="/" component={Home}></Route>
      <Switch>
        <Route path="/browser-router" component={BrowserRouter}></Route>
        <Route path="/switch-route" component={SwitchRoute}></Route>
        <Route path="/route-props" component={RouteProps}></Route>
        <Route path="/favorite-dessert/new" component={BrowserRouter}></Route>
        <Route
          path="/favorite-dessert/:dessertId"
          render={(routeProps) => (
            <FavoriteDessert {...routeProps} oranges={"yes we have oranges"} />
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
