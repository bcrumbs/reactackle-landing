import React from 'react';
import PropTypes from 'prop-types';
import { TextGroupStyled } from './styles/TextGroupStyled';
import { HeaderStyled } from './styles/HeaderStyled';
import { ContentStyled } from './styles/ContentStyled';

const propTypes = {
  header: PropTypes.string,
};

const defaultProps = {
  header: '',
};

export const TextGroup = props => (
  <TextGroupStyled>
    <HeaderStyled>{props.header}</HeaderStyled>
    <ContentStyled>
      {props.children}
    </ContentStyled>
  </TextGroupStyled>
);

TextGroup.displayName = 'TextGroup';
TextGroup.propTypes = propTypes;
TextGroup.defaultProps = defaultProps;
