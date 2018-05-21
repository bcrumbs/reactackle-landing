'use strict';

import styled from 'styled-components';

import {
  baseModule,
  colorWhite,
} from '../../../assets/styles/themeSelectors';

/** STYLES */
export const FooterLinksSeparatorStyled = styled.div`
  color: ${colorWhite};
  padding: 0 ${baseModule(2)}px;
  opacity: 0.5;
`;

FooterLinksSeparatorStyled.displayName = 'FooterLinksSeparatorStyled';
