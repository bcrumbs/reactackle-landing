'use strict';

import styled from 'styled-components';
import { baseModule } from '../../../assets/styles/themeSelectors';

const alignMap = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

/** Prop receivers */
const align = ({ align }) => `
  text-align: ${align};
  align-items: ${alignMap[align]};
`;

/** STYLES */
export const HeadingGroupStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${baseModule(8)}px;
  margin-bottom: ${baseModule(6)}px;
  ${align}
`;

HeadingGroupStyled.displayName = 'HeadingGroupStyled';
