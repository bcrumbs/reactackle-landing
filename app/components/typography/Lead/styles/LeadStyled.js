'use strict';

import styled from 'styled-components';
import {
  fontSizeTitle,
  baseModule,
} from '../../../../assets/styles/themeSelectors';

/** STYLES */
export const LeadStyled = styled.p`
  font-size: ${fontSizeTitle}px;
  margin: 0;
  max-width: 30em;
  line-height: 1.7;
  
  & + * {
    margin-top: ${baseModule(2)}px;
  }
`;

LeadStyled.displayName = 'LeadStyled';
