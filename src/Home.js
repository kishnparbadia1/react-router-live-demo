import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <img src="react-router.jpg" alt="react-router logo" />
      <div className="home-links">
        <Link to="/">Home</Link>
        <Link to="/browser-router">Browser Router</Link>
        <Link to="/switch-route">Switch Route</Link>
        <Link to="/link-nav-link">Link Nav Link</Link>
        <Link to="/favorite-dessert/1">Rainbow Cookies</Link>
      </div>
    </div>
  );
}

export default Home;
