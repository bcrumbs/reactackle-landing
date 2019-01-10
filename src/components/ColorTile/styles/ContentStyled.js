import styled from 'styled-components';
import {
  baseModule,
} from '../../../styles/themeSelectors';

/** STYLES */
export const ContentStyled = styled.div`
  padding: ${baseModule(5)}px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  
`;

ContentStyled.displayName = 'ContentStyled';
