/**
 * @author Ekaterina Marova
 */

'use strict';

import styled from 'styled-components';

import {
  baseModule,
  fontSizeTitle,
  colorWhite,
} from '../../../assets/styles/themeSelectors';

export const TitleStyled = styled.div`
  font-size: ${fontSizeTitle}px;
  color: ${colorWhite};
  text-decoration: underline;
  margin-bottom: ${baseModule(1)}px;
`;

TitleStyled.displayName = 'TitleStyled';
