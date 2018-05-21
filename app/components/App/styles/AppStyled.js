'use strict';

import styled from 'styled-components';

import { bodyFontFamily } from '../../../assets/styles/themeSelectors';

export const AppStyled = styled.main`
  width: 100vw;
  min-height: 100vh;
  font-family: ${bodyFontFamily};
`;

AppStyled.displayName = 'AppStyled';
