import styled from 'styled-components';
import { media } from 'reactackle';
import constants from './constants';

/** STYLES */
export const TextGroupStyled = styled.div`
  width: 100%;
  
  ${media(constants.breakpoint)`
    display: flex;    
  `}
`;

TextGroupStyled.displayName = 'TextGroupStyled';
