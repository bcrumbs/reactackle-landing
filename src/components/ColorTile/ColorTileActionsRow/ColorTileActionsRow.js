import React from 'react';
import { ColorTileActionsRowStyled } from './styles/ColorTileActionsRowStyled';

export const ColorTileActionsRow = props => (
  <ColorTileActionsRowStyled>
    {props.children}
  </ColorTileActionsRowStyled>
);

ColorTileActionsRow.displayName = 'ColorTileActionsRow';
