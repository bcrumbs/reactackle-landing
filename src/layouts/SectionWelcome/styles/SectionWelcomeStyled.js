import styled from 'styled-components';
import {
  colorBlue,
  colorPurple,
  colorWhite,
} from '../../../styles/themeSelectors';

/** STYLES */
export const SectionWelcomeStyled = styled.section`
  background: linear-gradient(45deg, ${colorBlue}, ${colorPurple});
  color: ${colorWhite};
`;

SectionWelcomeStyled.displayName = 'SectionWelcomeStyled';
