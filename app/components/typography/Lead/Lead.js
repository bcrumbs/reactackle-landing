'use strict';

import React from 'react';
import { LeadStyled } from './styles/LeadStyled';

export const Lead = props => (
  <LeadStyled>
    {props.children}
  </LeadStyled>
);

Lead.displayName = 'Lead';
