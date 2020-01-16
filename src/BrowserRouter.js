import React from "react";

function BrowserRouter() {
  return (
    <div className="container">
      <h1>Browser Router</h1>
      <ul>
        <li>It needs to be the parent of everything.</li>
        <li>
          When the url changes, the Router will make sure the expected component
          is displayed.
        </li>
      </ul>
      <img src="/browserrouter.png" alt="screenshot browser router" />
    </div>
  );
}

export default BrowserRouter;
