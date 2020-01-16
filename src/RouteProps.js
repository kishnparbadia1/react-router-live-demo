import React, { useState } from "react";

function RouteProps(props) {
  const [dessert, setDessert] = useState('');
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
      <img src="/match.png" alt="match code snippet"></img>

      <select onChange={(e) => setDessert(e.target.value)}>
        <option>Chocolate mousse</option>
        <option>Madeleine</option>
        <option>Macaroon</option>
        <option>Cookies</option>
        <option>Apple pie</option>
      </select>

      <h2>Location</h2>
      <p>
        It represents where the app is now, where you want it to go, or even
        where it was.
      </p>

      <h2>History</h2>
      <p>It is used to manipulate browser's history programmatically.</p>
      <p>You can programmatically navigate using `history.push`.</p>
      <img src="/history.png" alt="history code snippet"></img>
      <button onClick={() => props.history.push('/')}>Go Home</button>
    </div>
  );
}

export default RouteProps;
