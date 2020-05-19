const searchRecipesUrl =
  'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search';

export const fetchRecipesWithParams = async (queryObj) => {
  const queryKeys = Object.keys(props.queryObj);

  try {
    const data = await fetch(searchRecipesUrl, {
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': '0a3bdef1efmshc66285758524db9p18f72bjsnbff71681737a',
      },
    });
    const recipes = await data.json();
  } catch (error) {}
};
