import React from 'react';
import { ColorTileAnchorStyled } from './styles/ColorTileAnchorStyled';

export const ColorTileAnchor = props => (
  <ColorTileAnchorStyled href={props.href}>
    {props.children}
  </ColorTileAnchorStyled>
);

ColorTileAnchor.displayName = 'ColorTileAnchor';
