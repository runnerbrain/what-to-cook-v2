import React, { useState, useEffect, Children } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';

import { FaClock, FaUsers, FaLink } from 'react-icons/fa';

const IMAGE_URL = 'https://spoonacular.com/recipeImages/';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-title">{recipe.title}</div>
      <img src={`${IMAGE_URL}/${recipe.image}`} alt={recipe.title} />
      <div className="recipe-info">
        <div className="ready-in">
          <FaClock />
          <span> {recipe.readyInMinutes} minutes</span>
        </div>
        <div className="serves">
          <FaUsers size="20" /> <span>{recipe.servings}</span>
        </div>
        <div className="link">
          <a href={`${recipe.sourceUrl}`}>
            <FaLink size="20" /> <span>Source</span>
          </a>
        </div>
      </div>
      <div className="details">
        <Modal>something to say</Modal>
        {/* <Link to="/details">
          <button className="cta-details">Details</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Recipe;
