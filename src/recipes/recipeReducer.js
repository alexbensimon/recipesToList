// @flow

import type { Recipe } from '../app/types';
import { STORE_RECIPES, CHOOSE_RECIPE } from './recipeActions';

export default function recipeReducer(
  state: Recipe[] = [],
  action: { type: string, payload: any },
) {
  switch (action.type) {
    case STORE_RECIPES:
      return [...state, ...action.payload];

    case CHOOSE_RECIPE: {
      const recipeChosen = state.find(recipe => recipe.id === action.payload);
      return [
        ...state.filter(recipe => recipe !== recipeChosen),
        { ...recipeChosen, chosen: true },
      ].sort((r1, r2) => r1.id - r2.id);
    }

    default:
      return state;
  }
}
