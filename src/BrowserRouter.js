import React from "react";
import { Highlight } from "./Highlight";

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
      <Highlight code={`import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    // all route sensitive code is wrapped into BrowserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);`} />
      <h2>Documentation</h2>
      <a href="https://reacttraining.com/react-router/web/api/BrowserRouter" target="_blank" rel="noopener noreferrer">React training - Browser Router</a>
    </div>
  );
}

export default BrowserRouter;
