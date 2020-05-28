import React, { useState, useEffect } from 'react';

const IMAGE_URL = 'https://spoonacular.com/recipeImages/';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-title">
        <h1>{recipe.title}</h1>
      </div>
      <img src={`${IMAGE_URL}/${recipe.image}`} alt={recipe.title} />
      <div className="recipe-info">Ready in : {recipe.readyInMinutes}</div>
    </div>
  );
};

export default Recipe;
