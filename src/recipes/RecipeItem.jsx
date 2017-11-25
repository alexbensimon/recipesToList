// @flow

import React from 'react';

import './recipes.css';

type Props = {
  name: string,
  imageName: string,
};

export default function RecipeItem({ name, imageName }: Props) {
  /* eslint-disable import/no-dynamic-require */
  // eslint-disable-next-line global-require
  const image = require(`../resources/images/${imageName}`);
  return (
    <div className="recipe-item">
      <h3 className="recipe-item-name">{name}</h3>
      <img src={image} alt={imageName} className="recipe-item-image" />
    </div>
  );
}
