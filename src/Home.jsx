import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <img className="icon" src={require('./whatToCook.png')} alt="app-icon" />
      <div className="opening-line">
        <h1>
          Get quick ideas for recipes & ingredients to cook a delicious meal and
          stay Inspired
        </h1>
        <Link to="/search">
          <button className="cta">Start Cooking</button>
        </Link>
      </div>
    </div>
  );
}
