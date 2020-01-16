import React from "react";

function LinkNavLink() {
  return (
    <div className="container">
      <h1>Link & Nav Link</h1>
      <h2>Link</h2>
      <ul>
        <li>It provides accessible navigation around your application.</li>
        <li>It has a `to` propery, the most commonly used is `to: string`</li>
      </ul>
      <h2>Nav Link</h2>
      <ul>
        <li>It is a special version of the Link tag.</li>
        <li>It is used for the navbar.</li>
        <li>
          It gives styling attributes to the rendered element when it matches
          the current URL.
        </li>
      </ul>
    </div>
  );
}

export default LinkNavLink;
