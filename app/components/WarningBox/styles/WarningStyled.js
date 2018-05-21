'use strict';

import styled from 'styled-components';
import {
  colorWarning,
} from '../../../assets/styles/themeSelectors';

/** STYLES */
export const WarningStyled = styled.div`
  background-color: ${colorWarning};
  width: 100%;
`;

WarningStyled.displayName = 'WarningStyled';
