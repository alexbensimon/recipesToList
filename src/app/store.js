// @flow

import { applyMiddleware, createStore, combineReducers } from 'redux';
import ReduxLogger from 'redux-logger';

import shoppingReducer from '../shopping/shoppingReducer';

export default createStore(
  combineReducers({
    shopping: shoppingReducer,
  }),
  applyMiddleware(ReduxLogger),
);
