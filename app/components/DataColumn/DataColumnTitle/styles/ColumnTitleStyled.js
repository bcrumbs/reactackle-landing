/**
 * @author Ekaterina Marova
 */

'use strict';

import styled from 'styled-components'
import {
  baseModule,
  fontSizeBody2,
  fontWeightBold,
  colorSecondary,
} from '../../../../assets/styles/themeSelectors';

const color = colorSecondary;

export const ColumnTitleStyled = styled.div`
  font-size: ${fontSizeBody2}px;
  line-height: 1.25;
  font-weight: ${fontWeightBold};
  position: relative;
  color: ${color};
  margin-bottom: ${baseModule(3)}px;
  text-transform: uppercase;
  letter-spacing: 0.15px;
 
  &::after {
    content: '';
    position: absolute;
    display: block;
    height: 3px;
    width: 40px;
    background-color: ${color};
    left: 0;
    bottom: -${baseModule(1.5)}px;
  }  
`;

ColumnTitleStyled.displayName = 'ColumnTitleStyled';
