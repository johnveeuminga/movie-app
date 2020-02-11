import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './scss/app.scss';
import Home from './pages/Home';
import MovieSingle from './pages/MovieSingle';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={MovieSingle} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
