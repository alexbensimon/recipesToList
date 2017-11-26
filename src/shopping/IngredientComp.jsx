// @flow

import React from 'react';

import type { Ingredient } from '../app/types';

export default function IngredientComp(props: Ingredient) {
  return (
    <div>
      <p>
        {props.quantity} {props.unit} {props.name}
      </p>
    </div>
  );
}
