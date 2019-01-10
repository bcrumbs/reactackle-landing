import styled, { css } from 'styled-components';
import { contentWidth } from '../../../styles/themeSelectors';

/** PROP RECEIVERS */
const boxed = ({ boxed }) => boxed
  ? css`max-width: ${contentWidth}px;`
  : '';

/** STYLES */
export const SectionContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto;
  width: 100%;  
  ${boxed}
`;

SectionContentStyled.displayName = 'SectionContentStyled';
