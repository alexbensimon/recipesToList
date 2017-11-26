// @flow

import React from 'react';
import { connect } from 'react-redux';

import recipes from '../resources/recipes.json';
import './recipes.css';
import { addIngredients } from '../shopping/shoppingActions';

import RecipeItem from './RecipeItem';

type Props = {
  addIngredients: Function,
};

function RecipeList(props: Props) {
  const recipeItemList = recipes.map((recipe) => {
    const cleanIngredients = recipe.ingredients.map((ingredient) => {
      const { display_index, ...cleanIngredient } = ingredient;
      return cleanIngredient;
    });
    return (
      <RecipeItem
        name={recipe.title}
        imageName={recipe.image_name}
        ingredients={cleanIngredients}
        addIngredients={props.addIngredients}
        key={recipe.recipe_id}
      />
    );
  });
  return <div className="recipe-list">{recipeItemList}</div>;
}

export default connect(null, { addIngredients })(RecipeList);
