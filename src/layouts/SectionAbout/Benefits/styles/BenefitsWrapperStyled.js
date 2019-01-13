import styled from 'styled-components';
import { media } from 'reactackle';

import { baseModule, colorBorder } from '../../../../styles/themeSelectors';

export const BenefitsWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: ${baseModule(5)}px;
  margin-bottom: ${baseModule(5)}px;
  align-items: stretch;
  border-bottom: 1px solid ${colorBorder};

  > * {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
  }

  > * > * {
    flex-basis: 100%;
  }

  ${media('30em')`  
    > * > * {
      flex-basis: 50%;
    }  
  `}
`;

BenefitsWrapperStyled.displayName = 'BenefitsWrapperStyled';
