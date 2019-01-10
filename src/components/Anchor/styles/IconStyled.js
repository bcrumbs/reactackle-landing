import styled from 'styled-components';

import {
  baseModule,
  radiusDefault,
  colorDarkBlue,
} from '../../../styles/themeSelectors';

const iconSize = 24;

/** STYLES */
export const IconStyled = styled.span`
  display: inline-block;
  margin-right: ${baseModule(1)}px;
  width: 16px;
  height: ${iconSize}px;
  line-height: ${iconSize}px;
  font-size: 14px;
`;

IconStyled.displayName = 'IconStyled';
