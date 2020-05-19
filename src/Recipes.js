import React from 'react';
import { Link } from 'react-router-dom';
const Recipes = (props) => {
  return (
    <div>
      <h1>Recipes...get your recipes here...</h1>

      <Link to="/">
        <button className="cta">Home</button>
      </Link>
    </div>
  );
};

export default Recipes;
