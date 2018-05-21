/**
 * @author Ekaterina Marova
 */

'use strict';

import styled from 'styled-components';

import {
  baseModule,
  fontSizeBody,
  colorWhite,
} from '../../../assets/styles/themeSelectors';

export const DescriptionStyled = styled.div`
  font-size: ${fontSizeBody}px;
  color: ${colorWhite};
  text-decoration: none;
`;

DescriptionStyled.displayName = 'DescriptionStyled';
