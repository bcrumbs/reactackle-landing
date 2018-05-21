'use strict';

import styled from 'styled-components';
import { transition } from 'reactackle';

import {
  fontWeightSemibold,
  fontSizeBody,
} from '../../../../assets/styles/themeSelectors';

/** STYLES */
export const ColorTileAnchorStyled = styled.a`
  text-decoration: underline;
  font-weight: ${fontWeightSemibold};
  font-size: ${fontSizeBody}px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  opacity: 0.9;
  
  &:hover {
    text-decoration: underline;
    opacity: 1;
  }
  
  &,
  &:visited,
  &:focus,
  &:hover {
    color: inherit;
  }
  
  ${transition('opacity')}
`;

ColorTileAnchorStyled.displayName = 'ColorTileAnchorStyled';
