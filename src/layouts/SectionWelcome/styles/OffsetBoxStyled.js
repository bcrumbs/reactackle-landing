import styled from 'styled-components';
import { media } from 'reactackle';
import { baseModule } from '../../../styles/themeSelectors';

/** STYLES */
export const OffsetBoxStyled = styled.div`
  padding-left: ${baseModule(2)}px;
  
  ${media('40em')`
    padding-left: ${baseModule(6)}px;
  `}
`;

OffsetBoxStyled.displayName = 'OffsetBoxStyled';
