import styled from 'styled-components';
import {
  contentWidth,
  baseModule,
  fontSizeBody,
  fontFamilyMonospace,
} from '../../../styles/themeSelectors';

/** STYLES */
export const CodeBoxContentStyled = styled.div`
  margin: 0 auto;
  max-width: ${contentWidth}px;
  padding: ${baseModule(2)}px;
  font-size: ${fontSizeBody}px;
  font-family: ${fontFamilyMonospace};
`;

CodeBoxContentStyled.displayName = 'CodeBoxContentStyled';
