import React from "react";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container'>
      <h1 className="app-title">React Router</h1>
      <img src="react-router.jpg" alt="react-router logo" />
      <div className="home-links">
        <Link to="/browserrouter">Browswer Router</Link>
        <Link to="/link">Link and NavLink</Link>
        <Link to="/switch-route">Switch and Route</Link>
      </div>
    </div>
  );
}

export default Home;
