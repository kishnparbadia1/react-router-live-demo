import React from "react";

function SwitchRoute() {
  return (
    <div className="container">
      <h1>Switch and Route</h1>
      <h2>Switch</h2>
        <p>It renders the first child `Route` that matches the location.</p>
        <p>
            `Switch` allows to render a route exclusively. In contrast, every
            `Route` that matches the location renders inclusively.
        </p>
      <h2>Route</h2>
        <p>It's responsability is to render some UI when its path matches the current URL.</p>
        <p>Route render methods</p>
        <ul>
            <li>Route component</li>
            <li>Route render</li>
            <li>Route children function</li>
        </ul>

        <h3>Route component</h3>
        <p>A React component to render only when the location matches. It will be rendered with `route props`.</p>

        <h3>Route render</h3>
        <h3>Route children function</h3>
    </div>
  );
}

export default SwitchRoute;
