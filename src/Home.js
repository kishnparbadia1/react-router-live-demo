import React from "react";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container'>
      <img src="react-router.jpg" alt="react-router logo" />
      <div className="home-links">
        <Link to="/page1">Browser Router</Link>
        <Link to="/page3">Switch & Route</Link>
        <Link to="/page2">Link & NavLink</Link>
        <Link to="/page5">Route props</Link>
      </div>
    </div>
  );
}

export default Home;
