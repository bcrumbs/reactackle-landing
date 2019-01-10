import styled from 'styled-components';
import {
  baseModule,
} from '../../../styles/themeSelectors';

/** STYLES */
export const WarningContentStyled = styled.div`
  max-width: 40em;
  padding: ${baseModule(3)}px;
  margin: auto;
  text-align: center;  
`;

WarningContentStyled.displayName = 'WarningContentStyled';
