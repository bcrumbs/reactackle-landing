import styled from 'styled-components'
import { media } from 'reactackle';
import { baseModule } from '../../../styles/themeSelectors';

/** STYLES */
export const ButtonRowStyled = styled.div`
  margin: ${baseModule(4)}px 0;
  
  & > * {
    margin: ${baseModule(0.5)}px ${baseModule(1)}px ${baseModule(0.5)}px 0;
  }
  
  & > *:last-child {
    margin-right: 0;
  }
  
  ${media('20em')`

  `}
`;

ButtonRowStyled.displayName = 'ButtonRowStyled';
