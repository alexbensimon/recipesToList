// @flow
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import logo from '../logo.svg';
import store from './store';
import RecipeList from '../recipes/RecipeList';
import ShoppingList from '../shopping/ShoppingList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to RecipesToList{' '}
            <span role="img" aria-label="hamburger-emoji">
              🍔
            </span>
          </h1>
        </header>
        <RecipeList />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
