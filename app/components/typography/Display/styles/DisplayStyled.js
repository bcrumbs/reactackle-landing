/**
 * @author Ekaterina Marova
 */

'use strict';

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media, transition } from 'reactackle';
import { displayDefaults } from './theme';
import { baseModule } from '../../../../assets/styles/themeSelectors';

const propTypes = {
  /* Level can be any integer value from 1 to 4 */
  level: PropTypes.number,
  dashed: PropTypes.bool,
  colorScheme: PropTypes.oneOf([ 'dark', 'light' ]),
};

const defaultProps = {
  level: 1,
  dashed: false,
  colorScheme: 'dark',
};

/** PROP RECEIVERS */
const levelProp = ({ level, colorScheme }) => {
  const obj = displayDefaults.level[level].breakpoints;

  const scale = obj.map(item => css`
    ${media(item.breakpoint)`
      font-size: ${item.fontSize}px;
      font-weight: ${item.fontWeight};
      color: ${item.color[colorScheme]};
    `}
  `);
  
  return css`
    font-size: ${displayDefaults.level[level].fontSize}px;
    font-weight: ${displayDefaults.level[level].fontWeight};
    color: ${displayDefaults.level[level].color[colorScheme]};

    ${scale}  
  `;
};

const dashed = ({ dashed, colorScheme, level }) => dashed
  ? css`
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      display: block;
      height: 4px;
      width: 60px;
      background-color: ${displayDefaults.level[level].color[colorScheme]};
      left: 0;
      bottom: -${baseModule(1)}px;
    }
    
    ${media('65em')`
      &::after {      
        height: 8px;
        width: 100px;
      }
    `}
  `
  : '';

/** STYLES */
export const DisplayStyled = styled.h2`
  margin: 0;
  max-width: 24em;
  line-height: 1.5; 
  ${transition('font-size')}  
  ${levelProp}
  ${dashed}
  
  & + * {
    margin-top: ${baseModule(4)}px;
  }
`;

DisplayStyled.displayName = 'DisplayStyled';
DisplayStyled.propTypes = propTypes;
DisplayStyled.defaultProps = defaultProps;
