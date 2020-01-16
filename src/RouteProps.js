import React from "react";

function RouteProps() {
  return (
    <div className="container">
      <h1>Route Props</h1>
      <p>The three render methods will be passed the same three route props:</p>
      <ul>
        <li>Match</li>
        <li>Location</li>
        <li>History</li>
      </ul>

      <h2>Match</h2>
      <ul>
        <li>
          It contains info about how a Route's pah matched the current URL
        </li>
        <li>
          It contains a very useful property (among others) `params` that parses
          the url parameters.
        </li>
      </ul>

      <h2>Location</h2>
      <p>
        It represents where the app is now, where you want it to go, or even
        where it was.
      </p>
    </div>
  );
}

export default RouteProps;
