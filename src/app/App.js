// @flow
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import logo from '../logo.svg';
import RecipeList from '../recipes/RecipeList';
import store from './store';

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
      </div>
    </Provider>
  );
}

export default App;
