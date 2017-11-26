// @flow

import React from 'react';

import './recipes.css';
import type { Ingredient } from '../app/types';

type Props = {
  name: string,
  imageName: string,
  ingredients: Ingredient[],
  addIngredients: Function,
};

export default function RecipeItem({ name, imageName, ingredients, addIngredients }: Props) {
  /* eslint-disable import/no-dynamic-require */
  // eslint-disable-next-line global-require
  const image = require(`../resources/images/${imageName}`);
  return (
    <div className="recipe-item">
      <button onClick={() => addIngredients(ingredients)} className="recipe-item-add-button">
        +
      </button>
      <h3 className="recipe-item-name">{name}</h3>
      <img src={image} alt={imageName} className="recipe-item-image" />
    </div>
  );
}
