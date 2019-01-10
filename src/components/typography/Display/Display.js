/**
 * @author Ekaterina Marova
 */

import React from 'react';
import PropTypes from 'prop-types';
import { DisplayStyled } from './styles/DisplayStyled';

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

export const Display = props => (
  <DisplayStyled
    level={props.level}
    dashed={props.dashed}
    colorScheme={props.colorScheme}
  >
    {props.children}
  </DisplayStyled>
);

Display.displayName = 'Display';
Display.propTypes = propTypes;
Display.defaultProps = defaultProps;
