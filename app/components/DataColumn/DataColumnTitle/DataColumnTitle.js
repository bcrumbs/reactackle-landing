/**
 * @author Ekaterina Marova
 */

'use strict';

import React from 'react';
import { ColumnTitleStyled } from './styles/ColumnTitleStyled';

export const DataColumnTitle = props => (
  <ColumnTitleStyled>
    {props.children}
  </ColumnTitleStyled>
);

DataColumnTitle.displayName = 'DataColumnTitle';
