import styled from 'styled-components';
import {
  radiusDefault,
  paletteBlueGrey50,
} from '../../../styles/themeSelectors';

/** STYLES */
export const CodeBoxStyled = styled.div`
  border-radius: ${radiusDefault}px;
  background-color: ${paletteBlueGrey50};
`;

CodeBoxStyled.displayName = 'CodeBoxStyled';
