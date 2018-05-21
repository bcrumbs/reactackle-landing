'use strict';

import styled, { css } from 'styled-components';

import {
  fontSizeTitle,
  baseModule,
} from '../../../../assets/styles/themeSelectors';

/** STYLES */
export const ColorTileContentStyled = styled.div`
  width: 100%;
  font-size: ${fontSizeTitle}px;
  margin-bottom: ${baseModule(2)}px;
  opacity: 0.8;
  max-width: 16em;
`;

ColorTileContentStyled.displayName = 'ColorTileContentStyled';
