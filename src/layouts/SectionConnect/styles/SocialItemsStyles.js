import styled from 'styled-components';
import { media } from 'reactackle';

import {
  contentWidth,
  baseModule,
} from '../../../styles/themeSelectors';

/** STYLES */
export const SocialItemsStyles = styled.div`
  
  justify-content: center;
  max-width: ${contentWidth}px;
  width: 100%;
  margin: ${baseModule(4)}px auto 0;

  ${media('30em')`
    display: flex;
    
    > * {
      max-width: 20em;
    }
  `}
`;

SocialItemsStyles.displayName = 'SocialItemsStyles';
