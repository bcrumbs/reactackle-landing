'use strict';

import styled from 'styled-components';
import { media, transition, animations } from 'reactackle';
import sectionDefaults from './theme';

/** PROP RECEIVERS */
const bgProps = ({ bgImage }) => bgImage
  ?`
    background: url('${bgImage}');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  `
  : '';

const height = ({ windowHeight }) => windowHeight
  ? 'min-height: 100vh;'
  : '';

/** STYLES */
export const SectionStyled = styled.section`
  padding: ${sectionDefaults.breakpoints.base.padding}px;
  padding-bottom: ${sectionDefaults.breakpoints.base.paddingBottom}px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${animations.fadeIn} 1s ease-in;
  ${bgProps}
  ${height}
  ${transition('padding')}
  
  ${media('40em')`    
    padding: ${sectionDefaults.breakpoints.medium.padding}px;
    padding-bottom: ${sectionDefaults.breakpoints.medium.paddingBottom}px;
  `}
  
  ${media('60em')`    
    padding: ${sectionDefaults.breakpoints.large.padding}px;
    padding-bottom: ${sectionDefaults.breakpoints.large.paddingBottom}px;
  `}
`;

SectionStyled.displayName = 'SectionStyled';
