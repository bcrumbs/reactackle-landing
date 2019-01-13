import React from 'react';
import PropTypes from 'prop-types';
import { HeadingGroupStyled } from './styles/HeadingGroupStyled';

const propTypes = {
  align: PropTypes.string,
};

const defaultProps = {
  align: 'center',
};

export const HeadingGroup = props => (
  <HeadingGroupStyled align={props.align} >
    {props.children}
  </HeadingGroupStyled>
);

HeadingGroup.displayName = 'HeadingGroup';
HeadingGroup.propTypes = propTypes;
HeadingGroup.defaultProps = defaultProps;
