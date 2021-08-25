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
        <NavLink to="/browser-router" activeClassName="nav-selected">
          Browser Router
        </NavLink>
        <NavLink to="/switch-route">Switch Route</NavLink>
        <NavLink to="/link-nav-link">Link Nav Link</NavLink>
      </nav>
      {/* <Home />
      <BrowserRouter />
      <SwitchRoute></SwitchRoute>
      <LinkNavLink />
      <Resources />
      <RouteProps />
      <FavoriteDessert /> */}
      <Route path="/" component={Home}></Route>
      <Route path="/browser-router" component={BrowserRouter}></Route>
      <Route path="/switch-route" component={SwitchRoute}></Route>
      <Route path="/link-nav-link" component={LinkNavLink}></Route>
    </div>
  );
}

export default App;
