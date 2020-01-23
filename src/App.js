import React from "react";
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
      <nav className="nav"></nav>
      <Home />
      <BrowserRouter />
      <LinkNavLink />
      <SwitchRoute />
      <Resources />
      <RouteProps />
      <FavoriteDessert />
    </div>
  );
}

export default App;
