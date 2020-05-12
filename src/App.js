import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import SearchForm from './SearchForm';
import './App.css';
import './whatToCook.png';

const App = () => {
  const handleSearch = () => {
    console.log('handling search since 2020');
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
              <SearchForm {...props} onSearch={handleSearch} />
            )}
          />
          <Route exact path="/recipes">
            <Recipes />
          </Route>

          <button>talk to me</button>
        </Switch>
      </div>
    </Router>
  );
};

function Recipes() {
  return (
    <div>
      <h1>list of recipes here</h1>;
      <Link to="/">
        <button className="cta">Home</button>
      </Link>
    </div>
  );
}

export default App;
