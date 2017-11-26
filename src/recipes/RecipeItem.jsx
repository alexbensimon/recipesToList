// @flow

import React from 'react';

import './recipes.css';
import type { Recipe } from '../app/types';

type Props = {
  ...Recipe,
  chooseRecipe: Function,
  addIngredients: Function,
};

export default function RecipeItem(props: Props) {
  /* eslint-disable import/no-dynamic-require */
  // eslint-disable-next-line global-require
  const image = require(`../resources/images/${props.imageName}`);
  return (
    <div className="recipe-item">
      <button
        onClick={() => {
          props.addIngredients(props.ingredients);
          props.chooseRecipe(props.id);
        }}
        className="recipe-item-add-button"
        disabled={props.chosen}
      >
        +
      </button>
      <h3 className="recipe-item-name">{props.name}</h3>
      <img src={image} alt={props.imageName} className="recipe-item-image" />
    </div>
  );
}
