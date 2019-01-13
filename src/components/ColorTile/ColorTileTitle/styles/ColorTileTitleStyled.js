import styled from 'styled-components';

import {
  fontSizeDisplay1,
  fontSizeTitle,
  baseModule,
} from '../../../../styles/themeSelectors';

/** STYLES */
export const ColorTileTitleStyled = styled.div`
  width: 100%;
  font-size: ${fontSizeDisplay1}px;
  margin-bottom: ${baseModule(2)}px;
  font-weight: ${fontSizeTitle};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

ColorTileTitleStyled.displayName = 'ColorTileTitleStyled';
