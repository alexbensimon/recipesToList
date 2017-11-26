// @flow

import type { Ingredient } from '../app/types';
import { ADD_INGREDIENTS } from './shoppingActions';

export default function shoppingReducer(
  state: Ingredient[] = [],
  action: { type: string, payload: any },
) {
  switch (action.type) {
    case ADD_INGREDIENTS:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
