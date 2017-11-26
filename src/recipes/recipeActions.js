// @flow

import type { Recipe } from '../app/types';

export const STORE_RECIPES = 'STORE_RECIPES';
export const CHOOSE_RECIPE = 'CHOOSE_RECIPE';

export function storeRecipes(recipes: Recipe[]) {
  return {
    type: STORE_RECIPES,
    payload: recipes,
  };
}

export function chooseRecipe(recipeId: number) {
  return {
    type: CHOOSE_RECIPE,
    payload: recipeId,
  };
}
