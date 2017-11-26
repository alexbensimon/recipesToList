// @flow

import React from 'react';
import { groupBy } from 'lodash';

import type { Ingredient } from '../app/types';

import IngredientComp from './IngredientComp';

type Props = {
  ingredients: Ingredient[],
};

export default function Department(props: Props) {
  const ingredientsByName = groupBy(props.ingredients, 'name');
  const ingredientsWithoutDuplicate = [];
  Object.values(ingredientsByName).forEach((sameIngredientList) => {
    ingredientsWithoutDuplicate.push(
      sameIngredientList.reduce(
        (acc, current) => ({
          ...current,
          quantity: acc.quantity + current.quantity,
          // TODO: Handle different units
        }),
        { ...sameIngredientList[0], quantity: 0 },
      ),
    );
  });
  const ingredientCompList = ingredientsWithoutDuplicate.map(ingredient => (
    // TODO: Add key
    <IngredientComp quantity={ingredient.quantity} unit={ingredient.unit} name={ingredient.name} />
  ));
  return (
    <div>
      <h2>{props.ingredients ? props.ingredients[0].department : ''}</h2>
      {ingredientCompList}
    </div>
  );
}
