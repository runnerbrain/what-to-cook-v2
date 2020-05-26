import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search`;

const Recipes = ({ queryObj }) => {
  const [data, setData] = useState({ recipesList: [] });

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
  };

  useEffect(() => {
    makeStringFromObject(queryObj);
    const fetchRecipes = async () => {
      const res = await fetch(URL, {
        headers: {
          'Content-type': 'application/json',
          'x-rapidapi-key':
            '0a3bdef1efmshc66285758524db9p18f72bjsnbff71681737a',
        },
      });
      setData(res.data);
    };
    fetchRecipes();
  }, []);

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
