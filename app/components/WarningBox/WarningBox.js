'use strict';

import React from 'react';
import { WarningStyled } from './styles/WarningStyled';
import { WarningContentStyled } from './styles/WarningContentStyled';

export const WarningBox = props => (
  <WarningStyled>
    <WarningContentStyled>
      {props.children}
    </WarningContentStyled>
  </WarningStyled>
);

WarningBox.displayName = 'WarningBox';
