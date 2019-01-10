import styled, { css } from 'styled-components';
import { transition } from 'reactackle';

import {
  bodyFontFamily,
  colorWhite,
  colorDarkBlue,
} from '../../../styles/themeSelectors';

const colorLight = colorWhite,
  colorDark = colorDarkBlue;

const color = ({ light }) => css`
  &,
  &:visited {
    color: ${light ? colorLight : colorDark};
  }
`;

export const AnchorStyled = styled.a`
  display: inline-flex;
  align-items: flex-start;
  cursor: pointer;
  line-height: 1.5;
  font-family: ${bodyFontFamily};
  opacity: 0.9;
  ${color}
  
  &:hover {
    opacity: 1;
  }
  
  ${transition('opacity')}
`;

AnchorStyled.displayName = 'AnchorStyled';
