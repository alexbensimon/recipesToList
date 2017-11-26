// @flow

import type { Ingredient } from '../app/types';

export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

export function addIngredients(ingredients: Ingredient[]) {
  return {
    type: ADD_INGREDIENTS,
    payload: ingredients,
  };
}
