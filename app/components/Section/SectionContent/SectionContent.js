'use strict';

import React from 'react';
import { SectionContentStyled } from './styles/SectionContentStyled';

export const SectionContent = props => (
  <SectionContentStyled>
    {props.children}
  </SectionContentStyled>
);

SectionContent.displayName = 'SectionContent';
