'use strict';

import styled from 'styled-components';

import {
  baseModule,
  radiusDefault,
  colorDarkBlue,
  fontFamilyMonospace,
} from '../../../assets/styles/themeSelectors';

/** STYLES */
export const CodeWrapperStyled = styled.div`
  background: ${colorDarkBlue};
  border-radius: ${radiusDefault}px;
  margin-bottom: ${baseModule(6)}px;
  padding: ${baseModule(1.5)}px ${baseModule(3)}px;
  color: white;
  display: inline-block;
  font-family: ${fontFamilyMonospace};
`;

CodeWrapperStyled.displayName = 'CodeWrapperStyled';
