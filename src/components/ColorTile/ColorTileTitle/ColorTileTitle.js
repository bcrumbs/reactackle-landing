import React from 'react';
import { ColorTileTitleStyled } from './styles/ColorTileTitleStyled';

export const ColorTileTitle = props => (
  <ColorTileTitleStyled>
    {props.children}
  </ColorTileTitleStyled>
);

ColorTileTitle.displayName = 'ColorTileTitle';
