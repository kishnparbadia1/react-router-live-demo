import React from "react";
import { Switch, NavLink, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import BrowserRouter from "./BrowserRouter";
import LinkNavLink from "./LinkNavLink";
import SwitchRoute from "./SwitchRoute";
import Resources from "./Resources";
import RouteProps from "./RouteProps";
import FavoriteDessert from "./FavoriteDessert";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/page1" activeClassName="nav-selected">
          Browser Router
        </NavLink>
        <NavLink to="/page2" activeClassName="nav-selected">
          Switch & Route
        </NavLink>
        <NavLink to="/page3" activeClassName="nav-selected">
          Link & NavLink
        </NavLink>
        <NavLink to="/page4" activeClassName="nav-selected">
          Route Props
        </NavLink>
        <NavLink to="/page5" activeClassName="nav-selected">
          Resources
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={BrowserRouter} />
        <Route path="/page2" component={SwitchRoute} />
        <Route path="/page3" component={LinkNavLink} />
        <Route path="/page4" component={RouteProps} />
        <Route path="/page5" component={Resources} />
      
        {/* <Route path="/favoritedessert/:dessertId" component={FavoriteDessert} /> */}
      </Switch>
    </div>
  );
}

export default App;
