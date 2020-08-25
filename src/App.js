import React from "react";
import "./App.css";
import Home from "./Home";
import BrowserRouter from "./BrowserRouter";
import LinkNavLink from './LinkNavLink';
import SwitchRoute from "./SwitchRoute";
import Resources from "./Resources";

function App() {
  return (
    <div className="App">
      <Home />
      <BrowserRouter />
      <SwitchRoute />
      <LinkNavLink />
      <Resources />
    </div>
  );
}

export default App;
