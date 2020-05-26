import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import SearchForm from './SearchForm';
import Recipes from './Recipes';
import './App.css';
import './whatToCook.png';

const App = () => {
  const [queryObj, setQueryObj] = useState({});

  const handleSearch = (queryObj) => {
    // console.log('From App');
    // console.log(queryObj);
    setQueryObj(queryObj);
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
          <Route
            exact
            path="/recipes"
            render={(props) => <Recipes {...props} queryObj={queryObj} />}
          />

          <button>talk to me</button>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
