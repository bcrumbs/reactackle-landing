import styled from 'styled-components';
import {
  fontSizeBody,
  baseModule,
} from '../../../../styles/themeSelectors';

/** STYLES */
export const BodyParagraphStyled = styled.p`
  font-size: ${fontSizeBody}px;
  margin: 0;
  line-height: 1.7;
  
  & + & {
    margin-top: ${baseModule(2)}px;
  }
`;

BodyParagraphStyled.displayName = 'BodyParagraphStyled';
