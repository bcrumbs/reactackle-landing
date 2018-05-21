'use strict';

import styled from 'styled-components';
import {
  colorBlue,
  colorPurple,
  colorWhite,
} from '../../../assets/styles/themeSelectors';

/** STYLES */
export const SectionWelcomeStyled = styled.section`
  background: linear-gradient(45deg, ${colorBlue}, ${colorPurple});
  color: ${colorWhite};
`;

SectionWelcomeStyled.displayName = 'SectionWelcomeStyled';
