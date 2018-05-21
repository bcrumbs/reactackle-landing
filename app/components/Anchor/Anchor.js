'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Icon, iconPropType } from 'reactackle';
import { AnchorStyled } from './styles/AnchorStyled';
import { IconStyled } from './styles/IconStyled';

const propTypes = {
  icon: iconPropType,
  href: PropTypes.string,
  light: PropTypes.bool,
};
const defaultProps = {
  icon: {},
  href: '',
  light: false,
};

export const Anchor = props => (
  <AnchorStyled
    href={props.href}
    light={props.light}
  >
    {props.icon.name || props.icon.src
      ? (
        <IconStyled>
          <Icon
            {...props.icon}
            color="inherit"
            size="inherit"
          />
        </IconStyled>
      )
      : null
    }
    
    {props.children}
  </AnchorStyled>
);

Anchor.displayName = 'Anchor';
Anchor.propTypes = propTypes;
Anchor.defaultProps = defaultProps;
