// @flow

import React from 'react';

import recipes from '../resources/recipes.json';
import './recipes.css';

import RecipeItem from './RecipeItem';

export default function RecipeList() {
  const recipeItemList = recipes.map(recipe => (
    <RecipeItem name={recipe.title} imageName={recipe.image_name} key={recipe.recipe_id} />
  ));
  return <div className="recipe-list">{recipeItemList}</div>;
}
