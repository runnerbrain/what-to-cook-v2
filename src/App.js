import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import SearchForm from './SearchForm';
import Recipes from './Recipes';
import './App.css';
import './whatToCook.png';

const App = () => {
  const handleSearch = (queryObj) => {
    console.log('From App');
    console.log(queryObj);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            exact
            path="/search"
            render={(props) => (
              <SearchForm {...props} onSearchClick={handleSearch} />
            )}
          />
          <Route exact path="/recipes" render={(props) => Recipes} />

          <button>talk to me</button>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
