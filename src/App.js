import React from 'react';
import './App.css';
import ItemContainer from './itemContainer'
import {Switch, Link, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/travel">Navigate to travel</Link>
      </nav>
      <Switch>
        <Route path="/travel" render={() => (<ItemContainer />)} />
      </Switch>
    </div>
  );
}

export default App;
