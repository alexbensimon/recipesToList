// @flow

import { applyMiddleware, createStore, combineReducers } from 'redux';
import ReduxLogger from 'redux-logger';

import recipesReducer from '../recipes/recipeReducer';
import shoppingReducer from '../shopping/shoppingReducer';

export default createStore(
  combineReducers({
    recipes: recipesReducer,
    shopping: shoppingReducer,
  }),
  applyMiddleware(ReduxLogger),
);
