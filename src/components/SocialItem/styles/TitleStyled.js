import styled from 'styled-components';

import {
  baseModule,
  fontSizeHeadline,
  colorWhite,
} from '../../../styles/themeSelectors';

export const TitleStyled = styled.div`
  font-size: 1.25em;
  font-weight: bold;
  color: ${colorWhite};
  margin-bottom: ${baseModule(1)}px;

  a:hover > & {
    text-decoration: underline;
  }
`;

TitleStyled.displayName = 'TitleStyled';
