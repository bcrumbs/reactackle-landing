/**
 * @author Ekaterina Marova
 */

'use strict';

import styled from 'styled-components';
import { transition } from 'reactackle';
import { baseModule } from '../../../assets/styles/themeSelectors';

export const SocialItemStyled = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${baseModule(3)}px;
  cursor: pointer;
  flex-grow: 1;
  border-radius: 5px;
  ${transition('background-color, border-radius')}
  
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  &,
  &:visited {
    text-decoration: none;
  }
`;

SocialItemStyled.displayName = 'SocialItemStyled';
