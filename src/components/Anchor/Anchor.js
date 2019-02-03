import React from 'react';
import PropTypes from 'prop-types';
import { AnchorStyled } from './styles/AnchorStyled';
import { IconStyled } from './styles/IconStyled';

const propTypes = {
  href: PropTypes.string,
  light: PropTypes.bool,
};
const defaultProps = {
  href: '',
  light: false,
};

export const Anchor = props => (
  <AnchorStyled href={props.href} light={props.light}>
    {props.icon ? <IconStyled>{props.icon}</IconStyled> : null}
    {props.children}
  </AnchorStyled>
);

Anchor.displayName = 'Anchor';
Anchor.propTypes = propTypes;
Anchor.defaultProps = defaultProps;
