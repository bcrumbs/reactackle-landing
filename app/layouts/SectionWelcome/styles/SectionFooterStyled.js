'use strict';

import styled from 'styled-components';
import { transition } from 'reactackle';

import {
  baseModule,
  colorWhite,
} from '../../../assets/styles/themeSelectors';

/** STYLES */
export const SectionFooterStyled = styled.div`
  margin-top: auto;
  border-top: 1px solid ${colorWhite};
  padding: ${baseModule(2)}px 0 0;
  display: flex;
  align-items: flex-start;
  
  * {
    color: ${colorWhite};
  }
  
  a {
    opacity: 0.8;
    ${transition("opacity")}
    
    &:hover {
      opacity: 1;
    }
  }
`;

SectionFooterStyled.displayName = 'SectionFooterStyled';
