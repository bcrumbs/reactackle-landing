'use strict';

import styled from 'styled-components';
import {
  baseModule,
} from '../../../assets/styles/themeSelectors';

/** STYLES */
export const CodeSectionStyled = styled.div`
  max-width: 40em;
  margin ${baseModule(2)}px auto;
`;

CodeSectionStyled.displayName = 'CodeSectionStyled';
