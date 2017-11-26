// @flow

import type { Ingredient, Recipe } from '../app/types';

function cleanIngredients(
  ingredients: Array<{
    display_index: number,
    ...Ingredient,
  }>,
): Ingredient[] {
  return ingredients.map((ingredient) => {
    const { display_index, ...cleanIngredient } = ingredient;
    return cleanIngredient;
  });
}

// eslint-disable-next-line import/prefer-default-export
export function cleanRecipes(
  recipes: Array<{
    recipe_id: number,
    title: string,
    image_name: string,
    instruction: string,
    servings: number,
    ingredients: Array<{
      display_index: number,
      ...Ingredient,
    }>,
  }>,
): Recipe[] {
  return recipes.map((recipe) => {
    const {
      recipe_id: id,
      title: name,
      image_name: imageName,
      ingredients: dirtyIngredients,
    } = recipe;
    const ingredients = cleanIngredients(dirtyIngredients);
    return {
      id,
      name,
      imageName,
      ingredients,
    };
  });
}
