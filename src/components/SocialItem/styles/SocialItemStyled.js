import styled from 'styled-components';
import { baseModule } from '../../../styles/themeSelectors';

export const SocialItemStyled = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${baseModule(3)}px;
  cursor: pointer;
  flex-grow: 1;

  &,
  &:visited {
    text-decoration: none;
  }
`;

SocialItemStyled.displayName = 'SocialItemStyled';
