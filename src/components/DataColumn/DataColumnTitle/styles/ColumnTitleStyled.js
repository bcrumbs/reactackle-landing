/**
 * @author Ekaterina Marova
 */

import styled from 'styled-components';
import {
  baseModule,
  fontSizeBody2,
  fontWeightBold,
  colorSecondary,
} from '../../../../styles/themeSelectors';

const color = colorSecondary;

export const ColumnTitleStyled = styled.div`
  font-size: ${fontSizeBody2}px;
  line-height: 1.25;
  font-weight: ${fontWeightBold};
  position: relative;
  color: ${color};
  margin-bottom: 0.25em;
  text-transform: uppercase;
  letter-spacing: 0.15px;
`;

ColumnTitleStyled.displayName = 'ColumnTitleStyled';
