// @flow

import React from 'react';
import { connect } from 'react-redux';

import dirtyRecipes from '../resources/recipes.json';
import './recipes.css';
import { storeRecipes, chooseRecipe } from './recipeActions';
import { addIngredients } from '../shopping/shoppingActions';
import type { Recipe } from '../app/types';
import { cleanRecipes } from './recipeUtils';

import RecipeItem from './RecipeItem';

type Props = {
  storeRecipes: Function,
  recipes: Recipe[],
  chooseRecipe: Function,
  addIngredients: Function,
};

class RecipeList extends React.Component<Props> {
  componentDidMount() {
    const recipes = cleanRecipes(dirtyRecipes);
    this.props.storeRecipes(recipes);
  }

  render() {
    const recipeItemList = this.props.recipes
      ? this.props.recipes.map(recipe => (
        <RecipeItem
          id={recipe.id}
          name={recipe.name}
          imageName={recipe.imageName}
          ingredients={recipe.ingredients}
          chooseRecipe={this.props.chooseRecipe}
          addIngredients={this.props.addIngredients}
          chosen={recipe.chosen}
          key={recipe.id}
        />
        ))
      : null;
    return <div className="recipe-list">{recipeItemList}</div>;
  }
}

export default connect(
  state => ({
    recipes: state.recipes,
  }),
  { storeRecipes, chooseRecipe, addIngredients },
)(RecipeList);
