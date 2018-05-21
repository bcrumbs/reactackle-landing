'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { SectionStyled } from './styles/SectionStyled';
import { SectionContentStyled } from './styles/SectionContentStyled';

const propTypes = {
  bgImage: PropTypes.string,
  id: PropTypes.string,
  boxed: PropTypes.bool,
  windowHeight: PropTypes.bool,
};
const defaultProps = {
  bgImage: '',
  id: '',
  boxed: false,
  windowHeight: false,
};

export const Section = props => (
  <SectionStyled
    bgImage={props.bgImage}
    id={props.id}
    windowHeight={props.windowHeight}
  >
    <SectionContentStyled boxed={props.boxed}>
      {props.children}
    </SectionContentStyled>
  </SectionStyled>
);

Section.displayName = 'Section';
Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export * from './SectionContent/SectionContent';
