/**
 * @author Ekaterina Marova
 */

import styled, { css } from 'styled-components';
import { media } from 'reactackle';

import {
  baseModule,
  radiusDefault,
  paletteBlueGrey200,
} from '../../../../styles/themeSelectors';

const breakpoints = ({ theme }) => css`
  ${media(theme.reactackle.breakpoints.medium)`
    display: flex;
   
    & > *:first-child {
      width: 40%;
    }
    
    & > *:nth-child(2) {
      width: 60%;
    }
  `}
`;

export const BenefitsBoxStyled = styled.div`
  width: 100%;
  margin: ${baseModule(4)}px 0;
  border-radius: ${radiusDefault}px;
  overflow: hidden;
  box-shadow: 0 15px 30px -10px ${paletteBlueGrey200};
  ${breakpoints}
`;

BenefitsBoxStyled.displayName = 'BenefitsBoxStyled';
