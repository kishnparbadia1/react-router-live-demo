import React from "react";

function Home() {
  return (
    <div className='container'>
      <img src="react-router.jpg" alt="react-router logo" />
      <div className="home-links">
        <a href="/browser-router">Browser Router</a>
        <a href="/switch-route">Switch & Route</a>
        <a href="/link">Link & NavLink</a>
        <a href="/route-props">Route props</a>
        <a href='/resources'>Resources</a>
      </div>
    </div>
  );
}

export default Home;
