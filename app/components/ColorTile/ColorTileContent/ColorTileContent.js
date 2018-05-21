'use strict';

import React from 'react';
import { ColorTileContentStyled } from './styles/ColorTileContentStyled';

export const ColorTileContent = props => (
  <ColorTileContentStyled>
    {props.children}
  </ColorTileContentStyled>
);

ColorTileContent.displayName = 'ColorTileContent';
