/**
 * @author Ekaterina Marova
 */


import styled from 'styled-components';

import {
  baseModule,
  fontSizeBody,
  colorWhite,
} from '../../../styles/themeSelectors';

export const DescriptionStyled = styled.div`
  font-size: ${fontSizeBody}px;
  color: ${colorWhite};
  text-decoration: none;
`;

DescriptionStyled.displayName = 'DescriptionStyled';
