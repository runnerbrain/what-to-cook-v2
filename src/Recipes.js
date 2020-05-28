import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Recipe from './Recipe';

const URL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search`;
const Recipes = ({ queryObj }) => {
  const [recipes, setRecipes] = useState([]);

  const makeStringFromObject = (queryObj) => {
    let paramKeys = Object.keys(queryObj);
    let queryParamsArr = [];
    let paramArr = [];
    console.log(paramKeys);

    paramKeys.forEach((key, index) => {
      if (typeof queryObj[key] === 'object') {
        let tempKeys = Object.keys(queryObj[key]);
        tempKeys.forEach((subKey, subIndex) => {
          if (queryObj[key][subKey] === true) {
            paramArr.push(subKey);
          }
        }); //end of foreach for each subObject
        queryParamsArr.push(`${key}=${paramArr.join(', ')}`);
        paramArr = [];
      } //end of if typeof obj[key] === "object"
      else {
        queryParamsArr.push(`${key}=${queryObj[key]}`);
      }
      // console.log(queryParamsArr);
    }); //end of forEach for main Object
    console.log(queryParamsArr.join('&'));
    console.log(encodeURI(queryParamsArr.join('&')));
    return encodeURI(queryParamsArr.join('&'));
  };

  useEffect(() => {
    let queryString = makeStringFromObject(queryObj);
    let URLWithQuery = `${URL}?${queryString}`;
    // console.log(URLWithQuery);
    const fetchRecipes = async () => {
      const res = await fetch(URLWithQuery, {
        headers: {
          'Content-type': 'application/json',
          'x-rapidapi-key':
            '0a3bdef1efmshc66285758524db9p18f72bjsnbff71681737a',
        },
      });
      const result = await res.json();
      console.log(result.results.length);
      setRecipes(result.results);
    };
    fetchRecipes();
  }, []);

  return (
    <div className="recipes">
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <ul>
          <Recipe recipe={recipe} />
        </ul>
      ))}

      <Link to="/search">
        <button className="cta">Search Again</button>
      </Link>
    </div>
  );
};

export default Recipes;
