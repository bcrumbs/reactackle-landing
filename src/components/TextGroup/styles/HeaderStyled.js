import styled from 'styled-components';
import { media } from 'reactackle';
import constants from './constants';

import {
  textColorMedium,
  fontWeightSemibold,
  fontSizeBody,
  baseModule,
} from '../../../styles/themeSelectors';

/** STYLES */
export const HeaderStyled = styled.div`
  text-transform: uppercase;
  color: ${textColorMedium};
  font-weight: ${fontWeightSemibold};
  font-size: ${fontSizeBody}px;
  line-height: 1.7;
  margin-bottom: ${baseModule(2)}px;
  
  ${media(constants.breakpoint)`
    max-width: 20em;
    text-align: right;
    margin-right: ${baseModule(3)}px;
  `}
`;

HeaderStyled.displayName = 'HeaderStyled';
