import styled, { css } from 'styled-components';

import {
  paletteBlueGrey50,
  colorMain,
  colorSecondary,
  colorInfo,
  colorWhite,
  textColorBody,
} from '../../../styles/themeSelectors';

const colorMap = {
  primary: {
    bgColor: colorMain,
    textColor: colorWhite,
  },
  secondary: {
    bgColor: colorSecondary,
    textColor: colorWhite,
  },
  info: {
    bgColor: colorInfo,
    textColor: textColorBody,
  },
  neutral: {
    bgColor: paletteBlueGrey50,
    textColor: textColorBody,
  },
};

/** Prop Receivers */
const color = ({ bgColor }) => css`
  background-color: ${colorMap[bgColor].bgColor};
  color: ${colorMap[bgColor].textColor};
`;

/** STYLES */
export const ColorTileStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  ${color}
`;

ColorTileStyled.displayName = 'ColorTileStyled';
