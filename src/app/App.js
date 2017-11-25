import React, { Component } from 'react';

import logo from '../logo.svg';

import './App.css';
import RecipeList from '../recipes/RecipeList';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
