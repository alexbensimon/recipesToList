// @flow

import React from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';

import type { Ingredient } from '../app/types';

import Department from './Department';

type Props = {
  ingredients: Ingredient[],
};

function ShoppingList(props: Props) {
  const ingredientsByDepartment = groupBy(props.ingredients, 'department');
  const departmentList = Object.values(ingredientsByDepartment).map(ingredients => (
    // TODO: Add key
    <Department ingredients={ingredients} />
  ));
  return (
    <div>
      <h1>Ingredients to buy</h1>
      {departmentList}
    </div>
  );
}

export default connect(state => ({
  ingredients: state.shopping,
}))(ShoppingList);
