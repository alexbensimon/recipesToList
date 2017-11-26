// @flow
/* eslint-disable no-undef */

export type Ingredient = {
  name: string,
  department: string,
  quantity: number,
  unit: string,
};

export type Recipe = {
  id: number,
  name: string,
  imageName: string,
  ingredients: Ingredient[],
  chosen: boolean,
};
